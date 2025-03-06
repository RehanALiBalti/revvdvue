<template>



    <section class="community-section mb-5 pt-3">
        <div class="container">



            <div class="row">
                <div class="col-md-3">

                </div>
                <div class="col-md-9">
                    <p class="h5-title  ms-1 mb-2">Explore <spn>cars</spn> for <span> sale</span></p>
                </div>
            </div>
            <div class="row justify-content-end">
                <div class="col-6 col-md-2 ">
                    <select id="bodyType" class="form-select form-control  filter-select fsel mb-2">
                        <option value="" selected>Sort</option>
                        <option value="Price ascending"> Price ascending </option>
                        <option value="Price descending">Price descending </option>
                        <option value="Milage ascending ">Milage ascending </option>
                        <option value="Milage ascending"> Milage ascending </option>
                        <option value="Milage descending">Milage descending</option>

                        <option value="	Power ascending">Power ascending</option>

                        <option value="Power descending">Power descending</option>




                    </select>
                </div>
            </div>






            <div class="row g-4">
                <div class="col-md-3">
                    <div class="filter-box">
                        <div class="d-flex justify-content-between align-items-center">
                            <h4 class="filter-title">{{ $t('filters') }} {{ $t('Ford') }}</h4>
                            <img :src="carlogo1" alt="car logo" width="50px" />
                        </div>

                        <div class="row">
                            <div class="col-12 my-1">
                                <!-- <label for="models" class="form-label filter-label">{{ $t('make') }}</label> -->
                                <select id="models" class="form-select form-control  filter-select fsel">
                                    <option value="">Make</option>
                                    <option value="AC">AC</option>
                                </select>
                            </div>
                            <div class="col-12 my-1">
                                <!-- <label for="models" class="form-label filter-label">{{ $t('models') }}</label> -->
                                <select id="models" class="form-select form-control  filter-select fsel">
                                    <option value="">Model</option>
                                    <option value="Petite">Petite</option>
                                    <option value="2-Litre">2-Litre</option>
                                    <option value="Greyhound">Greyhound</option>
                                    <option value="Ace">Ace</option>
                                    <option value="Cobra">Cobra</option>
                                    <option value="3000ME">3000ME</option>
                                    <option value="Aceca">Aceca</option>
                                    <option value="Frua">Frua</option>
                                    <option value="Brooklands Ace">Brooklands Ace</option>
                                    <option value="Ace V8">Ace V8</option>
                                    <option value="Aceca">Aceca</option>
                                </select>
                            </div>

                            <div class="col-12 my-1">
                                <!-- <label for="bodyType" class="form-label filter-label">{{ $t('Year') }}</label> -->
                                <select id="bodyType" class="form-select form-control  filter-select fsel">
                                    <option value="" selected>Year</option>
                                </select>
                            </div>

                            <div class="col-12 my-2 ">
                                <div class="row g-1">
                                    <div class="col-md-4 my-1">
                                        <div class="b-white">
                                            Mileage
                                        </div>
                                    </div>
                                    <div class="col-md-4 my-1">
                                        <select id="models" class="form-select form-control  filter-select fsel">
                                            <option value="" selected>Min</option>

                                        </select>
                                    </div>
                                    <div class="col-md-4 my-1">
                                        <select id="models" class="form-select form-control  filter-select fsel">
                                            <option value="" selected>Max</option>

                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 my-2">
                                <div class="row g-1">
                                    <div class="col-md-4 my-1">
                                        <div class="b-white">
                                            Price
                                        </div>
                                    </div>
                                    <div class="col-md-4 my-1">
                                        <select id="models" class="form-select form-control  filter-select fsel">
                                            <option value="" selected>Min</option>

                                        </select>
                                    </div>
                                    <div class="col-md-4 my-1">
                                        <select id="models" class="form-select form-control  filter-select fsel">
                                            <option value="" selected>Max</option>

                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 my-1">
                                <!-- <label for="seats" class="form-label filter-label">{{ $t('City') }}</label> -->
                                <select id="seats" class="form-select form-control  filter-select fsel ">
                                    <option value="">city</option>
                                    <option value="United Kingdom">United Kingdom</option>
                                    <option value="United Kingdom">United Kingdom</option>
                                    <option value="United Kingdom">United Kingdom</option>
                                    <option value="United Kingdom">United Kingdom</option>
                                    <option value="United Kingdom">United Kingdom</option>
                                    <option value="United Kingdom">United Kingdom</option>
                                    <option value="United Kingdom">United Kingdom</option>
                                    <option value="United Kingdom">United Kingdom</option>
                                    <option value="United Kingdom">United Kingdom</option>
                                    <option value="United Kingdom">United Kingdom</option>
                                    <option value="United Kingdom">United Kingdom</option>
                                </select>
                            </div>
                        </div>
                        <!-- Show Advanced Filters Button -->

                        <div class="col-md-12">
                            <div
                                class="load-more-info w-100 d-flex justify-content-start align-items-center mb-4 mx-auto">
                                <div class="list-item-btn position-relative load-more-div proceed-div mx-auto">
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
                                    <button type="submit"
                                        class="signin-btnli Start Engine load-more-btn proceed-btn width-set"
                                        id="submit-button" @click="toggleAdvancedFilters">
                                        {{ showAdvanced ? "Hide Advanced Filters" : "Show Advanced Filters" }}
                                    </button>
                                    <span class="border-bottom-btn border-left-btn new-popup position-absolute">
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


                        <!-- Advanced Filters (Hidden by Default) -->
                        <div v-if="showAdvanced" class="col-12 mt-3">
                            <div class="row">
                                <div v-for="(filter, index) in advancedFilters" :key="index" class="col-12 my-1">
                                    <select v-model="selectedAdvanced[filter.key]"
                                        class="form-select form-control filter-select fsel">
                                        <option selected>{{ filter.label }}</option>
                                        <option v-for="option in filter.options" :key="option" :value="option">{{ option
                                            }}</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- <div class="filter-image-div my-4">
                        <img src="@/assets/images/Image18.png" class="img-fluid filter-image" alt="Image" />
                    </div> -->

                </div>

                <div class="col-md-9 px-4">

                    <div class="row">
                        <!-- template -->
                        <div class="col-md-12">
                            <div class="card card-bg my-2 ">
                                <div class="d-flex justify-content-start w-100 position-relative z-5">
                                    <div class="badgecar">Premium</div>
                                </div>
                                <div class="row mx-1 my-3">
                                    <div class="col-6 col-md-3 align-self-center">
                                        <img class="w-100" :src="Image2" height="130px" width="150px" />
                                    </div>
                                    <div class="col-6 col-md-1 align-self-center ">
                                        <img class="img-fluid" :src="carlogo1" />
                                    </div>
                                    <div class="col-12 col-md-8">
                                        <div class="d-flex justify-content-end">
                                            <div class="d-flex align-items-center gap-2">
                                                <img :src="share" width="25px" />
                                                <img :src="badge" width="25px" />
                                            </div>
                                        </div>
                                        <div>
                                            <p class="car-title">Mercedes <span>AMG GT63s 4 door</span></p>
                                            <div class="row my-1">
                                                <div class="col-12 col-md-4">
                                                    <p class="car-sec-text"> Price: 250,000 <span>$</span></p>
                                                </div>
                                                <div class="col-12 col-md-4">
                                                    <p class="car-sec-text"> Year: 2020</p>
                                                </div>
                                                <div class="col-12 col-md-4">
                                                    <div class="d-flex gap-2 align-items-center">
                                                        <img :src="date" width="30px" />
                                                        <p class="car-sec-text"> 13.02.2025</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row my-1">
                                                <div class="col-12 col-md-4 my-1">
                                                    <div class="d-flex align-items-center gap-2">
                                                        <img :src="meter" width="25px" />
                                                        <p class="car-sec-text2"> 700 HP</p>
                                                    </div>
                                                </div>
                                                <div class="col-12 col-md-4 my-1">
                                                    <div class="d-flex align-items-center gap-2">
                                                        <img :src="gear" width="25px" />
                                                        <p class="car-sec-text2"> Automatic</p>
                                                    </div>
                                                </div>
                                                <div class="col-12 col-md-4 my-1">
                                                    <div class="d-flex align-items-center gap-2">
                                                        <img :src="race" width="25px" />
                                                        <p class="car-sec-text2"> 13.02.Street</p>
                                                    </div>
                                                </div>
                                                <div class="col-12 col-md-4 my-1">
                                                    <div class="d-flex align-items-center gap-2">
                                                        <img :src="road" width="25px" />
                                                        <p class="car-sec-text2">30,000 Km </p>
                                                    </div>
                                                </div>
                                                <div class="col-12 col-md-4 my-1">
                                                    <div class="d-flex align-items-center gap-2">
                                                        <img :src="gasoline" width="25px" />
                                                        <p class="car-sec-text2"> Gasoline</p>
                                                    </div>
                                                </div>
                                                <div class="col-12 col-md-4 my-1">
                                                    <div class="d-flex align-items-center gap-2">
                                                        <img :src="location" width="20px" />
                                                        <p class="car-sec-text2"> Berlin</p>
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
import icon1 from "@/assets/images/IconAwesome-user-alt.png";
import icon2 from "@/assets/images/engine.png";
import icon3 from "@/assets/images/Iconmaterial-email.png";
import carlogo1 from "../assets/images/cars_logos/26.png"
import meter from "../assets/images/icons/meter.png"
import date from "../assets/images/icons/date.png"
import dollar from "../assets/images/icons/dollar.png"
import gasoline from "../assets/images/icons/gasoline.png"

import gear from "../assets/images/icons/gear.png"
import location from "../assets/images/icons/location.png"
import race from "../assets/images/icons/race.png"
import road from "../assets/images/icons/road.png"
import share from "../assets/images/icons/share.png"
import badge from "../assets/images/icons/badge.png"

// import 'swiper/css/effect-cards';

//Import swiper js

//Import Swiper styles
// import "swiper/swiper-bundle.css";

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

//Import Swiper modules
// import { Pagination, Navigation } from 'swiper';
// Install Swiper modules
// Swiper.use([Pagination, Navigation])

export default {
    name: "buyCar3",

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
            carlogo1: carlogo1,
            Image2: Image1,
            badge: badge,
            share: share,
            road: road,
            race: race,
            location: location,
            gear: gear,
            gasoline: gasoline,
            dollar: dollar,
            date: date,
            meter: meter,
            selectedMake: "",
            selectedModel: "",
            selectedYear: "",
            mileageMin: "",
            mileageMax: "",
            priceMin: "",
            priceMax: "",
            selectedCity: "",
            showAdvanced: false,
            selectedAdvanced: {},

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
                    title: "Koenigsegg agera one",
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
                    title: "Koenigsegg agera one",
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
                    title: "Koenigsegg agera one",
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
                    title: "Koenigsegg agera one",
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
                    title: "Koenigsegg agera one",
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
                    title: "Koenigsegg agera one",
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
                    title: "Koenigsegg agera one",
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
                    title: "Koenigsegg agera one",
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
            advancedFilters: [
                { key: "engineConfig", label: "Engine Configuration", options: ["V6", "V8", "Inline-4", "W12"] },
                { key: "engineCapacity", label: "Engine Capacity (L)", options: ["1.0", "1.5", "2.0", "3.0", "4.0"] },
                { key: "horsepower", label: "Horsepower (HP)", options: ["100", "200", "300", "400"] },
                { key: "torque", label: "Torque (NM)", options: ["150", "250", "350", "450"] },
                { key: "modificationType", label: "Type of Modification", options: ["Body Kit", "Performance", "Tuning"] },
                { key: "driveTrain", label: "Drive Train", options: ["FWD", "RWD", "AWD", "4WD"] },
                { key: "transmission", label: "Transmission", options: ["Manual", "Automatic", "CVT"] },
                { key: "color", label: "Color", options: ["Red", "Blue", "Black", "White"] },
                { key: "buildType", label: "Build Type", options: ["Sedan", "SUV", "Truck", "Coupe"] },
                { key: "fuelType", label: "Fuel Type", options: ["Petrol", "Diesel", "Electric", "Hybrid"] },
                { key: "category", label: "Category", options: ["Luxury", "Sports", "Classic", "Economy"] },
                { key: "previousOwners", label: "Previous Owners", options: ["1", "2", "3+", "First Owner"] },
                { key: "carVersion", label: "Car Version", options: ["Standard", "Limited Edition", "Performance"] },
                { key: "steering", label: "Right/Left-Hand Drive", options: ["Left-Hand Drive", "Right-Hand Drive"] },
                { key: "country", label: "Country", options: ["USA", "UK", "Germany", "Japan"] }
            ]
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
        // this.swiper = new Swiper(".myCarListingCard-swiper-container", {
        //     // Optional parameters
        //     effect: "cards",
        //     slidesPerView: 1,
        //     spaceBetween: 10,
        //     loop: true,
        //     // If you need pagination
        //     pagination: {
        //         el: ".swiper-pagination",
        //         clickable: true,
        //     },

        //     // Navigation arrows
        //     navigation: {
        //         nextEl: ".swiper-button-next",
        //         prevEl: ".swiper-button-prev",
        //     },
        // });

    },
    created() {
        // Initialize selectedAdvanced with the filter label as the default value
        this.advancedFilters.forEach(filter => {
            this.selectedAdvanced[filter.key] = filter.label;
        });
    },
    methods: {
        toggleAdvancedFilters() {
            this.showAdvanced = !this.showAdvanced;
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

    }

};
</script>

<style scoped>
.carCard {
    background: #1A202C !important;
}

.swiper {
    width: 270px;
    height: 250px;
}

.swiper-slide img {
    width: 200px !important;
    height: 180px !important;

    /* -o-object-fit: contain !important;
    object-fit: cover !important; */
    max-width: 260px !important;
    border-radius: 10px !important;
    background-color: transparent !important;
    /* border: 1px solid #010101 !important; */
}

/* .swiper {
    width: 240px;
    height: 240px;
}

.swiper-slide {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 18px;
    font-size: 22px;
    font-weight: bold;
    color: #fff;
}

.swiper-slide:nth-child(1n) {
    background-color: rgb(206, 17, 17);
}

.swiper-slide:nth-child(2n) {
    background-color: rgb(0, 140, 255);
}

.swiper-slide:nth-child(3n) {
    background-color: rgb(10, 184, 111);
}

.swiper-slide:nth-child(4n) {
    background-color: rgb(211, 122, 7);
}

.swiper-slide:nth-child(5n) {
    background-color: rgb(118, 163, 12);
}

.swiper-slide:nth-child(6n) {
    background-color: rgb(180, 10, 47);
}

.swiper-slide:nth-child(7n) {
    background-color: rgb(35, 99, 19);
}

.swiper-slide:nth-child(8n) {
    background-color: rgb(0, 68, 255);
}

.swiper-slide:nth-child(9n) {
    background-color: rgb(218, 12, 218);
}

.swiper-slide:nth-child(10n) {
    background-color: rgb(54, 94, 77);
} */

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

.fsel {
    border: 1px solid #f95f19 !important;
    height: 35px !important;
}

.b-white {
    border: 1px solid #fff !important;
    color: #ffff;
    padding-inline: 0.7rem;
    padding-block: 0.2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px
}

.form-select {
    display: block;
    width: 100%;
    max-width: 920px;
    height: 50px;
    padding: 0.375rem 1.25rem 0.375rem .75rem;
    -moz-padding-start: calc(0.75rem - 3px);
    font-size: 20px;
    font-weight: 400;
    line-height: 1.5;
    color: #fff;
    background-color: #000b1c;

    background-repeat: no-repeat;
    background-position: right .75rem center;
    /* background-size: 16px 12px; */
    background-size: 10px 6px;
    border: 1px solid #1a202c;
    border-radius: 5px;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    font-family: "Gruppo", sans-serif;
    cursor: pointer;
}

.car-sec-text {
    color: #fff;
    margin: 0;
    font-size: 16px;
    text-align: start;
}

.car-sec-text2 {
    color: #fff;
    margin: 0;
    font-size: 14px;
    text-align: start;
}

.car-title {
    color: #fff;
    text-align: start;
    font-size: 24px;
    margin: 0
}

.car-title span {
    color: #f95f19
}

.car-sec-text span {
    color: #f95f19
}

.badgecar {
    border-top-left-radius: 10px;
    background-color: #f95f19;
    color: #fff;
    padding-inline: 1rem;
    padding-block: 0.6rem;
    position: absolute;
    left: -2px
}

.card-bg {
    background-color: #031726cd !important;
    border-radius: 10px !important;
}

.filter-box {
    background-color: #031726cd !important;
}

.z-5 {
    z-index: 5;
}

.h5-title span {
    color: #f95f19
}
</style>
