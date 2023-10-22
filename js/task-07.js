const inputRange = document.querySelector("#font-size-control");
const textSpan = document.querySelector("#text");

textSpan.style.fontSize = inputRange.value + "px";

const changeFontSize = () => {
  textSpan.style.fontSize = inputRange.value + "px";
};

inputRange.addEventListener("input", changeFontSize);
