"use client";

import { useState } from "react";
import { Users, Calendar, CheckCircle2, ChevronRight, Sparkles } from "lucide-react";

export default function VenueSection() {
  const [guests, setGuests] = useState<number>(20);
  const [eventType, setEventType] = useState<string>("meeting");
  const [date, setDate] = useState<string>("");
  const [timeSession, setTimeSession] = useState<string>("afternoon");
  const [clientName, setClientName] = useState<string>("");
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const handleRsvpSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!clientName.trim() || !date) return;

    const sessionLabel = 
      timeSession === "morning" ? "Pagi (08:00 - 12:00)" : 
      timeSession === "afternoon" ? "Siang (13:00 - 17:00)" : 
      "Malam (18:00 - 22:00)";

    const eventLabel = 
      eventType === "meeting" ? "Rapat / Business Gathering" : 
      eventType === "birthday" ? "Perayaan Ulang Tahun" : 
      eventType === "workshop" ? "Workshop / Private Event" : 
      "Gathering / Reuni Keluarga";

    let message = `Halo Maroone' Caffe & Food, saya ingin reservasi tempat untuk acara privat:\n\n`;
    message += `- *Nama Penyelenggara:* ${clientName}\n`;
    message += `- *Jenis Acara:* ${eventLabel}\n`;
    message += `- *Jumlah Tamu:* ${guests} orang\n`;
    message += `- *Tanggal Rencana:* ${date}\n`;
    message += `- *Sesi Waktu:* ${sessionLabel}\n\n`;
    message += `Mohon konfirmasi ketersediaan tempat & pilihan paket F&B. Terima kasih!`;

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/6282231144930?text=${encoded}`, "_blank");

    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setClientName("");
      setDate("");
    }, 3000);
  };

  return (
    <section 
      id="rsvp" 
      className="relative min-h-[85vh] py-24 md:py-32 bg-[#3b040b] text-white flex items-center justify-center overflow-hidden"
      aria-labelledby="venue-title"
    >
      {/* Background Image Overlay */}
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <img
          src="/Asset/BACKGROUN SECTION 1 .png"
          alt="Maroone Reservation Background"
          className="h-full w-full object-cover object-center opacity-30 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#3b040b] via-[#5b0612]/90 to-[#3b040b]" />
      </div>

      {/* Centered Content Container */}
      <div className="relative z-10 mx-auto max-w-4xl px-4 md:px-8 text-center flex flex-col items-center">
        
        {/* Section Header */}
        <div className="max-w-2xl mx-auto mb-12 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold text-white tracking-widest uppercase mb-3">
            <Sparkles className="h-3.5 w-3.5" />
            <span>RESERVASI &amp; ACARA PRIVAT</span>
          </div>
          
          <h2 
            id="venue-title" 
            className="font-didot-italic text-4xl sm:text-6xl font-normal text-white tracking-wide uppercase"
          >
            Reservasi Tempat
          </h2>
          
          <p className="text-xs sm:text-sm text-white/80 mt-4 leading-relaxed max-w-lg mx-auto font-light">
            Adakan rapat privat, perayaan ulang tahun, atau gathering spesial Anda dalam nuansa Maroon &amp; White yang hangat di Maroone&apos; Caffe.
          </p>
        </div>

        {/* Centered Reservation Card Form */}
        <div className="w-full max-w-2xl bg-[#5b0612]/80 backdrop-blur-xl p-8 sm:p-12 rounded-3xl border border-white/20 shadow-2xl">
          <form onSubmit={handleRsvpSubmit} className="flex flex-col gap-6 text-center">
            
            <div className="flex items-center justify-center gap-2 border-b border-white/20 pb-4">
              <Calendar className="h-6 w-6 text-white" aria-hidden="true" />
              <h3 className="font-didot-italic text-2xl font-bold text-white tracking-wide">
                Formulir Simulasi Reservasi
              </h3>
            </div>

            {/* Grid 2 Columns for inputs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 text-left">
              
              {/* Client Name */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="rsvp-name" className="text-xs font-bold uppercase tracking-wider text-white/90">Nama Lengkap</label>
                <input
                  id="rsvp-name"
                  type="text"
                  placeholder="Masukkan nama Anda..."
                  required
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                  className="w-full px-4 py-3 text-xs rounded-xl bg-white/10 border border-white/30 text-white placeholder-white/50 focus:outline-none focus:border-white"
                />
              </div>

              {/* Event Type */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="rsvp-event-type" className="text-xs font-bold uppercase tracking-wider text-white/90">Jenis Acara</label>
                <select
                  id="rsvp-event-type"
                  value={eventType}
                  onChange={(e) => setEventType(e.target.value)}
                  className="w-full px-4 py-3 text-xs rounded-xl bg-[#5b0612] border border-white/30 text-white focus:outline-none focus:border-white"
                >
                  <option value="meeting">Rapat Kerja / Business Gathering</option>
                  <option value="birthday">Perayaan Ulang Tahun</option>
                  <option value="workshop">Workshop / Seminar Privat</option>
                  <option value="social">Gathering &amp; Reuni Keluarga</option>
                </select>
              </div>

              {/* Date Input */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="rsvp-date" className="text-xs font-bold uppercase tracking-wider text-white/90">Tanggal Acara</label>
                <input
                  id="rsvp-date"
                  type="date"
                  required
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full px-4 py-3 text-xs rounded-xl bg-white/10 border border-white/30 text-white focus:outline-none focus:border-white"
                />
              </div>

              {/* Session Select */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="rsvp-session" className="text-xs font-bold uppercase tracking-wider text-white/90">Sesi Waktu</label>
                <select
                  id="rsvp-session"
                  value={timeSession}
                  onChange={(e) => setTimeSession(e.target.value)}
                  className="w-full px-4 py-3 text-xs rounded-xl bg-[#5b0612] border border-white/30 text-white focus:outline-none focus:border-white"
                >
                  <option value="morning">Pagi (08:00 - 12:00 WIB)</option>
                  <option value="afternoon">Siang (13:00 - 17:00 WIB)</option>
                  <option value="evening">Malam (18:00 - 22:00 WIB)</option>
                </select>
              </div>

            </div>

            {/* Guests Slider - Centered */}
            <div className="flex flex-col gap-2 text-center bg-white/5 p-4 rounded-2xl border border-white/15">
              <div className="flex justify-between items-center px-1">
                <label htmlFor="rsvp-guests" className="text-xs font-bold uppercase tracking-wider text-white/90">Perkiraan Jumlah Tamu</label>
                <span className="font-mono text-sm font-bold text-white flex items-center gap-1.5 bg-white/10 px-3 py-1 rounded-full">
                  <Users className="h-4 w-4" />
                  <span>{guests} Orang</span>
                </span>
              </div>
              <input
                id="rsvp-guests"
                type="range"
                min="5"
                max="100"
                step="5"
                value={guests}
                onChange={(e) => setGuests(parseInt(e.target.value))}
                className="w-full accent-white cursor-pointer mt-1"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitted}
              className="w-full mt-2 rounded-xl bg-white py-4 text-center text-xs font-bold tracking-widest text-[#5b0612] uppercase hover:bg-white/90 transition-all duration-200 shadow-xl flex items-center justify-center gap-2 transform hover:scale-[1.02]"
            >
              {isSubmitted ? (
                <>
                  <CheckCircle2 className="h-4 w-4" />
                  <span>Mengarahkan ke WA...</span>
                </>
              ) : (
                <>
                  <span>Kirim Reservasi via WA</span>
                  <ChevronRight className="h-4 w-4" />
                </>
              )}
            </button>

          </form>
        </div>

      </div>
    </section>
  );
}
