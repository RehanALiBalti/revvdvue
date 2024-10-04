<template>
    <div class="container-fluid bg-mesh">
        <div class="container ">

            <div class="mt-4 py-2" v-if="car"> <!-- Ensure car is defined before rendering -->
                <div class="imageBig" ref="viewerContainer" style="display:none">
                    <img :src="currentImage" alt="Current Image for Viewing" />
                </div>
                <div class="myCarListingCard-swiper-container">
                    <swiper :effect="'cards'" :grabCursor="true" :modules="modules" :initialSlide="2"
                        :pagination="{ clickable: true }"
                        :navigation="{ nextEl: '.custom-next', prevEl: '.custom-prev' }"
                        class="mySwiper swiper-no-shadow modalswipper">
                        <swiper-slide class="swiper-no-shadow modalswippersh"
                            v-for="(image, idx) in parsedImages(car.images)" :key="idx">
                            <div class="d-block">
                                <img :src="'https://king-prawn-app-3rw3o.ondigitalocean.app/stories/' + image"
                                    class="slider-img myCarListingCard-img modalswipperImage" alt="car"
                                    @click="openViewer(image)" />
                            </div>
                        </swiper-slide>
                    </swiper>
                    <span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
                </div>
                <div class="custom-swiper-navigation gap-8 justify-content-center d-flex">
                    <button class="custom-prev btn">
                        <img :src="prevIcon" alt="" />
                    </button>
                    <button class="custom-next btn">
                        <img :src="nextIcon" alt="" />
                    </button>
                </div>
                <div class="d-flex justify-content-end">

                </div>
                <div class="overlay mt-5">
                    <div class="mt-2 d-flex justify-content-between align-items-center mb-2">
                        <div class="d-flex align-items-center gap-2">
                            <img :src="iconford" alt="" />
                            <h3 class="m-0 text-white fontsiz">{{ car.story_name }}</h3>
                        </div>
                        <h4 class="m-0 text-white fontsiz">{{ car.story_type }}</h4>

                    </div>
                    <div class="d-flex align-items-center text-white mt-2">
                        <img :src="instaIcon" class="instaIcon" />
                        <router-link class="a-tag-name-user mt-2 mb-2 truncate" :to="car.social_media"
                            style="font-size: 12px">
                            {{ car.social_media }}
                        </router-link>
                    </div>
                    <div class="d-flex gap-2 align-items-center text-white">
                        <p>{{ car.make }}</p>
                        <p>{{ car.modal }}</p>
                        <p>{{ car.year }}</p>
                    </div>
                    <div class="d-flex gap-2 align-items-center text-white">
                        <p>{{ car.country }}</p>
                        <p>{{ car.city }}</p>
                    </div>
                    <p class="text-white" style="font-size: 13px; text-align: start">
                        {{ car.advice || car.story }}
                    </p>
                    <p class="text-white" style="font-size: 13px; text-align: start">
                        {{ car.memorable }}
                    </p>
                    <p class="text-white" style="font-size: 13px; text-align: start">
                        {{ car.modifications }}
                    </p>
                    <p class="text-white" style="font-size: 13px; text-align: start">
                        {{ car.story_history }}
                    </p>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
import axios from 'axios';
import iconford from "@/assets/images/Imagefordlogo13.png";
import nextIcon from "@/assets/images/next.png";
import prevIcon from "@/assets/images/prev.png";
import instaIcon from "@/assets/images/instaicond.png";
import { EffectCards } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination, Navigation } from "swiper/modules";
// Swiper.use([Pagination, Navigation])
import Viewer from 'viewerjs';
import 'viewerjs/dist/viewer.css';
export default {
    name: 'CarListingView',
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
        return {
            modules: [EffectCards, Pagination, Navigation],
        };
    },
    data() {
        return {
            id: "",
            car: null,
            isOverlayTransparent: false,
            currentImage: "",
            nextIcon,
            prevIcon,
            iconford,
            instaIcon


        }
    },
    mounted() {
        this.id = this.$route.params.id
        this.fetchStory(this.id)
    },
    methods: {
        getImageUrl(image) {
            return `https://king-prawn-app-3rw3o.ondigitalocean.app/stories/${image}`;
        },
        fetchStory(id) {
            axios
                .get(`https://king-prawn-app-3rw3o.ondigitalocean.app/api/stories/${id}`)
                .then((response) => {
                    console.log("storu", response.data);
                    this.car = response.data;

                    // Filter stories by their type and assign them to 
                })
                .catch((error) => {
                    console.error("Error fetching stories:", error);
                });
        },
        parsedImages(images) {
            return JSON.parse(images); // Parse the images string to an array
        },
        toggleOverlayOpacity() {
            this.isOverlayTransparent = !this.isOverlayTransparent; // Toggle overlay transparency
        },
        openViewer(image) {
            console.log("in open viewer", image)

            this.currentImage = this.getImageUrl(image); // Set current image URL

            const viewerElement = this.$refs.viewerContainer; // Reference the container
            if (viewerElement) {
                // Destroy any previous instance if it exists to prevent duplication
                if (this.viewerInstance) {
                    this.viewerInstance.destroy();
                }

                // Use Vue's nextTick to ensure DOM is updated before initializing Viewer.js
                this.$nextTick(() => {
                    this.viewerInstance = new Viewer(viewerElement, {
                        inline: false, // Set to false for popup mode
                        zoomable: true, // Enable zooming functionality
                        movable: true, // Enable panning (dragging the image)
                        minScale: 1, // Prevent zooming out below 100%
                        maxScale: 3, // Limit zoom to 3x
                        viewed() {
                            // Optional: You can perform actions when the image is viewed
                            console.log("Image viewed");
                        },
                        toolbar: false, // Disable the default toolbar
                        zoomOnWheel: true, // Allow zooming with mouse wheel
                        fullscreen: false, // Disable fullscreen mode
                        title: false, // Disable image title display
                        navbar: false, // Disable the navigation bar
                        tooltip: false, // Disable tooltips for image actions
                        minX: 100, // Minimum X coordinate for panning
                        maxX: 200, // Maximum X coordinate
                        minY: 0, // Minimum Y coordinate
                        maxY: 300, // Maximum Y coordinate
                    });

                    // Show the viewer for the current image
                    this.viewerInstance.show();
                });
            }
        },
    }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Goldman:wght@400;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap');

.bg-effect {
    background: url("../../public/images/icons/LightEffect.png") !important;
    background-size: contain !important;
    background-repeat: no-repeat !important;
}

.bg-mesh {
    background: url("../../public/images/mesh.png") !important;
    background-size: contain !important;
    background-repeat: repeat !important;
}

.f1 {
    font-family: "Goldman";
    font-size: 26px;
    font-weight: normal;
    line-height: 19.200000762939453px;
    font-style: normal;
    text-align: left;
    color: #ffffff;
}

.f2 {
    font-family: "Lato";
    font-size: 14px;
    font-weight: normal;

    font-style: normal;
    text-align: left;
    color: #eeeeee;
}

.f3 {

    font-family: "Goldman";
    font-size: 18px;
    font-weight: normal;
    line-height: 46px;
    font-style: normal;
    text-align: left !important;
    color: #ffffff;
}

.btnAction {
    border: 0px transparent !important;
}

.meshImage {
    position: absolute;
    top: -350px;
    border: 0px;
    border-radius: 10px;
}
.modalswipper{
    overflow: visible !important;
}
.gap-8 {
    gap: 16rem !important;
}

</style>