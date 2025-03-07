import { createRouter, createWebHistory } from "vue-router";
import HomeItem from "./components/Home.vue";
import SignUp from "./components/SignUp.vue";
import SignIn from "./components/SignIn.vue";
import CreateCommunity from "./components/CreateCommunity.vue";
import OurCommunity from "./components/OurCommunity.vue";
import CommunityDetail from "./components/CommunityDetail.vue";
import UserProfile from "./components/Profile.vue";
import MyCarListing from "./components/MyCarListing.vue";
import CarShop from "./components/CarShop.vue";
import SingleCarlisting from "@/components/SingleCarlisting";
import SingleMarket from "./components/SingleMarket";
import MapComponent from "@/components/MapView";
import MapComponent2 from "@/components/MapView2";
import MapComponent3 from "@/components/MapView3";
import MapComponent4 from "@/components/MapView4";
import HomeLanding from "./components/HomeLanding.vue";
import OfferCar from "./components/Offer.vue";
import CarShopDetail from "./components/CarShopDetail.vue";
import CarsListing from "./components/CarsListing.vue";
import MarketPlace from "./components/MarketPlace.vue";
import CarsView from "@/components/CarsView";
import NotFound from "@/components/NotFound"; // Adjust the path as per your project structure
import CarsListingDetails from "@/components/CarsListingDetails.vue";
import DealersLogin from "@/components/DealersLogin";
import ForgetPassword from "@/components/FprgetPassword.vue";
import PrivacyPolicy from "./components/PrivacyPolicy.vue";
import TermsOfService from "./components/TermsOfService.vue";
import ContactUs from "./components/ContactUs.vue";
import FeaturedStory from "./components/FeaturedStory.vue";
import ForumPage from "./components/ForumPage.vue";
import FeaturedStories from "./components/FeaturedStories.vue";
import CoverPhoto from "./components/CoverPhoto.vue";
import SingleStory from "./components/SingleStory.vue";
import BannerStory from "./components/BannerStory.vue";
import cookies from "./components/cookies.vue";
import buyCar from "./components/buyCar.vue";
import buyCar2 from "./components/buyCar2.vue";
import buyCar3 from "./components/buyCar3.vue";
import buyCar4 from "./components/buyCar4.vue";
import sellCar from "./components/sellCar.vue";
import carDetails from "./components/carDetails.vue";
const routes = [
  {
    name: "HomeLanding",
    component: HomeLanding,
    path: "/",
  },
  {
    name: "BannerStory",
    component: BannerStory,
    path: "/banner",
  },
  {
    name: "CoverPhoto",
    component: CoverPhoto,
    path: "/cover",
  },
  {
    name: "HomeItem",
    component: HomeItem,
    path: "/homeitem",
  },

  {
    name: "SignUp",
    component: SignUp,
    path: "/signup",
  },
  {
    name: "SignIn",
    component: SignIn,
    path: "/signin",
  },
  // {
  //   name: "CreateCommunity",
  //   component: CreateCommunity,
  //   path: "/createcommunity/:id",
  // },

  {
    name: "CreateCommunityWithproduction_years",
    component: CreateCommunity,
    path: "/createcommunity/:make/:modal/:production_years/:specifications",
  },
  {
    name: "CreateCommunityWithOutproduction_years",
    component: CreateCommunity,
    path: "/createcommunity/:make/:modal/:specifications",
  },
  {
    name: "OurCommunity",
    component: OurCommunity,
    path: "/ourcommunity",
  },
  // {
  //   name: "CommunityDetail",
  //   component: CommunityDetail,
  //   path: "/communitydetails/:id/:fid",
  // },
  {
    name: "CommunityDetail",
    component: CommunityDetail,
    path: "/communitydetails/:id",
  },
  {
    name: "SingleStory",
    component: SingleStory,
    path: "/singlestory/:id",
  },
  {
    name: "UserProfile",
    component: UserProfile,
    path: "/profile",
  },
  {
    name: "MyCarListing",
    component: MyCarListing,
    path: "/mycarlisting",
  },
  {
    name: "CarShop",
    component: CarShop,
    path: "/carshop",
  },
  {
    name: "SingleCarlisting",
    component: SingleCarlisting,
    path: "/singlecarciew",
  },
  {
    name: "SingleCarlisting",
    component: SingleCarlisting,
    path: "/carListing:1",
  },
  {
    name: "SingleMaket",
    component: SingleMarket,
    path: "/singlemarketplace",
  },
  {
    name: "MarketPlace",
    component: MarketPlace,
    path: "/marketplace",
  },

  {
    name: "MapComponent",
    component: MapComponent,
    path: "/map",
  },
  {
    name: "MapComponent2",
    component: MapComponent2,
    path: "/map2",
  },
  {
    name: "MapComponent3",
    component: MapComponent3,
    path: "/map3",
  },
  {
    name: "MapComponent4",
    component: MapComponent4,
    path: "/map4",
  },
  {
    name: "CarsView",
    component: CarsView,
    path: "/cars",
  },
  {
    path: "/:catchAll(.*)",
    component: NotFound,
  },
  {
    name: "OfferCar",
    component: OfferCar,
    path: "/offer",
  },
  {
    name: "CarShopDetail",
    component: CarShopDetail,
    path: "/cardetail",
  },
  {
    name: "CarsListing",
    component: CarsListing,
    path: "/CarsListing",
  },
  {
    path: "/carslistingdetails",
    name: "CarsListingDetails",
    component: CarsListingDetails,
  },
  {
    path: "/dealerlogin",
    name: "DealersLogin",
    component: DealersLogin,
  },
  {
    path: "/forget",
    name: "ForgetPassword",
    component: ForgetPassword,
  },
  {
    path: "/privacypolicy",
    name: "PrivacyPolicy",
    component: PrivacyPolicy,
  },
  {
    path: "/termofservice",
    name: "TermsOfService",
    component: TermsOfService,
  },

  {
    path: "/cookies",
    name: "cookies",
    component: cookies,
  },
  {
    path: "/contact",
    name: "ContactUs",
    component: ContactUs,
  },
  {
    path: "/featuredstory",
    name: "FeaturedStory",
    component: FeaturedStory,
  },
  {
    path: "/community/:id",
    name: "ForumPage",
    component: ForumPage,
  },
  // {
  //   path: "/community/:make/:modal/:production_years/:specifications",
  //   name: "ForumPage",
  //   component: ForumPage,
  // },
  // {
  //   path: "/community/:make/:modal/:specifications",
  //   name: "ForumPage",
  //   component: ForumPage,
  // },
  {
    path: "/community/:make/:model/:production_years/:specifications",
    name: "ForumPageWithYears",
    component: ForumPage,
  },
  {
    path: "/community/:make/:model/:specifications",
    name: "ForumPageWithoutYears",
    component: ForumPage,
  },

  {
    path: "/stories",
    name: "FeaturedStories",
    component: FeaturedStories,
  },
  {
    path: "/buy",
    name: "buyCar",
    component: buyCar,
  },
  {
    path: "/buy2",
    name: "buyCar2",
    component: buyCar2,
  },
  {
    path: "/buy3",
    name: "buyCar3",
    component: buyCar3,
  },
  {
    path: "/buy4",
    name: "buyCar4",
    component: buyCar4,
  },
  {
    path: "/sell",
    name: "sellCar",
    component: sellCar,
  },
  {
    path: "/cardetails",
    name: "carDetails",
    component: carDetails,
  },
];

// Define a list of routes that require authentication
const protectedRoutes = [
  // "HomeLanding",
  // "HomeItem",
  // "ForumPage",
  // "CreateCommunity",
  // "OurCommunity",
  // "CommunityDetail",
  "UserProfile",
  // "MyCarListing",
  // "CarShop",
  // "SingleCarlisting",
  // "SingleMarket",
  "MapComponent",
  "MapComponent2",
  "MapComponent3",
  "MapComponent4",
  "CarsView",
  // "OfferCar",
  // "CarShopDetail",
  "CarsListing",
  "MarketPlace",
  // "ContactUs",
];
const router = createRouter({
  history: createWebHistory(),
  routes,
  // scrollBehavior(to, from, savedPosition) {
  //   if (savedPosition) {
  //     return savedPosition;
  //   } else {
  //     return { top: 0 };
  //   }
  // },
});

router.beforeEach((to, from, next) => {
  const isAuthenticated = JSON.parse(localStorage.getItem("login")) || false;

  // Define public routes
  const publicRoutes = ["SignIn", "SignUp", "DealersLogin"];

  // Check if the route is public
  const isPublicRoute = publicRoutes.includes(to.name);

  // Check if the route is protected
  const isProtectedRoute = protectedRoutes.includes(to.name);

  console.log(
    "balti",
    to.name,
    isAuthenticated,
    isProtectedRoute,
    isPublicRoute
  );

  if (isPublicRoute && isAuthenticated) {
    // Redirect authenticated users trying to access public routes to profile
    next("/profile");
  } else if (isProtectedRoute && !isAuthenticated) {
    // Redirect unauthenticated users trying to access protected routes to signin
    console.log("my check1");
    next("/signin");
  } else {
    console.log("my routes check2");
    console.log(
      "balti",
      to.name,
      isAuthenticated,
      isProtectedRoute,
      isPublicRoute
    );
    next(); // Proceed to the route
  }
});

/*
router.beforeEach((to, from, next) => {
  const isAuthenticated = JSON.parse(localStorage.getItem("login")) || false;

  const isProtectedRoute = protectedRoutes.includes(to.name);
  console.log("balti", to.name, isAuthenticated, isProtectedRoute);
  //
  if (to.name == "SignIn" && isAuthenticated) {
    next("/profile");
  } else if (to.name == "SignUp" && isAuthenticated) {
    next("/profile");
  } else if (to.name == "DealersLogin" && isAuthenticated) {
    next("/profile");
  } else if (isProtectedRoute && !isAuthenticated) {
    console.log("my check1");
    next("/signin"); // Redirect to signin if not authenticated
  } else if (!isAuthenticated) {
    next("/signin");
  } else {
    console.log("my routes check2");
    console.log("balti", to.name, isAuthenticated, isProtectedRoute);
    next(); // Proceed to the route
  }
});
*/
export default router;
