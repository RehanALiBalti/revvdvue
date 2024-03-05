import HomeItem from './components/Home.vue'
import SignUp from './components/SignUp.vue'
import SignIn from './components/SignIn.vue'
import CreateCommunity from './components/CreateCommunity.vue'
import OurCommunity from './components/OurCommunity.vue'
import CommunityDetail from './components/CommunityDetail.vue'
import UserProfile from './components/Profile.vue'
import MyCarListing from './components/MyCarListing.vue'
import CarShop from './components/CarShop.vue'
// import HeaderItem from './components/Header.vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes=[
    {
        name: 'HomeItem',
        component: HomeItem,
        path: '/'
    },
    {
        name: 'SignUp',
        component: SignUp,
        path: '/signup'
    },
    {
        name: 'SignIn',
        component: SignIn,
        path: '/signin'
    },
    {
        name: 'CreateCommunity',
        component: CreateCommunity,
        path: '/createcommunity'
    },
    {
        name: 'OurCommunity',
        component: OurCommunity,
        path: '/ourcommunity'
    },
    {
        name: 'CommunityDetail',
        component: CommunityDetail,
        path: '/communitydetail'
    },
    {
        name: 'UserProfile',
        component: UserProfile,
        path: '/profile'
    },
    {
        name: 'MyCarListing',
        component: MyCarListing,
        path: '/mycarlisting'
    },
    {
        name: 'CarShop',
        component: CarShop,
        path: '/carshop'
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router