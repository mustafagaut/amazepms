// components/ui/ServiceCard.tsx
import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import DynamicIcon from '@/components/ui/DynamicIcon';

export interface ServiceCardProps {
  badgeText: string;
  title: string;
  description: string;
  iconName?: string;
  actionText?: string;
  actionHref?: string;
  className?: string;
}

export default function Cards({
  badgeText,
  title,
  description,
  iconName = 'Building2',
  actionText = 'Enquire Services',
  actionHref = '/contact',
  className = '',
}: ServiceCardProps) {
  return (
    <div
      className={`relative flex flex-col justify-between p-6 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-400 transition-all duration-300 group ${className}`}
    >
      <div>
        {/* Top Header Row */}
        <div className="flex items-center justify-between gap-4 mb-5">
          {/* Tag / Badge */}
          <span className="px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-[11px] font-semibold tracking-wide uppercase">
            {badgeText}
          </span>

          {/* Top Right Icon */}
          <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200 text-blue-600 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors">
            <DynamicIcon name={iconName} className="w-5 h-5" />
          </div>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-slate-900 tracking-tight leading-snug mb-4 group-hover:text-blue-600 transition-colors">
          {title}
        </h3>

        {/* Divider */}
        <div className="w-full h-[1px] bg-slate-100 mb-4" />

        {/* Description */}
        <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6">
          {description}
        </p>
      </div>

      {/* Action CTA Link */}
      <div>
        <Link
          href={actionHref}
          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 text-xs font-semibold transition-all group-hover:translate-x-1"
        >
          <span>{actionText}</span>
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
        </Link>
      </div>
    </div>
  );
}