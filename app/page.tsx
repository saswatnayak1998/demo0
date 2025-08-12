'use client'

import { useEffect, useRef } from 'react'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import AboutSection from '@/components/AboutSection'
import LocationsSection from '@/components/LocationsSection'
import FeaturesSection from '@/components/FeaturesSection'
import TestimonialsSection from '@/components/TestimonialsSection'
import CTASection from '@/components/CTASection'
import Footer from '@/components/Footer'

export default function Home() {
  const sectionsRef = useRef<HTMLDivElement[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed')
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
      }
    )

    sectionsRef.current.forEach((section) => {
      if (section) {
        observer.observe(section)
      }
    })

    return () => observer.disconnect()
  }, [])

  const addSectionRef = (el: HTMLDivElement | null) => {
    if (el && !sectionsRef.current.includes(el)) {
      sectionsRef.current.push(el)
    }
  }

  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section - Full Screen */}
        <section className="h-screen">
          <Hero />
        </section>

        {/* About Section Card */}
        <section className="section-card">
          <div ref={addSectionRef} className="section-card-content scroll-reveal from-bottom">
            <AboutSection />
          </div>
        </section>

        {/* Locations Section Card */}
        <section className="section-card">
          <div ref={addSectionRef} className="section-card-content scroll-reveal from-left">
            <LocationsSection />
          </div>
        </section>

        {/* Features Section Card */}
        <section className="section-card">
          <div ref={addSectionRef} className="section-card-content scroll-reveal from-right">
            <FeaturesSection />
          </div>
        </section>

        {/* Testimonials Section Card */}
        <section className="section-card">
          <div ref={addSectionRef} className="section-card-content scroll-reveal from-bottom">
            <TestimonialsSection />
          </div>
        </section>

        {/* CTA Section Card */}
        <section className="section-card">
          <div ref={addSectionRef} className="section-card-content scroll-reveal scale-in">
            <CTASection />
          </div>
        </section>

        {/* Footer */}
        <Footer />
      </main>
    </>
  )
} 