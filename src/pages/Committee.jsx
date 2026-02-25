import React from "react";

const committeeGroups = [
  {
    title: "Patrons",
    members: [
      {
        name: "Shri Amrishbhai R. Patel",
        role: "Chancellor, SVKM's NMIMS & President, SVKM",
        img: "/committee/amrishbhai-patel.webp",
      },
      {
        name: "Shri Bhupeshbhai R. Patel",
        role: "Joint President, SVKM",
        img: "/committee/bhupeshbhai-patel.webp",
      },
    ],
  },
  {
    title: "Chief Patrons",
    members: [
      {
        name: "Dr. Ramesh Bhat",
        role: "Vice Chancellor, SVKM’s NMIMS",
        img: "/committee/ramesh-bhat-sir.webp",
      },
      {
        name: "Shri Rajgopal Bhandari",
        role: "Managing Committee Member, SVKM & Mentor, MPTP Shirpur Campus",
        img: "/committee/Rajgopal-sir.webp",
      },
      {
        name: "Mrs. Rita Patel",
        role: "Incharge, NMIMS Shirpur Campus",
        img: "/committee/rita-patel.webp",
      },
    ],
  },
  {
    title: "Chairperson & Convener",
    members: [
      {
        name: "Dr. Sunita R Patil",
        role: "Director, SVKM’s NMIMS Shirpur Campus\nChairperson & Editor",
        img: "/committee/shirpur-director.webp",
      },
      {
        name: "Dr. Venkatadri Marriboyina",
        role: "Professor & Associate Dean, MPSTME Shirpur\nConvener & Co-Editor",
        img: "/committee/Dr-Venkatadri-Marriboyina.webp",
      },
    ],
  },
];

const Committee = () => {
  return (
    <div className="container mx-auto px-4 py-8 sm:px-6 md:px-8 flex flex-col items-center space-y-12">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 text-red-700">
        Conference Committees
      </h1>
      {committeeGroups.map((group, i) => (
        <section key={group.title} className="w-full py-6">
          <h2 className="text-xl sm:text-2xl font-bold mb-8 text-red-700 text-center">
            {group.title}
          </h2>
          <div className="flex flex-wrap gap-8 justify-center">
            {group.members.map((m, idx) => (
              <div
                key={m.name}
                className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center w-full max-w-xs mb-4"
              >
                <div className="w-32 h-32 mb-4 rounded-full overflow-hidden border-4 border-red-700 bg-gray-100 flex items-center justify-center">
                  <img
                    src={m.img}
                    alt={m.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <h3 className="font-semibold text-lg mb-2 text-red-700">
                  {m.name}
                </h3>
                <p className="text-sm text-gray-700 whitespace-pre-line">
                  {m.role}
                </p>
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
};

export default Committee;
