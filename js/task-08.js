const loginForm = document.querySelector(".login-form");

const onSubmit = (e) => {
  e.preventDefault();
  const email = loginForm.elements.email;
  const password = loginForm.elements.password;

  if (email.value === "" || password.value === "") {
    return alert("Please fill in all the fields!");
  }

  const formData = {};
  formData[email.name] = email.value;
  formData[password.name] = password.value;

  console.log(formData);
  loginForm.reset();
};

loginForm.addEventListener("submit", onSubmit);
