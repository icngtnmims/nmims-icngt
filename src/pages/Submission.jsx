import React from "react";
import InfoCard from "../components/ui/InfoCard";
import {
  FileText,
  UploadCloud,
  CheckCircle2,
  AlertTriangle,
  FileSpreadsheet,
  ExternalLink,
  ShieldCheck,
  Award,
  BookOpen,
  Sparkles,
} from "lucide-react";

const Submission = () => {
  const fullPaperGuidelines = [
    {
      text: "Similarity / Plagiarism limit: Must be strictly under 10%",
    },
    {
      text: "AI generated content limit: Must be strictly under 20%",
    },
  ];

  const aiToolsConcerns = [
    "Text or code generation without rigorous revision and verification",
    "Synthetic data generation to substitute missing empirical data without robust methodology",
    "Generation of any type of content that is inaccurate, including abstracts or supplemental materials",
    "Creation and manipulation of images, figures, or original research data",
  ];

  const abstractGuidelines = [
    "Abstract should not exceed 250 words (Including 5–6 Keywords).",
    "Formatting requirements: Title - Font size 14; Authors - Font size 12; Affiliations and Email - Font size 10. Use Times New Roman, 1.5 line spacing, and a single-column layout on A4 size paper.",
    "Only original, unpublished, high-quality research abstracts should be submitted via the submission portal.",
    "Following editorial board review, acceptance or reviewer comments will be communicated to the corresponding author.",
  ];

  return (
    <div className="container mx-auto px-4 py-8 sm:px-6 md:px-8 max-w-5xl">
      {/* Title & Banner Header */}
      <div className="text-center mb-10 space-y-3">
        <span className="inline-block px-4 py-1.5 rounded-full bg-red-50 text-red-700 text-xs sm:text-sm font-semibold border border-red-200 tracking-wide uppercase">
          ICNGT–2027 Guidelines
        </span>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-red-700 leading-tight">
          Submission Guidelines
        </h1>
        <p className="text-base sm:text-xl font-medium text-slate-600 max-w-3xl mx-auto pt-1">
          Detailed instructions for submitting abstracts and full-length research manuscripts
        </p>
      </div>

      {/* Microsoft CMT Service Acknowledgment Card (Required for CMT Conference Site Creation) */}
      <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200 mb-12">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3">
          Microsoft CMT Service Acknowledgment
        </h2>
        <p className="text-sm sm:text-base text-slate-700 leading-relaxed my-4">
          The Microsoft CMT service was used for managing the peer-reviewing process for this conference. This service was provided for free by Microsoft and they bore all expenses, including costs for Azure cloud services as well as for software development and support.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-6 pt-4 border-t border-slate-100">
          <p className="text-xs sm:text-sm text-slate-600">
            All authors must submit their research papers and abstracts through the official Microsoft CMT Portal.
          </p>
          <a
            href="https://cmt3.research.microsoft.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-red-700 hover:bg-red-800 text-white font-semibold text-sm transition-all shadow-sm shrink-0"
          >
            <span>Go to CMT Portal</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Full Length Paper Submission Section */}
      <section className="mb-14 bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200">
        <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100">
          <FileText className="w-7 h-7 text-red-700 shrink-0" />
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
            Full Length Paper Submission
          </h2>
        </div>

        <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6 text-justify">
          All full-length papers that receive acceptance at the ICNGT-2027
          Conference will be compiled in a conference proceeding published by
          Taylor &amp; Francis (T&amp;F) in both print and electronic formats, each
          possessing an ISBN for the book and a DOI for each respective
          chapter, along with promotional activities on the T&amp;F website. T&amp;F
          will advocate for the published volume to be considered for indexing
          by Scopus, contingent upon adherence to Scopus&apos;s selection criteria
          and the fulfillment of the scope and quality standards requisite for
          Scopus Indexing.
        </p>

        {/* AI Policy & Publication Ethics */}
        <div className="bg-slate-50 rounded-xl p-5 border border-slate-200/80 mb-6 space-y-4">
          <h3 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0" />
            Publication Ethics &amp; Generative AI Policy
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 text-justify">
            Authors are accountable for the originality, validity, and integrity
            of the content of their submissions. In alignment with publication
            ethics in the scientific community, authors are advised to avoid the use of
            Generative AI tools in ways that replace core researcher and author responsibilities, such as:
          </p>

          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs sm:text-sm text-slate-700">
            {aiToolsConcerns.map((concern, index) => (
              <li key={index} className="flex items-start gap-2 bg-white p-3 rounded-lg border border-slate-200/70">
                <span className="w-2 h-2 rounded-full bg-red-700 mt-1.5 shrink-0" />
                <span>{concern}</span>
              </li>
            ))}
          </ul>

          <p className="text-xs sm:text-sm text-slate-600 pt-2 border-t border-slate-200/60">
            The review process will check both similarity/plagiarism and AI-generated content. Submissions violating the following limits will not be considered:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
            {fullPaperGuidelines.map((guideline, index) => (
              <InfoCard key={index} className="bg-red-50/70 border border-red-200/80 text-red-900">
                <p className="font-semibold text-xs sm:text-sm flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-red-700 shrink-0" />
                  {guideline.text}
                </p>
              </InfoCard>
            ))}
          </div>
        </div>

        {/* Resources & Templates Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
          <a
            href="#"
            className="btn btn-outline text-xs sm:text-sm border-slate-300 text-slate-700 hover:bg-red-700 hover:text-white hover:border-red-700 justify-start"
          >
            <BookOpen className="w-4 h-4 shrink-0" />
            Author Guidelines (T&amp;F)
          </a>
          <a
            href="#"
            className="btn btn-outline text-xs sm:text-sm border-slate-300 text-slate-700 hover:bg-red-700 hover:text-white hover:border-red-700 justify-start"
          >
            <ShieldCheck className="w-4 h-4 shrink-0" />
            AI Policy of T &amp; F
          </a>
          <a
            href="#"
            className="btn btn-outline text-xs sm:text-sm border-slate-300 text-slate-700 hover:bg-red-700 hover:text-white hover:border-red-700 justify-start"
          >
            <FileSpreadsheet className="w-4 h-4 shrink-0" />
            Full Length Template
          </a>
          <a
            href="#"
            className="btn btn-outline text-xs sm:text-sm border-slate-300 text-slate-700 hover:bg-red-700 hover:text-white hover:border-red-700 justify-start"
          >
            <Award className="w-4 h-4 shrink-0" />
            Copyright Form
          </a>
        </div>

        <div className="text-center">
          <a
            href="https://cmt3.research.microsoft.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 btn bg-red-700 text-white hover:bg-red-800 border-red-700 text-sm sm:text-base px-6 shadow-md"
          >
            <UploadCloud className="w-5 h-5" />
            Submit Full Length Paper via Microsoft CMT
          </a>
        </div>
      </section>

      {/* Abstract Submission Section */}
      <section className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200">
        <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100">
          <Sparkles className="w-7 h-7 text-red-700 shrink-0" />
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
            Abstract Submission
          </h2>
        </div>

        <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6 text-justify">
          Abstracts of presentations (oral/posters) will be published in the
          official ICNGT–2027 conference souvenir cum abstract book.
        </p>

        <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-4">
          Guidelines for Abstract Authors:
        </h3>

        <ul className="space-y-3 mb-6 text-xs sm:text-sm text-slate-700">
          {abstractGuidelines.map((guideline, index) => (
            <li key={index} className="flex items-start gap-3 p-3 bg-slate-50 rounded-xl border border-slate-200/70">
              <CheckCircle2 className="w-4 h-4 text-red-700 mt-0.5 shrink-0" />
              <span>{guideline}</span>
            </li>
          ))}
        </ul>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
          <a
            href="#"
            className="btn btn-outline text-xs sm:text-sm border-slate-300 text-slate-700 hover:bg-red-700 hover:text-white hover:border-red-700 justify-start"
          >
            <FileText className="w-4 h-4 shrink-0" />
            Abstract Template
          </a>
          <a
            href="#"
            className="btn btn-outline text-xs sm:text-sm border-slate-300 text-slate-700 hover:bg-red-700 hover:text-white hover:border-red-700 justify-start"
          >
            <BookOpen className="w-4 h-4 shrink-0" />
            Oral Guidelines
          </a>
          <a
            href="#"
            className="btn btn-outline text-xs sm:text-sm border-slate-300 text-slate-700 hover:bg-red-700 hover:text-white hover:border-red-700 justify-start"
          >
            <BookOpen className="w-4 h-4 shrink-0" />
            Poster Guidelines
          </a>
        </div>

        <div className="text-center mb-6">
          <a
            href="https://cmt3.research.microsoft.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 btn bg-red-700 text-white hover:bg-red-800 border-red-700 text-sm sm:text-base px-6 shadow-md"
          >
            <UploadCloud className="w-5 h-5" />
            Submit Abstract via Microsoft CMT
          </a>
        </div>

        <InfoCard className="bg-amber-50/80 border-l-4 border-amber-500 text-amber-900">
          <p className="text-xs sm:text-sm">
            <strong>Note:</strong> In case you want to submit a full paper for publication in the Taylor &amp; Francis proceedings, please refer to the &quot;Full Length Paper Submission Guidelines (for T &amp; F)&quot; section above.
          </p>
        </InfoCard>
      </section>
    </div>
  );
};

export default Submission;

