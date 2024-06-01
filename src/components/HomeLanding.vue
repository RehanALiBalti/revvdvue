<template>


  <div class="container my-5">
    <div class="banner-content">
      <h1 class="banner-title">{{ $t('changingTheCarWorld') }}</h1>
      <p class="banner-para">
        {{ $t('ultimateHub') }} {{ $t('oneStopShop') }}

      </p>
    </div>
  </div>

  <div class="container my-5">
    <div class="main-content-home1">
      <div class="logo-R-div">
        <img class="logo-R" src="@/assets/images/Group888.png" alt="R" />
      </div>

      <div class="list-item-btn position-relative start-engine-div">
        <span class="border-bottom-btn border-top-btn position-absolute">
          <img src="@/assets/images/Group12engine.png" class="img-border position-absolute" alt="" />
        </span>

        <span class="border-bottom-btn border-top-btn border-right-radius position-absolute">
          <img src="@/assets/images/Path467engine.png" class="img-border position-absolute" alt="" />
        </span>

        <span class="border-bottom-btn border-top-btn border-right-radius border-right-bottom-radius position-absolute">
          <img src="@/assets/images/Path465engine.png" class="img-border position-absolute" alt="" />
        </span>
        <router-link to="/offer" class="signin-btnli Start Engine mx-auto">
          {{ $t('startEngine') }}
        </router-link>
        <span class="border-bottom-btn border-left-btn position-absolute">
          <img src="@/assets/images/Group11engine.png" class="img-border position-absolute" alt="" />
        </span>
        <span class="border-bottom-btn position-absolute">
          <img src="@/assets/images/Path473engine.png" class="img-border position-absolute" alt="" />
        </span>
      </div>
    </div>
  </div>

  <div class="container my-5">
    <div class="modal show d-block modalaa" tabindex="-1" role="dialog" id="carShopFilter" v-if="isModalOpen === true">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-body text-center">
            <!-- <router-link to="/offer"> <span class="close-icon" aria-label="Close">
                <i class="fas fa-times"></i>
              </span></router-link> -->
            <form>
              <div class="mt-4 py-2">
                <h5 class="card-title"><span class="choose"> {{ $t('filters') }} </span></h5>
              </div>
              <div class="row">

                <div class="col-md-6 z-0 ">
                  <div class="mt-2   d-flex justify-content-center align-items-center ">



                    <select v-model="filters.make" class="form-select" @change="filterStories">
                      <option value="">Select Make</option>
                      <option v-for="make in makes" :key="make" :value="make">{{ make }}</option>
                    </select>


                  </div>
                </div>

                <div class="col-md-6 z-0">
                  <div class="mt-2  d-flex justify-content-center align-items-center  ">

                    <select v-model="filters.make" class="form-select" @change="filterStories">
                      <option value="">Select Modal</option>
                      <option v-for="make in makes" :key="make" :value="make">{{ make }}</option>
                    </select>
                  </div>
                </div>



                <div class="col-md-6 z-0">



                  <div class="mt-2 d-flex justify-content-center align-items-center   ">


                    <select v-model="filters.make" class="form-select" @change="filterStories">
                      <option value="">Select Year</option>
                      <option v-for="make in makes" :key="make" :value="make">{{ make }}</option>
                    </select>

                  </div>

                </div>


                <div class="col-md-6 m-auto z-0">
                  <div class="load-more-info w-100 d-flex justify-content-start align-items-center mb-4 mx-auto mt-2">
                    <div class="list-item-btn position-relative load-more-div proceed-div mx-auto">
                      <span class="border-bottom-btn border-top-btn position-absolute">
                        <img src="@/assets/images/Group12engine.png" class="img-border position-absolute" alt="" />
                      </span>

                      <span class="border-bottom-btn border-top-btn border-right-radius popup-right position-absolute">
                        <img src="@/assets/images/Path467engine.png" class="img-border position-absolute" alt="" />
                      </span>

                      <span
                        class="border-bottom-btn border-top-btn border-right-radius border-right-bottom-radius popup-right-bottom position-absolute">
                        <img src="@/assets/images/Path465engine.png" class="img-border position-absolute" alt="" />
                      </span>
                      <!-- data-bs-toggle="modal" -->
                      <button class="signin-btnli Start Engine load-more-btn proceed-btn width-set"
                        data-bs-target="#mailModal">
                        {{ $t('proceed') }}
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
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div class="form-content-home1">
      <!-- action="#" method="POST" data-bs-toggle="modal" -->
      <form id="subscribe-form" @submit.prevent="submitForm">
        <h2 class="form-title">
          {{ $t('Share your story !') }}
          <span class="form-span">{{ $t('Now') }} !</span>
        </h2>
        <div class="row">
          <div class="col-md-12">
            <label for="name" class="form-label"> Tell us your car story together. </label>
            <input v-model="formData.email" id="email" type="email" name="email" class="form-control form-input"
              :placeholder="$t('Enter here')" />

          </div>
          <div class="col-md-12">
            <label for="name" class="form-label"> Can you tell us about any modifications you made to your car
              or any specific features ? </label>
            <input v-model="formData.email" id="email" type="email" name="email" class="form-control form-input"
              :placeholder="$t('Enter here')" />

          </div>
          <div class="col-md-12">
            <label for="email" class="form-label"> Can you share with us any memorable stories or adventures you’ve had
              with your car that stands out the most? </label>
            <input v-model="formData.email" id="email" type="email" name="email" class="form-control form-input"
              :placeholder="$t('Enter here')" />
            <!-- Error message for Email -->
            <!-- <p class="text-danger" v-if="!formData.email">{{ $t('enterEmailAddress') }}</p> -->
            <!-- <p class="text-danger" v-else-if="!isEmailValid">Please enter a valid email address</p> -->
          </div>
          <div class="col-md-12">
            <label for="phone" class="form-label"> If you could give advice to someone just starting their journey to
              modify their car, what would it be and why?</label>
            <input v-model="formData.phone" type="tel" id="phone" name="phone" class="form-control form-input"
              :placeholder="$t('Enter here')" />
            <!-- Error message for Phone -->
            <!-- <p class="text-danger" v-if="!formData.phone">${{ $t('enterPhoneNumber') }}</p> -->
            <!-- <p class="text-danger" v-else-if="!isPhoneValid">Please enter a valid phone number.</p> -->
          </div>
          <div class="col-md-12">
            <label for="country" class="form-label"> What is the name of your story that you would like to choose?
            </label>
            <input v-model="formData.phone" type="tel" id="phone" name="phone" class="form-control form-input"
              placeholder="I.e.Check out SG’s C63 black series build. " />
          </div>
          <div class="col-md-12">
            <label for="message" class="form-label">Add your social media link(s) </label>
            <textarea v-model="formData.message" id="message" class="form-control form-input h-auto" name="message"
              :placeholder="$t('Enter here')" rows="4"></textarea>
            <!-- Error message for Message -->
            <!-- <p class="text-danger" v-if="!formData.message">{{ $t('enterMessage') }}.</p> -->
          </div>
          <div class="col-md-6">
            <label for="city" class="form-label">Upload Pictures Max 8</label>
            <!-- <select class="form-select form-control form-input" id="city" onchange="fetchCities()">
							</select> -->
            <input type="file" id="city" name="city" class="form-control form-input" accepct="jgp,png" />
            <!-- Error message for City -->
            <!-- <p class="text-danger" v-if="!formData.city">P{{ $t('enterCity') }}.</p> -->
          </div>




          <div class="col-md-12">
            <div class="list-item-btn position-relative submit-btn-div">
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
              <button type="submit" class="signin-btnli submitNow" id="submit-button">
                {{ $t('submitNow') }}
              </button>
              <span class="border-bottom-btn border-left-btn position-absolute">
                <img src="@/assets/images/Group11.png" class="img-border position-absolute" alt="" />
              </span>
              <span class="border-bottom-btn position-absolute">
                <img src="@/assets/images/Path473.png" class="img-border position-absolute" alt="" />
              </span>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>

  <div class="modal fade" id="ignismyModal" tabindex="-1" role="dialog">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"
            @click="hideModal"></button>
        </div>
        <div class="modal-body">
          <div class="thank-you-pop">
            <img src="http://goactionstations.co.uk/wp-content/uploads/2017/03/Green-Round-Tick.png" alt="" />
            <h1>Thank You!</h1>
            <p>Your submission is received, and we will contact you soon</p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Footer -->
  <footer class="footer">
    <!-- Section: Links  -->
    <section class="">
      <div class="container text-center text-md-start mt-5">
        <!-- Grid row -->
        <div class="row mt-3">
          <!-- Grid column -->
          <div class="col-12 col-md-6 col-lg-4 col-xl-4 mb-4 position-relative">
            <div class="cardOverlay d-flex justify-content-start align-items-center flex-column pt-4">
              <img src="../../public/images/2.png">
            </div>
            <!-- Content -->
            <h5 class="h5-title text-capitalize mb-4">{{ $t('weeklyStory') }}</h5>
            <div class="car-content">
              <div class="img-div-footer">
                <img src="@/assets/images/94c8d99e3eceee3f64597db010958594.png" class="img-car" alt="car" />
              </div>
              <div class="car-content-desc">
                <h6 class="car-content-title">Koenigsegg agera one:1</h6>
                <p class="car-content-para">
                  Lorem 9. Ipsum is simply, dummy text is that, Warrington, WA4
                </p>
              </div>
            </div>

            <div class="footer-allDetails">
              <router-link class="viewall-content" to="">
                {{ $t('viewAllStories') }}
              </router-link>
            </div>

            <ul class="icons-list footer-icons-list my-5">
              <li class="icons-list-item">
                <router-link class="icons-list-atag" to="https://www.facebook.com/revvdout?mibextid=LQQJ4d"
                  target="_blank">
                  <i class="fab fa-facebook-f"></i>
                </router-link>
              </li>

              <li class="icons-list-item">
                <router-link class="icons-list-atag" to="https://twitter.com/revvdout" target="_blank">
                  <i class="fab fa-x-twitter"></i>
                </router-link>
              </li>

              <li class="icons-list-item">
                <router-link class="icons-list-atag" to="https://www.tiktok.com/@revvdout?_t=8mJOwpObgzW&_r=1"
                  target='_blank'>
                  <i class="fa-brands fa-tiktok"></i>
                </router-link>
              </li>
              <li class="icons-list-item">
                <router-link class="icons-list-atag"
                  to="https://www.instagram.com/revvdout/?igshid=c2g3bzQ0bTZsdHlk&amp;utm_source=qr" target='_blank'>
                  <i class="fab fa-instagram"></i>
                </router-link>
              </li>
            </ul>
          </div>
          <!-- Grid column -->

          <!-- Grid column -->
          <div class="col-12 col-md-6 col-lg-4 col-xl-4 mx-auto mb-4">
            <!-- Links -->
            <h5 class="h5-title text-capitalize mb-4">{{ $t('contactUs') }}:</h5>
            <div class="footer-loction-div">
              <svg xmlns="http://www.w3.org/2000/svg" class="footer-location-icon" width="12" height="17"
                viewBox="0 0 12 17">
                <path id="Icon_material-location-on" data-name="Icon material-location-on"
                  d="M13.5,3a5.971,5.971,0,0,0-6,5.95c0,4.463,6,11.05,6,11.05s6-6.587,6-11.05A5.971,5.971,0,0,0,13.5,3Zm0,8.075A2.125,2.125,0,1,1,15.643,8.95,2.135,2.135,0,0,1,13.5,11.075Z"
                  transform="translate(-7.5 -3)" fill="#f95f19" />
              </svg>
              <h6 class="footer-main-addresss">{{ $t('mainOfficeAddress') }}:</h6>
            </div>
            <p class="text-reset">
              Lorem 9. Ipsum is simply, dummy text is that, Warrington, WA4
            </p>

            <div class="footer-loction-div">
              <svg xmlns="http://www.w3.org/2000/svg" class="footer-location-icon" width="16" height="16"
                viewBox="0 0 16 16">
                <path id="Icon_ionic-ios-time" data-name="Icon ionic-ios-time"
                  d="M11.375,3.375a8,8,0,1,0,8,8A8,8,0,0,0,11.375,3.375Zm.538,8.692a.54.54,0,0,1-.538.538H7.683a.538.538,0,1,1,0-1.077h3.154V6.452a.538.538,0,0,1,1.077,0Z"
                  transform="translate(-3.375 -3.375)" fill="#f95f19" />
              </svg>
              <h6 class="footer-main-addresss">{{ $t('openingHours') }}</h6>
            </div>

            <div class="footer-loction-div">
              <svg xmlns="http://www.w3.org/2000/svg" class="footer-location-icon" width="18" height="14.4"
                viewBox="0 0 18 14.4">
                <path id="Icon_material-email" data-name="Icon material-email"
                  d="M19.2,6H4.8A1.8,1.8,0,0,0,3.009,7.8L3,18.6a1.805,1.805,0,0,0,1.8,1.8H19.2A1.805,1.805,0,0,0,21,18.6V7.8A1.805,1.805,0,0,0,19.2,6Zm0,3.6L12,14.1,4.8,9.6V7.8L12,12.3l7.2-4.5Z"
                  transform="translate(-3 -6)" fill="#f95f19" />
              </svg>
              <h6 class="footer-main-addresss">example@info.com</h6>
            </div>

            <div class="footer-loction-div">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                <path id="Icon_awesome-phone-alt" data-name="Icon awesome-phone-alt"
                  d="M15.544,11.307l-3.5-1.5a.75.75,0,0,0-.875.216l-1.55,1.894A11.583,11.583,0,0,1,4.081,6.379l1.894-1.55a.748.748,0,0,0,.216-.875l-1.5-3.5A.755.755,0,0,0,3.831.019L.581.769A.75.75,0,0,0,0,1.5,14.5,14.5,0,0,0,14.5,16a.75.75,0,0,0,.731-.581l.75-3.25a.759.759,0,0,0-.438-.863Z"
                  transform="translate(0 0)" fill="#f95f19" />
              </svg>
              <h6 class="footer-main-addresss">+0-000-000-0000</h6>
            </div>
          </div>
          <!-- Grid column -->

          <!-- Grid column -->
          <div class="col-12 col-md-6 col-lg-4 col-xl-4 mx-auto mb-4">
            <!-- Links -->
            <h5 class="h5-title text-capitalize mb-4">{{ $t('information') }}:</h5>
            <p>
              <router-link to="#!" class="footer-main-addresss">{{ $t('home') }}</router-link>
            </p>
            <p>
              <router-link to="#!" class="footer-main-addresss">{{ $t('aboutUs') }}</router-link>
            </p>
            <p>
              <router-link to="#!" class="footer-main-addresss">{{ $t('carListing') }}</router-link>
            </p>
            <p>
              <router-link to="#!" class="footer-main-addresss">{{ $t('faq') }}</router-link>
            </p>
            <p>
              <router-link to="#!" class="footer-main-addresss">{{ $t('contactUs') }}</router-link>
            </p>
          </div>
          <!-- Grid column -->
        </div>
        <!-- Grid row -->
      </div>
    </section>
    <!-- Section: Links  -->


  </footer>
  <!-- Footer -->
</template>

<script>

export default {
  name: "HomeLanding",

  data() {
    return {
      filters: {
        make: '',
        model: '',
        year: ''
      },
      isModalOpen: true,
      formData: {
        userType: "",
        email: "",
        phone: "",
        country: "",
        city: "",
        message: "",
        acceptCondition: false,
        errorMessage: "",
      },
      //   showModal: false,
    };
  },
  methods: {
    handleStorageChange(event) {
      if (event.key === 'login') {
        this.isLogin = JSON.parse(event.newValue);
      }
    },
    // submitForm() {
    //   //Reset error message
    //   this.errorMessage = "";

    //   //Validate userType
    //   if (this.formData.userType === "") {
    //     this.formData.errorMessage = "Please select a user type";
    //     return;
    //   }

    //   // Validate email
    //   const emailRegex = /^\S+@\S+\.\S+$/;
    //   if (this.formData.email === "") {
    //     this.formData.errorMessage = "Please enter your email address";
    //     return;
    //   } else if (!emailRegex.test(this.formData.email)) {
    //     this.formData.errorMessage = "please enter a valid email address";
    //     return;
    //   }

    //   //validate phone
    //   const phoneRegex = /^\+?(\d.*){3,}$/;
    //   if (this.formData.phone === "") {
    //     this.formData.errorMessage = "Please enter your phone number.";
    //     return;
    //   } else if (!phoneRegex.test(this.formData.phone)) {
    //     this.formData.errorMessage = "Please enter a valid phone number.";
    //     return;
    //   }

    //   // Validate country
    //   if (this.formData.country === "") {
    //     this.formData.errorMessage = "Please enter your country.";
    //   }

    //   // Validate city
    //   if (this.formData.city === "") {
    //     this.formData.errorMessage = "Please enter your city.";
    //     return;
    //   }
    //   // Validate message
    //   if (this.formData.message === "") {
    //     this.formData.errorMessage = "Please enter your message.";
    //     return;
    //   }

    //   // Validate acceptCondition
    //   if (!this.formData.acceptCondition) {
    //     this.formData.errorMessage = "Please accept the terms and conditions.";
    //     return;
    //   }

    //   // For demonstration purposes, let's just log the form data
    //   console.log("Form submitted successfully!");
    //   console.log("Form data:", this.formData);

    //   // Open the modal after successful form submission
    //   this.showModal();
    // },
    submitForm() {
      // Reset error message
      this.formData.errorMessage = "";

      // Validate userType
      if (this.formData.userType === "") {
        this.formData.errorMessage = "Please select a user type";
        return;
      }

      // Validate email
      const emailRegex = /^\S+@\S+\.\S+$/;
      if (this.formData.email === "") {
        this.formData.errorMessage = "Please enter your email address";
        return;
      } else if (!emailRegex.test(this.formData.email)) {
        this.formData.errorMessage = "Please enter a valid email address";
        return;
      }

      // Validate phone
      const phoneRegex = /^\+?(\d.*){3,}$/;
      if (this.formData.phone === "") {
        this.formData.errorMessage = "Please enter your phone number.";
        return;
      } else if (!phoneRegex.test(this.formData.phone)) {
        this.formData.errorMessage = "Please enter a valid phone number.";
        return;
      }

      // Validate country
      if (this.formData.country === "") {
        this.formData.errorMessage = "Please select your country.";
        return;
      }

      // Validate city
      if (this.formData.city === "") {
        this.formData.errorMessage = "Please enter your city.";
        return;
      }

      // Validate message
      if (this.formData.message === "") {
        this.formData.errorMessage = "Please enter your message.";
        return;
      }

      // Validate acceptCondition
      if (!this.formData.acceptCondition) {
        this.formData.errorMessage = "Please accept the terms and conditions.";
        return;
      }

      // If all validations pass, you can proceed with form submission
      console.log("Form submitted successfully!");
      console.log("Form data:", this.formData);

      // Open the modal after successful form submission
      this.showModal();
    },

    // Method to show the modal
    showModal() {
      var modal = document.getElementById("ignismyModal");
      if (modal) {
        modal.style.display = "block";
        modal.classList.add("show"); // Use 'classList' instead of 'classlist'
        // setTimeout(() => {
        //   this.hideModal(); // Use 'this' to refer to the component's instance
        // }, 2000); // Hide modal after 2 seconds
      }
    },
    // Method to hide the modal
    hideModal() {
      var modal = document.getElementById("ignismyModal");
      if (modal) {
        modal.style.display = "none";
        modal.classList.remove("show"); // Use 'classList' instead of 'classlist'
      }
    },
  },
  mounted() {

    window.addEventListener('storage', this.handleStorageChange);


  },
  beforeUnmount() {

    window.removeEventListener('storage', this.handleStorageChange); // Remove the event listener
  },
};

</script>

<style scoped>
@import "vue-select/dist/vue-select.css";

.modalaa {
  position: static !important;
  background: transparent !important;
}


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
  background-color: transparent;
  background-clip: padding-box;
  border: 1px solid #1a202c;
  border-radius: 5px;
  outline: 0;
  box-shadow: rgba(28, 30, 63, 0.4) 0px 30px 90px;
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


.alertbg {
  background: #FF7A00;
  color: #fff;
}

.getAll {
  background: #5D3327 !important;
  color: #fff
}

.genCard .singleGen {
  cursor: pointer;
  marker: none;
  width: 100%;
}

.genCard .singleGen:hover {
  background: #f95f19;
  color: #fff
}

.borderBr {
  border: 1px solid #f95f19;
  width: 100% !important;
  border-radius: 10px;
}

/* new */

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
  position: static;
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
  min-height: fit-content;
  max-height: 300px;
  overflow-y: scroll;
  color: #fff;
  transition: height 0.5s ease-in-out
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
</style>

<style scoped>
.form-control.form-input.h-auto {
  height: auto !important;
}

.form-check-input {
  box-shadow: 2px 3px 6px rgba(0, 0, 0, 1.1);
  position: relative;

  cursor: pointer;
  background-color: #f95f19 !important;
  border: none !important;
}

.modal {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1060;
  display: none;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  outline: 0;
  background-color: rgba(0, 8, 20, 0.9);
}

.modal-dialog {
  width: 100%;
  max-width: 1000px;
  margin: 1.75rem auto;
  position: relative;
  top: 15%;
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

.modal-header {
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1rem;
  border-bottom: 1px solid #dee2e6;
  border-top-left-radius: calc(.3rem - 1px);
  border-top-right-radius: calc(.3rem - 1px);
}

.thank-you-pop {
  width: 100%;
  padding: 20px;
  text-align: center;
}

.thank-you-pop img {
  width: 76px;
  height: auto;
  margin: 0 auto;
  display: block;
  margin-bottom: 25px;
}

.thank-you-pop h1 {
  font-size: 42px;
  margin-bottom: 25px;
  color: #ffffff;
}

.thank-you-pop p {
  font-size: 20px;
  margin-bottom: 27px;
  color: #ffffff;
}

.btn-close {
  box-sizing: content-box;
  width: 1em;
  height: 1em;
  padding: 0.25em 0.25em;
  color: #fff;
  background: #fff url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23000'%3e%3cpath d='M.293.293a1 1 0 011.414 0L8 6.586 14.293.293a1 1 0 111.414 1.414L9.414 8l6.293 6.293a1 1 0 01-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 01-1.414-1.414L6.586 8 .293 1.707a1 1 0 010-1.414z'/%3e%3c/svg%3e") center/1em auto no-repeat;
  border: 0;
  border-radius: 0.25rem;
  opacity: 1;
}

.cardOverlay {

  position: absolute;
  height: 65%;
  width: 96%;

  /* background: url('../../public/images/layer2.png');
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), */
  /* Background image */
  /* url('../../public/images/layer1.png'); */
  opacity: 0.9;
  /* background-size: cover; */
  z-index: 4
}

.cardOverlay img {
  position: absolute;
  width: 100%;
  top: 0;
  height: 100%
}

@media screen and (max-width: 991px) {

  div.start-engine-div .border-bottom-btn.border-top-btn.border-right-radius .img-border {
    left: 91px;
  }


}

@media(max-width:768px) {
  .cardOverlay img {
    height: 100%;
  }
}

@media(max-width:375px) {
  .cardOverlay img {
    height: 89%;
  }
}
</style>
