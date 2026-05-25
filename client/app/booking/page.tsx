"use client";

import React, { useState, useEffect, ChangeEvent, FormEvent } from "react";
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

export default function BookingPage(): React.ReactElement {
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
      const response = await fetch("http://localhost:5000/api/booking", {
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
      title: "Personal",
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

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100 flex items-center justify-center py-12 px-4">
        <div className="max-w-2xl w-full bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-900 rounded-3xl p-8 lg:p-12 text-center space-y-6 shadow-xl shadow-gray-200/40 dark:shadow-none animate-fade-in">
          <div className="w-20 h-20 bg-green-50 dark:bg-green-950/30 rounded-full flex items-center justify-center mx-auto">
            <CheckCircle className="w-10 h-10 text-[#5EBC23]" />
          </div>
          <h1 className="text-3xl font-black tracking-tight text-gray-900 dark:text-white">
            Booking Request Transmitted!
          </h1>
          <p className="text-sm text-gray-500 dark:text-gray-400 max-w-md mx-auto">
            Thank you,{" "}
            <span className="font-extrabold text-[#0C4587] dark:text-blue-400">
              {formData.name}
            </span>
            . Our fleet team is tracking allocations. A dynamic receipt index
            has been flagged to{" "}
            <span className="font-semibold text-gray-700 dark:text-gray-300">
              {formData.email}
            </span>
            .
          </p>

          <div className="bg-gray-50 dark:bg-gray-950 border border-gray-100 dark:border-gray-800 rounded-2xl p-6 text-left space-y-3">
            <h3 className="font-bold text-gray-400 text-xs uppercase tracking-widest flex items-center">
              <ClipboardList className="w-4 h-4 mr-1.5 text-[#0C4587] dark:text-blue-400" />{" "}
              Contract Summary Node
            </h3>
            <div className="space-y-2 text-sm font-semibold text-gray-600 dark:text-gray-400 border-t border-gray-100 dark:border-gray-800 pt-3 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">
              {selectedCarId && (
                <div className="sm:col-span-2 flex justify-between bg-blue-50/50 dark:bg-blue-950/20 p-2.5 rounded-xl border border-blue-100/50 dark:border-blue-900/30 mb-1">
                  <span className="text-[#0C4587] dark:text-blue-400">
                    Selected Vehicle Asset:
                  </span>
                  <span className="text-gray-900 dark:text-white uppercase font-mono text-xs font-bold">
                    {selectedCarId}
                  </span>
                </div>
              )}
              <div className="flex justify-between">
                <span>Renter Name:</span>
                <span className="text-gray-900 dark:text-white">
                  {formData.name}
                </span>
              </div>
              <div className="flex justify-between">
                <span>Network Phone:</span>
                <span className="text-gray-900 dark:text-white">
                  {formData.phone}
                </span>
              </div>
              <div className="flex justify-between">
                <span>Pickup Node:</span>
                <span className="text-gray-900 dark:text-white truncate max-w-[150px]">
                  {formData.pickupLocation}
                </span>
              </div>
              <div className="flex justify-between">
                <span>Dropoff Node:</span>
                <span className="text-gray-900 dark:text-white truncate max-w-[150px]">
                  {formData.dropoffLocation}
                </span>
              </div>
              <div className="flex justify-between">
                <span>Start Flags:</span>
                <span className="text-gray-900 dark:text-white">
                  {formData.fromDate} | {formData.fromTime}
                </span>
              </div>
              <div className="flex justify-between">
                <span>Return Handoff:</span>
                <span className="text-gray-900 dark:text-white">
                  {formData.untilDate} | {formData.untilTime}
                </span>
              </div>
            </div>
          </div>
          <p className="text-xs text-gray-400 font-mono animate-pulse">
            Auto-redirecting back to system dashboard loop...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors duration-300 py-6 lg:py-10">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* HEADER */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center space-x-2 bg-blue-50 dark:bg-blue-900/30 border border-blue-100 dark:border-blue-800/50 px-4 py-1.5 rounded-full shadow-sm">
            <Car className="w-4 h-4 text-[#5EBC23]" />
            <span className="text-xs font-bold text-[#0C4587] dark:text-blue-300 tracking-wide uppercase">
              Modular Dispatch Terminal
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-gray-900 dark:text-white">
            Book Your{" "}
            <span className="bg-gradient-to-r from-[#0C4587] to-[#5EBC23] bg-clip-text text-transparent">
              Ride
            </span>
          </h1>
          <p className="text-xs sm:text-sm max-w-3xl mx-auto font-medium">
            Complete the responsive step parameters to isolate and allocate your
            fleet asset immediately.
          </p>
        </div>

        {/* PROGRESS SYSTEM TRACKER */}
        <div className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-2 md:p-5 shadow-sm">
          <div className="flex items-center justify-between">
            {steps.map((step, index) => (
              <React.Fragment key={step.number}>
                <div className="flex flex-col items-center flex-1 relative group">
                  <div
                    className={`w-9 h-9 rounded-xl flex items-center justify-center border transition-all duration-300 font-bold text-xs ${
                      currentStep === step.number
                        ? "border-[#0C4587] bg-[#0C4587] text-white shadow-md shadow-blue-900/20"
                        : currentStep > step.number
                          ? "border-[#5EBC23] bg-[#5EBC23] text-white"
                          : "border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-gray-950 text-gray-400"
                    }`}
                  >
                    {currentStep > step.number ? (
                      <CheckCircle className="w-4 h-4" />
                    ) : (
                      step.icon
                    )}
                  </div>
                  <span
                    className={`text-[10px] font-bold tracking-tight uppercase mt-2 hidden sm:block ${
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
                  <div
                    className={`flex-1 h-[2px] mx-1 transition-all duration-300 ${currentStep > step.number ? "bg-[#5EBC23]" : "bg-gray-100 dark:bg-gray-800"}`}
                  />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* CORE FORM RENDERER */}
        <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-2 md:p-6 shadow-sm">
          {selectedCarId && (
            <div className="mb-6 flex items-center justify-between bg-gradient-to-r from-blue-50/50 to-transparent dark:from-blue-950/20 border border-blue-100/50 dark:border-blue-900/30 p-3.5 rounded-xl text-xs font-bold">
              <span className="text-gray-500 uppercase tracking-wider">
                Target Fleet Reservation Token:
              </span>
              <span className="text-[#0C4587] dark:text-blue-400 bg-white dark:bg-gray-950 px-3 py-1 rounded-lg border border-gray-100 dark:border-gray-800 font-mono uppercase">
                {selectedCarId}
              </span>
            </div>
          )}

          <form onSubmit={handleSubmit} noValidate>
            {/* STEP 1 BLOCK: PERSONAL */}
            {currentStep === 1 && (
              <div className="space-y-5 animate-fade-in">
                <div className="border-b border-gray-50 dark:border-gray-800/60 pb-3 flex items-center space-x-2">
                  <User className="w-4 h-4 text-[#0C4587]" />
                  <h2 className="text-lg font-bold text-gray-900 dark:text-white">
                    Personal Identification Metrics
                  </h2>
                </div>
                <div className="space-y-4">
                  {[
                    {
                      label: "Full Identity Name",
                      name: "name",
                      type: "text",
                      placeholder: "John Doe",
                      icon: <User className="w-4 h-4 text-gray-400" />,
                    },
                    {
                      label: "Communication Email Node",
                      name: "email",
                      type: "email",
                      placeholder: "john@example.com",
                      icon: <Mail className="w-4 h-4 text-gray-400" />,
                    },
                    {
                      label: "Active Mobile Index",
                      name: "phone",
                      type: "tel",
                      placeholder: "+91 XXXXX XXXXX",
                      icon: <Phone className="w-4 h-4 text-gray-400" />,
                    },
                  ].map((field) => (
                    <div key={field.name} className="space-y-1.5">
                      <label className="block text-[11px] font-bold uppercase tracking-wider">
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
                          className={`w-full bg-gray-100 dark:bg-gray-950 border rounded-xl pl-12 pr-4 py-2 text-sm focus:outline-none transition-all ${
                            errors[field.name]
                              ? "border-red-500 focus:border-red-500"
                              : "border-gray-100 dark:border-gray-800 focus:border-blue-500"
                          }`}
                        />
                      </div>
                      {errors[field.name] && (
                        <p className="text-red-500 text-xs font-semibold flex items-center">
                          <AlertCircle className="w-3.5 h-3.5 mr-1" />{" "}
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
                <div className="border-b border-gray-50 dark:border-gray-800/60 pb-3 flex items-center space-x-2">
                  <MapPin className="w-4 h-4 text-[#5EBC23]" />
                  <h2 className="text-lg font-bold text-gray-900 dark:text-white">
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
                    <div key={field.name} className="space-y-1.5">
                      <label className="block text-[11px] font-bold uppercase tracking-wider">
                        {field.label}
                      </label>
                      <div className="relative">
                        <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <input
                          type="text"
                          name={field.name}
                          value={formData[field.name as keyof BookingFormData]}
                          onChange={handleInputChange}
                          placeholder={field.placeholder}
                          className={`w-full bg-gray-100 dark:bg-gray-950 border rounded-xl pl-12 pr-4 py-2 text-sm focus:outline-none transition-all ${
                            errors[field.name]
                              ? "border-red-500 focus:border-red-500"
                              : "border-gray-100 dark:border-gray-800 focus:border-blue-500"
                          }`}
                        />
                      </div>
                      {errors[field.name] && (
                        <p className="text-red-500 text-xs font-semibold flex items-center">
                          <AlertCircle className="w-3.5 h-3.5 mr-1" />{" "}
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
                <div className="border-b border-gray-50 dark:border-gray-800/60 pb-3 flex items-center space-x-2">
                  <Calendar className="w-4 h-4 text-[#0C4587]" />
                  <h2 className="text-lg font-bold text-gray-900 dark:text-white">
                    Pickup Chronology Schedule
                  </h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-400">
                      Target Date
                    </label>
                    <div className="relative">
                      {/* <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" /> */}
                      <input
                        type="date"
                        name="fromDate"
                        value={formData.fromDate}
                        onChange={handleInputChange}
                        min={new Date().toISOString().split("T")[0]}
                        className="w-full bg-gray-100 dark:bg-gray-950 border border-gray-200 dark:border-gray-800 rounded-xl pl-12 pr-4 py-2 text-sm"
                      />
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-400">
                      Target Time Stamp
                    </label>
                    <div className="relative">
                      {/* <Clock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" /> */}
                      <input
                        type="time"
                        name="fromTime"
                        value={formData.fromTime}
                        onChange={handleInputChange}
                        className="w-full bg-gray-100 dark:bg-gray-950 border border-gray-200 dark:border-gray-800 rounded-xl pl-12 pr-4 py-2 text-sm"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* STEP 4 BLOCK: RETURN CLOSURE */}
            {currentStep === 4 && (
              <div className="space-y-5 animate-fade-in">
                <div className="border-b border-gray-50 dark:border-gray-800/60 pb-3 flex items-center space-x-2">
                  <Clock className="w-4 h-4 text-[#D48C3B]" />
                  <h2 className="text-lg font-bold text-gray-900 dark:text-white">
                    Return Closure Parameters
                  </h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-400">
                      Return Date
                    </label>
                    <div className="relative">
                      <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <input
                        type="date"
                        name="untilDate"
                        value={formData.untilDate}
                        onChange={handleInputChange}
                        min={
                          formData.fromDate ||
                          new Date().toISOString().split("T")[0]
                        }
                        className="w-full bg-gray-100 dark:bg-gray-950 border border-gray-200 dark:border-gray-800 rounded-xl pl-12 pr-4 py-2 text-sm"
                      />
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-400">
                      Return Time Stamp
                    </label>
                    <div className="relative">
                      <Clock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <input
                        type="time"
                        name="untilTime"
                        value={formData.untilTime}
                        onChange={handleInputChange}
                        className="w-full bg-gray-100 dark:bg-gray-950 border border-gray-200 dark:border-gray-800 rounded-xl pl-12 pr-4 py-2 text-sm"
                      />
                    </div>
                  </div>
                </div>

                {/* Verification Real-Time Summary Sub-Card */}
                <div className="bg-gray-50 dark:bg-gray-950 rounded-2xl border border-gray-100 dark:border-gray-800/60 p-5 mt-4 space-y-2 text-xs font-semibold text-gray-500">
                  <div className="flex justify-between">
                    <span>Renter Token:</span>
                    <span className="text-gray-900 dark:text-white">
                      {formData.name || "N/A"} ({formData.phone || "N/A"})
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Route Trajectory:</span>
                    <span className="text-gray-900 dark:text-white truncate max-w-xs">
                      {formData.pickupLocation || "N/A"} &rarr;{" "}
                      {formData.dropoffLocation || "N/A"}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Schedule Nodes:</span>
                    <span className="text-[#0C4587] dark:text-blue-400">
                      {formData.fromDate || "N/A"} to{" "}
                      {formData.untilDate || "N/A"}
                    </span>
                  </div>
                </div>
              </div>
            )}

            {/* WIZARD ACTIONS NAVIGATOR FOOTER */}
            <div className="flex items-center justify-between mt-8 pt-6 border-t border-gray-50 dark:border-gray-800/80">
              {currentStep > 1 ? (
                <button
                  type="button"
                  onClick={handlePrevious}
                  className="flex items-center space-x-2 text-xs uppercase tracking-wider font-bold text-gray-400 hover:text-gray-800 dark:hover:text-white transition-colors px-4 py-2.5 rounded-xl border border-transparent hover:bg-gray-50 dark:hover:bg-gray-800"
                >
                  <ArrowLeft className="w-4 h-4" /> <span>Back</span>
                </button>
              ) : (
                <div />
              )}

              {currentStep < 4 ? (
                <button
                  type="button"
                  onClick={handleNext}
                  className="flex items-center space-x-2 bg-[#0C4587] hover:bg-[#5EBC23] text-white text-xs uppercase tracking-widest font-black px-6 py-3.5 rounded-xl shadow-md transition-all duration-300"
                >
                  <span>Proceed</span> <ArrowRight className="w-4 h-4" />
                </button>
              ) : (
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex items-center space-x-2 bg-[#5EBC23] hover:bg-[#0C4587] text-white text-xs uppercase tracking-widest font-black px-8 py-3.5 rounded-xl shadow-md transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
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
                      <Send className="w-4 h-4" />{" "}
                      <span>Confirm Allocation</span>
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
