import React from "react";

const Downloads = () => {
  const downloadItems = [
    { name: "Sponsorship Form", link: "#" },
    { name: "Instructions For Presenters, Keynote Speakers", link: "#" },
    { name: "Oral Presentation Guidelines", link: "#" },
    { name: "Poster Presentation Guidelines", link: "#" },
    { name: "Abstract Template", link: "#" },
    { name: "Full Length Paper Template", link: "#" },
    { name: "Copyright Form", link: "#" },
    { name: "Conference Brochure", link: "#" },
  ];

  return (
    <div className="container mx-auto px-4 py-8 sm:px-6 md:px-8">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 text-red-700">
        Downloads
      </h1>

      <div className="prose max-w-none">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {downloadItems.map((item, index) => (
            <div key={index} className="flex flex-col gap-1">
              <div className="flex items-center gap-3 p-4 bg-base-200 rounded-lg border-2 border-transparent opacity-50 cursor-not-allowed select-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-red-700 shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                <span className="text-sm md:text-base font-medium">
                  {item.name}
                </span>
              </div>
              <p className="text-xs text-gray-400 ml-1">* Will be available soon</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Downloads;
