'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { NAV_LINKS } from '@/constants/data';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed inset-x-0 top-0 z-50 w-full bg-white/80 backdrop-blur-xl border-b border-slate-200 box-border">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between gap-2">
        
        {/* Brand Logo */}
        <Link href="/" className="flex-shrink-0 inline-flex items-center">
          <div className="bg-white px-3 py-2 rounded-xl border border-slate-200 shadow-sm flex items-center justify-center">
            {/* 
              - Local image path: '/logo.png' points directly to 'public/logo.png'
              - priority: Forces high-priority loading because logo is above-the-fold
            */}
            <Image
              src="/logo.png"
              alt="Amaze PMS Logo"
              width={160}
              height={40}
              className="h-9 sm:h-10 w-auto object-contain max-w-[140px] sm:max-w-[160px]"
              priority
            />
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden xl:flex items-center gap-1 bg-slate-100/80 p-1.5 rounded-full border border-slate-200/80">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 whitespace-nowrap ${
                  isActive
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTA Button */}
        <div className="hidden xl:flex items-center gap-3 flex-shrink-0">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-medium text-xs transition-all hover:scale-105 active:scale-95 shadow-md shadow-blue-600/20 whitespace-nowrap"
          >
            Get In Touch
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="xl:hidden p-2 rounded-xl bg-slate-100 border border-slate-200 text-slate-700 hover:text-slate-900 hover:bg-slate-200 transition-colors flex-shrink-0"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Slide-down Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden w-full bg-white/95 backdrop-blur-2xl border-b border-slate-200 px-4 py-5 space-y-3">
          <div className="flex flex-col gap-2">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`w-full px-4 py-3 rounded-xl text-xs font-medium transition-all flex items-center justify-between ${
                    isActive
                      ? 'bg-blue-600 text-white font-semibold'
                      : 'bg-slate-50 border border-slate-200/80 text-slate-700 hover:bg-slate-100 hover:text-slate-900'
                  }`}
                >
                  <span className="truncate">{link.name}</span>
                </Link>
              );
            })}
          </div>

          <div className="pt-2">
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-medium text-xs transition-all shadow-md shadow-blue-600/20"
            >
              Get In Touch
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}