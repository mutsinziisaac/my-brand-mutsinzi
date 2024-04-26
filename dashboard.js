const openModal = document.getElementById("openBlogModal");
const modal = document.getElementById("blogDialog");
const blogs = document.getElementById("blogs");
const updateModal = document.getElementById("updateDialog");

function alerBox(message) {
  const alert = document.getElementById("alert");
  alert.showModal();
  const text = document.createElement("p");
  text.innerHTML = message;

  alert.appendChild(text);
  alert.appendChild;

  setTimeout(function () {
    alert.close();
  }, 3000);
}

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

updateModal.addEventListener("click", (e) => {
  const dialogDimensions = updateModal.getBoundingClientRect();
  if (
    e.clientX < dialogDimensions.left ||
    e.clientX > dialogDimensions.right ||
    e.clientY < dialogDimensions.top ||
    e.clientY > dialogDimensions.bottom
  ) {
    updateModal.close();
  }
});

const blogForm = document.getElementById("blogForm");

blogForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const title = document.getElementById("title").value;
  const description = document.getElementById("description").value;
  const imageFile = document.getElementById("imageURL").files[0];

  const formData = new FormData();
  formData.append("title", title);
  formData.append("description", description);
  formData.append("image", imageFile);

  try {
    const response = await fetch(
      "https://my-brand-mutsinzi-api.onrender.com/api/blogs",
      {
        method: "POST",
        body: formData,
      }
    );

    if (!response.ok) {
      throw new Error("Failed to save blog");
    }

    const data = await response.json();
    modal.close();
    location.reload();
    blogForm.reset();
    alerBox(data.message);
  } catch (error) {
    console.error("Error saving blog:", error.message);
    alerBox("error creating blog");
  }
});

let blogData = [];

fetch("https://my-brand-mutsinzi-api.onrender.com/api/blogs")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    return response.json();
  })
  .then((data) => {
    blogData = data;
    display();
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });

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

    const deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = `<i class="fa-regular fa-trash-can fa-2x"></i>`;
    deleteBtn.addEventListener("click", () => {
      deleteBlog(blog._id);
    });

    const updateBtn = document.createElement("button");
    updateBtn.innerHTML = `<i class="fa-solid fa-pen-to-square fa-2x"></i>`;
    updateBtn.addEventListener("click", () => {
      updateBlog(blog);
    });

    blogBtns.appendChild(updateBtn);
    blogBtns.appendChild(deleteBtn);

    blogImageContainer.appendChild(blogImage);
    blogDiv.appendChild(blogImageContainer);
    content.appendChild(title);
    content.appendChild(description);
    content.appendChild(blogBtns);
    blogDiv.appendChild(content);
    blogs.appendChild(blogDiv);
  });
}

const updateForm = document.getElementById("updateForm");

async function updateBlog(blog) {
  const userToken = localStorage.getItem("token");
  updateModal.showModal();
  updateForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const title = document.getElementById("title").value;
    const description = document.getElementById("description").value;
    const imageFile = document.getElementById("imageURL").files[0];

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("image", imageFile);

    try {
      const response = await fetch(
        `https://my-brand-mutsinzi-api.onrender.com/api/blogs/${blog._id}`,
        {
          method: "PUT",
          headers: {
            Authorization: `Bearer ${userToken}`,
          },
          body: formData,
        }
      );

      if (!response.ok) {
        throw new Error("Failed to save blog");
      }

      const data = await response.json();
      modal.close();
      location.reload();
      updateForm.reset();
      alert(data.message);
    } catch (error) {
      console.error("Error saving blog:", error.message);
    }
  });
}

async function deleteBlog(blogId) {
  const userToken = localStorage.getItem("token");
  try {
    const response = await fetch(
      `https://my-brand-mutsinzi-api.onrender.com/api/blogs/${blogId}`,
      {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      }
    );
    if (!response.ok) {
      throw new Error("Failed to delete blog");
    }
    location.reload();
    console.log("Blog deleted successfully");
    alerBox("Blog deleted");
  } catch (error) {
    console.error("Error deleting blog:", error);
  }
}

const messages = document.getElementById("messages");

let messageData;

fetch("https://my-brand-mutsinzi-api.onrender.com/api/messages")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    return response.json();
  })
  .then((data) => {
    messageData = data;
    displayMessage();
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });

function displayMessage() {
  messageData.forEach((message) => {
    const messageDiv = document.createElement("h4");
    messageDiv.classList.add("message");
    const name = document.createElement("h4");
    name.innerText = `Name: ${message.name}`;
    const email = document.createElement("p");
    email.innerText = `Email: ${message.email}`;
    const text = document.createElement("p");
    text.innerText = `Message: ${message.message}`;
    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("deleteMsg");
    deleteBtn.innerText = "delete";
    deleteBtn.addEventListener("click", () => {
      deleteMsg(message._id);
    });

    messageDiv.appendChild(name);
    messageDiv.appendChild(email);
    messageDiv.appendChild(text);
    messageDiv.appendChild(deleteBtn);
    messages.appendChild(messageDiv);
  });
}

async function deleteMsg(messageId) {
  const userToken = localStorage.getItem("token");
  try {
    const response = await fetch(
      `https://my-brand-mutsinzi-api.onrender.com/api/messages/${messageId}`,
      {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      }
    );
    if (!response.ok) {
      throw new Error("Failed to delete message");
    }
    const data = await response.json();

    alerBox(data.message);
  } catch (error) {
    console.error("Error deleting message:", error);
  }
}

function checkUserRole() {
  const token = localStorage.getItem("token");
  if (token) {
    const decodedToken = parseJwt(token);
    const userRole = decodedToken.role;
    if (userRole === "user") {
      window.location.href = "index.html";
    }
  } else {
    window.location.href = "login.html";
  }
}

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

checkUserRole();
