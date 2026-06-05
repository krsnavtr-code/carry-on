"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  TrendingUp,
  Sparkles,
  ArrowRight,
  Navigation,
  Map,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

// 1. TYPESCRIPT INTERFACES FOR TYPE SAFETY
interface RouteCard {
  id: string;
  source: string;
  destination: string;
  distance: string;
  duration: string;
  carImage: string;
  routeType: "Business" | "Leisure" | "Gateway";
  tag?: string;
  popular?: boolean;
}

export default function PopularRoutes(): React.ReactElement {
  // Carousel reference and hover state
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  // 2. CURATED HIGH-TRAFFIC ROUTE DATA BLUEPRINT
  const routes: RouteCard[] = [
    {
      id: "route-01",
      source: "Delhi Hub",
      destination: "Agra (Taj Express)",
      distance: "230 KM",
      duration: "3.5 Hours",
      carImage:
        "https://purepng.com/public/uploads/large/purepng.com-mercedes-benz-s-class-white-carcarvehicletransportmercedes-benz-961524662241hax8w.png",
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
        "https://purepng.com/public/uploads/large/purepng.com-audi-sedan-carcarvehicletransportaudi-961524662489ziz3a.png",
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
        "https://purepng.com/public/uploads/large/purepng.com-suv-carcarvehicletransportsuv-961524662194c6wte.png",
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
        "https://purepng.com/public/uploads/large/purepng.com-bmw-x6-blue-carcarbmwvehicletransport-961524663189m2lse.png",
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
        "https://purepng.com/public/uploads/large/purepng.com-audi-sedan-carcarvehicletransportaudi-961524662489ziz3a.png",
      routeType: "Business",
    },
    {
      id: "route-06",
      source: "Delhi Hub",
      destination: "Haridwar Divine",
      distance: "210 KM",
      duration: "4 Hours",
      carImage:
        "https://purepng.com/public/uploads/large/purepng.com-suv-carcarvehicletransportsuv-961524662194c6wte.png",
      routeType: "Gateway",
    },
  ];

  // 3. AUTO-SCROLL LOGIC (Pauses on hover)
  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        const cardElement = scrollRef.current.children[0] as HTMLElement;
        if (!cardElement) return;

        const cardWidth = cardElement.offsetWidth;
        const gap = 16; // Matches gap-4 (1rem = 16px)
        const scrollAmount = cardWidth + gap;

        // Smooth rewind if at the end
        if (scrollLeft + clientWidth >= scrollWidth - 10) {
          scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          scrollRef.current.scrollBy({
            left: scrollAmount,
            behavior: "smooth",
          });
        }
      }
    }, 3500);

    return () => clearInterval(interval);
  }, [isHovered]);

  // 4. MANUAL SCROLL LOGIC FOR ARROWS
  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const cardElement = scrollRef.current.children[0] as HTMLElement;
      if (!cardElement) return;

      const cardWidth = cardElement.offsetWidth;
      const gap = 16; // Matches gap-4
      const scrollAmount = cardWidth + gap;

      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="relative text-gray-900 dark:text-gray-100 py-12 md:py-16 overflow-hidden z-0">
      {/* ========================================= */}
      {/* 1. THEMATIC BACKGROUND IMAGE & OVERLAYS     */}
      {/* ========================================= */}

      {/* Parallax Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed bg-no-repeat -z-30"
        style={{
          // Ek premium highway/journey image use ki hai
          backgroundImage:
            "url('https://www.trivixam.com/api/upload/file/banner-31052026-0808.png')",
        }}
      />

      {/* Frosted Glassmorphism Overlay (Adapts to Light/Dark Mode) */}
      <div className="absolute inset-0 bg-white/10 dark:bg-[#050B14]/90 backdrop-blur-[1.5px] transition-colors duration-300 -z-20" />

      {/* Brand Color Ambient Radial Mesh (Blue & Green) */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#0C4587]/10 dark:bg-[#0C4587]/20 rounded-full blur-[100px] pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#5EBC23]/10 dark:bg-[#5EBC23]/15 rounded-full blur-[100px] pointer-events-none -z-10" />

      {/* Custom CSS to hide scrollbar */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        .hide-scroll::-webkit-scrollbar { display: none; }
        .hide-scroll { -ms-overflow-style: none; scrollbar-width: none; }
      `,
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 md:space-y-10 relative z-10">
        {/* SECTION HEADER BLOCK */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-white/60 dark:bg-gray-900/60 backdrop-blur-md border border-blue-100/50 dark:border-gray-800/50 rounded-full mb-2 shadow-sm transition-colors duration-300">
            <TrendingUp className="w-3 h-3 text-[#0C4587] dark:text-blue-400" />
            <span className="text-[9px] font-black text-[#0C4587] dark:text-gray-200 uppercase tracking-widest">
              Top Destinations
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-white leading-tight drop-shadow-sm">
            Popular{" "}
            <span className="bg-gradient-to-r from-[#0C4587] to-[#5EBC23] bg-clip-text text-transparent">
              Routes
            </span>{" "}
            & Lines
          </h2>
          <p className="text-xs sm:text-sm font-bold text-white max-w-4xl mx-auto">
            Fixed flat rate packages optimized for popular regional circuits.
            Select a route and choose your perfect ride with Carry On Car Rental
            Pvt. Ltd.
          </p>
        </div>

        {/* AUTO-SCROLLING CAROUSEL WRAPPER WITH HOVER GROUP */}
        <div
          className="relative -mx-4 px-4 sm:mx-0 sm:px-0 group/carousel"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onTouchStart={() => setIsHovered(true)}
          onTouchEnd={() => setIsHovered(false)}
        >
          {/* LEFT SCROLL ARROW */}
          <button
            onClick={() => scroll("left")}
            className="absolute left-2 sm:-left-5 top-1/2 -translate-y-1/2 z-20 bg-white/90 dark:bg-gray-800/90 backdrop-blur-md border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 p-2.5 rounded-full shadow-xl opacity-0 group-hover/carousel:opacity-100 hover:text-[#0C4587] dark:hover:text-[#5EBC23] hover:scale-110 transition-all duration-300 focus:outline-none"
            aria-label="Scroll Left"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* RIGHT SCROLL ARROW */}
          <button
            onClick={() => scroll("right")}
            className="absolute right-2 sm:-right-5 top-1/2 -translate-y-1/2 z-20 bg-white/90 dark:bg-gray-800/90 backdrop-blur-md border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 p-2.5 rounded-full shadow-xl opacity-0 group-hover/carousel:opacity-100 hover:text-[#0C4587] dark:hover:text-[#5EBC23] hover:scale-110 transition-all duration-300 focus:outline-none"
            aria-label="Scroll Right"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* THE SLIDER CONTAINER */}
          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto snap-x snap-mandatory hide-scroll pb-8 pt-2 scroll-smooth"
          >
            {routes.map((route) => (
              <Link
                href={`/booking?pickup=${encodeURIComponent(
                  route.source,
                )}&dropoff=${encodeURIComponent(route.destination)}`}
                key={route.id}
                className={`snap-start shrink-0 max-w-[300px] w-[75vw] sm:w-[280px] md:w-[300px] lg:w-[320px] bg-white/95 dark:bg-[#0A1120]/95 backdrop-blur-md border rounded-2xl p-4 sm:p-5 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between relative group hover:-translate-y-1 cursor-pointer ${
                  route.popular
                    ? "border-blue-200 dark:border-blue-900/60 ring-4 ring-blue-50/50 dark:ring-blue-900/20"
                    : "border-white/50 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700"
                }`}
              >
                {/* Floating Route Badge */}
                {route.tag && (
                  <span className="absolute -top-2.5 left-5 bg-gradient-to-r from-[#0C4587] to-[#0A3C73] text-white text-[8px] sm:text-[9px] uppercase font-black tracking-widest px-2.5 py-1 rounded-full shadow-md border border-[#0C4587] z-20">
                    <Sparkles className="w-2.5 h-2.5 mr-1 text-yellow-300 fill-yellow-300 inline" />{" "}
                    {route.tag}
                  </span>
                )}

                <div className="space-y-4 pt-1.5">
                  {/* Visual Trajectory Representation Node */}
                  <div className="flex items-start space-x-3.5 relative">
                    <div className="absolute left-1.5 top-5 bottom-5 w-px border-l border-dashed border-gray-300 dark:border-gray-700" />

                    <div className="space-y-4 w-full">
                      {/* Source Block */}
                      <div className="flex items-center space-x-2.5">
                        <div className="w-3.5 h-3.5 rounded-full bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center border border-[#0C4587] relative z-10 group-hover:scale-110 transition-transform">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#0C4587]" />
                        </div>
                        <div>
                          <span className="text-[9px] uppercase font-black text-gray-400 dark:text-gray-500 tracking-wider block leading-none mb-0.5">
                            Origin
                          </span>
                          <h4 className="text-xs sm:text-sm font-bold text-gray-800 dark:text-gray-200 leading-tight truncate max-w-[180px]">
                            {route.source}
                          </h4>
                        </div>
                      </div>

                      {/* Destination Block */}
                      <div className="flex items-center space-x-2.5">
                        <div className="w-3.5 h-3.5 rounded-full bg-green-50 dark:bg-green-900/30 flex items-center justify-center border border-[#5EBC23] relative z-10 group-hover:scale-110 transition-transform">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#5EBC23]" />
                        </div>
                        <div>
                          <span className="text-[9px] uppercase font-black text-gray-400 dark:text-gray-500 tracking-wider block leading-none mb-0.5">
                            Destination
                          </span>
                          <h4 className="text-xs sm:text-sm font-black text-gray-900 dark:text-white group-hover:text-[#0C4587] dark:group-hover:text-[#5EBC23] transition-colors leading-tight truncate max-w-[180px]">
                            {route.destination}
                          </h4>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Metadata Horizontal Badges (Distance / Duration) */}
                  <div className="flex items-center gap-2 bg-gray-50/80 dark:bg-gray-900/50 px-3 py-2 rounded-xl border border-gray-100 dark:border-gray-800 text-[10px] font-bold text-gray-600 dark:text-gray-400">
                    <div className="flex items-center gap-1.5 flex-1 justify-center">
                      <Map className="w-3 h-3 text-gray-400" />
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
                  {/* The Car Photo (with hover animation) */}
                  <div className="relative h-10 w-28 -ml-2 -mb-1">
                    <img
                      src={route.carImage}
                      alt="Fleet Car"
                      className="w-full h-full object-contain object-left drop-shadow-lg group-hover:translate-x-3 transition-transform duration-500 ease-out"
                    />
                  </div>

                  {/* Booking Link "Span" */}
                  <div className="inline-flex items-center justify-center bg-gray-100 dark:bg-gray-800 group-hover:bg-[#5EBC23] dark:group-hover:bg-[#5EBC23] border border-gray-200 dark:border-gray-700 group-hover:border-[#5EBC23] text-gray-700 dark:text-gray-300 group-hover:text-white p-2.5 rounded-xl transition-all duration-300 shadow-sm z-10">
                    <span className="text-[10px] font-black uppercase tracking-wider hidden group-hover:inline mr-1.5 animate-fade-in">
                      Book
                    </span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
