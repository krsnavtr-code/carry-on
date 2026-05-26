"use client";

import React, { ChangeEvent } from "react";
import {
  SlidersHorizontal,
  Gauge,
  Fuel,
  Users,
  CircleDollarSign,
  RefreshCw,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

// 1. TYPESCRIPT INTERFACES FOR STRICT FILTER STATE
export interface FilterState {
  searchQuery: string;
  segment: string;
  transmission: string;
  fuelType: string;
  maxPrice: number;
  onlyAvailable: boolean;
}

interface CarFiltersProps {
  filters: FilterState;
  setFilters: React.Dispatch<React.SetStateAction<FilterState>>;
  resetFilters: () => void;
  totalResults: number;
}

export default function CarFilters({
  filters,
  setFilters,
  resetFilters,
  totalResults,
}: CarFiltersProps): React.ReactElement {
  // Dynamic filter handler for inputs, selects and checkboxes
  const handleFilterChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ): void => {
    const { name, value, type } = e.target;

    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setFilters((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFilters((prev) => ({ ...prev, [name]: value }));
    }
  };

  // Direct Segment Picker function for upper visual row tabs
  const handleSegmentTab = (segmentName: string): void => {
    setFilters((prev) => ({ ...prev, segment: segmentName }));
  };

  const segmentCategories = [
    "All",
    "Luxury",
    "SUV",
    "Electric",
    "Sedan",
    "Economy",
  ];

  return (
    <div className="w-full bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-3xl p-5 sm:p-6 lg:p-8 shadow-sm space-y-6 transition-all duration-300">
      {/* HEADER ACTION CONTROL BAR */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 border-b border-gray-50 dark:border-gray-800/60">
        <div className="flex items-center space-x-2.5">
          <div className="p-2 bg-blue-50 dark:bg-blue-950/40 border border-blue-100/30 dark:border-blue-900/30 rounded-xl">
            <SlidersHorizontal className="w-4 h-4 text-[#0C4587] dark:text-blue-400" />
          </div>
          <div>
            <h3 className="text-lg font-black text-gray-900 dark:text-white tracking-tight">
              Filter Infrastructure
            </h3>
            <p className="text-xs text-gray-400 font-semibold">
              Matched{" "}
              <span className="text-[#5EBC23]">
                {totalResults} active assets
              </span>
            </p>
          </div>
        </div>

        {/* Reset Active Filters Button */}
        <button
          type="button"
          onClick={resetFilters}
          className="inline-flex items-center space-x-1.5 text-xs font-bold text-gray-400 hover:text-red-500 transition-colors bg-gray-50 dark:bg-gray-950 px-3.5 py-2 rounded-xl border border-gray-100 dark:border-gray-800/80 group"
        >
          <RefreshCw className="w-3.5 h-3.5 group-hover:rotate-180 transition-transform duration-300" />
          <span>Reset Parameters</span>
        </button>
      </div>

      {/* DYNAMIC FILTER ROW 1: HORIZONTAL SEGMENT CARDS SELECTOR */}
      <div className="space-y-2">
        <label className="block text-[11px] font-black uppercase tracking-wider text-gray-400 dark:text-gray-500 flex items-center">
          <Sparkles className="w-3.5 h-3.5 mr-1.5 text-[#5EBC23]" /> Vehicle
          Segment Class
        </label>
        <div className="flex items-center space-x-2 overflow-x-auto pb-2 scrollbar-none w-full">
          {segmentCategories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => handleSegmentTab(cat)}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold tracking-wide uppercase whitespace-nowrap transition-all border ${
                filters.segment === cat
                  ? "bg-[#0C4587] text-white border-transparent shadow-md shadow-blue-900/10"
                  : "bg-gray-50 dark:bg-gray-950 text-gray-500 hover:text-gray-800 dark:hover:text-gray-200 border-gray-100 dark:border-gray-800/80"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* DYNAMIC FILTER ROW 2: MAIN SELECT DROPDOWNS & SLIDER INPUTS GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {/* Filter Unit 1: Transmission Mode Selector */}
        <div className="space-y-2">
          <label className="block text-[11px] font-black uppercase tracking-wider text-gray-400 dark:text-gray-500 flex items-center">
            <Gauge className="w-3.5 h-3.5 mr-1.5 text-gray-400" /> Transmission
            System
          </label>
          <select
            name="transmission"
            value={filters.transmission}
            onChange={handleFilterChange}
            className="w-full bg-gray-50 dark:bg-gray-950 text-xs font-bold border border-gray-100 dark:border-gray-800 rounded-xl px-3.5 py-3.5 focus:outline-none focus:border-blue-500 text-gray-600 dark:text-gray-400 transition-all"
          >
            <option value="All">All Drive Modes</option>
            <option value="Automatic">Automatic (Comfort Class)</option>
            <option value="Manual">Manual (Classic Stick)</option>
          </select>
        </div>

        {/* Filter Unit 2: Fuel Grid Selector */}
        <div className="space-y-2">
          <label className="block text-[11px] font-black uppercase tracking-wider text-gray-400 dark:text-gray-500 flex items-center">
            <Fuel className="w-3.5 h-3.5 mr-1.5 text-gray-400" /> Fuel / Power
            Node
          </label>
          <select
            name="fuelType"
            value={filters.fuelType}
            onChange={handleFilterChange}
            className="w-full bg-gray-50 dark:bg-gray-950 text-xs font-bold border border-gray-100 dark:border-gray-800 rounded-xl px-3.5 py-3.5 focus:outline-none focus:border-blue-500 text-gray-600 dark:text-gray-400 transition-all"
          >
            <option value="All">All Propulsion Types</option>
            <option value="Petrol">Petrol Engine Assets</option>
            <option value="Diesel">Diesel Heavy-Duty</option>
            <option value="Electric">Electric (Zero Emission)</option>
          </select>
        </div>

        {/* Filter Unit 3: Dynamic Price Cap Slider */}
        <div className="space-y-2 sm:col-span-2 lg:col-span-1">
          <div className="flex items-center justify-between text-[11px] font-black uppercase tracking-wider">
            <span className="text-gray-400 dark:text-gray-500 flex items-center">
              <CircleDollarSign className="w-3.5 h-3.5 mr-1.5 text-gray-400" />{" "}
              Maximum Price Ceiling
            </span>
            <span className="text-[#5EBC23] bg-green-50 dark:bg-green-950/40 px-2 py-0.5 rounded-md font-mono">
              ≤ ₹{filters.maxPrice.toLocaleString("en-IN")}/d
            </span>
          </div>
          <div className="pt-2 flex items-center space-x-3">
            <span className="text-[10px] font-bold text-gray-400">₹1,500</span>
            <input
              type="range"
              name="maxPrice"
              min="1500"
              max="50000"
              step="500"
              value={filters.maxPrice}
              onChange={handleFilterChange}
              className="flex-1 h-1.5 bg-gray-100 dark:bg-gray-800 rounded-lg appearance-none cursor-pointer accent-[#0C4587] dark:accent-blue-500"
            />
            <span className="text-[10px] font-bold text-gray-400">₹50K</span>
          </div>
        </div>
      </div>

      {/* LOWER STATUS STRIP: REAL-TIME INCLUSION FLAG CHECKBOXES */}
      <div className="pt-4 border-t border-gray-50 dark:border-gray-800/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        {/* Toggle Switch Checkbox UI */}
        <label className="relative flex items-center space-x-3 cursor-pointer group select-none">
          <input
            type="checkbox"
            name="onlyAvailable"
            checked={filters.onlyAvailable}
            onChange={handleFilterChange}
            className="w-4 h-4 rounded-md bg-gray-50 dark:bg-gray-950 border border-gray-200 dark:border-gray-800 text-[#0C4587] focus:ring-0 focus:ring-offset-0 transition-all cursor-pointer"
          />
          <span className="text-xs font-bold text-gray-500 dark:text-gray-400 group-hover:text-gray-800 dark:group-hover:text-gray-200 transition-colors">
            Hide Currently Rented Assets (Show Only Instant Ready Cars)
          </span>
        </label>

        {/* Trust Matrix Badge Footer */}
        <div className="flex items-center text-[10px] font-black uppercase tracking-wider text-gray-400 border border-dashed border-gray-200 dark:border-gray-800 p-2 rounded-xl bg-gray-50/50 dark:bg-gray-950/20">
          <CheckCircle2 className="w-3.5 h-3.5 mr-1.5 text-[#5EBC23]" /> Core
          Web Vitals Indexed
        </div>
      </div>
    </div>
  );
}
