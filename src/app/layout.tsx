import type { Metadata, Viewport } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AIChatbot from "@/components/AIChatbot";
import GSAPProvider from "@/components/GSAPProvider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
});

const playfairDisplay = Playfair_Display({
  variable: "--font-didot",
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "500"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://maroone.web.id"),
  title: "Maroone' Caffe & Food F&B | Kafe Espresso Based & Tempat Nongkrong Jombang",
  description: "Maroone' Caffe & Food F&B Jombang menyajikan pilihan kopi Espresso Based terbaik (biji Arabika & Robusta), sajian kuliner istimewa, serta ruang kerja & acara yang hangat bernuansa Maroon. Kunjungi maroone.web.id.",
  keywords: [
    "Maroone Caffe", 
    "Maroone Food F&B", 
    "Maroone Jombang", 
    "Kafe Espresso Based Jombang", 
    "Coffee Shop Jombang", 
    "Kopi Arabika Robusta Jombang", 
    "Tempat Nongkrong Jombang", 
    "Kafe Aesthetic Jombang",
    "Reservasi Kafe Jombang"
  ],
  icons: {
    icon: [
      { url: "/icon.png?v=999", type: "image/png" },
      { url: "/favicon.ico?v=999" }
    ],
    shortcut: "/icon.png?v=999",
    apple: "/icon.png?v=999",
  },
  authors: [{ name: "Maroone' Caffe Team" }],
  openGraph: {
    title: "Maroone' Caffe & Food F&B | Kafe Espresso Based Jombang",
    description: "Nikmati sajian Espresso Based autentik (Arabika & Robusta) serta hidangan kuliner favorit di Maroone' Caffe & Food F&B Jombang.",
    url: "https://maroone.web.id",
    siteName: "Maroone' Caffe & Food F&B",
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: "/icon.png?v=999",
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
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CafeOrCoffeeShop",
    "name": "Maroone' Caffe & Food F&B",
    "image": "https://maroone.web.id/icon.png",
    "url": "https://maroone.web.id",
    "telephone": "+628819636431",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Jl. Kertajaya, Kepanjen, Kec. Jombang",
      "addressLocality": "Jombang",
      "addressRegion": "Jawa Timur",
      "postalCode": "61411",
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
        <link rel="icon" type="image/png" href="/icon.png?v=999" />
        <link rel="shortcut icon" href="/icon.png?v=999" />
        <link rel="apple-touch-icon" href="/icon.png?v=999" />

        {/* Preload All Ultra-Fast WebP Assets for 0ms Instant Page Render */}
        <link rel="preload" href="/Asset/logo.webp" as="image" type="image/webp" />
        <link rel="preload" href="/Asset/hero_bg.webp" as="image" type="image/webp" />
        <link rel="preload" href="/Asset/menu_bg.webp" as="image" type="image/webp" />
        <link rel="preload" href="/Asset/menu/americano.webp" as="image" type="image/webp" />
        <link rel="preload" href="/Asset/menu/americano_lemonade.webp" as="image" type="image/webp" />
        <link rel="preload" href="/Asset/menu/cappuccino.webp" as="image" type="image/webp" />
        <link rel="preload" href="/Asset/menu/caffe_latte.webp" as="image" type="image/webp" />
        <link rel="preload" href="/Asset/menu/magic.webp" as="image" type="image/webp" />
        <link rel="preload" href="/Asset/menu/moccacino_latte.webp" as="image" type="image/webp" />
        <link rel="preload" href="/Asset/menu/ice_cube.webp" as="image" type="image/webp" />

        {/* Gallery Image Preloads */}
        <link rel="preload" href="/Asset/gallery/gallery1.webp" as="image" type="image/webp" />
        <link rel="preload" href="/Asset/gallery/gallery2.webp" as="image" type="image/webp" />
        <link rel="preload" href="/Asset/gallery/gallery3.webp" as="image" type="image/webp" />
        <link rel="preload" href="/Asset/gallery/gallery4.webp" as="image" type="image/webp" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#3b040b] text-white selection:bg-[#5b0612] selection:text-white m-0 p-0">
        <GSAPProvider>
          <Navbar />
          <main className="flex-grow bg-[#3b040b]">{children}</main>
          <Footer />
          <AIChatbot />
        </GSAPProvider>
      </body>
    </html>
  );
}
