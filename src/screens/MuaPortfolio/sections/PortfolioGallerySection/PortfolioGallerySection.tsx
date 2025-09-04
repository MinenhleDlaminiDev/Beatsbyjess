import React from "react";

export const PortfolioGallerySection = (): JSX.Element => {
  const galleryImages = [
    "/src/assets/Gallery1.jpeg",
    "/src/assets/Gallery2.jpeg", 
    "/src/assets/Gallery3.jpeg",
    "/src/assets/Gallery4.jpeg",
    "/src/assets/Gallery5.jpeg",
    "/src/assets/Gallery6.jpeg",
    "/src/assets/Gallery7.jpeg",
    "/src/assets/Gallery8.jpg",
    "/src/assets/Gallery9.jpg",
    "/src/assets/Gallery10.jpg",
    "/src/assets/Gallery11.jpg",
    "/src/assets/Gallery12.jpg"
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

            <img
              className="w-[60px] md:w-[75px] lg:w-[85px] h-px object-cover mx-auto"
              alt="Line"
              src="/line-4.svg"
            />
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

        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-full hidden md:block">
          <img
            className="w-px h-[70px] object-cover"
            alt="Line"
            src="/line-5-1.svg"
          />
        </div>

        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full hidden md:block">
          <img
            className="w-px h-[70px] object-cover"
            alt="Line"
            src="/line-5-1.svg"
          />
        </div>
      </div>
    </section>
  );
};
