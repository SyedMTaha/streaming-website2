"use client"

import { useState } from "react"
import Link from "next/link"
import Image from 'next/image'
import { ChevronDown, Globe, Menu, X, User } from "lucide-react";
import logo from './../public/assets/images/logo/logo.png';


const genreDropdownItems = [
  { href: "/genre/action", label: "Action" },
  { href: "/genre/comedy", label: "Comedy" },
  { href: "/genre/drama", label: "Drama" },
  { href: "/genre/horror", label: "Horror" },
  { href: "/genre/romance", label: "Romance" },
  { href: "/genre/thriller", label: "Thriller" },
  { href: "/genre/sci-fi", label: "Sci-Fi" },
  { href: "/genre/documentary", label: "Documentary" },
]

function NavItem({ href, label, mobile }) {
  return (
    <Link href={href} className={`text-white hover:text-blue-300 flex items-center gap-1 ${mobile ? "" : "font-medium"}`}>
      {label}
      <ChevronDown className="h-4 w-4 " />
    </Link>
  )
}

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="bg-gradient-to-b from-[#00112C] to-[#012256] py-4 w-full">
      <div className="px-4 sm:px-8 lg:px-8 max-w-full">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-4 sm:space-x-8">
          <Link href="/" className="flex items-center">
         <div className="relative flex items-center justify-center h-8 w-18">
         <Image src={logo || "/placeholder.svg"} alt="INBV Logo" width={80} height={32} priority />
       </div>
        </Link>

        <div className="hidden md:flex items-center space-x-6"> {/* Added items-center here */}
          <NavItem href="/" label="Home" />
          <NavItem href="/genre" label="Genre" hasDropdown={true} dropdownItems={genreDropdownItems} />
          <NavItem href="/live" label="Live TV" />
          <NavItem href="/blog" label="Blog" />
          <NavItem href="/about" label="About Us" />
        </div>
        </div>

          {/* Search Bar - Hidden on mobile, shown on desktop */}
          <div className="hidden lg:flex flex-1 max-w-sm mx-4 xl:mx-8" style={{ marginLeft: "110px" }}>
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Find movies, TV shows and more..."
                className="bg-gradient-to-b from-[#00112C] to-[#012256] border border-white rounded-lg pl-10 pr-4 py-1.5 text-sm  placeholder-gray-400 focus:outline-none"
                style={{ width: "280px", color: "#A2ABC0"  }}
              />
              <button className="absolute left-3 top-1/2 transform -translate-y-1/2">
                <svg className="w-4 h-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div className="flex items-center space-x-2 sm:space-x-4">
            {/* Mobile search button */}
            <button className="lg:hidden text-white p-2">
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>

            <div className="hidden md:flex items-center">
              <button className="text-white flex items-center">
                <Globe className="h-4 w-4 mr-2" />
                EN
                <ChevronDown className="h-4 w-4 ml-1" />
              </button>
            </div>

            <div className="hidden sm:flex items-center">
              <User className="h-5 w-5 text-white mr-2" />
            </div>

            <button className="bg-[#A2ABC0] text-[#183056] hover:bg-gray-300 font-semibold px-3 py-2 rounded-lg text-sm sm:text-base">
              <span className="hidden sm:inline">Subscribe</span>
              <span className="sm:hidden">Sub</span>
            </button>

            <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 bg-navy-800 rounded-lg p-4">
            <div className="flex flex-col space-y-3">
              {/* Mobile search */}
              <div className="lg:hidden mb-4">
                <div className="relative w-full">
                  <input
                    type="text"
                    placeholder="Find movies, TV shows..."
                    className="w-full bg-gradient-to-b from-[#00112C] to-[#012256] border border-white rounded-lg pl-10 pr-4 py-2 text-sm text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-white/50"
                  />
                  <button className="absolute left-3 top-1/2 transform -translate-y-1/2">
                    <svg className="w-4 h-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </button>
                </div>
              </div>

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