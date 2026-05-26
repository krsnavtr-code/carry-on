"use client";

import React from "react";
import Link from "next/link";
import {
  ShieldCheck,
  Coins,
  Wrench,
  Clock,
  MapPin,
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
  borderColor: string;
  iconBg: string;
}

export default function CoreBenefits(): React.ReactElement {
  // 2. DATA ARCHITECTURE: 4 VALUE PILLARS STRUCTURED TO MAXIMIZE USER TRUST
  const features: CoreFeatureCard[] = [
    {
      id: "feat-01",
      icon: (
        <ShieldCheck className="w-6 h-6 text-[#0C4587] dark:text-blue-400" />
      ),
      title: "150-Point Rigid Mechanical Vetting",
      badge: "Absolute Safety",
      description:
        "We bypass baseline diagnostics. Every vehicle undergoes a rigid engineering and computerized OBD-II sensor scan prior to key handoffs.",
      bulletPoints: [
        "Full brakes & tire thread verification",
        "Automated oil & fluid optimization runs",
        "Sanitized medical-grade upholstery care",
      ],
      borderColor: "hover:border-[#0C4587]/30",
      iconBg: "bg-blue-50 dark:bg-blue-950/50",
    },
    {
      id: "feat-02",
      icon: <Coins className="w-6 h-6 text-[#5EBC23]" />,
      title: "Transparent Pricing Node Matrix",
      badge: "Zero Hidden Overheads",
      description:
        "What you compute during the Next.js search process stays static. We have enforced an absolute ban on hidden overheads or shock price surges.",
      bulletPoints: [
        "Taxes & statutory coverage pre-calculated",
        "Same-to-same clear fuel fill protocols",
        "No surprise delay penalties embedded",
      ],
      borderColor: "hover:border-[#5EBC23]/30",
      iconBg: "bg-green-50 dark:bg-green-950/30",
    },
    {
      id: "feat-03",
      icon: <Clock className="w-6 h-6 text-[#D48C3B]" />,
      title: "24/7 Road & Flight Synchronizations",
      badge: "Always Active",
      description:
        "Our backend API maps live flight data channels. If your arrival terminal triggers an advance or delay flag, our dispatch loops adapt automatic.",
      bulletPoints: [
        "60-Minutes complementary lounge wait time",
        "Real-time terminal chauffeur track link",
        "Instant breakdown backup vehicle delivery",
      ],
      borderColor: "hover:border-[#D48C3B]/30",
      iconBg: "bg-amber-50 dark:bg-amber-950/30",
    },
    {
      id: "feat-04",
      icon: <Gauge className="w-6 h-6 text-purple-500" />,
      title: "Modular Extended Rental Tiers",
      badge: "Flexible Frameworks",
      description:
        "Need changes midway? Scale or rotate your active vehicle fleet directly via your client account loop or upcoming React Native application.",
      bulletPoints: [
        "Seamless single-day package extensions",
        "Steep bulk cuts on weekly contracts",
        "Predicted B2B monthly subscription billing",
      ],
      borderColor: "hover:border-purple-500/30",
      iconBg: "bg-purple-50 dark:bg-purple-950/30",
    },
  ];

  return (
    <section className="bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors duration-300 py-10 relative overflow-hidden">
      {/* Visual Accent Background Radial Shaders */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-[#0C4587]/5 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#5EBC23]/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        {/* CORE SECTION INTRO HEADER */}
        <div className="text-center space-y-4 max-w-5xl mx-auto">
          <h2 className="text-xl md:text-4xl font-black tracking-tight text-gray-900 dark:text-white leading-none">
            Built For Trust, <br className="sm:hidden" /> Optimized For{" "}
            <span className="bg-gradient-to-r from-[#0C4587] to-[#5EBC23] bg-clip-text text-transparent">
              Speed
            </span>
          </h2>
          <p className="text-sm sm:text-base font-semibold">
            We engineered Carry-On to bypass traditional rental hurdles.
            Experience seamless logistics backed by technical rigidity.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-[#0C4587] to-[#5EBC23] mx-auto rounded-full" />
        </div>

        {/* 2X2 RESPONSIVE BENEFITS GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 md:gap-8 items-stretch">
          {features.map((item) => (
            <div
              key={item.id}
              className={`bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800 rounded-xl p-2 md:p-4 shadow-sm transition-all duration-300 flex flex-col sm:flex-row gap-4 items-start justify-between ${item.borderColor} hover:shadow-lg`}
            >
              {/* Left Column: Icon Shell Wrapper */}
              <div
                className={`p-2 ${item.iconBg} border border-gray-200/10 dark:border-gray-800 rounded-2xl flex-shrink-0 mx-auto sm:mx-0`}
              >
                {item.icon}
              </div>

              {/* Right Column: Text & Structured Specs Data */}
              <div className="flex-1 space-y-3 text-center sm:text-left">
                <div className="space-y-1.5">
                  <span className="inline-block bg-gray-50 dark:bg-gray-950 border border-gray-200 dark:border-gray-800/80 text-[9px] font-black tracking-widest uppercase px-2.5 py-1 rounded-md">
                    {item.badge}
                  </span>
                  <h3 className="text-xl font-black tracking-tight text-gray-900 dark:text-white">
                    {item.title}
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 leading-relaxed font-semibold">
                  {item.description}
                </p>

                {/* Sub-checkpoints framework for high value conversion clarity */}
                <ul className="grid grid-cols-1 gap-2 pt-2 text-left">
                  {item.bulletPoints.map((point, pIdx) => (
                    <li
                      key={pIdx}
                      className="flex items-center text-xs font-bold"
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

        {/* BOTTOM CALL TO ACTION INTERACTIVE BAR */}
        <div className="bg-gradient-to-r from-[#0C4587] to-[#0A3C73] dark:from-gray-900 dark:to-gray-900 text-white rounded-3xl p-2 md:p-10 shadow-xl shadow-blue-900/10 dark:shadow-none flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden group">
          {/* Decorative Internal Element */}
          <div className="absolute right-0 bottom-0 w-80 h-80 bg-gradient-to-tl from-[#5EBC23]/20 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

          <div className="space-y-2 text-center md:text-left max-w-xl">
            <h3 className="text-xl sm:text-2xl font-black tracking-tight">
              Ready to Initialize Your Journey?
            </h3>
            <p className="text-xs sm:text-sm text-blue-200 dark:text-gray-400 font-semibold leading-relaxed">
              Isolate your target model from our 26+ active digital tracking
              fleet options. Safe, transparent and zero overhead contracts
              guaranteed.
            </p>
          </div>

          <Link
            href="/cars"
            className="w-full md:w-auto inline-flex items-center justify-center bg-[#5EBC23] hover:bg-white hover:text-[#0C4587] text-white font-black text-xs uppercase tracking-widest px-8 py-4 rounded-xl shadow-md transition-all duration-300 flex-shrink-0"
          >
            <span>Browse Active Fleet</span>
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
}
