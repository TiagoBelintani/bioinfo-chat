module.exports = async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const body = typeof req.body === "string"
      ? JSON.parse(req.body)
      : req.body;

    const messages = body?.messages;

    if (!messages) {
      return res.status(400).json({ error: "Missing messages" });
    }

    const groqResponse = await fetch(
      "https://api.groq.com/openai/v1/chat/completions",
      {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${process.env.GROQ_API_KEY}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          model: "llama3-8b-8192",
          messages,
          temperature: 0.7
        })
      }
    );

    if (!groqResponse.ok) {
      const text = await groqResponse.text();
      return res.status(500).json({ error: text });
    }

    const data = await groqResponse.json();
    res.status(200).json(data);

  } catch (err) {
    console.error("RUNTIME ERROR:", err);
    res.status(500).json({ error: err.message });
  }
};
