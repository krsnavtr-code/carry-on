"use client";

import React from "react";
import {
  CheckCircle2,
  Sparkles,
  ArrowRight,
  Crown,
  Building2,
  Rocket,
} from "lucide-react";

interface PricingTier {
  id: string;
  name: string;
  icon: React.ReactNode;
  price: string;
  period: string;
  description: string;
  features: string[];
  popular?: boolean;
  cta: string;
}

export default function CorporatePricing(): React.ReactElement {
  const pricingTiers: PricingTier[] = [
    {
      id: "tier-1",
      name: "Starter Business",
      icon: <Building2 className="w-5 h-5" />,
      price: "Custom",
      period: "Monthly Billing",
      description: "Perfect for small businesses and startups with occasional travel needs.",
      features: [
        "5-10 vehicles per month",
        "Standard fleet access",
        "Email support",
        "Basic invoicing",
        "7-day advance booking",
      ],
      cta: "Get Started",
    },
    {
      id: "tier-2",
      name: "Growth Enterprise",
      icon: <Rocket className="w-5 h-5" />,
      price: "Custom",
      period: "Monthly Billing",
      description: "Ideal for growing companies with regular transportation requirements.",
      features: [
        "10-50 vehicles per month",
        "Priority fleet access",
        "Dedicated account manager",
        "GST-compliant invoicing",
        "3-day advance booking",
        "Monthly expense reports",
        "Employee app access",
      ],
      popular: true,
      cta: "Most Popular",
    },
    {
      id: "tier-3",
      name: "Corporate Elite",
      icon: <Crown className="w-5 h-5" />,
      price: "Custom",
      period: "Custom Terms",
      description: "For large enterprises with high-volume transportation needs.",
      features: [
        "50+ vehicles per month",
        "Premium fleet access",
        "24/7 priority support",
        "Integrated billing systems",
        "Same-day booking",
        "Real-time fleet tracking",
        "Custom vehicle branding",
        "Multi-city operations",
        "Chauffeur services included",
        "Event transport coordination",
      ],
      cta: "Contact Sales",
    },
  ];

  return (
    <section className="bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors duration-300 py-12 md:py-16 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-[#0C4587]/5 to-[#5EBC23]/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 md:space-y-12">
        {/* Section Header */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-full mb-2 shadow-sm transition-colors duration-300">
            <Sparkles className="w-3 h-3 text-[#5EBC23]" />
            <span className="text-[9px] font-black text-gray-700 dark:text-gray-300 uppercase tracking-widest">
              Enterprise Pricing
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-gray-900 dark:text-white leading-tight">
            Flexible Plans for{" "}
            <span className="bg-gradient-to-r from-[#0C4587] to-[#5EBC23] bg-clip-text text-transparent">
              Every Business
            </span>
          </h2>
          <p className="text-xs sm:text-sm font-medium text-gray-600 dark:text-gray-400">
            Customized pricing based on your business volume, requirements, and duration. All plans include our core benefits and dedicated support.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {pricingTiers.map((tier) => (
            <div
              key={tier.id}
              className={`relative bg-white dark:bg-[#0A1120] border rounded-2xl p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ${
                tier.popular
                  ? "border-[#5EBC23] shadow-lg shadow-green-900/10 dark:shadow-green-900/20"
                  : "border-gray-200 dark:border-gray-800"
              }`}
            >
              {/* Popular Badge */}
              {tier.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="inline-block bg-gradient-to-r from-[#5EBC23] to-[#4CAF50] text-white text-[10px] font-black uppercase tracking-wider px-4 py-1.5 rounded-full shadow-md">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Tier Header */}
              <div className="text-center mb-6 pt-2">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-[#0C4587] to-[#0A3C73] rounded-xl text-white mb-3">
                  {tier.icon}
                </div>
                <h3 className="text-lg font-black text-gray-900 dark:text-white mb-1">
                  {tier.name}
                </h3>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-2xl sm:text-3xl font-black bg-gradient-to-r from-[#0C4587] to-[#5EBC23] bg-clip-text text-transparent">
                    {tier.price}
                  </span>
                </div>
                <p className="text-[10px] font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mt-1">
                  {tier.period}
                </p>
              </div>

              {/* Description */}
              <p className="text-xs font-medium text-gray-600 dark:text-gray-400 text-center mb-6 leading-relaxed">
                {tier.description}
              </p>

              {/* Features List */}
              <ul className="space-y-3 mb-6">
                {tier.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-start text-[11px] font-semibold text-gray-700 dark:text-gray-300"
                  >
                    <CheckCircle2 className="w-4 h-4 mr-2 text-[#5EBC23] flex-shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <button
                className={`w-full py-3.5 rounded-xl font-black text-[10px] sm:text-xs uppercase tracking-widest transition-all duration-300 ${
                  tier.popular
                    ? "bg-gradient-to-r from-[#5EBC23] to-[#4CAF50] text-white hover:shadow-lg hover:shadow-green-900/20"
                    : "bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700"
                }`}
              >
                {tier.cta}
              </button>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="text-center space-y-2">
          <p className="text-xs font-medium text-gray-600 dark:text-gray-400">
            All plans include 150-point vehicle inspection, transparent pricing, and 24/7 roadside assistance.
          </p>
          <p className="text-[11px] font-semibold text-[#0C4587] dark:text-[#5EBC23]">
            Need a custom solution? Contact our enterprise team for tailored pricing.
          </p>
        </div>
      </div>
    </section>
  );
}
