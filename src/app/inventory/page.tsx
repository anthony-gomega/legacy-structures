"use client";

import { useState, useMemo } from "react";
import Link from "next/link";

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
    rto48: 123.50,
    buildingType: "Chicken Coop",
    sidingColor: "Navajo",
    condition: "New",
    image: "https://legacystructuresusa.com/wp-content/uploads/2025/07/IMG_0156-1753236054332-scaled.jpeg",
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
    image: "https://legacystructuresusa.com/wp-content/uploads/2025/10/IMG_0353-1760801572551-scaled.jpeg",
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
    image: "https://legacystructuresusa.com/wp-content/uploads/2026/03/IMG_3336-1773796375925-scaled.jpeg",
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
    image: "https://legacystructuresusa.com/wp-content/uploads/2026/03/IMG_3330-1773795752495-scaled.jpeg",
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
    image: "https://legacystructuresusa.com/wp-content/uploads/2025/07/IMG_0201-1753236247376-scaled.jpeg",
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
    image: "https://legacystructuresusa.com/wp-content/uploads/2025/03/IMG_8877-1741119643511-scaled.jpeg",
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
    rto36: 208.10,
    rto48: 187.29,
    buildingType: "Lofted Barn",
    sidingColor: "Urethane Driftwood",
    condition: "New",
    image: "https://legacystructuresusa.com/wp-content/uploads/2025/10/IMG_0359-1760801846846-scaled.jpeg",
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
    image: "https://legacystructuresusa.com/wp-content/uploads/2025/03/IMG_9653-1741118822925-scaled.jpeg",
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
    image: "https://legacystructuresusa.com/wp-content/uploads/2025/07/IMG_0123-1753211311664-scaled.jpeg",
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
/*  Component                                                          */
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
    if (filterCondition) result = result.filter((i) => i.condition === filterCondition);

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
    <div className="wrapper" style={{ padding: 0 }}>
      {/* Page Header */}
      <div className="border-t-[5px] border-[#00567a]">
        <div className="max-w-[1100px] mx-auto px-[20px] py-[10px]">
          <h1>Current Storage Buildings for Sale in Hudson Falls</h1>
        </div>
      </div>

      {/* Filter Toggle */}
      <div className="max-w-[1100px] mx-auto px-[20px]">
        <button
          id="toggle-filters"
          onClick={() => setFiltersOpen(!filtersOpen)}
          className="flex items-center gap-[8px] bg-white border border-[#ccc] rounded px-[15px] py-[8px] text-[16px] font-bold cursor-pointer mb-[10px]"
        >
          <span>Filters</span>
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor">
              <circle cx="4" cy="6" r="2" />
              <rect x="8" y="5" width="12" height="2" rx="1" />
              <circle cx="4" cy="12" r="2" />
              <rect x="8" y="11" width="12" height="2" rx="1" />
              <circle cx="4" cy="18" r="2" />
              <rect x="8" y="17" width="12" height="2" rx="1" />
            </svg>
          </span>
        </button>

        {/* Filter Panel */}
        {filtersOpen && (
          <div className="bg-white border border-[#ccc] rounded p-[20px] mb-[20px] flex flex-wrap gap-[15px] items-end">
            {/* Width */}
            <div className="flex flex-col gap-[4px]">
              <strong className="text-[14px]">Width</strong>
              <div className="flex flex-col gap-[2px]">
                {WIDTH_OPTIONS.map((w) => (
                  <label key={w} className="flex items-center gap-[6px] text-[14px] cursor-pointer">
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
            <div className="flex flex-col gap-[4px]">
              <strong className="text-[14px]">Length</strong>
              <div className="flex flex-col gap-[2px]">
                {LENGTH_OPTIONS.map((l) => (
                  <label key={l} className="flex items-center gap-[6px] text-[14px] cursor-pointer">
                    <input
                      type="checkbox"
                      checked={filterLength === l}
                      onChange={() => setFilterLength(filterLength === l ? null : l)}
                    />
                    {l}
                  </label>
                ))}
              </div>
            </div>

            {/* Building Type */}
            <div className="flex flex-col gap-[4px]">
              <strong className="text-[14px]">Building Type</strong>
              <div className="flex flex-col gap-[2px]">
                {BUILDING_TYPE_OPTIONS.map((t) => (
                  <label key={t} className="flex items-center gap-[6px] text-[14px] cursor-pointer">
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
            <div className="flex flex-col gap-[4px]">
              <strong className="text-[14px]">Siding Color</strong>
              <div className="flex flex-col gap-[2px]">
                {SIDING_COLOR_OPTIONS.map((c) => (
                  <label key={c} className="flex items-center gap-[6px] text-[14px] cursor-pointer">
                    <input
                      type="checkbox"
                      checked={filterColor === c}
                      onChange={() => setFilterColor(filterColor === c ? "" : c)}
                    />
                    {c}
                  </label>
                ))}
              </div>
            </div>

            {/* Condition */}
            <div className="flex flex-col gap-[4px]">
              <strong className="text-[14px]">Condition</strong>
              <div className="flex flex-col gap-[2px]">
                {CONDITION_OPTIONS.map((c) => (
                  <label key={c} className="flex items-center gap-[6px] text-[14px] cursor-pointer">
                    <input
                      type="checkbox"
                      checked={filterCondition === c}
                      onChange={() => setFilterCondition(filterCondition === c ? "" : c)}
                    />
                    {c}
                  </label>
                ))}
              </div>
            </div>

            {/* Sort By Price */}
            <div className="flex flex-col gap-[4px]">
              <strong className="text-[14px]">Sort By Price</strong>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="border border-[#ccc] rounded px-[15px] py-[5px] text-[14px]"
              >
                <option value="ASC">Low to High</option>
                <option value="DESC">High to Low</option>
              </select>
            </div>

            {/* Buttons */}
            <div className="flex gap-[10px] items-center">
              <button
                onClick={() => setFiltersOpen(false)}
                className="bg-[#00567a] text-white font-bold px-[20px] py-[8px] rounded text-[14px] cursor-pointer"
              >
                Apply Filters
              </button>
              <button
                onClick={clearFilters}
                className="text-[#00567a] text-[14px] cursor-pointer underline bg-transparent border-none"
              >
                Clear Filters
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Inventory Items */}
      <div className="max-w-[1100px] mx-auto px-[20px]" style={{ padding: 0 }}>
        <div className="inv-wrapper">
          {filtered.length === 0 ? (
            <div className="py-[60px] px-[20px] text-center">
              <p className="text-[18px] text-gray-500">No buildings match your current filters.</p>
              <button onClick={clearFilters} className="text-[#00567a] underline mt-[10px] bg-transparent border-none cursor-pointer">
                Clear all filters
              </button>
            </div>
          ) : (
            filtered.map((item) => (
              <div
                key={item.inventoryNumber}
                className="flex flex-col md:flex-row justify-between py-[60px] px-[20px] border-t-[2px] border-[#af0019]"
              >
                {/* Image */}
                <div className="w-full md:w-[30%] mb-[20px] md:mb-0">
                  <Link href={`/building/${item.slug}`}>
                    <div
                      className="h-[250px] bg-no-repeat bg-center"
                      style={{
                        backgroundImage: `url('${item.image}')`,
                        backgroundSize: "contain",
                      }}
                    />
                  </Link>
                </div>

                {/* Info */}
                <div className="w-full md:w-[70%]">
                  <div className="flex flex-col md:flex-row justify-between items-start pl-0 md:pl-[20px] min-h-[225px]">
                    {/* Text Info */}
                    <div className="w-full md:w-[50%]">
                      <ul className="list-none p-0 m-0 text-[16px] leading-[28px]">
                        <li>
                          <span className="text-[#194b7d] font-bold inline-block min-w-[75px]">Model:</span>{" "}
                          <Link href={`/building/${item.slug}`} className="no-underline">
                            {item.model}
                          </Link>
                        </li>
                        <li>
                          <span className="text-[#194b7d] font-bold inline-block min-w-[75px]">Size:</span>{" "}
                          {item.size}
                        </li>
                        <li>
                          <span className="text-[#194b7d] font-bold inline-block min-w-[75px]">Walls:</span>{" "}
                          {item.wallsColor}
                        </li>
                        <li>
                          <span className="text-[#194b7d] font-bold inline-block min-w-[75px]">Trim:</span>{" "}
                          {item.trimColor}
                        </li>
                        <li>
                          <span className="text-[#194b7d] font-bold inline-block min-w-[75px]">Roof:</span>{" "}
                          {item.roofColor}
                        </li>
                        <li className="text-[#af0019]">
                          <span className="text-[#194b7d] font-bold inline-block min-w-[75px]">Inv #:</span>{" "}
                          {item.inventoryNumber}
                        </li>
                      </ul>
                    </div>

                    {/* Price Info */}
                    <div className="w-full md:w-[44%] flex flex-col items-center mt-[15px] md:mt-0">
                      <div className="flex flex-col w-full">
                        {/* Cash Price */}
                        <div className="border-[2px] border-[#af0019] flex flex-col w-full mb-[15px]">
                          <div className="font-bold bg-[#af0019] text-white py-[15px] px-[10px] w-full text-center">
                            Cash<br />Price
                          </div>
                          <div className="py-[15px] px-[10px] text-center">
                            {item.salePrice ? (
                              <s>{formatCurrency(item.cashPrice)}</s>
                            ) : (
                              <span>{formatCurrency(item.cashPrice)} +tax</span>
                            )}
                          </div>
                        </div>

                        {/* Sale Price (if applicable) */}
                        {item.salePrice && (
                          <div className="border-[2px] border-[#af0019] flex flex-col w-full mb-[15px]">
                            <div className="font-bold bg-[#af0019] text-white py-[15px] px-[10px] w-full text-center">
                              Sale<br />Price
                            </div>
                            <div className="py-[15px] px-[10px] text-center">
                              <strong className="text-[#e32323]">
                                {formatCurrency(item.salePrice)} +tax
                              </strong>
                            </div>
                          </div>
                        )}

                        {/* 36 Mo RTO */}
                        <div className="border-[2px] border-[#af0019] flex flex-col w-full mb-[15px]">
                          <div className="font-bold bg-[#af0019] text-white py-[15px] px-[10px] w-full text-center">
                            36 Mo.<br /> RTO
                          </div>
                          <div className="py-[15px] px-[10px] text-center">
                            {formatCurrency(item.rto36)} +tax
                          </div>
                        </div>

                        {/* 48 Mo RTO */}
                        <div className="border-[2px] border-[#af0019] flex flex-col w-full mb-[15px]">
                          <div className="font-bold bg-[#af0019] text-white py-[15px] px-[10px] w-full text-center">
                            48 Mo. RTO
                          </div>
                          <div className="py-[15px] px-[10px] text-center">
                            {formatCurrency(item.rto48)} +tax
                          </div>
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex w-[100%] md:w-[70%] ml-auto gap-[2%] justify-center">
                        <a
                          href={`https://orders.barnportal.com/myquote?dealerid=&dir=1&template=${item.designTemplate}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-[#00567a] text-[#ffc800] no-underline py-[10px] px-[20px] rounded-md uppercase w-full text-center font-bold text-[14px] leading-[18px]"
                        >
                          Design<br />Your Own!
                        </a>
                        <Link
                          href={`/building/${item.slug}`}
                          className="bg-[#00567a] text-[#ffc800] no-underline py-[10px] px-[20px] rounded-md uppercase w-full text-center font-bold text-[14px] leading-[18px] flex items-center justify-center"
                        >
                          Want This Building?
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
