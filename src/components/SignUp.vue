<template>

  <div class="container mb-5 ">
    <div class="row">
      <div class="col-md-8 m-auto">
        <div class="form-content-home1">
          <form id="subscribe-form" @submit.prevent="submitForm">
            <h2 class="form-title">{{ $t('signUp') }}</h2>
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
              <div class="col-md-6">
                <label for="name" class="form-label">Full Name</label>
                <input id="name" type="text" v-model="formData.fullname" class="form-control form-input"
                  :placeholder="$t('Enter here')" />
                <div v-if="formErrors.fullname" class="text-danger">
                  {{ formErrors.fullname }}
                </div>
                <input v-model="formData.role" id="h" type="text" class="form-control form-input d-none"
                  :placeholder="$t('Enter here')" value="user" />
              </div>
              <div class="col-md-6 d-block d-md-none">
                <label for="name" class="form-label pt-0">Nick Name</label>
                <input id="name" type="text" v-model="formData.nickname" class="form-control form-input"
                  :placeholder="$t('Enter here')" />
                <div v-if="formErrors.name" class="text-danger">
                  {{ formErrors.name }}
                </div>
                <input v-model="formData.role" id="h" type="text" class="form-control form-input d-none"
                  :placeholder="$t('Enter here')" value="user" />
              </div>

              <div class="col-md-6">
                <label for="email" class="form-label">Email (verification)</label>
                <input id="email" type="email" v-model="formData.email" class="form-control form-input"
                  :placeholder="$t('Enter here')" />
                <div v-if="formErrors.email" class="text-danger">
                  {{ formErrors.email }}
                </div>
              </div>
              <div class="col-md-12 d-none d-md-block">
                <label for="name" class="form-label ">Nick Name</label>
                <input id="name" type="text" v-model="formData.nickname" class="form-control form-input"
                  :placeholder="$t('Enter here')" />
                <div v-if="formErrors.name" class="text-danger">
                  {{ formErrors.name }}
                </div>
                <input v-model="formData.role" id="h" type="text" class="form-control form-input d-none"
                  :placeholder="$t('Enter here')" value="user" />
              </div>
              <!-- <div class="col-md-6 z-2 position-relative ">
                <label for="cars" class="form-label pt-0">
                  Select Preffered Cars
                </label>
                <multiselect v-model="value" :options="options" :multiple="true" :close-on-select="false"
                  :clear-on-select="false" placeholder="Pick some" label="name" track-by="name"
                  class="form-control form-input  ">

                </multiselect>

              </div> -->

              <div class="col-md-6 position-relative z-1">
                <label for="password" class="form-label">Password</label>

                <div class="input-group">
                  <input :type="formData.showPassword ? 'text' : 'password'" id="password" v-model="formData.password"
                    class="form-control form-input formP" :placeholder="$t('Enter here')" @input="checkStrength" />
                  <span class="input-group-text igt" @click="togglePasswordVisibility">
                    <i class="fa-solid" :class="eyeIcon"></i>
                  </span>

                </div>
                <div class="strength-bars" v-if="formData.password !== ''">
                  <div class="strength-bar"
                    :class="{ 'weak': passwordStrength === 'Weak', 'medium': passwordStrength === 'Medium', 'strong': passwordStrength === 'Strong' }">
                  </div>
                  <div class="strength-bar"
                    :class="{ 'medium': passwordStrength === 'Medium', 'strong': passwordStrength === 'Strong' }"></div>
                  <div class="strength-bar" :class="{ 'strong': passwordStrength === 'Strong' }"></div>
                </div>

                <div class="d-flex justify-content-end">
                  <p :class="passwordStrengthClass">{{ passwordStrength }}</p>
                </div>

                <div v-if="formErrors.password" class="text-danger">
                  {{ formErrors.password }}
                </div>
              </div>

              <div class="col-md-6 position-relative z-1">
                <label for="confirmPassword" class="form-label">{{ $t('ConfirmPassword') }}</label>
                <div class="input-group">
                  <input :type="formData.showPassword2 ? 'text' : 'password'" id="confirmPassword"
                    v-model="formData.confirmPassword" class="form-control form-input formP"
                    :placeholder="$t('Enter here')" />
                  <span class="input-group-text igt" @click="togglePasswordVisibility2">
                    <i class="fa-solid" :class="eyeIcon2"></i>
                  </span>
                </div>
                <div v-if="formErrors.confirmPassword" class="text-danger">
                  {{ formErrors.confirmPassword }}
                </div>

              </div>

              <div class="col-md-6">
                <ul class="text-white f14">
                  <li>Password must be at least 8 characters long.</li>
                  <li>Password must contain at least one uppercase letter.</li>
                  <li>Password must contain at least one number.</li>
                  <li>Password Must contain at least one symbol</li>
                </ul>
              </div>

              <div class="col-md-12 d-flex align-items-center gap-3 gap-md-2 mt-3 textnowrap flexwrap">
                <input type="checkbox" id="check1" class="form-check-input m-0" v-model="formData.check1" />
                <label for="check1" class="form-label  mb-0 p-0">{{ $t('IHaveReadAndAgreeWith') }}
                  <router-link to="/termofservice" class="termsService" target="_blank"> {{
                    $t('GeneralTermsAndConditions')
                  }}</router-link>
                </label>
                <div v-if="formErrors.check1" class="text-danger">
                  {{ formErrors.check1 }}
                </div>
              </div>

              <div class="col-md-12 d-flex align-items-center gap-3 gap-md-2 mt-3 textnowrap flexwrap">
                <input type="checkbox" id="check2" class="form-check-input m-0" v-model="formData.check2" />
                <label for="check2" class="form-label  mb-0 p-0">{{ $t('IAgreeWithDataUsage') }}
                  <router-link to="/privacypolicy" class="termsService" target="_blank">{{ $t('PrivacyPolicy')
                    }}</router-link>
                </label>
                <div v-if="formErrors.check2" class="text-danger">
                  {{ formErrors.check2 }}
                </div>
              </div>

              <div class="col-md-12 d-flex flex-column flex-md-row  gap-3  gap-md-2 mt-3 textnowrap flexwrap">
                <input type="checkbox" id="check2" class="form-check-input m-0" :placeholder="$t('Enter here')" />
                <label for="check2" class="form-label  mb-0 p-0">{{ $t('NoEmails') }}

                </label>
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
                  <button type="submit" class="signin-btnli submitNow" id="submit-button">
                    {{ $t('signUp') }}
                  </button>
                  <span class="border-bottom-btn border-left-btn position-absolute">
                    <img src="@/assets/images/Group11.png" class="img-border position-absolute" alt="" />
                  </span>
                  <span class="border-bottom-btn position-absolute">
                    <img src="@/assets/images/Path473.png" class="img-border position-absolute" alt="" />
                  </span>
                </div>
              </div>
              <div class="d-flex justify-content-center align-items-center f14">
                <router-link to="/dealerlogin" class="termsService">{{ $t('GoToDealerLogin') }}</router-link>
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
  <!-- modal for show name already exits -->
  <div class="modal show d-block" tabindex="-1" role="dialog" id="carShopFilter" v-if="isModalOpenName === true">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-body text-center">
          <span class="close-icon" @click="isModalOpenName = false">
            <i class="fas fa-times"></i>
          </span>

          <div class="mt-4 py-2">
            <h5 class="card-title"><span class="choose">Nick Name Alredy Existed </span></h5>

            <p class="text-white">Please Try With Different Name</p>
          </div>


        </div>
      </div>
    </div>
  </div>
  <!-- modal ends -->
</template>
<script>
import axios from 'axios';
import { mapActions } from 'vuex';
import { useProfileImage } from '@/composables/useProfileImage';
import { useProfileName } from '@/composables/useProfileName';
import { Auth, Hub } from 'aws-amplify';
import { CognitoHostedUIIdentityProvider } from '@aws-amplify/auth';
// import Multiselect from 'vue-multiselect'

export default {
  name: "SignUp",
  // components: { Multiselect },
  setup() {
    const { state: profileImageState, setProfileImage } = useProfileImage();
    const { state: nameState, setName } = useProfileName();

    const changeProfileImage = (newSrc) => {
      setProfileImage(newSrc);
    };

    const changeName = (newName) => {
      setName(newName);
    };

    return {
      profileImageState,
      nameState,
      changeProfileImage,
      changeName
    };
  },
  data() {
    return {
      password: "", // Add this line
      strength: "", // Add this line
      isModalOpen: false,
      isModalOpenFail: false,
      isModalOpenName: false,
      errorMessage: "",
      formData: {

        nickname: "",
        fullname: "",
        age: "",
        email: "",
        phone: "",
        socialMedia: "empty",
        password: "",
        confirmPassword: "",
        check1: "",
        check2: "",
        showPassword: false,
        showPassword2: false,
        role: "user"

      },
      formErrors: {
        name: "",
        age: "",
        full: "name",
        email: "",
        phone: "",
        socialMedia: "",
        password: "",
        confirmPassword: "",
        check1: "",
        check2: ""
      },
      value: [],

      options: [
        { name: 'JDM' },
        { name: 'European' },
        { name: 'American' },

      ]
    };
  },
  computed: {
    loggedIn() {
      console.log("auth check", this.$store.state.auth)
      return this.$store.state.auth;

    },
    isPasswordLengthValid() {
      return this.formData.password.length >= 8;

    },
    isContainSpecialchar() {
      const password = this.formData.password;
      const minLength = 8;
      const specialCharPattern = /[!@#$%^&*(),.?":{}|<>]/;

      return password.length >= minLength && specialCharPattern.test(password);
    },
    isUppercaseValid() {
      const uppercaseRegex = /[A-Z]/;
      return uppercaseRegex.test(this.formData.password);
    },
    isNumberValid() {
      const numberRegex = /[0-9]/;
      return numberRegex.test(this.formData.password);
    },
    passwordStrength() {
      if (!this.formData.password) return '';
      if (
        this.isPasswordLengthValid &&
        this.isUppercaseValid &&
        this.isNumberValid &&
        this.isContainSpecialchar
      ) {
        return 'Strong';
      } else if (
        this.isPasswordLengthValid &&

        this.isNumberValid
      ) {
        return 'Medium';
      } else {
        return 'Weak';
      }
    },
    passwordStrengthClass() {
      if (this.passwordStrength === 'Weak') {

        return 'text-red'; // Define 'text-red' class in your CSS with appropriate styling
      } else if (this.passwordStrength === 'Medium') {
        return 'text-green'; // Define 'text-green' class in your CSS with appropriate styling
      } else {
        return 'text-orange'; // Define 'text-orange' class in your CSS with appropriate styling
      }
    },
    isConfirmPasswordValid() {
      return this.formData.password === this.formData.confirmPassword;
    },
    eyeIcon() {
      return this.formData.showPassword ? 'fa-eye-slash' : 'fa-eye';

    },
    eyeIcon2() {
      return this.formData.showPassword2 ? 'fa-eye-slash' : 'fa-eye';
    }


  },

  mounted() {
    console.log(this.loggedIn)
    Hub.listen("auth", ({ payload: { event, data } }) => {
      console.log(`Auth event: ${event}`, data);



      if (event == 'signIn') {

        localStorage.setItem('login', true);
        localStorage.setItem('social', true);


        // Redirect to '/landing' route
        // this.$router.push('/ourcommunity');
        this.$router.push({ name: 'UserProfile' });
      }
      if (event == 'signUp') {
        localStorage.setItem('signupstatus', "true");
        localStorage.setItem('login', true);
        localStorage.setItem('storgekey', data.userSub);


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
    // console.log(this.user)
    // if (this.loggedIn) {
    //   this.$router.push("/profile");
    // }
  },
  methods: {
    ...mapActions(['signup']),
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
        console.log('Google login response:', response);
      } catch (error) {
        // Handle login error
        alert.error('Google login error:', error);
      }
    },

    async submitProfileForm() {
      try {
        // Make a POST request to the API endpoint
        const response = await axios.post('https://king-prawn-app-3rw3o.ondigitalocean.app/api/users', this.formData);

        // Handle success response
        console.log('Form data submitted successfully user:', response.data);

        const { email, name, role } = this.formData;
        // this.$store.signup({ email, name, role });
        await this.$store.dispatch('auth/signup', { email, name, role });
        console.log("before name", name);
        this.changeName(name);
        // You can perform further actions here, such as redirecting the user or showing a success message
      } catch (error) {
        // Handle error
        console.error('Error submitting form data:', error);
        // You can show an error message to the user or handle the error in any other appropriate way
      }
    },
    togglePasswordVisibility() {
      this.formData.showPassword = !this.formData.showPassword;
    },
    togglePasswordVisibility2() {
      this.formData.showPassword2 = !this.formData.showPassword2;
    },


    validatePassword() {
      this.formErrors.password = '';
      if (!this.isPasswordLengthValid) {
        this.formErrors.password = 'Password must be at least 8 characters long.';
      } else if (!this.isUppercaseValid) {
        this.formErrors.password = 'Password must contain at least one uppercase letter.';
      } else if (!this.isNumberValid) {
        this.formErrors.password = 'Password must contain at least one number.';
      }
      else if (!this.isContainSpecialchar) {
        this.formErrors.password = "Password Must contain at least one symbol"
      }
    },

    async submitForm() {
      console.log(this.formData)
      this.validateForm();
      if (this.isFormValid()) {

        // Submit form data
        const mydata = {

          nickname: this.formData.nickname.trim().toLowerCase(),
          // age: this.formData.age,
          email: this.formData.email,
          phone: this.formData.phone,
          password: this.formData.password,
          fullname: this.formData.fullname
          // socialMedia: this.formData.socialMedia,
        };

        console.log("Form submitted successfully", mydata);
        try {
          const url = `https://king-prawn-app-3rw3o.ondigitalocean.app/api/users/nickname?nickname=${mydata.nickname}`;
          const response = await axios.get(url);
          console.log("respi", response)
          if (response.data.count == 0) {

            this.$store.dispatch('auth/handleSignUp',
              mydata)
              .then(
                (data) => {
                  if (data.success == 1) {

                    // this.isModalOpen = true
                    //          this.submitProfileForm()
                    localStorage.setItem('login', true);
                    localStorage.setItem('firstTimeLogin', true);
                    //  window.location.reload();
                    // this.$router.push("/signin");
                    // this.$router.push("/profile");
                    // window.location.reload()
                    // this.$router.push({ name: 'UserProfile' })
                  } else {
                    this.isModalOpenFail = true
                    this.errorMessage = data.error
                  }

                  console.log(data);
                })
          }
          else {
            this.isModalOpenName = true
          }
        }
        catch (error) {
          console.log("error", error)
        }
        // console.log('User information retrieved successfully:', response.data);



      } else {
        console.log("Form validation failed");
      }
    },

    validateForm() {
      this.formErrors = {};
      // console.log("check1", this.formData.check1)
      if (!this.formData.check2) {
        this.formErrors.check2 = "Please Check the Privacy and Policy"
      }
      if (!this.formData.check1) {
        this.formErrors.check1 = "Please Check the General Terms and Conditions"
      }
      if (!this.formData.nickname) {
        this.formErrors.nickname = "Name is required";
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
        if (!this.formData.password) {
          this.formErrors.password = "Password is required";
        } else {
          // Password validation logic...
        }

        if (!this.formData.confirmPassword) {
          this.formErrors.confirmPassword = "Please confirm your password";
        } else if (!this.isConfirmPasswordValid) {
          this.formErrors.confirmPassword = "Passwords do not match";
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
.form-label {
  margin-bottom: 0px
}

.strength-bars {
  display: flex;
  justify-content: space-between;
  margin-top: 5px;
}

.strength-bar {
  flex: 1;
  height: 7px;
  margin: 0 2px;
  border-radius: 2px;
  background: #fff;
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
  background-color: #031726;
  background-clip: padding-box;
  border: 1px solid #1a202c;
  border-radius: 5px;
  outline: 0;
}

.completed {
  color: #FF7A00;
}

.text-red {
  color: #52c41a;
  /* or any other style for weak password */
}

.text-green {
  color: #52c41a;
  /* or any other style for medium password */
}

.text-orange {
  color: orange;
  /* or any other style for strong password */
}

.weak {
  background-color: #52c41a;
  /* Red color for weak */
}

.medium {
  background-color: #52c41a;
  /* Yellow color for medium */
}

.strong {
  background-color: orange;
  /* Green color for strong */
}

.form-check-input {
  box-shadow: 2px 3px 6px rgba(0, 0, 0, 1.1);
  position: relative;

  cursor: pointer;
  background-color: #f95f19 !important;
  border: none !important;
  height: 20px !important;
  width: 20px !important;
}

.textnowrap {
  text-wrap: nowrap
}

.igt {
  background: #031726;
  color: #FF7A00;
  border-color: #1a202c;
  border-left: transparent;

}

.formP {
  border-right: transparent !important;
  border-top-right-radius: 0 !important;
  border-bottom-right-radius: 0 !important;

}

.multiselect {
  height: 23px !important;
  width: 95% !important;
  min-height: 23px !important;
}

.f14 {
  font-size: 14px !important;
}


@media(max-width:992px) {
  .textnowrap {
    text-wrap: wrap
  }

  .flexwrap {
    flex-wrap: wrap
  }
}
</style>
