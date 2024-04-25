const blogs = document.getElementById("blogs");

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

let blogData;

fetch("https://my-brand-mutsinzi-api.onrender.com/api/blogs")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    // Parse the JSON response
    return response.json();
  })
  .then((data) => {
    // Process the data
    blogData = data;
    display();
  })
  .catch((error) => {
    // Handle any errors that occur during the fetch operation
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
    blogBtns.innerHTML = `
    <i class="fa-regular fa-heart fa-2x"></i><p>${blog.likes}</p>
    <i class="fa-regular fa-comment fa-2x" data-blogId=${blog._id}></i>
    `;

    blogBtns.querySelector(".fa-comment").addEventListener("click", () => {
      displayComments(blog._id, blog.comments);
    });
    blogBtns.querySelector(".fa-heart").addEventListener("click", () => {
      likeBlog(blog._id);
    });

    blogImageContainer.appendChild(blogImage);
    blogDiv.appendChild(blogImageContainer);
    content.appendChild(title);
    content.appendChild(description);
    content.appendChild(blogBtns);
    blogDiv.appendChild(content);
    blogs.appendChild(blogDiv);
  });
}
async function likeBlog(blogId) {
  const userToken = localStorage.getItem("token");

  if (!userToken) {
    window.location.href = "login.html";
    return;
  }

  try {
    const response = await fetch(
      `https://my-brand-mutsinzi-api.onrender.com/api/blogs/${blogId}/like`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userToken}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error("Failed to like");
    }

    location.reload();
  } catch (error) {
    console.error("Error liking:", error);
    alert("Failed to like");
  }
}

function displayComments(blogId, comments) {
  const dialog = document.getElementById("commentDialog");
  const dialogContent = document.getElementById("commentDialogContent");

  // Clear previous comments
  dialogContent.innerHTML = "";

  // Display comments
  comments.forEach((comment) => {
    const commentElement = document.createElement("div");
    commentElement.classList.add("comment");

    const commentContent = document.createElement("div");

    const pic = document.createElement("div");
    pic.classList.add("pic");
    const img = document.createElement("img");
    img.classList.add("pic-img");
    img.src = "./images/pp.jpeg";
    const user = document.createElement("h4");
    const commenttext = document.createElement("p");

    user.innerText = comment.user;
    commenttext.innerText = comment.text;

    pic.appendChild(img);

    commentContent.appendChild(user);
    commentContent.appendChild(commenttext);

    commentElement.appendChild(pic);
    commentElement.appendChild(commentContent);

    dialogContent.appendChild(commentElement);
  });
  document
    .getElementById("commentForm")
    .addEventListener("submit", async (e) => {
      e.preventDefault();

      // Get the comment text from the input field
      const commentText = document.getElementById("commentText").value;

      const userToken = localStorage.getItem("token");
      if (!userToken) {
        window.location.href = "login.html";
        return;
      }

      const requestBody = {
        text: commentText,
      };
      try {
        const response = await fetch(
          `https://my-brand-mutsinzi-api.onrender.com/api/blogs/${blogId}/comments`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${userToken}`,
            },
            body: JSON.stringify(requestBody),
          }
        );

        if (!response.ok) {
          throw new Error("Failed to submit comment");
        }

        // Close the comment dialog if the comment is successfully submitted
        const dialog = document.getElementById("commentDialog");
        dialog.close();
        location.reload();
      } catch (error) {
        console.error("Error submitting comment:", error);
      }
    });

  dialog.showModal();

  dialog.addEventListener("click", (e) => {
    const dialogDimensions = dialog.getBoundingClientRect();
    if (
      e.clientX < dialogDimensions.left ||
      e.clientX > dialogDimensions.right ||
      e.clientY < dialogDimensions.top ||
      e.clientY > dialogDimensions.bottom
    ) {
      dialog.close();
    }
  });
}

const messageForm = document.getElementById("messageForm");

messageForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const messageText = document.getElementById("messageText").value;

  const requestBody = {
    name: name,
    email: email,
    message: messageText,
  };

  try {
    const response = await fetch(
      "https://my-brand-mutsinzi-api.onrender.com/api/messages",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      }
    );

    if (!response.ok) {
      throw new Error("Failed to send message");
    }

    const data = await response.json();
    messageForm.reset();
    alerBox(data.message);
  } catch (error) {
    console.error("Error sending message:", error.message);
    alert("Failed to send message");
  }
});
