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
} from "lucide-react";

// 1. TYPESCRIPT INTERFACES FOR TYPE SAFETY
interface RouteCard {
  id: string;
  source: string;
  destination: string;
  distance: string;
  duration: string;
  carImage: string; // BasePrice ki jagah Car ki photo add ki
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
      destination: "Agra (Taj Express)",
      distance: "230 KM",
      duration: "3.5 Hours",
      carImage:
        "https://www.trivixam.com/api/upload/file/banner-31052026-0808.png",
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
      carImage:
        "https://www.trivixam.com/api/upload/file/banner-31052026-0808.png",
      routeType: "Business",
      tag: "Flat Airport Rate",
    },
    {
      id: "route-03",
      source: "Delhi NCR",
      destination: "Jaipur Pink City",
      distance: "270 KM",
      duration: "5 Hours",
      carImage:
        "https://www.trivixam.com/api/upload/file/banner-31052026-0808.png",
      routeType: "Gateway",
      tag: "Corporate Circuit",
    },
    {
      id: "route-04",
      source: "Delhi / Noida",
      destination: "Dehradun / Rishikesh",
      distance: "245 KM",
      duration: "4.5 Hours",
      carImage:
        "https://www.trivixam.com/api/upload/file/banner-31052026-0808.png",
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
      carImage:
        "https://www.trivixam.com/api/upload/file/banner-31052026-0808.png",
      routeType: "Business",
    },
    {
      id: "route-06",
      source: "Delhi Hub",
      destination: "Haridwar Divine",
      distance: "210 KM",
      duration: "4 Hours",
      carImage:
        "https://www.trivixam.com/api/upload/file/banner-31052026-0808.png",
      routeType: "Gateway",
    },
  ];

  return (
    <section className="bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors duration-300 py-12 md:py-16 relative overflow-hidden">
      {/* Background Decorative Mesh Elements */}
      <div className="absolute top-0 right-1/4 w-72 h-72 bg-[#0C4587]/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 md:space-y-12">
        {/* SECTION HEADER BLOCK (Compacted) */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-blue-50 dark:bg-gray-900 border border-blue-100 dark:border-gray-800 rounded-full mb-2 shadow-sm transition-colors duration-300">
            <TrendingUp className="w-3 h-3 text-[#0C4587] dark:text-blue-400" />
            <span className="text-[9px] font-black text-[#0C4587] dark:text-gray-200 uppercase tracking-widest">
              Top Destinations
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-gray-900 dark:text-white leading-tight">
            Popular{" "}
            <span className="bg-gradient-to-r from-[#0C4587] to-[#5EBC23] bg-clip-text text-transparent">
              Routes
            </span>{" "}
            & Lines
          </h2>
          <p className="text-xs sm:text-sm font-medium text-gray-600 dark:text-gray-400">
            Fixed flat rate packages optimized for popular regional circuits.
            Select a route and choose your perfect ride.
          </p>
        </div>

        {/* 3-COLUMN RESPONSIVE ROUTES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {routes.map((route) => (
            <div
              key={route.id}
              className={`bg-white dark:bg-[#0A1120] border rounded-2xl p-4 sm:p-5 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative group hover:-translate-y-1 ${
                route.popular
                  ? "border-blue-200 dark:border-blue-900/50 ring-4 ring-blue-50 dark:ring-blue-900/10"
                  : "border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700"
              }`}
            >
              {/* Floating Route Badge */}
              {route.tag && (
                <span className="absolute -top-2.5 left-5 bg-gradient-to-r from-[#0C4587] to-[#0A3C73] text-white text-[8px] sm:text-[9px] uppercase font-black tracking-widest px-2.5 py-1 rounded-full shadow-md border border-[#0C4587]">
                  <Sparkles className="w-2.5 h-2.5 mr-1 text-yellow-300 fill-yellow-300 inline" />{" "}
                  {route.tag}
                </span>
              )}

              <div className="space-y-4 pt-1.5">
                {/* Visual Trajectory Representation Node */}
                <div className="flex items-start space-x-3.5 relative">
                  {/* Vertical Dash Line Layout */}
                  <div className="absolute left-1.5 top-5 bottom-5 w-px border-l border-dashed border-gray-300 dark:border-gray-700" />

                  <div className="space-y-4 w-full">
                    {/* Source Block */}
                    <div className="flex items-center space-x-2.5">
                      <div className="w-3.5 h-3.5 rounded-full bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center border border-[#0C4587] relative z-10">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#0C4587]" />
                      </div>
                      <div>
                        <span className="text-[9px] uppercase font-black text-gray-400 dark:text-gray-500 tracking-wider block leading-none mb-0.5">
                          Origin
                        </span>
                        <h4 className="text-xs sm:text-sm font-bold text-gray-700 dark:text-gray-300 leading-tight">
                          {route.source}
                        </h4>
                      </div>
                    </div>

                    {/* Destination Block */}
                    <div className="flex items-center space-x-2.5">
                      <div className="w-3.5 h-3.5 rounded-full bg-green-50 dark:bg-green-900/30 flex items-center justify-center border border-[#5EBC23] relative z-10">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#5EBC23]" />
                      </div>
                      <div>
                        <span className="text-[9px] uppercase font-black text-gray-400 dark:text-gray-500 tracking-wider block leading-none mb-0.5">
                          Destination Corridor
                        </span>
                        <h4 className="text-sm sm:text-base font-black text-gray-900 dark:text-white group-hover:text-[#0C4587] dark:group-hover:text-[#5EBC23] transition-colors leading-tight">
                          {route.destination}
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Metadata Horizontal Badges (Distance / Duration) */}
                <div className="flex items-center gap-2 bg-gray-50 dark:bg-gray-900/50 px-3 py-2 rounded-xl border border-gray-100 dark:border-gray-800 text-[10px] sm:text-xs font-bold text-gray-600 dark:text-gray-400">
                  <div className="flex items-center gap-1.5 flex-1 justify-center">
                    <Map className="w-3.5 h-3.5 text-gray-400" />
                    <span>{route.distance}</span>
                  </div>
                  <div className="w-px h-3 bg-gray-300 dark:bg-gray-700"></div>
                  <div className="flex items-center gap-1.5 flex-1 justify-center">
                    <Navigation className="w-3 h-3 text-gray-400" />
                    <span>{route.duration}</span>
                  </div>
                </div>
              </div>

              {/* Dynamic Car Photo & Booking Query CTA Footer */}
              <div className="mt-5 pt-4 border-t border-gray-100 dark:border-gray-800/80 flex items-center justify-between overflow-hidden">
                {/* The Car Photo Replacement (with hover animation) */}
                <div className="relative h-11 w-32 -ml-2 -mb-1">
                  <img
                    src={route.carImage}
                    alt="Fleet Car"
                    className="w-full h-full object-contain object-left drop-shadow-lg group-hover:translate-x-2 transition-transform duration-500 ease-out"
                  />
                </div>

                {/* Booking Link Button */}
                <Link
                  href={`/booking?pickup=${encodeURIComponent(route.source)}&dropoff=${encodeURIComponent(route.destination)}`}
                  className="inline-flex items-center justify-center bg-gray-100 dark:bg-gray-800 hover:bg-[#5EBC23] dark:hover:bg-[#5EBC23] border border-gray-200 dark:border-gray-700 hover:border-[#5EBC23] text-gray-700 dark:text-gray-300 hover:text-white p-2.5 rounded-xl transition-all duration-300 group/btn shadow-sm z-10"
                >
                  <span className="text-[10px] sm:text-xs font-black uppercase tracking-wider hidden group-hover:inline mr-1.5 animate-fade-in">
                    Book
                  </span>
                  <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
