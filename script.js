const toggle = document.querySelector(".toggle-wrapper");
const toggleSwitch = document.querySelector(".toggle-switch");
const topBackground = document.querySelector(".top-background");
const body = document.querySelector("body");

const title = document.querySelector(".title");
const followers = document.querySelector(".followers");
const darkModeText = document.querySelector(".dark-mode");

const cards = document.querySelectorAll(".card");
const users = document.querySelectorAll(".user");
const numbers = document.querySelectorAll(".number");
const categories = document.querySelectorAll(".category");

const subHeading = document.querySelector("h2");

var toggleValue = 0;
var toggleMove;

function toggleAnimation() {
  if (toggleValue == 0) {
    toggleValue = 1;
    toggleMove = "-28px";
  } else if (toggleValue == 1) {
    toggleValue = 0;
    toggleMove = "0";
  }
  toggleSwitch.style.transform = `translateX(${toggleMove})`;
}

function changeToDark() {
  toggleAnimation();
  topBackground.style.background = "hsl(232, 19%, 15%)";
  body.style.background = "hsl(230, 17%, 14%)";
  title.style.color = "hsl(0, 0%, 100%)";
  followers.style.color = "hsl(228, 34%, 66%)";
  darkModeText.style.color = "hsl(228, 34%, 66%)";
  toggle.style.background = `linear-gradient(
    90deg,
    hsl(210, 78%, 56%) 0%,
    hsl(146, 68%, 55%) 100%
  )`;
  toggleSwitch.style.background = "hsl(232, 19%, 15%)";
  toggleSwitch.classList.add("dark-toggle-hover");
  cards.forEach((card) => {
    card.style.background = "hsl(228, 28%, 20%)";
    card.classList.add("dark-hover");
    card.classList.remove("light-hover");
  });
  users.forEach((user) => (user.style.color = "hsl(228, 34%, 66%)"));
  numbers.forEach((number) => (number.style.color = "hsl(0, 0%, 100%)"));
  categories.forEach(
    (category) => (category.style.color = "hsl(228, 34%, 66%)")
  );
  subHeading.style.color = "hsl(0, 0%, 100%)";
}

function changeToLight() {
  toggleAnimation();
  topBackground.style.background = "hsl(225, 100%, 98%)";
  body.style.background = "hsl(0, 0%, 100%)";
  title.style.color = "hsl(230, 17%, 14%)";
  followers.style.color = "hsl(228, 12%, 44%)";
  darkModeText.style.color = "hsl(228, 12%, 44%)";
  toggle.style.background = "hsl(230, 22%, 74%)";
  toggleSwitch.style.background = "hsl(225, 100%, 98%)";
  toggleSwitch.classList.remove("dark-toggle-hover");
  cards.forEach((card) => {
    card.style.background = "hsl(227, 47%, 96%)";
    card.classList.remove("dark-hover");
    card.classList.add("light-hover");
  });
  users.forEach((user) => (user.style.color = "hsl(228, 12%, 44%)"));
  numbers.forEach((number) => (number.style.color = "hsl(230, 17%, 14%)"));
  categories.forEach(
    (category) => (category.style.color = "hsl(228, 12%, 44%)")
  );
  subHeading.style.color = "hsl(228, 12%, 44%)";
}

toggle.addEventListener("click", function () {
  if (toggleValue == 0) {
    changeToDark();
  } else if (toggleValue == 1) {
    changeToLight();
  }
});

window.onload = function () {
  cards.forEach((card) => card.classList.add("light-hover"));
};
