import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section 
      id="beranda" 
      className="relative min-h-screen w-full flex items-center justify-start overflow-hidden bg-[#3b040b] pt-24"
      aria-labelledby="hero-title"
    >
      {/* Background Image: BACKGROUN SECTION 1 .png displayed clearly without heavy dark gradients */}
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <img
          src="/Asset/BACKGROUN SECTION 1 .png"
          alt="Maroone Caffe Hero"
          className="h-full w-full object-cover object-center"
        />
      </div>

      {/* Main Content Area: Left-aligned in the open maroon space of the image */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 md:px-12 py-20 flex flex-col items-start justify-center">
        <div className="max-w-xl flex flex-col items-start text-left gap-6">
          
          {/* Main Title in Didot LP Italic */}
          <h1 
            id="hero-title" 
            className="font-didot-italic text-5xl sm:text-7xl lg:text-8xl text-white leading-[1.02] tracking-normal font-normal"
          >
            MAROONE&apos;
          </h1>

          {/* Subtitle in Inter - No bold */}
          <p className="font-inter text-sm sm:text-base text-white/90 leading-relaxed font-normal tracking-wide max-w-md">
            Ruang hangat untuk menikmati cita rasa kopi autentik dalam balutan estetika modern.
          </p>

          {/* Clean Action Buttons */}
          <div className="flex flex-row gap-4 mt-4">
            <Link
              href="/menu"
              className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 text-xs font-inter text-[#5b0612] hover:bg-white/90 transition-all duration-300 shadow-md"
            >
              <span>Lihat Menu</span>
              <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
            </Link>
            
            <Link
              href="/rsvp"
              className="inline-flex items-center gap-2 rounded-full border border-white/60 px-7 py-3 text-xs font-inter text-white hover:bg-white/10 transition-all duration-300"
            >
              <span>Reservasi Meja</span>
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
