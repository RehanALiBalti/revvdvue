<template>
    <div>
        <div class="row">
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
                        <router-link to="/map3" class="signin-btnli signup-btnli">
                            Back To Map
                        </router-link>
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
        <div id="map"></div>

        <div class="row">
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
                                            <div class="swiper-slide">
                                                <p class="fontC2">USA</p>
                                                <img class="" :src="logo1" width="250px" />

                                                <div
                                                    class="border-orange d-flex justify-content-between align-items-center p-2">
                                                    <button class=" swiperbutton swiper-prev">
                                                        <i class="fa-solid fa-chevron-left"></i>
                                                    </button>
                                                    MG
                                                    <button class=" swiperbutton swiper-next">
                                                        <i class="fa-solid fa-chevron-right"></i>
                                                    </button>
                                                </div>
                                            </div>
                                            <div class="swiper-slide">
                                                <p class="fontC2"> Germany</p>
                                                <img class="" :src="logo2" width="250px" height="150px" />

                                                <div
                                                    class="border-orange d-flex justify-content-between align-items-center p-2">
                                                    <button class=" swiperbutton swiper-prev">
                                                        <i class="fa-solid fa-chevron-left"></i>
                                                    </button>
                                                    Mercedes
                                                    <button class=" swiperbutton swiper-next">
                                                        <i class="fa-solid fa-chevron-right"></i>
                                                    </button>
                                                </div>
                                            </div>

                                        </div>

                                        <!-- Add Navigation -->

                                    </div>
                                    <div class="col-md-12">
                                        <div
                                            class="load-more-info w-100 d-flex justify-content-start align-items-center mb-4 mx-auto">
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
                                                <router-link to="/buy3" class="signin-btnli ">
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
        <div class="row posrel">
            <div class="col-md-4 my-2">
                <div class="modal-dialog ">
                    <div class="modal-content px-3 py-2">
                        <p class="text-white text-center mb-2">MG</p>
                        <v-select v-model="formData.make" class="my-2 fsel" :options="makefilteredOptions"
                            placeholder="Select a Make" :filterable="true">
                            <template #open-indicator>
                                <!-- Custom SVG Icon -->
                                <img class="indicator_Image"
                                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAAMCAYAAACA0IaCAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAADiSURBVChTjZIBEcIwDEVbBeAAHAAOOgk4YA7ACShgFlDAHAAOkAAKxv9cwqWl3dq7XbMk/+03nR+GYe6cu+Lharz3L4knN2jXou2h23ok7kisRMm4CmhANMN1IuyJYGFsTALlNDdolkZ3IYxWezyzGqAZC3W6HgiC51sByDk0dnAF0JsOOesvbATYoamVul6UdURQQA9H434wEQTserP6nQ7BQfJF0B9MgDvsZ3s8xPxd9NZYihxpb+TMHDkH1HIWlHVWAdzojBL38czSIm4vddgCxBlmV/aYtlOAR+T2YyBqPrkMZFSDhkgfAAAAAElFTkSuQmCC"
                                    width="11px" />
                            </template>
                            <template #no-options>
                                <span>No options available</span>
                            </template>
                        </v-select>
                        <v-select v-model="formData.model" class="my-2 fsel" :options="modelfilteredOptions"
                            placeholder="Select a Model" :filterable="true" :readonly="formData.make === ''">
                            <template #open-indicator>
                                <!-- Custom SVG Icon -->
                                <img class="indicator_Image"
                                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAAMCAYAAACA0IaCAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAADiSURBVChTjZIBEcIwDEVbBeAAHAAOOgk4YA7ACShgFlDAHAAOkAAKxv9cwqWl3dq7XbMk/+03nR+GYe6cu+Lharz3L4knN2jXou2h23ok7kisRMm4CmhANMN1IuyJYGFsTALlNDdolkZ3IYxWezyzGqAZC3W6HgiC51sByDk0dnAF0JsOOesvbATYoamVul6UdURQQA9H434wEQTserP6nQ7BQfJF0B9MgDvsZ3s8xPxd9NZYihxpb+TMHDkH1HIWlHVWAdzojBL38czSIm4vddgCxBlmV/aYtlOAR+T2YyBqPrkMZFSDhkgfAAAAAElFTkSuQmCC"
                                    width="11px" />
                            </template>
                            <template #no-options>
                                <span>No models available</span>
                            </template>
                        </v-select>
                    </div>


                </div>
            </div>
            <div class="col-md-4 my-2">
                <div class="modal-dialog ">
                    <div class="modal-content px-3 py-2">
                        <p class="text-white text-center mb-2">NIssan</p>
                        <v-select v-model="formData.make" class="my-2 fsel" :options="makefilteredOptions"
                            placeholder="Select a Make" :filterable="true">
                            <template #open-indicator>
                                <!-- Custom SVG Icon -->
                                <img class="indicator_Image"
                                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAAMCAYAAACA0IaCAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAADiSURBVChTjZIBEcIwDEVbBeAAHAAOOgk4YA7ACShgFlDAHAAOkAAKxv9cwqWl3dq7XbMk/+03nR+GYe6cu+Lharz3L4knN2jXou2h23ok7kisRMm4CmhANMN1IuyJYGFsTALlNDdolkZ3IYxWezyzGqAZC3W6HgiC51sByDk0dnAF0JsOOesvbATYoamVul6UdURQQA9H434wEQTserP6nQ7BQfJF0B9MgDvsZ3s8xPxd9NZYihxpb+TMHDkH1HIWlHVWAdzojBL38czSIm4vddgCxBlmV/aYtlOAR+T2YyBqPrkMZFSDhkgfAAAAAElFTkSuQmCC"
                                    width="11px" />
                            </template>
                            <template #no-options>
                                <span>No options available</span>
                            </template>
                        </v-select>
                        <v-select v-model="formData.model" class="my-2 fsel" :options="modelfilteredOptions"
                            placeholder="Select a Model" :filterable="true" :readonly="formData.make === ''">
                            <template #open-indicator>
                                <!-- Custom SVG Icon -->
                                <img class="indicator_Image"
                                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAAMCAYAAACA0IaCAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAADiSURBVChTjZIBEcIwDEVbBeAAHAAOOgk4YA7ACShgFlDAHAAOkAAKxv9cwqWl3dq7XbMk/+03nR+GYe6cu+Lharz3L4knN2jXou2h23ok7kisRMm4CmhANMN1IuyJYGFsTALlNDdolkZ3IYxWezyzGqAZC3W6HgiC51sByDk0dnAF0JsOOesvbATYoamVul6UdURQQA9H434wEQTserP6nQ7BQfJF0B9MgDvsZ3s8xPxd9NZYihxpb+TMHDkH1HIWlHVWAdzojBL38czSIm4vddgCxBlmV/aYtlOAR+T2YyBqPrkMZFSDhkgfAAAAAElFTkSuQmCC"
                                    width="11px" />
                            </template>
                            <template #no-options>
                                <span>No models available</span>
                            </template>
                        </v-select>
                    </div>


                </div>
            </div>
            <div class="col-md-4 my-2">
                <div class="modal-dialog ">
                    <div class="modal-content px-3 py-2">
                        <p class="text-white text-center mb-2">Mercedes
                        </p>
                        <v-select v-model="formData.make" class="my-2 fsel" :options="makefilteredOptions"
                            placeholder="Select a Make" :filterable="true">
                            <template #open-indicator>
                                <!-- Custom SVG Icon -->
                                <img class="indicator_Image"
                                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAAMCAYAAACA0IaCAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAADiSURBVChTjZIBEcIwDEVbBeAAHAAOOgk4YA7ACShgFlDAHAAOkAAKxv9cwqWl3dq7XbMk/+03nR+GYe6cu+Lharz3L4knN2jXou2h23ok7kisRMm4CmhANMN1IuyJYGFsTALlNDdolkZ3IYxWezyzGqAZC3W6HgiC51sByDk0dnAF0JsOOesvbATYoamVul6UdURQQA9H434wEQTserP6nQ7BQfJF0B9MgDvsZ3s8xPxd9NZYihxpb+TMHDkH1HIWlHVWAdzojBL38czSIm4vddgCxBlmV/aYtlOAR+T2YyBqPrkMZFSDhkgfAAAAAElFTkSuQmCC"
                                    width="11px" />
                            </template>
                            <template #no-options>
                                <span>No options available</span>
                            </template>
                        </v-select>
                        <v-select v-model="formData.model" class="my-2 fsel" :options="modelfilteredOptions"
                            placeholder="Select a Model" :filterable="true" :readonly="formData.make === ''">
                            <template #open-indicator>
                                <!-- Custom SVG Icon -->
                                <img class="indicator_Image"
                                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAAMCAYAAACA0IaCAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAADiSURBVChTjZIBEcIwDEVbBeAAHAAOOgk4YA7ACShgFlDAHAAOkAAKxv9cwqWl3dq7XbMk/+03nR+GYe6cu+Lharz3L4knN2jXou2h23ok7kisRMm4CmhANMN1IuyJYGFsTALlNDdolkZ3IYxWezyzGqAZC3W6HgiC51sByDk0dnAF0JsOOesvbATYoamVul6UdURQQA9H434wEQTserP6nQ7BQfJF0B9MgDvsZ3s8xPxd9NZYihxpb+TMHDkH1HIWlHVWAdzojBL38czSIm4vddgCxBlmV/aYtlOAR+T2YyBqPrkMZFSDhkgfAAAAAElFTkSuQmCC"
                                    width="11px" />
                            </template>
                            <template #no-options>
                                <span>No models available</span>
                            </template>
                        </v-select>
                    </div>


                </div>
            </div>
        </div>
    </div>

</template>

<script>
import mapboxgl from 'mapbox-gl';

import Swiper from 'swiper';
import { Navigation, Pagination } from "swiper/modules";
import 'swiper/swiper-bundle.css';
import logo1 from "../assets/images/cars_logos/60.png"
import logo2 from "../assets/images/cars_logos/56.png"
import vSelect from "vue-select";
import "vue-select/dist/vue-select.css";
export default {
    name: 'MapComponent3',
    components: {
        vSelect
    },
    data() {
        return {
            ModalStoryFail: true,
            country: "",
            logo1: logo1,
            logo2: logo2,
            formData: {
                make: "",
                model: ""
            }
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


        });






    }
}
</script>

<style scoped>
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

#map {
    height: 500px;
    width: 100%;
}

.modalPos {
    position: absolute;
    top: 32%;
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
        top: 30%;
        margin-bottom: 1rem;

    }

}

.swpipwcon {
    max-width: 562px !important;
    height: 280px !important
}

.posrel {
    position: relative;
    top: -160px;
}
</style>