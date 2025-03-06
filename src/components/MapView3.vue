<template>
    <div id="map-container">
        <div id="map"></div>
    </div>
</template>

<script>
import mapboxgl from 'mapbox-gl';
import router from '.././routes'; // Path to your Vue router instance

export default {
    name: 'MapComponent2',
    mounted() {
        mapboxgl.accessToken =
            "pk.eyJ1IjoiZGFuaXNoMjUwIiwiYSI6ImNsc3lxb3E0MjBnYTcycXJvYjUzcWxyc2sifQ.BTgJLfSCkp9R4ItQTxSVng";
        const map = new mapboxgl.Map({
            container: "map",
            style: "mapbox://styles/danish250/clsyqxkw400dp01me77n3ay9f",
            center: [-88.137343, 35.137451],
            zoom: 2,
            maxZoom: 10,
        });

        map.on("load", () => {
            const layers = map.getStyle().layers;

            map.setPaintProperty("water", "fill-color", "#000B1C");


            let firstSymbolId;
            for (const layer of layers) {
                if (layer.type === "symbol") {
                    firstSymbolId = layer.id;
                    break;
                }
            }

            map.addSource("urban-areas", {
                type: "geojson",
                data: "https://docs.mapbox.com/mapbox-gl-js/assets/ne_50m_urban_areas.geojson",
            });
            map.addLayer(
                {
                    id: "urban-areas-fill",
                    type: "fill",
                    source: "urban-areas",
                    paint: {
                        "fill-pattern": "custom-pattern", // Use a custom pattern
                        "fill-opacity": 1,
                    },
                },

                firstSymbolId
            );

            map.loadImage(
                "/images/star.jpeg", // URL of your custom image
                function (error, image) {
                    if (error) throw error;
                    map.addImage("custom-pattern", image); // Add the custom image as a pattern
                }
            );
        });


        const cityCoordinates = {
            "USA": { lat: 37.0902, lng: -95.7129, link: "/buy2" }
            // Add coordinates for other cities as needed
        };

        for (const city in cityCoordinates) {
            const markerElement = document.createElement("div");
            markerElement.className = "custom-marker";

            // Style the marker
            markerElement.style.backgroundSize = "contain";
            markerElement.style.backgroundRepeat = "no-repeat";
            markerElement.style.width = "20px";
            markerElement.style.height = "20px";
            markerElement.style.cursor = "pointer"; // Make it look clickable

            // Navigate to the URL when clicking the marker
            markerElement.addEventListener("click", () => {
                router.push(cityCoordinates[city].link); // Redirect to URL
            });

            // Create the popup content
            const popupContent = document.createElement("div");
            popupContent.classList.add("clickable");
            popupContent.innerHTML = `<h3 class="c">${city}</h3>`;

            const popup = new mapboxgl.Popup({ offset: 25 })
                .setDOMContent(popupContent);

            // Create marker and add it to the map
            new mapboxgl.Marker(markerElement)
                .setLngLat([cityCoordinates[city].lng, cityCoordinates[city].lat])
                .setPopup(popup) // Attach the popup
                .addTo(map);

            // Show the popup by default when the marker is added
            popup.addTo(map);
        }



    }
}
</script>

<style scoped>
/* #map {
    height: 500px;
    width: 100%;
} */

#map {
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100%;
}

.custom-marker {

    /* Ensure correct image path */
    background-size: cover;
    width: 30px;
    /* Increase size if needed */
    height: 30px;
    border-radius: 50%;
    /* Optional for rounded markers */
    transform: translate(-50%, -50%);
    /* Center the marker on the coordinates */
    position: absolute;
}
</style>