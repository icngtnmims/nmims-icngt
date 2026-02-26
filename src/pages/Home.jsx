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
            (ICNGT-2026)
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
            <p className="text-base md:text-lg leading-relaxed">
              The International Conference on Next Generation Technologies for
              Sustainable Developments (ICNGT-2026) is a landmark event that
              brings together experts, innovators, and thought leaders worldwide
              to discuss and envision the transformative potential of digital
              technology in three critical sectors: education, healthcare, and
              industry. In an era marked by unprecedented technological
              advancements, this conference is a platform to explore how digital
              technology can shape the future, foster innovation, and address
              pressing global challenges.
            </p>
          </div>

          {/* Conference Overview */}
          <div>
            <h3 className="text-xl sm:text-2xl font-bold mb-4 text-red-700">
              Conference Overview
            </h3>
            <p className="text-base md:text-lg leading-relaxed">
              International Conference on Next Generation Technologies for
              Sustainable Developments (ICNGT-2026) is designed to foster
              collaboration and knowledge exchange among researchers, industry
              professionals, policy makers, and educators. The event spans two
              days and features keynote presentations, panel discussions,
              workshops, and interactive sessions, providing attendees with a
              comprehensive understanding of the digital landscape's current
              state and future possibilities.
            </p>
          </div>

          {/* Key Outcomes */}
          <div>
            <h3 className="text-xl sm:text-2xl font-bold mb-4 text-red-700">
              Key Outcomes
            </h3>
            <p className="text-base md:text-lg leading-relaxed mb-4">
              Participants in the International Conference on Next Generation
              Technologies for Sustainable Developments (ICNGT-2026) will:
            </p>
            <ul className="list-disc list-inside space-y-2 text-base md:text-lg leading-relaxed ml-4">
              <li>
                Gain insights of cutting-edge digital technologies and their
                practical applications.
              </li>
              <li>
                Network peers, industry leaders, and experts in the field.
              </li>
              <li>
                Collaborate on interdisciplinary projects and research
                initiatives.
              </li>
              <li>
                Influence policy discussions on the responsible and ethical use
                of digital technology.
              </li>
              <li>
                Explore partnerships and business opportunities in emerging
                digital markets.
              </li>
            </ul>
          </div>

          {/* Closing Statement */}
          <div>
            <p className="text-base md:text-lg leading-relaxed">
              International Conference on Next Generation Technologies for
              Sustainable Developments (ICNGT-2026) serves as a catalyst for
              envisioning a future where digital technology revolutionizes
              education, healthcare, and industry. By bringing together diverse
              stakeholders, this conference fosters collaboration and
              innovation, driving us toward a future where digital technology
              enhances the quality of life, supports sustainable development,
              and addresses most pressing challenges.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
