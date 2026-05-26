"use tsx";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Search,
  MapPin,
  Calendar,
  Sparkles,
  ShieldCheck,
  ArrowRight,
  Zap,
  Car,
  ChevronRight,
  Link,
} from "lucide-react";

// TypeScript interface for local asset arrays
interface FleetSegment {
  id: string;
  name: string;
  type: string;
  tagline: string;
  price: string;
  bgGradient: string;
}

export default function HeroBanner(): React.ReactElement {
  const router = useRouter();

  // 1. DYNAMIC CATEGORIES DATA MATRICES
  const segments: FleetSegment[] = [
    {
      id: "seg-1",
      name: "BMW 5 Series",
      type: "Luxury",
      tagline: "✨ Absolute Elite Corporate Comfort",
      price: "₹12,500",
      bgGradient: "from-blue-600/10 via-indigo-500/5",
    },
    {
      id: "seg-2",
      name: "Toyota Fortuner 4x4",
      type: "SUV",
      tagline: "🏔️ Built to Dominate All Indian Terrains",
      price: "₹8,500",
      bgGradient: "from-emerald-600/10 via-green-500/5",
    },
    {
      id: "seg-3",
      name: "Tesla Model Y",
      type: "Electric",
      tagline: "⚡ High-Performance Smart Autonomous Driving",
      price: "₹15,000",
      bgGradient: "from-cyan-600/10 via-teal-500/5",
    },
  ];

  const [activeSegment, setActiveSegment] = useState<FleetSegment>(segments[0]);
  const [pickupLocation, setPickupLocation] = useState<string>("");
  const [pickupDate, setPickupDate] = useState<string>("");

  // 2. DISPATCH QUERY DATA TO MULTI-STEP WIZARD TERMINAL
  const handleSearchRedirect = (e: React.FormEvent): void => {
    e.preventDefault();
    if (!pickupLocation) return;

    // Construct dynamic url queries targeting booking wizard terminal
    const query = `?carId=${encodeURIComponent(activeSegment.name)}&pickup=${encodeURIComponent(pickupLocation)}&date=${encodeURIComponent(pickupDate)}`;
    router.push(`/booking${query}`);
  };

  return (
    <section className="relative flex items-center justify-center overflow-hidden bg-white dark:bg-gray-950 transition-colors duration-300 py-10">
      {/* Dynamic Background Sync Shader */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${activeSegment.bgGradient} to-transparent blur-3xl opacity-70 pointer-events-none transition-all duration-700 -z-10`}
      />

      {/* Core Structural Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* LEFT 7 COLS: Core Branding Headers & Value Prepositions */}
        <div className="lg:col-span-7 space-y-3 text-left animate-fade-in">
          {/* Tagline Indicator Node */}
          <div className="inline-flex items-center space-x-2 bg-blue-50 dark:bg-blue-950/40 border border-blue-100 dark:border-blue-900/50 px-4 py-1.5 rounded-full shadow-sm">
            <Sparkles className="w-4 h-4 text-[#5EBC23] animate-pulse" />
            <span className="text-[10px] font-black text-[#0C4587] dark:text-blue-300 tracking-widest uppercase">
              Premium Modular Fleets 2026
            </span>
          </div>

          {/* Master Heading Framework */}
          <h1 className="text-2xl md:text-4xl font-black tracking-tight leading-none text-gray-900 dark:text-white">
            Drive Freedom With{" "}
            <span className="bg-gradient-to-r from-[#0C4587] via-blue-600 to-[#5EBC23] bg-clip-text text-transparent">
              Carry-On
            </span>
          </h1>

          {/* Subtext Paragraph */}
          <p className="text-base sm:text-lg font-semibold max-w-xl leading-relaxed">
            Eliminate paperwork hurdles. Access immaculate vehicles across
            single-day transits, weekly getaways, or monthly commercial
            subscription infrastructures.
          </p>

          {/* INTERACTIVE ASSET TAB SELECTOR LAYER */}
          <div className="space-y-3 pt-2">
            <span className="text-[10px] uppercase font-black tracking-widest block">
              Quick Preview Segment Tier:
            </span>
            <div className="flex flex-wrap gap-2">
              {segments.map((seg) => (
                <button
                  key={seg.id}
                  onClick={() => setActiveSegment(seg)}
                  className={`px-2 py-1.5 rounded-xl text-xs font-bold transition-all border ${
                    activeSegment.id === seg.id
                      ? "bg-[#0C4587] text-white border-transparent shadow-md shadow-blue-900/20"
                      : "bg-gray-50 dark:bg-gray-900 hover:text-gray-900 dark:hover:text-gray-300 border-gray-200 dark:border-gray-800"
                  }`}
                >
                  {seg.type} Class
                </button>
              ))}
            </div>

            {/* Micro Display card syncing live data metadata state changes */}
            <div className="bg-gray-50/50 dark:bg-gray-900/40 border border-gray-200 dark:border-gray-800 rounded-2xl p-2 md:p-4 flex items-center justify-between max-w-xl transition-all duration-300">
              <div className="space-y-1">
                <span className="text-xs font-bold block uppercase tracking-wider">
                  {activeSegment.tagline}
                </span>
                <h4 className="text-sm md:text-lg font-black text-gray-900 dark:text-white flex items-center">
                  <Car className="w-4 h-4 mr-2 text-[#5EBC23]" />{" "}
                  {activeSegment.name}
                </h4>
              </div>
              <div className="text-right border-l border-gray-200 dark:border-gray-800 pl-4 flex-shrink-0">
                <span className="text-[10px] font-bold text-gray-400 block uppercase">
                  Rates From
                </span>
                <span className="text-xl font-black text-[#5EBC23]">
                  {activeSegment.price}
                  <span className="text-xs font-bold text-gray-400 font-normal">
                    /d
                  </span>
                </span>
              </div>
            </div>
          </div>

          {/* Core Safeguard Benchmarks Footer */}
          <div className="flex flex-wrap gap-x-6 gap-y-2 pt-4 text-xs font-bold border-t border-gray-100 dark:border-gray-900/50 max-w-xl">
            <div className="flex items-center">
              <ShieldCheck className="w-4 h-4 text-[#5EBC23] mr-1.5" />{" "}
              Comprehensive Insurance Included
            </div>
            <div className="flex items-center">
              <Zap className="w-4 h-4 text-[#D48C3B] mr-1.5" /> Zero Surge Cost
              Pricing
            </div>
          </div>
        </div>

        {/* RIGHT 5 COLS: High Conversion Booking Input Module Card */}
        <div className="lg:col-span-5">
          <div className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-900/60 rounded-xl p-2 md:p-6 shadow-xl shadow-gray-200/50 dark:shadow-none relative">
            {/* Top Indicator Accent Line */}
            <div className="absolute top-0 left-12 right-12 h-1 bg-gradient-to-r from-[#0C4587] to-[#5EBC23] rounded-full" />

            <div className="space-y-2 mb-3">
              <h3 className="text-xl font-black text-gray-900 dark:text-white tracking-tight">
                Initialize Reservation
              </h3>
              <p className="text-xs font-semibold">
                Flag coordinates to scan real-time proximity availability
                counters.
              </p>
            </div>

            <form onSubmit={handleSearchRedirect} className="space-y-2">
              {/* Pickup Input Group */}
              <div className="">
                <label className="block text-[11px] font-bold uppercase tracking-wider flex items-center">
                  <MapPin className="w-3.5 h-3.5 mr-1 text-[#0C4587] dark:text-blue-400" />{" "}
                  Pickup Hub Address
                </label>
                <div className="relative">
                  <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="text"
                    required
                    placeholder="Enter airport, city or landmark..."
                    value={pickupLocation}
                    onChange={(e) => setPickupLocation(e.target.value)}
                    className="w-full bg-gray-50 dark:bg-gray-950 border border-gray-200 dark:border-gray-800 rounded-xl pl-12 pr-4 py-3.5 text-sm focus:outline-none focus:border-blue-500 transition-all text-gray-800 dark:text-gray-200"
                  />
                </div>
              </div>

              {/* Start Date Target Group */}
              <div className="">
                <label className="block text-[11px] font-bold uppercase tracking-wider flex items-center">
                  <Calendar className="w-3.5 h-3.5 mr-1 text-[#5EBC23]" /> Start
                  Date Schedule
                </label>
                <div className="relative">
                  <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="date"
                    required
                    value={pickupDate}
                    onChange={(e) => setPickupDate(e.target.value)}
                    min={new Date().toISOString().split("T")[0]}
                    className="w-full bg-gray-50 dark:bg-gray-950 border border-gray-200 dark:border-gray-800 rounded-xl pl-12 pr-4 py-3.5 text-sm text-gray-500 focus:outline-none"
                  />
                </div>
              </div>

              {/* Selection Target Confirmation Visual Badge */}
              <div className="bg-gray-50 dark:bg-gray-950 p-3 rounded-xl border border-gray-100 dark:border-gray-800 text-[11px] font-bold text-gray-400 flex justify-between items-center">
                <span>Selected Allocation Frame:</span>
                <span className="text-[#0C4587] dark:text-blue-400 uppercase font-mono font-black">
                  {activeSegment.type} Class
                </span>
              </div>

              {/* Master Trigger Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center bg-gradient-to-r from-[#0C4587] to-[#0A3C73] hover:from-[#5EBC23] hover:to-[#4CAF50] text-white text-xs uppercase tracking-widest font-black py-4 rounded-xl shadow-md shadow-blue-900/10 hover:shadow-green-500/10 transition-all duration-300 group"
                >
                  Isolate Available Cars
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </form>

            {/* Direct Phone Assistance Anchor Node */}
            <div className="mt-4 text-center">
              <Link
                href="/contact"
                className="inline-flex items-center text-[11px] font-bold text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors"
              >
                Need custom multi-fleet dispatch advice?{" "}
                <ChevronRight className="w-3.5 h-3.5 ml-0.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
