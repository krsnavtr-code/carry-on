"use client";

import React from "react";
import {
  ShieldCheck,
  Zap,
  BadgeCent,
  SlidersHorizontal,
  Headphones,
  MapPin,
  Sparkles,
} from "lucide-react";

interface FeatureItem {
  id: string;
  icon: React.ReactNode;
  title: string;
}

export default function PremiumFeatures(): React.ReactElement {
  const featuresList: FeatureItem[] = [
    {
      id: "f-1",
      icon: <ShieldCheck className="w-6 h-6" />,
      title: "Modern Safety System",
    },
    {
      id: "f-2",
      icon: <Zap className="w-6 h-6" />,
      title: "Easy & Fast Booking",
    },
    {
      id: "f-3",
      icon: <BadgeCent className="w-6 h-6" />,
      title: "Transparent Pricing",
    },
    {
      id: "f-4",
      icon: <SlidersHorizontal className="w-6 h-6" />,
      title: "Flexible Rental Plans",
    },
    {
      id: "f-5",
      icon: <Headphones className="w-6 h-6" />,
      title: "24/7 Help & Support",
    },
    {
      id: "f-6",
      icon: <MapPin className="w-6 h-6" />,
      title: "Multiple Pick Locations",
    },
  ];

  return (
    <section className="w-full py-12 bg-gray-50 dark:bg-gray-950 md:py-16 px-4 max-w-7xl mx-auto">
      
      {/* MAIN CONTAINER: Rounded, Elevated & Overflow-hidden for the slant effect */}
      <div className="relative w-full bg-white dark:bg-[#050B14] border border-gray-200 dark:border-gray-800/80 rounded-[2rem] shadow-2xl dark:shadow-[0_8px_30px_rgb(0,0,0,0.4)] overflow-hidden transition-colors duration-300">
        
        {/* ========================================= */}
        {/* THE SLANTED BACKGROUND ACCENT (Right Side) */}
        {/* ========================================= */}
        <div className="absolute -top-[10%] -bottom-[10%] -right-[20%] w-[80%] lg:w-[50%] bg-gradient-to-bl from-[#5EBC23] to-[#0C4587] -skew-x-[15deg] lg:-skew-x-[25deg] transform origin-bottom z-0 shadow-2xl" />

        {/* Subtle mesh/pattern overlay for the dark side (matches reference vibe) */}
        <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none z-0" 
             style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '20px 20px' }} 
        />

        <div className="relative z-10 flex flex-col lg:flex-row items-center p-3 md:p-6 lg:p-12 gap-10 lg:gap-4">
          
          {/* ========================================= */}
          {/* LEFT SIDE: TEXT & 3x2 FEATURE GRID        */}
          {/* ========================================= */}
          <div className="w-full lg:w-[55%] flex flex-col">
            
            {/* Tag */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-full w-max mb-4 shadow-sm backdrop-blur-sm">
              <Sparkles className="w-3.5 h-3.5 text-[#5EBC23]" />
              <span className="text-[9px] font-black text-[#0C4587] dark:text-gray-200 uppercase tracking-widest">
                Our Features
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-xl md:text-3xl font-black text-gray-900 dark:text-white leading-tight tracking-tight max-w-lg z-15">
              Thoughtfully crafted features for{" "}
              <span className="text-[#0C4587] dark:text-[#5EBC23]">
                premium travel
              </span>
            </h2>

            {/* Description */}
            <p className="mt-3.5 text-xs sm:text-sm font-semibold text-gray-600 dark:text-gray-400 leading-relaxed max-w-md">
              Our features are carefully designed to enhance comfort, safety, & convenience ensuring a refined & seamless travel experience every time.
            </p>

            {/* 3x2 Grid for Features */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 mt-8 z-15">
              {featuresList.map((feature) => (
                <div
                  key={feature.id}
                  className="bg-gray-50 dark:bg-[#0A1120] border border-gray-200 dark:border-gray-800 rounded-2xl p-4 flex flex-col items-center justify-center gap-3 hover:-translate-y-1 hover:border-[#5EBC23] dark:hover:border-[#5EBC23] hover:shadow-lg transition-all duration-300 group cursor-pointer"
                >
                  {/* Icon Wrapper */}
                  <div className="text-[#0C4587] dark:text-gray-400 group-hover:text-[#5EBC23] dark:group-hover:text-[#5EBC23] transition-colors duration-300 transform group-hover:scale-110">
                    {feature.icon}
                  </div>
                  
                  {/* Feature Title */}
                  <h4 className="text-[10px] sm:text-xs font-black text-center text-gray-800 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white leading-tight transition-colors duration-300 px-1">
                    {feature.title}
                  </h4>
                </div>
              ))}
            </div>
          </div>

          {/* ========================================= */}
          {/* RIGHT SIDE: OVERLAPPING VEHICLE IMAGE     */}
          {/* ========================================= */}
          <div className="w-full lg:w-[45%] flex justify-center lg:justify-end items-center mt-6 lg:mt-0 relative">
             {/* Glowing shadow behind the car */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/20 blur-3xl rounded-full pointer-events-none z-0 hidden lg:block" />
             
             {/* Transparent Car Image (Similar to the rugged SUV in reference) */}
             <img
               src="https://www.trivixam.com/api/upload/file/banner-31052026-0808.png" 
               alt="Premium Feature Vehicle"
               className="w-[110%] sm:w-[90%] lg:w-[130%] max-w-none relative z-10 drop-shadow-[0_25px_35px_rgba(0,0,0,0.5)] transform lg:-translate-x-6 hover:scale-105 transition-transform duration-700 ease-out"
             />
          </div>
          
        </div>
      </div>
    </section>
  );
}