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

    const models = [
      "llama3-70b-8192",
      "llama-3.1-70b-versatile"
    ];

    let lastError = null;

    for (const model of models) {
      const r = await fetch(
        "https://api.groq.com/openai/v1/chat/completions",
        {
          method: "POST",
          headers: {
            "Authorization": `Bearer ${process.env.GROQ_API_KEY}`,
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            model,
            messages,
            temperature: 0.7
          })
        }
      );

      const data = await r.json();

      if (r.ok && data.choices) {
        return res.status(200).json(data);
      }

      lastError = data;
    }

    return res.status(500).json({
      error: "All models failed",
      details: lastError
    });

  } catch (err) {
    console.error("RUNTIME ERROR:", err);
    return res.status(500).json({ error: err.message });
  }
};
