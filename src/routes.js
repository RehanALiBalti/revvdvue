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

const routes = [
  {
    name: "HomeLanding",
    component: HomeLanding,
    path: "/",
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
  {
    name: "CreateCommunity",
    component: CreateCommunity,
    path: "/createcommunity",
  },
  {
    name: "OurCommunity",
    component: OurCommunity,
    path: "/ourcommunity",
  },
  {
    name: "CommunityDetail",
    component: CommunityDetail,
    path: "/communitydetail",
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
    path: "/carslistingdetails/",
    name: "CarsListingDetails",
    component: CarsListingDetails,
  },
];

// Define a list of routes that require authentication
const protectedRoutes = [
  "HomeLanding",
  "HomeItem",

  "CreateCommunity",
  "OurCommunity",
  "CommunityDetail",
  "UserProfile",
  "MyCarListing",
  "CarShop",
  "SingleCarlisting",
  "SingleMarket",
  "MapComponent",
  "MapComponent2",
  "MapComponent3",
  "MapComponent4",
  "CarsView",
  "OfferCar",
  "CarShopDetail",
  "CarsListing",
  "MarketPlace",
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem("login") === "true";
  console.log(to.name);
  const isProtectedRoute = protectedRoutes.includes(to.name);
  if (to.name == "SignIn" && isAuthenticated) {
    next("/ourcommunity");
  }
  if (isProtectedRoute && !isAuthenticated) {
    next("/signin"); // Redirect to signin if not authenticated
  } else {
    next(); // Proceed to the route
  }
});

export default router;
