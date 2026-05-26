"use client";

import React, { useState, useEffect, ChangeEvent, FormEvent } from "react";
import { useRouter } from "next/navigation";
import {
  Search,
  MapPin,
  Calendar,
  Clock,
  SlidersHorizontal,
  Sparkles,
  ArrowRight,
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
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-30">
      <div className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800/80 rounded-xl shadow-xl shadow-gray-200/50 dark:shadow-none p-2 md:p-4 transition-all duration-300">
        <form onSubmit={handleFormSubmit} className="space-y-3">
          {/* Main Layout Grid Row */}
          <p className="text-center font-bold text-lg border-b border-gray-200 ">
            Search the best for you{" "}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-5 items-end">
            {/* Input Node 1: Pickup Landmark Map Link (Takes 4 columns) */}
            <div className="lg:col-span-4 space-y-1.5">
              <label className="block text-[11px] font-black uppercase tracking-wider  flex items-center">
                <MapPin className="w-3.5 h-3.5 mr-1 text-[#0C4587] dark:text-blue-400" />{" "}
                Pickup Location Node
              </label>
              <div className="relative">
                <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  name="pickupLocation"
                  required
                  value={searchState.pickupLocation}
                  onChange={handleInputChange}
                  placeholder="Airport, terminal, city hub or terminal..."
                  className="w-full bg-gray-50 dark:bg-gray-950 text-sm border border-gray-200 dark:border-gray-800 rounded-xl pl-11 pr-4 py-3.5 focus:outline-none focus:border-blue-500 transition-all text-gray-800 dark:text-gray-200"
                />
              </div>
            </div>

            {/* Input Node 2: Pickup Chronology Schedule Date (Takes 3 columns) */}
            <div className="lg:col-span-3 space-y-1.5">
              <label className="block text-[11px] font-black uppercase tracking-wider  flex items-center">
                <Calendar className="w-3.5 h-3.5 mr-1 text-[#5EBC23]" /> Pickup
                Date & Time
              </label>
              <div className="flex space-x-1.5">
                <div className="relative flex-1">
                  <input
                    type="date"
                    name="fromDate"
                    required
                    value={searchState.fromDate}
                    onChange={handleInputChange}
                    min={todayDate}
                    className="w-full bg-gray-50 dark:bg-gray-950 text-xs border border-gray-200 dark:border-gray-800 rounded-xl px-3 py-3.5 text-gray-500 focus:outline-none focus:border-blue-500 transition-all"
                  />
                </div>
                <div className="relative w-24">
                  <input
                    type="time"
                    name="fromTime"
                    required
                    value={searchState.fromTime}
                    onChange={handleInputChange}
                    className="w-full bg-gray-50 dark:bg-gray-950 text-xs border border-gray-200 dark:border-gray-800 rounded-xl px-2 py-3.5 text-gray-500 focus:outline-none focus:border-blue-500 transition-all"
                  />
                </div>
              </div>
            </div>

            {/* Input Node 3: Closure Return Target Timeline Date (Takes 3 columns) */}
            <div className="lg:col-span-3 space-y-1.5">
              <label className="block text-[11px] font-black uppercase tracking-wider  flex items-center">
                <Clock className="w-3.5 h-3.5 mr-1 text-[#D48C3B]" /> Return
                Date & Time
              </label>
              <div className="flex space-x-1.5">
                <div className="relative flex-1">
                  <input
                    type="date"
                    name="untilDate"
                    required
                    value={searchState.untilDate}
                    onChange={handleInputChange}
                    min={searchState.fromDate || todayDate}
                    className="w-full bg-gray-50 dark:bg-gray-950 text-xs border border-gray-200 dark:border-gray-800 rounded-xl px-3 py-3.5 text-gray-500 focus:outline-none focus:border-blue-500 transition-all"
                  />
                </div>
                <div className="relative w-24">
                  <input
                    type="time"
                    name="untilTime"
                    required
                    value={searchState.untilTime}
                    onChange={handleInputChange}
                    className="w-full bg-gray-50 dark:bg-gray-950 text-xs border border-gray-200 dark:border-gray-800 rounded-xl px-2 py-3.5 text-gray-500 focus:outline-none focus:border-blue-500 transition-all"
                  />
                </div>
              </div>
            </div>

            {/* Submit Action Trigger (Takes 2 columns) */}
            <div className="lg:col-span-2 w-full">
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center bg-gradient-to-r from-[#0C4587] to-[#0A3C73] hover:from-[#5EBC23] hover:to-[#4CAF50] text-white text-xs uppercase tracking-widest font-black py-4 rounded-xl shadow-md shadow-blue-900/10 hover:shadow-green-500/10 transition-all duration-300 group"
              >
                <span>Find Cars</span>
                <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* LOWER OPTION BAR: Advanced Parameters Trigger & Filter Privileges */}
          <div className="pt-4 border-t border-gray-50 dark:border-gray-800/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
            {/* Left: Interactive Dropdown Trigger */}
            <button
              type="button"
              onClick={() => setShowAdvanced(!showAdvanced)}
              className="inline-flex items-center font-bold text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors bg-gray-50 dark:bg-gray-950 px-3 py-2 rounded-xl border border-gray-200 dark:border-gray-800"
            >
              <SlidersHorizontal className="w-3.5 h-3.5 mr-1.5 text-[#5EBC23]" />
              <span>
                {showAdvanced ? "Collapse Filters" : "Advanced Vetting Filters"}
              </span>
            </button>

            {/* Right: Promotion Dynamic Alert Badge */}
            <div className="flex items-center space-x-1.5 font-bold text-[#5EBC23]">
              <Sparkles className="w-4 h-4 fill-current" />
              <span className="">
                Corporate Rates Lockdown Active:
              </span>
              <span className="bg-green-50 dark:bg-green-950/30 border border-green-100/50 dark:border-green-900/20 px-2 py-0.5 rounded-md text-[10px]">
                No Surge Surcharge
              </span>
            </div>
          </div>

          {/* ADVANCED FILTER BOX SLIDEOUT ACCORDION PANEL */}
          {showAdvanced && (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 bg-gray-50 dark:bg-gray-950/40 p-4 rounded-2xl border border-gray-200 dark:border-gray-800/50 animate-fade-in text-xs font-bold">
              {/* Transmission Filter Spec */}
              <div className="space-y-1.5">
                <label className=" uppercase tracking-wider block">
                  Transmission Class
                </label>
                <select
                  name="transmissionFilter"
                  value={searchState.transmissionFilter}
                  onChange={handleInputChange}
                  className="w-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl px-3 py-2.5 focus:outline-none focus:border-blue-500 text-gray-600 dark:text-gray-400"
                >
                  <option value="All">All Drive Systems</option>
                  <option value="Automatic">Pure Automatic Comfort</option>
                  <option value="Manual">Classic Manual Stick</option>
                </select>
              </div>

              {/* Pseudo Filter placeholders to demonstrate architectural layout */}
              <div className="space-y-1.5">
                <label className=" uppercase tracking-wider block">
                  Protection Tier Waiver
                </label>
                <select
                  disabled
                  className="w-full bg-white/50 dark:bg-gray-900/40 border border-gray-200 dark:border-gray-800 rounded-xl px-3 py-2.5 text-gray-400 cursor-not-allowed"
                >
                  <option>Standard Insurance Pack (Default)</option>
                </select>
              </div>

              <div className="space-y-1.5">
                <label className=" uppercase tracking-wider block">
                  Refueling Contract Node
                </label>
                <select
                  disabled
                  className="w-full bg-white/50 dark:bg-gray-900/40 border border-gray-200 dark:border-gray-800 rounded-xl px-3 py-2.5 text-gray-400 cursor-not-allowed"
                >
                  <option>Same-to-Same Fuel Fill (Default)</option>
                </select>
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
