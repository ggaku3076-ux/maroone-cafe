"use client";

import { useState, useMemo } from "react";
import { ShoppingBag, Plus, Minus, Trash2, CheckCircle2 } from "lucide-react";

interface VariantOption {
  type: string;
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
  beanType?: string;
  temp: "HOT" | "ICE";
  price: number;
  quantity: number;
}

export default function MenuSection() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [checkoutName, setCheckoutName] = useState("");
  const [isOrdered, setIsOrdered] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Exact Menu Items from espresso based.png grouped into 3 balanced columns
  const col1Items: MenuItem[] = [
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
  ];

  const col2Items: MenuItem[] = [
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
  ];

  const col3Items: MenuItem[] = [
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

  const totalItemsCount = useMemo(() => {
    return cart.reduce((t, i) => t + i.quantity, 0);
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

    let message = `Halo Maroone' Caffe, saya ingin memesan menu takeaway atas nama *${checkoutName}*:\n\n`;
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
      setIsCartOpen(false);
    }, 3000);
  };

  const renderMenuItem = (item: MenuItem) => (
    <div 
      key={item.id}
      className="flex flex-col items-start w-full border-b border-white/20 pb-4 last:border-0"
    >
      <div className="w-full flex flex-col items-start text-left">
        <span className="font-didot-italic text-lg sm:text-xl font-normal text-white tracking-wider uppercase">
          {item.name}
        </span>
        {item.description && (
          <span className="font-inter text-[10px] text-white/75 tracking-wider uppercase font-normal mt-0.5">
            {item.description}
          </span>
        )}
      </div>

      <div className="w-full flex flex-col gap-2 mt-2">
        {item.variants.map((v, idx) => (
          <div 
            key={idx}
            className="flex items-center justify-between w-full py-0.5 text-xs font-inter font-normal"
          >
            <span className="text-white/80 tracking-widest uppercase text-[11px]">
              {v.type !== "SIGNATURE" && v.type !== "CLASSIC" ? v.type : ""}
            </span>

            <div className="flex items-center gap-2">
              {v.hotPrice && (
                <button
                  onClick={() => addToCart(item, v, "HOT", v.hotPrice!)}
                  className="px-2 py-0.5 rounded bg-white/20 hover:bg-white text-white hover:text-[#5b0612] transition-all text-[10px] font-mono inline-flex items-center gap-1 border border-white/30"
                  title={`Tambah ${item.name} HOT`}
                >
                  <span>HOT {formatPrice(v.hotPrice)}</span>
                  <Plus className="h-2.5 w-2.5" />
                </button>
              )}

              {v.icePrice && (
                <button
                  onClick={() => addToCart(item, v, "ICE", v.icePrice!)}
                  className="px-2 py-0.5 rounded bg-white/20 hover:bg-white text-white hover:text-[#5b0612] transition-all text-[10px] font-mono inline-flex items-center gap-1 border border-white/30"
                  title={`Tambah ${item.name} ICE`}
                >
                  <span>ICE {formatPrice(v.icePrice)}</span>
                  <Plus className="h-2.5 w-2.5" />
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section 
      id="menu" 
      className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden"
      aria-labelledby="menu-title"
    >
      {/* 1920x1080 Canvas Container fitting screen aspect ratio without extra background color blocks */}
      <div className="relative w-full max-w-[1920px] min-h-screen md:min-h-[1080px] aspect-[1920/1080] flex flex-col items-center justify-center p-6 md:p-12">
        
        {/* Background Image: backround menu.png 1920x1080 - NO GRADIENT MASK */}
        <div className="absolute inset-0 z-0" aria-hidden="true">
          <img
            src="/Asset/backround menu.png"
            alt="Maroone Menu Background 1920x1080"
            className="h-full w-full object-cover object-center"
          />
        </div>

        {/* Header & 3-Column Parallel Horizontal Menu Grid directly overlaid on the 1920x1080 canvas */}
        <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col items-center text-center my-auto pt-16 pb-8">
          
          {/* Main Title: MAROONE' */}
          <h1 
            id="menu-title"
            className="font-didot-italic text-4xl sm:text-6xl font-normal text-white tracking-widest uppercase mb-1 drop-shadow"
          >
            MAROONE&apos;
          </h1>

          {/* Subtitle: ESPRESSO BASED */}
          <div className="border-t border-b border-white/40 px-12 py-1.5 my-3">
            <h2 className="font-didot-italic text-base sm:text-xl font-normal text-white tracking-widest uppercase">
              ESPRESSO BASED
            </h2>
          </div>

          {/* 3 Parallel Horizontal Columns Layout to fit all items seamlessly without scroll errors */}
          <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-8 text-left mt-6 px-4">
            
            {/* Column 1 */}
            <div className="flex flex-col gap-6">
              {col1Items.map(renderMenuItem)}
            </div>

            {/* Column 2 */}
            <div className="flex flex-col gap-6">
              {col2Items.map(renderMenuItem)}
            </div>

            {/* Column 3 */}
            <div className="flex flex-col gap-6">
              {col3Items.map(renderMenuItem)}
            </div>

          </div>

        </div>

        {/* Floating Cart Trigger Button */}
        {totalItemsCount > 0 && (
          <div className="fixed bottom-6 left-6 z-40">
            <button
              onClick={() => setIsCartOpen(true)}
              className="flex items-center gap-3 rounded-full bg-white px-6 py-3 text-[#5b0612] shadow-2xl hover:bg-white/90 transition-all border border-white/40"
            >
              <ShoppingBag className="h-4 w-4" />
              <span className="text-xs font-inter font-normal uppercase tracking-wider">
                Pesanan ({totalItemsCount})
              </span>
              <span className="font-mono text-xs font-normal border-l border-[#5b0612]/20 pl-3">
                {formatIDR(cartTotal)}
              </span>
            </button>
          </div>
        )}

      </div>

      {/* Cart Drawer Modal */}
      {isCartOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-[#5b0612] text-white rounded-3xl p-6 sm:p-8 max-w-md w-full border border-white/20 shadow-2xl flex flex-col gap-6 text-left">
            <div className="flex items-center justify-between border-b border-white/20 pb-4">
              <h3 className="font-didot-italic text-2xl font-normal text-white">Pesanan Anda</h3>
              <button
                onClick={() => setIsCartOpen(false)}
                className="text-xs font-inter text-white/70 hover:text-white"
              >
                Tutup
              </button>
            </div>

            <div className="flex flex-col gap-3 max-h-[300px] overflow-y-auto pr-1">
              {cart.map((ci) => (
                <div key={ci.cartId} className="flex items-center justify-between p-3 rounded-xl bg-white/10 border border-white/15">
                  <div className="flex flex-col text-left">
                    <span className="font-didot-italic text-base text-white">{ci.name}</span>
                    <span className="font-inter text-[11px] text-white/70">
                      {ci.beanType ? `${ci.beanType} • ` : ""}{ci.temp} ({formatIDR(ci.price)})
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => updateQuantity(ci.cartId, -1)}
                      className="p-1 rounded bg-white/10 hover:bg-white/20 text-white"
                    >
                      <Minus className="h-3 w-3" />
                    </button>
                    <span className="font-mono text-xs font-normal text-white min-w-[16px] text-center">
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
                      className="p-1 text-white/50 hover:text-white"
                    >
                      <Trash2 className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-white/20 pt-4 flex flex-col gap-4">
              <div className="flex justify-between items-center">
                <span className="text-xs font-inter text-white/80 uppercase">Total:</span>
                <span className="font-mono text-lg font-normal text-white">
                  {formatIDR(cartTotal)}
                </span>
              </div>

              <form onSubmit={handleWhatsAppSubmit} className="flex flex-col gap-3">
                <input
                  type="text"
                  placeholder="Masukkan nama Anda..."
                  required
                  value={checkoutName}
                  onChange={(e) => setCheckoutName(e.target.value)}
                  className="w-full px-4 py-2.5 text-xs rounded-xl bg-white/10 border border-white/30 text-white placeholder-white/50 focus:outline-none focus:border-white text-center font-inter font-normal"
                />
                <button
                  type="submit"
                  disabled={isOrdered}
                  className="w-full rounded-xl bg-white py-3 text-center text-xs font-inter tracking-wider text-[#5b0612] uppercase hover:bg-white/90 transition-all font-normal flex items-center justify-center gap-2"
                >
                  {isOrdered ? (
                    <>
                      <CheckCircle2 className="h-4 w-4" />
                      <span>Mengarahkan ke WA...</span>
                    </>
                  ) : (
                    <span>Kirim Pesanan via WhatsApp</span>
                  )}
                </button>
              </form>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}
