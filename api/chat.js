import OpenAI from "openai";

export default async function handler(req, res) {
  try {
    const message = req.query.message;

    if (!message) {
      return res.status(400).json({ reply: "Mesaj boş." });
    }

    if (!process.env.OPENAI_API_KEY) {
      return res.status(500).json({ reply: "API KEY bulunamadı." });
    }

    const client = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY
    });

    const response = await client.responses.create({
      model: "gpt-4.1",
      input: `Sen Türkçe konuşan, zeki, hızlı cevap veren bir yapay zekasın.
Adın Turan AI.

Kullanıcı: ${message}
Turan AI:`
    });

    res.status(200).json({
      reply: response.output_text || "Cevap üretilemedi."
    });

  } catch (error) {
    console.error("TURAN AI HATASI:", error);
    res.status(500).json({
      reply: "Turan AI şu an cevap veremiyor."
    });
  }
}

