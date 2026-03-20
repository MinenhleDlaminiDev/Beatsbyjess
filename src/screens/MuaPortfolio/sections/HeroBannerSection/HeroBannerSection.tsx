import React, { useEffect, useState } from "react";
import { Button } from "../../../../components/ui/button";
import FaceMakeUp from "../../../../assets/FaceMakeUp.jpeg";
import HeroBanner from "../../../../assets/Hero.jpg";
import CarouselPortrait from "../../../../assets/9f378a3d-b0f0-491b-b5ad-cb241f397750.jpg";
import Gallery19 from "../../../../assets/Gallery19.jpg";

const navigationItems = [
  "Home",
  "About",
  "Services",
  "Pricing",
  "Portfolio",
  "Contact",
];

const heroSlides = [HeroBanner, CarouselPortrait, Gallery19, FaceMakeUp];

export const HeroBannerSection = (): JSX.Element => {
  const [activeSlide, setActiveSlide] = useState(0);

  const easeInOutCubic = (progress: number) =>
    progress < 0.5
      ? 4 * progress * progress * progress
      : 1 - Math.pow(-2 * progress + 2, 3) / 2;

  const scrollToSection = (sectionId: string) => {
    const target = document.getElementById(sectionId);

    if (!target) return;

    const startY = window.scrollY;
    const targetY = target.getBoundingClientRect().top + window.scrollY;
    const distance = targetY - startY;
    const duration = 900;
    const startTime = performance.now();

    const animateScroll = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easeInOutCubic(progress);

      window.scrollTo(0, startY + distance * easedProgress);

      if (progress < 1) {
        window.requestAnimationFrame(animateScroll);
      }
    };

    window.requestAnimationFrame(animateScroll);
  };

  const triggerHaptics = () => {
    if ("vibrate" in navigator) {
      navigator.vibrate(12);
    }
  };

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % heroSlides.length);
    }, 5000);

    return () => window.clearInterval(intervalId);
  }, []);

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

          @keyframes scaleFadeIn {
            from { opacity: 0; transform: scale(0.95); }
            to { opacity: 1; transform: scale(1); }
          }
          @keyframes slideUp {
            from { opacity: 0; transform: translateY(14px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes salmonGlowPulse {
            0% { box-shadow: 0 0 0 0 rgba(255,160,122,0.0), 0 0 0 rgba(0,0,0,0); }
            50% { box-shadow: 0 8px 24px rgba(255,160,122,0.45), 0 2px 8px rgba(255,160,122,0.35); }
            100% { box-shadow: 0 0 0 0 rgba(255,160,122,0.0), 0 0 0 rgba(0,0,0,0); }
          }

          @keyframes heroImageZoom {
            from { transform: scale(1.02); }
            to { transform: scale(1.09); }
          }
        `}
      </style>
      <section className="relative w-full h-screen overflow-hidden shadow-[0px_40px_87px_#0000001a,0px_159px_159px_#00000017,0px_357px_214px_#0000000d,0px_634px_254px_#00000003,0px_991px_277px_transparent]">
      <div className="relative h-full overflow-hidden">
        {heroSlides.map((slide, index) => (
          <img
            key={slide}
            className="absolute w-full h-full top-0 left-0 object-cover transition-opacity duration-[1400ms] ease-in-out"
            style={{
              opacity: index === activeSlide ? 1 : 0,
              animation: index === activeSlide ? "heroImageZoom 5s linear forwards" : "none",
            }}
            alt="Makeup artistry showcase"
            src={slide}
          />
        ))}

        <div className="absolute w-full h-full top-0 left-0 bg-[#1a0f0f82]" />

        <header className="flex items-center justify-between px-4 md:px-8 lg:px-[118px] pt-4 md:pt-[19px]">
          <div className="flex items-center">
            <div className="relative transition-transform ease-smooth duration-200 hover:scale-105">
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
          <div className="mb-4 md:mb-6">
            <div
              className="opacity-0 [font-family:'Oswald',Helvetica] font-normal text-[#ff9999] text-xs md:text-sm lg:text-[15px] tracking-[6.60px] leading-[22px]"
              style={{ animation: 'slideUp 0.8s cubic-bezier(0.25,0.46,0.45,0.94) forwards', animationDelay: '300ms' }}
            >
              MAKEUP ARTIST
            </div>
          </div>

          <div className="mb-8 md:mb-12 lg:mb-[53px]">
            <h1
              className="opacity-0 [font-family:'Oswald',Helvetica] font-normal text-[#fff5f5] text-3xl md:text-5xl lg:text-[70px] tracking-[12.60px] leading-[26px]"
              style={{ animation: 'scaleFadeIn 1.2s cubic-bezier(0.25,0.46,0.45,0.94) forwards' }}
            >
              JESS RAVUKU
            </h1>
          </div>

          <div className="flex flex-row gap-3 justify-center md:justify-start">
            <Button
              className="h-auto bg-[#ff9999] hover:bg-[#ff8080] px-6 md:px-8 py-2 md:py-3 transition-[box-shadow,transform] duration-300"
              style={{ animation: "salmonGlowPulse 1.8s ease-in-out infinite" }}
              onClick={() => {
                triggerHaptics();
                scrollToSection("book-appointment");
              }}
            >
              <span className="[font-family:'Didact_Gothic',Helvetica] font-normal text-[#fff5f5] text-sm md:text-[15px] tracking-[0] leading-[22px]">
                Book Now
              </span>
            </Button>

            <Button
              variant="outline"
              className="h-auto border-[#fff5f5] bg-transparent hover:bg-[#fff5f5]/10 px-6 md:px-8 py-2 md:py-3 transition-colors duration-300"
              onClick={() => scrollToSection("pricing")}
            >
              <span className="[font-family:'Didact_Gothic',Helvetica] font-normal text-[#fff5f5] text-sm md:text-[15px] tracking-[0] leading-[22px]">
                Pricing
              </span>
            </Button>
          </div>
        </main>

        <div className="absolute bottom-8 md:bottom-12 lg:bottom-[64px] left-1/2 flex -translate-x-1/2 items-center gap-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              type="button"
              aria-label={`Show slide ${index + 1}`}
              onClick={() => setActiveSlide(index)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                index === activeSlide ? "w-8 bg-[#ff9999]" : "w-2.5 bg-white/60"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
    </>
  );
};
