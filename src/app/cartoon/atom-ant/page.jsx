"use client"

import Image from "next/image"
import Link from "next/link"
import { Play, Bookmark, Star, ChevronLeft, ChevronRight, Clock } from "lucide-react"
import NavbarTwo from "../../../../components/navbarSearch"
import Footer from "../../../../components/footer"

export default function AtomAntPage() {
  const seriesData = {
    title: "Atom Ant",
    category: "ANIMATION, COMEDY",
    rating: "8.2",
    year: "1965",
    seasons: "2 Seasons",
    contentRating: "TV-G",
    description:
      "Atom Ant is a tiny superhero ant with superhuman strength and the ability to fly. He fights crime and helps those in need while maintaining his secret identity as a regular ant.",
    backdrop: "/assets/images/cartoons/atomAnt.jpg",
  }

  const episodes = [
    { id: 17,
      title: "Bully for Atom Ant",
      episode: "S01-E17",
      duration: "6 mins",
      description: "Atom Ant must defend the ant colony from an invasion of termites.",
      thumbnail: "/assets/images/cartoons/atomAnt.jpg",
      path: "/cartoon/atom-ant/episode17"
    },
    {
      id: 18,
      title: "Termighty Mean",
      episode: "S01-E18",
      duration: "6 mins",
      description: "Atom Ant must defend the ant colony from an invasion of termites.",
      thumbnail: "/assets/images/cartoons/atomAnt.jpg",
      path: "/cartoon/atom-ant/episode18"
    },
    {

      id: 1,
      title: "Up and Atom",
      episode: "S01-E01",
      duration: "6 mins",
      description: "Atom Ant's first adventure as he helps a lost baby bird find its way home.",
      thumbnail: "/assets/images/cartoons/atomAnt.jpg",
      path: "/cartoon/atom-ant/episode1"
    },
    {
      id: 2,
      title: "Ants in the Pantry",
      episode: "S01-E02",
      duration: "6 mins",
      description: "Atom Ant must stop a gang of food thieves from stealing from the local grocery store.",
      thumbnail: "/assets/images/cartoons/atomAnt.jpg",
      path: "/cartoon/atom-ant/episode2"
    },
    {
      id: 3,
      title: "The Big Freeze",
      episode: "S01-E03",
      duration: "6 mins",
      description: "Atom Ant helps prevent a catastrophic ice storm from destroying the ant colony.",
      thumbnail: "/assets/images/cartoons/atomAnt.jpg",
      path: "/cartoon/atom-ant/episode3"
    },
    {
      id: 4,
      title: "Ants in Space",
      episode: "S01-E04",
      duration: "6 mins",
      description: "Atom Ant must rescue a group of ants who accidentally launched themselves into space.",
      thumbnail: "/assets/images/cartoons/atomAnt.jpg",
      path: "/cartoon/atom-ant/episode4"
    },
    {
      id: 5,
      title: "The Great Ant Race",
      episode: "S01-E05",
      duration: "6 mins",
      description: "Atom Ant participates in the annual ant race while trying to stop a cheating competitor.",
      thumbnail: "/assets/images/cartoons/atomAnt.jpg",
      path: "/cartoon/atom-ant/episode5"
    },
    {
      id: 6,
      title: "Ants vs. Termites",
      episode: "S01-E06",
      duration: "6 mins",
      description: "Atom Ant must defend the ant colony from an invasion of termites.",
      thumbnail: "/assets/images/cartoons/atomAnt.jpg",
      path: "/cartoon/atom-ant/episode6"
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
      <NavbarTwo />
      
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center">
        <div className="absolute inset-0">
          <Image
            src={seriesData.backdrop}
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
              <Link href="/cartoon/atom-ant/episode1" className="bg-[#1D50A3] text-white px-6 py-3 rounded-lg font-semibold flex items-center space-x-2 hover:bg-blue-900 transition-colors">
                <span>Play Now</span>
                <Play className="h-5 w-5 fill-current" />
              </Link>
              <button className="bg-gray-600/80 text-white px-6 py-3 rounded-lg font-semibold flex items-center space-x-2 hover:bg-gray-600 transition-colors">
                <Bookmark className="h-5 w-5" />
                <span>Watch Later</span>
              </button>
            </div>
          </div>
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
              <Link href={episode.path} key={episode.id}>
                <div className="flex-shrink-0 w-80 group cursor-pointer">
                  <div className="relative overflow-hidden rounded-lg mb-3">
                    <Image
                      src={episode.thumbnail || "/placeholder.svg"}
                      alt={episode.title}
                      width={320}
                      height={180}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-white font-medium">{episode.episode}</span>
                        <div className="flex items-center text-gray-300">
                          <Clock className="h-4 w-4 mr-1" />
                          <span>{episode.duration}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold mb-1 group-hover:text-blue-400 transition-colors">
                    {episode.title}
                  </h3>
                  <p className="text-sm text-gray-400 line-clamp-2">{episode.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
