import React from "react";
import { GraduationCap, Building2 } from "lucide-react";

const technicalCommittee = [
  {
    category: "Deans",
    members: [
      {
        name: "Dr. Subhash Chandra Yadav",
        designation: "Professor, Dean & Head",
        affiliation: "Central University of Jharkhand",
      },
    ],
  },
  {
    category: "Professors",
    members: [
      {
        name: "Dr. Pabitra Mitra",
        designation: "Professor",
        affiliation: "IIT, Kharagpur",
      },
      {
        name: "Prof. Gourinath Banda",
        designation: "Professor",
        affiliation: "IIT Indore",
      },
    ],
  },
  {
    category: "Associate Professors",
    members: [
      {
        name: "Dr. Dushyant Kumar Singh",
        designation: "Associate Professor",
        affiliation: "MNIT Allahabad",
      },
      {
        name: "Dr. Mithun B. Patil",
        designation: "Associate Professor",
        affiliation: "Central University of Karnataka (CUK), Kalaburagi",
      },
      {
        name: "Dr. Manoj Wairya",
        designation: "Associate Professor",
        affiliation: "MNNIT Allahabad",
      },
    ],
  },
  {
    category: "Assistant Professors",
    members: [
      {
        name: "Dr. Awaneesh Kumar Yadav",
        designation: "Assistant Professor",
        affiliation: "IIT (BHU) Varanasi",
      },
      {
        name: "Dr. Nitin Goyal",
        designation: "Assistant Professor",
        affiliation: "Central University of Haryana, Mahendergarh",
      },
      {
        name: "Dr. Shitala Prasad",
        designation: "Assistant Professor",
        affiliation: "IIT, Goa",
      },
      {
        name: "Dr. Parshuram M. Kamble",
        designation: "Assistant Professor",
        affiliation: "Central University of Karnataka (CUK), Kalaburagi",
      },
      {
        name: "Dr. Rajesh Kumar Mundotiya",
        designation: "Assistant Professor",
        affiliation: "IIT Bhilai",
      },
    ],
  },
];

const Technical = () => {
  return (
    <div className="container mx-auto px-4 py-8 sm:px-6 md:px-8 max-w-5xl">
      <div className="text-center mb-10 space-y-2">
        <span className="inline-block px-4 py-1.5 rounded-full bg-red-50 text-red-700 text-xs sm:text-sm font-semibold border border-red-200 tracking-wide uppercase">
          ICNGT–2027 Committee
        </span>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-red-700 leading-tight">
          Program Technical Committee
        </h1>
        <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto pt-1">
          Distinguished academic experts and peer reviewers leading the technical program
        </p>
      </div>

      <div className="space-y-10">
        {technicalCommittee.map((group, groupIdx) => (
          <section key={groupIdx} className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100">
              <div className="p-2.5 rounded-xl bg-red-50 text-red-700 border border-red-200">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  {group.category}
                </h2>
                <p className="text-xs text-slate-500 font-medium">
                  {group.members.length} {group.members.length === 1 ? "Member" : "Members"}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {group.members.map((member, idx) => (
                <div
                  key={idx}
                  className="p-4 sm:p-5 rounded-xl bg-slate-50/70 hover:bg-red-50/30 border border-slate-200/80 hover:border-red-200 transition-all flex flex-col justify-between"
                >
                  <div>
                    <h3 className="font-bold text-slate-900 text-base sm:text-lg">
                      {member.name}
                    </h3>
                    <div className="text-xs sm:text-sm font-semibold text-red-700 mt-1">
                      {member.designation}
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-600 mt-3 pt-3 border-t border-slate-200/60">
                    <Building2 className="w-4 h-4 text-slate-400 shrink-0" />
                    <span>{member.affiliation}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default Technical;

