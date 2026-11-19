import React, { useState } from "react";
import { Search } from "lucide-react";

const internationalMembers = [
  { name: "Dr. Dharmendra Gurve", university: "Ryerson University", state: "Ontario", country: "Canada" },
  { name: "Dr. Arun Somani", university: "Iowa State University", state: "Iowa", country: "USA" },
  { name: "Dr. Deepak Dahiya", university: "University of Pittsburgh Johnstown", state: "Pennsylvania", country: "USA" },
  { name: "Dr. Ghanshyam G. Tejani", university: "Yuan Ze University, Taoyuan", state: "", country: "Taiwan" },
  { name: "Dr. Gousia Habib", university: "Finnish Center for Artificial Intelligence (FCAI)", state: "", country: "Finland" },
  { name: "Dr. Jey Chelladurai", university: "East Stroudsburg University", state: "Pennsylvania", country: "USA" },
  { name: "Dr. Manoj Kumar", university: "University of Wollongong in Dubai", state: "Dubai", country: "UAE" },
  { name: "Dr. Muhammad Fazal Ijaz", university: "Torrens University Australia", state: "", country: "Australia" },
  { name: "Dr. Nitin", university: "University of Cincinnati", state: "Ohio", country: "USA" },
  { name: "Dr. Sashikala Mishra", university: "The University of Western Australia", state: "Western Australia", country: "Australia" },
  { name: "Dr. Shilpa Gite", university: "University of York", state: "", country: "" },
  { name: "Dr. Vidy Potdar", university: "Curtin University", state: "Western Australia", country: "Australia" },
  { name: "Dr. Vishnu S. Pendyala", university: "San José State University", state: "California", country: "USA" },
  { name: "Dr. Vilas Gaidhane", university: "Birla Institute of Technology & Science (BITS), Pilani Dubai", state: "Dubai", country: "UAE" },
  { name: "Dyllon Dekok", university: "University of Cincinnati", state: "Ohio", country: "USA" },
  { name: "Mr. Anil Omanwar", university: "", state: "Western Australia", country: "Australia" },
  { name: "Mr. Kashyap Rajpal", university: "", state: "California", country: "USA" },
  { name: "Mr. Krunal Odrera", university: "", state: "Virginia", country: "USA" },
  { name: "Mr. Kushal Shah", university: "", state: "California", country: "USA" },
  { name: "Mr. Rakesh Rajput", university: "Swissgrid AG", state: "Aargau", country: "Switzerland" },
  { name: "Mr. Rishabh Kumar", university: "Bank of America", state: "Texas", country: "USA" },
  { name: "Mr. Uttasarg Singh", university: "Navy Federal Credit Union", state: "Virginia", country: "USA" },
  { name: "Mr. Vishnukant", university: "EIDOS Global", state: "England", country: "United Kingdom" },
  { name: "Mr. Adheip Nagarajan", university: "BDIPlus", state: "New York", country: "USA" },
  { name: "Mr. Aman Wadhwa", university: "InComm Payments", state: "Georgia", country: "USA" },
  { name: "Mr. Lavjeet Khanuja", university: "NielsenIQ", state: "", country: "USA" },
  { name: "Mr. Rishi Ashar", university: "Sun Life Financial", state: "Ontario", country: "Canada" },
  { name: "Mr. Saurabh Sharma", university: "", state: "British Columbia", country: "Canada" },
  { name: "Mr. Umang Revari", university: "", state: "Ontario", country: "Canada" },
  { name: "Ms. Manali Kapadia", university: "Medtronic BRC", state: "", country: "The Netherlands" },
  { name: "Ms. Gurpreet Khanuja", university: "Ultimate Kronos Group", state: "Georgia", country: "USA" },
  { name: "Prof. Dr. Kemal Polat, IEEE Senior Member", university: "Bolu Abant İzzet Baysal University", state: "Bolu", country: "Türkiye" },
];

const indianMembers = [
  { name: "Shri Madhav N. Welling", university: "SVKM / NMIMS (Advisor to the President-SVKM & Chancellor-NMIMS)", state: "Maharashtra", country: "India" },
  { name: "Shri Asoke Basak", university: "SVKM / NMIMS (Advisor to the President)", state: "Maharashtra", country: "India" },
  { name: "Dr. Koteswararao Anne", university: "MPSTME Mumbai, NMIMS (Dean)", state: "Maharashtra", country: "India" },
  { name: "Dr. Jagannath Sahoo", university: "SPPSPTM Mumbai, NMIMS (Dean)", state: "Maharashtra", country: "India" },
  { name: "Dr. Aleem Ali", university: "Chandigarh University, Mohali", state: "Punjab", country: "India" },
  { name: "Dr. Basant Agarwal", university: "Central University of Rajasthan, Ajmer", state: "Rajasthan", country: "India" },
  { name: "Dr. J. C. Patni", university: "Chandigarh University, Mohali", state: "Punjab", country: "India" },
  { name: "Dr. S. Ganapathy", university: "NITTTR, Bhopal", state: "Madhya Pradesh", country: "India" },
  { name: "Dr. Sonal Amit Jain", university: "Sardar Patel University, Vallabh Vidyanagar", state: "Gujarat", country: "India" },
  { name: "Dr. Sunil Pathak", university: "Amity University Rajasthan, Jaipur", state: "Rajasthan", country: "India" },
  { name: "Dr. Sunita Varma", university: "Shri G.S. Institute of Technology and Science (SGSITS), Indore", state: "Madhya Pradesh", country: "India" },
  { name: "Dr. V. Masilamani", university: "IIITDM Kancheepuram", state: "Tamil Nadu", country: "India" },
  { name: "Dr. Yogesh Hote", university: "IIT Roorkee", state: "Uttarakhand", country: "India" },
  { name: "Dr. Jayendra Kumar", university: "National Institute of Technology, Jamshedpur", state: "Jharkhand", country: "India" },
  { name: "Dr. Sateesh Kumar Peddoju", university: "Indian Institute of Technology, Roorkee", state: "Uttarakhand", country: "India" },
  { name: "Dr. Vimal Bhatia", university: "IIT Indore", state: "Madhya Pradesh", country: "India" },
  { name: "Dr. Vishal Satpute", university: "VNIT, Nagpur", state: "Maharashtra", country: "India" },
  { name: "Dr. Subhayu Das", university: "Partnership & Marketing Department", state: "", country: "" },
];

const advisoryMembers = [...internationalMembers, ...indianMembers];

const Advisory = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredMembers = advisoryMembers.filter(
    (member) =>
      member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      [member.university, member.state, member.country].some((f) =>
        f.toLowerCase().includes(searchTerm.toLowerCase())
      )
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
        <ul className="bg-white border border-slate-200 rounded-xl shadow-sm divide-y divide-slate-100">
          {filteredMembers.map((member, idx) => (
            <li key={idx} className="flex items-start gap-3 px-4 py-3 sm:px-5 hover:bg-red-50/40 transition-colors">
              <span className="w-1.5 h-1.5 rounded-full bg-red-700 shrink-0 mt-2.5" />
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                <span className="font-semibold text-slate-900">{member.name}</span>
                {[member.university, member.state, member.country]
                  .filter(Boolean)
                  .map((f) => `, ${f}`)
                  .join("")}
              </p>
            </li>
          ))}
        </ul>

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


