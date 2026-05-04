import Link from "next/link";

const quickLinks = [
  { label: "Free Pricing Guide", href: "/about-us#pricing-form" },
  { label: "5-Year Warranty", href: "https://backyardoutfittersusa.com/warranty-and-guarantee/", external: true },
  { label: "Rent-to-Own", href: "/rent-to-own" },
  { label: "View Inventory", href: "/inventory" },
  { label: "About Us", href: "/about-us" },
  { label: "Contact Us", href: "/contact-us" },
];

const socialLinks = [
  { href: "https://www.facebook.com/BackyardOutfittersEnterprisesLLC/", img: "icon-fb.png", alt: "Facebook" },
  { href: "https://www.instagram.com/backyardoutfittersusa", img: "icon-ig.png", alt: "Instagram" },
  { href: "mailto:legacystructures25@gmail.com", img: "icon-email.png", alt: "Email" },
];

const hours = [
  ["Monday", "By Appointment"],
  ["Tuesday", "9:00 to 5:00"],
  ["Wednesday", "By Appointment"],
  ["Thursday", "By Appointment"],
  ["Friday", "By Appointment"],
  ["Saturday", "By Appointment"],
  ["Sunday", "Closed"],
];

export default function Footer() {
  return (
    <footer>
      {/* Call CTA bar */}
      <div style={{ background: "linear-gradient(135deg, #1a3a5c 0%, #0f2440 100%)", padding: "32px 24px", textAlign: "center" }}>
        <div style={{ maxWidth: 1150, margin: "0 auto" }}>
          <p style={{ color: "rgba(255,255,255,0.7)", fontSize: 13, fontWeight: 500, textTransform: "uppercase", letterSpacing: 2, margin: 0, paddingBottom: 8, fontFamily: "var(--font-poppins), Poppins, sans-serif" }}>
            Speak with a shed expert today
          </p>
          <a href="tel:518-544-2889" style={{ color: "#d4a017", fontSize: 32, fontWeight: 700, textDecoration: "none", fontFamily: "var(--font-poppins), Poppins, sans-serif", letterSpacing: 1 }}>
            518-544-2889
          </a>
        </div>
      </div>

      {/* Main footer body */}
      <div style={{ background: "#f7f5f2", padding: "52px 24px 28px", borderTop: "1px solid #e8e4df" }}>
        <div className="footer-grid" style={{ maxWidth: 1150, margin: "0 auto" }}>

          {/* Location + contact */}
          <div style={{ color: "#1a3a5c", fontSize: 15, lineHeight: 1.85 }}>
            <div style={{ fontWeight: 700, fontSize: 17, marginBottom: 12, fontFamily: "var(--font-poppins), Poppins, sans-serif" }}>Legacy Structures</div>
            <div>3570 US 4</div>
            <div>Hudson Falls, NY 12839</div>
            <div style={{ marginTop: 8 }}>
              <a href="tel:518-544-2889" style={{ color: "#1a3a5c", textDecoration: "none", fontWeight: 600 }}>518-544-2889</a>
            </div>
            <div>
              <a href="mailto:legacystructures25@gmail.com" style={{ color: "#1a3a5c", textDecoration: "none", fontSize: 14 }}>legacystructures25@gmail.com</a>
            </div>
            <div style={{ display: "flex", gap: 12, marginTop: 16 }}>
              {socialLinks.map((s) => (
                <a key={s.alt} href={s.href} target={s.href.startsWith("http") ? "_blank" : undefined} rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={`https://legacystructuresusa.com/wp-content/themes/barndealer/assets/images/${s.img}`} alt={s.alt} style={{ height: 32, borderRadius: 4, opacity: 0.7, transition: "opacity 0.2s" }} />
                </a>
              ))}
            </div>
          </div>

          {/* Dealer logo — centered */}
          <div style={{ textAlign: "center", display: "flex", justifyContent: "center", alignItems: "center" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="https://legacystructuresusa.com/wp-content/themes/barndealer/assets/images/backyardoutfitters-logo-1.png" alt="Backyard Outfitters Authorized Dealer" style={{ maxHeight: 110, width: "auto" }} />
          </div>

          {/* Quick links */}
          <div>
            <div style={{ fontWeight: 700, fontSize: 13, textTransform: "uppercase", letterSpacing: 1.5, color: "#1a3a5c", marginBottom: 16, fontFamily: "var(--font-poppins), Poppins, sans-serif" }}>Quick Links</div>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 8 }}>
              {quickLinks.map((link) => (
                <li key={link.label}>
                  {link.external ? (
                    <a href={link.href} target="_blank" rel="noopener noreferrer" style={{ color: "#5a6c7e", fontSize: 14, textDecoration: "none" }}>{link.label}</a>
                  ) : (
                    <Link href={link.href} style={{ color: "#5a6c7e", fontSize: 14, textDecoration: "none" }}>{link.label}</Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Business hours */}
          <div>
            <div style={{ fontWeight: 700, fontSize: 13, textTransform: "uppercase", letterSpacing: 1.5, color: "#1a3a5c", marginBottom: 16, fontFamily: "var(--font-poppins), Poppins, sans-serif" }}>Business Hours</div>
            <div style={{ background: "#fff", borderRadius: 8, padding: "16px 18px", border: "1px solid #e8e4df" }}>
              {hours.map(([day, time]) => (
                <div key={day} style={{ display: "flex", justifyContent: "space-between", padding: "5px 0", fontSize: 13, color: "#2c3e50", borderBottom: day !== "Sunday" ? "1px solid #f0ece7" : "none" }}>
                  <span style={{ fontWeight: 500 }}>{day}</span>
                  <span style={{ color: "#5a6c7e" }}>{time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div style={{ background: "#f7f5f2", borderTop: "1px solid #e8e4df", padding: "16px 0", textAlign: "center" }}>
        <span style={{ color: "#8899aa", fontSize: 13 }}>©2026 Legacy Structures All Rights Reserved.</span>
      </div>

      <style>{`
        .footer-grid {
          display: grid;
          grid-template-columns: 1.1fr 0.8fr 0.9fr 1fr;
          gap: 36px;
          align-items: start;
        }
        @media (max-width: 900px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr;
            gap: 28px;
          }
        }
        @media (max-width: 540px) {
          .footer-grid {
            grid-template-columns: 1fr;
            gap: 28px;
          }
        }
      `}</style>
    </footer>
  );
}
