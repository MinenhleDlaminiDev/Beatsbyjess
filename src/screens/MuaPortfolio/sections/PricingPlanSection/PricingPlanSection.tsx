import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import InView from "../../../../components/InView";
import CountUp from "../../../../components/CountUp";

export const PricingPlanSection = (): JSX.Element => {
  const pricingItems = [
    { service: "Natural Look", price: "R450" },
    { service: "Soft Glam", price: "R550" },
    { service: "Full Glam", price: "R650" },
    { service: "Matric/Graduation", price: "R700" },
    { service: "Bridesmaids", price: "R750" },
    { service: "Bridal Makeup", price: "R900" },
  ];

  return (
    <section id="pricing" className="w-full relative">
      <div className="min-h-[500px] md:min-h-[600px] lg:min-h-[720px] bg-[#f0f0f0] py-12 md:py-16 lg:py-[90px] px-4 md:px-6 lg:px-[115px]">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-[268px] mb-8 md:mb-12 lg:mb-[90px] mx-auto text-center">
            <div className="flex flex-col items-center gap-3 md:gap-4">
              <div className="[font-family:'Oswald',Helvetica] font-normal text-[#ff9999] text-sm md:text-[15px] tracking-[5.00px] leading-[22px]">
                PRICES
              </div>

              <div className="[font-family:'Oswald',Helvetica] font-normal text-[#1a0f0f] text-2xl md:text-3xl lg:text-[45px] tracking-[3.00px] leading-none whitespace-nowrap">
                PRICING PLAN
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <InView className="w-full max-w-[827px]">
            <Card className="w-full max-w-[827px] border-dashed border-black overflow-hidden bg-transparent">
              <CardContent className="p-0 relative w-full bg-[url(/src/assets/GeneralPriceBackground.jpg)] bg-cover bg-[center_36%]">
                <div className="absolute inset-0 bg-[#1a0f0f5c]" />

                <div className="relative z-10 p-6 md:p-8 lg:p-[59px]">
                  <h3 className="[font-family:'Oswald',Helvetica] font-normal text-white text-lg md:text-xl lg:text-2xl tracking-[2.00px] leading-[22px] mb-6 md:mb-10 lg:mb-12 text-center md:text-left">
                    General Prices:
                  </h3>

                  <div className="space-y-4 md:space-y-6 lg:space-y-[30px]">
                    {pricingItems.map((item, index) => (
                      <div
                        key={index}
                        className="flex items-end gap-2 sm:gap-3 md:gap-4"
                      >
                        <div className="max-w-[45%] sm:max-w-none shrink-0 [font-family:'Didact_Gothic',Helvetica] font-normal text-white text-sm md:text-[15px] tracking-[0] leading-[18px] md:leading-[22px] break-words">
                          {item.service}
                        </div>

                        <div className="min-w-[24px] flex-1 border-b border-dashed border-white/80 translate-y-[-4px]" />

                        <div className="shrink-0 [font-family:'Didact_Gothic',Helvetica] font-normal text-white text-sm md:text-[15px] tracking-[0] leading-[18px] md:leading-[22px] text-right">
                          <span className="mr-1">{item.price.replace(/\d+/g, "")}</span>
                          <CountUp to={parseInt(item.price.replace(/\D/g, ""), 10)} durationMs={1200} />
                        </div>
                      </div>
                    ))}
                  </div>

                  <p className="[font-family:'Didact_Gothic',Helvetica] font-normal text-[#fff5f5] text-sm md:text-[15px] tracking-[0] leading-[22px] mt-8 text-center md:text-left">
                    House calls are available.
                  </p>
                </div>
              </CardContent>
            </Card>
            </InView>
          </div>
        </div>
      </div>
    </section>
  );
};
