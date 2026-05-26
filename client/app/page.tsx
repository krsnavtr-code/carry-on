"use client";

import Link from "next/link";
import HeroBanner from "../components/HeroBanner";
import {
  Car,
  CircleDollarSign,
  Clock,
  Search,
  Calendar,
  MapPin,
  ArrowRight,
  Star,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import CarSearchForm from "@/components/CarSearchForm";
import CoreBenefits from "@/components/CoreBenefits";
import PopularRoutes from "@/components/PopularRoutes";

export default function Home() {
  // High Conversion Feature Cards Data
  const features = [
    {
      icon: <Car className="w-6 h-6 text-[#0C4587] dark:text-blue-400" />,
      title: "Wide Selection",
      description:
        "Choose from pristine economy hatchbacks, spacious family SUVs, to ultra-premium luxury vehicles.",
      badge: "Flexible Fleet",
    },
    {
      icon: <CircleDollarSign className="w-6 h-6 text-[#5EBC23]" />,
      title: "Affordable Rates",
      description:
        "Transparent competitive pricing structures with zero hidden fees. What you see is what you pay.",
      badge: "Best Price Match",
    },
    {
      icon: <Clock className="w-6 h-6 text-[#D48C3B]" />,
      title: "24/7 Premium Support",
      description:
        "Round-the-clock road assistance and client support to keep your journey completely smooth.",
      badge: "Always Alive",
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      {/* 1. HERO SECTION WITH RADIAL BACKGROUND */}
      <HeroBanner />

      {/* 2. LIVE DYNAMIC BOOKING/FILTER STRIP (Like DiscoverCars / Turo) */}
      <CarSearchForm />

      <PopularRoutes />

      {/* 3. CORE BENEFITS & FEATURES SECTION */}
      <CoreBenefits />
    </div>
  );
}
