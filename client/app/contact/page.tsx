"use client";

import React, { useState, useEffect, ChangeEvent, FormEvent } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  MessageSquare,
  CheckCircle,
} from "lucide-react";

// TypeScript interface for Form State
interface FormState {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export default function ContactUs(): React.ReactElement {
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

  // State management with typed structure
  const [formData, setFormData] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  // Input change handler typed event
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ): void => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Form submit handler
  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    // Yahan aap apna MERN backend connection API (axios.post) hit karenge baad me
    console.log("Contact Data:", formData);
    setIsSubmitted(true);

    // Reset form after a small delay
    setTimeout(() => {
      setFormData({ name: "", email: "", phone: "", message: "" });
      setIsSubmitted(false);
    }, 4000);
  };

  // Contact Grid Channels Data
  const contactChannels = [
    {
      icon: <Phone className="w-5 h-5 text-[#5EBC23]" />,
      title: "Call Us 24/7",
      detail: "+91 83830 17006",
      href: "tel:+918383017006",
    },
    {
      icon: <Mail className="w-5 h-5 text-[#0C4587] dark:text-blue-400" />,
      title: "Email Support Desk",
      detail: "support@carryon.in",
      href: "mailto:support@carryon.in",
    },
    {
      icon: <MapPin className="w-5 h-5 text-[#D48C3B]" />,
      title: "Main Hub Location",
      detail: "Sector-63, Noida 201301",
      href: "#",
    },
    {
      icon: <Clock className="w-5 h-5 text-purple-500" />,
      title: "Operating Hours",
      detail: "Mon - Sun: 24/7 Fleet Dispatch",
      href: "#",
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
          // Ek premium communication/support or desk background image
          backgroundImage:
            "url('https://www.trivixam.com/api/upload/file/contact-page-11062026-0817.jpeg')",
          backgroundColor: "#f8fafc",
        }}
      />

      {/* DYNAMIC Frosted Glassmorphism Overlay based on Scroll */}
      <div
        className={`absolute inset-0 transition-all duration-700 ease-in-out -z-20 ${
          isScrolled
            ? "bg-white/45 dark:bg-[#050B14]/70 backdrop-blur-[3px]"
            : "bg-black/15 dark:bg-[#050B14]/30 backdrop-blur-[2px]"
        }`}
      />

      {/* Brand Color Ambient Radial Mesh */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#0C4587]/15 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#5EBC23]/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 relative z-10">
        {/* ========================================= */}
        {/* HEADER AREA                               */}
        {/* ========================================= */}
        <div className="text-center space-y-4 max-w-4xl mx-auto drop-shadow-sm">
          <div className="inline-flex items-center space-x-2 bg-white/80 dark:bg-gray-900/60 backdrop-blur-md border border-gray-200 dark:border-gray-800/80 px-3.5 py-1.5 rounded-full shadow-sm">
            <MessageSquare className="w-3.5 h-3.5 text-[#5EBC23]" />
            <span className="text-[10px] font-black text-[#0C4587] dark:text-gray-200 tracking-widest uppercase">
              Connect With Us
            </span>
          </div>
          <h1
            className={`text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight transition-colors duration-500 ${isScrolled ? "text-gray-900 dark:text-white" : "text-white"}`}
          >
            Get In{" "}
            <span className="bg-gradient-to-r from-[#0C4587] to-[#5EBC23] bg-clip-text text-transparent drop-shadow-md">
              Touch
            </span>
          </h1>
          <p
            className={`text-sm sm:text-base font-semibold transition-colors duration-500 ${isScrolled ? "text-gray-700 dark:text-gray-300" : "text-gray-200"}`}
          >
            Celebrating{" "}
            <span className="text-[#5EBC23] font-bold">
              10 Years of Excellence
            </span>
            . Have queries regarding automated rental pricing, corporate
            structures, or fleet configurations? Drop a prompt message to the
            team at{" "}
            <strong
              className={
                isScrolled ? "text-gray-900 dark:text-white" : "text-white"
              }
            >
              Carry-On Car Rental Pvt. Ltd.
            </strong>
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-[#0C4587] to-[#5EBC23] mx-auto rounded-full mt-4" />
        </div>

        {/* ========================================= */}
        {/* CORE INTERACTIVE SECTION                  */}
        {/* ========================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* LEFT 5 COLS: Direct Reach Info Blocks */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-5">
            {contactChannels.map((channel, index) => (
              <a
                key={index}
                href={channel.href}
                className={`bg-white/90 dark:bg-[#0A1120]/80 backdrop-blur-md border border-white/50 dark:border-gray-800/60 rounded-[1.5rem] p-4 md:p-6 flex items-start space-x-4 shadow-lg group hover:-translate-y-1 hover:shadow-2xl transition-all duration-300 ${
                  channel.href !== "#"
                    ? "hover:border-[#5EBC23]/40 cursor-pointer"
                    : "cursor-default"
                }`}
              >
                <div className="p-3.5 bg-gray-50/80 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl flex-shrink-0 group-hover:scale-110 group-hover:bg-white dark:group-hover:bg-gray-800 transition-all duration-300 shadow-sm">
                  {channel.icon}
                </div>
                <div>
                  <h3 className="font-black text-xs uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-1">
                    {channel.title}
                  </h3>
                  <p className="text-sm sm:text-base font-bold text-gray-900 dark:text-white break-words group-hover:text-[#0C4587] dark:group-hover:text-[#5EBC23] transition-colors">
                    {channel.detail}
                  </p>
                </div>
              </a>
            ))}
          </div>

          {/* RIGHT 7 COLS: High Conversion Message Box */}
          <div className="lg:col-span-7 bg-white/95 dark:bg-[#0A1120]/90 backdrop-blur-xl border border-white/50 dark:border-gray-800/60 rounded-[2rem] p-6 md:p-10 shadow-2xl relative overflow-hidden group">
            {/* Form decorative background blur */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#0C4587]/5 rounded-full blur-3xl pointer-events-none" />

            {isSubmitted && (
              <div className="absolute inset-0 bg-white/95 dark:bg-[#0A1120]/95 backdrop-blur-md rounded-[2rem] flex flex-col items-center justify-center space-y-4 z-20 animate-fade-in border border-[#5EBC23]/20">
                <div className="w-20 h-20 bg-green-50 dark:bg-green-900/20 rounded-full flex items-center justify-center mb-2">
                  <CheckCircle className="w-10 h-10 text-[#5EBC23] animate-bounce" />
                </div>
                <h3 className="text-2xl font-black text-gray-900 dark:text-white tracking-tight">
                  Message Transmitted!
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 text-center max-w-xs font-semibold">
                  Thank you for contacting Carry-On. Our operations desk will
                  ping you shortly.
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Full Name */}
                <div className="space-y-1.5">
                  <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 ml-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Full Name"
                    required
                    className="w-full bg-gray-50/80 dark:bg-gray-900/50 backdrop-blur-sm border border-gray-200 dark:border-gray-800 rounded-xl px-4 py-3.5 text-sm font-semibold focus:outline-none focus:border-[#0C4587] focus:ring-1 focus:ring-[#0C4587] transition-all text-gray-900 dark:text-white"
                  />
                </div>
                {/* Phone Number */}
                <div className="space-y-1.5">
                  <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 ml-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 XXXXX XXXXX"
                    required
                    className="w-full bg-gray-50/80 dark:bg-gray-900/50 backdrop-blur-sm border border-gray-200 dark:border-gray-800 rounded-xl px-4 py-3.5 text-sm font-semibold focus:outline-none focus:border-[#0C4587] focus:ring-1 focus:ring-[#0C4587] transition-all text-gray-900 dark:text-white"
                  />
                </div>
              </div>

              {/* Email Address */}
              <div className="space-y-1.5">
                <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 ml-1">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="name@example.com"
                  required
                  className="w-full bg-gray-50/80 dark:bg-gray-900/50 backdrop-blur-sm border border-gray-200 dark:border-gray-800 rounded-xl px-4 py-3.5 text-sm font-semibold focus:outline-none focus:border-[#0C4587] focus:ring-1 focus:ring-[#0C4587] transition-all text-gray-900 dark:text-white"
                />
              </div>

              {/* Custom Message Body */}
              <div className="space-y-1.5">
                <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 ml-1">
                  Your Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Describe your requirement or fleet questions here..."
                  required
                  className="w-full bg-gray-50/80 dark:bg-gray-900/50 backdrop-blur-sm border border-gray-200 dark:border-gray-800 rounded-xl px-4 py-3.5 text-sm font-semibold focus:outline-none focus:border-[#0C4587] focus:ring-1 focus:ring-[#0C4587] transition-all text-gray-900 dark:text-white resize-none"
                />
              </div>

              {/* Submit Action Button */}
              <div className="pt-3">
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center bg-gradient-to-r from-[#0C4587] to-[#0A3C73] hover:from-[#5EBC23] hover:to-[#4CAF50] text-white text-xs font-black uppercase tracking-widest py-4 rounded-xl shadow-lg hover:shadow-[#5EBC23]/30 transition-all duration-300 group/submit"
                >
                  Dispatch Message
                  <Send className="w-4 h-4 ml-2 group-hover/submit:translate-x-1 group-hover/submit:-translate-y-1 transition-transform" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
