const containerBoxes = document.querySelector("#boxes");
const controlsDiv = document.querySelector("#controls");
const input = controlsDiv.querySelector("input");
const createButton = controlsDiv.querySelector("button[data-create]");
const destroyButton = controlsDiv.querySelector("button[data-destroy]");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  const boxesArray = [];
  for (let i = 0; i < amount; i += 1) {
    const box = document.createElement("div");
    box.style.width = `${30 + i * 10}px`;
    box.style.height = `${30 + i * 10}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxesArray.push(box);
  }

  containerBoxes.append(...boxesArray);
}

function destroyBoxes() {
  containerBoxes.innerHTML = "";
}

function handleCreate() {
  const amount = input.value;
  createBoxes(amount);
}

function handleDestroy() {
  destroyBoxes();
}

createButton.addEventListener("click", handleCreate);
destroyButton.addEventListener("click", handleDestroy);
