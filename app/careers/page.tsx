'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Briefcase, 
  Mail, 
} from 'lucide-react';
import FooterCTA from '@/components/sections/FooterCTA';
import { openings } from '@/constants/data';
import InfoCard from '@/components/ui/InfoCard';

export default function CareersPage() {
  const [selectedRole, setSelectedRole] = useState<string | null>(null);

  const handleApplyClick = (roleTitle: string) => {
    setSelectedRole(roleTitle);
    window.location.href = `mailto:careers@amazepms.com?subject=Application for ${encodeURIComponent(roleTitle)} Position`;
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
          className="text-center max-w-3xl mx-auto space-y-4 mb-16 relative z-10"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold uppercase tracking-wide shadow-sm">
            <Briefcase className="w-4 h-4 text-blue-600" />
            Careers & Opportunities
          </div>

          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-slate-900 leading-tight">
            Work With <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Us</span>
          </h1>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Take the next step in your career with Amaze. We are hiring passionate professionals in the field of property and facility management services.
          </p>
        </motion.div>

        {/* Application Banner */}
        <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-md relative z-10 mb-16 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center sm:text-left">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">How to Apply</h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Submit your Curriculum Vitae (CV) directly to our recruitment team at{' '}
              <a href="mailto:careers@amazepms.com" className="text-blue-600 font-medium underline hover:text-blue-700">
                careers@amazepms.com
              </a>
            </p>
          </div>
          <a
            href="mailto:careers@amazepms.com?subject=Job Application - Amaze PMS"
            className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs transition-all shadow-md shadow-blue-600/20 flex items-center gap-2 flex-shrink-0"
          >
            <Mail className="w-4 h-4" />
            Email Resume Now
          </a>
        </div>

        {/* Open Positions List */}
        <div className="space-y-8 mb-24 relative z-10">
          <div className="border-b border-slate-200 pb-4 flex items-center justify-between">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">Current Openings</h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">Explore available opportunities across our operational sectors.</p>
            </div>
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700">
              {openings.length} Active Positions
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {openings.map((job, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.03, duration: 0.4 }}
              >
                <InfoCard
                  variant="job"
                  icon={job.icon}
                  badge={job.category}
                  title={job.title}
                  description={"Full-Time • Hyderabad & Pan India"}
                  actionText="Apply via Email"
                  onActionClick={() => handleApplyClick(job.title)}
                  className="h-full"
                />
              </motion.div>
            ))}
          </div>
        </div>

      </section>

      {/* Footer */}
      <FooterCTA />
    </main>
  );
}