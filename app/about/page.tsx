'use client';

import { motion } from 'framer-motion';
import { 
  ShieldCheck, 
  Building2, 
  CheckCircle2, 
  Phone, 
  Mail, 
  MapPin, 
  Wrench, 
  Sparkles, 
  Shield, 
  Trees, 
  Brush, 
  Bug, 
  Briefcase 
} from 'lucide-react';
import FooterCTA from '@/components/sections/FooterCTA';
import InfoCard from '@/components/ui/InfoCard';

export default function AboutPage() {
  const coreServices = [
    { title: 'PMS Services', icon: Building2 },
    { title: 'MEP Services', icon: Wrench },
    { title: 'Housekeeping Services', icon: Brush },
    { title: 'Security Services', icon: Shield },
    { title: 'Gardening Services', icon: Trees },
    { title: 'Deep Cleaning Services', icon: Sparkles },
    { title: 'Maid Cleaning Services', icon: Brush },
    { title: 'Facade Services', icon: Building2 },
    { title: 'Project Cleaning Services', icon: Sparkles },
    { title: 'Pest Control Services', icon: Bug },
    { title: 'Office Support Services', icon: Briefcase },
  ];

  const presenceStates = [
    'Telangana',
    'Andhra Pradesh',
    'Karnataka',
    'Tamil Nadu',
    'Odisha',
  ];

  return (
    <main className="min-h-screen bg-slate-50 text-slate-800 flex flex-col justify-between pt-28">
      {/* Hero Banner Section */}
      <section className="relative px-6 max-w-7xl mx-auto w-full mb-16">
        {/* Glow Effects */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-200/40 blur-[150px] rounded-full pointer-events-none" />

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto space-y-4 mb-16 relative z-10"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold uppercase tracking-wide shadow-sm">
            <ShieldCheck className="w-4 h-4 text-blue-600" />
            Corporate Overview
          </div>

          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-slate-900 leading-tight">
            About <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Amaze PMS</span>
          </h1>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            A premier Property Management division of ACTION GROUP of Companies, delivering end-to-end facility solutions across India.
          </p>
        </motion.div>

        {/* Corporate Legacy Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20 relative z-10">
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-2xl sm:text-4xl font-bold text-slate-900 tracking-tight">
              Leading with Precision & Trust
            </h2>
            <p className="text-slate-700 text-base leading-relaxed">
              <strong className="text-slate-900">Amaze Property Management Solutions Pvt Ltd (AMAZE)</strong> is a trusted property management division operating as part of the <strong className="text-slate-900">ACTION GROUP of Companies</strong>.
            </p>
            <p className="text-slate-600 text-sm leading-relaxed">
              Founded in 2001 by <strong className="text-slate-900">Mr. Subhani Abdul</strong>—an Indian Navy veteran, Certified Security Practitioner, and industry pioneer—Amaze manages over 20+ million sq. ft. of property space with a team of 15,000+ trained in-house professionals.
            </p>

            {/* Key Business Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4">
              <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm">
                <span className="text-2xl font-extrabold text-blue-600 block">2001</span>
                <span className="text-xs text-slate-500 font-medium">Established</span>
              </div>
              <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm">
                <span className="text-2xl font-extrabold text-blue-600 block">15,000+</span>
                <span className="text-xs text-slate-500 font-medium">Workforce</span>
              </div>
              <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm col-span-2 sm:col-span-1">
                <span className="text-2xl font-extrabold text-blue-600 block">20M+</span>
                <span className="text-xs text-slate-500 font-medium">Sq. Ft. Managed</span>
              </div>
            </div>
          </div>

          {/* Team / Office Media Box */}
          <div className="lg:col-span-5">
            <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-xl space-y-4">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <div className="flex items-center gap-2.5">
                  <Building2 className="w-5 h-5 text-blue-600" />
                  <span className="text-sm font-semibold text-slate-900">Action Group Headquarters</span>
                </div>
                <span className="text-xs text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-200 font-medium">
                  Cyberabad
                </span>
              </div>

              <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-inner">
                <img 
                  src="https://www.amazepms.com/assets/about1.png" 
                  alt="Amaze Leadership Team" 
                  className="w-full h-auto object-cover"
                />
              </div>

              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-center">
                <p className="text-xs font-semibold text-slate-900">Amaze Property Management Leadership</p>
                <p className="text-[11px] text-slate-500">4th floor, High Mark Chambers, Khajaguda X Road</p>
              </div>
            </div>
          </div>
        </div>

        {/* All Offered Services List */}
        <div className="mb-20 space-y-8 relative z-10">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">Our Comprehensive Solutions</h3>
            <p className="text-xs sm:text-sm text-slate-600">Complete end-to-end services tailored for commercial and corporate real estate across India.</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {coreServices.map((service, idx) => (
              <InfoCard
                key={idx}
                variant="compact"
                title={service.title}
                icon={service.icon}
              />
            ))}
          </div>
        </div>

        {/* Official Address & Presence Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-16 relative z-10">
          {/* Office Address Card */}
          <div className="md:col-span-7 p-8 rounded-3xl bg-white border border-slate-200 shadow-md space-y-6">
            <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
              <MapPin className="w-6 h-6 text-blue-600 flex-shrink-0" />
              <div>
                <h4 className="text-lg font-bold text-slate-900">Our Head Office Address</h4>
                <p className="text-xs text-slate-500">Cyberabad Headquarters</p>
              </div>
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-slate-600">
              <p className="leading-relaxed">
                <strong className="text-slate-900">Registered Office:</strong><br />
                4th floor, High Mark Chambers, Khajaguda X road, Cyberabad, Hyderabad - 500008
              </p>
              <p className="leading-relaxed">
                <strong className="text-slate-900">Location Site:</strong><br />
                4th Floor, Plot NO:23, Apex Tower, 24 & 25, Lumbini Avenue, Gachibowli, Hyderabad, Telangana - 500032
              </p>

              <div className="flex flex-wrap gap-4 pt-2 border-t border-slate-100">
                <a href="tel:9100694137" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium hover:underline">
                  <Phone className="w-4 h-4" />
                  9100694137
                </a>
                <a href="mailto:Info@amazepms.com" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium hover:underline">
                  <Mail className="w-4 h-4" />
                  Info@amazepms.com
                </a>
              </div>
            </div>
          </div>

          {/* Regional Presence Card */}
          <div className="md:col-span-5 p-8 rounded-3xl bg-white border border-slate-200 shadow-md space-y-6 flex flex-col justify-between">
            <div>
              <h4 className="text-lg font-bold text-slate-900 mb-2">Our Regional Presence</h4>
              <p className="text-xs text-slate-500 mb-6">Delivering standard facility solutions across key states in India.</p>

              <div className="space-y-3">
                {presenceStates.map((state, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200/80 text-xs font-semibold text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-blue-600" />
                    {state}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

      </section>

      {/* Footer */}
      <FooterCTA />
    </main>
  );
}