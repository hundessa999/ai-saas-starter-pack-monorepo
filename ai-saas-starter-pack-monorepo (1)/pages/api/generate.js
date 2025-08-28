export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ error: "Only POST" });
  try {
    const { prompt = "" } = req.body || {};
    const demo = `✅ Demo: ${prompt || "Write a social media post"}

This is placeholder output. Add your API key later in Vercel as OPENAI_API_KEY.`;
    return res.status(200).json({ text: demo });
  } catch (e) {
    return res.status(500).json({ error: String(e) });
  }
}
