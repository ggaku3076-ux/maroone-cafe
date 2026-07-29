import Link from "next/link";
import { MapPin, Phone, Mail, ArrowUp, Share2 } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#1f0307] text-white border-t border-white/10 pt-16 pb-12">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 border-b border-white/10 pb-12">
          
          {/* Brand Info (Col-5) */}
          <div className="md:col-span-5 flex flex-col gap-4 items-start text-left">
            <Link href="/" className="flex items-center gap-3">
              <div className="relative h-12 w-12 shrink-0 rounded-full aspect-square overflow-hidden border border-white/30 bg-[#5b0612] flex items-center justify-center">
                <img
                  src="/Asset/LOGO.png"
                  alt="Maroone Logo"
                  className="h-full w-full object-cover rounded-full"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-didot-italic font-bold text-2xl text-white tracking-wide">
                  MAROONE&apos;
                </span>
                <span className="text-[10px] tracking-widest text-white/70 uppercase">Caffe &amp; Food F&amp;B</span>
              </div>
            </Link>

            <p className="text-xs text-white/70 leading-relaxed max-w-sm font-light mt-2">
              Sajian Espresso Based autentik berbahan dasar biji Arabika &amp; Robusta bermutu tinggi. Tempat yang hangat dan bercita rasa tinggi dalam balutan arsitektur Maroon &amp; White.
            </p>

            <div className="flex items-center gap-3 mt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="h-9 w-9 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-[#5b0612] transition-colors"
                aria-label="Instagram Maroone Caffe"
              >
                <Share2 className="h-4 w-4" />
              </a>
              <a
                href="https://wa.me/6282231144930"
                target="_blank"
                rel="noopener noreferrer"
                className="h-9 w-9 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-[#5b0612] transition-colors"
                aria-label="WhatsApp Admin Maroone"
              >
                <Phone className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links (Col-3) */}
          <div className="md:col-span-3 flex flex-col gap-3 text-left">
            <h4 className="font-didot-italic text-lg font-bold text-white uppercase tracking-wider">
              Navigasi Cepat
            </h4>
            <div className="flex flex-col gap-2 text-xs text-white/80 font-light">
              <Link href="/" className="hover:text-white transition-colors">Beranda Utama</Link>
              <Link href="/menu" className="hover:text-white transition-colors">Katalog Espresso Based</Link>
              <Link href="/rsvp" className="hover:text-white transition-colors">Reservasi Meja &amp; Acara</Link>
              <Link href="/wfc" className="hover:text-white transition-colors">Fasilitas &amp; Suasana</Link>
              <Link href="/lokasi" className="hover:text-white transition-colors">Lokasi &amp; Jam Operasional</Link>
            </div>
          </div>

          {/* Contact Details (Col-4) */}
          <div className="md:col-span-4 flex flex-col gap-3 text-left">
            <h4 className="font-didot-italic text-lg font-bold text-white uppercase tracking-wider">
              Kontak &amp; Alamat
            </h4>
            <div className="flex flex-col gap-3 text-xs text-white/80 font-light">
              <div className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 text-white shrink-0 mt-0.5" />
                <span>Maroone&apos; Caffe &amp; Food F&amp;B, Surabaya, Jawa Timur</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 text-white shrink-0" />
                <span>+62 822-3114-4930</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 text-white shrink-0" />
                <span>hello@maroone.web.id</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-white/50">
          <p>© {new Date().getFullYear()} Maroone&apos; Caffe and Food F&amp;B. All rights reserved.</p>
          <a
            href="#beranda"
            className="flex items-center gap-1.5 text-white/70 hover:text-white transition-colors"
          >
            <span>Kembali ke Atas</span>
            <ArrowUp className="h-3.5 w-3.5" />
          </a>
        </div>

      </div>
    </footer>
  );
}
