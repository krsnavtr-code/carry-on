"use client";

import React from "react";
import {
  Building2,
  FileText,
  Users,
  Calendar,
  CreditCard,
  Headset,
  Sparkles,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

interface SolutionCard {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
}

export default function CorporateSolutions(): React.ReactElement {
  const solutions: SolutionCard[] = [
    {
      id: "sol-1",
      icon: <Building2 className="w-6 h-6" />,
      title: "Enterprise Fleet Management",
      description: "Complete vehicle fleet solutions for companies of all sizes with centralized control and real-time tracking.",
      features: [
        "Dedicated account manager",
        "Customized vehicle selection",
        "Monthly billing cycles",
        "Priority booking support",
      ],
    },
    {
      id: "sol-2",
      icon: <FileText className="w-6 h-6" />,
      title: "Corporate Invoicing & GST",
      description: "Streamlined billing with proper tax documentation, expense tracking, and integration with corporate finance systems.",
      features: [
        "GST-compliant invoices",
        "Detailed expense reports",
        "Multiple billing entities",
        "Automated payment reminders",
      ],
    },
    {
      id: "sol-3",
      icon: <Users className="w-6 h-6" />,
      title: "Employee Transportation",
      description: "Reliable daily commute solutions for your workforce with flexible pickup/drop schedules across multiple locations.",
      features: [
        "Fixed route optimization",
        "Employee app access",
        "Attendance integration",
        "Multi-shift support",
      ],
    },
    {
      id: "sol-4",
      icon: <Calendar className="w-6 h-6" />,
      title: "Event & Conference Transport",
      description: "End-to-end transportation management for corporate events, conferences, and VIP delegations.",
      features: [
        "Event coordination team",
        "Luxury vehicle options",
        "Chauffeur services",
        "Real-time fleet tracking",
      ],
    },
    {
      id: "sol-5",
      icon: <CreditCard className="w-6 h-6" />,
      title: "Corporate Credit Lines",
      description: "Flexible payment options with pre-approved credit limits, consolidated billing, and extended payment terms.",
      features: [
        "30-45 day credit terms",
        "Consolidated monthly bills",
        "Spend limit controls",
        "Approval workflow integration",
      ],
    },
    {
      id: "sol-6",
      icon: <Headset className="w-6 h-6" />,
      title: "24/7 Corporate Support",
      description: "Dedicated support team with priority response times for all corporate accounts and urgent requirements.",
      features: [
        "Priority helpline",
        "On-ground assistance",
        "Emergency replacement",
        "Multi-language support",
      ],
    },
  ];

  return (
    <section className="bg-white dark:bg-[#0A1120] text-gray-900 dark:text-gray-100 transition-colors duration-300 py-12 md:py-16 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#0C4587]/5 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#5EBC23]/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 md:space-y-12">
        {/* Section Header */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-full mb-2 shadow-sm transition-colors duration-300">
            <Sparkles className="w-3 h-3 text-[#5EBC23]" />
            <span className="text-[9px] font-black text-gray-700 dark:text-gray-300 uppercase tracking-widest">
              Enterprise Solutions
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-gray-900 dark:text-white leading-tight">
            Tailored Mobility for{" "}
            <span className="bg-gradient-to-r from-[#0C4587] to-[#5EBC23] bg-clip-text text-transparent">
              Modern Businesses
            </span>
          </h2>
          <p className="text-xs sm:text-sm font-medium text-gray-600 dark:text-gray-400">
            Comprehensive car rental solutions designed for MNCs, corporations, and growing businesses. Scale your transportation needs seamlessly.
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((solution) => (
            <div
              key={solution.id}
              className="bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800 rounded-2xl p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
            >
              {/* Icon Header */}
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-gradient-to-br from-[#0C4587] to-[#0A3C73] rounded-xl text-white group-hover:from-[#5EBC23] group-hover:to-[#4CAF50] transition-colors duration-300">
                  {solution.icon}
                </div>
                <h3 className="text-lg font-black text-gray-900 dark:text-white leading-tight">
                  {solution.title}
                </h3>
              </div>

              {/* Description */}
              <p className="text-xs sm:text-sm font-medium text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                {solution.description}
              </p>

              {/* Features List */}
              <ul className="space-y-2">
                {solution.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-center text-[11px] font-semibold text-gray-700 dark:text-gray-300"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 mr-2 text-[#5EBC23] flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-[#0C4587] to-[#0A3C73] rounded-2xl p-6 md:p-8 shadow-xl shadow-blue-900/20 dark:shadow-none flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden group border border-transparent dark:border-blue-900/50">
          <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-gradient-to-tl from-[#5EBC23]/30 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

          <div className="space-y-1.5 text-center md:text-left max-w-xl relative z-10">
            <h3 className="text-xl sm:text-2xl font-black tracking-tight text-white">
              Ready to Elevate Your Corporate Travel?
            </h3>
            <p className="text-[11px] sm:text-xs text-blue-100/80 font-semibold leading-relaxed">
              Get a customized enterprise solution tailored to your business needs. Dedicated support and exclusive corporate benefits await.
            </p>
          </div>

          <button className="w-full md:w-auto inline-flex items-center justify-center bg-[#5EBC23] hover:bg-white hover:text-[#0C4587] text-white font-black text-[10px] sm:text-xs uppercase tracking-widest px-6 py-3.5 rounded-xl shadow-lg transition-all duration-300 flex-shrink-0 relative z-10">
            <span>Request Corporate Quote</span>
            <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 ml-2" />
          </button>
        </div>
      </div>
    </section>
  );
}
