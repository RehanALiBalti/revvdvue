const inputComments = document.getElementById("inputComments");
const sendIcon = document.querySelector(".send-icon");
const chatMessages = document.getElementById("chat-messages");

// Function to toggle the sendIcon visibility
function toggleSendIconVisibility() {
  const message = inputComments.value.trim();
  sendIcon.style.display = message ? "block" : "none";
}

// Function to send a message
function sendMessage() {
  const message = inputComments.value.trim();
  if (message !== "") {
    chatMessages.innerHTML += `<div class="receiver-chats">
      <p class="receiver-chats-para">${message}</p>
    </div>`;

    // Clear the input field
    inputComments.value = "";

    // Hide the sendIcon after sending the message
    sendIcon.style.display = "none";

	// Scroll to the bottom to show the new message
	chatMessages.scrollTop = chatMessages.scrollHeight;
  }
}

// Add an input event listener to track changes in the input field
inputComments.addEventListener("input", toggleSendIconVisibility);

// Add a keydown event listener to send the message on Enter key press
inputComments.addEventListener("keydown", (event) => {
  if (event.key === "Enter" && !event.shiftKey) {
    // Only send the message if Enter is pressed without Shift
    sendMessage();
    event.preventDefault(); // Prevent the default Enter behavior
  }
});

sendIcon.addEventListener("click", sendMessage);

// Hide the sendIcon initially
sendIcon.style.display = "none";
