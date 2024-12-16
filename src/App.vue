<template>
  <div id="particlees">
    <!-- <vue-particles color="#dedede" particleOpacity="1" :particlesNumber="pNum" shapeType="circle" particleSize="4"
      linesColor="#dedede" linesWidth="1" lineLinked="true" moveSpeed="3" hoverEffect="true" hoverMode="grab"
      clickEffect="true" clickMode="push" v-if="$route.path !== '/termofservice'" /> -->
    <vue-particles color="#dedede" particleOpacity="1" :particlesNumber="pNum" shapeType="circle" particleSize="4"
      linesColor="#dedede" linesWidth="1" lineLinked="true" moveSpeed="3" hoverEffect="true" hoverMode="grab"
      clickEffect="true" clickMode="push" v-if="$route.path !== '/termofservice' && $route.path !== '/privacypolicy'" />

  </div>
  <div class="min-h-80vh">
    <!-- <HeaderItem v-if="$route.path !== '/'"  /> -->
    <!-- <HeaderItem v-if="$route.path !== '/' && $route.path !== '/termofservice'" /> -->
    <HeaderItem v-if="$route.path !== '/' && $route.path !== '/termofservice' && $route.path !== '/privacypolicy'" />


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

export default {

  name: 'App',
  components: {
    HeaderItem,
    FooterSect,
    FooterSect2
  },

  data() {
    return {
      selectedLanguage: 'en', // Default language
      pNum: 140,
      showF: true
    };
  },
  methods: {
    changeLanguage() {
      this.$i18n.locale = this.selectedLanguage;
    },
    isMobile() {
      return window.innerWidth <= 768; // Adjust the breakpoint as needed
    },
    updatePNumOnResize() {
      this.pNum = this.isMobile() ? 50 : 120;
    }
  },
  setup() {
    const { state: IsFooter, setShowFooter } = useShowFooter();
    const changeFooter = (value) => {

      setShowFooter(value);
    };
    const { t } = useI18n();

    return {
      t,

      IsFooter,
      changeFooter
    };
  },
  mounted() {
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
      } else {

        this.changeFooter(true);
        this.IsFooter = true

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
