export default function Footer() {
  return (
    <footer>
      {/* Hover styles */}
      <style>{`
        .cta-phone-link {
          font-weight: bold;
          font-size: 36px;
          color: #fabe08;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          position: relative;
          transition: color 0.3s ease;
        }
        .cta-phone-link::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 0;
          height: 2px;
          background: #fabe08;
          transition: width 0.3s ease;
        }
        .cta-phone-link:hover {
          color: #fcd44a;
        }
        .cta-phone-link:hover::after {
          width: 100%;
        }
        .social-icon {
          max-height: 40px;
          border-radius: 5px;
          opacity: 0.7;
          transition: opacity 0.3s ease;
        }
        .social-icon:hover {
          opacity: 1;
        }
        .dealer-logo {
          max-width: 250px;
          height: auto;
          transition: transform 0.3s ease;
        }
        .dealer-logo:hover {
          transform: scale(1.05);
        }
        .footer-grid {
          max-width: 1150px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          gap: 20px;
        }
        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr;
          }
          .footer-grid > div {
            border-right: none !important;
            border-bottom: 1px solid rgba(0,86,122,0.15);
            padding-bottom: 24px !important;
            padding-right: 0 !important;
          }
          .footer-grid > div:last-child {
            border-bottom: none;
          }
        }
      `}</style>

      {/* CTA Call bar */}
      <div
        style={{
          background: "linear-gradient(to bottom, #03597c, #004d6b)",
          padding: "20px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            gap: "1%",
            textTransform: "uppercase",
            color: "#fff",
            flexWrap: "wrap",
          }}
        >
          <div
            style={{
              fontWeight: "bold",
              fontSize: "32px",
              fontFamily: 'var(--font-oswald), "Oswald", sans-serif',
              letterSpacing: "1.5px",
            }}
          >
            Speak with a shed expert today!
          </div>
          <div>
            <a
              href="tel:518-544-2889"
              className="cta-phone-link"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="currentColor"
                style={{ flexShrink: 0 }}
              >
                <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1.003 1.003 0 011.01-.24c1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.1.31.03.66-.25 1.02l-2.2 2.2z" />
              </svg>
              518-544-2889
            </a>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div
        style={{
          background: "#ebe9e3",
          color: "#00567a",
          padding: "40px 20px 0",
        }}
      >
        <div className="footer-grid">
          {/* Column 1: Location info */}
          <div
            style={{
              borderRight: "1px solid rgba(0,86,122,0.15)",
              paddingRight: "20px",
            }}
          >
            <p
              style={{
                fontWeight: "bold",
                fontSize: "20px",
                paddingBottom: "8px",
                lineHeight: "1.6",
                borderBottom: "2px solid #00567a",
                display: "inline-block",
                marginBottom: "8px",
              }}
            >
              Legacy Structures
            </p>
            <p style={{ paddingBottom: "0", lineHeight: "1.6" }}>3570 US 4</p>
            <p style={{ paddingBottom: "5px", lineHeight: "1.6" }}>
              Hudson Falls, NY 12839
            </p>
            <p style={{ paddingBottom: "2px", lineHeight: "1.6" }}>
              Main:{" "}
              <a
                href="tel:518-544-2889"
                style={{ color: "#00567a", textDecoration: "none" }}
              >
                518-544-2889
              </a>
            </p>
            <p style={{ paddingBottom: "5px", lineHeight: "1.6" }}>
              Email:{" "}
              <a
                href="mailto:legacystructures25@gmail.com"
                style={{ color: "#00567a", textDecoration: "none" }}
              >
                legacystructures25@gmail.com
              </a>
            </p>
            {/* Social bar */}
            <div style={{ display: "flex", gap: "8px", marginTop: "5px" }}>
              <a
                href="https://www.facebook.com/BackyardOutfittersEnterprisesLLC/"
                target="_blank"
                rel="noopener noreferrer"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://legacystructuresusa.com/wp-content/themes/barndealer/assets/images/icon-fb.png"
                  alt="Facebook"
                  className="social-icon"
                />
              </a>
              <a
                href="https://www.instagram.com/backyardoutfittersusa"
                target="_blank"
                rel="noopener noreferrer"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://legacystructuresusa.com/wp-content/themes/barndealer/assets/images/icon-ig.png"
                  alt="Instagram"
                  className="social-icon"
                />
              </a>
              <a href="mailto:legacystructures25@gmail.com">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://legacystructuresusa.com/wp-content/themes/barndealer/assets/images/icon-email.png"
                  alt="Email"
                  className="social-icon"
                />
              </a>
            </div>
          </div>

          {/* Column 2: Dealer logo */}
          <div
            style={{
              textAlign: "center",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRight: "1px solid rgba(0,86,122,0.15)",
              paddingRight: "20px",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://legacystructuresusa.com/wp-content/themes/barndealer/assets/images/backyardoutfitters-logo-1.png"
              alt="Backyard Outfitters"
              className="dealer-logo"
            />
          </div>

          {/* Column 3: Business hours */}
          <div>
            <div
              style={{
                background: "#e3e1db",
                borderRadius: "8px",
                padding: "16px 20px",
              }}
            >
              <p
                style={{
                  fontWeight: "bold",
                  paddingBottom: "8px",
                  lineHeight: "1.6",
                  marginBottom: "4px",
                }}
              >
                BUSINESS HOURS
              </p>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "auto 1fr",
                  gap: "2px 12px",
                  lineHeight: "1.6",
                }}
              >
                <span>Monday:</span>
                <span>By Appointment</span>
                <span>Tuesday:</span>
                <span>9:00 to 5:00</span>
                <span>Wednesday:</span>
                <span>By Appointment</span>
                <span>Thursday:</span>
                <span>By Appointment</span>
                <span>Friday:</span>
                <span>By Appointment</span>
                <span>Saturday:</span>
                <span>By Appointment</span>
                <span>Sunday:</span>
                <span>Closed</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright bar */}
      <div
        style={{
          background: "#ebe9e3",
          textAlign: "center",
          color: "#00567a",
          fontSize: "12px",
          fontWeight: 300,
          padding: "24px 0",
          borderTop: "1px solid rgba(0,86,122,0.1)",
        }}
      >
        &copy;2026 Legacy Structures All Rights Reserved.
      </div>
    </footer>
  );
}
