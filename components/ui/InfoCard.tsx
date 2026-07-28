// components/ui/InfoCard.tsx
import React from 'react';
import { CheckCircle2, Send, ArrowUpRight } from 'lucide-react';
import DynamicIcon from '@/components/ui/DynamicIcon';

export interface InfoCardProps {
  // Main Content
  title: string;
  description?: string;
  
  // Header Elements
  icon?: any;              // String name or Lucide Icon
  stepNumber?: string;     // e.g., "01", "02"
  badge?: string;          // e.g., "MANAGEMENT", "SECURITY"
  
  // Style Options
  variant?: 'standard' | 'horizontal' | 'compact' | 'job';
  showCheckIcon?: boolean; // Adds checkmark before title/text
  
  // CTA Button/Link
  actionText?: string;
  onActionClick?: () => void;
  actionHref?: string;
  
  className?: string;
}

export default function InfoCard({
  title,
  description,
  icon,
  stepNumber,
  badge,
  variant = 'standard',
  showCheckIcon = false,
  actionText,
  onActionClick,
  actionHref,
  className = '',
}: InfoCardProps) {

  // Helper to render icon component or dynamic icon
  const renderIcon = (iconClass: string) => {
    if (!icon) return null;
    if (typeof icon === 'string') return <DynamicIcon name={icon} className={iconClass} />;
    const IconComponent = icon;
    return <IconComponent className={iconClass} />;
  };

  // ----------------------------------------------------
  // VARIANT 1: COMPACT TAG (Client Tech Parks / Badges)
  // ----------------------------------------------------
  if (variant === 'compact') {
    return (
      <div 
        className={`group p-4 rounded-xl bg-white/80 backdrop-blur-md border border-slate-200/80 shadow-sm 
        hover:bg-white hover:border-blue-400/50 hover:shadow-[0_10px_25px_rgba(37,99,235,0.08)] hover:-translate-y-0.5 
        flex items-center gap-3 transition-all duration-300 ${className}`}
      >
        <div className="w-6 h-6 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
          <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 group-hover:text-white transition-colors" />
        </div>
        <span className="text-sm font-semibold text-slate-800 group-hover:text-slate-900 truncate transition-colors">
          {title}
        </span>
      </div>
    );
  }

  // ----------------------------------------------------
  // VARIANT 2: HORIZONTAL ROW (Features with checkmark)
  // ----------------------------------------------------
  if (variant === 'horizontal') {
    return (
      <div 
        className={`group relative p-5 rounded-2xl bg-white/80 backdrop-blur-xl border border-slate-200/80 shadow-sm 
        hover:bg-white hover:border-blue-400/50 hover:shadow-[0_15px_30px_rgba(37,99,235,0.08)] hover:-translate-y-0.5 
        flex items-start gap-4 transition-all duration-300 overflow-hidden ${className}`}
      >
        {/* Subtle accent hover indicator */}
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {icon && (
          <div className="w-11 h-11 rounded-xl bg-blue-50/80 border border-blue-100/80 text-blue-600 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:scale-105 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all duration-300 shadow-sm">
            {renderIcon('w-5 h-5')}
          </div>
        )}

        <div className="space-y-1 flex-1">
          <div className="flex items-center gap-2">
            {showCheckIcon && <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0" />}
            <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
              {title}
            </h3>
          </div>
          {description && <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{description}</p>}
        </div>
      </div>
    );
  }

  // ----------------------------------------------------
  // VARIANT 3: JOB CARD (Career Postings)
  // ----------------------------------------------------
  if (variant === 'job') {
    return (
      <div 
        className={`group relative p-6 rounded-2xl bg-white/80 backdrop-blur-xl border border-slate-200/80 shadow-sm 
        hover:bg-white hover:border-blue-400/50 hover:shadow-[0_20px_35px_rgba(37,99,235,0.08)] hover:-translate-y-1 
        flex flex-col justify-between space-y-6 transition-all duration-300 overflow-hidden ${className}`}
      >
        {/* Hover accent bar */}
        <div className="absolute top-0 left-6 right-6 h-[2px] bg-gradient-to-r from-blue-500 via-indigo-500 to-sky-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />

        <div className="space-y-4">
          <div className="flex items-center justify-between">
            {icon && (
              <div className="w-11 h-11 rounded-xl bg-blue-50/80 border border-blue-100/80 text-blue-600 flex items-center justify-center group-hover:scale-105 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all duration-300 shadow-sm">
                {renderIcon('w-5 h-5')}
              </div>
            )}
            {badge && (
              <span className="text-[10px] font-bold tracking-wider text-blue-700 uppercase bg-blue-50/80 border border-blue-200/80 px-3 py-1 rounded-full shadow-sm">
                {badge}
              </span>
            )}
          </div>

          <div>
            <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
              {title}
            </h3>
            {description && (
              <div className="flex items-center gap-2 text-xs font-medium text-slate-600">
                <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0" />
                <span>{description}</span>
              </div>
            )}
          </div>
        </div>

        {actionText && (
          <a
            href={actionHref || '#'}
            onClick={onActionClick}
            className="w-full py-3 px-4 rounded-xl bg-slate-100/80 hover:bg-blue-600 border border-slate-200/80 hover:border-blue-600 text-slate-800 hover:text-white text-xs font-bold flex items-center justify-center gap-2 transition-all duration-300 shadow-sm hover:shadow-md hover:shadow-blue-600/20 active:scale-[0.98]"
          >
            <span>{actionText}</span>
            <Send className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </a>
        )}
      </div>
    );
  }

  // ----------------------------------------------------
  // VARIANT 4: STANDARD CARD (Process / Service Items)
  // ----------------------------------------------------
  return (
    <div 
      className={`group relative p-7 rounded-2xl bg-white/80 backdrop-blur-xl border border-slate-200/80 shadow-sm 
      hover:bg-white hover:border-blue-400/50 hover:shadow-[0_20px_40px_rgba(37,99,235,0.08)] hover:-translate-y-1 
      transition-all duration-300 flex flex-col justify-between space-y-6 overflow-hidden ${className}`}
    >
      {/* Top subtle highlight line */}
      <div className="absolute top-0 left-6 right-6 h-[2px] bg-gradient-to-r from-blue-500 via-indigo-500 to-sky-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />

      <div className="space-y-4">
        {/* Top Bar: Step Number or Icon */}
        <div className="flex items-center justify-between">
          {stepNumber ? (
            <span className="text-3xl font-black bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent tracking-tight">
              {stepNumber}
            </span>
          ) : null}
          
          {icon && (
            <div className="w-12 h-12 rounded-xl bg-blue-50/80 border border-blue-100/80 text-blue-600 flex items-center justify-center group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all duration-300 shadow-sm">
              {renderIcon('w-6 h-6')}
            </div>
          )}
        </div>

        {/* Content */}
        <div>
          <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
            {title}
          </h3>
          {description && (
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
              {description}
            </p>
          )}
        </div>
      </div>

      {actionText && (
        <a
          href={actionHref || '#'}
          onClick={onActionClick}
          className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-700 pt-2 transition-colors"
        >
          <span>{actionText}</span>
          <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      )}
    </div>
  );
}