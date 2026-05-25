"use client";

import React from "react";
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
  // Weekly Strategic Advantages Data
  const weeklyAdvantages: WeeklyFeatureProps[] = [
    {
      title: "Steep Discount Matrix",
      description:
        "Save up to 20% compared to standard cumulative daily rates. Our automated MERN system locks in bulk discounts the moment your checkout spans 7+ days.",
    },
    {
      title: "Complimentary Road Assistance & Maintenance",
      description:
        "For long-term peace of mind, every weekly tier includes absolute roadside cover, tier-checks, and complementary fluid optimization runs.",
    },
    {
      title: "Flexible Extension Protocols",
      description:
        "Need the wheels longer? Extend your package directly via our Next.js dashboard or your upcoming React Native app without return processing loops.",
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
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors duration-300 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        {/* 1. HEADER SECTION */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center space-x-2 bg-blue-50 dark:bg-blue-900/30 border border-blue-100 dark:border-blue-800/50 px-4 py-1.5 rounded-full shadow-sm">
            <CalendarRange className="w-4 h-4 text-[#5EBC23]" />
            <span className="text-xs font-bold text-[#0C4587] dark:text-blue-300 tracking-wide uppercase">
              Extended Term Hub
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-gray-900 dark:text-white">
            Weekly Car{" "}
            <span className="bg-gradient-to-r from-[#0C4587] to-[#5EBC23] bg-clip-text text-transparent">
              Rentals
            </span>
          </h1>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 leading-relaxed font-medium">
            Unlock heavy corporate rate cuts with our customized 7-day extended
            packages. Enjoy total control, pristine fleet maintenance, and zero
            baseline hidden fee matrices.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-[#0C4587] to-[#5EBC23] mx-auto rounded-full" />
        </div>

        {/* 2. VALUE PROPOSITION BOXES */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {weeklyAdvantages.map((adv, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-900 rounded-2xl p-6 lg:p-8 shadow-sm flex flex-col space-y-4 hover:shadow-md transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-gray-50 dark:bg-gray-950 border border-gray-100 dark:border-gray-800 flex items-center justify-center flex-shrink-0">
                {idx === 0 && (
                  <TrendingDown className="w-5 h-5 text-[#5EBC23]" />
                )}
                {idx === 1 && (
                  <Wrench className="w-5 h-5 text-[#0C4587] dark:text-blue-400" />
                )}
                {idx === 2 && <Coins className="w-5 h-5 text-[#D48C3B]" />}
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white tracking-tight">
                  {adv.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed font-medium">
                  {adv.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* 3. FLEET CARDS GRID WITH EXTENDED METRICS */}
        <div className="space-y-12">
          <div className="text-center space-y-2">
            <h2 className="text-xs uppercase font-extrabold tracking-widest text-[#5EBC23]">
              Extended Fleet Tier
            </h2>
            <p className="text-2xl sm:text-3xl font-black text-gray-900 dark:text-white">
              Optimized Weekly Packages
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 items-stretch">
            {weeklyFleet.map((vehicle, idx) => (
              <div
                key={idx}
                className={`bg-white dark:bg-gray-900 border rounded-3xl p-6 lg:p-8 shadow-sm flex flex-col justify-between relative transition-all duration-300 ${
                  vehicle.highlighted
                    ? "border-green-500 ring-4 ring-green-500/5 dark:ring-green-500/10 scale-102"
                    : "border-gray-100 dark:border-gray-900 hover:border-gray-200 dark:hover:border-gray-800"
                }`}
              >
                {vehicle.highlighted && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#5EBC23] to-green-600 text-white text-[10px] uppercase font-black tracking-widest px-4 py-1 rounded-full shadow-md flex items-center">
                    <Sparkles className="w-3 h-3 mr-1 text-yellow-300 fill-yellow-300" />{" "}
                    Best Value Combo
                  </span>
                )}

                <div className="space-y-6">
                  {/* Title & Weekly Financial Matrix */}
                  <div className="space-y-2 text-center border-b border-gray-50 dark:border-gray-800/50 pb-5">
                    <h3 className="text-xl font-black text-gray-900 dark:text-white tracking-tight">
                      {vehicle.title}
                    </h3>
                    <div className="flex flex-col items-center justify-center">
                      <span className="text-3xl sm:text-4xl font-black tracking-tight text-gray-900 dark:text-white">
                        {vehicle.weeklyPrice}
                      </span>
                      <span className="text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest mt-1">
                        Per 7 Days Block
                      </span>
                      <span className="text-xs font-bold text-[#0C4587] dark:text-blue-400 bg-blue-50 dark:bg-blue-950/50 px-2.5 py-0.5 rounded-full mt-2 border border-blue-100/50 dark:border-blue-900/30">
                        {vehicle.dailyEquivalent}
                      </span>
                    </div>
                  </div>

                  {/* Core Features Checkpoints */}
                  <ul className="space-y-3">
                    {vehicle.features.map((feature, fIdx) => (
                      <li
                        key={fIdx}
                        className="flex items-start text-sm font-semibold text-gray-500 dark:text-gray-400"
                      >
                        <CheckCircle2 className="w-4 h-4 mr-2.5 text-[#5EBC23] flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Submit Action Trigger Link */}
                <div className="pt-8">
                  <Link
                    href="/booking"
                    className={`w-full inline-flex items-center justify-center font-bold py-3.5 rounded-xl text-sm shadow-sm transition-all duration-300 group ${
                      vehicle.highlighted
                        ? "bg-gradient-to-r from-[#5EBC23] to-green-600 hover:from-[#0C4587] hover:to-[#0A3C73] text-white"
                        : "bg-gray-50 dark:bg-gray-950 hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-800 dark:text-gray-200 border border-gray-200 dark:border-gray-800"
                    }`}
                  >
                    {vehicle.ctaText}
                    <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 4. FOOTER TRUST BLOCK */}
        <div className="bg-gradient-to-br from-[#0C4587]/5 via-transparent to-[#5EBC23]/5 border border-blue-100/30 dark:border-blue-900/20 rounded-2xl p-6 lg:p-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-3.5 text-left">
            <div className="p-3 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-xl text-blue-500 flex-shrink-0 shadow-sm">
              <ShieldCheck className="w-5 h-5 text-[#0C4587] dark:text-blue-400" />
            </div>
            <div>
              <h4 className="font-bold text-gray-900 dark:text-white text-base">
                Long-Term Reliability Assurance
              </h4>
              <p className="text-xs sm:text-sm text-gray-400 dark:text-gray-500 font-medium">
                All extended weekly contracts undergo complete software
                diagnostic scans prior to drop-offs.
              </p>
            </div>
          </div>
          <Link
            href="/contact"
            className="text-xs sm:text-sm font-bold text-[#5EBC23] hover:underline flex-shrink-0"
          >
            Contact Fleet Desk &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}
