// import { createApp } from "vue";
// import App from "./App.vue";
// import "bootstrap/dist/css/bootstrap.css";
// import "bootstrap";

// // import 'bootstrap-vue/dist/css/bootstrap-vue.css'
// import router from "./routes";
// import store from "./store";

// import { Amplify } from "aws-amplify";
// import { createI18n } from "vue-i18n";
// import "swiper/css";

// import "swiper/css/effect-cards";
// //Import Swiper styles
// // import "swiper/swiper-bundle.css";
// // Import language files
// import en from "./locales/en.json";
// import de from "./locales/de.json";
// import fr from "./locales/fr.json";
// // import vSelect from "vue-select";
// import VueImageZoomer from "vue-image-zoomer";
// import "vue-image-zoomer/dist/style.css";
// import "viewerjs/dist/viewer.css";
// import VueViewer from "v-viewer";
// import VueParticles from "vue-particles";
// import AvatarCropper from "vue-avatar-cropper";

// import VueFullPage from "vue-fullpage.js";
// import "fullpage.js/dist/fullpage.css";

// const i18n = createI18n({
//   legacy: false, // Use Composition API
//   locale: "en", // Set the initial locale
//   fallbackLocale: "en", // Fallback to English if translation not found
//   messages: {
//     en,
//     de,
//     fr,
//   },
// });

// // Amplify.configure({
// //   Auth: {
// //     region: "eu-north-1",
// //     userPoolId: "eu-north-1_udYkkIEkt",
// //     userPoolWebClientId: "3gdn1a64vc584t64t7e0up87el",
// //     authenticationFlowType: "USER_SRP_AUTH",
// //   },
// // });

// // for our testing
// Amplify.configure({
//   Auth: {
//     region: "eu-central-1",
//     userPoolId: "eu-central-1_CcqX3oNN7",
//     userPoolWebClientId: "83qurrrrh1r49cch9hl2hii2e",
//     authenticationFlowType: "USER_SRP_AUTH",
//     oauth: {
//       domain: "revdot.auth.eu-central-1.amazoncognito.com",
//       redirectSignIn: "https://revdout-local.d26xar06lf8hqo.amplifyapp.com/",
//       // redirectSignIn: "http://localhost:8081/",
//       redirectSignOut:
//         "https://revdout-local.d26xar06lf8hqo.amplifyapp.com/signin",
//       // redirectSignOut: "http://localhost:8081/",
//       scope: ["email", "profile", "openid", "aws.cognito.signin.user.admin"],
//       responseType: "code",
//     },
//   },
// });

// // for live
// // Amplify.configure({
// //   Auth: {
// //     region: "eu-central-1",
// //     userPoolId: "eu-central-1_09WbuSvnw",
// //     userPoolWebClientId: "4nse3u3jp2b50nn5a8693liv3t",
// //     authenticationFlowType: "USER_SRP_AUTH",
// //     oauth: {
// //       domain: "rev-dev.auth.eu-central-1.amazoncognito.com",
// //       redirectSignIn: "https://master.d2r1t98mmb0340.amplifyapp.com/",
// //       // redirectSignIn: "http://localhost:8081/",
// //       redirectSignOut: "https://master.d2r1t98mmb0340.amplifyapp.com/signin",
// //       // redirectSignOut: "http://localhost:8081/",
// //       scope: ["email", "profile", "openid", "aws.cognito.signin.user.admin"],
// //       responseType: "code",
// //     },
// //   },
// // });

// createApp(App)
//   .use(router)
//   .use(VueImageZoomer)
//   .use(i18n)
//   .use(store)
//   .use(VueViewer)
//   .use(VueParticles)
//   .use(AvatarCropper)
//   .use(VueFullPage)
//   .mount("#app");

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
import "viewerjs/dist/viewer.css";
import VueViewer from "v-viewer";
import VueParticles from "vue-particles";
import AvatarCropper from "vue-avatar-cropper";

import VueFullPage from "vue-fullpage.js";
import "fullpage.js/dist/fullpage.css";

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
// fore testing
Amplify.configure({
  Auth: {
    region: "eu-central-1",
    userPoolId: "eu-central-1_CcqX3oNN7",
    userPoolWebClientId: "83qurrrrh1r49cch9hl2hii2e",
    authenticationFlowType: "USER_SRP_AUTH",
    oauth: {
      domain: "revdot.auth.eu-central-1.amazoncognito.com",
      redirectSignIn: "https://revdout-local.d26xar06lf8hqo.amplifyapp.com/",
      // redirectSignIn: "http://localhost:8081/",
      redirectSignOut:
        "https://revdout-local.d26xar06lf8hqo.amplifyapp.com/signin",
      // redirectSignOut: "http://localhost:8081/",
      scope: ["email", "profile", "openid", "aws.cognito.signin.user.admin"],
      responseType: "code",
    },
  },
});
// for live
// Amplify.configure({
//   Auth: {
//     region: "eu-central-1",
//     userPoolId: "eu-central-1_09WbuSvnw",
//     userPoolWebClientId: "4nse3u3jp2b50nn5a8693liv3t",
//     authenticationFlowType: "USER_SRP_AUTH",
//     oauth: {
//       domain: "rev-dev.auth.eu-central-1.amazoncognito.com",
//       redirectSignIn: "https://master.d2r1t98mmb0340.amplifyapp.com/",
//       // redirectSignIn: "http://localhost:8081/",
//       redirectSignOut: "https://master.d2r1t98mmb0340.amplifyapp.com/signin",
//       // redirectSignOut: "http://localhost:8081/",
//       scope: ["email", "profile", "openid", "aws.cognito.signin.user.admin"],
//       responseType: "code",
//     },
//   },
// });

createApp(App)
  .use(router)
  .use(VueImageZoomer)
  .use(i18n)
  .use(store)
  .use(VueViewer)
  .use(VueParticles)
  .use(AvatarCropper)
  .use(VueFullPage)
  .mount("#app");
