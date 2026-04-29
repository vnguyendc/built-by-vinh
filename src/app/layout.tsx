import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Built by Vinh — Websites That Help Local Businesses Get More Calls",
  description:
    "Built by Vinh creates sharper websites, conversion pages, and practical AI workflows for local service businesses that depend on calls and quote requests.",
  metadataBase: new URL("https://www.builtbyvinh.com"),
  alternates: {
    canonical: "https://www.builtbyvinh.com",
  },
  openGraph: {
    title: "Built by Vinh",
    description: "Websites that help local service businesses get more calls and quote requests.",
    url: "https://www.builtbyvinh.com",
    siteName: "Built by Vinh",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Built by Vinh — websites that help local businesses get more calls.",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Built by Vinh",
    description: "Websites that help local service businesses get more calls and quote requests.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
