import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AIChatbot from "@/components/AIChatbot";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-didot",
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "600", "700", "800", "900"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://maroone.web.id"),
  title: "Maroone' Caffe & Food | Premium F&B Experience",
  description: "Nikmati pengalaman sajian kopi espresso based terbaik, pilihan biji Arabika & Robusta, serta kelezatan hidangan F&B dalam suasana Maroon yang elegan di Maroone' Caffe.",
  keywords: [
    "Maroone Caffe", 
    "Maroone Food", 
    "Espresso Based Surabaya", 
    "Arabika Robusta Surabaya", 
    "Cafe Maroon", 
    "Resto Surabaya", 
    "Cafe Aesthetic"
  ],
  authors: [{ name: "Maroone' Caffe Team" }],
  openGraph: {
    title: "Maroone' Caffe & Food | Premium F&B Experience",
    description: "Sajian Espresso Based premium dan hidangan F&B berkualitas di Maroone' Caffe & Food.",
    url: "https://maroone.web.id",
    siteName: "Maroone' Caffe & Food",
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: "/Asset/LOGO.png",
        width: 800,
        height: 800,
        alt: "Maroone' Caffe Logo",
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
  return (
    <html
      lang="id"
      className={`${plusJakartaSans.variable} ${playfairDisplay.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-brand-light text-brand-dark selection:bg-brand-maroon selection:text-white">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <AIChatbot />
      </body>
    </html>
  );
}
