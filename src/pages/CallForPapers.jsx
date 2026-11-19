import React, { useState } from "react";
import { ChevronDown, ChevronUp, BrainCircuit, Sparkles, Eye, Bot, ShieldCheck, Leaf, } from "lucide-react";

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

  const tracksData = [
    {
      number: "1",
      title: "Foundational, Learning and Computational Intelligence",
      icon: BrainCircuit,
      topics: [
        "AI Foundations, Intelligent Algorithms and Computational Intelligence",
        "Machine Learning, Deep Learning and Data-Centric Intelligence",
        "Federated, Distributed and Collaborative Learning",
        "Quantum Computing and Quantum Intelligence",
        "Neuromorphic Computing and Brain-Inspired Intelligence",
        "High-Performance, Parallel and Next-Generation Computing",
        "Digital Transformation and Intelligent Systems",
      ],
    },
    {
      number: "2",
      title: "Generative, Language, Cognitive and Human-Centred Intelligence",
      icon: Sparkles,
      topics: [
        "Generative AI, Foundation Models and Large Language Models",
        "Natural Language Processing and Language Intelligence",
        "Speech Processing and Conversational Intelligence",
        "Knowledge Representation, Cognitive and Neuro-Symbolic Intelligence",
        "Human–AI Interaction and Collaborative Intelligence",
        "AI in Education, Learning Analytics and Intelligent Tutoring Systems",
        "Human-Centred, Inclusive and Assistive Technologies",
      ],
    },
    {
      number: "3",
      title: "Visual, Multimodal, Spatial and Scientific Intelligence",
      icon: Eye,
      topics: [
        "Computer Vision, Image Processing and Video Intelligence",
        "Multimodal AI and Vision-Language Intelligence",
        "3D Vision, Spatial Computing and Immersive Technologies",
        "Scientific Computing and AI-Driven Scientific Discovery",
        "Medical Imaging and Computer-Aided Diagnosis",
        "Remote Sensing, Geospatial Intelligence and Earth Observation",
        "Sports Analytics and Performance Intelligence",
        "Pattern Recognition and Intelligent Signal Processing",
      ],
    },
    {
      number: "4",
      title: "Autonomous, Embodied, Agentic and Cyber-Physical Intelligence",
      icon: Bot,
      topics: [
        "Autonomous Agents, Agentic AI and Multi-Agent Systems",
        "Robotics, Embodied AI and Intelligent Automation",
        "Autonomous Mobility and Intelligent Transportation Systems",
        "Cyber-Physical Systems and Industrial Intelligence",
        "Smart Manufacturing, Industry 4.0/5.0 and Industrial IoT",
        "Digital Twins, Predictive Maintenance and Intelligent Control",
        "Smart Grids, Intelligent Energy Systems and Resilient Infrastructure",
        "Autonomous Systems for Disaster Prediction and Risk Management",
      ],
    },
    {
      number: "5",
      title: "Trustworthy, Secure, Responsible and Societal Intelligence",
      icon: ShieldCheck,
      topics: [
        "Responsible, Explainable and Interpretable AI",
        "Trustworthy, Reliable, Safe and Ethical AI",
        "AI Security, Privacy-Preserving Computing and Data Protection",
        "Cybersecurity, Digital Forensics and Secure Digital Infrastructures",
        "AI Governance, Policy and Regulatory Frameworks",
        "Fairness, Transparency and Algorithmic Accountability",
        "Digital Inclusion, Accessibility and Societal Impact",
        "Sustainable and Inclusive Digital Technologies",
      ],
    },
    {
      number: "6",
      title: "AI for Sustainable Development and Interdisciplinary Applications",
      icon: Leaf,
      topics: [
        "AI for Sustainable and Precision Agriculture",
        "Smart Farming, Crop Monitoring and Agricultural Robotics",
        "AI in Healthcare, Biomedical Engineering and Life Sciences",
        "Digital Health, Healthcare Analytics and Intelligent Medical Systems",
        "AI for Renewable Energy, Climate Intelligence and Environmental Sustainability",
        "Smart Cities, Sustainable Infrastructure and Urban Development",
        "AI for Water, Waste and Natural Resource Management",
        "Smart Supply Chains, Food Systems and Circular Economy",
        "Sustainable Manufacturing, Resource Efficiency and Green Technologies",
        "AI for Social Innovation and Sustainable Development",
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
          Next-Generation Artificial Intelligence and Intelligent Computing for Sustainable Development
        </p>
      </div>

      {/* Overview Paragraphs Card */}
      <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200 mb-12 space-y-5 text-slate-700 leading-relaxed text-justify text-sm sm:text-base">
        <p>
          The International Conference on Next Generation Technologies for Sustainable Development (ICNGT-2027) aims to provide an international platform for researchers, engineers, academicians, scientists, and industry professionals to present their research findings, share innovative ideas, and discuss recent advancements in emerging technologies. The conference focuses on the role of Next-Generation Artificial Intelligence and Intelligent Computing in addressing contemporary challenges and promoting sustainable and resilient development.
        </p>
        <p>
          ICNGT-2027 encourages interdisciplinary discussions and knowledge exchange across diverse domains, including Artificial Intelligence, Computer Science, Engineering, Healthcare, Agriculture, Energy, Environmental Sustainability, Smart Infrastructure, and other emerging technological areas. It also provides an opportunity to explore current developments, discuss practical applications, identify research challenges, and foster collaborations between academia, industry, and research communities.
        </p>
        <p>
          The conference will feature invited talks by experts, technical paper presentations, and interactive discussions, bringing together participants from across the world to exchange knowledge and explore innovative solutions for a sustainable and resilient future.
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
    </div>
  );
};

export default CallForPapers;

