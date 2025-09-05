import React from "react";
import AboutMe from "../../../../assets/AboutMe.jpeg"

export const AboutMeSection = (): JSX.Element => {
  return (
    <section className="w-full bg-[#fff4f5] py-12 md:py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 lg:gap-12 items-start">
          <div className="w-full order-1 lg:order-1">
            <img
              className="w-full h-[300px] md:h-[400px] lg:h-[500px] object-cover"
              alt="Jess Ravuku Portrait"
              src={AboutMe}
            />
          </div>

          <div className="w-full space-y-4 md:space-y-6 order-2 lg:order-2 text-center lg:text-left">
            <div className="space-y-3 md:space-y-4">
              <div className="[font-family:'Oswald',Helvetica] font-normal text-[#ff9999] text-sm md:text-[15px] tracking-[5.00px] leading-[22px]">
                About Me
              </div>

              <div className="[font-family:'Oswald',Helvetica] font-normal text-[#1a0f0f] text-2xl md:text-3xl lg:text-[45px] tracking-[3.00px] leading-[22px]">
                JESS RAVUKU
              </div>

              <img
                className="w-[60px] md:w-[75px] lg:w-[85px] h-px object-cover mx-auto lg:mx-0"
                alt="Decorative line"
                src="/line-4.svg"
              />
            </div>

            <div className="space-y-4 md:space-y-6 [font-family:'Didact_Gothic',Helvetica] font-normal text-black text-sm md:text-[15px] tracking-[0] leading-[22px] md:leading-[26px]">
              <p>
                Hey there, I'm Jess, a professional makeup artist breaking the
                norms. I've carved my path with creativity and passion. My favorite
                color, a gentle and soothing light salmon pink, defines not only my style but also my
                perspective – a fusion of warmth and sophistication.
              </p>

              <p>
                Beyond the glitz and glamour, I find my joy in the simplest of
                activities. You'll often catch me at home, wrapped up
                in captivating docuseries. There's something about
                unraveling real stories that keeps me hooked and inspires
                my artistry.
              </p>

              <p>
                My brushes and palette are extensions of my imagination and
                skill. I turn faces into living, breathing works of art,
                each stroke telling a unique story. As a guy in the makeup
                world, I bring a fresh take, pushing boundaries and
                embracing the unexpected.
              </p>

              <p>
                So here's to embracing pink, creating beauty, and finding
                inspiration in the comfort of my home, one docuseries
                at a time. I'm Kiithya – makeup artist, storyteller, and
                advocate for breaking stereotypes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
