'use client'

import { Utensils, Heart, Users, Car, Wifi, Shield, Star, Sparkles } from 'lucide-react'

export default function FeaturesSection() {
  const features = [
    {
      icon: Utensils,
      title: 'Unique Dining Experiences',
      description: 'With a blend of modern and traditional cooking styles, our professional chefs create dishes that will blow your mind!',
      color: 'text-primary-500'
    },
    {
      icon: Heart,
      title: 'Wellness & Rejuvenation',
      description: 'Each property features an in-house wellness spa with professional therapists to help you heal and unwind.',
      color: 'text-primary-600'
    },
    {
      icon: Users,
      title: 'Glamorous Events',
      description: 'Phenomenal event spaces perfect for conferences, exhibitions, weddings, and social occasions.',
      color: 'text-primary-700'
    },
    {
      icon: Car,
      title: 'Vintage Charm',
      description: 'Our heritage hotels feature unique legacies with vintage cars, statues, and exquisite artefacts.',
      color: 'text-primary-700'
    },
    {
      icon: Wifi,
      title: 'Modern Amenities',
      description: 'State-of-the-art facilities combined with traditional hospitality for the perfect blend of comfort and luxury.',
      color: 'text-primary-600'
    },
    {
      icon: Shield,
      title: 'Safety & Hygiene',
      description: 'Rigorous safety protocols and impeccable cleanliness standards ensure your well-being.',
      color: 'text-primary-500'
    }
  ]

  const highlights = [
    {
      icon: Star,
      title: '5-Star Luxury',
      description: 'World-class standards in every detail'
    },
    {
      icon: Heart,
      title: 'Heartfelt Hospitality',
      description: 'Genuine care and attention to every guest'
    },
    {
      icon: Sparkles,
      title: 'Family Friendly',
      description: 'Perfect for memorable family vacations'
    }
  ]

  return (
    <div className="w-full">
      <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
        {/* Card Header */}
        <div className="bg-gradient-to-r from-primary-800 to-primary-900 text-white p-8 lg:p-12">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-white/20 text-white rounded-full text-sm font-medium mb-4 font-sans">
              What We're Known For
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-bold leading-tight mb-6">
              Experience{' '}
              <span className="text-primary-200">Unparalleled Luxury</span>
            </h2>
            <p className="text-lg text-primary-200 max-w-3xl mx-auto font-sans">
              MAYFAIR Hotels & Resorts aspires to provide a bespoke experience like no other.
              We are a product of immaculate accommodations, exquisite dining, elegant event spaces and wellness offerings.
            </p>
          </div>
        </div>

        {/* Card Content */}
        <div className="p-8 lg:p-12">
          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => (
              <div key={index} className="card p-8 text-center group">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-100 mb-6 group-hover:bg-primary-200 transition-colors duration-200`}>
                  <feature.icon className={`w-8 h-8 ${feature.color}`} />
                </div>
                <h3 className="text-xl font-sans font-semibold text-primary-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-primary-700 leading-relaxed font-sans">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          {/* Highlights Section */}
          <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl p-8 lg:p-12">
            <div className="text-center mb-12">
              <h3 className="text-2xl lg:text-3xl font-sans font-bold text-primary-900 mb-4">
                Why Choose Mayfair?
              </h3>
              <p className="text-primary-700 max-w-2xl mx-auto font-sans">
                We combine luxury with authenticity, creating experiences that go beyond expectations
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {highlights.map((highlight, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary-100 mb-6">
                    <highlight.icon className="w-10 h-10 text-primary-600" />
                  </div>
                  <h4 className="text-xl font-sans font-semibold text-primary-900 mb-3">
                    {highlight.title}
                  </h4>
                  <p className="text-primary-700 font-sans">
                    {highlight.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-600 font-sans">25+</div>
                  <div className="text-sm text-primary-700 font-sans">Properties</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-600 font-sans">40+</div>
                  <div className="text-sm text-primary-700 font-sans">Years</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-600 font-sans">1M+</div>
                  <div className="text-sm text-primary-700 font-sans">Guests</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-600 font-sans">5★</div>
                  <div className="text-sm text-primary-700 font-sans">Rating</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 