"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Play, Bookmark, Star, ChevronLeft, ChevronRight, Clock } from "lucide-react"
import series01 from './../public/assets/images/series/series01.png';


export default function TVSeriesPage() {
  const [selectedSeason, setSelectedSeason] = useState(1)

  const seriesData = {
    title: "Falling Water",
    category: "ACTION, ADVENTURE",
    rating: "7.5",
    year: "2023",
    seasons: "2 Seasons",
    contentRating: "TV-MA",
    description:
      "Enjoy exclusive Amazon Originals as well as popular movies and TV shows for USD 12.99/mon. Watch now, cancel anytime.",
    backdrop: "/placeholder.svg?height=800&width=1400",
  }

  const episodes = [
    {
      id: 1,
      title: "Language of Love",
      episode: "S01-E01",
      duration: "1 hr 23 mins",
      description: "Enjoy exclusive Amazon Originals as well as popular...",
      thumbnail: "/assets/images/series/episode01.png",
    },
    {
      id: 2,
      title: "Pilot",
      episode: "S01-E02",
      duration: "1 hr 22 mins",
      description: "Enjoy exclusive Amazon Originals as well as popular...",
      thumbnail: "/assets/images/series/episode02.png",
    },
    {
      id: 3,
      title: "Decision, Decision",
      episode: "S01-E03",
      duration: "1 hr 24 mins",
      description: "Enjoy exclusive Amazon Originals as well as popular...",
      thumbnail: "/assets/images/series/episode03.png",
    },
    {
      id: 4,
      title: "Fallback",
      episode: "S01-E04",
      duration: "1 hr 22 mins",
      description: "Enjoy exclusive Amazon Originals as well as popular...",
      thumbnail: "/assets/images/series/episode04.png",
    },
    {
      id: 5,
      title: "Family Ties",
      episode: "S01-E05",
      duration: "1 hr 25 mins",
      description: "Enjoy exclusive Amazon Originals as well as popular...",
      thumbnail: "/assets/images/series/episode05.png",
    },
    {
      id: 6,
      title: "Moments of Joy",
      episode: "S01-E06",
      duration: "1 hr 20 mins",
      description: "Enjoy exclusive Amazon Originals as well as popular...",
      thumbnail: "/assets/images/series/episode06.png",
    },
  ]

  const scrollLeft = () => {
    const container = document.getElementById("episodes-container")
    if (container) {
      container.scrollBy({ left: -300, behavior: "smooth" })
    }
  }

  const scrollRight = () => {
    const container = document.getElementById("episodes-container")
    if (container) {
      container.scrollBy({ left: 300, behavior: "smooth" })
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#020b1f] via-[#0a2151] to-[#020b1f] text-white">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center">
        <div className="absolute inset-0">
          <Image
            src={series01}
            alt={seriesData.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#132036] to-transparent" />
        </div>

        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-2xl">
            <div className="text-[#1D50A3] font-semibold text-sm mb-2 uppercase tracking-wider">{seriesData.category}</div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">{seriesData.title}</h1>
            <div className="flex items-center space-x-4 mb-4 text-sm">
              <div className="flex items-center">
                <Star className="h-4 w-4 text-[#1D50A3] fill-[#1D50A3] mr-1" />
                <span>{seriesData.rating}</span>
              </div>
              <span>{seriesData.year}</span>
              <span>{seriesData.seasons}</span>
              <span className="bg-red-600 px-2 py-1 rounded">{seriesData.contentRating}</span>
            </div>
            <p className="text-gray-300 mb-6">{seriesData.description}</p>
            <div className="flex space-x-4">
              <button className="bg-[#1D50A3] text-white px-6 py-3 rounded-lg font-semibold flex items-center space-x-2 hover:bg-blue-900 transition-colors ">
                <span>Play Now</span>
                <Play className="h-5 w-5 fill-current" />
              </button>
              <button className="bg-gray-600/80 text-white px-6 py-3 rounded-lg font-semibold flex items-center space-x-2 hover:bg-gray-600 transition-colors">
                <Bookmark className="h-5 w-5" />
                <span>Watch Later</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Content Navigation */}
      <section className="py-8 px-4 border-b border-gray-700/50">
        <div className="container mx-auto">
          <div className="flex justify-center space-x-8">
            <button className="text-white border-b-2 border-blue-500 pb-2 font-semibold">Today</button>
            <button className="text-gray-400 hover:text-white pb-2 transition-colors font-semibold">Extras</button>
            <button className="text-gray-400 hover:text-white pb-2 transition-colors font-semibold">Detail</button>
            <button className="text-gray-400 hover:text-white pb-2 transition-colors font-semibold">Reviews</button>
          </div>
        </div>
      </section>

      {/* Season Selector */}
      <section className="py-6 px-4">
        <div className="container mx-auto">
          <select
            value={selectedSeason}
            onChange={(e) => setSelectedSeason(Number(e.target.value))}
            className="bg-[#323232] text-white border border-gray-600 rounded-md px-5 py-3 focus:outline-none focus:border-gray-500 "
          >
            <option value={1}>Season 1</option>
            <option value={2}>Season 2</option>
          </select>
        </div>
      </section>

      {/* Episodes Section */}
      <section className="py-8 px-4">
        <div className="container mx-auto">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Episodes</h2>
            <div className="flex space-x-2">
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
          </div>

          <div id="episodes-container" className="flex space-x-4 overflow-x-auto pb-4 scrollbar-hide">
            {episodes.map((episode) => (
              <EpisodeCard key={episode.id} episode={episode} />
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}

function EpisodeCard({ episode }) {
  return (
    <div className="flex-shrink-0 w-80 group cursor-pointer">
      <div className="relative overflow-hidden rounded-lg mb-3">
        <Image
          src={episode.thumbnail || "/placeholder.svg"}
          alt={episode.title}
          width={320}
          height={180}
          className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute bottom-2 left-2 bg-black/70 text-white px-2 py-1 rounded text-xs flex items-center">
          <Clock className="h-3 w-3 mr-1" />
          {episode.duration}
        </div>
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
          <Play className="h-12 w-12 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      </div>
      <div className="space-y-1">
        <h3 className="font-semibold text-sm group-hover:text-blue-400 transition-colors">{episode.episode}</h3>
        <h4 className="font-medium group-hover:text-blue-400 transition-colors">{episode.title}</h4>
        <p className="text-gray-400 text-sm leading-relaxed line-clamp-2">{episode.description}</p>
      </div>
    </div>
  )
}


