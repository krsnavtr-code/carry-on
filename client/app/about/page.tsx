"use client";

import React from "react";
import {
  ShieldCheck,
  Users,
  Zap,
  Award,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

// TypeScript interface for Core Values
interface ValueCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function AboutUs(): React.ReactElement {
  // Custom Statistics Data
  const stats = [
    {
      value: "10K+",
      label: "Happy Journeys",
      color: "text-[#0C4587] dark:text-blue-400",
    },
    { value: "250+", label: "Modern Fleet Cars", color: "text-[#5EBC23]" },
    { value: "50+", label: "Airport Drop Hubs", color: "text-[#D48C3B]" },
    { value: "24/7", label: "Active Road Support", color: "text-purple-500" },
  ];

  // Core Corporate Values
  const coreValues: ValueCardProps[] = [
    {
      icon: (
        <ShieldCheck className="w-6 h-6 text-[#0C4587] dark:text-blue-400" />
      ),
      title: "Uncompromising Safety",
      description:
        "Every single vehicle undergoes rigid mechanical vetting and multi-point maintenance checkpoints before handing over keys.",
    },
    {
      icon: <Zap className="w-6 h-6 text-[#5EBC23]" />,
      title: "Speedy Onboarding",
      description:
        "We hate paperwork. Our Next.js framework and upcoming mobile software ensure quick license uploads and 2-minute booking processes.",
    },
    {
      icon: <Award className="w-6 h-6 text-[#D48C3B]" />,
      title: "Zero Hidden Overheads",
      description:
        "Complete cost transparency. What you compute during booking stays static, with no baseline shock factors or late penalties hidden.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors duration-300 py-6 lg:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* 1. HEADER HERO BLOCK */}
        <div className="text-center space-y-4 max-w-5xl mx-auto">
          <div className="inline-flex items-center space-x-2 bg-blue-50 dark:bg-blue-900/30 border border-blue-100 dark:border-blue-800/50 px-4 py-1.5 rounded-full shadow-sm">
            <Sparkles className="w-4 h-4 text-[#5EBC23]" />
            <span className="text-xs font-bold text-[#0C4587] dark:text-blue-300 tracking-wide uppercase">
              Our Identity & Vision
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-gray-900 dark:text-white">
            About{" "}
            <span className="bg-gradient-to-r from-[#0C4587] to-[#5EBC23] bg-clip-text text-transparent">
              Carry-On
            </span>
          </h1>
          <p className="text-base sm:text-lg leading-relaxed font-medium">
            Redefining modular mobility across the digital ecosystem. We deliver
            scalable, premium, and hyper-reliable car rental pipelines for
            corporate tours and personal vacations.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-[#0C4587] to-[#5EBC23] mx-auto rounded-full" />
        </div>

        {/* 2. VALUE PROPOSITION GRID (Text + Clean UI Blocks) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Block: Visual Brand Blueprint */}
          <div className="space-y-6 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 p-3 md:p-6 rounded-3xl shadow-sm relative overflow-hidden">
            <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-green-500/5 rounded-full blur-2xl" />
            <h2 className="text-2xl sm:text-3xl font-black text-gray-900 dark:text-white tracking-tight">
              Driving Trust, Fueling Freedom.
            </h2>
            <p className="text-sm sm:text-base leading-relaxed font-medium">
              Founded under the banner of scalable innovation, **Carry-On Car
              Rental Pvt Ltd** bridges the gap between premium consumer comfort
              and smart transportation systems. Whether you need a swift vehicle
              layout for city-transits or a full SUV config for outstation
              family trips, our ecosystem delivers optimized results.
            </p>
            <ul className="space-y-3.5 pt-2">
              {[
                "GPS track tracking enabled on all fleet tiers.",
                "contactless digital verify pipelines setup.",
                "Flexible extended package models (Daily, Weekly, Monthly).",
              ].map((point, index) => (
                <li
                  key={index}
                  className="flex items-center text-sm font-semibold text-gray-600 dark:text-gray-400"
                >
                  <CheckCircle2 className="w-4 h-4 mr-2.5 text-[#5EBC23] flex-shrink-0" />
                  {point}
                </li>
              ))}
            </ul>
          </div>

          {/* Right Block: Stats Counter Grid */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-3 md:p-6 shadow-sm text-center space-y-1 hover:shadow-md transition-shadow duration-200"
              >
                <div
                  className={`text-3xl sm:text-4xl font-black ${stat.color} tracking-tight`}
                >
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm font-bold text-gray-400 dark:text-gray-500 tracking-wide uppercase">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3. CORE STRATEGIC VALUES SECTION */}
        <div className="space-y-12">
          <div className="text-center space-y-2">
            <h2 className="text-xs uppercase font-extrabold tracking-widest text-[#5EBC23]">
              Operating Pillars
            </h2>
            <p className="text-2xl sm:text-3xl font-black text-gray-900 dark:text-white">
              What Keeps Carry-On Ahead
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {coreValues.map((value, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-3 md:p-6 shadow-sm flex flex-col space-y-4 hover:-translate-y-1 transition-transform duration-200"
              >
                <div className="w-12 h-12 rounded-xl bg-gray-50 dark:bg-gray-950 border border-gray-100 dark:border-gray-800 flex items-center justify-center">
                  {value.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                  {value.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed font-medium">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
