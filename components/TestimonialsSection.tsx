'use client'

import { Star, Quote } from 'lucide-react'

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: 'Priya Sharma',
      location: 'Mumbai',
      rating: 5,
      comment: 'Absolutely stunning property! The service was impeccable and the rooms were luxurious. Will definitely return.',
      highlight: 'Luxury Experience'
    },
    {
      name: 'Rajesh Kumar',
      location: 'Delhi',
      rating: 5,
      comment: 'The attention to detail is remarkable. From the welcome drink to the personalized service, everything was perfect.',
      highlight: 'Personalized Service'
    },
    {
      name: 'Anita Patel',
      location: 'Bangalore',
      rating: 5,
      comment: 'A truly memorable stay. The spa treatments were rejuvenating and the dining experience was world-class.',
      highlight: 'Wellness & Dining'
    },
    {
      name: 'Vikram Singh',
      location: 'Chennai',
      rating: 5,
      comment: 'The heritage charm combined with modern amenities creates the perfect luxury experience. Highly recommended!',
      highlight: 'Heritage Charm'
    }
  ]

  return (
    <div className="w-full">
      <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
        {/* Card Header */}
        <div className="bg-gradient-to-r from-primary-800 to-primary-900 text-white p-8 lg:p-12">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-white/20 text-white rounded-full text-sm font-medium mb-4">
              Guest Reviews
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-bold leading-tight mb-6">
              What Our{' '}
              <span className="text-primary-200">Guests Say</span>
            </h2>
            <p className="text-lg text-primary-200 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our valued guests have to say about their 
              experiences at Mayfair Hotels & Resorts.
            </p>
          </div>
        </div>

        {/* Card Content */}
        <div className="p-8 lg:p-12">
          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="card p-6 text-center">
                <div className="flex justify-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                <Quote className="w-8 h-8 text-primary-400 mx-auto mb-4" />
                
                <p className="text-primary-700 mb-4 text-sm leading-relaxed">
                  "{testimonial.comment}"
                </p>
                
                <div className="mb-3">
                  <span className="px-3 py-1 bg-primary-50 text-primary-700 text-xs font-medium rounded-full">
                    {testimonial.highlight}
                  </span>
                </div>
                
                <div className="font-semibold text-primary-900">{testimonial.name}</div>
                <div className="text-sm text-primary-600">{testimonial.location}</div>
              </div>
            ))}
          </div>

          {/* Overall Satisfaction */}
          <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl p-8 lg:p-12">
            <div className="text-center mb-12">
              <h3 className="text-2xl lg:text-3xl font-sans font-bold text-primary-900 mb-4">
                Overall Guest Satisfaction
              </h3>
              <p className="text-primary-700 max-w-2xl mx-auto font-sans">
                Our commitment to excellence is reflected in the consistently high ratings 
                and positive feedback from our guests.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-6xl font-bold text-primary-600">4.9</div>
                <div className="text-sm text-primary-700">Average Rating</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-600">98%</div>
                <div className="text-sm text-primary-700">Would Recommend</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-600">4.9/5</div>
                <div className="text-sm text-primary-700">Service Quality</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-600">4.8/5</div>
                <div className="text-sm text-primary-700">Cleanliness</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 