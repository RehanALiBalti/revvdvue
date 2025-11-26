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
            <div class="row justify-content-between akign-items-end">
                <div class="col-md-3">
                    <div class="load-more-info w-100 d-flex justify-content-start align-items-center mb-4 me-auto">
                        <div class="list-item-btn position-relative load-more-div proceed-div me-auto">
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
                            <!-- <router-link to="/map3" class="signin-btnli signup-btnli">
                            Back To Map
                        </router-link> -->
                            <button @click="$router.go(-1)" class="signin-btnli signup-btnli">
                                Back
                            </button>

                            <span class="border-bottom-btn border-left-btn position-absolute">
                                <img src="@/assets/images/Group11white.png" class="img-border position-absolute"
                                    alt="" />
                            </span>
                            <span class="border-bottom-btn position-absolute">
                                <img src="@/assets/images/Path473white.png" class="img-border position-absolute"
                                    alt="" />
                            </span>
                        </div>
                    </div>

                </div>
                <div class="col-6 col-md-2 ">
                    <select id="bodyType" class="form-select form-control  filter-select fsel mb-2">
                        <option value="" selected>Sort</option>
                        <option value="Price ascending"> Price ascending </option>
                        <option value="Price descending">Price descending </option>
                        <option value="Milage ascending ">Milage ascending </option>

                        <option value="Milage descending">Milage descending</option>

                        <option value="	Power ascending">Power ascending</option>

                        <option value="Power descending">Power descending</option>




                    </select>
                </div>
            </div>






            <div class="row g-4 card-wrapper">
                <div class="col-12 col-md-3">
                    <div class="filter-box">
                        <div class="d-flex justify-content-between align-items-center">
                            <h4 class="filter-title">{{ $t('filters') }} {{ $t('Ford') }}</h4>
                            <img :src="carlogo1" alt="car logo" width="50px" />
                        </div>

                        <div class="row">
                            <div class="col-12 my-1">
                                <select v-model="formData.make" @change="loadModels"
                                    class="form-select form-control filter-select fsel">
                                    <option value="">Make</option>
                                    <option v-for="make in makes" :key="make" :value="make">
                                        {{ make }}
                                    </option>
                                </select>
                            </div>

                            <div class="col-12 my-1">
                                <select v-model="formData.model" @change="loadYears"
                                    class="form-select form-control filter-select fsel">
                                    <option value="">Model</option>
                                    <option v-for="model in models" :key="model" :value="model">
                                        {{ model }}
                                    </option>
                                </select>
                            </div>

                            <div class="col-12 my-1">
                                <select v-model="formData.year" class="form-select form-control filter-select fsel">
                                    <option value="">Year</option>
                                    <option v-for="year in productionYears" :key="year" :value="year">
                                        {{ year }}
                                    </option>
                                </select>

                            </div>


                            <div class="col-12 my-2 ">
                                <div class="row g-1">
                                    <div class="col-12 col-md-4 my-1">
                                        <div class="b-white">
                                            Mileage
                                        </div>
                                    </div>
                                    <div class="col-12 col-md-4 my-1">
                                        <!-- <select id="models" class="form-select form-control  filter-select fsel">
                                            <option value="" selected>Min</option>

                                        </select> -->
                                        <input type="text" class=" form-control  filter-select fsel"
                                            placeholder="Min" />
                                    </div>
                                    <div class="col-12 col-md-4 my-1">
                                        <!-- <select id="models" class="form-select form-control  filter-select fsel">
                                            <option value="" selected>Max</option>

                                        </select> -->
                                        <input type="text" class=" form-control  filter-select fsel"
                                            placeholder="Max" />
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 my-2">
                                <div class="row g-1">
                                    <div class="col-12 col-md-4 my-1">
                                        <div class="b-white">
                                            Price
                                        </div>
                                    </div>
                                    <div class="col-12 col-md-4 my-1">
                                        <input type="text" class=" form-control  filter-select fsel"
                                            placeholder="Min" />
                                    </div>
                                    <div class="col-12 col-md-4 my-1">
                                        <!-- <select id="models" class="form-select form-control  filter-select fsel">
                                            <option value="" selected>Max</option>

                                        </select> -->
                                        <input type="text" class=" form-control  filter-select fsel"
                                            placeholder="Max" />
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 my-1">
                                <!-- <label for="seats" class="form-label filter-label">{{ $t('City') }}</label> -->
                                <select id="city" v-model="formData.city"
                                    class="form-select form-control filter-select fsel">
                                    <option value="">City</option>
                                    <option v-for="city in cities" :key="city" :value="city">
                                        {{ city }}
                                    </option>
                                </select>


                            </div>
                        </div>
                        <!-- Show Advanced Filters Button -->

                        <div class="col-md-12">
                            <div
                                class="load-more-info w-100 d-flex justify-content-start align-items-center mb-4 mx-auto ">
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

                                <!-- <div v-for="(filter, index) in advancedFilters" :key="index" class="col-12 my-1">
                                    <div v-if="filter.key === 'horsepower'">

                                        <div class="row g-1">
                                            <div class="col-md-4 my-1">
                                                <div class="b-white">
                                                    HP
                                                </div>
                                            </div>
                                            <div class="col-md-4 my-1">
                                                <input type="text" class=" form-control  filter-select fsel"
                                                    placeholder="Min" />
                                            </div>
                                            <div class="col-md-4 my-1">
                                              
                                                <input type="text" class=" form-control  filter-select fsel"
                                                    placeholder="Max" />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-12" v-if="filter.key === 'engineCapacity'">
                                        <input type="text" class=" form-control  filter-select fsel"
                                            placeholder="Engine Capacity" />
                                    </div>
                                    <div v-else-if="filter.key === 'torque'">

                                        <div class="row g-1">
                                            <div class="col-md-4 my-1">
                                                <div class="b-white">
                                                    Torque
                                                </div>
                                            </div>
                                            <div class="col-md-4 my-1">
                                                <input type="text" class=" form-control  filter-select fsel"
                                                    placeholder="Min" />
                                            </div>
                                            <div class="col-md-4 my-1">
                                              
                                                <input type="text" class=" form-control  filter-select fsel"
                                                    placeholder="Max" />
                                            </div>
                                        </div>
                                    </div>
                                    <div v-else>
                                        <select v-model="selectedAdvanced[filter.key]"
                                            class="form-select form-control filter-select fsel">
                                            <option disabled selected>{{ filter.label }}</option>
                                            <option v-for="option in filter.options" :key="option" :value="option">
                                                {{ option }}
                                            </option>
                                        </select>
                                    </div>
                                </div> -->
                                <div v-for="(filter, index) in advancedFilters" :key="index" class="col-12 my-1">

                                    <!-- HORSEPOWER -->
                                    <div v-if="filter.key === 'horsepower'">
                                        <div class="row g-1">
                                            <div class="col-md-4 my-1">
                                                <div class="b-white">HP</div>
                                            </div>
                                            <div class="col-md-4 my-1">
                                                <input type="text" class="form-control filter-select fsel"
                                                    placeholder="Min" />
                                            </div>
                                            <div class="col-md-4 my-1">
                                                <input type="text" class="form-control filter-select fsel"
                                                    placeholder="Max" />
                                            </div>
                                        </div>
                                    </div>

                                    <!-- ENGINE CAPACITY -->
                                    <div v-else-if="filter.key === 'engineCapacity'">
                                        <input type="text" class="form-control filter-select fsel"
                                            placeholder="Engine Capacity" />
                                    </div>

                                    <!-- TORQUE -->
                                    <div v-else-if="filter.key === 'torque'">
                                        <div class="row g-1">
                                            <div class="col-md-4 my-1">
                                                <div class="b-white">Torque</div>
                                            </div>
                                            <div class="col-md-4 my-1">
                                                <input type="text" class="form-control filter-select fsel"
                                                    placeholder="Min" />
                                            </div>
                                            <div class="col-md-4 my-1">
                                                <input type="text" class="form-control filter-select fsel"
                                                    placeholder="Max" />
                                            </div>
                                        </div>
                                    </div>

                                    <!-- DEFAULT SELECT -->
                                    <div v-else>
                                        <select v-model="selectedAdvanced[filter.key]"
                                            class="form-select form-control filter-select fsel">
                                            <option disabled selected>{{ filter.label }}</option>
                                            <option v-for="option in filter.options" :key="option" :value="option">
                                                {{ option }}
                                            </option>
                                        </select>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>

                    <!-- <div class="filter-image-div my-4">
                        <img src="@/assets/images/Image18.png" class="img-fluid filter-image" alt="Image" />
                    </div> -->

                </div>

                <div class="col-12 col-md-9 px-4">

                    <div class="row">
                        <!-- template -->
                        <div class="col-md-12">
                            <router-link to="/carslistingdetails" class="card card-bg my-2 ">
                                <div class="d-flex justify-content-start w-100 position-relative z-5">
                                    <div class="badgecar">Premium</div>
                                </div>
                                <div class="row mx-1 my-3">
                                    <div class="col-6 col-md-3 align-self-center">
                                        <img class="w-100" :src="Image2" height="130px" width="150px" />
                                    </div>
                                    <div class="col-6 col-md-1 align-self-center icon ">
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
                                            <div class="row my-1 ">
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
                            </router-link>
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

import Image3 from "@/assets/images/20210412111611_Ford_Territory_front.png";
import Image5 from "@/assets/images/36346b90e9ed41209ec6b093b61c21ef.png";
import Image1 from "@/assets/images/4image.png";
import Image2 from "@/assets/images/d722fc518c6127ea183d184e5dc715e3.png";
import icon2 from "@/assets/images/engine.png";
import icon1 from "@/assets/images/IconAwesome-user-alt.png";
import icon3 from "@/assets/images/Iconmaterial-email.png";
import Image4 from "@/assets/images/images1.png";
import carlogo1 from "../assets/images/cars_logos/26.png";
import date from "../assets/images/icons/date.png";
import dollar from "../assets/images/icons/dollar.png";
import gasoline from "../assets/images/icons/gasoline.png";
import meter from "../assets/images/icons/meter.png";

import badge from "../assets/images/icons/badge.png";
import gear from "../assets/images/icons/gear.png";
import location from "../assets/images/icons/location.png";
import race from "../assets/images/icons/race.png";
import road from "../assets/images/icons/road.png";
import share from "../assets/images/icons/share.png";

// import 'swiper/css/effect-cards';

//Import swiper js

//Import Swiper styles
// import "swiper/swiper-bundle.css";

import CarDataService from "../services/CarDataService";
// import CommunityDataService from "../services/CommunityDataService";
import 'swiper/css/effect-cards';
import { EffectCards } from 'swiper/modules';
//Import swiper js
import Swiper from "swiper";
//Import Swiper styles
import "swiper/swiper-bundle.css";

//Import Swiper modules
import { Navigation, Pagination } from 'swiper';
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
            productionYears: "",
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
            makes: [],
            models: [],
            years: [],
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
            formData: {
                city: "",
                make: "",
                model: "",
                year: ""


            },

            cities: [],
            advancedFilters: [
                { key: "engineConfig", label: "Engine Configuration", options: ["3l", "4l", "5l", "6l", "v6", "v8", "v10", "v12", "w8", "w12", "w16", "2 rotor", "3 rotor", "4 rotor", "Flat 4", "Flat 6"] },
                { key: "engineCapacity", label: "Engine Capacity (L)", options: ["3l", "4l", "5l", "6l", "v6", "v8", "v10", "v12", "w8", "w12", "w16", "2 rotor", "3 rotor", "4 rotor", "Flat 4", "Flat 6"] },
                { key: "horsepower", label: "Horsepower (HP)", options: ["100", "200", "300", "400"] },
                { key: "torque", label: "Torque (NM)", options: ["150", "250", "350", "450"] },
                { key: "modificationType", label: "Type of Modification", options: ["Cosmetic", "Performance", "Both"] },
                { key: "driveTrain", label: "Drive Train", options: ["FWD", "RWD", "AWD", "4WD", "4X4"] },
                { key: "transmission", label: "Transmission", options: ["Manual", "Automatic", "Sequential"] },
                // { key: "color", label: "Color", options: ["Red", "Blue", "Black", "White"] },
                { key: "buildType", label: "Build Type", options: ["Drag", "Street", "show/stance", "Drift", "Track", "Off-Road", "Restroration", "Daily Driver", "Luxury tuning", "Hot rod", "Sleeper"] },
                { key: "fuelType", label: "Fuel Type", options: ["Petrol", "Diesel", "Electric", "Hybrid", "Ethanol", "Methanol"] },
                { key: "category", label: "Category", options: ["Saloon", "Hatchback", "Estate", "SUV", "Coupe", "Convertible"] },
                { key: "previousOwners", label: "Previous Owners", options: ["1", "2", "3+", "First Owner"] },
                { key: "carVersion", label: "Car Version", options: ["EU", "USA", "GP"] },
                { key: "steering", label: "Right/Left-Hand Drive", options: ["Left-Hand Drive", "Right-Hand Drive"] },
                {
                    key: "country",
                    label: "Country",
                    options: [
                        "Afghanistan",
                        "Albania",
                        "Algeria",
                        "Andorra",
                        "Angola",
                        "Antigua and Barbuda",
                        "Argentina",
                        "Armenia",
                        "Australia",
                        "Austria",
                        "Azerbaijan",
                        "Bahamas",
                        "Bahrain",
                        "Bangladesh",
                        "Barbados",
                        "Belarus",
                        "Belgium",
                        "Belize",
                        "Benin",
                        "Bhutan",
                        "Bolivia",
                        "Bosnia and Herzegovina",
                        "Botswana",
                        "Brazil",
                        "Brunei",
                        "Bulgaria",
                        "Burkina Faso",
                        "Burundi",
                        "Cabo Verde",
                        "Cambodia",
                        "Cameroon",
                        "Canada",
                        "Central African Republic",
                        "Chad",
                        "Chile",
                        "China",
                        "Colombia",
                        "Comoros",
                        "Congo",
                        "Costa Rica",
                        "Croatia",
                        "Cuba",
                        "Cyprus",
                        "Czech Republic",
                        "Denmark",
                        "Djibouti",
                        "Dominica",
                        "Dominican Republic",
                        "Ecuador",
                        "Egypt",
                        "El Salvador",
                        "Equatorial Guinea",
                        "Eritrea",
                        "Estonia",
                        "Eswatini",
                        "Ethiopia",
                        "Fiji",
                        "Finland",
                        "France",
                        "Gabon",
                        "Gambia",
                        "Georgia",
                        "Germany",
                        "Ghana",
                        "Greece",
                        "Grenada",
                        "Guatemala",
                        "Guinea",
                        "Guinea-Bissau",
                        "Guyana",
                        "Haiti",
                        "Honduras",
                        "Hungary",
                        "Iceland",
                        "India",
                        "Indonesia",
                        "Iran",
                        "Iraq",
                        "Ireland",
                        "Israel",
                        "Italy",
                        "Jamaica",
                        "Japan",
                        "Jordan",
                        "Kazakhstan",
                        "Kenya",
                        "Kiribati",
                        "Korea, North",
                        "Korea, South",
                        "Kosovo",
                        "Kuwait",
                        "Kyrgyzstan",
                        "Laos",
                        "Latvia",
                        "Lebanon",
                        "Lesotho",
                        "Liberia",
                        "Libya",
                        "Liechtenstein",
                        "Lithuania",
                        "Luxembourg",
                        "Madagascar",
                        "Malawi",
                        "Malaysia",
                        "Maldives",
                        "Mali",
                        "Malta",
                        "Marshall Islands",
                        "Mauritania",
                        "Mauritius",
                        "Mexico",
                        "Micronesia",
                        "Moldova",
                        "Monaco",
                        "Mongolia",
                        "Montenegro",
                        "Morocco",
                        "Mozambique",
                        "Myanmar",
                        "Namibia",
                        "Nauru",
                        "Nepal",
                        "Netherlands",
                        "New Zealand",
                        "Nicaragua",
                        "Niger",
                        "Nigeria",
                        "North Macedonia",
                        "Norway",
                        "Oman",
                        "Pakistan",
                        "Palau",
                        "Panama",
                        "Papua New Guinea",
                        "Paraguay",
                        "Peru",
                        "Philippines",
                        "Poland",
                        "Portugal",
                        "Qatar",
                        "Romania",
                        "Russia",
                        "Rwanda",
                        "Saint Kitts and Nevis",
                        "Saint Lucia",
                        "Saint Vincent and the Grenadines",
                        "Samoa",
                        "San Marino",
                        "Sao Tome and Principe",
                        "Saudi Arabia",
                        "Senegal",
                        "Serbia",
                        "Seychelles",
                        "Sierra Leone",
                        "Singapore",
                        "Slovakia",
                        "Slovenia",
                        "Solomon Islands",
                        "Somalia",
                        "South Africa",
                        "South Sudan",
                        "Spain",
                        "Sri Lanka",
                        "Sudan",
                        "Suriname",
                        "Sweden",
                        "Switzerland",
                        "Syria",
                        "Taiwan",
                        "Tajikistan",
                        "Tanzania",
                        "Thailand",
                        "Timor-Leste",
                        "Togo",
                        "Tonga",
                        "Trinidad and Tobago",
                        "Tunisia",
                        "Turkey",
                        "Turkmenistan",
                        "Tuvalu",
                        "Uganda",
                        "Ukraine",
                        "United Arab Emirates",
                        "United Kingdom",
                        "United States",
                        "Uruguay",
                        "Uzbekistan",
                        "Vanuatu",
                        "Vatican City",
                        "Venezuela",
                        "Vietnam",
                        "Yemen",
                        "Zambia",
                        "Zimbabwe"
                    ]
                }

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
        this.getAllCities();
        this.loadMakes();

    },
    created() {
        // Initialize selectedAdvanced with the filter label as the default value
        this.advancedFilters.forEach(filter => {
            this.selectedAdvanced[filter.key] = filter.label;
        });
    },
    methods: {
        loadMakes() {
            this.makes = [];
            this.models = [];
            this.years = [];

            CarDataService.getAll()
                .then(response => {
                    this.makes = [...new Set(response.data.map(item => item.make))];
                })
                .catch(err => console.log(err));
        }
        ,
        loadModels() {
            console.log("Make changed → load models");

            this.formData.model = "";
            this.formData.year = "";

            this.models = [];
            this.years = [];

            if (!this.formData.make) return;

            CarDataService.getModels(this.formData.make)
                .then(response => {
                    this.models = response.data.map(item => item.model);
                })
                .catch(err => console.log(err));
        }
        ,
        // loadYears() {
        //     console.log("generation changed → load years");

        //     this.formData.year = "";
        //     this.productionYears = [];



        //     CarDataService.getGenerations(this.formData.make, this.formData.model)
        //         .then((response) => {
        //             const data = response.data;

        //             console.log("all generations & years:", data);

        //             // Filter valid generation entries
        //             const valid = data.filter(item => {
        //                 return (
        //                     item.generation &&
        //                     item.generation !== "-" &&
        //                     item.generation !== "??" &&
        //                     item.generation !== "?"
        //                 );
        //             });

        //             // Filter only entries matching selected generation
        //             const filteredByGeneration = valid.filter(
        //                 item => item.generation === this.formData.generation
        //             );

        //             // Extract production years
        //             this.productionYears = [
        //                 ...new Set(filteredByGeneration.map(item => item.production_years))
        //             ];

        //             console.log("years:", this.productionYears);
        //         })
        //         .catch((err) => console.log(err));
        // }
        loadYears() {
            console.log("generation changed → load years");

            this.formData.year = "";
            this.productionYears = [];

            CarDataService.getGenerations(this.formData.make, this.formData.model)
                .then((response) => {
                    const data = response.data;

                    console.log("all generations & years:", data);

                    // Filter valid production year entries
                    const valid = data.filter(item =>
                        item.production_years &&
                        item.production_years !== "-" &&
                        item.production_years !== "??" &&
                        item.production_years !== "?"
                    );

                    let filtered;

                    // If API returns generation → filter by it
                    if (data[0]?.generation) {
                        filtered = valid.filter(
                            item => item.generation === this.formData.generation
                        );
                    }
                    // If NO generation → use all valid rows
                    else {
                        filtered = valid;
                    }

                    // Extract unique production years
                    this.productionYears = [
                        ...new Set(filtered.map(item => item.production_years))
                    ];

                    console.log("years:", this.productionYears);
                })
                .catch((err) => console.log(err));
        }
        ,


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
        getAllCities() {
            this.loading = true;

            fetch("https://countriesnow.space/api/v0.1/countries/states")
                .then(res => res.json())
                .then(result => {


                    if (result.data && result.data.length > 0) {

                        // Extract all states from all countries
                        const allStates = [];

                        result.data.forEach(country => {
                            if (country.states && country.states.length > 0) {
                                country.states.forEach(state => {
                                    allStates.push(state.name);

                                });
                            }
                        });

                        this.cities = allStates; // now list of 10,000+ states
                    } else {
                        this.cities = [];
                    }

                    this.loading = false;
                })
                .catch(err => {
                    console.error("State API Error:", err);
                    this.cities = [];
                    this.loading = false;
                });
        }

    }

};
</script>

<style scoped>
/* .card-wrapper {
    display: flex !important;
} */

@media (max-width:992px) and (min-width:768px) {
    .icon {
        display: none;
    }
}



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
    border-radius: 5px;
    height: 35px
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

select {
    -webkit-appearance: none !important;
    /* Removes Safari/Chrome default arrow */
    -moz-appearance: none !important;
    /* Removes Firefox default arrow */
    appearance: none !important;
}
</style>
