import axios from "axios";

export async function handler(event) {
  const url = "https://api.openai.com/v1/chat/completions";
  const api = process.env.GPT_KEY;
  const requestBody = JSON.parse(event.body);

  const options = {
    method: "POST",
    url: url,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${api}`,
    },
    data: {
      model: requestBody.model,
      messages: requestBody.messages,
      temperature: requestBody.temperature,
      max_tokens: requestBody.max_tokens,
      top_p: requestBody.top_p,
      frequency_penalty: requestBody.frequency_penalty,
      presence_penalty: requestBody.presence_penalty,
    },
  };

  try {
    const response = await axios(options);
    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(response.data),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
}
