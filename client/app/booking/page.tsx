"use client";

import React, {
  useState,
  useEffect,
  ChangeEvent,
  FormEvent,
  Suspense,
} from "react";
import { useSearchParams, useRouter } from "next/navigation";
import {
  User,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Clock,
  ArrowRight,
  ArrowLeft,
  CheckCircle,
  Car,
  Send,
  AlertCircle,
  ClipboardList,
} from "lucide-react";

// TypeScript interface for robust state parameters
interface BookingFormData {
  name: string;
  email: string;
  phone: string;
  pickupLocation: string;
  dropoffLocation: string;
  fromDate: string;
  fromTime: string;
  untilDate: string;
  untilTime: string;
}

interface FormErrors {
  [key: string]: string;
}

function BookingFormContent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  // Checking if user redirected from a specific car route asset
  const selectedCarId =
    searchParams.get("carId") || searchParams.get("car") || null;

  const [currentStep, setCurrentStep] = useState<number>(1);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [errors, setErrors] = useState<FormErrors>({});

  const [formData, setFormData] = useState<BookingFormData>({
    name: "",
    email: "",
    phone: "",
    pickupLocation: "",
    dropoffLocation: "",
    fromDate: "",
    fromTime: "",
    untilDate: "",
    untilTime: "",
  });

  // Strict local real-time validation handler
  const validateField = (name: string, value: string): string => {
    if (!value.trim()) return "This field parameter is required";
    if (name === "email" && !/\S+@\S+\.\S+/.test(value))
      return "Invalid email matrix address";
    if (name === "phone" && !/^[0-9+\s-]{10,15}$/.test(value))
      return "Provide a valid contact network index";
    return "";
  };

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ): void => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    const fieldError = validateField(name, value);
    setErrors((prev) => ({ ...prev, [name]: fieldError }));
  };

  const validateStep = (step: number): boolean => {
    const stepErrors: FormErrors = {};
    let isValid = true;

    if (step === 1) {
      ["name", "email", "phone"].forEach((field) => {
        const err = validateField(
          field,
          formData[field as keyof BookingFormData],
        );
        if (err) {
          stepErrors[field] = err;
          isValid = false;
        }
      });
    } else if (step === 2) {
      ["pickupLocation", "dropoffLocation"].forEach((field) => {
        const err = validateField(
          field,
          formData[field as keyof BookingFormData],
        );
        if (err) {
          stepErrors[field] = err;
          isValid = false;
        }
      });
    } else if (step === 3) {
      if (!formData.fromDate) {
        stepErrors.fromDate = "Required";
        isValid = false;
      }
      if (!formData.fromTime) {
        stepErrors.fromTime = "Required";
        isValid = false;
      }
    } else if (step === 4) {
      if (!formData.untilDate) {
        stepErrors.untilDate = "Required";
        isValid = false;
      }
      if (!formData.untilTime) {
        stepErrors.untilTime = "Required";
        isValid = false;
      }
    }

    setErrors(stepErrors);
    return isValid;
  };

  const handleNext = (): void => {
    if (validateStep(currentStep)) {
      setCurrentStep((prev) => Math.min(prev + 1, 4));
    }
  };

  const handlePrevious = (): void => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const handleSubmit = async (e: FormEvent): Promise<void> => {
    e.preventDefault();
    if (!validateStep(4)) return;

    setIsSubmitting(true);

    const emailData = {
      cc: formData.email,
      subject: `New Booking Request - ${formData.name}`,
      selectedVehicle: selectedCarId,
      body: formData,
    };

    try {
      const response = await fetch("http://localhost:5001/api/booking", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(emailData),
      });

      const result = await response.json();

      if (result.success) {
        console.log("Emails sent successfully:", result);
        setIsSubmitted(true);
      } else {
        console.error("Failed to send emails:", result.message);
        alert("Failed to submit booking. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting booking:", error);
      alert("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }

    setTimeout(() => {
      setIsSubmitted(false);
      setCurrentStep(1);
      router.push("/");
    }, 6000);
  };

  const steps = [
    {
      number: 1,
      title: "Contact Info",
      icon: <User className="w-4 h-4" />,
    },
    { number: 2, title: "Locations Map", icon: <MapPin className="w-4 h-4" /> },
    {
      number: 3,
      title: "Pickup Timings",
      icon: <Calendar className="w-4 h-4" />,
    },
    { number: 4, title: "Return Handoff", icon: <Clock className="w-4 h-4" /> },
  ];

  // ==========================================
  // SUCCESS / CONFIRMATION SCREEN
  // ==========================================
  if (isSubmitted) {
    return (
      <div className="relative min-h-screen text-gray-900 dark:text-gray-100 flex items-center justify-center py-12 px-4 z-0 overflow-hidden">
        {/* Parallax Background */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed bg-no-repeat -z-30"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=2000&auto=format&fit=crop')",
          }}
        />
        {/* Frosted Overlay */}
        <div className="absolute inset-0 bg-white/85 dark:bg-[#050B14]/90 backdrop-blur-[8px] transition-colors duration-300 -z-20" />

        <div className="relative z-10 max-w-2xl w-full bg-white/95 dark:bg-[#0A1120]/90 backdrop-blur-xl border border-white/50 dark:border-gray-800/60 rounded-[2rem] p-8 lg:p-12 text-center space-y-6 shadow-2xl animate-fade-in">
          <div className="w-20 h-20 bg-green-50 dark:bg-green-950/30 border border-green-100 dark:border-green-900/50 rounded-full flex items-center justify-center mx-auto">
            <CheckCircle className="w-10 h-10 text-[#5EBC23]" />
          </div>
          <h1 className="text-3xl font-black tracking-tight text-gray-900 dark:text-white">
            Booking Request Transmitted!
          </h1>
          <p className="text-sm text-gray-600 dark:text-gray-400 max-w-md mx-auto">
            Thank you,{" "}
            <span className="font-extrabold text-[#0C4587] dark:text-blue-400">
              {formData.name}
            </span>
            . Our fleet team is tracking allocations. A dynamic receipt index
            has been flagged to{" "}
            <span className="font-semibold text-gray-800 dark:text-gray-200">
              {formData.email}
            </span>
            .
          </p>

          <div className="bg-gray-50/80 dark:bg-gray-950/50 backdrop-blur-sm border border-gray-200 dark:border-gray-800/80 rounded-2xl p-6 text-left space-y-3 shadow-inner">
            <h3 className="font-black text-gray-500 text-[10px] uppercase tracking-widest flex items-center">
              <ClipboardList className="w-3.5 h-3.5 mr-1.5 text-[#0C4587] dark:text-blue-400" />{" "}
              Contract Summary Node
            </h3>
            <div className="space-y-2 text-sm font-semibold text-gray-700 dark:text-gray-300 border-t border-gray-200 dark:border-gray-800 pt-3 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
              {selectedCarId && (
                <div className="sm:col-span-2 flex justify-between bg-blue-50/80 dark:bg-blue-950/30 p-3 rounded-xl border border-blue-100 dark:border-blue-900/50 mb-1">
                  <span className="text-[#0C4587] dark:text-blue-400 font-bold">
                    Selected Vehicle Asset:
                  </span>
                  <span className="text-gray-900 dark:text-white uppercase font-black text-xs">
                    {selectedCarId}
                  </span>
                </div>
              )}
              <div className="flex justify-between items-center border-b border-dashed border-gray-200 dark:border-gray-800 pb-2">
                <span className="text-gray-500 text-xs">Renter Name:</span>
                <span className="text-gray-900 dark:text-white text-right">
                  {formData.name}
                </span>
              </div>
              <div className="flex justify-between items-center border-b border-dashed border-gray-200 dark:border-gray-800 pb-2">
                <span className="text-gray-500 text-xs">Network Phone:</span>
                <span className="text-gray-900 dark:text-white text-right">
                  {formData.phone}
                </span>
              </div>
              <div className="flex justify-between items-center border-b border-dashed border-gray-200 dark:border-gray-800 pb-2">
                <span className="text-gray-500 text-xs">Pickup Node:</span>
                <span className="text-gray-900 dark:text-white text-right truncate max-w-[120px] sm:max-w-[150px]">
                  {formData.pickupLocation}
                </span>
              </div>
              <div className="flex justify-between items-center border-b border-dashed border-gray-200 dark:border-gray-800 pb-2">
                <span className="text-gray-500 text-xs">Dropoff Node:</span>
                <span className="text-gray-900 dark:text-white text-right truncate max-w-[120px] sm:max-w-[150px]">
                  {formData.dropoffLocation}
                </span>
              </div>
              <div className="flex justify-between items-center border-b border-dashed border-gray-200 dark:border-gray-800 pb-2">
                <span className="text-gray-500 text-xs">Start Flags:</span>
                <span className="text-gray-900 dark:text-white text-right">
                  {formData.fromDate} | {formData.fromTime}
                </span>
              </div>
              <div className="flex justify-between items-center border-b border-dashed border-gray-200 dark:border-gray-800 pb-2">
                <span className="text-gray-500 text-xs">Return Handoff:</span>
                <span className="text-gray-900 dark:text-white text-right">
                  {formData.untilDate} | {formData.untilTime}
                </span>
              </div>
            </div>
          </div>
          <p className="text-[10px] uppercase font-bold text-gray-400 tracking-widest animate-pulse pt-2">
            Auto-redirecting back to system dashboard loop...
          </p>
        </div>
      </div>
    );
  }

  // ==========================================
  // WIZARD FORM SCREEN
  // ==========================================
  return (
    <div className="relative min-h-screen text-gray-900 dark:text-gray-100 transition-colors duration-300 py-16 md:py-24 overflow-hidden z-0 flex items-center justify-center">
      {/* ========================================= */}
      {/* BACKGROUND IMAGE & FROSTED GLASS OVERLAY  */}
      {/* ========================================= */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed bg-no-repeat -z-30"
        style={{
          // Luxury Car Dashboard/Interior for booking vibe
          backgroundImage:
            "url('https://www.trivixam.com/api/upload/file/banner-31052026-0808.png')",
        }}
      />
      <div className="absolute inset-0 bg-white/15 dark:bg-[#050B14]/20 backdrop-blur-[2px] transition-colors duration-300 -z-20" />

      {/* Brand Radial Ambient Orbs */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#0C4587]/15 rounded-full blur-[100px] pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#5EBC23]/10 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full space-y-6 relative z-10">
        {/* HEADER */}
        <div className="text-center space-y-3 drop-shadow-sm mb-8">
          <div className="inline-flex items-center space-x-1.5 bg-white/80 dark:bg-gray-900/60 backdrop-blur-md border border-gray-200 dark:border-gray-800/80 px-3.5 py-1.5 rounded-full shadow-sm">
            <Car className="w-3.5 h-3.5 text-[#5EBC23]" />
            <span className="text-[10px] font-black text-[#0C4587] dark:text-gray-200 tracking-widest uppercase">
              Modular Dispatch Terminal
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-white leading-tight">
            Complete{" "}
            <span className="bg-gradient-to-r from-[#0C4587] to-[#5EBC23] bg-clip-text text-transparent">
              Booking
            </span>
          </h1>
        </div>

        {/* PROGRESS SYSTEM TRACKER (Glassmorphic) */}
        <div className="bg-white/90 dark:bg-[#0A1120]/80 backdrop-blur-md border border-white/50 dark:border-gray-800/60 rounded-2xl p-3 sm:p-4 shadow-lg">
          <div className="flex items-center justify-between">
            {steps.map((step, index) => (
              <React.Fragment key={step.number}>
                <div className="flex flex-col items-center flex-1 relative group">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all duration-500 font-bold text-xs ${
                      currentStep === step.number
                        ? "border-[#0C4587] bg-gradient-to-r from-[#0C4587] to-[#0A3C73] text-white shadow-lg shadow-blue-900/30 scale-110"
                        : currentStep > step.number
                          ? "border-[#5EBC23] bg-[#5EBC23] text-white"
                          : "border-gray-200 dark:border-gray-700 bg-gray-50/50 dark:bg-gray-900/50 text-gray-400"
                    }`}
                  >
                    {currentStep > step.number ? (
                      <CheckCircle className="w-4 h-4" />
                    ) : (
                      step.icon
                    )}
                  </div>
                  <span
                    className={`text-[9px] font-black tracking-widest uppercase mt-3 hidden sm:block transition-colors duration-300 ${
                      currentStep === step.number
                        ? "text-[#0C4587] dark:text-blue-400"
                        : currentStep > step.number
                          ? "text-[#5EBC23]"
                          : "text-gray-500"
                    }`}
                  >
                    {step.title}
                  </span>
                </div>
                {index < steps.length - 1 && (
                  <div className="flex-1 h-[2px] mx-2 relative overflow-hidden rounded-full bg-gray-200 dark:bg-gray-800">
                    <div
                      className="absolute top-0 left-0 h-full bg-[#5EBC23] transition-all duration-700 ease-out"
                      style={{
                        width: currentStep > step.number ? "100%" : "0%",
                      }}
                    />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* CORE FORM RENDERER (Glassmorphic Card) */}
        <div className="bg-white/95 dark:bg-[#0A1120]/90 backdrop-blur-xl border border-white/50 dark:border-gray-800/60 rounded-[2rem] p-5 md:p-8 shadow-2xl relative">
          {selectedCarId && (
            <div className="mb-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 bg-gradient-to-r from-blue-50/80 to-transparent dark:from-blue-900/20 border border-blue-100 dark:border-blue-900/50 p-4 rounded-2xl text-xs font-bold shadow-inner">
              <span className="text-gray-500 dark:text-gray-400 uppercase tracking-widest">
                Target Fleet Reservation Token:
              </span>
              <span className="text-[#0C4587] dark:text-blue-400 bg-white dark:bg-gray-950 px-3.5 py-1.5 rounded-lg border border-gray-200 dark:border-gray-800 font-black uppercase shadow-sm flex items-center">
                <Car className="w-3.5 h-3.5 mr-1.5" />
                {selectedCarId}
              </span>
            </div>
          )}

          <form onSubmit={handleSubmit} noValidate>
            {/* STEP 1 BLOCK: PERSONAL */}
            {currentStep === 1 && (
              <div className="space-y-5 animate-fade-in">
                <div className="border-b border-gray-100 dark:border-gray-800/80 pb-3 mb-5 flex items-center space-x-2">
                  <div className="p-2 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                    <User className="w-4 h-4 text-[#0C4587] dark:text-blue-400" />
                  </div>
                  <h2 className="text-lg font-black tracking-tight text-gray-900 dark:text-white">
                    Personal Identification Metrics
                  </h2>
                </div>
                <div className="space-y-4">
                  {[
                    {
                      label: "Full Identity Name",
                      name: "name",
                      type: "text",
                      placeholder: "Full Name",
                      icon: (
                        <User className="w-4 h-4 text-gray-400 group-focus-within:text-[#0C4587] transition-colors" />
                      ),
                    },
                    {
                      label: "Active Mobile Index",
                      name: "phone",
                      type: "tel",
                      placeholder: "Mobile Number...",
                      icon: (
                        <Phone className="w-4 h-4 text-gray-400 group-focus-within:text-[#0C4587] transition-colors" />
                      ),
                    },
                    {
                      label: "Communication Email Node",
                      name: "email",
                      type: "email",
                      placeholder: "Contact email...",
                      icon: (
                        <Mail className="w-4 h-4 text-gray-400 group-focus-within:text-[#0C4587] transition-colors" />
                      ),
                    },
                  ].map((field) => (
                    <div key={field.name} className="space-y-1.5 group">
                      <label className="block text-[10px] font-black uppercase tracking-widest text-gray-500 ml-1">
                        {field.label}
                      </label>
                      <div className="relative">
                        <div className="absolute left-4 top-1/2 -translate-y-1/2">
                          {field.icon}
                        </div>
                        <input
                          type={field.type}
                          name={field.name}
                          value={formData[field.name as keyof BookingFormData]}
                          onChange={handleInputChange}
                          placeholder={field.placeholder}
                          className={`w-full bg-gray-50/80 dark:bg-gray-900/50 backdrop-blur-sm border rounded-xl pl-11 pr-4 py-3 text-sm font-semibold focus:outline-none transition-all ${
                            errors[field.name]
                              ? "border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500"
                              : "border-gray-200 dark:border-gray-800 focus:border-[#0C4587] focus:ring-1 focus:ring-[#0C4587]"
                          }`}
                        />
                      </div>
                      {errors[field.name] && (
                        <p className="text-red-500 text-[10px] font-bold uppercase tracking-wide flex items-center pt-1">
                          <AlertCircle className="w-3 h-3 mr-1" />{" "}
                          {errors[field.name]}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* STEP 2 BLOCK: LOCATION MAPS */}
            {currentStep === 2 && (
              <div className="space-y-5 animate-fade-in">
                <div className="border-b border-gray-100 dark:border-gray-800/80 pb-3 mb-5 flex items-center space-x-2">
                  <div className="p-2 bg-green-50 dark:bg-green-900/20 rounded-lg">
                    <MapPin className="w-4 h-4 text-[#5EBC23]" />
                  </div>
                  <h2 className="text-lg font-black tracking-tight text-gray-900 dark:text-white">
                    Routing Coordinates
                  </h2>
                </div>
                <div className="space-y-4">
                  {[
                    {
                      label: "Pickup Address Node",
                      name: "pickupLocation",
                      placeholder: "Terminal, Airport or Local Station Address",
                    },
                    {
                      label: "Dropoff Destination Node",
                      name: "dropoffLocation",
                      placeholder: "Return Destination Address or Landmark",
                    },
                  ].map((field) => (
                    <div key={field.name} className="space-y-1.5 group">
                      <label className="block text-[10px] font-black uppercase tracking-widest text-gray-500 ml-1">
                        {field.label}
                      </label>
                      <div className="relative">
                        <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within:text-[#5EBC23] transition-colors" />
                        <input
                          type="text"
                          name={field.name}
                          value={formData[field.name as keyof BookingFormData]}
                          onChange={handleInputChange}
                          placeholder={field.placeholder}
                          className={`w-full bg-gray-50/80 dark:bg-gray-900/50 backdrop-blur-sm border rounded-xl pl-11 pr-4 py-3 text-sm font-semibold focus:outline-none transition-all ${
                            errors[field.name]
                              ? "border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500"
                              : "border-gray-200 dark:border-gray-800 focus:border-[#5EBC23] focus:ring-1 focus:ring-[#5EBC23]"
                          }`}
                        />
                      </div>
                      {errors[field.name] && (
                        <p className="text-red-500 text-[10px] font-bold uppercase tracking-wide flex items-center pt-1">
                          <AlertCircle className="w-3 h-3 mr-1" />{" "}
                          {errors[field.name]}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* STEP 3 BLOCK: PICKUP TIMELINE */}
            {currentStep === 3 && (
              <div className="space-y-5 animate-fade-in">
                <div className="border-b border-gray-100 dark:border-gray-800/80 pb-3 mb-5 flex items-center space-x-2">
                  <div className="p-2 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                    <Calendar className="w-4 h-4 text-[#0C4587] dark:text-blue-400" />
                  </div>
                  <h2 className="text-lg font-black tracking-tight text-gray-900 dark:text-white">
                    Pickup Chronology Schedule
                  </h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5 group">
                    <label className="block text-[10px] font-black uppercase tracking-widest text-gray-500 ml-1">
                      Target Date
                    </label>
                    <input
                      type="date"
                      name="fromDate"
                      value={formData.fromDate}
                      onChange={handleInputChange}
                      min={new Date().toISOString().split("T")[0]}
                      className="w-full bg-gray-50/80 dark:bg-gray-900/50 backdrop-blur-sm border border-gray-200 dark:border-gray-800 rounded-xl px-4 py-3 text-sm font-semibold focus:outline-none focus:border-[#0C4587] focus:ring-1 focus:ring-[#0C4587] transition-all [color-scheme:light] dark:[color-scheme:dark]"
                    />
                    {errors.fromDate && (
                      <p className="text-red-500 text-[10px] font-bold uppercase pt-1">
                        {errors.fromDate}
                      </p>
                    )}
                  </div>
                  <div className="space-y-1.5 group">
                    <label className="block text-[10px] font-black uppercase tracking-widest text-gray-500 ml-1">
                      Target Time Stamp
                    </label>
                    <input
                      type="time"
                      name="fromTime"
                      value={formData.fromTime}
                      onChange={handleInputChange}
                      className="w-full bg-gray-50/80 dark:bg-gray-900/50 backdrop-blur-sm border border-gray-200 dark:border-gray-800 rounded-xl px-4 py-3 text-sm font-semibold focus:outline-none focus:border-[#0C4587] focus:ring-1 focus:ring-[#0C4587] transition-all [color-scheme:light] dark:[color-scheme:dark]"
                    />
                    {errors.fromTime && (
                      <p className="text-red-500 text-[10px] font-bold uppercase pt-1">
                        {errors.fromTime}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* STEP 4 BLOCK: RETURN CLOSURE */}
            {currentStep === 4 && (
              <div className="space-y-5 animate-fade-in">
                <div className="border-b border-gray-100 dark:border-gray-800/80 pb-3 mb-5 flex items-center space-x-2">
                  <div className="p-2 bg-amber-50 dark:bg-amber-900/20 rounded-lg">
                    <Clock className="w-4 h-4 text-[#D48C3B]" />
                  </div>
                  <h2 className="text-lg font-black tracking-tight text-gray-900 dark:text-white">
                    Return Closure Parameters
                  </h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="block text-[10px] font-black uppercase tracking-widest text-gray-500 ml-1">
                      Return Date
                    </label>
                    <input
                      type="date"
                      name="untilDate"
                      value={formData.untilDate}
                      onChange={handleInputChange}
                      min={
                        formData.fromDate ||
                        new Date().toISOString().split("T")[0]
                      }
                      className="w-full bg-gray-50/80 dark:bg-gray-900/50 backdrop-blur-sm border border-gray-200 dark:border-gray-800 rounded-xl px-4 py-3 text-sm font-semibold focus:outline-none focus:border-[#D48C3B] focus:ring-1 focus:ring-[#D48C3B] transition-all [color-scheme:light] dark:[color-scheme:dark]"
                    />
                    {errors.untilDate && (
                      <p className="text-red-500 text-[10px] font-bold uppercase pt-1">
                        {errors.untilDate}
                      </p>
                    )}
                  </div>
                  <div className="space-y-1.5">
                    <label className="block text-[10px] font-black uppercase tracking-widest text-gray-500 ml-1">
                      Return Time Stamp
                    </label>
                    <input
                      type="time"
                      name="untilTime"
                      value={formData.untilTime}
                      onChange={handleInputChange}
                      className="w-full bg-gray-50/80 dark:bg-gray-900/50 backdrop-blur-sm border border-gray-200 dark:border-gray-800 rounded-xl px-4 py-3 text-sm font-semibold focus:outline-none focus:border-[#D48C3B] focus:ring-1 focus:ring-[#D48C3B] transition-all [color-scheme:light] dark:[color-scheme:dark]"
                    />
                    {errors.untilTime && (
                      <p className="text-red-500 text-[10px] font-bold uppercase pt-1">
                        {errors.untilTime}
                      </p>
                    )}
                  </div>
                </div>

                {/* Verification Real-Time Summary Sub-Card */}
                <div className="bg-white/50 dark:bg-[#050B14]/50 rounded-2xl border border-gray-200 dark:border-gray-800/80 p-5 mt-6 space-y-2.5 text-xs font-semibold text-gray-600 dark:text-gray-400 shadow-inner">
                  <h4 className="text-[9px] uppercase tracking-widest font-black text-gray-400 dark:text-gray-500 mb-2 border-b border-gray-200 dark:border-gray-800 pb-2">
                    Draft Summary
                  </h4>
                  <div className="flex justify-between items-center">
                    <span>Renter Token:</span>
                    <span className="text-gray-900 dark:text-white truncate max-w-[150px]">
                      {formData.name || "N/A"}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Route Trajectory:</span>
                    <span className="text-gray-900 dark:text-white truncate max-w-[180px]">
                      {formData.pickupLocation || "N/A"} &rarr;{" "}
                      {formData.dropoffLocation || "N/A"}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Schedule Nodes:</span>
                    <span className="text-[#0C4587] dark:text-blue-400 font-bold">
                      {formData.fromDate || "N/A"} to{" "}
                      {formData.untilDate || "N/A"}
                    </span>
                  </div>
                </div>
              </div>
            )}

            {/* WIZARD ACTIONS NAVIGATOR FOOTER */}
            <div className="flex items-center justify-between mt-8 pt-5 border-t border-gray-200 dark:border-gray-800/80">
              {currentStep > 1 ? (
                <button
                  type="button"
                  onClick={handlePrevious}
                  className="flex items-center space-x-1.5 text-[10px] sm:text-xs uppercase tracking-widest font-black text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors px-4 py-2.5 rounded-xl border border-transparent hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                  <ArrowLeft className="w-3.5 h-3.5" /> <span>Back Step</span>
                </button>
              ) : (
                <div />
              )}

              {currentStep < 4 ? (
                <button
                  type="button"
                  onClick={handleNext}
                  className="flex items-center space-x-1.5 bg-gradient-to-r from-[#0C4587] to-[#0A3C73] hover:from-[#5EBC23] hover:to-[#4CAF50] text-white text-[10px] sm:text-xs uppercase tracking-widest font-black px-6 sm:px-8 py-3 rounded-xl shadow-lg shadow-blue-900/20 hover:shadow-green-900/20 transition-all duration-300 group/btn"
                >
                  <span>Proceed</span>{" "}
                  <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              ) : (
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex items-center space-x-2 bg-[#5EBC23] hover:bg-[#0C4587] text-white text-[10px] sm:text-xs uppercase tracking-widest font-black px-6 sm:px-8 py-3 rounded-xl shadow-lg shadow-green-900/20 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed group/submit"
                >
                  {isSubmitting ? (
                    <>
                      <svg
                        className="animate-spin w-4 h-4"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      <span>Submitting...</span>
                    </>
                  ) : (
                    <>
                      <span>Confirm Booking</span>
                      <Send className="w-3.5 h-3.5 group-hover/submit:translate-x-1 group-hover/submit:-translate-y-0.5 transition-transform" />
                    </>
                  )}
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default function BookingPage(): React.ReactElement {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-[#050B14] flex flex-col items-center justify-center space-y-4">
          <div className="w-10 h-10 border-4 border-[#0C4587] border-t-[#5EBC23] rounded-full animate-spin"></div>
          <p className="text-[10px] uppercase tracking-widest font-black text-gray-500 animate-pulse">
            Initializing Terminal...
          </p>
        </div>
      }
    >
      <BookingFormContent />
    </Suspense>
  );
}
