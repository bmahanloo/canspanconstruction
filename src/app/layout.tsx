import type { Metadata } from "next";
import "./globals.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "yet-another-react-lightbox/styles.css";

import { Inter } from "next/font/google";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Canspan Construction",
  applicationName: "Canspan Construction",

  description:
    "Canspan Construction INC., based in North Vancouver, Canada, is your premier construction company. With decades of experience, we specialize in extensions, renovations, suites, and laneway homes. Got a project? Just ask—we're here to help!",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://canspanconstruction.com",
    siteName: "Canspan Contruction INC.",
    countryName: "Canada",
    images: [
      {
        url: "/images/hbm-cover.png",
        width: 800,
        height: 600,
        alt: "Canspan Construction",
      },
    ],
    description:
      "Canspan Construction INC., based in North Vancouver, Canada, is your premier construction company. With decades of experience, we specialize in extensions, renovations, suites, and laneway homes. Got a project? Just ask—we're here to help!",
    emails: ["info@canspanconstruction.com"],
    phoneNumbers: ["(604) 985-8700"],
  },
  keywords: ["construction", "restoration", "remodeling"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-base`}>
        <Navbar />

        {children}
        <Footer />
      </body>
    </html>
  );
}
