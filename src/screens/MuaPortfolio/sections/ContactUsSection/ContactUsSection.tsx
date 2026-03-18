import emailjs from "@emailjs/browser";
import React, { useState } from "react";
import { PhoneCall, Mail, MapPin, Clock } from "lucide-react";
import { Button } from "../../../../components/ui/button";
import { Input } from "../../../../components/ui/input";
import { Label } from "../../../../components/ui/label";
import { Textarea } from "../../../../components/ui/textarea";

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export const ContactUsSection = (): JSX.Element => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "Soft Glam",
    eventDate: "",
    appointmentType: "Studio",
    location: "",
    numberOfFaces: "1",
    message: "",
  });
  const [submitState, setSubmitState] = useState<{
    status: "idle" | "success" | "error";
    message: string;
  }>({
    status: "idle",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const contactInfo = [
    { icon: <PhoneCall className="w-6 h-6 text-[#ff9999]" />, text: "+27 81 764 8370" },
    { icon: <Mail className="w-6 h-6 text-[#ff9999]" />, text: "admin@beatbyjess.co.za" },
    { icon: <MapPin className="w-5 h-6 text-[#ff9999]" />, text: "Johannesburg, South Africa" },
    { icon: <Clock className="w-6 h-6 text-[#ff9999]" />, text: "Mon-Fri: 08.00 - 19.00, Sunday: Closed" },
  ];

  const isEmailJsConfigured =
    Boolean(EMAILJS_SERVICE_ID) &&
    Boolean(EMAILJS_TEMPLATE_ID) &&
    Boolean(EMAILJS_PUBLIC_KEY);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!isEmailJsConfigured) {
      setSubmitState({
        status: "error",
        message:
          "Email service is not configured yet. Add the EmailJS keys to your Vite environment variables.",
      });
      return;
    }

    setIsSubmitting(true);
    setSubmitState({ status: "idle", message: "" });

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          service: formData.service,
          event_date: formData.eventDate,
          appointment_type: formData.appointmentType,
          location: formData.location,
          number_of_faces: formData.numberOfFaces,
          message: formData.message,
          title: "New contact form enquiry",
          time: new Date().toLocaleString(),
        },
        {
          publicKey: EMAILJS_PUBLIC_KEY,
        },
      );

      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "Soft Glam",
        eventDate: "",
        appointmentType: "Studio",
        location: "",
        numberOfFaces: "1",
        message: "",
      });
      setSubmitState({
        status: "success",
        message: "Thanks. Your message has been sent successfully.",
      });
    } catch {
      setSubmitState({
        status: "error",
        message:
          "Sorry, something went wrong while sending your message. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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
                  BOOK APPOINTMENT
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
                    {item.icon}
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

            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <div className="space-y-2">
                  <Label className="[font-family:'Didact_Gothic',Helvetica] font-normal text-[#1a0f0fb2] text-sm md:text-[15px] tracking-[0] leading-[22px]">
                    Name*
                  </Label>
                  <div className="relative">
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="border-0 border-b border-gray-300 rounded-none bg-transparent px-0 pb-2 focus:border-[#ff9999] focus:ring-0"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label className="[font-family:'Didact_Gothic',Helvetica] font-normal text-[#1a0f0fb2] text-sm md:text-[15px] tracking-[0] leading-[22px]">
                    Email*
                  </Label>
                  <div className="relative">
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="border-0 border-b border-gray-300 rounded-none bg-transparent px-0 pb-2 focus:border-[#ff9999] focus:ring-0"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <div className="space-y-2">
                  <Label className="[font-family:'Didact_Gothic',Helvetica] font-normal text-[#1a0f0fb2] text-sm md:text-[15px] tracking-[0] leading-[22px]">
                    Phone*
                  </Label>
                  <div className="relative">
                    <Input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="border-0 border-b border-gray-300 rounded-none bg-transparent px-0 pb-2 focus:border-[#ff9999] focus:ring-0"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label className="[font-family:'Didact_Gothic',Helvetica] font-normal text-[#1a0f0fb2] text-sm md:text-[15px] tracking-[0] leading-[22px]">
                    Service*
                  </Label>
                  <div className="relative">
                    <select
                      name="service"
                      value={formData.service}
                      onChange={(event) =>
                        setFormData((current) => ({
                          ...current,
                          service: event.target.value,
                        }))
                      }
                      required
                      className="flex h-9 w-full border-0 border-b border-gray-300 bg-transparent px-0 pb-2 text-sm text-[#1a0f0f] focus:outline-none focus:ring-0 focus:border-[#ff9999]"
                    >
                      <option value="Natural">Natural</option>
                      <option value="Soft Glam">Soft Glam</option>
                      <option value="Full Facebeat">Full Facebeat</option>
                      <option value="Graduation">Graduation</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <div className="space-y-2">
                  <Label className="[font-family:'Didact_Gothic',Helvetica] font-normal text-[#1a0f0fb2] text-sm md:text-[15px] tracking-[0] leading-[22px]">
                    Event Date*
                  </Label>
                  <div className="relative">
                    <Input
                      type="date"
                      name="eventDate"
                      value={formData.eventDate}
                      onChange={handleChange}
                      required
                      className="border-0 border-b border-gray-300 rounded-none bg-transparent px-0 pb-2 focus:border-[#ff9999] focus:ring-0"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label className="[font-family:'Didact_Gothic',Helvetica] font-normal text-[#1a0f0fb2] text-sm md:text-[15px] tracking-[0] leading-[22px]">
                    Appointment Type*
                  </Label>
                  <div className="relative">
                    <select
                      name="appointmentType"
                      value={formData.appointmentType}
                      onChange={(event) =>
                        setFormData((current) => ({
                          ...current,
                          appointmentType: event.target.value,
                        }))
                      }
                      required
                      className="flex h-9 w-full border-0 border-b border-gray-300 bg-transparent px-0 pb-2 text-sm text-[#1a0f0f] focus:outline-none focus:ring-0 focus:border-[#ff9999]"
                    >
                      <option value="Studio">Studio</option>
                      <option value="Mobile">Mobile</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <div className="space-y-2">
                  <Label className="[font-family:'Didact_Gothic',Helvetica] font-normal text-[#1a0f0fb2] text-sm md:text-[15px] tracking-[0] leading-[22px]">
                    Location / Venue
                  </Label>
                  <div className="relative">
                    <Input
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      placeholder="Area, suburb, or venue"
                      className="border-0 border-b border-gray-300 rounded-none bg-transparent px-0 pb-2 focus:border-[#ff9999] focus:ring-0"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label className="[font-family:'Didact_Gothic',Helvetica] font-normal text-[#1a0f0fb2] text-sm md:text-[15px] tracking-[0] leading-[22px]">
                    Number of Faces*
                  </Label>
                  <div className="relative">
                    <Input
                      type="number"
                      min="1"
                      name="numberOfFaces"
                      value={formData.numberOfFaces}
                      onChange={handleChange}
                      required
                      className="border-0 border-b border-gray-300 rounded-none bg-transparent px-0 pb-2 focus:border-[#ff9999] focus:ring-0"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label className="[font-family:'Didact_Gothic',Helvetica] font-normal text-[#1a0f0fb2] text-sm md:text-[15px] tracking-[0] leading-[22px]">
                  Message / Look Notes*
                </Label>
                <div className="relative">
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Tell Jess about the event, preferred look, start time, and any special requests."
                    className="border-0 border-b border-gray-300 rounded-none bg-transparent px-0 pb-2 min-h-[80px] resize-none focus:border-[#ff9999] focus:ring-0"
                    rows={4}
                  />
                </div>
              </div>

              {submitState.message ? (
                <p
                  className={`[font-family:'Didact_Gothic',Helvetica] text-sm leading-[22px] ${
                    submitState.status === "success"
                      ? "text-green-700"
                      : "text-red-600"
                  }`}
                >
                  {submitState.message}
                </p>
              ) : null}

              <Button
                type="submit"
                disabled={isSubmitting}
                className="bg-[#ff9999] hover:bg-[#ff8888] text-[#fff5f5] px-6 md:px-8 py-2 md:py-3 h-auto [font-family:'Didact_Gothic',Helvetica] font-normal text-sm md:text-[15px] tracking-[0] leading-[22px]"
              >
                {isSubmitting ? "Sending..." : "Submit"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
