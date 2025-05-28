"use client"

import Image from "next/image"
import Link from "next/link"
import { Play, Plus, Calendar } from "lucide-react"
import home02 from './../public/assets/images/background/homePage02.png';
import home03 from './../public/assets/images/background/homePage03.png';
import home04 from './../public/assets/images/background/homePage04.png';
import logo3 from './../public/assets/images/logo/logo3.png';
import home01 from './../public/assets/images/home/home01.png';
import home002 from './../public/assets/images/home/home02.png';
import home003 from './../public/assets/images/home/home03.png';
import home004 from './../public/assets/images/home/home04.png';
import home05 from './../public/assets/images/home/home05.png';
import home06 from './../public/assets/images/home/home06.png';
import home07 from './../public/assets/images/home/home07.png';
import home08 from './../public/assets/images/home/home08.png';
import home09 from './../public/assets/images/home/home09.png';
import home10 from './../public/assets/images/home/home10.png';
import home11 from './../public/assets/images/home/home11.png';
import home12 from './../public/assets/images/home/home12.png';
import home13 from './../public/assets/images/home/home13.png';
import home14 from './../public/assets/images/home/home14.png';
import home15 from './../public/assets/images/home/home15.png';
import home16 from './../public/assets/images/home/home16.png';
import home17 from './../public/assets/images/home/home17.png';
import home18 from './../public/assets/images/home/home18.png';
import home19 from './../public/assets/images/home/home19.png';
import home20 from './../public/assets/images/home/home20.png';
import home21 from './../public/assets/images/home/home21.png';
import home22 from './../public/assets/images/home/home22.png';
import home23 from './../public/assets/images/home/home23.png';
import home24 from './../public/assets/images/home/home24.png';
import home25 from './../public/assets/images/home/home25.png';
import home26 from './../public/assets/images/home/home26.png';
import home27 from './../public/assets/images/home/home27.png';
import home28 from './../public/assets/images/home/home28.png';
import home29 from './../public/assets/images/home/home29.png';
import home30 from './../public/assets/images/home/home30.png';
import home31 from './../public/assets/images/home/home31.png';
import home32 from './../public/assets/images/home/home32.png';
import home33 from './../public/assets/images/home/home33.png';
import home34 from './../public/assets/images/home/home34.png';
import home35 from './../public/assets/images/home/home35.png';
import home36 from './../public/assets/images/home/home36.png';
import home37 from './../public/assets/images/home/home37.png';

 
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">The White House</h1>
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
              <button className="bg-[#1D50A3] text-white px-6 py-3 rounded-lg font-semibold flex items-center space-x-2 hover:bg-blue-900 transition-colors ">
                <span>Play Now</span>
                <Play className=" h-5 w-5 fill-current" />
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
          <MovieCard image={home01}  title="John Wick 4" />
          <MovieCard image={home002} title="Spider-Man" />
          <MovieCard image={home003} title="The White House" />
          <MovieCard image={home004} title="The Post" />
          <MovieCard image={home05} title="Riverdale" />
          <MovieCard image={home06} title="Best Friend" />
        </MovieRow>
      </ContentSection>

      {/* New Release */}
      <ContentSection title="New Release" viewAllLink="/new-releases">
        <MovieRow>
          <MovieCard image={home07} title="The Sleeping Angel" />
          <MovieCard image={home08} title="The Great Empire" />
          <MovieCard image={home09} title="Good Doctor" />
          <MovieCard image={home10} title="Swamp Thing" />
          <MovieCard image={home11} title="James Bond" />
          <MovieCard image={home12} title="La La Land" />
        </MovieRow>
      </ContentSection>

      {/* Almost Adults Featured */}
      <section className="py-8 px-4">1
        <div className="container mx-auto">
          <div className="relative rounded-lg overflow-hidden h-64 md:h-80">
            <Image src={home03} alt="Almost Adults" fill className="object-cover w-full"  priority/>
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent flex items-center">
              <div className="px-8">
                <h2 className="text-4xl font-bold mb-2">Almost Adults</h2>
                <p className="text-gray-300 mb-4 max-w-md">
                  A coming-of-age story about two best friends navigating their final year of college.
                </p>
                
                <button className="  bg-[#1D50A3]  text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-900  transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-blue-500/50 flex items-center gap-2 ">
                  Play Now
                  <Play className="h-5 w-5 fill-current" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Deal of the Week */}
      <ContentSection title="Deal of the Week" viewAllLink="/deals">
        <MovieRow>
          <MovieCard image={home13} title="Love in The Sky" />
          <MovieCard image={home14} title="SpaceX" />
          <MovieCard image={home15} title="Spider Man Memo" />
          <MovieCard image={home16} title="City Hunter" />
          <MovieCard image={home17} title="The Angel" />
          <MovieCard image={home18} title="The Post" />
          <MovieCard image={home19} title="Best Friend" />
          <MovieCard image={home20} title="White House" />
        </MovieRow>
      </ContentSection>

      {/* TV Series */}
      <ContentSection title="TV Series" viewAllLink="/tv-series">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <TVShowCard image={home21} title="Falling Water" />
          <TVShowCard image={home22} title="The Walking Dead" />
          <TVShowCard image={home21} title="Suits" />
          <TVShowCard image={home22} title="Stranger Things" />
          <TVShowCard image={home23} title="Peaky Blinders" />
          <TVShowCard image={home24} title="The Crown" />
          <TVShowCard image={home25} title="Breaking Bad" />
          <TVShowCard image={home26} title="Ozark" />
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
                <button className="bg-white text-black px-6 py-2 rounded-lg hover:bg-gray-200 transition-colors font-semibold">
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
          <MovieCard image={home28} title="Day Night" />
          <MovieCard image={home29} title="Day Dreamer" />
          <MovieCard image={home30} title="Arcane" />
          <MovieCard image={home31} title="Arcane" />
        </MovieRow>
      </ContentSection>

      {/* Recommended TV Shows 2 */}
      <ContentSection title="Recommended TV Shows" viewAllLink="/recommended-tv-2">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <LargeCard
            image={home32}
            title="Top 10 Reasons to Watch Hocus Pocus 2"
            description="Best comedy feature follows two best friends in their final year of college while they navigate new relationships."
          />
          <LargeCard
            image={home33}
            title="New Avatar 2 Cast Share First Impressions"
            description="Best comedy feature follows two best friends in their final year of college while they navigate new relationships."
          />
          <LargeCard
            image={home34}
            title="Camila Mendes and Maya Hawke Answer Burning Questions"
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
                <button className="bg-white text-black px-6 py-2 rounded-lg hover:bg-gray-200 transition-colors font-semibold">
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
              image={home35}
              title="Movies That Will Make Your Holidays The Best"
              date="April 26, 2023"
              category="Entertainment"
            />
            <NewsCard
              image={home36}
              title="Best Movie To Cheer Your Mood Up In 2023"
              date="April 26, 2023"
              category="Entertainment"
            />
            <NewsCard
              image={home37}
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
          <Link href={viewAllLink} className="text-white-400 font-medium hover:text-blue-300 text-sm">
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
          width={400}
          height={300}
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