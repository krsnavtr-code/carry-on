"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  MapPin,
  Calendar,
  Sparkles,
  ShieldCheck,
  ArrowRight,
  Zap,
  Car,
  ChevronRight,
  Star,
  X,
} from "lucide-react";

interface FleetSegment {
  id: string;
  name: string;
  type: string;
  tagline: string;
  price: string;
  bgGradient: string;
  rating: string;
}

export default function HeroBanner(): React.ReactElement {
  const router = useRouter();

  const segments: FleetSegment[] = [
    {
      id: "seg-1",
      name: "BMW 5 Series",
      type: "Luxury",
      tagline: "✨ Absolute Elite Corporate Comfort",
      price: "₹12,500",
      bgGradient: "from-blue-600/10 via-indigo-500/5",
      rating: "4.9",
    },
    {
      id: "seg-2",
      name: "Toyota Fortuner 4x4",
      type: "SUV",
      tagline: "🏔️ Built to Dominate All Indian Terrains",
      price: "₹8,500",
      bgGradient: "from-emerald-600/10 via-green-500/5",
      rating: "4.7",
    },
    {
      id: "seg-3",
      name: "Tesla Model Y",
      type: "Electric",
      tagline: "⚡ High-Performance Smart Autonomous Driving",
      price: "₹15,000",
      bgGradient: "from-cyan-600/10 via-teal-500/5",
      rating: "4.8",
    },
  ];

  const [activeSegment, setActiveSegment] = useState<FleetSegment>(segments[0]);
  const [pickupLocation, setPickupLocation] = useState<string>("");
  const [pickupDate, setPickupDate] = useState<string>("");

  const [isMobileModalOpen, setIsMobileModalOpen] = useState<boolean>(false);

  const handleSearchRedirect = (e: React.FormEvent): void => {
    e.preventDefault();
    if (!pickupLocation) return;
    const query = `?carId=${encodeURIComponent(
      activeSegment.name,
    )}&pickup=${encodeURIComponent(pickupLocation)}&date=${encodeURIComponent(
      pickupDate,
    )}`;
    router.push(`/booking${query}`);
  };

  // Compact Form Card
  const renderBookingCard = (isModal: boolean = false) => (
    <div className="relative rounded-xl p-4 md:p-5 transition-all duration-200 bg-white/20 dark:bg-white/10 text-white backdrop-blur-md border border-white/30 shadow-2xl w-full max-w-md mx-auto">
      {isModal && (
        <button
          onClick={() => setIsMobileModalOpen(false)}
          className="absolute top-3 right-3 bg-black/20 hover:bg-black/40 text-gray-200 hover:text-white p-1 rounded-full transition-colors z-10"
          type="button"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      )}

      {/* Top Indicator Accent Line */}
      <div className="absolute top-0 left-8 right-8 h-1 bg-gradient-to-r from-[#0C4587] to-[#5EBC23] rounded-full" />

      <div className="space-y-1 mb-4 mt-1">
        <h3 className="text-lg font-black text-white tracking-tight">
          Initialize Reservation
        </h3>
        <p className="text-[11px] font-semibold text-gray-200 leading-tight">
          Flag coordinates to scan real-time proximity availability.
        </p>
      </div>

      <form onSubmit={handleSearchRedirect} className="space-y-3">
        {/* Pickup Input Group */}
        <div>
          <label className="block text-[10px] font-bold uppercase tracking-wider flex items-center text-gray-200 mb-1">
            <MapPin className="w-3 h-3 mr-1 text-[#5EBC23]" /> Pickup Hub
            Address
          </label>
          <div className="relative">
            <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gray-300" />
            <input
              type="text"
              required
              placeholder="Enter airport, city..."
              value={pickupLocation}
              onChange={(e) => setPickupLocation(e.target.value)}
              className="w-full bg-black/20 border border-white/20 rounded-lg pl-9 pr-3 py-2.5 text-xs focus:outline-none focus:border-[#5EBC23] transition-all text-white placeholder-gray-300"
            />
          </div>
        </div>

        {/* Start Date Target Group */}
        <div>
          <label className="block text-[10px] font-bold uppercase tracking-wider flex items-center text-gray-200 mb-1">
            <Calendar className="w-3 h-3 mr-1 text-[#5EBC23]" /> Start Date
            Schedule
          </label>
          <div className="relative">
            <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gray-300" />
            <input
              type="date"
              required
              value={pickupDate}
              onChange={(e) => setPickupDate(e.target.value)}
              min={new Date().toISOString().split("T")[0]}
              className="w-full bg-black/20 border border-white/20 rounded-lg pl-9 pr-3 py-2.5 text-xs text-white focus:outline-none focus:border-[#5EBC23] transition-all [color-scheme:dark]"
            />
          </div>
        </div>

        {/* Selection Badge */}
        <div className="bg-black/20 p-2.5 rounded-lg border border-white/20 text-[10px] font-bold text-gray-200 flex justify-between items-center">
          <span>Selected Allocation Frame:</span>
          <span className="text-[#5EBC23] uppercase font-mono font-black">
            {activeSegment.type} Class
          </span>
        </div>

        {/* Master Trigger Submit Button */}
        <div className="pt-1">
          <button
            type="submit"
            className="w-full inline-flex items-center justify-center bg-gradient-to-r from-[#0C4587] to-[#0A3C73] hover:from-[#5EBC23] hover:to-[#4CAF50] text-white text-[11px] uppercase tracking-widest font-black py-3 rounded-lg shadow-md transition-all duration-300 group"
          >
            Isolate Available Cars
            <ArrowRight className="w-3.5 h-3.5 ml-2 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </form>

      {/* Direct Phone Assistance Anchor Node */}
      <div className="mt-4 text-center">
        <Link
          href="/contact"
          className="inline-flex items-center text-[10px] font-bold text-gray-300 hover:text-white transition-colors"
        >
          Need custom multi-fleet dispatch advice?{" "}
          <ChevronRight className="w-3 h-3 ml-0.5" />
        </Link>
      </div>
    </div>
  );

  return (
    <>
      <section className="flex items-center justify-center min-h-[700px] pb-8 pt-20 md:pb-12 md:pt-20 relative overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat -z-20"
          style={{
            backgroundImage:
              "url('https://www.trivixam.com/api/upload/file/banner-31052026-0808.png')",
          }}
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40 dark:bg-black/60 -z-10" />

        {/* Dynamic Background Sync Shader */}
        <div
          className={`absolute inset-0 bg-gradient-to-br ${activeSegment.bgGradient} to-transparent blur-3xl opacity-70 pointer-events-none transition-all duration-700 -z-10`}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
          {/* LEFT 7 COLS */}
          <div className="lg:col-span-7 space-y-3.5 md:space-y-4 text-left animate-fade-in">
            <div className="inline-flex items-center space-x-1.5 bg-blue-50/10 backdrop-blur-sm border border-blue-100/20 px-3 py-1 rounded-full">
              <Sparkles className="w-3 h-3 text-[#5EBC23] animate-pulse" />
              <span className="text-[9px] font-black text-white tracking-widest uppercase">
                Premium Modular Fleets 2026
              </span>
            </div>

            <h1 className="text-2xl md:text-4xl font-black tracking-tight leading-tight text-white">
              Drive Freedom With{" "}
              <span className="bg-gradient-to-r from-[#0C4587] via-blue-400 to-[#5EBC23] bg-clip-text text-transparent">
                Carry-On
              </span>
            </h1>

            <p className="text-xs sm:text-sm md:text-base font-medium max-w-lg leading-relaxed text-gray-200">
              Eliminate paperwork hurdles. Access immaculate vehicles across
              single-day transits, weekly getaways, or monthly commercial
              subscription infrastructures.
            </p>

            <div className="space-y-2.5 pt-1">
              <span className="text-[9px] uppercase text-gray-300 tracking-widest block font-bold">
                Quick Preview Segment Tier:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {segments.map((seg) => (
                  <button
                    key={seg.id}
                    onClick={() => setActiveSegment(seg)}
                    className={`flex items-center space-x-1 px-3 py-1 rounded-lg transition-all duration-200 font-medium text-xs ${
                      activeSegment.id === seg.id
                        ? "bg-[#0C4587] text-white shadow-md shadow-blue-900/20"
                        : "bg-white/20 dark:bg-white/10 text-white hover:bg-white/30 dark:hover:bg-white/20 backdrop-blur-sm border border-white/30"
                    }`}
                  >
                    {seg.type}
                  </button>
                ))}
              </div>

              {/* Active Segment Info Card (Compact) */}
              <div className="flex flex-wrap sm:flex-nowrap items-center gap-3 px-3 py-2 rounded-xl transition-all duration-200 bg-white/20 text-white backdrop-blur-sm border border-white/30 max-w-sm">
                <div className="space-y-0.5 w-full">
                  <span className="text-[9px] font-bold block uppercase tracking-wider text-gray-300">
                    {activeSegment.tagline}
                  </span>
                  <h4 className="text-sm md:text-base font-black text-white flex items-center">
                    <Car className="w-3.5 h-3.5 mr-1.5 text-[#5EBC23]" />{" "}
                    {activeSegment.name}
                  </h4>
                </div>

                <div className="sm:text-right sm:border-l border-white/20 sm:pl-3 flex-shrink-0 flex flex-col sm:items-end justify-center w-full sm:w-auto">
                  <span className="text-[9px] font-bold text-gray-300 block uppercase tracking-wider mb-0.5">
                    Ratings
                  </span>
                  <div className="flex items-center space-x-1 bg-black/20 px-1.5 py-0.5 rounded-md w-max">
                    <Star className="w-3 h-3 text-[#5EBC23] fill-[#5EBC23]" />
                    <span className="text-xs font-black text-white">
                      {activeSegment.rating}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile Only: Book Now Trigger Button (Compact) */}
            <div className="pt-3 lg:hidden block max-w-sm">
              <button
                onClick={() => setIsMobileModalOpen(true)}
                className="w-full flex items-center justify-center space-x-1.5 bg-[#5EBC23] hover:bg-[#4CAF50] text-white py-2.5 rounded-lg font-black uppercase text-xs tracking-widest shadow-lg transition-colors"
              >
                <span>Book Now</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Footer Features */}
            <div className="flex flex-wrap gap-x-5 gap-y-2 pt-4 text-[10px] sm:text-xs font-bold border-t border-white/20 max-w-lg text-gray-200">
              <div className="flex items-center">
                <ShieldCheck className="w-3.5 h-3.5 text-[#5EBC23] mr-1.5" />{" "}
                Comprehensive Insurance
              </div>
              <div className="flex items-center">
                <Zap className="w-3.5 h-3.5 text-[#D48C3B] mr-1.5" /> Zero Surge
                Pricing
              </div>
            </div>
          </div>

          {/* RIGHT 5 COLS: Desktop Form (Hidden on mobile) */}
          <div className="hidden lg:block lg:col-span-5">
            {renderBookingCard(false)}
          </div>
        </div>
      </section>

      {/* MOBILE POPUP MODAL */}
      {isMobileModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-md p-4 lg:hidden animate-in fade-in zoom-in duration-200">
          <div className="w-full max-w-sm relative">
            {renderBookingCard(true)}
          </div>
        </div>
      )}
    </>
  );
}
