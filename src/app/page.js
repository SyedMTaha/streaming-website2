"use client"

import React from "react"
import Image from "next/image"
import Link from "next/link"
import { Tv, Download, Dribbble, Smile , Plus } from "lucide-react"
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import home01 from './../../public/assets/images/background/homePage01.png';
import img01 from './../../public/assets/images/home/home01.png';
import img02 from './../../public/assets/images/home/home02.png';
import img03 from './../../public/assets/images/home/home03.png';
import img04 from './../../public/assets/images/home/home04.png';
import img05 from './../../public/assets/images/home/home05.png';
import img06 from './../../public/assets/images/home/home06.png';



export default function HomePage() {
  return (
    <>
    <Navbar />
    <div className="min-h-screen bg-[#020D1E] text-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 text-center min-h-[70vh] flex items-center">
        <div className="absolute inset-0 opacity-60">
          <div className="absolute inset-0 bg-gradient-to-t from-[#132036] to-transparent z-10">
          </div>
          <Image
            src={home01}
            alt="Movie and TV show posters collage"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="relative z-10 container mx-auto">
          <h1 className="text-4xl md:text-4xl font-bold mb-4">
            The Home of Endless
            <br />
            Shows and Movies
          </h1>
          <p className="text-md md:text-md text-gray-300 mb-8">More shows. More fun. More you.</p>
          <div className="flex flex-col sm:flex-row gap-2 justify-center items-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Email address"
              className="w-full px-4 py-3 rounded-sm bg-white/90 text-gray-900 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="w-full sm:w-auto     whitespace-nowrap   bg-[#1D50A3]  text-white px-8 py-3 rounded-sm font-medium  inline-block hover:bg-blue-900  transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-blue-500/50">
              Get Started
            </button>
          </div>
        </div>
      </section>

      {/* Watch Free Movies Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold mb-8">Watch Free Movies</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            <MovieCard
              image={img01}
              title="Love in The Sky"
              href="/movie/love-in-the-sky"
            />
            <MovieCard image={img02}
            title="SpaceX" 
            href="/movie/spacex" />
            <MovieCard image={img03} title="City Hunter" href="/movie/city-hunter" />
            <MovieCard
              image={img04}
              title="The Sleeping Angel"
              href="/movie/the-sleeping-angel"
            />
            <MovieCard image={img05} title="The Post" href="/movie/the-post" />
            <MovieCard image={img06} title="White House" href="/movie/white-house" />
          </div>
        </div>
      </section>

      {/* Why Join Us Section */}
      <section className="py-16 px-4 bg-[#0a1a3a]/30">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12">Why Join Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <FeatureCard
              icon={<Tv className="h-12 w-12" />}
              title="Enjoy on your TV"
              description="Watch on Smart TVs, Playstation, Xbox, Apple TV, Roku Players and more."
            />
            <FeatureCard
              icon={<Download className="h-12 w-12" />}
              title="Download Shows"
              description="Save your favorites easily and always have something to watch."
            />
            <FeatureCard
              icon={<Dribbble className="h-12 w-12" />}
              title="Watch everywhere"
              description="Stream unlimited movies and TV shows on your phone, tablet, laptop and TV."
            />
            <FeatureCard
              icon={<Smile className="h-12 w-12" />}
              title="Create profiles"
              description="Send kids on adventures with their favorite characters in a space made just for them."
            />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-8">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <FAQItem question="What is INBV?" />
            <FAQItem question="How much INBV cost?" />
            <FAQItem question="Where can I watch?" />
            <FAQItem question="How do I cancel?" />
            <FAQItem question="What can I watch on INBV?" />
          </div>
        </div>
      </section>
    </div>
    <Footer/>
    </>
  )
}

function MovieCard({ image, title, href }) {
  return (
    <Link href={href} className="group">
      <div className="relative overflow-hidden rounded-lg mb-2 aspect-[2/3]">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <h3 className="text-sm font-medium text-center group-hover:text-blue-400 transition-colors">{title}</h3>
    </Link>
  )
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="bg-gradient-to-t from-[#5073AE] to-[#1D50A3] rounded-lg p-8 hover:from-[#5073AE] hover:to-[#092960] transition-colors relative min-h-[250px]">
    <div className="text-left">
      <h3 className="text-lg font-semibold mb-2.5">{title}</h3>
      <p className="text-blue-100 text-sm leading-relaxed ">{description}</p>
    </div>
    <div className="absolute bottom-4 right-4 text-white opacity-90">{icon}</div>
  </div>
)
}

function FAQItem({ question }) {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <div className="bg-[#2D2D2D] rounded-lg">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 text-left hover:bg-[#1e1d1d] transition-colors"
      >
        <span className="text-lg font-medium">{question}</span>
        <Plus className={`h-6 w-6 transition-transform ${isOpen ? "rotate-45" : ""}`} />
      </button>
      {isOpen && (
        <div className="px-6 pb-6">
          <p className="text-gray-300">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.
          </p>
        </div>
      )}
    </div>
  )
}