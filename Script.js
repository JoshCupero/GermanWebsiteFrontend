const API_URL = "https://germanwebsite.onrender.com"; 

// Select like button and counter
const likeButton = document.querySelector(".like-button");
const likeCounter = document.querySelector(".like-counter");

// Fetch current likes from the backend
async function getLikes() {
    try {
        const response = await fetch(`${API_URL}/likes`);
        if (!response.ok) throw new Error("Failed to fetch likes");

        const data = await response.json();
        likeCounter.innerText = `Likes: ${data.likes}`;
    } catch (error) {
        console.error("Error fetching likes:", error);
    }
}

// Increase the like count
async function addLike() {
    try {
        const response = await fetch(`${API_URL}/like`, {
            method: "POST",
        });
        if (!response.ok) throw new Error("Failed to update like count");

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

