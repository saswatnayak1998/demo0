'use client'

import { MapPin, Star, Users, Wifi, Car, Utensils } from 'lucide-react'

export default function LocationsSection() {
  const locations = [
    {
      name: 'Bhubaneswar',
      description: 'Capital city with rich cultural heritage',
      properties: ['Mayfair Lagoon', 'Mayfair Convention'],
      image: 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80',
      features: ['City Center', 'Business Hub', 'Cultural Sites']
    },
    {
      name: 'Darjeeling',
      description: 'Queen of the Hills with tea gardens',
      properties: ['Mayfair Darjeeling'],
      image: 'https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      features: ['Mountain Views', 'Tea Gardens', 'Cool Climate']
    },
    {
      name: 'Goa',
      description: 'Beach paradise with Portuguese heritage',
      properties: ['Mayfair Goa'],
      image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      features: ['Beach Access', 'Water Sports', 'Nightlife']
    },
    {
      name: 'Gangtok',
      description: 'Sikkim capital with Himalayan views',
      properties: ['Mayfair Gangtok'],
      image: 'https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      features: ['Mountain Views', 'Buddhist Culture', 'Adventure']
    }
  ]

  return (
    <div className="w-full">
      <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
        {/* Card Header */}
        <div className="bg-gradient-to-r from-primary-800 to-primary-900 text-white p-8 lg:p-12">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-white/20 text-white rounded-full text-sm font-medium mb-4">
              Our Destinations
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-bold leading-tight mb-6">
              Discover{' '}
              <span className="text-primary-200">Amazing Locations</span>
            </h2>
            <p className="text-lg text-primary-200 max-w-3xl mx-auto">
              From the bustling cities to serene hill stations, experience the diverse beauty of India 
              through our carefully selected properties.
            </p>
          </div>
        </div>

        {/* Card Content */}
        <div className="p-8 lg:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {locations.map((location, index) => (
              <div key={index} className="card overflow-hidden group">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={location.image}
                    alt={location.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <span className="text-sm font-medium">{location.name}</span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-sans font-semibold text-primary-900 mb-3">
                    {location.name}
                  </h3>
                  <p className="text-primary-700 mb-4">
                    {location.description}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="font-medium text-primary-900 mb-2">Properties:</h4>
                    <ul className="space-y-1">
                      {location.properties.map((property, propIndex) => (
                        <li key={propIndex} className="text-sm text-primary-700 flex items-center gap-2">
                          <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                          {property}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {location.features.map((feature, featureIndex) => (
                      <span
                        key={featureIndex}
                        className="px-3 py-1 bg-primary-100 text-primary-700 text-xs font-medium rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
} 