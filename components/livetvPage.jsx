"use client"
import { useState } from "react"
import Image from "next/image"
import { Play, Pause, Volume2, Maximize, Settings, Star } from "lucide-react"
import home04 from './../public/assets/images/landing/home04.png';
import movie02 from './../public/assets/images/movies/sleepingangel.png';
import channel1 from './../public/assets/images/channels/channel01.png';
import channel2 from './../public/assets/images/channels/channel02.png';
import channel3 from './../public/assets/images/channels/channel03.png';
import channel4 from './../public/assets/images/channels/channel04.png';
import channel5 from './../public/assets/images/channels/channel05.png';


export default function LiveTVPage() {
  const [isPlaying, setIsPlaying] = useState(true)
  const [currentTime, setCurrentTime] = useState(45)
  const [duration, setDuration] = useState(120)

  const currentShow = {
    title: "Sleeping Angel",
    rating: "8.2",
    views: "426",
    reviews: "1",
    year: "2023",
    duration: "179 mins",
    contentRating: "TV-MA",
    genres: ["Action", "Crime", "Thriller"],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    cast: ["Brooke Muffard"],
    crew: ["Aleya Nadeau"],
    poster: "/placeholder.svg?height=400&width=300",
  }

  const channels = [
    { id: 1, name: "SCREAM BOX", logo: "/assets/images/channels/channel01.png", isActive: false },
    { id: 2, name: "CRIME HUNTERS", logo:"/assets/images/channels/channel05.png"  , isActive: false },
    { id: 3, name: "THRILLER TV", logo: "/assets/images/channels/channel04.png", isActive: true },
    { id: 4, name: "ACTION ZONE", logo: "/assets/images/channels/channel03.png", isActive: false },
    { id: 5, name: "MYSTERY CHANNEL", logo: "/assets/images/channels/channel02.png", isActive: false },
  ]

  const schedule = [
    { time: "14:00", title: "Tomorrow" },
    { time: "15:00", title: "Tomorrow" },
    { time: "16:00", title: "Tomorrow" },
    { time: "17:00", title: "Tomorrow" },
    { time: "18:00", title: "Tomorrow" },
    { time: "19:00", title: "Tomorrow" },
    { time: "20:00", title: "Tomorrow" },
    { time: "21:00", title: "Tomorrow" },
  ]

  const togglePlay = () => {
    setIsPlaying(!isPlaying)
  }

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, "0")}`
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#020b1f] via-[#0a2151] to-[#020b1f] text-white">
      <div className="container mx-auto px-4 py-8">
        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Left Sidebar - Show Info */}
          <div className="lg:col-span-1">
            <h1 className="text-2xl font-bold mb-6">Live Streaming</h1>

            {/* Current Show Card */}
            <div className="bg-[#1a1a3a]/50 rounded-lg p-4 mb-6">
              <div className="relative mb-4">
                <Image
                  src={home04}
                  alt={currentShow.title}
                  width={300}
                  height={400}
                  className="w-full rounded-lg"
                />
               
              </div>

              <h2 className="text-xl font-bold mb-2">{currentShow.title}</h2>

              <div className="flex items-center mb-2">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-3 w-3 text-[#1D50A3] fill-[#1D50A3]" />
                  ))}
                </div>
                <span className="ml-2 text-sm">{currentShow.rating}</span>
                <span className="mx-2 text-gray-400">•</span>
                <span className="text-sm">{currentShow.views} Views</span>
                <span className="mx-2 text-gray-400">•</span>
                <span className="text-sm">{currentShow.reviews} review</span>
              </div>

              <div className="flex items-center gap-2 mb-3 text-sm">
                <span>{currentShow.year}</span>
                <span>•</span>
                <span>{currentShow.duration}</span>
                <span>•</span>
                <span className="bg-red-600 px-2 py-0.5 rounded">{currentShow.contentRating}</span>
              </div>

              <div className="flex flex-wrap gap-2 mb-3">
                {currentShow.genres.map((genre) => (
                  <span key={genre} className="text-xs text-gray-400">
                    {genre}
                  </span>
                ))}
              </div>

              <p className="text-sm text-gray-300 mb-4 leading-relaxed">{currentShow.description}</p>

              <div className="space-y-2 text-sm">
                <div>
                  <span className="font-semibold">Cast:</span>
                  <span className="text-gray-300 ml-2">{currentShow.cast.join(", ")}</span>
                </div>
                <div>
                  <span className="font-semibold">Crew:</span>
                  <span className="text-gray-300 ml-2">{currentShow.crew.join(", ")}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Main Video Player */}
          <div className="lg:col-span-3">
            <div className="relative bg-black rounded-lg overflow-hidden">
              {/* Video Container */}
              <div className="relative aspect-video">
                <Image src={movie02} alt="Live Stream" fill className="object-cover" />

                {/* Video Controls Overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                  <div className="flex items-center gap-4">
                    <button
                      onClick={togglePlay}
                      className="bg-white/20 hover:bg-white/30 rounded-full p-2 transition-colors"
                    >
                      {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
                    </button>

                    <span className="text-sm">{formatTime(currentTime)}</span>

                    {/* Progress Bar */}
                    <div className="flex-1 bg-white/20 rounded-full h-1">
                      <div
                        className="bg-red-600 h-full rounded-full transition-all"
                        style={{ width: `${(currentTime / duration) * 100}%` }}
                      />
                    </div>

                    <span className="text-sm">{formatTime(duration)}</span>

                    <div className="flex items-center gap-2">
                      <Volume2 className="h-4 w-4" />
                      <Settings className="h-4 w-4" />
                      <Maximize className="h-4 w-4" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Schedule and Channel Guide */}
        <div className="mt-8">
          <div className="bg-[#191C33] rounded-lg p-6">
            {/* Schedule Timeline */}
            <div className="mb-6">
              <div className="grid grid-cols-4 md:grid-cols-8 gap-4 border-b border-gray-600 pb-4">
                {schedule.map((slot, index) => (
                  <div key={index} className="text-center">
                    <div className="text-xs text-gray-400 mb-1">{slot.title}</div>
                    <div className="text-sm font-medium text-white">{slot.time}</div>
                    {index < schedule.length - 1 && (
                      <div className="absolute right-0 top-0 bottom-0 w-px bg-gray-600 hidden md:block"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Channel List */}
            <div className="space-y-4">
              {channels.map((channel, index) => (
                <div key={channel.id} className="flex items-center gap-4">

                  {/* Channel Logo */}
                  <div
                    
                  >
                    <Image
                      src={channel.logo || "/placeholder.png"}
                      alt={channel.name}
                      width={60}
                      height={30}
                      className=" p-2  rounded-xl flex-shrink-0 w-20 h-15 flex items-center justify-center cursor-pointer transition-all "
                    />
                  </div>

                  {/* Program Info Bar */}
                  <div className="flex-1 bg-[#2D2D2D] rounded-lg h-12 flex items-center px-4">
                    <div className="text-gray-400 text-sm">
                      {channel.isActive ? "Now Playing: Current Program" : "Program Information"}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
