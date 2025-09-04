import React from "react";
import { Button } from "../../../../components/ui/button";
import { Input } from "../../../../components/ui/input";
import { Label } from "../../../../components/ui/label";
import { Textarea } from "../../../../components/ui/textarea";

export const ContactUsSection = (): JSX.Element => {
  const contactInfo = [
    {
      icon: "/headset.svg",
      text: "+254712345678",
      iconClass: "w-6 h-6",
    },
    {
      icon: "/vector-4.svg",
      text: "example@gmail.com",
      iconClass: "w-[25px] h-[25px]",
    },
    {
      icon: "/vector.svg",
      text: "Johannesburg, South Africa",
      iconClass: "w-[19px] h-[25px]",
    },
    {
      icon: "/vector-2.svg",
      text: "Mon-Fri: 08.00 - 19.00, Sunday: Closed",
      iconClass: "w-6 h-6",
    },
    {
      icon: "/vector-1.svg",
      text: "Google Maps",
      iconClass: "w-[25px] h-[22px]",
    },
  ];

  return (
    <section className="w-full bg-[#f0f0f0] py-12 md:py-16 lg:py-[90px] relative">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-[215px]">
          <div className="space-y-6 md:space-y-8 text-center lg:text-left order-1 lg:order-1">
            <header className="space-y-3 md:space-y-4">
              <div className="inline-flex items-center justify-center lg:justify-start gap-2.5">
                <div className="[font-family:'Oswald',Helvetica] font-normal text-[#ff9999] text-sm md:text-[15px] tracking-[5.00px] leading-[22px] whitespace-nowrap">
                  LOCATION
                </div>
              </div>

              <img
                className="w-[60px] md:w-[75px] lg:w-[85px] h-px object-cover mx-auto lg:mx-0"
                alt="Line"
                src="/line-4.svg"
              />
            </header>

            <div className="space-y-3 md:space-y-4">
              <div className="inline-flex items-center justify-center lg:justify-start gap-2.5 px-0 py-2.5">
                <h2 className="[font-family:'Oswald',Helvetica] font-normal text-[#1a0f0f] text-2xl md:text-3xl lg:text-[45px] tracking-[3.00px] leading-[22px] whitespace-nowrap">
                  CONTACT US
                </h2>
              </div>
            </div>

            <div className="space-y-4 md:space-y-6">
              <p className="[font-family:'Didact_Gothic',Helvetica] font-normal text-black text-sm md:text-base lg:text-[17px] tracking-[0] leading-[22px] md:leading-[26px]">
                Hi, it is me Jess, Unleash The Beauty in You! Contact Me for a Transformation That Speaks Louder Than Words. Let&#39;s Glam Together!
              </p>

              <div className="space-y-4 md:space-y-6">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-center justify-center lg:justify-start gap-4 md:gap-6">
                    <img
                      className={item.iconClass}
                      alt="Contact icon"
                      src={item.icon}
                    />
                    <span className="[font-family:'Didact_Gothic',Helvetica] font-normal text-black text-sm md:text-base lg:text-[17px] tracking-[0] leading-[22px] md:leading-[26px]">
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6 md:space-y-8 text-center lg:text-left order-2 lg:order-2">
            <div className="inline-flex items-center justify-center lg:justify-start gap-2.5">
              <div className="[font-family:'Oswald',Helvetica] font-normal text-[#ff9999] text-sm md:text-[15px] tracking-[5.00px] leading-[22px] whitespace-nowrap">
                GET IN TOUCH
              </div>
            </div>

            <form className="space-y-4 md:space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <div className="space-y-2">
                  <Label className="[font-family:'Didact_Gothic',Helvetica] font-normal text-[#1a0f0fb2] text-sm md:text-[15px] tracking-[0] leading-[22px]">
                    Name*
                  </Label>
                  <div className="relative">
                    <Input className="border-0 border-b border-gray-300 rounded-none bg-transparent px-0 pb-2 focus:border-[#ff9999] focus:ring-0" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label className="[font-family:'Didact_Gothic',Helvetica] font-normal text-[#1a0f0fb2] text-sm md:text-[15px] tracking-[0] leading-[22px]">
                    Email*
                  </Label>
                  <div className="relative">
                    <Input className="border-0 border-b border-gray-300 rounded-none bg-transparent px-0 pb-2 focus:border-[#ff9999] focus:ring-0" />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label className="[font-family:'Didact_Gothic',Helvetica] font-normal text-[#1a0f0fb2] text-sm md:text-[15px] tracking-[0] leading-[22px]">
                  Message *
                </Label>
                <div className="relative">
                  <Textarea
                    className="border-0 border-b border-gray-300 rounded-none bg-transparent px-0 pb-2 min-h-[80px] resize-none focus:border-[#ff9999] focus:ring-0"
                    rows={4}
                  />
                </div>
              </div>

              <Button
                type="submit"
                className="bg-[#ff9999] hover:bg-[#ff8888] text-[#fff5f5] px-6 md:px-8 py-2 md:py-3 h-auto [font-family:'Didact_Gothic',Helvetica] font-normal text-sm md:text-[15px] tracking-[0] leading-[22px]"
              >
                Submit
              </Button>
            </form>
          </div>
        </div>
      </div>

      <img
        className="absolute w-px h-[70px] bottom-[35px] left-1/2 transform -translate-x-1/2 object-cover hidden md:block"
        alt="Line"
        src="/line-5-1.svg"
      />
    </section>
  );
};
