"use client"
import Image from "next/image"
import Link from "next/link"
import { Play, Bookmark, ThumbsUp, Share, Star, Plus, BookmarkIcon, ChevronLeft, ChevronRight } from "lucide-react"
import { useRef, useState } from "react"
import movie01 from './../../public/assets/images/movies/loveinsky.png';
import home01 from './../../public/assets/images/landing/home01.png';
import movie02 from './../../public/assets/images/movies/johnwick01.png';
import movie03 from './../../public/assets/images/movies/johnwick02.png';
import review01 from './../../public/assets/images/review/review01.png';
import comingsoonGif from './../../public/assets/images/movies/coming-soon.gif';
//import MuxPlayer from './MuxPlayer';
import Vimeo from '@u-wave/react-vimeo';


export default function MoviePage({ params }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const scrollContainerRef = useRef(null);
  const [isLoading, setIsLoading] = useState(false);
  const [playbackId, setPlaybackId] = useState(null);
  const [error, setError] = useState(null);

  // This would normally come from an API based on the slug
  const movie = {
    title: "Atomic Submarine",
    year: "1959",
    duration: "1h 11min",
    rating: "R",
    score: "6.0",
    views: "4126",
    reviews: "1",
    genres: ["Action", "Crime", "Thriller"],
    description: "When ships begin mysteriously disappearing in the Arctic, the crew of the atomic-powered submarine Tiger Shark is sent to investigate. What they discover is a terrifying alien spacecraft beneath the sea, threatening Earth's survival. A tense blend of science fiction and Cold War suspense, The Atomic Submarine dives deep into danger to confront an otherworldly menace.",
    driveUrl: "https://drive.google.com/uc?export=download&id=1PwDjgF5q-TSrBxpxI_cH_4rPzwCLGufV",
  };

 

  

  return (
    <div className="min-h-screen bg-black text-white">
      <section>
        <div className="relative max-w-4xl mx-auto h-[85vh] rounded-lg overflow-hidden mb-8">
          {!isPlaying && (
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 z-10">
              <button
                onClick={() => setIsPlaying(true)}
                className="bg-[#1D50A3] text-white px-6 py-3 rounded-lg font-semibold flex items-center space-x-2 hover:bg-blue-900 transition-colors"
              >
                ▶ Play
              </button>
            </div>
          )}
          {isPlaying && (
            <iframe
              src="https://player.vimeo.com/video/1091137260?autoplay=1&title=0&byline=0&portrait=0"
              width="100%"
              height="100%"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          )}
          {!isPlaying && (
            <img
              src="/path-to-your-thumbnail.jpg"
              alt="Video thumbnail"
              className="w-full h-full object-cover"
            />
          )}
        </div>
      </section>

      <section> 
        <div className="max-w-4xl mx-auto mt-5">
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
      </section>
    </div>
  );
};


  


