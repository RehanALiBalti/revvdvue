<template>
  <section class="section-car-listing">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="heading-car">
            <h1 class="banner-title">Our Cars Listing</h1>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="section-car-listing-breadcrumb">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <nav aria-label="breadcrumb" class="nav-breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item">
                <router-link class="breadcrumb-item-a-tag" to="/home"
                  >Home</router-link
                >
              </li>
              <li class="breadcrumb-item">
                <router-link class="breadcrumb-item-a-tag" to="#"
                  >Car Listing</router-link
                >
              </li>
              <li class="breadcrumb-item active" aria-current="page">Europe</li>
            </ol>
          </nav>
        </div>
      </div>
    </div>
  </section>

  <section class="car-filter-section my-5">
    <div class="container">
      <div class="row g-4">
        <div class="col-md-3">
          <div class="filter-box">
            <h4 class="filter-title">Filters</h4>
            <div class="row">
              <div class="col-12">
                <label for="models" class="form-label filter-label"
                  >Models</label
                >
                <select
                  v-model="selectedModel"
                  id="models"
                  class="form-select form-control form-input filter-select"
                >
                  <option value="">Any</option>
                  <option value="1">Model 1</option>
                  <option value="2">Model 2</option>
                </select>
              </div>

              <div class="col-12">
                <label for="bodyType" class="form-label filter-label"
                  >Body type</label
                >
                <select
                  v-model="selectedBodyType"
                  id="bodyType"
                  class="form-select form-control form-input filter-select"
                >
                  <option value="">Any</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                </select>
              </div>

              <div class="col-md-12 col-lg-6">
                <label for="min" class="form-label filter-label"
                  >Min Price</label
                >
                <select
                  v-model="selectedMinPrice"
                  id="min"
                  class="form-select form-control form-input filter-select"
                >
                  <option value="">Any</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                </select>
              </div>

              <div class="col-md-12 col-lg-6">
                <label for="max" class="form-label filter-label"
                  >Max Price</label
                >
                <select
                  v-model="selectedMaxPrice"
                  id="max"
                  class="form-select form-control form-input filter-select"
                >
                  <option value="">Any</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                </select>
              </div>

              <div class="col-12">
                <label for="fuelType" class="form-label filter-label"
                  >Fuel type</label
                >
                <select
                  v-model="selectedFuelType"
                  id="fuelType"
                  class="form-select form-control form-input filter-select"
                >
                  <option value="">Any</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                </select>
              </div>

              <div class="col-12">
                <label for="seats" class="form-label filter-label">Seats</label>
                <select
                  v-model="selectedSeats"
                  id="seats"
                  class="form-select form-control form-input filter-select"
                >
                  <option value="">Any</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                </select>
              </div>
            </div>
          </div>
          <div class="filter-image-div my-4">
            <img
              src="@/assets/images/Image18.png"
              class="img-fluid filter-image"
              alt="Image"
            />
          </div>
        </div>
        <div class="col-md-9 px-4">
          <div class="showing-filter-results mb-4">
            <div class="showing-div">
              <h6 class="showing-title mb-0">{{ showingText }}</h6>
            </div>
            <div class="sorting-div">
              <select
                v-model="selectedSorting"
                id="name"
                class="form-select form-control form-input sorting-select"
              >
                <option selected>Default Sorting</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
            </div>
          </div>

          <div
            v-for="(car, index) in displayedCars"
            :key="index"
            class="card-sorting-content"
          >
            <div class="main-slider">
              <div class="swiper-container carsListing-swiper-container">
                <div class="swiper-wrapper">
                  <div
                    v-for="(image, imageIndex) in car.images"
                    :key="imageIndex"
                    class="swiper-slide"
                  >
                    <img
                      :src="require(`@/assets/images/${image}`)"
                      class="slider-img"
                      alt="car"
                    />
                  </div>
                  <!-- Add more slides as needed -->
                </div>
              </div>

              <!-- <div class="card-sliders">
                            <img src="@/assets/images/d722fc518c6127ea183d184e5dc715e3.png" class="slider-img" alt="car">
                        </div> -->
              <div class="img-div-ford">
                <img
                  :src="require(`@/assets/images/${car.logo}`)"
                  class="img-ford"
                  alt="car"
                />
              </div>
              <div class="card-content-car">
                <div class="card-title-div">
                  <h2 class="card-title-h2">
                    {{ car.title }} <span> {{ car.number }} </span>
                  </h2>
                </div>
                <ul class="user-details-car">
                  <li
                    v-for="(detail, detailIndex) in car.details"
                    :key="detailIndex"
                    class="list-item-user"
                  >
                    <div class="icon-user">
                      <img
                        :src="require(`@/assets/images/${detail.icon}`)"
                        class="icon-user-img"
                        alt="icon"
                      />
                    </div>
                    <router-link
                      class="a-tag-name-user"
                      to="javascript:void(0);"
                    >
                      {{ detail.value }}
                    </router-link>
                  </li>
                </ul>
                <div class="view-more-cars">
                  <router-link
                    class="view-more-a-tag"
                    :to="'/carsdetails/' + car.id"
                    >View more</router-link
                  >
                </div>
              </div>
            </div>
          </div>

          <!-- pagination -->
          <nav class="float-end my-4" aria-label="Page navigation">
            <ul class="pagination">
              <li class="page-item" v-if="currentPage > 1">
                <button
                  class="page-link"
                  @click="prevPage"
                  aria-label="Previous"
                >
                  <span aria-hidden="true"
                    ><i class="fa-solid fa-chevron-left"></i
                  ></span>
                </button>
              </li>
              <li
                class="page-item"
                v-for="page in totalPage"
                :key="page"
                :class="{ active: page === currentPage }"
              >
                <button class="page-link" @click="goToPage(page)">
                  {{ page }}
                </button>
              </li>
              <li class="page-item" v-if="currentPage < totalPage">
                <button class="page-link" @click="nextPage" aria-label="Next">
                  <span aria-hidden="true"
                    ><i class="fa-solid fa-chevron-right"></i
                  ></span>
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
//Import swiper js
import Swiper from "swiper";

//Import Swiper styles
import "swiper/swiper-bundle.css";
//Import Swiper modules
import { Pagination, Navigation } from "swiper";
// Install Swiper modules
Swiper.use([Pagination, Navigation]);

export default {
  name: "CarsListing",
  data() {
    return {
      swiper: null,
      cars: [
        {
          images: [
            "d722fc518c6127ea183d184e5dc715e3.png",
            "4d9beb293371f584ff554839462adb20.png",
            "20210412111611_Ford_Territory_front.png",
            "4image.png",
            "images20(1).png",
            "36346b90e9ed41209ec6b093b61c21ef.png",
          ],
          id: 1,
          title: "Koenigsegg agera one:",
          number: 1,
          logo: "Image13Ford.png",
          details: [
            {
              icon: "IconAwesome-user-alt.png",
              value: "Daniyal Doe",
            },
            {
              icon: "engine.png",
              value: "2,000,000",
            },
            {
              icon: "Iconmaterial-email.png",
              value: "daniyaldoe@info.com",
            },
          ],
        },
        {
          images: [
            "d722fc518c6127ea183d184e5dc715e3.png",
            "4d9beb293371f584ff554839462adb20.png",
            "20210412111611_Ford_Territory_front.png",
            "4image.png",
            "images20(1).png",
            "36346b90e9ed41209ec6b093b61c21ef.png",
          ],
          id: 2,
          title: "Koenigsegg agera one:",
          number: 2,
          logo: "Image13Ford.png",
          details: [
            {
              icon: "IconAwesome-user-alt.png",
              value: "Daniyal Doe",
            },
            {
              icon: "engine.png",
              value: "2,000,000",
            },
            {
              icon: "Iconmaterial-email.png",
              value: "daniyaldoe@info.com",
            },
          ],
        },
        {
          images: [
            "20210412111611_Ford_Territory_front.png",
            "d722fc518c6127ea183d184e5dc715e3.png",
            "4d9beb293371f584ff554839462adb20.png",
            "4image.png",
            "images20(1).png",
            "36346b90e9ed41209ec6b093b61c21ef.png",
          ],
          id: 3,
          title: "Koenigsegg agera one:",
          number: 3,
          logo: "Image13Ford.png",
          details: [
            {
              icon: "IconAwesome-user-alt.png",
              value: "Daniyal Doe",
            },
            {
              icon: "engine.png",
              value: "2,000,000",
            },
            {
              icon: "Iconmaterial-email.png",
              value: "daniyaldoe@info.com",
            },
          ],
        },
        {
          images: [
            "4image.png",
            "20210412111611_Ford_Territory_front.png",
            "d722fc518c6127ea183d184e5dc715e3.png",
            "4d9beb293371f584ff554839462adb20.png",
            "images20(1).png",
            "36346b90e9ed41209ec6b093b61c21ef.png",
          ],
          id: 4,
          title: "Koenigsegg agera one:",
          number: 4,
          logo: "Image13Ford.png",
          details: [
            {
              icon: "IconAwesome-user-alt.png",
              value: "Daniyal Doe",
            },
            {
              icon: "engine.png",
              value: "2,000,000",
            },
            {
              icon: "Iconmaterial-email.png",
              value: "daniyaldoe@info.com",
            },
          ],
        },
        {
          images: [
            "images20(1).png",
            "4image.png",
            "20210412111611_Ford_Territory_front.png",
            "d722fc518c6127ea183d184e5dc715e3.png",
            "4d9beb293371f584ff554839462adb20.png",
            "36346b90e9ed41209ec6b093b61c21ef.png",
          ],
          id: 5,
          title: "Koenigsegg agera one:",
          number: 5,
          logo: "Image13Ford.png",
          details: [
            {
              icon: "IconAwesome-user-alt.png",
              value: "Daniyal Doe",
            },
            {
              icon: "engine.png",
              value: "2,000,000",
            },
            {
              icon: "Iconmaterial-email.png",
              value: "daniyaldoe@info.com",
            },
          ],
        },
        {
          images: [
            "36346b90e9ed41209ec6b093b61c21ef.png",
            "images20(1).png",
            "4image.png",
            "20210412111611_Ford_Territory_front.png",
            "d722fc518c6127ea183d184e5dc715e3.png",
            "4d9beb293371f584ff554839462adb20.png",
            "36346b90e9ed41209ec6b093b61c21ef.png",
          ],
          id: 6,
          title: "Koenigsegg agera one:",
          number: 6,
          logo: "Image13Ford.png",
          details: [
            {
              icon: "IconAwesome-user-alt.png",
              value: "Daniyal Doe",
            },
            {
              icon: "engine.png",
              value: "2,000,000",
            },
            {
              icon: "Iconmaterial-email.png",
              value: "daniyaldoe@info.com",
            },
          ],
        },
      ],
      selectedModel: "",
      selectedBodyType: "",
      selectedMinPrice: "",
      selectedMaxPrice: "",
      selectedFuelType: "",
      selectedSeats: "",
      selectedSorting: "Default Sorting",
      totalResults: 12,
      currentPage: 1,
      carsPerPage: 5, // Number of cars per page
    };
  },
  mounted() {
    // Initialize Swiper
    this.swiper = new Swiper(".carsListing-swiper-container", {
      // Optional parameters
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
  computed: {
    showingText() {
      return `Showing all ${this.totalResults} Results`;
    },
    displayedCars() {
      const startIndex = (this.currentPage - 1) * this.carsPerPage;
      const endIndex = startIndex + this.carsPerPage;
      return this.cars.slice(startIndex, endIndex);
    },
    totalPage() {
      return Math.ceil(this.cars.length / this.carsPerPage);
    },
  },
  methods: {
    // Methods to handle page navigation
    goToPage(page) {
      if (page >= 1 && page <= this.totalPage) {
        this.currentPage = page;
      }
    },
    nextPage() {
      if (this.currentPage < this.totalPage) {
        this.currentPage++;
      }
    },
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },
  },
};
</script>

<style scoped>
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
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAAMCAYAAACA0IaCAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAADiSURBVChTjZIBEcIwDEVbBeAAHAAOOgk4YA7ACShgFlDAHAAOkAAKxv9cwqWl3dq7XbMk/+03nR+GYe6cu+Lharz3L4knN2jXou2h23ok7kisRMm4CmhANMN1IuyJYGFsTALlNDdolkZ3IYxWezyzGqAZC3W6HgiC51sByDk0dnAF0JsOOesvbATYoamVul6UdURQQA9H434wEQTserP6nQ7BQfJF0B9MgDvsZ3s8xPxd9NZYihxpb+TMHDkH1HIWlHVWAdzojBL38czSIm4vddgCxBlmV/aYtlOAR+T2YyBqPrkMZFSDhkgfAAAAAElFTkSuQmCC);
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
select.form-select.form-control.form-input.sorting-select[data-v-790a69e5] {
  height: 37px !important;
  background-color: #1a202c !important;
  padding: 0 15px;
  background-position: right 0.75rem center;
  font-size: 11px !important;
  font-weight: 400;
  color: #ffffff !important;
  font-family: "Goldman", sans-serif !important;
}

.page-item.active .page-link {
  border: 1px solid #f95f19;
  background-color: #f95f19;
}

.page-link:focus {
    box-shadow: none;
}
</style>
