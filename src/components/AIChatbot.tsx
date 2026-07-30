"use client";

import { useState, useRef, useEffect } from "react";
import { X, Send, Bot, Sparkles, User, RefreshCw, MessageCircle, ExternalLink } from "lucide-react";

interface WAAction {
  url: string;
  buttonText: string;
}

interface Message {
  id: string;
  sender: "bot" | "user";
  text: string;
  timestamp: string;
  waAction?: WAAction;
}

export default function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [inputMessage, setInputMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome-1",
      sender: "bot",
      text: "Selamat datang di Maroone' Caffe & Food! ☕\nSaya asisten AI siap membantu menjelaskan varian menu Espresso Based, perbedaan biji Arabika & Robusta, lokasi Jombang, hingga rekomendasi sajian kopi terbaik. Ada yang ingin Anda tanyakan?",
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    },
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const WA_NUMBER = "6285546546760"; // Formatted for wa.me (0855-4654-6760)

  const quickQuestions = [
    "💬 Hubungi CS via WA",
    "Apa beda Arabika & Robusta?",
    "Rekomendasi kopi segar?",
    "Apa itu Magic Coffee?",
    "Daftar harga menu lengkap",
    "Alamat & lokasi Maroone",
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen, isTyping]);

  // Helper to check WhatsApp intent
  const isWhatsAppIntent = (text: string): boolean => {
    const q = text.toLowerCase();
    return (
      q.includes("info lengkap") ||
      q.includes("wa") ||
      q.includes("whatsapp") ||
      q.includes("cs") ||
      q.includes("customer service") ||
      q.includes("hubungi") ||
      q.includes("kontak") ||
      q.includes("reservasi via wa") ||
      q.includes("tanya cs")
    );
  };

  // Helper to construct wa.me URL with pre-filled message
  const createWAUrl = (customText?: string): string => {
    const defaultText = customText || "Halo Maroone' Caffe, saya butuh informasi lengkap dari website.";
    return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(defaultText)}`;
  };

  const handleSendMessage = async (textToSend?: string) => {
    const messageText = textToSend || inputMessage;
    if (!messageText.trim()) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      sender: "user",
      text: messageText,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    const updatedMessages = [...messages, userMsg];
    setMessages(updatedMessages);
    if (!textToSend) setInputMessage("");
    setIsTyping(true);

    const hasWAIntent = isWhatsAppIntent(messageText);

    try {
      // Call server route /api/chat securely
      const apiMessages = updatedMessages.map((m) => ({
        role: m.sender === "user" ? "user" : "assistant",
        content: m.text,
      }));

      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: apiMessages }),
      });

      if (res.ok) {
        const data = await res.json();
        if (data.reply) {
          let botReplyText = data.reply;
          let waActionObj: WAAction | undefined = undefined;

          if (hasWAIntent || isWhatsAppIntent(botReplyText)) {
            const waUrl = createWAUrl(`Halo Maroone' Caffe, saya ingin menanyakan: "${messageText}"`);
            waActionObj = {
              url: waUrl,
              buttonText: "Hubungi CS via WhatsApp",
            };

            botReplyText = `${botReplyText}\n\n📲 *Mengalihkan Anda ke WhatsApp Customer Service Maroone' Caffe dalam 2 detik...*`;

            // Cara 1: Automated Action - Auto Open WhatsApp Tab in 1.5s
            setTimeout(() => {
              window.open(waUrl, "_blank");
            }, 1500);
          }

          setMessages((prev) => [
            ...prev,
            {
              id: (Date.now() + 1).toString(),
              sender: "bot",
              text: botReplyText,
              timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
              waAction: waActionObj,
            },
          ]);
          setIsTyping(false);
          return;
        }
      }
    } catch (e) {
      console.warn("Falling back to local knowledge base");
    }

    // Local fallback logic
    let replyText = "Di Maroone' Caffe & Food F&B, kami menyajikan varian Espresso Based (Americano, Cappuccino, Magic, Moccacino Latte, Caffe Latte, Americano Lemonade, Ice Cube) berbahan Arabika & Robusta. Alamat kami di Jl. Kertajaya, Kepanjen, Jombang (WA: 0855-4654-6760).";
    let waActionObj: WAAction | undefined = undefined;

    const q = messageText.toLowerCase();

    if (hasWAIntent) {
      const waUrl = createWAUrl(`Halo Maroone' Caffe, saya ingin menanyakan: "${messageText}"`);
      replyText = "Tentu! Saya alihkan Anda ke WhatsApp Customer Service Maroone' Caffe (0855-4654-6760) untuk mendapatkan info lengkap dan pelayanan langsung.\n\n📲 *Membuka WhatsApp secara otomatis...*";
      waActionObj = {
        url: waUrl,
        buttonText: "Hubungi CS via WhatsApp",
      };

      // Cara 1: Auto Redirect
      setTimeout(() => {
        window.open(waUrl, "_blank");
      }, 1500);

    } else if (q.includes("beda") || q.includes("arabika") || q.includes("robusta")) {
      replyText = "Perbandingan Biji Kopi Maroone':\n• Arabika: Fruity, aroma floral manis, asam segar lembut, kafein sedang.\n• Robusta: Taste bold, nutty, full body, pahit mantap, kafein kuat.";
    } else if (q.includes("magic")) {
      replyText = "MAGIC Coffee (Arabika - Hot 23K):\nSajian khas Melbourne berbasis Double Ristretto Arabika dengan steamed milk lembut seimbang!";
    } else if (q.includes("harga") || q.includes("menu")) {
      replyText = "Daftar Menu Espresso Based:\n• Americano: Arabika (Hot 18K / Ice 19K) | Robusta (Hot 16K / Ice 17K)\n• Americano Lemonade: Ice 20K\n• Cappuccino: Arabika (Hot 23K / Ice 25K) | Robusta (Hot 22K / Ice 24K)\n• Magic: Arabika (Hot 23K)\n• Moccacino Latte: Hot 22K / Ice 22K\n• Caffe Latte: Arabika (Hot 23K / Ice 25K) | Robusta (Hot 22K / Ice 24K)\n• Ice Cube: Ice 20K";
    } else if (q.includes("alamat") || q.includes("lokasi") || q.includes("jombang")) {
      replyText = "Alamat Maroone' Caffe:\nJl. Kertajaya, Kepanjen, Kec. Jombang, Kabupaten Jombang, Jawa Timur 61411 (Telepon/WA: 0855-4654-6760).";
    }

    setMessages((prev) => [
      ...prev,
      {
        id: (Date.now() + 1).toString(),
        sender: "bot",
        text: replyText,
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        waAction: waActionObj,
      },
    ]);
    setIsTyping(false);
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
            Asisten AI
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
                <span className="font-didot-italic text-lg text-white">Maroone AI Assistant</span>
                <span className="text-[10px] font-inter text-white/70">Powered by GPT-4o &amp; WA CS</span>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                onClick={() => setMessages([
                  {
                    id: "reset",
                    sender: "bot",
                    text: "Percakapan direset. Ada yang ingin Anda tanyakan tentang menu atau lokasi Maroone' Caffe?",
                    timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
                  }
                ])}
                className="p-1 rounded text-white/80 hover:text-white"
                title="Reset Chat"
              >
                <RefreshCw className="h-4 w-4" />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 rounded text-white/80 hover:text-white"
                title="Tutup Chat"
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
                  className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-xs font-inter font-normal leading-relaxed ${
                    msg.sender === "user"
                      ? "bg-[#5b0612] text-white rounded-br-none"
                      : "bg-white text-[#1f0307] border border-[#5b0612]/10 rounded-bl-none shadow-sm flex flex-col gap-2.5"
                  }`}
                >
                  <p className="whitespace-pre-line">{msg.text}</p>

                  {/* Cara 2: Interactive Card / WhatsApp Action Button inside Chat Bubble */}
                  {msg.waAction && (
                    <div className="pt-1">
                      <a
                        href={msg.waAction.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 w-full justify-center rounded-xl bg-[#25D366] px-4 py-2.5 text-xs font-medium text-white shadow-md hover:bg-[#20bd5a] transition-all duration-200 border border-green-600/30"
                      >
                        <MessageCircle className="h-4 w-4 fill-white" />
                        <span>{msg.waAction.buttonText}</span>
                        <ExternalLink className="h-3 w-3 opacity-80" />
                      </a>
                    </div>
                  )}

                  <span
                    className={`block text-[9px] text-right ${
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
