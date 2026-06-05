"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ChevronDown,
  ChevronUp,
  ArrowRight,
  Car,
  Sparkles,
} from "lucide-react";

export default function AboutSection() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  const accordions = [
    {
      title: "Quality & Well-Maintained Fleet",
      content:
        "Our vehicles are regularly inspected and maintained to ensure safety, comfort, and top performance on every trip.",
    },
    {
      title: "Reliable Service You Can Trust",
      content:
        "We pride ourselves on transparent pricing with no hidden fees, ensuring a seamless rental experience from start to finish.",
    },
    {
      title: "Safety & Comfort First",
      content:
        "Every car in our fleet is equipped with the latest safety features and premium amenities for your absolute comfort.",
    },
  ];

  return (
    <section className="w-full bg-gray-50 dark:bg-gray-950 transition-colors duration-300 py-12 md:py-16 overflow-hidden relative">
      {/* Subtle Background Decoration matching your theme */}
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-[#5EBC23]/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-8 items-center">
          {/* ========================================= */}
          {/* LEFT COLUMN: OVERLAPPING IMAGE GALLERY    */}
          {/* ========================================= */}
          <div className="relative w-full max-w-sm mx-auto lg:max-w-[90%] aspect-[4/5] lg:aspect-square">
            {/* Main Back Image */}
            <div className="absolute top-0 left-0 w-[85%] h-[85%] rounded-[1.5rem] overflow-hidden shadow-sm border border-gray-200 dark:border-gray-800 transition-colors">
              <img
                src="https://images.unsplash.com/photo-1609521263047-f8f205293f24?q=80&w=1000&auto=format&fit=crop"
                alt="Luxury Car in City"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-black/10 dark:bg-black/30 transition-colors duration-300"></div>
            </div>

            {/* Front Overlapping Image */}
            <div className="absolute bottom-0 right-0 w-[70%] h-[60%] rounded-[1.5rem] overflow-hidden border-4 sm:border-[6px] border-gray-50 dark:border-gray-950 shadow-xl dark:shadow-none z-10 transition-colors duration-300">
              <img
                src="https://images.unsplash.com/photo-1563720223185-11003d516935?q=80&w=1000&auto=format&fit=crop"
                alt="Premium Sedan"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 dark:bg-black/20 transition-colors duration-300"></div>
            </div>

            {/* Rotating "Contact Us" Badge (Compacted) */}
            <div className="absolute -left-2 sm:-left-4 bottom-[15%] sm:bottom-[20%] z-20">
              <div className="relative w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center bg-[#0C4587] rounded-full shadow-lg shadow-blue-900/20 dark:shadow-black/50 border-[3px] border-gray-50 dark:border-gray-950">
                <svg
                  className="absolute inset-0 w-full h-full animate-[spin_10s_linear_infinite]"
                  viewBox="0 0 100 100"
                >
                  <path
                    id="textPath"
                    d="M 50, 50 m -34, 0 a 34,34 0 1,1 68,0 a 34,34 0 1,1 -68,0"
                    fill="transparent"
                  />
                  <text
                    fill="#ffffff"
                    fontSize="13"
                    fontWeight="900"
                    letterSpacing="1.2"
                    className="uppercase"
                  >
                    <textPath href="#textPath" startOffset="0">
                      Contact Us • Contact Us •
                    </textPath>
                  </text>
                </svg>
                {/* Center Car Icon */}
                <div className="bg-[#5EBC23] text-white p-2.5 rounded-full relative z-10 shadow-inner">
                  <Car className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
              </div>
            </div>
          </div>

          {/* ========================================= */}
          {/* RIGHT COLUMN: CONTENT & ACCORDION         */}
          {/* ========================================= */}
          <div className="flex flex-col justify-center lg:pl-6">
            {/* Top Brand Tag */}
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-full w-max mb-3.5 shadow-sm transition-colors duration-300">
              <Sparkles className="w-3 h-3 text-[#5EBC23]" />
              <span className="text-[9px] font-black text-[#0C4587] dark:text-gray-200 uppercase tracking-widest">
                About Trivixam
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900 dark:text-white leading-[1.15] tracking-tight transition-colors duration-300">
              Driven by quality, trusted for every{" "}
              <span className="bg-gradient-to-r from-[#0C4587] to-[#5EBC23] bg-clip-text text-transparent">
                journey
              </span>
            </h2>

            {/* Description */}
            <p className="mt-3.5 text-xs sm:text-sm font-semibold text-gray-600 dark:text-gray-400 leading-relaxed max-w-lg transition-colors duration-300">
              With years of industry experience, we deliver reliable car rental
              solutions focused on comfort, transparency, and exceptional
              service.
            </p>

            {/* Custom Themed Accordion */}
            <div className="mt-6 border-t border-gray-200 dark:border-gray-800 transition-colors duration-300">
              {accordions.map((item, idx) => {
                const isOpen = openIndex === idx;
                return (
                  <div
                    key={idx}
                    className="border-b border-gray-200 dark:border-gray-800 transition-colors duration-300"
                  >
                    <button
                      onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                      className="w-full flex items-center justify-between py-3.5 text-left focus:outline-none group"
                    >
                      <span
                        className={`text-sm font-black transition-colors duration-300 ${isOpen ? "text-[#0C4587] dark:text-white" : "text-gray-700 dark:text-gray-400 group-hover:text-[#0C4587] dark:group-hover:text-gray-200"}`}
                      >
                        {idx + 1}. {item.title}
                      </span>
                      {isOpen ? (
                        <ChevronUp className="w-4 h-4 text-[#5EBC23] flex-shrink-0" />
                      ) : (
                        <ChevronDown className="w-4 h-4 text-gray-400 dark:text-gray-600 group-hover:text-[#5EBC23] transition-colors" />
                      )}
                    </button>
                    <div
                      className={`overflow-hidden transition-all duration-300 ease-in-out ${
                        isOpen
                          ? "max-h-40 pb-4 opacity-100"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <p className="text-xs font-semibold text-gray-600 dark:text-gray-400 pl-4 sm:pl-5 border-l-2 border-[#5EBC23] ml-1 transition-colors duration-300">
                        {item.content}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Bottom Actions Row */}
            <div className="mt-8 flex flex-wrap items-center gap-5 sm:gap-8">
              {/* Themed Pill Button (Compacted) */}
              <Link
                href="/about"
                className="inline-flex items-center bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-full pr-4 pl-1.5 py-1.5 group hover:border-[#5EBC23] dark:hover:border-[#5EBC23] transition-all duration-300 shadow-sm"
              >
                <div className="bg-[#0C4587] group-hover:bg-[#5EBC23] rounded-full p-2 mr-2.5 group-hover:translate-x-1 transition-all duration-300">
                  <ArrowRight className="w-3 h-3 text-white" />
                </div>
                <span className="font-black text-gray-900 dark:text-white group-hover:text-[#5EBC23] dark:group-hover:text-[#5EBC23] text-[10px] sm:text-xs uppercase tracking-wider transition-colors duration-300">
                  More About Us
                </span>
              </Link>

              {/* Profile Block (Compacted) */}
              <div className="flex items-center gap-3 group cursor-pointer">
                <div className="relative">
                  <img
                    src="https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=200&auto=format&fit=crop"
                    alt="Krishna Avtar"
                    className="w-9 h-9 sm:w-10 sm:h-10 rounded-full object-cover border-2 border-gray-200 dark:border-gray-800 shadow-sm group-hover:border-[#0C4587] transition-colors duration-300"
                  />
                  <div className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-[#5EBC23] border-2 border-gray-50 dark:border-gray-950 rounded-full"></div>
                </div>

                <div>
                  <h4 className="font-black text-gray-900 dark:text-white leading-none text-xs sm:text-sm transition-colors duration-300">
                    Krishna Avtar
                  </h4>
                  <p className="text-[9px] sm:text-[10px] font-bold text-gray-500 dark:text-gray-400 mt-1 uppercase tracking-widest transition-colors duration-300">
                    CEO & Founder
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
