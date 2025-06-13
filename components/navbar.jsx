"use client"

import React from "react"
import Link from "next/link"
import Image from 'next/image'
import { ChevronDown, Globe, Menu, X, User } from "lucide-react";
import logo from './../public/assets/images/logo/logo.png';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({ 
  subsets: ['latin'],
  display: 'swap',
});


export default function Navbar() {
  const [isGenreOpen, setIsGenreOpen] = React.useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)
  const dropdownRef = React.useRef(null)
  const timeoutRef = React.useRef(null)

  const genres = [
    { name: "Action", href: "/genre/action" },
    { name: "Comedy", href: "/genre/comedy" },
    { name: "Drama", href: "/genre/drama" },
    { name: "Horror", href: "/genre/horror" },
    { name: "Romance", href: "/genre/romance" },
    { name: "Thriller", href: "/genre/thriller" },
    { name: "Sci-Fi", href: "/genre/sci-fi" },
    { name: "Adventure", href: "/genre/adventure" },
    { name: "Family", href: "/genre/family" },
    { name: "Documentary", href: "/genre/documentary" },
    { name: "Inspiration", href: "/genre/inspiration" },
    { name: "Mystery", href: "/genre/mystery" },
    { name: "Crime", href: "/genre/crime" },
    { name: "War", href: "/genre/war" },
    { name: "Western", href: "/genre/western" },
    { name: "Musical", href: "/genre/musical" },
    { name: "Animation", href: "/genre/animation" },
    { name: "Biographical", href: "/genre/biographical" },
    { name: "Historical", href: "/genre/historical" },
    { name: "Martial Arts", href: "/genre/martial-arts" },
    { name: "Sport", href: "/genre/sport" },
    { name: "News", href: "/genre/news" },
  ]
  
 // Close dropdown when clicking outside
 React.useEffect(() => {
  function handleClickOutside(event) {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsGenreOpen(false)
    }
  }

  document.addEventListener("mousedown", handleClickOutside)
  return () => {
    document.removeEventListener("mousedown", handleClickOutside)
  }
}, [])

// Handle mouse enter with delay
function handleMouseEnter() {
  if (timeoutRef.current) {
    clearTimeout(timeoutRef.current)
  }
  setIsGenreOpen(true)
}

// Handle mouse leave with delay
function handleMouseLeave() {
  timeoutRef.current = setTimeout(() => {
    setIsGenreOpen(false)
  }, 150)
}

// Toggle dropdown for mobile/click
function toggleGenreDropdown() {
  setIsGenreOpen(!isGenreOpen)
}

// Close mobile menu when link is clicked
function closeMobileMenu() {
  setIsMobileMenuOpen(false)
  setIsGenreOpen(false)
}

  return (
    <nav className={` ${montserrat.className} bg-gradient-to-b from-[#00112C] to-[#012256] py-4 w-full`}>
    <div className="px-4 sm:px-8 lg:px-16 max-w-full">
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-4 sm:space-x-8">
          <Link href="/" className="flex items-center">
            <div className="relative flex items-center justify-center h-8 w-18">
              <Image src={logo || "/placeholder.svg"} alt="INBV Logo" width={80} height={32} priority />
            </div>
          </Link>

      {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6">
          </div>
        </div>

        <div className="flex items-center space-x-2 sm:space-x-4">
          

          <Link href="/auth/login">
          <button className="bg-[#A2ABC0] text-[#183056] hover:bg-gray-300 font-semibold p-2 rounded-lg flex items-center text-xs shadow-md shadow-gray-900 hover:shadow-lg hover:shadow-gray-900 transition-shadow duration-300 sm:text-sm">
          <span className="hidden sm:inline">Watch Now</span>
          <span className="sm:hidden">Watch</span>
        </button>
          </Link>

          <button
              onClick={() => {
                setIsMobileMenuOpen(!isMobileMenuOpen)
              }}
              className="text-white hover:text-blue-400 transition-colors md:hidden"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
         <div className="md:hidden fixed inset-x-0 top-16 bg-[#1a1a3a]/95 border-t border-blue-900/30 z-50 max-h-[80vh] overflow-y-auto">
        <div className="px-2 pt-2 pb-3 space-y-1">
          <MobileNavItem href="/" label="Home" onClick={closeMobileMenu} />

            <div className="w-full">
                <button
                  onClick={toggleGenreDropdown}
                  className="flex items-center justify-between w-full px-3 py-2 text-white hover:text-blue-400 hover:bg-blue-600/10 rounded transition-colors duration-200"
                >
                  <span>Genre</span>
                  <ChevronDown
                    className={"h-4 w-4 transition-transform duration-200 " + (isGenreOpen ? "rotate-180" : "")}
                  />
                </button>

                {isGenreOpen && (
                  <div className="pl-4 mt-1 space-y-1 border-l-2 border-blue-800/50 ml-3">
                    {genres.map((genre) => (
                      <Link
                        key={genre.name}
                        href={genre.href}
                        className="block px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-blue-600/20 rounded transition-colors duration-150"
                        onClick={closeMobileMenu}
                      >
                        {genre.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

            <MobileNavItem href="/live-tv" label="Live TV" onClick={closeMobileMenu} />
              <MobileNavItem href="/blog" label="Blog" onClick={closeMobileMenu} />
              <MobileNavItem href="/about" label="About Us" onClick={closeMobileMenu} />
            
            
            <div className="pt-2 border-t border-navy-700">
              <button className="text-white flex items-center hover:bg-white/10 p-2 rounded transition-colors">
                <Globe className="h-4 w-4 mr-1" />
                EN
                <ChevronDown className="h-4 w-4 ml-1" />
              </button>
            </div>

          </div>
        </div>
      )}
    </div>
  </nav>
  )
}


function NavItem({ href, label }) {
  return (
    <Link href={href} className="text-white hover:text-blue-400 transition-colors duration-200 py-2">
      {label}
    </Link>
  )
}

function MobileNavItem({ href, label, onClick }) {
  return (
    <Link
      href={href}
      className="block px-3 py-2 text-white hover:text-blue-400 hover:bg-blue-600/10 rounded transition-colors duration-200"
      onClick={onClick}
    >
      {label}
    </Link>
  )
}