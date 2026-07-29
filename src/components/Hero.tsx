import Link from "next/link";
import { Coffee, Calendar, Award, ShieldCheck, HeartHandshake, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section 
      id="beranda" 
      className="relative min-h-[90vh] lg:min-h-[88vh] flex flex-col justify-between overflow-hidden bg-[#3b040b]"
      aria-labelledby="hero-title"
    >
      {/* === HERO BACKGROUND IMAGE === */}
      {/* Using /Asset/BACKGROUN SECTION 1 .png as instructed */}
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <img
          src="/Asset/BACKGROUN SECTION 1 .png"
          alt="Maroone Caffe Hero Background"
          className="h-full w-full object-cover object-center scale-105"
        />
        {/* Soft maroon overlay gradient for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#3b040b]/90 via-[#5b0612]/75 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#3b040b] via-transparent to-[#3b040b]/40" />
      </div>

      {/* === MAIN HERO CONTENT === */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 md:px-8 flex-grow flex items-center pt-36 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center w-full">
          
          {/* Main Title & Description Column */}
          <div className="lg:col-span-8 flex flex-col items-center lg:items-start text-center lg:text-left gap-6">
            
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-md px-4 py-1.5 text-xs font-semibold text-white tracking-widest uppercase shadow-md">
              <Sparkles className="h-3.5 w-3.5 text-white" />
              <span>MAROONE&apos; CAFFE AND FOOD F&amp;B</span>
            </div>

            {/* Main Headline in Didot Italic */}
            <h1 
              id="hero-title" 
              className="font-didot-italic text-5xl sm:text-7xl lg:text-8xl font-normal tracking-tight text-white leading-[0.95] drop-shadow-lg"
            >
              Cita Rasa Sejati<br />
              <span className="text-white/90 underline underline-offset-8 decoration-white/30 font-didot-italic">
                Espresso Based
              </span>
            </h1>

            {/* Sub-description in Didot / Clean sans */}
            <p className="text-base sm:text-xl text-white/90 leading-relaxed max-w-2xl font-light">
              Nikmati racikan espresso premium berbahan dasar biji <strong className="font-semibold text-white">Arabika</strong> dan <strong className="font-semibold text-white">Robusta</strong> pilihan, disajikan dengan konsep arsitektur Maroon &amp; White yang hangat dan elegan.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row w-full sm:w-auto gap-4 mt-2">
              <Link
                href="/menu"
                className="inline-flex items-center justify-center gap-3 rounded-full bg-white px-8 py-4 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#5b0612] hover:bg-white/90 transition-all duration-300 shadow-xl transform hover:scale-105"
              >
                <Coffee className="h-4 w-4 text-[#5b0612]" aria-hidden="true" />
                <span>Lihat Menu Espresso</span>
              </Link>
              
              <Link
                href="/rsvp"
                className="inline-flex items-center justify-center gap-3 rounded-full border-2 border-white/60 px-8 py-4 text-xs sm:text-sm font-bold uppercase tracking-wider text-white hover:bg-white/15 transition-all duration-300 backdrop-blur-sm shadow-lg"
              >
                <Calendar className="h-4 w-4 text-white" aria-hidden="true" />
                <span>Reservasi Tempat</span>
              </Link>
            </div>

          </div>

          {/* Right Column Showcase Logo & Badge */}
          <div className="lg:col-span-4 flex items-center justify-center lg:justify-end">
            <div className="relative group">
              <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-white/30 to-[#5b0612] blur-xl opacity-50 group-hover:opacity-80 transition duration-500"></div>
              <div className="relative h-56 w-56 sm:h-64 sm:w-64 rounded-full aspect-square overflow-hidden border-4 border-white/30 shadow-2xl bg-[#5b0612] flex items-center justify-center">
                <img
                  src="/Asset/LOGO.png"
                  alt="Maroone Caffe Logo"
                  className="h-full w-full object-cover rounded-full transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* === BOTTOM FEATURES BAR === */}
      <div className="relative z-10 w-full border-t border-white/15 bg-[#3b040b]/80 backdrop-blur-md py-6">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Feature 1 */}
            <div className="flex gap-3 items-center text-left text-white">
              <div className="h-10 w-10 shrink-0 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white">
                <Award className="h-5 w-5" aria-hidden="true" />
              </div>
              <div className="flex flex-col">
                <h3 className="text-xs font-bold tracking-wider uppercase font-didot-italic">Specialty Coffee</h3>
                <p className="text-[11px] text-white/70">Biji Arabika &amp; Robusta Pilihan</p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex gap-3 items-center text-left text-white">
              <div className="h-10 w-10 shrink-0 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white">
                <Coffee className="h-5 w-5" aria-hidden="true" />
              </div>
              <div className="flex flex-col">
                <h3 className="text-xs font-bold tracking-wider uppercase font-didot-italic">Authentic Espresso</h3>
                <p className="text-[11px] text-white/70">Hot &amp; Ice Brewed Fresh</p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex gap-3 items-center text-left text-white">
              <div className="h-10 w-10 shrink-0 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white">
                <ShieldCheck className="h-5 w-5" aria-hidden="true" />
              </div>
              <div className="flex flex-col">
                <h3 className="text-xs font-bold tracking-wider uppercase font-didot-italic">Suasana Elegan</h3>
                <p className="text-[11px] text-white/70">Interior Maroon &amp; White</p>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="flex gap-3 items-center text-left text-white">
              <div className="h-10 w-10 shrink-0 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white">
                <HeartHandshake className="h-5 w-5" aria-hidden="true" />
              </div>
              <div className="flex flex-col">
                <h3 className="text-xs font-bold tracking-wider uppercase font-didot-italic">Layanan Ramah</h3>
                <p className="text-[11px] text-white/70">AI Assistant &amp; Tim Barista</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
