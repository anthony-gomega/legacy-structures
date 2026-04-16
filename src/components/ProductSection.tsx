import Image from "next/image";

interface SizeGroup {
  label: string;
  sizes: string[];
}

interface ProductSectionProps {
  title: string;
  description: string;
  imageSrc?: string;
  image?: string;
  imageAlt: string;
  sizes?: Record<string, string[]>;
  sizeGroups?: SizeGroup[];
}

export default function ProductSection({
  title,
  description,
  imageSrc,
  image,
  imageAlt,
  sizes,
  sizeGroups,
}: ProductSectionProps) {
  // Support both prop shapes: Record-based `sizes` and array-based `sizeGroups`
  const resolvedSizeEntries: [string, string[]][] = sizes
    ? Object.entries(sizes)
    : sizeGroups
      ? sizeGroups.map((g) => [g.label, g.sizes])
      : [];

  const resolvedImage = imageSrc || image || "";

  return (
    <div className="border-b-[3px] border-[#00465e] pb-[40px] mb-[40px]">
      <div className="flex flex-col md:flex-row gap-[30px]">
        {/* Image on left */}
        <div className="w-full md:max-w-[30%] shrink-0">
          <Image
            src={resolvedImage}
            alt={imageAlt}
            width={400}
            height={300}
            className="w-full h-auto"
          />
        </div>

        {/* Text on right */}
        <div className="flex-1">
          <h2 className="text-heading-blue font-bold text-[50px] font-heading tracking-[1.5px] pb-[15px]">
            {title}
          </h2>
          <p>{description}</p>

          <h3 className="text-heading-blue font-bold text-[24px] mt-[10px] mb-[10px]">
            AVAILABLE SIZES
          </h3>

          {/* Size columns */}
          <div className="flex flex-wrap justify-between gap-[10px]">
            {resolvedSizeEntries.map(([label, sizeList]) => (
              <div key={label} className="min-w-[120px]">
                <h4 className="font-bold text-heading-blue mb-[5px]">{label}</h4>
                <ul className="list-none p-0 m-0">
                  {sizeList.map((size) => (
                    <li key={size} className="leading-[28px]">{size}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
