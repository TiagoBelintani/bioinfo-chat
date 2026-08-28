module.exports = async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({
      error: {
        message: "Method not allowed"
      }
    });
  }

  try {
    if (!process.env.GROQ_API_KEY) {
      console.error("GROQ_API_KEY não definida no ambiente");

      return res.status(500).json({
        error: {
          message: "GROQ_API_KEY não definida no ambiente"
        }
      });
    }

    const body =
      typeof req.body === "string"
        ? JSON.parse(req.body)
        : req.body;

    const messages = body?.messages;

    if (!messages || !Array.isArray(messages)) {
      return res.status(400).json({
        error: {
          message: "Campo 'messages' ausente ou inválido"
        }
      });
    }

    const response = await fetch(
      "https://api.groq.com/openai/v1/chat/completions",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          model: "llama-3.1-8b-instant",
          messages,
          temperature: 0.7
        })
      }
    );

    const data = await response.json();

    if (!response.ok) {
      console.error(
        "Groq API error:",
        response.status,
        JSON.stringify(data)
      );

      return res.status(response.status).json({
        error:
          data?.error || {
            message: "Erro ao consultar a API da Groq"
          }
      });
    }

    return res.status(200).json(data);

  } catch (err) {
    console.error("Erro interno em /api/chat:", err);

    return res.status(500).json({
      error: {
        message: err?.message || "Erro interno do servidor"
      }
    });
  }
};
