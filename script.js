/*const name = document.getElementById("name");
const password = document.getElementById("password");
const form = document.getElementById("form");
const errors = document.getElementById("error");
const blogs = document.getElementById("blogs");

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
*/
let blogData = localStorage.getItem("blogData");
blogData = blogData ? JSON.parse(blogData) : [];

function display() {
  blogData.forEach((blog) => {
    const blogDiv = document.createElement("div");
    blogDiv.classList.add("blog");

    const blogImageContainer = document.createElement("div");
    blogImageContainer.classList.add("blog-img-container");

    const blogImage = document.createElement("img");
    blogImage.classList.add("blog-img");
    blogImage.src = blog.image;

    const content = document.createElement("div");
    content.classList.add("blog-content");

    const title = document.createElement("h4");
    title.innerText = blog.title;

    const description = document.createElement("p");
    description.innerText = blog.description;

    blogImageContainer.appendChild(blogImage);
    blogDiv.appendChild(blogImageContainer);
    content.appendChild(title);
    content.appendChild(description);
    blogDiv.appendChild(content);
    blogs.appendChild(blogDiv);
  });
}

display();
