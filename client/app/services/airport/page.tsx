"use client";

import React from "react";
import Link from "next/link";
import {
  PlaneTakeoff,
  PlaneLanding,
  Clock,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  MapPin,
  UserCheck,
  AlertCircle,
} from "lucide-react";

// TypeScript Interfaces for Structural Grid
interface AirportAdvantageProps {
  title: string;
  description: string;
}

interface TerminalRouteProps {
  title: string;
  basePrice: string;
  packageType: string;
  features: string[];
  ctaText: string;
  featured?: boolean;
}

export default function AirportTransfer(): React.ReactElement {
  // Airport Services Core Features Data
  const airportAdvantages: AirportAdvantageProps[] = [
    {
      title: "Real-Time Flight Tracking Sync",
      description:
        "No delay penalties. Our upcoming MERN backend automatically syncs with live airport radar systems. If your flight is delayed or arrives early, your chauffeur/fleet dispatch timeline shifts automatically.",
    },
    {
      title: "Complementary Meet & Greet Privilege",
      description:
        "Experience absolute luxury. For terminal pickups, a designated professional agent awaits you at the arrival lounge with a personalized name-board, assisting with heavy luggage matrices.",
    },
    {
      title: "Strict 60-Minute Grace Window",
      description:
        "We understand airport clearance loops. Every international and domestic pickup contract includes a complementary 60-minute wait time post flight-landing flags.",
    },
  ];

  // Curated Airport Route Tier Configurations
  const routeTiers: TerminalRouteProps[] = [
    {
      title: "Domestic Terminal Hand-off",
      basePrice: "₹1,999",
      packageType: "Fixed Flat Rate",
      features: [
        "Compact Premium Sedan Fleet",
        "Curbside Quick Meet & Greet",
        "30 Mins Grace Wait Included",
        "Toll & Parking Charges Included",
      ],
      ctaText: "Book Domestic Transfer",
    },
    {
      title: "VIP International Gateway",
      basePrice: "₹3,499",
      packageType: "Fixed Flat Rate",
      features: [
        "Luxury SUV Full Fleet Access",
        "Inside Terminal Meet & Greet",
        "60 Mins Grace Wait Included",
        "Toll, Parking & Lounge Privileges",
      ],
      ctaText: "Book VIP Transfer",
      featured: true,
    },
    {
      title: "Inter-Airport Transit Matrix",
      basePrice: "₹2,499",
      packageType: "Fixed Flat Rate",
      features: [
        "Spacious 6-Seater Family MUV",
        "Dedicated Express Route Navigation",
        "Flexible Stop-Over Permissions",
        "Comprehensive Damage Protection",
      ],
      ctaText: "Book Inter-Terminal",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors duration-300 py-6 lg:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14 md:space-y-20">
        {/* 1. HEADER HERO HUB */}
        <div className="text-center space-y-4 max-w-5xl mx-auto">
          <div className="inline-flex items-center space-x-2 bg-blue-50 dark:bg-blue-900/30 border border-blue-100 dark:border-blue-800/50 px-4 py-1.5 rounded-full shadow-sm">
            <PlaneTakeoff className="w-4 h-4 text-[#5EBC23]" />
            <span className="text-xs font-bold text-[#0C4587] dark:text-blue-300 tracking-wide uppercase">
              Chauffeur & Terminal Despatch
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-gray-900 dark:text-white">
            Airport{" "}
            <span className="bg-gradient-to-r from-[#0C4587] to-[#5EBC23] bg-clip-text text-transparent">
              Transfers
            </span>
          </h1>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 leading-relaxed font-medium">
            Ultra-punctual, elite, and seamless airport pickup and drop-off
            solutions. Bridge your airline itinerary with Carry-On premium
            mobility modules across all commercial hubs.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-[#0C4587] to-[#5EBC23] mx-auto rounded-full" />
        </div>

        {/* 2. VALUE PROPOSITION MATRIX */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-8 items-stretch">
          {airportAdvantages.map((adv, idx) => (
            <div
              key={idx}
              className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-2 md:p-6 shadow-sm flex flex-col space-y-4 hover:shadow-md transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-gray-50 dark:bg-gray-950 border border-gray-100 dark:border-gray-800 flex items-center justify-center flex-shrink-0">
                {idx === 0 && (
                  <Clock className="w-5 h-5 text-[#0C4587] dark:text-blue-400" />
                )}
                {idx === 1 && <UserCheck className="w-5 h-5 text-[#5EBC23]" />}
                {idx === 2 && (
                  <ShieldCheck className="w-5 h-5 text-[#D48C3B]" />
                )}
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white tracking-tight">
                  {adv.title}
                </h3>
                <p className="text-sm leading-relaxed font-medium">
                  {adv.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* 3. AIRPORT TERMINAL TIER BLOCKS */}
        <div className="space-y-12">
          <div className="text-center space-y-2">
            <h2 className="text-xs uppercase font-extrabold tracking-widest text-[#5EBC23]">
              Fixed Transit Pricing
            </h2>
            <p className="text-2xl sm:text-3xl font-black text-gray-900 dark:text-white">
              Bespoke Airport Packages
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 items-stretch">
            {routeTiers.map((route, idx) => (
              <div
                key={idx}
                className={`bg-white dark:bg-gray-900 border rounded-3xl p-6 lg:p-8 shadow-sm flex flex-col justify-between relative transition-all duration-300 ${
                  route.featured
                    ? "border-[#0C4587] ring-4 ring-blue-500/5 dark:ring-blue-500/10 scale-102"
                    : "border-gray-100 dark:border-gray-900 hover:border-gray-200 dark:hover:border-gray-800"
                }`}
              >
                {route.featured && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#0C4587] to-blue-600 text-white text-[10px] uppercase font-black tracking-widest px-4 py-1 rounded-full shadow-md flex items-center">
                    <Sparkles className="w-3 h-3 mr-1 text-yellow-300 fill-yellow-300" />{" "}
                    Executive Class Priority
                  </span>
                )}

                <div className="space-y-6">
                  {/* Title & Flat Pricing Matrix */}
                  <div className="space-y-2 text-center border-b border-gray-50 dark:border-gray-800/50 pb-5">
                    <h3 className="text-xl font-black text-gray-900 dark:text-white tracking-tight">
                      {route.title}
                    </h3>
                    <div className="flex flex-col items-center justify-center">
                      <span className="text-3xl sm:text-4xl font-black tracking-tight text-gray-900 dark:text-white">
                        {route.basePrice}
                      </span>
                      <span className="text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest mt-1">
                        {route.packageType}
                      </span>
                      <span className="text-xs font-bold text-[#5EBC23] bg-green-50 dark:bg-green-950/30 px-3 py-1 rounded-full mt-2 border border-green-100/50 dark:border-green-900/20">
                        No Surge Surcharges
                      </span>
                    </div>
                  </div>

                  {/* Service Checkpoints */}
                  <ul className="space-y-3">
                    {route.features.map((feature, fIdx) => (
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

                {/* Submit Trigger Link */}
                <div className="pt-8">
                  <Link
                    href="/booking"
                    className={`w-full inline-flex items-center justify-center font-bold py-3.5 rounded-xl text-sm shadow-sm transition-all duration-300 group ${
                      route.featured
                        ? "bg-gradient-to-r from-[#0C4587] to-blue-600 hover:from-[#5EBC23] hover:to-[#4CAF50] text-white"
                        : "bg-gray-50 dark:bg-gray-950 hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-800 dark:text-gray-200 border border-gray-200 dark:border-gray-800"
                    }`}
                  >
                    {route.ctaText}
                    <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 4. EMERGENCY/BUFFER FLIGHT ADVISORY FOOTNOTE */}
        <div className="bg-gradient-to-br from-[#0C4587]/5 via-transparent to-[#5EBC23]/5 border border-blue-100/30 dark:border-blue-900/20 rounded-2xl p-6 lg:p-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-3.5 text-left">
            <div className="p-3 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-xl text-amber-500 flex-shrink-0 shadow-sm">
              <AlertCircle className="w-5 h-5 text-[#D48C3B]" />
            </div>
            <div>
              <h4 className="font-bold text-gray-900 dark:text-white text-base">
                Missed Flight Protection Guarantee
              </h4>
              <p className="text-xs sm:text-sm text-gray-400 dark:text-gray-500 font-medium">
                If your flight gets canceled or re-routed by airlines, we offer
                zero-cost schedule adjustments up to 3 hours before initial
                flags.
              </p>
            </div>
          </div>
          <Link
            href="/contact"
            className="text-xs sm:text-sm font-bold text-[#0C4587] dark:text-blue-400 hover:underline flex-shrink-0"
          >
            Contact Dispatch Desk &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}
