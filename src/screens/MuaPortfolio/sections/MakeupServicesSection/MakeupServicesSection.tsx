import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const MakeupServicesSection = (): JSX.Element => {
  const serviceCards = [
    {
      image: "/src/assets/EyeMakeUp.jpeg",
      title: "Eye Makeup",
    },
    {
      image: "/src/assets/Face MakeUp.jpeg",
      title: "Face MakeUp",
    },
  ];

  return (
    <section className="w-full bg-[#f0f0f0] py-12 md:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12 lg:mb-16">
          <div className="mb-4">
            <div className="[font-family:'Oswald',Helvetica] font-normal text-[#ff9999] text-sm md:text-[15px] tracking-[5.00px] leading-[22px]">
              What I Do
            </div>
          </div>

          <div className="mb-6">
            <h2 className="[font-family:'Oswald',Helvetica] font-normal text-[#1a0f0f] text-2xl md:text-3xl lg:text-[45px] tracking-[3.00px] leading-[22px]">
              MAKEUP SERVICES
            </h2>
          </div>

          <img
            className="w-[60px] md:w-[75px] lg:w-[85px] h-px object-cover mx-auto"
            alt="Line"
            src="/line-4.svg"
          />
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-2 md:grid-cols-2 gap-4 md:gap-8 lg:gap-12">
          {serviceCards.map((card, index) => (
            <div key={index} className="relative group w-full">
              <Card className="relative border-0 bg-transparent shadow-none overflow-hidden w-full">
                <CardContent className="p-0">
                  <div className="relative">
                    <img
                      className="w-full h-[200px] md:h-[300px] lg:h-[400px] object-cover"
                      alt={card.title}
                      src={card.image}
                    />
                    
                    <div className="absolute bottom-0 left-0 right-0 bg-[#ff9999] p-2 md:p-6">
                      <div className="[font-family:'Didact_Gothic',Helvetica] font-normal text-[#1a0f0f] text-sm md:text-xl tracking-[0] leading-[30px] text-center">
                        {card.title}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
