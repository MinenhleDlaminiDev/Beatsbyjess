import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const PricingPlanSection = (): JSX.Element => {
  const pricingItems = [
    { service: "Natural", price: "R400" },
    { service: "Soft Glam", price: "R500" },
    { service: "Full Facebeat", price: "R600" },
    { service: "Graduation", price: "R650" },
  ];

  return (
    <section className="w-full relative">
      <div className="min-h-[500px] md:min-h-[600px] lg:min-h-[720px] bg-[#f0f0f0] py-12 md:py-16 lg:py-[90px] px-4 md:px-6 lg:px-[115px]">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-[268px] mb-8 md:mb-12 lg:mb-[90px] mx-auto text-center">
            <div className="flex items-center justify-center mb-4 md:mb-6 lg:mb-[24px]">
              <div className="[font-family:'Oswald',Helvetica] font-normal text-[#ff9999] text-sm md:text-[15px] tracking-[5.00px] leading-[22px]">
                PRICES
              </div>
            </div>

            <div className="flex items-center justify-center py-2.5 mb-4 md:mb-6 lg:mb-[19px]">
              <div className="[font-family:'Oswald',Helvetica] font-normal text-[#1a0f0f] text-2xl md:text-3xl lg:text-[45px] tracking-[3.00px] leading-[22px] whitespace-nowrap">
                PRICING PLAN
              </div>
            </div>

            <img
              className="w-[60px] md:w-[75px] lg:w-[85px] h-px object-cover mx-auto"
              alt="Line"
              src="/line-4.svg"
            />
          </div>

          <div className="flex justify-center">
            <Card className="w-full max-w-[827px] h-[400px] md:h-[350px] lg:h-[400px] border-dashed border-black overflow-hidden">
              <CardContent className="p-0 relative w-full h-full bg-[url(/src/assets/GeneralPriceBackground.jpg)] bg-cover bg-[50%_50%]">
                <div className="absolute inset-0 bg-[#1a0f0f99]" />

                <div className="relative z-10 p-6 md:p-8 lg:p-[59px] flex flex-col justify-center h-full">
                  <h3 className="[font-family:'Oswald',Helvetica] font-normal text-white text-lg md:text-xl lg:text-2xl tracking-[2.00px] leading-[22px] mb-6 md:mb-12 lg:mb-[62px] text-center md:text-left">
                    General Prices:
                  </h3>

                  <div className="space-y-4 md:space-y-6 lg:space-y-[30px]">
                    {pricingItems.map((item, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between relative"
                      >
                        <div className="[font-family:'Didact_Gothic',Helvetica] font-normal text-white text-sm md:text-[15px] tracking-[0] leading-[22px]">
                          {item.service}
                        </div>

                        <div className="flex-1 flex items-center justify-center mx-2 md:mx-4">
                          <div className="text-white text-sm md:text-base w-[85%] overflow-hidden text-right">
                            <div className="whitespace-nowrap md:hidden">..............................................</div>
                            <div className="whitespace-nowrap hidden md:block">........................................................................................</div>
                          </div>
                        </div>

                        <div className="[font-family:'Didact_Gothic',Helvetica] font-normal text-white text-sm md:text-[15px] tracking-[0] leading-[22px] text-right">
                          {item.price}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
