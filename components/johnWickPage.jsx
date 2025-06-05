"use client"
import Image from "next/image"
import Link from "next/link"
import { Play, Bookmark, ThumbsUp, Share, Star, Plus, BookmarkIcon, ChevronLeft, ChevronRight } from "lucide-react"
import { useRef, useState } from "react"
import movie01 from './../public/assets/images/movies/loveinsky.png';
import home01 from './../public/assets/images/landing/home01.png';
import movie02 from './../public/assets/images/movies/johnwick01.png';
import movie03 from './../public/assets/images/movies/johnwick02.png';
import review01 from './../public/assets/images/review/review01.png';
import comingsoonGif from './../public/assets/images/movies/coming-soon.gif';
import MuxPlayer from './MuxPlayer';

export default function MoviePage({ params }) {
  const scrollContainerRef = useRef(null);
  const [isLoading, setIsLoading] = useState(false);
  const [playbackId, setPlaybackId] = useState(null);
  const [error, setError] = useState(null);

  // This would normally come from an API based on the slug
  const movie = {
    title: "John Wick: Chapter 4",
    year: "2023",
    duration: "2h 49min",
    rating: "R",
    score: "7.8",
    views: "4126",
    reviews: "1",
    genres: ["Action", "Crime", "Thriller"],
    description: "John Wick uncovers a path to defeating The High Table. But before he can earn his freedom, Wick must face off against a new enemy with powerful alliances across the globe and forces that turn old friends into foes.",
    driveUrl: "https://drive.google.com/uc?export=download&id=1PwDjgF5q-TSrBxpxI_cH_4rPzwCLGufV",
  };

  const loadVideo = async () => {
    try {
      setIsLoading(true);
      setError(null);

      console.log('Attempting to upload video to Mux...');
      const response = await fetch('/api/mux/upload', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ driveUrl: movie.driveUrl }),
      });

      const data = await response.json();
      console.log('Mux API Response:', data);

      if (!data.success) {
        throw new Error(
          `Failed to load video: ${data.error}${data.details ? `\nDetails: ${data.details}` : ''}`
        );
      }

      setPlaybackId(data.playbackId);
    } catch (err) {
      const errorMessage = err.message || 'An unknown error occurred';
      setError(errorMessage);
      console.error('Error loading video:', {
        message: errorMessage,
        originalError: err,
        stack: err.stack
      });
    } finally {
      setIsLoading(false);
    }
  };

  const recommendedMovies = [
    { title: "Love In The Night Sky", image: "/assets/images/home/home13.png" },
    { title: "Spacex", image: "/assets/images/home/home14.png" },
    { title: "Spider Man Memo", image: "/assets/images/home/home15.png" },
    { title: "City Hunter", image: "/assets/images/home/home16.png" },
    { title: "The Sleeping Angel", image: "/assets/images/home/home17.png"},
    { title: "The Past", image: "/assets/images/home/home18.png" },
    { title: "Best Friend", image:"/assets/images/home/home19.png" },
    { title: "Love In The Night Sky", image: "/assets/images/home/home13.png" },
    { title: "Spacex", image: "/assets/images/home/home14.png" },
  ]

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -200,
        behavior: "smooth",
      })
    }
  }

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 200,
        behavior: "smooth",
      })
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#020b1f] via-[#0a2151] to-[#020b1f] text-white">
      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="relative rounded-lg overflow-hidden mb-8">
          {playbackId ? (
            <MuxPlayer playbackId={playbackId} title={movie.title} />
          ) : (
            <div className="relative aspect-video">
              <Image 
                src={movie02} 
                alt={movie.title} 
                fill 
                className="object-cover rounded-lg"
                priority 
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#020b1f] via-transparent to-[#020b1f] opacity-75" />
              <div className="absolute inset-0 flex items-center justify-center">
                <button
                  onClick={loadVideo}
                  disabled={isLoading}
                  className="bg-[#1D50A3] text-white px-6 py-3 rounded-lg font-semibold flex items-center space-x-2 hover:bg-blue-900 transition-colors disabled:opacity-50"
                >
                  {isLoading ? (
                    <span>Loading...</span>
                  ) : (
                    <>
                      <Play className="h-5 w-5" />
                      <span>Play Movie</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          )}
        </section>

        {error && (
          <div className="bg-red-500/10 border border-red-500 text-red-500 p-4 rounded-lg mb-8">
            {error}
          </div>
        )}

        {/* Movie Info */}
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">{movie.title}</h1>
          <div className="flex items-center space-x-4 mb-4 text-sm">
            <span className="bg-red-600 px-2 py-1 rounded">{movie.rating}</span>
            <span>{movie.year}</span>
            <span>{movie.duration}</span>
            <div className="flex items-center">
              <Star className="h-4 w-4 text-yellow-500 mr-1" />
              <span>{movie.score}</span>
            </div>
          </div>
          <p className="text-lg text-gray-300 mb-6">{movie.description}</p>
          <div className="flex space-x-4">
            <button className="bg-gray-600/80 text-white px-8 py-3 rounded-lg font-semibold flex items-center space-x-2 hover:bg-gray-600 transition-colors">
              <Bookmark className="h-5 w-5" />
              <span>Add to Watchlist</span>
            </button>
            <button className="bg-gray-600/80 text-white px-8 py-3 rounded-lg font-semibold flex items-center space-x-2 hover:bg-gray-600 transition-colors">
              <Share className="h-5 w-5" />
              <span>Share</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

