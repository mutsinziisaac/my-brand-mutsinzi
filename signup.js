const form = document.getElementById("form");
const username = document.getElementById("username");
const password = document.getElementById("password");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  // Validate the inputs
  if (!checkInputs()) {
    return; // Stop form submission if inputs are invalid
  }

  const usernameValue = username.value.trim();
  const passwordValue = password.value.trim();

  try {
    const response = await fetch(
      "https://my-brand-mutsinzi-api.onrender.com/api/sign-up",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: usernameValue,
          password: passwordValue,
        }),
      }
    );

    if (!response.ok) {
      throw new Error("Failed to sign up");
    }

    const data = await response.json();
    const accessToken = data.accessToken;

    localStorage.setItem("token", accessToken);

    window.location.href = "index.html";
  } catch (error) {
    console.error("Signup failed:", error.message);
  }
});

function checkInputs() {
  const usernameValue = username.value.trim();
  const passwordValue = password.value.trim();

  // Reset validation errors
  setErrorFor(username, "");
  setErrorFor(password, "");

  let isValid = true;

  if (usernameValue === "") {
    setErrorFor(username, "Username is empty");
    isValid = false;
  } else {
    setSuccessFor(username);
  }

  if (passwordValue === "") {
    setErrorFor(password, "Password is empty");
    isValid = false;
  } else if (passwordValue.length < 8) {
    setErrorFor(password, "Password should be at least 8 characters");
    isValid = false;
  } else {
    setSuccessFor(password);
  }

  return isValid;
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
