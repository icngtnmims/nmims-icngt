import React from "react";

const MESSAGES = [
  "Stay tuned for the updates",
  // Add more messages here, e.g.:
];

const SEPARATOR = "\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u2022\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0"; // "      •      "

// Build one long repeating string / node list separated by bullets
// We tile enough copies so the track is much wider than the viewport.
const REPEAT = 8;

const tickerItems = Array.from({ length: REPEAT }, (_, i) =>
  MESSAGES.map((msg, j) => (
    <React.Fragment key={`${i}-${j}`}>
      <span>{msg}</span>
      <span aria-hidden="true">{SEPARATOR}</span>
    </React.Fragment>
  ))
).flat();

const Ticker = () => {
  return (
    <div
      className="bg-red-700 text-white py-2 sm:py-2.5 overflow-hidden flex items-center"
      aria-label="Announcements ticker"
    >
      {/* Outer mask hides overflow cleanly on both edges */}
      <div className="flex w-full overflow-hidden">
        {/* scrollTrack moves from 0 → -50% so the second half
            is identical to the first, giving a seamless loop */}
        <div className="flex animate-ticker whitespace-nowrap will-change-transform">
          {/* Two identical halves — when the first scrolls fully off-screen
              the second takes its place and the animation loops invisibly */}
          <span className="flex items-center text-sm sm:text-base px-4">
            {tickerItems}
          </span>
          <span
            className="flex items-center text-sm sm:text-base px-4"
            aria-hidden="true"
          >
            {tickerItems}
          </span>
        </div>
      </div>

      <style>{`
        @keyframes ticker {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        .animate-ticker {
          animation: ticker 18s linear infinite;
        }
        .animate-ticker:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default Ticker;
