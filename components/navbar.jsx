"use client"

import { useState , useRef, useEffect} from "react"
import Link from "next/link"
import Image from 'next/image'
import { ChevronDown, Globe, Menu, X, User } from "lucide-react";
import logo from './../public/assets/images/logo/logo.png';

function NavItem({ href, label, mobile }) {
  return (
    <Link href={href} className={`text-white hover:text-blue-300 flex items-center ${mobile ? "" : "font-medium"}`}>
      {label}
      <ChevronDown className="h-4 w-4 ml-1" />
    </Link>
  )
}

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isGenreOpen, setIsGenreOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const dropdownRef = useRef(null)
  const timeoutRef = useRef(null)

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
  ]

  // Close dropdown when clicking outside
  useEffect(() => {
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
   const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
    setIsGenreOpen(true)
  }

  // Handle mouse leave with delay
  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsGenreOpen(false)
    }, 150)
  }

  // Toggle dropdown for mobile/click
  const toggleGenreDropdown = () => {
    setIsGenreOpen(!isGenreOpen)
  }

  // Close mobile menu when link is clicked
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
    setIsGenreOpen(false)
  }

  return (
    <nav className="bg-gradient-to-b from-[#00112C] to-[#012256] py-4 w-full">
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
              <NavItem href="/" label="Home" />

              {/* Genre Dropdown */}
              <div
                className="relative"
                ref={dropdownRef}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  onClick={toggleGenreDropdown}
                  className="flex items-center space-x-1 text-white hover:text-blue-400 transition-colors duration-200 py-2"
                >
                  <span>Genre</span>
                  <ChevronDown
                    className={`h-4 w-4 transition-transform duration-200 ${isGenreOpen ? "rotate-180" : ""}`}
                  />
                </button>

                {/* Dropdown Menu */}
                {isGenreOpen && (
                  <div className="absolute top-full left-0 mt-1 w-56 bg-[#1a1a3a] border border-blue-900/30 rounded-lg shadow-xl py-2 z-50">
                    <div className="grid grid-cols-2 gap-1 p-2">
                      {genres.map((genre) => (
                        <Link
                          key={genre.name}
                          href={genre.href}
                          className="block px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-blue-600/20 rounded transition-colors duration-150"
                          onClick={() => setIsGenreOpen(false)}
                        >
                          {genre.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            <NavItem href="/live" label="Live TV" />
            <NavItem href="/blog" label="Blog" />
            <NavItem href="/about" label="About Us" />
          </div>
        </div>

        <div className="flex items-center space-x-2 sm:space-x-4">
          <div className="hidden md:flex items-center">
            <button className="text-white flex items-center">
              <Globe className="h-4 w-4 mr-2" />
              EN
              <ChevronDown className="h-4 w-4 ml-1" />
            </button>
          </div>

          <Link href="/auth/login">
            <button className="bg-[#A2ABC0] text-[#183056] hover:bg-gray-300 text-navy-900 font-semibold p-2 rounded-lg flex items-center text-sm sm:text-base">
              <User className="h-4 w-4 sm:h-5 sm:w-5 mr-1" />
              <span className="hidden sm:inline">Watch Now</span>
              <span className="sm:hidden">Watch</span>
            </button>
          </Link>

          <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-4 bg-navy-800 rounded-lg p-4">
          <div className="flex flex-col space-y-3">
            <NavItem href="/" label="Home" mobile />
            <NavItem href="/about" label="About Us" mobile />
            <NavItem href="/live" label="Live TV" mobile />
            <NavItem href="/blog" label="Blog" mobile />
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