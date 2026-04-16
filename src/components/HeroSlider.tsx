"use client";

import { useState, useCallback, useEffect } from "react";
import Link from "next/link";

const slides = [
  {
    src: "https://legacystructuresusa.com/wp-content/themes/barndealer/assets/images/territory3-slider.jpg",
    alt: "Get pricing on your dream shed",
    href: "#pricing-form",
    external: false,
  },
  {
    src: "https://legacystructuresusa.com/wp-content/themes/barndealer/assets/images/byo-hero-slider-2.jpg",
    alt: "View our inventory",
    href: "/inventory",
    external: false,
  },
  {
    src: "https://legacystructuresusa.com/wp-content/themes/barndealer/assets/images/byo-hero-slider-3.jpg",
    alt: "Build your own shed in 3D",
    href: "https://orders.barnportal.com/myquote?dealerid=&dir=1&template=1",
    external: true,
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  const prev = useCallback(() => {
    setCurrent((c) => (c === 0 ? slides.length - 1 : c - 1));
  }, []);

  const next = useCallback(() => {
    setCurrent((c) => (c === slides.length - 1 ? 0 : c + 1));
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  const slide = slides[current];

  const inner = (
    <img
      src={slide.src}
      alt={slide.alt}
      className="w-full h-full object-cover"
      draggable={false}
    />
  );

  return (
    <section className="home-hero relative w-full overflow-hidden" style={{ height: "auto", maxHeight: "600px" }}>
      <div className="relative w-full" style={{ aspectRatio: "16/7" }}>
        {slide.external ? (
          <a href={slide.href} target="_blank" rel="noopener noreferrer" className="block w-full h-full">
            {inner}
          </a>
        ) : (
          <Link href={slide.href} className="block w-full h-full">
            {inner}
          </Link>
        )}

        {/* Prev Arrow */}
        <button
          onClick={prev}
          aria-label="Previous slide"
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-black/40 hover:bg-black/60 text-white w-12 h-12 flex items-center justify-center rounded-full transition-colors cursor-pointer"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>

        {/* Next Arrow */}
        <button
          onClick={next}
          aria-label="Next slide"
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-black/40 hover:bg-black/60 text-white w-12 h-12 flex items-center justify-center rounded-full transition-colors cursor-pointer"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 6 15 12 9 18" />
          </svg>
        </button>
      </div>
    </section>
  );
}
