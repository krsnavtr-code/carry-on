"use client";

import React from "react";
import { Building2, Sparkles, Star } from "lucide-react";

interface ClientLogo {
  id: string;
  name: string;
  industry: string;
  logo: string;
}

export default function CorporateClients(): React.ReactElement {
  const clients: ClientLogo[] = [
    {
      id: "client-1",
      name: "TechCorp India",
      industry: "Technology",
      logo: "https://via.placeholder.com/150x80/0C4587/FFFFFF?text=TechCorp",
    },
    {
      id: "client-2",
      name: "Global Finance Ltd",
      industry: "Banking & Finance",
      logo: "https://via.placeholder.com/150x80/5EBC23/FFFFFF?text=GlobalFin",
    },
    {
      id: "client-3",
      name: "PharmaCare Solutions",
      industry: "Healthcare",
      logo: "https://via.placeholder.com/150x80/0C4587/FFFFFF?text=PharmaCare",
    },
    {
      id: "client-4",
      name: "Manufacturing Pro",
      industry: "Manufacturing",
      logo: "https://via.placeholder.com/150x80/5EBC23/FFFFFF?text=MfgPro",
    },
    {
      id: "client-5",
      name: "ConsultHub Global",
      industry: "Consulting",
      logo: "https://via.placeholder.com/150x80/0C4587/FFFFFF?text=ConsultHub",
    },
    {
      id: "client-6",
      name: "RetailMax Chain",
      industry: "Retail",
      logo: "https://via.placeholder.com/150x80/5EBC23/FFFFFF?text=RetailMax",
    },
  ];

  const stats = [
    { value: "500+", label: "Corporate Clients" },
    { value: "50+", label: "Cities Covered" },
    { value: "10K+", label: "Vehicles Managed" },
    { value: "98%", label: "Client Retention" },
  ];

  return (
    <section className="bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors duration-300 py-12 md:py-16 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-[#0C4587]/5 to-[#5EBC23]/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 md:space-y-12">
        {/* Section Header */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-full mb-2 shadow-sm transition-colors duration-300">
            <Building2 className="w-3 h-3 text-[#5EBC23]" />
            <span className="text-[9px] font-black text-gray-700 dark:text-gray-300 uppercase tracking-widest">
              Trusted Partners
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-gray-900 dark:text-white leading-tight">
            Trusted by{" "}
            <span className="bg-gradient-to-r from-[#0C4587] to-[#5EBC23] bg-clip-text text-transparent">
              Industry Leaders
            </span>
          </h2>
          <p className="text-xs sm:text-sm font-medium text-gray-600 dark:text-gray-400">
            From Fortune 500 companies to emerging startups, businesses across India trust us for their corporate mobility needs.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-[#0A1120] border border-gray-200 dark:border-gray-800 rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300"
            >
              <div className="text-2xl sm:text-3xl md:text-4xl font-black bg-gradient-to-r from-[#0C4587] to-[#5EBC23] bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-[10px] sm:text-xs font-bold text-gray-600 dark:text-gray-400 uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Client Logos Grid */}
        <div className="bg-white dark:bg-[#0A1120] border border-gray-200 dark:border-gray-800 rounded-2xl p-6 md:p-8 shadow-sm">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 items-center">
            {clients.map((client) => (
              <div
                key={client.id}
                className="flex flex-col items-center gap-2 group cursor-pointer"
              >
                <div className="w-full aspect-[2/1] bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center p-3 group-hover:bg-gray-200 dark:group-hover:bg-gray-700 transition-colors duration-300">
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="w-full h-full object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
                <div className="text-center">
                  <p className="text-[10px] sm:text-[11px] font-bold text-gray-900 dark:text-white group-hover:text-[#0C4587] dark:group-hover:text-[#5EBC23] transition-colors duration-300">
                    {client.name}
                  </p>
                  <p className="text-[8px] sm:text-[9px] font-medium text-gray-500 dark:text-gray-400">
                    {client.industry}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-center">
          <div className="flex items-center gap-2">
            <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
            <span className="text-xs sm:text-sm font-semibold text-gray-700 dark:text-gray-300">
              4.9/5 Corporate Rating
            </span>
          </div>
          <div className="hidden md:block w-px h-6 bg-gray-300 dark:bg-gray-700" />
          <div className="flex items-center gap-2">
            <Building2 className="w-4 h-4 text-[#0C4587]" />
            <span className="text-xs sm:text-sm font-semibold text-gray-700 dark:text-gray-300">
              ISO 9001:2015 Certified
            </span>
          </div>
          <div className="hidden md:block w-px h-6 bg-gray-300 dark:bg-gray-700" />
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#5EBC23]" />
            <span className="text-xs sm:text-sm font-semibold text-gray-700 dark:text-gray-300">
              10+ Years Industry Experience
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
