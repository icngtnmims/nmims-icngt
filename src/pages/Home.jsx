import React from "react";
import Carousel from "../components/Carousel";

const Home = () => {
  const campusImages = [
    "/campus/campus-image.webp",
    "/campus/cf.webp",
    "/Gallery/Day 1 ICDTV 2030 - Group Photo.webp",
    "/Gallery/218A8523.webp",
  ];

  return (
    <div>
      <Carousel images={campusImages} />

      <div className="container mx-auto px-4 py-8 sm:px-6 md:px-8">
        {/* Conference Title Section */}
        <div className="text-center mb-8">
          {/* <h2 className="text-xl md:text-2xl font-semibold mb-4">
            About the Conference
          </h2> */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-4 text-red-700">
            International Conference on
          </h1>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6 text-red-700">
            Next Generation Technologies for Sustainable Development
            (ICNGT-2027)
          </h1>
        </div>

        {/* Organized By Section */}
        <div className="text-center mb-8 space-y-4">
          <div>
            <p className="text-lg font-semibold mb-2">Organized by</p>
            <p className="text-base md:text-lg">
              Mukesh Patel School of Technology Management & Engineering
            </p>
          </div>

          <div>
            <p className="text-lg font-semibold mb-2">In Association with</p>
            <p className="text-base md:text-lg">
              School of Pharmacy & Technology Management
            </p>
            {/* <p className="text-base md:text-lg">
              School of Agricultural Sciences & Technology
            </p> */}
          </div>

          <div>
            <p className="text-lg font-semibold mb-2">at</p>
            <p className="text-base md:text-lg font-medium">
              SVKM's NMIMS Deemed to be University, Shirpur Campus
            </p>
          </div>
        </div>

        {/* About the Conference Section */}
        <div className="space-y-6 text-justify">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold mb-4 text-red-700">
              About the Conference
            </h2>
            <p className="text-base md:text-lg leading-relaxed mb-4">
              The International Conference on Next Generation Technologies for Sustainable Development (ICNGT-2027) aims to provide an international platform for researchers, academicians, scientists, industry professionals, innovators and technology practitioners to present and exchange innovative research, share knowledge and foster interdisciplinary collaboration in emerging technologies and their transformative applications.
            </p>
            <p className="text-base md:text-lg leading-relaxed mb-4">
              Under the central theme <span className="font-bold text-red-700">“Next-Generation Artificial Intelligence and Intelligent Computing for Sustainable Development”</span>, the conference emphasizes the role of Artificial Intelligence and next-generation technologies as key enablers of innovation and sustainable development. It explores the convergence of Artificial Intelligence, Machine Learning, Generative AI, Data Science, Internet of Things, Cloud and Edge Computing, Computer Vision, Robotics, Cybersecurity and other emerging technologies.
            </p>
            <p className="text-base md:text-lg leading-relaxed mb-4">
              The conference focuses on the technological advancements addressing the contemporary challenges across diverse domains, including sustainable agriculture, healthcare, clean energy, environmental sustainability, smart infrastructure, advanced manufacturing, education and societal development. It encourages original research contributions encompassing innovative algorithms, computational models, intelligent systems, technological frameworks, experimental investigations and validated real-world applications.
            </p>
            <p className="text-base md:text-lg leading-relaxed mb-4">
              Through keynote lectures, technical paper presentations, expert interactions and collaborative research discussions, ICNGT-2027 seeks to promote cross-disciplinary perspectives, strengthen academic–industry partnerships and encourage responsible technological innovation. The conference aspires to facilitate the exchange of ideas and the development of innovative, practical and sustainable solutions to address emerging societal, environmental and industrial challenges.
            </p>
          </div>

          {/* Key Outcomes */}
          <div>
            <h3 className="text-xl sm:text-2xl font-bold mb-4 text-red-700">
              Key Outcomes
            </h3>
            <p className="text-base md:text-lg leading-relaxed mb-4">
              Participants in the International Conference on Next Generation
              Technologies for Sustainable Development (ICNGT-2027) will:
            </p>
            <ul className="list-disc list-inside space-y-2 text-base md:text-lg leading-relaxed ml-4">
              <li>
                <span className="font-semibold">Gain insights into emerging technologies:</span> Explore recent advancements in Artificial Intelligence, Machine Learning, Generative AI, Agentic AI, Intelligent Computing and other next-generation technologies and their real-world applications.
              </li>
              <li>
                <span className="font-semibold">Explore interdisciplinary applications:</span> Understand how AI and intelligent computing can address challenges in sustainable agriculture, healthcare, clean energy, climate intelligence, environmental sustainability, smart infrastructure and industrial development.
              </li>
              <li>
                <span className="font-semibold">Exchange research and innovations:</span> Share research findings, innovative algorithms, computational models, intelligent systems and technological solutions through technical presentations and expert interactions.
              </li>
              <li>
                <span className="font-semibold">Promote responsible and trustworthy AI:</span> Engage in discussions on explainable, ethical, secure and responsible AI, including data privacy, AI governance, fairness and societal impact.
              </li>
              <li>
                <span className="font-semibold">Foster academic–industry collaboration:</span> Build professional networks with researchers, academicians, industry experts and technology practitioners to encourage collaborative research and innovation.
              </li>
              <li>
                <span className="font-semibold">Identify future research opportunities:</span> Explore emerging research directions, interdisciplinary challenges and opportunities for technology-driven sustainable and resilient development.
              </li>
              <li>
                <span className="font-semibold">Encourage partnerships and innovation:</span> Identify opportunities for academic–industry partnerships, joint research initiatives, technology transfer and innovation-driven collaborations.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
