"use client"

import Image from "next/image"
import Link from "next/link"
import { Play, ChevronLeft, Clock, Star } from "lucide-react"
import NavbarTwo from "../../../../../components/navbarSearch"
import Footer from "../../../../../components/footer"

export default function Episode2Page() {
  const episodeData = {
    title: "Ants in the Pantry",
    series: "Atom Ant",
    episode: "S01-E02",
    duration: "6 mins",
    rating: "8.0",
    description: "Atom Ant must stop a gang of food thieves from stealing from the local grocery store. Using his super strength and quick thinking, he foils their plans and ensures the food supply remains safe for the ant colony.",
    videoUrl: "/videos/atom-ant/episode2.mp4",
    thumbnail: "/assets/images/cartoons/atom-ant-ep2.jpg",
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#020b1f] via-[#0a2151] to-[#020b1f] text-white">
      <NavbarTwo />
      
      {/* Video Player Section */}
      <section className="relative h-[90vh] flex items-center">
        <div className="absolute inset-0">
          <Image
            src={episodeData.thumbnail}
            alt={episodeData.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#132036] to-transparent" />
        </div>

        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-2xl">
            <Link href="/cartoon/atom-ant" className="inline-flex items-center text-gray-300 hover:text-white mb-4 transition-colors">
              <ChevronLeft className="h-5 w-5 mr-1" />
              Back to Series
            </Link>
            
            <div className="text-[#1D50A3] font-semibold text-sm mb-2 uppercase tracking-wider">{episodeData.series}</div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">{episodeData.title}</h1>
            <div className="flex items-center space-x-4 mb-4 text-sm">
              <div className="flex items-center">
                <Star className="h-4 w-4 text-[#1D50A3] fill-[#1D50A3] mr-1" />
                <span>{episodeData.rating}</span>
              </div>
              <span>{episodeData.episode}</span>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                <span>{episodeData.duration}</span>
              </div>
            </div>
            <p className="text-gray-300 mb-6">{episodeData.description}</p>
            <button className="bg-[#1D50A3] text-white px-6 py-3 rounded-lg font-semibold flex items-center space-x-2 hover:bg-blue-900 transition-colors">
              <Play className="h-5 w-5 fill-current" />
              <span>Play Episode</span>
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
} 