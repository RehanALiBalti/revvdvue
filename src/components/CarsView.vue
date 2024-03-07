<template>

    <section class="section-car-listing position-relative">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="heading-car">
                        <h1 class="banner-title">Cars Shop</h1>
                    </div>
                    <div class="btns-community">
                        <div class="btn-div-create-forum position-relative">
                            <span class="border-bottom-btn border-top-btn position-absolute">
                                <img src="@/assets/images/Group12white.png" class="img-border position-absolute"
                                    alt="" />
                            </span>

                            <span class="border-bottom-btn border-top-btn border-right-radius position-absolute">
                                <img src="@/assets/images/Path467white.png" class="img-border position-absolute"
                                    alt="" />
                            </span>

                            <span
                                class="border-bottom-btn border-top-btn border-right-radius border-right-bottom-radius position-absolute">
                                <img src="@/assets/images/Path465white.png" class="img-border position-absolute"
                                    alt="" />
                            </span>
                            <router-link to="/CreateCommunity" class="signin-btnli signup-btnli">
                                Create Forum
                            </router-link>
                            <span class="border-bottom-btn border-left-btn position-absolute">
                                <img src="@/assets/images/Group11white.png" class="img-border position-absolute"
                                    alt="" />
                            </span>
                            <span class="border-bottom-btn position-absolute">
                                <img src="@/assets/images/Path473white.png" class="img-border position-absolute"
                                    alt="" />
                            </span>
                        </div>
                        <div class="btn-div-create-forum position-relative">
                            <span class="border-bottom-btn border-top-btn position-absolute">
                                <img src="@/assets/images/Group12.png" class="img-border position-absolute" alt="" />
                            </span>

                            <span class="border-bottom-btn border-top-btn border-right-radius position-absolute">
                                <img src="@/assets/images/Path467.png" class="img-border position-absolute" alt="" />
                            </span>

                            <span
                                class="border-bottom-btn border-top-btn border-right-radius border-right-bottom-radius position-absolute">
                                <img src="@/assets/images/Path465.png" class="img-border position-absolute" alt="" />
                            </span>
                            <a href="" class="signin-btnli"> Create Club </a>
                            <span class="border-bottom-btn border-left-btn position-absolute">
                                <img src="@/assets/images/Group11.png" class="img-border position-absolute" alt="" />
                            </span>
                            <span class="border-bottom-btn position-absolute">
                                <img src="/assets/images/Path473.png" class="img-border position-absolute" alt="" />
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="section-car-listing-breadcrumb mb-5">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <nav aria-label="breadcrumb" class="nav-breadcrumb">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item">
                                <router-link class="breadcrumb-item-a-tag" to="/home">Home</router-link>
                            </li>
                            <li class="breadcrumb-item">
                                <router-link class="breadcrumb-item-a-tag" to="/ourcommunity">Community</router-link>
                            </li>
                        </ol>
                    </nav>
                </div>
            </div>
        </div>
    </section>

    <section class="community-section my-5 pt-3">
        <div class="container">


            <div class="row g-4 ">


                <div class="col-md-8 px-4 m-auto">
                    <div class="row">
                        <!-- template -->
                        <div class="card-sorting-content col-md-12" v-for="(car, index) in paginatedCars" :key="index">
                            <div class="main-slider weekly-slider">
                                <div class="swiper-container myCarListingCard-swiper-container">
                                    <div class="swiper-wrapper" id="swiper-wrapper-1cbc2f455a75ac23" aria-live="polite">
                                        <div class="swiper-container myCarListingCard-swiper-container">
                                            <div class="swiper-wrapper">
                                                <div class="swiper-slide" v-for="(image, idx) in car.images" :key="idx">
                                                    <router-link class="d-block" :to="`/carListing${index + 1}`">
                                                        <img :src="image" class="slider-img myCarListingCard-img"
                                                            alt="car" />
                                                    </router-link>
                                                </div>


                                                <!-- Add more slides as needed -->
                                            </div>

                                        </div>
                                        <!-- Add more slides as needed -->
                                    </div>
                                    <span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
                                </div>
                                <div class="card-content-car">
                                    <div class="card-title-div flex">
                                        <h2 class="card-title-h2">
                                            {{ car.title }}: <span> {{ car.quantity }} </span>
                                        </h2>
                                    </div>
                                    <ul class="user-details-car myCarListingCard-user-details-car">
                                        <li v-for="(detail, idx) in car.details" :key="idx" class="list-item-user">
                                            <div class="icon-user">
                                                <img :src="detail.icon" class="icon-user-img" alt="icon" />
                                            </div>
                                            <router-link class="a-tag-name-user" to="javascript:void(0);">
                                                {{ detail.value }}
                                            </router-link>
                                        </li>
                                    </ul>
                                    <div class="view-more-cars">
                                        <p class="card-text weekly-story-para-card">
                                            <router-link to="/cardetail" class="view-more-a-tag" href="">View
                                                more</router-link>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- end template -->

                    </div>



                    <nav class="float-end my-4 community-pagination" aria-label="Page navigation">
                        <ul class="pagination">
                            <li class="page-item" :class="{ disabled: currentPage === 1 }">
                                <a class="page-link" href="#" aria-label="Previous"
                                    @click.prevent="goToPage(currentPage - 1)">
                                    <span aria-hidden="true"><i class="fa-solid fa-chevron-left"></i></span>
                                </a>
                            </li>
                            <li class="page-item" v-for="pageNumber in totalPages" :key="pageNumber">
                                <a class="page-link" href="#" @click.prevent="goToPage(pageNumber)"
                                    :class="{ 'active': pageNumber === currentPage }">{{ pageNumber }}</a>
                            </li>
                            <li class="page-item" :class="{ disabled: currentPage === totalPages }">
                                <a class="page-link" href="#" aria-label="Next"
                                    @click.prevent="goToPage(currentPage + 1)">
                                    <span aria-hidden="true"><i class="fa-solid fa-chevron-right"></i></span>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    </section>


</template>

<script>

import Image1 from "@/assets/images/4image.png";
import Image2 from "@/assets/images/d722fc518c6127ea183d184e5dc715e3.png";
import Image3 from "@/assets/images/20210412111611_Ford_Territory_front.png";
import Image4 from "@/assets/images/images1.png";
import Image5 from "@/assets/images/36346b90e9ed41209ec6b093b61c21ef.png";
import icon1 from "@/assets/images/icons/licon.png";
import icon2 from "@/assets/images/icons/micon.png";

import 'swiper/css/effect-cards';
import { EffectCards } from 'swiper/modules';
//Import swiper js
import Swiper from "swiper";
//Import Swiper styles
import "swiper/swiper-bundle.css";

//Import Swiper modules
import { Pagination, Navigation } from 'swiper';
// Install Swiper modules
Swiper.use([Pagination, Navigation])

export default {
    name: "MarketPlace",

    setup() {
        return {
            modules: [EffectCards],
        };
    },
    data() {
        return {
            currentPage: 1,
            pageSize: 5, // Number of items per page
            swiper: null,
            cars: [
                {
                    title: "Koenigsegg agera one",
                    quantity: 1,
                    images: [Image1, Image2, Image3, Image4, Image5],
                    details: [
                        {
                            icon: icon1,
                            value: "San Francisco, California USA",
                        },
                        {
                            icon: icon2,
                            value: "+98 765 432 10",
                        },

                    ],
                },
                // Add more car data here
                {
                    title: "Koenigsegg agera one",
                    quantity: 2,
                    images: [Image1, Image2, Image3, Image4, Image5],
                    details: [
                        {
                            icon: icon1,
                            value: "San Francisco, California USA",
                        },
                        {
                            icon: icon2,
                            value: "+98 765 432 10",
                        },

                    ],
                },
                {
                    title: "Koenigsegg agera one",
                    quantity: 3,
                    images: [Image1, Image2, Image3, Image4, Image5],
                    details: [
                        {
                            icon: icon1,
                            value: "San Francisco, California USA",
                        },
                        {
                            icon: icon2,
                            value: "+98 765 432 10",
                        },

                    ],
                },
                {
                    title: "Koenigsegg agera one",
                    quantity: 4,
                    images: [Image1, Image2, Image3, Image4, Image5],
                    details: [
                        {
                            icon: icon1,
                            value: "San Francisco, California USA",
                        },
                        {
                            icon: icon2,
                            value: "+98 765 432 10",
                        },

                    ],
                },
                {
                    title: "Koenigsegg agera one",
                    quantity: 5,
                    images: [Image1, Image2, Image3, Image4, Image5],
                    details: [
                        {
                            icon: icon1,
                            value: "San Francisco, California USA",
                        },
                        {
                            icon: icon2,
                            value: "+98 765 432 10",
                        },

                    ],
                },
                {
                    title: "Koenigsegg agera one",
                    quantity: 6,
                    images: [Image1, Image2, Image3, Image4, Image5],
                    details: [
                        {
                            icon: icon1,
                            value: "San Francisco, California USA",
                        },
                        {
                            icon: icon2,
                            value: "+98 765 432 10",
                        },

                    ],
                },
                {
                    title: "Koenigsegg agera one",
                    quantity: 7,
                    images: [Image1, Image2, Image3, Image4, Image5],
                    details: [
                        {
                            icon: icon1,
                            value: "San Francisco, California USA",
                        },
                        {
                            icon: icon2,
                            value: "+98 765 432 10",
                        },

                    ],
                },
                {
                    title: "Koenigsegg agera one",
                    quantity: 8,
                    images: [Image1, Image2, Image3, Image4, Image5],
                    details: [
                        {
                            icon: icon1,
                            value: "San Francisco, California USA",
                        },
                        {
                            icon: icon2,
                            value: "+98 765 432 10",
                        },

                    ],
                },
                {
                    title: "Koenigsegg agera one",
                    quantity: 9,
                    images: [Image1, Image2, Image3, Image4, Image5],
                    details: [
                        {
                            icon: icon1,
                            value: "San Francisco, California USA",
                        },
                        {
                            icon: icon2,
                            value: "+98 765 432 10",
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
                            value: "San Francisco, California USA",
                        },
                        {
                            icon: icon2,
                            value: "+98 765 432 10",
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
                            value: "San Francisco, California USA",
                        },
                        {
                            icon: icon2,
                            value: "+98 765 432 10",
                        },

                    ],
                },
            ],
        };
    },
    computed: {
        totalPages() {
            return Math.ceil(this.cars.length / this.pageSize);
        },
        paginatedCars() {
            const startIndex = (this.currentPage - 1) * this.pageSize;
            const endIndex = startIndex + this.pageSize;
            return this.cars.slice(startIndex, endIndex);
        }
    },
    mounted() {
        // Initialize Swiper
        this.swiper = new Swiper(".myCarListingCard-swiper-container", {
            // Optional parameters
            effect: "cards",
            slidesPerView: 1,
            spaceBetween: 10,
            loop: true,
            // If you need pagination
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },

            // Navigation arrows
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
        });
    },
    methods: {
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

    }

};
</script>

<style scoped>
.carCard {
    background: #1A202C !important;
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

.slider-img {
    width: 100% !important;
    height: 100% !important;
    -o-object-fit: cover !important;
    object-fit: cover !important;
    max-width: 260px !important;
    border-radius: 10px !important;
    background-color: transparent !important;
    border: 1px solid #010101 !important;
}
</style>
