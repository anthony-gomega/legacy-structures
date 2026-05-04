import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rent to Own Sheds, Barns & Garages | No Credit Check | Hudson Falls, NY",
  description:
    "Rent-to-own sheds, barns, garages, and cabins in Hudson Falls, NY. No credit check required, instant approval, month-to-month agreement. Buildings as low as $103/mo.",
  openGraph: {
    title: "Rent to Own Storage Sheds | No Credit Check | Legacy Structures",
    description:
      "No credit check, instant approval, month-to-month terms. Own your building with low monthly payments. Serving Hudson Falls, NY and surrounding areas.",
    type: "website",
  },
};

export default function RentToOwnLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
