import React from "react";

const sections = [
  {
    title: 'CO-CONVENERS',
    items: [
      'Dr. Venkatadri Marriboyina, Associate Dean, MPSTME, Shirpur',
      'Dr. Vijay Shivankar I/c Associate Dean, Centre for Textile Functions, Shirpur',
      'Dr. Indraraj Singh, Associate Dean School of Agricultural Sciences & Technology, Shirpur'
    ]
  },
  {
    title: 'COORDINATORS',
    items: [
      'Dr. G L Gupta, Professor, SPTM',
      'Dr. Shashikant Bagade, Associate Professor, SPTM',
      'Dr. Payal Dande, Assistant Professor, SPTM',
      'Dr Preeti Sangave, Associate Professor, SPTM'
    ]
  },
  {
    title: 'ORGANIZING COMMITTEE',
    items: [
      'Dr Sankha Bhattacharya, HoD Pharmaceutics, SPTM',
      'Dr Amit Page, HoD Pharm. Technology, SPTM',
      'Dr. Ravindra Pingili, HoD Pharmacology, SPTM',
      'Dr. Ranjit Shinde, HoD Pharm. Chemistry, SPTM',
      'Dr. RadhaKrishna Rambola, HoD CS, MPSTME',
      'Dr. Ritesh Dhanare, HoD, IT, MPSTME',
      'Dr. Suresh Kurumbanshi, HoD, CE, MPSTME',
      'Dr. Govind Rajput, HoD, BSH, MPSTME',
      'Dr. T. Krishna Chaitanya, SAST'
    ]
  },
  {
    title: 'ADMINISTRATION',
    items: [
      'Mr. Shivaji Gaikwad, Administrative Officer, MPTP Shirpur Campus',
      'Mr. Bhupesh Jaware, Deputy Registrar, MPTP Shirpur Campus'
    ]
  }
];

const Organizer = () => {
  return (
    <div className="container mx-auto px-4 py-8 sm:px-6 md:px-8">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 text-red-700">
        Program Organizing Committee
      </h1>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        {sections.map((sec) => (
          <div key={sec.title}>
            <div className="bg-red-700 text-white font-bold px-4 py-2 rounded-t text-center">
              {sec.title}
            </div>
            <div className="bg-white border rounded-b shadow-sm p-4 space-y-3">
              {sec.items.map((it, idx) => (
                <div key={idx} className="text-sm text-slate-700">{it}</div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Organizer;
