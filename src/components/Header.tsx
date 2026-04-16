"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const modelLinks = [
  { label: "Backyard Barns", href: "/backyard-barns" },
  { label: "Storage Sheds", href: "/storage-sheds" },
  { label: "Portable Cabins", href: "/portable-cabins" },
  { label: "Portable Garages", href: "/portable-garages" },
  { label: "Double Wide Garages", href: "/double-wide-garages" },
  { label: "Chicken Coops", href: "/chicken-coops" },
  { label: "Greenhouses", href: "/greenhouses" },
  { label: "Side Gables", href: "/side-gables" },
];

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Our Models", href: "#", hasDropdown: true },
  { label: "Inventory", href: "/inventory" },
  { label: "Rent To Own", href: "/rent-to-own" },
  { label: "About Us", href: "/about-us" },
  { label: "Contact", href: "/contact-us" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSubOpen, setMobileSubOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    if (href === "#") return modelLinks.some((m) => pathname.startsWith(m.href));
    return pathname.startsWith(href);
  };

  return (
    <>
      <style>{`
        /* ---- Header area ---- */
        .hdr-wrapper {
          background: #ebe9e3;
          padding: 24px 0;
          box-shadow: 0 1px 3px rgba(0,0,0,0.08);
          position: relative;
          z-index: 1001;
        }
        .hdr-inner {
          max-width: 1150px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 20px;
        }
        .hdr-logo-link {
          display: inline-flex;
          align-items: center;
        }
        .hdr-contact {
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .hdr-phone-icon {
          width: 22px;
          height: 22px;
          flex-shrink: 0;
          color: #165c82;
        }
        .hdr-phone {
          font-weight: bold;
          color: #165c82 !important;
          text-decoration: none;
          font-size: 26px;
          font-family: 'Roboto', sans-serif;
          position: relative;
          transition: color 0.2s ease;
        }
        .hdr-phone::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 0;
          height: 2px;
          background: #165c82;
          transition: width 0.3s ease;
        }
        .hdr-phone:hover::after {
          width: 100%;
        }
        .hdr-phone:hover {
          color: #00567a !important;
        }

        /* ---- Nav bar ---- */
        .nav-wrap {
          background: #b12029;
          width: 100%;
          position: relative;
          z-index: 1000;
        }
        .nav-inner {
          max-width: 1150px;
          margin: 0 auto;
        }
        .nav-toggle {
          display: none;
          padding: 12px 20px;
        }
        .nav-toggle button {
          background: none;
          border: none;
          color: #fff;
          cursor: pointer;
          padding: 4px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 5px;
          width: 36px;
          height: 36px;
        }
        .nav-toggle button span {
          display: block;
          width: 24px;
          height: 2.5px;
          background: #fff;
          border-radius: 2px;
          transition: all 0.3s ease;
        }
        .nav-list {
          display: flex;
          justify-content: space-between;
          list-style: none;
          margin: 0;
          padding: 0;
        }
        .nav-item {
          flex-grow: 1;
          position: relative;
        }
        .nav-link {
          display: block;
          padding: 16px 15px;
          color: #fff !important;
          font-family: var(--font-oswald), 'Oswald', sans-serif;
          font-size: 20px;
          font-weight: bold;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          text-decoration: none;
          text-align: center;
          background: transparent;
          border-bottom: 3px solid transparent;
          transition: all 0.2s ease;
        }
        .nav-item:hover > .nav-link {
          background: #c93a42;
          color: #fff !important;
          border-bottom-color: #ffc800;
        }
        .nav-item.active > .nav-link {
          border-bottom-color: #ffc800;
        }

        /* ---- Dropdown ---- */
        .dropdown-menu {
          display: none;
          position: absolute;
          top: 100%;
          left: 0;
          background: #fff;
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
          border-radius: 0 0 8px 8px;
          z-index: 1000;
          list-style: none;
          margin: 0;
          padding: 4px 0;
          min-width: 240px;
          overflow: hidden;
        }
        .dropdown-parent:hover > .dropdown-menu {
          display: block;
        }
        .dropdown-link {
          display: block;
          padding: 12px 20px;
          color: #b12029 !important;
          font-family: var(--font-oswald), 'Oswald', sans-serif;
          font-size: 18px;
          font-weight: bold;
          text-transform: uppercase;
          text-decoration: none;
          text-align: left;
          letter-spacing: 0.5px;
          border-left: 3px solid transparent;
          transition: all 0.2s ease;
        }
        .dropdown-link:hover {
          background: #f5f3ef;
          color: #b12029 !important;
          border-left-color: #b12029;
        }

        /* ---- Mobile ---- */
        @media (max-width: 768px) {
          .hdr-inner {
            flex-direction: column;
            padding: 0 16px;
          }
          .hdr-contact {
            margin-top: 16px;
          }
          .hdr-phone {
            font-size: 22px;
          }
          .nav-toggle {
            display: flex;
            justify-content: flex-end;
          }
          .nav-list {
            display: flex;
            flex-direction: column;
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.35s ease;
          }
          .nav-list.open {
            max-height: 800px;
          }
          .nav-link {
            text-align: left;
            padding: 14px 20px;
            border-bottom: 1px solid rgba(255,255,255,0.1);
            border-bottom-width: 1px;
          }
          .nav-item.active > .nav-link {
            border-bottom-color: rgba(255,255,255,0.1);
            border-left: 3px solid #ffc800;
          }
          .nav-item:hover > .nav-link {
            border-bottom-color: rgba(255,255,255,0.1);
          }
          .dropdown-menu {
            position: static;
            box-shadow: none;
            border-radius: 0;
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.3s ease;
            padding: 0;
          }
          .dropdown-parent:hover > .dropdown-menu {
            display: block;
            max-height: 0;
          }
          .dropdown-menu.mobile-open {
            display: block !important;
            max-height: 600px;
          }
          .dropdown-link {
            padding-left: 32px;
            color: #fff !important;
            background: #9a1b23;
            border-left-color: transparent;
          }
          .dropdown-link:hover {
            background: #891820;
            color: #fff !important;
            border-left-color: #ffc800;
          }
        }
      `}</style>
      <header>
        <div className="hdr-wrapper">
          <div className="hdr-inner">
            <Link href="/" className="hdr-logo-link">
              <Image
                src="https://legacystructuresusa.com/wp-content/uploads/2025/07/LEGECY-STRUCTURES-dark-blue-1.png"
                alt="Legacy Structures"
                width={400}
                height={125}
                style={{ maxHeight: "125px", width: "auto", height: "auto" }}
                priority
              />
            </Link>
            <div className="hdr-contact">
              <svg
                className="hdr-phone-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <a href="tel:518-544-2889" className="hdr-phone">518-544-2889</a>
            </div>
          </div>
        </div>

        <div className="nav-wrap">
          <div className="nav-inner">
            <div className="nav-toggle">
              <button onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu">
                <span />
                <span />
                <span />
              </button>
            </div>
            <ul className={`nav-list${mobileOpen ? " open" : ""}`}>
              {navLinks.map((item) => (
                <li
                  key={item.label}
                  className={`nav-item${item.hasDropdown ? " dropdown-parent" : ""}${isActive(item.href) ? " active" : ""}`}
                >
                  <Link
                    href={item.href}
                    className="nav-link"
                    onClick={
                      item.hasDropdown
                        ? (e) => {
                            if (typeof window !== "undefined" && window.innerWidth <= 768) {
                              e.preventDefault();
                              setMobileSubOpen(!mobileSubOpen);
                            }
                          }
                        : () => setMobileOpen(false)
                    }
                  >
                    {item.label}
                  </Link>
                  {item.hasDropdown && (
                    <ul className={`dropdown-menu${mobileSubOpen ? " mobile-open" : ""}`}>
                      {modelLinks.map((sub) => (
                        <li key={sub.href}>
                          <Link
                            href={sub.href}
                            className="dropdown-link"
                            onClick={() => { setMobileOpen(false); setMobileSubOpen(false); }}
                          >
                            {sub.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </header>
    </>
  );
}
