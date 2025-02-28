// Select the like button and counter
const likeButton = document.querySelector(".like-button");
const likeCounter = document.querySelector(".like-counter");

// Function to fetch the current like count
async function getLikes() {
    try {
        const response = await fetch("http://localhost:3000/likes");
        const data = await response.json();
        likeCounter.innerText = `Likes: ${data.likes}`;
    } catch (error) {
        console.error("Error fetching likes:", error);
    }
}

// Function to increase the like count
async function addLike() {
    try {
        const response = await fetch("http://localhost:3000/like", {
            method: "POST",
        });
        const data = await response.json();
        likeCounter.innerText = `Likes: ${data.likes}`;
    } catch (error) {
        console.error("Error adding like:", error);
    }
}

// Attach event listener to the like button
likeButton.addEventListener("click", addLike);

// Fetch the initial like count when the page loads
getLikes();
