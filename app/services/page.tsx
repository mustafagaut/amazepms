'use client';

import { motion } from 'framer-motion';
import { 
  Shield, 
  Brush, 
  Wrench, 
  Bug, 
  Headphones, 
  Trees, 
  Waves, 
  Building, 
  Sparkles, 
  Users, 
  Hammer, 
  Calendar,
  Building2,
  ShieldAlert,
  Briefcase
} from 'lucide-react';
import FooterCTA from '@/components/sections/FooterCTA';
import Cards from '@/components/sections/Cards';
import InfoCard from '@/components/ui/InfoCard';

export default function ServicesPage() {
  const propertyServices = [
    { title: 'Security Services', icon: Shield, desc: '24/7 static guarding, escort security, and fire safety systems.' },
    { title: 'House Keeping Services', icon: Brush, desc: 'Professional janitorial and high-standard daily maintenance.' },
    { title: 'Technical Services', icon: Wrench, desc: 'MEP maintenance, electrical work, plumbing, and HVAC support.' },
    { title: 'Pest Control', icon: Bug, desc: 'Comprehensive eco-friendly pest eradicate and control solutions.' },
    { title: 'Help Desk Management', icon: Headphones, desc: 'Centralized 24/7 client helpdesk & ticket management.' },
    { title: 'Gardening & Landscaping', icon: Trees, desc: 'Lawn maintenance, landscape care, and seasonal planting.' },
    { title: 'Swimming Pool Maintenance', icon: Waves, desc: 'Water treatment, chemical balance, and pool filtration upkeep.' },
    { title: 'Club House Management', icon: Building, desc: 'Full facility, recreational area, and amenities management.' },
    { title: 'Facade Cleaning', icon: Sparkles, desc: 'High-rise glass facade exterior deep cleaning and restoration.' },
    { title: 'Tenant Management', icon: Users, desc: 'Tenant onboarding, rent documentation, and liaison services.' },
    { title: 'Home Repairs', icon: Hammer, desc: 'On-demand structural, carpentry, and electrical repair support.' },
    { title: 'Events & Promotions Management', icon: Calendar, desc: 'Event security, venue prep, and operational coordination.' },
  ];

  const servicePartners = [
    {
      badge: 'MEP & Property Services',
      title: 'Amaze Property Management Solutions Pvt Ltd',
      desc: 'PMS Services, Housekeeping, MEP, Gardening, Pest Control Services',
      icon: Building2,
      accent: 'from-blue-500/10 to-cyan-500/10',
      border: 'border-blue-200'
    },
    {
      badge: 'Security Division',
      title: 'Action & Protection Security Force',
      desc: 'Security Services, Fire Training, Escort Services, Event Security, Help Desk Services',
      icon: ShieldAlert,
      accent: 'from-amber-500/10 to-orange-500/10',
      border: 'border-amber-200'
    },
    {
      badge: 'Support Staff & Facility',
      title: 'Action Facility Services Pvt Ltd',
      desc: 'Home Services, Deep Cleaning, Support Staff, Project Cleaning, Sofa & Carpet Cleaning Services',
      icon: Briefcase,
      accent: 'from-emerald-500/10 to-teal-500/10',
      border: 'border-emerald-200'
    },
  ];

  return (
    <main className="min-h-screen bg-slate-50 text-slate-800 flex flex-col justify-between pt-28">
      <section className="relative px-6 max-w-7xl mx-auto w-full mb-16">
        {/* Glow Ambient Effect */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-blue-200/40 blur-[160px] rounded-full pointer-events-none" />

        {/* Header Title Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto space-y-4 mb-16 relative z-10"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold uppercase tracking-wide shadow-sm">
            Facility & Property Solutions
          </div>

          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-slate-900 leading-tight">
            Our <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Services</span>
          </h1>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Delivering specialized property, security, and maintenance solutions with high standards across commercial & residential assets.
          </p>
        </motion.div>

        {/* Property and Asset Management Grid */}
        <div className="mb-24 space-y-10 relative z-10">
          <div className="border-b border-slate-200 pb-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              Property and Asset Management
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Complete range of facility maintenance and estate management solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {propertyServices.map((service, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.04, duration: 0.4 }}
              >
                <InfoCard
                  variant="standard"
                  icon={service.icon}
                  title={service.title}
                  description={service.desc}
                  className="h-full"
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Our Service Partners Section */}
        <div className="mb-20 space-y-10 relative z-10">
          <div className="border-b border-slate-200 pb-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              Our Service Partners & Divisions
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Dedicated entities under the Action Group of Companies delivering specialized operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {servicePartners.map((partner, idx) => (
              <Cards
                key={idx}
                badgeText={partner.badge}
                title={partner.title}
                description={partner.desc}
                iconName={partner.icon}
                actionText="Enquire Services"
                actionHref="/contact"
                className={`${partner.border || ''}`}
              />
            ))}
          </div>
        </div>

      </section>

      {/* Footer */}
      <FooterCTA />
    </main>
  );
}