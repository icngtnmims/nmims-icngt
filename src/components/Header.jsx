import React from "react";

const Header = () => {
  return (
    <div className="bg-base-100 pt-2 sm:pt-4">
      <div className="flex items-center justify-between px-2 sm:px-4">
        {/* Left: SVKM logo */}
        <img
          src="/logo/svkm-logo.webp"
          alt="SVKM Logo"
          className="h-7 sm:h-10 md:h-16 object-contain mr-2 sm:mr-4"
        />
        {/* Center: School logos */}
        <div className="flex items-center justify-center gap-2 sm:gap-4 md:gap-6 flex-wrap flex-1">
          <img
            src="/logo/mptp-shirpur.webp"
            alt="MPTP Shirpur"
            className="h-5 sm:h-8 md:h-10 object-contain"
          />
          <img
            src="/logo/mpstme-shirpur.webp"
            alt="MPSTME Shirpur"
            className="h-5 sm:h-8 md:h-10 object-contain"
          />
          <img
            src="/logo/sptm-shirpur.webp"
            alt="SPTM Shirpur"
            className="h-5 sm:h-8 md:h-10 object-contain"
          />
          <img
            src="/logo/sast-shirpur.webp"
            alt="SAST Shirpur"
            className="h-5 sm:h-8 md:h-10 object-contain"
          />
        </div>
        {/* Right: NMIMS logo 2 */}
        <img
          src="/logo/nmims-logo2.webp"
          alt="NMIMS Logo 2"
          className="h-7 sm:h-10 md:h-16 object-contain ml-2 sm:ml-4"
        />
      </div>
    </div>
  );
};

export default Header;
