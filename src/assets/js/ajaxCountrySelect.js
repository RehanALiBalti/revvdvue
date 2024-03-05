// // Your REST Countries API endpoint for country data
// const restCountriesAPI = 'https://restcountries.com/v3.1/all';

// // Your OpenCage Geocoding API key
// const openCageAPIKey = '5c3865ab5538403180e3f0db7175f057';

// document.addEventListener("DOMContentLoaded", () => {
//     // Fetch and populate the list of countries
//     fetchCountries();
// });

// function fetchCountries() {
//     const countrySelect = document.getElementById('country');
//     countrySelect.innerHTML = '<option value="">Select a Country</option>'; // Reset the country dropdown

//     // Fetch countries using the REST Countries API
//     fetch(restCountriesAPI)
//         .then(response => response.json())
//         .then(data => {
//             data.forEach(country => {
//                 const option = document.createElement('option');
//                 option.value = country.cca2;
//                 option.text = country.name.common;
//                 countrySelect.add(option);
//             });
//         })
//         .catch(error => {
//             console.error('Error fetching countries:', error);
//         });
// }

// function fetchCities() {
//     const countrySelect = document.getElementById('country');
//     const citySelect = document.getElementById('city');
//     const selectedCountry = countrySelect.options[countrySelect.selectedIndex].text;

//     // Clear the city select box
//     citySelect.innerHTML = '<option value="">Select a City</option>';

//     if (selectedCountry) {
//         // Fetch city data using the OpenCage Geocoding API
//         const openCageAPIUrl = `https://api.opencagedata.com/geocode/v1/json?q=${selectedCountry}&key=${openCageAPIKey}&no_annotations=1&limit=10`;
//         fetch(openCageAPIUrl)
//             .then(response => response.json())
//             .then(data => {
//                 if (data && data.results && data.results.length > 0) {
//                     const cities = data.results;
//                     cities.forEach(city => {
//                         const option = document.createElement('option');
//                         option.value = city.formatted;
//                         option.text = city.formatted;
//                         citySelect.add(option);
//                     });
//                 } else {
//                     console.error('No cities found for the selected country.');
//                 }
//             })
//             .catch(error => {
//                 console.error('Error fetching cities:', error);
//             });
//     }
// }
