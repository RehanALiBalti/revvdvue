<template>

  <div class="container my-5">
    <div class="row">
      <div class="col-md-8 m-auto">
        <div class="form-content-home1">
          <form id="subscribe-form" @submit.prevent="submitForm">
            <h2 class="form-title">Sign <span class="form-span"> Up </span></h2>
            <!-- <div class="signIn-div my-5">
              <button class="btn google-btn">
                <i class="fa-brands fa-google-plus-g"></i> Google
              </button>
              <button class="btn google-btn">
                <i class="fa-brands fa-facebook"></i>Facebook
              </button>
              <button class="btn google-btn">
                <i class="fa-brands fa-apple"></i>Apple
              </button>
            </div> -->
            <div class="row">
              <div class="col-md-6">
                <label for="name" class="form-label">Name</label>
                <input id="name" type="text" v-model="formData.name" class="form-control form-input"
                  placeholder="Enter here" />
                <div v-if="formErrors.name" class="text-danger">
                  {{ formErrors.name }}
                </div>
              </div>
              <!-- <div class="col-md-6">
                <label for="age" class="form-label">Age</label>
                <input id="age" type="number" v-model="formData.age" class="form-control form-input"
                  placeholder="Enter here" />
                <div v-if="formErrors.age" class="text-danger">
                  {{ formErrors.age }}
                </div>
              </div> -->
              <div class="col-md-6">
                <label for="email" class="form-label">Email (verification)</label>
                <input id="email" type="email" v-model="formData.email" class="form-control form-input"
                  placeholder="Enter here" />
                <div v-if="formErrors.email" class="text-danger">
                  {{ formErrors.email }}
                </div>
              </div>
              <!-- <div class="col-md-6">
                <label for="phone" class="form-label">Phone number (verification)</label>
                <input id="phone" type="tel" v-model="formData.phone" class="form-control form-input"
                  placeholder="Enter here" />
                <div v-if="formErrors.phone" class="text-danger">
                  {{ formErrors.phone }}
                </div>
              </div> -->
              <!-- <div class="col-md-6">
                <label for="socialMedia" class="form-label">Social media (optional)</label>
                <input id="socialMedia" type="text" v-model="formData.socialMedia" class="form-control form-input"
                  placeholder="Enter here" />
              
              </div> -->
              <div class="col-md-6">
                <label for="password" class="form-label">Password</label>
                <input type="password" id="password" v-model="formData.password" class="form-control form-input"
                  placeholder="Enter here" />
                <div v-if="formErrors.password" class="text-danger">
                  {{ formErrors.password }}
                </div>
                <ul class="text-white">
                  <li>
                    <p>Password must be:</p>
                  </li>
                  <li :class="{ 'completed': isPasswordLengthValid }">
                    <small>8 characters long</small>
                  </li>
                  <li :class="{ 'completed': isUppercaseValid }">
                    <small>An uppercase letter</small>
                  </li>
                  <li :class="{ 'completed': isNumberValid }">
                    <small>A number</small>
                  </li>
                </ul>
              </div>

              <div class="col-md-12">
                <p id="errormsg"></p>
              </div>
              <div class="col-md-12">
                <div class="list-item-btn position-relative submit-btn-div">
                  <span class="border-bottom-btn border-top-btn position-absolute">
                    <!-- <img src="<?= base_url('/assets/images/Group12.png')?>" class="img-border position-absolute" alt=""> -->
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
                    Sign Up
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
    </div>
  </div>

  <!-- modal succes -->
  <div class="modal show d-block" tabindex="-1" role="dialog" id="carShopFilter" v-if="isModalOpen === true">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-body text-center">
          <span class="close-icon" @click="isModalOpen = false">
            <i class="fas fa-times"></i>
          </span>

          <div class="mt-4 py-2">
            <h5 class="card-title"><span class="choose">User Regeisteration Successfull</span></h5>
            <p class="text-white">PLease Login TO Continue</p>
          </div>


        </div>
      </div>
    </div>
  </div>

  <!-- modal end -->
  <!-- modal fail -->
  <div class="modal show d-block" tabindex="-1" role="dialog" id="carShopFilter" v-if="isModalOpenFail === true">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-body text-center">
          <span class="close-icon" @click="isModalOpenFail = false">
            <i class="fas fa-times"></i>
          </span>

          <div class="mt-4 py-2">
            <h5 class="card-title"><span class="choose">Something Went Wronge </span></h5>
            <p class="text-white">{{ this.errorMessage }}</p>
            <p class="text-white">Please Try Again</p>
          </div>


        </div>
      </div>
    </div>
  </div>

  <!-- modal end -->
</template>
<script>


export default {
  name: "SignUp",

  data() {
    return {
      isModalOpen: false,
      isModalOpenFail: false,
      errorMessage: "",
      formData: {
        name: "",
        age: "",
        email: "",
        phone: "",
        socialMedia: "empty",
        password: "",
      },
      formErrors: {
        name: "",
        age: "",
        email: "",
        phone: "",
        socialMedia: "",
        password: "",
      },
    };
  },
  computed: {
    loggedIn() {

      return this.$store.state.auth;

    },
    isPasswordLengthValid() {
      return this.formData.password.length >= 8;
    },
    isUppercaseValid() {
      const uppercaseRegex = /[A-Z]/;
      return uppercaseRegex.test(this.formData.password);
    },
    isNumberValid() {
      const numberRegex = /[0-9]/;
      return numberRegex.test(this.formData.password);
    }
  },
  mounted() {
    console.log(this.loggedIn)
    console.log(this.user)
    // if (this.loggedIn) {
    //   this.$router.push("/profile");
    // }
  },
  methods: {
    validatePassword() {
      this.formErrors.password = '';
      if (!this.isPasswordLengthValid) {
        this.formErrors.password = 'Password must be at least 8 characters long.';
      } else if (!this.isUppercaseValid) {
        this.formErrors.password = 'Password must contain at least one uppercase letter.';
      } else if (!this.isNumberValid) {
        this.formErrors.password = 'Password must contain at least one number.';
      }
    },
    async submitForm() {
      this.validateForm();
      if (this.isFormValid()) {
        // Submit form data
        const mydata = {

          name: this.formData.name,
          // age: this.formData.age,
          email: this.formData.email,
          // phone: this.formData.phone,
          password: this.formData.password,
          // socialMedia: this.formData.socialMedia,
        };

        console.log("Form submitted successfully", mydata);
        this.$store.dispatch('auth/handleSignUp',
          mydata)
          .then(
            (data) => {
              if (data.success == 1) {
                this.isModalOpen = true
                this.$router.push("/signin");
              } else {
                this.isModalOpenFail = true
                this.errorMessage = data.error
              }

              console.log(data);
            })


      } else {
        console.log("Form validation failed");
      }
    },
    // validateForm() {
    //   this.formErrors = {};

    //   if (!this.formData.name) {
    //     this.formErrors.name = "Name is required";
    //   }

    //   if (!this.formData.email) {
    //     this.formErrors.email = "Email is required";
    //   } else if (!this.isValidEmail(this.formData.email)) {
    //     this.formErrors.email = "Invalid email format";
    //   }

    //   if (!this.formData.password) {
    //     this.formErrors.password = "Password is required";
    //   }
    // },
    validateForm() {
      this.formErrors = {};

      if (!this.formData.name) {
        this.formErrors.name = "Name is required";
      }

      if (!this.formData.email) {
        this.formErrors.email = "Email is required";
      } else if (!this.isValidEmail(this.formData.email)) {
        this.formErrors.email = "Invalid email format";
      }

      if (!this.formData.password) {
        this.formErrors.password = "Password is required";
      } else {
        if (this.formData.password.length < 8) {
          this.formErrors.password = "Password must be at least 8 characters long";
        } else if (!/[A-Z]/.test(this.formData.password)) {
          this.formErrors.password = "Password must contain at least one uppercase letter";
        } else if (!/\d/.test(this.formData.password)) {
          this.formErrors.password = "Password must contain at least one number";
        }
      }
    },

    isValidPhoneNumber(phone) {
      const phonePattern = /^\+?\d{1,3}[-.\s]?\d{3,4}[-.\s]?\d{3,4}$/;

      return phonePattern.test(phone);
    },
    isFormValid() {
      return Object.values(this.formErrors).every((error) => !error);
    },
    isValidEmail(email) {
      const emailPattern = /\S+@\S+\.\S+/;
      return emailPattern.test(email);
    },
  },
  watch: {
    formData: {
      handler() {
        this.validatePassword();
      },
      deep: true
    }
  },
};
</script>
<style scoped>
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

.completed {
  color: #FF7A00;
}
</style>
