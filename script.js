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
    <i class="fa-regular fa-heart fa-2x"></i>
    <i class="fa-regular fa-comment fa-2x"></i>
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
