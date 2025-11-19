import React from "react";

const Header = () => {
  return (
    <div className="bg-base-100 pt-2 sm:pt-4">
      <div className="flex items-center justify-center gap-2 sm:gap-4 md:gap-6 px-2 sm:px-4 flex-wrap">
        <img
          src="/logo/nmims-logo.png"
          alt="NMIMS Logo"
          className="h-6 sm:h-10 md:h-12 object-contain"
        />
        <img
          src="/logo/mptp-shirpur.jpg"
          alt="MPTP Shirpur"
          className="h-5 sm:h-8 md:h-10 object-contain"
        />
        <img
          src="/logo/mpstme-shirpur.jpg"
          alt="MPSTME Shirpur"
          className="h-5 sm:h-8 md:h-10 object-contain"
        />
        <img
          src="/logo/sptm-shirpur.jpg"
          alt="SPTM Shirpur"
          className="h-5 sm:h-8 md:h-10 object-contain"
        />
        <img
          src="/logo/sast-shirpur.jpg"
          alt="SAST Shirpur"
          className="h-5 sm:h-8 md:h-10 object-contain"
        />
        {/* <img
          src="/logo/cft-shirpur.jpg"
          alt="CFT Shirpur"
          className="h-5 sm:h-8 md:h-10 object-contain"
        /> */}
      </div>
    </div>
  );
};

export default Header;
