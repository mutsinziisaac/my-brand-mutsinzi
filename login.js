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

    localStorage.setItem("token", accessToken);

    const decodedToken = parseJwt(accessToken);
    const userRole = decodedToken.role;

    switch (userRole) {
      case "admin":
        window.location.href = "dashboard.html";
        break;
      case "user":
        window.location.href = "index.html";
        break;
      default:
        alert("Unauthorized");
    }
  } catch (error) {
    console.error("Login failed:", error.message);
    alert("Incorrect username or password");
  }
});

function parseJwt(token) {
  const base64Url = token.split(".")[1];
  const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
  const jsonPayload = decodeURIComponent(
    atob(base64)
      .split("")
      .map(function (c) {
        return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
      })
      .join("")
  );

  return JSON.parse(jsonPayload);
}

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
