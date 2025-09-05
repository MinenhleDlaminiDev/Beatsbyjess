import { ChevronDownIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import HeroBanner from "../../../../assets/Hero.jpg"

const navigationItems = [
  "Home",
  "About",
  "Services",
  "Pricing",
  "Portfolio",
  "Contact",
];

export const HeroBannerSection = (): JSX.Element => {
  return (
    <>
      <style>
        {`
          @keyframes synchronizedBounce {
            0%, 20%, 53%, 80%, 100% {
              transform: translate3d(0,0,0);
            }
            40%, 43% {
              transform: translate3d(0, -8px, 0);
            }
            70% {
              transform: translate3d(0, -4px, 0);
            }
            90% {
              transform: translate3d(0, -2px, 0);
            }
          }
          .synchronized-bounce {
            animation: synchronizedBounce 4s infinite;
          }
        `}
      </style>
      <section className="relative w-full h-screen lg:h-[90vh] shadow-[0px_40px_87px_#0000001a,0px_159px_159px_#00000017,0px_357px_214px_#0000000d,0px_634px_254px_#00000003,0px_991px_277px_transparent]">
      <div className="relative h-full">
        <img
          className="absolute w-full h-full top-0 left-0 object-cover"
          alt="Makeup brushes background"
          src={HeroBanner}
        />

        <div className="absolute w-full h-full top-0 left-0 bg-[#1a0f0f82]" />

        <header className="flex items-center justify-between px-4 md:px-8 lg:px-[118px] pt-4 md:pt-[19px]">
          <div className="flex items-center">
            <div className="relative">
              <div className="[font-family:'Didact_Gothic',Helvetica] font-normal text-[#fff5f5] text-2xl md:text-3xl lg:text-[45px] tracking-[9.00px] leading-[normal] synchronized-bounce">
                B
              </div>
              <div className="absolute top-2 md:top-3 lg:top-4 left-[15px] md:left-[20px] lg:left-[25px] [font-family:'Didact_Gothic',Helvetica] font-normal text-[#fff5f5] text-sm md:text-base lg:text-xl tracking-[2.60px] leading-[normal]">
                eatByJess
              </div>
            </div>
          </div>

          <nav className="hidden md:flex items-end gap-4 lg:gap-[38px] px-[15px]">
            {navigationItems.map((item, index) => (
              <a
                key={index}
                href="#"
                className="[font-family:'Didact_Gothic',Helvetica] font-normal text-[#fff5f5] text-sm lg:text-xl tracking-[0.60px] leading-[normal] hover:text-[#ff9999] transition-colors"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button className="md:hidden text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </header>

        <main className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[calc(100%-2rem)] md:absolute md:top-[180px] md:left-8 md:transform-none md:w-[calc(100%-4rem)] lg:top-[214px] lg:left-[118px] lg:w-[493px] text-center md:text-left">
          <img
            className="w-[60px] md:w-[75px] lg:w-[85px] h-px mb-4 md:mb-6 object-cover mx-auto md:mx-0"
            alt="Decorative line"
            src="/line-4.svg"
          />

          <div className="mb-4 md:mb-6">
            <div className="[font-family:'Oswald',Helvetica] font-normal text-[#ff9999] text-xs md:text-sm lg:text-[15px] tracking-[6.60px] leading-[22px]">
              MAKEUP ARTIST
            </div>
          </div>

          <div className="mb-8 md:mb-12 lg:mb-[53px]">
            <h1 className="[font-family:'Oswald',Helvetica] font-normal text-[#fff5f5] text-3xl md:text-5xl lg:text-[70px] tracking-[12.60px] leading-[26px]">
              JESS RAVUKU
            </h1>
          </div>

          <Button className="h-auto bg-[#ff9999] hover:bg-[#ff8080] px-6 md:px-8 py-2 md:py-3">
            <span className="[font-family:'Didact_Gothic',Helvetica] font-normal text-[#fff5f5] text-sm md:text-[15px] tracking-[0] leading-[22px]">
              About Me
            </span>
          </Button>
        </main>

        <div className="absolute bottom-8 md:bottom-12 lg:bottom-[64px] left-1/2 transform -translate-x-1/2">
          <ChevronDownIcon className="w-8 h-8 md:w-10 md:h-10 text-white synchronized-bounce" />
        </div>
      </div>
    </section>
    </>
  );
};
