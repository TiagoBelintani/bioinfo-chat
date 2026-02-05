module.exports = async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    if (!process.env.GROQ_API_KEY) {
      return res.status(500).json({
        error: { message: "GROQ_API_KEY não definida no ambiente" }
      });
    }

    const body =
      typeof req.body === "string" ? JSON.parse(req.body) : req.body;

    const messages = body?.messages;

    if (!messages) {
      return res.status(400).json({
        error: { message: "Campo 'messages' ausente" }
      });
    }

    const response = await fetch(
      "https://api.groq.com/openai/v1/chat/completions",
      {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${process.env.GROQ_API_KEY}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          model: "llama-3.1-70b-versatile",
          messages,
          temperature: 0.7
        })
      }
    );

    const data = await response.json();

    if (!response.ok) {
      return res.status(500).json({ error: data.error });
    }

    return res.status(200).json(data);

  } catch (err) {
    return res.status(500).json({
      error: { message: err.message }
    });
  }
};
