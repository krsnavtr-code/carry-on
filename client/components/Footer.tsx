"use client";

import Link from "next/link";
import { MapPin, Phone, Mail, Clock, ArrowRight } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "Our Fleet", href: "/cars" },
    { name: "About Carry On", href: "/about" },
    { name: "Contact Support", href: "/contact" },
  ];

  const services = [
    { name: "Daily Rentals", href: "/services/daily" },
    { name: "Weekly Contracts", href: "/services/weekly" },
    { name: "Monthly Subscriptions", href: "/services/monthly" },
    { name: "Airport Transfers", href: "/services/airport" },
  ];

  return (
    // Fixed Dark Theme for Premium Anchor Feel
    <footer className="relative bg-[#050B14] text-gray-300 border-t border-white/5 mt-auto pt-16 pb-8 overflow-hidden z-0">
      {/* ========================================= */}
      {/* BACKGROUND EFFECTS (Neon Orbs & Mesh)     */}
      {/* ========================================= */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#0C4587]/20 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#5EBC23]/15 rounded-full blur-[120px] pointer-events-none -z-10" />

      {/* Subtle Grid Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none -z-10"
        style={{
          backgroundImage:
            "linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* ========================================= */}
        {/* TOP SECTION: Links, Brand & Newsletter    */}
        {/* ========================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          {/* Column 1: Brand Info (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            <Link href="/" className="inline-block group">
              <div className="flex flex-col">
                <span className="text-3xl font-black tracking-tight text-white drop-shadow-md">
                  <span className="text-[#0C4587] drop-shadow-[0_0_15px_rgba(12,69,135,0.5)]">
                    CARRY
                  </span>
                  <span className="text-[#5EBC23] drop-shadow-[0_0_15px_rgba(94,188,35,0.5)]">
                    ON
                  </span>
                </span>
                <span className="text-[9px] uppercase font-black tracking-[0.2em] text-gray-500 mt-0.5 flex items-center">
                  Car Rental Pvt Ltd{" "}
                  <span className="text-[#5EBC23] ml-1.5 animate-pulse">●</span>
                </span>
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm font-medium">
              Your trusted partner for affordable, premium, and reliable car
              rentals. Celebrating{" "}
              <span className="text-[#5EBC23] font-bold">
                10 Years of Excellence
              </span>{" "}
              in delivering exceptional mobility solutions across India.
            </p>

            {/* Social Icons (Glassmorphic) with Inline SVGs */}
            <div className="flex space-x-3 pt-2">
              {[
                {
                  icon: (
                    <svg
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-4 h-4"
                    >
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                    </svg>
                  ),
                  href: "#",
                  color: "hover:bg-[#1877F2] hover:border-[#1877F2]",
                },
                {
                  icon: (
                    <svg
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-4 h-4"
                    >
                      <rect
                        x="2"
                        y="2"
                        width="20"
                        height="20"
                        rx="5"
                        ry="5"
                      ></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                  ),
                  href: "#",
                  color: "hover:bg-[#E4405F] hover:border-[#E4405F]",
                },
                {
                  icon: (
                    <svg
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-4 h-4"
                    >
                      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5 2.8 11.1 2.8 11.1s1.4.1 2.8-.3C2 8.3 2 4 2 4s1.5 1.5 3 1.8C3.5 4.3 5 2 8 2.5c3.2.5 5.8 2.8 6.5 6 1.1-.3 2.1-.9 2.9-1.5-.2 1-1 1.8-1.7 2.3 1.1-.1 2.1-.4 3-.8z"></path>
                    </svg>
                  ),
                  href: "#",
                  color: "hover:bg-[#1DA1F2] hover:border-[#1DA1F2]",
                },
                {
                  icon: (
                    <svg
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-4 h-4"
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect x="2" y="9" width="4" height="12"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  ),
                  href: "#",
                  color: "hover:bg-[#0A66C2] hover:border-[#0A66C2]",
                },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className={`w-9 h-9 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-gray-400 hover:text-white ${social.color} transition-all duration-300 hover:shadow-lg hover:-translate-y-1`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-5">
            <h4 className="text-white font-black tracking-widest uppercase text-xs">
              Company
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="flex items-center text-gray-400 hover:text-white font-medium text-sm group transition-colors duration-300"
                  >
                    {/* Sexy Line Hover Effect */}
                    <span className="w-0 h-px bg-[#5EBC23] transition-all duration-300 group-hover:w-3 group-hover:mr-2" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services (2 cols) */}
          <div className="lg:col-span-2 space-y-5">
            <h4 className="text-white font-black tracking-widest uppercase text-xs">
              Services
            </h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="flex items-center text-gray-400 hover:text-white font-medium text-sm group transition-colors duration-300"
                  >
                    {/* Sexy Line Hover Effect */}
                    <span className="w-0 h-px bg-[#0C4587] transition-all duration-300 group-hover:w-3 group-hover:mr-2" />
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Newsletter (4 cols) */}
          <div className="lg:col-span-4 space-y-5">
            <h4 className="text-white font-black tracking-widest uppercase text-xs">
              Stay Updated
            </h4>
            <p className="text-gray-400 text-sm font-medium">
              Subscribe to get latest offers, VIP discounts, and fleet updates
              directly to your inbox.
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="relative mt-2"
            >
              <div className="relative flex items-center bg-white/5 border border-white/10 rounded-2xl p-1.5 focus-within:bg-white/10 focus-within:border-[#5EBC23]/50 transition-all duration-300 group">
                <input
                  type="email"
                  placeholder="Enter your email address..."
                  className="w-full bg-transparent text-white placeholder-gray-500 px-4 py-2.5 text-sm focus:outline-none"
                  required
                />
                <button
                  type="submit"
                  className="absolute right-1.5 bg-gradient-to-r from-[#0C4587] to-[#5EBC23] hover:to-[#4CAF50] text-white p-2.5 rounded-xl shadow-lg shadow-[#5EBC23]/20 hover:scale-105 transition-all duration-300"
                  aria-label="Subscribe"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* ========================================= */}
        {/* TRUST BADGE: 10 Years of Excellence       */}
        {/* ========================================= */}
        <div className="py-8 border-b border-white/10">
          <div className="bg-gradient-to-r from-[#0C4587]/20 to-[#5EBC23]/20 border border-[#5EBC23]/30 rounded-2xl p-6 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#5EBC23]/10 rounded-full blur-3xl pointer-events-none" />
            <div className="relative z-10">
              <div className="inline-flex items-center justify-center space-x-3 mb-3">
                <div className="w-12 h-12 bg-gradient-to-br from-[#0C4587] to-[#5EBC23] rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-white font-black text-xl">10</span>
                </div>
                <div className="text-left">
                  <p className="text-white font-black text-lg leading-tight">
                    Years of
                  </p>
                  <p className="text-[#5EBC23] font-black text-lg leading-tight">
                    Excellence
                  </p>
                </div>
              </div>
              <p className="text-gray-300 text-xs font-semibold max-w-md mx-auto">
                Trusted by 10,000+ customers across India since 2016. Premium
                service, guaranteed satisfaction.
              </p>
            </div>
          </div>
        </div>

        {/* ========================================= */}
        {/* MIDDLE SECTION: Direct Contact Info Blocks*/}
        {/* ========================================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 py-8 border-b border-white/10">
          <div className="flex items-center space-x-3.5 p-3 rounded-2xl hover:bg-white/5 transition-colors duration-300 cursor-default group">
            <div className="p-3 bg-white/5 border border-white/10 rounded-xl text-[#0C4587] group-hover:text-blue-400 group-hover:scale-110 transition-all duration-300">
              <MapPin className="w-4 h-4" />
            </div>
            <div>
              <h5 className="font-bold text-white text-xs uppercase tracking-wider mb-0.5">
                Location
              </h5>
              <p className="text-gray-400 text-xs font-medium">
                Sector-63, Noida 201301
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-3.5 p-3 rounded-2xl hover:bg-white/5 transition-colors duration-300 cursor-pointer group">
            <div className="p-3 bg-white/5 border border-white/10 rounded-xl text-[#5EBC23] group-hover:text-green-400 group-hover:scale-110 transition-all duration-300">
              <Phone className="w-4 h-4" />
            </div>
            <div>
              <h5 className="font-bold text-white text-xs uppercase tracking-wider mb-0.5">
                Call 24/7
              </h5>
              <p className="text-gray-400 text-xs font-medium">
                +91 83830 17006
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-3.5 p-3 rounded-2xl hover:bg-white/5 transition-colors duration-300 cursor-pointer group">
            <div className="p-3 bg-white/5 border border-white/10 rounded-xl text-[#D48C3B] group-hover:text-amber-400 group-hover:scale-110 transition-all duration-300">
              <Mail className="w-4 h-4" />
            </div>
            <div>
              <h5 className="font-bold text-white text-xs uppercase tracking-wider mb-0.5">
                Email Us
              </h5>
              <p className="text-gray-400 text-xs font-medium">
                connect@carry-on.in
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-3.5 p-3 rounded-2xl hover:bg-white/5 transition-colors duration-300 cursor-default group">
            <div className="p-3 bg-white/5 border border-white/10 rounded-xl text-purple-500 group-hover:text-purple-400 group-hover:scale-110 transition-all duration-300">
              <Clock className="w-4 h-4" />
            </div>
            <div>
              <h5 className="font-bold text-white text-xs uppercase tracking-wider mb-0.5">
                Working Hours
              </h5>
              <p className="text-gray-400 text-xs font-medium">
                Mon - Sun: 24/7
              </p>
            </div>
          </div>
        </div>

        {/* ========================================= */}
        {/* BOTTOM SECTION: Copyright & Legal         */}
        {/* ========================================= */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-6 text-[11px] font-medium text-gray-500">
          <p>
            &copy; {currentYear}{" "}
            <span className="text-gray-300">Carry On Car Rental Pvt Ltd.</span>{" "}
            All rights reserved.
          </p>
          <div className="flex space-x-5 mt-4 sm:mt-0">
            <Link
              href="/privacy"
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms & Conditions
            </Link>
            <Link
              href="/sitemap"
              className="hover:text-white transition-colors"
            >
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
