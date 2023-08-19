const buttons = document.querySelector(".buttons");
const gptTitle = document.querySelector(".gpt-title");
const explain__title = document.querySelector(".explain__title");
const explain__text = document.querySelector(".explain__text");
const btnDisabled = document.querySelector(".gpt-inputs button");

const GPT_DOCS = [
  {
    title: "저는 Programming GPT입니다.",
    text: "저는 당신만을 위한 코딩 선생님입니다. 코딩 학습에 관해 궁금한 점에 대해 입력 창에 자세히 적어주세요! ",
  },
  {
    title: "저는 English GPT입니다.",
    text: "저는 당신만을 위한 영어 선생님입니다. 영어 학습에 관해 궁금한 점에 대해 입력 창에 자세히 적어주세요!",
  },
];

//e.preventDefault()를 추가하지 않으면 버튼 외의 것을 클릭했을 때 이벤트가 발생;
function handleButtons(e) {
  e.preventDefault();
  gptTitle.innerText = `${e.target.innerText} Trainer`;
}

function handleExpalin() {
  const text = gptTitle.innerText;
  if (text === "Programming Trainer") {
    explain__title.innerText = GPT_DOCS[0].title;
    explain__text.innerText = GPT_DOCS[0].text;
    btnDisabled.disabled = false;
  } else if (text === "English Trainer") {
    explain__title.innerText = GPT_DOCS[1].title;
    explain__text.innerText = GPT_DOCS[1].text;
    btnDisabled.disabled = false;
  }
}

//이벤트 위임으로 버튼 처리
buttons.addEventListener("click", handleButtons);
buttons.addEventListener("click", handleExpalin);
