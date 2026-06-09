"use client";

import React, { useState, useMemo, ChangeEvent } from "react";
import Link from "next/link";
import {
  Car as CarIcon,
  Gauge,
  Layers,
  Briefcase,
  Users,
  Fuel,
  Search,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  ChevronRight,
  RefreshCw,
  CheckCircle2,
  CircleDollarSign,
} from "lucide-react";
import {
  officialFleet,
  fleetCategories,
  type CarVehicle,
} from "../../data/fleetData";

interface FilterState {
  searchQuery: string;
  segment: string;
  transmission: string;
  fuelType: string;
  maxPrice: number;
  onlyAvailable: boolean;
}

export default function OurCarsPage(): React.ReactElement {
  // 2. OFFICIAL CARRY-ON FLEET DATA (Imported from centralized data file)
  const carsInventory: CarVehicle[] = officialFleet;

  // 3. CENTRALIZED INITIAL FILTER STATE
  const initialFilterState: FilterState = {
    searchQuery: "",
    segment: "All",
    transmission: "All",
    fuelType: "All",
    maxPrice: 50000,
    onlyAvailable: false,
  };

  const [filters, setFilters] = useState<FilterState>(initialFilterState);

  const resetFilters = (): void => setFilters(initialFilterState);

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

  const segmentsList = fleetCategories;

  // 4. COMPUTATIONAL HIGH-PERFORMANCE SEARCH ENGINE FILTERS
  const filteredCars = useMemo(() => {
    return carsInventory.filter((car) => {
      const matchesSearch =
        car.name.toLowerCase().includes(filters.searchQuery.toLowerCase()) ||
        car.brand.toLowerCase().includes(filters.searchQuery.toLowerCase());
      const matchesSegment =
        filters.segment === "All" || car.category === filters.segment;
      const matchesTransmission =
        filters.transmission === "All" ||
        car.transmission === filters.transmission;
      const matchesFuel =
        filters.fuelType === "All" ||
        car.fuel.toLowerCase().includes(filters.fuelType.toLowerCase());
      const matchesPrice = car.pricePerDay <= filters.maxPrice;
      const matchesAvailability = !filters.onlyAvailable || car.isAvailable;

      return (
        matchesSearch &&
        matchesSegment &&
        matchesTransmission &&
        matchesFuel &&
        matchesPrice &&
        matchesAvailability
      );
    });
  }, [filters]);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#050B14] text-gray-900 dark:text-gray-100 transition-colors duration-300 pb-16">
      {/* ========================================= */}
      {/* HERO BANNER & FILTERS WIDGET SECTION      */}
      {/* ========================================= */}
      <section className="relative w-full pt-20 pb-24 md:pt-24 md:pb-32 overflow-hidden z-10">
        {/* Parallax Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed bg-no-repeat -z-30"
          style={{
            backgroundImage:
              "url('https://www.trivixam.com/api/upload/file/all-car-page-top-image-08062026-1253.jpeg')",
          }}
        />

        {/* Frosted Glassmorphism Overlay */}
        <div className="absolute inset-0 dark:bg-[#050B14]/15 backdrop-blur-[1px] transition-colors duration-300 -z-20" />

        {/* Brand Radial Accents */}
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#0C4587]/15 rounded-full blur-[100px] pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 space-y-10 relative z-10">
          {/* INTRO HEADER */}
          <div className="text-center space-y-2 max-w-4xl mx-auto drop-shadow-sm">
            <div className="inline-flex items-center space-x-1.5 bg-white/80 dark:bg-gray-900/60 backdrop-blur-md border border-gray-200 dark:border-gray-800/80 px-3.5 py-1.5 rounded-full shadow-sm">
              <CarIcon className="w-4 h-4 text-[#5EBC23]" />
              <span className="text-[10px] font-black text-[#0C4587] dark:text-gray-200 tracking-widest uppercase">
                Carry-On Live Fleet Inventory
              </span>
            </div>
            <div className="bg-white/70 dark:bg-[#050B14]/70 backdrop-blur-md border border-white/40 dark:border-gray-800/60 p-3 md:p-8 rounded-[1.5rem] shadow-2xl max-w-4xl mx-auto text-center relative overflow-hidden group">
              {/* Subtle Background Glow inside the box */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-32 bg-[#5EBC23]/10 rounded-full blur-3xl pointer-events-none" />

              <h1 className="text-2xl sm:text-5xl md:text-6xl font-black tracking-tight text-gray-900 dark:text-white leading-tight drop-shadow-sm relative z-10">
                Explore Our{" "}
                <span className="bg-gradient-to-r from-[#0C4587] to-[#5EBC23] bg-clip-text text-transparent drop-shadow-sm">
                  Fleet
                </span>
              </h1>

              <p className="text-sm sm:text-base font-semibold text-gray-700 dark:text-gray-300 max-w-2xl mx-auto mt-5 relative z-10">
                Celebrating{" "}
                <span className="text-[#5EBC23] font-bold">
                  10 Years of Excellence
                </span>
                . Select from pristine economy hatchbacks to ultra-premium
                luxury vehicles. Transparent pricing with verified mechanical
                protection.
              </p>
            </div>
          </div>

          {/* INTERACTIVE CAR FILTERS WIDGET */}
          <div className="w-full backdrop-blur-xl border border-gray-200 dark:border-gray-800/80 rounded-lg p-2 sm:p-6 shadow-xl dark:shadow-2xl space-y-1 md:space-y-5 transition-colors duration-300">
            {/* Top Search & Reset Row */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-1 md:gap-4 pb-2 border-b border-gray-100 dark:border-gray-800/60">
              <div className="relative w-full sm:max-w-md flex items-center group">
                <Search className="absolute left-4 w-4 h-4 text-gray-400 group-focus-within:text-[#0C4587] transition-colors" />
                <input
                  type="text"
                  name="searchQuery"
                  placeholder="Search brand or model..."
                  value={filters.searchQuery}
                  onChange={handleFilterChange}
                  className="w-full bg-gray-950 text-sm font-semibold border border-gray-800 rounded-xl pl-11 pr-4 py-1.5 focus:outline-none focus:border-[#0C4587] focus:ring-1 focus:ring-[#0C4587] text-white transition-all"
                />
              </div>

              <button
                type="button"
                onClick={resetFilters}
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-1.5 text-[10px] font-black uppercase tracking-widest text-gray-500 hover:text-red-500 hover:border-red-200 transition-colors bg-gray-950 px-4 py-1.5 rounded-xl border border-gray-800 group"
              >
                <RefreshCw className="w-3.5 h-3.5 group-hover:rotate-180 transition-transform duration-500" />
                <span>Reset Filters</span>
              </button>
            </div>

            {/* SEGMENT NAV TABS */}
            <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none w-full hide-scroll">
              {segmentsList.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() =>
                    setFilters((prev) => ({ ...prev, segment: cat }))
                  }
                  className={`px-4 py-2 rounded-xl text-[11px] font-black tracking-widest uppercase whitespace-nowrap transition-all border cursor-pointer flex-shrink-0 ${
                    filters.segment === cat
                      ? "bg-gradient-to-r from-[#0C4587] to-[#0A3C73] text-white border-transparent shadow-md"
                      : "bg-gray-950 border-gray-800 text-gray-400 hover:border-gray-300"
                  }`}
                >
                  {cat} {cat !== "All" && "Class"}
                </button>
              ))}
            </div>

            {/* MULTI-DROPDOWNS AND SLIDER SUB-GRID */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
              <div className="space-y-1.5">
                <label className="block text-[10px] font-black uppercase tracking-widest text-gray-300 ml-1">
                  Transmission
                </label>
                <select
                  name="transmission"
                  value={filters.transmission}
                  onChange={handleFilterChange}
                  className="w-full bg-gray-950 text-xs font-bold border border-gray-800 rounded-xl px-3.5 py-3 focus:outline-none focus:border-[#0C4587] focus:ring-1 focus:ring-[#0C4587] text-gray-300 appearance-none cursor-pointer"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`,
                    backgroundPosition: "right 0.5rem center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "1.5em 1.5em",
                  }}
                >
                  <option value="All">All Drive Modes</option>
                  <option value="Automatic">Automatic (Comfort)</option>
                  <option value="Manual">Manual (Stick Shift)</option>
                </select>
              </div>
              <div className="space-y-1.5">
                <label className="block text-[10px] font-black uppercase tracking-widest text-gray-300 ml-1">
                  Fuel Type
                </label>
                <select
                  name="fuelType"
                  value={filters.fuelType}
                  onChange={handleFilterChange}
                  className="w-full bg-gray-950 text-xs font-bold border border-gray-800 rounded-xl px-3.5 py-3 focus:outline-none focus:border-[#0C4587] focus:ring-1 focus:ring-[#0C4587] text-gray-300 appearance-none cursor-pointer"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`,
                    backgroundPosition: "right 0.5rem center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "1.5em 1.5em",
                  }}
                >
                  <option value="All">All Fuel Categories</option>
                  <option value="Petrol">Petrol</option>
                  <option value="Diesel">Diesel</option>
                  <option value="Electric">Electric EV</option>
                </select>
              </div>
              <div className="hidden space-y-1.5 sm:col-span-2 lg:col-span-1">
                <div className="flex items-center justify-between text-[10px] font-black uppercase tracking-widest text-gray-300 px-1">
                  <span className="flex items-center">
                    <CircleDollarSign className="w-3.5 h-3.5 mr-1" /> Max Price
                  </span>
                  <span className="text-[#5EBC23] bg-green-50 dark:bg-green-950/40 px-2 py-0.5 rounded-md">
                    ≤ ₹{filters.maxPrice.toLocaleString("en-IN")}/d
                  </span>
                </div>
                <div className="pt-2 flex items-center space-x-3 bg-gray-50 dark:bg-gray-950 px-3.5 py-2.5 rounded-xl border border-gray-200 dark:border-gray-800">
                  <span className="text-[10px] font-bold text-gray-800 dark:text-gray-200">
                    1.5K
                  </span>
                  <input
                    type="range"
                    name="maxPrice"
                    min="1500"
                    max="50000"
                    step="500"
                    value={filters.maxPrice}
                    onChange={handleFilterChange}
                    className="flex-1 h-1 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer accent-[#5EBC23]"
                  />
                  <span className="text-[10px] font-bold text-gray-800 dark:text-gray-200">
                    50K
                  </span>
                </div>
              </div>
            </div>

            {/* BOTTOM FILTER FOOTER */}
            <div className="pt-4 border-t border-gray-800/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <label className="relative flex items-center space-x-2.5 cursor-pointer select-none group">
                <div className="relative flex items-center justify-center">
                  <input
                    type="checkbox"
                    name="onlyAvailable"
                    checked={filters.onlyAvailable}
                    onChange={handleFilterChange}
                    className="peer w-4 h-4 rounded border-gray-300 dark:border-gray-700 text-[#5EBC23] focus:ring-[#5EBC23] bg-white dark:bg-gray-900 cursor-pointer transition-all"
                  />
                </div>
                <span className="text-[11px] font-bold text-gray-400 dark:text-gray-400 transition-colors">
                  Hide Rented Assets (Show Only Ready Cars)
                </span>
              </label>
              <div className="text-[9px] font-black uppercase tracking-widest flex items-center bg-gray-950 px-3 py-1.5 rounded-lg border border-dashed border-gray-700 text-gray-400">
                <CheckCircle2 className="w-3.5 h-3.5 mr-1.5 text-[#5EBC23]" />{" "}
                {filteredCars.length} Assets Found
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================= */}
      {/* VEHICLES DYNAMIC GRID CARDS SECTION         */}
      {/* ========================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-20">
        {filteredCars.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
            {filteredCars.map((car) => (
              <div
                key={car.id}
                className="bg-white dark:bg-[#0A1120] border border-gray-200 dark:border-gray-800 rounded-2xl p-4 sm:p-5 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 relative"
              >
                {/* Floating Tag */}
                {car.tag && (
                  <span className="absolute top-4 left-4 z-20 bg-gradient-to-r from-[#0C4587] to-[#0A3C73] text-white text-[8px] sm:text-[9px] uppercase font-black tracking-widest px-2.5 py-1 rounded-full shadow-md border border-[#0C4587]">
                    <Sparkles className="w-2.5 h-2.5 mr-1 text-yellow-300 fill-yellow-300 inline" />{" "}
                    {car.tag}
                  </span>
                )}

                {/* Status Badge Top Right */}
                <span
                  className={`absolute top-4 right-4 z-20 text-[9px] font-black px-2.5 py-1 rounded-full uppercase tracking-wider border ${
                    car.isAvailable
                      ? "bg-green-50 dark:bg-green-950/30 text-green-600 border-green-200/50 dark:border-green-900/30"
                      : "bg-red-50 dark:bg-red-950/30 text-red-500 border-red-200/50 dark:border-red-900/30"
                  }`}
                >
                  {car.isAvailable ? "Ready" : "Rented"}
                </span>

                {/* Car Image Area with transparent Background */}
                <div className="relative w-full h-40 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900/50 dark:to-gray-950 border border-gray-100 dark:border-gray-800/50 rounded-xl mb-4 overflow-hidden flex items-center justify-center group-hover:border-[#5EBC23]/30 transition-colors">
                  <img
                    src={car.carImage}
                    alt={car.name}
                    className="w-[85%] h-auto object-contain drop-shadow-xl group-hover:scale-110 transition-transform duration-500 ease-out"
                  />
                </div>

                <div className="space-y-4 flex-1 flex flex-col">
                  {/* Title Block */}
                  <div>
                    <span className="text-[9px] font-black text-gray-700 dark:text-gray-400 uppercase tracking-widest block mb-0.5">
                      {car.brand} • {car.category}
                    </span>
                    <h3 className="text-base sm:text-lg font-black text-gray-900 dark:text-white tracking-tight leading-tight group-hover:text-[#0C4587] dark:group-hover:text-[#5EBC23] transition-colors truncate">
                      {car.name}
                    </h3>
                  </div>

                  {/* Specifications Grid */}
                  <div className="grid grid-cols-2 gap-2 mt-auto">
                    <div className="flex items-center space-x-2 bg-gray-100 dark:bg-gray-900/50 p-2 rounded-lg border border-gray-100 dark:border-gray-800 text-[10px] font-bold text-black dark:text-gray-400">
                      <Gauge className="w-3.5 h-3.5 text-gray-400" />
                      <span className="truncate">{car.transmission}</span>
                    </div>
                    <div className="flex items-center space-x-2 bg-gray-100 dark:bg-gray-900/50 p-2 rounded-lg border border-gray-100 dark:border-gray-800 text-[10px] font-bold text-black dark:text-gray-400">
                      <Fuel className="w-3.5 h-3.5 text-gray-400" />
                      <span className="truncate">{car.fuel}</span>
                    </div>
                    <div className="flex items-center space-x-2 bg-gray-100 dark:bg-gray-900/50 p-2 rounded-lg border border-gray-100 dark:border-gray-800 text-[10px] font-bold text-black dark:text-gray-400">
                      <Users className="w-3.5 h-3.5 text-gray-400" />
                      <span>{car.seats} Seats</span>
                    </div>
                    <div className="flex items-center space-x-2 bg-gray-100 dark:bg-gray-900/50 p-2 rounded-lg border border-gray-100 dark:border-gray-800 text-[10px] font-bold text-black dark:text-gray-400">
                      <Briefcase className="w-3.5 h-3.5 text-gray-400" />
                      <span>{car.bags} Bags</span>
                    </div>
                  </div>
                </div>

                {/* Card Footer Block */}
                <div className="pt-4 border-t border-gray-100 dark:border-gray-800 mt-4 flex items-center justify-between">
                  <div className="hidden">
                    <span className="text-[9px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest block leading-none mb-1">
                      Daily Rate
                    </span>
                    <div className="flex items-baseline">
                      <span className="text-lg font-black text-gray-900 dark:text-white tracking-tight">
                        ₹{car.pricePerDay.toLocaleString("en-IN")}
                      </span>
                      <span className="text-[9px] font-bold text-gray-500 ml-0.5">
                        /Day
                      </span>
                    </div>
                  </div>

                  <Link
                    href={
                      car.isAvailable
                        ? `/booking?carId=${encodeURIComponent(car.name)}`
                        : "#"
                    }
                    className={`inline-flex items-center justify-center font-black text-[10px] sm:text-xs uppercase tracking-wider px-4 py-2.5 rounded-xl transition-all duration-300 group/btn shadow-sm ${
                      car.isAvailable
                        ? "bg-gray-100 dark:bg-gray-800 hover:bg-[#5EBC23] dark:hover:bg-[#5EBC23] border border-gray-200 dark:border-gray-700 hover:border-[#5EBC23] text-gray-700 dark:text-gray-300 hover:text-white"
                        : "bg-gray-50 dark:bg-gray-900 text-gray-400 dark:text-gray-600 border border-gray-100 dark:border-gray-800 cursor-not-allowed"
                    }`}
                  >
                    <span>{car.isAvailable ? "Reserve" : "Sold Out"}</span>
                    {car.isAvailable && (
                      <ArrowRight className="w-3.5 h-3.5 ml-1.5 group-hover/btn:translate-x-1 transition-transform" />
                    )}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Empty Filter State Case UI */
          <div className="text-center py-20 bg-white dark:bg-[#0A1120] border border-gray-200 dark:border-gray-800 rounded-3xl max-w-xl mx-auto space-y-4 shadow-sm">
            <Layers className="w-12 h-12 text-gray-300 dark:text-gray-700 mx-auto" />
            <h3 className="text-lg font-black text-gray-900 dark:text-white tracking-tight">
              No Vehicles Match Criteria
            </h3>
            <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 max-w-sm mx-auto font-medium">
              We couldn't track any fleet items matching your filtered inputs.
              Try adjusting the parameters or clearing the search.
            </p>
            <button
              onClick={resetFilters}
              className="mt-4 px-6 py-2.5 bg-[#0C4587] text-white text-xs font-black uppercase tracking-wider rounded-xl hover:bg-[#5EBC23] transition-colors"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* SECURITY FOOTNOTE BAR */}
        <div className="mt-12 bg-white dark:bg-[#0A1120] border border-gray-200 dark:border-gray-800 rounded-2xl p-5 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
          <div className="flex items-center space-x-3.5 text-left">
            <div className="p-2.5 bg-green-50 dark:bg-green-900/20 border border-green-100 dark:border-green-800/30 rounded-xl flex-shrink-0">
              <ShieldCheck className="w-5 h-5 text-[#5EBC23]" />
            </div>
            <div>
              <h4 className="font-black text-gray-900 dark:text-white text-sm sm:text-base">
                Carry-On Assured Protection
              </h4>
              <p className="text-[10px] sm:text-xs text-gray-500 dark:text-gray-400 font-medium mt-0.5">
                All vehicles undergo a 150-point diagnostic validation before
                checkout.
              </p>
            </div>
          </div>
          <Link
            href="/terms"
            className="text-[10px] sm:text-xs font-black text-[#0C4587] dark:text-[#5EBC23] hover:underline flex-shrink-0 flex items-center tracking-wide uppercase"
          >
            Review Terms <ChevronRight className="w-3.5 h-3.5 ml-0.5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
