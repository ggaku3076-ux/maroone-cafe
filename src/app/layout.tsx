import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AIChatbot from "@/components/AIChatbot";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-didot",
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "500"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://maroone.web.id"),
  title: "Maroone' Caffe & Food F&B | Kafe Espresso Based & Tempat Nongkrong Surabaya",
  description: "Maroone' Caffe & Food F&B Surabaya menyajikan pilihan kopi Espresso Based terbaik (biji Arabika & Robusta), sajian kuliner istimewa, serta ruang kerja & acara yang hangat bernuansa Maroon. Kunjungi maroone.web.id.",
  keywords: [
    "Maroone Caffe", 
    "Maroone Food F&B", 
    "Maroone Surabaya", 
    "Kafe Espresso Based Surabaya", 
    "Coffee Shop Surabaya", 
    "Kopi Arabika Robusta Surabaya", 
    "Tempat Nongkrong Surabaya", 
    "Kafe Aesthetic Surabaya",
    "Reservasi Kafe Surabaya"
  ],
  authors: [{ name: "Maroone' Caffe Team" }],
  openGraph: {
    title: "Maroone' Caffe & Food F&B | Kafe Espresso Based Surabaya",
    description: "Nikmati sajian Espresso Based autentik (Arabika & Robusta) serta hidangan kuliner favorit di Maroone' Caffe & Food F&B Surabaya.",
    url: "https://maroone.web.id",
    siteName: "Maroone' Caffe & Food F&B",
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: "/Asset/LOGO.png",
        width: 800,
        height: 800,
        alt: "Maroone Caffe Logo",
      }
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // JSON-LD Structured Data for Cafe / Restaurant SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CafeOrCoffeeShop",
    "name": "Maroone' Caffe & Food F&B",
    "image": "https://maroone.web.id/Asset/LOGO.png",
    "url": "https://maroone.web.id",
    "telephone": "+6282231144930",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Surabaya",
      "addressRegion": "Jawa Timur",
      "addressCountry": "ID"
    },
    "servesCuisine": ["Coffee", "Espresso", "Indonesian F&B", "Western F&B"],
    "priceRange": "$$",
    "openingHours": "Mo-Su 07:00-22:00"
  };

  return (
    <html
      lang="id"
      className={`${inter.variable} ${playfairDisplay.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#3b040b] text-white selection:bg-[#5b0612] selection:text-white">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <AIChatbot />
      </body>
    </html>
  );
}
