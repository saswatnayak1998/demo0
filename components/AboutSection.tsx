'use client'

import { Heart, Star, Award, Users } from 'lucide-react'

export default function AboutSection() {
  const stats = [
    { icon: Heart, value: '40+', label: 'Years of Excellence' },
    { icon: Star, value: '5', label: 'Star Luxury' },
    { icon: Award, value: '25+', label: 'Properties' },
    { icon: Users, value: '1M+', label: 'Happy Guests' },
  ]

  return (
    <div className="w-full">
      <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
        {/* Card Header */}
        <div className="bg-gradient-to-r from-primary-800 to-primary-900 text-white p-8 lg:p-12">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-white/20 text-white rounded-full text-sm font-medium font-sans mb-4">
              About the Brand
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-bold leading-tight">
              More than four decades of{' '}
              <span className="text-primary-200">world-class hospitality</span>
            </h2>
          </div>
        </div>

        {/* Card Content */}
        <div className="p-8 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-6">
              <p className="text-lg text-primary-700 leading-relaxed font-sans">
                Shri Dilip Ray had a dream of setting up world-class hotels and resorts that would establish
                a benchmark in the world of hospitality. With trademark low-rise structures, heavily aesthetic
                in appeal, and ensconced within a biodiverse eco-friendly environment.
              </p>

              <p className="text-lg text-primary-700 leading-relaxed font-sans">
                Our vibrant and welcoming interiors combined with warm hospitality provide guests with the
                comfort of a home away from home, creating unforgettable experiences across India's most
                beautiful destinations.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-6 pt-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="flex justify-center mb-2">
                      <stat.icon className="w-8 h-8 text-primary-600" />
                    </div>
                    <div className="text-2xl font-bold text-primary-900 font-sans">{stat.value}</div>
                    <div className="text-sm text-primary-700 font-sans">{stat.label}</div>
                  </div>
                ))}
              </div>

              <div className="pt-6">
                <button className="btn-primary font-sans">
                  Learn More About Us
                </button>
              </div>
            </div>

            {/* Image Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden shadow-lg bg-primary-50">
                  <img
                    src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=2070&q=80"
                    alt="Luxury Hotel Interior"
                    className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-lg bg-primary-50">
                  <img
                    src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=2068&q=80"
                    alt="Hotel Garden"
                    className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="rounded-2xl overflow-hidden shadow-lg bg-primary-50">
                  <img
                    src="https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=2069&q=80"
                    alt="Hotel Exterior"
                    className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-lg bg-primary-50">
                  <img
                    src="https://images.unsplash.com/photo-1582719478250-c89cae4cb85b?auto=format&fit=crop&w=2070&q=80"
                    alt="Luxury Suite"
                    className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 