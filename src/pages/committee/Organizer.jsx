import React from "react";

const sections = [
  {
    title: "CONFERENCE CHAIR",
    items: [
      {
        name: "Dr. Sunita Patil",
        designation: "Director, SVKM's NMIMS, MPTP, Shirpur Campus",
      },
    ],
  },
  {
    title: "CONFERENCE CO-CHAIR",
    items: [
      {
        name: "Dr. Venkatadri Marriboyina",
        designation: "Associate Dean, SVKM's NMIMS, MPSTME, Shirpur Campus",
      },
    ],
  },
  {
    title: "CONVENORS",
    items: [],
  },
  {
    title: "COORDINATORS",
    items: [],
  },
  {
    title: "ORGANIZING COMMITTEE",
    items: [],
  },
  {
    title: "ADMINISTRATION",
    items: [],
  },
];

const Organizer = () => {
  return (
    <div className="container mx-auto px-4 py-8 sm:px-6 md:px-8">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 text-red-700">
        Program Organizing Committee
      </h1>

      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
        {sections.map((sec) => (
          <div key={sec.title} className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden">
            <div className="bg-red-700 text-white font-bold px-4 py-3 text-center text-sm sm:text-base uppercase tracking-wide">
              {sec.title}
            </div>
            <div className="p-5 min-h-[5rem] flex flex-col justify-center">
              {sec.items.length > 0 ? (
                sec.items.map((it, idx) => (
                  <div key={idx} className="text-center sm:text-left">
                    <div className="font-bold text-slate-800 text-base sm:text-lg">
                      {it.name}
                    </div>
                    <div className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                      {it.designation}
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center text-slate-400 italic text-sm py-2">
                  —
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Organizer;

