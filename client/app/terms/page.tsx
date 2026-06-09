"use client";

import React, { useState, useEffect } from "react";
import {
  Scale,
  Milestone,
  Fuel,
  AlertTriangle,
  CreditCard,
  ShieldAlert,
} from "lucide-react";

export default function TermsAndConditions() {
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

  const lastUpdated = "May 25, 2026";

  const termsSections = [
    {
      icon: <Milestone className="w-5 h-5" />,
      colorClass: "text-[#0C4587] dark:text-blue-400 group-hover:text-white",
      bgHoverClass: "group-hover:bg-[#0C4587]",
      title: "1. Eligibility & Driver Requirements",
      content:
        "To rent a car from Carry-On, the driver must be at least 21 years of age and hold a valid, unexpired commercial or personal Driving License (DL) issued by legitimate government authorities. A refundable security deposit may be verified at the time of pickup depending on the vehicle category.",
    },
    {
      icon: <CreditCard className="w-5 h-5" />,
      colorClass: "text-[#5EBC23] group-hover:text-white",
      bgHoverClass: "group-hover:bg-[#5EBC23]",
      title: "2. Booking, Payments & Cancellation",
      content:
        "All payments must be completed via our secure integrated payment gateways on the platform. Cancellations made 24 hours prior to the scheduled pickup time are eligible for a full refund. Late cancellations or no-shows will attract a processing fee deducted straight from the base booking amount.",
    },
    {
      icon: <Fuel className="w-5 h-5" />,
      colorClass: "text-[#D48C3B] group-hover:text-white",
      bgHoverClass: "group-hover:bg-[#D48C3B]",
      title: "3. Fuel & Usage Policies",
      content:
        "Vehicles must be returned with the same level of fuel as provided during the initial handoff. If a car is returned with less fuel, standard refueling charges along with service fees will apply. The vehicles are equipped with tracking modules to monitor safe speed thresholds.",
    },
    {
      icon: <AlertTriangle className="w-5 h-5" />,
      colorClass: "text-red-500 group-hover:text-white",
      bgHoverClass: "group-hover:bg-red-500",
      title: "4. Damage Liabilities & Insurance",
      content:
        "In case of any accidental damage, scratching, or breakdown during the rental tenure, the client must immediately inform our 24/7 support cell. While the fleet is insured, the client is liable to pay the standard insurance deductible or excess amount as per the breach conditions.",
    },
    {
      icon: <ShieldAlert className="w-5 h-5" />,
      colorClass: "text-purple-500 group-hover:text-white",
      bgHoverClass: "group-hover:bg-purple-500",
      title: "5. Traffic Violations & Fines",
      content:
        "Any overspeeding tickets, red-light violations, illegal parking penalties, or toll discrepancies incurred during the active rental period are the absolute liability of the renter. Carry-On reserves the right to charge these fines directly to the client's saved payment methods.",
    },
  ];

  return (
    <div className="relative min-h-screen text-gray-900 dark:text-gray-100 transition-colors duration-300 pb-16 pt-24 md:pb-24 md:pt-32 overflow-hidden z-0">
      {/* ========================================= */}
      {/* BACKGROUND IMAGE & FROSTED GLASS OVERLAY  */}
      {/* ========================================= */}

      {/* Parallax Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed bg-no-repeat -z-30"
        style={{
          // Abstract/Contract related subtle background
          backgroundImage:
            "url('https://www.trivixam.com/api/upload/file/terms---conditions-09062026-1526.jpg')",
        }}
      />

      {/* DYNAMIC Frosted Glassmorphism Overlay based on Scroll */}
      <div
        className={`absolute inset-0 transition-all duration-700 ease-in-out -z-20 ${
          isScrolled
            ? "bg-white/55 dark:bg-[#050B14]/80 backdrop-blur-[3px]"
            : "bg-[#050B14]/30 backdrop-blur-[2px]"
        }`}
      />

      {/* Brand Radial Ambient Glows */}
      <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-[#0C4587]/10 rounded-full blur-[100px] pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-[#5EBC23]/5 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-10">
        {/* ========================================= */}
        {/* HEADER BLOCK                              */}
        {/* ========================================= */}
        <div className="text-center space-y-4 mb-12 drop-shadow-sm">
          <div className="inline-flex items-center space-x-1.5 bg-white/80 dark:bg-gray-900/60 backdrop-blur-md border border-gray-200 dark:border-gray-800/80 px-3.5 py-1.5 rounded-full shadow-sm">
            <Scale className="w-3.5 h-3.5 text-[#5EBC23]" />
            <span className="text-[10px] font-black text-[#0C4587] dark:text-gray-200 tracking-widest uppercase">
              Legal Agreement
            </span>
          </div>
          <h1
            className={`text-2xl sm:text-5xl  font-black tracking-tight leading-tight transition-colors duration-500 ${isScrolled ? "text-gray-900 dark:text-white" : "text-black"}`}
          >
            Terms & Conditions
          </h1>
          <p
            className={`text-[12px] sm:text-xs font-bold uppercase tracking-widest transition-colors duration-500 ${isScrolled ? "text-gray-600 dark:text-gray-400" : "text-black"}`}
          >
            Last Updated: {lastUpdated} • Carry-On Car Rental Pvt Ltd.
          </p>
          <div className="w-12 h-1 bg-gradient-to-r from-[#0C4587] to-[#5EBC23] mx-auto rounded-full mt-4" />
        </div>

        {/* ========================================= */}
        {/* INTRO TEXT CARD (Glassmorphic)            */}
        {/* ========================================= */}
        <div className="bg-white/80 dark:bg-[#0A1120]/60 backdrop-blur-xl border border-white/50 dark:border-gray-800/60 rounded-3xl p-6 lg:p-8 shadow-lg leading-relaxed text-gray-700 dark:text-gray-300 text-xs sm:text-sm font-semibold text-center sm:text-left">
          Please read these{" "}
          <strong className="text-gray-900 dark:text-white">
            Terms and Conditions
          </strong>{" "}
          carefully before initializing any booking services through our web
          application layer or upcoming mobile interfaces. By browsing or
          reserving any fleet item under{" "}
          <strong className="text-gray-900 dark:text-white">
            Carry-On Car Rental Pvt. Ltd.
          </strong>
          , you inherently agree to remain compliant with the listed clauses and
          legal frameworks.
        </div>

        {/* ========================================= */}
        {/* DYNAMIC SECTION ACCORDION/LIST LAYOUT     */}
        {/* ========================================= */}
        <div className="space-y-6">
          {termsSections.map((section, index) => (
            <div
              key={index}
              className="bg-white/95 dark:bg-[#0A1120]/90 backdrop-blur-md border border-gray-200/80 dark:border-gray-800/80 rounded-[2rem] p-5 md:p-8 shadow-md hover:shadow-xl transition-all duration-300 group hover:-translate-y-1"
            >
              <div className="flex items-center space-x-4 mb-4">
                <div
                  className={`p-3 bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-2xl flex-shrink-0 transition-colors duration-300 ${section.colorClass} ${section.bgHoverClass}`}
                >
                  {section.icon}
                </div>
                <h2 className="text-base sm:text-lg font-black text-gray-900 dark:text-white tracking-tight">
                  {section.title}
                </h2>
              </div>
              <p className="text-[11px] sm:text-xs text-gray-600 dark:text-gray-400 leading-relaxed sm:pl-[3.25rem] font-medium">
                {section.content}
              </p>
            </div>
          ))}
        </div>

        {/* ========================================= */}
        {/* DYNAMIC SUPPORT / CONTACT CALLOUT         */}
        {/* ========================================= */}
        <div className="mt-12 bg-gradient-to-r from-[#0C4587] to-[#0A3C73] border border-transparent dark:border-blue-900/50 rounded-[2rem] p-8 lg:p-10 text-center space-y-4 shadow-2xl shadow-blue-900/20 relative overflow-hidden group">
          <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-[#5EBC23]/20 rounded-full blur-3xl pointer-events-none" />

          <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight relative z-10">
            Need clarity on specific fleet usage metrics?
          </h3>
          <p className="text-[11px] sm:text-xs text-blue-100/80 max-w-xl mx-auto font-semibold leading-relaxed relative z-10">
            Violation of any terms listed above might lead to immediate tracking
            suspension, booking cancellation, or forfeit of safety deposits as
            per enterprise operational rules.
          </p>
          <div className="pt-4 relative z-10">
            <a
              href="mailto:connect@carry-on.in"
              className="inline-flex items-center justify-center bg-[#5EBC23] hover:bg-white text-white hover:text-[#0C4587] text-[10px] sm:text-xs font-black uppercase tracking-widest px-6 py-3 rounded-xl shadow-lg transition-colors duration-300"
            >
              ✉️ connect@carry-on.in
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
