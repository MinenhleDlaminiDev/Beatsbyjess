import React from "react";
import { Separator } from "../../../../components/ui/separator";
import { PhoneCall, Mail, MapPin, Instagram, Facebook, Twitter, Youtube } from "lucide-react";

export const FooterSection = (): JSX.Element => {
  const contactInfo = [
    { icon: <PhoneCall className="w-6 h-6 text-[#ff9999]" />, text: "+254712345678" },
    { icon: <Mail className="w-6 h-6 text-[#ff9999]" />, text: "example@gmail.com" },
    { icon: <MapPin className="w-5 h-6 text-[#ff9999]" />, text: "Johannesburg, South Africa" },
  ];

  const openingHours = [
    {
      day: "Mon - Friday :",
      time: "9am - 7pm",
    },
    {
      day: "Saturday:",
      time: "10am - 5pm",
    },
    {
      day: "Sunday :",
      time: "By Call",
    },
  ];

  return (
    <div className="w-full relative">
      <footer className="w-full bg-[#1a0f0f] py-12 md:py-16 lg:py-[90px] px-4 md:px-6 lg:px-[92px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 max-w-[1256px] mx-auto">
          <div className="flex flex-col text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-2.5 px-0 py-2.5 mb-4 md:mb-6">
              <div className="[font-family:'Oswald',Helvetica] font-normal text-[#ff9999] text-2xl md:text-3xl lg:text-[45px] tracking-[7.50px] leading-[22px]">
                JESS
              </div>
            </div>

            <div className="mb-6 md:mb-8 [font-family:'Didact_Gothic',Helvetica] font-normal text-white text-sm md:text-[15px] tracking-[0] leading-[22px] md:leading-[26px]">
              Hi, it is&nbsp;&nbsp;me Jess, Unleash The Beauty in You!
              <br />
              Let&apos;s Glam Together!
            </div>

            <div className="flex justify-center lg:justify-start gap-4">
              <a href="#" aria-label="Instagram" className="text-[#ff9999] hover:opacity-80 transition-opacity">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" aria-label="Facebook" className="text-[#ff9999] hover:opacity-80 transition-opacity">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" aria-label="Twitter" className="text-[#ff9999] hover:opacity-80 transition-opacity">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" aria-label="YouTube" className="text-[#ff9999] hover:opacity-80 transition-opacity">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="flex flex-col text-center lg:text-left">
            <div className="mb-4 md:mb-6">
              <div className="[font-family:'Oswald',Helvetica] font-normal text-[#ff9999] text-sm md:text-[15px] tracking-[5.00px] leading-[22px] mb-4">
                GET IN TOUCH
              </div>
              <Separator className="bg-[#ff9999] h-px w-full max-w-[295px] mx-auto lg:mx-0" />
            </div>

            <div className="space-y-4 md:space-y-6">
              {contactInfo.map((contact, index) => (
                <div key={index} className="flex items-center justify-center lg:justify-start gap-4 md:gap-6">
                  {contact.icon}
                  <div className="[font-family:'Didact_Gothic',Helvetica] font-normal text-[#fff5f5] text-sm md:text-base lg:text-[17px] tracking-[0] leading-[22px] md:leading-[26px]">
                    {contact.text}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col text-center lg:text-left md:col-span-2 lg:col-span-1">
            <div className="mb-4 md:mb-6">
              <div className="[font-family:'Oswald',Helvetica] font-normal text-[#ff9999] text-sm md:text-[15px] tracking-[5.00px] leading-[22px] mb-4">
                OPENING HOURS
              </div>
              <Separator className="bg-[#ff9999] h-px w-full max-w-[295px] mx-auto lg:mx-0" />
            </div>

            <div className="space-y-4 md:space-y-6">
              {openingHours.map((hours, index) => (
                <div key={index} className="flex justify-between items-center max-w-[295px] mx-auto lg:mx-0">
                  <div className="[font-family:'Didact_Gothic',Helvetica] font-normal text-white text-sm md:text-[15px] tracking-[0] leading-[22px] md:leading-[26px]">
                    {hours.day}
                  </div>
                  <div className="[font-family:'Didact_Gothic',Helvetica] font-normal text-white text-sm md:text-[15px] tracking-[0] leading-[22px] md:leading-[26px]">
                    {hours.time}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </footer>

      <Separator className="bg-white h-px w-full" />

      <div className="w-full bg-[#1a0f0f] py-3 md:py-[13px]">
        <div className="text-center [font-family:'Didact_Gothic',Helvetica] font-normal text-sm md:text-[15px] tracking-[0] leading-[22px] md:leading-[26px]">
          <span className="text-white">© </span>
          <span className="text-[#bbbbbb] text-xs">
            2025. Developed by Minenhle Barry Dlamini
          </span>
        </div>
      </div>
    </div>
  );
};
