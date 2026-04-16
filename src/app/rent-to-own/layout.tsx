import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rent to Own Storage Sheds | Legacy Structures",
};

export default function RentToOwnLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
