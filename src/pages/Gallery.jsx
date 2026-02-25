import React, { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

const filenames = [
  "218A8460.webp",
  "218A8488.webp",
  "218A8523.webp",
  "218A8580.webp",
  "218A8590.webp",
  "DSC_5738.webp",
  "Day 1 ICDTV 2030 - Dignitaries on Dais for Inaugural Ceremony.webp",
  "Day 1 ICDTV 2030 - Group Photo.webp",
  "Day 1 ICDTV 2030 - Innaugural Function - Attendees.webp",
  "Day 1 ICDTV 2030 - Unveiling of Souvenir.webp",
  "Day 1 ICDTV 2030 Address by Dr Gaud Director NMIMS Shirpur.webp",
  "Day 1 ICDTV 2030 Address by Dr J Gandhi Hon. Secretary SVKM.webp",
  "Day 1 ICDTV 2030 Address by Dr S Mhaiskar Sir - Hon. PVC NMIMS.webp",
  "Day 2 ICDTV 2030 Valedictory - Address by Dr Meena Madam 2.webp",
  "Day 2 ICDTV 2030 Valedictory - Conference Report for Org. Sec..webp",
  "ICDTV 2030 - Dais.webp",
  "Interview of Dr S Prasad.webp",
];

const images = filenames
  .filter((f) => f && !f.startsWith("."))
  .map((f, i) => ({
    src: `/Gallery/${encodeURIComponent(f)}`,
    title: f.replace(/\.[^.]+$/, ""),
    category: "Event",
    filename: f,
    id: i,
  }));

export default function Gallery() {
  const [hovered, setHovered] = useState(null);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    if (selected !== null) {
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = "";
      };
    }
  }, [selected]);

  useEffect(() => {
    if (selected === null) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") goto("prev");
      if (e.key === "ArrowRight") goto("next");
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selected]);

  const openLightbox = (i) => {
    if (window.innerWidth < 640) return;
    setSelected(i);
  };

  const closeLightbox = () => setSelected(null);

  const goto = (dir) => {
    if (selected === null) return;
    const next =
      dir === "prev"
        ? (selected - 1 + images.length) % images.length
        : (selected + 1) % images.length;
    setSelected(next);
  };

  return (
    <div className="container mx-auto px-4 py-8 sm:px-6 md:px-8">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 text-red-700">
        Gallery
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {images.map((img, idx) => (
          <div
            key={img.filename}
            onMouseEnter={() => setHovered(idx)}
            onMouseLeave={() => setHovered(null)}
            onClick={() => openLightbox(idx)}
            className="relative rounded-xl overflow-hidden bg-white shadow-md cursor-pointer transition-transform duration-200 hover:scale-105 will-change-transform"
          >
            <div className="w-full aspect-video overflow-hidden bg-gray-100">
              <img
                src={img.src}
                alt={img.title}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {selected !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={closeLightbox}
        >
          <button
            onClick={(e) => {
              e.stopPropagation();
              closeLightbox();
            }}
            className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 backdrop-blur-md
              text-white rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center
              transition-all duration-200 hover:scale-110 active:scale-95 shadow-lg z-10"
          >
            <X size={24} strokeWidth={2.5} />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              goto("prev");
            }}
            className="absolute left-2 sm:left-6 bg-white/20 hover:bg-white/30 backdrop-blur-md
              text-white rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center
              transition-all duration-200 hover:scale-110 active:scale-95 shadow-lg z-10"
          >
            <ChevronLeft size={28} strokeWidth={2.5} />
          </button>

          <div
            className="max-w-6xl w-full h-full flex items-center justify-center p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              key={selected}
              src={images[selected].src}
              alt={images[selected].title}
              className="max-w-full max-h-full w-auto h-auto object-contain rounded-lg shadow-2xl"
            />
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation();
              goto("next");
            }}
            className="absolute right-2 sm:right-6 bg-white/20 hover:bg-white/30 backdrop-blur-md
              text-white rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center
              transition-all duration-200 hover:scale-110 active:scale-95 shadow-lg z-10"
          >
            <ChevronRight size={28} strokeWidth={2.5} />
          </button>
        </div>
      )}
    </div>
  );
}
