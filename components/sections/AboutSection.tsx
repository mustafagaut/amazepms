'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { CheckCircle2, ShieldCheck, ArrowUpRight, Award, Building2 } from 'lucide-react';

export default function AboutSection() {
  const highlights = [
    'Strong 15,000+ Work Force',
    '200+ Corporate Clients',
    'PAN India Presence',
    'In-House Facility Experts',
  ];

  return (
    <section id="about" className="relative py-24 bg-slate-50 text-slate-800 overflow-hidden border-b border-slate-200">
      {/* Subtle Light Background Glow */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-blue-100/60 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Story & Highlights */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold tracking-wide uppercase">
              <ShieldCheck className="w-4 h-4 text-blue-600" />
              About Amaze PMS
            </div>

            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-slate-900 leading-[1.15]">
              Leading the Industry with <br />
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Precision & Excellence.
              </span>
            </h2>

            <p className="text-slate-600 text-base leading-relaxed">
              <strong className="text-slate-900">Amaze PMS Pvt Ltd (AMAZE)</strong> is a Property Management division of <strong className="text-slate-900">ACTION GROUP of Companies</strong>, founded in 2001 by <strong className="text-slate-900">Mr. Subhani Abdul</strong>—an Indian Navy veteran, Certified Security Practitioner, and renowned industry pioneer.
            </p>

            <p className="text-slate-600 text-sm leading-relaxed">
              Headquartered in Cyberabad, Telangana, Amaze delivers end-to-end integrated property management solutions across India. We specialize in complete in-house operations including Housekeeping, MEP, Security, Pest Control, Lawn Care, STP/WTP, and Deep Cleaning services.
            </p>

            {/* Feature Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {highlights.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 p-3.5 rounded-xl bg-white border border-slate-200 shadow-sm hover:border-blue-400 transition-colors">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  <span className="text-sm font-semibold text-slate-800">{item}</span>
                </div>
              ))}
            </div>

            {/* Action Call */}
            <div className="pt-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-xl transition-all hover:scale-105 active:scale-95 shadow-md shadow-blue-600/20 text-sm"
              >
                Get Started With Us
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          {/* Right Column: Premium High-Tech Card Frame */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-3xl border border-slate-200 bg-white p-4 sm:p-5 shadow-xl space-y-4">
              
              {/* Top Header Badge */}
              <div className="flex items-center justify-between px-2 pt-1 pb-2 border-b border-slate-100">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600">
                    <Building2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-slate-900 leading-none">Action Group</h3>
                    <span className="text-[11px] text-slate-500">Est. 2001 • Division of AG</span>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-[11px] font-semibold text-blue-700">
                  Navy Veteran Led
                </span>
              </div>

              {/* High Quality Main Team Visual */}
              <div className="relative rounded-2xl overflow-hidden border border-slate-200 group">
                <Image 
                  src="/about.png" 
                  alt="Amaze PMS Leadership Team" 
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover group-hover:scale-102 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent pointer-events-none" />
                
                <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-white/90 backdrop-blur-md border border-slate-200/80 shadow-sm z-10">
                  <p className="text-xs font-semibold text-slate-900">Action Group Leadership & Staff</p>
                  <p className="text-[11px] text-slate-600">Cyberabad, Telangana HQ</p>
                </div>
              </div>

              {/* Bottom Quick Credibility Strip */}
              <div className="grid grid-cols-2 gap-3 pt-1">
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-center gap-3">
                  <Award className="w-5 h-5 text-indigo-600 flex-shrink-0" />
                  <div>
                    <p className="text-[11px] text-slate-500">Leadership</p>
                    <p className="text-xs font-bold text-slate-900">Indian Navy Veteran</p>
                  </div>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-center gap-3">
                  <ShieldCheck className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  <div>
                    <p className="text-[11px] text-slate-500">Coverage</p>
                    <p className="text-xs font-bold text-slate-900">20M+ Sq. Ft. Managed</p>
                  </div>
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}