function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeColorBtn = document.querySelector(".change-color");
const textSpan = document.querySelector(".color");

const changeColorFn = () => {
  const color = getRandomHexColor();
  document.body.style.backgroundColor = color;
  textSpan.textContent = color;
};

changeColorBtn.addEventListener("click", changeColorFn);
