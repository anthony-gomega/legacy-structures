"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

interface FeaturedShed {
  name: string;
  price: number;
  image: string;
  href: string;
}

function formatPrice(price: number) {
  return price.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  });
}

export default function FeaturedCarousel({ sheds }: { sheds: FeaturedShed[] }) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateScrollState = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 8);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 8);
  }, []);

  useEffect(() => {
    updateScrollState();
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener("scroll", updateScrollState, { passive: true });
    window.addEventListener("resize", updateScrollState);
    return () => {
      el.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
    };
  }, [updateScrollState]);

  const scrollByCard = (direction: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const card = el.querySelector("[data-card]") as HTMLElement | null;
    const cardWidth = card ? card.offsetWidth + 24 : 320;
    el.scrollBy({ left: direction === "right" ? cardWidth : -cardWidth, behavior: "smooth" });
  };

  return (
    <div style={{ position: "relative", padding: "0 56px" }}>
      {/* Prev Arrow */}
      <button
        onClick={() => scrollByCard("left")}
        aria-label="Previous"
        disabled={!canScrollLeft}
        style={{
          position: "absolute",
          left: 0,
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 10,
          background: canScrollLeft ? "#1a3a5c" : "rgba(26,58,92,0.3)",
          color: "#fff",
          border: "none",
          width: 48,
          height: 48,
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: canScrollLeft ? "pointer" : "not-allowed",
          boxShadow: "0 4px 16px rgba(0,0,0,0.2)",
          transition: "all 0.2s ease",
        }}
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>

      {/* Next Arrow */}
      <button
        onClick={() => scrollByCard("right")}
        aria-label="Next"
        disabled={!canScrollRight}
        style={{
          position: "absolute",
          right: 0,
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 10,
          background: canScrollRight ? "#1a3a5c" : "rgba(26,58,92,0.3)",
          color: "#fff",
          border: "none",
          width: 48,
          height: 48,
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: canScrollRight ? "pointer" : "not-allowed",
          boxShadow: "0 4px 16px rgba(0,0,0,0.2)",
          transition: "all 0.2s ease",
        }}
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="9 6 15 12 9 18" />
        </svg>
      </button>

      {/* Scrollable track */}
      <div
        ref={scrollRef}
        style={{
          display: "flex",
          gap: 24,
          overflowX: "auto",
          overflowY: "hidden",
          scrollSnapType: "x mandatory",
          scrollBehavior: "smooth",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          paddingBottom: 8,
        }}
        className="featured-carousel-track"
      >
        <style>{`
          .featured-carousel-track::-webkit-scrollbar { display: none; }
        `}</style>

        {sheds.map((shed) => (
          <motion.div
            key={shed.href}
            data-card
            initial="rest"
            whileHover="hover"
            animate="rest"
            variants={{
              rest: { y: 0, boxShadow: "0 2px 8px rgba(0,0,0,0.08)" },
              hover: { y: -6, boxShadow: "0 16px 36px rgba(0,0,0,0.18)" },
            }}
            transition={{ type: "spring", stiffness: 300, damping: 22 }}
            style={{
              flex: "0 0 calc(33.333% - 16px)",
              minWidth: 280,
              borderRadius: 12,
              background: "#fff",
              scrollSnapAlign: "start",
              overflow: "hidden",
            }}
          >
            <Link href={shed.href} style={{ display: "block", textDecoration: "none", color: "inherit" }}>
              {/* Image */}
              <div style={{ position: "relative", height: 240, overflow: "hidden" }}>
                <motion.div
                  variants={{ rest: { scale: 1 }, hover: { scale: 1.06 } }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  style={{
                    backgroundImage: `url(${shed.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    width: "100%",
                    height: "100%",
                  }}
                />
                <motion.div
                  variants={{ rest: { opacity: 0 }, hover: { opacity: 1 } }}
                  transition={{ duration: 0.25 }}
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(to top, rgba(15,36,64,0.85) 0%, rgba(0,0,0,0) 60%)",
                    display: "flex",
                    alignItems: "flex-end",
                    padding: 18,
                    pointerEvents: "none",
                  }}
                >
                  <span style={{ color: "#fff", fontWeight: 600, fontSize: 14, letterSpacing: 0.5, fontFamily: "var(--font-poppins)" }}>
                    View Details →
                  </span>
                </motion.div>
              </div>

              {/* Info */}
              <div style={{ padding: 20, borderTop: "3px solid #1a3a5c" }}>
                <div style={{ fontWeight: 700, fontSize: 17, color: "#1a3a5c", fontFamily: "var(--font-poppins)" }}>
                  {shed.name}
                </div>
                <div style={{ color: "#8899aa", fontSize: 12, marginTop: 6, textTransform: "uppercase", letterSpacing: 1 }}>
                  Starting at
                </div>
                <div style={{ color: "#c0392b", fontWeight: 800, fontSize: 22, marginTop: 2, fontFamily: "var(--font-poppins)" }}>
                  {formatPrice(shed.price)}
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
