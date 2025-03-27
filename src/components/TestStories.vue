<template>
    <section class="community-section height-control-scroll" data-scroll-container>
        <div class="container">
            <div class="row" data-scroll-section>
                <div class="col-md-9 px-4">
                    <div class="row stories-container">
                        <!-- Viewer container (hidden until needed) -->
                        <div class="imageBig" ref="viewerContainer" style="display: none">
                            <img :src="currentImage" alt="Current Image" />
                            <img v-for="(image, idx) in parsedImages(viewerImages)" :key="`viewer-img-${idx}`"
                                :src="image" />
                        </div>

                        <!-- Virtualized list of cars -->
                        <div v-for="(car, index) in filteredStories?.carEnthusiast || []" :key="car.id"
                            :class="{ 'z-2': isModalOpen && activeCarIndex === index, 'persistent-card': true }"
                            v-memo="[car.id, car.story_name, car.images?.[0]]">
                            <div class="card-sorting-content px-3 px-md-3 px-lg-1 py-2 col-md-12 p-1"
                                @click="openModal(index)">
                                <!-- Swiper for car images -->
                                <div class="main-slider weekly-slider align-items-center">
                                    <div class="swiper-container myCarListingCard-swiper-container">
                                        <swiper v-if="car.images?.length" :effect="'cards'" :grabCursor="true"
                                            :modules="modules" :initialSlide="1" :slidesPerView="1" :spaceBetween="10"
                                            :loop="true" :loopedSlides="car.images.length"
                                            class="mySwiper swiper-no-shadow">
                                            <swiper-slide v-for="(image, idx) in reorderedImages(car.images)"
                                                :key="`car-${car.id}-img-${idx}`" class="swiper-no-shadow">
                                                <div class="d-block">
                                                    <img :src="image" class="slider-img myCarListingCard-img" alt="car"
                                                        loading="lazy" decoding="async" />
                                                </div>
                                            </swiper-slide>
                                        </swiper>
                                    </div>
                                </div>

                                <!-- Car content -->
                                <div class="card-content-car persistent-content">
                                    <h4 class="text-white mb-1">{{ car.story_name }}</h4>
                                    <ul class="user-details-car myCarListingCard-user-details-car mb-1 mt-0">
                                        <li class="list-item-user mb-0 justify-content-start">
                                            <img :src="instaIcon" class="instaIcon" loading="lazy" />
                                            <a :href="'https://www.instagram.com/' + car.social_media"
                                                class="a-tag-name-user mt-2 mb-2" target="_blank"
                                                rel="noopener noreferrer">
                                                @{{ car.social_media }}
                                            </a>
                                        </li>
                                    </ul>
                                    <p class="text-white mt-0 mb-0 text-wrap">
                                        <span class="text-orange">What's the story behind your car?</span>
                                        <br />
                                        <span class="tranc dd">{{ car.story }}</span>
                                    </p>
                                </div>
                            </div>

                            <!-- Modal -->
                            <div v-if="isModalOpen && activeCarIndex === index" class="modal show d-block" tabindex="-1"
                                role="dialog">
                                <!-- Modal content... -->
                            </div>
                        </div>

                        <!-- Loading indicator and scroll sentinel -->
                        <div v-if="isLoading" class="loading fs-1 text-white">Loading...</div>
                        <div ref="scrollSentinel" class="scroll-sentinel"></div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { throttle } from 'lodash';
import { EffectCards, Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/vue";


import LocomotiveScroll from 'locomotive-scroll';
import API from "@/http-common";

export default {
    name: "FeaturedStories",
    components: { Swiper, SwiperSlide },
    setup() {
        return { modules: [EffectCards, Pagination, Navigation] };
    },
    data() {
        return {
            pagination: { currentPage: 0, totalPages: 1, totalItems: 0, limit: 3 },
            isLoading: false,
            isFetching: false,
            hasMore: true,
            isModalOpen: false,
            activeCarIndex: null,
            currentImage: "",
            viewerInstance: null,
            viewerImages: [],
            filteredStories: { carEnthusiast: [] },
            originalCars: { carEnthusiast: [] },
            scroll: null,
            scrollObserver: null
        };
    },
    mounted() {
        this.initScroll();
        this.fetchStories();
        this.setupIntersectionObserver();
    },
    beforeUnmount() {
        this.cleanup();
    },
    methods: {
        initScroll() {
            this.scroll = new LocomotiveScroll({
                el: document.querySelector("[data-scroll-container]"),
                smooth: true,
                lerp: 0.1,
                smartphone: { smooth: false },
                tablet: { smooth: false }
            });
        },

        setupIntersectionObserver() {
            if (this.scrollObserver) this.scrollObserver.disconnect();

            this.scrollObserver = new IntersectionObserver(
                throttle((entries) => {
                    if (entries[0].isIntersecting && !this.isLoading && this.hasMore) {
                        this.fetchStories();
                    }
                }, 200),
                { threshold: 0.1 }
            );

            if (this.$refs.scrollSentinel) {
                this.scrollObserver.observe(this.$refs.scrollSentinel);
            }
        },

        async fetchStories() {
            if (this.isFetching || !this.hasMore) return;

            this.isFetching = true;
            this.isLoading = true;

            try {
                const nextPage = this.pagination.currentPage + 1;
                const response = await API.get(`/stories/carEnthusiast?page=${nextPage}&limit=${this.pagination.limit}`);
                const { data, totalItems, totalPages, currentPage } = response.data;
                console.log("responsdata", response.data)
                // Non-reactive update for better performance
                const newStories = Object.freeze(data.map(item => ({
                    ...item,
                    images: Object.freeze(item.images || [])
                })));

                this.filteredStories.carEnthusiast = [
                    ...this.filteredStories.carEnthusiast,
                    ...newStories
                ];

                this.pagination = { currentPage, totalPages, totalItems, limit: this.pagination.limit };
                this.hasMore = currentPage < totalPages;

                this.$nextTick(() => {
                    this.setupIntersectionObserver();
                    this.scroll?.update();
                });
            } catch (error) {
                console.error("Error fetching stories:", error);
            } finally {
                this.isFetching = false;
                this.isLoading = false;
            }
        },

        reorderedImages(images) {
            const parsed = this.parsedImages(images) || [];
            return parsed.length > 1
                ? [parsed[parsed.length - 1], parsed[0], ...parsed.slice(1, -1)]
                : parsed;
        },

        parsedImages(images) {
            try {
                return typeof images === "string" ? JSON.parse(images) : (images || []);
            } catch (e) {
                console.error("Error parsing images", e);
                return [];
            }
        },

        openModal(index) {
            this.activeCarIndex = index;
            this.isModalOpen = true;
        },

        modalClose() {
            this.isModalOpen = false;
            this.activeCarIndex = null;
        },

        cleanup() {
            if (this.scrollObserver) this.scrollObserver.disconnect();
            if (this.viewerInstance) this.viewerInstance.destroy();
            if (this.scroll) this.scroll.destroy();
        }
    }
};
</script>

<style scoped>
/* Base styles */
.community-section {
    contain: strict;
    overflow-anchor: none;
}

.stories-container {
    content-visibility: auto;
    contain-intrinsic-size: 1000px;
}

/* Persistent elements */
.persistent-card,
.persistent-content {
    transform: translateZ(0);
    will-change: transform;
    contain: content;
    backface-visibility: hidden;
}

/* Force GPU layers */
.persistent-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    pointer-events: none;
    animation: forceLayer 1s linear infinite;
}

@keyframes forceLayer {
    to {
        opacity: 0.999;
    }
}

/* Images */
.slider-img {
    content-visibility: auto;
    contain-intrinsic-size: 200px 150px;
    transform: translateZ(0);
}

/* Scroll sentinel */
.scroll-sentinel {
    height: 1px;
    width: 100%;
    pointer-events: none;
}

/* Modal styles... */
</style>