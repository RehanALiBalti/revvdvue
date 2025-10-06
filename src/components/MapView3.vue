<template>
    <div id="map-container">
        <div class="row" v-show="IsModal">
            <div class="col-md-3">
                <div class="load-more-info w-100 d-flex justify-content-start align-items-center mb-4 mx-auto">
                    <div class="list-item-btn position-relative load-more-div proceed-div mx-auto">
                        <span class="border-bottom-btn border-top-btn position-absolute">
                            <img src="@/assets/images/Group12white.png" class="img-border position-absolute" alt="" />
                        </span>

                        <span class="border-bottom-btn border-top-btn border-right-radius position-absolute">
                            <img src="@/assets/images/Path467white.png" class="img-border position-absolute" alt="" />
                        </span>

                        <span
                            class="border-bottom-btn border-top-btn border-right-radius border-right-bottom-radius position-absolute">
                            <img src="@/assets/images/Path465white.png" class="img-border position-absolute" alt="" />
                        </span>
                        <!-- <router-link to="/map3" class="signin-btnli signup-btnli">
                            Back To Map
                        </router-link> -->
                        <button @click="IsModal = !IsModal" class="signin-btnli signup-btnli">
                            Back To Map
                        </button>
                        <span class="border-bottom-btn border-left-btn position-absolute">
                            <img src="@/assets/images/Group11white.png" class="img-border position-absolute" alt="" />
                        </span>
                        <span class="border-bottom-btn position-absolute">
                            <img src="@/assets/images/Path473white.png" class="img-border position-absolute" alt="" />
                        </span>
                    </div>
                </div>

            </div>
        </div>
        <div id="map" class="d-none"></div>
        <div class="flex-lg-screen" style="overflow:auto ; position:relative">
            <img class="img-lg-100" :src="mapImage" />
            <img :src="usa" class="usa  d-md-block cursor-pointer" @click="IsModal = !IsModal" />
            <img :src="eurp" class="eurp  d-md-block cursor-pointer" @click="IsModal = !IsModal" />
            <img :src="japn" class="japn  d-md-block cursor-pointer" @click="IsModal = !IsModal" />
            <img :src="dotm" class="dotusa d-none d-md-none cursor-pointer" @click="IsModal = !IsModal" />
            <img :src="dotm" class="doteurp d-none d-md-none cursor-pointer" @click="IsModal = !IsModal" />
            <img :src="dotm" class="dotjapn d-none d-md-none cursor-pointer" @click="IsModal = !IsModal" />

        </div>
        <div class="row" v-show="IsModal">
            <div class="col-md-12">
                <div class="modal-dialog modal-xxl modalPos">
                    <div class="modal-content">
                        <div class="modal-header border-0">

                        </div>
                        <div class="modal-body">
                            <div class="row justify-content-center">

                                <div class="col-md-12">


                                    <div class="swiper-container swpipwcon">
                                        <div class="swiper-wrapper">
                                            <div class="swiper-slide" v-for="(car, index) in cars" :key="index">
                                                <p class="fontC2">{{ car.country }}</p>
                                                <!-- <img :src="car.logo" width="250px"/> -->
                                                <img :src="car.logo" width="250px" height="150px" />

                                                <!-- Checkbox with max 3 selection logic -->
                                                <div class="d-flex align-items-center gap-2 mt-2 ms-1 ms-md-0">
                                                    <input type="checkbox" class="form-check-input mb-2 border-0"
                                                        :id="'car-' + index" :value="car.name" v-model="selectedCars"
                                                        :disabled="selectedCars.length >= 3 && !selectedCars.includes(car.name)" />
                                                    <!-- <label :for="'car-' + index">{{ car.name }}</label> -->
                                                </div>

                                                <div
                                                    class="border-orange d-flex justify-content-between align-items-center p-2">
                                                    <button class="swiperbutton swiper-prev">
                                                        <i class="fa-solid fa-chevron-left"></i>
                                                    </button>
                                                    {{ car.name }}
                                                    <button class="swiperbutton swiper-next">
                                                        <i class="fa-solid fa-chevron-right"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- selected cars -->
                                    <div class="d-flex align-items-center gap-2 px-2 justify-content-center flex-wrap">
                                        <span class="badge badge-orange mb-3" v-for="(car, index) in selectedCars"
                                            :key="index">
                                            {{ car }}
                                        </span>
                                    </div>

                                    <div class="col-md-12">
                                        <div
                                            class="load-more-info w-100 d-flex justify-content-start align-items-center mb-4 mx-auto mt-0">
                                            <div
                                                class="list-item-btn position-relative load-more-div proceed-div mx-auto">
                                                <span class="border-bottom-btn border-top-btn position-absolute">
                                                    <img src="@/assets/images/Group12engine.png"
                                                        class="img-border position-absolute" alt="" />
                                                </span>

                                                <span
                                                    class="border-bottom-btn border-top-btn border-right-radius popup-right position-absolute">
                                                    <img src="@/assets/images/Path467engine.png"
                                                        class="img-border position-absolute" alt="" />
                                                </span>

                                                <span
                                                    class="border-bottom-btn border-top-btn border-right-radius border-right-bottom-radius popup-right-bottom position-absolute">
                                                    <img src="@/assets/images/Path465engine.png"
                                                        class="img-border position-absolute" alt="" />
                                                </span>
                                                <!-- data-bs-toggle="modal" -->
                                                <router-link to="/buy4" class="signin-btnli ">
                                                    Proceed
                                                </router-link>
                                                <span
                                                    class="border-bottom-btn border-left-btn new-popup position-absolute">
                                                    <img src="@/assets/images/Group11engine.png"
                                                        class="img-border position-absolute" alt="" />
                                                </span>
                                                <span class="border-bottom-btn position-absolute">
                                                    <img src="@/assets/images/Path473engine.png"
                                                        class="img-border position-absolute" alt="" />
                                                </span>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import mapboxgl from 'mapbox-gl';
// import router from '.././routes'; // Path to your Vue router instance

import Swiper from 'swiper';
import { Navigation, Pagination } from "swiper/modules";
import 'swiper/swiper-bundle.css';
import logo1 from "../assets/images/cars_logos/60.png"
import logo2 from "../assets/images/cars_logos/56.png"
import logo3 from "../assets/images/cars_logos/21.png"
// import logo4 from "../assets/images/cars_logos/3.png"
import mapImage from "../assets/images/bgmap.png"
import usa from "../assets/images/usa.png"
import japn from "../assets/images/japn.png"
import eurp from "../assets/images/eurp.png"
import dotm from "../assets/images/dotm.png"

import "vue-select/dist/vue-select.css";

export default {
    name: 'MapComponent2',
    data() {
        return {
            dotm,
            usa,
            japn,
            eurp,
            mapImage,
            IsModal: false,
            country: "",
            logo1: logo1,
            logo2: logo2,
            formData: {
                make: "",
                model: ""
            },
            selectedCars: [],
            cars: [
                { name: 'MG', country: 'USA', logo: logo1 },
                { name: 'Mercedes', country: 'Germany', logo: logo2 },

                { name: 'bmw', country: 'Germany', logo: logo3 },
                // Add more if needed
            ],

        }

    },

    mounted() {
        const swiper = new Swiper(".swiper-container", {
            modules: [Navigation, Pagination],
            loop: true,
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
            navigation: {
                nextEl: ".swiper-next",
                prevEl: ".swiper-prev",
            },
        });
        console.log("swipper", swiper); // Check if Swiper is initialized   

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
                // router.push(cityCoordinates[city].link); // Redirect to URL
                this.IsModal = true
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
.usa {
    position: absolute;
    /* top: 159px;
    left: 189px; */
    top: 25%;
    left: 21%;
    width: 160px;

}

.eurp {
    /* top: 109px;
    position: absolute;
    left: 698px; */
    top: 16%;
    position: absolute;
    left: 55%;
    width: 160px;

}

.japn {
    position: absolute;
    /* top: 26%;
    right: 4%;
    width: 160px; */
    top: 31%;
    right: 0%;
    width: 99px;

}

@media(min-width:1900px) {
    .japn {
        /* top: 29%;
        right: 6%; */
        top: 31%;
        right: 1%;
        width: 138px;


    }
}

.swiper-slide {
    color: #ffff;
    margin-top: 2rem;

}

.fontC2 {
    font-size: 25px;
    color: #FF7A00;
}

.fontC span {
    color: #FF7A00;
}

.badge-orange {
    background: #FF7A00
}

#map {
    height: 500px;
    width: 100%;
}

.modalPos {
    position: absolute;
    top: 45%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 60%
}

.modal {
    background: none;
}

.modal-dialog {
    max-width: auto;
    margin-right: auto;
    margin-left: auto;
}

.modal-content {
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    pointer-events: auto;
    /* background-color: transparent; */
    /* background-color: #031726; */
    background-color: #031726cd !important;
    /* opacity: 0.8; */
    background-clip: padding-box;
    border: 1px solid #1a202c;
    border-radius: 15px;
    outline: 0;
    box-shadow: rgba(28, 30, 63, 0.4) 0px 30px 90px;
}

.fontC {
    font-size: 16px !important
}

.fontC span {
    color: #FF7A00;
}

.fsel {
    border: 1px solid #FF7A00 !important;
}

.border-orange {
    border: 1px solid #FF7A00 !important;
    border-radius: 7px;
}

.swiper-button-next {
    font-size: 18px;
    color: #fff
}

.swiper-button-prev:after,
.swiper-button-next:after {
    font-size: 12px
}

.swiperbutton {
    border: none;
    font-size: 16px;
    color: #fff;
    background: none;

}

@media(max-width:768px) {
    .modalPos {
        width: 90%;
        top: 40%;
        margin-bottom: 1rem;

    }

}

.swpipwcon {
    max-width: 566px !important;
    height: 340px !important
}

.dotusa {

    position: absolute;
    top: 48px;
    left: 45px;
}

.doteurp {
    position: absolute;
    top: 27px;
    left: 178px;

}

.dotjapn {
    position: absolute;
    top: 42px;
    left: 297px;
}

.cursor-pointer {
    cursor: pointer;
}

@media(max-width:768px) {
    .usa {
        top: 232px;
        left: 271px;

    }

    .eurp {
        left: 973px;
    }

    .japn {
        top: 238px;
        left: 1567px;
        width: unset;

    }
}

@media(min-width:993px) {
    .img-lg-100 {
        max-width: 100% !important;
        width: 100% !important;
        /* width: 80% !important;
        height: auto */
    }

    .flex-lg-screen {
        display: flex;
        justify-content: center
    }
}
</style>