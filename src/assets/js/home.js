// Get the image element by its class name
var locationImg = document.querySelector(".location-img");
var mapContainer = document.querySelector(".map-container");
var mapCustomContainer = document.querySelector(".map-custom-container");

// Check if the elements were found
if (locationImg && mapContainer && mapCustomContainer) {
    locationImg.addEventListener("click", function() {
        // Toggle the visibility of the containers
        mapContainer.style.display = "none";
        mapCustomContainer.style.display = "block";

        // Call a function to zoom to the USA
        zoomToUSA();
    });
} else {
    console.error("One or more elements not found!");
}

// Define city markers data
const cityMarkers = {
  USA: [
    { name: "New York", position: { lat: 40.7128, lng: -74.006 } },
    { name: "Los Angeles", position: { lat: 34.0522, lng: -118.2437 } },
    // Add more cities for the USA
  ],
  Canada: [
    { name: "Toronto", position: { lat: 43.65107, lng: -79.347015 } },
    { name: "Vancouver", position: { lat: 49.2827, lng: -123.1207 } },
    // Add more cities for Canada
  ],
  Australia: [
    { name: "Sydney", position: { lat: -33.8568, lng: 151.2153 } },
    { name: "Melbourne", position: { lat: -37.8136, lng: 144.9631 } },
    // Add more cities for Australia
  ],
  // Add more countries and their cities here
};

// Define city icons
const cityIcons = {
  default: {
    url: "Group500.png",
    scaledSize: new google.maps.Size(96, 123),
  },
  // Add more icons for specific cities if needed
};

// Define initial map zoom level
const initialZoom = 2;

// Initialize map variable
let map;

// Initialize the map
function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 40.08553005260061, lng: -104.64033551865029 },
    zoom: initialZoom,
    mapId: "a1d1cde33aa5c427",
    mapTypeControl: false,
    fullScreenControl: false,
    streetViewControl: false,
  });

  // Create markers for cities and add click event listeners
  createCityMarkers();
  
  // Create country polygons and add click event listeners
  createCountryPolygons();
}

// Create markers for cities and add click event listeners
function createCityMarkers() {
  const markers = [];
  
  for (const country in cityMarkers) {
    cityMarkers[country].forEach((city) => {
      const marker = createMarker(city);
      marker.addListener("click", () => {
        zoomToCity(city);
      });
      markers.push(marker);
    });
  }
}

// Create a marker with a specified icon
function createMarker(city) {
  return new google.maps.Marker({
    position: city.position,
    map: map,
    title: city.name,
    icon: cityIcons.default,
  });
}

// Zoom to a city when its marker is clicked
function zoomToCity(city) {
  map.setZoom(12); // Adjust the zoom level as needed
  map.setCenter(city.position);
}

// Create country polygons and add click event listeners
function createCountryPolygons() {
  // Define country boundaries as polygons
  const countryPolygons = [
    {
      name: "USA",
      paths: [
        { lat: 39.54545721629027, lng: -101.65205434888729 },
        { lat: 49.3457868, lng: -66.93457 },
        { lat: 24.396308, lng: -66.93457 },
        { lat: 24.396308, lng: -124.7844079 },
      ],
      zoomLevel: 6,
    },
    {
      name: "Canada",
      // Add paths for Canada
    },
    {
      name: "Australia",
      // Add paths for Australia
    },
    // Add polygons for other countries here
  ];

  countryPolygons.forEach((country) => {
    const countryPolygon = new google.maps.Polygon({
      paths: country.paths,
      map: map,
      fillOpacity: 0.0,
    });
    
    google.maps.event.addListener(countryPolygon, "click", () => {
      zoomToCountry(country);
    });
  });
}

// Function to zoom and center the map on a specific country
function zoomToCountry(countryName, zoomLevel) {
  const country = countryPolygons.find((c) =>
    c.name.toLowerCase() === countryName.toLowerCase()
  );

  if (country) {
    map.setZoom(zoomLevel); // Set the desired zoom level
    map.setCenter({ lat: country.paths[0].lat, lng: country.paths[0].lng }); // Center the map on the chosen country
  } else {
    console.error("Country not found!");
  }
}

// Get the image element by its class name
var locationImg = document.querySelector(".location-img");

// Check if the elements were found
if (locationImg) {
  locationImg.addEventListener("click", function() {
    // Toggle the visibility of the containers
    mapContainer.style.display = "none";
    mapCustomContainer.style.display = "block";

    // Call the function to zoom and center on the USA
    zoomToCountry("USA", 6); // You can adjust the zoom level as needed
  });
} else {
  console.error("Image element not found!");
}


// Function to zoom to the USA
function zoomToUSA() {
  // Center of the USA
  const usaCenter = { lat: 37.969208693581095, lng: -95.93916387728163 };

  // Create a marker for the USA and add it to the map
  const usaMarker = createMarker({
    name: "USA",
    position: usaCenter,
    icon: "Group788-location.png", // Replace with the path to your marker icon
  });
  usaMarker.addListener("click", () => {
    zoomToCountry({ name: "USA", zoomLevel: 4 });
  });

  // Set the zoom level and center of the map
  map.setZoom(4); // Adjust the zoom level as needed
  map.setCenter(usaCenter);

  // Add the USA marker to the map
  usaMarker.setMap(map);
}



// Initialize the map when the DOM is loaded
document.addEventListener("DOMContentLoaded", initMap);


// Attach an event listener to the search button
// document.getElementById("searchButton").addEventListener("click", function () {
//   // Get the search query from the input field
//   var searchQuery = document.getElementById("searchInput").value;

//   // Perform your search operation using the searchQuery
//   console.log("Searching for: " + searchQuery);
// });

