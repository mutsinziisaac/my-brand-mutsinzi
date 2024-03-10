const name = document.getElementById("name");
const password = document.getElementById("password");
const form = document.getElementById("form");
const errors = document.getElementById("error");

form.addEventListener("submit", (e) => {
  let messages = [];

  if (name.value === "" || name.value == null) {
    messages.push("Name is required!");
  }

  if (password.value.length <= 8) {
    messages.push("Password must be at least 8 characters");
  }

  if (messages.length > 0) {
    e.preventDefault();

    errors.innerHTML = messages
      .map((message) => `<li>${message}</li>`)
      .join("");
  }

  console.log(messages);
});
