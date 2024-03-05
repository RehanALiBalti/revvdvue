document.addEventListener("DOMContentLoaded", () => {
	var selectCountries = document.querySelector("#countries");
	fetch("https://restcountries.com/v3.1/all")
		.then((res) => {
			return res.json();
		})
		.then((data) => {
			let output = "";

			// Add an option for selecting all countries
			output +=
				'<option class="z-index-add" value="All">All Countries</option>';

			data.forEach((country) => {
				output += `<option class="z-index-add" value="${country.name.common}">${country.name.common}</option>`;
			});

			selectCountries.innerHTML = output;
		})
		.catch((err) => {
			console.log(err);
		});
});

// $(document).ready(function() {
// 	// Show the Bootstrap modal on window load
// 	$('#myModal').modal('show');
// });

// const closeIcon = document.getElementById("closeIcon");
// const loader = document.querySelector(".loader");
// const myVideo = document.getElementById("myVideo");
// const body = document.querySelector('body');

// closeIcon.addEventListener("click", () => {
// 	loader.classList.add("show");
// 	myVideo.play();
// 	body.classList.add('loaded');
// });

// myVideo.addEventListener("ended", () => {
//     // Video has ended, remove the "show" class from .loader
//     loader.classList.remove("show");
// 	body.classList.add('newloaded');
// });
var video = document.getElementById("myVideo");
var soundToggle = document.getElementById("soundToggle");
var loader = document.querySelector(".loader");
var customSelect = document.querySelector(".custom-select");
var customOptions = document.querySelector(".custom-options");
var customSelectSpan = customSelect.querySelector("span");
var headingVideo = document.querySelector(".banner-title.new-heading-loader");
var body = document.body;

// Function to show the video
function showVideo() {
	video.style.display = "none";
	headingVideo.style.display = "block";
	loader.style.display = "block";
}

// Function to hide the video
function hideVideo() {
	video.style.display = "none";
	body.classList.add("newloaded");
}



// Function to check if the language has been changed
function hasLanguageChanged() {
	return localStorage.getItem("languageChanged") === "true";
}

// Handle option selection
customOptions.addEventListener("click", function (e) {
	if (e.target && e.target.nodeName === "LI") {
		const selectedValue = e.target.dataset.code;
		customSelectSpan.textContent = selectedValue;
		customOptions.classList.remove("open");
		customSelect.classList.remove("open");
		customSelectSpan.classList.remove("up");
		console.log("Selected language code: " + selectedValue);

		// Hide the video when the language is changed
		hideVideo();

		// Set the languageChanged flag in local storage to true
		localStorage.setItem("languageChanged", "true");
		loader.style.display = "none";
		soundToggle.style.display = "none";
		headingVideo.style.display = "none";
		video.style.display = "none";
	}
});


if (hasLanguageChanged()) {
	console.log("language chnaged");
	hideVideo();
	loader.style.display = "none";
	soundToggle.style.display = "none";
	headingVideo.style.display = "none";
	// localStorage.removeItem("languageChanged");
}

// Handle the window load event
window.addEventListener("load", function () {
	video.style.display = "none";
	headingVideo.style.display = "block";
	loader.style.display = "block";
	// Add loaded class to the body
	body.classList.add("loaded");
	// Check if the language has been changed
	if (hasLanguageChanged()) {
		console.log("language chnaged");
		hideVideo();
		loader.style.display = "none";
		soundToggle.style.display = "none";
		headingVideo.style.display = "none";
		localStorage.removeItem("languageChanged");
	} else {
		localStorage.removeItem("languageChanged");
		showVideo();
		console.log("page load");
		// Hide the loader and sound toggle button
		loader.style.display = "block";
		soundToggle.style.display = "block";
		headingVideo.style.display = "block";
	}
});

video.addEventListener("ended", function () {

	// Clear the languageChanged flag in local storage
	localStorage.removeItem("languageChanged");
	// Hide the loader and sound toggle button
	loader.style.display = "none";
	soundToggle.style.display = "none";

	// Add newloaded class to the body
	body.classList.add("newloaded");
});

soundToggle.addEventListener("click", function () {
	video.style.display = "block";
	headingVideo.style.display = "none";
	// Autoplay the video
	video
		.play()
		.then(function () {
			// Autoplay succeeded
			console.log("Video autoplay succeeded");
		})
		.catch(function (error) {
			// Autoplay was blocked
			console.error("Video autoplay was blocked:", error);
		});
	if (video.muted) {
		video.muted = false; // Unmute the video
		soundToggle.textContent = "Sound Off";
	} else {
		video.muted = true; // Mute the video
		soundToggle.textContent = "Sound On";
	}
});
