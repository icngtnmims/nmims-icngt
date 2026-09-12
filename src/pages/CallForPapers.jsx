import React from "react";
import InfoCard from "../components/ui/InfoCard";

const CallForPapers = () => {
  const technologies = [
    [
      "Artificial Intelligence (AI)",
      "Internet of Things (IoT)",
      "Cloud Computing",
      "Blockchain",
      "Robotics and Automation",
      "Quantum Computing",
      "Data Analytics",
      "Cyber Security and Forensics",
      "3D Printing and Design",
      "Augmented and Virtual Reality (AR-VR)",
      "Simulation and Modelling",
      "Nanotechnology",
    ],
    [
      "Bioinformatics",
      "Biotechnology",
      "mHealth",
      "Telemedicine",
      "Personalized and Preventive Medicines",
      "Genomics",
      "Electronic Health Records",
      "Smart Grid",
      "Statistical Tools/Techniques",
      "Renewable Energy",
      "Genomics and Protemics",
      "5G",
    ],
    [
      "Integrated Nutrient Management",
      "Sustainable Agriculture and Food Security",
      "Smart Textiles",
      "Nano-bubble Technology",
      "Antimicrobial and Odor-Control Technologies",
      "Geothermal Systems",
      "Chiplets",
      "Elastocalorics",
      "Reconfigurable Intelligent Surfaces",
      "Digital Twins",
      "UI/UX",
    ],
  ];

  const tracks = [
    {
      number: "I",
      title:
        "Intelligent Systems, Computing and Digital Transformation for Sustainability",
    },
    {
      number: "II",
      title:
        "Clean Energy, Low-Carbon Engineering and Climate-Resilient Infrastructure ",
    },
    {
      number: "III",
      title:
        "Sustainable Agriculture, Food Systems and Bio-resource Innovation",
    },
    {
      number: "IV",
      title:
        "Pharmaceutical Sciences, Public Health Technologies and Community Well-being",
    },
    {
      number: "V",
      title: "Circular Textiles, Eco-materials and Responsible Manufacturing",
    },
    {
      number: "VI",
      title:
        "Education, Policy, Ethics and Technology Governance for Sustainable Development ",
    },
    // {
    //   number: "VII",
    //   title: "Technologies promoting Accessibility and Equity in education;",
    // },
    // {
    //   number: "VIII",
    //   title:
    //     "Safety, Security and ethical use of digital technologies for Sustainable Societies;",
    // },
  ];

  return (
    <div className="container mx-auto px-4 py-8 sm:px-6 md:px-8">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 text-red-700">
        Call for Papers
      </h1>

      <div className="prose max-w-none">
        <p className="text-base md:text-lg mb-6 text-justify">
          The ICNGT–2027 invites submissions of original, unpublished, and
          high-quality scientific research contributions manifested as research
          articles, comprehensive review papers, and empirical research findings
          intended for both presentation and publication from scholars,
          researchers, developers, engineers, students, industry experts,
          practitioners and academicians within India and internationally.
        </p>

        <p className="text-base md:text-lg mb-6 text-justify">
          Contributions to ICNGT–2027 are expected to accentuate innovative
          insights, practical implementations, and the ramifications of advanced
          Next Generation Technologies on the enhancement of human quality of
          life, the promotion of sustainable development, and the resolution of
          the paramount challenges encountered by the global populace.
          Manuscripts focusing on technologies such as
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 mb-6 text-sm md:text-base">
          {technologies.map((column, colIndex) => (
            <ul key={colIndex} className="list-disc list-inside space-y-1">
              {column.map((tech, techIndex) => (
                <li key={techIndex}>{tech}</li>
              ))}
            </ul>
          ))}
        </div>

        <p className="text-base md:text-lg mb-8 text-justify">
          among others, may be submitted under the specified tracks outlined
          below.
        </p>

        <h2 className="text-xl md:text-2xl font-semibold mb-4 text-red-700">
          Conference Tracks
        </h2>

        <div className="space-y-3 mb-6">
          {tracks.map((track, index) => (
            <InfoCard key={index}>
              <p className="font-semibold text-sm md:text-base">
                <span className="text-red-700">Track-{track.number}:</span>{" "}
                {track.title}
              </p>
            </InfoCard>
          ))}
        </div>

        <p className="text-sm md:text-base italic text-center mt-6">
          * Authors may submit articles on various subfields relevant to the
          theme which are not limited to the list.
        </p>
      </div>
    </div>
  );
};

export default CallForPapers;
