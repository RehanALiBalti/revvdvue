<template>
  <div class="banner-section-car-listing2 d-flex justify-content-center align-items-center">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-5">

          <Swiper :modules="[Navigation, EffectFade]" effect="fade" :fadeEffect="{ crossFade: true }"
            :space-between="20" :breakpoints="{
              0: { slidesPerView: 1 },
              768: { slidesPerView: 1 },
              1200: { slidesPerView: 1 }
            }" navigation class="mySwiper h-100">
            <!-- ✅ Slide 1 -->
            <SwiperSlide>

              <img class="img-car" src="../assets/images/im1.png" alt="" />

            </SwiperSlide>

            <!-- ✅ Slide 2 – put completely different details here -->
            <SwiperSlide>
              <img class="img-car" src="../assets/images/im1.png" alt="" />
            </SwiperSlide>


          </Swiper>
        </div>
        <div class="col-md-7 ">
          <div class="position-relative">
            <div class="d-flex justify-content-end position-absolute top-0 w-100">
              <div class="d-flex gap-3 align-items-center">
                <router-link to="/cardetails">
                  <img :src="sicon" width="35px" alt="">
                </router-link>
                <img :src="badge" width="25px" alt="">
                <!-- <img :src="share" width="25px" height="25px" alt=""> -->

              </div>
            </div>
          </div>

          <Swiper :modules="[Navigation]" :space-between="20" :breakpoints="{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 1 },
            1200: { slidesPerView: 1 }
          }" navigation class="mySwiper h-100">
            <!-- ✅ Slide 1 -->
            <SwiperSlide>

              <div class="h-100 w-100 d-flex align-items-center justify-content-center">
                <div class="w-75">

                  <p class="text-center fot-1">Mercedes C63s AMG</p>
                  <div class="d-flex justify-content-between mb-3">
                    <p class="fot-3">Price: 250,000 $</p>
                    <p class="fot-3">Year: 2020</p>
                    <p class="fot-3"><img :src="date" width="30px" />13.02.2025</p>
                  </div>
                  <div class="px-2">
                    <div class="row">
                      <div class="col-4">
                        <div class="d-flex align-items-center gap-2 my-2">
                          <span class="icon"><img :src="meter" /></span>
                          <p class="fot-2">700 HP</p>
                        </div>
                      </div>
                      <div class="col-4">
                        <div class="d-flex align-items-center gap-2 my-2">
                          <span class="icon"><img :src="meter" /></span>
                          <p class="fot-2">Automatic</p>
                        </div>
                      </div>
                      <div class="col-4">
                        <div class="d-flex align-items-center gap-2">
                          <span class="icon"><img :src="race" /></span>
                          <p class="fot-2">Street</p>
                        </div>
                      </div>
                    </div>
                    <div class="d-flex justify-content-between flex-wrap my-2 row">
                      <div class="col-4">
                        <div class="d-flex align-items-center gap-2">
                          <span class="icon">
                            <img :src="road" />
                          </span>
                          <p class="fot-2">30,000 Km</p>
                        </div>
                      </div>
                      <div class="col-4">
                        <div class="d-flex align-items-center gap-2">
                          <span class="icon"><img :src="gasoline" /></span>
                          <p class="fot-2">Gasoline</p>
                        </div>
                      </div>
                      <div class="col-4">
                        <div class="d-flex align-items-center gap-2">
                          <span class="icon"><img :src="gear" /></span>
                          <p class="fot-2">Black</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </SwiperSlide>

            <!-- ✅ Slide 2 – put completely different details here -->
            <SwiperSlide>

              <div class="h-100 w-100 d-flex align-items-center justify-content-center">
                <div class="w-75">

                  <p class="text-center fot-1">Mercedes C63s AMG</p>
                  <div class="d-flex justify-content-between mb-3">
                    <p class="fot-3">Engine: V8</p>
                    <p class="fot-3">Capacity: 4L</p>
                    <p class="fot-3">US Version</p>
                  </div>
                  <div class="px-2">
                    <div class="row my-2">
                      <div class="col-4">
                        <div class="d-flex align-items-center gap-2">
                          <span class="icon"><img :src="meter" /></span>
                          <p class="fot-2">1000 Nm</p>
                        </div>
                      </div>
                      <div class="col-4">
                        <div class="d-flex align-items-center gap-2 ">
                          <span class="icon"><img :src="meter" /></span>
                          <p class="fot-2">RWD</p>fa-arrow-up-right-from-square text-w
                        </div>
                      </div>
                      <div class="col-4">
                        <div class="d-flex align-items-center gap-2">
                          <span class="icon"><img :src="race" /></span>
                          <p class="fot-2">Germany</p>
                        </div>
                      </div>
                    </div>
                    <div class="d-flex justify-content-between flex-wrap my-2 row">
                      <div class="col-4">
                        <div class="d-flex align-items-center gap-2">
                          <span class="icon">
                            <img :src="road" />
                          </span>
                          <p class="fot-2">2 Owners</p>
                        </div>
                      </div>
                      <div class="col-4">
                        <div class="d-flex align-items-center gap-2">
                          <span class="icon"><img :src="gasoline" /></span>
                          <p class="fot-2">L Hand drive</p>
                        </div>
                      </div>
                      <div class="col-4">
                        <div class="d-flex align-items-center gap-2">
                          <span class="icon"><img :src="gear" /></span>
                          <p class="fot-2">Berlin</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </SwiperSlide>
            <SwiperSlide>
              <div class="px-5">
                <h2 class="card-title-h2 fot-1 text-black">Make an Enquiry </h2>
                <form @submit.prevent="submitInquiry" class="row g-2 me-3">
                  <div class="col-md-6">
                    <input class="form-control form-Input h35px" type="text" v-model="form.name" placeholder="Name"
                      required />
                  </div>
                  <div class="col-md-6">
                    <input class="form-control form-Input h35px" type="email" v-model="form.email" placeholder="Email"
                      required />
                  </div>
                  <div class="col-md-6">
                    <input class="form-control form-Input h35px" type="tel" v-model="form.phone" placeholder="Phone"
                      required />
                  </div>
                  <div class="col-md-12">
                    <textarea class="form-control form-Input h35px" v-model="form.message"
                      placeholder="Message"></textarea>
                  </div>


                  <label class="text-align-start">
                    <input class="form-check-input border-0 me-2" type="checkbox" v-model="form.terms" />
                    Accept Terms & Conditions
                  </label>
                  <div class="col-md-12">
                    <div class="load-more-info w-100 d-flex justify-content-start align-items-center mb-4 mx-auto">
                      <div class="list-item-btn position-relative load-more-div proceed-div mx-auto">
                        <span class="border-bottom-btn border-top-btn position-absolute">
                          <img src="@/assets/images/Group12engine.png" class="img-border position-absolute" alt="" />
                        </span>

                        <span
                          class="border-bottom-btn border-top-btn border-right-radius popup-right position-absolute">
                          <img src="@/assets/images/Path467engine.png" class="img-border position-absolute" alt="" />
                        </span>

                        <span
                          class="border-bottom-btn border-top-btn border-right-radius border-right-bottom-radius popup-right-bottom position-absolute">
                          <img src="@/assets/images/Path465engine.png" class="img-border position-absolute" alt="" />
                        </span>
                        <!-- data-bs-toggle="modal" -->
                        <button type="submit"
                          class="signin-btnli Start Engine load-more-btn proceed-btn width-set bg-orang"
                          id="submit-button">
                          Submit
                        </button>
                        <span class="border-bottom-btn border-left-btn new-popup position-absolute">
                          <img src="@/assets/images/Group11engine.png" class="img-border position-absolute" alt="" />
                        </span>
                        <span class="border-bottom-btn position-absolute">
                          <img src="@/assets/images/Path473engine.png" class="img-border position-absolute" alt="" />
                        </span>
                      </div>
                    </div>

                  </div>
                </form>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div class="row justify-content-center">
                <div class="col-md-10 mt-4">
                  <div class="card card-bg my-2 ">
                    <div class="d-flex justify-content-start w-100 position-relative z-5">
                      <div class="badgecar">Premium</div>
                    </div>
                    <div class="row mx-1 my-3">
                      <div class="col-6 col-md-3 align-self-center">
                        <img class="w-100" :src="Image2" height="130px" width="150px" />
                      </div>
                      <div class="col-6 col-md-1 align-self-center ">
                        <!-- <img class="img-fluid" :src="carlogo1" /> -->
                      </div>
                      <div class="col-12 col-md-8">
                        <div class="d-flex justify-content-end">
                          <div class="d-flex align-items-center gap-2">
                            <img :src="share" width="25px" />
                            <img :src="badge" width="25px" />
                          </div>
                        </div>
                        <div class="card-m-h">
                          <p class="car-title">Mercedes <span>AMG GT63s 4 door</span></p>
                          <div class="row my-1">
                            <div class="col-12 col-md-4">
                              <p class="car-sec-text"> Price:<span>$</span> 250,000 </p>
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
            </SwiperSlide>


          </Swiper>
        </div>
      </div>
    </div>

  </div>

</template>
<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
// import logo1 from "../assets/images/cars_logos/26.png"
// import carlogo1 from "../assets/images/cars_logos/26.png"
import Image2 from "@/assets/images/d722fc518c6127ea183d184e5dc715e3.png";
import meter from "../assets/images/icons/meter.png"
import date from "../assets/images/icons/date.png"
// import dollar from "../assets/images/icons/dollar.png"
import gasoline from "../assets/images/icons/gasoline.png"

import gear from "../assets/images/icons/gear.png"
import sicon from "../assets/images/icons/linkimg.png"
import location from "../assets/images/icons/location.png"
import race from "../assets/images/icons/race.png"
import road from "../assets/images/icons/road.png"
import share from "../assets/images/icons/share.png"
import badge from "../assets/images/icons/badge.png"
// import badge from "../assets/images/icons/badge.png"
import { reactive } from "vue";

const form = reactive({
  name: "",
  email: "",
  phone: "",
  message: "",
  terms: false
});

</script>
<style scoped>
.img-car {
  width: 100%;
  height: auto;
  border: 5px solid #000
}

.swiper-button-next:after,
.swiper-rtl .swiper-button-prev:after {
  color: #fff !important;
}

.swiper-button-prev:after {
  color: #fff !important;
}

.icon img {
  width: 20px
}

.fot-1 {
  font-size: 25px;
}

.fot-2 {
  font-size: 16px;
  margin-bottom: 0;
  line-height: normal
}

.fot-3 {
  font-size: 20px;
  margin-bottom: 0
}

.card-bg {
  background-color: #031726cd !important;
  border-radius: 10px !important;
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

.car-title {
  color: #fff;
  text-align: start;
  font-size: 24px;
  margin: 0
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
</style>
