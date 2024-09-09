<template>



    <section class="community-section my-5 pt-3">
        <div class="container">
            <!-- Tabs -->
            <div class="row mb-2">
                <div v-for="(tab, index) in tabs" :key="index"
                    :class="['col-md-2', { 'active-tab': activeTab === index }]" @click="activeTab = index">
                    <div class="btn-div-create-forum position-relative"
                        :class="['w-100', { 'btn-active': activeTab === index, 'btn-inactive': activeTab !== index }]">
                        <span class="border-bottom-btn border-top-btn position-absolute">
                            <img :src="getImage(tab.img1, index)" class="img-border position-absolute" alt="" />
                        </span>
                        <span class="border-bottom-btn border-top-btn border-right-radius position-absolute">
                            <img :src="getImage(tab.img2, index)" class="img-border position-absolute" alt="" />
                        </span>
                        <span
                            class="border-bottom-btn border-top-btn border-right-radius border-right-bottom-radius position-absolute">
                            <img :src="getImage(tab.img3, index)" class="img-border position-absolute" alt="" />
                        </span>
                        <span class="signin-btnli">{{ tab.name }}</span>
                        <span class="border-bottom-btn border-left-btn position-absolute">
                            <img :src="getImage(tab.img4, index)" class="img-border position-absolute" alt="" />
                        </span>
                        <span class="border-bottom-btn position-absolute">
                            <img :src="getImage(tab.img5, index)" class="img-border position-absolute" alt="" />
                        </span>
                    </div>
                </div>
            </div>

            <!-- Tab Content -->
            <div v-if="activeTab === 0">
                <div class="row mb-2">
                    <!-- <div class="col-md-2">
                    <div class="btn-div-create-forum position-relative">
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
                        <router-link to="/CreateCommunity" class="signin-btnli signup-btnli">
                            {{ $t('Car Enthusiast') }}
                        </router-link>
                        <span class="border-bottom-btn border-left-btn position-absolute">
                            <img src="@/assets/images/Group11white.png" class="img-border position-absolute" alt="" />
                        </span>
                        <span class="border-bottom-btn position-absolute">
                            <img src="@/assets/images/Path473white.png" class="img-border position-absolute" alt="" />
                        </span>
                    </div>
                </div>
                <div class="col-md-2">
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
                        <a href="" class="signin-btnli"> {{ $t('Car Garage') }} </a>
                        <span class="border-bottom-btn border-left-btn position-absolute">
                            <img src="@/assets/images/Group11.png" class="img-border position-absolute" alt="" />
                        </span>
                        <span class="border-bottom-btn position-absolute">
                            <img src="/assets/images/Path473.png" class="img-border position-absolute" alt="" />
                        </span>
                    </div>
                </div>
                <div class="col-md-2">
                    <div class="btn-div-create-forum position-relative w-100">
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
                        <router-link to="/CreateCommunity" class="signin-btnli signup-btnli">
                            {{ $t('Car Modification/Tunning Shop') }}
                        </router-link>
                        <span class="border-bottom-btn border-left-btn position-absolute">
                            <img src="@/assets/images/Group11white.png" class="img-border position-absolute" alt="" />
                        </span>
                        <span class="border-bottom-btn position-absolute">
                            <img src="@/assets/images/Path473white.png" class="img-border position-absolute" alt="" />
                        </span>
                    </div>
                </div>
                <div class="col-md-2">
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
                        <a href="" class="signin-btnli"> {{ $t('Car Club') }} </a>
                        <span class="border-bottom-btn border-left-btn position-absolute">
                            <img src="@/assets/images/Group11.png" class="img-border position-absolute" alt="" />
                        </span>
                        <span class="border-bottom-btn position-absolute">
                            <img src="/assets/images/Path473.png" class="img-border position-absolute" alt="" />
                        </span>
                    </div>
                </div>
                <div class="col-md-2">
                    <div class="btn-div-create-forum position-relative">
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
                        <router-link to="/CreateCommunity" class="signin-btnli signup-btnli">
                            {{ $t('Motorbike Enthusiast') }}
                        </router-link>
                        <span class="border-bottom-btn border-left-btn position-absolute">
                            <img src="@/assets/images/Group11white.png" class="img-border position-absolute" alt="" />
                        </span>
                        <span class="border-bottom-btn position-absolute">
                            <img src="@/assets/images/Path473white.png" class="img-border position-absolute" alt="" />
                        </span>
                    </div>
                </div>
                <div class="col-md-2">
                    <div class="btn-div-create-forum position-relative">
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
                        <router-link to="/CreateCommunity" class="signin-btnli signup-btnli">
                            {{ $t('Automotive Photographer') }}
                        </router-link>
                        <span class="border-bottom-btn border-left-btn position-absolute">
                            <img src="@/assets/images/Group11white.png" class="img-border position-absolute" alt="" />
                        </span>
                        <span class="border-bottom-btn position-absolute">
                            <img src="@/assets/images/Path473white.png" class="img-border position-absolute" alt="" />
                        </span>
                    </div>
                </div> -->


                </div>
                <div class="row">
                    <div class="col-md-12">
                        <div class="card-sorting-content col-md-12">
                            <div class="main-slider weekly-slider">
                                <div class="swiper-container myCarListingCard-swiper-container">
                                    <swiper :effect="'cards'" :grabCursor="true" :modules="modules" :initialSlide="1"
                                        class="mySwiper swiper-no-shadow">
                                        <swiper-slide class="swiper-no-shadow" v-for="(image, idx) in images"
                                            :key="idx">
                                            <router-link class="d-block" :to="`/carListing${index + 1}`">
                                                <img :src="image" class="slider-img myCarListingCard-img" alt="car" />
                                            </router-link>
                                        </swiper-slide>
                                    </swiper>

                                    <span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
                                </div>
                                <div class="card-content-car">
                                    <div class="card-title-div d-flex justify-content-between w-100 align-items-center">
                                        <h2 class="text-white">
                                            Koenigsegg agera one <span> 1 </span>
                                        </h2>
                                        <h4 class="text-white">
                                            Weekly one:1
                                        </h4>

                                    </div>
                                    <ul class="user-details-car myCarListingCard-user-details-car">
                                        <li class="list-item-user">
                                            <div class="icon-user">
                                                <img :src="icon3" class="icon-user-img" alt="icon" />
                                            </div>
                                            <router-link class="a-tag-name-user" to="javascript:void(0);">
                                                https://www.instagram.com/DaniyalDoe
                                            </router-link>
                                        </li>
                                    </ul>
                                    <div>
                                        <p class="text-white">
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                            Lorem
                                            Ipsum has been the industry's standard dummy text ever since the 1500s, when
                                            an
                                            unknown printer took a galley of type and scrambled it to make a type
                                            specimen
                                            book. It has survived not only five centuries, but also the leap into
                                            electronic
                                            typesetting,
                                        </p>
                                    </div>
                                    <div class="view-more-cars">
                                        <p class="card-text weekly-story-para-card">
                                            <a class="view-more-a-tag" href="">{{ $t('viewMore') }}</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div class="row g-4">
                    <div class="col-md-3">
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
                                    <label for="seats" class="form-label filter-label">{{ $t('productionYears')
                                        }}</label>
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
                                    <label for="seats" class="form-label filter-label">{{ $t('countryOfOrigin')
                                        }}</label>
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
                    </div>

                    <div class="col-md-9 px-4">
                        <div class="row">
                            <!-- template -->
                            <div class="card-sorting-content col-md-12" v-for="(car, index) in paginatedCars"
                                :key="index">
                                <div class="main-slider weekly-slider">
                                    <div class="swiper-container myCarListingCard-swiper-container">
                                        <swiper :effect="'cards'" :grabCursor="true" :modules="modules"
                                            :initialSlide="1" class="mySwiper swiper-no-shadow">
                                            <swiper-slide class="swiper-no-shadow" v-for="(image, idx) in car.images"
                                                :key="idx">
                                                <router-link class="d-block" :to="`/carListing${index + 1}`">
                                                    <img :src="image" class="slider-img myCarListingCard-img"
                                                        alt="car" />
                                                </router-link>
                                            </swiper-slide>
                                        </swiper>

                                        <span class="swiper-notification" aria-live="assertive"
                                            aria-atomic="true"></span>
                                    </div>
                                    <div class="card-content-car">
                                        <div class="card-title-div flex">
                                            <h2 class="card-title-h2">
                                                {{ car.title }}: <span> {{ car.quantity }} </span>
                                            </h2>
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
                <!-- Add content here -->
            </div>
            <div v-else-if="activeTab === 1">
                <div class="row mb-2">
                    <!-- <div class="col-md-2">
                    <div class="btn-div-create-forum position-relative">
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
                        <router-link to="/CreateCommunity" class="signin-btnli signup-btnli">
                            {{ $t('Car Enthusiast') }}
                        </router-link>
                        <span class="border-bottom-btn border-left-btn position-absolute">
                            <img src="@/assets/images/Group11white.png" class="img-border position-absolute" alt="" />
                        </span>
                        <span class="border-bottom-btn position-absolute">
                            <img src="@/assets/images/Path473white.png" class="img-border position-absolute" alt="" />
                        </span>
                    </div>
                </div>
                <div class="col-md-2">
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
                        <a href="" class="signin-btnli"> {{ $t('Car Garage') }} </a>
                        <span class="border-bottom-btn border-left-btn position-absolute">
                            <img src="@/assets/images/Group11.png" class="img-border position-absolute" alt="" />
                        </span>
                        <span class="border-bottom-btn position-absolute">
                            <img src="/assets/images/Path473.png" class="img-border position-absolute" alt="" />
                        </span>
                    </div>
                </div>
                <div class="col-md-2">
                    <div class="btn-div-create-forum position-relative w-100">
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
                        <router-link to="/CreateCommunity" class="signin-btnli signup-btnli">
                            {{ $t('Car Modification/Tunning Shop') }}
                        </router-link>
                        <span class="border-bottom-btn border-left-btn position-absolute">
                            <img src="@/assets/images/Group11white.png" class="img-border position-absolute" alt="" />
                        </span>
                        <span class="border-bottom-btn position-absolute">
                            <img src="@/assets/images/Path473white.png" class="img-border position-absolute" alt="" />
                        </span>
                    </div>
                </div>
                <div class="col-md-2">
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
                        <a href="" class="signin-btnli"> {{ $t('Car Club') }} </a>
                        <span class="border-bottom-btn border-left-btn position-absolute">
                            <img src="@/assets/images/Group11.png" class="img-border position-absolute" alt="" />
                        </span>
                        <span class="border-bottom-btn position-absolute">
                            <img src="/assets/images/Path473.png" class="img-border position-absolute" alt="" />
                        </span>
                    </div>
                </div>
                <div class="col-md-2">
                    <div class="btn-div-create-forum position-relative">
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
                        <router-link to="/CreateCommunity" class="signin-btnli signup-btnli">
                            {{ $t('Motorbike Enthusiast') }}
                        </router-link>
                        <span class="border-bottom-btn border-left-btn position-absolute">
                            <img src="@/assets/images/Group11white.png" class="img-border position-absolute" alt="" />
                        </span>
                        <span class="border-bottom-btn position-absolute">
                            <img src="@/assets/images/Path473white.png" class="img-border position-absolute" alt="" />
                        </span>
                    </div>
                </div>
                <div class="col-md-2">
                    <div class="btn-div-create-forum position-relative">
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
                        <router-link to="/CreateCommunity" class="signin-btnli signup-btnli">
                            {{ $t('Automotive Photographer') }}
                        </router-link>
                        <span class="border-bottom-btn border-left-btn position-absolute">
                            <img src="@/assets/images/Group11white.png" class="img-border position-absolute" alt="" />
                        </span>
                        <span class="border-bottom-btn position-absolute">
                            <img src="@/assets/images/Path473white.png" class="img-border position-absolute" alt="" />
                        </span>
                    </div>
                </div> -->


                </div>
                <div class="row">
                    <div class="col-md-12">
                        <div class="card-sorting-content col-md-12">
                            <div class="main-slider weekly-slider">
                                <div class="swiper-container myCarListingCard-swiper-container">
                                    <swiper :effect="'cards'" :grabCursor="true" :modules="modules" :initialSlide="1"
                                        class="mySwiper swiper-no-shadow">
                                        <swiper-slide class="swiper-no-shadow" v-for="(image, idx) in images"
                                            :key="idx">
                                            <router-link class="d-block" :to="`/carListing${index + 1}`">
                                                <img :src="image" class="slider-img myCarListingCard-img" alt="car" />
                                            </router-link>
                                        </swiper-slide>
                                    </swiper>

                                    <span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
                                </div>
                                <div class="card-content-car">
                                    <div class="card-title-div d-flex justify-content-between w-100 align-items-center">
                                        <h2 class="text-white">
                                            Koenigsegg agera one <span> 1 </span>
                                        </h2>
                                        <h4 class="text-white">
                                            Weekly one:1
                                        </h4>

                                    </div>
                                    <ul class="user-details-car myCarListingCard-user-details-car">
                                        <li class="list-item-user">
                                            <div class="icon-user">
                                                <img :src="icon3" class="icon-user-img" alt="icon" />
                                            </div>
                                            <router-link class="a-tag-name-user" to="javascript:void(0);">
                                                https://www.instagram.com/DaniyalDoe
                                            </router-link>
                                        </li>
                                    </ul>
                                    <div>
                                        <p class="text-white">
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                            Lorem
                                            Ipsum has been the industry's standard dummy text ever since the 1500s, when
                                            an
                                            unknown printer took a galley of type and scrambled it to make a type
                                            specimen
                                            book. It has survived not only five centuries, but also the leap into
                                            electronic
                                            typesetting,
                                        </p>
                                    </div>
                                    <div class="view-more-cars">
                                        <p class="card-text weekly-story-para-card">
                                            <a class="view-more-a-tag" href="">{{ $t('viewMore') }}</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div class="row g-4">
                    <div class="col-md-3">
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
                                    <label for="seats" class="form-label filter-label">{{ $t('productionYears')
                                        }}</label>
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
                                    <label for="seats" class="form-label filter-label">{{ $t('countryOfOrigin')
                                        }}</label>
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
                    </div>

                    <div class="col-md-9 px-4">
                        <div class="row">
                            <!-- template -->
                            <div class="card-sorting-content col-md-12" v-for="(car, index) in paginatedCars"
                                :key="index">
                                <div class="main-slider weekly-slider">
                                    <div class="swiper-container myCarListingCard-swiper-container">
                                        <swiper :effect="'cards'" :grabCursor="true" :modules="modules"
                                            :initialSlide="1" class="mySwiper swiper-no-shadow">
                                            <swiper-slide class="swiper-no-shadow" v-for="(image, idx) in car.images"
                                                :key="idx">
                                                <router-link class="d-block" :to="`/carListing${index + 1}`">
                                                    <img :src="image" class="slider-img myCarListingCard-img"
                                                        alt="car" />
                                                </router-link>
                                            </swiper-slide>
                                        </swiper>

                                        <span class="swiper-notification" aria-live="assertive"
                                            aria-atomic="true"></span>
                                    </div>
                                    <div class="card-content-car">
                                        <div class="card-title-div flex">
                                            <h2 class="card-title-h2">
                                                {{ car.title }}: <span> {{ car.quantity }} </span>
                                            </h2>
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
            <div v-else-if="activeTab === 2">
                <h2>Car Modification/Tuning Shop Content</h2>
                <!-- Add content here -->
            </div>
            <div v-else-if="activeTab === 3">
                <h2>Car Club Content</h2>
                <!-- Add content here -->
            </div>
            <div v-else-if="activeTab === 4">
                <h2>Motorbike Enthusiast Content</h2>
                <!-- Add content here -->
            </div>
            <div v-else-if="activeTab === 5">
                <h2>Automotive Photographer Content</h2>
                <!-- Add content here -->
            </div>


        </div>













    </section>


</template>

<script>

import Image1 from "@/assets/images/4image.png";
import Image2 from "@/assets/images/d722fc518c6127ea183d184e5dc715e3.png";
import Image3 from "@/assets/images/20210412111611_Ford_Territory_front.png";
import Image4 from "@/assets/images/images1.png";
import Image5 from "@/assets/images/36346b90e9ed41209ec6b093b61c21ef.png";
import icon1 from "@/assets/images/IconAwesome-user-alt.png";
import icon2 from "@/assets/images/engine.png";
import icon3 from "@/assets/images/Iconmaterial-email.png";
// import 'swiper/css/effect-cards';
import { EffectCards } from 'swiper/modules';
//Import swiper js
import img1 from "@/assets/images/Group12white.png"
import img2 from "@/assets/images/Path467white.png"
import img3 from "@/assets/images/Path465white.png"
import img4 from "@/assets/images/Group11white.png"
import img5 from "@/assets/images/Path473white.png"

import actimg1 from "@/assets/images/Group12.png"
import actimg2 from "@/assets/images/Path467.png"
import actimg3 from "@/assets/images/Path465.png"
import actimg4 from "@/assets/images/Group11.png"
import actimg5 from "@/assets/images/Path473.png"
//Import Swiper styles
// import "swiper/swiper-bundle.css";
import { Swiper, SwiperSlide } from 'swiper/vue';

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

            activeTab: 0,
            tabs: [
                {
                    name: "Car Enthusiast",
                    img1: img1,
                    img2: img2,
                    img3: img3,
                    img4: img4,
                    img5: img5
                },
                {
                    name: "Car Garage",
                    img1: actimg1,
                    img2: actimg2,
                    img3: actimg3,
                    img4: actimg4,
                    img5: actimg5
                },
                {
                    name: "Car Garage",
                    img1: actimg1,
                    img2: actimg2,
                    img3: actimg3,
                    img4: actimg4,
                    img5: actimg5
                },
                // Add more tabs as needed
            ],

            currentPage: 1,
            pageSize: 5, // Number of items per page
            swiper: null,
            images: [Image1, Image2, Image3, Image4, Image5],
            cars: [
                {
                    title: "Koenigsegg agera one",
                    quantity: 1,
                    images: [Image1, Image2, Image3, Image4, Image5],
                    details: [
                        {
                            icon: icon1,
                            value: "Daniyal Doe",
                        },
                        {
                            icon: icon2,
                            value: "2,000,000",
                        },
                        {
                            icon: icon3,
                            value: "daniyaldoe@info.com",
                        },
                    ],
                },
                // Add more car data here
                {
                    title: "Koenigsegg agera one",
                    quantity: 2,
                    images: [Image1, Image2, Image3, Image4, Image5],
                    details: [
                        {
                            icon: icon1,
                            value: "Daniyal Doe",
                        },
                        {
                            icon: icon2,
                            value: "2,000,000",
                        },
                        {
                            icon: icon3,
                            value: "daniyaldoe@info.com",
                        },
                    ],
                },
                {
                    title: "Koenigsegg agera one",
                    quantity: 3,
                    images: [Image1, Image2, Image3, Image4, Image5],
                    details: [
                        {
                            icon: icon1,
                            value: "Daniyal Doe",
                        },
                        {
                            icon: icon2,
                            value: "2,000,000",
                        },
                        {
                            icon: icon3,
                            value: "daniyaldoe@info.com",
                        },
                    ],
                },
                {
                    title: "Koenigsegg agera one",
                    quantity: 4,
                    images: [Image1, Image2, Image3, Image4, Image5],
                    details: [
                        {
                            icon: icon1,
                            value: "Daniyal Doe",
                        },
                        {
                            icon: icon2,
                            value: "2,000,000",
                        },
                        {
                            icon: icon3,
                            value: "daniyaldoe@info.com",
                        },
                    ],
                },
                {
                    title: "Koenigsegg agera one",
                    quantity: 5,
                    images: [Image1, Image2, Image3, Image4, Image5],
                    details: [
                        {
                            icon: icon1,
                            value: "Daniyal Doe",
                        },
                        {
                            icon: icon2,
                            value: "2,000,000",
                        },
                        {
                            icon: icon3,
                            value: "daniyaldoe@info.com",
                        },
                    ],
                },
                {
                    title: "Koenigsegg agera one",
                    quantity: 6,
                    images: [Image1, Image2, Image3, Image4, Image5],
                    details: [
                        {
                            icon: icon1,
                            value: "Daniyal Doe",
                        },
                        {
                            icon: icon2,
                            value: "2,000,000",
                        },
                        {
                            icon: icon3,
                            value: "daniyaldoe@info.com",
                        },
                    ],
                },
                {
                    title: "Koenigsegg agera one",
                    quantity: 7,
                    images: [Image1, Image2, Image3, Image4, Image5],
                    details: [
                        {
                            icon: icon1,
                            value: "Daniyal Doe",
                        },
                        {
                            icon: icon2,
                            value: "2,000,000",
                        },
                        {
                            icon: icon3,
                            value: "daniyaldoe@info.com",
                        },
                    ],
                },
                {
                    title: "Koenigsegg agera one",
                    quantity: 8,
                    images: [Image1, Image2, Image3, Image4, Image5],
                    details: [
                        {
                            icon: icon1,
                            value: "Daniyal Doe",
                        },
                        {
                            icon: icon2,
                            value: "2,000,000",
                        },
                        {
                            icon: icon3,
                            value: "daniyaldoe@info.com",
                        },
                    ],
                },
                {
                    title: "Koenigsegg agera one",
                    quantity: 9,
                    images: [Image1, Image2, Image3, Image4, Image5],
                    details: [
                        {
                            icon: icon1,
                            value: "Daniyal Doe",
                        },
                        {
                            icon: icon2,
                            value: "2,000,000",
                        },
                        {
                            icon: icon3,
                            value: "daniyaldoe@info.com",
                        },
                    ],
                },
                {
                    title: "Koenigsegg agera one",
                    quantity: 10,
                    images: [Image1, Image2, Image3, Image4, Image5],
                    details: [
                        {
                            icon: icon1,
                            value: "Daniyal Doe",
                        },
                        {
                            icon: icon2,
                            value: "2,000,000",
                        },
                        {
                            icon: icon3,
                            value: "daniyaldoe@info.com",
                        },
                    ],
                },
                {
                    title: "Koenigsegg agera one",
                    quantity: 11,
                    images: [Image1, Image2, Image3, Image4, Image5],
                    details: [
                        {
                            icon: icon1,
                            value: "Daniyal Doe",
                        },
                        {
                            icon: icon2,
                            value: "2,000,000",
                        },
                        {
                            icon: icon3,
                            value: "daniyaldoe@info.com",
                        },
                    ],
                },
            ],
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
        //     },
        // });
    },
    methods: {
        getImage(imagePath, index) {
            return this.activeTab === index ? imagePath.replace('white', '') : imagePath;
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
.main-slider {
    align-items: start
}

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
