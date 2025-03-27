<template>
    <section class="community-section height-control-scroll" data-scroll-container>
        <div class="container">
            <!-- Tabs -->





            <div class="row" data-scroll-section>
                <div class="col-md-12 mb-2">

                </div>


                <div class="col-md-9 px-4">
                    <div class="row stories-container">
                        <!-- Container for the Viewer.js to manage image viewing -->
                        <div class="imageBig" ref="viewerContainer" style="display: none">
                            <img loading="lazy" :src="currentImage" alt="Current Image for Viewing" />
                            <img loading="lazy" :src="image" v-for="(image, idx) in parsedImages(viewerImages) || []"
                                :key="idx" />

                        </div>
                        <div v-for="(car, index) in this.filteredStories?.carEnthusiast || []" :key="index"
                            :class="isModalOpen && activeCarIndex === index ? 'z-2' : 'z-0'"
                            v-memo="[car.id, car.story_name, car.images?.[0]]">
                            <div class="card-sorting-content px-3 px-md-3 px-lg-1 py-2 col-md-12 p-1"
                                @click="openModal(index)">
                                <div class="main-slider weekly-slider align-items-center">
                                    <div class="swiper-container myCarListingCard-swiper-container">

                                        <swiper :effect="'cards'" :grabCursor="true" :modules="modules"
                                            :initialSlide="1" :slidesPerView="1" :spaceBetween="10" :loop="true"
                                            :loopedSlides="car.images.length" class="mySwiper swiper-no-shadow"
                                            v-if="car.images && car.images.length">
                                            <swiper-slide class="swiper-no-shadow"
                                                v-for="(image, idx) in reorderedImages(car.images) || []" :key="idx">
                                                <div class="d-block">
                                                    <img loading="lazy" :src="image"
                                                        class="slider-img myCarListingCard-img" alt="car" />
                                                </div>
                                            </swiper-slide>
                                        </swiper>


                                        <span class="swiper-notification" aria-live="assertive"
                                            aria-atomic="true"></span>
                                    </div>
                                    <img loading="lazy" :src="iconford" class="d-none" alt="" />
                                </div>
                                <div class="card-content-car">
                                    <h4 class="text-white mb-1 " @click="openModal(index)">
                                        <!-- {{ car.make }}:{{ car.model }} -->
                                        {{ car.story_name }}
                                    </h4>
                                    <ul class="user-details-car myCarListingCard-user-details-car mb-1 mt-0">
                                        <li class="list-item-user mb-0 justify-content-start">
                                            <img loading="lazy" :src="instaIcon" class="instaIcon" />
                                            <a :href="'https://www.instagram.com/' + car.social_media"
                                                class="a-tag-name-user mt-2 mb-2" style="font-size: 14px"
                                                target="_blank" rel="noopener noreferrer">
                                                @{{ car.social_media }}
                                            </a>
                                        </li>
                                    </ul>
                                    <p class="text-white mt-0 mb-0  text-wrap " style="font-size: 14px"
                                        @click="openModal(index)">
                                        <span class="text-orange">What’s the story behind your car?</span>
                                        <br />
                                        <span class="tranc dd">{{ car.story }}</span>


                                    </p>
                                </div>
                            </div>

                            <!-- Modal -->
                            <div class="modal show d-block" tabindex="-1" role="dialog"
                                v-if="isModalOpen && activeCarIndex === index">
                                <div class="modal-dialog modal-dialog-centered" role="document">
                                    <div class="modal-content">
                                        <div class="modal-body text-center">
                                            <span class="close-icon" @click="modalClose">
                                                <i class="fas fa-times"></i>
                                            </span>

                                            <div class="mt-4 py-2">
                                                <div class="myCarListingCard-swiper-container">

                                                    <swiper :effect="'cards'" :grabCursor="true" :modules="modules"
                                                        :initialSlide="1" :loop="true" :loopedSlides="car.images.length"
                                                        :slidesPerView="1" :spaceBetween="10"
                                                        :pagination="{ clickable: true }" :navigation="{
                                                            nextEl: '.custom-next',
                                                            prevEl: '.custom-prev',
                                                        }" class="mySwiper swiper-no-shadow modalswipper"
                                                        v-if="car.images && car.images.length">
                                                        <swiper-slide class="swiper-no-shadow modalswippersh"
                                                            v-for="(image, idx) in reorderedImages(car.images) || []"
                                                            :key="idx">
                                                            <div class="d-block">
                                                                <img loading="lazy" :src="image"
                                                                    class="slider-img myCarListingCard-img modalswipperImage"
                                                                    alt="car" @click="openViewer(image, car.images)" />
                                                            </div>
                                                        </swiper-slide>
                                                    </swiper>


                                                    <span class="swiper-notification" aria-live="assertive"
                                                        aria-atomic="true"></span>
                                                </div>
                                                <div class="custom-swiper-navigation gap-8 justify-content-center"
                                                    :class="isOverlayTransparent ? 'd-flex' : 'd-flex'">
                                                    <button class="custom-prev btn">
                                                        <img loading="lazy" :src="prevIcon" alt="" />
                                                    </button>
                                                    <button class="custom-next btn">
                                                        <img loading="lazy" :src="nextIcon" alt="" />
                                                    </button>
                                                </div>
                                                <div class="d-flex justify-content-end" v-if="isOverlayTransparent">

                                                </div>
                                                <div class="overlay mt-5" :class="{ '': isOverlayTransparent }"
                                                    @click="toggleOverlayOpacity">
                                                    <div
                                                        class="mt-2 d-flex justify-content-between align-items-center mb-2">
                                                        <div class="d-flex align-items-center gap-2">
                                                            <img loading="lazy" :src="iconford" class="d-none" alt="" />
                                                            <h3 class="m-0 text-white fontsiz">
                                                                {{ car.story_name }}
                                                            </h3>
                                                        </div>
                                                    </div>

                                                    <div class="d-flex align-items-center text-white mt-2">
                                                        <img loading="lazy" :src="instaIcon" class="instaIcon" />
                                                        <a :href="'https://www.instagram.com/' + car.social_media"
                                                            class="a-tag-name-user mt-2 mb-2" style="font-size: 14px"
                                                            target="_blank" rel="noopener noreferrer">
                                                            @{{ car.social_media }}
                                                        </a>
                                                    </div>
                                                    <p class="text-orange" style="font-size: 14px; text-align: start">
                                                        What’s the story
                                                        behind your car?</p>
                                                    <p class="text-white" style="font-size: 14px; text-align: start">
                                                        {{ car.story }}
                                                    </p>
                                                    <p class="text-orange" style="font-size: 14px; text-align: start">
                                                        Any awesome
                                                        modifications or unique features you can share?</p>
                                                    <p class="text-white" style="font-size: 14px; text-align: start">
                                                        {{ car.modifications }}
                                                    </p>
                                                    <p class="text-orange" style="font-size: 14px; text-align: start">
                                                        Tell us the
                                                        wildest or most unforgettable moment you’ve had with your
                                                        car</p>
                                                    <p class="text-white" style="font-size: 14px; text-align: start">
                                                        {{ car.memorable }}
                                                    </p>
                                                    <p class="text-orange" style="font-size: 14px; text-align: start">
                                                        What advise would
                                                        you give to someone starting their journey as a car
                                                        enthusiast?</p>
                                                    <p class="text-white" style="font-size: 14px; text-align: start">
                                                        {{ car.advice }}
                                                    </p>




                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>

                    <!-- end template -->
                </div>
                <div v-if="isLoading" class="loading fs-1 text-white">Loading...</div>

            </div>



        </div>

    </section>
</template>

<script>
import API from "@/http-common"; // ✅ Import the API instance
import Image1 from "@/assets/images/4image.png";
import Image2 from "@/assets/images/d722fc518c6127ea183d184e5dc715e3.png";
import Image3 from "@/assets/images/20210412111611_Ford_Territory_front.png";
import Image4 from "@/assets/images/images1.png";
import Image5 from "@/assets/images/36346b90e9ed41209ec6b093b61c21ef.png";
import icon1 from "@/assets/images/IconAwesome-user-alt.png";
import icon2 from "@/assets/images/engine.png";
import icon3 from "@/assets/images/Iconmaterial-email.png";
import instaIcon from "@/assets/images/ins.png";

import { EffectCards } from "swiper/modules";

import img1 from "@/assets/images/Group12white.png";
import img2 from "@/assets/images/Path467white.png";
import img3 from "@/assets/images/Path465white.png";
import img4 from "@/assets/images/Group11white.png";
import img5 from "@/assets/images/Path473white.png";

import actimg1 from "@/assets/images/Group12.png";
import actimg2 from "@/assets/images/Path467.png";
import actimg3 from "@/assets/images/Path465.png";
import actimg4 from "@/assets/images/Group11.png";
import actimg5 from "@/assets/images/Path473.png";
import iconford from "@/assets/images/Imagefordlogo13.png";
import nextIcon from "@/assets/images/next.png";
import prevIcon from "@/assets/images/prev.png";

import { Swiper, SwiperSlide } from "swiper/vue";


import { Pagination, Navigation } from "swiper/modules";

import Viewer from "viewerjs";
import "viewerjs/dist/viewer.css"; // Import the Viewer.js CSS

import http from "@/http-common";
import LocomotiveScroll from 'locomotive-scroll';
export default {
    name: "FeaturedStories",
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
            pagination: {
                currentPage: 0,
                totalPages: 1,
                totalItems: 0,
                limit: 3            // Items per page
            },
            isLoading: false,
            isFetching: false,
            hasMore: true,
            showFooter: true,
            isModalOpenFe: false,
            showMore: {},
            instaIcon,
            currentImage: "", // Currently selected image for viewing
            viewerInstance: null, // Reference to the Viewer.js instance
            cities: [],
            featuredStories: [],
            prevIcon,
            nextIcon,
            isOverlayTransparent: false,
            iconford,
            Image1,
            Image2,
            Image3,
            isOpen: false,
            isOpenm: false,
            isOpeng: false,
            dataGy: [],
            selectedData: "",
            makes: [],
            make: "",
            smodel: "",
            makefilteredOptions: [],
            modelfilteredOptions: [],
            models: [],
            generation: "",
            generations: [],
            GenfilteredOptions: [],
            filteredGenerations: [],
            productionYear: "",
            productionYears: [],
            viewerImages: [],
            formData: {
                make: "",
                model: "",
                year: "",
                user_name: "",
                user_email: "",
                story: "",
                modifications: "",
                memorable: "",
                advice: "",
                story_name: "",
                social_media: "",
                url: "",
                storyName: "",
                adventureStory: "",
                storyHistory: "",
                city: "",
                country: "",

                storyImages: [],
            },
            // new
            selectedCountry: "",
            selectedCity: "",
            isModalOpen: false,
            activeCarIndex: null, // Track which car's modal is open
            activeTab: 0,
            tabs: [
                {
                    name: "Car Enthusiast",

                    actimg1: actimg1,
                    actimg2: actimg2,
                    actimg3: actimg3,
                    actimg4: actimg4,
                    actimg5: actimg5,
                    img1: img1,
                    img2: img2,
                    img3: img3,
                    img4: img4,
                    img5: img5,
                },
                {
                    name: "Car Garage",
                    actimg1: actimg1,
                    actimg2: actimg2,
                    actimg3: actimg3,
                    actimg4: actimg4,
                    actimg5: actimg5,
                    img1: img1,
                    img2: img2,
                    img3: img3,
                    img4: img4,
                    img5: img5,
                },
                {
                    name: "Car Modification/Tunning Shop",
                    actimg1: actimg1,
                    actimg2: actimg2,
                    actimg3: actimg3,
                    actimg4: actimg4,
                    actimg5: actimg5,
                    img1: img1,
                    img2: img2,
                    img3: img3,
                    img4: img4,
                    img5: img5,
                },
                {
                    name: "Car Club",
                    actimg1: actimg1,
                    actimg2: actimg2,
                    actimg3: actimg3,
                    actimg4: actimg4,
                    actimg5: actimg5,
                    img1: img1,
                    img2: img2,
                    img3: img3,
                    img4: img4,
                    img5: img5,
                },
                {
                    name: "Motorbike Enthusiast",
                    actimg1: actimg1,
                    actimg2: actimg2,
                    actimg3: actimg3,
                    actimg4: actimg4,
                    actimg5: actimg5,
                    img1: img1,
                    img2: img2,
                    img3: img3,
                    img4: img4,
                    img5: img5,
                },
                {
                    name: "Automotive Photographer",
                    actimg1: actimg1,
                    actimg2: actimg2,
                    actimg3: actimg3,
                    actimg4: actimg4,
                    actimg5: actimg5,
                    img1: img1,
                    img2: img2,
                    img3: img3,
                    img4: img4,
                    img5: img5,
                },
                // Add more tabs as needed
            ],

            currentPage: 1,
            pageSize: 5, // Number of items per page
            swiper: null,
            images: [Image1, Image2, Image3, Image4, Image5],
            cars: [
                {
                    title: "Koenigsegg agera one",
                    quantity: 1,
                    images: [Image1, Image2, Image3, Image4, Image5],
                    details: [
                        {
                            icon: icon1,
                            value: "Daniyal Doe",
                        },
                        {
                            icon: icon2,
                            value: "2,000,000",
                        },
                        {
                            icon: icon3,
                            value: "daniyaldoe@info.com",
                        },
                    ],
                },
                // Add more car data here
                {
                    title: "Koenigsegg agera 2",
                    quantity: 2,
                    images: [Image1, Image2, Image3, Image4, Image5],
                    details: [
                        {
                            icon: icon1,
                            value: "Daniyal Doe",
                        },
                        {
                            icon: icon2,
                            value: "2,000,000",
                        },
                        {
                            icon: icon3,
                            value: "daniyaldoe@info.com",
                        },
                    ],
                },
                {
                    title: "Koenigsegg agera 3",
                    quantity: 3,
                    images: [Image1, Image2, Image3, Image4, Image5],
                    details: [
                        {
                            icon: icon1,
                            value: "Daniyal Doe",
                        },
                        {
                            icon: icon2,
                            value: "2,000,000",
                        },
                        {
                            icon: icon3,
                            value: "daniyaldoe@info.com",
                        },
                    ],
                },
                {
                    title: "Koenigsegg agera 4",
                    quantity: 4,
                    images: [Image1, Image2, Image3, Image4, Image5],
                    details: [
                        {
                            icon: icon1,
                            value: "Daniyal Doe",
                        },
                        {
                            icon: icon2,
                            value: "2,000,000",
                        },
                        {
                            icon: icon3,
                            value: "daniyaldoe@info.com",
                        },
                    ],
                },
                {
                    title: "Koenigsegg agera 5",
                    quantity: 5,
                    images: [Image1, Image2, Image3, Image4, Image5],
                    details: [
                        {
                            icon: icon1,
                            value: "Daniyal Doe",
                        },
                        {
                            icon: icon2,
                            value: "2,000,000",
                        },
                        {
                            icon: icon3,
                            value: "daniyaldoe@info.com",
                        },
                    ],
                },
                {
                    title: "Koenigsegg agera 6",
                    quantity: 6,
                    images: [Image1, Image2, Image3, Image4, Image5],
                    details: [
                        {
                            icon: icon1,
                            value: "Daniyal Doe",
                        },
                        {
                            icon: icon2,
                            value: "2,000,000",
                        },
                        {
                            icon: icon3,
                            value: "daniyaldoe@info.com",
                        },
                    ],
                },
                {
                    title: "Koenigsegg agera 7",
                    quantity: 7,
                    images: [Image1, Image2, Image3, Image4, Image5],
                    details: [
                        {
                            icon: icon1,
                            value: "Daniyal Doe",
                        },
                        {
                            icon: icon2,
                            value: "2,000,000",
                        },
                        {
                            icon: icon3,
                            value: "daniyaldoe@info.com",
                        },
                    ],
                },
                {
                    title: "Koenigsegg agera 8",
                    quantity: 8,
                    images: [Image1, Image2, Image3, Image4, Image5],
                    details: [
                        {
                            icon: icon1,
                            value: "Daniyal Doe",
                        },
                        {
                            icon: icon2,
                            value: "2,000,000",
                        },
                        {
                            icon: icon3,
                            value: "daniyaldoe@info.com",
                        },
                    ],
                },
                {
                    title: "Koenigsegg agera 9",
                    quantity: 9,
                    images: [Image1, Image2, Image3, Image4, Image5],
                    details: [
                        {
                            icon: icon1,
                            value: "Daniyal Doe",
                        },
                        {
                            icon: icon2,
                            value: "2,000,000",
                        },
                        {
                            icon: icon3,
                            value: "daniyaldoe@info.com",
                        },
                    ],
                },
                {
                    title: "Koenigsegg agera one",
                    quantity: 10,
                    images: [Image1, Image2, Image3, Image4, Image5],
                    details: [
                        {
                            icon: icon1,
                            value: "Daniyal Doe",
                        },
                        {
                            icon: icon2,
                            value: "2,000,000",
                        },
                        {
                            icon: icon3,
                            value: "daniyaldoe@info.com",
                        },
                    ],
                },
                {
                    title: "Koenigsegg agera one",
                    quantity: 11,
                    images: [Image1, Image2, Image3, Image4, Image5],
                    details: [
                        {
                            icon: icon1,
                            value: "Daniyal Doe",
                        },
                        {
                            icon: icon2,
                            value: "2,000,000",
                        },
                        {
                            icon: icon3,
                            value: "daniyaldoe@info.com",
                        },
                    ],
                },
            ],
            search: "",
            filteredStories: {
                CarEnthusiast: [],
                CarGarage: [],
                CarModificationTunningShop: [],
                CarClub: [],
                MotorbikeEnthusiast: [],
                AutomotivePhotographer: [],
            },
            originalCars: {
                CarEnthusiast: [],
                CarGarage: [],
                CarModificationTunningShop: [],
                CarClub: [],
                MotorbikeEnthusiast: [],
                AutomotivePhotographer: [],
            },
        };

    },
    computed: {
        // totalPages() {
        //     return Math.ceil(this.cars.length / this.pageSize);
        // },
        paginatedCars() {
            const startIndex = (this.currentPage - 1) * this.pageSize;
            const endIndex = startIndex + this.pageSize;
            return this.cars.slice(startIndex, endIndex);
        },
    },
    mounted() {
        this.scroll = new LocomotiveScroll({
            el: document.querySelector("[data-scroll-container]"),
            smooth: true
        });



        this.fetchStories();
        window.addEventListener('scroll', this.handleScroll);
        // this.fetchFeaturedStories()

    },
    beforeUnmount() {
        this.scroll.destroy(); // Clean up when component is destroyed
    },
    methods: {
        reorderedImages(images) {
            let parsed = this.parsedImages(images) || [];
            if (parsed.length > 1) {
                return [parsed[parsed.length - 1], parsed[0], parsed[1], ...parsed.slice(2, parsed.length - 1)];
            }
            return parsed;
        },

        getImageUrl(image) {
            return `${http.defaults.baseURL.replace("/api", "")}/stories/${image}`;
        },

        openViewer(image, carImages) {
            this.viewerImages = carImages
            console.log("in open viewer", image);
            this.isOverlayTransparent = true;
            // this.currentImage = this.getImageUrl(image); // Set current image URL
            this.currentImage = image; // Set current image URL

            const viewerElement = this.$refs.viewerContainer; // Reference the container
            if (viewerElement) {
                // Destroy any previous instance if it exists to prevent duplication
                if (this.viewerInstance) {
                    this.viewerInstance.destroy();
                }

                // Create a new array of images, placing the clicked image first
                const images = this.parsedImages(carImages);
                const currentImageUrl = this.getImageUrl(image);

                // Create a new array with the clicked image first
                const imageOrder = [
                    currentImageUrl,
                    ...images.map(img => this.getImageUrl(img)).filter(imgUrl => imgUrl !== currentImageUrl),
                ];

                // Use Vue's nextTick to ensure DOM is updated before initializing Viewer.js
                this.$nextTick(() => {
                    this.viewerInstance = new Viewer(viewerElement, {
                        inline: false, // Set to false for popup mode
                        zoomable: true, // Enable zooming functionality
                        movable: true, // Enable panning (dragging the image)
                        minScale: 1, // Prevent zooming out below 100%
                        maxScale: 3, // Limit zoom to 3x
                        viewed() {
                            console.log("Image viewed");
                        },
                        // toolbar: true, // Show the default toolbar
                        toolbar: {
                            prev: true,
                            play: false,
                            next: true,
                            zoomIn: false,
                            zoomOut: false,
                            rotateLeft: false,
                            rotateRight: false,
                            flipHorizontal: false,
                            flipVertical: false,
                            reset: false,
                            close: false, // Add close button
                        },
                        zoomOnWheel: true, // Allow zooming with mouse wheel
                        fullscreen: false, // Disable fullscreen mode
                        title: false, // Disable image title display
                        navbar: false, // Disable the navigation bar
                        tooltip: false, // Disable tooltips for image actions
                    });

                    // Now manually add images to the viewer by modifying its data
                    this.viewerInstance._images = imageOrder.map(url => {
                        return {
                            src: url,
                            thumb: url // You can change this to a thumbnail if you have one
                        };
                    });

                    // Show the viewer for the current image
                    this.viewerInstance.show();
                });
            }
        }

        ,
        getImage(tab, index, imgType) {
            if (this.activeTab === index) {
                // If the tab is active, return the active image
                return tab[`act${imgType}`];
            } else {
                // If the tab is not active, return the default image
                return tab[imgType];
            }
        },

        parsedImages(images) {
            try {
                // return typeof images === "string" ? JSON.parse(images) : images;
                return typeof images === "string" ? JSON.parse(images) : (images || []);
            } catch (e) {
                console.error("Error parsing images", e);
                return [];
            }
        },



        async fetchStories() {
            console.log("in ft")
            // Don't fetch if already loading or no more pages
            if (this.isFetching || !this.hasMore) return;

            this.isFetching = true;
            this.isLoading = true;

            try {
                const nextPage = this.pagination.currentPage + 1;
                const response = await API.get(`/stories/carEnthusiast?page=${nextPage}&limit=${this.pagination.limit}`);

                const { data, totalItems, totalPages, currentPage } = response.data;

                // Update stories array - APPEND instead of REPLACE
                if (!this.filteredStories['carEnthusiast']) {
                    this.filteredStories['carEnthusiast'] = [];
                }
                this.filteredStories['carEnthusiast'] = [...this.filteredStories['carEnthusiast'], ...data];

                // Same for originalCars
                if (!this.originalCars['carEnthusiast']) {
                    this.originalCars['carEnthusiast'] = [];
                }
                this.originalCars['carEnthusiast'] = [...this.originalCars['carEnthusiast'], ...data];

                console.log("ntst", this.filteredStories['carEnthusiast'])

                // Update pagination info
                this.pagination = {
                    currentPage,
                    totalPages,
                    totalItems,
                    limit: this.pagination.limit
                };

                // Check if there are more pages
                this.hasMore = currentPage < totalPages;

            } catch (error) {
                console.error("Error fetching stories:", error);
            } finally {
                this.isFetching = false;
                this.isLoading = false;
            }
        },
        // Handle scroll event
        handleScroll() {
            // Check if we're near the bottom (within 100px)
            const scrollPosition = window.innerHeight + window.scrollY;
            const bottomThreshold = document.body.offsetHeight - 100;

            if (scrollPosition >= bottomThreshold && !this.isLoading) {
                this.fetchStories();
            }
        }
        ,
        openModal(index) {
            console.log("Modal opened for car index:", index);
            this.activeCarIndex = index; // Set the active index to the clicked car
            this.showFooter = false;

            this.activeCarIndex = index;
            this.isModalOpen = true;
        },
        openModalFe() {
            this.isModalOpenFe = true;
            this.showFooter = false;
        },
        modalCloseFe() {
            this.isModalOpenFe = false
            this.showFooter = true;
        },
        modalClose() {
            console.log("outmodal");
            this.isModalOpen = false;
            this.activeCarIndex = null; // Reset the active car index
            this.showFooter = true;
        },

        goToPage(pageNumber) {
            if (pageNumber >= 1 && pageNumber <= this.totalPages) {
                this.currentPage = pageNumber;
            }
        },
        goToNextPage() {
            if (this.currentPage < this.totalPages) {
                this.currentPage++;
            }
        },
    },
};
</script>

<style scoped>
.csicon {
    background: none !important;
    border: none !important;

}

.main-slider {
    align-items: start;
}

.carCard {
    background: #1a202c !important;
}

.swiper {
    width: 270px;
    height: fit-content !important;
}

.swiper-slide img {
    width: 200px !important;
    height: 110px !important;

    /* -o-object-fit: contain !important;
    object-fit: cover !important; */
    max-width: 260px !important;
    border-radius: 10px !important;
    background-color: transparent !important;
    /* border: 1px solid #010101 !important; */
}


.z-0 {
    z-index: 0 !important;
}

.modal {
    z-index: 1050 !important;
}

.modal-content {
    /* height: 500px; */
    height: 525px;
    overflow-y: auto;
    overflow-x: hidden
}

@media (min-width: 576px) {
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
        background-color: #031726;
        background-clip: padding-box;
        border: 1px solid #1a202c;
        border-radius: 5px;
        outline: 0;
        /* margin-top: 4rem !important; */

    }

    .modal-dialog {
        /* padding-top: 5rem !important;
         */
        padding-top: 3.2rem !important;
    }

    .form-select {
        display: block;
        width: 100%;
        max-width: 920px;
        height: 50px;
        padding: 0.375rem 2.25rem 0.375rem 1.75rem;
        -moz-padding-start: calc(0.75rem - 3px);
        font-size: 20px;
        font-weight: 400;
        line-height: 1.5;
        color: #c5c5c5;
        background-color: #000b1c;
        /* background-image: url("../images/Icon\ awesome-chevron-down.png"); */
        background-image: url("../assets/images/Icon\ awesome-chevron-down.png");
        background-repeat: no-repeat;
        background-position: right 1.75rem center;
        background-size: 16px 12px;
        border: 1px solid #1a202c;
        border-radius: 5px;
        transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        font-family: "Gruppo", sans-serif;
        cursor: pointer;
    }

    .modal-dialog {
        width: 100%;
        max-width: 1000px;
        margin: 1.75rem auto;
        position: relative;
    }

    .form-select:focus {
        border-color: #f95f19;
        outline: 0;
        box-shadow: none;
    }
}

.swiper-container {
    width: 100% !important;
    max-width: 247px !important;
    margin: 0 auto !important;
    overflow: hidden !important;
}

.card-sorting-content px-1 py-2 {
    z-index: 0;
}

.card-sorting-content {
    cursor: pointer;
}

.signin-btnli {
    cursor: pointer;
}

form-select {
    display: block;
    width: 100%;
    max-width: 920px;
    height: 40px;
    padding: 0.375rem 2.25rem 0.375rem 1.75rem;
    -moz-padding-start: calc(0.75rem - 3px);

    line-height: 1.5;
    color: #c5c5c5;
    background-color: #000b1c;
    /* background-image: url("../images/Icon\ awesome-chevron-down.png"); */
    background-image: url("../assets/images/Icon\ awesome-chevron-down.png");
    background-repeat: no-repeat;
    background-position: right 1.75rem center;
    background-size: 16px 12px;
    border: 1px solid #1a202c;
    border-radius: 5px;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    font-family: "Gruppo", sans-serif;
    cursor: pointer;
}

.modal-dialog {
    width: 100%;
    max-width: 1000px;
    margin: 1.75rem auto;
    position: relative;
}

.form-select:focus {
    border-color: #f95f19;
    outline: 0;
    box-shadow: none;
}

.alertbg {
    background: #ff7a00;
    color: #fff;
}

.getAll {
    background: #5d3327 !important;
    color: #fff;
}

.genCard .singleGen {
    cursor: pointer;
    marker: none;
    width: 100%;
}

.genCard .singleGen:hover {
    background: #f95f19;
    color: #fff;
}

.borderBr {
    border: 1px solid #f95f19;
    width: 100% !important;
    border-radius: 10px;
}

/* new */

.gap-8 {
    gap: 16rem !important;
}

.customSelect {
    width: 100%;
    padding: 1px;
}

.customSelect input {
    width: 100% !important;
    max-width: 100% !important;
    border: 0px transparent !important;
}

.selected-option {
    width: 100%;
    padding: 5px;
    border: 1px solid #ccc;
    border-radius: 4px;
}

.options-list {
    position: absolute;
    /* top: 100%;
  left: 0; */
    width: 100%;
    background-color: #031726;

    border-top: none;
    border-radius: 0 0 4px 4px;
    list-style-type: none;
    padding: 0;
    margin: 0;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    /* min-height: fit-content; */
    max-height: 300px !important;
    overflow-y: scroll;
    color: #fff;
    transition: height 0.5s ease-in-out;
    z-index: 9999;
}

.options-list li {
    padding: 8px;
    cursor: pointer;
    display: flex;
    justify-content: start;
}

.options-list li:hover {
    background-color: #083f68;
}

.z1o {
    z-index: 0;
}

.z1o2 {
    z-index: 0;
}

@media (max-width: 768px) {
    .z1o2 {
        z-index: 0;
    }

    .options-list {
        position: static;
    }
}

.truncate {
    width: 40%;
    white-space: nowrap;
    /* Prevent the text from wrapping to a new line */
    overflow: hidden;
    /* Hide the overflowed text */
    text-overflow: ellipsis;
    /* Display an ellipsis (...) at the end */
}

.truncate2 {
    width: 30%;
    white-space: nowrap;
    /* Prevent the text from wrapping to a new line */
    overflow: hidden;
    /* Hide the overflowed text */
    text-overflow: ellipsis;
    /* Display an ellipsis (...) at the end */
}

.swiper-slide {
    height: fit-content !important;
}

.swiper-wrapper {
    height: fit-content !important;
}

.modalswipper {
    width: 100% !important;
    height: 250px !important;
    overflow: visible !important;
}

.modalswipper .swiper-slide img {
    width: 70% !important;
    max-width: 70% !important;
    /* height: 250px !important; */
    height: 330px !important;

    border-radius: 12px !important;
}

.overlay {
    transition: opacity 0.3s ease-in-out;
    /* height: 150px;
    overflow-y: auto; */
    margin-top: 7rem !important;
}

.opacity-05 {
    opacity: 0.2 !important;
}

.swiper-pagination-bullet {
    background: #ffff !important;
    opacity: 1 !important;
}

.swiper-pagination-bullet.swiper-pagination-bullet-active {
    background: #f95f19 !important;
}

.swiper-horizontal>.swiper-pagination-bullets,
.swiper-pagination-bullets.swiper-pagination-horizontal,
.swiper-pagination-custom,
.swiper-pagination-fraction {
    top: 103% !important;
}

.btn-active .signin-btnli {
    background: rgba(249, 95, 25, 0.3) !important;
}


.signin-btnli {
    background: rgba(77, 85, 97, 0.7) !important;
}

.btn-filter {
    background: rgba(249, 95, 25, 0.3) !important;
}

.cp {
    cursor: pointer !important;
}

@media (max-width: 786px) {
    .cp {
        width: 25% !important;
    }

    .truncate {
        width: 50% !important;
    }

    .filter-image-div {
        display: none;
    }

    .list-item-user {
        width: 100% !important;
    }
}

.fontsiz {
    font-size: 26px !important;
}

.instaIcon {
    width: 60px;
}

.tranc {
    /* width: 300px !important; */
    display: -webkit-box;
    /* Use WebKit for browser compatibility */
    -webkit-box-orient: vertical;
    /* Aligns the box in vertical orientation */
    -webkit-line-clampvm: 2;
    /* Limits the number of lines to 2 */
    overflow: hidden;
    /* Hides the overflow text */
    text-overflow: ellipsis;
    /* Adds ellipsis (...) at the end */
    max-height: 1.8em;
    /* Ensures only two lines are shown (line-height * 2) */
    line-height: 1.5em;
    /* Set the desired line height */
}

@media(max-width:350px) {
    .tranc {
        width: 250px !important
    }
}

.viewer-toolbar>ul>li {
    display: flex;
    justify-content: center;
    align-items: center;
    background: #f95f19 !important;
    height: 32px !important;
    width: 32px !important;

}

.text-orange {
    color: #f95f19 !important;
}

.offcanvas {
    background: #031726;
    color: #fff
}

@media(max-width:992px) {
    .card-sorting-content {
        flex-wrap: wrap !important;
        justify-content: center
    }

    .card-content-car {
        width: 100%
    }

}

.card-content-car {
    width: 100%;
    overflow: hidden
}

.card-content-car h4 {
    font-size: 26px
}

.card-content-car p {
    font-size: 14px
}

.btn-filter {
    border: none !important
}

.custom-swiper-navigation {
    position: relative;
    top: 6rem
}

.stories-container {
    will-change: transform;
    backface-visibility: hidden;
    perspective: 1000px;
}
</style>
