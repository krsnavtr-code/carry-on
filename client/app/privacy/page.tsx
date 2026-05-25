"use client";

import {
  ShieldCheck,
  Lock,
  Eye,
  FileText,
  UserCheck,
  Bell,
} from "lucide-react";

export default function PrivacyPolicy() {
  const lastUpdated = "May 25, 2026";

  const policySections = [
    {
      icon: <Eye className="w-5 h-5 text-[#0C4587] dark:text-blue-400" />,
      title: "1. Information We Collect",
      content:
        "We collect information to provide better car rental services to our users. This includes personal identification (Name, Email, Phone number, Driving License details), booking preferences, and precise geo-location data when you search for available cars near you on our website or upcoming mobile applications.",
    },
    {
      icon: <UserCheck className="w-5 h-5 text-[#5EBC23]" />,
      title: "2. How We Use Your Data",
      content:
        "Your data is used strictly to process bookings, verify your driving credentials for safety parameters, manage your profile account, and optimize the fleet selection process. We utilize automated algorithms on our secure backend to prevent double-booking issues and fraudulent transactions.",
    },
    {
      icon: <Lock className="w-5 h-5 text-[#D48C3B]" />,
      title: "3. Data Security & Storage",
      content:
        "We implement advanced security architectures, including HTTPS reverse proxies, helmet-protected HTTP headers, and industry-standard JWT (JSON Web Tokens) encryption. Your critical passwords and credentials are securely hashed using bcryptjs on our cloud servers before database entry.",
    },
    {
      icon: <FileText className="w-5 h-5 text-purple-500" />,
      title: "4. Information Sharing & Third Parties",
      content:
        "Carry-On Car Rental does not sell or trade your personal data to third-party marketing companies. We only share required identity verification matrices with legitimate background verification agencies and payment gateway partners to ensure smooth, secure checkout operations.",
    },
    {
      icon: <Bell className="w-5 h-5 text-pink-500" />,
      title: "5. Cookies and Web Analytics",
      content:
        "Our Next.js system framework uses optimized performance cookies to remember your visual UI preferences (Light/Dark mode) and pre-fill search configurations. Web analytics are recorded purely to minimize page load times and enhance SEO core web vitals.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors duration-300 py-6 lg:py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Block matched with Brand Vibe */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 bg-blue-50 dark:bg-blue-900/30 border border-blue-100 dark:border-blue-800/50 px-4 py-1.5 rounded-full shadow-sm">
            <ShieldCheck className="w-4 h-4 text-[#5EBC23]" />
            <span className="text-xs font-bold text-[#0C4587] dark:text-blue-300 tracking-wide uppercase">
              Legal & Trust Center
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-gray-900 dark:text-white">
            Privacy Policy
          </h1>
          <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">
            Last Updated: {lastUpdated} | Carry-On Car Rental Pvt Ltd.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-[#0C4587] to-[#5EBC23] mx-auto rounded-full" />
        </div>

        {/* Intro Text Card */}
        <div className="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-900 rounded-2xl p-6 lg:p-8 shadow-sm mb-10 leading-relaxed text-gray-600 dark:text-gray-400 text-sm sm:text-base font-medium">
          Welcome to **Carry-On Car Rental**. Your privacy is critically
          important to us. This Privacy Policy document outlines the types of
          personal metrics and data processed, recorded, and protected by our
          centralized application systems across our web framework and future
          mobile software ecosystems.
        </div>

        {/* Dynamic Section Accordion/List Layout */}
        <div className="space-y-6">
          {policySections.map((section, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-2 md:p-6 lg:p-8 shadow-sm hover:shadow-md transition-shadow duration-300"
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

        {/* Dynamic Support/Contact Callout */}
        <div className="mt-12 bg-gradient-to-br from-[#0C4587]/5 to-[#5EBC23]/5 border border-blue-100/50 dark:border-blue-900/30 rounded-2xl p-6 lg:p-8 text-center space-y-3">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white">
            Have any questions regarding data operations?
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 max-w-xl mx-auto font-medium">
            If you need to request account deletion, modify your license
            parameters, or ask questions about security tokens, reach out
            directly to our verification desk.
          </p>
          <div className="pt-2 text-sm font-bold text-[#0C4587] dark:text-blue-400">
            <a href="mailto:connect@carry-on.in">✉️ connect@carry-on.in</a>
          </div>
        </div>
      </div>
    </div>
  );
}
