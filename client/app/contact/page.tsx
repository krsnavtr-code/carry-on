"use client";

import React, { useState, ChangeEvent, FormEvent } from "react";
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
      detail: "+91 9084407615",
      href: "tel:+919084407615",
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
      detail: "123 Car Rental Street, Noida, UP, India",
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
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors duration-300 py-6 lg:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* HEADER AREA */}
        <div className="text-center space-y-4 max-w-5xl mx-auto">
          <div className="inline-flex items-center space-x-2 bg-blue-50 dark:bg-blue-900/30 border border-blue-100 dark:border-blue-800/50 px-4 py-1.5 rounded-full shadow-sm">
            <MessageSquare className="w-4 h-4 text-[#5EBC23]" />
            <span className="text-xs font-bold text-[#0C4587] dark:text-blue-300 tracking-wide uppercase">
              Connect With Us
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-gray-900 dark:text-white">
            Get In Touch
          </h1>
          <p className="text-sm sm:text-base font-medium">
            Have queries regarding automated rental pricing, corporate
            structures, or fleet configurations? Drop us a prompt message.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-[#0C4587] to-[#5EBC23] mx-auto rounded-full" />
        </div>

        {/* CORE INTERACTIVE SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* LEFT 5 COLS: Direct Reach Info Blocks */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {contactChannels.map((channel, index) => (
              <a
                key={index}
                href={channel.href}
                className={`bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-2 md:p-5 flex items-start space-x-4 shadow-sm ${
                  channel.href !== "#"
                    ? "hover:border-blue-500/30 transition-all duration-200"
                    : ""
                }`}
              >
                <div className="p-3 bg-gray-50 dark:bg-gray-950 border border-gray-100 dark:border-gray-800 rounded-xl flex-shrink-0">
                  {channel.icon}
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 dark:text-white text-sm uppercase tracking-wider text-gray-400 dark:text-gray-500">
                    {channel.title}
                  </h3>
                  <p className="text-base sm:text-lg font-bold text-gray-700 dark:text-gray-300 mt-1 break-words">
                    {channel.detail}
                  </p>
                </div>
              </a>
            ))}
          </div>

          {/* RIGHT 7 COLS: High Conversion Message Box */}
          <div className="lg:col-span-7 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-2 md:p-6 shadow-sm relative">
            {isSubmitted && (
              <div className="absolute inset-0 bg-white/95 dark:bg-gray-900/95 rounded-3xl flex flex-col items-center justify-center space-y-3 z-10 animate-fade-in">
                <CheckCircle className="w-16 h-16 text-[#5EBC23] animate-bounce" />
                <h3 className="text-xl font-black text-gray-900 dark:text-white">
                  Message Transmitted!
                </h3>
                <p className="text-sm text-gray-500 text-center max-w-xs font-medium">
                  Thank you for contacting Carry-On. Our operations desk will
                  ping you shortly.
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {/* Full Name */}
                <div className="">
                  <label className="text-xs font-bold uppercase tracking-wider">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Full Name"
                    required
                    className="w-full bg-gray-50 dark:bg-gray-950 border border-gray-200 dark:border-gray-800 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-blue-500 transition-all text-gray-800 dark:text-gray-200"
                  />
                </div>
                {/* Phone Number */}
                <div className="">
                  <label className="text-xs font-bold uppercase tracking-wider">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 XXXXX XXXXX"
                    required
                    className="w-full bg-gray-50 dark:bg-gray-950 border border-gray-200 dark:border-gray-800 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-blue-500 transition-all text-gray-800 dark:text-gray-200"
                  />
                </div>
              </div>

              {/* Email Address */}
              <div className="">
                <label className="text-xs font-bold uppercase tracking-wider">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="name@example.com"
                  required
                  className="w-full bg-gray-50 dark:bg-gray-950 border border-gray-200 dark:border-gray-800 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-blue-500 transition-all text-gray-800 dark:text-gray-200"
                />
              </div>

              {/* Custom Message Body */}
              <div className="">
                <label className="text-xs font-bold uppercase tracking-wider">
                  Your Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Describe your requirement or fleet questions here..."
                  required
                  className="w-full bg-gray-50 dark:bg-gray-950 border border-gray-200 dark:border-gray-800 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-blue-500 transition-all text-gray-800 dark:text-gray-200 resize-none"
                />
              </div>

              {/* Submit Action Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center bg-gradient-to-r from-[#0C4587] to-[#0A3C73] hover:from-[#5EBC23] hover:to-[#4CAF50] text-white font-bold py-4 rounded-xl shadow-md transition-all duration-300 group"
                >
                  Dispatch Message
                  <Send className="w-4 h-4 ml-2 group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
