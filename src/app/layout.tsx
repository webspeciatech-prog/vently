import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Vently Air | Professional Air Duct Cleaning & Indoor Air Quality",
  description:
    "Certified air duct cleaning, dryer vent cleaning, chimney cleaning, and indoor air quality services. Same-day appointments available. Serving US homeowners. Call now for a free inspection!",
  keywords:
    "air duct cleaning, dryer vent cleaning, chimney cleaning, furnace cleaning, air quality testing, UV light installation, indoor air quality, HVAC cleaning",
  openGraph: {
    title: "Vently Air | Breathe Cleaner, Healthier Air Today",
    description:
      "Professional air duct and indoor air quality services. Licensed & insured. 10+ years experience. Same-day service available.",
    type: "website",
  },
};

const schemaMarkup = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Vently Air",
  description: "Professional air duct cleaning, dryer vent cleaning, chimney cleaning, furnace cleaning, and indoor air quality services.",
  telephone: "+1-800-VENTLY-1",
  address: { "@type": "PostalAddress", addressCountry: "US" },
  openingHours: "Mo-Su 07:00-20:00",
  priceRange: "$$",
  aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "1247" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
        />
      </head>
      <body className="font-sans antialiased">
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
