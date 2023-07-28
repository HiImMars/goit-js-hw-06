const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", formValidation);

function formValidation(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("Fill in all fields!");
  }

  const userLogin = {
    email: email.value,
    password: password.value,
  };

  console.log(userLogin);
  event.currentTarget.reset();
}
