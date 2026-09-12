import React, { useState } from "react";
import { ChevronDown, ChevronUp, Cpu, Zap, Leaf, HeartPulse, Factory, GraduationCap, Sparkles, CheckCircle2, HelpCircle } from "lucide-react";

const CallForPapers = () => {
  // Track open/close state (null = none open, or index)
  const [expandedTracks, setExpandedTracks] = useState({ 0: true }); // Track I expanded by default

  const toggleTrack = (index) => {
    setExpandedTracks((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const toggleAllTracks = () => {
    const allExpanded = Object.keys(expandedTracks).length === tracksData.length && Object.values(expandedTracks).every(Boolean);
    if (allExpanded) {
      setExpandedTracks({});
    } else {
      const newExpanded = {};
      tracksData.forEach((_, i) => (newExpanded[i] = true));
      setExpandedTracks(newExpanded);
    }
  };

  const areasOfInterest = [
    "Artificial Intelligence, Machine Learning and Deep Learning",
    "Generative AI, Large Language Models and Intelligent Agents",
    "Explainable, Responsible and Ethical AI",
    "AI for Sustainability, Climate Action and Resource Optimization",
    "Data Science, Big Data Analytics and Predictive Modelling",
    "Internet of Things (IoT), Edge AI and Intelligent Connected Systems",
    "Cloud Computing, High-Performance Computing and AI Infrastructure",
    "Digital Twins, Simulation and Intelligent Modelling",
    "Robotics, Autonomous Systems and Intelligent Automation",
    "Computer Vision, Natural Language Processing and Speech Technologies",
    "Cybersecurity, Digital Forensics and AI-enabled Security",
    "Blockchain, Web3 and Decentralized Technologies",
    "Quantum Computing and Quantum-Inspired AI",
    "Smart Cities, Smart Infrastructure and Intelligent Transportation",
    "Renewable Energy, Smart Grids and Energy Optimization",
    "Climate Technologies and Low-Carbon Engineering",
    "Sustainable Agriculture, Precision Farming and Food Security",
    "Biotechnology, Bioinformatics, Genomics and Proteomics",
    "AI in Pharmaceutical Sciences and Drug Discovery",
    "Healthcare AI, mHealth, Telemedicine and Digital Health",
    "Personalized and Preventive Healthcare",
    "Electronic Health Records and Health Analytics",
    "Sustainable Manufacturing and Industry 4.0/5.0",
    "Circular Economy, Eco-materials and Green Manufacturing",
    "Smart Textiles and Sustainable Textile Technologies",
    "Nanotechnology and Advanced Materials",
    "3D Printing, Additive Manufacturing and Sustainable Design",
    "Augmented Reality, Virtual Reality and Extended Reality",
    "Human-Computer Interaction, UI/UX and Inclusive Technologies",
    "AI in Education and Intelligent Learning Systems",
    "Technology Governance, Policy, Ethics and Responsible Innovation",
    "Emerging and Next Generation Technologies for Sustainable Development",
  ];

  const tracksData = [
    {
      number: "I",
      title: "Artificial Intelligence, Intelligent Systems and Digital Transformation",
      icon: Cpu,
      topics: [
        "AI and ML",
        "Generative AI",
        "Deep Learning",
        "Explainable AI",
        "Computer Vision",
        "NLP",
        "Data Science",
        "IoT",
        "Edge AI",
        "Cloud Computing",
        "Digital Twins",
        "Robotics",
        "Intelligent Automation",
        "Cybersecurity",
        "Quantum AI",
      ],
    },
    {
      number: "II",
      title: "AI for Clean Energy, Climate Action and Resilient Infrastructure",
      icon: Zap,
      topics: [
        "Renewable Energy",
        "Smart Grids",
        "Energy Analytics",
        "AI for Energy Optimization",
        "Climate Modelling",
        "Carbon Management",
        "Low-Carbon Technologies",
        "Sustainable Infrastructure",
        "Smart Cities",
        "Intelligent Transportation",
        "Climate-Resilient Systems",
      ],
    },
    {
      number: "III",
      title: "AI for Sustainable Agriculture, Food Systems and Bio-resources",
      icon: Leaf,
      topics: [
        "Precision Agriculture",
        "AI-enabled Farming",
        "IoT in Agriculture",
        "Crop and Soil Analytics",
        "Integrated Nutrient Management",
        "Sustainable Agriculture",
        "Food Security",
        "Agri-supply Chains",
        "Biotechnology",
        "Bioinformatics",
        "Genomics",
        "Proteomics",
        "Bio-resource Management",
      ],
    },
    {
      number: "IV",
      title: "AI, Healthcare Technologies and Community Well-being",
      icon: HeartPulse,
      topics: [
        "Healthcare AI",
        "Medical Imaging",
        "AI-assisted Diagnosis",
        "Drug Discovery",
        "Pharmaceutical Sciences",
        "mHealth",
        "Telemedicine",
        "Personalized and Preventive Medicine",
        "Genomics",
        "Electronic Health Records",
        "Health Analytics",
        "Public Health",
        "Assistive Technologies",
        "Community Well-being",
      ],
    },
    {
      number: "V",
      title: "AI, Circular Economy, Smart Materials and Sustainable Manufacturing",
      icon: Factory,
      topics: [
        "Industry 4.0/5.0",
        "Intelligent Manufacturing",
        "AI-enabled Design",
        "Robotics",
        "3D Printing",
        "Additive Manufacturing",
        "Circular Economy",
        "Sustainable Textiles",
        "Smart Textiles",
        "Eco-materials",
        "Nanotechnology",
        "Green Manufacturing",
        "Waste Management",
        "Resource Optimization",
      ],
    },
    {
      number: "VI",
      title: "AI in Education, Society, Ethics, Policy and Technology Governance",
      icon: GraduationCap,
      topics: [
        "AI in Education",
        "Intelligent Learning Systems",
        "Human-AI Interaction",
        "UI/UX",
        "Digital Inclusion",
        "Responsible AI",
        "AI Ethics",
        "Privacy and Security",
        "Technology Policy",
        "AI Governance",
        "Technology for Social Good",
        "Sustainable Development",
        "Digital Society",
        "Future of Work",
      ],
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8 sm:px-6 md:px-8 max-w-5xl">
      {/* Title & Banner Header */}
      <div className="text-center mb-10 space-y-3">
        <span className="inline-block px-4 py-1.5 rounded-full bg-red-50 text-red-700 text-xs sm:text-sm font-semibold border border-red-200 tracking-wide uppercase">
          Call for Papers — ICNGT–2027
        </span>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-red-700 leading-tight">
          Call for Papers
        </h1>
        <p className="text-base sm:text-xl font-bold text-slate-800 max-w-3xl mx-auto pt-2">
          Artificial Intelligence for a Sustainable and Resilient Future
        </p>
      </div>

      {/* Overview Paragraphs Card */}
      <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200 mb-12 space-y-5 text-slate-700 leading-relaxed text-justify text-sm sm:text-base">
        <p>
          The <strong className="text-slate-900">International Conference on Next Generation Technologies (ICNGT–2027)</strong> invites original, unpublished, and high-quality research contributions from scholars, researchers, academicians, scientists, developers, engineers, students, industry professionals, practitioners, policymakers, and technology enthusiasts from India and across the world. The conference welcomes research articles, review papers, case studies, empirical studies, technological innovations, and application-oriented research for presentation and possible publication.
        </p>
        <p>
          <strong className="text-slate-900">ICNGT–2027</strong> aims to provide a multidisciplinary platform for exploring how Artificial Intelligence (AI), emerging digital technologies, advanced engineering systems, biotechnology, healthcare innovations, and sustainable technologies can contribute to a more inclusive, resilient, resource-efficient, and sustainable future.
        </p>
        <p>
          The conference places <strong className="text-slate-900">Artificial Intelligence at the core</strong> of Next Generation Technologies, with particular emphasis on responsible and meaningful applications of AI for addressing environmental, economic, industrial, agricultural, healthcare, educational, and societal challenges. Contributions are encouraged to demonstrate innovative methodologies, practical applications, interdisciplinary approaches, intelligent decision-making, technological convergence, and measurable contributions to sustainability and quality of life.
        </p>
      </div>

      {/* Areas of Interest Section */}
      <div className="mb-14">
        <div className="flex items-center gap-3 mb-6">
          <Sparkles className="w-6 h-6 text-red-700 shrink-0" />
          <h2 className="text-2xl sm:text-3xl font-bold text-red-700">
            Areas of Interest
          </h2>
        </div>
        <p className="text-sm sm:text-base text-slate-600 mb-6">
          Submissions are invited in, but are not limited to, the following key domains:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {areasOfInterest.map((area, index) => (
            <div
              key={index}
              className="flex items-start gap-3 p-3.5 bg-slate-50/80 hover:bg-red-50/40 rounded-xl border border-slate-200/80 hover:border-red-200 transition-colors"
            >
              <CheckCircle2 className="w-4 h-4 text-red-700 mt-0.5 shrink-0" />
              <span className="text-xs sm:text-sm font-medium text-slate-800">
                {area}
              </span>
            </div>
          ))}
        </div>
        <p className="text-xs sm:text-sm text-slate-500 italic mt-4 text-center">
          * Contributions addressing interdisciplinary applications and emerging technologies at the intersection of AI and sustainability are particularly encouraged.
        </p>
      </div>

      {/* Conference Tracks Section */}
      <div className="mb-14">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-red-700">
              Conference Tracks
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Click on any track to reveal its sub-topics & details
            </p>
          </div>
          <button
            onClick={toggleAllTracks}
            className="self-start sm:self-center px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg bg-red-700 text-white hover:bg-red-800 transition-colors shadow-sm"
          >
            {Object.keys(expandedTracks).length === tracksData.length && Object.values(expandedTracks).every(Boolean)
              ? "Collapse All Tracks"
              : "Expand All Tracks"}
          </button>
        </div>

        {/* Tracks Accordion List */}
        <div className="space-y-4">
          {tracksData.map((track, index) => {
            const IconComp = track.icon;
            const isExpanded = !!expandedTracks[index];

            return (
              <div
                key={index}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden bg-white ${
                  isExpanded
                    ? "border-red-700 shadow-md ring-1 ring-red-700/20"
                    : "border-slate-200 hover:border-red-300 shadow-sm"
                }`}
              >
                {/* Track Card Header (Clickable) */}
                <button
                  onClick={() => toggleTrack(index)}
                  className="w-full text-left p-5 sm:p-6 flex items-start justify-between gap-4 hover:bg-slate-50/50 transition-colors"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-red-50 text-red-700 shrink-0 mt-0.5">
                      <IconComp className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="px-2.5 py-0.5 rounded-md bg-red-700 text-white font-bold text-xs">
                          Track {track.number}
                        </span>
                        <span className="text-xs text-slate-500 font-medium">
                          ({track.topics.length} Sub-topics)
                        </span>
                      </div>
                      <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                        {track.title}
                      </h3>
                    </div>
                  </div>
                  <div className="p-2 rounded-full text-slate-500 hover:text-red-700 shrink-0 mt-1">
                    {isExpanded ? (
                      <ChevronUp className="w-5 h-5 text-red-700" />
                    ) : (
                      <ChevronDown className="w-5 h-5" />
                    )}
                  </div>
                </button>

                {/* Track Content (Expanded View) */}
                {isExpanded && (
                  <div className="px-5 pb-6 sm:px-6 sm:pb-6 pt-2 border-t border-slate-100 bg-red-50/10">
                    <h4 className="text-xs font-bold text-red-700 uppercase tracking-wider mb-3">
                      Sub-topics & Focus Areas:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {track.topics.map((topic, topicIdx) => (
                        <span
                          key={topicIdx}
                          className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 hover:border-red-300 text-xs sm:text-sm font-medium text-slate-800 shadow-2xs transition-colors"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Cross-Cutting Theme Block */}
      <div className="bg-gradient-to-br from-red-800 to-red-950 text-white rounded-2xl p-6 sm:p-8 shadow-lg space-y-4">
        <div className="flex items-center gap-2">
          <HelpCircle className="w-5 h-5 text-red-300 shrink-0" />
          <h3 className="text-lg sm:text-xl font-bold tracking-wide uppercase text-red-200">
            Cross-Cutting Theme
          </h3>
        </div>

        <div className="p-4 sm:p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
          <p className="text-base sm:text-xl font-semibold text-center italic leading-relaxed text-red-50">
            «How can Artificial Intelligence and Next Generation Technologies be designed and deployed responsibly to create a more sustainable, resilient and inclusive future?»
          </p>
        </div>

        <p className="text-xs sm:text-sm text-red-100 leading-relaxed text-justify pt-1">
          Across all six tracks, ICNGT–2027 particularly encourages research addressing this core question. Research demonstrating real-world impact, interdisciplinary collaboration, technology transfer, scalable solutions, and alignment with the Sustainable Development Goals (SDGs) is especially welcome.
        </p>
      </div>
    </div>
  );
};

export default CallForPapers;

