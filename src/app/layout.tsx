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
  title: "Contractor Website Refreshes in the DMV | Built by Vinh",
  description:
    "Built by Vinh refreshes contractor and home-service websites for DMV businesses that need more calls, quote requests, and clearer local SEO foundations.",
  metadataBase: new URL("https://www.builtbyvinh.com"),
  alternates: {
    canonical: "https://www.builtbyvinh.com",
  },
  openGraph: {
    title: "Built by Vinh — Contractor Website Refreshes",
    description: "Website refreshes for DMV contractors and home-service businesses that need more calls and quote requests.",
    url: "https://www.builtbyvinh.com",
    siteName: "Built by Vinh",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Built by Vinh — contractor website refreshes for more calls and quote requests.",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Built by Vinh — Contractor Website Refreshes",
    description: "Website refreshes for DMV contractors and home-service businesses that need more calls and quote requests.",
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
      <body>
        <a className="skipLink" href="#main-content">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
