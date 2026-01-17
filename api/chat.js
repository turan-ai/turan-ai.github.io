import OpenAI from "openai";

export default async function handler(req, res) {
  const message = req.query.message;

  if (!message) return res.status(400).json({ reply: "Mesaj boş" });

  const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

  try {
    const response = await client.responses.create({
      model: "gpt-5-mini",
      input: `Sen Türkçe konuşan, zeki, hızlı cevap veren bir yapay zekasın.
Adın Turan AI.

Kullanıcı: ${message}
Turan AI:`
    });

    res.status(200).json({ reply: response.output_text });
  } catch (err) {
    console.error(err);
    res.status(500).json({ reply: "Turan AI şu anda cevap veremiyor." });
  }
}
