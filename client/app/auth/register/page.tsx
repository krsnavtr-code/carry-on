"use client";

import React, { useState, ChangeEvent, FormEvent } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useAuth } from "../../../context/AuthContext";
import {
  Car,
  Mail,
  Lock,
  User,
  Phone,
  ArrowRight,
  Check,
  Sparkles,
  ShieldCheck,
  Home,
  Eye,
  EyeOff,
} from "lucide-react";

export default function RegisterPage(): React.ReactElement {
  const router = useRouter();
  const { register } = useAuth();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    role: "user" as "user" | "vendor",
  });

  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] =
    useState<boolean>(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ): void => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setError("");
  };

  const handleSubmit = async (e: FormEvent): Promise<void> => {
    e.preventDefault();
    setError("");

    // Rigid Security Validations
    if (formData.password !== formData.confirmPassword) {
      setError("Password mismatch matrices. Please confirm identical hashes.");
      return;
    }

    if (formData.password.length < 6) {
      setError(
        "Security parameter breach. Password length must hold ≥ 6 characters.",
      );
      return;
    }

    setLoading(true);

    try {
      await register(
        formData.name,
        formData.email,
        formData.password,
        formData.role,
        formData.phone || undefined,
      );
      router.push("/");
    } catch (err: any) {
      setError(
        err.message || "Registration pipeline rejected. Please try again.",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center text-black dark:text-white justify-center bg-gray-50 dark:bg-gray-950 py-10 px-4 sm:px-6 lg:px-8 transition-colors duration-300 relative overflow-hidden">
      {/* Brand Dynamic Backdrop Blur Nodes */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#0C4587]/5 dark:bg-[#0C4587]/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#5EBC23]/5 dark:bg-[#5EBC23]/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-md w-full space-y-4 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 p-4 md:p-6 rounded-3xl shadow-xl shadow-gray-200/50 dark:shadow-none relative">
        {/* Top Accent Gradient Ribbon Bar */}
        <div className="absolute top-0 left-12 right-12 h-1 bg-gradient-to-r from-[#0C4587] to-[#5EBC23] rounded-full" />
        {/* Home Button */}
        <Link
          href="/"
          className="absolute top-6 left-6 shadow-sm hover:shadow-md transition-all duration-200 z-10"
        >
          <Home className="w-4 h-4 text-[#0C4587] dark:text-blue-400" />
        </Link>
        {/* HEADER BLOCK BRAND SYNC */}
        <div className="text-center space-y-3">
          <div className="space-y-1">
            <h2 className="text-xl md:text-2xl font-black tracking-tight text-gray-900 dark:text-white">
              Create Account
            </h2>
            <p className="text-xs font-bold uppercase tracking-widest flex items-center justify-center">
              <Sparkles className="w-3 h-3 mr-1 text-[#5EBC23]" /> Join Carry-On
              Ecosystem
            </p>
          </div>
        </div>

        {/* REGISTRATION ACTION FORM */}
        <form className="space-y-4 pt-1" onSubmit={handleSubmit} noValidate>
          <div className="space-y-3">
            {/* 1. Full Identity Name Input */}
            <div className="">
              <label
                htmlFor="name"
                className="block text-[11px] font-black uppercase tracking-wider "
              >
                Full Identity Name
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <User className="h-4 w-4 text-gray-400" />
                </div>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="block w-full pl-11 pr-4 py-2 bg-gray-50 dark:bg-gray-950 text-sm border border-gray-200 dark:border-gray-800 rounded-xl focus:outline-none focus:border-blue-500 text-gray-900 dark:text-white transition-all"
                  placeholder="Monika Kowalska"
                />
              </div>
            </div>

            {/* 2. Communication Email Node */}
            <div className="">
              <label
                htmlFor="email"
                className="block text-[11px] font-black uppercase tracking-wider "
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
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="block w-full pl-11 pr-4 py-2 bg-gray-50 dark:bg-gray-950 text-sm border border-gray-200 dark:border-gray-800 rounded-xl focus:outline-none focus:border-blue-500 text-gray-900 dark:text-white transition-all"
                  placeholder="name@example.com"
                />
              </div>
            </div>

            {/* 3. Active Mobile Index */}
            <div className="">
              <label
                htmlFor="phone"
                className="block text-[11px] font-black uppercase tracking-wider "
              >
                Phone Number
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Phone className="h-4 w-4 text-gray-400" />
                </div>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  className="block w-full pl-11 pr-4 py-2 bg-gray-50 dark:bg-gray-950 text-sm border border-gray-200 dark:border-gray-800 rounded-xl focus:outline-none focus:border-blue-500 text-gray-900 dark:text-white transition-all"
                  placeholder="+91 XXXXX XXXXX"
                />
              </div>
            </div>

            {/* 4. Interactive Strategic Role Picker Toggle Selection */}
            <div className="">
              <label className="block text-[11px] font-black uppercase tracking-wider">
                Registration Profile Class
              </label>
              <div className="relative">
                {/* Dynamic Icon Shell Synchronized with Active Role State */}
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  {formData.role === "user" ? (
                    <User className="h-4 w-4 text-[#0C4587] dark:text-blue-400 transition-colors" />
                  ) : (
                    <Car className="h-4 w-4 text-[#5EBC23] transition-colors" />
                  )}
                </div>

                {/* Native Premium Dropdown Element */}
                <select
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  className={`block w-full pl-11 pr-10 py-2 bg-gray-50 dark:bg-gray-950 text-sm border font-semibold rounded-xl focus:outline-none transition-all appearance-none cursor-pointer text-gray-800 dark:text-white ${
                    formData.role === "user"
                      ? "border-gray-200 dark:border-gray-800 focus:border-[#0C4587]"
                      : "border-gray-200 dark:border-gray-800 focus:border-[#5EBC23]"
                  }`}
                >
                  <option
                    value="user"
                    className="text-gray-800 dark:bg-gray-900 font-semibold"
                  >
                    Renter Client (Access Core Fleets)
                  </option>
                  <option
                    value="vendor"
                    className="text-gray-800 dark:bg-gray-900 font-semibold"
                  >
                    Fleet Vendor (Deploy Operations)
                  </option>
                </select>

                {/* Custom Arrow Selector Layout Indicator */}
                <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none text-gray-400">
                  <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20">
                    <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* 5. Cryptographic Password Field */}
            {/* RESPONSIVE PASSWORDS GRID CONTAINER */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* 5. Security Password Field */}
              <div className="">
                <label
                  htmlFor="password"
                  className="block text-[11px] font-black uppercase tracking-wider"
                >
                  Security Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Lock className="h-4 w-4 text-gray-400" />
                  </div>
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    required
                    value={formData.password}
                    onChange={handleChange}
                    className="block w-full pl-11 pr-12 py-3.5 bg-gray-50 dark:bg-gray-950 text-sm border border-gray-100 dark:border-gray-800 rounded-xl focus:outline-none focus:border-[#0C4587] text-gray-900 dark:text-white transition-all"
                    placeholder="••••••••"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-[#0C4587] dark:hover:text-blue-400 transition-colors"
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4" />
                    ) : (
                      <Eye className="h-4 w-4" />
                    )}
                  </button>
                </div>
              </div>

              {/* 6. Password Token Validation Double Check */}
              <div className="">
                <label
                  htmlFor="confirmPassword"
                  className="block text-[11px] font-black uppercase tracking-wider"
                >
                  Confirm Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Lock className="h-4 w-4 text-gray-400" />
                  </div>
                  <input
                    id="confirmPassword"
                    name="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    required
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className="block w-full pl-11 pr-12 py-3.5 bg-gray-50 dark:bg-gray-950 text-sm border border-gray-100 dark:border-gray-800 rounded-xl focus:outline-none focus:border-[#0C4587] text-gray-900 dark:text-white transition-all"
                    placeholder="••••••••"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-[#0C4587] dark:hover:text-blue-400 transition-colors"
                  >
                    {showConfirmPassword ? (
                      <EyeOff className="h-4 w-4" />
                    ) : (
                      <Eye className="h-4 w-4" />
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Verification Warning Alert Display Panel */}
          {error && (
            <div className="bg-red-50 dark:bg-red-950/30 border border-red-100 dark:border-red-900/30 text-red-600 dark:text-red-400 px-4 py-3 rounded-xl text-xs font-bold flex items-center shadow-inner">
              ⚠️ {error}
            </div>
          )}

          {/* Submit Action Pipeline Launch Button */}
          <div className="pt-2">
            <button
              type="submit"
              disabled={loading}
              className="w-full inline-flex items-center justify-center bg-gradient-to-r from-[#0C4587] to-[#0A3C73] hover:from-[#5EBC23] hover:to-[#4CAF50] text-white text-xs uppercase tracking-widest font-black py-3 rounded-xl shadow-md shadow-blue-900/10 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 group"
            >
              {loading ? (
                "Deploying Credentials..."
              ) : (
                <>
                  <span>Create Secure Account</span>
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </button>
          </div>

          {/* Alternative Link Return Path */}
          <div className="text-center pt-1 border-t border-gray-50 dark:border-gray-800/60">
            <p className="text-xs font-semibold ">
              Already registered in Carry On?{" "}
              <Link
                href="/auth/login"
                className="font-bold text-[#0C4587] dark:text-blue-400 hover:text-[#5EBC23] transition-colors"
              >
                Sign In
              </Link>
            </p>
          </div>
        </form>

        {/* Security Baseline Matrix Footnote */}
        <div className="flex items-center justify-center space-x-1 text-[10px] font-bold tracking-wider uppercase pt-2">
          <ShieldCheck className="w-3.5 h-3.5 text-[#5EBC23]" />
          <span>AES-256 Cloud Infrastructure Connection</span>
        </div>
      </div>
    </div>
  );
}
