import React from "react";
import { User } from "lucide-react";

const governanceMembers = [
  {
    name: "Shri. Amrish Patel",
    role: "Chancellor, NMIMS University • India",
    img: "/committee/amrish-patel.png",
  },
  {
    name: "Professor Sougata Ray",
    role: "Vice Chancellor, NMIMS University • India",
    img: "/committee/sougata-ray.png",
  },
  {
    name: "Dr. Meena Chintamaneni",
    role: "Pro Vice Chancellor, NMIMS University • India",
    img: "/committee/meena-chintamaneni.png",
  },
  {
    name: "Dr. Sharad Mhaiskar",
    role: "Provost (Administration), NMIMS University • India",
    img: "/committee/sharad-mhaiskar.png",
  },
  {
    name: "Dr. Abhishek Ranjan",
    role: "Pro Vice Chancellor, NMIMS University • India",
    img: "/committee/abhishek-ranjan.png",
  },
  {
    name: "Prof. Seema Mahajan",
    role: "Pro Vice Chancellor & Director (PDSE&FB), NMIMS University • India",
    img: "/committee/seema-mahajan.png",
  },
  {
    name: "Dr. Tanmoy Chakraborty",
    role: "Registrar, NMIMS University • India",
    img: "/committee/tanmoy-chakraborty.png",
  },
];

const Governance = () => {
  return (
    <div className="container mx-auto px-4 py-8 sm:px-6 md:px-8">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 text-red-700">
        Governance and Academic Leadership
      </h1>

      <div className="max-w-6xl mx-auto flex flex-wrap gap-8 justify-center">
        {governanceMembers.map((m, i) => (
          <div
            key={i}
            className="bg-white rounded-xl shadow-md border border-slate-100 p-6 flex flex-col items-center text-center w-full max-w-xs transition-all hover:shadow-lg hover:-translate-y-1"
          >
            <div className="w-32 h-32 mb-4 rounded-full overflow-hidden border-4 border-red-700 bg-slate-100 flex items-center justify-center shrink-0 shadow-inner">
              {m.img ? (
                <img
                  src={m.img}
                  alt={m.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              ) : (
                <User className="w-16 h-16 text-slate-400" />
              )}
            </div>
            <h3 className="font-bold text-lg mb-2 text-red-700">
              {m.name}
            </h3>
            <p className="text-sm text-slate-600 font-medium leading-relaxed">
              {m.role}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Governance;

