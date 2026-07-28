import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layouts/Navbar';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'Amaze PMS - Integrated Property & Facility Management Solutions',
  description: 'Leading Integrated Property & Facility Management across India. Managing 20M+ Sq. Ft. with 100% in-house operations.',
  keywords: ['Property Management', 'Facility Management', 'MEP Maintenance', 'Soft Services', 'Amaze PMS'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.className} bg-[#07090e] text-slate-100 antialiased selection:bg-blue-600 selection:text-white`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}