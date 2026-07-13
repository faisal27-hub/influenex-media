import { useEffect } from 'react';
import HeroSection from '../components/home/HeroSection';
import BrandMarquee from '../components/home/BrandMarquee';
import StatsSection from '../components/home/StatsSection';
import AboutSnippet from '../components/home/AboutSnippet';
import ServicesPreview from '../components/home/ServicesPreview';
import WhyChooseUs from '../components/home/WhyChooseUs';
import HowWeWork from '../components/home/HowWeWork';
import HomeCTA from '../components/home/HomeCTA';
import FAQSection from '../components/home/FAQSection';

export default function Home() {
  useEffect(() => {
    document.title = 'Influnex Media — Premium Influencer Marketing Agency';
  }, []);

  return (
    <main className="overflow-x-hidden">
      <HeroSection />
      <BrandMarquee />
      <StatsSection />
      <AboutSnippet />
      <ServicesPreview />
      <WhyChooseUs />
      <HowWeWork />
      <HomeCTA />
      <FAQSection />
    </main>
  );
}
