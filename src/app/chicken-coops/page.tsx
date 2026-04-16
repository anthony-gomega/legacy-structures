import type { Metadata } from "next";
import QuoteForm from "@/components/QuoteForm";
import ProductSection from "@/components/ProductSection";
import DisclaimerText from "@/components/DisclaimerText";
import DesignerCTA from "@/components/DesignerCTA";
import PricingGuideSection from "@/components/PricingGuideSection";

export const metadata: Metadata = {
  title: "Chicken Coops | Legacy Structures",
  description:
    "Looking for a safe, practical, and affordable way to raise chickens? Our Chicken Coops at Legacy Structures are designed to make backyard chicken keeping easy and enjoyable.",
};

const BASE_URL =
  "https://legacystructuresusa.com/wp-content/themes/barndealer/assets/images";

export default function ChickenCoopsPage() {
  return (
    <div>
      {/* Inner Hero */}
      <div className="bg-[#00567a] px-5 pt-5 pb-0 text-center">
        <img
          src={`${BASE_URL}/BYO-ChickenCoops.png`}
          alt="Chicken Coops by Legacy Structures"
          className="inline-block max-w-[49%] px-[10px]"
        />
      </div>

      {/* Slider-Form Wrapper */}
      <div className="flex flex-col lg:flex-row">
        {/* Left - 3D Designer CTA */}
        <div className="lg:w-[67%] flex items-center justify-center p-6">
          <a href="https://orders.barnportal.com/myquote?dealerid=&dir=1&template=52" target="_blank" rel="noopener noreferrer">
            <img
              src={`${BASE_URL}/3d-designer-models-cta.png`}
              alt="3D Designer - Design Your Own Building"
              className="max-w-full h-auto"
            />
          </a>
        </div>
        {/* Right - Quote Form */}
        <div className="lg:w-[33%] p-4">
          <QuoteForm title="Request Your" titleSpan="FREE Chicken Coop Quote!" />
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold text-[#2d5a27] mb-4">
          Chicken Coops for Sale in Hudson Falls, NY
        </h1>
        <p className="text-gray-700 leading-relaxed mb-4">
          Looking for a safe, practical, and affordable way to raise chickens? Our Chicken Coops at Legacy Structures are designed to make backyard chicken keeping easy and enjoyable. Whether you&apos;re starting with a few hens or expanding your flock, these coops offer everything you need to keep your birds happy and protected.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Each Chicken Coop includes a 3ft barn door on the end for easy access, two 24&quot; x 27&quot; single-pane windows for fresh air and ventilation, a roosting ladder, and raised nesting boxes with an exterior hatch so you can easily collect eggs. There&apos;s even a small chicken door to give your flock access to roam the yard or a fenced-in area. Coops are available in either 6ft or 8ft widths with several length options depending on your needs.
        </p>
        <p className="mb-8">
          <a href="/rent-to-own" className="text-[#00567a] font-bold underline">
            Download Our FREE Shed Buying Guide - Click Here
          </a>
        </p>

        {/* Chicken Coops */}
        <div className="border-b-[3px] border-[#00465e] pb-10 mb-10">
          <ProductSection
            title="More About Our Chicken Coops..."
            description="Our Chicken Coops offer a practical, low-maintenance solution for anyone looking to raise chickens in a safe and secure backyard setup. These buildings are designed to protect your flock from predators while offering great airflow and easy access for cleaning and egg gathering. Each coop features a gable-style roof, a 3ft wooden barn door on the end, two 24&quot; x 27&quot; single-pane windows, a roosting ladder, and six nesting boxes with exterior hatch access for convenient egg collection. A small chicken door gives your flock access to roam in a fenced yard or run. These coops are available in both T1-11 siding and LP Smart Panel&#8482; siding and come in the following sizes:"
            image={`${BASE_URL}/BYO-ChickenCoops-Body.png`}
            imageAlt="Chicken Coop"
            sizeGroups={[
              { label: "6' WIDE", sizes: ["6x8", "6x10", "6x12"] },
              { label: "8' WIDE", sizes: ["8x8", "8x10", "8x12"] },
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
