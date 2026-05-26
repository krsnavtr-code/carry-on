"use client";

import HeroBanner from "../components/HeroBanner";
import CarSearchForm from "@/components/CarSearchForm";
import CoreBenefits from "@/components/CoreBenefits";
import PopularRoutes from "@/components/PopularRoutes";

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      {/* HERO SECTION WITH RADIAL BACKGROUND */}
      <HeroBanner />

      {/* LIVE DYNAMIC BOOKING/FILTER STRIP (Like DiscoverCars / Turo) */}
      <CarSearchForm />

      {/*  */}
      <PopularRoutes />

      {/* CORE BENEFITS & FEATURES SECTION */}
      <CoreBenefits />
    </div>
  );
}
