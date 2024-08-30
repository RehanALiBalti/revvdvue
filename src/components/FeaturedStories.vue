<template>

    <section class="section-car-listing position-relative">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="heading-car">
                        <h1 class="banner-title">Weekly Stories</h1>
                    </div>
                    <div class="btns-community">
                        <div class="btn-div-create-forum position-relative">
                            <span class="border-bottom-btn border-top-btn position-absolute">
                                <img src="@/assets/images/Group12white.png" class="img-border position-absolute"
                                    alt="" />
                            </span>

                            <span class="border-bottom-btn border-top-btn border-right-radius position-absolute">
                                <img src="@/assets/images/Path467white.png" class="img-border position-absolute"
                                    alt="" />
                            </span>

                            <span
                                class="border-bottom-btn border-top-btn border-right-radius border-right-bottom-radius position-absolute">
                                <img src="@/assets/images/Path465white.png" class="img-border position-absolute"
                                    alt="" />
                            </span>
                            <router-link to="/CreateCommunity" class="signin-btnli signup-btnli">
                                {{ $t('createForum') }}
                            </router-link>
                            <span class="border-bottom-btn border-left-btn position-absolute">
                                <img src="@/assets/images/Group11white.png" class="img-border position-absolute"
                                    alt="" />
                            </span>
                            <span class="border-bottom-btn position-absolute">
                                <img src="@/assets/images/Path473white.png" class="img-border position-absolute"
                                    alt="" />
                            </span>
                        </div>
                        <div class="btn-div-create-forum position-relative">
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
                            <a href="" class="signin-btnli"> {{ $t('createClub') }} </a>
                            <span class="border-bottom-btn border-left-btn position-absolute">
                                <img src="@/assets/images/Group11.png" class="img-border position-absolute" alt="" />
                            </span>
                            <span class="border-bottom-btn position-absolute">
                                <img src="/assets/images/Path473.png" class="img-border position-absolute" alt="" />
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="section-car-listing-breadcrumb mb-5">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <nav aria-label="breadcrumb" class="nav-breadcrumb">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item">
                                <router-link class="breadcrumb-item-a-tag" to="/home">{{ $t('home') }}</router-link>
                            </li>
                            <li class="breadcrumb-item">
                                <router-link class="breadcrumb-item-a-tag" to="/ourcommunity">Weekly
                                    Stories</router-link>
                            </li>
                        </ol>
                    </nav>
                </div>
            </div>
        </div>
    </section>

    <section class="community-section my-5 pt-3">
        <div class="container">











            <div class="row g-4">
                <!-- <div class="col-md-3">
                    <div class="filter-box">
                        <h4 class="filter-title">{{ $t('filters') }}</h4>
                        <div class="row">
                            <div class="col-12">
                                <label for="models" class="form-label filter-label">{{ $t('make') }}</label>
                                <select id="models" class="form-select form-control form-input filter-select">
                                    <option value="">Any</option>
                                    <option value="AC">AC</option>
                                </select>
                            </div>
                            <div class="col-12">
                                <label for="models" class="form-label filter-label">{{ $t('models') }}</label>
                                <select id="models" class="form-select form-control form-input filter-select">
                                    <option value="">Any</option>
                                    <option value="Petite">Petite</option>
                                    <option value="2-Litre">2-Litre</option>
                                    <option value="Greyhound">Greyhound</option>
                                    <option value="Ace">Ace</option>
                                    <option value="Cobra">Cobra</option>
                                    <option value="3000ME">3000ME</option>
                                    <option value="Aceca">Aceca</option>
                                    <option value="Frua">Frua</option>
                                    <option value="Brooklands Ace">Brooklands Ace</option>
                                    <option value="Ace V8">Ace V8</option>
                                    <option value="Aceca">Aceca</option>
                                </select>
                            </div>

                            <div class="col-12">
                                <label for="bodyType" class="form-label filter-label">{{ $t('generation') }}</label>
                                <select id="bodyType" class="form-select form-control form-input filter-select">
                                    <option value="" selected>Any</option>
                                </select>
                            </div>

                            <div class="col-12">
                                <label for="fuelType" class="form-label filter-label">{{ $t('classification') }}
                                </label>
                                <select id="fuelType" class="form-select form-control form-input filter-select">
                                    <option value="">Any</option>
                                    <option value="Micro car">Micro car</option>
                                    <option value="Large car">Large car</option>
                                    <option value="Large car">Large car</option>
                                    <option value="Sports car">Sports car</option>
                                    <option value="Sports car">Sports car</option>
                                    <option value="Sports car">Sports car</option>
                                    <option value="Grand tourer">Grand tourer</option>
                                    <option value="Grand tourer">Grand tourer</option>
                                    <option value="Sports car">Sports car</option>
                                    <option value="Sports car">Sports car</option>
                                    <option value="Sports car">Sports car</option>
                                </select>
                            </div>

                            <div class="col-12">
                                <label for="seats" class="form-label filter-label">{{ $t('productionYears') }}</label>
                                <select id="seats" class="form-select form-control form-input filter-select">
                                    <option value="">Any</option>
                                    <option value="1952-1958">1952-1958</option>
                                    <option value="1947-1958">1947-1958</option>
                                    <option value="1959-1963">1959-1963</option>
                                    <option value="1953-1963">1953-1963</option>
                                    <option value="1962-1968, 1983-1990">
                                        1962-1968, 1983-1990
                                    </option>
                                    <option value="1979-1985">1979-1985</option>
                                    <option value="1954-1963">1954-1963</option>
                                    <option value="1965-1973">1965-1973</option>
                                    <option value="1993-1996">1993-1996</option>
                                    <option value="1997-2000">1997-2000</option>
                                    <option value="1998-2001">1998-2001</option>
                                </select>
                            </div>

                            <div class="col-12">
                                <label for="seats" class="form-label filter-label">{{ $t('countryOfOrigin') }}</label>
                                <select id="seats" class="form-select form-control form-input filter-select">
                                    <option value="">Any</option>
                                    <option value="United Kingdom">United Kingdom</option>
                                    <option value="United Kingdom">United Kingdom</option>
                                    <option value="United Kingdom">United Kingdom</option>
                                    <option value="United Kingdom">United Kingdom</option>
                                    <option value="United Kingdom">United Kingdom</option>
                                    <option value="United Kingdom">United Kingdom</option>
                                    <option value="United Kingdom">United Kingdom</option>
                                    <option value="United Kingdom">United Kingdom</option>
                                    <option value="United Kingdom">United Kingdom</option>
                                    <option value="United Kingdom">United Kingdom</option>
                                    <option value="United Kingdom">United Kingdom</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="filter-image-div my-4">
                        <img src="@/assets/images/Image18.png" class="img-fluid filter-image" alt="Image" />
                    </div>
                </div> -->

                <div class="col-md-12 px-4">

                    <div class="row">
                        <!-- template -->
                        <div class="card-sorting-content col-md-12" v-for="(car, index) in paginatedCars" :key="index">
                            <div class="main-slider weekly-slider">
                                <div class="swiper-container myCarListingCard-swiper-container">
                                    <swiper :effect="'cards'" :grabCursor="true" :modules="modules" :initialSlide="1"
                                        class="mySwiper swiper-no-shadow">
                                        <swiper-slide class="swiper-no-shadow" v-for="(image, idx) in car.images"
                                            :key="idx">
                                            <router-link class="d-block" :to="`/carListing${index + 1}`">
                                                <img :src="image" class="slider-img myCarListingCard-img" alt="car" />
                                            </router-link>
                                        </swiper-slide>
                                    </swiper>

                                    <span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
                                </div>
                                <div class="card-content-car">
                                    <div class="card-title-div flex">
                                        <h2 class="card-title-h2">
                                            {{ car.story_name }}
                                        </h2>
                                        <h4 class="card-title-h2">
                                            {{ car.title }} {{ car.year }}
                                        </h4>
                                    </div>
                                    <div>
                                        <small class="text-white">
                                            {{ car.story }}
                                        </small>
                                        <ul class="text-white">
                                            <li>Modification:{{ car.modifications }}</li>
                                            <li>Memorale:{{ car.memorable }}</li>

                                        </ul>
                                    </div>
                                    <ul class="user-details-car myCarListingCard-user-details-car">
                                        <li v-for="(detail, idx) in car.details" :key="idx" class="list-item-user">
                                            <div class="icon-user">
                                                <img :src="detail.icon" class="icon-user-img" alt="icon" />
                                            </div>
                                            <router-link class="a-tag-name-user" to="javascript:void(0);">
                                                {{ detail.value }}
                                            </router-link>
                                        </li>
                                    </ul>
                                    <div class="view-more-cars">
                                        <p class="card-text weekly-story-para-card">
                                            <a class="view-more-a-tag" href="">{{ $t('viewMore') }}</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- end template -->

                    </div>



                    <nav class="float-end my-4 community-pagination" aria-label="Page navigation">
                        <ul class="pagination">
                            <li class="page-item" :class="{ disabled: currentPage === 1 }">
                                <a class="page-link" href="#" aria-label="Previous"
                                    @click.prevent="goToPage(currentPage - 1)">
                                    <span aria-hidden="true"><i class="fa-solid fa-chevron-left"></i></span>
                                </a>
                            </li>
                            <li class="page-item" v-for="pageNumber in totalPages" :key="pageNumber">
                                <a class="page-link" href="#" @click.prevent="goToPage(pageNumber)"
                                    :class="{ 'active': pageNumber === currentPage }">{{ pageNumber }}</a>
                            </li>
                            <li class="page-item" :class="{ disabled: currentPage === totalPages }">
                                <a class="page-link" href="#" aria-label="Next"
                                    @click.prevent="goToPage(currentPage + 1)">
                                    <span aria-hidden="true"><i class="fa-solid fa-chevron-right"></i></span>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    </section>


</template>

<script>

// import Image1 from "@/assets/images/4image.png";
// import Image2 from "@/assets/images/d722fc518c6127ea183d184e5dc715e3.png";
// import Image3 from "@/assets/images/20210412111611_Ford_Territory_front.png";
// import Image4 from "@/assets/images/images1.png";
// import Image5 from "@/assets/images/36346b90e9ed41209ec6b093b61c21ef.png";
import icon1 from "@/assets/images/IconAwesome-user-alt.png";
// import icon2 from "@/assets/images/engine.png";
import icon3 from "@/assets/images/Iconmaterial-email.png";
// import 'swiper/css/effect-cards';
import { EffectCards } from 'swiper/modules';
//Import swiper js

//Import Swiper styles
// import "swiper/swiper-bundle.css";
import { Swiper, SwiperSlide } from 'swiper/vue';
import axios from 'axios';

//Import Swiper modules
// import { Pagination, Navigation } from 'swiper';
// Install Swiper modules
// Swiper.use([Pagination, Navigation])

export default {
    name: "FeaturedStories",
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
        return {
            modules: [EffectCards],
        };
    },
    data() {
        return {
            currentPage: 1,
            pageSize: 5, // Number of items per page
            swiper: null,
            // cars: [
            //     {
            //         title: "Koenigsegg agera one",
            //         quantity: 1,
            //         images: [Image1, Image2, Image3, Image4, Image5],
            //         details: [
            //             {
            //                 icon: icon1,
            //                 value: "Daniyal Doe",
            //             },
            //             {
            //                 icon: icon2,
            //                 value: "2,000,000",
            //             },
            //             {
            //                 icon: icon3,
            //                 value: "daniyaldoe@info.com",
            //             },
            //         ],
            //     },
            //     // Add more car data here
            //     {
            //         title: "Koenigsegg agera one",
            //         quantity: 2,
            //         images: [Image1, Image2, Image3, Image4, Image5],
            //         details: [
            //             {
            //                 icon: icon1,
            //                 value: "Daniyal Doe",
            //             },
            //             {
            //                 icon: icon2,
            //                 value: "2,000,000",
            //             },
            //             {
            //                 icon: icon3,
            //                 value: "daniyaldoe@info.com",
            //             },
            //         ],
            //     },
            //     {
            //         title: "Koenigsegg agera one",
            //         quantity: 3,
            //         images: [Image1, Image2, Image3, Image4, Image5],
            //         details: [
            //             {
            //                 icon: icon1,
            //                 value: "Daniyal Doe",
            //             },
            //             {
            //                 icon: icon2,
            //                 value: "2,000,000",
            //             },
            //             {
            //                 icon: icon3,
            //                 value: "daniyaldoe@info.com",
            //             },
            //         ],
            //     },
            //     {
            //         title: "Koenigsegg agera one",
            //         quantity: 4,
            //         images: [Image1, Image2, Image3, Image4, Image5],
            //         details: [
            //             {
            //                 icon: icon1,
            //                 value: "Daniyal Doe",
            //             },
            //             {
            //                 icon: icon2,
            //                 value: "2,000,000",
            //             },
            //             {
            //                 icon: icon3,
            //                 value: "daniyaldoe@info.com",
            //             },
            //         ],
            //     },
            //     {
            //         title: "Koenigsegg agera one",
            //         quantity: 5,
            //         images: [Image1, Image2, Image3, Image4, Image5],
            //         details: [
            //             {
            //                 icon: icon1,
            //                 value: "Daniyal Doe",
            //             },
            //             {
            //                 icon: icon2,
            //                 value: "2,000,000",
            //             },
            //             {
            //                 icon: icon3,
            //                 value: "daniyaldoe@info.com",
            //             },
            //         ],
            //     },
            //     {
            //         title: "Koenigsegg agera one",
            //         quantity: 6,
            //         images: [Image1, Image2, Image3, Image4, Image5],
            //         details: [
            //             {
            //                 icon: icon1,
            //                 value: "Daniyal Doe",
            //             },
            //             {
            //                 icon: icon2,
            //                 value: "2,000,000",
            //             },
            //             {
            //                 icon: icon3,
            //                 value: "daniyaldoe@info.com",
            //             },
            //         ],
            //     },
            //     {
            //         title: "Koenigsegg agera one",
            //         quantity: 7,
            //         images: [Image1, Image2, Image3, Image4, Image5],
            //         details: [
            //             {
            //                 icon: icon1,
            //                 value: "Daniyal Doe",
            //             },
            //             {
            //                 icon: icon2,
            //                 value: "2,000,000",
            //             },
            //             {
            //                 icon: icon3,
            //                 value: "daniyaldoe@info.com",
            //             },
            //         ],
            //     },
            //     {
            //         title: "Koenigsegg agera one",
            //         quantity: 8,
            //         images: [Image1, Image2, Image3, Image4, Image5],
            //         details: [
            //             {
            //                 icon: icon1,
            //                 value: "Daniyal Doe",
            //             },
            //             {
            //                 icon: icon2,
            //                 value: "2,000,000",
            //             },
            //             {
            //                 icon: icon3,
            //                 value: "daniyaldoe@info.com",
            //             },
            //         ],
            //     },
            //     {
            //         title: "Koenigsegg agera one",
            //         quantity: 9,
            //         images: [Image1, Image2, Image3, Image4, Image5],
            //         details: [
            //             {
            //                 icon: icon1,
            //                 value: "Daniyal Doe",
            //             },
            //             {
            //                 icon: icon2,
            //                 value: "2,000,000",
            //             },
            //             {
            //                 icon: icon3,
            //                 value: "daniyaldoe@info.com",
            //             },
            //         ],
            //     },
            //     {
            //         title: "Koenigsegg agera one",
            //         quantity: 10,
            //         images: [Image1, Image2, Image3, Image4, Image5],
            //         details: [
            //             {
            //                 icon: icon1,
            //                 value: "Daniyal Doe",
            //             },
            //             {
            //                 icon: icon2,
            //                 value: "2,000,000",
            //             },
            //             {
            //                 icon: icon3,
            //                 value: "daniyaldoe@info.com",
            //             },
            //         ],
            //     },
            //     {
            //         title: "Koenigsegg agera one",
            //         quantity: 11,
            //         images: [Image1, Image2, Image3, Image4, Image5],
            //         details: [
            //             {
            //                 icon: icon1,
            //                 value: "Daniyal Doe",
            //             },
            //             {
            //                 icon: icon2,
            //                 value: "2,000,000",
            //             },
            //             {
            //                 icon: icon3,
            //                 value: "daniyaldoe@info.com",
            //             },
            //         ],
            //     },
            // ],
            cars: [],
        };
    },
    computed: {
        totalPages() {
            return Math.ceil(this.cars.length / this.pageSize);
        },
        paginatedCars() {
            const startIndex = (this.currentPage - 1) * this.pageSize;
            const endIndex = startIndex + this.pageSize;
            return this.cars.slice(startIndex, endIndex);
        }
    },
    beforeUnmount() {
        // Remove event listener when component is unmounted
        this.GetStories()
    },
    mounted() {
        // Initialize Swiper
        // this.swiper = new Swiper(".myCarListingCard-swiper-container", {
        //     // Optional parameters
        //     effect: "cards",
        //     slidesPerView: 1,
        //     spaceBetween: 10,
        //     loop: true,
        //     // If you need pagination
        //     pagination: {
        //         el: ".swiper-pagination",
        //         clickable: true,
        //     },

        //     // Navigation arrows
        //     navigation: {
        //         nextEl: ".swiper-button-next",
        //         prevEl: ".swiper-button-prev",
        this.GetStories()
        //     },
        // });
    },
    methods: {
        // GetStories() {






        //     // Send POST request using Axios
        //     axios.get('http://52.59.240.119/api/stories')
        //         .then(response => {
        //             // Handle success
        //             console.log('get request successful:', response.data);
        //             // Handle success actions here
        //         })
        //         .catch(error => {
        //             // Handle error
        //             console.error('Error making post request:', error);
        //             // Handle error actions here
        //         });
        // },

        // GetStories() {
        //     axios.get('http://52.59.240.119/api/stories')
        //         .then(response => {
        //             // Handle success
        //             console.log('get request successful:', response.data);

        //             // Map the response data to the car objects
        //             this.cars = response.data.map(story => ({

        //                 title: story.make + ' ' + story.model, // Combine make and model for title
        //                 quantity: story.id, // Using id as quantity (adjust if necessary)
        //                 images: JSON.parse(story.images), // Assuming storyImages is an array of image URLs
        //                 details: [
        //                     {
        //                         icon: icon1,
        //                         value: story.user_name,
        //                     },
        //                     {
        //                         icon: icon2,
        //                         value: story.make + ' ' + story.model, // Combining make and model for details
        //                     },
        //                     {
        //                         icon: icon3,
        //                         value: story.user_email,
        //                     },
        //                 ],
        //             }));
        //         })
        //         .catch(error => {
        //             // Handle error
        //             console.error('Error making get request:', error);
        //         });
        // },
        GetStories() {
            axios.get('http://52.59.240.119/api/stories')
                .then(response => {
                    // Handle success
                    console.log('get request successful:', response.data.story_name);

                    // Base URL for images
                    const baseImageUrl = 'http://52.59.240.119/api/stories/';

                    // Map the response data to the car objects
                    this.cars = response.data.map(story => ({
                        title: `${story.make} ${story.model}`, // Combine make and model for title
                        quantity: story.id, // Using id as quantity (adjust if necessary)
                        story: story.story,
                        story_name: story.story_name,
                        year: story.year,
                        social_media: story.social_media,
                        modifications: story.modifications,
                        memorable: story.memorable,
                        images: JSON.parse(story.images).map(image => `${baseImageUrl}/${image}`), // Parse and prepend base URL
                        details: [
                            {
                                icon: icon1, // Replace with actual icon path
                                value: story.user_name,
                            },

                            {
                                icon: icon3, // Replace with actual icon path
                                value: story.user_email,
                            },
                        ],
                    }));
                })
                .catch(error => {
                    // Handle error
                    console.error('Error making get request:', error);
                });
        },
        goToPage(pageNumber) {
            if (pageNumber >= 1 && pageNumber <= this.totalPages) {
                this.currentPage = pageNumber;
            }
        },
        goToNextPage() {
            if (this.currentPage < this.totalPages) {
                this.currentPage++;
            }
        },

    }

};
</script>

<style scoped>
.carCard {
    background: #1A202C !important;
}

.swiper {
    width: 270px;
    height: 250px;
}

.swiper-slide img {
    width: 200px !important;
    height: 180px !important;

    /* -o-object-fit: contain !important;
    object-fit: cover !important; */
    max-width: 260px !important;
    border-radius: 10px !important;
    background-color: transparent !important;
    /* border: 1px solid #010101 !important; */
}

/* .swiper {
    width: 240px;
    height: 240px;
}

.swiper-slide {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 18px;
    font-size: 22px;
    font-weight: bold;
    color: #fff;
}

.swiper-slide:nth-child(1n) {
    background-color: rgb(206, 17, 17);
}

.swiper-slide:nth-child(2n) {
    background-color: rgb(0, 140, 255);
}

.swiper-slide:nth-child(3n) {
    background-color: rgb(10, 184, 111);
}

.swiper-slide:nth-child(4n) {
    background-color: rgb(211, 122, 7);
}

.swiper-slide:nth-child(5n) {
    background-color: rgb(118, 163, 12);
}

.swiper-slide:nth-child(6n) {
    background-color: rgb(180, 10, 47);
}

.swiper-slide:nth-child(7n) {
    background-color: rgb(35, 99, 19);
}

.swiper-slide:nth-child(8n) {
    background-color: rgb(0, 68, 255);
}

.swiper-slide:nth-child(9n) {
    background-color: rgb(218, 12, 218);
}

.swiper-slide:nth-child(10n) {
    background-color: rgb(54, 94, 77);
} */

@media (min-width: 576px) {
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

    .form-select {
        display: block;
        width: 100%;
        max-width: 920px;
        height: 50px;
        padding: 0.375rem 2.25rem 0.375rem 1.75rem;
        -moz-padding-start: calc(0.75rem - 3px);
        font-size: 20px;
        font-weight: 400;
        line-height: 1.5;
        color: #c5c5c5;
        background-color: #000b1c;
        /* background-image: url("../images/Icon\ awesome-chevron-down.png"); */
        background-image: url("../assets/images/Icon\ awesome-chevron-down.png");
        background-repeat: no-repeat;
        background-position: right 1.75rem center;
        background-size: 16px 12px;
        border: 1px solid #1a202c;
        border-radius: 5px;
        transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        font-family: "Gruppo", sans-serif;
        cursor: pointer;
    }

    .modal-dialog {
        width: 100%;
        max-width: 1000px;
        margin: 1.75rem auto;
        position: relative;
    }

    .form-select:focus {
        border-color: #f95f19;
        outline: 0;
        box-shadow: none;
    }
}

.swiper-container {
    width: 100% !important;
    max-width: 247px !important;
    margin: 0 auto !important;
    overflow: hidden !important;
}
</style>
