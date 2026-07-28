import AboutSection from '@/components/sections/AboutSection';
import Hero from '@/components/sections/Hero';
import TrustBanner from '@/components/sections/TrustBanner';
import WhyChooseUs from '@/components/sections/WhyChooseUs';
import FooterCTA from '@/components/sections/FooterCTA';


export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <TrustBanner />
      <AboutSection/>
      <WhyChooseUs/>
      <FooterCTA />
    </div>
  );
}