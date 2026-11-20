
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
    proceedingsPdfUrl: "/public/documment/ISBN Proceedings ICDTV FINAL Book 23.4.2026.pdf",
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

function PublicationCard({ publication, featured = false }) {
  const primaryUrl = publication.url || publication.proceedingsPdfUrl || publication.conferenceUrl;

  return (
    <article className={`publication-card ${featured ? "featured" : ""}`}>
      <div className="publication-cover">
        {primaryUrl ? (
          <a
            href={primaryUrl}
            target="_blank"
            rel="noopener noreferrer"
            title={`View ${publication.title}`}
          >
            <img
              src={publication.image}
              alt={`${publication.title} book cover`}
              className="publication-cover-image"
              loading="lazy"
            />
          </a>
        ) : (
          <img
            src={publication.image}
            alt={`${publication.title} book cover`}
            className="publication-cover-image"
            loading="lazy"
          />
        )}
      </div>

      <div className="publication-content">
        <span className="publication-label">
          {publication.label || "ISBN Proceedings"}
        </span>

        <h3>
          {primaryUrl ? (
            <a
              href={primaryUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              {publication.title}
            </a>
          ) : (
            publication.title
          )}
        </h3>

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
              <strong className="isbn-highlight">{publication.isbn}</strong>
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
            <span>Indexing status: </span>
            <strong>Not indexed.</strong>
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

          {publication.proceedingsPdfUrl && (
            <a
              className="primary-link"
              href={publication.proceedingsPdfUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              View Proceedings PDF <ArrowIcon />
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
          --pub-primary: #b91c1c;
          --pub-accent: #b91c1c;
          --pub-text: #000000;
          --pub-muted: #111827;
          width: 100%;
          color: #000000;
          font-family: inherit;
        }

        .pub-hero {
          padding: 48px 24px 20px;
          text-align: center;
          background: transparent;
        }

        .pub-hero-inner {
          max-width: 900px;
          margin: 0 auto;
        }

        .pub-hero h1 {
          margin: 0;
          font-size: clamp(32px, 5vw, 44px);
          line-height: 1.2;
          font-weight: 800;
          color: #b91c1c;
        }

        .pub-hero p {
          max-width: 760px;
          margin: 16px auto 0;
          color: #000000;
          font-size: 16px;
          line-height: 1.8;
          font-weight: 500;
        }

        .pub-container {
          max-width: 1160px;
          margin: 0 auto;
          padding: 36px 24px 80px;
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
          display: inline-block;
          margin-bottom: 8px;
          color: #b91c1c;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 2px;
          text-transform: uppercase;
        }

        .pub-section-heading h2 {
          margin: 0;
          color: #b91c1c;
          font-size: clamp(24px, 3vw, 32px);
          font-weight: 800;
          line-height: 1.25;
        }

        .pub-section-heading p {
          max-width: 780px;
          margin: 12px 0 0;
          color: #000000;
          font-size: 15px;
          line-height: 1.75;
          font-weight: 500;
        }

        .publication-card {
          display: grid;
          grid-template-columns: minmax(220px, 290px) minmax(0, 1fr);
          gap: 34px;
          padding: 28px;
          background: #ffffff;
          border: 1px solid #e5e7eb;
          border-radius: 16px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
          align-items: stretch;
          transition: border-color .2s ease, box-shadow .2s ease;
        }

        .publication-card:hover {
          border-color: #b91c1c;
          box-shadow: 0 8px 28px rgba(185, 28, 28, 0.1);
        }

        .publication-card.featured {
          border: 2px solid #b91c1c;
        }

        .publication-cover {
          min-height: 310px;
          padding: 12px;
          display: flex;
          justify-content: center;
          align-items: center;
          background: #fafafa;
          border: 1px solid #f3f4f6;
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

        .publication-content {
          min-width: 0;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }

        .publication-label {
          display: inline-block;
          margin-bottom: 12px;
          padding: 6px 12px;
          border-radius: 6px;
          background: #fef2f2;
          color: #b91c1c;
          border: 1px solid #fecaca;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: .6px;
          text-transform: uppercase;
        }

        .publication-content h3 {
          margin: 0;
          color: #000000;
          font-size: 22px;
          font-weight: 800;
          line-height: 1.4;
        }

        .publication-description {
          margin: 13px 0 18px;
          color: #000000;
          font-size: 15px;
          line-height: 1.75;
          font-weight: 450;
        }

        .publication-details {
          width: 100%;
          margin: 0 0 16px;
          border-top: 1.5px solid #e5e7eb;
        }

        .detail-row {
          display: grid;
          grid-template-columns: minmax(135px, 185px) minmax(0, 1fr);
          gap: 12px;
          padding: 10px 0;
          border-bottom: 1px solid #f3f4f6;
          font-size: 14px;
          line-height: 1.5;
        }

        .detail-row span {
          color: #000000;
          font-weight: 800;
        }

        .detail-row strong {
          color: #111827;
          font-weight: 500;
          overflow-wrap: anywhere;
        }

        .isbn-highlight {
          color: #b91c1c !important;
          font-weight: 800 !important;
        }

        .indexing-note {
          margin: 0 0 18px;
          font-size: 13px;
          line-height: 1.6;
        }

        .indexing-note span {
          color: #000000;
          font-weight: 800;
        }

        .indexing-note strong {
          color: #b91c1c;
          font-weight: 800;
        }

        .publication-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-top: auto;
          padding-top: 14px;
        }

        .publication-actions a {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          min-height: 42px;
          padding: 10px 18px;
          border-radius: 8px;
          font-size: 13px;
          font-weight: 700;
          text-decoration: none;
          transition: all .2s ease;
        }

        .primary-link {
          color: #ffffff;
          background: #b91c1c;
          border: 1.5px solid #b91c1c;
        }

        .primary-link:hover {
          background: #991b1b;
          border-color: #991b1b;
          transform: translateY(-1px);
          box-shadow: 0 4px 12px rgba(185, 28, 28, 0.25);
        }

        .secondary-link {
          color: #000000;
          border: 1.5px solid #000000;
          background: #ffffff;
        }

        .secondary-link:hover {
          background: #000000;
          color: #ffffff;
          transform: translateY(-1px);
        }

        .pub-note {
          margin-top: 24px;
          padding: 18px 20px;
          border-left: 4px solid #b91c1c;
          border-radius: 6px;
          background: #fef2f2;
          color: #000000;
          font-size: 14px;
          line-height: 1.7;
        }

        .pub-note strong {
          color: #b91c1c;
          font-weight: 800;
        }

        @media (max-width: 720px) {
          .pub-hero {
            padding: 36px 16px 16px;
          }

          .pub-container {
            padding: 24px 16px 58px;
          }

          .publication-card {
            grid-template-columns: 1fr;
            gap: 24px;
            padding: 18px;
          }

          .publication-cover {
            min-height: 280px;
          }

          .publication-cover-image {
            height: 280px;
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

      <section className="pub-hero">
        <div className="pub-hero-inner">
          <h1>Previous Conference Publication</h1>
          <p>
            Explore publications associated with conferences and academic
            initiatives at NMIMS Shirpur, showcasing research contributions
            and interdisciplinary advancements in emerging technologies.
          </p>
        </div>
      </section>

      <div className="pub-container">
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
            were published in 2026 with ISBN{" "}
            <strong className="text-red-700">978-81-967935-0-0</strong>.
            The proceedings are not indexed. ICDTV-2030 is presented
            separately and is not identified as a previous edition of
            ICNGT.
          </div>
          


        </section>
      </div>
    </main>
  );
}
