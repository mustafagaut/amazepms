// components/ui/DynamicIcon.tsx
import React from 'react';
import {
  Building2,
  ShieldCheck,
  Users,
  Calendar,
  Activity,
  ClipboardCheck,
  FileText,
  Wrench,
  Handshake,
  HeartHandshake,
  Gift,
  Award,
  Heart,
  Sparkles,
  LucideProps,
} from 'lucide-react';

const ICON_MAP: Record<string, React.FC<LucideProps>> = {
  Building2,
  ShieldCheck,
  Users,
  Calendar,
  Activity,
  ClipboardCheck,
  FileText,
  Wrench,
  Handshake,
  HeartHandshake,
  Gift,
  Award,
  Heart,
  Sparkles,
};

interface DynamicIconProps extends LucideProps {
  name: string;
}

export default function DynamicIcon({ name, className = 'w-5 h-5', ...props }: DynamicIconProps) {
  const IconComponent = ICON_MAP[name] || Building2;
  return <IconComponent className={className} {...props} />;
}