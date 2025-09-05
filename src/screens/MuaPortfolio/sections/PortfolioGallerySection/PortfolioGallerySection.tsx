import React from "react";
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


export const PortfolioGallerySection = (): JSX.Element => {
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
    Gallery12
  ];

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

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {galleryImages.map((image, index) => (
              <div key={index} className="aspect-square overflow-hidden rounded-lg">
                <img
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  alt={`Gallery image ${index + 1}`}
                  src={image}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
