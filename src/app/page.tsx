import Link from "next/link";
import HeroSlider from "@/components/HeroSlider";
import FeaturedCarousel from "@/components/FeaturedCarousel";

const featuredSheds = [
  { name: "Lofted Barn Playhouse", price: 7818.5, image: "https://legacystructuresusa.com/wp-content/uploads/2025/07/IMG_0101-1753234196232-scaled.jpeg", href: "/building/lofted-barn-playhouse" },
  { name: "Utility Shed", price: 5576.0, image: "https://legacystructuresusa.com/wp-content/uploads/2025/03/IMG_9707-1741118469914-scaled.jpeg", href: "/building/utility-shed-10" },
  { name: "Lofted Barn", price: 6133.0, image: "https://legacystructuresusa.com/wp-content/uploads/2025/03/IMG_9767-1741118736711-scaled.jpeg", href: "/building/lofted-barn-7" },
  { name: "Utility Shed", price: 4585.0, image: "https://legacystructuresusa.com/wp-content/uploads/2025/03/IMG_9653-1741118822925-scaled.jpeg", href: "/building/utility-shed-8" },
  { name: "Garage", price: 11002.0, image: "https://legacystructuresusa.com/wp-content/uploads/2025/03/IMG_9649-1741118897376-scaled.jpeg", href: "/building/garage" },
  { name: "Utility Dormer", price: 6277.0, image: "https://legacystructuresusa.com/wp-content/uploads/2025/03/IMG_8890-1741119409701-scaled.jpeg", href: "/building/utility-dormer" },
  { name: "Single Slope", price: 4403.0, image: "https://legacystructuresusa.com/wp-content/uploads/2025/03/IMG_8877-1741119643511-scaled.jpeg", href: "/building/single-slope" },
  { name: "Lofted Barn", price: 5095.0, image: "https://legacystructuresusa.com/wp-content/uploads/2025/03/IMG_8862-1741119998306-scaled.jpeg", href: "/building/lofted-barn-3" },
  { name: "Utility Shed", price: 5652.0, image: "https://legacystructuresusa.com/wp-content/uploads/2025/03/IMG_8856-1741114718259-scaled.jpeg", href: "/building/utility-shed-4" },
  { name: "Double Wide Garage", price: 18567.0, image: "https://legacystructuresusa.com/wp-content/uploads/2025/03/IMG_8847-1741114633956-scaled.jpeg", href: "/building/double-wide-garage" },
  { name: "Utility Gable Dormer", price: 7231.0, image: "https://legacystructuresusa.com/wp-content/uploads/2025/03/IMG_8819-1741047721560-scaled.jpeg", href: "/building/utility-gable-dormer" },
  { name: "Lofted Barn Playhouse", price: 9409.65, image: "https://legacystructuresusa.com/wp-content/uploads/2025/03/IMG_8800-1741046752851-scaled.jpeg", href: "/building/lofted-barn-playhouse-2" },
];

const materials = [
  { label: "A", text: "Standard Metal Or Shingle Roof" },
  { label: "B", text: "Exposed nails are ring-shanked and galvanized for rust prevention" },
  { label: "C", text: "Treating buildings have water-sealed, T1-11 siding" },
  { label: "D", text: "Painted buildings LP Smartside Panel siding with 5/50-year limited warranty" },
  { label: "E", text: "All siding comes with a Manufacturer's warranty" },
  { label: "F", text: '2x4 studs set 16" OC on painted buildings & 24" OC on treated buildings' },
  { label: "G", text: "Double studs under siding seams" },
  { label: "H", text: '5/8" treated floor decking' },
];

export default function Home() {
  return (
    <div>
      {/* ===== Section 1: Hero Slider ===== */}
      <div style={{ overflow: "hidden", position: "relative" }}>
        <HeroSlider />
      </div>

      {/* ===== Section 2: Red Two-Column CTA ===== */}
      <section style={{ backgroundColor: "#af1919" }}>
        <div
          style={{
            maxWidth: "1150px",
            margin: "0 auto",
            display: "flex",
          }}
        >
          {/* Left Column - 3D Shed Builder */}
          <div
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: "30px",
              borderRight: "1px solid #fff",
            }}
          >
            <h2
              style={{
                color: "#fff",
                textAlign: "center",
                fontSize: "50px",
                paddingBottom: "15px",
              }}
            >
              Try Our 3D Shed Builder
            </h2>
            <p
              style={{
                color: "#fff",
                fontSize: "18px",
                textAlign: "center",
                lineHeight: "30px",
                paddingBottom: "20px",
              }}
            >
              Do you have a specific plan in mind for your dream shed?? Try our 3D shed designer to create the perfect shed for your needs!
            </p>
            <div
              style={{
                minHeight: "288px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                src="https://legacystructuresusa.com/wp-content/themes/barndealer/assets/images/3d-shed-builder-screen.png"
                alt="3D Shed Builder"
                style={{ maxWidth: "100%" }}
              />
            </div>
            <a
              href="https://orders.barnportal.com/myquote?dealerid=&dir=1&template=1"
              style={{
                display: "inline-block",
                backgroundColor: "#ffc800",
                color: "#000",
                textTransform: "uppercase",
                padding: "10px 20px",
                marginTop: "20px",
                fontSize: "18px",
                fontWeight: "bold",
                textDecoration: "none",
                borderRadius: "3px",
              }}
            >
              Design Your Shed
            </a>
          </div>

          {/* Right Column - View Inventory */}
          <div
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: "30px",
              borderLeft: "1px solid #fff",
            }}
          >
            <h2
              style={{
                color: "#fff",
                textAlign: "center",
                fontSize: "50px",
                paddingBottom: "15px",
              }}
            >
              View Our Inventory
            </h2>
            <p
              style={{
                color: "#fff",
                fontSize: "18px",
                textAlign: "center",
                lineHeight: "30px",
                paddingBottom: "20px",
              }}
            >
              While we regularly sell buildings off our lot, we are also always getting more sheds on our lot. Check out our current inventory!
            </p>
            <div
              style={{
                minHeight: "288px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                src="https://legacystructuresusa.com/wp-content/themes/barndealer/assets/images/view-inventory-sheds.png"
                alt="View Our Inventory"
                style={{ maxWidth: "100%" }}
              />
            </div>
            <Link
              href="/inventory"
              style={{
                display: "inline-block",
                backgroundColor: "#ffc800",
                color: "#000",
                textTransform: "uppercase",
                padding: "10px 20px",
                marginTop: "20px",
                fontSize: "18px",
                fontWeight: "bold",
                textDecoration: "none",
                borderRadius: "3px",
              }}
            >
              View Our Inventory
            </Link>
          </div>
        </div>
      </section>

      {/* ===== Section 3: Featured Sheds ===== */}
      <section style={{ backgroundColor: "#ebe9e3", padding: "20px 0 60px" }}>
        <h2
          style={{
            textAlign: "center",
            padding: "30px 0",
            color: "#00567a",
            fontSize: "50px",
          }}
        >
          Featured Sheds For Sale in Hudson Falls, NY
        </h2>
        <div style={{ maxWidth: "1150px", margin: "0 auto", padding: "0 30px" }}>
          <FeaturedCarousel sheds={featuredSheds} />
        </div>
      </section>

      {/* ===== Section 4: CTA Pricing Bar ===== */}
      <section style={{ backgroundColor: "#b12029", padding: "20px" }}>
        <div style={{ textAlign: "center" }}>
          <Link
            href="/inventory"
            style={{
              color: "#fff",
              fontFamily: '"Tungsten Semibold", sans-serif',
              fontSize: "50px",
              fontWeight: "bold",
              textTransform: "uppercase",
              textDecoration: "none",
              letterSpacing: "1.5px",
            }}
          >
            high quality materials and superior craftsmanship
          </Link>
        </div>
      </section>

      {/* ===== Section 5: Pricing Guide ===== */}
      <section style={{ backgroundColor: "#eae9e4", padding: "40px 20px" }}>
        <h2
          style={{
            textAlign: "center",
            color: "#af1919",
            fontSize: "50px",
            paddingBottom: "15px",
          }}
        >
          Looking for Pricing? Download Our FREE Pricing Guide!
        </h2>
        <p style={{ textAlign: "center", maxWidth: "900px", margin: "0 auto", paddingBottom: "30px" }}>
          Ready to explore your options for the perfect portable building? Start with our FREE Pricing Guide! This detailed download provides you with all the pricing information you need to make an informed decision, including various models, sizes, and customization options. Don&apos;t miss out on this essential resource — click below to Download Your FREE Copy and take the first step towards choosing your ideal portable building today!
        </p>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "5%",
            maxWidth: "1150px",
            margin: "0 auto",
            flexWrap: "wrap",
          }}
        >
          {/* Left: Device Image */}
          <div style={{ flex: "1 1 400px", maxWidth: "500px" }}>
            <img
              src="https://legacystructuresusa.com/wp-content/themes/barndealer/assets/images/homepage-devices.png"
              alt="Pricing Guide on devices"
              style={{ width: "100%" }}
            />
          </div>

          {/* Right: CTA */}
          <div style={{ flex: "0 1 auto", textAlign: "center" }}>
            <h2
              style={{
                color: "#af1919",
                fontSize: "50px",
                paddingBottom: "15px",
                textAlign: "center",
              }}
            >
              Free Pricing Guide!
            </h2>
            <a
              href="#pricing-form"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#ffc800",
                color: "#000",
                fontWeight: "bold",
                fontSize: "25px",
                textDecoration: "none",
                borderRadius: "8px",
                width: "300px",
                height: "60px",
                margin: "0 auto",
                textTransform: "uppercase",
              }}
            >
              DOWNLOAD HERE!
            </a>
          </div>
        </div>
      </section>

      {/* ===== Section 6: Warranty CTA Bar ===== */}
      <section style={{ backgroundColor: "#b12029", padding: "20px" }}>
        <div style={{ textAlign: "center" }}>
          <a
            href="https://backyardoutfittersusa.com/warranty-and-guarantee/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "#fff",
              fontFamily: '"Tungsten Semibold", sans-serif',
              fontSize: "50px",
              fontWeight: "bold",
              textTransform: "uppercase",
              textDecoration: "none",
              letterSpacing: "1.5px",
            }}
          >
            Learn More About Our 5 Year Warranty!{" "}
            <span style={{ color: "#FABE08" }}>Click Here</span>
          </a>
        </div>
      </section>

      {/* ===== Section 7: Materials Section ===== */}
      <section style={{ padding: "0 20px", backgroundColor: "#fff", color: "#222" }}>
        <h1
          style={{
            textAlign: "center",
            color: "#00567a",
            fontFamily: '"Tungsten Semibold", sans-serif',
            fontSize: "50px",
            fontWeight: "bold",
            padding: "30px 0 15px",
          }}
        >
          Built With Superior Materials and Construction!
        </h1>
        <div
          style={{
            display: "flex",
            maxWidth: "1150px",
            margin: "0 auto",
            padding: "40px 0",
            gap: "40px",
            alignItems: "flex-start",
          }}
        >
          {/* Left: Materials List */}
          <div style={{ flex: 1 }}>
            {materials.map((item) => (
              <div
                key={item.label}
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginTop: "20px",
                }}
              >
                <div
                  style={{
                    backgroundColor: "#c81100",
                    borderRadius: "50%",
                    width: "20px",
                    height: "20px",
                    minWidth: "20px",
                    color: "#fff",
                    fontSize: "12px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: "bold",
                  }}
                >
                  {item.label}
                </div>
                <div
                  style={{
                    fontSize: "16px",
                    textAlign: "left",
                    marginLeft: "20px",
                  }}
                >
                  {item.text}
                </div>
              </div>
            ))}
          </div>

          {/* Right: Interior Image */}
          <div style={{ flex: 1 }}>
            <img
              src="https://legacystructuresusa.com/wp-content/themes/barndealer/assets/images/barn-interior-img.png"
              alt="Barn interior showing construction quality"
              style={{ width: "100%", height: "auto" }}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
