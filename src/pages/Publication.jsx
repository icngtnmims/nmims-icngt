import React from "react";
import InfoCard from "../components/ui/InfoCard";

const Publication = () => {
  const highlights = [
    {
      title: "Publisher",
      content: "To be updated soon",
    },
    {
      title: "Format",
      content: "Print and Electronic",
    },
    {
      title: "Identifiers",
      content: "ISBN for book, DOI for each chapter",
    },
    {
      title: "Indexing",
      content: "Will be advocated for Scopus indexing",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8 sm:px-6 md:px-8">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 text-red-700">
        Publication and Review Process
      </h1>

      {/* Full Length Paper Publication */}
      <section className="mb-8">
        <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-red-700">
          Full Length Paper Publication
        </h2>
        <p className="text-base md:text-lg mb-4 text-justify leading-relaxed">
          <em>
            Publisher details and description will be updated soon. Please check
            back for the official publisher information and their profile.
          </em>
        </p>
        <p className="text-base md:text-lg mb-4 text-justify leading-relaxed">
          All full-length papers that receive acceptance at the ICNGT-2027
          Conference will be compiled in a conference proceeding published by
          the official publisher (to be announced) in both print and electronic
          formats, each possessing an ISBN for the book and a DOI for each
          respective chapter. Further details about promotional activities will
          be provided once the publisher is finalized.
        </p>
        <p className="text-base md:text-lg text-justify leading-relaxed">
          Information regarding indexing and Scopus advocacy will be updated
          after publisher confirmation.
        </p>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
          {highlights.map((item, index) => (
            <InfoCard key={index} className="text-center">
              <h3 className="font-semibold text-red-700 mb-2">{item.title}</h3>
              <p className="text-sm">{item.content}</p>
            </InfoCard>
          ))}
        </div>
      </section>

      {/* Abstract Publication */}
      <section className="mb-8">
        <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-red-700">
          Abstract Publication
        </h2>
        <p className="text-base md:text-lg text-justify leading-relaxed">
          Abstracts of presentations (oral/posters) will be published in
          conference souvenir cum abstract book.
        </p>
      </section>

      {/* Best Paper Award */}
      <section className="mb-8">
        <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-red-700">
          Best Paper Award and Appreciation
        </h2>
        <p className="text-base md:text-lg text-justify leading-relaxed">
          Best Paper Award and Appreciation certificate will be given for the
          best oral and poster presentation in the conference.
        </p>
      </section>

      {/* Review Process */}
      <section className="mb-8">
        <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-red-700">
          Review Process
        </h2>
        <p className="text-base md:text-lg mb-4 text-justify leading-relaxed">
          A panel of editorial board will conduct double-blind review for each
          of the contributed papers and abstracts. After review of the
          papers/abstracts by an editorial board, acceptance/reviewers' comments
          will be sent to the communicating author.
        </p>
        <p className="text-base md:text-lg text-justify leading-relaxed">
          All accepted papers/abstracts shall be presented as (oral/posters) at
          the conference.
        </p>
      </section>

      {/* Note */}
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
        <p className="text-sm md:text-base text-justify">
          <strong>Note:</strong> After review of the papers by editorial board,
          acceptance/reviewers comments will be sent to the corresponding
          author.
        </p>
      </div>
    </div>
  );
};

export default Publication;
