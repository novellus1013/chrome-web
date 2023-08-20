const fetch = require("node-fetch");

exports.handler = async function (event) {
  const url = "https://api.openai.com/v1/chat/completions";
  const api = process.env.GPT_KEY; // 환경 변수에서 Secret Key 읽어오기

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${api}`,
    },
    body: JSON.stringify(JSON.parse(event.body)),
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
};
