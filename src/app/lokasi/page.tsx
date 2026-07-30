import { MapPin, Phone, Mail, Clock, Compass, MessageSquare } from "lucide-react";

export default function LokasiPage() {
  const gmapsEmbedUrl = "https://maps.google.com/maps?q=Jl.+Kertajaya,+Kepanjen,+Kec.+Jombang,+Kabupaten+Jombang,+Jawa+Timur+61411&t=&z=15&ie=UTF8&iwloc=&output=embed";

  return (
    <section 
      className="bg-[#FAF7F5] pt-28 pb-20 md:pt-36 md:pb-28 text-[#1f0307]"
      aria-labelledby="contact-title"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="font-didot-italic text-xs sm:text-sm font-normal tracking-widest text-[#5b0612] uppercase">
            HUBUNGI KAMI <span className="font-inter font-normal">&amp;</span> LOKASI
          </span>
          <h1 
            id="contact-title" 
            className="font-didot-italic text-3xl sm:text-5xl lg:text-6xl font-normal text-[#1f0307] mt-2"
          >
            Kunjungi Maroone&apos; Caffe <span className="font-inter font-normal">&amp;</span> Food
          </h1>
          <p className="font-inter text-xs sm:text-sm text-gray-600 mt-3 leading-relaxed font-normal max-w-xl mx-auto">
            Temukan lokasi kami di Kabupaten Jombang, informasi kontak WhatsApp admin, serta jam operasional harian Maroone&apos; Caffe &amp; Food F&amp;B.
          </p>
        </div>

        {/* Info & Map Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Details & Contacts (Col-5) */}
          <div className="lg:col-span-5 flex flex-col gap-6 text-left bg-white p-6 sm:p-8 rounded-3xl border border-[#5b0612]/15 shadow-sm">
            <div>
              <h2 className="font-didot-italic text-xl sm:text-2xl font-normal text-[#1f0307] mb-5 border-b border-[#5b0612]/10 pb-3">
                Informasi Kontak
              </h2>
              <div className="flex flex-col gap-5 font-inter font-normal">
                <div className="flex items-start gap-3.5">
                  <div className="h-10 w-10 rounded-2xl bg-[#5b0612] flex items-center justify-center text-white shrink-0">
                    <MapPin className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-normal text-[#1f0307] text-xs sm:text-sm font-didot-italic">Alamat Lengkap</h3>
                    <p className="text-xs text-gray-600 mt-1 leading-relaxed font-normal">
                      Jl. Kertajaya, Kepanjen, Kec. Jombang, Kabupaten Jombang, Jawa Timur 61411
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="h-10 w-10 rounded-2xl bg-[#5b0612] flex items-center justify-center text-white shrink-0">
                    <Phone className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-normal text-[#1f0307] text-xs sm:text-sm font-didot-italic">Nomor Telepon <span className="font-inter font-normal">&amp;</span> WhatsApp</h3>
                    <p className="text-xs text-gray-600 mt-1">
                      <a href="https://wa.me/628819636431" target="_blank" rel="noopener noreferrer" className="hover:text-[#5b0612] transition-colors font-normal">
                        0881-9636-431
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="h-10 w-10 rounded-2xl bg-[#5b0612] flex items-center justify-center text-white shrink-0">
                    <Mail className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-normal text-[#1f0307] text-xs sm:text-sm font-didot-italic">Email Resmi</h3>
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
              <h2 className="font-didot-italic text-xl sm:text-2xl font-normal text-[#1f0307] mb-5 border-b border-[#5b0612]/10 pb-3">Jam Operasional</h2>
              <div className="flex items-start gap-3.5 font-inter font-normal">
                <div className="h-10 w-10 rounded-2xl bg-[#5b0612] flex items-center justify-center text-white shrink-0">
                  <Clock className="h-5 w-5" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-normal text-[#1f0307] text-xs sm:text-sm font-didot-italic">Buka Setiap Hari</h3>
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

          {/* Interactive Live View Google Maps (Col-7) */}
          <div className="lg:col-span-7 flex flex-col gap-5 p-6 sm:p-8 bg-[#5b0612] text-white rounded-3xl border border-white/20 shadow-xl">
            <div className="flex items-center justify-between">
              <h2 className="font-didot-italic text-xl sm:text-2xl font-normal text-left">Peta Live Google Maps</h2>
              <span className="font-mono text-[10px] bg-white/10 border border-white/20 px-3 py-1 rounded-full text-white/80 uppercase">
                Jombang 61411
              </span>
            </div>
            
            {/* Embedded Live Google Maps Iframe */}
            <div className="relative aspect-[16/11] w-full rounded-2xl border border-white/20 overflow-hidden shadow-inner bg-[#3b040b]">
              <iframe
                title="Live View Google Maps Maroone Caffe Jombang"
                src={gmapsEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-3 mt-1">
              <a
                href="https://maps.google.com/?q=Jl.+Kertajaya,+Kepanjen,+Kec.+Jombang,+Kabupaten+Jombang,+Jawa+Timur+61411"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-white py-3 text-xs font-inter font-normal uppercase tracking-wider text-[#5b0612] hover:bg-white/90 transition-all duration-200 shadow-md"
              >
                <Compass className="h-4 w-4" />
                <span>Buka di Google Maps</span>
              </a>

              <a
                href="https://wa.me/628819636431"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl border border-white/40 bg-white/10 py-3 text-xs font-inter font-normal uppercase tracking-wider text-white hover:bg-white/20 transition-all duration-200"
              >
                <MessageSquare className="h-4 w-4" />
                <span>Hubungi Admin WA</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
