"use client";

import { useState } from "react";
import { Users, Calendar, CheckCircle2, ChevronRight } from "lucide-react";

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

    let message = `Halo Maroone' Caffe, saya ingin reservasi tempat untuk acara privat:\n\n`;
    message += `- *Nama Penyelenggara:* ${clientName}\n`;
    message += `- *Jenis Acara:* ${eventLabel}\n`;
    message += `- *Jumlah Tamu:* ${guests} orang\n`;
    message += `- *Tanggal Rencana:* ${date}\n`;
    message += `- *Sesi Waktu:* ${sessionLabel}\n\n`;
    message += `Mohon konfirmasi ketersediaan tempat & pilihan paket F&B. Terima kasih!`;

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/628819636431?text=${encoded}`, "_blank");

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
      className="min-h-screen py-32 bg-[#3b040b] text-white flex items-center justify-center"
      aria-labelledby="venue-title"
    >
      {/* Centered Content Container on Plain Maroon Background */}
      <div className="mx-auto max-w-3xl px-6 md:px-8 text-center flex flex-col items-center">
        
        {/* Section Header */}
        <div className="max-w-2xl mx-auto mb-10 text-center">
          <span className="font-inter text-xs tracking-widest text-white/80 uppercase font-normal block mb-2">
            RESERVASI TEMPAT &amp; ACARA
          </span>
          
          <h1 
            id="venue-title" 
            className="font-didot-italic text-4xl sm:text-6xl text-white tracking-wide uppercase font-normal"
          >
            Reservasi Meja
          </h1>
          
          <p className="font-inter text-xs sm:text-sm text-white/80 mt-4 leading-relaxed max-w-lg mx-auto font-normal">
            Adakan rapat privat, perayaan ulang tahun, atau gathering spesial Anda dalam nuansa Maroon &amp; White yang hangat di Maroone&apos; Caffe.
          </p>
        </div>

        {/* Centered Reservation Card Form */}
        <div className="w-full max-w-xl bg-[#5b0612] p-8 sm:p-10 rounded-3xl border border-white/20 shadow-2xl">
          <form onSubmit={handleRsvpSubmit} className="flex flex-col gap-5 text-center">
            
            <div className="flex items-center justify-center gap-2 border-b border-white/20 pb-4">
              <Calendar className="h-5 w-5 text-white" aria-hidden="true" />
              <h2 className="font-didot-italic text-2xl font-normal text-white tracking-wide">
                Formulir Reservasi
              </h2>
            </div>

            {/* Inputs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
              
              {/* Client Name */}
              <div className="flex flex-col gap-1">
                <label htmlFor="rsvp-name" className="font-inter text-xs uppercase tracking-wider text-white/90 font-normal">Nama Lengkap</label>
                <input
                  id="rsvp-name"
                  type="text"
                  placeholder="Masukkan nama Anda..."
                  required
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                  className="w-full px-4 py-2.5 text-xs rounded-xl bg-white/10 border border-white/30 text-white placeholder-white/50 focus:outline-none focus:border-white font-inter font-normal"
                />
              </div>

              {/* Event Type */}
              <div className="flex flex-col gap-1">
                <label htmlFor="rsvp-event-type" className="font-inter text-xs uppercase tracking-wider text-white/90 font-normal">Jenis Acara</label>
                <select
                  id="rsvp-event-type"
                  value={eventType}
                  onChange={(e) => setEventType(e.target.value)}
                  className="w-full px-4 py-2.5 text-xs rounded-xl bg-[#3b040b] border border-white/30 text-white focus:outline-none focus:border-white font-inter font-normal"
                >
                  <option value="meeting">Rapat Kerja / Business Gathering</option>
                  <option value="birthday">Perayaan Ulang Tahun</option>
                  <option value="workshop">Workshop / Seminar Privat</option>
                  <option value="social">Gathering &amp; Reuni Keluarga</option>
                </select>
              </div>

              {/* Date Input */}
              <div className="flex flex-col gap-1">
                <label htmlFor="rsvp-date" className="font-inter text-xs uppercase tracking-wider text-white/90 font-normal">Tanggal Acara</label>
                <input
                  id="rsvp-date"
                  type="date"
                  required
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full px-4 py-2.5 text-xs rounded-xl bg-white/10 border border-white/30 text-white focus:outline-none focus:border-white font-inter font-normal"
                />
              </div>

              {/* Session Select */}
              <div className="flex flex-col gap-1">
                <label htmlFor="rsvp-session" className="font-inter text-xs uppercase tracking-wider text-white/90 font-normal">Sesi Waktu</label>
                <select
                  id="rsvp-session"
                  value={timeSession}
                  onChange={(e) => setTimeSession(e.target.value)}
                  className="w-full px-4 py-2.5 text-xs rounded-xl bg-[#3b040b] border border-white/30 text-white focus:outline-none focus:border-white font-inter font-normal"
                >
                  <option value="morning">Pagi (08:00 - 12:00 WIB)</option>
                  <option value="afternoon">Siang (13:00 - 17:00 WIB)</option>
                  <option value="evening">Malam (18:00 - 22:00 WIB)</option>
                </select>
              </div>

            </div>

            {/* Guests Slider */}
            <div className="flex flex-col gap-2 text-center bg-white/5 p-4 rounded-2xl border border-white/15">
              <div className="flex justify-between items-center px-1">
                <label htmlFor="rsvp-guests" className="font-inter text-xs uppercase tracking-wider text-white/90 font-normal">Jumlah Tamu</label>
                <span className="font-mono text-xs font-normal text-white flex items-center gap-1.5 bg-white/10 px-3 py-1 rounded-full">
                  <Users className="h-3.5 w-3.5" />
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
              className="w-full mt-2 rounded-xl bg-white py-3.5 text-center text-xs font-inter tracking-widest text-[#5b0612] uppercase hover:bg-white/90 transition-all font-normal flex items-center justify-center gap-2"
            >
              {isSubmitted ? (
                <>
                  <CheckCircle2 className="h-4 w-4" />
                  <span>Mengarahkan ke WA...</span>
                </>
              ) : (
                <>
                  <span>Kirim Reservasi via WhatsApp</span>
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
