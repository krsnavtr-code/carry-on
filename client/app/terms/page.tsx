"use client";

import {
  Scale,
  Milestone,
  Fuel,
  AlertTriangle,
  CreditCard,
  ShieldAlert,
} from "lucide-react";

export default function TermsAndConditions() {
  const lastUpdated = "May 25, 2026";

  const termsSections = [
    {
      icon: <Milestone className="w-5 h-5 text-[#0C4587] dark:text-blue-400" />,
      title: "1. Eligibility & Driver Requirements",
      content:
        "To rent a car from Carry-On, the driver must be at least 21 years of age and hold a valid, unexpired commercial or personal Driving License (DL) issued by legitimate government authorities. A refundable security deposit may be verified at the time of pickup depending on the vehicle category.",
    },
    {
      icon: <CreditCard className="w-5 h-5 text-[#5EBC23]" />,
      title: "2. Booking, Payments & Cancellation",
      content:
        "All payments must be completed via our secure integrated payment gateways on the platform. Cancellations made 24 hours prior to the scheduled pickup time are eligible for a full refund. Late cancellations or no-shows will attract a processing fee deducted straight from the base booking amount.",
    },
    {
      icon: <Fuel className="w-5 h-5 text-[#D48C3B]" />,
      title: "3. Fuel & Usage Policies",
      content:
        "Vehicles must be returned with the same level of fuel as provided during the initial handoff. If a car is returned with less fuel, standard refueling charges along with service fees will apply. The vehicles are equipped with tracking modules to monitor safe speed thresholds.",
    },
    {
      icon: <AlertTriangle className="w-5 h-5 text-red-500" />,
      title: "4. Damage Liabilities & Insurance",
      content:
        "In case of any accidental damage, scratching, or breakdown during the rental tenure, the client must immediately inform our 24/7 support cell. While the fleet is insured, the client is liable to pay the standard insurance deductible or excess amount as per the breach conditions.",
    },
    {
      icon: <ShieldAlert className="w-5 h-5 text-purple-500" />,
      title: "5. Traffic Violations & Fines",
      content:
        "Any overspeeding tickets, red-light violations, illegal parking penalties, or toll discrepancies incurred during the active rental period are the absolute liability of the renter. Carry-On reserves the right to charge these fines directly to the client's saved payment methods.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors duration-300 py-16 lg:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Block matched with Brand Vibe */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 bg-blue-50 dark:bg-blue-900/30 border border-blue-100 dark:border-blue-800/50 px-4 py-1.5 rounded-full shadow-sm">
            <Scale className="w-4 h-4 text-[#5EBC23]" />
            <span className="text-xs font-bold text-[#0C4587] dark:text-blue-300 tracking-wide uppercase">
              Legal Agreement
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-gray-900 dark:text-white">
            Terms & Conditions
          </h1>
          <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">
            Last Updated: {lastUpdated} | Carry-On Car Rental Pvt Ltd.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-[#0C4587] to-[#5EBC23] mx-auto rounded-full" />
        </div>

        {/* Intro Text Card */}
        <div className="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-900 rounded-2xl p-6 lg:p-8 shadow-sm mb-10 leading-relaxed text-gray-600 dark:text-gray-400 text-sm sm:text-base font-medium">
          Please read these **Terms and Conditions** carefully before
          initializing any booking services through our Next.js application
          layer or upcoming mobile interfaces. By browsing or reserving any
          fleet item under **Carry-On Car Rental Pvt Ltd**, you inherently agree
          to remain compliant with the listed clauses and legal frameworks.
        </div>

        {/* Dynamic Section Accordion/List Layout */}
        <div className="space-y-6">
          {termsSections.map((section, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-900 rounded-2xl p-6 lg:p-8 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-2 bg-gray-50 dark:bg-gray-950 border border-gray-100 dark:border-gray-800 rounded-xl">
                  {section.icon}
                </div>
                <h2 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">
                  {section.title}
                </h2>
              </div>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed pl-2 font-medium">
                {section.content}
              </p>
            </div>
          ))}
        </div>

        {/* Dynamic Acknowledgment Callout */}
        <div className="mt-12 bg-gradient-to-br from-[#0C4587]/5 to-[#5EBC23]/5 border border-blue-100/50 dark:border-blue-900/30 rounded-2xl p-6 lg:p-8 text-center space-y-3">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white">
            Need clarity on specific fleet usage metrics?
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 max-w-xl mx-auto font-medium">
            Violation of any terms listed above might lead to immediate tracking
            suspension, booking cancellation, or forfeit of safety deposits as
            per enterprise operational rules.
          </p>
          <div className="pt-2 text-sm font-bold text-[#0C4587] dark:text-blue-400">
            ✉️ legal@carryon.in
          </div>
        </div>
      </div>
    </div>
  );
}
