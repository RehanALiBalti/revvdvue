<template>
  <section class="banner-section-car-listing mb-5">
    <div class="container-fluid h-100">
      <div class="row h-100">
        <div class="col-md-5">
          <div class="swiper-container swiper-width">
            <div class="swiper-wrapper">
              <div v-for="(image, index) in images" :key="index" class="swiper-slide swiper-adjustment">
                <img :src="require(`@/assets/images/${image}`)" class="slider-img car-image-slider2" alt="car" />
              </div>
              <!-- Add more slides as needed -->
            </div>
            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>
            <div class="swiper-pagination"></div>
          </div>
        </div>
        <div class="col-md-7">
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
// Install Swiper modules
Swiper.use([Pagination, Navigation]);

export default {
  name: "CarsListingDetails",
  data() {
    return {
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
</style>
