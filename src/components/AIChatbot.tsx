"use client";

import { useState, useRef, useEffect } from "react";
import { MessageSquare, X, Send, Bot, Sparkles, User, RefreshCw } from "lucide-react";

interface Message {
  id: string;
  sender: "bot" | "user";
  text: string;
  timestamp: string;
}

export default function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [inputMessage, setInputMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome-1",
      sender: "bot",
      text: "Selamat datang di *Maroone' Caffe & Food*! ☕\nSaya AI Barista siap menjelaskan seluruh varian menu Espresso Based, perbedaan biji Arabika & Robusta, hingga saran minuman terbaik untuk Anda. Ada yang bisa saya bantu?",
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    },
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const quickQuestions = [
    "Apa beda Arabika & Robusta?",
    "Rekomendasi kopi segar?",
    "Apa itu Magic Coffee?",
    "Daftar harga menu lengkap",
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen, isTyping]);

  // Smart Response Engine for Maroone Caffe Menu
  const generateBotResponse = (userQuery: string): string => {
    const query = userQuery.toLowerCase();

    if (query.includes("beda") || query.includes("arabika") || query.includes("robusta") || query.includes("biji")) {
      return "Di Maroone' Caffe, kami menyediakan 2 jenis karakter biji kopi pilihan:\n\n" +
        "• *Arabika*: Memiliki karakter rasa lebih fruity, aroma floral yang manis, dan asam segar yang lembut dengan kafein sedang.\n" +
        "• *Robusta*: Memiliki karakter taste bold, nutty, kekentalan tinggi (full body), pahit khas yang mantap, dan kafein lebih kuat.\n\n" +
        "Menu seperti Americano, Cappuccino, dan Caffe Latte bisa Anda pilih menggunakan racikan Arabika atau Robusta!";
    }

    if (query.includes("magic") || query.includes("magic coffee")) {
      return "✨ *MAGIC Coffee (Arabika - Hot 23K)*:\n" +
        "Magic adalah sajian kopi khas Melbourne berbasis Double Ristretto dengan racikan steamed milk yang sedikit lebih tipis dari Cappuccino. Rasanya sangat balance, manis alami susu menonjol, dan aroma Arabika yang pekat!";
    }

    if (query.includes("segar") || query.includes("lemonade") || query.includes("dingin") || query.includes("ice cube")) {
      return "🥤 *Rekomendasi Kopi Dingin & Menyegarkan*:\n\n" +
        "1. *Americano Lemonade (Ice 20K)*: Perpaduan espresso pekat dengan sirup lemon segar yang memberikan sensasi manis-asam dingin.\n" +
        "2. *Ice Cube (Ice 20K)*: Es batu espresso pekat disiram susu segar dingin yang meleleh perlahan saat Anda nikmati.\n" +
        "3. *Caffe Latte Ice (Arabika 25K / Robusta 24K)*: Espresso dingin dengan microfoam susu yang lembut.";
    }

    if (query.includes("moccacino") || query.includes("cokelat") || query.includes("manis")) {
      return "🍫 *Moccacino Latte (Hot 22K / Ice 22K)*:\n" +
        "Sajian espresso premium yang dipadukan dengan cokelat berkualitas dan susu segar. Pilihan terbaik bagi Anda yang menyukai sentuhan rasa manis-gurih cokelat padat!";
    }

    if (query.includes("harga") || query.includes("menu") || query.includes("daftar")) {
      return "📋 *Daftar Menu Espresso Based Maroone' Caffe*:\n\n" +
        "• *Americano*: Arabika (Hot 18K / Ice 19K) | Robusta (Hot 16K / Ice 17K)\n" +
        "• *Americano Lemonade*: Ice 20K\n" +
        "• *Cappuccino*: Arabika (Hot 23K / Ice 25K) | Robusta (Hot 22K / Ice 24K)\n" +
        "• *Magic*: Arabika (Hot 23K)\n" +
        "• *Moccacino Latte*: Hot 22K / Ice 22K\n" +
        "• *Caffe Latte*: Arabika (Hot 23K / Ice 25K) | Robusta (Hot 22K / Ice 24K)\n" +
        "• *Ice Cube*: Ice 20K";
    }

    if (query.includes("cappuccino")) {
      return "☕ *Cappuccino*:\nPerpaduan seimbang antara espresso, steamed milk, dan lapisan foam tebal di atasnya.\n• Arabika: Hot 23K | Ice 25K\n• Robusta: Hot 22K | Ice 24K";
    }

    if (query.includes("latte") || query.includes("caffe latte")) {
      return "🥛 *Caffe Latte*:\nEspresso dengan porsi susu steamed lebih banyak dan rasa yang lebih creamy masif.\n• Arabika: Hot 23K | Ice 25K\n• Robusta: Hot 22K | Ice 24K";
    }

    if (query.includes("reservasi") || query.includes("booking") || query.includes("tempat")) {
      return "🏛️ *Reservasi Tempat & Acara*:\nAnda dapat melakukan simulasi reservasi tempat langsung pada seksi Reservasi di halaman utama web ini atau menghubungi WhatsApp admin kami!";
    }

    return "Terima kasih atas pertanyaannya! Di Maroone' Caffe, kami menyajikan varian Espresso Based berkualitas tinggi seperti Americano, Cappuccino, Magic, Moccacino Latte, Caffe Latte, Americano Lemonade, dan Ice Cube dengan pilihan biji Arabika atau Robusta. Ada varian tertentu yang ingin Anda tanyakan?";
  };

  const handleSendMessage = (textToSend?: string) => {
    const messageText = textToSend || inputMessage;
    if (!messageText.trim()) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      sender: "user",
      text: messageText,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInputMessage("");
    setIsTyping(true);

    // Simulate AI response delay
    setTimeout(() => {
      const responseText = generateBotResponse(messageText);
      const botMsg: Message = {
        id: (Date.now() + 1).toString(),
        sender: "bot",
        text: responseText,
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      };
      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 700);
  };

  const handleResetChat = () => {
    setMessages([
      {
        id: "welcome-reset",
        sender: "bot",
        text: "Percakapan telah direset. Ada menu Maroone' Caffe lainnya yang ingin Anda tanyakan?",
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      },
    ]);
  };

  return (
    <>
      {/* Floating Toggle Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative flex items-center justify-center gap-2 rounded-full bg-[#5b0612] px-5 py-3.5 text-white shadow-2xl hover:bg-[#7d0919] transition-all duration-300 transform hover:scale-105 border border-white/20 group"
          aria-label="Buka AI Chatbot Maroone"
        >
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white/70 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
          </span>
          <Bot className="h-5 w-5 text-white" />
          <span className="text-xs font-bold font-didot-italic tracking-wider uppercase hidden sm:inline-block">
            Maroone AI Barista
          </span>
        </button>
      </div>

      {/* Chatbot Modal Box */}
      {isOpen && (
        <div className="fixed bottom-24 right-4 sm:right-6 z-50 w-[calc(100vw-2rem)] sm:w-96 rounded-2xl bg-white shadow-2xl border border-[#5b0612]/20 flex flex-col overflow-hidden transition-all duration-300 max-h-[550px] h-[500px]">
          
          {/* Header */}
          <div className="bg-[#5b0612] px-5 py-4 flex items-center justify-between text-white border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-full bg-white/10 border border-white/20 flex items-center justify-center">
                <Sparkles className="h-5 w-5 text-white" />
              </div>
              <div className="flex flex-col text-left">
                <h3 className="font-didot-italic text-lg font-bold tracking-wide">Maroone AI Barista</h3>
                <span className="text-[10px] text-white/70 flex items-center gap-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
                  Asisten Menu Interaktif
                </span>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                onClick={handleResetChat}
                title="Reset Percakapan"
                className="p-1.5 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-colors"
              >
                <RefreshCw className="h-4 w-4" />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                title="Tutup Chat"
                className="p-1.5 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Messages Body */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-[#fdf8f6]/50">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex gap-2.5 ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
              >
                {msg.sender === "bot" && (
                  <div className="h-7 w-7 rounded-full bg-[#5b0612] text-white flex items-center justify-center shrink-0 mt-0.5 text-xs">
                    <Bot className="h-4 w-4" />
                  </div>
                )}
                
                <div
                  className={`max-w-[82%] rounded-2xl px-4 py-2.5 text-xs leading-relaxed ${
                    msg.sender === "user"
                      ? "bg-[#5b0612] text-white rounded-br-none"
                      : "bg-white text-[#1f0307] border border-[#5b0612]/10 rounded-bl-none shadow-sm"
                  }`}
                >
                  <p className="whitespace-pre-line">{msg.text}</p>
                  <span
                    className={`block text-[9px] mt-1 text-right ${
                      msg.sender === "user" ? "text-white/60" : "text-gray-400"
                    }`}
                  >
                    {msg.timestamp}
                  </span>
                </div>

                {msg.sender === "user" && (
                  <div className="h-7 w-7 rounded-full bg-gray-200 text-[#5b0612] flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">
                    <User className="h-4 w-4" />
                  </div>
                )}
              </div>
            ))}

            {isTyping && (
              <div className="flex gap-2.5 items-center justify-start text-xs text-gray-400">
                <div className="h-7 w-7 rounded-full bg-[#5b0612] text-white flex items-center justify-center shrink-0">
                  <Bot className="h-4 w-4" />
                </div>
                <div className="bg-white border border-[#5b0612]/10 rounded-2xl px-4 py-2 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-[#5b0612] rounded-full animate-bounce"></span>
                  <span className="w-1.5 h-1.5 bg-[#5b0612] rounded-full animate-bounce [animation-delay:0.2s]"></span>
                  <span className="w-1.5 h-1.5 bg-[#5b0612] rounded-full animate-bounce [animation-delay:0.4s]"></span>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick Action Chips */}
          <div className="px-3 py-2 bg-white border-t border-[#5b0612]/10 flex gap-1.5 overflow-x-auto no-scrollbar">
            {quickQuestions.map((q, idx) => (
              <button
                key={idx}
                onClick={() => handleSendMessage(q)}
                className="shrink-0 rounded-full border border-[#5b0612]/20 bg-[#fdf8f6] px-3 py-1 text-[10px] font-semibold text-[#5b0612] hover:bg-[#5b0612] hover:text-white transition-colors"
              >
                {q}
              </button>
            ))}
          </div>

          {/* Input Form */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage();
            }}
            className="p-3 bg-white border-t border-[#5b0612]/10 flex items-center gap-2"
          >
            <input
              type="text"
              placeholder="Tanyakan tentang menu Maroone..."
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              className="flex-1 rounded-xl border border-[#5b0612]/20 px-3.5 py-2 text-xs text-[#1f0307] focus:border-[#5b0612] focus:outline-none bg-[#fdf8f6]/30"
            />
            <button
              type="submit"
              disabled={!inputMessage.trim()}
              className="rounded-xl bg-[#5b0612] p-2 text-white hover:bg-[#7d0919] disabled:opacity-50 transition-colors"
            >
              <Send className="h-4 w-4" />
            </button>
          </form>

        </div>
      )}
    </>
  );
}
