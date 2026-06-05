"use client";

import React, { useState, useEffect } from "react";
import {
  ShieldCheck,
  Lock,
  Eye,
  FileText,
  UserCheck,
  Bell,
  Scale,
} from "lucide-react";

export default function PrivacyPolicy() {
  // ==========================================
  // DYNAMIC SCROLL STATE LOGIC
  // ==========================================
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 60) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const lastUpdated = "May 25, 2026";

  const policySections = [
    {
      icon: <Eye className="w-5 h-5" />,
      colorClass: "text-[#0C4587] dark:text-blue-400 group-hover:text-white",
      bgHoverClass: "group-hover:bg-[#0C4587]",
      title: "1. Information We Collect",
      content:
        "We collect information to provide better car rental services to our users. This includes personal identification (Name, Email, Phone number, Driving License details), booking preferences, and precise geo-location data when you search for available cars near you on our website or upcoming mobile applications.",
    },
    {
      icon: <UserCheck className="w-5 h-5" />,
      colorClass: "text-[#5EBC23] group-hover:text-white",
      bgHoverClass: "group-hover:bg-[#5EBC23]",
      title: "2. How We Use Your Data",
      content:
        "Your data is used strictly to process bookings, verify your driving credentials for safety parameters, manage your profile account, and optimize the fleet selection process. We utilize automated algorithms on our secure backend to prevent double-booking issues and fraudulent transactions.",
    },
    {
      icon: <Lock className="w-5 h-5" />,
      colorClass: "text-[#D48C3B] group-hover:text-white",
      bgHoverClass: "group-hover:bg-[#D48C3B]",
      title: "3. Data Security & Storage",
      content:
        "We implement advanced security architectures, including HTTPS reverse proxies, helmet-protected HTTP headers, and industry-standard JWT (JSON Web Tokens) encryption. Your critical passwords and credentials are securely hashed using bcryptjs on our cloud servers before database entry.",
    },
    {
      icon: <FileText className="w-5 h-5" />,
      colorClass: "text-purple-500 group-hover:text-white",
      bgHoverClass: "group-hover:bg-purple-500",
      title: "4. Information Sharing & Third Parties",
      content:
        "Carry-On Car Rental does not sell or trade your personal data to third-party marketing companies. We only share required identity verification matrices with legitimate background verification agencies and payment gateway partners to ensure smooth, secure checkout operations.",
    },
    {
      icon: <Bell className="w-5 h-5" />,
      colorClass: "text-pink-500 group-hover:text-white",
      bgHoverClass: "group-hover:bg-pink-500",
      title: "5. Cookies and Web Analytics",
      content:
        "Our Next.js system framework uses optimized performance cookies to remember your visual UI preferences (Light/Dark mode) and pre-fill search configurations. Web analytics are recorded purely to minimize page load times and enhance SEO core web vitals.",
    },
  ];

  return (
    <div className="relative min-h-screen text-gray-900 dark:text-gray-100 transition-colors duration-300 pb-16 pt-24 md:pb-24 md:pt-32 overflow-hidden z-0">
      {/* ========================================= */}
      {/* BACKGROUND IMAGE & FROSTED GLASS OVERLAY  */}
      {/* ========================================= */}

      {/* Parallax Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed bg-no-repeat -z-30"
        style={{
          // Abstract/Security digital background
          backgroundImage:
            "url('https://www.trivixam.com/api/upload/file/banner-31052026-0808.png')",
        }}
      />

      {/* DYNAMIC Frosted Glassmorphism Overlay based on Scroll */}
      <div
        className={`absolute inset-0 transition-all duration-700 ease-in-out -z-20 ${
          isScrolled
            ? "bg-white/55 dark:bg-[#050B14]/80 backdrop-blur-[3px]"
            : "bg-black/30 dark:bg-[#050B14]/40 backdrop-blur-[2px]"
        }`}
      />

      {/* Brand Radial Ambient Glows */}
      <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-[#0C4587]/10 rounded-full blur-[100px] pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-[#5EBC23]/5 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-10">
        {/* ========================================= */}
        {/* HEADER BLOCK                              */}
        {/* ========================================= */}
        <div className="text-center space-y-4 mb-12 drop-shadow-sm">
          <div className="inline-flex items-center space-x-1.5 bg-white/80 dark:bg-gray-900/60 backdrop-blur-md border border-gray-200 dark:border-gray-800/80 px-3.5 py-1.5 rounded-full shadow-sm">
            <Scale className="w-3.5 h-3.5 text-[#5EBC23]" />
            <span className="text-[10px] font-black text-[#0C4587] dark:text-gray-200 tracking-widest uppercase">
              Legal & Trust Center
            </span>
          </div>
          <h1
            className={`text-4xl sm:text-5xl font-black tracking-tight leading-tight transition-colors duration-500 ${isScrolled ? "text-gray-900 dark:text-white" : "text-white"}`}
          >
            Privacy{" "}
            <span className="bg-gradient-to-r from-[#0C4587] to-[#5EBC23] bg-clip-text text-transparent drop-shadow-md">
              Policy
            </span>
          </h1>
          <p
            className={`text-[11px] sm:text-xs font-bold uppercase tracking-widest transition-colors duration-500 ${isScrolled ? "text-gray-600 dark:text-gray-400" : "text-gray-200"}`}
          >
            Last Updated: {lastUpdated} • Carry-On Car Rental Pvt Ltd.
          </p>
          <div className="w-12 h-1 bg-gradient-to-r from-[#0C4587] to-[#5EBC23] mx-auto rounded-full mt-4" />
        </div>

        {/* ========================================= */}
        {/* INTRO TEXT CARD (Glassmorphic)            */}
        {/* ========================================= */}
        <div className="bg-white/80 dark:bg-[#0A1120]/60 backdrop-blur-xl border border-white/50 dark:border-gray-800/60 rounded-3xl p-6 lg:p-8 shadow-lg leading-relaxed text-gray-700 dark:text-gray-300 text-xs sm:text-sm font-semibold text-center sm:text-left">
          Welcome to{" "}
          <strong className="text-gray-900 dark:text-white">
            Carry-On Car Rental Pvt. Ltd.
          </strong>{" "}
          Your privacy is critically important to us. This Privacy Policy
          document outlines the types of personal metrics and data processed,
          recorded, and protected by our centralized application systems across
          our web framework and future mobile software ecosystems.
        </div>

        {/* ========================================= */}
        {/* DYNAMIC SECTION ACCORDION/LIST LAYOUT     */}
        {/* ========================================= */}
        <div className="space-y-6">
          {policySections.map((section, index) => (
            <div
              key={index}
              className="bg-white/95 dark:bg-[#0A1120]/90 backdrop-blur-md border border-gray-200/80 dark:border-gray-800/80 rounded-[2rem] p-5 md:p-8 shadow-md hover:shadow-xl transition-all duration-300 group hover:-translate-y-1"
            >
              <div className="flex items-center space-x-4 mb-4">
                <div
                  className={`p-3 bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-2xl flex-shrink-0 transition-colors duration-300 ${section.colorClass} ${section.bgHoverClass}`}
                >
                  {section.icon}
                </div>
                <h2 className="text-base sm:text-lg font-black text-gray-900 dark:text-white tracking-tight">
                  {section.title}
                </h2>
              </div>
              <p className="text-[11px] sm:text-xs text-gray-600 dark:text-gray-400 leading-relaxed sm:pl-[3.25rem] font-medium">
                {section.content}
              </p>
            </div>
          ))}
        </div>

        {/* ========================================= */}
        {/* DYNAMIC SUPPORT / CONTACT CALLOUT         */}
        {/* ========================================= */}
        <div className="mt-12 bg-gradient-to-r from-[#0C4587] to-[#0A3C73] border border-transparent dark:border-blue-900/50 rounded-[2rem] p-8 lg:p-10 text-center space-y-4 shadow-2xl shadow-blue-900/20 relative overflow-hidden group">
          <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-[#5EBC23]/20 rounded-full blur-3xl pointer-events-none" />

          <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight relative z-10">
            Data Operations Query?
          </h3>
          <p className="text-[11px] sm:text-xs text-blue-100/80 max-w-xl mx-auto font-semibold leading-relaxed relative z-10">
            If you need to request account deletion, modify your license
            parameters, or ask questions about security tokens, reach out
            directly to our verification desk.
          </p>
          <div className="pt-4 relative z-10">
            <a
              href="mailto:connect@carry-on.in"
              className="inline-flex items-center justify-center bg-[#5EBC23] hover:bg-white text-white hover:text-[#0C4587] text-[10px] sm:text-xs font-black uppercase tracking-widest px-6 py-3 rounded-xl shadow-lg transition-colors duration-300"
            >
              ✉️ connect@carry-on.in
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
