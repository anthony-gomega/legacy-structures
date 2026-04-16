export default function Footer() {
  return (
    <footer>
      {/* CTA Call bar */}
      <div
        style={{
          background: "#03597c",
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
              fontSize: "50px",
              fontFamily: '"Tungsten Semibold", sans-serif',
              letterSpacing: "1.5px",
            }}
          >
            Speak with a shed expert today!
          </div>
          <div style={{ fontSize: "40px" }}>
            <a
              href="tel:518-544-2889"
              style={{
                fontWeight: "bold",
                fontSize: "50px",
                color: "#fabe08",
                textDecoration: "none",
              }}
            >
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
        <div
          className="footer-columns"
          style={{
            maxWidth: "1150px",
            margin: "0 auto",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "flex-start",
            flexWrap: "wrap",
            gap: "20px",
          }}
        >
          {/* Column 1: Location info */}
          <div>
            <p style={{ fontWeight: "bold", paddingBottom: "5px", lineHeight: "1.6" }}>
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
                  style={{ maxHeight: "35px", borderRadius: "5px" }}
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
                  style={{ maxHeight: "35px", borderRadius: "5px" }}
                />
              </a>
              <a href="mailto:legacystructures25@gmail.com">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://legacystructuresusa.com/wp-content/themes/barndealer/assets/images/icon-email.png"
                  alt="Email"
                  style={{ maxHeight: "35px", borderRadius: "5px" }}
                />
              </a>
            </div>
          </div>

          {/* Column 2: Dealer logo */}
          <div style={{ textAlign: "center" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://legacystructuresusa.com/wp-content/themes/barndealer/assets/images/backyardoutfitters-logo-1.png"
              alt="Backyard Outfitters"
              style={{ maxWidth: "250px", height: "auto" }}
            />
          </div>

          {/* Column 3: Business hours */}
          <div>
            <p style={{ fontWeight: "bold", paddingBottom: "5px", lineHeight: "1.6" }}>
              BUSINESS HOURS
            </p>
            <p style={{ paddingBottom: "0", lineHeight: "1.6" }}>
              Monday: By Appointment
            </p>
            <p style={{ paddingBottom: "0", lineHeight: "1.6" }}>
              Tuesday: 9:00 to 5:00
            </p>
            <p style={{ paddingBottom: "0", lineHeight: "1.6" }}>
              Wednesday: By Appointment
            </p>
            <p style={{ paddingBottom: "0", lineHeight: "1.6" }}>
              Thursday: By Appointment
            </p>
            <p style={{ paddingBottom: "0", lineHeight: "1.6" }}>
              Friday: By Appointment
            </p>
            <p style={{ paddingBottom: "0", lineHeight: "1.6" }}>
              Saturday: By Appointment
            </p>
            <p style={{ paddingBottom: "0", lineHeight: "1.6" }}>Sunday: Closed</p>
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
          padding: "20px 0",
        }}
      >
        &copy;2026 Legacy Structures All Rights Reserved.
      </div>
    </footer>
  );
}
