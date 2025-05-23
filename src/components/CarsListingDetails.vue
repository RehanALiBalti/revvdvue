<template>
  <section class="banner-section-car-listing mb-5">
    <div class="container-fluid h-100">
      <div class="row h-100">
        <div class="col-md-5">

          <div class="swiper-container swiper-width">
            <div class="swiper-wrapper position-relative" ref="viewerContainer">
              <div v-for="(image, index) in images" :key="index" class="swiper-slide swiper-adjustment">
                <img :src="require(`@/assets/images/${image}`)" class="slider-img car-image-slider2" alt="car"
                  @click="openViewer(index)" />

              </div>

              <!-- Add more slides as needed -->
            </div>
            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>
            <div class="swiper-pagination"></div>
          </div>
        </div>
        <div class="col-md-7 position-relative">
          <router-link to="/cardetails"> <button class="btn btn-link"> <i
                class="fa-solid fa-arrow-up-right-from-square"></i></button></router-link>
          <div class="container h-100">
            <div class="swiper-container content-swiper-container position-relative">
              <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="(car, index) in cars" :key="index">
                  <!-- Page 1 - Car Basic Info -->
                  <div class="text-content-slide">
                    <div class="skew-div">
                      <h2 class="card-title-h2 koenigsegg-title">
                        {{ car.make }} {{ car.model }}

                      </h2>
                      <img :src="car.logo" alt="Logo" class="car-logo" width="100px" />
                    </div>
                    <div class="car-details-content row">
                      <div class="model-list-content col-md-4" v-for="(detail, i) in car.page1" :key="i">
                        <p class="map-para overview-para-list coloor">{{ detail.label }}:</p>
                        <p class="map-para overview-para-list">{{ detail.value }}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="swiper-slide" v-for="(car, index) in cars" :key="'p2-' + index">
                  <!-- Page 2 - Engine & Performance -->
                  <div class="text-content-slide">
                    <h2 class="card-title-h2">Performance & Engine</h2>
                    <div class="car-details-content row">
                      <div class="model-list-content col-md-4" v-for="(detail, i) in car.page2" :key="i">
                        <p class="map-para overview-par-list coloor">{{ detail.label }}:</p>
                        <p class="map-para overview-para-list">{{ detail.value }}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="swiper-slide" v-for="(car, index) in cars" :key="'p3-' + index">
                  <!-- Page 3 - Ownership & Location -->
                  <div class="text-content-slide">
                    <h2 class="card-title-h2">Ownership & Location</h2>
                    <div class="car-details-content row">
                      <div class="model-list-content col-md-4" v-for="(detail, i) in car.page3" :key="i">
                        <p class="map-para overview-para-list coloor">{{ detail.label }}:</p>
                        <p class="map-para overview-para-list">{{ detail.value }}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="swiper-slide">
                  <!-- Page 4 - Inquiry Form -->
                  <div class="text-content-slide">
                    <h2 class="card-title-h2">Make an Enquiry</h2>
                    <form @submit.prevent="submitInquiry" class="row g-2">
                      <div class="col-md-6">
                        <input class="form-control form-Input h35px" type="text" v-model="form.name" placeholder="Name"
                          required />
                      </div>
                      <div class="col-md-6">
                        <input class="form-control form-Input h35px" type="email" v-model="form.email"
                          placeholder="Email" required />
                      </div>
                      <div class="col-md-6">
                        <input class="form-control form-Input h35px" type="tel" v-model="form.phone" placeholder="Phone"
                          required />
                      </div>
                      <div class="col-md-12">
                        <textarea class="form-control form-Input h35px" v-model="form.message"
                          placeholder="Message"></textarea>
                      </div>


                      <label>
                        <input class="" type="checkbox" v-model="form.terms" />
                        Accept Terms & Conditions
                      </label>
                      <div class="col-md-12">
                        <div class="load-more-info w-100 d-flex justify-content-start align-items-center mb-4 mx-auto">
                          <div class="list-item-btn position-relative load-more-div proceed-div mx-auto">
                            <span class="border-bottom-btn border-top-btn position-absolute">
                              <img src="@/assets/images/Group12engine.png" class="img-border position-absolute"
                                alt="" />
                            </span>

                            <span
                              class="border-bottom-btn border-top-btn border-right-radius popup-right position-absolute">
                              <img src="@/assets/images/Path467engine.png" class="img-border position-absolute"
                                alt="" />
                            </span>

                            <span
                              class="border-bottom-btn border-top-btn border-right-radius border-right-bottom-radius popup-right-bottom position-absolute">
                              <img src="@/assets/images/Path465engine.png" class="img-border position-absolute"
                                alt="" />
                            </span>
                            <!-- data-bs-toggle="modal" -->
                            <button type="submit" class="signin-btnli Start Engine load-more-btn proceed-btn width-set"
                              id="submit-button">
                              Submit
                            </button>
                            <span class="border-bottom-btn border-left-btn new-popup position-absolute">
                              <img src="@/assets/images/Group11engine.png" class="img-border position-absolute"
                                alt="" />
                            </span>
                            <span class="border-bottom-btn position-absolute">
                              <img src="@/assets/images/Path473engine.png" class="img-border position-absolute"
                                alt="" />
                            </span>
                          </div>
                        </div>

                      </div>
                    </form>
                  </div>
                </div>
                <div class="swiper-slide swiper-adjustment">
                  <div class="row">
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
                  </div>
                </div>
                <div class="swiper-slide swiper-adjustment">
                  <div class="row">
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
                  </div>
                </div>
                <div class="swiper-slide swiper-adjustment">
                  <div class="row">
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
                  </div>
                </div>

                <!-- <div class="swiper-slide">
                  <div class="text-content-slide">
                    <div class="skew-div">
                      <h2 class="card-title-h2 koenigsegg-title">
                        Koenigsegg agera one: <span> 1 </span>
                      </h2>
                    </div>
                    <div class="overview-content-text">
                      <h6 class="overview-title">Overview</h6>
                      <p class="map-para overview-para">
                        Lorem Ipsum is simply dummy text of the printing &
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                      </p>
                    </div>
                    <div class="pricing-content-text">
                      <div class="icon-user-pricing">
                        <img
                          src="@/assets/images/carlistintg7Icon.png"
                          class="icon-user-img-pricing"
                          alt="icon"
                        />
                      </div>
                      <router-link
                        class="price-text-atag"
                       to="#"
                      >
                        2000000
                      </router-link>
                    </div>
                    <div class="car-details-content">
                      <div class="first-content-car-details">
                        <div class="model-list-content">
                          <p class="map-para overview-para-list">
                            Make & Model:
                          </p>
                          <p class="map-para overview-para-list">
                            Ford Agera One
                          </p>
                        </div>
                        <div class="model-list-content">
                          <p class="map-para overview-para-list">Year:</p>
                          <p class="map-para overview-para-list">2020</p>
                        </div>
                        <div class="model-list-content">
                          <p class="map-para overview-para-list">Trim Level:</p>
                          <p class="map-para overview-para-list">5</p>
                        </div>
                        <div class="model-list-content">
                          <p class="map-para overview-para-list">Body Type:</p>
                          <p class="map-para overview-para-list">Sedan</p>
                        </div>
                        <div class="model-list-content">
                          <p class="map-para overview-para-list">Mileage:</p>
                          <p class="map-para overview-para-list">115,500Km</p>
                        </div>
                        <div class="model-list-content">
                          <p class="map-para overview-para-list">Engine:</p>
                          <p class="map-para overview-para-list">876987</p>
                        </div>
                      </div>
                      <div class="first-content-car-details">
                        <div class="model-list-content">
                          <p class="map-para overview-para-list">
                            Horsepower & torque
                          </p>
                          <p class="map-para overview-para-list">
                            373Kw(507Hp)
                          </p>
                        </div>
                        <div class="model-list-content">
                          <p class="map-para overview-para-list">
                            Transmission
                          </p>
                          <p class="map-para overview-para-list">2020</p>
                        </div>
                        <div class="model-list-content">
                          <p class="map-para overview-para-list">Drivetrain</p>
                          <p class="map-para overview-para-list">FWD</p>
                        </div>
                        <div class="model-list-content">
                          <p class="map-para overview-para-list">Color</p>
                          <p class="map-para overview-para-list">Black</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> -->
                <!-- Add more slides as needed -->
              </div>
              <div class="swiper-button-prev content-prev"></div>
              <div class="swiper-button-next content-next"></div>
              <div class="swiper-pagination content-pagination"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
// Import swiper js
import Swiper from "swiper";

//Import Swiper styles
import "swiper/swiper-bundle.css";

//Import Swiper modules
import { Pagination, Navigation } from "swiper/modules";
import logo1 from "../assets/images/cars_logos/26.png"
import carlogo1 from "../assets/images/cars_logos/26.png"
import Image2 from "@/assets/images/d722fc518c6127ea183d184e5dc715e3.png";
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
import Viewer from "viewerjs";
import "viewerjs/dist/viewer.css";
// Install Swiper modules
Swiper.use([Pagination, Navigation]);

export default {
  name: "CarsListingDetails",
  data() {
    return {
      viewer: null,
      carlogo1,
      meter,
      date,
      dollar,
      Image2,
      gasoline,
      gear,
      location,
      race,
      road,
      share,
      badge,
      images: [
        "10_2021_koenigsegg_jesko.png",
        "10_2021_koenigsegg_jesko.png",
        "10_2021_koenigsegg_jesko.png",
        "10_2021_koenigsegg_jesko.png",
      ],
      form: {
        name: "",
        email: "",
        phone: "",
        message: "",
        terms: false,
      },
      cars: [
        {
          make: "Ford",
          model: "Agera One",
          logo: logo1,
          page1: [
            { label: "Build Type", value: "Sedan" },
            { label: "Price", value: "$50,000" },
            { label: "Mileage", value: "115,500Km" },
            { label: "Fuel Type", value: "Petrol" },
            { label: "Color", value: "Black" },
            { label: "Category", value: "Saloon" },
          ],
          page2: [
            { label: "Transmission Type", value: "Automatic" },
            { label: "Horsepower", value: "500 HP" },
            { label: "Torque", value: "400 Nm" },
            { label: "Engine Configuration", value: "V8" },
            { label: "Engine Capacity", value: "3.5L" },
            { label: "Drive Train", value: "AWD" },
            { label: "Transmission", value: "8-speed" },
          ],
          page3: [
            { label: "Previous Owners", value: "2" },
            { label: "Car Version", value: "2021" },
            { label: "Drive Side", value: "Left-Hand Drive" },
            { label: "Country", value: "USA" },
            { label: "City", value: "New York" },
          ],
        },
      ],
    };
  },
  mounted() {
    this.viewer = new Viewer(this.$refs.viewerContainer, {

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
    this.$nextTick(() => {
      // Initialize Swiper
      new Swiper(".swiper-container.swiper-width", {
        slidesPerView: 1,
        spaceBetween: 10,
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
    });

    this.$nextTick(() => {
      // Initialize Swiper
      new Swiper(".swiper-container.content-swiper-container", {
        slidesPerView: 1,
        spaceBetween: 10,
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
    });

  },
  methods: {
    openViewer(index) {
      this.viewer.view(index); // Open the clicked image in full size
    },
  },
};
</script>

<style scoped>
.swiper-button-prev:after,
.swiper-button-next:after {
  font-size: 12px !important;
  color: #fff !important
}

.swiper-button-prev {
  left: 54px
}

.content-swiper-container>.content-next:after,
.content-prev:after {
  font-size: 12px !important;
  color: #000 !important;
}

.content-swiper-container>.content-next {
  left: unset !important;
}

.content-swiper-container>.content-prev {
  left: 276px !important;
}

.coloor {
  color: #f95f19;
}

.form-Input {
  border: 1px solid #f95f19 !important;
}

.btn-link {
  position: absolute;
  right: 63px;
  top: 150px;
  color: #f95f19 !important;
  font-size: 20px;
  z-index: 999;
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

.z-5 {
  z-index: 5;
}

.h5-title span {
  color: #f95f19
}

.swiper-button-prev.content-prev,
.swiper-button-next.content-next {
  bottom: 104px !important;
}

.car-details-content {
  justify-content: space-between !important
}
</style>
