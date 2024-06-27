<template>

  <div class="container my-5">
    <div class="row">

      <div class="col-md-6 m-auto">
        <div class="form-content-home1">

          <form id="subscribe-form" @submit.prevent="submitForm">
            <h2 class="form-title"> {{ $t('signIn') }}</h2>
            <div class="signIn-div my-5">
              <button type="button" class="btn google-btn" @click="handleGoogleLogin">
                <i class="fa-brands fa-google-plus-g"></i> Google
              </button>
              <!-- <div class="fb-login-button" data-width="" data-size="" data-button-type="" data-layout=""
                data-auto-logout-link="false" data-use-continue-as="false"></div> -->
              <!-- <button class="btn google-btn">
                <i class="fa-brands fa-facebook"></i>Facebook
              </button> -->
              <button type="button" class="btn google-btn" @click="handleFacebookLogin">
                <i class="fa-brands fa-facebook"></i> Facebook
              </button>

              <!-- <button class="btn google-btn">
                <i class="fa-brands fa-apple"></i>Apple
              </button> -->

            </div>
            <div class="row">
              <div class="col-md-12">
                <label for="email" class="form-label"> {{ $t('email') }}</label>
                <input id="email" type="email" v-model="formData.email" class="form-control form-input"
                  :placeholder="$t('Enter here')" />
                <div v-if="formErrors.email" class="text-danger">
                  {{ formErrors.email }}
                </div>
              </div>
              <div class="col-md-12 position-relative">
                <label for="password" class="form-label"> {{ $t('password') }}</label>
                <!-- <input type="password" id="password" v-model="formData.password" class="form-control form-input"
                   :placeholder="$t('Enter here')"/> -->
                <input :type="formData.showPassword ? 'text' : 'password'" id="password" v-model="formData.password"
                  class="form-control form-input" :placeholder="$t('Enter here')" />
                <span class="eye" @click="togglePasswordVisibility">
                  <i class="fa-solid" :class="eyeIcon"></i>
                </span>
                <div v-if="formErrors.password" class="text-danger">
                  {{ formErrors.password }}
                </div>
                <div class="d-flex justify-content-end align-items-center">
                  <router-link to="/forget" class="termsService">{{ $t('ForgotPassword') }}?</router-link>
                </div>
              </div>

              <div class="col-md-12">
                <p id="errormsg"></p>

              </div>
              <div class="col-md-12">
                <div v-if="loading" class="d-flex justify-content-center ">
                  <div class="box"></div>
                </div>
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
                    {{ $t('signIn') }}
                  </button>
                  <span class="border-bottom-btn border-left-btn position-absolute">
                    <img src="@/assets/images/Group11.png" class="img-border position-absolute" alt="" />
                  </span>
                  <span class="border-bottom-btn position-absolute">
                    <img src="@/assets/images/Path473.png" class="img-border position-absolute" alt="" />
                  </span>
                </div>
                <div class="d-flex justify-content-center align-items-center">
                  <router-link to="/dealerlogin" class="termsService">{{ $t('GoToDealerLogin') }}</router-link>
                </div>
                <!-- <div class="d-flex justify-content-end align-items-center">
                  <router-link to="/forget" class="termsService">Forgot Password?</router-link>
                </div> -->
              </div>
            </div>
          </form>
        </div>

      </div>
    </div>
  </div>

  <!-- modal -->
  <div class="modal show d-block" tabindex="-1" role="dialog" id="carShopFilter" v-if="isModalOpen === true">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-body text-center">
          <span class="close-icon" @click="modalClose">
            <i class="fas fa-times"></i>
          </span>

          <div class="mt-4 py-2">
            <h5 class="card-title"><span class="choose"> Email or Password is Incorrect </span></h5>
            <p class="text-white">Please Verify Email And Password</p>
          </div>


        </div>
      </div>
    </div>
  </div>

  <!-- modal end -->
</template>
<script>
import axios from 'axios';
import { Auth, Hub } from 'aws-amplify';
import { CognitoHostedUIIdentityProvider } from '@aws-amplify/auth';
import { mapActions } from 'vuex';
// import OurCommunity from './OurCommunity.vue';
export default {
  name: "SignIn",
  components: {
    // Register the component
    // OurCommunity
  },
  data() {
    return {
      loading: false,
      isModalOpen: false,
      formData: {
        email: "",
        password: "",
        showPassword: false,
      },
      formErrors: {
        email: "",
        password: "",
      },
    };
  },
  computed: {

    eyeIcon() {
      return this.formData.showPassword ? 'fa-eye-slash' : 'fa-eye';

    },
  },
  mounted() {

    Hub.listen("auth", ({ payload: { event, data } }) => {
      console.log(`Auth event: ${event}`, data);
      if (event == 'signIn') {

        localStorage.setItem('login', true);


        // Redirect to '/landing' route
        // this.$router.push('/ourcommunity');
        // this.$router.push({ name: 'UserProfile' });
      }
      /*
      switch (event) {
        case "signIn":
          console.log("signIn data: " + JSON.stringify(data));
          this.signedIn = true;
          this.username = data.username;
          alert(data.username)
 
          break;
        case "signOut":
          this.signedIn = false;
          this.username = null;
          break;
      }*/
    });
  },
  methods: {
    ...mapActions(['signup']),
    async submitProfileForm() {
      try {
        this.loading = true
        // Make a POST request to the API endpoint
        const response = await axios.post('https://clownfish-app-quehu.ondigitalocean.app/api/users', { email: this.formData.email });

        // Handle success response
        console.log('Form data submitted successfully:', response.data[0]);
        // const { email, name, role } = response.data;
        const email = response.data[0].email
        const name = response.data[0].name
        const role = response.data[0].role
        // this.$store.signup({ email, name, role });
        console.log("data", { email, name, role })
        await this.$store.dispatch('auth/signup', { email, name, role });

        this.loading = false

        // You can perform further actions here, such as redirecting the user or showing a success message
      } catch (error) {
        // Handle error
        console.error('Error submitting form data:', error);
        this.loading = false

        // You can show an error message to the user or handle the error in any other appropriate way
      }
    },
    togglePasswordVisibility() {
      this.formData.showPassword = !this.formData.showPassword;
    },
    async handleFacebookLogin() {
      try {
        const response = await Auth.federatedSignIn({
          provider: CognitoHostedUIIdentityProvider.Facebook

        });

        // Handle successful login
        console.log('Facebook login response:', response);

      } catch (error) {
        // Handle login error
        console.error('Facebook login error:', error);
      }
    },
    async handleGoogleLogin() {
      try {
        const response = await Auth.federatedSignIn({ provider: 'Google' });
        // Handle successful login
        await console.log('Google login response:', response);
      } catch (error) {
        // Handle login error
        alert.error('Google login error:', error);
      }
    },
    modalClose() {
      console.log("close modal")
      this.isModalOpen = false
    },
    submitForm() {
      this.validateForm();
      if (this.isFormValid()) {
        console.log("Form submitted successfully");
        this.submitProfileForm()
        const mydata = {
          email: this.formData.email,
          password: this.formData.password,
        };
        this.$store.dispatch("auth/handleSignIn", mydata).then((data) => {
          if (data.success == 1) {
            localStorage.setItem('login', true);
            localStorage.setItem('data', data.result);

            // Redirect to '/landing' route
            this.$router.push('/profile');

          } else {
            this.isModalOpen = true
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

.box {
  height: 100px;
  width: 100px;
  border-radius: 50%;
  border: 6px solid;
  border-color: #FF7A00 transparent;
  animation: spin 1s infinite ease-out;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
</style>
