"use client"
import Image from "next/image"
import Link from "next/link"
import { Play, Bookmark, ThumbsUp, Share, Star, Plus, BookmarkIcon, ChevronLeft, ChevronRight, Check, Copy } from "lucide-react"
import { useRef, useState, useEffect } from "react"
import { auth } from '../../../firebase';
import { getFirestore, doc, setDoc, deleteDoc, getDoc } from 'firebase/firestore';
import Bad from '../../../public/assets/images/movies/action/landscape/Bad & the beautiful 1952.jpg';

export default function MoviePage({ params }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const scrollContainerRef = useRef(null);
  const [isLoading, setIsLoading] = useState(false);
  const [playbackId, setPlaybackId] = useState(null);
  const [error, setError] = useState(null);
  const [isInWishlist, setIsInWishlist] = useState(false);
  const [wishlistLoading, setWishlistLoading] = useState(false);
  const [showShareSuccess, setShowShareSuccess] = useState(false);
  const [shareLoading, setShareLoading] = useState(false);

  // This would normally come from an API based on the slug
  const movie = {
    id: "Bad & The Beautiful", // Add unique ID for the movie
    title: "Bad & The Beautiful",
    year: "1952",
    duration: "1h 58min",
    rating: "R",
    score: "7.9",
    views: "4126",
    reviews: "1",
    genres: ["Action", "Crime", "Thriller"],
    description: "A powerful Hollywood producer uses and discards the people around him to build his career. As the film unfolds through three different viewpoints, it paints a haunting picture of ambition and manipulation in the movie business.",
    
  };

  // Check if movie is in wishlist on component mount
  useEffect(() => {
    checkWishlistStatus();
  }, []);

  const checkWishlistStatus = async () => {
    const user = auth.currentUser;
    if (!user) return;

    const db = getFirestore();
    const wishlistRef = doc(db, 'wishlists', user.uid, 'movies', movie.id);
    
    try {
      const docSnap = await getDoc(wishlistRef);
      setIsInWishlist(docSnap.exists());
    } catch (error) {
      console.error('Error checking wishlist status:', error);
    }
  };

  const toggleWishlist = async () => {
    const user = auth.currentUser;
    if (!user) {
      // Redirect to login or show login prompt
      return;
    }

    setWishlistLoading(true);
    const db = getFirestore();
    const wishlistRef = doc(db, 'wishlists', user.uid, 'movies', movie.id);

    try {
      if (isInWishlist) {
        await deleteDoc(wishlistRef);
        setIsInWishlist(false);
      } else {
        await setDoc(wishlistRef, {
          id: movie.id,
          title: movie.title,
          thumbnail: movie.thumbnail,
          year: movie.year,
          addedAt: new Date().toISOString()
        });
        setIsInWishlist(true);
      }
    } catch (error) {
      console.error('Error updating wishlist:', error);
    } finally {
      setWishlistLoading(false);
    }
  };

  const handleShare = async () => {
    setShareLoading(true);
    try {
      // Generate the shareable URL
      const shareableUrl = `${window.location.origin}/movies/${movie.id}`;
      
      // Copy to clipboard
      await navigator.clipboard.writeText(shareableUrl);
      
      // Show success feedback
      setShowShareSuccess(true);
      setTimeout(() => {
        setShowShareSuccess(false);
      }, 2000);
    } catch (error) {
      console.error('Error sharing:', error);
    } finally {
      setShareLoading(false);
    }
  };

  return (
    <div className="min-h-screen text-white bg-gradient-to-t from-[#020d1f] to-[#012256]">
      <section className="max-w-7xl mx-auto py-8 px-4 flex flex-col lg:flex-row gap-8">
        {/* Left Column: Movie Details */}
        <div className="lg:w-1/3 bg-[#012256] rounded-lg p-6 shadow-xl py-4 backdrop-blur-sm flex-shrink-0 h-fit">
          <div className="relative mb-6 rounded-lg overflow-hidden">
            <Image
              src={Bad || "/placeholder.png"} 
              alt={`${movie.title} thumbnail`}
              width={600}
              height={338}
              className="w-full h-auto object-cover aspect-video"
            />
          </div>
          <h1 className="text-4xl font-bold mb-2">{movie.title}</h1>
          <div className="flex items-center space-x-4 mb-4 text-sm">
            <span className="bg-red-600 px-2 py-1 rounded">{movie.rating}</span>
            <span>{movie.year}</span>
            <span>{movie.duration}</span>
            <div className="flex items-center">
              <Star className="h-4 w-4 text-yellow-500 mr-1" />
              <span>{movie.score}</span>
            </div>
          </div>
          <p className="text-md text-gray-300 mb-6">{movie.description}</p>
          
          <div className="text-sm text-gray-400 mb-6">
            <p className="mb-1"><span className="font-semibold text-white">Cast:</span> Some Actor, Another Actor</p>
            <p><span className="font-semibold text-white">Crew:</span> Director Name, Producer Name</p>
          </div>

          <div className="flex space-x-4">
            <button 
              onClick={toggleWishlist}
              disabled={wishlistLoading}
              className={`${
                isInWishlist ? 'bg-[#1D50A3]' : 'bg-gray-600/80'
              } text-white px-4 py-3 rounded-lg font-semibold flex items-center space-x-2 hover:bg-blue-900 transition-colors relative overflow-hidden group`}
            >
              <Bookmark className={`h-5 w-5 ${isInWishlist ? 'fill-current' : ''}`} />
              <span>{isInWishlist ? 'Added to Wishlist' : 'Add to Wishlist'}</span>
            </button>
            <button 
              onClick={handleShare}
              disabled={shareLoading}
              className="bg-gray-600/80 text-white px-4 py-3 rounded-lg font-semibold flex items-center space-x-2 hover:bg-blue-900 transition-colors relative overflow-hidden group"
            >
              {showShareSuccess ? (
                <>
                  <Check className="h-5 w-5 text-green-400" />
                  <span>Copied!</span>
                </>
              ) : (
                <>
                  <Share className="h-5 w-5 group-hover:scale-110 transition-transform" />
                  <span>Share</span>
                </>
              )}
              {showShareSuccess && (
                <div className="absolute inset-0 bg-[#1D50A3] animate-pulse" />
              )}
            </button>
          </div>
        </div>

        {/* Right Column: Media Player */}
        <div className="lg:w-2/3 relative aspect-video rounded-lg overflow-hidden">
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
              src="https://player.vimeo.com/video/1092936264?h=6e7d41ff20&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
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
              src={movie.thumbnail || "/placeholder.png"}
              alt={`${movie.title} thumbnail`}
              className="w-full h-full object-cover"
            />
          )}
        </div>
      </section>
    </div>
  );
};


  


