"use client";

import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Share2,
  Globe,
  Camera,
  Briefcase,
  ArrowRight,
  ChevronRight,
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "Our Cars", href: "/cars" },
    { name: "About Us", href: "/about" },
    { name: "Contact Us", href: "/contact" },
  ];

  const services = [
    { name: "Daily Rentals", href: "/services/daily" },
    { name: "Weekly Rentals", href: "/services/weekly" },
    { name: "Monthly Rentals", href: "/services/monthly" },
    { name: "Airport Transfer", href: "/services/airport" },
  ];

  return (
    <footer className="bg-gray-950 text-gray-300 border-t border-gray-900 mt-auto pt-16 pb-8 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section: Branding, Links, and Newsletter */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pb-12 border-b border-gray-900">
          {/* Column 1: Brand Info (Takes 4 cols on large screens) */}
          <div className="lg:col-span-4 space-y-5">
            <Link href="/" className="flex items-center space-x-2 group">
              <div className="flex flex-col">
                <span className="text-2xl font-black tracking-tight text-white">
                  <span className="text-blue-500">CARRY</span>
                  <span className="text-[#5EBC23]">ON</span>
                </span>
                <span className="text-[10px] uppercase font-bold tracking-widest text-gray-500 -mt-1 flex items-center">
                  Car Rental Pvt Ltd{" "}
                  <span className="text-[#D48C3B] ml-1">★</span>
                </span>
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              Your trusted partner for affordable, premium, and reliable car
              rentals. Drive your dreams with flexible packages tailored just
              for you.
            </p>
            {/* Social Icons with brand hover states */}
            <div className="flex space-x-3 pt-2">
              {[
                {
                  icon: <Share2 className="w-4 h-4" />,
                  href: "#",
                  color: "hover:bg-blue-600",
                },
                {
                  icon: <Globe className="w-4 h-4" />,
                  href: "#",
                  color: "hover:bg-sky-500",
                },
                {
                  icon: <Camera className="w-4 h-4" />,
                  href: "#",
                  color: "hover:bg-pink-600",
                },
                {
                  icon: <Briefcase className="w-4 h-4" />,
                  href: "#",
                  color: "hover:bg-blue-700",
                },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className={`w-9 h-9 flex items-center justify-center rounded-xl bg-gray-900 border border-gray-800 text-gray-400 hover:text-white ${social.color} transition-all duration-300`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links (Takes 2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-white font-bold text-base tracking-wider uppercase text-sm border-l-2 border-[#5EBC23] pl-3">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="flex items-center text-gray-400 hover:text-blue-400 font-medium text-sm group transition-colors duration-200"
                  >
                    <ChevronRight className="w-3.5 h-3.5 mr-1 text-gray-600 group-hover:text-blue-400 transition-colors" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services (Takes 2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-white font-bold text-base tracking-wider uppercase text-sm border-l-2 border-[#5EBC23] pl-3">
              Services
            </h4>
            <ul className="space-y-2.5">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="flex items-center text-gray-400 hover:text-[#5EBC23] font-medium text-sm group transition-colors duration-200"
                  >
                    <ChevronRight className="w-3.5 h-3.5 mr-1 text-gray-600 group-hover:text-[#5EBC23] transition-colors" />
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Newsletter & Subscription (Takes 4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-white font-bold text-base tracking-wider uppercase text-sm border-l-2 border-[#5EBC23] pl-3">
              Newsletter
            </h4>
            <p className="text-gray-400 text-sm">
              Subscribe to get latest offers, discounts, and fleet updates.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="space-y-2">
              <div className="relative flex items-center">
                <input
                  type="email"
                  placeholder="Your Email Address"
                  className="w-full bg-gray-900 text-white placeholder-gray-500 border border-gray-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                  required
                />
                <button
                  type="submit"
                  className="absolute right-1.5 p-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white transition-colors"
                  aria-label="Subscribe"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Middle Section: Direct Contact Info Blocks */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 py-10 border-b border-gray-900 text-sm">
          <div className="flex items-start space-x-3">
            <div className="p-2.5 bg-gray-900 border border-gray-800 rounded-xl text-blue-500">
              <MapPin className="w-4 h-4" />
            </div>
            <div>
              <h5 className="font-semibold text-white">Location</h5>
              <p className="text-gray-400 text-xs mt-0.5">
                H-213, 3rd Floor Sector-63 Noida 201301
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <div className="p-2.5 bg-gray-900 border border-gray-800 rounded-xl text-[#5EBC23]">
              <Phone className="w-4 h-4" />
            </div>
            <div>
              <h5 className="font-semibold text-white">Call Us 24/7</h5>
              <p className="text-gray-400 text-xs mt-0.5">+91 83830 17006</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <div className="p-2.5 bg-gray-900 border border-gray-800 rounded-xl text-[#D48C3B]">
              <Mail className="w-4 h-4" />
            </div>
            <div>
              <h5 className="font-semibold text-white">Email Support</h5>
              <p className="text-gray-400 text-xs mt-0.5"><a href="mailto:connect@carry-on.in">connect@carry-on.in</a></p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <div className="p-2.5 bg-gray-900 border border-gray-800 rounded-xl text-purple-500">
              <Clock className="w-4 h-4" />
            </div>
            <div>
              <h5 className="font-semibold text-white">Working Hours</h5>
              <p className="text-gray-400 text-xs mt-0.5">
                Mon - Sun: 24/7 Available
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section: Copyright & Legal */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-8 text-xs text-gray-500">
          <p>
            &copy; {currentYear} Carry-On Car Rental Pvt Ltd. All rights
            reserved.
          </p>
          <div className="flex space-x-4 mt-4 sm:mt-0">
            <Link
              href="/privacy"
              className="hover:text-gray-300 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="hover:text-gray-300 transition-colors"
            >
              Terms & Conditions
            </Link>
            <Link
              href="/sitemap"
              className="hover:text-gray-300 transition-colors"
            >
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
