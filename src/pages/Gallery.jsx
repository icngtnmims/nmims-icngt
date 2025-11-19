import React, { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

const filenames = [
  ".DS_Store",
  "218A8460.JPG",
  "218A8488.JPG",
  "218A8523.JPG",
  "218A8580.JPG",
  "218A8590.JPG",
  "DSC_5738.JPG",
  "Day 1 ICDTV 2030 - Dignitaries on Dais for Inaugural Ceremony.JPG",
  "Day 1 ICDTV 2030 - Group Photo.JPG",
  "Day 1 ICDTV 2030 - Innaugural Function - Attendees.JPG",
  "Day 1 ICDTV 2030 - Unveiling of Souvenir.JPG",
  "Day 1 ICDTV 2030 Address by Dr Gaud Director NMIMS Shirpur.JPG",
  "Day 1 ICDTV 2030 Address by Dr J Gandhi Hon. Secretary SVKM.JPG",
  "Day 1 ICDTV 2030 Address by Dr S Mhaiskar Sir - Hon. PVC NMIMS.JPG",
  "Day 2 ICDTV 2030 Valedictory - Address by Dr Meena Madam 2.JPG",
  "Day 2 ICDTV 2030 Valedictory - Conference Report for Org. Sec..JPG",
  "ICDTV 2030 - Dais.JPG",
  "Interview of Dr S Prasad.JPG",
];

// Build images
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
  const [slideDirection, setSlideDirection] = useState(null);
  const [incoming, setIncoming] = useState(null);
  const [animating, setAnimating] = useState(false);
  const [animateIn, setAnimateIn] = useState(false);

  useEffect(() => {
    if (selected !== null) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => (document.body.style.overflow = prev || "");
    }
  }, [selected]);

  const openLightbox = (i) => {
    if (window.innerWidth < 640) return;
    setSelected(i);
  };

  const closeLightbox = () => setSelected(null);

  // Smooth sliding logic
  const goto = (dir) => {
    if (selected === null) return;
    if (animating) return;

    setSlideDirection(dir);
    const next =
      dir === "prev"
        ? (selected - 1 + images.length) % images.length
        : (selected + 1) % images.length;

    setIncoming(next);
    setAnimating(true);
    requestAnimationFrame(() => {
      setAnimateIn(true);
    });

    // after animation completes, update selected and cleanup
    const duration = 300;
    setTimeout(() => {
      setSelected(next);
      setSlideDirection(null);
      setIncoming(null);
      setAnimateIn(false);
      setAnimating(false);
    }, duration);
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
            className={`relative rounded-xl overflow-hidden bg-white shadow-md cursor-pointer transition-transform duration-300 ${
              hovered === idx ? "scale-105 z-30" : "scale-100 z-10"
            }`}
          >
            <div className="w-full h-64 overflow-hidden">
              <img
                src={img.src}
                alt={img.title}
                className={`w-full h-full object-cover transition-transform duration-500 ${
                  hovered === idx ? "scale-110" : "scale-100"
                }`}
              />
            </div>

            <div className="p-3 bg-white">
              {/* <h3 className="text-sm font-semibold truncate">{img.title}</h3>
              <p className="text-xs text-slate-500 truncate mt-1">
                {img.category}
              </p> */}
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {selected !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-6">
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 bg-white/20 hover:bg-white/30 backdrop-blur-md
  text-white rounded-full w-12 h-12 flex items-center justify-center
  transition-all duration-300 hover:scale-110 active:scale-95 shadow-lg hover:cursor-pointer"
          >
            <X size={28} strokeWidth={2.5} />
          </button>

          <button
            onClick={() => goto("prev")}
            className="absolute left-6 bg-white/20 hover:bg-white/30 backdrop-blur-md
  text-white rounded-full w-12 h-12 flex items-center justify-center
  transition-all duration-300 hover:scale-110 active:scale-95 shadow-lg hover:cursor-pointer"
          >
            <ChevronLeft size={32} strokeWidth={2.5} />
          </button>

          <div className="max-w-4xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl">
            <div className="relative w-full h-[80vh] bg-black flex items-center justify-center overflow-hidden">
              <img
                key={`current-${selected}`}
                src={images[selected].src}
                alt={images[selected].title}
                className={`absolute w-full h-auto object-contain max-h-[80vh] transition-all duration-300 ease-in-out transform pointer-events-none
                  ${
                    animating
                      ? slideDirection === "next"
                        ? "-translate-x-full opacity-0"
                        : "translate-x-full opacity-0"
                      : "translate-x-0 opacity-100"
                  }`}
                style={{ zIndex: 10 }}
              />

              {incoming !== null && (
                <img
                  key={`incoming-${incoming}`}
                  src={images[incoming].src}
                  alt={images[incoming].title}
                  className={`absolute w-full h-auto object-contain max-h-[80vh] transition-all duration-300 ease-in-out transform pointer-events-none
                    ${
                      animateIn
                        ? "translate-x-0 opacity-100"
                        : slideDirection === "next"
                        ? "translate-x-full opacity-0"
                        : "-translate-x-full opacity-0"
                    }`}
                  style={{ zIndex: 20 }}
                />
              )}
            </div>
          </div>

          <button
            onClick={() => goto("next")}
            className="absolute right-6 bg-white/20 hover:bg-white/30 backdrop-blur-md
  text-white rounded-full w-12 h-12 flex items-center justify-center
  transition-all duration-300 hover:scale-110 active:scale-95 shadow-lg hover:cursor-pointer"
          >
            <ChevronRight size={32} strokeWidth={2.5} />
          </button>
        </div>
      )}
    </div>
  );
}
