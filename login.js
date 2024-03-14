const form = document.getElementById("form");
const username = document.getElementById("username");
const password = document.getElementById("password");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInputs();

  const usernameValue = username.value.trim();
  const passwordValue = password.value.trim();

  if (usernameValue !== "dudu" || passwordValue !== "12345678") {
    alert("incorrect staff");
  } else {
    window.location.href = "dashboard.html";
  }
});

function checkInputs() {
  const usernameValue = username.value.trim();
  const passwordValue = password.value.trim();
  if (usernameValue === "") {
    setErrorFor(username, "username is empty");
  } else {
    setSuccessFor(username);
  }

  if (passwordValue === "") {
    setErrorFor(password, "password is empty");
  } else if (passwordValue.length < 8) {
    setErrorFor(password, "password should be 8 characters atleast");
  } else {
    setSuccessFor(password);
  }
}

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");

  small.innerText = message;
  formControl.className = "form-control error";
}

function setSuccessFor(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}
