'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowUpRight, ShieldCheck } from 'lucide-react';
import { HERO_SLIDES } from '@/constants/data';

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-play slider every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);

  return (
    <section className="relative min-h-[90vh] sm:min-h-screen w-full flex items-center justify-center overflow-hidden bg-slate-900 text-white">
      
      {/* Background Image Slider with Refined Contrast Overlays */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="absolute inset-0 w-full h-full"
        >
          <img
            src={HERO_SLIDES[currentSlide].image}
            alt={HERO_SLIDES[currentSlide].title}
            className="w-full h-full object-cover object-center"
          />
          
          {/* Base darkening for crisp image contrast */}
          <div className="absolute inset-0 bg-slate-950/40" />

          {/* Left-to-right gradient scrim to maximize typography legibility */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-950/50 to-transparent" />
          
          {/* Subtle bottom gradient to blend section border cleanly */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-slate-950/30" />
        </motion.div>
      </AnimatePresence>

      {/* Main Content Overlay */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 w-full pt-32 sm:pt-36 flex flex-col justify-between h-full pb-12">
        
        {/* Spacer pushing content down */}
        <div className="flex-1 min-h-[60px]" />

        {/* Hero Slide Copy */}
        <div className="max-w-3xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/80 border border-slate-700/80 text-blue-400 text-xs font-semibold uppercase tracking-wider backdrop-blur-md shadow-md">
                <ShieldCheck className="w-4 h-4 text-blue-400" />
                {HERO_SLIDES[currentSlide].tag}
              </div>

              {/* Title */}
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1] drop-shadow-sm">
                {HERO_SLIDES[currentSlide].title}
              </h1>

              {/* Subtitle */}
              <p className="text-base sm:text-lg text-slate-200 font-normal leading-relaxed max-w-2xl drop-shadow">
                {HERO_SLIDES[currentSlide].subtitle}
              </p>

              {/* Actions */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm px-7 py-3.5 rounded-full shadow-lg shadow-blue-600/30 transition-all hover:scale-105 active:scale-95"
                >
                  Get In Touch
                  <ArrowUpRight className="w-4 h-4" />
                </a>
                <a
                  href="#services"
                  className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 font-semibold text-sm px-7 py-3.5 rounded-full backdrop-blur-md transition-all shadow-sm"
                >
                  Explore Services
                </a>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Bottom Bar: Controls & Progress Dots */}
        <div className="mt-12 pt-8 border-t border-white/15 flex items-center justify-between gap-6">
          
          {/* Slider Controls & Progress Dots */}
          <div className="flex items-center gap-4">
            {/* Dots */}
            <div className="flex gap-2 mr-2">
              {HERO_SLIDES.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    currentSlide === index ? 'w-8 bg-blue-500' : 'w-2 bg-white/40 hover:bg-white/70'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            {/* Previous Button */}
            <button
              onClick={prevSlide}
              className="w-11 h-11 rounded-full bg-slate-900/60 hover:bg-slate-900 border border-white/20 flex items-center justify-center text-white shadow-md backdrop-blur-md transition-all active:scale-95"
              aria-label="Previous Slide"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Next Button */}
            <button
              onClick={nextSlide}
              className="w-11 h-11 rounded-full bg-slate-900/60 hover:bg-slate-900 border border-white/20 flex items-center justify-center text-white shadow-md backdrop-blur-md transition-all active:scale-95"
              aria-label="Next Slide"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}