import { Wifi, Plug, ShieldCheck, Heart, Sparkles } from "lucide-react";
import Link from "next/link";

export default function WfcDashboard() {
  const features = [
    {
      icon: Wifi,
      title: "Wi-Fi Cepat & Stabil",
      description: "Akses internet tinggi dengan jangkauan kuat di seluruh area indoor maupun semi-outdoor.",
    },
    {
      icon: Plug,
      title: "Colokan Listrik Melimpah",
      description: "Tersedia stopkontak aman di setiap sudut meja untuk mendukung laptop & perangkat Anda.",
    },
    {
      icon: Sparkles,
      title: "Fasilitas Lengkap & Higienis",
      description: "Dilengkapi Musholla bersih, toilet higienis, dan area parkir yang aman.",
    },
    {
      icon: ShieldCheck,
      title: "Suasana Maroon Kondusif",
      description: "Suasana hangat dengan alunan musik santai, sempurna untuk fokus bekerja atau berdiskusi.",
    },
  ];

  return (
    <section 
      id="wfc" 
      className="bg-[#fdf8f6] pt-36 pb-20 md:pt-44 md:pb-28 border-y border-[#5b0612]/10"
      aria-labelledby="wfc-title"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-didot-italic text-sm font-bold tracking-widest text-[#5b0612] uppercase">
            FASILITAS &amp; SUASANA KAFE
          </span>
          <h2 
            id="wfc-title" 
            className="font-didot-italic text-3xl sm:text-5xl font-normal text-[#1f0307] mt-2"
          >
            Fasilitas Lengkap Pendukung WFC
          </h2>
          <p className="text-sm text-gray-600 mt-4 leading-relaxed font-light">
            Maroone&apos; Caffe &amp; Food F&amp;B dirancang khusus agar Anda dapat bekerja, berdiskusi, dan bersantai secara maksimal sembari menikmati racikan Espresso Based premium.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div 
                key={index}
                className="bg-white p-8 rounded-3xl border border-[#5b0612]/15 hover:border-[#5b0612] transition-all duration-300 flex flex-col items-start gap-4 shadow-sm hover:shadow-xl group"
              >
                <div className="h-12 w-12 rounded-2xl bg-[#5b0612] flex items-center justify-center text-white shrink-0 group-hover:scale-105 transition-transform">
                  <IconComponent className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="font-didot-italic text-xl font-bold text-[#1f0307]">{feature.title}</h3>
                <p className="text-xs text-gray-600 leading-relaxed font-light">{feature.description}</p>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-16 bg-[#5b0612] text-white p-8 rounded-3xl flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl border border-white/20">
          <div className="flex items-center gap-4 text-left">
            <div className="h-12 w-12 rounded-full bg-white/10 flex items-center justify-center text-white shrink-0 border border-white/20">
              <Heart className="h-6 w-6 fill-current text-white" />
            </div>
            <div>
              <h4 className="font-didot-italic text-xl font-bold">Butuh Ruang Pertemuan Privat?</h4>
              <p className="text-xs text-white/80 font-light mt-0.5">Hubungi tim kami untuk reservasi tempat dan paket F&amp;B acara privat Anda.</p>
            </div>
          </div>
          <Link
            href="/rsvp"
            className="rounded-xl bg-white px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-[#5b0612] hover:bg-white/90 transition-all shrink-0 shadow-md"
          >
            Reservasi Tempat
          </Link>
        </div>
      </div>
    </section>
  );
}
