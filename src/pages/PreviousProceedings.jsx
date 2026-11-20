
import React from "react";

const publications = {
  icngt: {
    title: "Next Generation Technologies for Sustainable Development",
    publisher: "Taylor & Francis",
    description:
      "Explore the publication on next-generation technologies and their applications in sustainable development.",
    url: "https://www.taylorfrancis.com/books/edit/10.1201/9781003716648/next-generation-technologies-sustainable-development-sunita-patil-shyam-pancholi-girdhari-lal-gupta-preeti-sangave",
    label: "Taylor & Francis Publication",
    image: "/images/ICNGT-2025.jpg",
  },

  icdtv: {
    title:
      "Proceedings of the International Conference on Digital Technology Vision 2030: Transforming Healthcare, Education and Industry",
    shortTitle: "ICDTV-2030",
    dates: "17–18 February 2024",
    publicationYear: "2026",
    isbn: "978-81-967935-0-0",
    publisher:
      "SVKM's Narsee Monjee Institute of Management Studies, Shirpur Campus",
    editors:
      "Dr. Venkatadri M., Dr. Preeti C. Sangave, Dr. Ritesh Dhanare and Prof. Dhananjay Joshi",
    description:
      "The conference brought together researchers and professionals to discuss digital technologies and their applications across healthcare, education, industry, agriculture and other emerging domains.",
    conferenceUrl: "https://icdtv.nmims.edu/",
    reportUrl:
      "https://engineering-shirpur.nmims.edu/wp-content/uploads/2025/01/ICDTV-2030-Report-for-website_compressed-1.pdf",
    image: "/images/ICDTV-2030-cover.png",
  },
};

const ArrowIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden="true"
  >
    <path
      d="M7 17L17 7M7 7h10v10"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const BookIcon = () => (
  <svg
    width="34"
    height="34"
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden="true"
  >
    <path
      d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v16H6.5A2.5 2.5 0 0 0 4 21V5.5Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
    <path
      d="M4 5.5V21M8 7h8M8 11h8"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

function PublicationCard({ publication, featured = false }) {
  return (
    <article className={`publication-card ${featured ? "featured" : ""}`}>
      <div className="publication-cover">
  <img
    src={publication.image}
    alt={`${publication.title} book cover`}
    className="publication-cover-image"
  />
</div>
        <div className="cover-top">
          <span className="cover-institution">SVKM'S NMIMS</span>
          <span className="cover-campus">SHIRPUR CAMPUS</span>
        </div>

        <div className="cover-icon">
          <BookIcon />
        </div>

        <div className="cover-title">
          {publication.shortTitle || "CONFERENCE PUBLICATION"}
        </div>

        <div className="cover-subtitle">
          {publication.shortTitle
            ? "Digital Technology Vision 2030"
            : "Next Generation Technologies"}
        </div>

        <div className="cover-bottom">
          {publication.publicationYear || "Taylor & Francis"}
        </div>
      </div>

      <div className="publication-content">
        <span className="publication-label">{publication.label || "ISBN Proceedings"}</span>

        <h3>{publication.title}</h3>

        <p className="publication-description">
          {publication.description}
        </p>

        {publication.shortTitle && (
          <div className="publication-details">
            <div className="detail-row">
              <span>Conference</span>
              <strong>{publication.dates}</strong>
            </div>

            <div className="detail-row">
              <span>Proceedings published</span>
              <strong>{publication.publicationYear}</strong>
            </div>

            <div className="detail-row">
              <span>ISBN</span>
              <strong>{publication.isbn}</strong>
            </div>

            <div className="detail-row">
              <span>Publisher</span>
              <strong>{publication.publisher}</strong>
            </div>

            <div className="detail-row">
              <span>Editors</span>
              <strong>{publication.editors}</strong>
            </div>
          </div>
        )}

        {publication.shortTitle && (
          <p className="indexing-note">
            Indexing status: Not indexed.
          </p>
        )}

        <div className="publication-actions">
          {publication.url && (
            <a
              className="primary-link"
              href={publication.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              View Publication <ArrowIcon />
            </a>
          )}

          {publication.conferenceUrl && (
            <a
              className="secondary-link"
              href={publication.conferenceUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Conference Website <ArrowIcon />
            </a>
          )}

          {publication.reportUrl && (
            <a
              className="secondary-link"
              href={publication.reportUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              View Conference Report <ArrowIcon />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export default function PreviousProceedings() {
  return (
    <main className="previous-publications">
      <style>{`
        .previous-publications {
          --pub-primary: #123b65;
          --pub-accent: #c99a43;
          --pub-text: #263445;
          --pub-muted: #657386;
          width: 100%;
          color: var(--pub-text);
          font-family: inherit;
        }

        .pub-hero {
          padding: 76px 24px 68px;
          text-align: center;
          background:
            radial-gradient(circle at 15% 15%, rgba(201,154,67,.16), transparent 30%),
            linear-gradient(135deg, #102f50, #174b75);
          color: #fff;
        }

        .pub-hero-inner {
          max-width: 900px;
          margin: 0 auto;
        }

        .pub-eyebrow {
          display: inline-block;
          margin-bottom: 16px;
          color: #e9c47e;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 2.5px;
          text-transform: uppercase;
        }

        .pub-hero h1 {
          margin: 0;
          font-size: clamp(32px, 5vw, 48px);
          line-height: 1.15;
          font-weight: 750;
          color: #fff;
        }

        .pub-hero p {
          max-width: 720px;
          margin: 20px auto 0;
          color: rgba(255,255,255,.82);
          font-size: 16px;
          line-height: 1.8;
        }

        .pub-container {
          max-width: 1160px;
          margin: 0 auto;
          padding: 62px 24px 80px;
        }

        .pub-section {
          margin-bottom: 64px;
        }

        .pub-section:last-child {
          margin-bottom: 0;
        }

        .pub-section-heading {
          margin-bottom: 26px;
        }

        .pub-section-heading span {
          display: block;
          margin-bottom: 9px;
          color: #a77a2d;
          font-size: 11px;
          font-weight: 750;
          letter-spacing: 2px;
          text-transform: uppercase;
        }

        .pub-section-heading h2 {
          margin: 0;
          color: var(--pub-primary);
          font-size: clamp(24px, 3vw, 32px);
          line-height: 1.25;
        }

        .pub-section-heading p {
          max-width: 780px;
          margin: 12px 0 0;
          color: var(--pub-muted);
          font-size: 15px;
          line-height: 1.75;
        }

        .publication-card {
          display: grid;
          grid-template-columns: minmax(220px, 290px) minmax(0, 1fr);
          gap: 34px;
          padding: 28px;
          background: #fff;
          border: 1px solid #e3e9ef;
          border-radius: 16px;
          box-shadow: 0 8px 28px rgba(18,59,101,.06);
          align-items: stretch;
        }

        .publication-cover {
  min-height: 310px;
  padding: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f8fafc;
  border-radius: 9px;
  overflow: hidden;
}

.publication-cover-image {
  display: block;
  width: 100%;
  height: 310px;
  object-fit: contain;
  border-radius: 5px;
}

        .cover-top {
          display: flex;
          flex-direction: column;
          gap: 5px;
          width: 100%;
          color: #e9c47e;
          font-size: 10px;
          font-weight: 750;
          letter-spacing: 1.5px;
        }

        .cover-campus {
          color: rgba(255,255,255,.7);
          font-size: 9px;
        }

        .cover-icon {
          color: #e9c47e;
          margin: 22px 0 12px;
        }

        .cover-title {
          font-size: 25px;
          font-weight: 800;
          letter-spacing: 1px;
        }

        .cover-subtitle {
          max-width: 220px;
          margin-top: 10px;
          color: rgba(255,255,255,.83);
          font-size: 13px;
          line-height: 1.5;
        }

        .cover-bottom {
          margin-top: 24px;
          color: #e9c47e;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 1px;
        }

        .publication-content {
          min-width: 0;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }

        .publication-label {
          display: inline-block;
          margin-bottom: 12px;
          padding: 6px 10px;
          border-radius: 5px;
          background: #f4f0e8;
          color: #8b672c;
          font-size: 11px;
          font-weight: 750;
          letter-spacing: .6px;
          text-transform: uppercase;
        }

        .publication-content h3 {
          margin: 0;
          color: var(--pub-primary);
          font-size: 21px;
          line-height: 1.4;
        }

        .publication-description {
          margin: 13px 0 18px;
          color: var(--pub-muted);
          font-size: 14px;
          line-height: 1.75;
        }

        .publication-details {
          width: 100%;
          margin: 0 0 16px;
          border-top: 1px solid #e8edf2;
        }

        .detail-row {
          display: grid;
          grid-template-columns: minmax(125px, 175px) minmax(0, 1fr);
          gap: 12px;
          padding: 10px 0;
          border-bottom: 1px solid #e8edf2;
          font-size: 13px;
          line-height: 1.5;
        }

        .detail-row span {
          color: var(--pub-muted);
        }

        .detail-row strong {
          color: #34465a;
          font-weight: 650;
          overflow-wrap: anywhere;
        }

        .indexing-note {
          margin: 0 0 18px;
          color: #657386;
          font-size: 12px;
          line-height: 1.6;
        }

        .publication-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-top: auto;
          padding-top: 12px;
        }

        .publication-actions a {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          min-height: 40px;
          padding: 9px 14px;
          border-radius: 6px;
          font-size: 12px;
          font-weight: 700;
          text-decoration: none;
          transition: .2s ease;
        }

        .primary-link {
          color: #fff;
          background: var(--pub-primary);
        }

        .primary-link:hover {
          background: #205582;
          transform: translateY(-1px);
        }

        .secondary-link {
          color: var(--pub-primary);
          border: 1px solid #cbd7e2;
          background: #fff;
        }

        .secondary-link:hover {
          background: #f2f6fa;
          border-color: #8ba6bf;
        }

        .pub-note {
          margin-top: 24px;
          padding: 18px 20px;
          border-left: 3px solid var(--pub-accent);
          border-radius: 4px;
          background: #f7f8fa;
          color: var(--pub-muted);
          font-size: 13px;
          line-height: 1.7;
        }

        @media (max-width: 720px) {
          .pub-hero {
            padding: 55px 20px;
          }

          .pub-container {
            padding: 42px 16px 58px;
          }

          .publication-card {
            grid-template-columns: 1fr;
            gap: 24px;
            padding: 18px;
          }

          .publication-cover {
            min-height: 280px;
          }

          .detail-row {
            grid-template-columns: 1fr;
            gap: 3px;
          }

          .publication-actions {
            flex-direction: column;
            width: 100%;
          }

          .publication-actions a {
            width: 100%;
            box-sizing: border-box;
          }
        }
      `}</style>

      {/* Page Header */}
      <section className="pub-hero">
        <div className="pub-hero-inner">
          <span className="pub-eyebrow">Research • Innovation • Collaboration</span>
          <h1>Previous Conference Publications</h1>
          <p>
            Explore publications associated with conferences and academic
            initiatives at NMIMS Shirpur, showcasing research contributions
            and interdisciplinary advancements in emerging technologies.
          </p>
        </div>
      </section>

      <div className="pub-container">
        {/* ICNGT-related publication */}
        <section className="pub-section">
          <div className="pub-section-heading">
            <span>ICNGT</span>
            <h2>Next Generation Technologies</h2>
            <p>
              Explore the Taylor & Francis publication on next-generation
              technologies and sustainable development.
            </p>
          </div>

          <PublicationCard publication={publications.icngt} />
        </section>

        {/* Other NMIMS Shirpur conference publication */}
        <section className="pub-section">
          <div className="pub-section-heading">
            <span>Other Conference Publications</span>
            <h2>ICDTV-2030</h2>
            <p>
              A separate multidisciplinary conference publication from
              NMIMS Shirpur, covering digital technology applications
              across healthcare, education and industry.
            </p>
          </div>

          <PublicationCard
            publication={{
              ...publications.icdtv,
              label: "ISBN Proceedings",
            }}
            featured
          />

          <div className="pub-note">
            <strong>Publication information:</strong> The ICDTV-2030
            conference was held on 17–18 February 2024. Its proceedings
            were published in 2026 with ISBN 978-81-967935-0-0.
            The proceedings are not indexed. ICDTV-2030 is presented
            separately and is not identified as a previous edition of
            ICNGT.
          </div>
        </section>
      </div>
    </main>
  );
}
