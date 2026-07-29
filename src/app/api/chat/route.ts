import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();
    const apiKey = process.env.OPENAI_API_KEY || "sk-KKiW0f5k12EYE1AGbnMcyw";
    const model = process.env.OPENAI_MODEL || "gpt-4o";

    if (!apiKey) {
      return NextResponse.json(
        { error: "API Key not configured" },
        { status: 500 }
      );
    }

    const systemPrompt = {
      role: "system",
      content: `Anda adalah Maroone AI Barista, asisten layanan pelanggan resmi Maroone' Caffe & Food F&B di Kabupaten Jombang (Alamat: Jl. Kertajaya, Kepanjen, Kec. Jombang, Jawa Timur 61411, WA: 0855-4654-6760).
Pengetahuan Menu Espresso Based Maroone' Caffe:
1. AMERICANO: Arabika (Hot 18K / Ice 19K) | Robusta (Hot 16K / Ice 17K)
2. AMERICANO LEMONADE: Espresso dengan sirup lemon segar (Ice 20K)
3. CAPPUCCINO: Arabika (Hot 23K / Ice 25K) | Robusta (Hot 22K / Ice 24K)
4. MAGIC: Double Ristretto Arabika dengan steamed milk seimbang khas Melbourne (Hot 23K)
5. MOCCACINO LATTE: Espresso dipadukan dengan cokelat berkualitas & susu segar (Hot 22K / Ice 22K)
6. CAFFE LATTE: Arabika (Hot 23K / Ice 25K) | Robusta (Hot 22K / Ice 24K)
7. ICE CUBE: Es batu espresso disiram susu segar dingin (Ice 20K)

Karakter Biji Kopi:
- Arabika: Fruity, aroma floral manis, asam segar lembut, kafein sedang.
- Robusta: Taste bold, nutty, full body, pahit mantap, kafein kuat.

Berikan jawaban yang ramah, ringkas, sopan, dan jelas dalam Bahasa Indonesia.`,
    };

    // Calling Sumopod AI Endpoint (https://ai.sumopod.com/v1/chat/completions)
    const response = await fetch("https://ai.sumopod.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: model,
        messages: [systemPrompt, ...(messages || [])],
        temperature: 0.7,
        max_tokens: 400,
      }),
    });

    if (!response.ok) {
      const errorData = await response.text();
      console.error("Sumopod AI API Error:", errorData);
      return NextResponse.json(
        { error: "Gagal terhubung ke layanan AI Sumopod" },
        { status: response.status }
      );
    }

    const data = await response.json();
    const reply = data.choices[0]?.message?.content || "Maaf, terjadi kendala saat memproses jawaban.";

    return NextResponse.json({ reply });
  } catch (error: any) {
    console.error("Server API route error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
