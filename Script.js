const API_URL = "https://germanwebsite.onrender.com"; 
// Select the like button and counter
const likeButton = document.querySelector(".like-button");
const likeCounter = document.querySelector(".like-counter");

// Function to fetch the current like count from the backend
async function getLikes() {
    try {
        const response = await fetch("http://localhost:3000/likes");
        if (!response.ok) {
            throw new Error("Failed to fetch likes");
        }
        const data = await response.json();
        
        // ✅ Update the like counter in the HTML with actual value
        likeCounter.innerText = `Likes: ${data.likes}`;
    } catch (error) {
        console.error("Error fetching likes:", error);
    }
}

// Function to increase the like count when the button is clicked
async function addLike() {
    try {
        const response = await fetch("http://localhost:3000/like", {
            method: "POST",
        });
        if (!response.ok) {
            throw new Error("Failed to update like count");
        }
        const data = await response.json();
        
        // ✅ Update the like counter in real time
        likeCounter.innerText = `Likes: ${data.likes}`;
    } catch (error) {
        console.error("Error adding like:", error);
    }
}

// Attach event listener to the like button
likeButton.addEventListener("click", addLike);

// ✅ Fetch and display the like count when the page loads
getLikes();
