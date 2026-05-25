"use client";

import React, { useState, useMemo } from "react";
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
} from "lucide-react";

// 1. TYPE DEFINITIONS FOR STRIC TYPE-SAFETY
interface CarVehicle {
  id: string;
  name: string;
  brand: string;
  type: "Luxury" | "SUV" | "Sedan" | "Electric" | "Economy";
  transmission: "Automatic" | "Manual";
  fuel: string;
  seats: number;
  bags: number;
  pricePerDay: number;
  imageText: string;
  isAvailable: boolean;
  tag?: string;
}

export default function OurCars(): React.ReactElement {
  // 2. STATIC INVENTORY DATA (MERN Stack Backend Data Layout Blueprint)
  const carsInventory: CarVehicle[] = [
    {
      id: "car-01",
      name: "BMW 5 Series",
      brand: "BMW",
      type: "Luxury",
      transmission: "Automatic",
      fuel: "Petrol/Diesel",
      seats: 5,
      bags: 3,
      pricePerDay: 12500,
      imageText: "✨ Premium Cockpit Luxury",
      isAvailable: true,
      tag: "Top Executive Tier",
    },
    {
      id: "car-02",
      name: "Toyota Fortuner 4x4",
      brand: "Toyota",
      type: "SUV",
      transmission: "Automatic",
      fuel: "Diesel",
      seats: 7,
      bags: 5,
      pricePerDay: 8500,
      imageText: "🏔️ All-Terrain Terrain Dominance",
      isAvailable: true,
      tag: "Adventure Preferred",
    },
    {
      id: "car-03",
      name: "Tesla Model Y",
      brand: "Tesla",
      type: "Electric",
      transmission: "Automatic",
      fuel: "Electric (450km)",
      seats: 5,
      bags: 3,
      pricePerDay: 15000,
      imageText: "⚡ Long Range Eco-Performance",
      isAvailable: true,
      tag: "Eco Choice",
    },
    {
      id: "car-04",
      name: "Maruti Suzuki Ciaz",
      brand: "Suzuki",
      type: "Sedan",
      transmission: "Manual",
      fuel: "Petrol",
      seats: 5,
      bags: 2,
      pricePerDay: 3500,
      imageText: "💼 Smooth Corporate Cruiser",
      isAvailable: true,
    },
    {
      id: "car-05",
      name: "Hyundai i20 N-Line",
      brand: "Hyundai",
      type: "Economy",
      transmission: "Automatic",
      fuel: "Petrol",
      seats: 5,
      bags: 2,
      pricePerDay: 2200,
      imageText: "🚀 Hot Hatch City Agility",
      isAvailable: true,
      tag: "Best Fuel Economy",
    },
    {
      id: "car-06",
      name: "Audi e-tron",
      brand: "Audi",
      type: "Electric",
      transmission: "Automatic",
      fuel: "Electric (400km)",
      seats: 5,
      bags: 4,
      pricePerDay: 18000,
      imageText: "🔋 Futuristic Premium EV",
      isAvailable: false,
    },
    // ----------------- ADDED 20 MORE CARS -----------------
    {
      id: "car-07",
      name: "Mercedes-Benz E-Class",
      brand: "Mercedes",
      type: "Luxury",
      transmission: "Automatic",
      fuel: "Diesel",
      seats: 5,
      bags: 4,
      pricePerDay: 14500,
      imageText: "👑 Ultimate Rear-Seat Comfort",
      isAvailable: true,
      tag: "Chauffeur Preferred",
    },
    {
      id: "car-08",
      name: "Mahindra XUV700 AX7",
      brand: "Mahindra",
      type: "SUV",
      transmission: "Automatic",
      fuel: "Diesel",
      seats: 7,
      bags: 4,
      pricePerDay: 4800,
      imageText: "🤖 Smart Adrenox Cockpit",
      isAvailable: true,
      tag: "Family Favorite",
    },
    {
      id: "car-09",
      name: "Tata Nexon EV Max",
      brand: "Tata",
      type: "Electric",
      transmission: "Automatic",
      fuel: "Electric (350km)",
      seats: 5,
      bags: 2,
      pricePerDay: 3800,
      imageText: "⚡ Green Highway Cruiser",
      isAvailable: true,
      tag: "Top Rated EV",
    },
    {
      id: "car-10",
      name: "Honda City ZX",
      brand: "Honda",
      type: "Sedan",
      transmission: "Automatic",
      fuel: "Petrol",
      seats: 5,
      bags: 3,
      pricePerDay: 3200,
      imageText: "📈 Timeless Comfort & VTEC Power",
      isAvailable: true,
    },
    {
      id: "car-11",
      name: "Maruti Suzuki Swift",
      brand: "Suzuki",
      type: "Economy",
      transmission: "Manual",
      fuel: "Petrol",
      seats: 5,
      bags: 1,
      pricePerDay: 1500,
      imageText: "🏙️ Ultra Compact City Zip",
      isAvailable: true,
      tag: "Pocket Friendly",
    },
    {
      id: "car-12",
      name: "Range Rover Sport",
      brand: "Land Rover",
      type: "Luxury",
      transmission: "Automatic",
      fuel: "Petrol",
      seats: 5,
      bags: 5,
      pricePerDay: 25000,
      imageText: "🏰 Royal Elegance on Wheels",
      isAvailable: true,
      tag: "Ultra Premium",
    },
    {
      id: "car-13",
      name: "Hyundai Creta SX(O)",
      brand: "Hyundai",
      type: "SUV",
      transmission: "Automatic",
      fuel: "Petrol",
      seats: 5,
      bags: 3,
      pricePerDay: 3500,
      imageText: "🌅 Panoromic Skyway Explorer",
      isAvailable: true,
    },
    {
      id: "car-14",
      name: "BYD Atto 3",
      brand: "BYD",
      type: "Electric",
      transmission: "Automatic",
      fuel: "Electric (420km)",
      seats: 5,
      bags: 3,
      pricePerDay: 6500,
      imageText: "🌌 High-Tech Avant-Garde Cabin",
      isAvailable: true,
    },
    {
      id: "car-15",
      name: "Hyundai Verna Turbo",
      brand: "Hyundai",
      type: "Sedan",
      transmission: "Automatic",
      fuel: "Petrol",
      seats: 5,
      bags: 3,
      pricePerDay: 3800,
      imageText: "🌪️ Aggressive Futuristic Performance",
      isAvailable: true,
      tag: "Trending Sedan",
    },
    {
      id: "car-16",
      name: "Tata Altroz iCNG",
      brand: "Tata",
      type: "Economy",
      transmission: "Manual",
      fuel: "CNG/Petrol",
      seats: 5,
      bags: 2,
      pricePerDay: 1800,
      imageText: "🛡️ 5-Star Safety Twin Cylinder",
      isAvailable: true,
    },
    {
      id: "car-17",
      name: "Porsche 911 Carrera",
      brand: "Porsche",
      type: "Luxury",
      transmission: "Automatic",
      fuel: "Petrol",
      seats: 2,
      bags: 1,
      pricePerDay: 45000,
      imageText: "🏁 Track-Ready Heritage Sports",
      isAvailable: false,
      tag: "Exotic Asset",
    },
    {
      id: "car-18",
      name: "Kia Seltos Facelift",
      brand: "Kia",
      type: "SUV",
      transmission: "Automatic",
      fuel: "Diesel",
      seats: 5,
      bags: 3,
      pricePerDay: 3900,
      imageText: "✨ Sharp Sophisticated Urban SUV",
      isAvailable: true,
    },
    {
      id: "car-19",
      name: "MG ZS EV",
      brand: "MG",
      type: "Electric",
      transmission: "Automatic",
      fuel: "Electric (380km)",
      seats: 5,
      bags: 3,
      pricePerDay: 4500,
      imageText: "🇬🇧 Connected British Tech EV",
      isAvailable: true,
    },
    {
      id: "car-20",
      name: "Skoda Slavia 1.5 TSI",
      brand: "Skoda",
      type: "Sedan",
      transmission: "Automatic",
      fuel: "Petrol",
      seats: 5,
      bags: 4,
      pricePerDay: 4200,
      imageText: "🇩🇪 Solid European Performance",
      isAvailable: true,
      tag: "Enthusiast Choice",
    },
    {
      id: "car-21",
      name: "Renault Triber",
      brand: "Renault",
      type: "Economy",
      transmission: "Manual",
      fuel: "Petrol",
      seats: 7,
      bags: 2,
      pricePerDay: 2000,
      imageText: "🎒 Modular Budget 7-Seater Space",
      isAvailable: true,
    },
    {
      id: "car-22",
      name: "Jaguar F-Pace",
      brand: "Jaguar",
      type: "Luxury",
      transmission: "Automatic",
      fuel: "Diesel",
      seats: 5,
      bags: 4,
      pricePerDay: 19500,
      imageText: "🐆 Aggressive Luxury Performance SUV",
      isAvailable: true,
    },
    {
      id: "car-23",
      name: "Mahindra Scorpio-N",
      brand: "Mahindra",
      type: "SUV",
      transmission: "Manual",
      fuel: "Diesel",
      seats: 7,
      bags: 3,
      pricePerDay: 4500,
      imageText: "🦁 Big Daddy of SUVs",
      isAvailable: true,
    },
    {
      id: "car-24",
      name: "BMW i4",
      brand: "BMW",
      type: "Electric",
      transmission: "Automatic",
      fuel: "Electric (480km)",
      seats: 5,
      bags: 3,
      pricePerDay: 22000,
      imageText: "⚡ Pure Luxury Grand Coupe EV",
      isAvailable: true,
      tag: "Elite EV",
    },
    {
      id: "car-25",
      name: "Volkswagen Virtus GT",
      brand: "Volkswagen",
      type: "Sedan",
      transmission: "Automatic",
      fuel: "Petrol",
      seats: 5,
      bags: 4,
      pricePerDay: 4500,
      imageText: "🔥 High-Octane German Driving Vibe",
      isAvailable: true,
      tag: "Top Speed Tier",
    },
    {
      id: "car-26",
      name: "Maruti Suzuki Baleno",
      brand: "Suzuki",
      type: "Economy",
      transmission: "Automatic",
      fuel: "Petrol",
      seats: 5,
      bags: 2,
      pricePerDay: 1800,
      imageText: "💎 Premium Comfort Budget Hatchback",
      isAvailable: true,
    },
  ];

  // 3. REACT STATES FOR SEARCH AND TABS FILTERING
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedTab, setSelectedTab] = useState<string>("All");

  const tabs: string[] = [
    "All",
    "Luxury",
    "SUV",
    "Electric",
    "Sedan",
    "Economy",
  ];

  // 4. SEARCH & FILTER PERFORMANCE ENGINE (Optimized Client-Side Query)
  const filteredCars = useMemo(() => {
    return carsInventory.filter((car) => {
      const matchesSearch =
        car.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        car.brand.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesTab = selectedTab === "All" || car.type === selectedTab;
      return matchesSearch && matchesTab;
    });
  }, [searchQuery, selectedTab]);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors duration-300 py-6 lg:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* HEADER HERO INFRASTRUCTURE */}
        <div className="text-center space-y-4 max-w-5xl mx-auto">
          <div className="inline-flex items-center space-x-2 bg-blue-50 dark:bg-blue-900/30 border border-blue-100 dark:border-blue-800/50 px-4 py-1.5 rounded-full shadow-sm">
            <CarIcon className="w-4 h-4 text-[#5EBC23]" />
            <span className="text-xs font-bold text-[#0C4587] dark:text-blue-300 tracking-wide uppercase">
              Carry-On Live Fleet Inventory
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-gray-900 dark:text-white">
            Explore Our{" "}
            <span className="bg-gradient-to-r from-[#0C4587] to-[#5EBC23] bg-clip-text text-transparent">
              Fleet
            </span>
          </h1>
          <p className="text-sm sm:text-base font-medium">
            Select from pristine economy hatchbacks, spacious family SUVs, to
            ultra-premium luxury vehicles. Transparent pricing with verified
            mechanical protection.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-[#0C4587] to-[#5EBC23] mx-auto rounded-full" />
        </div>

        {/* INTERACTIVE CONTROLS: SEARCH BAR & CATEGORIES */}
        <div className="space-y-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 p-2 md:p-3 rounded-2xl shadow-sm">
            {/* Search Input Box */}
            <div className="relative w-full md:w-96 flex items-center">
              <Search className="absolute left-4 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search by vehicle model or brand..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-gray-50 dark:bg-gray-950 text-sm border border-gray-100 dark:border-gray-800 rounded-xl pl-11 pr-4 py-3 focus:outline-none focus:border-blue-500 transition-all text-gray-800 dark:text-gray-200"
              />
            </div>

            {/* Segment Category Nav-Tabs */}
            <div className="flex items-center space-x-1.5 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setSelectedTab(tab)}
                  className={`px-4 py-2.5 rounded-xl text-xs font-bold tracking-wide uppercase whitespace-nowrap transition-all cursor-pointer ${
                    selectedTab === tab
                      ? "bg-[#0C4587] text-white shadow-md shadow-blue-900/10"
                      : "bg-gray-50 dark:bg-gray-950 text-gray-500 hover:text-gray-800 dark:hover:text-gray-200 border border-gray-100 dark:border-gray-800/80"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* VEHICLES DYNAMIC CARDS GRID DISPLAY */}
        {filteredCars.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 items-stretch">
            {filteredCars.map((car) => (
              <div
                key={car.id}
                className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 relative"
              >
                {/* Custom Brand Floating Tags */}
                {car.tag && (
                  <span className="absolute top-4 left-4 z-10 bg-gradient-to-r from-[#5EBC23] to-green-600 text-white text-[9px] uppercase font-black tracking-widest px-3 py-1 rounded-full shadow-sm flex items-center">
                    <Sparkles className="w-2.5 h-2.5 mr-1 text-yellow-200 fill-yellow-200" />{" "}
                    {car.tag}
                  </span>
                )}

                <div>
                  {/* Pseudo Placeholder Image Section (Tailwind Graphic Panel) */}
                  <div className="w-full h-48 bg-gradient-to-br from-gray-100 via-gray-50 to-gray-200 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 border-b border-gray-50 dark:border-gray-800/50 flex flex-col items-center justify-center p-4 text-center group-hover:from-blue-50/30 group-hover:to-green-50/10 transition-colors">
                    <CarIcon className="w-16 h-16 text-gray-300 dark:text-gray-800 group-hover:scale-110 group-hover:text-[#0C4587] dark:group-hover:text-blue-500/50 transition-all duration-300" />
                    <span className="text-[11px] font-bold text-gray-400 dark:text-gray-500 mt-3 uppercase tracking-wider font-mono">
                      {car.imageText || "📦 High-Performance Fleet Frame"}
                    </span>
                  </div>

                  {/* Body Specs Structure */}
                  <div className="p-4 space-y-1.5">
                    <div className="flex items-start justify-between">
                      <div>
                        <span className="text-xs font-bold text-[#5EBC23] uppercase tracking-widest">
                          {car.type} Segment
                        </span>
                        <h3 className="text-xl font-black text-gray-900 dark:text-white mt-0.5 tracking-tight group-hover:text-[#0C4587] dark:group-hover:text-blue-400 transition-colors">
                          {car.name}
                        </h3>
                      </div>
                      <span
                        className={`text-[10px] font-black px-2.5 py-1 rounded-full uppercase tracking-wider border ${
                          car.isAvailable
                            ? "bg-green-50 dark:bg-green-950/30 text-green-600 border-green-200/50 dark:border-green-900/30"
                            : "bg-red-50 dark:bg-red-950/30 text-red-500 border-red-200/50 dark:border-red-900/30"
                        }`}
                      >
                        {car.isAvailable ? "Ready" : "Rented"}
                      </span>
                    </div>

                    {/* Specification Badges Horizontal Grid */}
                    <div className="grid grid-cols-2 gap-3 pt-2 text-xs font-bold">
                      <div className="flex items-center space-x-2 bg-gray-100 dark:bg-gray-950 p-2 rounded-xl border border-gray-100/50 dark:border-gray-800/40">
                        <Gauge className="w-3.5 h-3.5" />
                        <span>{car.transmission}</span>
                      </div>
                      <div className="flex items-center space-x-2 bg-gray-100 dark:bg-gray-950 p-2 rounded-xl border border-gray-100/50 dark:border-gray-800/40">
                        <Fuel className="w-3.5 h-3.5" />
                        <span className="truncate">{car.fuel}</span>
                      </div>
                      <div className="flex items-center space-x-2 bg-gray-100 dark:bg-gray-950 p-2 rounded-xl border border-gray-100/50 dark:border-gray-800/40">
                        <Users className="w-3.5 h-3.5" />
                        <span>{car.seats} Seats Cap</span>
                      </div>
                      <div className="flex items-center space-x-2 bg-gray-100 dark:bg-gray-950 p-2 rounded-xl border border-gray-100/50 dark:border-gray-800/40">
                        <Briefcase className="w-3.5 h-3.5" />
                        <span>{car.bags} Luggage Bags</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Pricing Block & Interactive Book Anchor Footer */}
                <div className="p-6 pt-0 border-t border-gray-50 dark:border-gray-800/50 mt-4 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest block">
                      Base Rental Rate
                    </span>
                    <div className="flex items-baseline space-x-0.5">
                      <span className="text-2xl font-black text-gray-900 dark:text-white tracking-tight">
                        ₹{car.pricePerDay.toLocaleString("en-IN")}
                      </span>
                      <span className="text-xs font-bold text-gray-600">
                        /Day
                      </span>
                    </div>
                  </div>

                  <Link
                    href={car.isAvailable ? "/booking" : "#"}
                    className={`inline-flex items-center justify-center font-bold text-xs uppercase tracking-wider px-5 py-3.5 rounded-xl transition-all duration-300 group ${
                      car.isAvailable
                        ? "bg-gradient-to-r from-[#0C4587] to-[#0A3C73] hover:from-[#5EBC23] hover:to-[#4CAF50] text-white shadow-md shadow-blue-900/10 hover:shadow-green-500/10"
                        : "bg-gray-100 dark:bg-gray-800 text-gray-400 dark:text-gray-600 cursor-not-allowed"
                    }`}
                  >
                    {car.isAvailable ? "Reserve" : "Sold Out"}
                    {car.isAvailable && (
                      <ArrowRight className="w-3.5 h-3.5 ml-1.5 group-hover:translate-x-1 transition-transform" />
                    )}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Empty Search Fallback State UI */
          <div className="text-center py-20 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-900 rounded-3xl max-w-xl mx-auto space-y-4 shadow-sm">
            <Layers className="w-12 h-12 text-gray-300 mx-auto" />
            <h3 className="text-lg font-bold text-gray-900 dark:text-white">
              No Vehicles Match Criteria
            </h3>
            <p className="text-xs sm:text-sm text-gray-400 max-w-xs mx-auto font-medium">
              We couldn't track any fleet items matching "{searchQuery}". Try
              revising your text query or changing segment filters.
            </p>
          </div>
        )}

        {/* SECURITY & TRUST MATRIX FOOTER BAR */}
        <div className="bg-gradient-to-br from-[#0C4587]/5 via-transparent to-[#5EBC23]/5 border border-blue-100/30 dark:border-blue-900/20 rounded-2xl p-6 lg:p-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-3.5 text-left">
            <div className="p-3 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-xl flex-shrink-0 shadow-sm">
              <ShieldCheck className="w-5 h-5 text-[#5EBC23]" />
            </div>
            <div>
              <h4 className="font-bold text-gray-900 dark:text-white text-base">
                Carry-On Assured Fleet Protection
              </h4>
              <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 font-medium">
                Every inventory listing incorporates deep sterilization routines
                and computerized diagnostic validation before checkout flags.
              </p>
            </div>
          </div>
          <Link
            href="/terms"
            className="text-xs sm:text-sm font-bold text-[#0C4587] dark:text-blue-400 hover:underline flex-shrink-0 flex items-center"
          >
            Review Operations Clause <ChevronRight className="w-4 h-4 ml-0.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
