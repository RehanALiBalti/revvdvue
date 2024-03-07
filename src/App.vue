<template>
  <div>
    <HeaderItem />
    <router-view />
    <FooterSect v-if="showFooterSect" />
    <FooterSect2 v-if="showFooterSect2" />
  </div>
</template>

<script>
import HeaderItem from '@/components/Header.vue';
import FooterSect from '@/components/FooterSect'
import FooterSect2 from '@/components/FooterSect2'
import { useI18n } from 'vue-i18n';

export default {
  name: 'App',
  components: {
    HeaderItem,
    FooterSect,
    FooterSect2
  },
  data() {
    return {
      selectedLanguage: 'en' // Default language
    };
  },
  methods: {
    changeLanguage() {
      this.$i18n.locale = this.selectedLanguage;
    }
  },
  setup() {
    const { t } = useI18n();

    return { t };
  },
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
    }
  }
}
</script>

<style>
/* Import global CSS styles */
@import './assets/css/style.css';
@import './assets/css/carShop.css';
@import './assets/css/carListing7.css';
</style>
