<template>
    <div class="container-fluid bg-mesh">
        <div class="container">
            <div class="mt-4 py-2" v-if="car">
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
                                    @click="openViewer(idx)"
                                />
                            </div>
                        </swiper-slide>
                    </swiper>
                </div>

                <div class="custom-swiper-navigation gap-8 justify-content-center d-flex">
                    <button class="custom-prev btn">
                        <img :src="prevIcon" alt="" />
                    </button>
                    <button class="custom-next btn">
                        <img :src="nextIcon" alt="" />
                    </button>
                </div>

                <div class="d-flex justify-content-start">
                    <router-link class="a-tag-name-user mt-2 mb-2 truncate" to="/stories"
                        style="font-size: 16px; cursor: pointer; color: #f95f19; z-index: 99999">
                        Back
                    </router-link>
                </div>

                <!-- Hidden gallery for Viewer.js -->
                <div id="image-gallery" style="display: none;">
                    <img v-for="(image, idx) in dynamicImages" :src="image.src" :key="idx" style="display: none;" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import { EffectCards } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/swiper-bundle.css';

import nextIcon from '@/assets/images/next.png';
import prevIcon from '@/assets/images/prev.png';
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
            modules: [EffectCards],
        };
    },
    data() {
        return {
            id: '',
            car: null,
            dynamicImages: [], // Array for dynamic images in Viewer.js
            nextIcon,
            prevIcon,
            viewer: null, // Store the Viewer instance
        };
    },
    mounted() {
        this.id = this.$route.params.id;
        this.fetchStory(this.id);
    },
    methods: {
        openViewer(idx) {
            // Initialize Viewer.js with the current images
            this.viewer = new Viewer(document.getElementById('image-gallery'), {
                inline: true,
                navbar: false,
                title: false,
                toolbar: {
                    prev: true,
                    play: true,
                    next: true,
                    zoomIn: true,
                    zoomOut: true,
                    rotateLeft: true,
                    rotateRight: true,
                    flipHorizontal: true,
                    flipVertical: true,
                    reset: true,
                    close: true, // Add close button
                },
            });

            // Ensure dynamic images are loaded into Viewer.js
            this.viewer.update();  // Update viewer to use dynamic images
            // Show the clicked image
            this.viewer.show(idx);
        },
        fetchStory(id) {
            axios
                .get(`https://king-prawn-app-3rw3o.ondigitalocean.app/api/stories/${id}`)
                .then((response) => {
                    this.car = response.data;
                    this.dynamicImages = this.parsedImages(this.car.images).map((image) => ({
                        src: `https://king-prawn-app-3rw3o.ondigitalocean.app/stories/${image}`,
                        thumb: `https://king-prawn-app-3rw3o.ondigitalocean.app/stories/${image}`,
                    }));
                })
                .catch((error) => {
                    console.error('Error fetching stories:', error);
                });
        },
        parsedImages(images) {
            return JSON.parse(images);
        },
    },
};
</script>

<style scoped>
/* Add your custom styles here */
</style>