"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, FormEvent } from "react";

const STATES_PROVINCES = [
  "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado",
  "Connecticut", "Delaware", "Florida", "Georgia", "Hawaii", "Idaho",
  "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana",
  "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota",
  "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada",
  "New Hampshire", "New Jersey", "New Mexico", "New York",
  "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon",
  "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota",
  "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington",
  "West Virginia", "Wisconsin", "Wyoming",
  // Canadian Provinces
  "Alberta", "British Columbia", "Manitoba", "New Brunswick",
  "Newfoundland and Labrador", "Northwest Territories", "Nova Scotia",
  "Nunavut", "Ontario", "Prince Edward Island", "Quebec", "Saskatchewan",
  "Yukon",
];

export default function PricingGuideSection() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    state: "",
    comments: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("Pricing guide form submitted:", formData);
  };

  return (
    <section className="bg-pricing-bg p-[20px]">
      {/* Guide CTA */}
      <div className="py-[20px]">
        <h2 className="text-center text-red-section font-bold text-[50px] font-heading tracking-[1.5px]">
          Looking for Pricing? Download Our FREE Pricing Guide!
        </h2>
        <p className="text-center">
          Ready to explore your options for the perfect portable building? Start
          with our <span className="font-bold">FREE Pricing Guide!</span> This
          detailed download provides you with all the pricing information you
          need to make an informed decision, including various models, sizes, and
          customization options. Don&apos;t miss out on this essential resource
          &mdash; click below to{" "}
          <span className="font-bold">Download Your FREE Copy</span> and take
          the first step towards choosing your ideal portable building today!
        </p>

        {/* CTA Row: image + button */}
        <div className="flex flex-col md:flex-row justify-center gap-[5%] items-center">
          <div className="img-wrapper">
            <Image
              src="https://legacystructuresusa.com/wp-content/themes/barndealer/assets/images/homepage-devices.png"
              alt="Pricing Guide on devices"
              width={500}
              height={375}
              className="w-full h-auto"
            />
          </div>
          <div className="text-center">
            <h2 className="text-center text-red-section font-bold text-[50px] font-heading tracking-[1.5px]">
              Free Pricing Guide!
            </h2>
            <Link
              href="#pricing-form"
              className="inline-flex items-center justify-center bg-cta-gold text-black rounded-md text-[25px] font-bold w-[300px] h-[60px] no-underline hover:bg-cta-gold-hover transition-colors"
            >
              DOWNLOAD HERE!
            </Link>
          </div>
        </div>
      </div>

      {/* Form Container */}
      <div
        id="pricing-form"
        className="bg-form-dark p-[40px] text-white rounded"
      >
        <form onSubmit={handleSubmit}>
          {/* Row: First + Last Name */}
          <div className="flex flex-col md:flex-row justify-between gap-[20px]">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              required
              className="w-full md:w-[calc(50%-10px)] p-[10px] mb-[15px] border border-[#ccc] rounded text-black"
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              required
              className="w-full md:w-[calc(50%-10px)] p-[10px] mb-[15px] border border-[#ccc] rounded text-black"
            />
          </div>

          {/* Row: Email + Phone */}
          <div className="flex flex-col md:flex-row justify-between gap-[20px]">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full md:w-[calc(50%-10px)] p-[10px] mb-[15px] border border-[#ccc] rounded text-black"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full md:w-[calc(50%-10px)] p-[10px] mb-[15px] border border-[#ccc] rounded text-black"
            />
          </div>

          {/* State / Province */}
          <select
            name="state"
            value={formData.state}
            onChange={handleChange}
            required
            className="w-full p-[10px] mb-[15px] border border-[#ccc] rounded text-black bg-white"
          >
            <option value="">State / Province</option>
            {STATES_PROVINCES.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>

          {/* Comments */}
          <textarea
            name="comments"
            placeholder="Comments"
            value={formData.comments}
            onChange={handleChange}
            rows={4}
            className="w-full p-[10px] mb-[15px] border border-[#ccc] rounded text-black"
          />

          {/* Submit */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-red-section text-white font-bold uppercase py-[15px] px-[40px] rounded-md text-[21px] max-w-[85%] cursor-pointer hover:opacity-90 transition-opacity"
            >
              Download Our Pricing!
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
