'use client'

import { useState } from 'react'
import { Menu, X, Phone, Mail } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navigation = [
    { name: 'Hotels', href: '#hotels' },
    { name: 'Resorts', href: '#resorts' },
    { name: 'Offers', href: '#offers' },
    { name: 'Events', href: '#events' },
    { name: 'Weddings', href: '#weddings' },
    { name: 'Dining', href: '#dining' },
    { name: 'Wellness', href: '#wellness' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border border-primary-200 shadow-lg">
      {/* Top Bar */}
      <div className="bg-primary-900 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span className="font-sans">+91 92 3750 0101</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span className="font-sans">reservations@mayfairhotels.com</span>
              </div>
            </div>
            <div className="hidden md:flex items-center gap-4">
              <span className="font-sans">Book Direct & Save</span>
              <span>|</span>
              <span className="font-sans">Loyalty Program</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-2xl font-sans font-bold text-primary-900">
              MAYFAIR
            </div>
            <div className="ml-2 text-sm text-primary-700 font-sans">
              HOTELS & RESORTS
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <button className="btn-secondary font-sans">
              Sign In
            </button>
            <button className="btn-primary font-sans">
              Book Now
            </button>
          </div>

          {/* Burger Menu Button */}
          <button
            className="p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-primary-700" />
            ) : (
              <Menu className="w-6 h-6 text-primary-700" />
            )}
          </button>
        </div>
      </div>

      {/* Sleek Right-Aligned Dropdown Menu with Smooth Animations */}
      <div 
        className={`absolute top-full right-0 bg-white border border-primary-200 shadow-xl rounded-bl-lg rounded-br-lg min-w-48 transition-all duration-300 ease-out transform origin-top-right ${
          isMenuOpen 
            ? 'opacity-100 scale-100 translate-y-0' 
            : 'opacity-0 scale-95 translate-y-2 pointer-events-none'
        }`}
      >
        <nav className="py-2">
          {navigation.map((item, index) => (
            <a
              key={item.name}
              href={item.href}
              className={`block px-4 py-3 text-primary-700 hover:text-primary-900 hover:bg-primary-50 font-medium transition-all duration-200 font-sans transform ${
                isMenuOpen 
                  ? 'translate-x-0 opacity-100' 
                  : 'translate-x-4 opacity-0'
              }`}
              style={{
                transitionDelay: isMenuOpen ? `${index * 50}ms` : '0ms'
              }}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
} 