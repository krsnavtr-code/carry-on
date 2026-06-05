"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  CalendarRange,
  Coins,
  Wrench,
  ShieldCheck,
  TrendingDown,
  ArrowRight,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

// TypeScript interfaces for Type Safety
interface WeeklyFeatureProps {
  title: string;
  description: string;
  borderColor: string;
}

interface WeeklyVehicleProps {
  title: string;
  weeklyPrice: string;
  dailyEquivalent: string;
  features: string[];
  ctaText: string;
  highlighted?: boolean;
}

export default function WeeklyRentals(): React.ReactElement {
  // ==========================================
  // DYNAMIC SCROLL STATE LOGIC
  // ==========================================
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 60) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Weekly Strategic Advantages Data
  const weeklyAdvantages: WeeklyFeatureProps[] = [
    {
      title: "Steep Discount Matrix",
      description:
        "Save up to 20% compared to standard cumulative daily rates. Our automated system locks in bulk discounts the moment your checkout spans 7+ days.",
      borderColor: "border-t-[#5EBC23]",
    },
    {
      title: "Road Assistance & Maintenance",
      description:
        "For long-term peace of mind, every weekly tier includes absolute roadside cover, tier-checks, and complementary fluid optimization runs.",
      borderColor: "border-t-[#0C4587]",
    },
    {
      title: "Flexible Extension Protocols",
      description:
        "Need the wheels longer? Extend your package directly via our web dashboard or mobile app without annoying return processing loops.",
      borderColor: "border-t-[#D48C3B]",
    },
  ];

  // Specific Fleet Structures for Weekly Rental
  const weeklyFleet: WeeklyVehicleProps[] = [
    {
      title: "Compact Urban Hatchback",
      weeklyPrice: "₹8,999",
      dailyEquivalent: "₹1,285 / Day",
      features: [
        "Easy City Navigation & Parking",
        "High Mileage Fuel Architecture",
        "Standard Damage Protection Waiver",
        "1,500 Total KM Included Limit",
      ],
      ctaText: "Secure Weekly Hatchback",
    },
    {
      title: "Executive Comfort Sedan",
      weeklyPrice: "₹16,499",
      dailyEquivalent: "₹2,357 / Day",
      features: [
        "Premium Interior Trim Options",
        "Smooth Highway Cruise Control",
        "Full Theft Cover Safeguard",
        "Unlimited Kilometers Included",
      ],
      ctaText: "Secure Weekly Sedan",
      highlighted: true,
    },
    {
      title: "Adventure Ready SUV",
      weeklyPrice: "₹22,999",
      dailyEquivalent: "₹3,285 / Day",
      features: [
        "Robust High Ground Clearance",
        "Spacious Luggage Trunk Setup",
        "Zero-Deductible Comprehensive Cover",
        "Unlimited Kilometers Included",
      ],
      ctaText: "Secure Weekly SUV",
    },
  ];

  return (
    <div className="relative min-h-screen text-gray-900 dark:text-gray-100 transition-colors duration-300 pb-16 pt-24 md:pb-24 md:pt-32 overflow-hidden z-0">
      {/* ========================================= */}
      {/* BACKGROUND IMAGE & DYNAMIC FROSTED OVERLAY*/}
      {/* ========================================= */}

      {/* Parallax Background Image (Roadtrip/Travel Theme) */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed bg-no-repeat -z-30"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2000&auto=format&fit=crop')",
        }}
      />

      {/* DYNAMIC Frosted Glassmorphism Overlay based on Scroll */}
      <div
        className={`absolute inset-0 transition-all duration-700 ease-in-out -z-20 ${
          isScrolled
            ? "bg-white/55 dark:bg-[#050B14]/80 backdrop-blur-[3px]"
            : "bg-black/30 dark:bg-[#050B14]/30 backdrop-blur-[2px]"
        }`}
      />

      {/* Brand Radial Ambient Glows */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[#5EBC23]/15 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-[#0C4587]/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 relative z-10">
        {/* ========================================= */}
        {/* 1. HEADER HERO HUB                        */}
        {/* ========================================= */}
        <div className="text-center space-y-4 max-w-4xl mx-auto drop-shadow-sm">
          <div className="inline-flex items-center space-x-2 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border border-gray-200/50 dark:border-gray-800/80 px-4 py-1.5 rounded-full shadow-sm">
            <CalendarRange className="w-4 h-4 text-[#5EBC23]" />
            <span className="text-[10px] font-black text-[#0C4587] dark:text-gray-200 tracking-widest uppercase">
              Extended Term Hub
            </span>
          </div>
          <h1
            className={`text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight transition-colors duration-500 ${isScrolled ? "text-gray-900 dark:text-white" : "text-white"}`}
          >
            Weekly Car{" "}
            <span className="bg-gradient-to-r from-[#5EBC23] to-[#0C4587] bg-clip-text text-transparent drop-shadow-md">
              Rentals
            </span>
          </h1>
          <p
            className={`text-xs sm:text-sm leading-relaxed font-semibold max-w-2xl mx-auto transition-colors duration-500 ${isScrolled ? "text-gray-700 dark:text-gray-300" : "text-gray-200"}`}
          >
            Unlock heavy corporate rate cuts with our customized 7-day extended
            packages. Enjoy total control, pristine fleet maintenance, and zero
            baseline hidden fee matrices with{" "}
            <strong
              className={
                isScrolled ? "text-gray-900 dark:text-white" : "text-white"
              }
            >
              Carry-On Car Rental Pvt Ltd.
            </strong>
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-[#5EBC23] to-[#0C4587] mx-auto rounded-full mt-4" />
        </div>

        {/* ========================================= */}
        {/* 2. VALUE PROPOSITION MATRIX (Accent Cards)*/}
        {/* ========================================= */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {weeklyAdvantages.map((adv, idx) => (
            <div
              key={idx}
              className={`bg-white/95 dark:bg-[#0A1120]/90 backdrop-blur-md border-x border-b border-gray-200/80 dark:border-gray-800/80 rounded-b-2xl rounded-t-sm p-6 lg:p-8 shadow-md flex flex-col space-y-5 hover:-translate-y-1.5 hover:shadow-xl transition-all duration-300 border-t-4 ${adv.borderColor} group`}
            >
              <div className="w-14 h-14 rounded-2xl bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-sm">
                {idx === 0 && (
                  <TrendingDown className="w-6 h-6 text-[#5EBC23]" />
                )}
                {idx === 1 && (
                  <Wrench className="w-6 h-6 text-[#0C4587] dark:text-blue-400" />
                )}
                {idx === 2 && <Coins className="w-6 h-6 text-[#D48C3B]" />}
              </div>
              <div className="space-y-2.5">
                <h3 className="text-lg sm:text-xl font-black text-gray-900 dark:text-white tracking-tight">
                  {adv.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 leading-relaxed font-semibold">
                  {adv.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* ========================================= */}
        {/* 3. DYNAMIC WEEKLY PRICING TIERS (SaaS Style) */}
        {/* ========================================= */}
        <div className="space-y-12 pt-8">
          <div
            className={`text-center space-y-2 drop-shadow-sm transition-colors duration-500`}
          >
            <h2 className="text-[10px] uppercase font-black tracking-widest text-[#5EBC23]">
              Extended Fleet Tier
            </h2>
            <p
              className={`text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight ${isScrolled ? "text-gray-900 dark:text-white" : "text-white"}`}
            >
              Optimized Weekly Packages
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-center max-w-6xl mx-auto">
            {weeklyFleet.map((vehicle, idx) => (
              <div
                key={idx}
                className={`backdrop-blur-xl border rounded-[2rem] p-6 lg:p-8 flex flex-col justify-between relative transition-all duration-500 ${
                  vehicle.highlighted
                    ? "bg-gradient-to-b from-white/95 to-white/90 dark:from-[#5EBC23]/10 dark:to-[#0A1120]/95 border-[#5EBC23]/50 ring-2 ring-[#5EBC23]/30 shadow-2xl shadow-[#5EBC23]/20 md:scale-105 z-10 min-h-[500px]"
                    : "bg-white/80 dark:bg-[#0A1120]/80 border-white/50 dark:border-gray-800/60 shadow-lg hover:border-gray-300 dark:hover:border-gray-700 min-h-[460px]"
                }`}
              >
                {vehicle.highlighted && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#5EBC23] to-[#4CAF50] text-white text-[10px] uppercase font-black tracking-widest px-5 py-1.5 rounded-full shadow-lg flex items-center border border-[#5EBC23]">
                    <Sparkles className="w-3 h-3 mr-1.5 text-white fill-white" />{" "}
                    Best Value Combo
                  </span>
                )}

                <div className="space-y-8">
                  {/* Title & Weekly Financial Matrix */}
                  <div
                    className={`space-y-3 text-center border-b pb-6 ${vehicle.highlighted ? "border-gray-200 dark:border-gray-800/80" : "border-gray-200/50 dark:border-gray-800/50"}`}
                  >
                    <h3
                      className={`text-xl font-black tracking-tight ${vehicle.highlighted ? "text-[#5EBC23]" : "text-gray-900 dark:text-white"}`}
                    >
                      {vehicle.title}
                    </h3>
                    <div className="flex flex-col items-center justify-center">
                      <span className="text-4xl sm:text-5xl font-black tracking-tight text-gray-900 dark:text-white drop-shadow-sm">
                        {vehicle.weeklyPrice}
                      </span>
                      <span className="text-[10px] font-black text-gray-500 uppercase tracking-widest mt-2">
                        Per 7 Days Block
                      </span>
                      <span
                        className={`text-[9px] font-black px-3 py-1 rounded-md mt-3 border tracking-widest uppercase ${vehicle.highlighted ? "text-[#5EBC23] bg-green-50 dark:bg-green-950/40 border-green-200/50 dark:border-green-900/30" : "text-[#0C4587] dark:text-blue-400 bg-blue-50 dark:bg-blue-950/40 border-blue-100/50 dark:border-blue-900/30"}`}
                      >
                        {vehicle.dailyEquivalent}
                      </span>
                    </div>
                  </div>

                  {/* Core Features Checkpoints */}
                  <ul className="space-y-3.5">
                    {vehicle.features.map((feature, fIdx) => (
                      <li
                        key={fIdx}
                        className="flex items-center text-xs sm:text-sm font-bold text-gray-700 dark:text-gray-300"
                      >
                        <CheckCircle2
                          className={`w-4 h-4 mr-3 flex-shrink-0 ${vehicle.highlighted ? "text-[#5EBC23]" : "text-[#0C4587] dark:text-blue-400"}`}
                        />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Submit Action Trigger Link */}
                <div className="pt-8 mt-auto">
                  <Link
                    href="/booking"
                    className={`w-full inline-flex items-center justify-center font-black text-[10px] sm:text-xs uppercase tracking-widest py-4 rounded-xl shadow-md transition-all duration-300 group ${
                      vehicle.highlighted
                        ? "bg-gradient-to-r from-[#5EBC23] to-[#4CAF50] hover:from-[#0C4587] hover:to-[#0A3C73] text-white shadow-green-900/20"
                        : "bg-gray-100 dark:bg-gray-900 hover:bg-[#5EBC23] hover:text-white text-gray-800 dark:text-gray-200 border border-gray-200 dark:border-gray-800"
                    }`}
                  >
                    <span>{vehicle.ctaText}</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ========================================= */}
        {/* 4. FOOTER TRUST BLOCK (Glassmorphic)      */}
        {/* ========================================= */}
        <div className="mt-16 bg-white/90 dark:bg-[#0A1120]/80 backdrop-blur-md border border-white/50 dark:border-gray-800/60 rounded-[2rem] p-6 lg:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl relative overflow-hidden group">
          {/* Decorative Glow */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#0C4587]/10 rounded-full blur-2xl pointer-events-none" />

          <div className="flex items-center space-x-4 text-left relative z-10">
            <div className="p-3.5 bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800/30 rounded-2xl flex-shrink-0 shadow-sm group-hover:scale-110 transition-transform duration-300">
              <ShieldCheck className="w-6 h-6 text-[#0C4587] dark:text-blue-400" />
            </div>
            <div>
              <h4 className="font-black text-gray-900 dark:text-white text-base sm:text-lg tracking-tight">
                Long-Term Reliability Assurance
              </h4>
              <p className="text-[11px] sm:text-xs text-gray-600 dark:text-gray-400 font-semibold mt-1 max-w-xl">
                All extended weekly contracts undergo complete software
                diagnostic scans prior to drop-offs to ensure uninterrupted
                journeys.
              </p>
            </div>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:bg-[#5EBC23] dark:hover:bg-[#5EBC23] hover:text-white text-[10px] sm:text-xs font-black uppercase tracking-widest px-6 py-3.5 rounded-xl shadow-md transition-colors duration-300 flex-shrink-0 relative z-10"
          >
            Contact Fleet Desk <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
