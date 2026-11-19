import React from "react";

const Banner = () => {
  return (
    <div className="relative w-full bg-white border-b border-slate-100 shadow-2xs overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 py-3 md:py-4 flex flex-col sm:flex-row items-center gap-3 sm:gap-6">
        <img
          src="/logo/icngt-logo-sm.webp"
          alt="ICNGT Logo"
          className="h-20 sm:h-28 md:h-36 w-auto shrink-0"
          loading="eager"
        />

        <div className="flex-1 text-center font-serif font-bold text-slate-900 leading-snug sm:pr-16 md:pr-24">
          <p className="text-base sm:text-xl md:text-3xl">
            International Conference on Next Generation Technologies for
            Sustainable Development (ICNGT)- 2027
          </p>
          <p className="mt-1 text-sm sm:text-lg md:text-2xl">
            MPTP Shirpur, India
          </p>
          <p className="mt-1 text-sm sm:text-lg md:text-2xl uppercase tracking-wide text-red-700">
            Hybrid Mode
          </p>
        </div>
      </div>

      {/* Decorative corner shapes */}
      <div
        aria-hidden="true"
        className="hidden sm:block absolute -right-8 -bottom-8 w-28 h-28 md:w-40 md:h-40 rotate-45 bg-red-700"
      />
      <div
        aria-hidden="true"
        className="hidden sm:block absolute right-6 md:right-10 bottom-6 md:bottom-8 w-14 h-14 md:w-20 md:h-20 rotate-45 border-2 border-red-300"
      />
    </div>
  );
};

export default Banner;
