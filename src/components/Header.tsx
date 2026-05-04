"use client";

/* eslint-disable @next/next/no-img-element */
import { useState, useEffect } from "react";
import Link from "next/link";
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
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Close mobile menu on route change */
  useEffect(() => {
    setMobileOpen(false);
    setMobileSubOpen(false);
  }, [pathname]);

  return (
    <>
      <style>{`
        .header-bar {
          position: sticky;
          top: 0;
          z-index: 1000;
          transition: box-shadow 0.28s ease;
        }
        .header-bar.header-scrolled {
          box-shadow: 0 4px 28px rgba(0,0,0,0.18);
        }
        .header-top {
          background: #e9e6e1;
          max-width: 100%;
          padding: 26px 24px 22px;
        }
        .header-top-inner {
          max-width: 1612px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
          padding: 0 clamp(24px, 9vw, 130px);
        }
        .header-cta-group {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 2px;
          min-width: 280px;
        }
        .header-logo {
          display: block;
          width: 170px;
          max-width: 34vw;
          height: auto;
          transition: opacity 0.2s ease;
        }
        .header-logo:hover {
          opacity: 0.88;
        }
        .header-quote-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          background: #bf1b22;
          color: #fff !important;
          font-weight: 700;
          font-size: 22px;
          line-height: 1;
          font-family: Georgia, "Times New Roman", serif;
          width: 280px;
          height: 42px;
          padding: 0 18px;
          border-radius: 4px;
          text-decoration: none;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          white-space: nowrap;
          transition: background 0.2s ease, transform 0.15s ease;
        }
        .header-quote-btn:hover {
          background: #a9181e;
          color: #fff !important;
          transform: translateY(-1px);
        }
        .header-phone {
          display: block;
          background: transparent;
          color: #075f81 !important;
          text-decoration: none;
          font-weight: 700;
          font-size: 26px;
          line-height: 1.05;
          font-family: Georgia, "Times New Roman", serif;
          padding-top: 4px;
          white-space: nowrap;
          transition: color 0.2s ease;
        }
        .header-phone:hover {
          color: #004e6a !important;
        }

        .nav-wrap-outer {
          background: #bd171f;
          width: 100%;
        }
        .nav-bar {
          max-width: 1500px;
          margin: 0 auto;
        }
        .nav-toggle { display: none; padding: 10px 24px; }
        .nav-toggle button {
          background: none; border: none; color: #fff; cursor: pointer;
          display: flex; flex-direction: column; gap: 5px; padding: 4px;
        }
        .nav-toggle button span {
          display: block; width: 26px; height: 2.5px; background: #fff;
          border-radius: 2px; transition: all 0.25s ease;
        }
        .nav-list {
          display: flex; justify-content: center; list-style: none;
          gap: clamp(44px, 6vw, 120px);
          margin: 0; padding: 0;
        }
        .nav-item { position: relative; flex: 0 0 auto; }
        .nav-link {
          display: block; padding: 13px 18px 15px;
          color: #fff !important;
          font-family: var(--font-oswald), Impact, sans-serif;
          font-size: 19px; font-weight: 700;
          text-transform: uppercase; letter-spacing: 0;
          text-decoration: none; text-align: center;
          background: transparent;
          transition: background 0.18s ease;
          position: relative;
        }
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 0;
          height: 3px;
          background: #ffc400;
          transition: width 0.22s ease;
        }
        .nav-link:hover::after,
        .nav-link.active::after {
          width: 60%;
        }
        .nav-link:hover { color: #fff !important; background: #a9151b; }
        .nav-link.active { color: #fff !important; }

        .dropdown-menu {
          display: none; position: absolute; top: 100%; left: 50%;
          transform: translateX(-50%); background: #fff;
          box-shadow: 0 12px 40px rgba(0,0,0,0.18);
          border-radius: 0 0 8px 8px; z-index: 1000;
          list-style: none; margin: 0; padding: 8px 0; min-width: 240px;
          border-top: 3px solid #bd171f;
        }
        .dropdown-parent:hover > .dropdown-menu { display: block; }
        .dropdown-link {
          display: block; padding: 10px 22px;
          color: #2c3e50 !important;
          font-family: var(--font-oswald), Impact, sans-serif;
          font-size: 14px; font-weight: 500;
          text-decoration: none; transition: all 0.15s ease;
          border-left: 3px solid transparent;
        }
        .dropdown-link:hover {
          background: #f7f5f2;
          color: #bd171f !important;
          border-left-color: #bd171f;
          padding-left: 26px;
        }

        @media (max-width: 768px) {
          .header-top { padding: 16px 12px; }
          .header-top-inner { flex-direction: row; gap: 8px; flex-wrap: wrap; justify-content: center; }
          .header-logo { width: 150px; max-width: 70vw; }
          .header-cta-group { min-width: 0; width: 100%; }
          .header-quote-btn { width: auto; height: auto; font-size: 20px; padding: 8px 16px; }
          .header-phone { font-size: 22px; }
          .nav-toggle { display: block; text-align: right; }
          .nav-list { display: none; flex-direction: column; background: #bd171f; gap: 0; }
          .nav-list.open { display: flex !important; }
          .nav-link { text-align: left; padding: 12px 20px; font-size: 18px; }
          .nav-link::after { display: none; }
          .dropdown-menu { position: static; box-shadow: none; transform: none; border-radius: 0; border-top: none; background: #a9151b; }
          .dropdown-parent:hover > .dropdown-menu { display: none; }
          .dropdown-menu.mobile-open { display: block !important; }
          .dropdown-link { padding-left: 40px; font-size: 13px; color: rgba(255,255,255,0.9) !important; border-left: none; }
          .dropdown-link:hover { background: rgba(255,255,255,0.1); color: #fff !important; padding-left: 44px; border-left: none; }
        }
        .nav-chevron { margin-left: 5px; vertical-align: middle; display: inline-block; }
      `}</style>
      <header className={`header-bar${scrolled ? " header-scrolled" : ""}`}>
        {/* Top row: logo + phone */}
        <div className="header-top">
          <div className="header-top-inner">
            <Link href="/" aria-label="Legacy Structures — Home">
              <img
                src="https://legacystructuresusa.com/wp-content/uploads/2025/07/LEGECY-STRUCTURES-dark-blue-1.png"
                alt="Legacy Structures — Storage Sheds, Barns & Outdoor Structures in Hudson Falls, NY"
                className="header-logo"
              />
            </Link>
            <div className="header-cta-group">
              <Link href="/contact-us" className="header-quote-btn">
                Get A Free Quote
              </Link>
              <a href="tel:518-544-2889" className="header-phone">
                518-544-2889
              </a>
            </div>
          </div>
        </div>

        {/* Nav row */}
        <div className="nav-wrap-outer">
          <nav className="nav-bar" aria-label="Main navigation">
            <div className="nav-toggle">
              <button
                type="button"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label="Toggle navigation menu"
                aria-expanded={mobileOpen ? "true" : "false"}
              >
                <span /><span /><span />
              </button>
            </div>
            <ul className={`nav-list${mobileOpen ? " open" : ""}`}>
              {navLinks.map((item) => (
                <li key={item.label} className={`nav-item${item.hasDropdown ? " dropdown-parent" : ""}`}>
                  <Link
                    href={item.href}
                    className={`nav-link${!item.hasDropdown && isActive(item.href) ? " active" : ""}`}
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
                    {item.hasDropdown && (
                      <svg
                        width="11" height="7" viewBox="0 0 11 7"
                        fill="none" stroke="currentColor" strokeWidth="2"
                        strokeLinecap="round" strokeLinejoin="round"
                        className="nav-chevron"
                        aria-hidden="true"
                      >
                        <polyline points="1 1 5.5 6 10 1" />
                      </svg>
                    )}
                  </Link>
                  {item.hasDropdown && (
                    <ul
                      className={`dropdown-menu${mobileSubOpen ? " mobile-open" : ""}`}
                      aria-label="Our Models"
                    >
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
          </nav>
        </div>
      </header>
    </>
  );
}
