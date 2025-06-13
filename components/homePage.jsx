"use client"

import Image from "next/image"
import Link from "next/link"
import { Play, Plus, Calendar } from "lucide-react"
import home03 from './../public/assets/images/background/homePage03.png';
import comingsoon from './../public/assets/images/background/coming-soon.jpg';
import comingsoonseries from './../public/assets/images/background/coming-soon-series.jpg';
import logo5 from './../public/assets/images/logo/logo.png';
import news1 from './../public/assets/images/home/news1.jpg';
import news2 from './../public/assets/images/home/news2.jpg';
import news3 from './../public/assets/images/home/news3.jpg';
import homegif2 from './../public/assets/images/home/homegif2.gif';
import homePage from './../public/assets/images/home/homePage02.jpg';
import home38 from './../public/assets/images/home/home38.jpg';
import home39 from './../public/assets/images/home/home39.jpg';
import home40 from './../public/assets/images/home/home40.jpg';
import home41 from './../public/assets/images/home/home41.jpg';
import home42 from './../public/assets/images/home/home42.jpg';
import home43 from './../public/assets/images/home/home43.jpg';
import home45 from './../public/assets/images/home/home45.jpg';
import home46 from './../public/assets/images/home/home46.png';
import home47 from './../public/assets/images/home/home47.jpg';
import home48 from './../public/assets/images/home/home48.png';
import home49 from './../public/assets/images/home/home49.jpeg';
import { Facebook, Twitter, Youtube, X, Instagram } from "lucide-react"

export default function DashboardPage() {

  const handleScroll = (direction, containerId) => {
    const container = document.getElementById(containerId);
    if (container) {
      const scrollAmount = direction === 'left' ? -300 : 300;
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const XIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);


  return (
    <div className="min-h-screen bg-gradient-to-b from-[#020b1f] via-[#0a2151] to-[#020b1f] text-white">
      {/* Hero Section */}
      <section className="relative h-[95vh] flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0 pointer-events-none">
          <Image
            src={homePage}
            alt="The White House movie"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Social Media Icons */}
        <div className="absolute bottom-2 right-0 z-50 flex gap-2">
          
          {/* TikTok */}
          <a 
            href="https://www.tiktok.com/@inbvtv?_t=ZS-8xAgUZayDgm&_r=1" 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-icon-container group"
          >
          <div className="social-icon-container group">
            <div className="w-12 h-12 bg-blue-900 group-hover:bg-white transform skew-x-12 flex items-center justify-center cursor-pointer transition-all duration-300 relative overflow-hidden">
              <svg 
                className="w-5 h-5 text-white group-hover:text-blue-900 transform -skew-x-12 transition-colors duration-300" 
                viewBox="0 0 24 24" 
                fill="currentColor"
              >
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
              </svg>
            </div>
          </div>
          </a>

          {/* Facebook */}
          <a 
            href="https://www.facebook.com/share/1P7zFL7e2z/?mibextid=wwXIfr" 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-icon-container group"
          >
            <div className="w-12 h-12 bg-blue-900 group-hover:bg-white transform skew-x-12 flex items-center justify-center cursor-pointer transition-all duration-300 relative overflow-hidden">
              <Facebook className="w-5 h-5 text-white group-hover:text-blue-900 transform -skew-x-12 transition-colors duration-300" />
            </div>
          </a>
          
          {/* Instagram */}
          <a 
            href="https://www.instagram.com/inbvtv?igsh=dGN4Y2ZhMDExZWx5" 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-icon-container group"
          >
          <div className="social-icon-container group">
            <div className="w-12 h-12 bg-blue-900 group-hover:bg-white transform skew-x-12 flex items-center justify-center cursor-pointer transition-all duration-300 relative overflow-hidden">
              <Instagram className="w-5 h-5 text-white group-hover:text-blue-900 transform -skew-x-12 transition-colors duration-300" />
            </div>
          </div>
          </a>
          
          {/* X (Twitter) */}
          <div className="social-icon-container group">
            <div className="w-12 h-12 bg-blue-900 group-hover:bg-white transform skew-x-12 flex items-center justify-center cursor-pointer transition-all duration-300 relative overflow-hidden">
              <XIcon className="w-5 h-5 text-white group-hover:text-blue-900 transform -skew-x-12 transition-colors duration-300" />
            </div>
          </div>
          
          {/* YouTube */}
          <div className="social-icon-container group">
            <div 
              className="-ml-1 w-12 h-12 bg-blue-900 group-hover:bg-white flex items-center justify-center cursor-pointer transition-all duration-300 relative overflow-hidden"
              style={{clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 20% 100%)'}}
            >
              <Youtube className="ml-2 w-5 h-5 text-white group-hover:text-blue-900 transition-colors duration-300" />
            </div>
          </div>
        </div>

        {/* Hero Content */}
        {/* <div className="relative z-10 container mx-auto px-4 flex items-center justify-center min-h-screen pointer-events-none">
          <div className="max-w-2xl text-center mb-25">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]">Welcome to INBV</h1>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed drop-shadow-[0_0_5px_rgba(255,255,255,0.4)]">
              We Provide High Quality Movies & Series Stream 24/7
            </p> 
          </div>
        </div> */}
      </section>

      {/* Streaming Now */}
      <ContentSection title="Streaming Now" onScroll={handleScroll}>
        <MovieRow>
          <MovieCard image={home45}  title="Atomic Submarine"  />
          <MovieCard image={home46} title="Pursued" />
          <MovieCard image={home48} title="Stage Coach" />
          <MovieCard image={home49} title="State Secret" />
          <MovieCard image={home47} title="Bad and the Beautiful" />
          {/* <MovieCard image={home43}  title="Dragnet 1967"  />          
          <MovieCard image={home40} title="Mister ED" />
          <MovieCard image={home41} title="Hill Street Blues" />
          <MovieCard image={home42} title="Iron Side" />
          <MovieCard image={home38} title="The Andy Griffith Show" />
          <MovieCard image={home39} title="Spider-Man" /> */}
          {/* <MovieCard image={comingsoon}  title="John Wick 4" />
          <MovieCard image={comingsoon} title="Spider-Man" />
          <MovieCard image={comingsoon} title="The White House" /> */}
        </MovieRow>
      </ContentSection>

      {/* Recommended Movies */}
      <ContentSection title="Recommended Movies" onScroll={handleScroll}>
        <MovieRow>
          <MovieCard image={comingsoon}  title="John Wick 4"  />
          <MovieCard image={comingsoon} title="Spider-Man" />
          <MovieCard image={comingsoon} title="The White House" />
          <MovieCard image={comingsoon} title="The Post" />
          <MovieCard image={comingsoon} title="Riverdale" />
          <MovieCard image={comingsoon} title="Best Friend" />
          {/* <MovieCard image={comingsoon}  title="John Wick 4" />
          <MovieCard image={comingsoon} title="Spider-Man" />
          <MovieCard image={comingsoon} title="The White House" /> */}
        </MovieRow>
      </ContentSection>


      {/* Recommended TV Shows 2 */}
      <ContentSection title="Recommended TV Shows" viewAllLink="/recommended-tv-2">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <LargeCard
            image={ comingsoonseries}
            title="Top 10 Reasons to Watch Hocus Pocus 2"
            description="Best comedy feature follows two best friends in their final year of college while they navigate new relationships."
          />
          <LargeCard
            image={ comingsoonseries}
            title="New Avatar 2 Cast Share First Impressions"
            description="Best comedy feature follows two best friends in their final year of college while they navigate new relationships."
          />
          <LargeCard
            image={ comingsoonseries}
            title="Camila Mendes and Maya Hawke Answer Burning Questions"
            description="Best comedy feature follows two best friends in their final year of college while they navigate new relationships."
          />
        </div>
      </ContentSection>

      {/* New Release */}
      <ContentSection title="New Release" viewAllLink="/new-releases"  onScroll={handleScroll}>
        <MovieRow>
          <MovieCard image={comingsoon} title="The Sleeping Angel" />
          <MovieCard image={comingsoon} title="The Great Empire" />
          <MovieCard image={comingsoon} title="Good Doctor" />
          <MovieCard image={comingsoon} title="Swamp Thing" />
          <MovieCard image={comingsoon} title="James Bond" />
          <MovieCard image={comingsoon} title="La La Land" />
          <MovieCard image={comingsoon} title="The Sleeping Angel" />
          <MovieCard image={comingsoon} title="The Great Empire" />
          <MovieCard image={comingsoon} title="Good Doctor" />
        </MovieRow>
      </ContentSection>

      {/* Cartoon Series */}
      <section className="py-8 px-4">
        <div className="container mx-auto">
          <div className="relative rounded-lg overflow-hidden h-64 md:h-80">
            <Image src={home03} alt="Cartoon Series" fill className="object-cover w-full"  priority/>
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent flex items-center">
              <div className="px-8">
                <h2 className="text-4xl font-bold mb-2">Cartoon Series</h2>
                <p className="text-gray-300 mb-4 max-w-md">
                A hilarious and heartwarming cartoon series that follows quirky characters on wild adventures in a world where the unexpected is just part of everyday life.

                </p>
                <Link href="/cartoon" >
                <button className="  bg-[#1D50A3]  text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-900  transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-blue-500/50 flex items-center gap-2 ">
                  Watch Now
                  <Play className="h-5 w-5 fill-current" />
                </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Deal of the Week */}
      <ContentSection title="Deal of the Week" viewAllLink="/deals"  onScroll={handleScroll}>
        <MovieRow>
          <MovieCard image={comingsoon} title="Love in The Sky" />
          <MovieCard image={comingsoon} title="SpaceX" />
          <MovieCard image={comingsoon} title="Spider Man Memo" />
          <MovieCard image={comingsoon} title="City Hunter" />
          <MovieCard image={comingsoon} title="The Angel" />
          <MovieCard image={comingsoon} title="The Post" />
          <MovieCard image={comingsoon} title="Best Friend" />
          <MovieCard image={comingsoon} title="White House" />
          <MovieCard image={comingsoon} title="Love in The Sky" />
          <MovieCard image={comingsoon} title="SpaceX" />
        </MovieRow>
      </ContentSection>

      {/* TV Series */}
      <section className="py-8 px-4">
        <div className="container mx-auto">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">TV Series</h2>
            <div className="flex items-center gap-4">
              <div className="flex gap-2">
                <button
                  onClick={() => handleScroll('left', 'tv-series-grid')}
                  className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={() => handleScroll('right', 'tv-series-grid')}
                  className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
              <Link href="/tv-series" className="text-white-400 font-medium hover:text-blue-300 text-sm">
                View All
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4" id="tv-series-grid">
            <TVShowCard image={comingsoonseries} title="Falling Water" />
            <TVShowCard image={comingsoonseries} title="The Walking Dead" />
            <TVShowCard image={comingsoonseries} title="Suits" />
            <TVShowCard image={comingsoonseries} title="Stranger Things" />
            <TVShowCard image={comingsoonseries} title="Peaky Blinders" />
            <TVShowCard image={comingsoonseries} title="The Crown" />
            <TVShowCard image={comingsoonseries} title="Breaking Bad" />
            <TVShowCard image={comingsoonseries} title="Ozark" />
          </div>
        </div>
      </section>

      

      

      {/* House of the Dragon Banner */}
      <section className="py-8 px-4">
        <div className="container mx-auto">
          <div className="relative rounded-lg overflow-hidden h-64 md:h-50 bg-gradient-to-r from-blue-900 to-blue-600">
            <div className="absolute inset-0 flex items-center justify-between px-8">
              <div>
                <h2 className="text-5xl font-bold mb-2"></h2>
                <p className="text-xl mb-4"></p>
              </div>
              <div className="hidden md:flex items-center justify-center flex-1">
                <Image src={logo5} alt="House of the Dragon" width={150} height={150} className="rounded-full" />
                <p className="font-bold text-lg ml-3">Providing you Premium Quality Movies & TV Series</p>
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
              image={news1}
              title="Movies That Will Make Your Holidays The Best"
              date="April 26, 2023"
              category="Entertainment"
            />
            <NewsCard
              image={news2}
              title="Best Movie To Cheer Your Mood Up In 2023"
              date="April 26, 2023"
              category="Entertainment"
            />
            <NewsCard
              image={news3}
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

function ContentSection({ title, viewAllLink, children, onScroll }) {
  const sectionId = title.replace(/\s+/g, '-').toLowerCase();
  
  return (
    <section className="py-8 px-4">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">{title}</h2>
          <div className="flex items-center gap-4">
            <div className="flex gap-2">
              <button
                onClick={() => onScroll('left', `${sectionId}-container`)}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={() => onScroll('right', `${sectionId}-container`)}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
            {viewAllLink && (
              <Link href={viewAllLink} className="text-white-400 font-medium hover:text-blue-300 text-sm">
                View All
              </Link>
            )}
          </div>
        </div>
        <div className="overflow-hidden">
          <div 
            id={`${sectionId}-container`}
            className="flex space-x-3 overflow-x-auto pb-4 scrollbar-hide"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {children}
          </div>
        </div>
      </div>
    </section>
  )
}

function MovieRow({ children }) {
  return children;
}

function MovieCard({ image, title }) {
  // Convert title to URL-friendly slug
  const slug = title.toLowerCase().replace(/\s+/g, '-');
  
  return (
    <Link href={`/movie/${slug}`} className="flex-shrink-0 w-70 group cursor-pointer">
      <div className="relative overflow-hidden rounded-lg mb-2">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          width={400}
          height={300}
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
      </div>
      <h3 className="text-sm font-medium text-center group-hover:text-blue-400 transition-colors">{title}</h3>
    </Link>
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
          className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300 opacity-50 group-hover:opacity-100 transition-all"
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