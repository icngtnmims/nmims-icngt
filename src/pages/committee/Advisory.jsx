import React, { useState } from "react";
import { Search, Building2, UserCheck } from "lucide-react";

const advisoryMembers = [
  {
    name: "Dr. Dharmendra Gurve",
    affiliation: "Ryerson University, Toronto, Ontario",
  },
  {
    name: "Dr. Aleem Ali",
    affiliation: "Department of Computer Science & Engineering, Chandigarh University, Mohali, Punjab",
  },
  {
    name: "Dr. Arun Somani",
    affiliation: "Iowa State University, USA",
  },
  {
    name: "Dr. Basant Agarwal",
    affiliation: "Central University of Rajasthan, Ajmer, India",
  },
  {
    name: "Dr. Deepak Dahiya",
    affiliation: "School of Engineering and Computer Science at University of Pittsburgh Johnstown, Pennsylvania, US",
  },
  {
    name: "Dr. Ghanshyam G. Tejani",
    affiliation: "Yuan Ze University, Taoyuan, Taiwan",
  },
  {
    name: "Dr. Gousia Habib",
    affiliation: "Finnish Center for Artificial Intelligence (FCAI)",
  },
  {
    name: "Dr. J. C. Patni",
    affiliation: "Chandigarh University, Mohali",
  },
  {
    name: "Dr. Jey Chelladurai",
    affiliation: "East Stroudsburg University, USA",
  },
  {
    name: "Dr. Manoj Kumar",
    affiliation: "University of Wollongong in Dubai",
  },
  {
    name: "Dr. Muhammad Fazal Ijaz",
    affiliation: "Torrens University Australia",
  },
  {
    name: "Dr. Nitin",
    affiliation: "College of Engineering and Applied Sciences, University of Cincinnati",
  },
  {
    name: "Dr. S. Ganapathy",
    affiliation: "NITTTR, Bhopal",
  },
  {
    name: "Dr. Sashikala Mishra",
    affiliation: "The University of Western Australia",
  },
  {
    name: "Dr. Shilpa Gite",
    affiliation: "University of York",
  },
  {
    name: "Dr. Sonal Amit Jain",
    affiliation: "PG Department of Computer Science & Information Technology, Sardar Patel University, Vallabh Vidyanagar, India",
  },
  {
    name: "Dr. Sunil Pathak",
    affiliation: "Department of Computer Science & Engineering, Amity School of Engineering & Technology, Amity University Rajasthan, Jaipur, India",
  },
  {
    name: "Dr. Sunita Varma",
    affiliation: "Shri G.S. Institute of Technology and Science (SGSITS), Indore, Madhya Pradesh, India",
  },
  {
    name: "Dr. V. Masilamani",
    affiliation: "IIITDM Kancheepuram",
  },
  {
    name: "Dr. Vidy Potdar",
    affiliation: "Curtin University, Australia",
  },
  {
    name: "Dr. Vishnu S. Pendyala",
    affiliation: "San José State University, USA",
  },
  {
    name: "Dr. Yogesh Hote",
    affiliation: "Dept of EE, IIT Roorkee",
  },
  {
    name: "Dr. Jayendra Kumar",
    affiliation: "Department of Electronics and Communication Engineering, National Institute of Technology, Jamshedpur",
  },
  {
    name: "Dr. Sateesh Kumar Peddoju",
    affiliation: "Indian Institute of Technology, Roorkee",
  },
  {
    name: "Dr. Vilas Gaidhane",
    affiliation: "Birla Institute of Technology & Science (BITS), Pilani Dubai International Academic City P O Box 345055, Dubai, UAE",
  },
  {
    name: "Dr. Vimal Bhatia",
    affiliation: "Dept of EE, IIT Indore, Khandwa Road, Indore",
  },
  {
    name: "Dr. Vishal Satpute",
    affiliation: "Department of Electronics & Communication Engineering, VNIT, Nagpur",
  },
  {
    name: "Dyllon Dekok",
    affiliation: "College of Engineering and Applied Sciences, University of Cincinnati",
  },
  {
    name: "Mr. Anil Omanwar",
    affiliation: "Perth, Western Australia, Australia",
  },
  {
    name: "Mr. Kashyap Rajpal",
    affiliation: "San Diego, CA, USA",
  },
  {
    name: "Mr. Krunal Odrera",
    affiliation: "Aldie, Virginia, United States",
  },
  {
    name: "Mr. Kushal Shah",
    affiliation: "Silicon Valley, CA, USA",
  },
  {
    name: "Mr. Rakesh Rajput",
    affiliation: "Swissgrid AG, Aarau, Aargau, Switzerland",
  },
  {
    name: "Mr. Rishabh Kumar",
    affiliation: "Bank of America, Dallas Fort, Plano, Texas, United States",
  },
  {
    name: "Mr. Uttasarg Singh",
    affiliation: "Navy Federal Credit Union, Vienna, Virginia, United States",
  },
  {
    name: "Mr. Vishnukant",
    affiliation: "EIDOS Global, Bedford, Orpington, England, United Kingdom",
  },
  {
    name: "Mr. Adheip Nagarajan",
    affiliation: "Data Products, BDIPlus, New York, USA",
  },
  {
    name: "Mr. Aman Wadhwa",
    affiliation: "InComm Payments, Alpharetta, Georgia, United States",
  },
  {
    name: "Mr. Lavjeet Khanuja",
    affiliation: "NielsenIQ, USA",
  },
  {
    name: "Mr. Rishi Ashar",
    affiliation: "Sun Life Financial, Toronto, Ontario, Canada",
  },
  {
    name: "Mr. Saurabh Sharma",
    affiliation: "Vancouver, British Columbia, Canada",
  },
  {
    name: "Mr. Umang Revari",
    affiliation: "Toronto, Ontario, Canada",
  },
  {
    name: "Ms. Manali Kapadia",
    affiliation: "Medtronic BRC, The Netherlands",
  },
  {
    name: "Ms. Gurpreet Khanuja",
    affiliation: "Ultimate Kronos Group, Georgia, USA",
  },
  {
    name: "Prof. Dr. Kemal Polat, IEEE Senior Member",
    affiliation: "Bolu Abant İzzet Baysal University, Gölköy Campus",
  },
  {
    name: "Dr. Subhayu Das",
    affiliation: "Partnership & Marketing Department",
  },
];

const Advisory = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredMembers = advisoryMembers.filter(
    (member) =>
      member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.affiliation.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto px-4 py-8 sm:px-6 md:px-8 min-h-[60vh]">
      <div className="text-center max-w-3xl mx-auto mb-10">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-red-700 mb-3">
          Advisory Committee
        </h1>
        <p className="text-slate-600 text-sm sm:text-base">
          Distinguished academic scholars and industry experts serving on our advisory board.
        </p>

        {/* Search bar */}
        <div className="relative max-w-md mx-auto mt-6">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            placeholder="Search by name or institution..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-full text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-red-600/20 focus:border-red-600 transition"
          />
        </div>
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
            Showing {filteredMembers.length} of {advisoryMembers.length} Members
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {filteredMembers.map((member, idx) => (
            <div
              key={idx}
              className="bg-white border border-slate-200 hover:border-red-300 rounded-xl p-5 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-start justify-between gap-3 mb-2">
                  <div className="flex items-center gap-2">
                    <UserCheck className="w-4 h-4 text-red-700 shrink-0 mt-0.5" />
                    <h3 className="font-semibold text-slate-900 group-hover:text-red-700 transition-colors text-base leading-snug">
                      {member.name}
                    </h3>
                  </div>
                </div>
                {member.affiliation && (
                  <div className="flex items-start gap-2 mt-2 text-slate-600 text-xs leading-relaxed">
                    <Building2 className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
                    <span>{member.affiliation}</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {filteredMembers.length === 0 && (
          <div className="text-center py-12 bg-white rounded-xl border border-slate-200">
            <p className="text-slate-500 text-sm">No advisory members match your search standard.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Advisory;


