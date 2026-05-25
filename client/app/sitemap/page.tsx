"use client";

import Link from "next/link";
import {
  Network,
  Home,
  Car,
  Info,
  PhoneCall,
  ShieldCheck,
  Scale,
  ChevronRight,
  Layers,
} from "lucide-react";

export default function SitemapPage() {
  // Structured Category Arrays for SEO bots and users
  const sitemapData = [
    {
      title: "Main Core Modules",
      icon: <Home className="w-5 h-5 text-[#0C4587] dark:text-blue-400" />,
      links: [
        { name: "Home Dashboard", href: "/" },
        { name: "Browse Our Cars Fleet", href: "/cars" },
        { name: "Live Booking Portal", href: "/booking" },
      ],
    },
    {
      title: "Our Rental Services",
      icon: <Car className="w-5 h-5 text-[#5EBC23]" />,
      links: [
        { name: "Daily Flexible Rentals", href: "/services/daily" },
        { name: "Weekly Economy Packages", href: "/services/weekly" },
        { name: "Monthly Corporate Solutions", href: "/services/monthly" },
        { name: "Airport Pickup & Transfers", href: "/services/airport" },
      ],
    },
    {
      title: "Company Profile",
      icon: <Info className="w-5 h-5 text-[#D48C3B]" />,
      links: [
        { name: "About Carry-On", href: "/about" },
        { name: "Contact Support Desk", href: "/contact" },
      ],
    },
    {
      title: "Legal & Transparency",
      icon: <Layers className="w-5 h-5 text-purple-500" />,
      links: [
        { name: "Privacy & Data Policy", href: "/privacy" },
        { name: "Terms & Operating Conditions", href: "/terms" },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors duration-300 py-6 lg:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section with Brand Gradient */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 bg-blue-50 dark:bg-blue-900/30 border border-blue-100 dark:border-blue-800/50 px-4 py-1.5 rounded-full shadow-sm">
            <Network className="w-4 h-4 text-[#5EBC23]" />
            <span className="text-xs font-bold text-[#0C4587] dark:text-blue-300 tracking-wide uppercase">
              Navigation Index
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-gray-900 dark:text-white">
            Website Sitemap
          </h1>
          <p className="text-sm sm:text-base max-w-3xl mx-auto font-medium">
            A comprehensive, clean index matrix designed for quick crawling
            accessibility across Carry-On Car Rental systems.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-[#0C4587] to-[#5EBC23] mx-auto rounded-full" />
        </div>

        {/* 2x2 Responsive Link Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
          {sitemapData.map((category, idx) => (
            <div
              key={idx}
              className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-2 md:p-6 shadow-sm hover:shadow-md transition-all duration-200"
            >
              {/* Category Header */}
              <div className="flex items-center space-x-3 pb-4 mb-6 border-b border-gray-50 dark:border-gray-800/50">
                <div className="p-2 bg-gray-50 dark:bg-gray-950 border border-gray-100 dark:border-gray-800 rounded-2xl">
                  {category.icon}
                </div>
                <h2 className="text-lg font-extrabold text-gray-900 dark:text-white tracking-tight">
                  {category.title}
                </h2>
              </div>

              {/* Sub-links Stack */}
              <ul className="space-y-2">
                {category.links.map((link, linkIdx) => (
                  <li key={linkIdx}>
                    <Link
                      href={link.href}
                      className="group flex items-center justify-between text-sm sm:text-base hover:text-[#0C4587] dark:hover:text-blue-400 font-semibold p-2 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-950 transition-all duration-150"
                    >
                      <span className="flex items-center">
                        <ChevronRight className="w-4 h-4 mr-2 group-hover:text-[#5EBC23] transition-colors" />
                        {link.name}
                      </span>
                      <span className="text-xs text-gray-600 dark:text-gray-400 font-mono tracking-tighter group-hover:opacity-100 transition-opacity">
                        {link.href}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Crawler Sync Note */}
        <div className="mt-12 text-center text-xs font-semibold text-gray-400 flex items-center justify-center space-x-1.5 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-900 max-w-md mx-auto py-3 rounded-2xl shadow-sm">
          <ShieldCheck className="w-4 h-4 text-[#5EBC23]" />
          <span>Automated XML Node Alignment Active</span>
        </div>
      </div>
    </div>
  );
}
