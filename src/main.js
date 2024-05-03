import { createApp } from "vue";
import App from "./App.vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap";

// import 'bootstrap-vue/dist/css/bootstrap-vue.css'
import router from "./routes";
import store from "./store";
import { Amplify } from "aws-amplify";
import { createI18n } from "vue-i18n";
import "swiper/css";

import "swiper/css/effect-cards";
//Import Swiper styles
// import "swiper/swiper-bundle.css";
// Import language files
import en from "./locales/en.json";
import de from "./locales/de.json";
import fr from "./locales/fr.json";
// import vSelect from "vue-select";
import VueImageZoomer from "vue-image-zoomer";
import "vue-image-zoomer/dist/style.css";

const i18n = createI18n({
  legacy: false, // Use Composition API
  locale: "en", // Set the initial locale
  fallbackLocale: "en", // Fallback to English if translation not found
  messages: {
    en,
    de,
    fr,
  },
});

// Amplify.configure({
//   Auth: {
//     region: "eu-north-1",
//     userPoolId: "eu-north-1_udYkkIEkt",
//     userPoolWebClientId: "3gdn1a64vc584t64t7e0up87el",
//     authenticationFlowType: "USER_SRP_AUTH",
//   },
// });
Amplify.configure({
  Auth: {
    region: "eu-north-1",
    userPoolId: "eu-north-1_udYkkIEkt",
    userPoolWebClientId: "3gdn1a64vc584t64t7e0up87el",
    authenticationFlowType: "USER_SRP_AUTH",
    oauth: {
      domain: "revdot.auth.eu-north-1.amazoncognito.com",
      redirectSignIn: "https://master.d3fzkz9eceedzm.amplifyapp.com/",
      // redirectSignIn: "http://localhost:8081/",
      redirectSignOut: "https://master.d3fzkz9eceedzm.amplifyapp.com/",
      // redirectSignOut: "http://localhost:8081/",
      scope: ["email", "profile", "openid", "aws.cognito.signin.user.admin'"],
      responseType: "code",
    },
  },
});

createApp(App)
  .use(router)
  .use(VueImageZoomer)
  .use(i18n)
  .use(store)
  .mount("#app");
