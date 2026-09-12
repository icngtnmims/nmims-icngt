import React from "react";

const Header = () => {
  return (
    <div className="bg-base-100 py-2 sm:py-4">
      <div className="flex items-center justify-between px-2 sm:px-4 md:px-6 gap-2">
        {/* Left: SVKM logo */}
        <img
          src="/logo/svkm-logo.webp"
          alt="SVKM Logo"
          className="h-8 sm:h-12 md:h-16 object-contain mr-1 sm:mr-3 shrink-0"
        />
        {/* Center: School logos */}
        <div className="flex items-center justify-center gap-1.5 sm:gap-4 md:gap-6 flex-wrap flex-1">
          <img
            src="/logo/mptp-shirpur.webp"
            alt="MPTP Shirpur"
            className="h-6 sm:h-9 md:h-11 object-contain"
          />
          <img
            src="/logo/mpstme-shirpur.webp"
            alt="MPSTME Shirpur"
            className="h-6 sm:h-9 md:h-11 object-contain"
          />
          <img
            src="/logo/sptm-shirpur.webp"
            alt="SPTM Shirpur"
            className="h-6 sm:h-9 md:h-11 object-contain"
          />
        </div>
        {/* Right: NMIMS logo 2 */}
        <img
          src="/logo/nmims-logo2.webp"
          alt="NMIMS Logo 2"
          className="h-8 sm:h-12 md:h-16 object-contain ml-1 sm:ml-3 shrink-0"
        />
      </div>
    </div>
  );
};

export default Header;
