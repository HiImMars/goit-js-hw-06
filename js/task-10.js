// Зробив сам відсотків на 60, інше піддивлявся

const controlContainer = document.querySelector(".controls");
const boxes = document.querySelector("#boxes");
const input = document.querySelector("input");
const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");

boxes.style.display = "flex";
boxes.style.flexWrap = "wrap";
boxes.style.alignItems = "center";
boxes.style.marginTop = "30px";

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  let boxSize = 30;
  const allBoxes = [];
  for (let i = 0; i < amount; i += 1) {
    boxSize += 10 * i;
    const div = document.createElement("div");
    div.style.width = `${boxSize}px`;
    div.style.height = `${boxSize}px`;
    div.style.backgroundColor = getRandomHexColor();
    allBoxes.push(div);
  }
  return boxes.append(...allBoxes);
}

function destroyBoxes() {
  boxes.innerHTML = "";
  input.value = "";
}

createBtn.addEventListener("click", () => {
  if (
    Number(input.value.trim()) > Number(input.max) ||
    Number(input.value.trim()) < Number(input.min)
  ) {
    alert("Please enter number from 1 to 100");
  } else {
    createBoxes(input.value.trim());
  }
  input.value = "";
});

destroyBtn.addEventListener("click", destroyBoxes);
