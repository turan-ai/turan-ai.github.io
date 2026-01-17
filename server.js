// server.js
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import OpenAI from "openai";

// .env dosyasını okut
dotenv.config();

// Express ayarları
const app = express();
app.use(cors());
app.use(express.json());

// OpenAI bağlantısı
const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

// CHAT ENDPOINT
app.post("/chat", async (req, res) => {
  try {
    const userMessage = req.body.message;

    if (!userMessage) {
      return res.status(400).json({ error: "Mesaj boş olamaz" });
    }

    const response = await client.responses.create({
      model: "gpt-5-mini",
      input: `Sen Türkçe konuşan, zeki, hızlı cevap veren bir yapay zekasın.
Adın Turan AI.

Kullanıcı: ${userMessage}
Turan AI:`
    });

    res.json({
      reply: response.output_text
    });

  } catch (error) {
    console.error("AI HATASI:", error);
    res.status(500).json({
      reply: "Turan AI şu an cevap veremiyor."
    });
  }
});

// SERVER BAŞLAT
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`✅ Turan AI server çalışıyor → http://localhost:${PORT}`);
});
