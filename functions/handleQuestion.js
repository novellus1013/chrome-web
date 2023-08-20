const fetch = require("node-fetch");

exports.handler = async function (event) {
  const url = "https://api.openai.com/v1/chat/completions";
  const api = process.env.GPT_KEY; // 환경 변수에서 Secret Key 읽어오기

  const options = JSON.parse(event.body);

  options.headers.Authorization = `Bearer ${api}`;

  try {
    const response = await fetch(url, options);
    const data = await response.json();
    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};
