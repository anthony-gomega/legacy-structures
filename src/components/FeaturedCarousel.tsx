"use client";

import { useState, useCallback, useEffect } from "react";
import Link from "next/link";

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
  const itemsPerPage = 3;
  const totalPages = Math.ceil(sheds.length / itemsPerPage);
  const [page, setPage] = useState(0);

  const prev = useCallback(() => {
    setPage((p) => (p === 0 ? totalPages - 1 : p - 1));
  }, [totalPages]);

  const next = useCallback(() => {
    setPage((p) => (p === totalPages - 1 ? 0 : p + 1));
  }, [totalPages]);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  const startIdx = page * itemsPerPage;
  const visible = sheds.slice(startIdx, startIdx + itemsPerPage);

  const arrowStyle: React.CSSProperties = {
    backgroundColor: "rgba(255,255,255,0.2)",
    backdropFilter: "blur(4px)",
    WebkitBackdropFilter: "blur(4px)",
  };

  return (
    <div className="relative">
      {/* Prev Arrow */}
      <button
        onClick={prev}
        aria-label="Previous featured sheds"
        className="absolute -left-5 top-1/2 -translate-y-1/2 z-10 text-white w-10 h-10 flex items-center justify-center rounded-full transition-all cursor-pointer"
        style={arrowStyle}
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>

      {/* Next Arrow */}
      <button
        onClick={next}
        aria-label="Next featured sheds"
        className="absolute -right-5 top-1/2 -translate-y-1/2 z-10 text-white w-10 h-10 flex items-center justify-center rounded-full transition-all cursor-pointer"
        style={arrowStyle}
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="9 6 15 12 9 18" />
        </svg>
      </button>

      {/* Items */}
      <div className="grid grid-cols-3 gap-4">
        {visible.map((shed, i) => (
          <Link key={`${shed.href}-${startIdx + i}`} href={shed.href} className="block group">
            <div
              style={{
                borderRadius: "8px",
                overflow: "hidden",
                boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.02)";
                e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,0,0,0.15)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.1)";
              }}
            >
              <div
                className="bg-cover bg-center"
                style={{
                  backgroundImage: `url(${shed.image})`,
                  height: "250px",
                }}
              />
              <div
                style={{
                  backgroundColor: "#fff",
                  color: "#222",
                  textAlign: "center",
                  padding: "20px",
                  fontSize: "16px",
                  borderTop: "3px solid #00567a",
                }}
              >
                <div style={{ fontWeight: 600 }}>{shed.name}</div>
                <div style={{ color: "#999", fontSize: "12px", marginTop: "6px" }}>Starting at</div>
                <div style={{ color: "#e8573a", fontWeight: 800, fontSize: "18px", marginTop: "2px" }}>
                  {formatPrice(shed.price)}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-5">
        {Array.from({ length: totalPages }).map((_, i) => (
          <button
            key={i}
            onClick={() => setPage(i)}
            aria-label={`Go to page ${i + 1}`}
            className="cursor-pointer transition-colors"
            style={{
              width: "10px",
              height: "10px",
              borderRadius: "50%",
              backgroundColor: i === page ? "#00567a" : "#ccc",
              border: "none",
              padding: 0,
            }}
          />
        ))}
      </div>
    </div>
  );
}
