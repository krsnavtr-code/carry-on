"use client";

import React from "react";
import Link from "next/link";
import {
  MapPin,
  TrendingUp,
  Sparkles,
  ArrowRight,
  Navigation,
  Map,
  BadgeCent,
} from "lucide-react";

// 1. TYPESCRIPT INTERFACES FOR TYPE SAFETY
interface RouteCard {
  id: string;
  source: string;
  destination: string;
  distance: string;
  duration: string;
  basePrice: number;
  routeType: "Business" | "Leisure" | "Gateway";
  tag?: string;
  popular?: boolean;
}

export default function PopularRoutes(): React.ReactElement {
  // 2. CURATED HIGH-TRAFFIC ROUTE DATA BLUEPRINT
  const routes: RouteCard[] = [
    {
      id: "route-01",
      source: "Delhi Hub",
      destination: "Agria (Taj Express)",
      distance: "230 KM",
      duration: "3.5 Hours",
      basePrice: 4499,
      routeType: "Leisure",
      tag: "Weekend Favorite",
      popular: true,
    },
    {
      id: "route-02",
      source: "Noida Sector 62",
      destination: "IGI Airport T3",
      distance: "38 KM",
      duration: "50 Mins",
      basePrice: 1499,
      routeType: "Business",
      tag: "Flat Airport Rate",
    },
    {
      id: "route-03",
      source: "Delhi NCR",
      destination: "Jaipur Pink City",
      distance: "270 KM",
      duration: "5 Hours",
      basePrice: 5499,
      routeType: "Gateway",
      tag: "Corporate Circuit",
    },
    {
      id: "route-04",
      source: "Delhi / Noida",
      destination: "Dehradun / Rishikesh",
      distance: "245 KM",
      duration: "4.5 Hours",
      basePrice: 4999,
      routeType: "Leisure",
      tag: "Himalayan Corridor",
      popular: true,
    },
    {
      id: "route-05",
      source: "Gurugram CyberCity",
      destination: "Chandigarh Express",
      distance: "260 KM",
      duration: "4 Hours",
      basePrice: 5199,
      routeType: "Business",
    },
    {
      id: "route-06",
      source: "Delhi Hub",
      destination: "Haridwar Divine",
      distance: "210 KM",
      duration: "4 Hours",
      basePrice: 3999,
      routeType: "Gateway",
    },
  ];

  return (
    <section className="bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors duration-300 py-12 relative overflow-hidden">
      {/* Background Decorative Mesh Elements */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#0C4587]/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* SECTION HEADER BLOCK */}
        <div className="text-center space-y-4 max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-black tracking-tight text-gray-900 dark:text-white leading-none">
            Popular{" "}
            <span className="bg-gradient-to-r from-[#0C4587] to-[#5EBC23] bg-clip-text text-transparent">
              Routes
            </span>{" "}
            & Lines
          </h2>
          <p className="text-xs md:text-sm font-semibold">
            Fixed flat rate packages optimized for popular regional circuits.
            Zero hidden toll surcharge surprises.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-[#0C4587] to-[#5EBC23] mx-auto rounded-full" />
        </div>

        {/* 3-COLUMN RESPONSIVE ROUTES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {routes.map((route) => (
            <div
              key={route.id}
              className={`bg-white dark:bg-gray-900 border rounded-xl p-2 md:p-6 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative group hover:-translate-y-1 ${
                route.popular
                  ? "border-blue-500/40 ring-4 ring-blue-500/5"
                  : "border-gray-200 dark:border-gray-900 hover:border-gray-200"
              }`}
            >
              {/* Floating Route Badge */}
              {route.tag && (
                <span className="absolute -top-3 left-6 bg-gradient-to-r from-[#0C4587] to-blue-600 text-white text-[9px] uppercase font-black tracking-widest px-3 py-1 rounded-full shadow-sm">
                  <Sparkles className="w-2.5 h-2.5 mr-1 text-yellow-300 fill-yellow-300 inline" />{" "}
                  {route.tag}
                </span>
              )}

              <div className="space-y-3 pt-2">
                {/* Visual Trajectory Representation Node */}
                <div className="flex items-start space-x-4 relative">
                  {/* Vertical Dash Line Layout */}
                  <div className="absolute left-5.5 top-7 bottom-7 w-0.5 border-l-2 border-dashed border-gray-200 dark:border-gray-800" />

                  <div className="space-y-6 w-full">
                    {/* Source Block */}
                    <div className="flex items-center space-x-3">
                      <div className="w-4 h-4 rounded-full bg-blue-100 dark:bg-blue-950 flex items-center justify-center border border-[#0C4587]">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#0C4587]" />
                      </div>
                      <div>
                        <span className="text-[10px] uppercase font-bold border-gray-200tracking-wider block">
                          Origin
                        </span>
                        <h4 className="text-sm font-bold text-gray-600 dark:text-gray-400">
                          {route.source}
                        </h4>
                      </div>
                    </div>

                    {/* Destination Block */}
                    <div className="flex items-center space-x-3">
                      <div className="w-4 h-4 rounded-full bg-green-100 dark:bg-green-950 flex items-center justify-center border border-[#5EBC23]">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#5EBC23]" />
                      </div>
                      <div>
                        <span className="text-[10px] uppercase font-bold border-gray-200tracking-wider block">
                          Destination Corridor
                        </span>
                        <h4 className="text-base font-black text-gray-900 dark:text-white group-hover:text-[#0C4587] dark:group-hover:text-blue-400 transition-colors">
                          {route.destination}
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Metadata Horizontal Badges (Distance / Duration) */}
                <div className="grid grid-cols-2 gap-3 bg-gray-50 dark:bg-gray-950 px-3 py-1.5 rounded-2xl border border-gray-200 dark:border-gray-800/40 text-xs font-bold text-gray-600 dark:text-gray-400">
                  <div className="flex items-center space-x-1.5">
                    <Map className="w-3.5 h-3.5 text-gray-600 dark:text-gray-400" />
                    <span>{route.distance}</span>
                  </div>
                  <div className="flex items-center space-x-1.5 border-l border-gray-200 dark:border-gray-800 pl-3">
                    <Navigation className="w-3.5 h-3.5 text-gray-600 dark:text-gray-400" />
                    <span>{route.duration}</span>
                  </div>
                </div>
              </div>

              {/* Pricing & Booking Query Forward CTA Footer */}
              <div className="mt-6 pt-4 border-t border-gray-50 dark:border-gray-800/50 flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-bold border-gray-200uppercase tracking-widest block">
                    Flat Standard Rate
                  </span>
                  <div className="flex items-baseline">
                    <span className="text-xl font-black text-gray-900 dark:text-white">
                      ₹{route.basePrice.toLocaleString("en-IN")}
                    </span>
                    <span className="text-[10px] font-bold border-gray-200ml-0.5">
                      /One-Way
                    </span>
                  </div>
                </div>

                {/* Pre-formatted url link queries parameters targeting dynamic booking wizard component */}
                <Link
                  href={`/booking?pickup=${encodeURIComponent(route.source)}&dropoff=${encodeURIComponent(route.destination)}`}
                  className="inline-flex items-center justify-center bg-gray-50 dark:bg-gray-950 hover:bg-[#5EBC23] border border-gray-200 dark:border-gray-800 text-gray-700 dark:text-gray-300 hover:text-white p-3 rounded-xl transition-all duration-200 group/btn shadow-sm"
                >
                  <span className="text-xs font-black uppercase tracking-wider hidden group-hover:inline mr-1.5 animate-fade-in">
                    Book Line
                  </span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
