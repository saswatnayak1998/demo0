'use client'

import { MapPin, Phone, Clock } from 'lucide-react'

export default function Footer() {
  const footerLinks = {
    destinations: [
      'Alibag', 'Bhubaneswar', 'Darjeeling', 'Gangtok', 'Goa', 'Gopalpur',
      'Guwahati', 'Jharsuguda', 'Kalimpong', 'Puri', 'Purnea', 'Raipur',
      'Rourkela', 'Siliguri'
    ],
    brand: [
      'The Mayfair Story', 'Leadership', 'Management & Team', 'Other Information'
    ],
    links: [
      'Home', 'Resorts', 'Events', 'Weddings', 'Offers', 'Dining', 'Wellness',
      'Awards', 'Growth Story', 'Contact Us', 'About Us', 'Partner Program',
      'Press', 'Blogs', 'Careers', 'Upcoming Properties', 'Corporate Information'
    ]
  }

  return (
    <footer className="bg-primary-950 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center">
              <div className="text-2xl font-sans font-bold text-white">
                MAYFAIR
              </div>
              <div className="ml-2 text-sm text-primary-200 font-sans">
                HOTELS & RESORTS
              </div>
            </div>
            <p className="text-primary-200 leading-relaxed font-sans">
              A beacon of heartfelt hospitality for over four decades. Experience world-class luxury
              across India's most beautiful destinations.
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center hover:bg-primary-700 transition-colors duration-200 cursor-pointer">
                <span className="text-sm font-bold">f</span>
              </div>
              <div className="w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center hover:bg-primary-700 transition-colors duration-200 cursor-pointer">
                <span className="text-sm font-bold">in</span>
              </div>
              <div className="w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center hover:bg-primary-700 transition-colors duration-200 cursor-pointer">
                <span className="text-sm font-bold">t</span>
              </div>
              <div className="w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center hover:bg-primary-700 transition-colors duration-200 cursor-pointer">
                <span className="text-sm font-bold">ig</span>
              </div>
            </div>
          </div>

          {/* Destinations */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold font-sans">Destinations</h3>
            <div className="grid grid-cols-2 gap-2">
              {footerLinks.destinations.map((destination, index) => (
                <a
                  key={index}
                  href={`#${destination.toLowerCase()}`}
                  className="text-primary-200 hover:text-primary-100 transition-colors duration-200 text-sm font-sans"
                >
                  {destination}
                </a>
              ))}
            </div>
          </div>

          {/* Brand */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold font-sans">Brand</h3>
            <div className="space-y-2">
              {footerLinks.brand.map((item, index) => (
                <a
                  key={index}
                  href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                  className="block text-primary-200 hover:text-primary-100 transition-colors duration-200 text-sm font-sans"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold font-sans">Quick Links</h3>
            <div className="space-y-2">
              {footerLinks.links.slice(0, 8).map((item, index) => (
                <a
                  key={index}
                  href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                  className="block text-primary-200 hover:text-primary-100 transition-colors duration-200 text-sm font-sans"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="mt-12 pt-8 border-t border-primary-800">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-start gap-4">
              <MapPin className="w-6 h-6 text-primary-300 mt-1" />
              <div>
                <h4 className="font-semibold mb-2 font-sans">Head Office</h4>
                <p className="text-primary-200 text-sm font-sans">
                  8-B, Jaydev Vihar, Bhubaneswar - 751013, Odisha, India
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Phone className="w-6 h-6 text-primary-300 mt-1" />
              <div>
                <h4 className="font-semibold mb-2 font-sans">Reservations</h4>
                <p className="text-sm text-primary-200 font-sans">+91 92 3750 0101</p>
                <p className="text-sm text-primary-200 font-sans">reservations@mayfairhotels.com</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Clock className="w-6 h-6 text-primary-300 mt-1" />
              <div>
                <h4 className="font-semibold mb-2 font-sans">24/7 Support</h4>
                <p className="text-primary-200 text-sm font-sans">Round the clock assistance</p>
                <p className="text-primary-200 text-sm font-sans">for all your needs</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-800">
          <div className="max-w-7xl mx-auto py-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="text-primary-300 text-sm font-sans">
                © 2024 Mayfair Hotels & Resorts. All rights reserved.
              </div>
              <div className="flex items-center gap-6 text-sm">
                <a href="#privacy" className="text-primary-300 hover:text-primary-200 transition-colors duration-200 font-sans">
                  Privacy Policy
                </a>
                <a href="#terms" className="text-primary-300 hover:text-primary-200 transition-colors duration-200 font-sans">
                  Terms of Service
                </a>
                <a href="#cookies" className="text-primary-300 hover:text-primary-200 transition-colors duration-200 font-sans">
                  Cookie Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
} 