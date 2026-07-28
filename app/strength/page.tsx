'use client';

import { motion } from 'framer-motion';
import FooterCTA from '@/components/sections/FooterCTA';
import InfoCard from '@/components/ui/InfoCard';
import { coreStrengths, welfareBenefits } from '@/constants/data';

export default function OurStrengthPage() {
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
            Operational Excellence
          </div>

          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-slate-900 leading-tight">
            Our <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Strength</span>
          </h1>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Unwavering operational standards, rigorous quality control, and an empowered workforce driving facility management forward.
          </p>
        </motion.div>

        {/* Core Strengths Grid */}
        <div className="mb-24 space-y-10 relative z-10">
          <div className="border-b border-slate-200 pb-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              Operational Advantages & Capabilities
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              What sets Amaze Property Management Solutions apart in facility execution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {coreStrengths.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.03, duration: 0.4 }}
              >
                <InfoCard
                  variant="horizontal"
                  showCheckIcon
                  icon={item.icon}
                  title={item.title}
                  description={item.desc}
                  className="h-full"
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Staff Welfare Section */}
        <div className="mb-20 space-y-10 relative z-10">
          <div className="border-b border-slate-200 pb-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              Staff Welfare & Employee Benefits
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              We prioritize the well-being and security of our workforce through comprehensive benefit programs.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {welfareBenefits.map((welfare, idx) => (
              <InfoCard
                key={idx}
                icon={welfare.icon}
                title={welfare.title}
                description={welfare.desc}
                className="h-full border-emerald-200 hover:border-emerald-400"
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