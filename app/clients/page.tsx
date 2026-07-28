'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Building2, 
  Home, 
  ShoppingBag, 
  Building, 
  GraduationCap, 
  Factory, 
  PieChart, 
  Users2
} from 'lucide-react';
import FooterCTA from '@/components/sections/FooterCTA';
import InfoCard from '@/components/ui/InfoCard';

export default function OurClientsPage() {
  const [activeTab, setActiveTab] = useState<string>('all');

  const clientCategories = [
    {
      id: 'commercial',
      title: 'Commercial & IT Parks',
      icon: Building2,
      clients: [
        'Sohini Tech Park', 'BSR Tech Park', 'Divyasree NSL (Orion Campus)', 'Kapil Towers', 
        'Astra Towers', 'Rajapushpa Summit', 'Cyperoptics', 'IVY Infotech', 'L&T Metro Stations', 
        'Purva Summit', 'Kapil Business Park', 'I Labs', 'Sattva Knowledge Park', 'Tech Mahindra', 
        'T Hub', 'Tech Ridge', 'Cyber Towers', 'Aurobindo Galaxy', 'Kapil Kavuri Hub', 
        'Sitel India Pvt Ltd', 'Jocota', 'Moschip', 'Smart Drive', 'I Sprout'
      ]
    },
    {
      id: 'residential',
      title: 'Residential Communities',
      icon: Home,
      clients: [
        'Golf Edge Residences', 'Aparna Silver Oak', 'Mahindra Ashvitha', 'Golf View', 
        'Ramky Towers', 'Rajapushpa Imperia', 'Lanco Hills', 'Rajapushpa Provincia', 
        'Krinss Villas', 'Hill County', 'Rajapushpa Greendale', 'Jains Balaji', 
        'Kalpatharu Residency', 'Sri Sai Ram Towers', 'The Botanika', 'My Home Mangla', 
        'Rainbow Vista', 'North Star Villas', 'Rajapushpa Regalia', 'Rajapushpa Atria', 
        'Manjeera Diamond Tower', 'L&T Serene County', 'Aparna Hill Park Sarovar', 
        'My Home Avatar', 'Rajapushpa Eterna', 'Hill Ridge Villas', 'Aditya Empress', 'Prajay Megapolis'
      ]
    },
    {
      id: 'retail',
      title: 'Mall, Multiplex & Retail',
      icon: ShoppingBag,
      clients: [
        'Nexus Mall', 'Marina Mall', 'Phoenix Market City', 'GMS Mall', 'Lulu Mall', 
        'DSL Mall', 'L&T Mall - Punjagutta', 'Rajapushpa Provincia', 'L&T Mall - Hitech City', 
        'L&T Mall - Musarambagh', 'Max Stores', 'Time Zone', 'Life Style'
      ]
    },
    {
      id: 'hospitals',
      title: 'Hospitals & Clinics',
      icon: Building,
      clients: [
        'Rainbow Hospitals', 'Oliva Clinics', 'Star Health', 'Rainbow Vista'
      ]
    },
    {
      id: 'warehouses',
      title: 'Warehouses & Logistics',
      icon: Building2,
      clients: [
        'Max', 'Life Style', 'RIL', 'Metro', 'UB Beer', 'Emirates Logistics'
      ]
    },
    {
      id: 'education',
      title: 'Educational Institutions',
      icon: GraduationCap,
      clients: [
        'Institute of Public Enterprise', 'NICMAR', 'Nalsar', 'EFL University', 
        'Administrative Staff College of India', 'Aga Khan Academy', 'KL University', 
        'Delhi Public School', 'Mahindra and Mahindra University', 'Analog IAS Academy'
      ]
    },
    {
      id: 'manufacturing',
      title: 'Manufacturing & Pharma',
      icon: Factory,
      clients: [
        'Vidur Pharma', 'Srivar Pharma', 'MSN Pharma', 'Renew Power Projects', 
        'Astra Microwave Products', 'UB Beer Ltd', 'BMM Ispat Ltd'
      ]
    }
  ];

  const distributionStats = [
    { label: 'Residential Communities', percentage: '33%', color: 'bg-blue-600' },
    { label: 'Commercial & IT Parks', percentage: '25%', color: 'bg-indigo-600' },
    { label: 'Corporate Office', percentage: '12%', color: 'bg-sky-600' },
    { label: 'Educational Institutions', percentage: '8%', color: 'bg-teal-600' },
    { label: 'Malls & Retail Stores', percentage: '8%', color: 'bg-purple-600' },
    { label: 'Manufacturing Units', percentage: '5%', color: 'bg-emerald-600' },
    { label: 'Others', percentage: '9%', color: 'bg-cyan-600' },
  ];

  const partnerLogos = [
    'JLL', 'Ashvita by Mahindra Lifespaces', 'CBRE', 'Golf View', 'Kalpa-Taru'
  ];

  const filteredCategories = activeTab === 'all' 
    ? clientCategories 
    : clientCategories.filter(cat => cat.id === activeTab);

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
          className="text-center max-w-3xl mx-auto space-y-4 mb-16 relative z-10"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold uppercase tracking-wide shadow-sm">
            <Users2 className="w-4 h-4 text-blue-600" />
            Trusted Partnerships
          </div>

          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-slate-900 leading-tight">
            Our <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Clients</span>
          </h1>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Proudly servicing 100+ prestigious commercial IT parks, residential communities, healthcare facilities, and retail hubs across India.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <div className="w-full overflow-x-auto pb-4 mb-12 scrollbar-none relative z-10">
          <div className="flex items-center gap-2 min-w-max sm:justify-center px-4 sm:px-0">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                activeTab === 'all'
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-600/20'
                  : 'bg-white border border-slate-200 text-slate-600 hover:text-slate-900 hover:border-slate-300 shadow-sm'
              }`}
            >
              All Sectors
            </button>
            {clientCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                  activeTab === cat.id
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-600/20'
                    : 'bg-white border border-slate-200 text-slate-600 hover:text-slate-900 hover:border-slate-300 shadow-sm'
                }`}
              >
                {cat.title}
              </button>
            ))}
          </div>
        </div>

        {/* Sector Portfolio Distribution Breakdown */}
        <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-md mb-20 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-blue-600 uppercase tracking-wide">
                <PieChart className="w-4 h-4" />
                Portfolio Breakdown
              </div>
              <h3 className="text-2xl font-bold text-slate-900">Client Portfolio Distribution</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Our operations span across multiple high-impact industries with a strong emphasis on residential ecosystems and large-scale commercial technology campuses.
              </p>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {distributionStats.map((stat, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between shadow-sm">
                  <div className="flex items-center gap-2.5">
                    <span className={`w-3 h-3 rounded-full ${stat.color}`} />
                    <span className="text-xs text-slate-700 font-medium">{stat.label}</span>
                  </div>
                  <span className="text-xs font-bold text-slate-900">{stat.percentage}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Client Categorized Lists Grid */}
        <div className="space-y-16 mb-24 relative z-10">
          {filteredCategories.map((cat) => {
            const Icon = cat.icon;
            return (
              <div key={cat.id} className="space-y-6">
                {/* Category Header */}
                <div className="flex items-center gap-3 border-b border-slate-200 pb-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">{cat.title}</h2>
                    <p className="text-xs text-slate-600">{cat.clients.length} Facilities & Partners</p>
                  </div>
                </div>

                {/* Client Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                  {cat.clients.map((clientName, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.02, duration: 0.3 }}
                    >
                      <InfoCard
                        variant="compact"
                        title={clientName}
                      />
                    </motion.div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Major Brand Logos Bar */}
        <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm text-center space-y-6 mb-16 relative z-10">
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
            Trusted by 100+ Valued Partners Around India
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 opacity-80">
            {partnerLogos.map((partner, idx) => (
              <span key={idx} className="text-base sm:text-xl font-bold text-slate-700 tracking-wider">
                {partner}
              </span>
            ))}
          </div>
        </div>

      </section>

      {/* Footer */}
      <FooterCTA />
    </main>
  );
}