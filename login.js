const form = document.getElementById("form");
const username = document.getElementById("username");
const password = document.getElementById("password");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  checkInputs();

  const usernameValue = username.value.trim();
  const passwordValue = password.value.trim();

  try {
    const response = await fetch(
      "https://my-brand-mutsinzi-api.onrender.com/api/log-in",
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
      throw new Error("Failed to log in");
    }

    const data = await response.json();
    const accessToken = data.accessToken;

    console.log(data);
    // Save the token to localStorage or sessionStorage
    localStorage.setItem("token", accessToken);

    // Redirect to dashboard.html or perform any other actions
    window.location.href = "dashboard.html";
  } catch (error) {
    console.error("Login failed:", error.message);
    alert("Incorrect username or password");
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
  } else if (passwordValue.length < 4) {
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
