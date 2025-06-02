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
import home02 from './../public/assets/images/background/homePage01.png';

export default function MoviePage({ params }) {
  const scrollContainerRef = useRef(null)
  const [sortBy, setSortBy] = useState('newest')
  
  // This would normally come from an API based on the slug
  const movie = {
    title: "John Wick 4",
    year: "2023",
    duration: "2h 35 mins",
    rating: "TV-MA",
    score: "7.5",
    views: "4126",
    reviews: "1",
    genres: ["Action,", "Adventure"],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    cast: ["Renée Muffard"],
    crew: ["Aleya Nadeau", "Ricky Alarcon", "Sarah Neal"],
    poster: "/placeholder.svg?height=400&width=300",
    backdrop: "/placeholder.svg?height=800&width=1400",
  }

  const recommendedMovies = [
    { 
      title: "Love In The Night Sky", 
      image: "/assets/images/home/home13.png",
      year: "2023",
      genre: "Romance"
    },
    { 
      title: "Spacex", 
      image: "/assets/images/home/home14.png",
      year: "2024",
      genre: "Sci-Fi"
    },
    { 
      title: "Spider Man Memo", 
      image: "/assets/images/home/home15.png",
      year: "2023",
      genre: "Action"
    },
    { 
      title: "City Hunter", 
      image: "/assets/images/home/home16.png",
      year: "2024",
      genre: "Action"
    },
    { 
      title: "The Sleeping Angel", 
      image: "/assets/images/home/home17.png",
      year: "2023",
      genre: "Drama"
    },
    { 
      title: "The Past", 
      image: "/assets/images/home/home18.png",
      year: "2024",
      genre: "Drama"
    }
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
      {/* Hero Section */}
      <section className="relative h-[65vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
              src={home02 || "/placeholder.svg"}
              alt="Movie and TV show posters collage"
              fill
              className="object-cover"
            />
          <div className="absolute inset-0 bg-gradient-to-r from-[#132036] to-transparent" />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-4 mb-30">
            <span className="text-[#ffffff] font-bold text-3xl md:text-4xl lg:text-4xl uppercase tracking-wider">
              Genre
            </span>
            <span className="text-[#ffffff] font-bold text-3xl md:text-4xl lg:text-4xl">/</span>
            <span className="text-[#ffffff] font-bold text-3xl md:text-4xl lg:text-4xl uppercase tracking-wider">
              News
            </span>
          </div>
        </div>
      </section>

      {/* Recommended Section */}
      <div className="container mx-auto px-4 md:px-8 lg:px-4 py-8">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <h3 className="text-2xl font-bold">Showing all movies</h3>
            <span className="text-gray-400">({recommendedMovies.length} movies)</span>
          </div>
          
          <div className="flex items-center">
            <select 
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-transparent text-gray-300 text-sm border border-gray-700 px-3 py-1.5 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#1D50A3] cursor-pointer hover:border-gray-600 transition-colors"
            >
              <option value="newest" className="bg-[#191C33]">Sort by: Newest</option>
              <option value="oldest" className="bg-[#191C33]">Sort by: Oldest</option>
              <option value="az" className="bg-[#191C33]">Sort by: A-Z</option>
              <option value="za" className="bg-[#191C33]">Sort by: Z-A</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
          {recommendedMovies.map((movie, index) => (
            <div key={index} className="cursor-pointer group">
              <div className="relative aspect-[2/3] rounded-lg overflow-hidden mb-2">
                <Image
                  src={movie.image || "/placeholder.svg"}
                  alt={movie.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="space-y-1">
                <p className="text-sm font-medium text-white group-hover:text-[#1D50A3] transition-colors">
                  {movie.title}
                </p>
                <div className="flex items-center text-xs text-gray-400 space-x-2">
                  <span>{movie.year}</span>
                  <span>•</span>
                  <span>{movie.genre}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

