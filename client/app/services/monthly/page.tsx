"use client";

import React from "react";
import Link from "next/link";
import { 
  Building2, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  BadgePercent,
  RefreshCw,
  Clock9
} from "lucide-react";

// TypeScript Interfaces for Security Matrix
interface MonthlyBenefitProps {
  title: string;
  description: string;
}

interface MonthlyFleetProps {
  title: string;
  monthlyPrice: string;
  weeklyEquivalent: string;
  features: string[];
  ctaText: string;
  premiumTier?: boolean;
}

export default function MonthlyRentals(): React.ReactElement {
  
  // Monthly Structural Benefits Data
  const monthlyBenefits: MonthlyBenefitProps[] = [
    {
      title: "Max-Tier Capital Savings",
      description: "Enjoy up to 40% discount margins compared to traditional daily rolling setups. Lock in predictable monthly operational expenses with tax-compliant GST invoicing."
    },
    {
      title: "Zero Down Payment & Maintenance Vows",
      description: "Avoid heavy down payments, loan obligations, or depreciation hazards. Every single month includes scheduled mechanical inspections and free oil swaps."
    },
    {
      title: "On-Demand Fleet Rotation",
      description: "Need a sedan for a corporate meet this month, but an SUV for site surveys next month? Our MERN platform makes tier replacement smooth on every 30-day renewal cycle."
    }
  ];

  // Tailored Monthly Fleet Database Blueprint
  const monthlyFleet: MonthlyFleetProps[] = [
    {
      title: "Smart Fuel Economy Tier",
      monthlyPrice: "₹29,999",
      weeklyEquivalent: "₹6,999 / Week Equivalent",
      features: ["Ideal for Daily Office Commutes", "Ultra-High Mileage Diagnostics", "Standard Collision Damage Cover", "3,500 Total KM Included Limit"],
      ctaText: "Subscribe to Economy"
    },
    {
      title: "Corporate Luxury Fleet",
      monthlyPrice: "₹54,999",
      weeklyEquivalent: "₹12,833 / Week Equivalent",
      features: ["Premium Leather Cockpit Accents", "ADAS & Advanced Safety Sensors", "VIP Delivery & Local Pickup Setup", "Unlimited Kilometers Included Limit"],
      ctaText: "Subscribe to Corporate Class",
      premiumTier: true
    },
    {
      title: "Full-Size Premium SUV",
      monthlyPrice: "₹74,999",
      weeklyEquivalent: "₹17,500 / Week Equivalent",
      features: ["Commanding AWD Drive Controls", "Massive Trunk & Fleet Capabilities", "Zero-Liability Complete Damage Protection", "Unlimited Kilometers Included Limit"],
      ctaText: "Subscribe to Premium SUV"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors duration-300 py-6 lg:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14 md:space-y-20">
        
        {/* 1. HEADER SECTION */}
        <div className="text-center space-y-4 max-w-5xl mx-auto">
          <div className="inline-flex items-center space-x-2 bg-blue-50 dark:bg-blue-900/30 border border-blue-100 dark:border-blue-800/50 px-4 py-1.5 rounded-full shadow-sm">
            <Building2 className="w-4 h-4 text-[#5EBC23]" />
            <span className="text-xs font-bold text-[#0C4587] dark:text-blue-300 tracking-wide uppercase">
              Enterprise Mobility Hub
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-gray-900 dark:text-white">
            Monthly Subscription <span className="bg-gradient-to-r from-[#0C4587] to-[#5EBC23] bg-clip-text text-transparent">Fleet</span>
          </h1>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 leading-relaxed font-medium">
            Smart vehicle leasing architectures tailored for businesses, startups, and expats. Experience premium car ownership advantages without the heavy liabilities of purchasing.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-[#0C4587] to-[#5EBC23] mx-auto rounded-full" />
        </div>

        {/* 2. THREE PILLAR MATRIX ARCHITECTURE */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-8 items-stretch">
          {monthlyBenefits.map((benefit, idx) => (
            <div 
              key={idx}
              className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-2 md:p-6 shadow-sm flex flex-col space-y-4 hover:shadow-md transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-gray-50 dark:bg-gray-950 border border-gray-100 dark:border-gray-800 flex items-center justify-center flex-shrink-0">
                {idx === 0 && <BadgePercent className="w-5 h-5 text-[#0C4587] dark:text-blue-400" />}
                {idx === 1 && <ShieldCheck className="w-5 h-5 text-[#5EBC23]" />}
                {idx === 2 && <RefreshCw className="w-5 h-5 text-[#D48C3B]" />}
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white tracking-tight">
                  {benefit.title}
                </h3>
                <p className="text-sm leading-relaxed font-medium">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* 3. SUBSCRIPTION TIERS BLOCK */}
        <div className="space-y-12">
          <div className="text-center space-y-2">
            <h2 className="text-xs uppercase font-extrabold tracking-widest text-[#5EBC23]">
              Flexible Leasing
            </h2>
            <p className="text-2xl sm:text-3xl font-black text-gray-900 dark:text-white">
              Bespoke Monthly Tiers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 items-stretch">
            {monthlyFleet.map((car, idx) => (
              <div 
                key={idx}
                className={`bg-white dark:bg-gray-900 border rounded-3xl p-6 lg:p-8 shadow-sm flex flex-col justify-between relative transition-all duration-300 ${
                  car.premiumTier 
                    ? "border-[#D48C3B] ring-4 ring-amber-500/5 dark:ring-amber-500/10 scale-102" 
                    : "border-gray-100 dark:border-gray-900 hover:border-gray-200 dark:hover:border-gray-800"
                }`}
              >
                {car.premiumTier && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#D48C3B] to-[#b36f27] text-white text-[10px] uppercase font-black tracking-widest px-4 py-1 rounded-full shadow-md flex items-center">
                    <Sparkles className="w-3 h-3 mr-1 text-white fill-white" /> Luxury Preferred
                  </span>
                )}

                <div className="space-y-6">
                  {/* Title & Subscription Financial Tracker */}
                  <div className="space-y-2 text-center border-b border-gray-50 dark:border-gray-800/50 pb-5">
                    <h3 className="text-xl font-black text-gray-900 dark:text-white tracking-tight">
                      {car.title}
                    </h3>
                    <div className="flex flex-col items-center justify-center">
                      <span className="text-3xl sm:text-4xl font-black tracking-tight text-gray-900 dark:text-white">
                        {car.monthlyPrice}
                      </span>
                      <span className="text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest mt-1">
                        Fixed Per Month
                      </span>
                      <span className="text-xs font-bold text-[#5EBC23] bg-green-50 dark:bg-green-950/30 px-3 py-1 rounded-full mt-2 border border-green-100/50 dark:border-green-900/20">
                        {car.weeklyEquivalent}
                      </span>
                    </div>
                  </div>

                  {/* Operational Checkpoints List */}
                  <ul className="space-y-3">
                    {car.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start text-sm font-semibold text-gray-500 dark:text-gray-400">
                        <CheckCircle2 className="w-4 h-4 mr-2.5 text-[#5EBC23] flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Navigation CTA Trigger Link */}
                <div className="pt-8">
                  <Link
                    href="/booking"
                    className={`w-full inline-flex items-center justify-center font-bold py-3.5 rounded-xl text-sm shadow-sm transition-all duration-300 group ${
                      car.premiumTier
                        ? "bg-gradient-to-r from-[#D48C3B] to-[#b36f27] hover:from-[#0C4587] hover:to-[#0A3C73] text-white"
                        : "bg-gray-50 dark:bg-gray-950 hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-800 dark:text-gray-200 border border-gray-200 dark:border-gray-800"
                    }`}
                  >
                    {car.ctaText}
                    <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 4. BUSINESS ENVELOPE FOOTNOTE BLOCK */}
        <div className="bg-gradient-to-br from-[#0C4587]/5 via-transparent to-[#D48C3B]/5 border border-blue-100/30 dark:border-blue-900/20 rounded-2xl p-6 lg:p-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-3.5 text-left">
            <div className="p-3 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-xl text-blue-500 flex-shrink-0 shadow-sm">
              <Clock9 className="w-5 h-5 text-[#D48C3B]" />
            </div>
            <div>
              <h4 className="font-bold text-gray-900 dark:text-white text-base">Customized Fleet Management Frameworks</h4>
              <p className="text-xs sm:text-sm text-gray-400 dark:text-gray-500 font-medium">Need a fleet of 5+ cars for your organization? We provide customized commercial dashboard privileges.</p>
            </div>
          </div>
          <Link
            href="/contact"
            className="text-xs sm:text-sm font-bold text-[#D48C3B] hover:underline flex-shrink-0"
          >
            Contact B2B Desk &rarr;
          </Link>
        </div>

      </div>
    </div>
  );
}