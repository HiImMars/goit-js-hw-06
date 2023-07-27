const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", formValidation);

function formValidation(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    alert("Fill in all fields!");
  }

  console.log(`Email: ${email.value} \nPassword: ${password.value}`);
  event.currentTarget.reset();
}
