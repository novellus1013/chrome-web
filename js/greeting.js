const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const overlay = document.querySelector(".overlay");
const header = document.querySelector(".header");
const contents = document.querySelector(".contents");
const explainTitle = document.querySelector(".explain__title");
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(e) {
  e.preventDefault();
  overlay.classList.add(HIDDEN_CLASSNAME);
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintGreeting(username);
}

function paintGreeting(username) {
  greeting.innerText = `Player ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
  explainTitle.innerText = `Hello ${username}`;
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

function paintContents() {
  header.classList.remove(HIDDEN_CLASSNAME);
  contents.classList.remove(HIDDEN_CLASSNAME);
}

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
  overlay.classList.remove(HIDDEN_CLASSNAME);
} else {
  paintGreeting(savedUsername);
  paintContents();
}
