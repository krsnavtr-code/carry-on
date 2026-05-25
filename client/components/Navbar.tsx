"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "./ThemeProvider";
import {
  Menu,
  X,
  MenuSquare,
  Car,
  ShieldCheck,
  PhoneCall,
  Info,
  Moon,
  Sun,
} from "lucide-react";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/", icon: <MenuSquare className="w-4 h-4 mr-2" /> },
    { name: "Our Cars", href: "/cars", icon: <Car className="w-4 h-4 mr-2" /> },
    {
      name: "About Us",
      href: "/about",
      icon: <Info className="w-4 h-4 mr-2" />,
    },
    {
      name: "Contact",
      href: "/contact",
      icon: <PhoneCall className="w-4 h-4 mr-2" />,
    },
  ];

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  return (
    <nav className="bg-white dark:bg-gray-950 border-b border-gray-100 dark:border-gray-900 sticky top-0 z-50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo Section matched with your Brand identity */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2 group">
              <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-[#0C4587] to-[#5EBC23] p-[2px] shadow-md shadow-blue-500/10">
                <div className="w-full h-full bg-white dark:bg-gray-950 rounded-[10px] flex items-center justify-center">
                  <span className="text-[#0C4587] dark:text-blue-400 font-black text-xl italic tracking-tighter">
                    CR
                  </span>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-xl sm:text-2xl font-black tracking-tight text-gray-900 dark:text-white">
                  <span className="text-[#0C4587] dark:text-blue-500">
                    CARRY
                  </span>
                  <span className="text-[#5EBC23]">ON</span>
                </span>
                <span className="text-[10px] uppercase font-bold tracking-widest text-gray-400 dark:text-gray-500 -mt-1 flex items-center">
                  Car Rental <span className="text-[#D48C3B] ml-1">★</span>
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`relative font-semibold px-4 py-2 rounded-xl text-sm transition-all duration-200 ${
                  isActive(link.href)
                    ? "text-[#0C4587] dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30"
                    : "text-gray-600 dark:text-gray-300 hover:text-[#0C4587] dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-900/50"
                } group`}
              >
                {link.name}
                <span
                  className={`absolute bottom-1 left-4 right-4 h-[2px] bg-[#5EBC23] transition-transform duration-200 rounded-full ${
                    isActive(link.href)
                      ? "scale-x-100"
                      : "scale-x-0 group-hover:scale-x-100"
                  }`}
                />
              </Link>
            ))}
          </div>

          {/* Right Side CTA & Theme Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-xl bg-gray-50 dark:bg-gray-900 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 border border-gray-100 dark:border-gray-800 transition-all duration-200"
              aria-label="Toggle theme"
            >
              {theme === "light" ? (
                <Moon className="w-5 h-5" />
              ) : (
                <Sun className="w-5 h-5 text-yellow-400" />
              )}
            </button>

            {/* Premium Dynamic 'Book Now' Button */}
            <Link
              href="/booking"
              className="relative overflow-hidden inline-flex items-center justify-center bg-gradient-to-r from-[#0C4587] to-[#0A3C73] hover:from-[#5EBC23] hover:to-[#4CAF50] text-white font-bold text-sm px-6 py-3 rounded-xl shadow-md shadow-blue-900/20 hover:shadow-green-500/20 hover:-translate-y-[1px] active:translate-y-0 transition-all duration-300"
            >
              Book Now
            </Link>
          </div>

          {/* Mobile Actions Header (Theme + Hamburger) */}
          <div className="flex items-center space-x-3 md:hidden">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-gray-50 dark:bg-gray-900 text-gray-600 dark:text-gray-400 border border-gray-100 dark:border-gray-800"
            >
              {theme === "light" ? (
                <Moon className="w-5 h-5" />
              ) : (
                <Sun className="w-5 h-5 text-yellow-400" />
              )}
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg bg-gray-50 dark:bg-gray-900 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 border border-gray-100 dark:border-gray-800 transition-colors"
              aria-label="Toggle Menu"
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel Drawer */}
      <div
        className={`md:hidden absolute w-full bg-white dark:bg-gray-950 border-b border-gray-200 dark:border-gray-900 transition-all duration-300 ease-in-out origin-top ${
          isOpen
            ? "opacity-100 scale-y-100 visible h-auto"
            : "opacity-0 scale-y-0 invisible h-0"
        }`}
      >
        <div className="px-4 pt-2 pb-6 space-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`flex items-center font-semibold px-4 py-3 rounded-xl text-base transition-colors ${
                isActive(link.href)
                  ? "text-[#0C4587] dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30"
                  : "text-gray-700 dark:text-gray-300 hover:text-[#0C4587] dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-900"
              }`}
            >
              {link.icon}
              {link.name}
            </Link>
          ))}

          <div className="pt-4 border-t border-gray-100 dark:border-gray-900">
            <Link
              href="/booking"
              onClick={() => setIsOpen(false)}
              className="flex w-full items-center justify-center bg-gradient-to-r from-[#0C4587] to-[#0A3C73] text-white font-bold py-3.5 rounded-xl shadow-lg"
            >
              Book Now
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
