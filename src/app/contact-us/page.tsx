"use client";

import { useState, FormEvent } from "react";

const STATES_PROVINCES = [
  "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado",
  "Connecticut", "Delaware", "District of Columbia", "Florida", "Georgia",
  "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky",
  "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota",
  "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada",
  "New Hampshire", "New Jersey", "New Mexico", "New York",
  "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon",
  "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota",
  "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington",
  "West Virginia", "Wisconsin", "Wyoming",
  "Armed Forces Americas", "Armed Forces Europe", "Armed Forces Pacific",
  "Alberta", "British Columbia", "Manitoba", "New Brunswick",
  "Newfoundland and Labrador", "Northwest Territories", "Nova Scotia",
  "Nunavut", "Ontario", "Prince Edward Island", "Quebec", "Saskatchewan",
  "Yukon",
];

const businessHours = [
  { day: "Monday", hours: "By Appointment" },
  { day: "Tuesday", hours: "9:00 to 5:00" },
  { day: "Wednesday", hours: "By Appointment" },
  { day: "Thursday", hours: "By Appointment" },
  { day: "Friday", hours: "By Appointment" },
  { day: "Saturday", hours: "By Appointment" },
  { day: "Sunday", hours: "Closed" },
];

export default function ContactUsPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    state: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("Contact form submitted:", formData);
  };

  return (
    <div className="bg-[#DDD]">
      {/* Contact Main */}
      <div className="wrapper border-t-[5px] border-[#00567a] max-w-[1100px] mx-auto px-[20px] py-[40px]">
        <h1 className="!text-left !pt-0">Contact Us</h1>

        {/* Two Column Layout */}
        <div className="flex flex-col md:flex-row items-start gap-[40px]">
          {/* Left Column - Contact Info */}
          <div className="w-full md:max-w-[70%]">
            <div>
              <strong className="text-[19px]">Legacy Structures</strong>
              <ul className="list-none p-0 m-0 mt-[10px] text-[19px] leading-[30px]">
                <li>3570 US 4</li>
                <li>Hudson Falls, NY 12839</li>
                <li>
                  Main:{" "}
                  <a href="tel:518-544-2889" target="_blank" rel="noopener noreferrer">
                    518-544-2889
                  </a>
                </li>
              </ul>
            </div>

            <div className="mt-[30px]">
              <strong className="text-[19px]">BUSINESS HOURS</strong>
              <ul className="list-none p-0 m-0 mt-[10px] text-[19px] leading-[30px]">
                {businessHours.map((row) => (
                  <li key={row.day}>
                    {row.day}: {row.hours}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="w-full">
            <h2 className="!pb-[10px]">Email Us</h2>
            <p className="text-[16px] leading-[24px] pb-[15px]">
              Please fill out the below form and we will get back to you as quickly as possible. Please allow up to 2 business days for our reply. Please also review our Frequently Asked Questions below to find a quick answer to your question!
            </p>

            <form onSubmit={handleSubmit}>
              {/* Row: First + Last Name */}
              <div className="flex flex-col sm:flex-row gap-[10px] mb-[10px]">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className="w-full p-[10px] border border-[#ccc] rounded text-black"
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  className="w-full p-[10px] border border-[#ccc] rounded text-black"
                />
              </div>

              {/* Row: Email + Phone */}
              <div className="flex flex-col sm:flex-row gap-[10px] mb-[10px]">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-[10px] border border-[#ccc] rounded text-black"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full p-[10px] border border-[#ccc] rounded text-black"
                />
              </div>

              {/* State/Province */}
              <select
                name="state"
                value={formData.state}
                onChange={handleChange}
                className="w-full p-[10px] border border-[#ccc] rounded text-black bg-white mb-[10px]"
              >
                <option value="">State/Province</option>
                {STATES_PROVINCES.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>

              {/* Message */}
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="w-full p-[10px] border border-[#ccc] rounded text-black mb-[10px]"
              />

              {/* Submit */}
              <div>
                <button
                  type="submit"
                  className="bg-[#af1919] text-white font-bold uppercase py-[12px] px-[30px] rounded-md text-[18px] cursor-pointer hover:opacity-90 transition-opacity"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
