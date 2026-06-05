"use client";

// Imports ko thoda standardize kar diya hai taaki path errors na aayein
import HeroBanner from "@/components/HeroBanner";
import CarSearchForm from "@/components/CarSearchForm";
import AboutSection from "@/components/AboutSection";
import PopularRoutes from "@/components/PopularRoutes";
import CoreBenefits from "@/components/CoreBenefits";
import PremiumFeatures from "@/components/PremiumFeatures";

export default function Home() {
  return (
    <main className="min-h-screen text-gray-900 dark:text-gray-100 transition-colors duration-300 relative selection:bg-[#5EBC23]/30 dark:selection:bg-[#5EBC23]/40 selection:text-gray-900 dark:selection:text-white">
      {/* Global Ambient Glow Overlay */}
      {/* Yeh page ke top par ek bahut light gradient dega jo hero section ko body ke sath blend karega */}
      <div className="absolute top-0 inset-x-0 h-[80vh] bg-gradient-to-b from-[#0C4587]/5 to-transparent dark:from-white/[0.02] pointer-events-none -z-10" />

      {/* 1. HERO SECTION WITH RADIAL BACKGROUND */}
      <HeroBanner />

      <div className="bg-gray-50 dark:bg-gray-950">
        {/* 2. LIVE DYNAMIC BOOKING/FILTER STRIP (Overlaps Hero Banner) */}
        <CarSearchForm />

        {/* 3. ABOUT US SECTION */}
        <AboutSection />

        {/* 4. POPULAR ROUTES & LINES SECTION */}
        <PopularRoutes />

        {/* 5. PREMIUM FEATURES SECTION */}
        <PremiumFeatures />

        {/* 6. CORE BENEFITS & FEATURES SECTION */}
        <CoreBenefits />
      </div>
    </main>
  );
}
