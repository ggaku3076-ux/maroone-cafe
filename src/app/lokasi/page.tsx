import { MapPin, Phone, Mail, Clock, Compass, MessageSquare } from "lucide-react";

export default function LokasiPage() {
  return (
    <section 
      className="bg-[#FAF7F5] pt-36 pb-20 md:pt-44 md:pb-28 text-[#1f0307]"
      aria-labelledby="contact-title"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-didot-italic text-sm font-normal tracking-widest text-[#5b0612] uppercase">
            HUBUNGI KAMI <span className="font-inter font-normal">&amp;</span> LOKASI
          </span>
          <h1 
            id="contact-title" 
            className="font-didot-italic text-4xl sm:text-6xl font-normal text-[#1f0307] mt-2"
          >
            Kunjungi Maroone&apos; Caffe <span className="font-inter font-normal">&amp;</span> Food
          </h1>
          <p className="font-inter text-sm text-gray-600 mt-4 leading-relaxed font-normal">
            Temukan lokasi kami di Kabupaten Jombang, informasi kontak WhatsApp admin, serta jam operasional harian Maroone&apos; Caffe &amp; Food F&amp;B.
          </p>
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start mt-8">
          
          {/* Details & Contacts (Left) */}
          <div className="flex flex-col gap-8 text-left bg-white p-8 sm:p-10 rounded-3xl border border-[#5b0612]/15 shadow-sm">
            <div>
              <h2 className="font-didot-italic text-2xl font-normal text-[#1f0307] mb-6 border-b border-[#5b0612]/10 pb-3">
                Informasi Kontak
              </h2>
              <div className="flex flex-col gap-6 font-inter font-normal">
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-2xl bg-[#5b0612] flex items-center justify-center text-white shrink-0">
                    <MapPin className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-normal text-[#1f0307] text-sm font-didot-italic">Alamat Lengkap</h3>
                    <p className="text-xs text-gray-600 mt-1 leading-relaxed font-normal">
                      Jl. Kertajaya, Kepanjen, Kec. Jombang, Kabupaten Jombang, Jawa Timur 61411
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-2xl bg-[#5b0612] flex items-center justify-center text-white shrink-0">
                    <Phone className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-normal text-[#1f0307] text-sm font-didot-italic">Nomor Telepon <span className="font-inter font-normal">&amp;</span> WhatsApp</h3>
                    <p className="text-xs text-gray-600 mt-1">
                      <a href="https://wa.me/6285546546760" target="_blank" rel="noopener noreferrer" className="hover:text-[#5b0612] transition-colors font-normal">
                        0855-4654-6760
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-2xl bg-[#5b0612] flex items-center justify-center text-white shrink-0">
                    <Mail className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-normal text-[#1f0307] text-sm font-didot-italic">Email Resmi</h3>
                    <p className="text-xs text-gray-600 mt-1">
                      <a href="mailto:hello@maroone.web.id" className="hover:text-[#5b0612] transition-colors font-normal">
                        hello@maroone.web.id
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="font-didot-italic text-2xl font-normal text-[#1f0307] mb-6 border-b border-[#5b0612]/10 pb-3">Jam Operasional</h2>
              <div className="flex items-start gap-4 font-inter font-normal">
                <div className="h-10 w-10 rounded-2xl bg-[#5b0612] flex items-center justify-center text-white shrink-0">
                  <Clock className="h-5 w-5" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-normal text-[#1f0307] text-sm font-didot-italic">Buka Setiap Hari</h3>
                  <p className="text-xs text-gray-600 mt-1">
                    Senin - Minggu: 07:00 - 22:00 WIB
                  </p>
                  <p className="text-[11px] text-gray-400 mt-1 font-normal">
                    *Last order kopi <span className="font-inter font-normal">&amp;</span> makanan hangat pukul 21:30 WIB.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Map Wireframe & Directions (Right) */}
          <div className="flex flex-col gap-6 p-8 sm:p-10 bg-[#5b0612] text-white rounded-3xl border border-white/20 shadow-xl">
            <h2 className="font-didot-italic text-2xl font-normal text-left">Peta <span className="font-inter font-normal">&amp;</span> Arah Lokasi</h2>
            
            {/* Visual map wireframe */}
            <div className="relative aspect-[16/10] w-full rounded-2xl border border-white/20 bg-white/10 p-4 flex flex-col justify-between overflow-hidden backdrop-blur-md">
              <div className="flex justify-between items-start">
                <span className="font-mono text-[9px] text-white/80 font-normal uppercase tracking-wider">
                  JOMBANG // MAROONE CAFFE
                </span>
                <div className="h-2 w-2 rounded-full bg-white animate-pulse"></div>
              </div>

              <div className="flex items-center justify-center my-auto flex-col gap-2">
                <div className="h-12 w-12 rounded-full bg-white text-[#5b0612] flex items-center justify-center shadow-lg">
                  <Compass className="h-6 w-6" />
                </div>
                <div className="text-sm font-normal text-white text-center leading-tight font-didot-italic">
                  MAROONE&apos; CAFFE <span className="font-inter font-normal">&amp;</span> FOOD F<span className="font-inter font-normal">&amp;</span>B
                  <span className="block font-inter text-[10px] text-white/80 font-normal mt-1">
                    Jl. Kertajaya, Kepanjen, Jombang
                  </span>
                </div>
              </div>

              <div className="flex justify-between items-end font-mono text-[9px] text-white/60">
                <span>KABUPATEN JOMBANG 61411</span>
                <span>MAROONE.WEB.ID</span>
              </div>
            </div>

            <div className="flex flex-col gap-3 mt-2">
              <a
                href="https://maps.google.com/?q=Jl.+Kertajaya,+Kepanjen,+Kec.+Jombang,+Kabupaten+Jombang,+Jawa+Timur+61411"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-white py-3.5 text-xs font-inter font-normal uppercase tracking-wider text-[#5b0612] hover:bg-white/90 transition-all duration-200 shadow-md"
              >
                <Compass className="h-4 w-4" />
                <span>Buka Petunjuk Arah Google Maps</span>
              </a>

              <a
                href="https://wa.me/6285546546760"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl border border-white/40 bg-white/10 py-3.5 text-xs font-inter font-normal uppercase tracking-wider text-white hover:bg-white/20 transition-all duration-200"
              >
                <MessageSquare className="h-4 w-4" />
                <span>Hubungi Admin via WhatsApp</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
