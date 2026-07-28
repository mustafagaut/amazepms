'use client';

import { motion } from 'framer-motion';
import { 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight,
  BadgeCheck
} from 'lucide-react';
import FooterCTA from '@/components/sections/FooterCTA';
import InfoCard from '@/components/ui/InfoCard';

import { recruitmentSteps, highlights, workforceCategories } from '@/constants/data';

export default function RecruitmentsPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-800 flex flex-col justify-between pt-28">
      <section className="relative px-6 max-w-7xl mx-auto w-full mb-16">
        {/* Glow Ambient Effect */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-blue-200/40 blur-[160px] rounded-full pointer-events-none" />

        {/* Hero Banner Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto space-y-4 mb-16 relative z-10"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold uppercase tracking-wide shadow-sm">
            <ShieldCheck className="w-4 h-4 text-blue-600" />
            Workforce Solutions
          </div>

          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-slate-900 leading-tight">
            Corporate <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Recruitments</span>
          </h1>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Deploying vetted, trained, and disciplined workforce solutions across commercial, corporate, and industrial properties PAN India.
          </p>
        </motion.div>

        {/* Core Value Proposition Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20 relative z-10">
          {highlights.map((item, idx) => (
            <InfoCard
              key={idx}
              icon={item.icon}
              title={item.title}
              description={item.description}
              className="h-full"
            />
          ))}
        </div>

        {/* Recruitment Process Grid */}
        <div className="mb-20 space-y-10 relative z-10">
          <div className="border-b border-slate-200 pb-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              Our Recruitment & Deployment Process
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              A structured 4-step framework to ensure reliable workforce quality for client sites.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {recruitmentSteps.map((item, idx) => (
              <InfoCard
                key={idx}
                stepNumber={item.step}
                icon={item.icon}
                title={item.title}
                description={item.desc}
                className="h-full"
              />
            ))}
          </div>
        </div>

        {/* Workforce Categories List */}
        <div className="p-8 sm:p-12 rounded-3xl bg-white border border-slate-200 shadow-md relative z-10 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-blue-600 uppercase tracking-wide">
                <BadgeCheck className="w-4 h-4" />
                Staffing Capabilities
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">
                Roles We Recruit & Deploy
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Whether you need specialized technical engineers or large-scale security contingents, we deliver site-ready talent matched to your operational requirements.
              </p>
              <a 
                href="/contact" 
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-medium text-xs transition-all shadow-md shadow-blue-600/20 mt-2"
              >
                Request Staffing Proposal <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {workforceCategories.map((category, idx) => (
                <div key={idx} className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200 shadow-sm">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0" />
                  <span className="text-xs font-semibold text-slate-800">{category}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </section>

      {/* Footer */}
      <FooterCTA />
    </main>
  );
}