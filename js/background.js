const images = [
  "../assets/back.gif",
  "../assets/1.jpg",
  "../assets/2.jpg",
  "../assets/3.jpg",
  "../assets/4.jpg",
  "../assets/5.jpg",
  "../assets/6.jpg",
];

const body = document.querySelector("body");
const buttonOut = document.querySelector(".btn-out");

function handleBack() {
  const random = Math.floor(Math.random() * (images.length - 1));
  const randomBack = images[random];

  body.style.backgroundImage = `url(${randomBack})`;
}

buttonOut.addEventListener("click", handleBack);
