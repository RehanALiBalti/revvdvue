<template>

  <section class="header d-flex align-items-center flex-column flex-md-row ">
    <!-- <h1 class="text-white">{{ isLogin2 }} {{ typeof (isLogin2) }}</h1> -->
    <nav class="navbar navbar-expand-lg sticky-top p-1 px-md-3 w-100 h-100">
      <div class="container-fluid px-0 px-md-1 py-1">
        <router-link class="navbar-brand" to="/">
          <!-- <img class="logo-header" src="@/assets/images/RevvdoutLogo.svg" alt="Logo" draggable="false" height="30" /> -->

          <img class="logo-header ms-3 ms-md-4 object-fit-contain" src="@/assets/images/R.png" alt="Logo"
            draggable="false" height="30" />
        </router-link>
        <div class="d-flex gap-2">
          <router-link class="nav-link navLinkmd d-block d-lg-none" to="/" v-if="shouldShowLink && isLogin2">
            <svg xmlns="http://www.w3.org/2000/svg" class="home-icon-svg" width="29" height="32" viewBox="0 0 29 32">
              <g id="Icon_feather-home" data-name="Icon feather-home" transform="translate(-3.5 -2)">
                <path id="Path_1085" data-name="Path 1085"
                  d="M4.5,13.5,18,3,31.5,13.5V30a3,3,0,0,1-3,3H7.5a3,3,0,0,1-3-3Z" fill="none" stroke="#fff"
                  stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <path id="Path_1086" data-name="Path 1086" d="M13.5,33V18h9V33" fill="none" stroke="#fff"
                  stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
              </g>
            </svg>
          </router-link>
          <button class="navbar-toggler pe-0 me-3 md-md-0" type="button" aria-controls="navbarNavDropdown"
            aria-expanded="false" aria-label="Toggle navigation" @click="toggleNav">
            <span class="icon">
              <img src="@/assets/images/menu.png" width="50px">
            </span>
          </button>
        </div>
        <div class="collapse navbar-collapse" :class="{ 'show': isNavOpen }" id="navbarNavDropdown">


          <ul class="navbar-nav ul-list ms-auto nav-mob">
            <li class=" position-relative d-block d-md-none" v-if="$route.path === '/'">
              <nav class="custom-navigation c-home ">
                <button class="position-relative pbutton d-flex align-items-start gap-2"
                  :class="{ active: activeSection === 'home' }" @click="$emit('moveToSection', 'home')">
                  <div class="d-flex flex-column gap-1">
                    <span class="progress"></span>
                    <!-- <span class="progress"></span>
              <span class="progress"></span>
              <span class="progress"></span> -->
                  </div> Home
                </button>
                <button class="position-relative  d-flex align-items-start gap-2 my-3"
                  :class="{ active: activeSection === 'featured' }" @click="$emit('moveToSection', 'featured')">
                  <div class="d-flex flex-column gap-1">
                    <span class="progress"></span>
                    <!-- <span class="progress"></span>
              <span class="progress"></span>
              <span class="progress"></span> -->
                  </div> Featured Story
                </button>
                <button class="position-relative  d-flex align-items-start gap-2 my-3"
                  :class="{ active: activeSection === 'shareStory' }" @click="$emit('moveToSection', 'shareStory0')">
                  <div class="d-flex flex-column gap-1 ">
                    <span class="progress"></span>
                    <!-- <span class="progress"></span>
              <span class="progress"></span>
              <span class="progress"></span> -->
                  </div> Share Your Story
                </button>
                <button class="position-relative  d-flex align-items-start gap-2 my-3"
                  :class="{ active: activeSection === 'aboutUs' }" @click="$emit('moveToSectionabo', 'aboutUs')">
                  <div class="d-flex flex-column gap-1">
                    <span class="progress"></span>
                    <!-- <span class="progress"></span>
              <span class="progress"></span>
              <span class="progress"></span> -->
                  </div> About Us
                </button>
              </nav>
            </li>
            <li class="list-item-btn position-relative d-none d-lg-block" v-if="$route.path !== '/'">


              <router-link class="nav-link d-none d-lg-block" to="/">
                <svg xmlns="http://www.w3.org/2000/svg" class="home-icon-svg" width="29" height="32"
                  viewBox="0 0 29 32">
                  <g id="Icon_feather-home" data-name="Icon feather-home" transform="translate(-3.5 -2)">
                    <path id="Path_1085" data-name="Path 1085"
                      d="M4.5,13.5,18,3,31.5,13.5V30a3,3,0,0,1-3,3H7.5a3,3,0,0,1-3-3Z" fill="none" stroke="#fff"
                      stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                    <path id="Path_1086" data-name="Path 1086" d="M13.5,33V18h9V33" fill="none" stroke="#fff"
                      stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                  </g>
                </svg>
              </router-link>

            </li>
            <li class="list-item-btn position-relative d-none d-lg-block" v-if="$route.path === '/'">


              <button class="nav-link d-none " @click="$emit('moveToSection', 'home')">
                <svg xmlns="http://www.w3.org/2000/svg" class="home-icon-svg" width="29" height="32"
                  viewBox="0 0 29 32">
                  <g id="Icon_feather-home" data-name="Icon feather-home" transform="translate(-3.5 -2)">
                    <path id="Path_1085" data-name="Path 1085"
                      d="M4.5,13.5,18,3,31.5,13.5V30a3,3,0,0,1-3,3H7.5a3,3,0,0,1-3-3Z" fill="none" stroke="#fff"
                      stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                    <path id="Path_1086" data-name="Path 1086" d="M13.5,33V18h9V33" fill="none" stroke="#fff"
                      stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                  </g>
                </svg>
              </button>

            </li>

            <li class="list-item-btn position-relative" v-if="isLogin2 == 'false'">
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
              <router-link to="/signin" class="signin-btnli">
                {{ $t('signIn') }}
              </router-link>
              <span class="border-bottom-btn border-left-btn position-absolute">
                <img src="@/assets/images/Group11.png" class="img-border position-absolute" alt="" />
              </span>
              <span class="border-bottom-btn position-absolute">
                <img src="@/assets/images/Path473.png" class="img-border position-absolute" alt="" />
              </span>
            </li>

            <li class="list-item-btn position-relative" v-if="isLogin2 == 'false'">
              <span class="border-bottom-btn border-top-btn position-absolute">
                <img src="@/assets/images/Group12white.png" class="img-border position-absolute" alt="" />
              </span>

              <span class="border-bottom-btn border-top-btn border-right-radius position-absolute">
                <img src="@/assets/images/Path467white.png" class="img-border position-absolute" alt="" />
              </span>

              <span
                class="border-bottom-btn border-top-btn border-right-radius border-right-bottom-radius position-absolute">
                <img src="@/assets/images/Path465white.png" class="img-border position-absolute" alt="" />
              </span>
              <router-link to="/signup" class="signin-btnli signup-btnli">
                {{ $t('signUp') }}
              </router-link>
              <span class="border-bottom-btn border-left-btn position-absolute">
                <img src="@/assets/images/Group11white.png" class="img-border position-absolute" alt="" />
              </span>
              <span class="border-bottom-btn position-absolute">
                <img src="@/assets/images/Path473white.png" class="img-border position-absolute" alt="" />
              </span>
            </li>
            <li class="list-item-btn position-relative" v-if="isLogin2 == 'false'">
              <span class="border-bottom-btn border-top-btn position-absolute">
                <img src="@/assets/images/Group12white.png" class="img-border position-absolute" alt="" />
              </span>

              <span class="border-bottom-btn border-top-btn border-right-radius position-absolute">
                <img src="@/assets/images/Path467white.png" class="img-border position-absolute" alt="" />
              </span>

              <span
                class="border-bottom-btn border-top-btn border-right-radius border-right-bottom-radius position-absolute">
                <img src="@/assets/images/Path465white.png" class="img-border position-absolute" alt="" />
              </span>
              <router-link to="/dealerlogin" class="signin-btnli signup-btnli">
                {{ $t('Dealer Signup') }}
              </router-link>
              <span class="border-bottom-btn border-left-btn position-absolute">
                <img src="@/assets/images/Group11white.png" class="img-border position-absolute" alt="" />
              </span>
              <span class="border-bottom-btn position-absolute">
                <img src="@/assets/images/Path473white.png" class="img-border position-absolute" alt="" />
              </span>
            </li>


            <li class="d-none">
              <div class="dropdown ">
                <button class="custom-select text-white w-100 minwBtn" type="button" id="dropdownMenuButton2"
                  data-bs-toggle="dropdown" aria-expanded="false">
                  <span class="d-flex" :class="{ up: isOpen }">{{ selectedLanguage }}</span>
                </button>
                <ul class="dropdown-menu dropdown-menu-dark custom-options w-50 w-lg-100 ms-auto ms-lg-0"
                  aria-labelledby="dropdownMenuButton2">
                  <li v-for="language in languages" :key="language.code" @click="selectLanguage(language.code)">
                    {{ language.name }}
                  </li>




                </ul>
              </div>
              <!-- <div class="custom-select" @click="toggleDropdown" :class="{ open: isOpen }" @blur="toggled1">
                <span class="dropdown-toggle" :class="{ up: isOpen }">{{ selectedLanguage }}</span>
                <ul class="custom-options" v-show="isOpen" @click.stop id="country-language-selector"
                  :class="{ open: isOpen }" @blur="toggled1">
                  <li v-for="language in languages" :key="language.code" @click="selectLanguage(language.code)">
                    {{ language.name }}
                  </li>

                </ul>

              </div> -->
            </li>

            <li class=" position-relative " style="min-width:150px" v-if="isLogin2 != 'false'">
              <buttton type="button" class="dropdown user-custom-box w-100" data-bs-toggle="dropdown"
                aria-expanded="false" id="dropdownMenuButton3">
                <div class="user-content-inner">
                  <div class="user-img-div d-lg-block">
                    <!-- <img v-if="image" :src="'https://king-prawn-app-3rw3o.ondigitalocean.app/api/users/' + image"
                      class="user-img" alt="" /> -->
                    <!-- <img :src="state.profileImage ? state.profileImage : 'path/to/alternate/image.png'" class="user-img"
                      alt="User Image" /> -->
                    <img :src="getProfileImage(profileImageState.profileImage)" class="user-img" alt="User Image" />
                  </div>
                  <span class="user-name" :class="{ open: issOpen }">
                    <!-- {{ userAttributes && userAttributes.UserAttributes.find(attr => attr.Name === 'name') ?
            userAttributes.UserAttributes.find(attr => attr.Name === 'name').Value : '' }} -->
                    <!-- {{ userAttributes.name }} -->
                    <!-- {{ userAttributes.name ? userAttributes.name.split(' ')[0] : '' }} -->
                    {{ nameState.name ? nameState.name.split('').slice(0, 5).join(' ') : '' }}


                  </span>


                </div>

                <ul class="dropdown-menu dropdown-menu-dark custom-options w-50 w-lg-100 ms-auto ms-lg-0"
                  aria-labelledby="dropdownMenuButton3">
                  <li data-code="profile" @click="nextRoute">
                    <router-link class="userListATag" to="/profile">
                      {{ $t('profile') }}
                    </router-link>
                  </li>
                  <li data-code="myAdds" class="position-relative">
                    <div class="cardOverlay d-flex pe-2 pt-2">
                      <img src="../../public/images/3.png">
                    </div>
                    <router-link class="userListATag" to="/myCarListing">
                      {{ $t('myAds') }}
                    </router-link>
                  </li>
                  <li data-code="signOut">
                    <router class="userListATag" @click="handlelogout">
                      {{ $t('signOut') }}
                    </router>
                  </li>




                </ul>
              </buttton>
              <!-- <div class="user-custom-box" @click="toggleDropdownUser" :class="{ open: issOpen }">
                <div class="user-content-inner">
                  <div class="user-img-div">
                    <img v-if="image != ''" :src=image class="user-img" alt="" />
                  </div>
                  <span class="user-name" :class="{ open: issOpen }">
                {{ userAttributes && userAttributes.UserAttributes.find(attr => attr.Name === 'name') ?
            userAttributes.UserAttributes.find(attr => attr.Name === 'name').Value : '' }} -->
              <!-- {{ userAttributes.name }}
                  </span> -->


              <!-- </div>
                <ul class="user-dropdown" :class="{ open: issOpen }" id="userDropdown">
                  <li data-code="profile">
                    <router-link class="userListATag" to="/profile">
                      {{ $t('profile') }}
                    </router-link>
                  </li>
                  <li data-code="myAdds" class="position-relative">
                    <div class="cardOverlay d-flex pe-2 pt-2">
                      <img src="../../public/images/layer3.png">
                    </div>
                    <router-link class="userListATag" to="/myCarListing">
                      {{ $t('myAdds') }}
                    </router-link>
                  </li>
                  <li data-code="signOut">
                    <router class="userListATag" @click="logout">
                      {{ $t('signOut') }}
                    </router>
                  </li>
                </ul>
              </div> -->
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </section>
</template>


<script>
import { Auth } from 'aws-amplify';
// import axios from 'axios';
import { useProfileImage } from '@/composables/useProfileImage';
import { useProfileName } from '@/composables/useProfileName';
import { useIslogin } from "@/composables/uselogin"
import { computed } from "vue";
import { inject } from 'vue';
import http from "@/http-common";
const { state, setIslogin } = useIslogin();

// import { mapActions } from 'vuex';

export default {
  props: {
    activeSection: String,
  },
  setup() {

    const { state: profileImageState, setProfileImage } = useProfileImage();
    const { state: nameState, setName } = useProfileName();


    const changeProfileImage = (newSrc) => {
      setProfileImage(newSrc);
    };

    const changeName = (newName) => {
      setName(newName);
    };
    const setLogin = (logvalue) => {
      setIslogin(logvalue)
    };
    const isLogin2 = computed(() => state.isLogin);
    const moveToSection = inject('moveToSection');

    return {
      moveToSection,
      profileImageState,
      nameState,
      changeProfileImage,
      changeName,
      setLogin,
      isLogin2
    };
  },
  name: "HeaderItem",

  data() {
    return {
      // activeSection: 'home',
      image: "",
      isOpen: false,
      issOpen: false,
      isNavOpen: false,
      selectedLanguage: "en",
      sub: "",
      // userAttributes: JSON.parse(localStorage.getItem('CognitoIdentityServiceProvider.3gdn1a64vc584t64t7e0up87el.50fc691c-30a1-70c7-4318-d2aa16c0de0b.userData')),
      userAttributes: [],
      isLogin: JSON.parse(localStorage.getItem('login')) || false,
      languages: [
        { code: "en", name: "en" },
        { code: "fr", name: "fr" },
        { code: "de", name: "de" },
      ],
    };
  },
  computed: {
    handleStorageChange() {
      return {
        handleStorageChange() {
          this.isLogin2 = JSON.parse(localStorage.getItem('login'));
        }
      }
    },
    shouldShowLink() {
      return this.$route.path !== '/';
    }
  },
  async created() {
    const storedIsLogin = localStorage.getItem('login');
    if (storedIsLogin !== null) {
      this.isLogin2 = JSON.parse(localStorage.getItem('login')) || false;

    }

    console.log("i am call", this.isLogin2);
    if (this.isLogin2) {
      await this.fetchProfileData()
      await this.fetchproData()
    }
    window.addEventListener('storage', this.handleStorageChange.handleStorageChange);
    this.$router.beforeEach((to, from, next) => {
      // Set isOpen to false when the route changes
      this.isLogin2 = JSON.parse(localStorage.getItem("login"))
      console.log("yessss", this.issOpen)
      this.issOpen = false;
      this.isOpen = false;
      this.isNavOpen = false
      console.log("nooo", this.issOpen)
      this.closeDropdownm()


      next();
      this.issOpen = false;
    });

    //    this.fetchProfileData()

  },
  beforeUnmount() {
    console.log("i am call2");
    window.removeEventListener('storage', this.handleStorageChange.handleStorageChange);
    document.body.removeEventListener('click', this.closeDropdown);
    document.body.removeEventListener('click', this.closeDropdown2);
    this.isLogin2 = JSON.parse(localStorage.getItem("login"))

  },
  async mounted() {

    const mgdatra = await this.fetchProfileDatas();
    if (mgdatra.success == 1) {
      localStorage.setItem("login", "true");
      this.setLogin("true");
    }

    console.log("i am call3", mgdatra, this.isLogin2, typeof (this.isLogin2), localStorage, localStorage.getItem("login"), localStorage.getItem("liked-6"));
    console.log("call local", localStorage.getItem("login"))
    this.setLogin(localStorage.getItem("login"))

    if (this.isLogin2) {
      //await this.fetchProfileData()
      await this.fetchproData()
    }

    document.body.addEventListener('click', this.closeDropdown);
    document.body.addEventListener('click', this.closeDropdown2);
    this.isLogin2 = JSON.parse(localStorage.getItem("login"))
  },

  methods: {



    getProfileImage(profileImage) {
      console.log("profile_image", profileImage)
      if (!profileImage || profileImage.includes('null') || profileImage.includes('undefined') || profileImage == 'https://king-prawn-app-3rw3o.ondigitalocean.app/users/') {
        return '/images/Group888.png';
      }
      return profileImage;
    },

    nextRoute() {
      console.log('click')
      // this.$router.push("profile")
      this.$router.push({ name: "UserProfile" });


    },
    closeDropdownm() {
      this.issOpen = false;
    },
    closeDropdown(event) {
      if (!this.$el.contains(event.target)) {
        this.isOpen = false;

      }
    },
    closeDropdown2(event) {
      if (!this.$el.contains(event.target)) {
        this.issOpen = false;
      }
    },
    async fetchProfileDatas() {
      try {
        console.log("Fetching profile data...");
        const data = await this.$store.dispatch("auth/getprofiledata");
        return data;

      } catch (error) {
        console.error("Error fetching profile data:", error);
        return error;
      }
    },
    // async fetchproData() {
    //   try {
    //     // Make the GET request with query parameters
    //     const response = await axios.get('https://king-prawn-app-3rw3o.ondigitalocean.app/api/users/', {
    //       params: {
    //         sub: this.sub
    //       }
    //     });

    //     // Handle the response data
    //     console.log("new porofile Data is", response.data[0].image);
    //     this.image = response.data[0].image
    //   } catch (error) {
    //     // Handle any errors
    //     console.error('Error making GET request:', error);
    //   }
    // },
    async fetchProfileData() {
      try {
        console.log("Fetching profile data...");
        const data = await this.$store.dispatch("auth/getprofiledata");
        console.log("Profile data in heder:", data.result, data.result.sub);
        this.sub = data.result.sub
        this.userAttributes = data.result
        if (data.result.nickname) {
          this.changeName(data.result.nickname);

        }



        if (this.userAttributes.picture) {
          this.image = this.userAttributes.picture
        }



      } catch (error) {
        console.error("Error fetching profile data:", error);
        if (error.success == 0) {
          localStorage.setItem('login', false);
          //     this.$router.push("/signin");
        }
      }
    },

    async fetchproData() {
      if (!this.sub) {
        console.warn("User ID (sub) is missing!");
        return;
      }

      try {
        console.log("Fetching profile data for:", this.sub);

        const response = await http.get(`/users/sub`, { params: { sub: this.sub } });

        console.log("Profile response in hd:", response.data);

        // Update user data
        if (response.data.nickname) {
          console.log("inif", response.data.nickname)
          this.changeName(response.data.nickname);


        }
        this.image = response.data.image;

        // Construct and set profile image
        // let imageUrl = "https://king-prawn-app-3rw3o.ondigitalocean.app/users/" + this.image;
        // console.log("User profile image:", imageUrl);
        if (this.image !== null && this.image !== 'null') {
          this.changeProfileImage(this.image);
        }

      } catch (error) {
        console.error("Error fetching profile data:", error);
      }
    }
    ,
    // before link changing its working laetst
    // async fetchproData() {



    //   const myid = this.sub
    //   const url = 'https://king-prawn-app-3rw3o.ondigitalocean.app/api/users/sub?sub=' + myid;
    //   console.log("jaloru header", myid, url);
    //   try {
    //     // Make the GET request with query parameters
    //     const response = await axios.get(url);
    //     console.log("ja loru response", response, response.data.nickname)

    //     // Handle the response data
    //     // console.log(this.formData.sub, "new porofile Data is", response.data);
    //     this.changeName(response.data.nickname);
    //     this.image = response.data.image
    //     // use this origional
    //     // let imageUrl = "https://52.59.240.119/users/" + this.image;
    //     // let imageUrl = "https://king-prawn-app-3rw3o.ondigitalocean.app/users/" + this.image;
    //     // this.changeProfileImage(imageUrl)
    //     this.changeProfileImage(this.image)

    //     console.log("the image of user dloru header", this.image)
    //     //				this.image = response.data[0].image
    //   } catch (error) {
    //     // Handle any errors
    //     console.error('Error making GET request:', error);
    //   }
    // },
    toggleNav() {
      this.isNavOpen = !this.isNavOpen;
    },
    toggleDropdownUser() {
      this.issOpen = !this.issOpen;
    },
    toggleDropdown() {
      this.isOpen = !this.isOpen;
    },
    selectLanguage(code) {
      this.$i18n.locale = this.selectedLanguage = this.languages.find(
        (lang) => lang.code === code
      ).name;
      this.isOpen = false;
    },

    closeDropdownUser(event) {
      if (!this.$el.contains(event.target)) {
        this.issOpen = false;
      }
    },
    // ...mapActions(['logout']),
    async handlelogout() {
      try {
        this.isLogin2 = "false";
        this.setLogin("false");
        localStorage.setItem("login", "false");
        console.log("dd", this.isLogin2)
        localStorage.setItem('login', "false");
        console.log("dsd", this.isLogin2)
        localStorage.setItem('storgekey', "");
        localStorage.setItem('signupstatus', "");
        localStorage.setItem('firstTimeLogin', false);
        localStorage.setItem('showVideo', 'true');

        this.changeName("");
        //  this.changeProfileImage("");
        await Auth.signOut();

        // this.logout();

        this.$router.push("/signin");

        // Execute this code after sign-out is successful

        // console.log("User signed out successfully", Auth.signOut());
        console.log("User signed out successfully", Auth.signOut());
      } catch (error) {
        // Handle sign-out errors
        // console.error("Error signing out:", error);
        console.error("Error signing out:", error);
      }
    },

    // checkLoginStatus() {
    //   const storedIsLogin = localStorage.getItem('login');
    //   this.isLogin = storedIsLogin ? JSON.parse(storedIsLogin) : false;
    //   if (this.isLogin) {
    //     const userAttributes = JSON.parse(localStorage.getItem('UserAttributes'));
    //     // Do something with userAttributes, such as updating state
    //     // For example:
    //     this.userAttributes = userAttributes;
    //     alert(this.userAttributes)

    //   }
    // },
    checkLoginStatus() {
      const storedIsLogin = localStorage.getItem('login');
      this.isLogin2 = storedIsLogin ? JSON.parse(storedIsLogin) : false;

    }

  },
  watch: {
    $route() {
      this.checkLoginStatus();

    }
  }
}
</script>


<style scoped>
.header {
  height: 80px
}

.cardOverlay {

  position: absolute;
  height: 100%;
  width: 100%;
  /* background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
   
    url('../../public/images/layer3.png'); */
  opacity: 0.9;
  background-size: cover;
  z-index: 4
}

.cardOverlay img {
  position: absolute;
  width: 100%;
  height: 100%;
  top: -3px;
  left: -8px;
}

.dropdown-menu {
  background: #031726
}

.minwBtn {
  min-width: 100px
}

@media screen and (max-width: 991px) {
  .navbar-toggler {
    padding: 0.25rem 0.75rem;
    font-size: 1.25rem;
    line-height: 1;
    background-color: #000;
    border: 1px solid transparent;
    border-radius: 0.25rem;
    transition: box-shadow 0.15s ease-in-out;
    cursor: pointer;
  }

  .navbar-toggler .icon i {
    display: flex;
    justify-content: center;

    vertical-align: middle;
    background-repeat: no-repeat;
    background-position: center;
    background-size: 100%;
    align-items: center;
    color: #FF7A00;
    font-size: 15px;
    font-weight: 700;

  }

  .custom-options {
    width: 100% !important;
  }
}


.custom-navigation button {
  display: block;
  margin-bottom: 2px;
  cursor: pointer;
  background: transparent;
  color: #fff;
  font-size: 15px;
  border: none;
  outline: none
}



.custom-navigation button .progress {
  width: 2px;
  height: 19px;
  /* position: absolute; */
  border-radius: 0;
  top: 0;
  left: -10px;
  background: #fff;
  transition: background-color 0.3s ease;
}

.custom-navigation button.active .progress {
  background-color: #f95f19;
  /* Active color */
}

.custom-navigation button.active {
  color: #f95f19 !important
}

.nav-mob {
  position: relative;
  z-index: 999;
}

@media(max-width:992px) {
  .nav-mob {
    justify-content: center;
    align-items: center;
  }


}
</style>
