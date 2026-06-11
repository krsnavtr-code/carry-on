"use client";

import React from "react";
import {
  Car,
  Users,
  Fuel,
  Gauge,
  Shield,
  Sparkles,
  ArrowRight,
} from "lucide-react";

interface FleetVehicle {
  id: string;
  name: string;
  category: string;
  image: string;
  capacity: number;
  fuelType: string;
  transmission: string;
  features: string[];
  badge: string;
}

export default function CorporateFleet(): React.ReactElement {
  const fleet: FleetVehicle[] = [
    {
      id: "fleet-1",
      name: "Toyota Innova Crysta",
      category: "Premium MPV",
      image: "https://www.trivixam.com/api/upload/file/toyota-innova-hycross-09062026-1713.png",
      capacity: 7,
      fuelType: "Diesel/Hybrid",
      transmission: "Automatic",
      features: ["Executive Seating", "Climate Control", "Premium Audio"],
      badge: "Best Seller",
    },
    {
      id: "fleet-2",
      name: "BMW 5 Series",
      category: "Luxury Sedan",
      image: "https://www.trivixam.com/api/upload/file/bmw-09062026-1713.png",
      capacity: 5,
      fuelType: "Diesel",
      transmission: "Automatic",
      features: ["Leather Interior", "Navigation", "Chauffeur Service"],
      badge: "Executive",
    },
    {
      id: "fleet-3",
      name: "Mercedes E-Class",
      category: "Business Class",
      image: "https://www.trivixam.com/api/upload/file/contact-09062026-1550.jpg",
      capacity: 5,
      fuelType: "Diesel",
      transmission: "Automatic",
      features: ["VIP Comfort", "Wi-Fi", "Reclining Seats"],
      badge: "Premium",
    },
    {
      id: "fleet-4",
      name: "Toyota Fortuner",
      category: "Premium SUV",
      image: "https://www.trivixam.com/api/upload/file/toyota-etios-09062026-1713.png",
      capacity: 7,
      fuelType: "Diesel",
      transmission: "Automatic/Manual",
      features: ["4x4 Capability", "Spacious", "Off-road Ready"],
      badge: "Adventure",
    },
  ];

  return (
    <section className="bg-white dark:bg-[#0A1120] text-gray-900 dark:text-gray-100 transition-colors duration-300 py-12 md:py-16 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#5EBC23]/5 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#0C4587]/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 md:space-y-12">
        {/* Section Header */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-full mb-2 shadow-sm transition-colors duration-300">
            <Car className="w-3 h-3 text-[#5EBC23]" />
            <span className="text-[9px] font-black text-gray-700 dark:text-gray-300 uppercase tracking-widest">
              Corporate Fleet
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-gray-900 dark:text-white leading-tight">
            Premium Vehicles for{" "}
            <span className="bg-gradient-to-r from-[#0C4587] to-[#5EBC23] bg-clip-text text-transparent">
              Business Excellence
            </span>
          </h2>
          <p className="text-xs sm:text-sm font-medium text-gray-600 dark:text-gray-400">
            From executive sedans to premium SUVs, our corporate fleet is maintained to the highest standards for your business travel needs.
          </p>
        </div>

        {/* Fleet Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {fleet.map((vehicle) => (
            <div
              key={vehicle.id}
              className="bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800 rounded-2xl overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
            >
              {/* Badge */}
              <div className="absolute top-4 right-4 z-10">
                <span className="inline-block bg-[#5EBC23] text-white text-[9px] font-black uppercase tracking-wider px-2.5 py-1 rounded-md shadow-md">
                  {vehicle.badge}
                </span>
              </div>

              {/* Vehicle Image */}
              <div className="relative h-40 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 overflow-hidden">
                <img
                  src={vehicle.image}
                  alt={vehicle.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Vehicle Details */}
              <div className="p-5 space-y-4">
                <div>
                  <p className="text-[10px] font-bold text-[#0C4587] dark:text-[#5EBC23] uppercase tracking-wider mb-1">
                    {vehicle.category}
                  </p>
                  <h3 className="text-base font-black text-gray-900 dark:text-white leading-tight">
                    {vehicle.name}
                  </h3>
                </div>

                {/* Specs */}
                <div className="grid grid-cols-3 gap-2 text-center">
                  <div className="bg-white dark:bg-[#0A1120] rounded-lg p-2 border border-gray-200 dark:border-gray-800">
                    <Users className="w-4 h-4 mx-auto text-[#0C4587] dark:text-[#5EBC23] mb-1" />
                    <p className="text-[10px] font-bold text-gray-700 dark:text-gray-300">
                      {vehicle.capacity}
                    </p>
                  </div>
                  <div className="bg-white dark:bg-[#0A1120] rounded-lg p-2 border border-gray-200 dark:border-gray-800">
                    <Fuel className="w-4 h-4 mx-auto text-[#0C4587] dark:text-[#5EBC23] mb-1" />
                    <p className="text-[10px] font-bold text-gray-700 dark:text-gray-300">
                      {vehicle.fuelType.split('/')[0]}
                    </p>
                  </div>
                  <div className="bg-white dark:bg-[#0A1120] rounded-lg p-2 border border-gray-200 dark:border-gray-800">
                    <Gauge className="w-4 h-4 mx-auto text-[#0C4587] dark:text-[#5EBC23] mb-1" />
                    <p className="text-[10px] font-bold text-gray-700 dark:text-gray-300">
                      {vehicle.transmission}
                    </p>
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-2">
                  {vehicle.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex items-center text-[10px] font-semibold text-gray-600 dark:text-gray-400"
                    >
                      <Shield className="w-3 h-3 mr-2 text-[#5EBC23] flex-shrink-0" />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-[#5EBC23] to-[#4CAF50] rounded-2xl p-6 md:p-8 shadow-xl shadow-green-900/20 dark:shadow-none flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden group border border-transparent dark:border-green-900/50">
          <div className="absolute -left-10 -top-10 w-64 h-64 bg-gradient-to-br from-white/20 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

          <div className="space-y-1.5 text-center md:text-left max-w-xl relative z-10">
            <h3 className="text-xl sm:text-2xl font-black tracking-tight text-white">
              Need Custom Fleet Solutions?
            </h3>
            <p className="text-[11px] sm:text-xs text-green-100/80 font-semibold leading-relaxed">
              We can customize vehicle selection based on your specific business requirements, budget, and brand preferences.
            </p>
          </div>

          <button className="w-full md:w-auto inline-flex items-center justify-center bg-white hover:bg-gray-100 text-[#0C4587] font-black text-[10px] sm:text-xs uppercase tracking-widest px-6 py-3.5 rounded-xl shadow-lg transition-all duration-300 flex-shrink-0 relative z-10">
            <span>Discuss Your Requirements</span>
            <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 ml-2" />
          </button>
        </div>
      </div>
    </section>
  );
}
