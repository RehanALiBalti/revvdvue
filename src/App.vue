<template>
  <div class="loader  " ref="loader" v-show="showVideo == 'true' || showVideo === true">
    <video id="myVideo" class="video-loader" playsinline ref="video" @ended="videoEnded">
      <source :src="videoSrc" type="video/mp4">
    </video>

    <div class="d-flex justify-content-center">
      <div class="btn-div-create-forum position-absolute" v-if="showStartButton">
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
        <button class="sound-btn-on-video" @click="playVideo">
          Start Engine
        </button>


        <span class="border-bottom-btn border-left-btn new-popup position-absolute">
          <img src="@/assets/images/Group11engine.png" class="img-border position-absolute" alt="" />
        </span>
        <span class="border-bottom-btn position-absolute">
          <img src="@/assets/images/Path473engine.png" class="img-border position-absolute" alt="" />
        </span>
      </div>
    </div>
    <div class="title-loader-div" v-show="isTextShow">
      <h1 class="banner-title new-heading-loader">
        Turn up the volume for better experience


      </h1>

    </div>
  </div>
  <div id="particlees">
    <!-- <vue-particles color="#dedede" particleOpacity="1" :particlesNumber="pNum" shapeType="circle" particleSize="4"
      linesColor="#dedede" linesWidth="1" lineLinked="true" moveSpeed="3" hoverEffect="true" hoverMode="grab"
      clickEffect="true" clickMode="push" v-if="$route.path !== '/termofservice'" /> -->
    <vue-particles color="#dedede" particleOpacity="1" :particlesNumber="pNum" shapeType="circle" particleSize="4"
      linesColor="#dedede" linesWidth="1" lineLinked="true" moveSpeed="3" hoverEffect="true" hoverMode="grab"
      clickEffect="true" clickMode="push"
      v-if="$route.path !== '/termofservice' && $route.path !== '/privacypolicy' && $route.path !== '/cookies' && $route.path !== '/map' && $route.path !== '/map2' && $route.path !== '/map3'" />

  </div>
  <div class="min-h-80vh ">
    <!-- <HeaderItem v-if="$route.path !== '/'"  /> -->
    <!-- <HeaderItem v-if="$route.path !== '/' && $route.path !== '/termofservice'" /> -->
    <HeaderItem
      v-if="$route.path !== '/' && $route.path !== '/termofservice' && $route.path !== '/privacypolicy' && $route.path !== '/cookies'" />


    <router-view />

  </div>
  <div v-if="$route.path !== '/termofservice' && $route.path !== '/privacypolicy'">
    <FooterSect v-if="IsFooter == true" />
    <FooterSect2 v-if="showFooterSect2" v-show="showF" />
  </div>

</template>

<script>
import HeaderItem from '@/components/Header.vue';
import FooterSect from '@/components/FooterSect'
import FooterSect2 from '@/components/FooterSect2'
import { useI18n } from 'vue-i18n';
import { useShowFooter } from '@/composables/showFooter';
import videoSrc from "./assets/images/landv.mp4"
import { useIslogin } from "@/composables/uselogin"
import { computed } from "vue";
const { state } = useIslogin();
export default {

  name: 'App',
  components: {
    HeaderItem,
    FooterSect,
    FooterSect2
  },

  data() {
    return {
      // isLogin2: false,
      showVideo: "false",
      isTextShow: true,
      videoSrc,
      showStartButton: true, // Controls visibility of "Start Engine" button
      isMuted: true, // Controls sound state
      soundButtonText: "Sound On", // Initial text for sound button
      selectedLanguage: 'en', // Default language
      pNum: 140,
      showF: true
    };
  },
  methods: {
    async fetchProfileData() {
      try {
        // console.log("Fetching profile data...");
        const data = await this.$store.dispatch("auth/getprofiledata");
        // console.log("Profile data:", data);

        console.log("in app data", data.result)
        if (data.result.identities) {
          this.showVideo = "false"
        }
        else {
          this.showVideo = "true"
        }

      } catch (error) {

        console.error("Error fetching profile data prof page:", error);
      }
    },
    playVideo() {
      const videoElement = this.$refs.video;

      if (videoElement instanceof HTMLVideoElement) {
        this.isTextShow = false;
        videoElement.play()
          .then(() => {
            console.log("Video is playing");
            this.showStartButton = false; // Hide "Start Engine" button
          })
          .catch(error => console.error("Error playing video:", error));
      } else {
        console.error("Video element not found.");
      }
    },

    toggleSound() {
      const videoElement = this.$refs.video;
      if (videoElement instanceof HTMLVideoElement) {
        this.isMuted = !this.isMuted; // Toggle mute state
        videoElement.muted = this.isMuted; // Apply mute/unmute

        // Change button text based on mute state
        this.soundButtonText = this.isMuted ? "Sound On" : "Sound Off";
      }
    },

    videoEnded() {
      console.log("Video ended s");
      // this.showVideo = false; // Set showVideo to false
      // localStorage.setItem('showVideo', 'false'); // Store showVideo in local storage
      this.$refs.loader.classList.remove("show"); // Remove "show" class when video ends
    },
    changeLanguage() {
      this.$i18n.locale = this.selectedLanguage;
    },
    isMobile() {
      return window.innerWidth <= 768; // Adjust the breakpoint as needed
    },
    updatePNumOnResize() {
      this.pNum = this.isMobile() ? 50 : 120;
    },
    checkLoginStatus() {

      console.log("login val", this.isLogin2)
      console.log("Computed isLogin2:", this.isLogin2, typeof this.isLogin2);

    }
  },
  setup() {
    const { state: IsFooter, setShowFooter } = useShowFooter();
    const changeFooter = (value) => {

      setShowFooter(value);
    };
    const isLogin2 = computed(() => state.isLogin);
    const { t } = useI18n();

    return {
      t,

      IsFooter,
      changeFooter,
      isLogin2
    };
  },
  beforeUnmount() {
    console.log("before unmount")
  },
  mounted() {
    console.log("in mount")
    // this.fetchProfileData()
    // this.showVideo = "false"
    const storedShowVideo = localStorage.getItem('showVideo');
    if (storedShowVideo === null) {
      // If 'showVideo' does not exist, set it to 'true'
      localStorage.setItem('showVideo', 'true');
    }
    this.showVideo = storedShowVideo
    // this.showVideo = true
    setTimeout(() => {
      localStorage.setItem('showVideo', 'true');
    }, 2000);


    // If a value exists in local storage, parse it and update showVideo
    // if (storedShowVideo !== null) {
    //   this.showVideo = storedShowVideo === 'true';
    // } else {
    //   // If no value exists in local storage, set showVideo to true and store it
    //   this.showVideo = true;
    //   localStorage.setItem('showVideo', 'true');
    // }
    this.checkLoginStatus()
    this.$nextTick(() => {
      console.log("in necttick:", this.showVideo, "loader", this.$refs.loader);
      if (this.showVideo == 'true' || this.showVideo == true) {
        console.log("in if show if true:", this.$refs.video);
        if (this.$refs.video instanceof HTMLVideoElement) {
          console.log("Video element is ready:", this.$refs.video);
        } else {
          console.error("Video element is not properly referenced:", this.$refs.video);
        }
        this.$refs.loader.classList.add("show"); // Add 'show' class on page load
      }
    });

    // Update pNum if needed on mounted
    this.pNum = this.isMobile() ? 100 : 120;
    if (this.$route.path == "/stories" || this.$route.path == "/banner") {
      this.changeFooter(false)

    }

    // Add resize event listener to update pNum dynamically on screen resize
    window.addEventListener('resize', this.updatePNumOnResize);
  },
  watch: {
    $route(newRoute) {
      if (newRoute.path === '/stories' || newRoute.path === '/banner') {

        this.changeFooter(false);
        this.IsFooter = false
        this.showVideo == true
        localStorage.setItem('showVideo', 'true');
      } else {

        this.changeFooter(true);
        this.IsFooter = true
        this.showVideo == true
        localStorage.setItem('showVideo', 'true');

      }
    },
  }
  ,


  computed: {
    showFooterSect2() {
      // Check if the current route includes 'landing'
      return this.$route.path.includes('landing');
    },
    showFooterSect() {
      // Check if the current route does not include 'landing'
      // or if it includes 'landing' and the path is not exactly 'landing'
      return !this.$route.path.includes('landing') ||
        (this.$route.path.includes('landing') && this.$route.path !== '/landing');
    },
    computedPNum() {
      return this.isMobile() ? 100 : this.pNum;
    }

  }
}
</script>

<style>
/* Import global CSS styles */
@import './assets/css/style.css';
@import './assets/css/carShop.css';
@import './assets/css/carListing7.css';

#particlees {

  width: 100%;
  /* height: 100vh; */


}
</style>
