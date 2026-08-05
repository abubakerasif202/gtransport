import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Hero } from '../components/home/Hero';
import { TrustStrip } from '../components/home/TrustStrip';
import { AboutIntro } from '../components/sections/AboutIntro';
import { ServicesGrid } from '../components/home/ServicesGrid';
import { CoverageMap } from '../components/sections/CoverageMap';
import { FleetShowcase } from '../components/sections/FleetShowcase';
import { WhyChooseUs } from '../components/sections/WhyChooseUs';
import { DriversCare } from '../components/sections/DriversCare';
import { ProcessSteps } from '../components/sections/ProcessSteps';
import { TestimonialsCarousel } from '../components/sections/TestimonialsCarousel';
import { CtaBanner } from '../components/sections/CtaBanner';
import { ContactPreview } from '../components/sections/ContactPreview';
import { FinalCta } from '../components/sections/FinalCta';
import { motion } from 'motion/react';

function FadeSection({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title>1st Class Express | Interstate Freight & Logistics Australia</title>
        <meta name="description" content="Local, linehaul and interstate freight services across Australia, including same-day, next-day, bulk, logistics and white-label driver support." />
      </Helmet>
      
      <Hero />
      <TrustStrip />
      <FadeSection><AboutIntro /></FadeSection>
      <ServicesGrid />
      <FadeSection><CoverageMap /></FadeSection>
      <FadeSection><FleetShowcase /></FadeSection>
      <FadeSection><WhyChooseUs /></FadeSection>
      <FadeSection><TestimonialsCarousel /></FadeSection>
      <FadeSection><DriversCare /></FadeSection>
      <FadeSection><ProcessSteps /></FadeSection>
      <FadeSection><CtaBanner /></FadeSection>
      <FadeSection><ContactPreview /></FadeSection>
      <FadeSection><FinalCta /></FadeSection>
    </>
  );
}
