import React from "react";
import { AboutMeSection } from "./sections/AboutMeSection/AboutMeSection";
import { ContactUsSection } from "./sections/ContactUsSection/ContactUsSection";
import { FooterSection } from "./sections/FooterSection/FooterSection";
import { HeroBannerSection } from "./sections/HeroBannerSection/HeroBannerSection";
import { MakeupServicesSection } from "./sections/MakeupServicesSection/MakeupServicesSection";
import { PortfolioGallerySection } from "./sections/PortfolioGallerySection/PortfolioGallerySection";
import { PricingPlanSection } from "./sections/PricingPlanSection/PricingPlanSection";

export const MuaPortfolio = (): JSX.Element => {
  return (
    <div className="bg-[#fff4f5] w-full min-h-screen">
      <div className="bg-[#fff4f5] w-full flex flex-col">
        <HeroBannerSection />
        <AboutMeSection />
        <MakeupServicesSection />
        <PricingPlanSection />
        <PortfolioGallerySection />
        <ContactUsSection />
        <FooterSection />
      </div>
    </div>
  );
};
