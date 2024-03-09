<template>

  <div class="container my-5">
    <div class="row">
      <div class="col-md-6 m-auto">
        <div class="form-content-home1">
          <form id="subscribe-form" @submit.prevent="submitForm">
            <h2 class="form-title">Sign <span class="form-span"> In </span></h2>
            <div class="row">
              <div class="col-md-12">
                <label for="email" class="form-label">Email</label>
                <input id="email" type="email" v-model="formData.email" class="form-control form-input"
                  placeholder="Enter here" />
                <div v-if="formErrors.email" class="text-danger">
                  {{ formErrors.email }}
                </div>
              </div>
              <div class="col-md-12">
                <label for="password" class="form-label">Password</label>
                <input type="password" id="password" v-model="formData.password" class="form-control form-input"
                  placeholder="Enter here" />
                <div v-if="formErrors.password" class="text-danger">
                  {{ formErrors.password }}
                </div>
              </div>

              <div class="col-md-12">
                <p id="errormsg"></p>
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
                  <!-- <button type="submit" class="signin-btnli submitNow" id="submit-button" fdprocessedid="eysiqp">
									Log In </button> -->
                  <button type="submit" class="signin-btnli submitNow" id="submit-button">
                    Log In
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
        <div class="signIn-div my-5">
          <button class="btn google-btn">
            <i class="fa-brands fa-google-plus-g"></i> Google
          </button>
          <button class="btn google-btn">
            <i class="fa-brands fa-facebook"></i>Facebook
          </button>
          <button class="btn google-btn">
            <i class="fa-brands fa-apple"></i>Apple
          </button>
        </div>
      </div>
    </div>
  </div>


</template>
<script>
import Swal from 'sweetalert2';

export default {
  name: "SignIn",

  data() {
    return {
      formData: {
        email: "test@gmail.com",
        password: "12345678",
      },
      formErrors: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    submitForm() {
      this.validateForm();
      if (this.isFormValid()) {
        console.log("Form submitted successfully");
        const mydata = {
          email: this.formData.email,
          password: this.formData.password,
        };
        this.$store.dispatch("auth/handleSignIn", mydata).then((data) => {
          if (data.success == 1) {
            localStorage.setItem('login', true);
            localStorage.setItem('data', data.result);
            Swal.fire({
              title: 'Success!',
              text: 'User has been successfully login!',
              icon: 'success',
              confirmButtonText: 'OK',
            }).then(() => {
              // Redirect to '/landing' route
              this.$router.push('/ourcommunity');
            });
          } else {
            Swal.fire({
              title: 'Error!',
              text: 'Oops... ' + data.error,
              icon: 'error',
              confirmButtonText: 'OK',
            });
          }

          console.log(data);
        });
      } else {
        console.log("Form validation failed");
      }
    }
    ,
    validateForm() {
      this.formErrors = {};

      if (!this.formData.email) {
        this.formErrors.email = "Email is required";
      } else if (!this.isValidEmail(this.formData.email)) {
        this.formErrors.email = "Invalid email format";
      }
      if (!this.formData.password) {
        this.formErrors.password = "Password is required";
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
};
</script>
<style scoped></style>
