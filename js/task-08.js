const loginForm = document.querySelector(".login-form");

const formValidation = (event) => {
  event.preventDefault();
};

loginForm.addEventListener("submit", formValidation);
