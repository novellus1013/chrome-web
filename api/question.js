import express from "express";
import fetch from "node-fetch";

const app = express();
const PORT = process.env.PORT || 3000; // PORT 환경 변수 또는 3000 포트를 사용

const API_KEY = process.env.API_KEY; // Vercel에서 설정한 환경 변수

app.use(express.json()); // express.json() 사용

app.post("/api/question", async (req, res) => {
  const url = "https://api.openai.com/v1/chat/completions";
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${API_KEY}`,
    },
    body: JSON.stringify(req.body),
  };

  try {
    const response = await fetch(url, options);
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error("에러 있어요  !", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
