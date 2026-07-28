'use client';

import { motion } from 'framer-motion';
import { PARTNERS } from '@/constants/data';

export default function TrustBanner() {
  // Duplicate array to allow infinite seamless looping
  const duplicatedPartners = [...PARTNERS, ...PARTNERS, ...PARTNERS];

  return (
    <section id="clients" className="relative py-12 bg-slate-50 border-y border-slate-200 overflow-hidden">
      
      {/* Side Gradient Fade Overlays for Smooth Marquee Transitions */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 mb-8 text-center sm:text-left">
        <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest">
          Trusted by 200+ Valued Partners Across India
        </p>
      </div>

      {/* Infinite Marquee Container */}
      <div className="flex overflow-hidden select-none">
        <motion.div
          animate={{ x: ['0%', '-50%'] }}
          transition={{
            repeat: Infinity,
            ease: 'linear',
            duration: 25,
          }}
          className="flex items-center gap-12 min-w-max"
        >
          {duplicatedPartners.map((partner, idx) => (
            <div
              key={idx}
              className="group flex items-center justify-center px-6 py-3 min-w-[160px] h-16 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-400 transition-all duration-300 opacity-85 hover:opacity-100 flex-shrink-0"
            >
              {partner.imageUrl ? (
                <img
                  src={partner.imageUrl}
                  alt={partner.name}
                  className="max-h-9 max-w-[120px] object-contain transition-all duration-300"
                />
              ) : (
                <span className="text-sm font-extrabold tracking-wider text-slate-800 group-hover:text-blue-600 transition-colors">
                  {partner.logo}
                </span>
              )}
            </div>
          ))}
        </motion.div>
      </div>

    </section>
  );
}