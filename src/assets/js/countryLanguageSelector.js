// document.addEventListener("DOMContentLoaded", function () {
//     const customSelect = document.querySelector(".custom-select");
//     const customOptions = document.querySelector(".custom-options");
//     const customSelectSpan = customSelect.querySelector("span");
//     let translations = {
//         en: {
//             welcome_message: "Welcome to our website.",
//         },
//         fr: {
//             welcome_message: "Bienvenue sur notre site Web.",
//         },
//         de: {
//             welcome_message: "Willkommen auf unserer Website.",
//         },
//     };

//     // Function to update website content based on the selected language
//     function updateContent(languageCode) {
//         const selectedTranslations = translations[languageCode];
//         const elementsToTranslate = document.querySelectorAll("[data-translation]");

//         elementsToTranslate.forEach((element) => {
//             const translationKey = element.getAttribute("data-translation");
//             element.textContent = selectedTranslations[translationKey] || "";
//         });
//     }

//     // Function to populate the custom language selector options
//     function populateLanguageOptions(languages) {
//         customOptions.innerHTML = ""; // Clear existing options
//         languages.forEach(function (language) {
//             const option = document.createElement("li");
//             option.textContent = language.name;
//             option.dataset.code = language.code;
//             customOptions.appendChild(option);
//         });
//     }

//     // Define the available languages
//     const languages = [
//         { name: "English", code: "en" },
//         { name: "French", code: "fr" },
//         { name: "German", code: "de" },
//     ];

//     // Populate the language options
//     populateLanguageOptions(languages);

//     // Set the default language to English
//     customSelectSpan.textContent = "en";

//     // Show/hide the custom options when clicking the select box
//     customSelect.addEventListener("click", function () {
//         customOptions.classList.toggle("open");
//         customSelect.classList.toggle("open");
//         customSelectSpan.classList.toggle("up");
//     });

//     // Handle option selection
//     customOptions.addEventListener("click", function (e) {
//         if (e.target && e.target.nodeName === "LI") {
//             const selectedValue = e.target.dataset.code;
//             customSelectSpan.textContent = selectedValue;
//             customOptions.classList.remove("open");
//             customSelect.classList.remove("open");
//             customSelectSpan.classList.remove("up");
//             console.log("Selected language code: " + selectedValue);

//             e.stopPropagation(); // Prevent the click event from propagating to the document

//             // Update content based on the selected language
//             updateContent(selectedValue);
//         }
//     });

//     // Close the options when clicking outside the custom select
//     document.addEventListener("click", function (e) {
//         if (!customSelect.contains(e.target)) {
//             customOptions.classList.remove("open");
//             customSelect.classList.remove("open");
//             customSelectSpan.classList.remove("up");
//         }
//     });
// });
// document.addEventListener("DOMContentLoaded", function() {
// 	var baseUrl = "<?= base_url() ?>";
//     const customSelect = document.querySelector(".custom-select");
//     const customOptions = document.querySelector(".custom-options");
//     const customSelectSpan = customSelect.querySelector("span");

//     // Define the available languages
//     const languages = [
//         { name: "English", code: "english" },
//         { name: "French", code: "french" },
//         { name: "German", code: "german" },
//     ];

//     // Function to update website content based on the selected language
//     function updateContent(languageCode) {
//         // Make an AJAX request to fetch language data
//         fetch(fetch(baseUrl + '/site/landingPage/' + languageCode))
//             .then(response => response.json())
//             .then(data => {
//                 // Update the content on the page based on the fetched translations
//                 const elementsToTranslate = document.querySelectorAll("[data-translation]");
//                 elementsToTranslate.forEach(element => {
//                     const translationKey = element.getAttribute("data-translation");
//                     element.textContent = data[translationKey] || "";
//                 });
//             })
//             .catch(error => console.error(error));
//     }

//     // Function to populate the custom language selector options
//     function populateLanguageOptions() {
//         customOptions.innerHTML = ""; // Clear existing options
//         languages.forEach(language => {
//             const option = document.createElement("li");
//             option.textContent = language.name;
//             option.dataset.code = language.code;
//             customOptions.appendChild(option);
//         });
//     }

//     // Set the default language to English
//     let selectedLanguage = "english";
//     customSelectSpan.textContent = selectedLanguage;

//     // Populate the language options
//     populateLanguageOptions();

//     // Show/hide the custom options when clicking the select box
//     customSelect.addEventListener("click", function() {
//         customOptions.classList.toggle("open");
//         customSelect.classList.toggle("open");
//         customSelectSpan.classList.toggle("up");
//     });

//     // Handle option selection
//     customOptions.addEventListener("click", function(e) {
//         if (e.target && e.target.nodeName === "LI") {
//             const selectedValue = e.target.dataset.code;
//             customSelectSpan.textContent = selectedValue;
//             customOptions.classList.remove("open");
//             customSelect.classList.remove("open");
//             customSelectSpan.classList.remove("up");
//             console.log("Selected language code: " + selectedValue);

//             e.stopPropagation(); // Prevent the click event from propagating to the document

//             // Update content based on the selected language
//             updateContent(selectedValue);

//             // Optionally, you can store the selected language in a cookie or localStorage
//             // for persistence across page loads.
//             // For example, using localStorage:
//             localStorage.setItem("selectedLanguage", selectedValue);
//         }
//     });

//     // Close the options when clicking outside the custom select
//     document.addEventListener("click", function(e) {
//         if (!customSelect.contains(e.target)) {
//             customOptions.classList.remove("open");
//             customSelect.classList.remove("open");
//             customSelectSpan.classList.remove("up");
//         }
//     });
// });
