const filterButton = document.getElementById("filterButton");
const filterOptions = document.getElementById("navbarSupportedContent");

filterButton.addEventListener("click", function() {
	if (filterOptions.classList.contains("show")) {
		filterOptions.classList.remove("show");
	} else {
	  console.log("filterButton clicked");
    filterOptions.classList.add("show");
  }
});

$(document).ready(function () {
    $("#contactForm").submit(function (e) {
        e.preventDefault();

        var formData = $(this).serialize();

        $.ajax({
            url: "index.php", // Update with the actual URL
            method: "POST",
            data: formData,
            success: function (response) {
                // $("#response").html(response);
				$(".response").html(response);
            }
        });
    });
});
