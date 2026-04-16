import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Building Inventory | Legacy Structures",
};

export default function InventoryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
