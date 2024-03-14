const openModal = document.getElementById("openBlogModal");
const modal = document.getElementById("blogDialog");
const blogs = document.getElementById("blogs");

openModal.addEventListener("click", () => {
  modal.showModal();
});
modal.addEventListener("click", (e) => {
  const dialogDimensions = modal.getBoundingClientRect();
  if (
    e.clientX < dialogDimensions.left ||
    e.clientX > dialogDimensions.right ||
    e.clientY < dialogDimensions.top ||
    e.clientY > dialogDimensions.bottom
  ) {
    modal.close();
  }
});

document.getElementById("blogForm").addEventListener("submit", (e) => {
  e.preventDefault();

  let image = document.getElementById("imageURL").value;
  let title = document.getElementById("title").value;
  let description = document.getElementById("description").value;

  let existingData = JSON.parse(localStorage.getItem("blogData")) || [];

  existingData = existingData.length === 0 ? [] : existingData;

  let blogData = {
    image: image,
    title: title,
    description: description,
  };

  existingData.push(blogData);

  let jsonData = JSON.stringify(existingData);

  localStorage.setItem("blogData", jsonData);

  alert("blog saved successfully");
  display();
});

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

    const blogBtns = document.createElement("div");
    blogBtns.classList.add("blog-Btns");
    blogBtns.innerHTML = `
    <i class="fa-solid fa-pen-to-square fa-2x"></i>
    <i class="fa-regular fa-trash-can fa-2x"></i>
    `;

    blogImageContainer.appendChild(blogImage);
    blogDiv.appendChild(blogImageContainer);
    content.appendChild(title);
    content.appendChild(description);
    content.appendChild(blogBtns);
    blogDiv.appendChild(content);
    blogs.appendChild(blogDiv);
  });
}

display();
