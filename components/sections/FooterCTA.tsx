'use client';

import Link from 'next/link';
import Image from 'next/image'; // Import Next.js Image component
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { 
  PhoneCall, 
  ArrowRight, 
  MapPin, 
  Phone, 
  Mail, 
  Map, 
  ChevronUp,
  ChevronRight
} from 'lucide-react';

import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

export default function FooterCTA() {
  const pathname = usePathname();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (pathname === '/contact') {
      e.preventDefault();
      scrollToTop();
    }
  };

  const presenceStates = [
    'Telangana',
    'Andhra Pradesh',
    'Karnataka',
    'Tamil Nadu',
    'Odisha',
  ];

  return (
    <footer className="relative bg-[#F8FAFC] text-slate-600 pt-16 pb-12 overflow-hidden border-t border-slate-200/80 w-full">
      {/* Dynamic Background Ambient Blobs */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-blue-200/30 blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-indigo-200/25 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Top Floating Glass CTA Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="group relative rounded-3xl bg-white/80 backdrop-blur-2xl border border-white/80 p-8 sm:p-10 mb-20 shadow-[0_15px_40px_rgba(37,99,235,0.06)] hover:shadow-[0_25px_50px_rgba(37,99,235,0.12)] transition-all duration-300 overflow-hidden"
        >
          <div className="absolute top-0 left-10 right-10 h-[2px] bg-gradient-to-r from-blue-500 via-indigo-500 to-sky-400 opacity-60 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />

          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 relative z-10">
            <div className="flex items-center gap-5">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white flex items-center justify-center flex-shrink-0 shadow-lg shadow-blue-600/20 group-hover:scale-105 transition-transform duration-300">
                <PhoneCall className="w-7 h-7" />
              </div>
              <div>
                <span className="text-[11px] font-bold text-blue-600 uppercase tracking-widest bg-blue-50/80 px-2.5 py-0.5 rounded-full border border-blue-100">
                  Call For More Info
                </span>
                <a 
                  href="tel:9100694137" 
                  className="block text-2xl sm:text-3xl font-black text-slate-900 hover:text-blue-600 transition-colors mt-1"
                >
                  91006 94137
                </a>
              </div>
            </div>

            <div className="text-center lg:text-left">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Call Us For Our Services
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                Get custom corporate facility management & workforce solutions.
              </p>
            </div>

            <Link
              href="/contact"
              onClick={handleContactClick}
              className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold px-8 py-4 rounded-2xl transition-all hover:scale-105 active:scale-95 shadow-lg shadow-blue-600/25 text-xs tracking-wider flex-shrink-0"
            >
              <span>CONTACT US</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </motion.div>

        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-16 border-b border-slate-200/80">
          
          {/* Localized & Optimized Logo Section */}
          <div className="lg:col-span-4 space-y-5">
            <Link href="/" className="inline-block group">
              <div className="bg-white/90 backdrop-blur-md px-4 py-2.5 rounded-2xl border border-slate-200/80 shadow-sm group-hover:border-blue-400 group-hover:shadow-md transition-all flex items-center justify-center w-fit">
                {/* 
                  Next.js Image Lazy Loading implementation:
                  - Local file path: '/logo.png' (refers to public/logo.png)
                  - Default behavior: loading="lazy" (loads only when scrolled into view)
                */}
                <Image 
                  src="/logo.png" 
                  alt="Amaze PMS Logo" 
                  width={160}
                  height={40}
                  loading="lazy"
                  className="h-9 w-auto object-contain"
                />
              </div>
            </Link>

            <p className="text-xs text-slate-600 leading-relaxed pr-4 font-normal">
              Amaze Property Management Solutions Pvt Ltd — Division of Action Group, offering integrated property and facility management PAN India.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3 pt-2">
              <a href="#" aria-label="Facebook" className="w-9 h-9 rounded-xl bg-white border border-slate-200/80 flex items-center justify-center text-slate-600 hover:text-white hover:bg-blue-600 hover:border-blue-600 transition-all shadow-sm hover:scale-110">
                <FaFacebookF className="w-3.5 h-3.5" />
              </a>
              <a href="#" aria-label="Instagram" className="w-9 h-9 rounded-xl bg-white border border-slate-200/80 flex items-center justify-center text-slate-600 hover:text-white hover:bg-pink-600 hover:border-pink-600 transition-all shadow-sm hover:scale-110">
                <FaInstagram className="w-3.5 h-3.5" />
              </a>
              <a href="#" aria-label="LinkedIn" className="w-9 h-9 rounded-xl bg-white border border-slate-200/80 flex items-center justify-center text-slate-600 hover:text-white hover:bg-blue-600 hover:border-blue-600 transition-all shadow-sm hover:scale-110">
                <FaLinkedinIn className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-2 space-y-4">
            <h5 className="text-sm font-bold text-slate-900 tracking-wide border-b border-slate-200/80 pb-2">
              Menu
            </h5>
            <ul className="space-y-2.5 text-xs text-slate-600 font-medium">
              {[
                { name: 'Home', href: '/' },
                { name: 'About Us', href: '/about' },
                { name: 'Services', href: '/services' },
                { name: 'Our Strength', href: '/our-strength' },
                { name: 'Gallery', href: '/gallery' },
              ].map((link, idx) => (
                <li key={idx}>
                  <Link href={link.href} className="group flex items-center gap-1.5 hover:text-blue-600 transition-colors">
                    <ChevronRight className="w-3 h-3 text-slate-400 opacity-0 group-hover:opacity-100 -ml-2 group-hover:ml-0 transition-all" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-4">
            <h5 className="text-sm font-bold text-slate-900 tracking-wide border-b border-slate-200/80 pb-2">
              Quick Links
            </h5>
            <ul className="space-y-2.5 text-xs text-slate-600 font-medium">
              <li>
                <Link href="/our-clients" className="group flex items-center gap-1.5 hover:text-blue-600 transition-colors">
                  <ChevronRight className="w-3 h-3 text-slate-400 opacity-0 group-hover:opacity-100 -ml-2 group-hover:ml-0 transition-all" />
                  <span>Our Clients</span>
                </Link>
              </li>
              <li>
                <Link href="/recruitments" className="group flex items-center gap-1.5 hover:text-blue-600 transition-colors">
                  <ChevronRight className="w-3 h-3 text-slate-400 opacity-0 group-hover:opacity-100 -ml-2 group-hover:ml-0 transition-all" />
                  <span>Recruitments</span>
                </Link>
              </li>
              <li>
                <Link href="/careers" className="group flex items-center gap-1.5 hover:text-blue-600 transition-colors">
                  <ChevronRight className="w-3 h-3 text-slate-400 opacity-0 group-hover:opacity-100 -ml-2 group-hover:ml-0 transition-all" />
                  <span>Careers</span>
                </Link>
              </li>
              <li>
                <Link 
                  href="/contact" 
                  onClick={handleContactClick} 
                  className="group flex items-center gap-1.5 hover:text-blue-600 transition-colors"
                >
                  <ChevronRight className="w-3 h-3 text-slate-400 opacity-0 group-hover:opacity-100 -ml-2 group-hover:ml-0 transition-all" />
                  <span>Contact Us</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Regional Presence */}
          <div className="lg:col-span-2 space-y-4">
            <h5 className="text-sm font-bold text-slate-900 tracking-wide border-b border-slate-200/80 pb-2">
              Our Presence
            </h5>
            <ul className="space-y-2 text-xs text-slate-600 font-medium">
              {presenceStates.map((state, idx) => (
                <li key={idx} className="flex items-center gap-2 bg-white/60 backdrop-blur-xs px-2.5 py-1.5 rounded-lg border border-slate-200/60">
                  <Map className="w-3.5 h-3.5 text-blue-600 flex-shrink-0" />
                  <span>{state}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-2 space-y-4">
            <h5 className="text-sm font-bold text-slate-900 tracking-wide border-b border-slate-200/80 pb-2">
              Contact
            </h5>
            <div className="space-y-3 text-xs text-slate-600">
              <div className="flex items-start gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center flex-shrink-0 text-blue-600">
                  <MapPin className="w-3.5 h-3.5" />
                </div>
                <span className="leading-relaxed">
                  4th Floor, High Mark Chambers, Khajaguda X Road, Cyberabad, Hyderabad-500008
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center flex-shrink-0 text-blue-600">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                <a href="tel:9100694137" className="hover:text-blue-600 transition-colors font-semibold">91006 94137</a>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center flex-shrink-0 text-blue-600">
                  <Mail className="w-3.5 h-3.5" />
                </div>
                <a href="mailto:info@amazepms.com" className="hover:text-blue-600 transition-colors font-semibold truncate">info@amazepms.com</a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-medium">
          <p>© {new Date().getFullYear()} Amaze Property Management Solutions Pvt Ltd. All rights reserved.</p>

          <button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white flex items-center justify-center transition-all hover:scale-110 active:scale-95 shadow-md shadow-blue-600/25"
            aria-label="Back to Top"
          >
            <ChevronUp className="w-5 h-5" />
          </button>
        </div>

      </div>
    </footer>
  );
}