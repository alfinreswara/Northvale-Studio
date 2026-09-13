import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Northvale Studio — Architecture & Interior Design",
  description:
    "Northvale Studio creates thoughtful architecture and interior spaces shaped by light, material, and modern living.",
  openGraph: {
    title: "Northvale Studio — Architecture & Interior Design",
    description:
      "Northvale Studio creates thoughtful architecture and interior spaces shaped by light, material, and modern living.",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Northvale Studio — Architecture & Interior Design",
    description:
      "Thoughtful architecture and interior spaces shaped by light, material, and modern living.",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
