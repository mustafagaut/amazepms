'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Images, 
  X, 
  ZoomIn, 
  Sparkles, 
  ChevronLeft, 
  ChevronRight 
} from 'lucide-react';
import FooterCTA from '@/components/sections/FooterCTA';

interface GalleryItem {
  id: number;
  src: string;
  title: string;
  category: string;
}

export default function GalleryPage() {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const galleryItems: GalleryItem[] = [
    {
      id: 1,
      src: 'https://www.amazepms.com/assets/gallery1.png',
      title: 'Facility Management Staff Orientation',
      category: 'staff',
    },
    {
      id: 2,
      src: 'https://www.amazepms.com/assets/gallery2.png',
      title: 'Supervisory Operations Team',
      category: 'operations',
    },
    {
      id: 3,
      src: 'https://www.amazepms.com/assets/gallery3.png',
      title: 'In-House Workforce Classroom Training',
      category: 'training',
    },
    {
      id: 4,
      src: 'https://www.amazepms.com/assets/gallery4.png',
      title: 'Housekeeping & Healthcare Unit Personnel',
      category: 'staff',
    },
    {
      id: 5,
      src: 'https://www.amazepms.com/assets/gallery5.png',
      title: 'Field Operations & Technical Team',
      category: 'operations',
    },
    {
      id: 6,
      src: 'https://www.amazepms.com/assets/gallery6.png',
      title: 'Kitchen & Appliance Deep Cleaning Services',
      category: 'services',
    },
    {
      id: 7,
      src: 'https://www.amazepms.com/assets/gallery7.png',
      title: 'Countertop & Specialized Surface Maintenance',
      category: 'services',
    },
  ];

  const categories = [
    { id: 'all', label: 'All Photos' },
    { id: 'staff', label: 'Staff & Personnel' },
    { id: 'operations', label: 'Operations & Supervision' },
    { id: 'training', label: 'Training Sessions' },
    { id: 'services', label: 'Deep Cleaning & Maintenance' },
  ];

  const filteredItems = activeCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  const handlePrev = () => {
    if (selectedImageIndex === null) return;
    setSelectedImageIndex((prev) => 
      prev === 0 ? filteredItems.length - 1 : (prev as number) - 1
    );
  };

  const handleNext = () => {
    if (selectedImageIndex === null) return;
    setSelectedImageIndex((prev) => 
      prev === filteredItems.length - 1 ? 0 : (prev as number) + 1
    );
  };

  return (
    <main className="min-h-screen bg-slate-50 text-slate-800 flex flex-col justify-between pt-28">
      <section className="relative px-6 max-w-7xl mx-auto w-full mb-16">
        {/* Glow Ambient Effect */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-blue-200/40 blur-[160px] rounded-full pointer-events-none" />

        {/* Hero Title Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto space-y-4 mb-14 relative z-10"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold uppercase tracking-wide shadow-sm">
            <Images className="w-4 h-4 text-blue-600" />
            Media Gallery
          </div>

          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-slate-900 leading-tight">
            Our <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Gallery</span>
          </h1>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            A visual overview of our trained workforce, operational excellence, on-site services, and rigorous training sessions.
          </p>
        </motion.div>

        {/* Category Filter Tabs */}
        <div className="w-full overflow-x-auto pb-4 mb-12 scrollbar-none relative z-10">
          <div className="flex items-center gap-2 min-w-max px-4 sm:justify-center">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                  activeCategory === cat.id
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-600/20'
                    : 'bg-white border border-slate-200 text-slate-600 hover:text-slate-900 hover:border-slate-300 shadow-sm'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20 relative z-10">
          <AnimatePresence>
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                onClick={() => setSelectedImageIndex(index)}
                className="group relative overflow-hidden rounded-2xl bg-white border border-slate-200 cursor-pointer hover:border-blue-500/50 hover:shadow-lg transition-all duration-300"
              >
                {/* Image Wrapper */}
                <div className="aspect-[4/3] w-full overflow-hidden bg-slate-100">
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>

                {/* Glassmorphism Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs text-blue-300 font-semibold uppercase tracking-wide flex items-center gap-1">
                        <Sparkles className="w-3 h-3" /> Amaze PMS
                      </p>
                      <h3 className="text-sm font-bold text-white mt-1">
                        {item.title}
                      </h3>
                    </div>
                    <div className="w-9 h-9 rounded-xl bg-blue-600 text-white flex items-center justify-center shadow-lg shadow-blue-600/30">
                      <ZoomIn className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImageIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-slate-900/70 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setSelectedImageIndex(null)}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedImageIndex(null)}
              className="absolute top-6 right-6 p-2.5 rounded-full bg-white/90 border border-slate-200 text-slate-700 hover:text-slate-900 shadow-md transition-colors z-10"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Navigation Controls */}
            <button
              onClick={(e) => { e.stopPropagation(); handlePrev(); }}
              className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/90 border border-slate-200 text-slate-700 hover:text-slate-900 shadow-md transition-colors z-10"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); handleNext(); }}
              className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/90 border border-slate-200 text-slate-700 hover:text-slate-900 shadow-md transition-colors z-10"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Modal Image Box */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-4xl max-h-[85vh] rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-2xl flex flex-col"
            >
              <img
                src={filteredItems[selectedImageIndex].src}
                alt={filteredItems[selectedImageIndex].title}
                className="w-full h-auto max-h-[75vh] object-contain bg-slate-100"
              />
              <div className="p-4 bg-white border-t border-slate-100 flex items-center justify-between">
                <span className="text-sm font-semibold text-slate-900">
                  {filteredItems[selectedImageIndex].title}
                </span>
                <span className="text-xs text-slate-500 font-medium">
                  {selectedImageIndex + 1} / {filteredItems.length}
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer */}
      <FooterCTA />
    </main>
  );
}