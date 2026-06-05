"use client";

import React, { useState, useEffect } from "react";
import { ShieldCheck, Zap, Award, CheckCircle2, Sparkles } from "lucide-react";

// TypeScript interface for Core Values
interface ValueCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function AboutUs(): React.ReactElement {
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

  // Custom Statistics Data
  const stats = [
    {
      value: "10K+",
      label: "Happy Journeys",
      color: "text-[#0C4587] dark:text-blue-400",
    },
    { value: "250+", label: "Premium Fleet Cars", color: "text-[#5EBC23]" },
    { value: "50+", label: "Airport Drop Hubs", color: "text-[#D48C3B]" },
    { value: "24/7", label: "Active Road Support", color: "text-purple-500" },
  ];

  // Core Corporate Values (Icons without hardcoded colors for hover effects)
  const coreValues: ValueCardProps[] = [
    {
      icon: <ShieldCheck className="w-5 h-5" />,
      title: "Uncompromising Safety",
      description:
        "Every single vehicle undergoes rigid mechanical vetting and multi-point maintenance checkpoints before handing over keys.",
    },
    {
      icon: <Zap className="w-5 h-5" />,
      title: "Speedy Onboarding",
      description:
        "We hate paperwork. Our digital framework and smart software ensure quick license uploads and 2-minute booking processes.",
    },
    {
      icon: <Award className="w-5 h-5" />,
      title: "Zero Hidden Overheads",
      description:
        "Complete cost transparency. What you compute during booking stays static, with no baseline shock factors or late penalties hidden.",
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
          // Premium mountain road/driving image
          backgroundImage:
            "url('https://images.unsplash.com/photo-1493246507139-91e8fad9978e?q=80&w=2000&auto=format&fit=crop')",
        }}
      />

      {/* DYNAMIC Frosted Glassmorphism Overlay based on Scroll */}
      <div
        className={`absolute inset-0 transition-all duration-700 ease-in-out -z-20 ${
          isScrolled
            ? "bg-white/55 dark:bg-[#050B14]/80 backdrop-blur-[3px]"
            : "bg-black/20 dark:bg-[#050B14]/40 backdrop-blur-[2px]"
        }`}
      />

      {/* Brand Color Ambient Radial Mesh */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#0C4587]/15 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#5EBC23]/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 relative z-10">
        {/* ========================================= */}
        {/* 1. HEADER HERO BLOCK                      */}
        {/* ========================================= */}
        <div className="text-center space-y-4 max-w-4xl mx-auto drop-shadow-sm">
          <div className="inline-flex items-center space-x-2 bg-white/80 dark:bg-gray-900/60 backdrop-blur-md border border-gray-200/50 dark:border-gray-800/80 px-3.5 py-1.5 rounded-full shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#5EBC23]" />
            <span className="text-[10px] font-black text-[#0C4587] dark:text-gray-200 tracking-widest uppercase">
              Our Identity & Vision
            </span>
          </div>
          <h1
            className={`text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight transition-colors duration-500 ${isScrolled ? "text-gray-900 dark:text-white" : "text-white"}`}
          >
            About{" "}
            <span className="bg-gradient-to-r from-[#0C4587] to-[#5EBC23] bg-clip-text text-transparent drop-shadow-md">
              Carry-On
            </span>
          </h1>
          <p
            className={`text-sm sm:text-base leading-relaxed font-semibold transition-colors duration-500 ${isScrolled ? "text-gray-700 dark:text-gray-300" : "text-gray-200"}`}
          >
            Redefining modular mobility across the digital ecosystem. We deliver
            scalable, premium, and hyper-reliable car rental pipelines for
            corporate tours and personal vacations.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-[#0C4587] to-[#5EBC23] mx-auto rounded-full mt-4" />
        </div>

        {/* ========================================= */}
        {/* 2. VALUE PROPOSITION GRID (Glassmorphism Blocks) */}
        {/* ========================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-stretch">
          {/* Left Block: Visual Brand Blueprint */}
          <div className="space-y-5 bg-white/90 dark:bg-[#0A1120]/80 backdrop-blur-md border border-white/50 dark:border-gray-800/60 p-6 md:p-8 rounded-[2rem] shadow-xl relative overflow-hidden group hover:border-[#5EBC23]/30 transition-colors duration-500">
            <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-[#5EBC23]/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700 pointer-events-none" />

            <h2 className="text-2xl sm:text-3xl font-black text-gray-900 dark:text-white tracking-tight leading-tight">
              Driving Trust, <br /> Fueling Freedom.
            </h2>
            <p className="text-xs sm:text-sm leading-relaxed font-semibold text-gray-600 dark:text-gray-400">
              Founded under the banner of scalable innovation,{" "}
              <strong className="text-gray-900 dark:text-gray-200">
                Carry-On Car Rental Pvt. Ltd.
              </strong>{" "}
              bridges the gap between premium consumer comfort and smart
              transportation systems. Whether you need a swift vehicle layout
              for city-transits or a full SUV config for outstation family
              trips, our ecosystem delivers optimized results.
            </p>
            <ul className="space-y-3 pt-3">
              {[
                "GPS real-time tracking enabled on all fleet tiers.",
                "Contactless digital verification pipelines setup.",
                "Flexible extended package models (Daily, Weekly, Monthly).",
              ].map((point, index) => (
                <li
                  key={index}
                  className="flex items-center text-xs font-bold text-gray-700 dark:text-gray-300"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 mr-2 text-[#5EBC23] flex-shrink-0" />
                  {point}
                </li>
              ))}
            </ul>
          </div>

          {/* Right Block: Stats Counter Grid */}
          <div className="grid grid-cols-2 gap-4 sm:gap-6">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="bg-white/90 dark:bg-[#0A1120]/80 backdrop-blur-md border border-white/50 dark:border-gray-800/60 rounded-3xl p-5 md:p-8 shadow-lg flex flex-col justify-center items-center text-center space-y-2 hover:-translate-y-1 hover:shadow-2xl transition-all duration-300 group"
              >
                <div
                  className={`text-3xl sm:text-4xl lg:text-5xl font-black ${stat.color} tracking-tight group-hover:scale-110 transition-transform duration-300`}
                >
                  {stat.value}
                </div>
                <div className="text-[10px] sm:text-xs font-black text-gray-500 dark:text-gray-400 tracking-widest uppercase mt-2">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ========================================= */}
        {/* 3. CORE STRATEGIC VALUES SECTION          */}
        {/* ========================================= */}
        <div className="space-y-10 pt-6">
          <div
            className={`text-center space-y-2 drop-shadow-sm transition-colors duration-500`}
          >
            <h2 className="text-[10px] uppercase font-black tracking-widest text-[#5EBC23]">
              Operating Pillars
            </h2>
            <p
              className={`text-2xl sm:text-3xl font-black tracking-tight ${isScrolled ? "text-gray-900 dark:text-white" : "text-white"}`}
            >
              What Keeps Carry-On Ahead
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {coreValues.map((value, idx) => (
              <div
                key={idx}
                className="bg-white/95 dark:bg-[#0A1120]/90 backdrop-blur-xl border border-white/50 dark:border-gray-800/60 rounded-3xl p-6 sm:p-8 shadow-lg flex flex-col space-y-4 hover:-translate-y-1.5 hover:shadow-2xl hover:border-[#0C4587]/30 dark:hover:border-blue-500/30 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-2xl bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 flex items-center justify-center group-hover:scale-110 group-hover:bg-[#0C4587] group-hover:border-[#0C4587] transition-all duration-300 shadow-sm text-[#0C4587] dark:text-blue-400 group-hover:text-white">
                  {/* Dynamic Color Handled By Wrapper */}
                  {value.icon}
                </div>
                <h3 className="text-lg font-black text-gray-900 dark:text-white tracking-tight">
                  {value.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 leading-relaxed font-semibold">
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
