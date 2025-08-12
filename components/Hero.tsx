'use client'

import { useState } from 'react'
import { Search, MapPin, Calendar, Users } from 'lucide-react'

export default function Hero() {
  const [searchData, setSearchData] = useState({
    location: '',
    checkIn: '',
    checkOut: '',
    guests: '2'
  })

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle search logic here
    console.log('Search:', searchData)
  }

  return (
    <div className="relative w-full h-full flex items-start md:items-center justify-center overflow-hidden bg-gradient-dark">
      {/* Clean Luxury Animation Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-950 via-primary-900 to-primary-950" />
        
        {/* Wave Animation */}
        <div className="absolute bottom-0 left-0 right-0 h-32 overflow-hidden">
          <div className="absolute bottom-0 left-0 right-0 h-full">
            <div className="absolute bottom-0 left-0 right-0 h-full bg-gradient-to-t from-primary-800/30 to-transparent animate-wave-slow" />
            <div className="absolute bottom-0 left-0 right-0 h-full bg-gradient-to-t from-primary-700/20 to-transparent animate-wave-medium" />
            <div className="absolute bottom-0 left-0 right-0 h-full bg-gradient-to-t from-primary-600/15 to-transparent animate-wave-fast" />
          </div>
        </div>

        {/* Classy Luxury Outlines Only */}
        <div className="absolute inset-0">
          {/* Elegant Chair Outline */}
          <div className="absolute top-32 left-16 animate-float-slow">
            <svg width="80" height="100" viewBox="0 0 80 100" fill="none" className="opacity-20">
              {/* Chair back */}
              <path d="M10 80 L10 20 Q10 10 20 10 L60 10 Q70 10 70 20 L70 80" stroke="#5e8d83" strokeWidth="2" fill="none"/>
              {/* Chair seat */}
              <path d="M10 80 L70 80 L70 90 L10 90 Z" stroke="#5e8d83" strokeWidth="2" fill="none"/>
              {/* Chair legs */}
              <path d="M15 80 L15 100" stroke="#5e8d83" strokeWidth="2"/>
              <path d="M65 80 L65 100" stroke="#5e8d83" strokeWidth="2"/>
              <path d="M25 80 L25 100" stroke="#5e8d83" strokeWidth="2"/>
              <path d="M55 80 L55 100" stroke="#5e8d83" strokeWidth="2"/>
            </svg>
          </div>
          
          {/* Record Player/Gramophone Outline */}
          <div className="absolute top-48 right-24 animate-float-medium">
            <svg width="60" height="60" viewBox="0 0 60 60" fill="none" className="opacity-25">
              {/* Player base */}
              <rect x="5" y="35" width="50" height="20" stroke="#5e8d83" strokeWidth="2" fill="none"/>
              {/* Turntable */}
              <circle cx="30" cy="30" r="20" stroke="#5e8d83" strokeWidth="2" fill="none"/>
              <circle cx="30" cy="30" r="15" stroke="#5e8d83" strokeWidth="1" fill="none"/>
              <circle cx="30" cy="30" r="10" stroke="#5e8d83" strokeWidth="1" fill="none"/>
              {/* Tone arm */}
              <path d="M30 30 L45 25" stroke="#5e8d83" strokeWidth="2"/>
              <circle cx="45" cy="25" r="3" stroke="#5e8d83" strokeWidth="1" fill="none"/>
            </svg>
          </div>
          
          {/* Champagne Bottle Outline */}
          <div className="absolute bottom-40 left-1/4 animate-float-slow">
            <svg width="40" height="80" viewBox="0 0 40 80" fill="none" className="opacity-20">
              {/* Bottle neck */}
              <path d="M15 10 L15 25" stroke="#5e8d83" strokeWidth="2"/>
              {/* Bottle body */}
              <path d="M10 25 Q10 15 20 15 L30 15 Q40 15 40 25 L40 65 Q40 75 30 75 L20 75 Q10 75 10 65 Z" stroke="#5e8d83" strokeWidth="2" fill="none"/>
              {/* Bottle base */}
              <path d="M15 75 L25 75 L25 80 L15 80 Z" stroke="#5e8d83" strokeWidth="2" fill="none"/>
              {/* Champagne bubbles */}
              <circle cx="25" cy="35" r="1" fill="#5e8d83" opacity="0.6"/>
              <circle cx="18" cy="42" r="0.8" fill="#5e8d83" opacity="0.6"/>
              <circle cx="32" cy="48" r="1.2" fill="#5e8d83" opacity="0.6"/>
            </svg>
          </div>
          
          {/* Wine Glass Outline */}
          <div className="absolute top-1/2 right-1/3 animate-float-medium">
            <svg width="50" height="60" viewBox="0 0 50 60" fill="none" className="opacity-15">
              {/* Glass bowl */}
              <path d="M25 10 Q40 10 40 25 Q40 40 25 40 Q10 40 10 25 Q10 10 25 10" stroke="#5e8d83" strokeWidth="2" fill="none"/>
              {/* Glass stem */}
              <path d="M25 40 L25 55" stroke="#5e8d83" strokeWidth="2"/>
              {/* Glass base */}
              <ellipse cx="25" cy="55" rx="8" ry="3" stroke="#5e8d83" strokeWidth="2" fill="none"/>
            </svg>
          </div>
          
          {/* Cigar Outline */}
          <div className="absolute bottom-1/3 right-1/4 animate-float-fast">
            <svg width="60" height="20" viewBox="0 0 60 20" fill="none" className="opacity-20">
              {/* Cigar body */}
              <ellipse cx="30" cy="10" rx="25" ry="8" stroke="#5e8d83" strokeWidth="2" fill="none"/>
              {/* Cigar band */}
              <ellipse cx="30" cy="10" rx="15" ry="6" stroke="#5e8d83" strokeWidth="1" fill="none"/>
              {/* Cigar tip */}
              <ellipse cx="55" cy="10" rx="3" ry="6" stroke="#5e8d83" strokeWidth="1" fill="none"/>
            </svg>
          </div>
        </div>

        {/* Light Rays Effect */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-primary-300 to-transparent animate-light-ray" />
          <div className="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-transparent via-primary-400 to-transparent animate-light-ray-delayed" />
          <div className="absolute top-0 left-3/4 w-px h-full bg-gradient-to-b from-transparent via-primary-300 to-transparent animate-light-ray" />
        </div>

        {/* Orbital Rings */}
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-primary-300/10 rounded-full animate-orbit-slow" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-primary-400/15 rounded-full animate-orbit-medium" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-primary-500/20 rounded-full animate-orbit-fast" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto pt-28 md:pt-0">
        <h1 className="text-3xl sm:text-5xl lg:text-7xl font-sans font-bold mb-6 leading-tight tracking-tight text-white">
          MAYFAIR HOTELS & RESORTS
        </h1>
        <p className="text-lg sm:text-2xl lg:text-3xl mb-8 text-primary-200 font-sans font-medium">
          A Beacon of Heartfelt Hospitality
        </p>

        {/* Search Form */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 lg:p-8 shadow-2xl max-w-4xl mx-auto border border-white/20">
          <form onSubmit={handleSearch} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-primary-300 w-5 h-5" />
              <select
                value={searchData.location}
                onChange={(e) => setSearchData({...searchData, location: e.target.value})}
                className="w-full pl-10 pr-4 py-3 border border-primary-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent font-sans bg-white/90 text-primary-900"
                required
              >
                <option value="">Select Location</option>
                <option value="bhubaneswar">Bhubaneswar</option>
                <option value="darjeeling">Darjeeling</option>
                <option value="goa">Goa</option>
                <option value="gangtok">Gangtok</option>
                <option value="puri">Puri</option>
                <option value="guwahati">Guwahati</option>
                <option value="raipur">Raipur</option>
                <option value="rourkela">Rourkela</option>
              </select>
            </div>

            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-primary-300 w-5 h-5" />
              <input
                type="date"
                value={searchData.checkIn}
                onChange={(e) => setSearchData({...searchData, checkIn: e.target.value})}
                className="w-full pl-10 pr-4 py-3 border border-primary-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent font-sans bg-white/90 text-primary-900"
                required
              />
            </div>

            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-primary-300 w-5 h-5" />
              <input
                type="date"
                value={searchData.checkOut}
                onChange={(e) => setSearchData({...searchData, checkOut: e.target.value})}
                className="w-full pl-10 pr-4 py-3 border border-primary-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent font-sans bg-white/90 text-primary-900"
                required
              />
            </div>

            <div className="relative">
              <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 text-primary-300 w-5 h-5" />
              <select
                value={searchData.guests}
                onChange={(e) => setSearchData({...searchData, guests: e.target.value})}
                className="w-full pl-10 pr-4 py-3 border border-primary-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent font-sans bg-white/90 text-primary-900"
              >
                <option value="1">1 Guest</option>
                <option value="2">2 Guests</option>
                <option value="3">3 Guests</option>
                <option value="4">4 Guests</option>
                <option value="5+">5+ Guests</option>
              </select>
            </div>

            <button
              type="submit"
              className="md:col-span-2 lg:col-span-4 bg-primary-800 hover:bg-primary-900 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 font-sans border border-primary-600"
            >
              <Search className="inline-block w-5 h-5 mr-2" />
              Search Availability
            </button>
          </form>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary-300 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary-300 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes wave-slow {
          0%, 100% { transform: translateX(0px); }
          50% { transform: translateX(-20px); }
        }
        
        @keyframes wave-medium {
          0%, 100% { transform: translateX(0px); }
          50% { transform: translateX(15px); }
        }
        
        @keyframes wave-fast {
          0%, 100% { transform: translateX(0px); }
          50% { transform: translateX(-10px); }
        }
        
        @keyframes light-ray {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.6; }
        }
        
        @keyframes light-ray-delayed {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.6; }
        }
        
        @keyframes orbit-slow {
          0% { transform: translate(-50%, -50%) rotate(0deg); }
          100% { transform: translate(-50%, -50%) rotate(360deg); }
        }
        
        @keyframes orbit-medium {
          0% { transform: translate(-50%, -50%) rotate(0deg); }
          100% { transform: translate(-50%, -50%) rotate(-360deg); }
        }
        
        @keyframes orbit-fast {
          0% { transform: translate(-50%, -50%) rotate(0deg); }
          100% { transform: translate(-50%, -50%) rotate(360deg); }
        }
      `}</style>
    </div>
  )
} 