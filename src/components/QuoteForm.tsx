"use client";

import { useState, FormEvent } from "react";

const US_STATES = [
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
];

const BUILDING_TYPES = [
  "Animal Shelter",
  "Deluxe Lofted Cabin",
  "Garage",
  "Gazebo",
  "Horse Barn",
  "Lofted Barn",
  "Lofted Cabin",
  "Metal Building",
  "Mini Barn",
  "Portable Garage",
  "Storage Shed",
  "Utility Shed",
  "Other",
];

const BUILDING_SIZES = [
  "8x8", "8x10", "8x12", "8x14", "8x16",
  "10x10", "10x12", "10x14", "10x16", "10x20",
  "12x12", "12x14", "12x16", "12x20", "12x24",
  "12x28", "12x32", "12x36", "12x40",
  "14x14", "14x16", "14x20", "14x24", "14x28",
  "14x32", "14x36", "14x40",
  "Other",
];

const SIDING_OPTIONS = [
  "Treated T1-11",
  "Painted LP Smart Panel",
  "Urethane Wilderness Stained",
];

const ROOF_OPTIONS = [
  "Metal Roof",
  "Shingle Roof",
];

interface QuoteFormProps {
  title?: string;
  titleSpan?: string;
}

export default function QuoteForm({
  title = "Request a",
  titleSpan = "FREE Quote!",
}: QuoteFormProps) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    buildingType: "",
    buildingSize: "",
    sidingOption: "",
    roofOption: "",
    zipCode: "",
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
    console.log("Quote form submitted:", formData);
  };

  return (
    <div className="bg-form-bg p-[20px] ml-0 md:ml-[40px]">
      <h2 className="text-white text-center font-bold text-[50px] font-heading tracking-[1.5px] pb-[15px]">
        {title} <span className="text-[#FFC801] font-bold">{titleSpan}</span>
      </h2>

      <form onSubmit={handleSubmit}>
        {/* Row: First + Last Name */}
        <div className="flex flex-col md:flex-row justify-between gap-[20px]">
          <input
            type="text"
            name="firstName"
            placeholder="First Name *"
            value={formData.firstName}
            onChange={handleChange}
            required
            className="w-full md:w-[calc(50%-10px)] p-[10px] mb-[15px] border border-[#ccc] rounded text-black"
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name *"
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
            placeholder="Email *"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full md:w-[calc(50%-10px)] p-[10px] mb-[15px] border border-[#ccc] rounded text-black"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone *"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full md:w-[calc(50%-10px)] p-[10px] mb-[15px] border border-[#ccc] rounded text-black"
          />
        </div>

        {/* Building Type */}
        <select
          name="buildingType"
          value={formData.buildingType}
          onChange={handleChange}
          className="w-full p-[10px] mb-[15px] border border-[#ccc] rounded text-black bg-white"
        >
          <option value="">Building Type</option>
          {BUILDING_TYPES.map((t) => (
            <option key={t} value={t}>{t}</option>
          ))}
        </select>

        {/* Building Size */}
        <select
          name="buildingSize"
          value={formData.buildingSize}
          onChange={handleChange}
          className="w-full p-[10px] mb-[15px] border border-[#ccc] rounded text-black bg-white"
        >
          <option value="">Building Size</option>
          {BUILDING_SIZES.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>

        {/* Siding Option */}
        <select
          name="sidingOption"
          value={formData.sidingOption}
          onChange={handleChange}
          className="w-full p-[10px] mb-[15px] border border-[#ccc] rounded text-black bg-white"
        >
          <option value="">Siding Option</option>
          {SIDING_OPTIONS.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>

        {/* Roof Option */}
        <select
          name="roofOption"
          value={formData.roofOption}
          onChange={handleChange}
          className="w-full p-[10px] mb-[15px] border border-[#ccc] rounded text-black bg-white"
        >
          <option value="">Roof Option</option>
          {ROOF_OPTIONS.map((r) => (
            <option key={r} value={r}>{r}</option>
          ))}
        </select>

        {/* Zip Code */}
        <input
          type="text"
          name="zipCode"
          placeholder="Zip Code *"
          value={formData.zipCode}
          onChange={handleChange}
          required
          className="w-full p-[10px] mb-[15px] border border-[#ccc] rounded text-black"
        />

        {/* State */}
        <select
          name="state"
          value={formData.state}
          onChange={handleChange}
          required
          className="w-full p-[10px] mb-[15px] border border-[#ccc] rounded text-black bg-white"
        >
          <option value="">State *</option>
          {US_STATES.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>

        {/* Message */}
        <textarea
          name="message"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
          className="w-full p-[10px] mb-[15px] border border-[#ccc] rounded text-black h-[72px]"
        />

        {/* Submit */}
        <div className="text-center">
          <button
            type="submit"
            className="bg-red-section text-white font-bold uppercase py-[15px] px-[40px] rounded-md text-[21px] cursor-pointer hover:opacity-90 transition-opacity"
          >
            GET MY FREE QUOTE!
          </button>
        </div>
      </form>
    </div>
  );
}
