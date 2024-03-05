document.addEventListener("DOMContentLoaded", function () {
	const userCustomBox = document.querySelector(".user-custom-box");
	const userDropdown = document.querySelector(".user-dropdown");
	const userNameSpan = userCustomBox.querySelector("span.user-name");


	// Show/hide the custom options when clicking the select box
	userCustomBox.addEventListener("click", function () {
		userDropdown.classList.toggle("open");
		userCustomBox.classList.toggle("open");
		userNameSpan.classList.toggle("up");
	});

	// Handle option selection
	userDropdown.addEventListener("click", function (e) {
		if (e.target && e.target.nodeName === "LI") {
			const selectedValue = e.target.dataset.code;
			// userNameSpan.textContent = selectedValue;
			userDropdown.classList.remove("open");
			userCustomBox.classList.remove("open");
			userNameSpan.classList.remove("up");
			console.log("Selected language code: " + selectedValue);

			e.stopPropagation(); // Prevent the click event from propagating to the document
		}
	});

	// Close the options when clicking outside the custom select
	document.addEventListener("click", function (e) {
		if (!userCustomBox.contains(e.target)) {
			userDropdown.classList.remove("open");
			userCustomBox.classList.remove("open");
			userNameSpan.classList.remove("up");
		}
	});
});
