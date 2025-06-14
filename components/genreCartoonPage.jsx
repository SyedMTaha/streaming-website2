"use client"
import Image from "next/image"
import Link from "next/link"
import { Play, Bookmark, ThumbsUp, Share, Star, Plus, BookmarkIcon, ChevronLeft, ChevronRight } from "lucide-react"
import { useRef, useState } from "react"
import home02 from './../public/assets/images/background/homePage05.jpg';

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
      title: "Atom Ant", 
      image: "/assets/images/cartoons/atomAnt.jpg",
    },
    { 
      title: "Highlander", 
      image: "/assets/images/cartoons/Highlander.jpeg",
      
    },
    { 
      title: "Hong Kong Phoey", 
      image: "/assets/images/cartoons/Hong-kong-phoey.jpg",
    },
    { 
      title: "Jeannie", 
      image: "/assets/images/cartoons/Jeannie.jpg",
    },
    { 
      title: "Jetsons", 
      image: "/assets/images/cartoons/Jetsons.jpg",
    },
    { 
      title: "Lippy the lion hardy har har", 
      image: "/assets/images/cartoons/Lippy.jpg",
    },
    { 
      title: "Precious Pupp", 
      image: "/assets/images/cartoons/Precious.jpeg",
    },
    { 
      title: "Quick draw mcgraw", 
      image: "/assets/images/cartoons/Quick.jpeg",
    },
    { 
      title: "Sealab", 
      image: "/assets/images/cartoons/Sealab.jpg",
    },
    { 
      title: "Superman", 
      image: "/assets/images/cartoons/Superman.jpg",
    },
    { 
      title: "The Great Grape Ape Show", 
      image: "/assets/images/cartoons/greatgrape.jpg",
    },
    { 
      title: "The New Fantastic Four 1978", 
      image: "/assets/images/cartoons/fantastic.jpg",
    },
    { 
      title: "Tom and Jerry Comdey Show", 
      image: "/assets/images/cartoons/tom.jpeg",
    },
    { 
      title: "Top Cat", 
      image: "/assets/images/cartoons/top.jpg",
    },
    { 
      title: "Yogi Bear", 
      image: "/assets/images/cartoons/yogi.jpg",
    },
    { 
      title: "Young Samsons Goliath", 
      image: "/assets/images/cartoons/samsons.jpg",
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
              Cartoon
            </span>
          </div>
        </div>
      </section>

      {/* Recommended Section */}
      <div className="container mx-auto px-4 md:px-8 lg:px-4 py-8">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <h3 className="text-2xl font-bold">Showing all Cartoons</h3>
            <span className="text-gray-400">({recommendedMovies.length} cartoons)</span>
          </div>
          
          <div className="flex space-x-2 ml-100">
            <button
              onClick={scrollLeft}
              className="bg-gray-700/50 hover:bg-gray-700 text-white p-2 rounded-full transition-colors"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={scrollRight}
              className="bg-gray-700/50 hover:bg-gray-700 text-white p-2 rounded-full transition-colors"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
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

        <div ref={scrollContainerRef} className="flex space-x-4 overflow-x-auto pb-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {recommendedMovies.map((movie, index) => (
            <div key={index} className="flex-shrink-0 w-48 cursor-pointer group">
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
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

