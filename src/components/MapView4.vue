<template>
    <div>
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
            "New York": { lat: 40.7128, lng: -74.006, link: "/marketplace" },
            "Los Angeles": { lat: 34.0522, lng: -118.2437, link: "/marketplace" },
            // Add coordinates for other cities as needed
        };

        for (const city in cityCoordinates) {
            const markerElement = document.createElement("div");
            markerElement.className = "custom-marker";

            markerElement.style.backgroundSize = "contain";
            markerElement.style.backgroundRepeat = "no-repeat";
            markerElement.style.width = "20px";
            markerElement.style.height = "20px";

            const popupContent = document.createElement("div");
            popupContent.classList.add("clickable")
            popupContent.innerHTML = `<h3 class="c">${city}</h3>`;
            popupContent.addEventListener("click", () => {
                // Programmatically navigate to the specified route using Vue router
                // Assuming you have access to the Vue instance and the router
                router.push(cityCoordinates[city].link);
            });

            new mapboxgl.Marker(markerElement)
                .setLngLat([cityCoordinates[city].lng, cityCoordinates[city].lat])
                .setPopup(new mapboxgl.Popup().setDOMContent(popupContent))
                .addTo(map);
        }


    }
}
</script>

<style scoped>
#map {
    height: 500px;
    width: 100%;
}

.c {
    cursor: pointer !important;
}

.clickable {
    cursor: pointer !important;
}
</style>