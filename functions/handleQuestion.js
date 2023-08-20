import fetch from "node-fetch";

export async function handler(event) {
  const url = "https://api.openai.com/v1/chat/completions";
  const api = process.env.GPT_KEY; // 환경 변수에서 Secret Key 읽어오기
  const requestBody = JSON.parse(event.body);

  // `gpt.js`에서 전달되는 데이터 형식에 맞게 헤더와 본문을 구성합니다.
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${api}`,
    },
    body: JSON.stringify({
      model: requestBody.model,
      messages: requestBody.messages,
      temperature: requestBody.temperature,
      max_tokens: requestBody.max_tokens,
      top_p: requestBody.top_p,
      frequency_penalty: requestBody.frequency_penalty,
      presence_penalty: requestBody.presence_penalty,
    }),
  };

  try {
    const response = await fetch(url, options);
    const data = await response.json();
    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
}
