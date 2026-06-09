"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  Sparkles,
  ChevronLeft,
  ChevronRight,
  MessageSquareQuote,
  Star,
  Quote,
} from "lucide-react";

// 1. TYPESCRIPT INTERFACES FOR TYPE SAFETY
interface Testimonial {
  id: string;
  name: string;
  role: string;
  avatar: string;
  rating: number;
  review: string;
}

export default function TestimonialsSection(): React.ReactElement {
  // Carousel reference and hover state
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  // 2. CURATED CUSTOMER REVIEW DATA
  const testimonials: Testimonial[] = [
    {
      id: "review-01",
      name: "Rajat Sharma",
      role: "Corporate Executive",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop",
      rating: 5,
      review:
        "Carry On Car Rental Pvt. Ltd. has completely transformed my business travels. The cars are impeccably clean, and the zero surge pricing policy is a lifesaver for our company budget.",
    },
    {
      id: "review-02",
      name: "Sneha Kapoor",
      role: "Travel Blogger",
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop",
      rating: 5,
      review:
        "Booked a Fortuner for our Dehradun trip. The 150-point mechanical check they promise is real. The car performed flawlessly in the hills. Highly recommended!",
    },
    {
      id: "review-03",
      name: "Vikram Malhotra",
      role: "Frequent Flyer",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop",
      rating: 4,
      review:
        "Their airport terminal tracking is spot on. My flight was delayed by 2 hours, but the chauffeur was waiting without any extra delay penalties. Brilliant service.",
    },
    {
      id: "review-04",
      name: "Aarti Desai",
      role: "Event Planner",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&auto=format&fit=crop",
      rating: 5,
      review:
        "We rent luxury sedans for our VIP guests. The seamless booking process and professional chauffeurs make Carry On our only choice for premium transport.",
    },
    {
      id: "review-05",
      name: "Karan Singh",
      role: "Software Architect",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150&auto=format&fit=crop",
      rating: 5,
      review:
        "Transparent pricing is their best feature. What I saw on the checkout page was exactly what I paid. No hidden tolls, no surprise taxes. Very ethical business.",
    },
  ];

  // 3. AUTO-SCROLL LOGIC (Pauses on hover)
  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        // Use first child to dynamically calculate scroll step
        const card = scrollRef.current.children[0] as HTMLElement;
        if (!card) return;

        const cardWidth = card.offsetWidth;
        const gap = 16; // Matches gap-4 (1rem = 16px)
        const scrollAmount = cardWidth + gap;

        // Smooth rewind if at the end
        if (scrollLeft + clientWidth >= scrollWidth - 10) {
          scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          scrollRef.current.scrollBy({
            left: scrollAmount,
            behavior: "smooth",
          });
        }
      }
    }, 3500);

    return () => clearInterval(interval);
  }, [isHovered]);

  // 4. MANUAL SCROLL LOGIC FOR ARROWS
  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const card = scrollRef.current.children[0] as HTMLElement;
      if (!card) return;

      const cardWidth = card.offsetWidth;
      const gap = 16; // Matches gap-4
      const scrollAmount = cardWidth + gap;

      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors duration-300 py-12 md:py-16 relative overflow-hidden">
      {/* Custom CSS to hide scrollbar but keep functionality */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        .hide-scroll::-webkit-scrollbar { display: none; }
        .hide-scroll { -ms-overflow-style: none; scrollbar-width: none; }
      `,
        }}
      />

      {/* Background Decorative Mesh Elements */}
      <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-[#5EBC23]/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 md:space-y-10">
        {/* SECTION HEADER BLOCK */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-full mb-2 shadow-sm transition-colors duration-300">
            <MessageSquareQuote className="w-3 h-3 text-[#5EBC23]" />
            <span className="text-[9px] font-black text-[#0C4587] dark:text-gray-200 uppercase tracking-widest">
              Client Stories
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-gray-900 dark:text-white leading-tight">
            <span className="bg-gradient-to-r from-[#0C4587] to-[#5EBC23] bg-clip-text text-transparent">
              10 Years
            </span>{" "}
            of Trusted Service
          </h2>
          <p className="text-xs sm:text-sm font-medium text-gray-600 dark:text-gray-400 max-w-lg mx-auto">
            Don't just take our word for it. Read what our premium clients have
            to say about their experience with Carry On Car Rental Pvt. Ltd.
          </p>
        </div>

        {/* AUTO-SCROLLING CAROUSEL WRAPPER */}
        <div
          className="relative -mx-4 px-4 sm:mx-0 sm:px-0 group/carousel"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onTouchStart={() => setIsHovered(true)}
          onTouchEnd={() => setIsHovered(false)}
        >
          {/* Edge Gradients for smooth fade out */}
          <div className="absolute top-0 bottom-0 left-0 w-8 sm:w-16 bg-gradient-to-r from-gray-50 dark:from-gray-950 to-transparent z-10 pointer-events-none" />
          <div className="absolute top-0 bottom-0 right-0 w-8 sm:w-16 bg-gradient-to-l from-gray-50 dark:from-gray-950 to-transparent z-10 pointer-events-none" />

          {/* LEFT SCROLL ARROW */}
          <button
            onClick={() => scroll("left")}
            className="absolute left-2 sm:-left-5 top-1/2 -translate-y-1/2 z-20 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 p-2.5 rounded-full shadow-lg opacity-0 group-hover/carousel:opacity-100 hover:text-[#0C4587] dark:hover:text-[#5EBC23] hover:scale-110 transition-all duration-300 focus:outline-none"
            aria-label="Scroll Left"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* RIGHT SCROLL ARROW */}
          <button
            onClick={() => scroll("right")}
            className="absolute right-2 sm:-right-5 top-1/2 -translate-y-1/2 z-20 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 p-2.5 rounded-full shadow-lg opacity-0 group-hover/carousel:opacity-100 hover:text-[#0C4587] dark:hover:text-[#5EBC23] hover:scale-110 transition-all duration-300 focus:outline-none"
            aria-label="Scroll Right"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* THE SLIDER CONTAINER */}
          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto snap-x snap-mandatory hide-scroll pb-8 pt-2 scroll-smooth"
          >
            {testimonials.map((item) => (
              /* COMPACT REVIEW CARD */
              <div
                key={item.id}
                className="snap-start shrink-0 w-[75vw] sm:w-[300px] md:w-[320px] bg-white dark:bg-[#0A1120] border border-gray-200 dark:border-gray-800 rounded-2xl p-5 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col relative group hover:-translate-y-1"
              >
                {/* Background Watermark Icon */}
                <Quote className="absolute top-4 right-4 w-16 h-16 text-gray-100 dark:text-gray-800/50 -z-0 rotate-12 transition-colors duration-300 group-hover:text-blue-50 dark:group-hover:text-blue-900/20" />

                <div className="relative z-10 flex flex-col h-full">
                  {/* Star Ratings */}
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-3.5 h-3.5 ${i < item.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300 dark:text-gray-700"}`}
                      />
                    ))}
                  </div>

                  {/* Review Text */}
                  <p className="text-xs sm:text-sm font-medium text-gray-600 dark:text-gray-400 italic leading-relaxed mb-6 flex-1 line-clamp-4">
                    "{item.review}"
                  </p>

                  {/* Customer Profile Footer */}
                  <div className="flex items-center gap-3 pt-4 border-t border-gray-100 dark:border-gray-800/80 mt-auto">
                    <img
                      src={item.avatar}
                      alt={item.name}
                      className="w-10 h-10 rounded-full object-cover border-2 border-gray-100 dark:border-gray-800 group-hover:border-[#5EBC23] transition-colors duration-300"
                    />
                    <div>
                      <h4 className="text-xs sm:text-sm font-black text-gray-900 dark:text-white leading-tight">
                        {item.name}
                      </h4>
                      <p className="text-[9px] sm:text-[10px] font-bold text-[#0C4587] dark:text-[#5EBC23] uppercase tracking-widest mt-0.5">
                        {item.role}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
