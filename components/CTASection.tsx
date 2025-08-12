'use client'

import { Phone, Mail, MapPin, Calendar } from 'lucide-react'

export default function CTASection() {
  return (
    <div className="w-full">
      <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
        {/* Card Header */}
        <div className="bg-gradient-to-r from-primary-800 to-primary-900 text-white p-8 lg:p-12">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-white/20 text-white rounded-full text-sm font-medium font-sans mb-4">
              Ready to Experience Luxury?
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-bold leading-tight">
              Your Perfect{' '}
              <span className="text-primary-200">Getaway Awaits</span>
            </h2>
            
            <p className="text-xl text-primary-200 leading-relaxed font-sans mt-6">
              Book your stay at any of our 25+ luxury properties across India. From pristine beaches 
              to snow-capped mountains, discover the perfect destination for your next adventure.
            </p>
          </div>
        </div>

        {/* Card Content */}
        <div className="p-8 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* CTA Buttons */}
            <div className="text-center lg:text-left">
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button className="btn-accent text-lg px-8 py-4 font-sans">
                  <Calendar className="inline-block w-5 h-5 mr-2" />
                  Book Your Stay
                </button>
                <button className="btn-secondary text-lg px-8 py-4 border-primary-800 text-primary-800 hover:bg-primary-800 hover:text-white font-sans">
                  View All Properties
                </button>
              </div>
            </div>

            {/* Contact Info */}
            <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl p-8 border border-primary-200">
              <h3 className="text-2xl font-sans font-semibold mb-6 text-center text-primary-900">
                Get in Touch
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold font-sans text-primary-900">Room Reservations</div>
                    <div className="text-primary-700 font-sans">+91 92 3750 0101</div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold font-sans text-primary-900">Email Us</div>
                    <div className="text-primary-700 font-sans">reservations@mayfairhotels.com</div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary-700 rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold font-sans text-primary-900">Head Office</div>
                    <div className="text-primary-700 font-sans">8-B, Jaydev Vihar, Bhubaneswar - 751013</div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-primary-200">
                <div className="text-center">
                  <div className="text-sm text-primary-700 mb-2 font-sans">Follow us for updates</div>
                  <div className="flex justify-center gap-4">
                    <div className="w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center hover:bg-primary-700 transition-colors duration-200 cursor-pointer">
                      <span className="text-white text-lg font-bold">f</span>
                    </div>
                    <div className="w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center hover:bg-primary-700 transition-colors duration-200 cursor-pointer">
                      <span className="text-white text-lg font-bold">in</span>
                    </div>
                    <div className="w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center hover:bg-primary-700 transition-colors duration-200 cursor-pointer">
                      <span className="text-white text-lg font-bold">t</span>
                    </div>
                    <div className="w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center hover:bg-primary-700 transition-colors duration-200 cursor-pointer">
                      <span className="text-white text-lg font-bold">ig</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="mt-16">
            <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl p-8 border border-primary-200 max-w-2xl mx-auto">
              <h3 className="text-2xl font-sans font-semibold mb-4 text-center text-primary-900">
                Stay Updated
              </h3>
              <p className="text-primary-700 mb-6 font-sans text-center">
                Subscribe to our newsletter for exclusive offers, travel tips, and updates about our properties.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg bg-white border border-primary-200 text-primary-900 placeholder-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent font-sans"
                />
                <button className="btn-accent px-6 py-3 font-sans">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 