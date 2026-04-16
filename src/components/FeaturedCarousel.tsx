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

  return (
    <div className="relative">
      {/* Prev Arrow */}
      <button
        onClick={prev}
        aria-label="Previous featured sheds"
        className="absolute -left-5 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white w-10 h-10 flex items-center justify-center rounded-full transition-colors cursor-pointer"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>

      {/* Next Arrow */}
      <button
        onClick={next}
        aria-label="Next featured sheds"
        className="absolute -right-5 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white w-10 h-10 flex items-center justify-center rounded-full transition-colors cursor-pointer"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="9 6 15 12 9 18" />
        </svg>
      </button>

      {/* Items */}
      <div className="grid grid-cols-3 gap-4">
        {visible.map((shed, i) => (
          <Link key={`${shed.href}-${startIdx + i}`} href={shed.href} className="block">
            <div
              className="thumb bg-cover bg-center"
              style={{
                backgroundImage: `url(${shed.image})`,
                height: "250px",
              }}
            />
            <div
              className="info text-white text-center"
              style={{
                backgroundColor: "#00567a",
                padding: "20px",
                fontSize: "16px",
              }}
            >
              <div>{shed.name}</div>
              <div className="sale-price" style={{ color: "#e8573a", fontWeight: "bold", marginTop: "4px" }}>
                {formatPrice(shed.price)}
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
            className="cursor-pointer text-sm font-bold transition-colors"
            style={{
              width: "28px",
              height: "28px",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: i === page ? "#00567a" : "#ccc",
              color: i === page ? "#fff" : "#333",
            }}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
}
