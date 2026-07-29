import Hero from "@/components/Hero";
import Link from "next/link";
import { ArrowRight, Coffee, Compass, ShieldCheck, Heart } from "lucide-react";

export default function Home() {
  return (
    <>
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Profil & Filosofi Maroone Section */}
      <section 
        className="py-24 md:py-32 bg-[#FAF7F5] text-[#1f0307]"
        aria-labelledby="profile-title"
      >
        <div className="mx-auto max-w-6xl px-6 md:px-12">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Heading & Concept */}
            <div className="md:col-span-6 flex flex-col items-start text-left gap-6">
              <span className="font-inter text-xs tracking-widest text-[#5b0612] uppercase font-normal">
                PROFIL &amp; FILOSOFI
              </span>

              <h2 
                id="profile-title" 
                className="font-didot-italic text-4xl sm:text-5xl lg:text-6xl text-[#1f0307] leading-tight font-normal"
              >
                Tentang Maroone&apos; Caffe
              </h2>

              <p className="font-inter text-sm sm:text-base text-gray-700 leading-relaxed font-normal">
                Maroone&apos; Caffe lahir dari keinginan menghadirkan ruang santai yang mengombinasikan kehangatan estetika warna maroon dengan kualitas racikan kopi sejati.
              </p>

              <p className="font-inter text-sm text-gray-600 leading-relaxed font-normal">
                Setiap sudut ruangan dirancang secara intuitif untuk menciptakan ketenangan—baik bagi Anda yang mencari inspirasi bekerja, berbincang bersama kerabat, maupun sekadar menikmati momen tenang bersama secangkir espresso pilihan.
              </p>

              <div className="pt-2">
                <Link
                  href="/wfc"
                  className="inline-flex items-center gap-2 rounded-full border border-[#5b0612]/30 px-6 py-2.5 text-xs font-inter text-[#5b0612] hover:bg-[#5b0612] hover:text-white transition-all duration-300"
                >
                  <span>Pelajari Suasana &amp; Fasilitas</span>
                  <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                </Link>
              </div>
            </div>

            {/* Right Column: Visual Wireframe Grid / Minimalist Card */}
            <div className="md:col-span-6">
              <div className="p-8 sm:p-10 rounded-3xl bg-white border border-[#5b0612]/15 shadow-sm flex flex-col gap-6 text-left">
                <div className="h-10 w-10 rounded-full bg-[#fdf8f6] border border-[#5b0612]/20 flex items-center justify-center text-[#5b0612]">
                  <Coffee className="h-5 w-5" />
                </div>
                
                <h3 className="font-didot-italic text-2xl text-[#1f0307]">
                  Dedikasi Cita Rasa
                </h3>

                <p className="font-inter text-xs sm:text-sm text-gray-600 leading-relaxed font-normal">
                  Kami mengabungkan karakter biji kopi Arabika yang lembut bermotif floral dengan biji Robusta yang bold dan penuh tenaga. Diproses presisi oleh barista kami untuk menghasilkan keseimbangan rasa di setiap cangkirnya.
                </p>

                <div className="border-t border-gray-100 pt-4 flex items-center justify-between text-xs text-gray-500 font-inter">
                  <span>Karakter Kopi</span>
                  <span className="font-didot-italic text-[#5b0612]">Arabika &amp; Robusta</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 3. Ambiance & Karakter Ruang Section */}
      <section 
        className="py-24 md:py-32 bg-[#5b0612] text-white"
        aria-labelledby="ambiance-title"
      >
        <div className="mx-auto max-w-6xl px-6 md:px-12 text-center">
          
          <div className="max-w-2xl mx-auto mb-16 text-center">
            <span className="font-inter text-xs tracking-widest text-white/80 uppercase font-normal">
              KARAKTER RUANG
            </span>

            <h2 
              id="ambiance-title" 
              className="font-didot-italic text-4xl sm:text-6xl text-white mt-2 font-normal"
            >
              Kenyamanan dalam Setiap Sudut
            </h2>

            <p className="font-inter text-xs sm:text-sm text-white/80 mt-4 leading-relaxed font-normal max-w-lg mx-auto">
              Perpaduan arsitektur bernuansa Maroon dan pencahayaan lembut memberikan suasana yang tenang, kondusif, dan bercita rasa tinggi.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            
            {/* Feature 1 */}
            <div className="p-8 rounded-3xl bg-white/5 border border-white/15 backdrop-blur-sm flex flex-col gap-4">
              <div className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center text-white">
                <Compass className="h-5 w-5" />
              </div>
              <h3 className="font-didot-italic text-xl text-white">Tata Letak Intuitif</h3>
              <p className="font-inter text-xs text-white/70 leading-relaxed font-normal">
                Setiap meja ditata dengan jarak ideal untuk menjaga privasi perbincangan maupun kenyamanan saat bekerja.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="p-8 rounded-3xl bg-white/5 border border-white/15 backdrop-blur-sm flex flex-col gap-4">
              <div className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center text-white">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <h3 className="font-didot-italic text-xl text-white">Akustik Seimbang</h3>
              <p className="font-inter text-xs text-white/70 leading-relaxed font-normal">
                Alunan musik bernada lembut yang diselaraskan untuk menemani aktivitas Anda tanpa mengganggu konsentrasi.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="p-8 rounded-3xl bg-white/5 border border-white/15 backdrop-blur-sm flex flex-col gap-4">
              <div className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center text-white">
                <Heart className="h-5 w-5" />
              </div>
              <h3 className="font-didot-italic text-xl text-white">Pelayanan Ramah</h3>
              <p className="font-inter text-xs text-white/70 leading-relaxed font-normal">
                Tim staf dan barista siap memberikan rekomendasi sajian kopi yang paling sesuai dengan selera Anda.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* 4. Multipage Portal Links Section */}
      <section className="py-20 bg-[#FAF7F5] border-t border-[#5b0612]/10 text-center">
        <div className="mx-auto max-w-5xl px-6 md:px-8">
          <h3 className="font-didot-italic text-2xl sm:text-3xl text-[#1f0307]">
            Jelajahi Maroone&apos; Lebih Lanjut
          </h3>
          <p className="font-inter text-xs sm:text-sm text-gray-600 mt-2 font-normal">
            Pilih halaman di bawah ini untuk melihat daftar menu lengkap atau informasi lokasi dan reservasi.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Link
              href="/menu"
              className="inline-flex items-center gap-2 rounded-full bg-[#5b0612] px-7 py-3 text-xs font-inter text-white hover:bg-[#7d0919] transition-all"
            >
              <span>Katalog Menu</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>

            <Link
              href="/rsvp"
              className="inline-flex items-center gap-2 rounded-full bg-white border border-[#5b0612]/20 px-7 py-3 text-xs font-inter text-[#5b0612] hover:bg-[#fdf8f6] transition-all"
            >
              <span>Reservasi Meja</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>

            <Link
              href="/lokasi"
              className="inline-flex items-center gap-2 rounded-full bg-white border border-[#5b0612]/20 px-7 py-3 text-xs font-inter text-[#5b0612] hover:bg-[#fdf8f6] transition-all"
            >
              <span>Lokasi &amp; Kontak</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
