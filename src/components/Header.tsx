"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

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

  return (
    <>
      <style>{`
        .hdr-wrapper { background: #ebe9e3; padding: 20px; }
        .hdr-inner { max-width: 1150px; margin: 0 auto; display: flex; align-items: center; justify-content: space-between; }
        .hdr-contact { font-size: 30px; font-family: 'Roboto', sans-serif; text-align: center; display: flex; flex-direction: column; align-items: flex-end; gap: 5px; }
        .hdr-call-label { background: #b12029; color: #fff; padding: 5px 20px; border-radius: 6px; font-weight: bold; text-transform: uppercase; font-size: 14px; }
        .hdr-phone { font-weight: bold; color: #165c82 !important; text-decoration: none; font-size: 30px; }
        .nav-wrap { background: #b12029; width: 100%; }
        .nav-inner { max-width: 1150px; margin: 0 auto; }
        .nav-toggle { display: none; padding: 15px; }
        .nav-toggle button { background: none; border: none; color: #fff; font-size: 28px; cursor: pointer; }
        .nav-list { display: flex; justify-content: space-between; list-style: none; margin: 0; padding: 0; }
        .nav-item { flex-grow: 1; position: relative; }
        .nav-link { display: block; padding: 15px; color: #fff !important; font-family: var(--font-oswald), 'Oswald', sans-serif; font-size: 25px; font-weight: bold; text-transform: uppercase; letter-spacing: 0.5px; text-decoration: none; text-align: center; background: transparent; transition: background-color 0.3s ease; }
        .nav-item:hover > .nav-link { background: #fff; color: #b12029 !important; }
        .dropdown-menu { display: none; position: absolute; top: 100%; left: 0; background: #fff; box-shadow: 0 2px 8px rgba(0,0,0,0.15); z-index: 1000; list-style: none; margin: 0; padding: 0; min-width: 240px; }
        .dropdown-parent:hover > .dropdown-menu { display: block; }
        .dropdown-link { display: block; padding: 15px; color: #b12029 !important; font-family: var(--font-oswald), 'Oswald', sans-serif; font-size: 25px; font-weight: bold; text-transform: uppercase; text-decoration: none; text-align: left; transition: background-color 0.3s ease; letter-spacing: 0.5px; }
        .dropdown-link:hover { background: #b12029; color: #fff !important; }
        @media (max-width: 768px) {
          .hdr-inner { flex-direction: column; }
          .hdr-contact { display: flex; flex-direction: row; gap: 2%; width: 100%; justify-content: center; margin-top: 20px; font-size: 18px; align-items: center; }
          .nav-toggle { display: block; text-align: right; }
          .nav-list { display: none; flex-direction: column; }
          .nav-list.open { display: flex !important; }
          .nav-link { text-align: left; background: #b12029; }
          .dropdown-menu { position: static; box-shadow: none; display: none; }
          .dropdown-parent:hover > .dropdown-menu { display: none; }
          .dropdown-menu.mobile-open { display: block !important; }
          .dropdown-link { padding-left: 30px; }
        }
      `}</style>
      <header>
        <div className="hdr-wrapper">
          <div className="hdr-inner">
            <Link href="/">
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
              <span className="hdr-call-label">Call Us Today!</span>
              <a href="tel:518-544-2889" className="hdr-phone">518-544-2889</a>
            </div>
          </div>
        </div>

        <div className="nav-wrap">
          <div className="nav-inner">
            <div className="nav-toggle">
              <button onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu">&#9776;</button>
            </div>
            <ul className={`nav-list${mobileOpen ? " open" : ""}`}>
              {navLinks.map((item) => (
                <li key={item.label} className={`nav-item${item.hasDropdown ? " dropdown-parent" : ""}`}>
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
