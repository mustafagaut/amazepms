'use client';

import { motion } from 'framer-motion';
import { 
  Building2, 
  Home, 
  UserCheck, 
  GraduationCap, 
  ShieldAlert, 
  Sparkles,
  CheckCircle2 
} from 'lucide-react';

const BENEFITS = [
  {
    icon: Building2,
    title: '20M+ Sq. Ft. Portfolio',
    description: 'Managing a massive area of more than 20 million Sq. ft across diverse real estate portfolios.',
    highlight: 'Scale & Reach',
  },
  {
    icon: Home,
    title: '100% In-House Operations',
    description: 'All property management services are executed directly by our internal workforce—no third-party outsourcing.',
    highlight: 'Direct Quality Control',
  },
  {
    icon: UserCheck,
    title: 'Emergency Standby Staff',
    description: 'Guaranteed immediate availability of backup staff to handle critical emergencies seamlessly.',
    highlight: '24/7 Continuity',
  },
  {
    icon: GraduationCap,
    title: 'Structured Staff Training',
    description: 'Yearly training calendar conducted by dedicated Training Officers to ensure high operational standards.',
    highlight: 'Certified Talent',
  },
  {
    icon: ShieldAlert,
    title: 'Proactive Risk Assessment',
    description: 'Continuous risk assessment of facility equipment and operations with proactive preventative recommendations.',
    highlight: 'Safety & Compliance',
  },
];

export default function WhyChooseUs() {
  return (
    <section id="strength" className="relative py-28 bg-slate-50 text-slate-800 overflow-hidden">
      {/* Subtle Blue Glow Backdrop */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-200/40 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold tracking-wide uppercase shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            Our Service Benefits
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-slate-900 leading-tight">
            Why Choose <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Amaze PMS</span>
          </h2>

          <p className="text-slate-600 text-base leading-relaxed">
            Delivering robust, tech-enabled, and fully integrated property solutions tailored to safeguard and add value to commercial and corporate real estate.
          </p>
        </motion.div>

        {/* Dynamic Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {BENEFITS.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md hover:border-blue-300 transition-all duration-300 flex flex-col justify-between"
              >
                {/* Top Card Icon & Highlight Tag */}
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-semibold text-slate-600 bg-slate-100 border border-slate-200 px-3 py-1 rounded-full">
                      {benefit.highlight}
                    </span>
                  </div>

                  {/* Benefit Title & Description */}
                  <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {benefit.description}
                  </p>
                </div>

                {/* Subtle Verification Check */}
                <div className="pt-4 border-t border-slate-100 flex items-center gap-2 text-xs text-slate-500 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-blue-600" />
                  Standard Operating Procedure
                </div>
              </motion.div>
            );
          })}

          {/* Call to Action Highlight Card */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="rounded-2xl border border-blue-200 bg-gradient-to-br from-blue-50 via-white to-indigo-50/50 p-6 shadow-sm flex flex-col justify-between"
          >
            <div>
              <span className="px-3 py-1 rounded-full bg-blue-100 border border-blue-200 text-blue-700 text-xs font-semibold uppercase tracking-wider">
                Trusted Excellence
              </span>
              <h3 className="text-xl font-bold text-slate-900 mt-4 mb-2">
                Ready to Upgrade Your Facility Management?
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Connect with our team to conduct a full risk assessment and customized service plan for your property.
              </p>
            </div>

            <a
              href="#contact"
              className="mt-6 inline-flex items-center justify-center w-full py-3 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm transition-all shadow-md shadow-blue-600/20 active:scale-95"
            >
              Contact Our Team
            </a>
          </motion.div>
        </div>

      </div>
    </section>
  );
}