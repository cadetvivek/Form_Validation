const form = document.querySelector("#myForm");
const username = document.querySelector("#username");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirm-password");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  checkInputs();
});

function checkInputs() {
  // Get the values from the inputs
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const confirmPasswordValue = confirmPassword.value.trim();

  // Validate the username
  if (usernameValue === "") {
    setErrorFor(username, "Username cannot be blank");
  } else if (usernameValue.length < 3) {
    setErrorFor(username, "Username must be at least 3 characters long");
  } else {
    setSuccessFor(username);
  }

  // Validate the email
  if (emailValue === "") {
    setErrorFor(email, "Email cannot be blank");
  } else if (!isEmail(emailValue)) {
    setErrorFor(email, "Email is not valid");
  } else {
    setSuccessFor(email);
  }

  // Validate the password
  if (passwordValue === "") {
    setErrorFor(password, "Password cannot be blank");
  } else if (passwordValue.length < 8) {
    setErrorFor(password, "Password must be at least 8 characters long");
  } else {
    setSuccessFor(password);
  }

  // Validate the confirm password
  if (confirmPasswordValue === "") {
    setErrorFor(confirmPassword, "Confirm password cannot be blank");
  } else if (passwordValue !== confirmPasswordValue) {
    setErrorFor(confirmPassword, "Passwords do not match");
  }
}
