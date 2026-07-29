import Hero from "@/components/Hero";
import MenuSection from "@/components/MenuSection";
import VenueSection from "@/components/VenueSection";
import Link from "next/link";
import { Coffee, Calendar, MapPin, Sparkles, ArrowRight, ShieldCheck } from "lucide-react";

export default function Home() {
  const highlightFeatures = [
    {
      icon: Coffee,
      title: "Menu Espresso Based",
      description: "Nikmati varian Americano, Cappuccino, Magic, Moccacino Latte, Caffe Latte, hingga Ice Cube bermutu tinggi.",
      href: "/menu",
      linkText: "Jelajahi Menu",
    },
    {
      icon: Calendar,
      title: "Reservasi Tempat & Acara",
      description: "Sewa area indoor & semi-outdoor untuk rapat privat, ulang tahun, atau acara sosial spesial Anda.",
      href: "/rsvp",
      linkText: "Simulasi Reservasi",
    },
    {
      icon: ShieldCheck,
      title: "Suasana & WFC",
      description: "Ruang yang tenang dengan koneksi Wi-Fi kencang, stopkontak melimpah, dan suasana Maroon yang hangat.",
      href: "/wfc",
      linkText: "Info Fasilitas",
    },
    {
      icon: MapPin,
      title: "Lokasi & Jam Operasional",
      description: "Temukan petunjuk arah Google Maps dan jam operasional harian Maroone' Caffe & Food.",
      href: "/lokasi",
      linkText: "Lihat Lokasi",
    },
  ];

  return (
    <>
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Portal Cards Section */}
      <section 
        className="py-20 md:py-28 bg-[#fdf8f6] border-t border-[#5b0612]/10"
        aria-labelledby="portal-title"
      >
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="font-didot-italic text-sm font-bold tracking-widest text-[#5b0612] uppercase">
              MAROONE&apos; CAFFE EXPERIENCE
            </span>
            <h2 
              id="portal-title" 
              className="font-didot-italic text-3xl sm:text-5xl font-normal text-[#1f0307] mt-2"
            >
              Layanan &amp; Keunggulan Utama
            </h2>
            <p className="text-sm text-gray-600 mt-4 leading-relaxed font-light">
              Pilih halaman yang ingin Anda tuju untuk melihat sajian Espresso Based, melakukan reservasi tempat, atau berkonsultasi dengan AI Barista kami.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlightFeatures.map((card, index) => {
              const IconComponent = card.icon;
              return (
                <div 
                  key={index}
                  className="bg-white p-8 rounded-3xl border border-[#5b0612]/15 hover:border-[#5b0612] transition-all duration-300 flex flex-col justify-between items-start text-left shadow-sm hover:shadow-xl group"
                >
                  <div className="flex flex-col gap-4">
                    <div className="h-12 w-12 rounded-2xl bg-[#fdf8f6] border border-[#5b0612]/20 flex items-center justify-center text-[#5b0612] shrink-0 group-hover:bg-[#5b0612] group-hover:text-white transition-colors duration-300">
                      <IconComponent className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <h3 className="font-didot-italic text-xl font-bold text-[#1f0307]">{card.title}</h3>
                    <p className="text-xs text-gray-600 leading-relaxed font-light">{card.description}</p>
                  </div>

                  <Link
                    href={card.href}
                    className="mt-8 inline-flex items-center gap-1 text-xs font-bold text-[#5b0612] uppercase tracking-wider group-hover:underline"
                  >
                    <span>{card.linkText}</span>
                    <ArrowRight className="h-3.5 w-3.5 transform group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Espresso Based Menu Section */}
      <MenuSection />

      {/* 4. Reservasi Section */}
      <VenueSection />
    </>
  );
}
