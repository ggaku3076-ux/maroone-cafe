"use client";

import { useState, useRef, useEffect } from "react";
import { X, Send, Bot, Sparkles, User, RefreshCw } from "lucide-react";

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
      text: "Selamat datang di Maroone' Caffe! ☕\nSaya asisten interaktif siap membantu menjelaskan varian menu Espresso Based, perbedaan biji Arabika & Robusta, hingga rekomendasi sajian kopi terbaik. Ada yang ingin Anda tanyakan?",
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

  const generateBotResponse = (userQuery: string): string => {
    const query = userQuery.toLowerCase();

    if (query.includes("beda") || query.includes("arabika") || query.includes("robusta") || query.includes("biji")) {
      return "Di Maroone' Caffe, kami menyediakan 2 karakter biji kopi pilihan:\n\n" +
        "• Arabika: Karakter rasa lebih fruity, aroma manis, dan asam segar yang lembut.\n" +
        "• Robusta: Karakter taste bold, nutty, kekentalan tinggi (full body), dan kafein mantap.\n\n" +
        "Varian Americano, Cappuccino, dan Caffe Latte dapat disajikan menggunakan Arabika atau Robusta!";
    }

    if (query.includes("magic") || query.includes("magic coffee")) {
      return "MAGIC Coffee (Arabika - Hot 23K):\n" +
        "Magic adalah sajian kopi khas Melbourne berbasis Double Ristretto dengan steamed milk lembut. Rasanya sangat seimbang dan manis alami susu menonjol!";
    }

    if (query.includes("segar") || query.includes("lemonade") || query.includes("dingin") || query.includes("ice cube")) {
      return "Rekomendasi Kopi Dingin:\n\n" +
        "1. Americano Lemonade (Ice 20K): Espresso pekat dengan sirup lemon segar.\n" +
        "2. Ice Cube (Ice 20K): Es batu espresso disiram susu segar dingin.\n" +
        "3. Caffe Latte Ice (Arabika 25K / Robusta 24K): Espresso dingin dengan foam susu lembut.";
    }

    if (query.includes("moccacino") || query.includes("cokelat") || query.includes("manis")) {
      return "Moccacino Latte (Hot 22K / Ice 22K):\n" +
        "Perpaduan espresso premium dengan cokelat berkualitas dan susu segar untuk Anda yang menyukai rasa manis-gurih cokelat.";
    }

    if (query.includes("harga") || query.includes("menu") || query.includes("daftar")) {
      return "Daftar Menu Espresso Based Maroone' Caffe:\n\n" +
        "• Americano: Arabika (Hot 18K / Ice 19K) | Robusta (Hot 16K / Ice 17K)\n" +
        "• Americano Lemonade: Ice 20K\n" +
        "• Cappuccino: Arabika (Hot 23K / Ice 25K) | Robusta (Hot 22K / Ice 24K)\n" +
        "• Magic: Arabika (Hot 23K)\n" +
        "• Moccacino Latte: Hot 22K / Ice 22K\n" +
        "• Caffe Latte: Arabika (Hot 23K / Ice 25K) | Robusta (Hot 22K / Ice 24K)\n" +
        "• Ice Cube: Ice 20K";
    }

    if (query.includes("reservasi") || query.includes("booking") || query.includes("tempat")) {
      return "Anda dapat melakukan simulasi reservasi tempat langsung pada halaman Reservasi atau menghubungi admin WhatsApp kami!";
    }

    return "Di Maroone' Caffe, kami menyajikan varian Espresso Based seperti Americano, Cappuccino, Magic, Moccacino Latte, Caffe Latte, Americano Lemonade, dan Ice Cube. Ada varian yang ingin Anda tanyakan?";
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
    }, 500);
  };

  return (
    <>
      {/* Floating Toggle Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center justify-center gap-2 rounded-full bg-[#5b0612] px-5 py-3.5 text-white shadow-xl hover:bg-[#7d0919] transition-all border border-white/20"
          aria-label="Buka Chatbot Maroone"
        >
          <Bot className="h-5 w-5 text-white" />
          <span className="text-xs font-inter font-normal tracking-wider uppercase hidden sm:inline-block">
            Asisten Menu
          </span>
        </button>
      </div>

      {/* Chatbot Modal Box */}
      {isOpen && (
        <div className="fixed bottom-24 right-4 sm:right-6 z-50 w-[calc(100vw-2rem)] sm:w-96 rounded-2xl bg-white shadow-2xl border border-[#5b0612]/20 flex flex-col overflow-hidden transition-all max-h-[520px] h-[480px]">
          
          {/* Header */}
          <div className="bg-[#5b0612] px-5 py-4 flex items-center justify-between text-white border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-full bg-white/10 border border-white/20 flex items-center justify-center">
                <Sparkles className="h-4 w-4 text-white" />
              </div>
              <div className="flex flex-col text-left">
                <span className="font-didot-italic text-lg text-white">Maroone Assistant</span>
                <span className="text-[10px] font-inter text-white/70">Tanya Jawab Menu &amp; Kopi</span>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                onClick={() => setMessages([
                  {
                    id: "reset",
                    sender: "bot",
                    text: "Percakapan direset. Ada yang ingin Anda tanyakan tentang menu Maroone' Caffe?",
                    timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
                  }
                ])}
                className="p-1 rounded text-white/80 hover:text-white"
              >
                <RefreshCw className="h-4 w-4" />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 rounded text-white/80 hover:text-white"
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
                  <div className="h-7 w-7 rounded-full bg-[#5b0612] text-white flex items-center justify-center shrink-0 mt-0.5 text-xs font-normal">
                    <Bot className="h-4 w-4" />
                  </div>
                )}
                
                <div
                  className={`max-w-[82%] rounded-2xl px-4 py-2.5 text-xs font-inter font-normal leading-relaxed ${
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
                  <div className="h-7 w-7 rounded-full bg-gray-200 text-[#5b0612] flex items-center justify-center shrink-0 mt-0.5 text-xs font-normal">
                    <User className="h-4 w-4" />
                  </div>
                )}
              </div>
            ))}

            {isTyping && (
              <div className="flex gap-2 items-center justify-start text-xs text-gray-400">
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
          <div className="px-3 py-2 bg-white border-t border-[#5b0612]/10 flex gap-1.5 overflow-x-auto">
            {quickQuestions.map((q, idx) => (
              <button
                key={idx}
                onClick={() => handleSendMessage(q)}
                className="shrink-0 rounded-full border border-[#5b0612]/20 bg-[#fdf8f6] px-3 py-1 text-[10px] font-inter font-normal text-[#5b0612] hover:bg-[#5b0612] hover:text-white transition-colors"
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
              placeholder="Ketik pertanyaan Anda..."
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              className="flex-1 rounded-xl border border-[#5b0612]/20 px-3.5 py-2 text-xs font-inter font-normal text-[#1f0307] focus:border-[#5b0612] focus:outline-none bg-[#fdf8f6]/30"
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
