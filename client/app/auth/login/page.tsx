"use client";

import React, { useState, ChangeEvent, FormEvent } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useAuth } from "../../../context/AuthContext";
import {
  Car,
  Mail,
  Lock,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Home,
  Eye,
  EyeOff,
} from "lucide-react";

export default function LoginPage(): React.ReactElement {
  const router = useRouter();
  const { login } = useAuth();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setError("");
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      await login(formData.email, formData.password);
      router.push("/");
    } catch (err: any) {
      setError(
        err.message ||
          "Authentication matrix mismatched. Please verify your credentials.",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-950 py-16 px-4 sm:px-6 lg:px-8 transition-colors duration-300 relative overflow-hidden text-black dark:text-white">
      {/* Brand Ambient Background Glow Shaders */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#0C4587]/5 dark:bg-[#0C4587]/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#5EBC23]/5 dark:bg-[#5EBC23]/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-md w-full space-y-6 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 p-4 md:p-6 rounded-3xl shadow-xl shadow-gray-200/50 dark:shadow-none relative">
        {/* Top Indicator Accent Line matching Hero and Form templates */}
        <div className="absolute top-0 left-12 right-12 h-1 bg-gradient-to-r from-[#0C4587] to-[#5EBC23] rounded-full" />
        {/* Home Button */}
        <Link
          href="/"
          className="absolute top-6 left-6 shadow-sm hover:shadow-md transition-all duration-200 z-10"
        >
          <Home className="w-4 h-4 text-[#0C4587] dark:text-blue-400" />
        </Link>
        {/* HEADER BRANDING MODULE */}
        <div className="text-center space-y-3">
          <div className="space-y-1">
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-gray-900 dark:text-white">
              Welcome Back
            </h2>
            <p className="text-xs font-bold text-gray-600 dark:text-gray-400 uppercase tracking-widest flex items-center justify-center">
              <Sparkles className="w-3 h-3 mr-1 text-[#5EBC23]" /> Sign In to access on Carry-On
            </p>
          </div>
        </div>

        {/* INTERACTIVE FORM CONTAINER */}
        <form className="space-y-5 pt-2" onSubmit={handleSubmit} noValidate>
          <div className="space-y-4">
            {/* Email Field Layout */}
            <div className="space-y-1.5">
              <label
                htmlFor="email"
                className="block text-[11px] font-black uppercase tracking-wider text-gray-700 dark:text-gray-300"
              >
                Email Address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Mail className="h-4 w-4 text-gray-400" />
                </div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="block w-full pl-11 pr-4 py-2 bg-gray-50 dark:bg-gray-950 text-sm border border-gray-100 dark:border-gray-800 rounded-xl focus:outline-none focus:border-blue-500 text-gray-900 dark:text-white transition-all"
                  placeholder="name@example.com"
                />
              </div>
            </div>

            {/* Password Field Layout */}
            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-[11px] font-black uppercase tracking-wider text-gray-700 dark:text-gray-300"
                >
                  Password
                </label>
                <Link
                  href="/auth/forgot"
                  className="text-[10px] font-bold text-gray-400 hover:text-[#0C4587] dark:hover:text-blue-400 transition-colors uppercase tracking-wider"
                >
                  Forgot Password?
                </Link>
              </div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Lock className="h-4 w-4 text-gray-400" />
                </div>
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="current-password"
                  required
                  value={formData.password}
                  onChange={handleChange}
                  className="block w-full pl-11 pr-12 py-2 bg-gray-50 dark:bg-gray-950 text-sm border border-gray-100 dark:border-gray-800 rounded-xl focus:outline-none focus:border-blue-500 text-gray-900 dark:text-white transition-all"
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                >
                  {showPassword ? (
                    <EyeOff className="h-4 w-4" />
                  ) : (
                    <Eye className="h-4 w-4" />
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Error Message Layout Alert */}
          {error && (
            <div className="bg-red-50 dark:bg-red-950/30 border border-red-100 dark:border-red-900/30 text-red-600 dark:text-red-400 px-4 py-3 rounded-xl text-xs font-bold flex items-center shadow-inner">
              ⚠️ {error}
            </div>
          )}

          {/* Master Submit CTA Trigger Button */}
          <div className="pt-2">
            <button
              type="submit"
              disabled={loading}
              className="w-full inline-flex items-center justify-center bg-gradient-to-r from-[#0C4587] to-[#0A3C73] hover:from-[#5EBC23] hover:to-[#4CAF50] text-white text-xs uppercase tracking-widest font-black py-4 rounded-xl shadow-md shadow-blue-900/10 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 group"
            >
              {loading ? (
                "Verifying Terminal Access..."
              ) : (
                <>
                  <span>Sign In To Account</span>
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </button>
          </div>

          {/* Alternative Register Redirect Framework */}
          <div className="text-center pt-2 border-t border-gray-50 dark:border-gray-800/60">
            <p className="text-xs font-semibold">
              New in Carry On ecosystem?{" "}
              <Link
                href="/auth/register"
                className="font-bold text-[#0C4587] dark:text-blue-400 hover:text-[#5EBC23] transition-colors"
              >
                Create Account
              </Link>
            </p>
          </div>
        </form>

        {/* Security Baseline Matrix Footnote */}
        <div className="flex items-center justify-center space-x-1 text-[10px] font-bold tracking-wider uppercase pt-2">
          <ShieldCheck className="w-3.5 h-3.5 text-[#5EBC23]" />
          <span>AES-256 Protected Node Connection</span>
        </div>
      </div>
    </div>
  );
}
