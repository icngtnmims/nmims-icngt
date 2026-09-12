import React from "react";
import InfoCard from "../components/ui/InfoCard";

const Submission = () => {
  const fullPaperGuidelines = [
    {
      text: "Similarity/plagiarism: 10% and above",
    },
    {
      text: "AI generated content: 20% & above",
    },
  ];

  const aiToolsConcerns = [
    "Text or code generation without rigorous revision",
    "Synthetic data generation to substitute missing data without robust methodology",
    "Generation of any types of content which is inaccurate including abstracts or supplemental materials",
    "Creation and manipulation of images and figures, or original research data",
  ];

  const abstractGuidelines = [
    "Abstract should not exceed 250 words (Including 5-6 Keywords).",
    "Formatting requirements: Title - Font size 14; Authors - Font size 12; Affiliations and Email - Font size 10. Use Times New Roman, 1.5 line spacing, and a single-column layout on A4 size paper.",
    "Only original, unpublished, high-quality research abstracts should be submitted via the link provided below.",
    "Following editorial board review, acceptance or reviewer comments will be communicated to the corresponding author.",
  ];

  return (
    // <div className="container mx-auto px-4 py-8 sm:px-6 md:px-8">
    // <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 text-red-700">
    //   Submission Guidelines
    // </h1>

    //   <div className="prose max-w-none space-y-8">
    //     {/* Full Length Paper Submission Section */}
    //     <section>
    //       <h2 className="text-xl md:text-2xl font-semibold mb-4 text-red-700">
    //         Full Length Paper Submission
    //       </h2>

    //       <p className="text-base md:text-lg mb-6 text-justify">
    //         All full-length papers that receive acceptance at the ICNGT-2027
    //         Conference will be compiled in a conference proceeding published by
    //         Taylor and Francis (T&F) in both print and electronic formats, each
    //         possessing an ISBN for the book and a DOI for each respective
    //         chapter, along with promotional activities on the T&F website. T&F
    //         will advocate for the published volume to be considered for indexing
    //         by Scopus, contingent upon adherence to Scopus's selection criteria
    //         and the fulfillment of the scope and quality standards requisite for
    //         Scopus Indexing.
    //       </p>

    //       <p className="text-base md:text-lg mb-4 text-justify">
    //         Authors are accountable for the originality, validity, and integrity
    //         of the content of their submissions. In alignment with the
    //         publication ethics in scientific community, authors are advised to
    //         avoid use of Generative AI tools that have been used in ways that
    //         replace core researcher and author responsibilities, for example:
    //       </p>

    //       <ul className="list-disc list-inside space-y-2 mb-6 text-base md:text-lg ml-4">
    //         {aiToolsConcerns.map((concern, index) => (
    //           <li key={index}>{concern}</li>
    //         ))}
    //       </ul>

    //       <p className="text-base md:text-lg mb-4 text-justify">
    //         The review process will check both the similarity/plagiarism and AI
    //         generated content and the papers with following in content/ figure/
    //         code etc. will not be considered for full paper submission:
    //       </p>

    //       <div className="space-y-3 mb-6">
    //         {fullPaperGuidelines.map((guideline, index) => (
    //           <InfoCard key={index}>
    //             <p className="font-semibold text-sm md:text-base">
    //               {guideline.text}
    //             </p>
    //           </InfoCard>
    //         ))}
    //       </div>

    //       <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
    //         <a
    //           href="#"
    //           className="btn btn-outline text-sm md:text-base border-red-700 text-red-700 hover:bg-red-700 hover:text-white hover:border-red-700"
    //         >
    //           Author Guidelines for Full Length Paper
    //         </a>
    //         <a
    //           href="#"
    //           className="btn btn-outline text-sm md:text-base border-red-700 text-red-700 hover:bg-red-700 hover:text-white hover:border-red-700"
    //         >
    //           AI Policy of T & F
    //         </a>
    //         <a
    //           href="#"
    //           className="btn btn-outline text-sm md:text-base border-red-700 text-red-700 hover:bg-red-700 hover:text-white hover:border-red-700"
    //         >
    //           Full Length Paper Template
    //         </a>
    //         <a
    //           href="#"
    //           className="btn btn-outline text-sm md:text-base border-red-700 text-red-700 hover:bg-red-700 hover:text-white hover:border-red-700"
    //         >
    //           Copyright Form
    //         </a>
    //       </div>

    //       <div className="text-center mb-6">
    //         <a
    //           href="#"
    //           className="btn bg-red-700 text-white hover:bg-red-800 border-red-700 text-base md:text-lg"
    //         >
    //           Submit Full Length Paper
    //         </a>
    //       </div>
    //     </section>

    //     {/* Abstract Submission Section */}
    //     <section>
    //       <h2 className="text-xl md:text-2xl font-semibold mb-4 text-red-700">
    //         Abstract Submission
    //       </h2>

    //       <p className="text-base md:text-lg mb-6 text-justify">
    //         Abstracts of presentations (oral/posters) will be published in the
    //         conference souvenir cum abstract book.
    //       </p>

    //       <h3 className="text-lg md:text-xl font-semibold mb-4">
    //         Guidelines for Authors:
    //       </h3>

    //       <ul className="list-disc list-inside space-y-2 mb-6 text-base md:text-lg ml-4">
    //         {abstractGuidelines.map((guideline, index) => (
    //           <li key={index}>{guideline}</li>
    //         ))}
    //       </ul>

    //       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mb-6">
    //         <a
    //           href="#"
    //           className="btn btn-outline text-sm md:text-base border-red-700 text-red-700 hover:bg-red-700 hover:text-white hover:border-red-700"
    //         >
    //           Abstract Template
    //         </a>
    //         <a
    //           href="#"
    //           className="btn btn-outline text-sm md:text-base border-red-700 text-red-700 hover:bg-red-700 hover:text-white hover:border-red-700"
    //         >
    //           Oral Presentation Guidelines
    //         </a>
    //         <a
    //           href="#"
    //           className="btn btn-outline text-sm md:text-base border-red-700 text-red-700 hover:bg-red-700 hover:text-white hover:border-red-700"
    //         >
    //           Poster Presentation Guidelines
    //         </a>
    //       </div>

    //       <div className="text-center mb-6">
    //         <a
    //           href="#"
    //           className="btn bg-red-700 text-white hover:bg-red-800 border-red-700 text-base md:text-lg"
    //         >
    //           Submit Abstract
    //         </a>
    //       </div>

    //       <InfoCard className="bg-yellow-50 border-l-4 border-yellow-500">
    //         <p className="text-sm md:text-base">
    //           <strong>Note:</strong> In case you want to submit full paper for
    //           publication, Please refer to "Full Length Paper Submission
    //           Guidelines (for T & F)"
    //         </p>
    //       </InfoCard>
    //     </section>
    //   </div>
    // </div>
    <div className="container mx-auto px-4 py-8 sm:px-6 md:px-8">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 text-red-700">
        Submission Guidelines
      </h1>
      <p>
        <i>Will be updated soon</i>
      </p>
    </div>
  );
};

export default Submission;
