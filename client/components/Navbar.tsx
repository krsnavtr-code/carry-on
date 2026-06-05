"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "./ThemeProvider";
import { useAuth } from "../context/AuthContext";
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
  LogIn,
  LogOut,
  User,
  ChevronDown,
} from "lucide-react";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const { user, logout } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20); // 20px tak smooth rahega
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-500 border-b ${
        isScrolled
          ? "bg-white/85 dark:bg-[#050B14]/85 backdrop-blur-xl border-gray-200 dark:border-white/10 shadow-lg shadow-black/5 dark:shadow-black/40 py-1"
          : "bg-transparent border-transparent py-2"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14">
          {/* Logo Section */}
          <div className="flex items-center">
            <Link
              href="/"
              className="flex items-center group relative px-2 py-2 rounded-xl transition-all duration-300"
            >
              <div className="absolute inset-x-2 inset-y-2 bg-transparent dark:bg-white/15 rounded-full blur-2xl scale-150 opacity-100 group-hover:opacity-100 dark:group-hover:bg-white/20 transition-all duration-500 pointer-events-none -z-20" />
              <img
                src="/images/logo-nobg.png"
                alt="Carry-On Car Rental"
                className="h-10 w-auto object-contain transition-all duration-300 relative z-10 
                 drop-shadow-none
                 dark:drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`relative font-semibold px-3 py-1.5 rounded-lg text-sm transition-all duration-300 ${
                  isActive(link.href)
                    ? isScrolled
                      ? "text-[#0C4587] dark:text-[#5EBC23] bg-[#0C4587]/10 dark:bg-[#5EBC23]/10"
                      : "text-white bg-white/20 backdrop-blur-md shadow-inner shadow-white/10"
                    : isScrolled
                      ? "text-gray-600 dark:text-gray-300 hover:text-[#0C4587] dark:hover:text-[#5EBC23] hover:bg-gray-100 dark:hover:bg-white/5"
                      : "text-gray-200 hover:text-white hover:bg-white/10"
                } group`}
              >
                {link.name}
                <span
                  className={`absolute bottom-0.5 left-4 right-4 h-[2px] rounded-full transition-transform duration-300 ${
                    isScrolled ? "bg-[#5EBC23]" : "bg-white"
                  } ${
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
              className={`p-2 rounded-xl transition-all duration-300 cursor-pointer ${
                isScrolled
                  ? "bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-white/10"
                  : "bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm border border-white/20"
              }`}
              aria-label="Toggle theme"
            >
              {theme === "light" ? (
                <Moon className="w-4 h-4" />
              ) : (
                <Sun className="w-4 h-4 text-yellow-400" />
              )}
            </button>

            {/* Auth Buttons */}
            {user ? (
              <div className="relative">
                <button
                  onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                  className={`flex items-center space-x-2 px-3 py-1.5 rounded-xl transition-all duration-300 ${
                    isScrolled
                      ? "bg-gray-100 dark:bg-white/5 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-white/10"
                      : "bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm border border-white/20"
                  }`}
                >
                  <User className="w-4 h-4" />
                </button>

                {isUserMenuOpen && (
                  <div className="absolute right-0 mt-3 w-48 bg-white dark:bg-[#0a1120] rounded-xl shadow-xl border border-gray-100 dark:border-white/10 py-2 z-50 overflow-hidden">
                    <div className="px-4 py-3 border-b border-gray-100 dark:border-white/5 bg-gray-50/50 dark:bg-transparent">
                      <p className="text-sm font-bold text-gray-900 dark:text-white truncate">
                        {user.name}
                      </p>
                      <p className="text-[11px] font-medium text-gray-500 dark:text-gray-400 truncate mt-0.5">
                        {user.email}
                      </p>
                    </div>
                    <Link
                      href="/profile"
                      onClick={() => setIsUserMenuOpen(false)}
                      className="w-full flex items-center px-4 py-2.5 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-white/5 hover:text-[#0C4587] dark:hover:text-[#5EBC23] transition-colors"
                    >
                      <User className="w-4 h-4 mr-2.5" />
                      Profile
                    </Link>
                    <button
                      onClick={() => {
                        logout();
                        setIsUserMenuOpen(false);
                      }}
                      className="w-full flex items-center px-4 py-2.5 text-sm font-medium text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-500/10 transition-colors"
                    >
                      <LogOut className="w-4 h-4 mr-2.5" />
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <Link
                href="/auth/login"
                className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-xl transition-all duration-300 font-semibold text-sm ${
                  isScrolled
                    ? "text-[#0C4587] dark:text-gray-300 hover:text-[#0C4587] dark:hover:text-white bg-blue-50 dark:bg-white/5 hover:bg-blue-100 dark:hover:bg-white/10"
                    : "bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm border border-white/20"
                }`}
              >
                <LogIn className="w-4 h-4" />
                <span>Login</span>
              </Link>
            )}

            {/* Premium Dynamic 'Book Now' Button */}
            <Link
              href="/booking"
              className={`relative overflow-hidden inline-flex items-center justify-center font-black uppercase tracking-wider text-xs px-5 py-2.5 rounded-xl transition-all duration-300 ${
                isScrolled
                  ? "bg-[#5EBC23] hover:bg-[#4CAF50] text-white shadow-lg shadow-green-500/20 hover:-translate-y-0.5"
                  : "bg-gradient-to-r from-[#0C4587] to-[#0A3C73] hover:from-[#5EBC23] hover:to-[#4CAF50] text-white shadow-xl shadow-black/20 hover:-translate-y-0.5 border border-white/20"
              }`}
            >
              Book Now
            </Link>
          </div>

          {/* Mobile Actions Header (Theme + Hamburger) */}
          <div className="flex items-center space-x-3 md:hidden">
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-xl transition-all duration-300 ${
                isScrolled
                  ? "bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-gray-300"
                  : "bg-white/10 text-white border border-white/20 backdrop-blur-sm"
              }`}
            >
              {theme === "light" ? (
                <Moon className="w-4 h-4" />
              ) : (
                <Sun className="w-4 h-4 text-yellow-400" />
              )}
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-xl transition-all duration-300 ${
                isScrolled
                  ? "bg-gray-100 dark:bg-white/5 text-gray-700 dark:text-gray-300"
                  : "bg-white/10 text-white border border-white/20 backdrop-blur-sm"
              }`}
            >
              {isOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel Drawer */}
      <div
        className={`md:hidden absolute w-full bg-white dark:bg-[#050B14] border-b border-gray-200 dark:border-white/10 shadow-2xl transition-all duration-300 ease-in-out origin-top ${
          isOpen
            ? "opacity-100 scale-y-100 visible"
            : "opacity-0 scale-y-95 invisible"
        }`}
      >
        <div className="px-4 py-4 space-y-1.5">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`flex items-center font-bold px-4 py-3 rounded-xl text-sm transition-colors ${
                isActive(link.href)
                  ? "text-[#0C4587] dark:text-[#5EBC23] bg-blue-50 dark:bg-[#5EBC23]/10"
                  : "text-gray-700 dark:text-gray-300 hover:text-[#0C4587] dark:hover:text-[#5EBC23] hover:bg-gray-50 dark:hover:bg-white/5"
              }`}
            >
              {link.icon}
              {link.name}
            </Link>
          ))}

          <div className="pt-4 mt-2 border-t border-gray-100 dark:border-white/10 space-y-2">
            {user ? (
              <>
                <div className="px-4 py-3 bg-gray-50 dark:bg-white/5 rounded-xl border border-gray-100 dark:border-white/5">
                  <p className="text-sm font-bold text-gray-900 dark:text-white">
                    {user.name}
                  </p>
                  <p className="text-xs font-medium text-gray-500 dark:text-gray-400 mt-0.5">
                    {user.email}
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <Link
                    href="/profile"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-center space-x-2 px-4 py-2.5 rounded-xl bg-gray-50 dark:bg-white/5 text-gray-700 dark:text-gray-300 font-semibold text-sm hover:bg-gray-100 dark:hover:bg-white/10 transition-colors"
                  >
                    <User className="w-4 h-4" />
                    <span>Profile</span>
                  </Link>
                  <button
                    onClick={() => {
                      logout();
                      setIsOpen(false);
                    }}
                    className="flex items-center justify-center space-x-2 px-4 py-2.5 rounded-xl bg-red-50 dark:bg-red-500/10 text-red-600 dark:text-red-400 font-semibold text-sm hover:bg-red-100 dark:hover:bg-red-500/20 transition-colors"
                  >
                    <LogOut className="w-4 h-4" />
                    <span>Logout</span>
                  </button>
                </div>
              </>
            ) : (
              <div className="grid grid-cols-2 gap-2">
                <Link
                  href="/auth/login"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center space-x-2 px-4 py-2.5 rounded-xl bg-gray-50 dark:bg-white/5 text-gray-700 dark:text-gray-300 font-semibold text-sm hover:bg-gray-100 dark:hover:bg-white/10 transition-colors"
                >
                  <LogIn className="w-4 h-4" />
                  <span>Login</span>
                </Link>
                <Link
                  href="/auth/register"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center space-x-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#0C4587] to-[#0A3C73] text-white font-semibold text-sm shadow-md"
                >
                  <User className="w-4 h-4" />
                  <span>Register</span>
                </Link>
              </div>
            )}
            <Link
              href="/booking"
              onClick={() => setIsOpen(false)}
              className="flex w-full mt-2 items-center justify-center bg-[#5EBC23] hover:bg-[#4CAF50] text-white font-black uppercase tracking-wider text-sm py-3.5 rounded-xl shadow-lg transition-colors"
            >
              Book Now
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
