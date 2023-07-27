function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeButton = document.querySelector(".change-color");
const container = document.querySelector("body");
const color = document.querySelector(".color");

changeButton.addEventListener("click", changeColor);

function changeColor() {
  color.textContent = getRandomHexColor();
  container.style.backgroundColor = color.textContent;
}
