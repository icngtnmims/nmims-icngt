import React from "react";
import { Building2, UserCheck } from "lucide-react";

// Ordered by seniority: Dean/Head/Director, Professor, Associate Professor, Assistant Professor (not shown on the page)
const technicalMembers = [
  {
    name: "Dr. Subhash Chandra Yadav",
    designation: "Professor, Dean & Head",
    affiliation: "Central University of Jharkhand",
  },
  {
    name: "Dr Bhavna Bajpai",
    designation: "Professor, Dean & Head",
    affiliation: "Parul Institute of Engineering & Technology, Gujrat",
  },
  {
    name: "Dr. Sandeep Ushkewar",
    designation: "Chair SAC",
    affiliation: "SVKM NMIMS Global University, Dhule",
  },
  {
    name: "Dr. Pravin L. Sarode",
    designation: "Head of Department, Mechanical Engineering",
    affiliation: "R. C. Patel Institute of Technology, Shirpur, Maharashtra",
  },
  {
    name: "Dr. Jitendra Sharma",
    designation: "Director & Dean – Faculty of Management Studies",
    affiliation: "Parul University, Vadodara, Gujarat",
  },
  {
    name: "Dr. Shamik Tiwari",
    designation: "Professor & Dean",
    affiliation: "Karnavati University, Gandhinagar",
  },
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
  {
    name: "Dr. Anil Kumar Singh",
    designation: "Professor",
    affiliation: "MNNIT Allahabad, Prayagraj",
  },
  {
    name: "Dr. Ravindra K. Munje",
    designation: "Professor",
    affiliation: "K. K. Wagh Institute of Engineering Education and Research, Nashik",
  },
  {
    name: "Dr. Sunil R. Gupta",
    designation: "Professor",
    affiliation: "P.R.M.I.T and R, Badnera - Amravati",
  },
  {
    name: "Dr. Asif Ali",
    designation: "Professor",
    affiliation: "Acropolis Institute of Technology & Research Indore (MP)",
  },
  {
    name: "Dr. Mrs. Kirti H. Wanjale",
    designation: "Professor",
    affiliation: "Vishwakarma Institute of Technology",
  },
  {
    name: "Dr. Rais Khan",
    designation: "Professor",
    affiliation: "Sandip University",
  },
  {
    name: "Dr. M V Kamal",
    designation: "Professor",
    affiliation: "Geethanjali College of Engineering and Technology (GCET), Hyderabad",
  },
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
  {
    name: "Dr. Vikram Kulkarni",
    designation: "Associate Professor",
    affiliation: "SVKM's NMIMS University, Mumbai",
  },
  {
    name: "Dr. P. Rizwan Ahmed",
    designation: "Associate Professor",
    affiliation: "Mazharul Uloom College (Autonomous), Ambur",
  },
  {
    name: "Dr. Bhagwat Kakde",
    designation: "Associate Professor",
    affiliation: "Sandip Foundation's SITRC, Nashik",
  },
  {
    name: "Dr Pavithra M",
    designation: "Associate Professor",
    affiliation: "Hindusthan Institute of Technology, Coimbatore",
  },
  {
    name: "Dr. Cheripelli Ramesh",
    designation: "Associate Professor",
    affiliation: "Amity University Hyderabad",
  },
  {
    name: "Dr. Gaurav Choudhary",
    designation: "Associate Professor",
    affiliation: "Technical University of Denmark (DTU) Compute, Denmark",
  },
  {
    name: "Dr. Pooja Joshi Baloni",
    designation: "Associate Professor",
    affiliation: "Swami Rama Himalayan University, Dehradun, Uttarakhand, India",
  },
  {
    name: "Dr. Vibhor Sharma",
    designation: "Associate Professor",
    affiliation: "Swami Rama Himalayan University, Dehradun, Uttarakhand, India",
  },
  {
    name: "Dr. Divvela Srinivasa Rao",
    designation: "Associate Professor",
    affiliation: "Lakireddy Bali Reddy College of Engineering, Mylavaram, Krishna District, Andhra Pradesh, 521230, India",
  },
  {
    name: "Dr. Mohammad Shahnawaz Shaikh",
    designation: "Associate Professor",
    affiliation: "Marwadi University",
  },
  {
    name: "Dr. Ashutosh Bhatt",
    designation: "Associate Professor / Dy Director",
    affiliation: "CDOE Dehradun",
  },
  {
    name: "Dr. Samta Jain Goyal",
    designation: "Associate Professor",
    affiliation: "Amity School of Engineering & Technology (ASET), Amity University, Madhya Pradesh",
  },
  {
    name: "Dr. A. Devi, M.E., Ph.D.",
    designation: "Associate Professor",
    affiliation: "IFET College of Engineering, Villupuram-605602",
  },
  {
    name: "Dr. Amol Dapkekar",
    designation: "Associate Professor (ES&H Dept) and Dy. (Training Officer) (T&P Cell)",
    affiliation: "Thakur College of Engineering and Technology, Mumbai, Maharashtra, India",
  },
  {
    name: "Shailesh P. Bendale",
    designation: "Associate Professor",
    affiliation: "STES's NBN Sinhgad School of Engineering, Ambegaon (bk), Off Sinhgad Road, Pune - 411041",
  },
  {
    name: "Dr. Aakanksha Sharaff",
    designation: "Associate Professor, SMIEEE",
    affiliation: "CSE, National Institute of Technology Raipur (C.G.)",
  },
  {
    name: "Dr. Sachi Choudhary",
    designation: "Associate Professor, School of Computer Science",
    affiliation: "UPES Dehradun, India",
  },
  {
    name: "Dr. Satyendra Sharma",
    designation: "Associate Professor",
    affiliation: "Institute of Advanced Computing, Sage University Indore",
  },
  {
    name: "Dr. Kuber Datt Gautam",
    designation: "Associate Professor",
    affiliation: "Medicaps University Indore",
  },
  {
    name: "Dr. Vishwambhar Suklal Patil",
    designation: "Associate Professor",
    affiliation: "Government College of Engineering, Kolhapur",
  },
  {
    name: "Dr. Deepak Srivastava",
    designation: "Associate Professor",
    affiliation: "Swami Rama Himalayan University, Dehradun",
  },
  {
    name: "Dr. Sanjiv Kumar Jain",
    designation: "Senior Assistant Professor (S.G.)",
    affiliation: "Medicaps University, Indore",
  },
  {
    name: "Dr. Gyana Ranjana Panigrahi",
    designation: "Assistant Professor (Selection Grade)",
    affiliation: "Sri Sri University, Cuttack, Odisha",
  },
  {
    name: "Dr. Kalyani Kadam",
    designation: "Senior Assistant Professor",
    affiliation: "MIT AOE Alandi, Pune",
  },
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
  {
    name: "Prof. Mohammed Juned Shaikh",
    designation: "Assistant Professor",
    affiliation: "Rizvi College of Engineering, Bandra West",
  },
  {
    name: "Dr Krishna Pal Sharma",
    designation: "Assistant Professor",
    affiliation: "NIT, Jalandhar",
  },
  {
    name: "Dr. Archana Ojha",
    designation: "Assistant Professor",
    affiliation: "MNNIT Allahabad, Prayagraj",
  },
  {
    name: "Dr. Naveen Kumar",
    designation: "Assistant Professor",
    affiliation: "SVNIT Surat",
  },
  {
    name: "Dr. A. Sai Suneel",
    designation: "Assistant Professor",
    affiliation: "Sri Padmavati Mahila Visvavidyalayam, Tirupati",
  },
  {
    name: "Dr. Ritesh Mishra",
    designation: "Assistant Professor",
    affiliation: "Graphic Era (Deemed to be University), Dehradun, India",
  },
  {
    name: "Dr. Sanjay Dorle",
    designation: "Assistant Professor",
    affiliation: "G H Raisoni College of Engineering, Nagpur",
  },
  {
    name: "Dr. Shivaji Methe",
    designation: "Assistant Professor",
    affiliation: "",
  },
  {
    name: "Dr. Sushma Jaiswal",
    designation: "Assistant Professor",
    affiliation: "",
  },
  {
    name: "Gunjan Chhabra",
    designation: "Assistant Professor",
    affiliation: "SRHU",
  },
  {
    name: "Dr. Suman Pant",
    designation: "Assistant Professor",
    affiliation: "Swami Rama Himalayan University, Dehradun, Uttarakhand, 248140, India",
  },
  {
    name: "Prof. Dr. Thakare S.S.",
    designation: "Assistant Professor",
    affiliation: "SNJB's Late Sau. K.B. Jain College of Engineering, Neminagar, Chandwad-423101, Dist: Nashik, Maharashtra, India",
  },
  {
    name: "Vimala P, M.E(CSE)., (Ph.D)",
    designation: "Assistant Professor",
    affiliation: "Hindusthan College of Technology, Selam",
  },
  {
    name: "Dr. Ankit Jain",
    designation: "Assistant Professor, Faculty of Engineering & Technology (CSE)",
    affiliation: "South Asian University, Rajpur Road, Maidan Garhi, New Delhi-110068 (India)",
  },
  {
    name: "Dr. Satyendra Sharma",
    designation: "Assistant Professor (Research)",
    affiliation: "Graphic Era (Deemed to be University), Dehradun, India",
  },
  {
    name: "Dr. Preveen Goyal",
    designation: "Assistant Professor",
    affiliation: "SUAS Indore",
  },
  {
    name: "Dr. Ami Munshi",
    designation: "Assistant Professor",
    affiliation: "NMIMS Mumbai",
  },
  {
    name: "Dr. Yogesh K. Kirange",
    designation: "Assistant Professor",
    affiliation: "RCPIT Shirpur",
  },
  {
    name: "Dr. Ankit Deo",
    designation: "Assistant Professor",
    affiliation: "Lamar University, US",
  },
  {
    name: "Dr. Jhankar Moolchandani",
    designation: "",
    affiliation: "ASET_CSE, Amity University, Madhya Pradesh",
  },
  {
    name: "Sonal Jatkar",
    designation: "",
    affiliation: "Dehradun",
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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {technicalMembers.map((member, idx) => (
          <div
            key={idx}
            className="p-5 rounded-2xl bg-white hover:bg-red-50/20 border border-slate-200 hover:border-red-300 shadow-sm transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-start justify-between gap-2">
                <h3 className="font-bold text-slate-900 text-base sm:text-lg">
                  {member.name}
                </h3>
                <UserCheck className="w-5 h-5 text-red-700 shrink-0 mt-0.5" />
              </div>
              {member.designation && (
                <div className="text-xs sm:text-sm font-semibold text-red-700 mt-1">
                  {member.designation}
                </div>
              )}
            </div>
            {member.affiliation && (
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-600 mt-4 pt-3 border-t border-slate-100">
                <Building2 className="w-4 h-4 text-slate-400 shrink-0" />
                <span>{member.affiliation}</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Technical;


