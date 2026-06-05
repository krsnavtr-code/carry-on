"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  Building2,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  BadgePercent,
  RefreshCw,
  Clock9,
} from "lucide-react";

// TypeScript Interfaces for Security Matrix
interface MonthlyBenefitProps {
  title: string;
  description: string;
  borderColor: string;
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

  // Monthly Structural Benefits Data
  const monthlyBenefits: MonthlyBenefitProps[] = [
    {
      title: "Max-Tier Capital Savings",
      description:
        "Enjoy up to 40% discount margins compared to traditional daily rolling setups. Lock in predictable monthly operational expenses with tax-compliant GST invoicing.",
      borderColor: "border-t-[#0C4587]",
    },
    {
      title: "Zero Down Payment Vows",
      description:
        "Avoid heavy down payments, loan obligations, or depreciation hazards. Every single month includes scheduled mechanical inspections and free oil swaps.",
      borderColor: "border-t-[#5EBC23]",
    },
    {
      title: "On-Demand Fleet Rotation",
      description:
        "Need a sedan for a corporate meet this month, but an SUV next month? Our platform makes tier replacement smooth on every 30-day renewal cycle.",
      borderColor: "border-t-[#D48C3B]",
    },
  ];

  // Tailored Monthly Fleet Database Blueprint
  const monthlyFleet: MonthlyFleetProps[] = [
    {
      title: "Smart Fuel Economy",
      monthlyPrice: "₹29,999",
      weeklyEquivalent: "₹6,999 / Week Equivalent",
      features: [
        "Ideal for Daily Office Commutes",
        "Ultra-High Mileage Diagnostics",
        "Standard Collision Cover",
        "3,500 Total KM Included Limit",
      ],
      ctaText: "Subscribe to Economy",
    },
    {
      title: "Corporate Luxury Fleet",
      monthlyPrice: "₹54,999",
      weeklyEquivalent: "₹12,833 / Week Equivalent",
      features: [
        "Premium Leather Cockpit",
        "ADAS & Advanced Safety Sensors",
        "VIP Delivery & Local Pickup",
        "Unlimited Kilometers Included",
      ],
      ctaText: "Subscribe to Corporate",
      premiumTier: true,
    },
    {
      title: "Full-Size Premium SUV",
      monthlyPrice: "₹74,999",
      weeklyEquivalent: "₹17,500 / Week Equivalent",
      features: [
        "Commanding AWD Drive Controls",
        "Massive Trunk Capabilities",
        "Zero-Liability Damage Protection",
        "Unlimited Kilometers Included",
      ],
      ctaText: "Subscribe to Premium SUV",
    },
  ];

  return (
    <div className="relative min-h-screen text-gray-900 dark:text-gray-100 transition-colors duration-300 pb-16 pt-24 md:pb-24 md:pt-32 overflow-hidden z-0">
      {/* ========================================= */}
      {/* BACKGROUND IMAGE & DYNAMIC FROSTED OVERLAY*/}
      {/* ========================================= */}

      {/* Parallax Background Image (Corporate/Cityscape Theme) */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed bg-no-repeat -z-30"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000&auto=format&fit=crop')",
        }}
      />

      {/* DYNAMIC Frosted Glassmorphism Overlay based on Scroll */}
      <div
        className={`absolute inset-0 transition-all duration-700 ease-in-out -z-20 ${
          isScrolled
            ? "bg-white/55 dark:bg-[#050B14]/80 backdrop-blur-[3px]"
            : "bg-black/40 dark:bg-[#050B14]/40 backdrop-blur-[2px]"
        }`}
      />

      {/* Brand Radial Ambient Glows (Incorporating Corporate Gold/Amber) */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-[#0C4587]/15 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-[#D48C3B]/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 relative z-10">
        {/* ========================================= */}
        {/* 1. HEADER HERO HUB                        */}
        {/* ========================================= */}
        <div className="text-center space-y-4 max-w-4xl mx-auto drop-shadow-sm">
          <div className="inline-flex items-center space-x-2 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border border-gray-200/50 dark:border-gray-800/80 px-4 py-1.5 rounded-full shadow-sm">
            <Building2 className="w-4 h-4 text-[#D48C3B]" />
            <span className="text-[10px] font-black text-[#0C4587] dark:text-gray-200 tracking-widest uppercase">
              Enterprise Mobility Hub
            </span>
          </div>
          <h1
            className={`text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight transition-colors duration-500 ${isScrolled ? "text-gray-900 dark:text-white" : "text-white"}`}
          >
            Monthly Subscription{" "}
            <span className="bg-gradient-to-r from-[#0C4587] to-[#D48C3B] bg-clip-text text-transparent drop-shadow-md">
              Fleet
            </span>
          </h1>
          <p
            className={`text-xs sm:text-sm leading-relaxed font-semibold max-w-2xl mx-auto transition-colors duration-500 ${isScrolled ? "text-gray-700 dark:text-gray-300" : "text-gray-200"}`}
          >
            Smart vehicle leasing architectures tailored for businesses,
            startups, and expats. Experience premium car ownership advantages
            without the heavy liabilities of purchasing with{" "}
            <strong
              className={
                isScrolled ? "text-gray-900 dark:text-white" : "text-white"
              }
            >
              Carry-On Car Rental Pvt Ltd.
            </strong>
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-[#0C4587] to-[#D48C3B] mx-auto rounded-full mt-4" />
        </div>

        {/* ========================================= */}
        {/* 2. THREE PILLAR MATRIX (Accent Cards)     */}
        {/* ========================================= */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {monthlyBenefits.map((benefit, idx) => (
            <div
              key={idx}
              className={`bg-white/95 dark:bg-[#0A1120]/90 backdrop-blur-md border-x border-b border-gray-200/80 dark:border-gray-800/80 rounded-b-2xl rounded-t-sm p-6 lg:p-8 shadow-md flex flex-col space-y-5 hover:-translate-y-1.5 hover:shadow-xl transition-all duration-300 border-t-4 ${benefit.borderColor} group`}
            >
              <div className="w-14 h-14 rounded-2xl bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-sm">
                {idx === 0 && (
                  <BadgePercent className="w-6 h-6 text-[#0C4587] dark:text-blue-400" />
                )}
                {idx === 1 && (
                  <ShieldCheck className="w-6 h-6 text-[#5EBC23]" />
                )}
                {idx === 2 && <RefreshCw className="w-6 h-6 text-[#D48C3B]" />}
              </div>
              <div className="space-y-2.5">
                <h3 className="text-lg sm:text-xl font-black text-gray-900 dark:text-white tracking-tight">
                  {benefit.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 leading-relaxed font-semibold">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* ========================================= */}
        {/* 3. SUBSCRIPTION TIERS BLOCK (SaaS Style)  */}
        {/* ========================================= */}
        <div className="space-y-12 pt-8">
          <div
            className={`text-center space-y-2 drop-shadow-sm transition-colors duration-500`}
          >
            <h2 className="text-[10px] uppercase font-black tracking-widest text-[#D48C3B]">
              Flexible Leasing
            </h2>
            <p
              className={`text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight ${isScrolled ? "text-gray-900 dark:text-white" : "text-white"}`}
            >
              Bespoke Monthly Tiers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-center max-w-6xl mx-auto">
            {monthlyFleet.map((car, idx) => (
              <div
                key={idx}
                className={`backdrop-blur-xl border rounded-[2rem] p-6 lg:p-8 flex flex-col justify-between relative transition-all duration-500 ${
                  car.premiumTier
                    ? "bg-gradient-to-b from-white/95 to-white/90 dark:from-[#D48C3B]/10 dark:to-[#0A1120]/95 border-[#D48C3B]/50 ring-2 ring-[#D48C3B]/30 shadow-2xl shadow-[#D48C3B]/20 md:scale-105 z-10 min-h-[500px]"
                    : "bg-white/80 dark:bg-[#0A1120]/80 border-white/50 dark:border-gray-800/60 shadow-lg hover:border-gray-300 dark:hover:border-gray-700 min-h-[460px]"
                }`}
              >
                {car.premiumTier && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#D48C3B] to-[#b36f27] text-white text-[10px] uppercase font-black tracking-widest px-5 py-1.5 rounded-full shadow-lg flex items-center border border-[#D48C3B]">
                    <Sparkles className="w-3 h-3 mr-1.5 text-white fill-white" />{" "}
                    Luxury Preferred
                  </span>
                )}

                <div className="space-y-8">
                  {/* Title & Subscription Financial Tracker */}
                  <div
                    className={`space-y-3 text-center border-b pb-6 ${car.premiumTier ? "border-gray-200 dark:border-gray-800/80" : "border-gray-200/50 dark:border-gray-800/50"}`}
                  >
                    <h3
                      className={`text-xl font-black tracking-tight ${car.premiumTier ? "text-[#D48C3B] dark:text-amber-400" : "text-gray-900 dark:text-white"}`}
                    >
                      {car.title}
                    </h3>
                    <div className="flex flex-col items-center justify-center">
                      <span className="text-4xl sm:text-5xl font-black tracking-tight text-gray-900 dark:text-white drop-shadow-sm">
                        {car.monthlyPrice}
                      </span>
                      <span className="text-[10px] font-black text-gray-500 uppercase tracking-widest mt-2">
                        Fixed Per Month
                      </span>
                      <span
                        className={`text-[9px] font-black px-3 py-1 rounded-md mt-3 border tracking-widest uppercase ${car.premiumTier ? "text-[#D48C3B] bg-amber-50 dark:bg-amber-950/40 border-amber-200/50 dark:border-amber-900/30" : "text-[#5EBC23] bg-green-50 dark:bg-green-950/40 border-green-100/50 dark:border-green-900/30"}`}
                      >
                        {car.weeklyEquivalent}
                      </span>
                    </div>
                  </div>

                  {/* Operational Checkpoints List */}
                  <ul className="space-y-3.5">
                    {car.features.map((feature, fIdx) => (
                      <li
                        key={fIdx}
                        className="flex items-center text-xs sm:text-sm font-bold text-gray-700 dark:text-gray-300"
                      >
                        <CheckCircle2
                          className={`w-4 h-4 mr-3 flex-shrink-0 ${car.premiumTier ? "text-[#D48C3B]" : "text-[#5EBC23]"}`}
                        />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Navigation CTA Trigger Link */}
                <div className="pt-8 mt-auto">
                  <Link
                    href="/booking"
                    className={`w-full inline-flex items-center justify-center font-black text-[10px] sm:text-xs uppercase tracking-widest py-4 rounded-xl shadow-md transition-all duration-300 group ${
                      car.premiumTier
                        ? "bg-gradient-to-r from-[#D48C3B] to-[#b36f27] hover:from-[#0C4587] hover:to-[#0A3C73] text-white shadow-amber-900/20"
                        : "bg-gray-100 dark:bg-gray-900 hover:bg-[#0C4587] hover:text-white text-gray-800 dark:text-gray-200 border border-gray-200 dark:border-gray-800"
                    }`}
                  >
                    <span>{car.ctaText}</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ========================================= */}
        {/* 4. BUSINESS ENVELOPE FOOTNOTE BLOCK       */}
        {/* ========================================= */}
        <div className="mt-16 bg-white/90 dark:bg-[#0A1120]/80 backdrop-blur-md border border-white/50 dark:border-gray-800/60 rounded-[2rem] p-6 lg:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl relative overflow-hidden group">
          {/* Decorative Glow */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#0C4587]/10 rounded-full blur-2xl pointer-events-none" />

          <div className="flex items-center space-x-4 text-left relative z-10">
            <div className="p-3.5 bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800/30 rounded-2xl flex-shrink-0 shadow-sm group-hover:scale-110 transition-transform duration-300">
              <Clock9 className="w-6 h-6 text-[#0C4587] dark:text-blue-400" />
            </div>
            <div>
              <h4 className="font-black text-gray-900 dark:text-white text-base sm:text-lg tracking-tight">
                Customized Fleet Management Frameworks
              </h4>
              <p className="text-[11px] sm:text-xs text-gray-600 dark:text-gray-400 font-semibold mt-1 max-w-xl">
                Need a fleet of 5+ cars for your organization? We provide
                customized commercial dashboard privileges and dedicated account
                managers.
              </p>
            </div>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:bg-[#D48C3B] dark:hover:bg-[#D48C3B] hover:text-white text-[10px] sm:text-xs font-black uppercase tracking-widest px-6 py-3.5 rounded-xl shadow-md transition-colors duration-300 flex-shrink-0 relative z-10"
          >
            Contact B2B Desk <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
