"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

interface InventoryItem {
  model: string;
  slug: string;
  width: number;
  length: number;
  size: string;
  wallsColor: string;
  trimColor: string;
  roofColor: string;
  inventoryNumber: string;
  cashPrice: number;
  salePrice: number | null;
  rto36: number;
  rto48: number;
  buildingType: string;
  sidingColor: string;
  condition: string;
  image: string;
  designTemplate: string;
}

const inventoryItems: InventoryItem[] = [
  {
    model: "Chicken Coop",
    slug: "chicken-coop",
    width: 8,
    length: 8,
    size: "8 x 8",
    wallsColor: "Navajo",
    trimColor: "Black",
    roofColor: "Black - Metal",
    inventoryNumber: "PCC-72288-86-121824-C",
    cashPrice: 3120.0,
    salePrice: 2964.0,
    rto36: 137.22,
    rto48: 123.5,
    buildingType: "Chicken Coop",
    sidingColor: "Navajo",
    condition: "New",
    image:
      "https://legacystructuresusa.com/wp-content/uploads/2025/07/IMG_0156-1753236054332-scaled.jpeg",
    designTemplate: "25",
  },
  {
    model: "Mini Barn",
    slug: "mini-barn",
    width: 10,
    length: 12,
    size: "10 x 12",
    wallsColor: "Red",
    trimColor: "Barn White",
    roofColor: "Black - Metal",
    inventoryNumber: "PBN-73051-1012-080825-C",
    cashPrice: 3445.0,
    salePrice: null,
    rto36: 159.49,
    rto48: 143.54,
    buildingType: "Mini Barn",
    sidingColor: "Red",
    condition: "New",
    image:
      "https://legacystructuresusa.com/wp-content/uploads/2025/10/IMG_0353-1760801572551-scaled.jpeg",
    designTemplate: "22",
  },
  {
    model: "Utility Shed",
    slug: "utility-shed-3",
    width: 10,
    length: 12,
    size: "10 x 12",
    wallsColor: "Clay",
    trimColor: "Black",
    roofColor: "Black - Metal",
    inventoryNumber: "YUT-C10181-1012-011226-SP",
    cashPrice: 3775.0,
    salePrice: null,
    rto36: 174.77,
    rto48: 157.29,
    buildingType: "Utility Shed",
    sidingColor: "Clay",
    condition: "New",
    image:
      "https://legacystructuresusa.com/wp-content/uploads/2026/03/IMG_3336-1773796375925-scaled.jpeg",
    designTemplate: "25",
  },
  {
    model: "Utility Shed",
    slug: "utility-shed-2",
    width: 10,
    length: 12,
    size: "10 x 12",
    wallsColor: "Red",
    trimColor: "Barn White",
    roofColor: "Black - Metal",
    inventoryNumber: "YUT-c10185-1012-010926-SP",
    cashPrice: 3845.0,
    salePrice: null,
    rto36: 178.01,
    rto48: 160.21,
    buildingType: "Utility Shed",
    sidingColor: "Red",
    condition: "New",
    image:
      "https://legacystructuresusa.com/wp-content/uploads/2026/03/IMG_3330-1773795752495-scaled.jpeg",
    designTemplate: "25",
  },
  {
    model: "Lofted Barn",
    slug: "lofted-barn-8",
    width: 8,
    length: 12,
    size: "8 x 12",
    wallsColor: "Urethane Chestnut",
    trimColor: "Black",
    roofColor: "Black - Metal",
    inventoryNumber: "WLB-72180-812-110824-C",
    cashPrice: 4231.0,
    salePrice: 4019.45,
    rto36: 186.09,
    rto48: 167.48,
    buildingType: "Lofted Barn",
    sidingColor: "Urethane Chestnut",
    condition: "New",
    image:
      "https://legacystructuresusa.com/wp-content/uploads/2025/07/IMG_0201-1753236247376-scaled.jpeg",
    designTemplate: "23",
  },
  {
    model: "Single Slope",
    slug: "single-slope",
    width: 10,
    length: 12,
    size: "10 x 12",
    wallsColor: "Urethane Driftwood",
    trimColor: "Black",
    roofColor: "Black - Metal",
    inventoryNumber: "WSS-70467-1012-072623-C",
    cashPrice: 4635.0,
    salePrice: 4403.0,
    rto36: 203.84,
    rto48: 183.46,
    buildingType: "Single Slope",
    sidingColor: "Urethane Driftwood",
    condition: "Used",
    image:
      "https://legacystructuresusa.com/wp-content/uploads/2025/03/IMG_8877-1741119643511-scaled.jpeg",
    designTemplate: "3",
  },
  {
    model: "Lofted Barn",
    slug: "lofted-barn-11",
    width: 10,
    length: 14,
    size: "10 x 14",
    wallsColor: "Urethane Driftwood",
    trimColor: "Navajo",
    roofColor: "Black - Metal",
    inventoryNumber: "WLB-72669-1012-042825-C",
    cashPrice: 4495.0,
    salePrice: null,
    rto36: 208.1,
    rto48: 187.29,
    buildingType: "Lofted Barn",
    sidingColor: "Urethane Driftwood",
    condition: "New",
    image:
      "https://legacystructuresusa.com/wp-content/uploads/2025/10/IMG_0359-1760801846846-scaled.jpeg",
    designTemplate: "23",
  },
  {
    model: "Utility Shed",
    slug: "utility-shed-8",
    width: 8,
    length: 16,
    size: "8 x 16",
    wallsColor: "Urethane Driftwood",
    trimColor: "Black",
    roofColor: "Black - Metal",
    inventoryNumber: "WSUT-72175-816-110824-C",
    cashPrice: 4585.0,
    salePrice: null,
    rto36: 212.27,
    rto48: 191.04,
    buildingType: "Utility Shed",
    sidingColor: "Urethane Driftwood",
    condition: "New",
    image:
      "https://legacystructuresusa.com/wp-content/uploads/2025/03/IMG_9653-1741118822925-scaled.jpeg",
    designTemplate: "25",
  },
  {
    model: "Lofted Barn",
    slug: "lofted-barn-6",
    width: 10,
    length: 14,
    size: "10 x 14",
    wallsColor: "Evergreen",
    trimColor: "Evergreen",
    roofColor: "Black - Metal",
    inventoryNumber: "PLB-86736-1014-050925-H",
    cashPrice: 4950.0,
    salePrice: null,
    rto36: 229.17,
    rto48: 206.25,
    buildingType: "Lofted Barn",
    sidingColor: "Evergreen",
    condition: "New",
    image:
      "https://legacystructuresusa.com/wp-content/uploads/2025/07/IMG_0123-1753211311664-scaled.jpeg",
    designTemplate: "23",
  },
];

/* ------------------------------------------------------------------ */
/*  Filter options                                                     */
/* ------------------------------------------------------------------ */

const WIDTH_OPTIONS = [8, 10, 12, 14];
const LENGTH_OPTIONS = [8, 12, 14, 16, 20, 24, 32, 40];
const BUILDING_TYPE_OPTIONS = [
  "Animal Shelter",
  "Chicken Coop",
  "Gable Dormer",
  "Lofted Barn",
  "Lofted Garage",
  "Lofted Playhouse Cabin",
  "Mini Barn",
  "Single Slope",
  "Utility Dormer",
  "Utility Garage",
  "Utility Playhouse Cabin",
  "Utility Shed",
];
const SIDING_COLOR_OPTIONS = [
  "Barn White",
  "Beige",
  "Black",
  "Buckskin",
  "Clay",
  "Evergreen",
  "Gap Gray",
  "Gibraltar",
  "Navajo",
  "Red",
  "Rosemary Green",
  "Urethane Cedar",
  "Urethane Chestnut",
  "Urethane Driftwood",
  "Urethane Mahogany",
];
const CONDITION_OPTIONS = ["New", "Used"];

/* ------------------------------------------------------------------ */
/*  Helpers                                                            */
/* ------------------------------------------------------------------ */

function formatCurrency(amount: number) {
  return amount.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  });
}

/* ------------------------------------------------------------------ */
/*  Red CTA Bar Component                                              */
/* ------------------------------------------------------------------ */

function PricingGuideCTA() {
  return (
    <div
      style={{
        background: "#b12029",
        padding: "20px 0",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "30px",
        flexWrap: "wrap",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "30px",
          maxWidth: "1150px",
          width: "100%",
          justifyContent: "center",
          padding: "0 20px",
          flexWrap: "wrap",
        }}
      >
        <img
          src="https://legacystructuresusa.com/wp-content/themes/barndealer/assets/images/pricing-guide-cta-img.png"
          alt="Pricing Guide"
          style={{ height: "80px", width: "auto" }}
        />
        <span
          style={{
            color: "white",
            fontSize: "24px",
            fontWeight: "bold",
            fontFamily: "Roboto, sans-serif",
          }}
        >
          Get Your Free Pricing Guide
        </span>
        <a
          href="#"
          style={{
            color: "#ffc800",
            fontSize: "22px",
            fontWeight: "bold",
            textDecoration: "none",
            fontFamily: "Roboto, sans-serif",
          }}
        >
          Click Here!
        </a>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Price Box Component                                                */
/* ------------------------------------------------------------------ */

function PriceBox({
  label,
  children,
}: {
  label: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div
      style={{
        border: "2px solid #af0019",
        display: "flex",
        flexDirection: "column",
        width: "auto",
        flex: 1,
        marginBottom: "15px",
      }}
    >
      <div
        style={{
          fontWeight: "bold",
          backgroundColor: "#af0019",
          color: "white",
          padding: "15px 10px",
          textAlign: "center",
          fontSize: "13px",
          lineHeight: "1.3",
        }}
      >
        {label}
      </div>
      <div
        style={{
          padding: "15px 10px",
          textAlign: "center",
          fontSize: "13px",
        }}
      >
        {children}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Inventory Item Component                                           */
/* ------------------------------------------------------------------ */

function InventoryItemRow({ item }: { item: InventoryItem }) {
  const hasSale = item.salePrice !== null;

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "60px 20px",
        borderTop: "2px solid #af0019",
        maxWidth: "1150px",
        margin: "auto",
      }}
    >
      {/* img-wrapper */}
      <div style={{ width: "30%" }}>
        <Link href={`/building/${item.slug}`}>
          <div
            style={{
              backgroundImage: `url('${item.image}')`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center center",
              backgroundSize: "contain",
              height: "250px",
            }}
          />
        </Link>
      </div>

      {/* info-wrapper */}
      <div style={{ width: "70%" }}>
        {/* text-pricing-group */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            paddingLeft: "20px",
            minHeight: "225px",
          }}
        >
          {/* text-info */}
          <div style={{ width: "50%" }}>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
                fontFamily: "Roboto, sans-serif",
                fontSize: "15px",
              }}
            >
              <li style={{ marginBottom: "10px", fontWeight: "bold" }}>
                <span
                  style={{
                    color: "#194b7d",
                    fontWeight: "bold",
                    minWidth: "75px",
                    display: "inline-block",
                  }}
                >
                  Model:
                </span>{" "}
                <Link
                  href={`/building/${item.slug}`}
                  style={{ color: "#000", textDecoration: "none" }}
                >
                  {item.model}
                </Link>
              </li>
              <li style={{ marginBottom: "10px", fontWeight: "bold" }}>
                <span
                  style={{
                    color: "#194b7d",
                    fontWeight: "bold",
                    minWidth: "75px",
                    display: "inline-block",
                  }}
                >
                  Size:
                </span>{" "}
                {item.size}
              </li>
              <li style={{ marginBottom: "10px", fontWeight: "bold" }}>
                <span
                  style={{
                    color: "#194b7d",
                    fontWeight: "bold",
                    minWidth: "75px",
                    display: "inline-block",
                  }}
                >
                  Walls:
                </span>{" "}
                {item.wallsColor}
              </li>
              <li style={{ marginBottom: "10px", fontWeight: "bold" }}>
                <span
                  style={{
                    color: "#194b7d",
                    fontWeight: "bold",
                    minWidth: "75px",
                    display: "inline-block",
                  }}
                >
                  Trim:
                </span>{" "}
                {item.trimColor}
              </li>
              <li style={{ marginBottom: "10px", fontWeight: "bold" }}>
                <span
                  style={{
                    color: "#194b7d",
                    fontWeight: "bold",
                    minWidth: "75px",
                    display: "inline-block",
                  }}
                >
                  Roof:
                </span>{" "}
                {item.roofColor}
              </li>
              <li
                style={{
                  marginBottom: "10px",
                  fontWeight: "bold",
                  color: "#af0019",
                }}
              >
                <span
                  style={{
                    color: "#194b7d",
                    fontWeight: "bold",
                    minWidth: "75px",
                    display: "inline-block",
                  }}
                >
                  Inv #:
                </span>{" "}
                {item.inventoryNumber}
              </li>
            </ul>
          </div>

          {/* price-info */}
          <div style={{ width: "44%" }}>
            {/* pricing-section - HORIZONTAL ROW */}
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                gap: "2%",
              }}
            >
              {/* Cash Price box */}
              {hasSale ? (
                <>
                  <PriceBox label={<>Cash<br />Price</>}>
                    <s>{formatCurrency(item.cashPrice)}</s>
                  </PriceBox>
                  <PriceBox label={<>Sale<br />Price</>}>
                    <strong style={{ color: "#e32323" }}>
                      {formatCurrency(item.salePrice!)} +tax
                    </strong>
                  </PriceBox>
                </>
              ) : (
                <PriceBox label={<>Cash<br />Price</>}>
                  <span>{formatCurrency(item.cashPrice)} +tax</span>
                </PriceBox>
              )}

              {/* 36 Mo RTO */}
              <PriceBox label={<>36 Mo.<br />RTO</>}>
                {formatCurrency(item.rto36)} +tax
              </PriceBox>

              {/* 48 Mo RTO */}
              <PriceBox label={<>48 Mo.<br />RTO</>}>
                {formatCurrency(item.rto48)} +tax
              </PriceBox>
            </div>

            {/* link-button */}
            <div
              style={{
                display: "flex",
                gap: "2%",
                justifyContent: "center",
                marginTop: "5px",
              }}
            >
              <a
                href={`https://orders.barnportal.com/myquote?dealerid=&dir=1&template=${item.designTemplate}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  background: "#00567a",
                  color: "#ffc800",
                  textDecoration: "none",
                  padding: "10px 20px",
                  borderRadius: "5px",
                  textAlign: "center",
                  textTransform: "uppercase",
                  fontWeight: "bold",
                  fontSize: "13px",
                  fontFamily: "Roboto, sans-serif",
                }}
              >
                Design Your Own!
              </a>
              <Link
                href={`/building/${item.slug}`}
                style={{
                  background: "#00567a",
                  color: "#ffc800",
                  textDecoration: "none",
                  padding: "10px 20px",
                  borderRadius: "5px",
                  textAlign: "center",
                  textTransform: "uppercase",
                  fontWeight: "bold",
                  fontSize: "13px",
                  fontFamily: "Roboto, sans-serif",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                Want This Building?
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Main Page Component                                                */
/* ------------------------------------------------------------------ */

export default function InventoryPage() {
  const [filterWidth, setFilterWidth] = useState<number | null>(null);
  const [filterLength, setFilterLength] = useState<number | null>(null);
  const [filterType, setFilterType] = useState<string>("");
  const [filterColor, setFilterColor] = useState<string>("");
  const [filterCondition, setFilterCondition] = useState<string>("");
  const [sortBy, setSortBy] = useState<string>("ASC");
  const [filtersOpen, setFiltersOpen] = useState(false);

  const filtered = useMemo(() => {
    let result = [...inventoryItems];

    if (filterWidth) result = result.filter((i) => i.width === filterWidth);
    if (filterLength) result = result.filter((i) => i.length === filterLength);
    if (filterType) result = result.filter((i) => i.buildingType === filterType);
    if (filterColor) result = result.filter((i) => i.sidingColor === filterColor);
    if (filterCondition)
      result = result.filter((i) => i.condition === filterCondition);

    result.sort((a, b) => {
      const priceA = a.salePrice ?? a.cashPrice;
      const priceB = b.salePrice ?? b.cashPrice;
      return sortBy === "DESC" ? priceB - priceA : priceA - priceB;
    });

    return result;
  }, [filterWidth, filterLength, filterType, filterColor, filterCondition, sortBy]);

  function clearFilters() {
    setFilterWidth(null);
    setFilterLength(null);
    setFilterType("");
    setFilterColor("");
    setFilterCondition("");
    setSortBy("ASC");
  }

  return (
    <div style={{ background: "#fff", minHeight: "100vh" }}>
      {/* wrapper blue-top */}
      <div style={{ borderTop: "5px solid #00567a" }}>
        {/* Page Heading */}
        <h1
          style={{
            textAlign: "center",
            color: "#00567a",
            fontFamily: "'Tungsten Semibold', 'Oswald', sans-serif",
            fontSize: "50px",
            fontWeight: 600,
            margin: "30px auto 20px",
            padding: "0 20px",
            lineHeight: 1.1,
          }}
        >
          Current Storage Buildings for Sale in Hudson Falls
        </h1>

        {/* Filter Toggle */}
        <div style={{ maxWidth: "1150px", margin: "0 auto", padding: "0 20px" }}>
          <button
            onClick={() => setFiltersOpen(!filtersOpen)}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              background: "#fff",
              border: "1px solid #ccc",
              borderRadius: "4px",
              padding: "8px 15px",
              fontSize: "16px",
              fontWeight: "bold",
              cursor: "pointer",
              marginBottom: "10px",
              fontFamily: "Roboto, sans-serif",
            }}
          >
            <span>Filters</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
            >
              <circle cx="4" cy="6" r="2" />
              <rect x="8" y="5" width="12" height="2" rx="1" />
              <circle cx="4" cy="12" r="2" />
              <rect x="8" y="11" width="12" height="2" rx="1" />
              <circle cx="4" cy="18" r="2" />
              <rect x="8" y="17" width="12" height="2" rx="1" />
            </svg>
          </button>

          {/* Filter Panel */}
          {filtersOpen && (
            <div
              style={{
                background: "#fff",
                border: "1px solid #ccc",
                borderRadius: "4px",
                padding: "20px",
                marginBottom: "20px",
                display: "flex",
                flexWrap: "wrap",
                gap: "15px",
                alignItems: "flex-end",
                fontFamily: "Roboto, sans-serif",
              }}
            >
              {/* Width */}
              <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                <strong style={{ fontSize: "14px" }}>Width</strong>
                <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                  {WIDTH_OPTIONS.map((w) => (
                    <label
                      key={w}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "6px",
                        fontSize: "14px",
                        cursor: "pointer",
                      }}
                    >
                      <input
                        type="checkbox"
                        checked={filterWidth === w}
                        onChange={() => setFilterWidth(filterWidth === w ? null : w)}
                      />
                      {w}
                    </label>
                  ))}
                </div>
              </div>

              {/* Length */}
              <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                <strong style={{ fontSize: "14px" }}>Length</strong>
                <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                  {LENGTH_OPTIONS.map((l) => (
                    <label
                      key={l}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "6px",
                        fontSize: "14px",
                        cursor: "pointer",
                      }}
                    >
                      <input
                        type="checkbox"
                        checked={filterLength === l}
                        onChange={() =>
                          setFilterLength(filterLength === l ? null : l)
                        }
                      />
                      {l}
                    </label>
                  ))}
                </div>
              </div>

              {/* Building Type */}
              <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                <strong style={{ fontSize: "14px" }}>Building Type</strong>
                <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                  {BUILDING_TYPE_OPTIONS.map((t) => (
                    <label
                      key={t}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "6px",
                        fontSize: "14px",
                        cursor: "pointer",
                      }}
                    >
                      <input
                        type="checkbox"
                        checked={filterType === t}
                        onChange={() => setFilterType(filterType === t ? "" : t)}
                      />
                      {t}
                    </label>
                  ))}
                </div>
              </div>

              {/* Siding Color */}
              <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                <strong style={{ fontSize: "14px" }}>Siding Color</strong>
                <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                  {SIDING_COLOR_OPTIONS.map((c) => (
                    <label
                      key={c}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "6px",
                        fontSize: "14px",
                        cursor: "pointer",
                      }}
                    >
                      <input
                        type="checkbox"
                        checked={filterColor === c}
                        onChange={() =>
                          setFilterColor(filterColor === c ? "" : c)
                        }
                      />
                      {c}
                    </label>
                  ))}
                </div>
              </div>

              {/* Condition */}
              <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                <strong style={{ fontSize: "14px" }}>Condition</strong>
                <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                  {CONDITION_OPTIONS.map((c) => (
                    <label
                      key={c}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "6px",
                        fontSize: "14px",
                        cursor: "pointer",
                      }}
                    >
                      <input
                        type="checkbox"
                        checked={filterCondition === c}
                        onChange={() =>
                          setFilterCondition(filterCondition === c ? "" : c)
                        }
                      />
                      {c}
                    </label>
                  ))}
                </div>
              </div>

              {/* Sort By Price */}
              <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                <strong style={{ fontSize: "14px" }}>Sort By Price</strong>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  style={{
                    border: "1px solid #ccc",
                    borderRadius: "4px",
                    padding: "5px 15px",
                    fontSize: "14px",
                  }}
                >
                  <option value="ASC">Low to High</option>
                  <option value="DESC">High to Low</option>
                </select>
              </div>

              {/* Buttons */}
              <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                <button
                  onClick={() => setFiltersOpen(false)}
                  style={{
                    background: "#00567a",
                    color: "#fff",
                    fontWeight: "bold",
                    padding: "8px 20px",
                    borderRadius: "4px",
                    fontSize: "14px",
                    cursor: "pointer",
                    border: "none",
                  }}
                >
                  Apply Filters
                </button>
                <button
                  onClick={clearFilters}
                  style={{
                    color: "#00567a",
                    fontSize: "14px",
                    cursor: "pointer",
                    textDecoration: "underline",
                    background: "transparent",
                    border: "none",
                  }}
                >
                  Clear Filters
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Inventory Items */}
        {filtered.length === 0 ? (
          <div
            style={{
              padding: "60px 20px",
              textAlign: "center",
              maxWidth: "1150px",
              margin: "auto",
            }}
          >
            <p
              style={{
                fontSize: "18px",
                color: "#888",
                fontFamily: "Roboto, sans-serif",
              }}
            >
              No buildings match your current filters.
            </p>
            <button
              onClick={clearFilters}
              style={{
                color: "#00567a",
                textDecoration: "underline",
                marginTop: "10px",
                background: "transparent",
                border: "none",
                cursor: "pointer",
                fontSize: "16px",
              }}
            >
              Clear all filters
            </button>
          </div>
        ) : (
          <>
            {filtered.map((item, index) => (
              <div key={item.inventoryNumber}>
                <InventoryItemRow item={item} />
                {/* Red CTA bar after every 5 items */}
                {(index + 1) % 5 === 0 && index < filtered.length - 1 && (
                  <PricingGuideCTA />
                )}
              </div>
            ))}
          </>
        )}

        {/* Pagination */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "8px",
            padding: "40px 20px",
            fontFamily: "Roboto, sans-serif",
            fontSize: "16px",
          }}
        >
          <span
            style={{
              padding: "8px 14px",
              background: "#00567a",
              color: "#fff",
              borderRadius: "3px",
              fontWeight: "bold",
            }}
          >
            1
          </span>
          <a
            href="#"
            style={{
              padding: "8px 14px",
              color: "#00567a",
              textDecoration: "none",
              borderRadius: "3px",
            }}
          >
            2
          </a>
          <a
            href="#"
            style={{
              padding: "8px 14px",
              color: "#00567a",
              textDecoration: "none",
              borderRadius: "3px",
            }}
          >
            3
          </a>
          <a
            href="#"
            style={{
              padding: "8px 14px",
              color: "#00567a",
              textDecoration: "none",
              borderRadius: "3px",
            }}
          >
            4
          </a>
          <a
            href="#"
            style={{
              padding: "8px 14px",
              color: "#00567a",
              textDecoration: "none",
              borderRadius: "3px",
            }}
          >
            Next &gt;
          </a>
        </div>
      </div>
    </div>
  );
}
