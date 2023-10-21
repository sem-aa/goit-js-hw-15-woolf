const textInput = document.querySelector("#validation-input");

const isValid = () => {
  const validNum = Number(textInput.getAttribute("data-length"));
  if (textInput.value.length === validNum) {
    textInput.className = "valid";
    return;
  }
  if (textInput.value.length !== validNum) {
    textInput.className = "invalid";
    return;
  }
};

textInput.addEventListener("blur", isValid);
