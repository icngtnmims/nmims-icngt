import React from "react";

const technicalMembers = [
  { name: 'Dr Sangita Chaudhari', role: 'Professor, RAIT, Nerul, Navi Mumbai' },
  { name: 'Dr Vandana Patravale', role: 'Professor, Institute of Chemical Technology, Mumbai' },
  { name: 'Dr Varsha Patil', role: 'Professor, Matroshri COE, Nasik' },
  { name: 'Dr Sonali Patil', role: 'Professor, KJCE, SVU, Mumbai' },
  { name: 'Dr Hariram Chavan', role: 'Professor, KJSIT, UoM, Mumbai' },
  { name: 'Dr Pooja Raundale', role: 'Professor, CoE, UoM, Mumbai' },
  { name: 'Dr Namrata Ansari', role: 'Professor, KJSIT, UoM, Mumbai' },
  { name: 'Dr Priti Patil', role: 'Professor, D Y Patil IT, Akurdi, Pune' },
  { name: 'Mr. L C Patil', role: 'Deesan Tex Fab Pvt Ltd, Shirpur' }
];

const Technical = () => {
  return (
    <div className="container mx-auto px-4 py-8 sm:px-6 md:px-8">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 text-red-700">
        Program Technical Committee
      </h1>

      <div className="max-w-5xl mx-auto">
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {technicalMembers.map((m, i) => (
            <li key={i} className="p-4 bg-white rounded-lg shadow-sm border">
              <div className="text-sm font-semibold text-slate-800">{m.name}</div>
              <div className="text-xs text-slate-500 mt-1">{m.role}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Technical;
