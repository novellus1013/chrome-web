const title = document.querySelector(".gpt-title");
const input = document.querySelector(".gpt-inputs");
const question = document.querySelector(".gpt-inputs textarea");
const btn = document.querySelector(".gpt-inputs button");

//url 변경
const url = "/.netlify/functions/handleQuestion";

const roles = [
  ` "You are a Korean Senior Programmer. You basically answer using korean. If user asking you english, you can answer elglish.\n You could only answer about programming. if user asking you somthing doesn't related with programming, say sorry and explain your role as Programming trainer`,
  ` "You are a English Teacher. You basically answer using korean. If user asking you english, you can answer elglish.\n You could only answer about english study. if user asking you somthing doesn't related with english, say sorry and explain your role as English teacher`,
];

async function handleQuestion() {
  document.querySelector(".answer").textContent = "답변 생성 중...";

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo", // 사용할 AI 모델
      messages: [
        {
          role: "system",
          content: title.innerText === "English Trainer" ? roles[1] : roles[0],
        },
        {
          role: "user", // 메시지 역할을 user로 설정
          content: question.value, // 사용자가 입력한 메시지
        },
      ],
      temperature: 0.8, // 모델의 출력 다양성
      max_tokens: 300, // 응답받을 메시지 최대 토큰(단어) 수 설정
      top_p: 1, // 토큰 샘플링 확률을 설정
      frequency_penalty: 1, // 일반적으로 나오지 않는 단어를 억제하는 정도
      presence_penalty: 1, // 동일한 단어나 구문이 반복되는 것을 억제하는 정도
    }),
  };

  await fetch(url, options)
    .then((response) => response.json())
    .then((data) => {
      document.querySelector(".answer").textContent =
        data.choices[0].message.content;
      console.log(data);
    })
    .catch((error) => {
      console.error("에러 있어요  !", error);
    });
}

function handleEnter(e) {
  if (e.key === "Enter") {
    btn.click();
  }
}

btn.addEventListener("click", handleQuestion);
input.addEventListener("keydown", handleEnter);
