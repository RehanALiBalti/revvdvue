<template>
  <section class="banner-section-car-listing mb-5">
    <div class="container-fluid h-100">
      <div class="row h-100">
        <div class="col-md-5">
          <div class="swiper-container swiper-width">
            <div class="swiper-wrapper">
              <div
                v-for="(image, index) in images"
                :key="index"
                class="swiper-slide swiper-adjustment"
              >
                <img
                  :src="require(`@/assets/images/${image}`)"
                  class="slider-img car-image-slider2"
                  alt="car"
                />
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
            <div
              class="swiper-container content-swiper-container position-relative"
            >
              <div class="swiper-wrapper">
                <div
                  class="swiper-slide"
                  v-for="(car, index) in cars"
                  :key="index"
                >
                  <div class="text-content-slide">
                    <div class="skew-div">
                      <h2 class="card-title-h2 koenigsegg-title">
                        {{ car.title }} <span> {{ car.count }} </span>
                      </h2>
                    </div>
                    <div class="overview-content-text">
                      <h6 class="overview-title">Overview</h6>
                      <p class="map-para overview-para">
                        {{ car.overview }}
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
                        href="javascript:void(0);"
                      >
                        {{ car.price }}
                      </router-link>
                    </div>
                    <div class="car-details-content">
                      <div class="first-content-car-details">
                        <!-- <div class="model-list-content">
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
                        </div> -->
                        <div
                          class="model-list-content"
                          v-for="(detail, detailIndex) in car.details"
                          :key="detailIndex"
                        >
                          <p class="map-para overview-para-list">
                            {{ detail.label }}
                          </p>
                          <p class="map-para overview-para-list">
                            {{ detail.value }}
                          </p>
                        </div>
                      </div>
                      <div class="first-content-car-details">
                        <!-- <div class="model-list-content">
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
                        </div> -->
                        <div
                          class="model-list-content"
                          v-for="(detail, detailIndex) in car.detailsNew"
                          :key="detailIndex"
                        >
                          <p class="map-para overview-para-list">
                            {{ detail.label }}
                          </p>
                          <p class="map-para overview-para-list">
                            {{ detail.value }}
                          </p>
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
                        href="javascript:void(0);"
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
import { Pagination, Navigation } from "swiper";

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
      cars: [
        {
          title: "Koenigsegg agera one",
          count: 1,
          overview:
            "Lorem Ipsum is simply dummy text of the printing & typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
          price: 2000000,
          details: [
            {
              label: "Make & Model",
              values: "Ford Agera One",
            },
            {
              label: "Year",
              value: "2020",
            },
            {
              label: "Trim Level",
              value: "5",
            },
            {
              label: "Body Type",
              value: "Sedan",
            },
            {
              label: "Mileage",
              value: "115,500Km",
            },
            {
              label: "Engine",
              value: "876987",
            },
          ], // Close the 'details' array here
          detailsNew: [
            {
              label: "Horsepower & torque",
              value: "373Kw(507Hp)",
            },
            {
              label: "Transmission",
              value: "2020",
            },
            {
              label: "Drivetrain",
              value: "FWD",
            },
            {
              label: "Color",
              value: "Black",
            },
          ],
        },
        {
          title: "Koenigsegg agera one",
          count: 1,
          overview:
            "Lorem Ipsum is simply dummy text of the printing & typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
          price: 2000000,
          details: [
            {
              label: "Make & Model",
              value: "Ford Agera One",
            },
            {
              label: "Year",
              value: "2020",
            },
            {
              label: "Trim Level",
              value: "5",
            },
            {
              label: "Body Type",
              value: "Sedan",
            },
            {
              label: "Mileage",
              value: "115,500Km",
            },
            {
              label: "Engine",
              value: "876987",
            },
          ], // Close the 'details' array here
          detailsNew: [
            {
              label: "Horsepower & torque",
              value: "373Kw(507Hp)",
            },
            {
              label: "Transmission",
              value: "2020",
            },
            {
              label: "Drivetrain",
              value: "FWD",
            },
            {
              label: "Color",
              value: "Black",
            },
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
<style scoped></style>
