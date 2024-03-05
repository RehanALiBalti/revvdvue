document.addEventListener("DOMContentLoaded", function() {
    const cookieConsent = document.getElementById("cookieConsent");
    const acceptButton = document.getElementById("acceptButton");
    const declineButton = document.getElementById("declineButton");

    // Check if the user has previously accepted cookies
    const userAcceptedCookies = localStorage.getItem("userAcceptedCookies");

    if (!userAcceptedCookies) {
        // If cookies have not been accepted, show the cookie consent modal
        cookieConsent.style.display = "block";
    }

    // Event listener for accepting cookies
    acceptButton.addEventListener("click", function() {
        // Set a flag in local storage indicating that the user has accepted cookies
        localStorage.setItem("userAcceptedCookies", "true");

        // Hide the cookie consent modal
        cookieConsent.style.display = "none";
    });

    // Event listener for declining cookies
    declineButton.addEventListener("click", function() {
        // Do any additional action for declining cookies if needed
        localStorage.setItem("userAcceptedCookies", "false");

        // Hide the cookie consent modal
        cookieConsent.style.display = "none";
    });
});


function toggleText() {
	var cookieText = document.getElementById("cookieText");
	var viewMore = document.getElementById("viewMore");

	if (cookieText.classList.contains("show-more")) {
		cookieText.classList.remove("show-more");
		viewMore.innerHTML = '<a href="javascript:void(0);" onclick="toggleText()">View More</a>';
	} else {
		cookieText.classList.add("show-more");
		viewMore.innerHTML = '<a href="javascript:void(0);" onclick="toggleText()">View Less</a>';
	}
}
