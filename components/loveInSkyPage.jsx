"use client"
import Image from "next/image"
import Link from "next/link"
import { Play, Bookmark, ThumbsUp, Share2, Star, Plus } from "lucide-react"
import movie01 from './../public/assets/images/movies/loveinsky.png';
import home01 from './../public/assets/images/landing/home01.png';

export default function MoviePage({ params }) {
  // This would normally come from an API based on the slug
  const movie = {
    title: "Love In The Sky",
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

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#020b1f] via-[#0a2151] to-[#020b1f] text-white">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center">
        <div className="absolute inset-0">
          <Image src={movie01} alt={movie.title} fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-r from-[#132036] to-transparent" />
        </div>

        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-2xl">
            <div className="text-[#1D50A3] font-semibold text-sm mb-2 uppercase tracking-wider flex flex-wrap gap-2">
              {movie.genres.slice(0, 2).map((genre) => (
                <span key={genre}>{genre}</span>
              ))}
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">{movie.title}</h1>
            <div className="flex items-center space-x-4 mb-4 text-sm">
              <div className="flex items-center">
                <Star className="h-4 w-4 text-[#1D50A3] fill-[#1D50A3] mr-1" />
                <span>{movie.score}</span>
              </div>
              <span>{movie.year}</span>
              <span>{movie.duration}</span>
              <span className="bg-red-600 px-2 py-1 rounded">{movie.rating}</span>
            </div>
            <p className="text-gray-300 mb-6">
              Enjoy exclusive Amazon Originals as well as popular movies and TV shows for USD 12.99/mon. Watch now,
              cancel anytime.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-[#1D50A3] text-white px-6 py-3 rounded-lg font-semibold flex items-center space-x-2 hover:bg-blue-900 transition-colors ">
                <span>Play Now</span>
                <Play className="h-5 w-5 fill-current" />
              </button>
              <button className="bg-gray-700/80 hover:bg-gray-700 text-white px-6 py-3 rounded-lg font-medium flex items-center space-x-2 transition-colors">
                <Bookmark className="h-5 w-5" />
                <span>Watch Later</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Movie Details */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Left Column - Poster */}
            <div className="md:w-1/4">
              <div className="relative rounded-lg overflow-hidden">
                <Image
                  src={home01}
                  alt={movie.title}
                  width={300}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
              <div className="mt-4 flex gap-2">
                <button className="flex-1 bg-[#1A1D33] hover:bg-gray-700 text-white py-2 rounded flex items-center justify-center gap-2 transition-colors">
                  <ThumbsUp className="h-4 w-4" />
                  <span>1 Like</span>
                </button>
                <button className="flex-1 bg-[#1A1D33]  hover:bg-gray-700 text-white py-2 rounded flex items-center justify-center gap-2 transition-colors">
                  <Share2 className="h-4 w-4" />
                  <span>Share</span>
                </button>
                <button className="flex-1 bg-[#1A1D33]  hover:bg-gray-700 text-white py-2 rounded flex items-center justify-center gap-2 transition-colors">
                  <Plus className="h-4 w-4" />
                  <span>Watchlist</span>
                </button>
              </div>
            </div>

            {/* Right Column - Details */}
            <div className="md:w-3/4">
              <h2 className="text-3xl font-bold mb-4">{movie.title}</h2>
              <div className="flex items-center space-x-4 mb-4 text-sm">
                <div className="flex items-center">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="h-4 w-4 text-[#1D50A3] fill-[#1D50A3]" />
                    ))}
                  </div>
                  <span className="ml-2">{movie.score}</span>
                </div>
                <span>•</span>
                <span>{movie.views} Views</span>
                <span>•</span>
                <span>{movie.reviews} review</span>
              </div>
              <div className="mb-4">
                <div className="flex flex-wrap gap-2 mb-2">
                  <span className="text-sm">{movie.year}</span>
                  <span className="text-sm">•</span>
                  <span className="text-sm">{movie.duration}</span>
                  <span className="text-sm">•</span>
                  <span className="text-sm bg-red-600 px-2 py-0.5 rounded">{movie.rating}</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {movie.genres.map((genre) => (
                    <span key={genre} className="text-sm text-gray-400">
                      {genre}
                    </span>
                  ))}
                </div>
              </div>
              <div className="mb-6">
                <p className="text-gray-300 leading-relaxed">{movie.description}</p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <h3 className="text-lg font-semibold">Cast:</h3>
                  <p className="text-gray-300">{movie.cast.join(", ")}</p>
                </div>
                <div className="flex items-center gap-2">
                  <h3 className="text-lg font-semibold">Crew:</h3>
                  <p className="text-gray-300">{movie.crew.join(", ")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

     
    </div>
  )
}

function MovieCard({ image, title, href }) {
  return (
    <Link href={href} className="group">
      <div className="relative overflow-hidden rounded-lg mb-2">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          width={200}
          height={700}
          className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <h3 className="text-sm font-medium group-hover:text-blue-400 transition-colors">{title}</h3>
    </Link>
  )
}
