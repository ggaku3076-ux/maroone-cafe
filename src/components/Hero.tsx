import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section 
      id="beranda" 
      className="relative min-h-screen w-full flex items-center justify-start overflow-hidden bg-[#3b040b] pt-28 pb-16"
      aria-labelledby="hero-title"
    >
      {/* Background Image: BACKGROUN SECTION 1 .png in full natural clarity without dark gradient overlays */}
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <img
          src="/Asset/BACKGROUN SECTION 1 .png"
          alt="Maroone Caffe Hero Image"
          className="h-full w-full object-cover object-center"
        />
      </div>

      {/* Main Content Area: Left-aligned text overlay over natural image background */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 md:px-12 py-16 flex flex-col items-start justify-center">
        <div className="max-w-xl flex flex-col items-start text-left gap-5">
          
          {/* Main Brand Title in Didot LP Italic */}
          <h1 
            id="hero-title" 
            className="font-didot-italic text-5xl sm:text-7xl lg:text-8xl text-white leading-[1.02] tracking-normal font-normal drop-shadow-md"
          >
            MAROONE&apos;
          </h1>

          {/* Subheading with Inter for '&' symbol as requested */}
          <p className="font-didot-italic text-lg sm:text-2xl text-white/95 font-normal tracking-wide drop-shadow-sm">
            Caffe <span className="font-inter font-normal">&amp;</span> Food F<span className="font-inter font-normal">&amp;</span>B
          </p>

          {/* Rich SEO Description explaining Maroone' Caffe & Food F&B */}
          <p className="font-inter text-xs sm:text-sm text-white/90 leading-relaxed font-normal tracking-wide drop-shadow-sm max-w-md">
            Maroone&apos; Caffe <span className="font-inter font-normal">&amp;</span> Food F<span className="font-inter font-normal">&amp;</span>B adalah destinasi kafe dan ruang santai modern di Kabupaten Jombang yang menyajikan racikan kopi autentik berbasis Espresso (biji Arabika &amp; Robusta pilihan) serta sajian kuliner istimewa dalam atmosfer Maroon yang hangat dan tenang.
          </p>

          {/* Clean Action Buttons */}
          <div className="flex flex-row gap-4 mt-3">
            <Link
              href="/menu"
              className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 text-xs font-inter text-[#5b0612] hover:bg-white/90 transition-all duration-300 shadow-lg"
            >
              <span>Jelajahi Menu</span>
              <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
            </Link>
            
            <Link
              href="/rsvp"
              className="inline-flex items-center gap-2 rounded-full border border-white/60 px-7 py-3 text-xs font-inter text-white hover:bg-white/10 transition-all duration-300 shadow-md backdrop-blur-sm"
            >
              <span>Reservasi Meja</span>
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
