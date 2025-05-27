"use client"

import Image from "next/image"
import Link from "next/link"
import { Play, Plus, Calendar } from "lucide-react"
import home02 from './../public/assets/images/background/homePage02.png';
import home03 from './../public/assets/images/background/homePage03.png';
import home04 from './../public/assets/images/background/homePage04.png';``
import logo3 from './../public/assets/images/logo/logo3.png';
 
export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#020b1f] via-[#0a2151] to-[#020b1f] text-white">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center">
        <div className="absolute inset-0">
          <Image
            src={home02}
            alt="The White House movie"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
        </div>

        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-4">The White House</h1>
            <div className="flex items-center space-x-4 mb-4 text-sm">
              <span className="bg-red-600 px-2 py-1 rounded">TV-MA</span>
              <span>2013</span>
              <span>2h 11m</span>
              <span>HD-4K</span>
            </div>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
            </p>
            <div className="flex space-x-4">
              <button className="bg-white text-black px-8 py-3 rounded-lg font-semibold flex items-center space-x-2 hover:bg-gray-200 transition-colors">
                <Play className="h-5 w-5 fill-current" />
                <span>Play Now</span>
              </button>
              <button className="bg-gray-600/80 text-white px-8 py-3 rounded-lg font-semibold flex items-center space-x-2 hover:bg-gray-600 transition-colors">
                <Plus className="h-5 w-5" />
                <span>My List</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Trending Movies */}
      <ContentSection title="Trending Movies" viewAllLink="/trending">
        <MovieRow>
          <MovieCard image="/placeholder.svg?height=300&width=200" title="John Wick 4" />
          <MovieCard image="/placeholder.svg?height=300&width=200" title="Spider-Man" />
          <MovieCard image="/placeholder.svg?height=300&width=200" title="The White House" />
          <MovieCard image="/placeholder.svg?height=300&width=200" title="The Post" />
          <MovieCard image="/placeholder.svg?height=300&width=200" title="Riverdale" />
          <MovieCard image="/placeholder.svg?height=300&width=200" title="Best Friend" />
        </MovieRow>
      </ContentSection>

      {/* New Release */}
      <ContentSection title="New Release" viewAllLink="/new-releases">
        <MovieRow>
          <MovieCard image="/placeholder.svg?height=300&width=200" title="The Sleeping Angel" />
          <MovieCard image="/placeholder.svg?height=300&width=200" title="The Great Empire" />
          <MovieCard image="/placeholder.svg?height=300&width=200" title="Good Doctor" />
          <MovieCard image="/placeholder.svg?height=300&width=200" title="Swamp Thing" />
          <MovieCard image="/placeholder.svg?height=300&width=200" title="James Bond" />
          <MovieCard image="/placeholder.svg?height=300&width=200" title="La La Land" />
        </MovieRow>
      </ContentSection>

      {/* Almost Adults Featured */}
      <section className="py-8 px-4">
        <div className="container mx-auto">
          <div className="relative rounded-lg overflow-hidden h-64 md:h-80">
            <Image src={home03} alt="Almost Adults" fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent flex items-center">
              <div className="px-8">
                <h2 className="text-4xl font-bold mb-2">Almost Adults</h2>
                <p className="text-gray-300 mb-4 max-w-md">
                  A coming-of-age story about two best friends navigating their final year of college.
                </p>
                <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                  Play Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Deal of the Week */}
      <ContentSection title="Deal of the Week" viewAllLink="/deals">
        <MovieRow>
          <MovieCard image="/placeholder.svg?height=300&width=200" title="Love in The Sky" />
          <MovieCard image="/placeholder.svg?height=300&width=200" title="SpaceX" />
          <MovieCard image="/placeholder.svg?height=300&width=200" title="Aerojet" />
          <MovieCard image="/placeholder.svg?height=300&width=200" title="The Sleeping Angel" />
          <MovieCard image="/placeholder.svg?height=300&width=200" title="Best Friend" />
          <MovieCard image="/placeholder.svg?height=300&width=200" title="White House Down" />
        </MovieRow>
      </ContentSection>

      {/* TV Series */}
      <ContentSection title="TV Series" viewAllLink="/tv-series">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <TVShowCard image="/placeholder.svg?height=200&width=300" title="Falling Water" />
          <TVShowCard image="/placeholder.svg?height=200&width=300" title="The Walking Dead" />
          <TVShowCard image="/placeholder.svg?height=200&width=300" title="Suits" />
          <TVShowCard image="/placeholder.svg?height=200&width=300" title="Stranger Things" />
          <TVShowCard image="/placeholder.svg?height=200&width=300" title="Peaky Blinders" />
          <TVShowCard image="/placeholder.svg?height=200&width=300" title="The Crown" />
          <TVShowCard image="/placeholder.svg?height=200&width=300" title="Breaking Bad" />
          <TVShowCard image="/placeholder.svg?height=200&width=300" title="Ozark" />
        </div>
      </ContentSection>

      {/* Pieces of Her Featured */}
      <section className="py-8 px-4">
        <div className="container mx-auto">
          <div className="relative rounded-lg overflow-hidden h-64 md:h-80 bg-gradient-to-r from-teal-600 to-purple-600">
            <div className="absolute inset-0 flex items-center justify-between px-8">
              <div>
                <p className="text-sm text-gray-300 mb-2">A NETFLIX SERIES</p>
                <h2 className="text-4xl font-bold mb-4">PIECES OF HER</h2>
                <button className="bg-white text-black px-6 py-2 rounded-lg hover:bg-gray-200 transition-colors">
                  Watch Trailer
                </button>
              </div>
              <div className="hidden md:block">
                <Image
                  src={home04}
                  alt="Pieces of Her"
                  width={200}
                  height={300}
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recommended TV Shows */}
      <ContentSection title="Recommended TV Shows" viewAllLink="/recommended-tv">
        <MovieRow>
          <MovieCard image="/placeholder.svg?height=300&width=200" title="John Wick" />
          <MovieCard image="/placeholder.svg?height=300&width=200" title="The Proposal" />
          <MovieCard image="/placeholder.svg?height=300&width=200" title="Avatar" />
          <MovieCard image="/placeholder.svg?height=300&width=200" title="Avengers" />
        </MovieRow>
      </ContentSection>

      {/* Recommended TV Shows 2 */}
      <ContentSection title="Recommended TV Shows" viewAllLink="/recommended-tv-2">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <LargeCard
            image="/placeholder.svg?height=300&width=400"
            title="Top 10 Reasons to Watch House Party 3"
            description="Best comedy feature follows two best friends in their final year of college while they navigate new relationships."
          />
          <LargeCard
            image="/placeholder.svg?height=300&width=400"
            title="Best Avatar: 2 Cast More Dark Unpredictable"
            description="Best comedy feature follows two best friends in their final year of college while they navigate new relationships."
          />
          <LargeCard
            image="/placeholder.svg?height=300&width=400"
            title="Coming soon and best House Broken Ranking Questions"
            description="Best comedy feature follows two best friends in their final year of college while they navigate new relationships."
          />
        </div>
      </ContentSection>

      {/* House of the Dragon Banner */}
      <section className="py-8 px-4">
        <div className="container mx-auto">
          <div className="relative rounded-lg overflow-hidden h-64 md:h-80 bg-gradient-to-r from-blue-900 to-blue-600">
            <div className="absolute inset-0 flex items-center justify-between px-8">
              <div>
                <h2 className="text-5xl font-bold mb-2">HOUSE OF THE DRAGON</h2>
                <p className="text-xl mb-4">STREAMING ON OCT 15</p>
                <button className="bg-white text-black px-6 py-2 rounded-lg hover:bg-gray-200 transition-colors">
                  Watch Trailer
                </button>
              </div>
              <div className="hidden md:block">
                <Image
                  src={logo3}
                  alt="House of the Dragon"
                  width={200}
                  height={200}
                  className="rounded-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Top News */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Top News</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <NewsCard
              image="/placeholder.svg?height=200&width=300"
              title="Movies That Will Make Your Holidays The Best"
              date="April 26, 2023"
              category="Entertainment"
            />
            <NewsCard
              image="/placeholder.svg?height=200&width=300"
              title="Best Movie To Cheer Your Mood Up In 2023"
              date="April 26, 2023"
              category="Entertainment"
            />
            <NewsCard
              image="/placeholder.svg?height=200&width=300"
              title="Must Watch Your Fav Web Series With Us"
              date="April 26, 2023"
              category="Entertainment"
            />
          </div>
        </div>
      </section>
    </div>
  )
}

function ContentSection({ title, viewAllLink, children }) {
  return (
    <section className="py-8 px-4">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">{title}</h2>
          <Link href={viewAllLink} className="text-blue-400 hover:text-blue-300 text-sm">
            View All
          </Link>
        </div>
        {children}
      </div>
    </section>
  )
}

function MovieRow({ children }) {
  return <div className="flex space-x-4 overflow-x-auto pb-4 scrollbar-hide">{children}</div>
}

function MovieCard({ image, title }) {
  return (
    <div className="flex-shrink-0 w-40 group cursor-pointer">
      <div className="relative overflow-hidden rounded-lg mb-2">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          width={160}
          height={240}
          className="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
      </div>
      <h3 className="text-sm font-medium text-center group-hover:text-blue-400 transition-colors">{title}</h3>
    </div>
  )
}

function TVShowCard({ image, title }) {
  return (
    <div className="group cursor-pointer">
      <div className="relative overflow-hidden rounded-lg mb-2">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          width={300}
          height={200}
          className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <h3 className="text-sm font-medium group-hover:text-blue-400 transition-colors">{title}</h3>
    </div>
  )
}

function LargeCard({ image, title, description }) {
  return (
    <div className="group cursor-pointer">
      <div className="relative overflow-hidden rounded-lg mb-4">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          width={400}
          height={300}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <h3 className="text-lg font-semibold mb-2 group-hover:text-blue-400 transition-colors">{title}</h3>
      <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
    </div>
  )
}

function NewsCard({ image, title, date, category }) {
  return (
    <div className="group cursor-pointer">
      <div className="relative overflow-hidden rounded-lg mb-4">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          width={300}
          height={200}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="flex items-center space-x-2 text-xs text-gray-400 mb-2">
        <Calendar className="h-3 w-3" />
        <span>{date}</span>
        <span>•</span>
        <span>{category}</span>
      </div>
      <h3 className="text-lg font-semibold group-hover:text-blue-400 transition-colors">{title}</h3>
    </div>
  )
}