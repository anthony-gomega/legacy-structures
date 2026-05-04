import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Storage Buildings for Sale | Current Inventory | Legacy Structures Hudson Falls",
  description:
    "Browse in-stock storage sheds, lofted barns, utility sheds, portable garages, cabins, and more at Legacy Structures in Hudson Falls, NY. Cash price and rent-to-own options listed.",
  openGraph: {
    title: "Building Inventory | Legacy Structures",
    description:
      "Our sales lot in Hudson Falls, NY has a wide variety of buildings and sheds for sale, including lofted barns, utility sheds, and more.",
    type: "website",
  },
};

export default function InventoryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
