import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import InView from "../../components/InView";
import Lightbox from "../../components/Lightbox";
import {
  filterGalleryImages,
  galleryCategories,
  galleryImages,
} from "../../data/galleryImages";

export const GalleryPage = (): JSX.Element => {
  const [active, setActive] = useState<string | null>(null);
  const [filter, setFilter] =
    useState<(typeof galleryCategories)[number]>("All");

  const filtered = useMemo(
    () => filterGalleryImages(galleryImages, filter),
    [filter],
  );

  return (
    <section className="min-h-screen w-full bg-[#fff5f5] py-12 md:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex flex-col gap-6 md:gap-8 mb-10 md:mb-14">
          <Link
            to="/"
            className="[font-family:'Didact_Gothic',Helvetica] text-[#1a0f0f] text-sm md:text-[15px] hover:text-[#ff9999] transition-colors"
          >
            ← Back Home
          </Link>

          <div className="text-center">
            <div className="flex flex-col gap-3 md:gap-4">
              <div className="[font-family:'Oswald',Helvetica] font-normal text-[#ff9999] text-sm md:text-[15px] tracking-[5.00px] leading-[22px]">
                GALLERY
              </div>

              <h1 className="[font-family:'Oswald',Helvetica] font-normal text-[#1a0f0f] text-3xl md:text-4xl lg:text-[52px] tracking-[3.00px] leading-none">
                FULL PORTFOLIO
              </h1>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 mb-8 md:mb-10">
          {galleryCategories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-3 py-1 rounded-full border transition-all duration-300 ${
                filter === category
                  ? "bg-[#ff9999] text-white border-[#ff9999]"
                  : "border-[#1a0f0f] text-[#1a0f0f] hover:bg-[#ffe1da]"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {filtered.map((image, index) => (
            <InView key={image} delayMs={index * 60}>
              <button
                className="relative aspect-square overflow-hidden rounded-lg group w-full"
                onClick={() => setActive(image)}
              >
                <img
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  alt="Gallery image"
                  src={image}
                  loading={index < 6 ? "eager" : "lazy"}
                  decoding="async"
                />
                <div className="absolute inset-0 bg-[rgba(255,160,122,0)] group-hover:bg-[rgba(255,160,122,0.18)] transition-colors duration-300" />
              </button>
            </InView>
          ))}
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
