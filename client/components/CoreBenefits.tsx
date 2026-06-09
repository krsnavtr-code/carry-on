"use client";

import React from "react";
import Link from "next/link";
import {
  ShieldCheck,
  Coins,
  Wrench,
  Clock,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  Gauge,
} from "lucide-react";

// 1. TYPESCRIPT INTERFACES FOR RIGID TYPE SAFETY
interface CoreFeatureCard {
  id: string;
  icon: React.ReactNode;
  title: string;
  badge: string;
  description: string;
  bulletPoints: string[];
  bgImage: string; // Naya addition background images ke liye
}

export default function CoreBenefits(): React.ReactElement {
  // 2. DATA ARCHITECTURE: 4 VALUE PILLARS STRUCTURED TO MAXIMIZE USER TRUST
  const features: CoreFeatureCard[] = [
    {
      id: "feat-01",
      icon: <ShieldCheck className="w-5 h-5 text-white" />,
      title: "150-Point Rigid Mechanical Vetting",
      badge: "Absolute Safety",
      description:
        "We bypass baseline diagnostics. Every vehicle undergoes a rigid engineering and computerized OBD-II sensor scan prior to key handoffs.",
      bulletPoints: [
        "Full brakes & tire thread verification",
        "Automated oil & fluid optimization runs",
        "Sanitized medical-grade upholstery care",
      ],
      // Mechanic / Engine checking thematic image
      bgImage:
        "https://www.trivixam.com/api/upload/file/toyota-innova-hycross-09062026-1713.png",
    },
    {
      id: "feat-02",
      icon: <Coins className="w-5 h-5 text-white" />,
      title: "Transparent Pricing Node Matrix",
      badge: "Zero Hidden Overheads",
      description:
        "What you compute during the search process stays static. We have enforced an absolute ban on hidden overheads or shock price surges.",
      bulletPoints: [
        "Taxes & statutory coverage pre-calculated",
        "Same-to-same clear fuel fill protocols",
        "No surprise delay penalties embedded",
      ],
      // Luxury car interior / dashboard thematic image
      bgImage:
        "https://www.trivixam.com/api/upload/file/contact-09062026-1550.jpg",
    },
    {
      id: "feat-03",
      icon: <Clock className="w-5 h-5 text-white" />,
      title: "10+ Years of Proven Excellence",
      badge: "Trusted Since 2016",
      description:
        "A decade of delivering exceptional mobility solutions. Our track record speaks for itself with thousands of satisfied customers across India.",
      bulletPoints: [
        "10,000+ successful journeys completed",
        "98% customer satisfaction rate",
        "Award-winning service standards",
      ],
      // Professional team / office thematic image
      bgImage:
        "https://www.trivixam.com/api/upload/file/bmw-09062026-1713.png",
    },
    {
      id: "feat-04",
      icon: <Gauge className="w-5 h-5 text-white" />,
      title: "Modular Extended Rental Tiers",
      badge: "Flexible Frameworks",
      description:
        "Need changes midway? Scale or rotate your active vehicle fleet directly via your client account loop or upcoming mobile application.",
      bulletPoints: [
        "Seamless single-day package extensions",
        "Steep bulk cuts on weekly contracts",
        "Predicted B2B monthly subscription billing",
      ],
      // Open road / Highway driving thematic image
      bgImage:
        "https://www.trivixam.com/api/upload/file/toyota-etios-09062026-1713.png",
    },
  ];

  return (
    <section className="bg-white dark:bg-[#0A1120] text-gray-900 dark:text-gray-100 transition-colors duration-300 py-12 md:py-16 relative overflow-hidden">
      {/* Visual Accent Background Radial Shaders */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-80 h-80 bg-[#0C4587]/5 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#5EBC23]/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 md:space-y-12">
        {/* CORE SECTION INTRO HEADER */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-full mb-2 shadow-sm transition-colors duration-300">
            <Sparkles className="w-3 h-3 text-[#5EBC23]" />
            <span className="text-[9px] font-black text-gray-700 dark:text-gray-300 uppercase tracking-widest">
              Core Advantages
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-gray-900 dark:text-white leading-tight">
            Built For Trust, <br className="sm:hidden" /> Optimized For{" "}
            <span className="bg-gradient-to-r from-[#0C4587] to-[#5EBC23] bg-clip-text text-transparent">
              Speed
            </span>
          </h2>
          <p className="text-xs sm:text-sm font-medium text-gray-600 dark:text-gray-400">
            We engineered Trivixam to bypass traditional rental hurdles.
            Experience seamless logistics backed by technical rigidity.
          </p>
        </div>

        {/* 2X2 RESPONSIVE BENEFITS GRID WITH IMAGE BACKGROUNDS */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-6 items-stretch">
          {features.map((item) => (
            <div
              key={item.id}
              className="relative rounded-2xl p-5 sm:p-6 shadow-md transition-all duration-500 flex flex-col sm:flex-row gap-5 items-start justify-between overflow-hidden hover:shadow-2xl hover:-translate-y-1 group border border-gray-200 dark:border-gray-800/80"
            >
              {/* THEMATIC IMAGE BACKGROUND */}
              <div className="absolute inset-0 z-0 overflow-hidden">
                <img
                  src={item.bgImage}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Gradient Overlay for Text Readability */}
                {/* Light Mode Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/90 to-white/70 dark:hidden" />
                {/* Dark Mode Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#0A1120]/95 via-[#0A1120]/90 to-[#0A1120]/70 hidden dark:block" />
              </div>

              {/* CONTENTS (Must be z-10 to stay above background) */}

              {/* Left Column: Icon Shell Wrapper */}
              <div className="relative z-10 p-3 bg-gradient-to-br from-[#0C4587] to-[#0A3C73] border-2 border-white/20 rounded-xl flex-shrink-0 mx-auto sm:mx-0 shadow-lg group-hover:from-[#5EBC23] group-hover:to-[#4CAF50] transition-colors duration-500">
                {item.icon}
              </div>

              {/* Right Column: Text & Structured Specs Data */}
              <div className="relative z-10 flex-1 space-y-3.5 text-center sm:text-left">
                <div className="space-y-2">
                  <span className="inline-block bg-white/80 dark:bg-black/40 backdrop-blur-md border border-gray-200 dark:border-white/10 text-[8px] sm:text-[9px] font-black tracking-widest uppercase px-2.5 py-1 rounded-md text-[#0C4587] dark:text-[#5EBC23] shadow-sm">
                    {item.badge}
                  </span>
                  <h3 className="text-lg sm:text-xl font-black tracking-tight text-gray-900 dark:text-white leading-tight">
                    {item.title}
                  </h3>
                </div>

                <p className="text-[11px] sm:text-xs text-gray-700 dark:text-gray-300 leading-relaxed font-semibold">
                  {item.description}
                </p>

                {/* Sub-checkpoints framework for high value conversion clarity */}
                <ul className="grid grid-cols-1 gap-2 pt-1.5 text-left">
                  {item.bulletPoints.map((point, pIdx) => (
                    <li
                      key={pIdx}
                      className="flex items-center text-[10px] sm:text-[11px] font-bold text-gray-800 dark:text-gray-200"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 mr-2 text-[#5EBC23] flex-shrink-0" />
                      <span className="truncate">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* BOTTOM CALL TO ACTION INTERACTIVE BAR (Sleek & Themed) */}
        <div className="bg-gradient-to-r from-[#0C4587] to-[#0A3C73] rounded-2xl p-5 md:p-8 shadow-xl shadow-blue-900/20 dark:shadow-none flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden group border border-transparent dark:border-blue-900/50">
          {/* Decorative Internal Element */}
          <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-gradient-to-tl from-[#5EBC23]/30 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

          <div className="space-y-1.5 text-center md:text-left max-w-xl relative z-10">
            <h3 className="text-xl sm:text-2xl font-black tracking-tight text-white">
              Ready to Initialize Your Journey?
            </h3>
            <p className="text-[11px] sm:text-xs text-blue-100/80 font-semibold leading-relaxed">
              Isolate your target model from our active digital tracking fleet.
              Safe, transparent and zero overhead contracts guaranteed.
            </p>
          </div>

          <Link
            href="/cars"
            className="w-full md:w-auto inline-flex items-center justify-center bg-[#5EBC23] hover:bg-white hover:text-[#0C4587] text-white font-black text-[10px] sm:text-xs uppercase tracking-widest px-6 py-3.5 rounded-xl shadow-lg transition-all duration-300 flex-shrink-0 relative z-10"
          >
            <span>Browse Active Fleet</span>
            <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
}
