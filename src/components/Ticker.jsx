import React from "react";

const Ticker = () => {
  const messages = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    <span key="1">
      Ut enim ad minim veniam,{" "}
      <a
        href="https://example.com"
        className="underline text-white hover:text-yellow-200"
        target="_blank"
        rel="noopener noreferrer"
      >
        visit our site
      </a>
      .
    </span>,
    "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.",
  ];

  // Duplicate messages for seamless loop
  const tickerContent = [...messages, ...messages];

  return (
    <div className="bg-red-700 text-white py-2 sm:py-2.5 md:py-3 overflow-hidden h-10 sm:h-11 md:h-12 flex items-center relative">
      <div className="flex animate-scroll">
        {tickerContent.map((message, index) => (
          <div
            key={index}
            className="flex-shrink-0 px-8 sm:px-12 md:px-16 text-sm sm:text-base whitespace-nowrap"
          >
            {typeof message === "string" ? <span>{message}</span> : message}
          </div>
        ))}
      </div>
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default Ticker;
