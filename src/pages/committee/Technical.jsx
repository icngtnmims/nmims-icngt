import React from "react";

const internationalMembers = [
  { name: "Dr. Gaurav Choudhary", university: "Technical University of Denmark (DTU) Compute", state: "", country: "Denmark" },
  { name: "Dr. Ankit Deo", university: "Lamar University", state: "Texas", country: "USA" },
];

const indianMembers = [
  { name: "Dr. Subhash Chandra Yadav", university: "Central University of Jharkhand", state: "Jharkhand", country: "India" },
  { name: "Dr Bhavna Bajpai", university: "Parul Institute of Engineering & Technology", state: "Gujarat", country: "India" },
  { name: "Dr. Sandeep Ushkewar", university: "SVKM's NMIMS Global University, Dhule", state: "Maharashtra", country: "India" },
  { name: "Dr. Pravin L. Sarode", university: "R. C. Patel Institute of Technology, Shirpur", state: "Maharashtra", country: "India" },
  { name: "Dr. Jitendra Sharma", university: "Parul University, Vadodara", state: "Gujarat", country: "India" },
  { name: "Dr. Shamik Tiwari", university: "Karnavati University, Gandhinagar", state: "Gujarat", country: "India" },
  { name: "Dr. Pabitra Mitra", university: "IIT Kharagpur", state: "West Bengal", country: "India" },
  { name: "Prof. Gourinath Banda", university: "IIT Indore", state: "Madhya Pradesh", country: "India" },
  { name: "Dr. Anil Kumar Singh", university: "MNNIT Allahabad, Prayagraj", state: "Uttar Pradesh", country: "India" },
  { name: "Dr. Ravindra K. Munje", university: "K. K. Wagh Institute of Engineering Education and Research, Nashik", state: "Maharashtra", country: "India" },
  { name: "Dr. Sunil R. Gupta", university: "P.R.M.I.T and R, Badnera - Amravati", state: "Maharashtra", country: "India" },
  { name: "Dr. Asif Ali", university: "Acropolis Institute of Technology & Research, Indore", state: "Madhya Pradesh", country: "India" },
  { name: "Dr. Mrs. Kirti H. Wanjale", university: "Vishwakarma Institute of Technology", state: "Maharashtra", country: "India" },
  { name: "Dr. Rais Khan", university: "Sandip University", state: "Maharashtra", country: "India" },
  { name: "Dr. M V Kamal", university: "Geethanjali College of Engineering and Technology (GCET), Hyderabad", state: "Telangana", country: "India" },
  { name: "Dr. Dushyant Kumar Singh", university: "MNNIT Allahabad", state: "Uttar Pradesh", country: "India" },
  { name: "Dr. Mithun B. Patil", university: "Central University of Karnataka (CUK), Kalaburagi", state: "Karnataka", country: "India" },
  { name: "Dr. Manoj Wairya", university: "MNNIT Allahabad", state: "Uttar Pradesh", country: "India" },
  { name: "Dr. Vikram Kulkarni", university: "SVKM's NMIMS University, Mumbai", state: "Maharashtra", country: "India" },
  { name: "Dr. P. Rizwan Ahmed", university: "Mazharul Uloom College (Autonomous), Ambur", state: "Tamil Nadu", country: "India" },
  { name: "Dr. Bhagwat Kakde", university: "Sandip Foundation's SITRC, Nashik", state: "Maharashtra", country: "India" },
  { name: "Dr Pavithra M", university: "Hindusthan Institute of Technology, Coimbatore", state: "Tamil Nadu", country: "India" },
  { name: "Dr. Cheripelli Ramesh", university: "Amity University Hyderabad", state: "Telangana", country: "India" },
  { name: "Dr. Pooja Joshi Baloni", university: "Swami Rama Himalayan University, Dehradun", state: "Uttarakhand", country: "India" },
  { name: "Dr. Vibhor Sharma", university: "Swami Rama Himalayan University, Dehradun", state: "Uttarakhand", country: "India" },
  { name: "Dr. Divvela Srinivasa Rao", university: "Lakireddy Bali Reddy College of Engineering, Mylavaram, Krishna District", state: "Andhra Pradesh", country: "India" },
  { name: "Dr. Mohammad Shahnawaz Shaikh", university: "Marwadi University", state: "Gujarat", country: "India" },
  { name: "Dr. Ashutosh Bhatt", university: "CDOE Dehradun", state: "Uttarakhand", country: "India" },
  { name: "Dr. Samta Jain Goyal", university: "Amity School of Engineering & Technology (ASET), Amity University", state: "Madhya Pradesh", country: "India" },
  { name: "Dr. A. Devi, M.E., Ph.D.", university: "IFET College of Engineering, Villupuram", state: "Tamil Nadu", country: "India" },
  { name: "Dr. Amol Dapkekar", university: "Thakur College of Engineering and Technology, Mumbai", state: "Maharashtra", country: "India" },
  { name: "Shailesh P. Bendale", university: "STES's NBN Sinhgad School of Engineering, Ambegaon (bk), Pune", state: "Maharashtra", country: "India" },
  { name: "Dr. Aakanksha Sharaff", university: "National Institute of Technology Raipur", state: "Chhattisgarh", country: "India" },
  { name: "Dr. Sachi Choudhary", university: "UPES Dehradun", state: "Uttarakhand", country: "India" },
  { name: "Dr. Satyendra Sharma", university: "Sage University, Indore", state: "Madhya Pradesh", country: "India" },
  { name: "Dr. Kuber Datt Gautam", university: "Medicaps University, Indore", state: "Madhya Pradesh", country: "India" },
  { name: "Dr. Vishwambhar Suklal Patil", university: "Government College of Engineering, Kolhapur", state: "Maharashtra", country: "India" },
  { name: "Dr. Deepak Srivastava", university: "Swami Rama Himalayan University, Dehradun", state: "Uttarakhand", country: "India" },
  { name: "Dr. Sanjiv Kumar Jain", university: "Medicaps University, Indore", state: "Madhya Pradesh", country: "India" },
  { name: "Dr. Gyana Ranjana Panigrahi", university: "Sri Sri University, Cuttack", state: "Odisha", country: "India" },
  { name: "Dr. Kalyani Kadam", university: "MIT AOE Alandi, Pune", state: "Maharashtra", country: "India" },
  { name: "Dr. Awaneesh Kumar Yadav", university: "IIT (BHU) Varanasi", state: "Uttar Pradesh", country: "India" },
  { name: "Dr. Nitin Goyal", university: "Central University of Haryana, Mahendergarh", state: "Haryana", country: "India" },
  { name: "Dr. Shitala Prasad", university: "IIT Goa", state: "Goa", country: "India" },
  { name: "Dr. Parshuram M. Kamble", university: "Central University of Karnataka (CUK), Kalaburagi", state: "Karnataka", country: "India" },
  { name: "Dr. Rajesh Kumar Mundotiya", university: "IIT Bhilai", state: "Chhattisgarh", country: "India" },
  { name: "Prof. Mohammed Juned Shaikh", university: "Rizvi College of Engineering, Bandra West, Mumbai", state: "Maharashtra", country: "India" },
  { name: "Dr Krishna Pal Sharma", university: "NIT Jalandhar", state: "Punjab", country: "India" },
  { name: "Dr. Archana Ojha", university: "MNNIT Allahabad, Prayagraj", state: "Uttar Pradesh", country: "India" },
  { name: "Dr. Naveen Kumar", university: "SVNIT Surat", state: "Gujarat", country: "India" },
  { name: "Dr. A. Sai Suneel", university: "Sri Padmavati Mahila Visvavidyalayam, Tirupati", state: "Andhra Pradesh", country: "India" },
  { name: "Dr. Ritesh Mishra", university: "Graphic Era (Deemed to be University), Dehradun", state: "Uttarakhand", country: "India" },
  { name: "Dr. Sanjay Dorle", university: "G H Raisoni College of Engineering, Nagpur", state: "Maharashtra", country: "India" },
  { name: "Dr. Shivaji Methe", university: "", state: "", country: "" },
  { name: "Dr. Sushma Jaiswal", university: "", state: "", country: "" },
  { name: "Gunjan Chhabra", university: "Swami Rama Himalayan University, Dehradun", state: "Uttarakhand", country: "India" },
  { name: "Dr. Suman Pant", university: "Swami Rama Himalayan University, Dehradun", state: "Uttarakhand", country: "India" },
  { name: "Prof. Dr. Thakare S.S.", university: "SNJB's Late Sau. K.B. Jain College of Engineering, Chandwad, Nashik", state: "Maharashtra", country: "India" },
  { name: "Vimala P, M.E(CSE)., (Ph.D)", university: "Hindusthan College of Technology, Selam", state: "Tamil Nadu", country: "India" },
  { name: "Dr. Ankit Jain", university: "South Asian University, New Delhi", state: "Delhi", country: "India" },
  { name: "Dr. Satyendra Sharma", university: "Graphic Era (Deemed to be University), Dehradun", state: "Uttarakhand", country: "India" },
  { name: "Dr. Preveen Goyal", university: "SUAS Indore", state: "Madhya Pradesh", country: "India" },
  { name: "Dr. Ami Munshi", university: "NMIMS Mumbai", state: "Maharashtra", country: "India" },
  { name: "Dr. Yogesh K. Kirange", university: "RCPIT Shirpur", state: "Maharashtra", country: "India" },
  { name: "Dr. Jhankar Moolchandani", university: "ASET (CSE), Amity University", state: "Madhya Pradesh", country: "India" },
  { name: "Sonal Jatkar", university: "", state: "Uttarakhand", country: "India" },
];

const technicalMembers = [...internationalMembers, ...indianMembers];

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

      <ul className="bg-white border border-slate-200 rounded-xl shadow-sm divide-y divide-slate-100">
        {technicalMembers.map((member, idx) => (
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
    </div>
  );
};

export default Technical;


