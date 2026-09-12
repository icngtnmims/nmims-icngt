import React from "react";

const Banner = () => {
  return (
    <div className="w-full bg-white border-b border-slate-100 shadow-2xs overflow-hidden">
      <img
        src="/logo/banner-2027.png"
        alt="ICNGT 2027 Banner"
        className="w-full h-auto object-contain max-h-44 sm:max-h-56 md:max-h-64 mx-auto block"
        loading="eager"
      />
    </div>
  );
};

export default Banner;
