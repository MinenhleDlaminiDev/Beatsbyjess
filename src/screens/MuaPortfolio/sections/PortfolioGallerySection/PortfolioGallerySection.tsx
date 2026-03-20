import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import InView from "../../../../components/InView";
import Lightbox from "../../../../components/Lightbox";
import {
  filterGalleryImages,
  galleryCategories,
  galleryImages,
} from "../../../../data/galleryImages";

export const PortfolioGallerySection = (): JSX.Element => {
  const [active, setActive] = useState<string | null>(null);
  const [filter, setFilter] =
    useState<(typeof galleryCategories)[number]>("All");
  const filtered = useMemo(() => {
    const visibleImages = galleryImages.slice(0, 8);
    return filterGalleryImages(visibleImages, filter);
  }, [galleryImages, filter]);

  return (
    <section className="relative w-full bg-[#fff5f5] py-12 md:py-16">
      <div className="relative">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12 lg:mb-16">
            <div className="flex flex-col gap-3 md:gap-4">
              <div className="[font-family:'Oswald',Helvetica] font-normal text-[#ff9999] text-sm md:text-[15px] tracking-[5.00px] leading-[22px]">
                GALLERY
              </div>

              <div className="[font-family:'Oswald',Helvetica] font-normal text-[#1a0f0f] text-2xl md:text-3xl lg:text-[45px] tracking-[3.00px] leading-none">
                PORTFOLIO
              </div>
            </div>
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
                    loading={index < 4 ? "eager" : "lazy"}
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-[rgba(255,160,122,0)] group-hover:bg-[rgba(255,160,122,0.18)] transition-colors duration-300" />
                </button>
              </InView>
            ))}
          </div>

          <div className="flex justify-center mt-8 md:mt-10">
            <Link
              to="/gallery"
              className="inline-flex items-center justify-center rounded-md bg-[#ff9999] px-6 md:px-8 py-2 md:py-3 [font-family:'Didact_Gothic',Helvetica] text-[#fff5f5] text-sm md:text-[15px] leading-[22px] transition-[box-shadow,transform,background-color] duration-300 hover:bg-[#ff8080]"
            >
              View Full Gallery
            </Link>
          </div>
        </div>
      </div>
      <Lightbox
        src={active}
        currentIndex={active ? filtered.indexOf(active) : undefined}
        totalCount={filtered.length}
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
