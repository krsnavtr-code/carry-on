"use client";

import Link from "next/link";
import {
  Car,
  CircleDollarSign,
  Clock,
  Search,
  Calendar,
  MapPin,
  ArrowRight,
  Star,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

export default function Home() {
  // High Conversion Feature Cards Data
  const features = [
    {
      icon: <Car className="w-6 h-6 text-[#0C4587] dark:text-blue-400" />,
      title: "Wide Selection",
      description:
        "Choose from pristine economy hatchbacks, spacious family SUVs, to ultra-premium luxury vehicles.",
      badge: "Flexible Fleet",
    },
    {
      icon: <CircleDollarSign className="w-6 h-6 text-[#5EBC23]" />,
      title: "Affordable Rates",
      description:
        "Transparent competitive pricing structures with zero hidden fees. What you see is what you pay.",
      badge: "Best Price Match",
    },
    {
      icon: <Clock className="w-6 h-6 text-[#D48C3B]" />,
      title: "24/7 Premium Support",
      description:
        "Round-the-clock road assistance and client support to keep your journey completely smooth.",
      badge: "Always Alive",
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      {/* 1. HERO SECTION WITH RADIAL BACKGROUND */}
      <section className="relative overflow-hidden pt-20 pb-32 lg:pt-28 lg:pb-40 bg-gradient-to-b from-blue-50/50 via-transparent to-transparent dark:from-blue-950/20">
        {/* Decorative Background Glows */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[400px] bg-gradient-to-r from-blue-500/10 via-green-500/5 to-transparent blur-3xl rounded-full -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          {/* Subtle Tagline Badge */}
          <div className="inline-flex items-center space-x-2 bg-blue-50 dark:bg-blue-900/30 border border-blue-100 dark:border-blue-800/50 px-4 py-1.5 rounded-full shadow-sm">
            <Sparkles className="w-4 h-4 text-[#5EBC23]" />
            <span className="text-xs font-bold text-[#0C4587] dark:text-blue-300 tracking-wide uppercase">
              Premium Car Rental Service in India
            </span>
          </div>

          {/* Core SEO Headings matched with brand colors */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-none text-gray-900 dark:text-white max-w-5xl mx-auto">
            Drive Your Journey With <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-[#0C4587] via-blue-600 to-[#5EBC23] bg-clip-text text-transparent">
              Carry-On Car Rental
            </span>
          </h1>

          <p className="text-base sm:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed font-medium">
            Your trusted partner for premium, scalable, and affordable car
            rentals. Explore our modern fleet and book the perfect wheels for
            your next business trip or vacation.
          </p>

          {/* Premium CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-4">
            <Link
              href="/cars"
              className="w-full sm:w-auto inline-flex items-center justify-center bg-gradient-to-r from-[#0C4587] to-[#0A3C73] hover:from-[#5EBC23] hover:to-[#4CAF50] text-white font-bold px-8 py-4 rounded-2xl shadow-lg shadow-blue-950/20 hover:shadow-green-500/20 transition-all duration-300 group"
            >
              Browse Our Fleet
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/about"
              className="w-full sm:w-auto inline-flex items-center justify-center bg-gray-50 dark:bg-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-800 dark:text-gray-200 font-bold px-8 py-4 rounded-2xl border border-gray-200 dark:border-gray-800 transition-all duration-200"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* 2. LIVE DYNAMIC BOOKING/FILTER STRIP (Like DiscoverCars / Turo) */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-20">
        <div className="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-3xl shadow-xl shadow-gray-200/50 dark:shadow-none p-6 lg:p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Field 1: Location */}
            <div className="space-y-2">
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500 flex items-center">
                <MapPin className="w-3.5 h-3.5 mr-1 text-[#0C4587] dark:text-blue-400" />{" "}
                Pickup Location
              </label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Enter city or airport..."
                  className="w-full bg-gray-50 dark:bg-gray-950 border border-gray-200 dark:border-gray-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500"
                />
              </div>
            </div>

            {/* Field 2: Pickup Date */}
            <div className="space-y-2">
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500 flex items-center">
                <Calendar className="w-3.5 h-3.5 mr-1 text-[#5EBC23]" /> Pickup
                Date & Time
              </label>
              <input
                type="datetime-local"
                className="w-full bg-gray-50 dark:bg-gray-950 border border-gray-200 dark:border-gray-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500 text-gray-500"
              />
            </div>

            {/* Field 3: Return Date */}
            <div className="space-y-2">
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500 flex items-center">
                <Calendar className="w-3.5 h-3.5 mr-1 text-[#D48C3B]" /> Dropoff
                Date & Time
              </label>
              <input
                type="datetime-local"
                className="w-full bg-gray-50 dark:bg-gray-950 border border-gray-200 dark:border-gray-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500 text-gray-500"
              />
            </div>
          </div>

          {/* Search Action Trigger Button */}
          <div className="mt-6 pt-4 border-t border-gray-50 dark:border-gray-800/50 flex justify-end">
            <button className="w-full md:w-auto inline-flex items-center justify-center bg-gradient-to-r from-[#5EBC23] to-[#4CAF50] text-white font-bold px-8 py-3.5 rounded-xl shadow-md shadow-green-500/10 hover:shadow-lg transition-all duration-200">
              <Search className="w-4 h-4 mr-2" /> Find Available Cars
            </button>
          </div>
        </div>
      </section>

      {/* 3. CORE BENEFITS & FEATURES SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
        <div className="text-center space-y-4 mb-16 sm:mb-20">
          <h2 className="text-xs uppercase font-extrabold tracking-widest text-[#5EBC23]">
            Why Choose Us
          </h2>
          <p className="text-3xl sm:text-4xl font-black tracking-tight text-gray-900 dark:text-white">
            The Carry-On Rental Advantage
          </p>
          <div className="w-12 h-1 bg-gradient-to-r from-[#0C4587] to-[#5EBC23] mx-auto rounded-full" />
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {features.map((item, index) => (
            <div
              key={index}
              className="group bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-900 rounded-2xl p-6 lg:p-8 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-1"
            >
              <div className="space-y-4">
                {/* Icon Shell Wrapper */}
                <div className="w-12 h-12 rounded-xl bg-gray-50 dark:bg-gray-950 border border-gray-100 dark:border-gray-800 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <div className="space-y-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500">
                    {item.badge}
                  </span>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-[#0C4587] dark:group-hover:text-blue-400 transition-colors">
                    {item.title}
                  </h3>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed font-medium">
                  {item.description}
                </p>
              </div>

              {/* Subtle Trust Indicators */}
              <div className="pt-6 mt-6 border-t border-gray-50 dark:border-gray-800/50 flex items-center text-xs font-semibold text-gray-400 group-hover:text-[#5EBC23] transition-colors">
                <ShieldCheck className="w-4 h-4 mr-1.5" /> Verified Secure
                Service
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
