import React, { useMemo, useState } from "react";
import Gallery1 from "../../../../assets/Gallery1.jpeg"
import Gallery2 from "../../../../assets/Gallery2.jpeg"
import Gallery3 from "../../../../assets/Gallery3.jpeg"
import Gallery4 from "../../../../assets/Gallery4.jpeg"
import Gallery5 from "../../../../assets/Gallery5.jpeg"
import Gallery6 from "../../../../assets/Gallery6.jpeg"
import Gallery7 from "../../../../assets/Gallery7.jpeg"
import Gallery8 from "../../../../assets/Gallery8.jpg"
import Gallery9 from "../../../../assets/Gallery9.jpg"
import Gallery10 from "../../../../assets/Gallery10.jpg"
import Gallery11 from "../../../../assets/Gallery11.jpg"
import Gallery12 from "../../../../assets/Gallery12.jpg"
import Gallery13 from "../../../../assets/Gallery13.jpg"
import Gallery14 from "../../../../assets/Gallery14.jpg"
import Gallery15 from "../../../../assets/Gallery15.jpg"
import Gallery16 from "../../../../assets/Gallery16.jpg"
import Gallery17 from "../../../../assets/Gallery17.jpg"
import Gallery18 from "../../../../assets/Gallery18.jpg"
import Gallery19 from "../../../../assets/Gallery19.jpg"
import Gallery20 from "../../../../assets/Gallery20.jpg"
import Gallery21 from "../../../../assets/Gallery21.jpg"
import Gallery22 from "../../../../assets/Gallery22.jpg"
import Gallery23 from "../../../../assets/Gallery23.jpg"
import InView from "../../../../components/InView";
import Lightbox from "../../../../components/Lightbox";

export const PortfolioGallerySection = (): JSX.Element => {
  const [active, setActive] = useState<string | null>(null);
  const [filter, setFilter] = useState<string>("All");
  const galleryImages = [
    Gallery1,
    Gallery2, 
    Gallery3,
    Gallery4,
    Gallery5,
    Gallery6,
    Gallery7,
    Gallery8,
    Gallery9,
    Gallery10,
    Gallery11,
    Gallery12,
    Gallery13,
    Gallery14,
    Gallery15,
    Gallery16,
    Gallery17,
    Gallery18,
    Gallery19,
    Gallery20,
    Gallery21,
    Gallery22,
    Gallery23
  ];

  const categories = useMemo(() => (["All", "Bridal", "Editorial", "Casual"]), []);
  const filtered = useMemo(() => {
    if (filter === "All") return galleryImages;
    return galleryImages.filter((_, i) =>
      (filter === "Bridal" && i % 3 === 0) ||
      (filter === "Editorial" && i % 3 === 1) ||
      (filter === "Casual" && i % 3 === 2)
    );
  }, [galleryImages, filter]);

  return (
    <section className="relative w-full bg-[#fff5f5] py-12 md:py-16">
      <div className="relative">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12 lg:mb-16">
            <div className="mb-4">
              <div className="[font-family:'Oswald',Helvetica] font-normal text-[#ff9999] text-sm md:text-[15px] tracking-[5.00px] leading-[22px]">
                GALLERY
              </div>
            </div>

            <div className="mb-6 md:mb-8">
              <div className="[font-family:'Oswald',Helvetica] font-normal text-[#1a0f0f] text-2xl md:text-3xl lg:text-[45px] tracking-[3.00px] leading-[22px]">
                PORTFOLIO
              </div>
            </div>

          </div>

          <div className="flex items-center justify-center gap-2 md:gap-3 mb-8">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={`px-3 py-1 rounded-full border transition-all duration-300 ${filter === c ? 'bg-[#ff9999] text-white border-[#ff9999]' : 'border-[#1a0f0f] text-[#1a0f0f] hover:bg-[#ffe1da]'}`}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {filtered.map((image, index) => (
              <InView key={image} delayMs={index * 80}>
                <button
                  className="relative aspect-square overflow-hidden rounded-lg group w-full"
                  onClick={() => setActive(image)}
                >
                  <img
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    alt={`Gallery image`}
                    src={image}
                  />
                  <div className="absolute inset-0 bg-[rgba(255,160,122,0)] group-hover:bg-[rgba(255,160,122,0.18)] transition-colors duration-300" />
                </button>
              </InView>
            ))}
          </div>
        </div>
      </div>
      <Lightbox
        src={active}
        onClose={() => setActive(null)}
        onPrev={() => {
          if (!active) return;
          const currentIndex = filtered.indexOf(active);
          const prevIndex = (currentIndex - 1 + filtered.length) % filtered.length;
          setActive(filtered[prevIndex]);
        }}
        onNext={() => {
          if (!active) return;
          const currentIndex = filtered.indexOf(active);
          const nextIndex = (currentIndex + 1) % filtered.length;
          setActive(filtered[nextIndex]);
        }}
        hasPrev={filtered.length > 1}
        hasNext={filtered.length > 1}
      />
    </section>
  );
};
