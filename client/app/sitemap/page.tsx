"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  Network,
  Home,
  Car,
  Info,
  ShieldCheck,
  ChevronRight,
  Layers,
} from "lucide-react";

export default function SitemapPage() {
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

  // Structured Category Arrays for SEO bots and users
  const sitemapData = [
    {
      title: "Main Core Modules",
      icon: <Home className="w-5 h-5" />,
      colorClass: "text-[#0C4587] dark:text-blue-400 group-hover:text-white",
      bgHoverClass: "group-hover:bg-[#0C4587]",
      links: [
        { name: "Home Dashboard", href: "/" },
        { name: "Browse Our Cars Fleet", href: "/cars" },
        { name: "Live Booking Portal", href: "/booking" },
      ],
    },
    {
      title: "Our Rental Services",
      icon: <Car className="w-5 h-5" />,
      colorClass: "text-[#5EBC23] group-hover:text-white",
      bgHoverClass: "group-hover:bg-[#5EBC23]",
      links: [
        { name: "Daily Flexible Rentals", href: "/services/daily" },
        { name: "Weekly Economy Packages", href: "/services/weekly" },
        { name: "Monthly Corporate Solutions", href: "/services/monthly" },
        { name: "Airport Pickup & Transfers", href: "/services/airport" },
      ],
    },
    {
      title: "Company Profile",
      icon: <Info className="w-5 h-5" />,
      colorClass: "text-[#D48C3B] group-hover:text-white",
      bgHoverClass: "group-hover:bg-[#D48C3B]",
      links: [
        { name: "About Carry-On", href: "/about" },
        { name: "Contact Support Desk", href: "/contact" },
      ],
    },
    {
      title: "Legal & Transparency",
      icon: <Layers className="w-5 h-5" />,
      colorClass: "text-purple-500 group-hover:text-white",
      bgHoverClass: "group-hover:bg-purple-500",
      links: [
        { name: "Privacy & Data Policy", href: "/privacy" },
        { name: "Terms & Operating Conditions", href: "/terms" },
      ],
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
            "url('https://www.trivixam.com/api/upload/file/banner-31052026-0808.png')",
        }}
      />

      {/* DYNAMIC Frosted Glassmorphism Overlay based on Scroll */}
      <div
        className={`absolute inset-0 transition-all duration-700 ease-in-out -z-20 ${
          isScrolled
            ? "bg-white/55 dark:bg-[#050B14]/80 backdrop-blur-[3px]"
            : "bg-black/30 dark:bg-[#050B14]/40 backdrop-blur-[2px]"
        }`}
      />

      {/* Brand Radial Ambient Glows */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[#0C4587]/10 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#5EBC23]/5 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-10">
        {/* ========================================= */}
        {/* HEADER BLOCK                              */}
        {/* ========================================= */}
        <div className="text-center space-y-4 mb-12 drop-shadow-sm">
          <div className="inline-flex items-center space-x-1.5 bg-white/80 dark:bg-gray-900/60 backdrop-blur-md border border-gray-200/50 dark:border-gray-800/80 px-3.5 py-1.5 rounded-full shadow-sm">
            <Network className="w-3.5 h-3.5 text-[#5EBC23]" />
            <span className="text-[10px] font-black text-[#0C4587] dark:text-gray-200 tracking-widest uppercase">
              Navigation Index
            </span>
          </div>
          <h1
            className={`text-4xl sm:text-5xl font-black tracking-tight leading-tight transition-colors duration-500 ${isScrolled ? "text-gray-900 dark:text-white" : "text-white"}`}
          >
            Website{" "}
            <span className="bg-gradient-to-r from-[#0C4587] to-[#5EBC23] bg-clip-text text-transparent drop-shadow-md">
              Sitemap
            </span>
          </h1>
          <p
            className={`text-xs sm:text-sm font-semibold max-w-2xl mx-auto transition-colors duration-500 ${isScrolled ? "text-gray-700 dark:text-gray-300" : "text-gray-200"}`}
          >
            A comprehensive, clean index matrix designed for quick crawling
            accessibility across Carry-On Car Rental systems.
          </p>
          <div className="w-12 h-1 bg-gradient-to-r from-[#0C4587] to-[#5EBC23] mx-auto rounded-full mt-4" />
        </div>

        {/* ========================================= */}
        {/* SITEMAP GRID (Glassmorphic Cards)         */}
        {/* ========================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {sitemapData.map((category, idx) => (
            <div
              key={idx}
              className="bg-white/95 dark:bg-[#0A1120]/90 backdrop-blur-md border border-gray-200/80 dark:border-gray-800/80 rounded-[2rem] p-6 lg:p-8 shadow-md hover:shadow-xl transition-all duration-300 group hover:-translate-y-1"
            >
              {/* Category Header */}
              <div className="flex items-center space-x-4 pb-4 mb-5 border-b border-gray-100 dark:border-gray-800/60">
                <div
                  className={`p-3 bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-2xl transition-colors duration-300 ${category.colorClass} ${category.bgHoverClass}`}
                >
                  {category.icon}
                </div>
                <h2 className="text-lg font-black text-gray-900 dark:text-white tracking-tight">
                  {category.title}
                </h2>
              </div>

              {/* Sub-links Stack */}
              <ul className="space-y-2">
                {category.links.map((link, linkIdx) => (
                  <li key={linkIdx}>
                    <Link
                      href={link.href}
                      className="group/link flex items-center justify-between text-xs sm:text-sm hover:text-[#0C4587] dark:hover:text-blue-400 font-bold p-3 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-900/50 transition-all duration-200"
                    >
                      <span className="flex items-center">
                        <ChevronRight className="w-4 h-4 mr-2 text-gray-300 dark:text-gray-700 group-hover/link:text-[#5EBC23] transition-colors" />
                        {link.name}
                      </span>
                      <span className="text-[10px] text-gray-400 dark:text-gray-500 font-mono tracking-tighter opacity-0 group-hover/link:opacity-100 transition-opacity hidden sm:block">
                        {link.href}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* ========================================= */}
        {/* CRAWLER SYNC NOTE                         */}
        {/* ========================================= */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center justify-center space-x-2 bg-white/80 dark:bg-[#0A1120]/60 backdrop-blur-md border border-gray-200 dark:border-gray-800/80 py-2.5 px-5 rounded-2xl shadow-sm text-[10px] font-black uppercase tracking-widest text-gray-500">
            <ShieldCheck className="w-3.5 h-3.5 text-[#5EBC23]" />
            <span>Automated XML Node Alignment Active</span>
          </div>
        </div>
      </div>
    </div>
  );
}
