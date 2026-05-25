"use client";

import React from "react";
import Link from "next/link";
import {
  CalendarDays,
  Gauge,
  MapPin,
  ShieldCheck,
  Zap,
  ArrowRight,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

// TypeScript interfaces for Props
interface FeaturePointProps {
  title: string;
  description: string;
}

interface TierCardProps {
  title: string;
  price: string;
  tier: string;
  features: string[];
  ctaText: string;
  popular?: boolean;
}

export default function DailyRentals(): React.ReactElement {
  // Service Highlights Data
  const dailyFeatures: FeaturePointProps[] = [
    {
      title: "24-Hour Rigid Rental Matrix",
      description:
        "Complete flexibility. Your 24-hour cycle begins the exact minute you pick up the vehicle, minimizing spillover billing costs.",
    },
    {
      title: "Unlimited & Capped Mileage Options",
      description:
        "Choose between custom budget-friendly capped kilometers for city transits or premium unlimited packages for short weekend trips.",
    },
    {
      title: "Hyper-Fast Local Hub Dispatches",
      description:
        "Book through our Next.js web portal or upcoming React Native application layer and collect keys from your nearest metropolitan hub in minutes.",
    },
  ];

  // Specific Car Fleet Tiers for Daily Bookings
  const pricingTiers: TierCardProps[] = [
    {
      title: "Economy Hatchback",
      price: "₹1,499",
      tier: "Per Day",
      features: [
        "Manual/Automatic Option",
        "Fuel Efficient Matrix",
        "Basic Road Side Cover",
        "250 KM Included Limit",
      ],
      ctaText: "Rent Economy",
    },
    {
      title: "Premium Executive Sedan",
      price: "₹2,899",
      tier: "Per Day",
      features: [
        "Pure Automatic Comfort",
        "Corporate Fleet Standard",
        "Comprehensive Theft Protection",
        "Unlimited Kilometers",
      ],
      ctaText: "Rent Premium Sedan",
      popular: true,
    },
    {
      title: "Spacious Family SUV",
      price: "₹3,999",
      tier: "Per Day",
      features: [
        "Heavy Duty 7-Seater Layout",
        "All-Terrain Drive Control",
        "Zero-Deductible Damage Cover",
        "Unlimited Kilometers",
      ],
      ctaText: "Rent Luxury SUV",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors duration-300 py-6 lg:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14 md:space-y-20">
        {/* 1. HEADER HERO HERO AREA */}
        <div className="text-center space-y-4 max-w-5xl mx-auto">
          <div className="inline-flex items-center space-x-2 bg-blue-50 dark:bg-blue-900/30 border border-blue-100 dark:border-blue-800/50 px-4 py-1.5 rounded-full shadow-sm">
            <CalendarDays className="w-4 h-4 text-[#5EBC23]" />
            <span className="text-xs font-bold text-[#0C4587] dark:text-blue-300 tracking-wide uppercase">
              Short-Term Mobility Hub
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-gray-900 dark:text-white">
            Daily Car{" "}
            <span className="bg-gradient-to-r from-[#0C4587] to-[#5EBC23] bg-clip-text text-transparent">
              Rentals
            </span>
          </h1>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 leading-relaxed font-medium">
            Fast, transparent, and ultra-reliable single-day car rental
            pipelines. Perfect for spontaneous weekend gateways, short-duration
            corporate meetings, or city errands.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-[#0C4587] to-[#5EBC23] mx-auto rounded-full" />
        </div>

        {/* 2. CORE UTILITIES MATRIX GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-8 items-stretch">
          {dailyFeatures.map((feat, idx) => (
            <div
              key={idx}
              className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-4 md:p-6 shadow-sm flex flex-col space-y-4 hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 rounded-xl bg-gray-50 dark:bg-gray-950 border border-gray-100 dark:border-gray-800 flex items-center justify-center flex-shrink-0">
                {idx === 0 && (
                  <Gauge className="w-5 h-5 text-[#0C4587] dark:text-blue-400" />
                )}
                {idx === 1 && <MapPin className="w-5 h-5 text-[#5EBC23]" />}
                {idx === 2 && <Zap className="w-5 h-5 text-[#D48C3B]" />}
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white tracking-tight">
                  {feat.title}
                </h3>
                <p className="text-sm leading-relaxed font-medium">
                  {feat.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* 3. DYNAMIC DAILY PRICING TIERS */}
        <div className="space-y-12">
          <div className="text-center space-y-2">
            <h2 className="text-xs uppercase font-extrabold tracking-widest text-[#5EBC23]">
              Fleet Class Options
            </h2>
            <p className="text-2xl sm:text-3xl font-black text-gray-900 dark:text-white">
              Transparent Daily Rates
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 items-stretch">
            {pricingTiers.map((tier, idx) => (
              <div
                key={idx}
                className={`bg-white dark:bg-gray-900 border rounded-3xl p-6 lg:p-8 shadow-sm flex flex-col justify-between relative transition-all duration-300 ${
                  tier.popular
                    ? "border-blue-500 ring-4 ring-blue-500/5 dark:ring-blue-500/10 scale-102"
                    : "border-gray-100 dark:border-gray-900 hover:border-gray-200 dark:hover:border-gray-800"
                }`}
              >
                {tier.popular && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#0C4587] to-blue-600 text-white text-[10px] uppercase font-black tracking-widest px-4 py-1 rounded-full shadow-md flex items-center">
                    <Sparkles className="w-3 h-3 mr-1 text-yellow-300 fill-yellow-300" />{" "}
                    Executive Choice
                  </span>
                )}

                <div className="space-y-6">
                  {/* Tier Title & Pricing Block */}
                  <div className="space-y-2 text-center border-b border-gray-50 dark:border-gray-800/50 pb-5">
                    <h3 className="text-xl font-black text-gray-900 dark:text-white tracking-tight">
                      {tier.title}
                    </h3>
                    <div className="flex items-baseline justify-center space-x-1">
                      <span className="text-3xl sm:text-4xl font-black tracking-tight text-gray-900 dark:text-white">
                        {tier.price}
                      </span>
                      <span className="text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider">
                        / {tier.tier}
                      </span>
                    </div>
                  </div>

                  {/* Features Checkpoints Stack */}
                  <ul className="space-y-3">
                    {tier.features.map((feature, fIdx) => (
                      <li
                        key={fIdx}
                        className="flex items-center text-sm font-semibold text-gray-500 dark:text-gray-400"
                      >
                        <CheckCircle2 className="w-4 h-4 mr-2.5 text-[#5EBC23] flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Submit Action CTA Routing Link */}
                <div className="pt-8">
                  <Link
                    href="/booking"
                    className={`w-full inline-flex items-center justify-center font-bold py-3.5 rounded-xl text-sm shadow-sm transition-all duration-300 group ${
                      tier.popular
                        ? "bg-gradient-to-r from-[#0C4587] to-blue-600 hover:from-[#5EBC23] hover:to-[#4CAF50] text-white"
                        : "bg-gray-50 dark:bg-gray-950 hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-800 dark:text-gray-200 border border-gray-200 dark:border-gray-800"
                    }`}
                  >
                    {tier.ctaText}
                    <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 4. FOOTNOTE TRUST CALLOUT */}
        <div className="bg-gradient-to-br from-[#0C4587]/5 via-transparent to-[#5EBC23]/5 border border-blue-100/30 dark:border-blue-900/20 rounded-2xl p-6 lg:p-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-3.5 text-left">
            <div className="p-3 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-xl text-blue-500 flex-shrink-0 shadow-sm">
              <ShieldCheck className="w-5 h-5 text-[#5EBC23]" />
            </div>
            <div>
              <h4 className="font-bold text-gray-900 dark:text-white text-base">
                Comprehensive Protection Standard
              </h4>
              <p className="text-xs sm:text-sm text-gray-400 dark:text-gray-500 font-medium">
                All daily bookings include comprehensive insurance baseline
                protection matrices.
              </p>
            </div>
          </div>
          <Link
            href="/contact"
            className="text-xs sm:text-sm font-bold text-[#0C4587] dark:text-blue-400 hover:underline flex-shrink-0"
          >
            Read Insurance Terms &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}
