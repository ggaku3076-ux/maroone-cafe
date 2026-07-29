"use client";

import { useState, useMemo } from "react";
import { Coffee, ShoppingBag, Plus, Minus, Trash2, CheckCircle2, Sparkles } from "lucide-react";

interface VariantOption {
  type: string; // e.g. "Arabika", "Robusta", or standard
  hotPrice?: number;
  icePrice?: number;
}

interface MenuItem {
  id: string;
  name: string;
  category: "espresso";
  description?: string;
  variants: VariantOption[];
}

interface CartItem {
  cartId: string;
  menuId: string;
  name: string;
  beanType?: string; // "Arabika" or "Robusta"
  temp: "HOT" | "ICE";
  price: number;
  quantity: number;
}

export default function MenuSection() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [checkoutName, setCheckoutName] = useState("");
  const [isOrdered, setIsOrdered] = useState(false);

  // Exact Menu Items from espresso based.png
  const espressoMenuItems: MenuItem[] = [
    {
      id: "e-1",
      name: "AMERICANO",
      category: "espresso",
      variants: [
        { type: "ARABIKA", hotPrice: 18000, icePrice: 19000 },
        { type: "ROBUSTA", hotPrice: 16000, icePrice: 17000 },
      ],
    },
    {
      id: "e-2",
      name: "AMERICANO LEMONADE",
      category: "espresso",
      description: "AMERICANO WITH LEMON SYRUP.",
      variants: [
        { type: "SIGNATURE", icePrice: 20000 },
      ],
    },
    {
      id: "e-3",
      name: "CAPPUCCINO",
      category: "espresso",
      variants: [
        { type: "ARABIKA", hotPrice: 23000, icePrice: 25000 },
        { type: "ROBUSTA", hotPrice: 22000, icePrice: 24000 },
      ],
    },
    {
      id: "e-4",
      name: "MAGIC",
      category: "espresso",
      variants: [
        { type: "ARABIKA", hotPrice: 23000 },
      ],
    },
    {
      id: "e-5",
      name: "MOCCACINO LATTE",
      category: "espresso",
      description: "ESPRESSO WITH CHOCOLATTE",
      variants: [
        { type: "CLASSIC", hotPrice: 22000, icePrice: 22000 },
      ],
    },
    {
      id: "e-6",
      name: "CAFFE LATTE",
      category: "espresso",
      variants: [
        { type: "ARABIKA", hotPrice: 23000, icePrice: 25000 },
        { type: "ROBUSTA", hotPrice: 22000, icePrice: 24000 },
      ],
    },
    {
      id: "e-7",
      name: "ICE CUBE",
      category: "espresso",
      description: "ESPRESSO WITH MILK",
      variants: [
        { type: "SIGNATURE", icePrice: 20000 },
      ],
    },
  ];

  // Add Item to Cart
  const addToCart = (item: MenuItem, variant: VariantOption, temp: "HOT" | "ICE", price: number) => {
    const beanLabel = variant.type !== "SIGNATURE" && variant.type !== "CLASSIC" ? variant.type : undefined;
    const cartId = `${item.id}-${variant.type}-${temp}`;

    setCart((prevCart) => {
      const existing = prevCart.find((ci) => ci.cartId === cartId);
      if (existing) {
        return prevCart.map((ci) =>
          ci.cartId === cartId ? { ...ci, quantity: ci.quantity + 1 } : ci
        );
      }
      return [
        ...prevCart,
        {
          cartId,
          menuId: item.id,
          name: item.name,
          beanType: beanLabel,
          temp,
          price,
          quantity: 1,
        },
      ];
    });
  };

  const updateQuantity = (cartId: string, delta: number) => {
    setCart((prevCart) =>
      prevCart
        .map((ci) => {
          if (ci.cartId === cartId) {
            const newQty = ci.quantity + delta;
            return { ...ci, quantity: newQty };
          }
          return ci;
        })
        .filter((ci) => ci.quantity > 0)
    );
  };

  const removeFromCart = (cartId: string) => {
    setCart((prevCart) => prevCart.filter((ci) => ci.cartId !== cartId));
  };

  const cartTotal = useMemo(() => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  }, [cart]);

  const formatPrice = (val: number) => {
    return (val / 1000) + "K";
  };

  const formatIDR = (val: number) => {
    return "Rp " + val.toLocaleString("id-ID");
  };

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (cart.length === 0 || !checkoutName.trim()) return;

    let message = `Halo Maroone' Caffe & Food, saya ingin memesan menu takeaway atas nama *${checkoutName}*:\n\n`;
    cart.forEach((item) => {
      const beanStr = item.beanType ? ` (${item.beanType})` : "";
      message += `- *${item.name}${beanStr} [${item.temp}]* x ${item.quantity} = ${formatIDR(item.price * item.quantity)}\n`;
    });
    message += `\n*Total Estimasi:* ${formatIDR(cartTotal)}\n`;
    message += `Mohon konfirmasi pesanan dan waktu penyiapan. Terima kasih!`;

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/6282231144930?text=${encoded}`, "_blank");

    setIsOrdered(true);
    setTimeout(() => {
      setIsOrdered(false);
      setCart([]);
      setCheckoutName("");
    }, 3000);
  };

  return (
    <section 
      id="menu" 
      className="relative min-h-screen py-24 md:py-32 bg-[#3b040b] text-white overflow-hidden"
      aria-labelledby="menu-title"
    >
      {/* === BACKGROUND IMAGE FOR MENU SECTION === */}
      {/* Using /Asset/backround menu.png as instructed */}
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <img
          src="/Asset/backround menu.png"
          alt="Maroone Menu Background"
          className="h-full w-full object-cover object-center"
        />
        {/* Soft dark maroon gradient overlay for contrast & readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#3b040b]/90 via-[#5b0612]/85 to-[#3b040b]/95" />
      </div>

      {/* Main Container */}
      <div className="relative z-10 mx-auto max-w-6xl px-4 md:px-8">
        
        {/* Header Title - Centered & Didot Italic */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-didot-italic text-lg md:text-xl font-bold tracking-widest text-white/80 uppercase block">
            MAROONE&apos;
          </span>
          <h2 
            id="menu-title" 
            className="font-didot-italic text-4xl sm:text-6xl font-normal text-white tracking-widest mt-2 uppercase border-b-2 border-white/20 pb-4 inline-block"
          >
            ESPRESSO BASED
          </h2>
          <p className="text-xs sm:text-sm text-white/80 mt-4 tracking-wider uppercase font-light">
            Sajian Kopi Autentik Berbahan Dasar Espresso Premium
          </p>
        </div>

        {/* Menu & Cart Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Main Menu Column - Centered Text (Col-8) */}
          <div className="lg:col-span-8 flex flex-col gap-8 bg-[#5b0612]/60 backdrop-blur-md p-6 sm:p-10 rounded-3xl border border-white/20 shadow-2xl">
            
            {/* Header Table Columns: HOT & ICE */}
            <div className="hidden sm:grid grid-cols-12 gap-4 border-b border-white/20 pb-3 text-center font-didot-italic text-sm font-bold tracking-widest text-white/90">
              <div className="col-span-6 text-center uppercase">VARIAN / MENU</div>
              <div className="col-span-3 text-center uppercase">HOT</div>
              <div className="col-span-3 text-center uppercase">ICE</div>
            </div>

            {/* Menu Items Loop - Strictly Centered */}
            <div className="flex flex-col gap-8">
              {espressoMenuItems.map((item) => (
                <div key={item.id} className="flex flex-col items-center text-center border-b border-white/10 pb-6 last:border-0 last:pb-0">
                  
                  {/* Menu Name */}
                  <h3 className="font-didot-italic text-2xl sm:text-3xl font-bold text-white tracking-wider uppercase">
                    {item.name}
                  </h3>

                  {/* Optional Description */}
                  {item.description && (
                    <p className="text-[11px] text-white/70 tracking-widest mt-1 uppercase font-light max-w-md">
                      {item.description}
                    </p>
                  )}

                  {/* Variant list & prices */}
                  <div className="w-full mt-4 flex flex-col gap-3">
                    {item.variants.map((v, idx) => (
                      <div 
                        key={idx} 
                        className="grid grid-cols-1 sm:grid-cols-12 gap-3 items-center text-center py-2 px-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors border border-white/10"
                      >
                        {/* Variant label */}
                        <div className="sm:col-span-6 text-center">
                          <span className="font-sans text-xs font-bold text-white/90 tracking-widest uppercase">
                            {v.type !== "SIGNATURE" && v.type !== "CLASSIC" ? v.type : item.name}
                          </span>
                        </div>

                        {/* HOT Option */}
                        <div className="sm:col-span-3 flex items-center justify-center gap-2">
                          {v.hotPrice ? (
                            <button
                              onClick={() => addToCart(item, v, "HOT", v.hotPrice!)}
                              className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white text-white hover:text-[#5b0612] transition-all text-xs font-bold font-mono tracking-wider flex items-center gap-1.5 border border-white/20 shadow-sm"
                              title={`Tambah ${item.name} HOT ke keranjang`}
                            >
                              <span>HOT {formatPrice(v.hotPrice)}</span>
                              <Plus className="h-3 w-3" />
                            </button>
                          ) : (
                            <span className="text-xs text-white/30 font-mono">-</span>
                          )}
                        </div>

                        {/* ICE Option */}
                        <div className="sm:col-span-3 flex items-center justify-center gap-2">
                          {v.icePrice ? (
                            <button
                              onClick={() => addToCart(item, v, "ICE", v.icePrice!)}
                              className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white text-white hover:text-[#5b0612] transition-all text-xs font-bold font-mono tracking-wider flex items-center gap-1.5 border border-white/20 shadow-sm"
                              title={`Tambah ${item.name} ICE ke keranjang`}
                            >
                              <span>ICE {formatPrice(v.icePrice)}</span>
                              <Plus className="h-3 w-3" />
                            </button>
                          ) : (
                            <span className="text-xs text-white/30 font-mono">-</span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>

                </div>
              ))}
            </div>

          </div>

          {/* Interactive Order Sidebar (Col-4) */}
          <div className="lg:col-span-4 sticky top-28">
            <div className="bg-[#5b0612]/90 backdrop-blur-md rounded-3xl p-6 flex flex-col gap-6 border border-white/30 shadow-2xl text-center">
              
              <div className="flex items-center justify-center gap-2 border-b border-white/20 pb-4">
                <ShoppingBag className="h-5 w-5 text-white" aria-hidden="true" />
                <h3 className="font-didot-italic font-bold text-xl text-white tracking-wide">
                  Simulasi Pesanan
                </h3>
              </div>

              {/* Cart List */}
              {cart.length === 0 ? (
                <div className="py-10 text-center">
                  <Coffee className="h-10 w-10 text-white/40 mx-auto mb-3" />
                  <p className="text-xs text-white/80 uppercase tracking-wider font-medium">Keranjang Pesanan Kosong</p>
                  <p className="text-[10px] text-white/60 mt-1">Pilih tombol HOT atau ICE di sebelah kiri untuk menambah menu.</p>
                </div>
              ) : (
                <div className="flex flex-col gap-3 max-h-[280px] overflow-y-auto pr-1">
                  {cart.map((ci) => (
                    <div key={ci.cartId} className="flex items-center justify-between gap-2 p-3 rounded-xl bg-white/10 border border-white/15 text-left">
                      <div className="flex flex-col">
                        <span className="font-bold text-white text-xs tracking-wide">{ci.name}</span>
                        <span className="text-[10px] text-white/70">
                          {ci.beanType ? `${ci.beanType} • ` : ""}{ci.temp} ({formatIDR(ci.price)})
                        </span>
                      </div>
                      
                      <div className="flex items-center gap-1.5 shrink-0">
                        <button
                          onClick={() => updateQuantity(ci.cartId, -1)}
                          className="p-1 rounded bg-white/10 hover:bg-white/20 text-white"
                        >
                          <Minus className="h-3 w-3" />
                        </button>
                        <span className="font-mono text-xs font-bold text-white min-w-[18px] text-center">
                          {ci.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(ci.cartId, 1)}
                          className="p-1 rounded bg-white/10 hover:bg-white/20 text-white"
                        >
                          <Plus className="h-3 w-3" />
                        </button>
                        <button
                          onClick={() => removeFromCart(ci.cartId)}
                          className="p-1 text-white/50 hover:text-white ml-1"
                        >
                          <Trash2 className="h-3.5 w-3.5" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Total & Checkout */}
              <div className="border-t border-white/20 pt-4 flex flex-col gap-4">
                <div className="flex justify-between items-center px-2">
                  <span className="text-xs font-semibold text-white/80 uppercase">Total Estimasi:</span>
                  <span className="font-mono text-xl font-bold text-white">
                    {formatIDR(cartTotal)}
                  </span>
                </div>

                {cart.length > 0 && (
                  <form onSubmit={handleWhatsAppSubmit} className="flex flex-col gap-3">
                    <input
                      type="text"
                      placeholder="Masukkan nama Anda..."
                      required
                      value={checkoutName}
                      onChange={(e) => setCheckoutName(e.target.value)}
                      className="w-full px-4 py-2.5 text-xs rounded-xl bg-white/10 border border-white/30 text-white placeholder-white/50 focus:outline-none focus:border-white text-center"
                    />
                    <button
                      type="submit"
                      disabled={isOrdered}
                      className="w-full rounded-xl bg-white py-3 text-center text-xs font-bold tracking-wider text-[#5b0612] uppercase hover:bg-white/90 transition-all duration-200 shadow-lg flex items-center justify-center gap-2"
                    >
                      {isOrdered ? (
                        <>
                          <CheckCircle2 className="h-4 w-4" />
                          <span>Mengarahkan ke WA...</span>
                        </>
                      ) : (
                        <span>Pesan Takeaway via WA</span>
                      )}
                    </button>
                  </form>
                )}
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
