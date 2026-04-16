import type { Metadata } from "next";
import QuoteForm from "@/components/QuoteForm";
import ProductSection from "@/components/ProductSection";
import DisclaimerText from "@/components/DisclaimerText";
import DesignerCTA from "@/components/DesignerCTA";
import PricingGuideSection from "@/components/PricingGuideSection";

export const metadata: Metadata = {
  title: "Greenhouses | Legacy Structures",
  description:
    "Looking to grow your own herbs, vegetables, or flowers year-round? Our Greenhouses at Legacy Structures offer an ideal space to cultivate your garden in a protected, climate-controlled environment.",
};

const BASE_URL =
  "https://legacystructuresusa.com/wp-content/themes/barndealer/assets/images";

export default function GreenhousesPage() {
  return (
    <div>
      {/* Inner Hero */}
      <div className="bg-[#00567a] px-5 pt-5 pb-0 text-center">
        <img
          src={`${BASE_URL}/BYO-Greenhouses.png`}
          alt="Greenhouses by Legacy Structures"
          className="inline-block max-w-[49%] px-[10px]"
        />
      </div>

      {/* Slider-Form Wrapper */}
      <div className="flex flex-col lg:flex-row">
        {/* Left - 3D Designer CTA */}
        <div className="lg:w-[67%] flex items-center justify-center p-6">
          <a href="https://orders.barnportal.com/myquote?dealerid=&dir=1&template=53" target="_blank" rel="noopener noreferrer">
            <img
              src={`${BASE_URL}/3d-designer-models-cta.png`}
              alt="3D Designer - Design Your Own Building"
              className="max-w-full h-auto"
            />
          </a>
        </div>
        {/* Right - Quote Form */}
        <div className="lg:w-[33%] p-4">
          <QuoteForm title="Request Your" titleSpan="FREE Greenhouse Quote!" />
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold text-[#2d5a27] mb-4">
          Greenhouses for Sale in Hudson Falls, NY
        </h1>
        <p className="text-gray-700 leading-relaxed mb-4">
          Looking to grow your own herbs, vegetables, or flowers year-round? Our Greenhouses at Legacy Structures offer an ideal space to cultivate your garden in a protected, climate-controlled environment, without needing to assemble a thing. Each unit is delivered fully assembled and leveled on-site up to 2 feet, making it a hassle-free way to start planting right away.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          These Greenhouses feature a clear polycarbonate roof and upper walls to allow in plenty of natural light, LP Smart Siding around the base for durability, and a vent door with an automatic opener that adjusts with the temperature. Inside, you&apos;ll find an 18&quot; deep potting shelf around the back and sides, a solid stain finish on both interior and exterior surfaces, and a pressure-treated floor designed like a raised deck&mdash;perfect for drainage.
        </p>
        <p className="mb-8">
          <a href="/rent-to-own" className="text-[#00567a] font-bold underline">
            Download Our FREE Shed Buying Guide - Click Here
          </a>
        </p>

        {/* Greenhouses */}
        <div className="border-b-[3px] border-[#00465e] pb-10 mb-10">
          <ProductSection
            title="More About Our Greenhouses..."
            description="Our Greenhouses offer a simple, low-maintenance way to grow your favorite plants, herbs, or vegetables year-round--right in your backyard. Designed to provide a warm, light-filled environment, these buildings make it easy to extend your growing season while protecting your plants from the elements. Each greenhouse includes a barn-style door with a built-in window, a vented louvre door that opens automatically as temperatures rise, and a wrap-around potting shelf inside for easy planting and organization. The clear polycarbonate panels allow in plenty of sunlight, while the LP Smart Siding base adds durability and a finished look. Greenhouses are stained inside and out in your choice of color and come in the following sizes:"
            image={`${BASE_URL}/BYO-Greenhouses-Body.jpg`}
            imageAlt="Inside of Greenhouse"
            sizeGroups={[
              { label: "8' WIDE", sizes: ["8x12", "8x16"] },
            ]}
          />
        </div>

        <DisclaimerText />
        <DesignerCTA />
        <PricingGuideSection />
      </div>
    </div>
  );
}
