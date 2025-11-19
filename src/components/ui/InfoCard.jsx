import React from "react";

const InfoCard = ({ children, className = "" }) => {
  return (
    <div className={`bg-base-200 p-4 rounded-lg ${className}`}>{children}</div>
  );
};

export default InfoCard;
