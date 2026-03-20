import React from "react";
import InView from "../../../../components/InView";

const policyItems = [
  "A 50% non-refundable deposit is required to secure your booking.",
  "If you are more than 10 minutes late, you will be charged an extra R100.",
  "If you are more than 20 minutes late, your appointment will automatically be cancelled.",
  "Cancelling on the day of your appointment, or within 24 hours before it, means no refund.",
  "Rescheduling can be done up to 48 hours before your appointment.",
  "Deposits are non-transferable. If you miss your appointment, you cannot transfer it to another person.",
  "Only immediate payment is accepted.",
];

export const BookingPolicySection = (): JSX.Element => {
  return (
    <section className="w-full bg-[#fff4f5] py-12 md:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <InView className="mx-auto max-w-5xl">
          <div className="rounded-[28px] border border-[#f1d4d7] bg-[linear-gradient(180deg,rgba(255,245,245,0.98)_0%,rgba(255,236,238,0.98)_100%)] p-6 md:p-8 lg:p-10 shadow-[0_20px_50px_rgba(26,15,15,0.08)]">
            <div className="text-center mb-8 md:mb-10">
              <div className="flex flex-col gap-3 md:gap-4">
                <div className="[font-family:'Oswald',Helvetica] font-normal text-[#ff9999] text-sm md:text-[15px] tracking-[5.00px] leading-[22px]">
                  PLEASE NOTE
                </div>

                <h2 className="[font-family:'Oswald',Helvetica] font-normal text-[#1a0f0f] text-2xl md:text-3xl lg:text-[45px] tracking-[3.00px] leading-none">
                  BOOKING POLICY
                </h2>
              </div>
            </div>

            <div className="grid gap-3 md:gap-4">
              {policyItems.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-2xl bg-white/65 px-4 py-4 md:px-5 border border-[#f3d9dc]"
                >
                  <div className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-[#ff9999]" />
                  <p className="[font-family:'Didact_Gothic',Helvetica] text-[#1a0f0f] text-sm md:text-[15px] leading-[22px] md:leading-[26px]">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </InView>
      </div>
    </section>
  );
};
