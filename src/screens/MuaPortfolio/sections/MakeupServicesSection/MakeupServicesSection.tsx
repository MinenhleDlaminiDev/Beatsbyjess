import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import  EyeMakeUp  from "../../../../assets/EyeMakeUp.jpeg"
import  FaceMakeUp  from "../../../../assets/FaceMakeUp.jpeg"
import InView from "../../../../components/InView";


export const MakeupServicesSection = (): JSX.Element => {
  const serviceCards = [
    {
      image: EyeMakeUp,
      title: "Eye Makeup",
    },
    {
      image: FaceMakeUp,
      title: "Face MakeUp",
    },
  ];

  return (
    <section className="w-full bg-[#f0f0f0] py-12 md:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12 lg:mb-16">
          <div className="flex flex-col gap-3 md:gap-4">
            <div className="[font-family:'Oswald',Helvetica] font-normal text-[#ff9999] text-sm md:text-[15px] tracking-[5.00px] leading-[22px]">
              What I Do
            </div>

            <h2 className="[font-family:'Oswald',Helvetica] font-normal text-[#1a0f0f] text-2xl md:text-3xl lg:text-[45px] tracking-[3.00px] leading-none">
              MAKEUP SERVICES
            </h2>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-2 md:grid-cols-2 gap-4 md:gap-8 lg:gap-12">
          {serviceCards.map((card, index) => (
            <InView key={index} className="relative group w-full" delayMs={index * 100}>
              <Card className="relative border-0 bg-transparent shadow-none overflow-hidden w-full">
                <CardContent className="p-0">
                  <div className="relative transition-transform duration-300 ease-linear group-hover:-translate-y-1">
                    <img
                      className="w-full h-[200px] md:h-[300px] lg:h-[400px] object-cover object-center"
                      alt={card.title}
                      src={card.image}
                    />
                    
                    <div className="absolute bottom-0 left-0 right-0 bg-[#ff9999] p-2 md:p-6 border-t-2 border-transparent group-hover:border-[#FFA07A] transition-colors duration-200">
                      <div className="[font-family:'Didact_Gothic',Helvetica] font-normal text-[#1a0f0f] text-sm md:text-xl tracking-[0] leading-[30px] text-center">
                        {card.title}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </InView>
          ))}
        </div>
      </div>
    </section>
  );
};
