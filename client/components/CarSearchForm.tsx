"use client";

import React, { useState, useEffect, ChangeEvent, FormEvent } from "react";
import { useRouter } from "next/navigation";
import {
  MapPin,
  Calendar,
  Clock,
  SlidersHorizontal,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Fuel,
  ChevronDown,
} from "lucide-react";

// TypeScript interface for explicit search state parameters
interface SearchFormState {
  pickupLocation: string;
  fromDate: string;
  fromTime: string;
  untilDate: string;
  untilTime: string;
  transmissionFilter: "All" | "Automatic" | "Manual";
}

export default function CarSearchForm(): React.ReactElement {
  const router = useRouter();
  const [todayDate, setTodayDate] = useState<string>("");

  // Safely evaluate client-side baseline date to avoid SSR hydration mismatch warnings
  useEffect(() => {
    setTodayDate(new Date().toISOString().split("T")[0]);
  }, []);

  // Centralized State Engine
  const [searchState, setSearchState] = useState<SearchFormState>({
    pickupLocation: "",
    fromDate: "",
    fromTime: "10:00",
    untilDate: "",
    untilTime: "10:00",
    transmissionFilter: "All",
  });

  const [showAdvanced, setShowAdvanced] = useState<boolean>(false);

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ): void => {
    const { name, value } = e.target;
    setSearchState((prev) => {
      const updated = { ...prev, [name]: value };
      // Safeguard constraint: If pickup date exceeds return date, reset return date timeline
      if (
        name === "fromDate" &&
        updated.untilDate &&
        updated.untilDate < value
      ) {
        updated.untilDate = value;
      }
      return updated;
    });
  };

  // Dispatch Queries to Dynamic Booking Wizard Layer
  const handleFormSubmit = (e: FormEvent): void => {
    e.preventDefault();
    if (!searchState.pickupLocation.trim()) return;

    const queryParams = new URLSearchParams({
      pickup: searchState.pickupLocation,
      fromDate: searchState.fromDate,
      fromTime: searchState.fromTime,
      untilDate: searchState.untilDate,
      untilTime: searchState.untilTime,
      transmission: searchState.transmissionFilter,
    });

    // Seamless programmatic routing push redirect
    router.push(`/booking?${queryParams.toString()}`);
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 pt-5 sm:px-6 lg:px-8 relative z-30 mb-12 -mt-6 md:-mt-10">
      {/* Decorative Ambient Glow (Visible mostly in Dark Mode) */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0C4587]/20 to-[#5EBC23]/20 blur-3xl rounded-[3rem] -z-10 opacity-0 dark:opacity-100 transition-opacity duration-500" />

      {/* Main Elevated Premium Card (Compacted) */}
      <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.4)] p-4 md:p-6 transition-colors duration-300">
        {/* Sleek Header Row */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4 pb-3 border-b border-gray-100 dark:border-gray-800/80">
          <div className="flex items-center gap-2.5">
            <div className="w-1.5 h-5 bg-gradient-to-b from-[#0C4587] to-[#5EBC23] rounded-full shadow-sm" />
            <h2 className="text-xl md:text-2xl font-black text-gray-900 dark:text-white tracking-tight">
              Find Your Perfect Ride
            </h2>
          </div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-50 dark:bg-blue-900/20 rounded-full border border-blue-100 dark:border-blue-800/30 w-max shadow-sm">
            <ShieldCheck className="w-3.5 h-3.5 text-[#0C4587] dark:text-blue-400" />
            <span className="text-[9px] font-black uppercase tracking-widest text-[#0C4587] dark:text-blue-400">
              100% Secure Booking
            </span>
          </div>
        </div>

        <form onSubmit={handleFormSubmit} className="space-y-4">
          {/* Main Layout Grid Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 lg:gap-5 items-end">
            {/* Input Node 1: Pickup Landmark */}
            <div className="lg:col-span-4 group">
              <label className="flex items-center text-[10px] font-black uppercase tracking-widest text-gray-600 dark:text-gray-400 mb-1.5 ml-1 transition-colors">
                Pickup Hub
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <MapPin className="w-3.5 h-3.5 text-gray-400 group-focus-within:text-[#0C4587] dark:group-focus-within:text-[#5EBC23] transition-colors" />
                </div>
                <input
                  type="text"
                  name="pickupLocation"
                  required
                  value={searchState.pickupLocation}
                  onChange={handleInputChange}
                  placeholder="Airport, city hub or landmark..."
                  className="w-full bg-gray-50 dark:bg-gray-950 text-xs font-semibold border border-gray-200 dark:border-gray-800 rounded-xl pl-9 pr-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#0C4587]/20 dark:focus:ring-[#5EBC23]/20 focus:border-[#0C4587] dark:focus:border-[#5EBC23] transition-all text-gray-900 dark:text-white placeholder-gray-400"
                />
              </div>
            </div>

            {/* Input Node 2: Pickup Chronology */}
            <div className="lg:col-span-3 group">
              <label className="flex items-center text-[10px] font-black uppercase tracking-widest text-gray-600 dark:text-gray-400 mb-1.5 ml-1 transition-colors">
                <Calendar className="w-3 h-3 mr-1.5 text-[#5EBC23]" />
                Pickup Schedule
              </label>
              <div className="flex bg-gray-50 dark:bg-gray-950 border border-gray-200 dark:border-gray-800 rounded-xl transition-all focus-within:ring-2 focus-within:ring-[#5EBC23]/20 focus-within:border-[#5EBC23] overflow-hidden">
                <div className="relative flex-1">
                  <input
                    type="date"
                    name="fromDate"
                    required
                    value={searchState.fromDate}
                    onChange={handleInputChange}
                    min={todayDate}
                    className="w-full bg-transparent text-xs font-semibold px-3 py-2.5 text-gray-800 dark:text-gray-200 focus:outline-none transition-all [color-scheme:light] dark:[color-scheme:dark]"
                  />
                </div>
                {/* Vertical Divider */}
                <div className="w-px bg-gray-200 dark:bg-gray-800 my-1.5"></div>
                <div className="relative w-24">
                  <input
                    type="time"
                    name="fromTime"
                    required
                    value={searchState.fromTime}
                    onChange={handleInputChange}
                    className="w-full bg-transparent text-xs font-semibold px-2 py-2.5 text-gray-800 dark:text-gray-200 focus:outline-none transition-all [color-scheme:light] dark:[color-scheme:dark]"
                  />
                </div>
              </div>
            </div>

            {/* Input Node 3: Return Timeline */}
            <div className="lg:col-span-3 group">
              <label className="flex items-center text-[10px] font-black uppercase tracking-widest text-gray-600 dark:text-gray-400 mb-1.5 ml-1 transition-colors">
                <Clock className="w-3 h-3 mr-1.5 text-[#D48C3B]" />
                Return Schedule
              </label>
              <div className="flex bg-gray-50 dark:bg-gray-950 border border-gray-200 dark:border-gray-800 rounded-xl transition-all focus-within:ring-2 focus-within:ring-[#D48C3B]/20 focus-within:border-[#D48C3B] overflow-hidden">
                <div className="relative flex-1">
                  <input
                    type="date"
                    name="untilDate"
                    required
                    value={searchState.untilDate}
                    onChange={handleInputChange}
                    min={searchState.fromDate || todayDate}
                    className="w-full bg-transparent text-xs font-semibold px-3 py-2.5 text-gray-800 dark:text-gray-200 focus:outline-none transition-all [color-scheme:light] dark:[color-scheme:dark]"
                  />
                </div>
                {/* Vertical Divider */}
                <div className="w-px bg-gray-200 dark:bg-gray-800 my-1.5"></div>
                <div className="relative w-24">
                  <input
                    type="time"
                    name="untilTime"
                    required
                    value={searchState.untilTime}
                    onChange={handleInputChange}
                    className="w-full bg-transparent text-xs font-semibold px-2 py-2.5 text-gray-800 dark:text-gray-200 focus:outline-none transition-all [color-scheme:light] dark:[color-scheme:dark]"
                  />
                </div>
              </div>
            </div>

            {/* Submit Action Trigger */}
            <div className="lg:col-span-2 w-full">
              <button
                type="submit"
                className="w-full flex items-center justify-center bg-gradient-to-r from-[#0C4587] to-[#0A3C73] hover:from-[#5EBC23] hover:to-[#4CAF50] text-white text-[10px] uppercase tracking-widest font-black py-3.5 rounded-xl shadow-lg shadow-[#0C4587]/20 hover:shadow-[#5EBC23]/30 hover:-translate-y-0.5 transition-all duration-300 group"
              >
                <span>Find Cars</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* LOWER OPTION BAR */}
          <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            {/* Left: Advanced Toggle Button */}
            <button
              type="button"
              onClick={() => setShowAdvanced(!showAdvanced)}
              className="inline-flex items-center text-[11px] font-bold text-gray-600 dark:text-gray-400 hover:text-[#0C4587] dark:hover:text-[#5EBC23] transition-colors group"
            >
              <div
                className={`p-1 rounded-lg mr-1.5 transition-colors duration-300 border ${showAdvanced ? "bg-blue-50 border-blue-200 text-[#0C4587] dark:bg-[#5EBC23]/10 dark:border-[#5EBC23]/30 dark:text-[#5EBC23]" : "bg-gray-50 border-gray-200 dark:bg-gray-950 dark:border-gray-800 text-gray-500 group-hover:bg-gray-100 dark:group-hover:bg-gray-800"}`}
              >
                <SlidersHorizontal className="w-3.5 h-3.5" />
              </div>
              <span className="uppercase tracking-wider">
                {showAdvanced ? "Hide Filters" : "Advanced Filters"}
              </span>
            </button>

            {/* Right: Dynamic Alert Badge */}
            <div className="flex items-center space-x-1.5 font-bold bg-[#5EBC23]/10 dark:bg-[#5EBC23]/5 px-2.5 py-1 rounded-lg border border-[#5EBC23]/20 shadow-sm text-[10px]">
              <Sparkles className="w-3.5 h-3.5 text-[#5EBC23] fill-current animate-pulse" />
              <span className="text-gray-700 dark:text-gray-300">
                Corporate Rates:
              </span>
              <span className="text-[#5EBC23]">Zero Surge Pricing</span>
            </div>
          </div>

          {/* ADVANCED FILTER ACCORDION PANEL */}
          <div
            className={`grid grid-cols-1 sm:grid-cols-3 gap-4 transition-all duration-500 ease-in-out overflow-hidden ${showAdvanced ? "max-h-[500px] opacity-100 mt-4 pt-4 border-t border-gray-100 dark:border-gray-800/80" : "max-h-0 opacity-0 mt-0 pt-0 border-transparent"}`}
          >
            {/* Transmission Filter Spec */}
            <div className="space-y-1.5">
              <label className="text-[10px] font-black uppercase tracking-widest text-gray-600 dark:text-gray-400 block ml-1">
                Transmission Class
              </label>
              <div className="relative">
                <select
                  name="transmissionFilter"
                  value={searchState.transmissionFilter}
                  onChange={handleInputChange}
                  className="w-full bg-gray-50 dark:bg-gray-950 text-xs font-semibold border border-gray-200 dark:border-gray-800 rounded-xl px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#0C4587]/20 dark:focus:ring-[#5EBC23]/20 focus:border-[#0C4587] dark:focus:border-[#5EBC23] text-gray-900 dark:text-white transition-all cursor-pointer appearance-none"
                >
                  <option value="All">All Drive Systems</option>
                  <option value="Automatic">Pure Automatic Comfort</option>
                  <option value="Manual">Classic Manual Stick</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none">
                  <ChevronDown className="w-3.5 h-3.5 text-gray-500" />
                </div>
              </div>
            </div>

            {/* Pseudo Filter 1 (Disabled/Fixed State) */}
            <div className="space-y-1.5">
              <label className="text-[10px] font-black uppercase tracking-widest text-gray-600 dark:text-gray-400 block ml-1 flex items-center">
                <ShieldCheck className="w-3 h-3 mr-1" />
                Protection Tier
              </label>
              <div className="w-full flex items-center bg-gray-100/50 dark:bg-gray-950/50 text-xs font-semibold border border-gray-200 dark:border-gray-800/50 rounded-xl px-3 py-2.5 text-gray-400 dark:text-gray-500 cursor-not-allowed">
                Standard Insurance Pack
              </div>
            </div>

            {/* Pseudo Filter 2 (Disabled/Fixed State) */}
            <div className="space-y-1.5">
              <label className="text-[10px] font-black uppercase tracking-widest text-gray-600 dark:text-gray-400 block ml-1 flex items-center">
                <Fuel className="w-3 h-3 mr-1" />
                Refueling Rule
              </label>
              <div className="w-full flex items-center bg-gray-100/50 dark:bg-gray-950/50 text-xs font-semibold border border-gray-200 dark:border-gray-800/50 rounded-xl px-3 py-2.5 text-gray-400 dark:text-gray-500 cursor-not-allowed">
                Same-to-Same Fuel Fill
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
