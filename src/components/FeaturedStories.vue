<template>
    <section class="community-section">
        <div class="container">
            <!-- Tabs -->
            <div class="row mb-2">
                <!-- <div v-for="(tab, index) in tabs" :key="index"
                    :class="['col-6 col-md-2 my-2 my-md-1', { 'active-tab': activeTab === index }]"
                    @click="handleTabClick(index, tab.name)">
                    <div class="btn-div-create-forum position-relative" :class="[
                        'w-100',
                        {
                            'btn-active': activeTab === index,
                            'btn-inactive': activeTab !== index,
                        },
                    ]">
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
                </div> -->
                <!-- offcanvas -->


                <div class="col-md-12 d-block d-md-none">
                    <div class="list-item-btn position-relative submit-btn-div m-0">
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
                        <button type="submit" class="signin-btnli btn-filter " id="submit-button"
                            data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample"
                            aria-controls="offcanvasExample">
                            {{ $t('Category') }}
                        </button>
                        <span class="border-bottom-btn border-left-btn position-absolute">
                            <img src="@/assets/images/Group11.png" class="img-border position-absolute" alt="" />
                        </span>
                        <span class="border-bottom-btn position-absolute">
                            <img src="@/assets/images/Path473.png" class="img-border position-absolute" alt="" />
                        </span>
                    </div>
                </div>

                <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample"
                    aria-labelledby="offcanvasExampleLabel">
                    <div class="offcanvas-header">
                        <h5 class="offcanvas-title" id="offcanvasExampleLabel">Categories</h5>
                        <button type="button" class="close-icon csicon" data-bs-dismiss="offcanvas" aria-label="Close">
                            <i class="fas fa-times"></i>
                        </button>
                    </div>
                    <div class="offcanvas-body">
                        <div>
                            <div v-for="(tab, index) in tabs" :key="index" :class="[
                                'col-12 my-2 my-md-1',
                                { 'active-tab': activeTab === index },
                            ]" @click="handleTabClick(index, tab.name)">
                                <div class="btn-div-create-forum position-relative" :class="[
                                    'w-100',
                                    {
                                        'btn-active': activeTab === index,
                                        'btn-inactive': activeTab !== index,
                                    },
                                ]">
                                    <span class="border-bottom-btn border-top-btn position-absolute">
                                        <img :src="getImage(tab, index, 'img1')" class="img-border position-absolute"
                                            alt="" />
                                    </span>
                                    <span
                                        class="border-bottom-btn border-top-btn border-right-radius position-absolute">
                                        <img :src="getImage(tab, index, 'img2')" class="img-border position-absolute"
                                            alt="" />
                                    </span>
                                    <span
                                        class="border-bottom-btn border-top-btn border-right-radius border-right-bottom-radius position-absolute">
                                        <img :src="getImage(tab, index, 'img3')" class="img-border position-absolute"
                                            alt="" />
                                    </span>
                                    <span class="signin-btnli" data-bs-dismiss="offcanvas">
                                        {{ tab.name }}
                                    </span>

                                    <span class="border-bottom-btn border-left-btn position-absolute">
                                        <img :src="getImage(tab, index, 'img4')" class="img-border position-absolute"
                                            alt="" />
                                    </span>

                                    <span class="border-bottom-btn position-absolute">
                                        <img :src="getImage(tab, index, 'img5')" class="img-border position-absolute"
                                            alt="" />
                                    </span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <!-- offcanvas end -->
                <div class="d-none d-md-flex" v-for="(tab, index) in tabs" :key="index" :class="[
                    'col-6 col-md-2 my-2 my-md-1',
                    { 'active-tab': activeTab === index },
                ]" @click="handleTabClick(index, tab.name)">
                    <div class="btn-div-create-forum position-relative" :class="[
                        'w-100',
                        {
                            'btn-active': activeTab === index,
                            'btn-inactive': activeTab !== index,
                        },
                    ]">
                        <span class="border-bottom-btn border-top-btn position-absolute">
                            <img :src="getImage(tab, index, 'img1')" class="img-border position-absolute" alt="" />
                        </span>
                        <span class="border-bottom-btn border-top-btn border-right-radius position-absolute">
                            <img :src="getImage(tab, index, 'img2')" class="img-border position-absolute" alt="" />
                        </span>
                        <span
                            class="border-bottom-btn border-top-btn border-right-radius border-right-bottom-radius position-absolute">
                            <img :src="getImage(tab, index, 'img3')" class="img-border position-absolute" alt="" />
                        </span>
                        <span class="signin-btnli text-center" v-if="tab.name == 'Car Modification/Tunning Shop'"> Car
                            Modification/Tunning <br /> Shop

                        </span>
                        <span class="signin-btnli" v-else>
                            {{ tab.name }}
                        </span>
                        <span class="border-bottom-btn border-left-btn position-absolute">
                            <img :src="getImage(tab, index, 'img4')" class="img-border position-absolute" alt="" />
                        </span>
                        <span class="border-bottom-btn position-absolute">
                            <img :src="getImage(tab, index, 'img5')" class="img-border position-absolute" alt="" />
                        </span>
                    </div>
                </div>
            </div>
            <h3 class="text-white">Featured Story</h3>
            <div class="row">
                <div class="col-md-12 px-0">
                    <div class="col-md-12 px-4">
                        <div class="row">
                            <div v-for="(car, index) in featuredStories" :key="index"
                                :class="isModalOpenFe ? 'z-2' : 'z-0'">
                                <div class="card-sorting-content px-3 px-md-1 py-2 col-md-12 p-1" @click="openModalFe">
                                    <div class="main-slider weekly-slider align-items-center">
                                        <div class="swiper-container myCarListingCard-swiper-container">
                                            <!-- <swiper :effect="'cards'" :grabCursor="true" :modules="modules"
                                                :initialSlide="1" class="mySwiper swiper-no-shadow">
                                                <swiper-slide class="swiper-no-shadow"
                                                    v-for="(image, idx) in parsedImages(car.images)" :key="idx">
                                                    <div class="d-block">
                                                        <img :src="image
                                                            " class="slider-img myCarListingCard-img" alt="car" />
                                                    </div>
                                                </swiper-slide>
                                            </swiper> -->
                                            <swiper :effect="'cards'" :grabCursor="true" :modules="modules"
                                                :initialSlide="1" class="mySwiper swiper-no-shadow">

                                                <swiper-slide class="swiper-no-shadow" v-for="(image, idx) in (parsedImages(car.images).length > 1
                                                    ? [parsedImages(car.images)[1], parsedImages(car.images)[0], ...parsedImages(car.images).slice(2)]
                                                    : parsedImages(car.images))" :key="idx">

                                                    <div class="d-block">
                                                        <img :src="image" class="slider-img myCarListingCard-img"
                                                            alt="car" />
                                                    </div>

                                                </swiper-slide>

                                            </swiper>

                                            <span class="swiper-notification" aria-live="assertive"
                                                aria-atomic="true"></span>
                                        </div>
                                        <img :src="iconford" class="d-none" alt="" />
                                    </div>
                                    <div class="card-content-car">
                                        <!-- <h4 class="text-white mb-1" v-if="car.make && car.model">
                                            {{ car.make }}:{{ car.model }}
                                        </h4>
                                        <h4 class="text-white mb-1" v-else>
                                            {{ car.country }}:{{ car.city }}
                                        </h4> -->
                                        <h4 class="text-white mb-1">
                                            {{ car.story_name }}
                                        </h4>
                                        <ul class="user-details-car myCarListingCard-user-details-car mb-1 mt-0">
                                            <li class="list-item-user mb-0 justify-content-start">
                                                <img :src="instaIcon" class="instaIcon" />
                                                <a :href="'https://www.instagram.com/' + car.social_media"
                                                    class="a-tag-name-user mt-2 mb-2 " style="font-size: 14px"
                                                    target="_blank" rel="noop@ener noreferrer">
                                                    {{ car.social_media }}
                                                </a>
                                            </li>
                                        </ul>
                                        <p class="text-white mt-0 mb-0 w-75 text-wrap " style="font-size: 14px">
                                            <!-- <span v-if="car.advice">{{ car.advice }}</span> -->
                                            <span class="text-orange" v-if="activeTab == 0">What’s the story behind your
                                                car? </span>
                                            <span class="text-orange " v-if="activeTab == 1">Tell us your Garage story &
                                                how it all started </span>
                                            <span class="text-orange" v-if="activeTab == 2">Tell us your shop story &
                                                how
                                                it all started</span>
                                            <span class="text-orange" v-if="activeTab == 3">Tell us your club story &
                                                how
                                                it all started </span>
                                            <span class="text-orange" v-if="activeTab == 4">Tell us your Motor Bike
                                                story
                                                & how it all started </span>
                                            <span class="text-orange" v-if="activeTab == 5">Tell us your Automotive
                                                Photography story & how it all started</span>
                                            <br />
                                            <span class="tranc" v-if="car.story">{{ car.story }}</span>
                                            <span class="tranc" v-else>{{ car.story_history }}</span>
                                            <!-- <span v-else>{{ car.story_history }}</span> -->
                                            <span class="view-more-a-tag ms-2" style="cursor: pointer"
                                                @click="openModalFe">
                                                {{ $t("viewMore") }}
                                            </span>
                                        </p>
                                    </div>


                                </div>
                                <!-- Modal -->
                                <div class="modal show d-block" tabindex="-1" role="dialog" v-if="isModalOpenFe">
                                    <div class="modal-dialog modal-dialog-centered" role="document">
                                        <div class="modal-content">
                                            <div class="modal-body text-center">
                                                <span class="close-icon" @click="modalCloseFe">
                                                    <i class="fas fa-times"></i>
                                                </span>

                                                <div class="mt-4 py-2">
                                                    <div class="myCarListingCard-swiper-container">
                                                        <!-- <swiper :effect="'cards'" :grabCursor="true" :modules="modules"
                                                            :initialSlide="1" :pagination="{ clickable: true }"
                                                            :navigation="{
                                                                nextEl: '.custom-next',
                                                                prevEl: '.custom-prev',
                                                            }" class="mySwiper swiper-no-shadow modalswipper">
                                                            <swiper-slide class="swiper-no-shadow modalswippersh"
                                                                v-for="(image, idx) in parsedImages(car.images)"
                                                                :key="idx">
                                                                <div class="d-block">
                                                                    <img :src="image
                                                                        "
                                                                        class="slider-img myCarListingCard-img modalswipperImage"
                                                                        alt="car"
                                                                        @click="openViewer(image, car.images)" />
                                                                </div>
                                                            </swiper-slide>
                                                        </swiper> -->
                                                        <swiper :effect="'cards'" :grabCursor="true" :modules="modules"
                                                            :initialSlide="1" :pagination="{ clickable: true }"
                                                            :navigation="{
                                                                nextEl: '.custom-next',
                                                                prevEl: '.custom-prev',
                                                            }" class="mySwiper swiper-no-shadow modalswipper">

                                                            <swiper-slide class="swiper-no-shadow modalswippersh" v-for="(image, idx) in (parsedImages(car.images).length > 1
                                                                ? [parsedImages(car.images)[1], parsedImages(car.images)[0], ...parsedImages(car.images).slice(2)]
                                                                : parsedImages(car.images))" :key="idx">

                                                                <div class="d-block">
                                                                    <img :src="image"
                                                                        class="slider-img myCarListingCard-img modalswipperImage"
                                                                        alt="car"
                                                                        @click="openViewer(image, car.images)" />
                                                                </div>

                                                            </swiper-slide>

                                                        </swiper>

                                                        <span class="swiper-notification" aria-live="assertive"
                                                            aria-atomic="true"></span>
                                                    </div>
                                                    <div class="custom-swiper-navigation gap-8 justify-content-center"
                                                        :class="isOverlayTransparent ? 'd-flex' : 'd-flex'">
                                                        <button class="custom-prev btn">
                                                            <img :src="prevIcon" alt="" />
                                                        </button>
                                                        <button class="custom-next btn">
                                                            <img :src="nextIcon" alt="" />
                                                        </button>
                                                    </div>
                                                    <!-- <div class="d-flex justify-content-end" v-if="isOverlayTransparent">
                                                        <button class="btn btn-danger" @click="toggleOverlayOpacity">
                                                            <span class=""><i class="fa-solid fa-xmark"></i></span>
                                                        </button>
                                                    </div> -->
                                                    <div class="overlay mt-5" :class="{ '': isOverlayTransparent }"
                                                        @click="toggleOverlayOpacity">
                                                        <div
                                                            class="mt-2 d-flex justify-content-between align-items-center mb-2">
                                                            <div class="d-flex align-items-center gap-2">
                                                                <img :src="iconford" class="d-none" alt="" />
                                                                <h3 class="m-0 text-white fontsiz">
                                                                    {{ car.story_name }}
                                                                </h3>
                                                            </div>
                                                        </div>
                                                        <div class="d-flex align-items-center text-white mt-2">
                                                            <img :src="instaIcon" class="instaIcon" />
                                                            <a :href="'https://www.instagram.com/' + car.social_media"
                                                                class="a-tag-name-user mt-2 mb-2"
                                                                style="font-size: 14px" target="_blank"
                                                                rel="noopener noreferrer">
                                                                {{ car.social_media }}
                                                            </a>

                                                        </div>
                                                        <p class="text-orange"
                                                            style="font-size: 14px; text-align: start" v-if="car.story">
                                                            What’s the story behind your car?
                                                        </p>
                                                        <p class="text-white" style="font-size: 14px; text-align: start"
                                                            v-if="car.story">
                                                            {{ car.story }}
                                                        </p>
                                                        <p class="text-orange"
                                                            style="font-size: 14px; text-align: start"
                                                            v-if="car.advice">
                                                            What advise would you give to someone starting their journey
                                                            as a car enthusiast?
                                                        </p>
                                                        <p class="text-white" style="font-size: 14px; text-align: start"
                                                            v-if="car.advice">
                                                            {{ car.advice }}
                                                        </p>

                                                        <p class="text-orange"
                                                            style="font-size: 14px; text-align: start"
                                                            v-if="car.memorable">
                                                            Tell us the wildest or most unforgettable moment you’ve had
                                                            with your car


                                                        </p>
                                                        <p class="text-white" style="font-size: 14px; text-align: start"
                                                            v-if="car.memorable">
                                                            {{ car.memorable }}
                                                        </p>
                                                        <p class="text-orange"
                                                            style="font-size: 14px; text-align: start"
                                                            v-if="car.modifications">
                                                            Any awesome modifications or unique features you can share?
                                                        </p>
                                                        <p class="text-white" style="font-size: 14px; text-align: start"
                                                            v-if="car.memorable">
                                                            {{ car.modifications }}
                                                        </p>
                                                        <p class="text-orange"
                                                            style="font-size: 14px; text-align: start"
                                                            v-if="car.adventure_story">
                                                            Any awesome modifications or unique features you can share?
                                                        </p>
                                                        <p class="text-white" style="font-size: 14px; text-align: start"
                                                            v-if="car.adventure_story">
                                                            {{ car.adventure_story }}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Tab Content -->
            <div v-if="activeTab === 0" :class="isModalOpenFe ? 'z-0 position-relative ' : ''"
                style="overflow-x:hiddens">
                <div class="row">
                    <div class="col-md-12 mb-2">
                        <input type="text" class="form-control formSearch mb-2 mb-2" placeholder="search"
                            v-model="search" @input="applyFiltercarSearch" />
                    </div>

                    <div class="col-md-3">

                        <div class="list-item-btn position-relative submit-btn-div mx-0 mt-0 mb-2 d-none d-md-none">
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
                            <button type="submit" class="signin-btnli btn-filter " id="submit-button"
                                data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false"
                                aria-controls="collapseExample">
                                {{ $t('Filters') }}
                            </button>
                            <span class="border-bottom-btn border-left-btn position-absolute">
                                <img src="@/assets/images/Group11.png" class="img-border position-absolute" alt="" />
                            </span>
                            <span class="border-bottom-btn position-absolute">
                                <img src="@/assets/images/Path473.png" class="img-border position-absolute" alt="" />
                            </span>
                        </div>

                        <div class="collapse d-none d-md-none" id="collapseExample">
                            <div class="">
                                <div class="filter-box ">
                                    <h4 class="filter-title">{{ $t("filters") }}</h4>
                                    <div class="row">
                                        <div class="col-md-12">
                                            <div class="customSelect position-relative" @blur="isOpen = false">
                                                <label for="country" class="form-label">Make </label>
                                                <input type="text" class="form-select form-control form-input"
                                                    v-model="formData.make" :placeholder="$t('Select a Make')"
                                                    @click="toggleDropdown" @input="filterMakeOptions" @change="
                                                        getModels;
                                                    applyFilterCar;
                                                    " />
                                                <ul v-show="isOpen" class="options-list"
                                                    v-if="makefilteredOptions != ''">
                                                    <li @click="selectOption()">
                                                        None
                                                    </li>
                                                    <li v-for="(option, index) in makefilteredOptions" :key="index"
                                                        @click="selectOption(option)">
                                                        {{ option }}
                                                    </li>
                                                </ul>
                                                <ul v-else v-show="isOpen" class="options-list"></ul>
                                            </div>
                                        </div>
                                        <div class="col-md-12 " :class="{ z1o2: !isOpenm }">
                                            <label for="country" class="form-label">Model </label>
                                            <div class="customSelect w-100 position-relative" @blur=" isOpenm = false">
                                                <input type="text" class="form-select form-control form-input"
                                                    v-model="formData.model" :placeholder="$t('Select a Model')"
                                                    @click.stop="toggleDropdownm" @focus="isOpen = false"
                                                    @input="filterModelOptions" @change="
                                                        getModels;
                                                    applyFilterCar;
                                                    " v-if="formData.make == ''" disabled />
                                                <input type="text" class="form-select form-control form-input"
                                                    v-model="formData.model" :placeholder="$t('Select a Model')"
                                                    @click.stop="toggleDropdownm" @focus="isOpen = false"
                                                    @input="filterModelOptions" @change="
                                                        getModels;
                                                    applyFilterCar;
                                                    " v-else />
                                                <ul v-show="isOpenm" class="options-list"
                                                    v-if="modelfilteredOptions.length > 0">

                                                    <li v-for="(option, index) in modelfilteredOptions" :key="index"
                                                        @click="selectOptionModel(option.model)">
                                                        {{ option.model }}
                                                    </li>
                                                </ul>
                                                <ul v-else v-show="isOpenm" class="options-list"></ul>
                                            </div>
                                        </div>
                                        <div class="col-md-12 z1o2">
                                            <label for="country" class="form-label">Production Year Generation
                                            </label>
                                            <div class="customSelect w-100 position-relative">
                                                <input type="text" class="form-select form-control form-input"
                                                    :placeholder="$t('Production Years(Generation)')"
                                                    @input="GenfilterOption" v-model="formData.year"
                                                    @click="toggleOpeng" v-if="formData.model == ''"
                                                    @change="applyFilterCar" disabled />
                                                <input type="text" class="form-select form-control form-input"
                                                    :placeholder="$t('Production Years(Generation)')"
                                                    @input="GenfilterOption" @change="applyFilterCar"
                                                    v-model="formData.year" @click="toggleOpeng" v-else />
                                                <ul v-show="isOpeng" class="options-list"
                                                    v-if="GenfilteredOptions.length > 0">
                                                    <li v-for="(value, index) in GenfilteredOptions" :key="index"
                                                        @click="updateModels(value), (this.isOpeng = false)">
                                                        <!-- {{ value.production_years.split(' ')[0] }} ({{ value.production_years.split(' ')[1] }}) -->
                                                        {{ value.production_years.split(" ")[0] }}
                                                        <span v-if="value.production_years.split(' ')[1]">({{
                                                            value.production_years.split(" ")[1] }})</span>
                                                    </li>
                                                </ul>
                                                <ul v-else v-show="isOpeng" class="options-list"></ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="filter-box d-block d-md-block">
                            <h4 class="filter-title">{{ $t("filters") }}</h4>
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="customSelect position-relative" @blur="isOpen = false">
                                        <label for="country" class="form-label">Make </label>
                                        <input type="text" class="form-select form-control form-input"
                                            v-model="formData.make" :placeholder="$t('Select a Make')"
                                            @click="toggleDropdown" @input="filterMakeOptions" @change="
                                                getModels;
                                            applyFilterCar;
                                            " />
                                        <ul v-show="isOpen" class="options-list" v-if="makefilteredOptions != ''">
                                            <li @click="selectOption()">
                                                None
                                            </li>
                                            <li v-for="(option, index) in makefilteredOptions" :key="index"
                                                @click="selectOption(option)">
                                                {{ option }}
                                            </li>
                                        </ul>
                                        <ul v-else v-show="isOpen" class="options-list"></ul>
                                    </div>
                                </div>
                                <div class="col-md-12 " :class="{ z1o2: !isOpenm }">
                                    <label for="model" class="form-label">Model </label>
                                    <div class="customSelect w-100 position-relative" @blur=" isOpenm = false">
                                        <input type="text" class="form-select form-control form-input"
                                            v-model="formData.model" :placeholder="$t('Select a Model')"
                                            @click.stop="toggleDropdownm" @focus="isOpen = false"
                                            @input="filterModelOptions" @change="
                                                getModels;
                                            applyFilterCar;
                                            " v-if="formData.make == ''" disabled />
                                        <input type="text" class="form-select form-control form-input"
                                            v-model="formData.model" :placeholder="$t('Select a Model')"
                                            @click.stop="toggleDropdownm" @focus="isOpen = false"
                                            @input="filterModelOptions" @change="
                                                getModels;
                                            applyFilterCar;
                                            " v-else />
                                        <ul v-show="isOpenm" class="options-list"
                                            v-if="modelfilteredOptions.length > 0">

                                            <li v-for="(option, index) in modelfilteredOptions" :key="index"
                                                @click="selectOptionModel(option.model)">
                                                {{ option.model }}
                                            </li>
                                        </ul>
                                        <ul v-else v-show="isOpenm" class="options-list"></ul>
                                    </div>
                                </div>
                                <div class="col-md-12 z1o2">
                                    <label for="year" class="form-label">Production Year Generation
                                    </label>
                                    <div class="customSelect w-100 position-relative">
                                        <input type="text" class="form-select form-control form-input"
                                            :placeholder="$t('Production Years(Generation)')" @input="GenfilterOption"
                                            v-model="formData.year" @click="toggleOpeng" v-if="formData.model == ''"
                                            @change="applyFilterCar" disabled />
                                        <input type="text" class="form-select form-control form-input"
                                            :placeholder="$t('Production Years(Generation)')" @input="GenfilterOption"
                                            @change="applyFilterCar" v-model="formData.year" @click="toggleOpeng"
                                            v-else />
                                        <ul v-show="isOpeng" class="options-list" v-if="GenfilteredOptions.length > 0">
                                            <li v-for="(value, index) in GenfilteredOptions" :key="index"
                                                @click="updateModels(value), (this.isOpeng = false)">
                                                <!-- {{ value.production_years.split(' ')[0] }} ({{ value.production_years.split(' ')[1] }}) -->
                                                {{ value.production_years.split(" ")[0] }}
                                                <span v-if="value.production_years.split(' ')[1]">({{
                                                    value.production_years.split(" ")[1] }})</span>
                                            </li>
                                        </ul>
                                        <ul v-else v-show="isOpeng" class="options-list"></ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- <div class="filter-image-div my-4">
                            <img src="@/assets/images/Image18.png" class="img-fluid filter-image" alt="Image" />
                        </div> -->
                    </div>
                    <div class="col-md-9 px-4">
                        <div class="row">
                            <!-- Container for the Viewer.js to manage image viewing -->
                            <div class="imageBig" ref="viewerContainer" style="display: none">
                                <img :src="currentImage" alt="Current Image for Viewing" />
                                <img :src="image" v-for="(image, idx) in parsedImages(viewerImages)" :key="idx" />

                            </div>
                            <div v-for="(car, index) in this.filteredStories.CarEnthusiast" :key="index"
                                :class="isModalOpen && activeCarIndex === index ? 'z-2' : 'z-0'">
                                <div class="card-sorting-content px-3 px-md-1 py-2 col-md-12 p-1"
                                    @click="openModal(index)">
                                    <div class="main-slider weekly-slider align-items-center">
                                        <div class="swiper-container myCarListingCard-swiper-container">
                                            <!-- <swiper :effect="'cards'" :grabCursor="true" :modules="modules"
                                                :initialSlide="1" class="mySwiper swiper-no-shadow">
                                                <swiper-slide class="swiper-no-shadow"
                                                    v-for="(image, idx) in parsedImages(car.images)" :key="idx">
                                                    <div class="d-block">
                                                        <img :src="image
                                                            " class="slider-img myCarListingCard-img" alt="car" />
                                                    </div>
                                                </swiper-slide>
                                            </swiper> -->
                                            <!-- <swiper :effect="'cards'" :grabCursor="true" :modules="modules"
                                                :initialSlide="1" class="mySwiper swiper-no-shadow">

                                                <swiper-slide class="swiper-no-shadow" v-for="(image, idx) in (parsedImages(car.images).length > 1
                                                    ? [parsedImages(car.images)[1], parsedImages(car.images)[0], ...parsedImages(car.images).slice(2)]
                                                    : parsedImages(car.images))" :key="idx">

                                                    <div class="d-block">
                                                        <img :src="image" class="slider-img myCarListingCard-img"
                                                            alt="car" />
                                                    </div>

                                                </swiper-slide>

                                            </swiper> -->
                                            <swiper :effect="'cards'" :grabCursor="true" :modules="modules"
                                                :initialSlide="1" class="mySwiper swiper-no-shadow">

                                                <swiper-slide class="swiper-no-shadow" v-for="(image, idx) in ((parsedImages(car.images)?.length ?? 0) > 1
                                                    ? [parsedImages(car.images)[1], parsedImages(car.images)[0], ...parsedImages(car.images).slice(2)]
                                                    : (parsedImages(car.images) ?? []))" :key="idx">

                                                    <div class="d-block">
                                                        <img :src="image" class="slider-img myCarListingCard-img"
                                                            alt="car" />
                                                    </div>

                                                </swiper-slide>

                                            </swiper>

                                            <span class="swiper-notification" aria-live="assertive"
                                                aria-atomic="true"></span>
                                        </div>
                                        <img :src="iconford" class="d-none" alt="" />
                                    </div>
                                    <div class="card-content-car">
                                        <h4 class="text-white mb-1 " @click="openModal(index)">
                                            <!-- {{ car.make }}:{{ car.model }} -->
                                            {{ car.story_name }}
                                        </h4>
                                        <ul class="user-details-car myCarListingCard-user-details-car mb-1 mt-0">
                                            <li class="list-item-user mb-0 justify-content-start">
                                                <img :src="instaIcon" class="instaIcon" />
                                                <a :href="'https://www.instagram.com/' + car.social_media"
                                                    class="a-tag-name-user mt-2 mb-2" style="font-size: 14px"
                                                    target="_blank" rel="noopener noreferrer">
                                                    {{ car.social_media }}
                                                </a>
                                            </li>
                                        </ul>
                                        <p class="text-white mt-0 mb-0 w-75 text-wrap " style="font-size: 14px"
                                            @click="openModal(index)">
                                            <span class="text-orange">What’s the story behind your car?</span>
                                            <br />
                                            <span class="tranc dd">{{ car.story }}</span>

                                            <!-- Conditionally show "view more" if car.story has 10 or more words -->
                                            <!-- <span class="view-more-a-tag ms-2" style="cursor: pointer"
                                                v-if="car.story.split(' ').length >= 10" @click="openModal(index)">
                                                {{ $t("viewMore") }}
                                            </span> -->
                                        </p>
                                    </div>
                                </div>

                                <!-- Modal -->
                                <div class="modal show d-block" tabindex="-1" role="dialog"
                                    v-if="isModalOpen && activeCarIndex === index">
                                    <div class="modal-dialog modal-dialog-centered" role="document">
                                        <div class="modal-content">
                                            <div class="modal-body text-center">
                                                <span class="close-icon" @click="modalClose">
                                                    <i class="fas fa-times"></i>
                                                </span>

                                                <div class="mt-4 py-2">
                                                    <div class="myCarListingCard-swiper-container">
                                                        <!-- <swiper :effect="'cards'" :grabCursor="true" :modules="modules"
                                                            :initialSlide="1" :pagination="{ clickable: true }"
                                                            :navigation="{
                                                                nextEl: '.custom-next',
                                                                prevEl: '.custom-prev',
                                                            }" class="mySwiper swiper-no-shadow modalswipper">
                                                            <swiper-slide class="swiper-no-shadow modalswippersh"
                                                                v-for="(image, idx) in parsedImages(car.images)"
                                                                :key="idx">
                                                                <div class="d-block">
                                                                    <img :src="image
                                                                        "
                                                                        class="slider-img myCarListingCard-img modalswipperImage"
                                                                        alt="car"
                                                                        @click="openViewer(image, car.images)" />
                                                                </div>
                                                            </swiper-slide>
                                                        </swiper> -->
                                                        <swiper :effect="'cards'" :grabCursor="true" :modules="modules"
                                                            :initialSlide="1" :pagination="{ clickable: true }"
                                                            :navigation="{
                                                                nextEl: '.custom-next',
                                                                prevEl: '.custom-prev',
                                                            }" class="mySwiper swiper-no-shadow modalswipper">

                                                            <swiper-slide class="swiper-no-shadow modalswippersh" v-for="(image, idx) in (parsedImages(car.images).length > 1
                                                                ? [parsedImages(car.images)[1], parsedImages(car.images)[0], ...parsedImages(car.images).slice(2)]
                                                                : parsedImages(car.images))" :key="idx">

                                                                <div class="d-block">
                                                                    <img :src="image"
                                                                        class="slider-img myCarListingCard-img modalswipperImage"
                                                                        alt="car"
                                                                        @click="openViewer(image, car.images)" />
                                                                </div>

                                                            </swiper-slide>

                                                        </swiper>

                                                        <span class="swiper-notification" aria-live="assertive"
                                                            aria-atomic="true"></span>
                                                    </div>
                                                    <div class="custom-swiper-navigation gap-8 justify-content-center"
                                                        :class="isOverlayTransparent ? 'd-flex' : 'd-flex'">
                                                        <button class="custom-prev btn">
                                                            <img :src="prevIcon" alt="" />
                                                        </button>
                                                        <button class="custom-next btn">
                                                            <img :src="nextIcon" alt="" />
                                                        </button>
                                                    </div>
                                                    <div class="d-flex justify-content-end" v-if="isOverlayTransparent">

                                                    </div>
                                                    <div class="overlay mt-5" :class="{ '': isOverlayTransparent }"
                                                        @click="toggleOverlayOpacity">
                                                        <div
                                                            class="mt-2 d-flex justify-content-between align-items-center mb-2">
                                                            <div class="d-flex align-items-center gap-2">
                                                                <img :src="iconford" class="d-none" alt="" />
                                                                <h3 class="m-0 text-white fontsiz">
                                                                    {{ car.story_name }}
                                                                </h3>
                                                            </div>
                                                        </div>

                                                        <div class="d-flex align-items-center text-white mt-2">
                                                            <img :src="instaIcon" class="instaIcon" />
                                                            <a :href="'https://www.instagram.com/' + car.social_media"
                                                                class="a-tag-name-user mt-2 mb-2"
                                                                style="font-size: 14px" target="_blank"
                                                                rel="noopener noreferrer">
                                                                @{{ car.social_media }}
                                                            </a>
                                                        </div>
                                                        <p class="text-orange"
                                                            style="font-size: 14px; text-align: start">Tell us your car
                                                            story together</p>
                                                        <p class="text-white"
                                                            style="font-size: 14px; text-align: start">
                                                            {{ car.story }}
                                                        </p>
                                                        <p class="text-orange"
                                                            style="font-size: 14px; text-align: start">What advise would
                                                            you give to someone starting their journey as a car
                                                            enthusiast?</p>
                                                        <p class="text-white"
                                                            style="font-size: 14px; text-align: start">
                                                            {{ car.advice }}
                                                        </p>
                                                        <p class="text-orange"
                                                            style="font-size: 14px; text-align: start">Tell us the
                                                            wildest or most unforgettable moment you’ve had with your
                                                            car</p>
                                                        <p class="text-white"
                                                            style="font-size: 14px; text-align: start">
                                                            {{ car.memorable }}
                                                        </p>
                                                        <p class="text-orange"
                                                            style="font-size: 14px; text-align: start">Any awesome
                                                            modifications or unique features you can share?</p>
                                                        <p class="text-white"
                                                            style="font-size: 14px; text-align: start">
                                                            {{ car.modifications }}
                                                        </p>


                                                    </div>
                                                    <!-- <p class="view-more-a-tag ms-2" style="cursor: pointer" @click="showMore[index] = !showMore[index]">
                  {{ showMore[index] ? $t("showLess") : $t("viewMore") }}
                </p> -->
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <!-- Modal -->
                            <!-- <div class="modal show d-block" tabindex="-1" role="dialog"
                                    v-if="isModalOpen && activeCarIndex === index">
                                    <div class="modal-dialog modal-dialog-centered" role="document">
                                        <div class="modal-content">
                                            <div class="modal-body text-center">
                                                <span class="close-icon" @click="modalClose">
                                                    <i class="fas fa-times"></i>
                                                </span>

                                                <div class="mt-4 py-2">
                                                    <div class="swiper-container myCarListingCard-swiper-container">
                                                        <swiper :effect="'cards'" :grabCursor="true" :modules="modules"
                                                            :initialSlide="1" class="mySwiper swiper-no-shadow">

                                                            <swiper-slide class="swiper-no-shadow"
                                                                v-for="(image, idx) in car.images" :key="idx">
                                                                <router-link class="d-block"
                                                                    :to="`/carListing${index + 1}`">
                                                                    <h1 class="text-white">{{ image }}</h1>
                                                                    <img :src=" image
                                                                        " class="slider-img myCarListingCard-img"
                                                                        alt="car" />
                                                                </router-link>
                                                            </swiper-slide>
                                                        </swiper>
                                                        <span class="swiper-notification" aria-live="assertive"
                                                            aria-atomic="true"></span>
                                                    </div>
                                                    <p class="card-title text-white">
                                                        {{ car.story_name }} <span></span>
                                                        {{ car.story_type }}
                                                    </p>
                                                    <p class="text-white">{{ car.advice }}</p>
                                                    <p class="text-white">{{ car.modifications }}</p>
                                                    <p class="text-white">{{ car.memorable }}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div> -->
                        </div>

                        <!-- end template -->
                    </div>

                    <nav class="float-end my-4 community-pagination d-none" aria-label="Page navigation">
                        <ul class="pagination">
                            <li class="page-item" :class="{ disabled: currentPage === 1 }">
                                <a class="page-link" href="#" aria-label="Previous"
                                    @click.prevent="goToPage(currentPage - 1)">
                                    city
                                    <span aria-hidden="true"><i class="fa-solid fa-chevron-left"></i></span>
                                </a>
                            </li>
                            <li class="page-item" v-for="pageNumber in totalPages" :key="pageNumber">
                                <a class="page-link" href="#" @click.prevent="goToPage(pageNumber)"
                                    :class="{ active: pageNumber === currentPage }">{{ pageNumber }}</a>
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

            <div v-else-if="activeTab === 1" :class="isModalOpenFe ? 'z-0 position-relative ' : ''">
                <div class="row">
                    <div class="col-md-12 mb-2 m-0">
                        <input type="text" class="form-control formSearch mb-2" placeholder="search" v-model="search"
                            @input="applyFilterCarGarageSearch" />
                    </div>
                    <div class="col-md-3">
                        <div class="list-item-btn position-relative submit-btn-div mx-0 mt-0 mb-2 d-none d-md-none">
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
                            <button type="submit" class="signin-btnli btn-filter " id="submit-button"
                                data-bs-toggle="collapse" data-bs-target="#collapseExample2" aria-expanded="false"
                                aria-controls="collapseExample2">
                                {{ $t('Filters') }}
                            </button>
                            <span class="border-bottom-btn border-left-btn position-absolute">
                                <img src="@/assets/images/Group11.png" class="img-border position-absolute" alt="" />
                            </span>
                            <span class="border-bottom-btn position-absolute">
                                <img src="@/assets/images/Path473.png" class="img-border position-absolute" alt="" />
                            </span>
                        </div>

                        <div class="collapse d-none d-md-none" id="collapseExample2">
                            <div class="">
                                <div class="filter-box">
                                    <h4 class="filter-title">{{ $t("filters") }}</h4>
                                    <div class="row">
                                        <div class="col-12">
                                            <label for="country" class="form-label filter-label">{{
                                                $t("Country")
                                            }}</label>

                                            <select id="country"
                                                class="form-select form-control form-input filter-select"
                                                v-model="selectedCountry"
                                                @change="applyFilter(selectedCountry, selectedCity)">
                                                <option selected value="">Country</option>
                                                <option value="Afghanistan">Afghanistan</option>
                                                <option value="Albania">Albania</option>
                                                <option value="Algeria">Algeria</option>
                                                <option value="Andorra">Andorra</option>
                                                <option value="Angola">Angola</option>
                                                <option value="Antigua and Barbuda">
                                                    Antigua and Barbuda
                                                </option>
                                                <option value="Argentina">Argentina</option>
                                                <option value="Armenia">Armenia</option>
                                                <option value="Australia">Australia</option>
                                                <option value="Austria">Austria</option>
                                                <option value="Azerbaijan">Azerbaijan</option>
                                                <option value="Bahamas">Bahamas</option>
                                                <option value="Bahrain">Bahrain</option>
                                                <option value="Bangladesh">Bangladesh</option>
                                                <option value="Barbados">Barbados</option>
                                                <option value="Belarus">Belarus</option>
                                                <option value="Belgium">Belgium</option>
                                                <option value="Belize">Belize</option>
                                                <option value="Benin">Benin</option>
                                                <option value="Bhutan">Bhutan</option>
                                                <option value="Bolivia">Bolivia</option>
                                                <option value="Bosnia and Herzegovina">
                                                    Bosnia and Herzegovina
                                                </option>
                                                <option value="Botswana">Botswana</option>
                                                <option value="Brazil">Brazil</option>
                                                <option value="Brunei">Brunei</option>
                                                <option value="Bulgaria">Bulgaria</option>
                                                <option value="Burkina Faso">Burkina Faso</option>
                                                <option value="Burundi">Burundi</option>
                                                <option value="Cabo Verde">Cabo Verde</option>
                                                <option value="Cambodia">Cambodia</option>
                                                <option value="Cameroon">Cameroon</option>
                                                <option value="Canada">Canada</option>
                                                <option value="Central African Republic">
                                                    Central African Republic
                                                </option>
                                                <option value="Chad">Chad</option>
                                                <option value="Chile">Chile</option>
                                                <option value="China">China</option>
                                                <option value="Colombia">Colombia</option>
                                                <option value="Comoros">Comoros</option>
                                                <option value="Congo">Congo</option>
                                                <option value="Costa Rica">Costa Rica</option>
                                                <option value="Croatia">Croatia</option>
                                                <option value="Cuba">Cuba</option>
                                                <option value="Cyprus">Cyprus</option>
                                                <option value="Czech Republic">Czech Republic</option>
                                                <option value="Denmark">Denmark</option>
                                                <option value="Djibouti">Djibouti</option>
                                                <option value="Dominica">Dominica</option>
                                                <option value="Dominican Republic">
                                                    Dominican Republic
                                                </option>
                                                <option value="Ecuador">Ecuador</option>
                                                <option value="Egypt">Egypt</option>
                                                <option value="El Salvador">El Salvador</option>
                                                <option value="Equatorial Guinea">Equatorial Guinea</option>
                                                <option value="Eritrea">Eritrea</option>
                                                <option value="Estonia">Estonia</option>
                                                <option value="Eswatini">Eswatini</option>
                                                <option value="Ethiopia">Ethiopia</option>
                                                <option value="Fiji">Fiji</option>
                                                <option value="Finland">Finland</option>
                                                <option value="France">France</option>
                                                <option value="Gabon">Gabon</option>
                                                <option value="Gambia">Gambia</option>
                                                <option value="Georgia">Georgia</option>
                                                <option value="Germany">Germany</option>
                                                <option value="Ghana">Ghana</option>
                                                <option value="Greece">Greece</option>
                                                <option value="Grenada">Grenada</option>
                                                <option value="Guatemala">Guatemala</option>
                                                <option value="Guinea">Guinea</option>
                                                <option value="Guinea-Bissau">Guinea-Bissau</option>
                                                <option value="Guyana">Guyana</option>
                                                <option value="Haiti">Haiti</option>
                                                <option value="Honduras">Honduras</option>
                                                <option value="Hungary">Hungary</option>
                                                <option value="Iceland">Iceland</option>
                                                <option value="India">India</option>
                                                <option value="Indonesia">Indonesia</option>
                                                <option value="Iran">Iran</option>
                                                <option value="Iraq">Iraq</option>
                                                <option value="Ireland">Ireland</option>
                                                <option value="Israel">Israel</option>
                                                <option value="Italy">Italy</option>
                                                <option value="Jamaica">Jamaica</option>
                                                <option value="Japan">Japan</option>
                                                <option value="Jordan">Jordan</option>
                                                <option value="Kazakhstan">Kazakhstan</option>
                                                <option value="Kenya">Kenya</option>
                                                <option value="Kiribati">Kiribati</option>
                                                <option value="Korea, North">Korea, North</option>
                                                <option value="Korea, South">Korea, South</option>
                                                <option value="Kosovo">Kosovo</option>
                                                <option value="Kuwait">Kuwait</option>
                                                <option value="Kyrgyzstan">Kyrgyzstan</option>
                                                <option value="Laos">Laos</option>
                                                <option value="Latvia">Latvia</option>
                                                <option value="Lebanon">Lebanon</option>
                                                <option value="Lesotho">Lesotho</option>
                                                <option value="Liberia">Liberia</option>
                                                <option value="Libya">Libya</option>
                                                <option value="Liechtenstein">Liechtenstein</option>
                                                <option value="Lithuania">Lithuania</option>
                                                <option value="Luxembourg">Luxembourg</option>
                                                <option value="Madagascar">Madagascar</option>
                                                <option value="Malawi">Malawi</option>
                                                <option value="Malaysia">Malaysia</option>
                                                <option value="Maldives">Maldives</option>
                                                <option value="Mali">Mali</option>
                                                <option value="Malta">Malta</option>
                                                <option value="Marshall Islands">Marshall Islands</option>
                                                <option value="Mauritania">Mauritania</option>
                                                <option value="Mauritius">Mauritius</option>
                                                <option value="Mexico">Mexico</option>
                                                <option value="Micronesia">Micronesia</option>
                                                <option value="Moldova">Moldova</option>
                                                <option value="Monaco">Monaco</option>
                                                <option value="Mongolia">Mongolia</option>
                                                <option value="Montenegro">Montenegro</option>
                                                <option value="Morocco">Morocco</option>
                                                <option value="Mozambique">Mozambique</option>
                                                <option value="Myanmar">Myanmar</option>
                                                <option value="Namibia">Namibia</option>
                                                <option value="Nauru">Nauru</option>
                                                <option value="Nepal">Nepal</option>
                                                <option value="Netherlands">Netherlands</option>
                                                <option value="New Zealand">New Zealand</option>
                                                <option value="Nicaragua">Nicaragua</option>
                                                <option value="Niger">Niger</option>
                                                <option value="Nigeria">Nigeria</option>
                                                <option value="North Macedonia">North Macedonia</option>
                                                <option value="Norway">Norway</option>
                                                <option value="Oman">Oman</option>
                                                <option value="Pakistan">Pakistan</option>
                                                <option value="Palau">Palau</option>
                                                <option value="Panama">Panama</option>
                                                <option value="Papua New Guinea">Papua New Guinea</option>
                                                <option value="Paraguay">Paraguay</option>
                                                <option value="Peru">Peru</option>
                                                <option value="Philippines">Philippines</option>
                                                <option value="Poland">Poland</option>
                                                <option value="Portugal">Portugal</option>
                                                <option value="Qatar">Qatar</option>
                                                <option value="Romania">Romania</option>
                                                <option value="Russia">Russia</option>
                                                <option value="Rwanda">Rwanda</option>
                                                <option value="Saint Kitts and Nevis">
                                                    Saint Kitts and Nevis
                                                </option>
                                                <option value="Saint Lucia">Saint Lucia</option>
                                                <option value="Saint Vincent and the Grenadines">
                                                    Saint Vincent and the Grenadines
                                                </option>
                                                <option value="Samoa">Samoa</option>
                                                <option value="San Marino">San Marino</option>
                                                <option value="Sao Tome and Principe">
                                                    Sao Tome and Principe
                                                </option>
                                                <option value="Saudi Arabia">Saudi Arabia</option>
                                                <option value="Senegal">Senegal</option>
                                                <option value="Serbia">Serbia</option>
                                                <option value="Seychelles">Seychelles</option>
                                                <option value="Sierra Leone">Sierra Leone</option>
                                                <option value="Singapore">Singapore</option>
                                                <option value="Slovakia">Slovakia</option>
                                                <option value="Slovenia">Slovenia</option>
                                                <option value="Solomon Islands">Solomon Islands</option>
                                                <option value="Somalia">Somalia</option>
                                                <option value="South Africa">South Africa</option>
                                                <option value="South Sudan">South Sudan</option>
                                                <option value="Spain">Spain</option>
                                                <option value="Sri Lanka">Sri Lanka</option>
                                                <option value="Sudan">Sudan</option>
                                                <option value="Suriname">Suriname</option>
                                                <option value="Sweden">Sweden</option>
                                                <option value="Switzerland">Switzerland</option>
                                                <option value="Syria">Syria</option>
                                                <option value="Taiwan">Taiwan</option>
                                                <option value="Tajikistan">Tajikistan</option>
                                                <option value="Tanzania">Tanzania</option>
                                                <option value="Thailand">Thailand</option>
                                                <option value="Timor-Leste">Timor-Leste</option>
                                                <option value="Togo">Togo</option>
                                                <option value="Tonga">Tonga</option>
                                                <option value="Trinidad and Tobago">
                                                    Trinidad and Tobago
                                                </option>
                                                <option value="Tunisia">Tunisia</option>
                                                <option value="Turkey">Turkey</option>
                                                <option value="Turkmenistan">Turkmenistan</option>
                                                <option value="Tuvalu">Tuvalu</option>
                                                <option value="Uganda">Uganda</option>
                                                <option value="Ukraine">Ukraine</option>
                                                <option value="United Arab Emirates">
                                                    United Arab Emirates
                                                </option>
                                                <option value="United Kingdom">United Kingdom</option>
                                                <option value="United States">United States</option>
                                                <option value="Uruguay">Uruguay</option>
                                                <option value="Uzbekistan">Uzbekistan</option>
                                                <option value="Vanuatu">Vanuatu</option>
                                                <option value="Vatican City">Vatican City</option>
                                                <option value="Venezuela">Venezuela</option>
                                                <option value="Vietnam">Vietnam</option>
                                                <option value="Yemen">Yemen</option>
                                                <option value="Zambia">Zambia</option>
                                                <option value="Zimbabwe">Zimbabwe</option>
                                            </select>
                                        </div>

                                        <div class="col-12">
                                            <label for="city" class="form-label filter-label">{{
                                                $t("City")
                                            }}</label>
                                            <!-- <select id="city" class="form-select form-control form-input filter-select"
                                        v-model="selectedCity"
                                        @change="applyFilter(selectedCountry, selectedCity, this.filteredStories.CarGarage)">
                                        <option value="">Any</option>
                                        <option value="Petite">Petite</option>
                                        <option value="2-Litre">2-Litre</option>
                                    
                                    </select> -->
                                            <select id="city" class="form-select form-control form-input filter-select"
                                                v-model="selectedCity"
                                                @change="applyFilter(selectedCountry, selectedCity)">
                                                <option selected value="">City</option>
                                                <option v-for="city in cities" :key="city" :value="city">
                                                    {{ city }}
                                                </option>
                                                <!-- Other cities... -->
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="filter-box d-block d-md-block">
                            <h4 class="filter-title">{{ $t("filters") }}</h4>
                            <div class="row">
                                <div class="col-12">
                                    <label for="country" class="form-label filter-label">{{
                                        $t("Country")
                                        }}</label>
                                    <!-- <select id="country" class="form-select form-control form-input filter-select"
                                        v-model="selectedCountry"
                                        @change="applyFilter(selectedCountry, selectedCity, this.filteredStories.CarGarage)">
                                       <option selected value="">Country</option>
							<option value="Afghanistan">Afghanistan</option>
							<option value="Albania">Albania</option>
							<option value="Algeria">Algeria</option>
							<option value="Andorra">Andorra</option>
							<option value="Angola">Angola</option>
							<option value="Antigua and Barbuda">Antigua and Barbuda</option>
							<option value="Argentina">Argentina</option>
							<option value="Armenia">Armenia</option>
							<option value="Australia">Australia</option>
							<option value="Austria">Austria</option>
							<option value="Azerbaijan">Azerbaijan</option>
							<option value="Bahamas">Bahamas</option>
							<option value="Bahrain">Bahrain</option>
							<option value="Bangladesh">Bangladesh</option>
							<option value="Barbados">Barbados</option>
							<option value="Belarus">Belarus</option>
							<option value="Belgium">Belgium</option>
							<option value="Belize">Belize</option>
							<option value="Benin">Benin</option>
							<option value="Bhutan">Bhutan</option>
							<option value="Bolivia">Bolivia</option>
							<option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option>
							<option value="Botswana">Botswana</option>
							<option value="Brazil">Brazil</option>
							<option value="Brunei">Brunei</option>
							<option value="Bulgaria">Bulgaria</option>
							<option value="Burkina Faso">Burkina Faso</option>
							<option value="Burundi">Burundi</option>
							<option value="Cabo Verde">Cabo Verde</option>
							<option value="Cambodia">Cambodia</option>
							<option value="Cameroon">Cameroon</option>
							<option value="Canada">Canada</option>
							<option value="Central African Republic">Central African Republic</option>
							<option value="Chad">Chad</option>
							<option value="Chile">Chile</option>
							<option value="China">China</option>
							<option value="Colombia">Colombia</option>
							<option value="Comoros">Comoros</option>
							<option value="Congo">Congo</option>
							<option value="Costa Rica">Costa Rica</option>
							<option value="Croatia">Croatia</option>
							<option value="Cuba">Cuba</option>
							<option value="Cyprus">Cyprus</option>
							<option value="Czech Republic">Czech Republic</option>
							<option value="Denmark">Denmark</option>
							<option value="Djibouti">Djibouti</option>
							<option value="Dominica">Dominica</option>
							<option value="Dominican Republic">Dominican Republic</option>
							<option value="Ecuador">Ecuador</option>
							<option value="Egypt">Egypt</option>
							<option value="El Salvador">El Salvador</option>
							<option value="Equatorial Guinea">Equatorial Guinea</option>
							<option value="Eritrea">Eritrea</option>
							<option value="Estonia">Estonia</option>
							<option value="Eswatini">Eswatini</option>
							<option value="Ethiopia">Ethiopia</option>
							<option value="Fiji">Fiji</option>
							<option value="Finland">Finland</option>
							<option value="France">France</option>
							<option value="Gabon">Gabon</option>
							<option value="Gambia">Gambia</option>
							<option value="Georgia">Georgia</option>
							<option value="Germany">Germany</option>
							<option value="Ghana">Ghana</option>
							<option value="Greece">Greece</option>
							<option value="Grenada">Grenada</option>
							<option value="Guatemala">Guatemala</option>
							<option value="Guinea">Guinea</option>
							<option value="Guinea-Bissau">Guinea-Bissau</option>
							<option value="Guyana">Guyana</option>
							<option value="Haiti">Haiti</option>
							<option value="Honduras">Honduras</option>
							<option value="Hungary">Hungary</option>
							<option value="Iceland">Iceland</option>
							<option value="India">India</option>
							<option value="Indonesia">Indonesia</option>
							<option value="Iran">Iran</option>
							<option value="Iraq">Iraq</option>
							<option value="Ireland">Ireland</option>
							<option value="Israel">Israel</option>
							<option value="Italy">Italy</option>
							<option value="Jamaica">Jamaica</option>
							<option value="Japan">Japan</option>
							<option value="Jordan">Jordan</option>
							<option value="Kazakhstan">Kazakhstan</option>
							<option value="Kenya">Kenya</option>
							<option value="Kiribati">Kiribati</option>
							<option value="Korea, North">Korea, North</option>
							<option value="Korea, South">Korea, South</option>
							<option value="Kosovo">Kosovo</option>
							<option value="Kuwait">Kuwait</option>
							<option value="Kyrgyzstan">Kyrgyzstan</option>
							<option value="Laos">Laos</option>
							<option value="Latvia">Latvia</option>
							<option value="Lebanon">Lebanon</option>
							<option value="Lesotho">Lesotho</option>
							<option value="Liberia">Liberia</option>
							<option value="Libya">Libya</option>
							<option value="Liechtenstein">Liechtenstein</option>
							<option value="Lithuania">Lithuania</option>
							<option value="Luxembourg">Luxembourg</option>
							<option value="Madagascar">Madagascar</option>
							<option value="Malawi">Malawi</option>
							<option value="Malaysia">Malaysia</option>
							<option value="Maldives">Maldives</option>
							<option value="Mali">Mali</option>
							<option value="Malta">Malta</option>
							<option value="Marshall Islands">Marshall Islands</option>
							<option value="Mauritania">Mauritania</option>
							<option value="Mauritius">Mauritius</option>
							<option value="Mexico">Mexico</option>
							<option value="Micronesia">Micronesia</option>
							<option value="Moldova">Moldova</option>
							<option value="Monaco">Monaco</option>
							<option value="Mongolia">Mongolia</option>
							<option value="Montenegro">Montenegro</option>
							<option value="Morocco">Morocco</option>
							<option value="Mozambique">Mozambique</option>
							<option value="Myanmar">Myanmar</option>
							<option value="Namibia">Namibia</option>
							<option value="Nauru">Nauru</option>
							<option value="Nepal">Nepal</option>
							<option value="Netherlands">Netherlands</option>
							<option value="New Zealand">New Zealand</option>
							<option value="Nicaragua">Nicaragua</option>
							<option value="Niger">Niger</option>
							<option value="Nigeria">Nigeria</option>
							<option value="North Macedonia">North Macedonia</option>
							<option value="Norway">Norway</option>
							<option value="Oman">Oman</option>
							<option value="Pakistan">Pakistan</option>
							<option value="Palau">Palau</option>
							<option value="Panama">Panama</option>
							<option value="Papua New Guinea">Papua New Guinea</option>
							<option value="Paraguay">Paraguay</option>
							<option value="Peru">Peru</option>
							<option value="Philippines">Philippines</option>
							<option value="Poland">Poland</option>
							<option value="Portugal">Portugal</option>
							<option value="Qatar">Qatar</option>
							<option value="Romania">Romania</option>
							<option value="Russia">Russia</option>
							<option value="Rwanda">Rwanda</option>
							<option value="Saint Kitts and Nevis">Saint Kitts and Nevis</option>
							<option value="Saint Lucia">Saint Lucia</option>
							<option value="Saint Vincent and the Grenadines">Saint Vincent and the
								Grenadines</option>
							<option value="Samoa">Samoa</option>
							<option value="San Marino">San Marino</option>
							<option value="Sao Tome and Principe">Sao Tome and Principe</option>
							<option value="Saudi Arabia">Saudi Arabia</option>
							<option value="Senegal">Senegal</option>
							<option value="Serbia">Serbia</option>
							<option value="Seychelles">Seychelles</option>
							<option value="Sierra Leone">Sierra Leone</option>
							<option value="Singapore">Singapore</option>
							<option value="Slovakia">Slovakia</option>
							<option value="Slovenia">Slovenia</option>
							<option value="Solomon Islands">Solomon Islands</option>
							<option value="Somalia">Somalia</option>
							<option value="South Africa">South Africa</option>
							<option value="South Sudan">South Sudan</option>
							<option value="Spain">Spain</option>
							<option value="Sri Lanka">Sri Lanka</option>
							<option value="Sudan">Sudan</option>
							<option value="Suriname">Suriname</option>
							<option value="Sweden">Sweden</option>
							<option value="Switzerland">Switzerland</option>
							<option value="Syria">Syria</option>
							<option value="Taiwan">Taiwan</option>
							<option value="Tajikistan">Tajikistan</option>
							<option value="Tanzania">Tanzania</option>
							<option value="Thailand">Thailand</option>
							<option value="Timor-Leste">Timor-Leste</option>
							<option value="Togo">Togo</option>
							<option value="Tonga">Tonga</option>
							<option value="Trinidad and Tobago">Trinidad and Tobago</option>
							<option value="Tunisia">Tunisia</option>
							<option value="Turkey">Turkey</option>
							<option value="Turkmenistan">Turkmenistan</option>
							<option value="Tuvalu">Tuvalu</option>
							<option value="Uganda">Uganda</option>
							<option value="Ukraine">Ukraine</option>
							<option value="United Arab Emirates">United Arab Emirates</option>
							<option value="United Kingdom">United Kingdom</option>
							<option value="United States">United States</option>
							<option value="Uruguay">Uruguay</option>
							<option value="Uzbekistan">Uzbekistan</option>
							<option value="Vanuatu">Vanuatu</option>
							<option value="Vatican City">Vatican City</option>
							<option value="Venezuela">Venezuela</option>
							<option value="Vietnam">Vietnam</option>
							<option value="Yemen">Yemen</option>
							<option value="Zambia">Zambia</option>
							<option value="Zimbabwe">Zimbabwe</option>
                                    </select> -->
                                    <select id="country" class="form-select form-control form-input filter-select"
                                        v-model="selectedCountry" @change="applyFilter(selectedCountry, selectedCity)">
                                        <option selected value="">Country</option>
                                        <option value="Afghanistan">Afghanistan</option>
                                        <option value="Albania">Albania</option>
                                        <option value="Algeria">Algeria</option>
                                        <option value="Andorra">Andorra</option>
                                        <option value="Angola">Angola</option>
                                        <option value="Antigua and Barbuda">
                                            Antigua and Barbuda
                                        </option>
                                        <option value="Argentina">Argentina</option>
                                        <option value="Armenia">Armenia</option>
                                        <option value="Australia">Australia</option>
                                        <option value="Austria">Austria</option>
                                        <option value="Azerbaijan">Azerbaijan</option>
                                        <option value="Bahamas">Bahamas</option>
                                        <option value="Bahrain">Bahrain</option>
                                        <option value="Bangladesh">Bangladesh</option>
                                        <option value="Barbados">Barbados</option>
                                        <option value="Belarus">Belarus</option>
                                        <option value="Belgium">Belgium</option>
                                        <option value="Belize">Belize</option>
                                        <option value="Benin">Benin</option>
                                        <option value="Bhutan">Bhutan</option>
                                        <option value="Bolivia">Bolivia</option>
                                        <option value="Bosnia and Herzegovina">
                                            Bosnia and Herzegovina
                                        </option>
                                        <option value="Botswana">Botswana</option>
                                        <option value="Brazil">Brazil</option>
                                        <option value="Brunei">Brunei</option>
                                        <option value="Bulgaria">Bulgaria</option>
                                        <option value="Burkina Faso">Burkina Faso</option>
                                        <option value="Burundi">Burundi</option>
                                        <option value="Cabo Verde">Cabo Verde</option>
                                        <option value="Cambodia">Cambodia</option>
                                        <option value="Cameroon">Cameroon</option>
                                        <option value="Canada">Canada</option>
                                        <option value="Central African Republic">
                                            Central African Republic
                                        </option>
                                        <option value="Chad">Chad</option>
                                        <option value="Chile">Chile</option>
                                        <option value="China">China</option>
                                        <option value="Colombia">Colombia</option>
                                        <option value="Comoros">Comoros</option>
                                        <option value="Congo">Congo</option>
                                        <option value="Costa Rica">Costa Rica</option>
                                        <option value="Croatia">Croatia</option>
                                        <option value="Cuba">Cuba</option>
                                        <option value="Cyprus">Cyprus</option>
                                        <option value="Czech Republic">Czech Republic</option>
                                        <option value="Denmark">Denmark</option>
                                        <option value="Djibouti">Djibouti</option>
                                        <option value="Dominica">Dominica</option>
                                        <option value="Dominican Republic">
                                            Dominican Republic
                                        </option>
                                        <option value="Ecuador">Ecuador</option>
                                        <option value="Egypt">Egypt</option>
                                        <option value="El Salvador">El Salvador</option>
                                        <option value="Equatorial Guinea">Equatorial Guinea</option>
                                        <option value="Eritrea">Eritrea</option>
                                        <option value="Estonia">Estonia</option>
                                        <option value="Eswatini">Eswatini</option>
                                        <option value="Ethiopia">Ethiopia</option>
                                        <option value="Fiji">Fiji</option>
                                        <option value="Finland">Finland</option>
                                        <option value="France">France</option>
                                        <option value="Gabon">Gabon</option>
                                        <option value="Gambia">Gambia</option>
                                        <option value="Georgia">Georgia</option>
                                        <option value="Germany">Germany</option>
                                        <option value="Ghana">Ghana</option>
                                        <option value="Greece">Greece</option>
                                        <option value="Grenada">Grenada</option>
                                        <option value="Guatemala">Guatemala</option>
                                        <option value="Guinea">Guinea</option>
                                        <option value="Guinea-Bissau">Guinea-Bissau</option>
                                        <option value="Guyana">Guyana</option>
                                        <option value="Haiti">Haiti</option>
                                        <option value="Honduras">Honduras</option>
                                        <option value="Hungary">Hungary</option>
                                        <option value="Iceland">Iceland</option>
                                        <option value="India">India</option>
                                        <option value="Indonesia">Indonesia</option>
                                        <option value="Iran">Iran</option>
                                        <option value="Iraq">Iraq</option>
                                        <option value="Ireland">Ireland</option>
                                        <option value="Israel">Israel</option>
                                        <option value="Italy">Italy</option>
                                        <option value="Jamaica">Jamaica</option>
                                        <option value="Japan">Japan</option>
                                        <option value="Jordan">Jordan</option>
                                        <option value="Kazakhstan">Kazakhstan</option>
                                        <option value="Kenya">Kenya</option>
                                        <option value="Kiribati">Kiribati</option>
                                        <option value="Korea, North">Korea, North</option>
                                        <option value="Korea, South">Korea, South</option>
                                        <option value="Kosovo">Kosovo</option>
                                        <option value="Kuwait">Kuwait</option>
                                        <option value="Kyrgyzstan">Kyrgyzstan</option>
                                        <option value="Laos">Laos</option>
                                        <option value="Latvia">Latvia</option>
                                        <option value="Lebanon">Lebanon</option>
                                        <option value="Lesotho">Lesotho</option>
                                        <option value="Liberia">Liberia</option>
                                        <option value="Libya">Libya</option>
                                        <option value="Liechtenstein">Liechtenstein</option>
                                        <option value="Lithuania">Lithuania</option>
                                        <option value="Luxembourg">Luxembourg</option>
                                        <option value="Madagascar">Madagascar</option>
                                        <option value="Malawi">Malawi</option>
                                        <option value="Malaysia">Malaysia</option>
                                        <option value="Maldives">Maldives</option>
                                        <option value="Mali">Mali</option>
                                        <option value="Malta">Malta</option>
                                        <option value="Marshall Islands">Marshall Islands</option>
                                        <option value="Mauritania">Mauritania</option>
                                        <option value="Mauritius">Mauritius</option>
                                        <option value="Mexico">Mexico</option>
                                        <option value="Micronesia">Micronesia</option>
                                        <option value="Moldova">Moldova</option>
                                        <option value="Monaco">Monaco</option>
                                        <option value="Mongolia">Mongolia</option>
                                        <option value="Montenegro">Montenegro</option>
                                        <option value="Morocco">Morocco</option>
                                        <option value="Mozambique">Mozambique</option>
                                        <option value="Myanmar">Myanmar</option>
                                        <option value="Namibia">Namibia</option>
                                        <option value="Nauru">Nauru</option>
                                        <option value="Nepal">Nepal</option>
                                        <option value="Netherlands">Netherlands</option>
                                        <option value="New Zealand">New Zealand</option>
                                        <option value="Nicaragua">Nicaragua</option>
                                        <option value="Niger">Niger</option>
                                        <option value="Nigeria">Nigeria</option>
                                        <option value="North Macedonia">North Macedonia</option>
                                        <option value="Norway">Norway</option>
                                        <option value="Oman">Oman</option>
                                        <option value="Pakistan">Pakistan</option>
                                        <option value="Palau">Palau</option>
                                        <option value="Panama">Panama</option>
                                        <option value="Papua New Guinea">Papua New Guinea</option>
                                        <option value="Paraguay">Paraguay</option>
                                        <option value="Peru">Peru</option>
                                        <option value="Philippines">Philippines</option>
                                        <option value="Poland">Poland</option>
                                        <option value="Portugal">Portugal</option>
                                        <option value="Qatar">Qatar</option>
                                        <option value="Romania">Romania</option>
                                        <option value="Russia">Russia</option>
                                        <option value="Rwanda">Rwanda</option>
                                        <option value="Saint Kitts and Nevis">
                                            Saint Kitts and Nevis
                                        </option>
                                        <option value="Saint Lucia">Saint Lucia</option>
                                        <option value="Saint Vincent and the Grenadines">
                                            Saint Vincent and the Grenadines
                                        </option>
                                        <option value="Samoa">Samoa</option>
                                        <option value="San Marino">San Marino</option>
                                        <option value="Sao Tome and Principe">
                                            Sao Tome and Principe
                                        </option>
                                        <option value="Saudi Arabia">Saudi Arabia</option>
                                        <option value="Senegal">Senegal</option>
                                        <option value="Serbia">Serbia</option>
                                        <option value="Seychelles">Seychelles</option>
                                        <option value="Sierra Leone">Sierra Leone</option>
                                        <option value="Singapore">Singapore</option>
                                        <option value="Slovakia">Slovakia</option>
                                        <option value="Slovenia">Slovenia</option>
                                        <option value="Solomon Islands">Solomon Islands</option>
                                        <option value="Somalia">Somalia</option>
                                        <option value="South Africa">South Africa</option>
                                        <option value="South Sudan">South Sudan</option>
                                        <option value="Spain">Spain</option>
                                        <option value="Sri Lanka">Sri Lanka</option>
                                        <option value="Sudan">Sudan</option>
                                        <option value="Suriname">Suriname</option>
                                        <option value="Sweden">Sweden</option>
                                        <option value="Switzerland">Switzerland</option>
                                        <option value="Syria">Syria</option>
                                        <option value="Taiwan">Taiwan</option>
                                        <option value="Tajikistan">Tajikistan</option>
                                        <option value="Tanzania">Tanzania</option>
                                        <option value="Thailand">Thailand</option>
                                        <option value="Timor-Leste">Timor-Leste</option>
                                        <option value="Togo">Togo</option>
                                        <option value="Tonga">Tonga</option>
                                        <option value="Trinidad and Tobago">
                                            Trinidad and Tobago
                                        </option>
                                        <option value="Tunisia">Tunisia</option>
                                        <option value="Turkey">Turkey</option>
                                        <option value="Turkmenistan">Turkmenistan</option>
                                        <option value="Tuvalu">Tuvalu</option>
                                        <option value="Uganda">Uganda</option>
                                        <option value="Ukraine">Ukraine</option>
                                        <option value="United Arab Emirates">
                                            United Arab Emirates
                                        </option>
                                        <option value="United Kingdom">United Kingdom</option>
                                        <option value="United States">United States</option>
                                        <option value="Uruguay">Uruguay</option>
                                        <option value="Uzbekistan">Uzbekistan</option>
                                        <option value="Vanuatu">Vanuatu</option>
                                        <option value="Vatican City">Vatican City</option>
                                        <option value="Venezuela">Venezuela</option>
                                        <option value="Vietnam">Vietnam</option>
                                        <option value="Yemen">Yemen</option>
                                        <option value="Zambia">Zambia</option>
                                        <option value="Zimbabwe">Zimbabwe</option>
                                    </select>
                                </div>

                                <div class="col-12">
                                    <label for="city" class="form-label filter-label">{{
                                        $t("City")
                                        }}</label>
                                    <!-- <select id="city" class="form-select form-control form-input filter-select"
                                        v-model="selectedCity"
                                        @change="applyFilter(selectedCountry, selectedCity, this.filteredStories.CarGarage)">
                                        <option value="">Any</option>
                                        <option value="Petite">Petite</option>
                                        <option value="2-Litre">2-Litre</option>
                                    
                                    </select> -->
                                    <select id="city" class="form-select form-control form-input filter-select"
                                        v-model="selectedCity" @change="applyFilter(selectedCountry, selectedCity)">
                                        <option selected value="">City</option>
                                        <option v-for="city in cities" :key="city" :value="city">
                                            {{ city }}
                                        </option>
                                        <!-- Other cities... -->
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
                            <!-- Container for the Viewer.js to manage image viewing -->
                            <div class="imageBig" ref="viewerContainer" style="display: none">
                                <img :src="currentImage" alt="Current Image for Viewing" />
                                <img :src="image" v-for="(image, idx) in parsedImages(viewerImages)" :key="idx" />

                            </div>
                            <div class="" v-for="(car, index) in this.filteredStories.CarGarage" :key="index"
                                :class="isModalOpen && activeCarIndex === index ? 'z-2' : 'z-0'">
                                <div @click="openModal(index)"
                                    class="card-sorting-content px-3 px-md-1 py-2 col-md-12 p-1">
                                    <div class="main-slider weekly-slider align-items-center">
                                        <div class="swiper-container myCarListingCard-swiper-container">
                                            <!-- <swiper :effect="'cards'" :grabCursor="true" :modules="modules"
                                                :initialSlide="1" class="mySwiper swiper-no-shadow">
                                                <swiper-slide class="swiper-no-shadow"
                                                    v-for="(image, idx) in parsedImages(car.images)" :key="idx">
                                                    <div class="d-block">
                                                        <img :src="image
                                                            " class="slider-img myCarListingCard-img" alt="car" />
                                                    </div>
                                                </swiper-slide>
                                            </swiper> -->
                                            <swiper :effect="'cards'" :grabCursor="true" :modules="modules"
                                                :initialSlide="1" class="mySwiper swiper-no-shadow">

                                                <swiper-slide class="swiper-no-shadow" v-for="(image, idx) in (parsedImages(car.images).length > 1
                                                    ? [parsedImages(car.images)[1], parsedImages(car.images)[0], ...parsedImages(car.images).slice(2)]
                                                    : parsedImages(car.images))" :key="idx">

                                                    <div class="d-block">
                                                        <img :src="image" class="slider-img myCarListingCard-img"
                                                            alt="car" />
                                                    </div>

                                                </swiper-slide>

                                            </swiper>

                                            <span class="swiper-notification" aria-live="assertive"
                                                aria-atomic="true"></span>
                                        </div>
                                        <img :src="iconford" class="d-none" alt="" />
                                    </div>
                                    <div class="card-content-car">
                                        <h4 class="text-white mb-1 " @click="openModal(index)">
                                            {{ car.story_name }}
                                        </h4>
                                        <ul class="user-details-car myCarListingCard-user-details-car mb-1 mt-0">
                                            <li class="list-item-user mb-0 justify-content-start">
                                                <img :src="instaIcon" class="instaIcon" />
                                                <a :href="'https://www.instagram.com/' + car.social_media"
                                                    class="a-tag-name-user mt-2 mb-2" style="font-size: 14px"
                                                    target="_blank" rel="noopener noreferrer">
                                                    {{ car.social_media }}
                                                </a>
                                            </li>
                                        </ul>

                                        <p class="text-white mt-0 mb-0 w-75 text-wrap " style="font-size: 14px"
                                            v-if="car.story_history" @click="openModal(index)">
                                            <span class="text-orange"> Tell us your Garage story & how it all
                                                started</span>
                                            <br />
                                            <span class="tranc">{{ car.story_history }}</span>

                                            <!-- Conditionally show "view more" if there are 10 or more words -->
                                            <!-- <span class="view-more-a-tag ms-2" style="cursor: pointer"
                                                v-if="car.story_history.split(' ').length >= 10"
                                                @click="openModal(index)">
                                                {{ $t("viewMore") }}
                                            </span> -->
                                        </p>
                                    </div>
                                </div>

                                <div class="modal show d-block" tabindex="-1" role="dialog"
                                    v-if="isModalOpen && activeCarIndex === index">
                                    <div class="modal-dialog modal-dialog-centered" role="document">
                                        <div class="modal-content">
                                            <div class="modal-body text-center">
                                                <span class="close-icon" @click="modalClose">
                                                    <i class="fas fa-times"></i>
                                                </span>

                                                <div class="mt-4 py-2">
                                                    <div class="myCarListingCard-swiper-container">
                                                        <!-- <swiper :effect="'cards'" :grabCursor="true" :modules="modules"
                                                            :initialSlide="1" :pagination="{ clickable: true }"
                                                            :navigation="{
                                                                nextEl: '.custom-next',
                                                                prevEl: '.custom-prev',
                                                            }" class="mySwiper swiper-no-shadow modalswipper">
                                                            <swiper-slide class="swiper-no-shadow modalswippersh"
                                                                v-for="(image, idx) in parsedImages(car.images)"
                                                                :key="idx">
                                                                <div class="d-block">
                                                                    <img :src="image
                                                                        "
                                                                        class="slider-img myCarListingCard-img modalswipperImage"
                                                                        alt="car"
                                                                        @click="openViewer(image, car.images)" />
                                                                </div>
                                                            </swiper-slide>
                                                        </swiper> -->
                                                        <swiper :effect="'cards'" :grabCursor="true" :modules="modules"
                                                            :initialSlide="1" :pagination="{ clickable: true }"
                                                            :navigation="{
                                                                nextEl: '.custom-next',
                                                                prevEl: '.custom-prev',
                                                            }" class="mySwiper swiper-no-shadow modalswipper">

                                                            <swiper-slide class="swiper-no-shadow modalswippersh" v-for="(image, idx) in (parsedImages(car.images).length > 1
                                                                ? [parsedImages(car.images)[1], parsedImages(car.images)[0], ...parsedImages(car.images).slice(2)]
                                                                : parsedImages(car.images))" :key="idx">

                                                                <div class="d-block">
                                                                    <img :src="image"
                                                                        class="slider-img myCarListingCard-img modalswipperImage"
                                                                        alt="car"
                                                                        @click="openViewer(image, car.images)" />
                                                                </div>

                                                            </swiper-slide>

                                                        </swiper>

                                                        <span class="swiper-notification" aria-live="assertive"
                                                            aria-atomic="true"></span>
                                                    </div>
                                                    <div class="custom-swiper-navigation gap-8 justify-content-center"
                                                        :class="isOverlayTransparent ? 'd-flex' : 'd-flex'">
                                                        <button class="custom-prev btn">
                                                            <img :src="prevIcon" alt="" />
                                                        </button>
                                                        <button class="custom-next btn">
                                                            <img :src="nextIcon" alt="" />
                                                        </button>
                                                    </div>
                                                    <div class="d-flex justify-content-end" v-if="isOverlayTransparent">
                                                        <!-- <button class="btn btn-danger " @click='toggleOverlayOpacity'><span class="" >
                                                                <i class="fa-solid fa-xmark"></i>
                                                </span></button> -->
                                                    </div>
                                                    <div class="overlay mt-5" :class="{ '': isOverlayTransparent }"
                                                        @click="toggleOverlayOpacity">
                                                        <div
                                                            class="mt-2 d-flex justify-content-between align-items-center mb-2">
                                                            <div class="d-flex align-items-center gap-2">
                                                                <img :src="iconford" class="d-none" alt="" />
                                                                <h3 class="m-0 text-white fontsiz">
                                                                    {{ car.story_name }}
                                                                </h3>
                                                            </div>
                                                        </div>
                                                        <div class="d-flex align-items-center text-white mt-2">
                                                            <img :src="instaIcon" class="instaIcon" />
                                                            <a :href="'https://www.instagram.com/' + car.social_media"
                                                                class="a-tag-name-user mt-2 mb-2"
                                                                style="font-size: 14px" target="_blank"
                                                                rel="noopener noreferrer">
                                                                @{{ car.social_media }}
                                                            </a>
                                                        </div>


                                                        <p class="text-orange"
                                                            style="font-size: 14px; text-align: start">Tell us the
                                                            wildest or most unforgettable moment you’ve had with your
                                                            car</p>
                                                        <p class="text-white"
                                                            style="font-size: 14px; text-align: start">
                                                            {{ car.adventure_story }}
                                                        </p>
                                                        <p class="text-orange"
                                                            style="font-size: 14px; text-align: start">Tell us your
                                                            Garage story & how it all started</p>
                                                        <p class="text-white"
                                                            style="font-size: 14px; text-align: start">
                                                            {{ car.story_history }}
                                                        </p>

                                                    </div>
                                                    <!-- <p class="view-more-a-tag ms-2" style="cursor: pointer" @click="showMore[index] = !showMore[index]">
                  {{ showMore[index] ? $t("showLess") : $t("viewMore") }}
                </p> -->
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <!-- Modal -->
                        </div>

                        <!-- end template -->
                    </div>
                </div>
            </div>
            <div v-else-if="activeTab === 2" :class="isModalOpenFe ? 'z-0 position-relative ' : ''">
                <!-- Add content here Car Modification/Tuning Shop Content -->
                <div class="row">
                    <div class="col-md-12 mb-2">
                        <input type="text" class="form-control formSearch mb-2" placeholder="search" v-model="search"
                            @input="applyFilterCarModificationTunningShopSearch" />
                    </div>
                    <div class="col-md-3">
                        <div class="list-item-btn position-relative submit-btn-div mx-0 mt-0 mb-2 d-none d-md-none">
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
                            <button type="submit" class="signin-btnli btn-filter " id="submit-button"
                                data-bs-toggle="collapse" data-bs-target="#collapseExample3" aria-expanded="false"
                                aria-controls="collapseExample3">
                                {{ $t('Filters') }}
                            </button>
                            <span class="border-bottom-btn border-left-btn position-absolute">
                                <img src="@/assets/images/Group11.png" class="img-border position-absolute" alt="" />
                            </span>
                            <span class="border-bottom-btn position-absolute">
                                <img src="@/assets/images/Path473.png" class="img-border position-absolute" alt="" />
                            </span>
                        </div>

                        <div class="collapse d-none d-md-none" id="collapseExample3">
                            <div class="">
                                <div class="filter-box ">
                                    <h4 class="filter-title">{{ $t("filters") }}</h4>
                                    <div class="row">
                                        <div class="col-12">
                                            <label for="country" class="form-label filter-label">{{
                                                $t("Country")
                                                }}</label>
                                            <select v-model="selectedCountry" id="country"
                                                class="form-select form-control form-input filter-select"
                                                @change="applyFilterShop(selectedCountry, selectedCity)">
                                                <option selected value="">Country</option>
                                                <option value="Afghanistan">Afghanistan</option>
                                                <option value="Albania">Albania</option>
                                                <option value="Algeria">Algeria</option>
                                                <option value="Andorra">Andorra</option>
                                                <option value="Angola">Angola</option>
                                                <option value="Antigua and Barbuda">
                                                    Antigua and Barbuda
                                                </option>
                                                <option value="Argentina">Argentina</option>
                                                <option value="Armenia">Armenia</option>
                                                <option value="Australia">Australia</option>
                                                <option value="Austria">Austria</option>
                                                <option value="Azerbaijan">Azerbaijan</option>
                                                <option value="Bahamas">Bahamas</option>
                                                <option value="Bahrain">Bahrain</option>
                                                <option value="Bangladesh">Bangladesh</option>
                                                <option value="Barbados">Barbados</option>
                                                <option value="Belarus">Belarus</option>
                                                <option value="Belgium">Belgium</option>
                                                <option value="Belize">Belize</option>
                                                <option value="Benin">Benin</option>
                                                <option value="Bhutan">Bhutan</option>
                                                <option value="Bolivia">Bolivia</option>
                                                <option value="Bosnia and Herzegovina">
                                                    Bosnia and Herzegovina
                                                </option>
                                                <option value="Botswana">Botswana</option>
                                                <option value="Brazil">Brazil</option>
                                                <option value="Brunei">Brunei</option>
                                                <option value="Bulgaria">Bulgaria</option>
                                                <option value="Burkina Faso">Burkina Faso</option>
                                                <option value="Burundi">Burundi</option>
                                                <option value="Cabo Verde">Cabo Verde</option>
                                                <option value="Cambodia">Cambodia</option>
                                                <option value="Cameroon">Cameroon</option>
                                                <option value="Canada">Canada</option>
                                                <option value="Central African Republic">
                                                    Central African Republic
                                                </option>
                                                <option value="Chad">Chad</option>
                                                <option value="Chile">Chile</option>
                                                <option value="China">China</option>
                                                <option value="Colombia">Colombia</option>
                                                <option value="Comoros">Comoros</option>
                                                <option value="Congo">Congo</option>
                                                <option value="Costa Rica">Costa Rica</option>
                                                <option value="Croatia">Croatia</option>
                                                <option value="Cuba">Cuba</option>
                                                <option value="Cyprus">Cyprus</option>
                                                <option value="Czech Republic">Czech Republic</option>
                                                <option value="Denmark">Denmark</option>
                                                <option value="Djibouti">Djibouti</option>
                                                <option value="Dominica">Dominica</option>
                                                <option value="Dominican Republic">
                                                    Dominican Republic
                                                </option>
                                                <option value="Ecuador">Ecuador</option>
                                                <option value="Egypt">Egypt</option>
                                                <option value="El Salvador">El Salvador</option>
                                                <option value="Equatorial Guinea">Equatorial Guinea</option>
                                                <option value="Eritrea">Eritrea</option>
                                                <option value="Estonia">Estonia</option>
                                                <option value="Eswatini">Eswatini</option>
                                                <option value="Ethiopia">Ethiopia</option>
                                                <option value="Fiji">Fiji</option>
                                                <option value="Finland">Finland</option>
                                                <option value="France">France</option>
                                                <option value="Gabon">Gabon</option>
                                                <option value="Gambia">Gambia</option>
                                                <option value="Georgia">Georgia</option>
                                                <option value="Germany">Germany</option>
                                                <option value="Ghana">Ghana</option>
                                                <option value="Greece">Greece</option>
                                                <option value="Grenada">Grenada</option>
                                                <option value="Guatemala">Guatemala</option>
                                                <option value="Guinea">Guinea</option>
                                                <option value="Guinea-Bissau">Guinea-Bissau</option>
                                                <option value="Guyana">Guyana</option>
                                                <option value="Haiti">Haiti</option>
                                                <option value="Honduras">Honduras</option>
                                                <option value="Hungary">Hungary</option>
                                                <option value="Iceland">Iceland</option>
                                                <option value="India">India</option>
                                                <option value="Indonesia">Indonesia</option>
                                                <option value="Iran">Iran</option>
                                                <option value="Iraq">Iraq</option>
                                                <option value="Ireland">Ireland</option>
                                                <option value="Israel">Israel</option>
                                                <option value="Italy">Italy</option>
                                                <option value="Jamaica">Jamaica</option>
                                                <option value="Japan">Japan</option>
                                                <option value="Jordan">Jordan</option>
                                                <option value="Kazakhstan">Kazakhstan</option>
                                                <option value="Kenya">Kenya</option>
                                                <option value="Kiribati">Kiribati</option>
                                                <option value="Korea, North">Korea, North</option>
                                                <option value="Korea, South">Korea, South</option>
                                                <option value="Kosovo">Kosovo</option>
                                                <option value="Kuwait">Kuwait</option>
                                                <option value="Kyrgyzstan">Kyrgyzstan</option>
                                                <option value="Laos">Laos</option>
                                                <option value="Latvia">Latvia</option>
                                                <option value="Lebanon">Lebanon</option>
                                                <option value="Lesotho">Lesotho</option>
                                                <option value="Liberia">Liberia</option>
                                                <option value="Libya">Libya</option>
                                                <option value="Liechtenstein">Liechtenstein</option>
                                                <option value="Lithuania">Lithuania</option>
                                                <option value="Luxembourg">Luxembourg</option>
                                                <option value="Madagascar">Madagascar</option>
                                                <option value="Malawi">Malawi</option>
                                                <option value="Malaysia">Malaysia</option>
                                                <option value="Maldives">Maldives</option>
                                                <option value="Mali">Mali</option>
                                                <option value="Malta">Malta</option>
                                                <option value="Marshall Islands">Marshall Islands</option>
                                                <option value="Mauritania">Mauritania</option>
                                                <option value="Mauritius">Mauritius</option>
                                                <option value="Mexico">Mexico</option>
                                                <option value="Micronesia">Micronesia</option>
                                                <option value="Moldova">Moldova</option>
                                                <option value="Monaco">Monaco</option>
                                                <option value="Mongolia">Mongolia</option>
                                                <option value="Montenegro">Montenegro</option>
                                                <option value="Morocco">Morocco</option>
                                                <option value="Mozambique">Mozambique</option>
                                                <option value="Myanmar">Myanmar</option>
                                                <option value="Namibia">Namibia</option>
                                                <option value="Nauru">Nauru</option>
                                                <option value="Nepal">Nepal</option>
                                                <option value="Netherlands">Netherlands</option>
                                                <option value="New Zealand">New Zealand</option>
                                                <option value="Nicaragua">Nicaragua</option>
                                                <option value="Niger">Niger</option>
                                                <option value="Nigeria">Nigeria</option>
                                                <option value="North Macedonia">North Macedonia</option>
                                                <option value="Norway">Norway</option>
                                                <option value="Oman">Oman</option>
                                                <option value="Pakistan">Pakistan</option>
                                                <option value="Palau">Palau</option>
                                                <option value="Panama">Panama</option>
                                                <option value="Papua New Guinea">Papua New Guinea</option>
                                                <option value="Paraguay">Paraguay</option>
                                                <option value="Peru">Peru</option>
                                                <option value="Philippines">Philippines</option>
                                                <option value="Poland">Poland</option>
                                                <option value="Portugal">Portugal</option>
                                                <option value="Qatar">Qatar</option>
                                                <option value="Romania">Romania</option>
                                                <option value="Russia">Russia</option>
                                                <option value="Rwanda">Rwanda</option>
                                                <option value="Saint Kitts and Nevis">
                                                    Saint Kitts and Nevis
                                                </option>
                                                <option value="Saint Lucia">Saint Lucia</option>
                                                <option value="Saint Vincent and the Grenadines">
                                                    Saint Vincent and the Grenadines
                                                </option>
                                                <option value="Samoa">Samoa</option>
                                                <option value="San Marino">San Marino</option>
                                                <option value="Sao Tome and Principe">
                                                    Sao Tome and Principe
                                                </option>
                                                <option value="Saudi Arabia">Saudi Arabia</option>
                                                <option value="Senegal">Senegal</option>
                                                <option value="Serbia">Serbia</option>
                                                <option value="Seychelles">Seychelles</option>
                                                <option value="Sierra Leone">Sierra Leone</option>
                                                <option value="Singapore">Singapore</option>
                                                <option value="Slovakia">Slovakia</option>
                                                <option value="Slovenia">Slovenia</option>
                                                <option value="Solomon Islands">Solomon Islands</option>
                                                <option value="Somalia">Somalia</option>
                                                <option value="South Africa">South Africa</option>
                                                <option value="South Sudan">South Sudan</option>
                                                <option value="Spain">Spain</option>
                                                <option value="Sri Lanka">Sri Lanka</option>
                                                <option value="Sudan">Sudan</option>
                                                <option value="Suriname">Suriname</option>
                                                <option value="Sweden">Sweden</option>
                                                <option value="Switzerland">Switzerland</option>
                                                <option value="Syria">Syria</option>
                                                <option value="Taiwan">Taiwan</option>
                                                <option value="Tajikistan">Tajikistan</option>
                                                <option value="Tanzania">Tanzania</option>
                                                <option value="Thailand">Thailand</option>
                                                <option value="Timor-Leste">Timor-Leste</option>
                                                <option value="Togo">Togo</option>
                                                <option value="Tonga">Tonga</option>
                                                <option value="Trinidad and Tobago">
                                                    Trinidad and Tobago
                                                </option>
                                                <option value="Tunisia">Tunisia</option>
                                                <option value="Turkey">Turkey</option>
                                                <option value="Turkmenistan">Turkmenistan</option>
                                                <option value="Tuvalu">Tuvalu</option>
                                                <option value="Uganda">Uganda</option>
                                                <option value="Ukraine">Ukraine</option>
                                                <option value="United Arab Emirates">
                                                    United Arab Emirates
                                                </option>
                                                <option value="United Kingdom">United Kingdom</option>
                                                <option value="United States">United States</option>
                                                <option value="Uruguay">Uruguay</option>
                                                <option value="Uzbekistan">Uzbekistan</option>
                                                <option value="Vanuatu">Vanuatu</option>
                                                <option value="Vatican City">Vatican City</option>
                                                <option value="Venezuela">Venezuela</option>
                                                <option value="Vietnam">Vietnam</option>
                                                <option value="Yemen">Yemen</option>
                                                <option value="Zambia">Zambia</option>
                                                <option value="Zimbabwe">Zimbabwe</option>
                                            </select>
                                        </div>
                                        <div class="col-12">
                                            <label for="city" class="form-label filter-label">{{
                                                $t("City")
                                                }}</label>
                                            <select id="city" class="form-select form-control form-input filter-select"
                                                v-model="selectedCity"
                                                @change="applyFilterShop(selectedCountry, selectedCity)">
                                                <option selected value="">City</option>
                                                <option v-for="city in cities" :key="city" :value="city">
                                                    {{ city }}
                                                </option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="filter-box d-block d-md-block">
                            <h4 class="filter-title">{{ $t("filters") }}</h4>
                            <div class="row">
                                <div class="col-12">
                                    <label for="country" class="form-label filter-label">{{
                                        $t("Country")
                                        }}</label>
                                    <select v-model="selectedCountry" id="country"
                                        class="form-select form-control form-input filter-select"
                                        @change="applyFilterShop(selectedCountry, selectedCity)">
                                        <option selected value="">Country</option>
                                        <option value="Afghanistan">Afghanistan</option>
                                        <option value="Albania">Albania</option>
                                        <option value="Algeria">Algeria</option>
                                        <option value="Andorra">Andorra</option>
                                        <option value="Angola">Angola</option>
                                        <option value="Antigua and Barbuda">
                                            Antigua and Barbuda
                                        </option>
                                        <option value="Argentina">Argentina</option>
                                        <option value="Armenia">Armenia</option>
                                        <option value="Australia">Australia</option>
                                        <option value="Austria">Austria</option>
                                        <option value="Azerbaijan">Azerbaijan</option>
                                        <option value="Bahamas">Bahamas</option>
                                        <option value="Bahrain">Bahrain</option>
                                        <option value="Bangladesh">Bangladesh</option>
                                        <option value="Barbados">Barbados</option>
                                        <option value="Belarus">Belarus</option>
                                        <option value="Belgium">Belgium</option>
                                        <option value="Belize">Belize</option>
                                        <option value="Benin">Benin</option>
                                        <option value="Bhutan">Bhutan</option>
                                        <option value="Bolivia">Bolivia</option>
                                        <option value="Bosnia and Herzegovina">
                                            Bosnia and Herzegovina
                                        </option>
                                        <option value="Botswana">Botswana</option>
                                        <option value="Brazil">Brazil</option>
                                        <option value="Brunei">Brunei</option>
                                        <option value="Bulgaria">Bulgaria</option>
                                        <option value="Burkina Faso">Burkina Faso</option>
                                        <option value="Burundi">Burundi</option>
                                        <option value="Cabo Verde">Cabo Verde</option>
                                        <option value="Cambodia">Cambodia</option>
                                        <option value="Cameroon">Cameroon</option>
                                        <option value="Canada">Canada</option>
                                        <option value="Central African Republic">
                                            Central African Republic
                                        </option>
                                        <option value="Chad">Chad</option>
                                        <option value="Chile">Chile</option>
                                        <option value="China">China</option>
                                        <option value="Colombia">Colombia</option>
                                        <option value="Comoros">Comoros</option>
                                        <option value="Congo">Congo</option>
                                        <option value="Costa Rica">Costa Rica</option>
                                        <option value="Croatia">Croatia</option>
                                        <option value="Cuba">Cuba</option>
                                        <option value="Cyprus">Cyprus</option>
                                        <option value="Czech Republic">Czech Republic</option>
                                        <option value="Denmark">Denmark</option>
                                        <option value="Djibouti">Djibouti</option>
                                        <option value="Dominica">Dominica</option>
                                        <option value="Dominican Republic">
                                            Dominican Republic
                                        </option>
                                        <option value="Ecuador">Ecuador</option>
                                        <option value="Egypt">Egypt</option>
                                        <option value="El Salvador">El Salvador</option>
                                        <option value="Equatorial Guinea">Equatorial Guinea</option>
                                        <option value="Eritrea">Eritrea</option>
                                        <option value="Estonia">Estonia</option>
                                        <option value="Eswatini">Eswatini</option>
                                        <option value="Ethiopia">Ethiopia</option>
                                        <option value="Fiji">Fiji</option>
                                        <option value="Finland">Finland</option>
                                        <option value="France">France</option>
                                        <option value="Gabon">Gabon</option>
                                        <option value="Gambia">Gambia</option>
                                        <option value="Georgia">Georgia</option>
                                        <option value="Germany">Germany</option>
                                        <option value="Ghana">Ghana</option>
                                        <option value="Greece">Greece</option>
                                        <option value="Grenada">Grenada</option>
                                        <option value="Guatemala">Guatemala</option>
                                        <option value="Guinea">Guinea</option>
                                        <option value="Guinea-Bissau">Guinea-Bissau</option>
                                        <option value="Guyana">Guyana</option>
                                        <option value="Haiti">Haiti</option>
                                        <option value="Honduras">Honduras</option>
                                        <option value="Hungary">Hungary</option>
                                        <option value="Iceland">Iceland</option>
                                        <option value="India">India</option>
                                        <option value="Indonesia">Indonesia</option>
                                        <option value="Iran">Iran</option>
                                        <option value="Iraq">Iraq</option>
                                        <option value="Ireland">Ireland</option>
                                        <option value="Israel">Israel</option>
                                        <option value="Italy">Italy</option>
                                        <option value="Jamaica">Jamaica</option>
                                        <option value="Japan">Japan</option>
                                        <option value="Jordan">Jordan</option>
                                        <option value="Kazakhstan">Kazakhstan</option>
                                        <option value="Kenya">Kenya</option>
                                        <option value="Kiribati">Kiribati</option>
                                        <option value="Korea, North">Korea, North</option>
                                        <option value="Korea, South">Korea, South</option>
                                        <option value="Kosovo">Kosovo</option>
                                        <option value="Kuwait">Kuwait</option>
                                        <option value="Kyrgyzstan">Kyrgyzstan</option>
                                        <option value="Laos">Laos</option>
                                        <option value="Latvia">Latvia</option>
                                        <option value="Lebanon">Lebanon</option>
                                        <option value="Lesotho">Lesotho</option>
                                        <option value="Liberia">Liberia</option>
                                        <option value="Libya">Libya</option>
                                        <option value="Liechtenstein">Liechtenstein</option>
                                        <option value="Lithuania">Lithuania</option>
                                        <option value="Luxembourg">Luxembourg</option>
                                        <option value="Madagascar">Madagascar</option>
                                        <option value="Malawi">Malawi</option>
                                        <option value="Malaysia">Malaysia</option>
                                        <option value="Maldives">Maldives</option>
                                        <option value="Mali">Mali</option>
                                        <option value="Malta">Malta</option>
                                        <option value="Marshall Islands">Marshall Islands</option>
                                        <option value="Mauritania">Mauritania</option>
                                        <option value="Mauritius">Mauritius</option>
                                        <option value="Mexico">Mexico</option>
                                        <option value="Micronesia">Micronesia</option>
                                        <option value="Moldova">Moldova</option>
                                        <option value="Monaco">Monaco</option>
                                        <option value="Mongolia">Mongolia</option>
                                        <option value="Montenegro">Montenegro</option>
                                        <option value="Morocco">Morocco</option>
                                        <option value="Mozambique">Mozambique</option>
                                        <option value="Myanmar">Myanmar</option>
                                        <option value="Namibia">Namibia</option>
                                        <option value="Nauru">Nauru</option>
                                        <option value="Nepal">Nepal</option>
                                        <option value="Netherlands">Netherlands</option>
                                        <option value="New Zealand">New Zealand</option>
                                        <option value="Nicaragua">Nicaragua</option>
                                        <option value="Niger">Niger</option>
                                        <option value="Nigeria">Nigeria</option>
                                        <option value="North Macedonia">North Macedonia</option>
                                        <option value="Norway">Norway</option>
                                        <option value="Oman">Oman</option>
                                        <option value="Pakistan">Pakistan</option>
                                        <option value="Palau">Palau</option>
                                        <option value="Panama">Panama</option>
                                        <option value="Papua New Guinea">Papua New Guinea</option>
                                        <option value="Paraguay">Paraguay</option>
                                        <option value="Peru">Peru</option>
                                        <option value="Philippines">Philippines</option>
                                        <option value="Poland">Poland</option>
                                        <option value="Portugal">Portugal</option>
                                        <option value="Qatar">Qatar</option>
                                        <option value="Romania">Romania</option>
                                        <option value="Russia">Russia</option>
                                        <option value="Rwanda">Rwanda</option>
                                        <option value="Saint Kitts and Nevis">
                                            Saint Kitts and Nevis
                                        </option>
                                        <option value="Saint Lucia">Saint Lucia</option>
                                        <option value="Saint Vincent and the Grenadines">
                                            Saint Vincent and the Grenadines
                                        </option>
                                        <option value="Samoa">Samoa</option>
                                        <option value="San Marino">San Marino</option>
                                        <option value="Sao Tome and Principe">
                                            Sao Tome and Principe
                                        </option>
                                        <option value="Saudi Arabia">Saudi Arabia</option>
                                        <option value="Senegal">Senegal</option>
                                        <option value="Serbia">Serbia</option>
                                        <option value="Seychelles">Seychelles</option>
                                        <option value="Sierra Leone">Sierra Leone</option>
                                        <option value="Singapore">Singapore</option>
                                        <option value="Slovakia">Slovakia</option>
                                        <option value="Slovenia">Slovenia</option>
                                        <option value="Solomon Islands">Solomon Islands</option>
                                        <option value="Somalia">Somalia</option>
                                        <option value="South Africa">South Africa</option>
                                        <option value="South Sudan">South Sudan</option>
                                        <option value="Spain">Spain</option>
                                        <option value="Sri Lanka">Sri Lanka</option>
                                        <option value="Sudan">Sudan</option>
                                        <option value="Suriname">Suriname</option>
                                        <option value="Sweden">Sweden</option>
                                        <option value="Switzerland">Switzerland</option>
                                        <option value="Syria">Syria</option>
                                        <option value="Taiwan">Taiwan</option>
                                        <option value="Tajikistan">Tajikistan</option>
                                        <option value="Tanzania">Tanzania</option>
                                        <option value="Thailand">Thailand</option>
                                        <option value="Timor-Leste">Timor-Leste</option>
                                        <option value="Togo">Togo</option>
                                        <option value="Tonga">Tonga</option>
                                        <option value="Trinidad and Tobago">
                                            Trinidad and Tobago
                                        </option>
                                        <option value="Tunisia">Tunisia</option>
                                        <option value="Turkey">Turkey</option>
                                        <option value="Turkmenistan">Turkmenistan</option>
                                        <option value="Tuvalu">Tuvalu</option>
                                        <option value="Uganda">Uganda</option>
                                        <option value="Ukraine">Ukraine</option>
                                        <option value="United Arab Emirates">
                                            United Arab Emirates
                                        </option>
                                        <option value="United Kingdom">United Kingdom</option>
                                        <option value="United States">United States</option>
                                        <option value="Uruguay">Uruguay</option>
                                        <option value="Uzbekistan">Uzbekistan</option>
                                        <option value="Vanuatu">Vanuatu</option>
                                        <option value="Vatican City">Vatican City</option>
                                        <option value="Venezuela">Venezuela</option>
                                        <option value="Vietnam">Vietnam</option>
                                        <option value="Yemen">Yemen</option>
                                        <option value="Zambia">Zambia</option>
                                        <option value="Zimbabwe">Zimbabwe</option>
                                    </select>
                                </div>
                                <div class="col-12">
                                    <label for="city" class="form-label filter-label">{{
                                        $t("City")
                                        }}</label>
                                    <select id="city" class="form-select form-control form-input filter-select"
                                        v-model="selectedCity" @change="applyFilterShop(selectedCountry, selectedCity)">
                                        <option selected value="">City</option>
                                        <option v-for="city in cities" :key="city" :value="city">
                                            {{ city }}
                                        </option>
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
                            <!-- Container for the Viewer.js to manage image viewing -->
                            <div class="imageBig" ref="viewerContainer" style="display: none">
                                <img :src="currentImage" alt="Current Image for Viewing" />
                                <img :src="image" v-for="(image, idx) in parsedImages(viewerImages)" :key="idx" />

                            </div>
                            <div class="" v-for="(car, index) in this.filteredStories
                                .CarModificationTunningShop" :key="index"
                                :class="isModalOpen && activeCarIndex === index ? 'z-2' : 'z-0'">
                                <div @click="openModal(index)"
                                    class="card-sorting-content px-3 px-md-1 py-2 col-md-12 p-1">
                                    <div class="main-slider weekly-slider align-items-center">
                                        <div class="swiper-container myCarListingCard-swiper-container">
                                            <!-- <swiper :effect="'cards'" :grabCursor="true" :modules="modules"


                                                :initialSlide="1" class="mySwiper swiper-no-shadow">
                                                <swiper-slide class="swiper-no-shadow"
                                                    v-for="(image, idx) in parsedImages(car.images)" :key="idx">
                                                    <div class="d-block">
                                                        <img :src="image
                                                            " class="slider-img myCarListingCard-img" alt="car" />
                                                    </div>
                                                </swiper-slide>
                                            </swiper> -->
                                            <swiper :effect="'cards'" :grabCursor="true" :modules="modules"
                                                :initialSlide="1" class="mySwiper swiper-no-shadow">

                                                <swiper-slide class="swiper-no-shadow" v-for="(image, idx) in (parsedImages(car.images).length > 1
                                                    ? [parsedImages(car.images)[1], parsedImages(car.images)[0], ...parsedImages(car.images).slice(2)]
                                                    : parsedImages(car.images))" :key="idx">

                                                    <div class="d-block">
                                                        <img :src="image" class="slider-img myCarListingCard-img"
                                                            alt="car" />
                                                    </div>

                                                </swiper-slide>

                                            </swiper>

                                            <span class="swiper-notification" aria-live="assertive"
                                                aria-atomic="true"></span>
                                        </div>
                                        <img :src="iconford" alt="" class="d-none" />
                                    </div>
                                    <div class="card-content-car">
                                        <h4 class="text-white mb-1 " @click="openModal(index)">
                                            {{ car.story_name }}
                                        </h4>
                                        <ul class="user-details-car myCarListingCard-user-details-car mb-1 mt-0">
                                            <li class="list-item-user mb-0 justify-content-start">
                                                <img :src="instaIcon" class="instaIcon" />
                                                <a :href="'https://www.instagram.com/' + car.social_media"
                                                    class="a-tag-name-user mt-2 mb-2" style="font-size: 14px"
                                                    target="_blank" rel="noopener noreferrer">
                                                    {{ car.social_media }}
                                                </a>
                                            </li>
                                        </ul>
                                        <p class="text-white mt-0 mb-0 w-75 text-wrap " style="font-size: 14px"
                                            v-if="car.story_history" @click="openModal(index)">
                                            <span class="text-orange"> Tell us your shop story & how it all
                                                started</span>
                                            <br />
                                            <span class="tranc">{{ car.story_history }}</span>

                                            <!-- Conditionally show "view more" if there are 10 or more words -->
                                            <!-- <span class="view-more-a-tag ms-2" style="cursor: pointer"
                                                v-if="car.story_history.split(' ').length >= 10"
                                                @click="openModal(index)">
                                                {{ $t("viewMore") }}
                                            </span> -->
                                        </p>
                                    </div>
                                    class="d-none"
                                </div>

                                <div class="modal show d-block" tabindex="-1" role="dialog"
                                    v-if="isModalOpen && activeCarIndex === index">
                                    <div class="modal-dialog modal-dialog-centered" role="document">
                                        <div class="modal-content">
                                            <div class="modal-body text-center">
                                                <span class="close-icon" @click="modalClose">
                                                    <i class="fas fa-times"></i>
                                                </span>

                                                <div class="mt-4 py-2">
                                                    <div class="myCarListingCard-swiper-container">
                                                        <!-- <swiper :effect="'cards'" :grabCursor="true" :modules="modules"
                                                            :initialSlide="1" :pagination="{ clickable: true }"
                                                            :navigation="{
                                                                nextEl: '.custom-next',
                                                                prevEl: '.custom-prev',
                                                            }" class="mySwiper swiper-no-shadow modalswipper">
                                                            <swiper-slide class="swiper-no-shadow modalswippersh"
                                                                v-for="(image, idx) in parsedImages(car.images)"
                                                                :key="idx">
                                                                <div class="d-block">
                                                                    <img :src="image
                                                                        "
                                                                        class="slider-img myCarListingCard-img modalswipperImage"
                                                                        alt="car"
                                                                        @click="openViewer(image, car.images)" />
                                                                </div>
                                                            </swiper-slide>
                                                        </swiper> -->
                                                        <swiper :effect="'cards'" :grabCursor="true" :modules="modules"
                                                            :initialSlide="1" :pagination="{ clickable: true }"
                                                            :navigation="{
                                                                nextEl: '.custom-next',
                                                                prevEl: '.custom-prev',
                                                            }" class="mySwiper swiper-no-shadow modalswipper">

                                                            <swiper-slide class="swiper-no-shadow modalswippersh" v-for="(image, idx) in (parsedImages(car.images).length > 1
                                                                ? [parsedImages(car.images)[1], parsedImages(car.images)[0], ...parsedImages(car.images).slice(2)]
                                                                : parsedImages(car.images))" :key="idx">

                                                                <div class="d-block">
                                                                    <img :src="image"
                                                                        class="slider-img myCarListingCard-img modalswipperImage"
                                                                        alt="car"
                                                                        @click="openViewer(image, car.images)" />
                                                                </div>

                                                            </swiper-slide>

                                                        </swiper>

                                                        <span class="swiper-notification" aria-live="assertive"
                                                            aria-atomic="true"></span>
                                                    </div>

                                                    <div class="custom-swiper-navigation gap-8 justify-content-center"
                                                        :class="isOverlayTransparent ? 'd-flex' : 'd-flex'">
                                                        <button class="custom-prev btn">
                                                            <img :src="prevIcon" alt="" />
                                                        </button>
                                                        <button class="custom-next btn">
                                                            <img :src="nextIcon" alt="" />
                                                        </button>
                                                    </div>
                                                    <div class="d-flex justify-content-end" v-if="isOverlayTransparent">
                                                        <!-- <button class="btn btn-danger " @click='toggleOverlayOpacity'><span class="" >
                                                                <i class="fa-solid fa-xmark"></i>
                                                </span></button> -->
                                                    </div>
                                                    <div class="overlay mt-5" :class="{ '': isOverlayTransparent }"
                                                        @click="toggleOverlayOpacity">
                                                        <div
                                                            class="mt-2 d-flex justify-content-between align-items-center mb-2">
                                                            <div class="d-flex align-items-center gap-2">
                                                                <img :src="iconford" class="d-none" alt="" />
                                                                <h3 class="m-0 text-white fontsiz">
                                                                    {{ car.story_name }}
                                                                </h3>
                                                            </div>
                                                        </div>
                                                        <div class="d-flex align-items-center text-white mt-2">
                                                            <img :src="instaIcon" class="instaIcon" />
                                                            <a :href="'https://www.instagram.com/' + car.social_media"
                                                                class="a-tag-name-user mt-2 mb-2"
                                                                style="font-size: 14px" target="_blank"
                                                                rel="noopener noreferrer">
                                                                @{{ car.social_media }}
                                                            </a>
                                                        </div>

                                                        <p class="text-orange"
                                                            style="font-size: 14px; text-align: start">Tell us the
                                                            wildest or most unforgettable moment you’ve had with your
                                                            car</p>
                                                        <p class="text-white"
                                                            style="font-size: 14px; text-align: start">
                                                            {{ car.adventure_story }}
                                                        </p>
                                                        <p class="text-orange"
                                                            style="font-size: 14px; text-align: start">Tell us your shop
                                                            story & how it all started</p>
                                                        <p class="text-white"
                                                            style="font-size: 14px; text-align: start">
                                                            {{ car.story_history }}
                                                        </p>
                                                    </div>
                                                    <!-- <p class="view-more-a-tag ms-2" style="cursor: pointer" @click="showMore[index] = !showMore[index]">
                  {{ showMore[index] ? $t("showLess") : $t("viewMore") }}
                </p> -->
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <!-- Modal -->
                        </div>

                        <!-- end template -->
                    </div>
                </div>
            </div>
            <div v-else-if="activeTab === 3" :class="isModalOpenFe ? 'z-0 position-relative ' : ''">
                <!-- Add content here -->

                <div class="row">
                    <div class="col-md-12 mb-2">
                        <input type="text" class="form-control formSearch mb-2" placeholder="search" v-model="search"
                            @input="applyFilterCarClubSearch" />
                    </div>
                    <div class="col-md-3">
                        <div class="list-item-btn position-relative submit-btn-div mx-0 mt-0 mb-2 d-none d-md-none">
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
                            <button type="submit" class="signin-btnli btn-filter " id="submit-button"
                                data-bs-toggle="collapse" data-bs-target="#collapseExample4" aria-expanded="false"
                                aria-controls="collapseExample4">
                                {{ $t('Filters') }}
                            </button>
                            <span class="border-bottom-btn border-left-btn position-absolute">
                                <img src="@/assets/images/Group11.png" class="img-border position-absolute" alt="" />
                            </span>
                            <span class="border-bottom-btn position-absolute">
                                <img src="@/assets/images/Path473.png" class="img-border position-absolute" alt="" />
                            </span>
                        </div>

                        <div class="collapse d-none d-md-none" id="collapseExample4">
                            <div class="">
                                <div class="filter-box ">
                                    <h4 class="filter-title">{{ $t("filters") }}</h4>
                                    <div class="row">
                                        <div class="col-12">
                                            <label for="country" class="form-label filter-label">{{
                                                $t("Country")
                                            }}</label>
                                            <select v-model="selectedCountry" id="country"
                                                class="form-select form-control form-input filter-select"
                                                @change="applyFilterClub(selectedCountry, selectedCity)">
                                                <option selected value="">Country</option>
                                                <option value="Afghanistan">Afghanistan</option>
                                                <option value="Albania">Albania</option>
                                                <option value="Algeria">Algeria</option>
                                                <option value="Andorra">Andorra</option>
                                                <option value="Angola">Angola</option>
                                                <option value="Antigua and Barbuda">
                                                    Antigua and Barbuda
                                                </option>
                                                <option value="Argentina">Argentina</option>
                                                <option value="Armenia">Armenia</option>
                                                <option value="Australia">Australia</option>
                                                <option value="Austria">Austria</option>
                                                <option value="Azerbaijan">Azerbaijan</option>
                                                <option value="Bahamas">Bahamas</option>
                                                <option value="Bahrain">Bahrain</option>
                                                <option value="Bangladesh">Bangladesh</option>
                                                <option value="Barbados">Barbados</option>
                                                <option value="Belarus">Belarus</option>
                                                <option value="Belgium">Belgium</option>
                                                <option value="Belize">Belize</option>
                                                <option value="Benin">Benin</option>
                                                <option value="Bhutan">Bhutan</option>
                                                <option value="Bolivia">Bolivia</option>
                                                <option value="Bosnia and Herzegovina">
                                                    Bosnia and Herzegovina
                                                </option>
                                                <option value="Botswana">Botswana</option>
                                                <option value="Brazil">Brazil</option>
                                                <option value="Brunei">Brunei</option>
                                                <option value="Bulgaria">Bulgaria</option>
                                                <option value="Burkina Faso">Burkina Faso</option>
                                                <option value="Burundi">Burundi</option>
                                                <option value="Cabo Verde">Cabo Verde</option>
                                                <option value="Cambodia">Cambodia</option>
                                                <option value="Cameroon">Cameroon</option>
                                                <option value="Canada">Canada</option>
                                                <option value="Central African Republic">
                                                    Central African Republic
                                                </option>
                                                <option value="Chad">Chad</option>
                                                <option value="Chile">Chile</option>
                                                <option value="China">China</option>
                                                <option value="Colombia">Colombia</option>
                                                <option value="Comoros">Comoros</option>
                                                <option value="Congo">Congo</option>
                                                <option value="Costa Rica">Costa Rica</option>
                                                <option value="Croatia">Croatia</option>
                                                <option value="Cuba">Cuba</option>
                                                <option value="Cyprus">Cyprus</option>
                                                <option value="Czech Republic">Czech Republic</option>
                                                <option value="Denmark">Denmark</option>
                                                <option value="Djibouti">Djibouti</option>
                                                <option value="Dominica">Dominica</option>
                                                <option value="Dominican Republic">
                                                    Dominican Republic
                                                </option>
                                                <option value="Ecuador">Ecuador</option>
                                                <option value="Egypt">Egypt</option>
                                                <option value="El Salvador">El Salvador</option>
                                                <option value="Equatorial Guinea">Equatorial Guinea</option>
                                                <option value="Eritrea">Eritrea</option>
                                                <option value="Estonia">Estonia</option>
                                                <option value="Eswatini">Eswatini</option>
                                                <option value="Ethiopia">Ethiopia</option>
                                                <option value="Fiji">Fiji</option>
                                                <option value="Finland">Finland</option>
                                                <option value="France">France</option>
                                                <option value="Gabon">Gabon</option>
                                                <option value="Gambia">Gambia</option>
                                                <option value="Georgia">Georgia</option>
                                                <option value="Germany">Germany</option>
                                                <option value="Ghana">Ghana</option>
                                                <option value="Greece">Greece</option>
                                                <option value="Grenada">Grenada</option>
                                                <option value="Guatemala">Guatemala</option>
                                                <option value="Guinea">Guinea</option>
                                                <option value="Guinea-Bissau">Guinea-Bissau</option>
                                                <option value="Guyana">Guyana</option>
                                                <option value="Haiti">Haiti</option>
                                                <option value="Honduras">Honduras</option>
                                                <option value="Hungary">Hungary</option>
                                                <option value="Iceland">Iceland</option>
                                                <option value="India">India</option>
                                                <option value="Indonesia">Indonesia</option>
                                                <option value="Iran">Iran</option>
                                                <option value="Iraq">Iraq</option>
                                                <option value="Ireland">Ireland</option>
                                                <option value="Israel">Israel</option>
                                                <option value="Italy">Italy</option>
                                                <option value="Jamaica">Jamaica</option>
                                                <option value="Japan">Japan</option>
                                                <option value="Jordan">Jordan</option>
                                                <option value="Kazakhstan">Kazakhstan</option>
                                                <option value="Kenya">Kenya</option>
                                                <option value="Kiribati">Kiribati</option>
                                                <option value="Korea, North">Korea, North</option>
                                                <option value="Korea, South">Korea, South</option>
                                                <option value="Kosovo">Kosovo</option>
                                                <option value="Kuwait">Kuwait</option>
                                                <option value="Kyrgyzstan">Kyrgyzstan</option>
                                                <option value="Laos">Laos</option>
                                                <option value="Latvia">Latvia</option>
                                                <option value="Lebanon">Lebanon</option>
                                                <option value="Lesotho">Lesotho</option>
                                                <option value="Liberia">Liberia</option>
                                                <option value="Libya">Libya</option>
                                                <option value="Liechtenstein">Liechtenstein</option>
                                                <option value="Lithuania">Lithuania</option>
                                                <option value="Luxembourg">Luxembourg</option>
                                                <option value="Madagascar">Madagascar</option>
                                                <option value="Malawi">Malawi</option>
                                                <option value="Malaysia">Malaysia</option>
                                                <option value="Maldives">Maldives</option>
                                                <option value="Mali">Mali</option>
                                                <option value="Malta">Malta</option>
                                                <option value="Marshall Islands">Marshall Islands</option>
                                                <option value="Mauritania">Mauritania</option>
                                                <option value="Mauritius">Mauritius</option>
                                                <option value="Mexico">Mexico</option>
                                                <option value="Micronesia">Micronesia</option>
                                                <option value="Moldova">Moldova</option>
                                                <option value="Monaco">Monaco</option>
                                                <option value="Mongolia">Mongolia</option>
                                                <option value="Montenegro">Montenegro</option>
                                                <option value="Morocco">Morocco</option>
                                                <option value="Mozambique">Mozambique</option>
                                                <option value="Myanmar">Myanmar</option>
                                                <option value="Namibia">Namibia</option>
                                                <option value="Nauru">Nauru</option>
                                                <option value="Nepal">Nepal</option>
                                                <option value="Netherlands">Netherlands</option>
                                                <option value="New Zealand">New Zealand</option>
                                                <option value="Nicaragua">Nicaragua</option>
                                                <option value="Niger">Niger</option>
                                                <option value="Nigeria">Nigeria</option>
                                                <option value="North Macedonia">North Macedonia</option>
                                                <option value="Norway">Norway</option>
                                                <option value="Oman">Oman</option>
                                                <option value="Pakistan">Pakistan</option>
                                                <option value="Palau">Palau</option>
                                                <option value="Panama">Panama</option>
                                                <option value="Papua New Guinea">Papua New Guinea</option>
                                                <option value="Paraguay">Paraguay</option>
                                                <option value="Peru">Peru</option>
                                                <option value="Philippines">Philippines</option>
                                                <option value="Poland">Poland</option>
                                                <option value="Portugal">Portugal</option>
                                                <option value="Qatar">Qatar</option>
                                                <option value="Romania">Romania</option>
                                                <option value="Russia">Russia</option>
                                                <option value="Rwanda">Rwanda</option>
                                                <option value="Saint Kitts and Nevis">
                                                    Saint Kitts and Nevis
                                                </option>
                                                <option value="Saint Lucia">Saint Lucia</option>
                                                <option value="Saint Vincent and the Grenadines">
                                                    Saint Vincent and the Grenadines
                                                </option>
                                                <option value="Samoa">Samoa</option>
                                                <option value="San Marino">San Marino</option>
                                                <option value="Sao Tome and Principe">
                                                    Sao Tome and Principe
                                                </option>
                                                <option value="Saudi Arabia">Saudi Arabia</option>
                                                <option value="Senegal">Senegal</option>
                                                <option value="Serbia">Serbia</option>
                                                <option value="Seychelles">Seychelles</option>
                                                <option value="Sierra Leone">Sierra Leone</option>
                                                <option value="Singapore">Singapore</option>
                                                <option value="Slovakia">Slovakia</option>
                                                <option value="Slovenia">Slovenia</option>
                                                <option value="Solomon Islands">Solomon Islands</option>
                                                <option value="Somalia">Somalia</option>
                                                <option value="South Africa">South Africa</option>
                                                <option value="South Sudan">South Sudan</option>
                                                <option value="Spain">Spain</option>
                                                <option value="Sri Lanka">Sri Lanka</option>
                                                <option value="Sudan">Sudan</option>
                                                <option value="Suriname">Suriname</option>
                                                <option value="Sweden">Sweden</option>
                                                <option value="Switzerland">Switzerland</option>
                                                <option value="Syria">Syria</option>
                                                <option value="Taiwan">Taiwan</option>
                                                <option value="Tajikistan">Tajikistan</option>
                                                <option value="Tanzania">Tanzania</option>
                                                <option value="Thailand">Thailand</option>
                                                <option value="Timor-Leste">Timor-Leste</option>
                                                <option value="Togo">Togo</option>
                                                <option value="Tonga">Tonga</option>
                                                <option value="Trinidad and Tobago">
                                                    Trinidad and Tobago
                                                </option>
                                                <option value="Tunisia">Tunisia</option>
                                                <option value="Turkey">Turkey</option>
                                                <option value="Turkmenistan">Turkmenistan</option>
                                                <option value="Tuvalu">Tuvalu</option>
                                                <option value="Uganda">Uganda</option>
                                                <option value="Ukraine">Ukraine</option>
                                                <option value="United Arab Emirates">
                                                    United Arab Emirates
                                                </option>
                                                <option value="United Kingdom">United Kingdom</option>
                                                <option value="United States">United States</option>
                                                <option value="Uruguay">Uruguay</option>
                                                <option value="Uzbekistan">Uzbekistan</option>
                                                <option value="Vanuatu">Vanuatu</option>
                                                <option value="Vatican City">Vatican City</option>
                                                <option value="Venezuela">Venezuela</option>
                                                <option value="Vietnam">Vietnam</option>
                                                <option value="Yemen">Yemen</option>
                                                <option value="Zambia">Zambia</option>
                                                <option value="Zimbabwe">Zimbabwe</option>
                                            </select>
                                        </div>
                                        <div class="col-12">
                                            <label for="city" class="form-label filter-label">{{
                                                $t("City")
                                            }}</label>
                                            <select id="city" class="form-select form-control form-input filter-select"
                                                v-model="selectedCity"
                                                @change="applyFilterClub(selectedCountry, selectedCity)">
                                                <option selected value="">City</option>
                                                <option v-for="city in cities" :key="city" :value="city">
                                                    {{ city }}
                                                </option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="filter-box d-block d-md-block">
                            <h4 class="filter-title">{{ $t("filters") }}</h4>
                            <div class="row">
                                <div class="col-12">
                                    <label for="country" class="form-label filter-label">{{
                                        $t("Country")
                                        }}</label>
                                    <select v-model="selectedCountry" id="country"
                                        class="form-select form-control form-input filter-select"
                                        @change="applyFilterClub(selectedCountry, selectedCity)">
                                        <option selected value="">Country</option>
                                        <option value="Afghanistan">Afghanistan</option>
                                        <option value="Albania">Albania</option>
                                        <option value="Algeria">Algeria</option>
                                        <option value="Andorra">Andorra</option>
                                        <option value="Angola">Angola</option>
                                        <option value="Antigua and Barbuda">
                                            Antigua and Barbuda
                                        </option>
                                        <option value="Argentina">Argentina</option>
                                        <option value="Armenia">Armenia</option>
                                        <option value="Australia">Australia</option>
                                        <option value="Austria">Austria</option>
                                        <option value="Azerbaijan">Azerbaijan</option>
                                        <option value="Bahamas">Bahamas</option>
                                        <option value="Bahrain">Bahrain</option>
                                        <option value="Bangladesh">Bangladesh</option>
                                        <option value="Barbados">Barbados</option>
                                        <option value="Belarus">Belarus</option>
                                        <option value="Belgium">Belgium</option>
                                        <option value="Belize">Belize</option>
                                        <option value="Benin">Benin</option>
                                        <option value="Bhutan">Bhutan</option>
                                        <option value="Bolivia">Bolivia</option>
                                        <option value="Bosnia and Herzegovina">
                                            Bosnia and Herzegovina
                                        </option>
                                        <option value="Botswana">Botswana</option>
                                        <option value="Brazil">Brazil</option>
                                        <option value="Brunei">Brunei</option>
                                        <option value="Bulgaria">Bulgaria</option>
                                        <option value="Burkina Faso">Burkina Faso</option>
                                        <option value="Burundi">Burundi</option>
                                        <option value="Cabo Verde">Cabo Verde</option>
                                        <option value="Cambodia">Cambodia</option>
                                        <option value="Cameroon">Cameroon</option>
                                        <option value="Canada">Canada</option>
                                        <option value="Central African Republic">
                                            Central African Republic
                                        </option>
                                        <option value="Chad">Chad</option>
                                        <option value="Chile">Chile</option>
                                        <option value="China">China</option>
                                        <option value="Colombia">Colombia</option>
                                        <option value="Comoros">Comoros</option>
                                        <option value="Congo">Congo</option>
                                        <option value="Costa Rica">Costa Rica</option>
                                        <option value="Croatia">Croatia</option>
                                        <option value="Cuba">Cuba</option>
                                        <option value="Cyprus">Cyprus</option>
                                        <option value="Czech Republic">Czech Republic</option>
                                        <option value="Denmark">Denmark</option>
                                        <option value="Djibouti">Djibouti</option>
                                        <option value="Dominica">Dominica</option>
                                        <option value="Dominican Republic">
                                            Dominican Republic
                                        </option>
                                        <option value="Ecuador">Ecuador</option>
                                        <option value="Egypt">Egypt</option>
                                        <option value="El Salvador">El Salvador</option>
                                        <option value="Equatorial Guinea">Equatorial Guinea</option>
                                        <option value="Eritrea">Eritrea</option>
                                        <option value="Estonia">Estonia</option>
                                        <option value="Eswatini">Eswatini</option>
                                        <option value="Ethiopia">Ethiopia</option>
                                        <option value="Fiji">Fiji</option>
                                        <option value="Finland">Finland</option>
                                        <option value="France">France</option>
                                        <option value="Gabon">Gabon</option>
                                        <option value="Gambia">Gambia</option>
                                        <option value="Georgia">Georgia</option>
                                        <option value="Germany">Germany</option>
                                        <option value="Ghana">Ghana</option>
                                        <option value="Greece">Greece</option>
                                        <option value="Grenada">Grenada</option>
                                        <option value="Guatemala">Guatemala</option>
                                        <option value="Guinea">Guinea</option>
                                        <option value="Guinea-Bissau">Guinea-Bissau</option>
                                        <option value="Guyana">Guyana</option>
                                        <option value="Haiti">Haiti</option>
                                        <option value="Honduras">Honduras</option>
                                        <option value="Hungary">Hungary</option>
                                        <option value="Iceland">Iceland</option>
                                        <option value="India">India</option>
                                        <option value="Indonesia">Indonesia</option>
                                        <option value="Iran">Iran</option>
                                        <option value="Iraq">Iraq</option>
                                        <option value="Ireland">Ireland</option>
                                        <option value="Israel">Israel</option>
                                        <option value="Italy">Italy</option>
                                        <option value="Jamaica">Jamaica</option>
                                        <option value="Japan">Japan</option>
                                        <option value="Jordan">Jordan</option>
                                        <option value="Kazakhstan">Kazakhstan</option>
                                        <option value="Kenya">Kenya</option>
                                        <option value="Kiribati">Kiribati</option>
                                        <option value="Korea, North">Korea, North</option>
                                        <option value="Korea, South">Korea, South</option>
                                        <option value="Kosovo">Kosovo</option>
                                        <option value="Kuwait">Kuwait</option>
                                        <option value="Kyrgyzstan">Kyrgyzstan</option>
                                        <option value="Laos">Laos</option>
                                        <option value="Latvia">Latvia</option>
                                        <option value="Lebanon">Lebanon</option>
                                        <option value="Lesotho">Lesotho</option>
                                        <option value="Liberia">Liberia</option>
                                        <option value="Libya">Libya</option>
                                        <option value="Liechtenstein">Liechtenstein</option>
                                        <option value="Lithuania">Lithuania</option>
                                        <option value="Luxembourg">Luxembourg</option>
                                        <option value="Madagascar">Madagascar</option>
                                        <option value="Malawi">Malawi</option>
                                        <option value="Malaysia">Malaysia</option>
                                        <option value="Maldives">Maldives</option>
                                        <option value="Mali">Mali</option>
                                        <option value="Malta">Malta</option>
                                        <option value="Marshall Islands">Marshall Islands</option>
                                        <option value="Mauritania">Mauritania</option>
                                        <option value="Mauritius">Mauritius</option>
                                        <option value="Mexico">Mexico</option>
                                        <option value="Micronesia">Micronesia</option>
                                        <option value="Moldova">Moldova</option>
                                        <option value="Monaco">Monaco</option>
                                        <option value="Mongolia">Mongolia</option>
                                        <option value="Montenegro">Montenegro</option>
                                        <option value="Morocco">Morocco</option>
                                        <option value="Mozambique">Mozambique</option>
                                        <option value="Myanmar">Myanmar</option>
                                        <option value="Namibia">Namibia</option>
                                        <option value="Nauru">Nauru</option>
                                        <option value="Nepal">Nepal</option>
                                        <option value="Netherlands">Netherlands</option>
                                        <option value="New Zealand">New Zealand</option>
                                        <option value="Nicaragua">Nicaragua</option>
                                        <option value="Niger">Niger</option>
                                        <option value="Nigeria">Nigeria</option>
                                        <option value="North Macedonia">North Macedonia</option>
                                        <option value="Norway">Norway</option>
                                        <option value="Oman">Oman</option>
                                        <option value="Pakistan">Pakistan</option>
                                        <option value="Palau">Palau</option>
                                        <option value="Panama">Panama</option>
                                        <option value="Papua New Guinea">Papua New Guinea</option>
                                        <option value="Paraguay">Paraguay</option>
                                        <option value="Peru">Peru</option>
                                        <option value="Philippines">Philippines</option>
                                        <option value="Poland">Poland</option>
                                        <option value="Portugal">Portugal</option>
                                        <option value="Qatar">Qatar</option>
                                        <option value="Romania">Romania</option>
                                        <option value="Russia">Russia</option>
                                        <option value="Rwanda">Rwanda</option>
                                        <option value="Saint Kitts and Nevis">
                                            Saint Kitts and Nevis
                                        </option>
                                        <option value="Saint Lucia">Saint Lucia</option>
                                        <option value="Saint Vincent and the Grenadines">
                                            Saint Vincent and the Grenadines
                                        </option>
                                        <option value="Samoa">Samoa</option>
                                        <option value="San Marino">San Marino</option>
                                        <option value="Sao Tome and Principe">
                                            Sao Tome and Principe
                                        </option>
                                        <option value="Saudi Arabia">Saudi Arabia</option>
                                        <option value="Senegal">Senegal</option>
                                        <option value="Serbia">Serbia</option>
                                        <option value="Seychelles">Seychelles</option>
                                        <option value="Sierra Leone">Sierra Leone</option>
                                        <option value="Singapore">Singapore</option>
                                        <option value="Slovakia">Slovakia</option>
                                        <option value="Slovenia">Slovenia</option>
                                        <option value="Solomon Islands">Solomon Islands</option>
                                        <option value="Somalia">Somalia</option>
                                        <option value="South Africa">South Africa</option>
                                        <option value="South Sudan">South Sudan</option>
                                        <option value="Spain">Spain</option>
                                        <option value="Sri Lanka">Sri Lanka</option>
                                        <option value="Sudan">Sudan</option>
                                        <option value="Suriname">Suriname</option>
                                        <option value="Sweden">Sweden</option>
                                        <option value="Switzerland">Switzerland</option>
                                        <option value="Syria">Syria</option>
                                        <option value="Taiwan">Taiwan</option>
                                        <option value="Tajikistan">Tajikistan</option>
                                        <option value="Tanzania">Tanzania</option>
                                        <option value="Thailand">Thailand</option>
                                        <option value="Timor-Leste">Timor-Leste</option>
                                        <option value="Togo">Togo</option>
                                        <option value="Tonga">Tonga</option>
                                        <option value="Trinidad and Tobago">
                                            Trinidad and Tobago
                                        </option>
                                        <option value="Tunisia">Tunisia</option>
                                        <option value="Turkey">Turkey</option>
                                        <option value="Turkmenistan">Turkmenistan</option>
                                        <option value="Tuvalu">Tuvalu</option>
                                        <option value="Uganda">Uganda</option>
                                        <option value="Ukraine">Ukraine</option>
                                        <option value="United Arab Emirates">
                                            United Arab Emirates
                                        </option>
                                        <option value="United Kingdom">United Kingdom</option>
                                        <option value="United States">United States</option>
                                        <option value="Uruguay">Uruguay</option>
                                        <option value="Uzbekistan">Uzbekistan</option>
                                        <option value="Vanuatu">Vanuatu</option>
                                        <option value="Vatican City">Vatican City</option>
                                        <option value="Venezuela">Venezuela</option>
                                        <option value="Vietnam">Vietnam</option>
                                        <option value="Yemen">Yemen</option>
                                        <option value="Zambia">Zambia</option>
                                        <option value="Zimbabwe">Zimbabwe</option>
                                    </select>
                                </div>
                                <div class="col-12">
                                    <label for="city" class="form-label filter-label">{{
                                        $t("City")
                                        }}</label>
                                    <select id="city" class="form-select form-control form-input filter-select"
                                        v-model="selectedCity" @change="applyFilterClub(selectedCountry, selectedCity)">
                                        <option selected value="">City</option>
                                        <option v-for="city in cities" :key="city" :value="city">
                                            {{ city }}
                                        </option>
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
                            <!-- Container for the Viewer.js to manage image viewing -->
                            <div class="imageBig" ref="viewerContainer" style="display: none">
                                <img :src="currentImage" alt="Current Image for Viewing" />
                                <img :src="image" v-for="(image, idx) in parsedImages(viewerImages)" :key="idx" />

                            </div>
                            <div class="" v-for="(car, index) in this.filteredStories.CarClub" :key="index"
                                :class="isModalOpen && activeCarIndex === index ? 'z-2' : 'z-0'">
                                <div @click="openModal(index)"
                                    class="card-sorting-content px-3 px-md-1 py-2 col-md-12 p-1">
                                    <div class="main-slider weekly-slider align-items-center">
                                        <div class="swiper-container myCarListingCard-swiper-container">
                                            <!-- <swiper :effect="'cards'" :grabCursor="true" :modules="modules"
                                                :initialSlide="1" class="mySwiper swiper-no-shadow">
                                                <swiper-slide class="swiper-no-shadow"
                                                    v-for="(image, idx) in parsedImages(car.images)" :key="idx">
                                                    <div class="d-block">
                                                        <img :src="image
                                                            " class="slider-img myCarListingCard-img" alt="car" />
                                                    </div>
                                                </swiper-slide>
                                            </swiper> -->
                                            <swiper :effect="'cards'" :grabCursor="true" :modules="modules"
                                                :initialSlide="1" class="mySwiper swiper-no-shadow">

                                                <swiper-slide class="swiper-no-shadow" v-for="(image, idx) in (parsedImages(car.images).length > 1
                                                    ? [parsedImages(car.images)[1], parsedImages(car.images)[0], ...parsedImages(car.images).slice(2)]
                                                    : parsedImages(car.images))" :key="idx">

                                                    <div class="d-block">
                                                        <img :src="image" class="slider-img myCarListingCard-img"
                                                            alt="car" />
                                                    </div>

                                                </swiper-slide>

                                            </swiper>

                                            <span class="swiper-notification" aria-live="assertive"
                                                aria-atomic="true"></span>
                                        </div>
                                        <img :src="iconford" alt="" class="d-none" />
                                    </div>
                                    <div class="card-content-car">
                                        <h4 class="text-white mb-1 " @click="openModal(index)">
                                            {{ car.story_name }}
                                        </h4>
                                        <ul class="user-details-car myCarListingCard-user-details-car mb-1 mt-0">
                                            <li class="list-item-user mb-0 justify-content-start">
                                                <img :src="instaIcon" class="instaIcon" />
                                                <a :href="'https://www.instagram.com/' + car.social_media"
                                                    class="a-tag-name-user mt-2 mb-2" style="font-size: 14px"
                                                    target="_blank" rel="noopener noreferrer">
                                                    {{ car.social_media }}
                                                </a>
                                            </li>
                                        </ul>
                                        <p class="text-white mt-0 mb-0 w-75 text-wrap " style="font-size: 14px"
                                            v-if="car.story_history" @click="openModal(index)">
                                            <span class="text-orange"> Tell us your club story & how it all
                                                started</span>
                                            <br />
                                            <span class="tranc">{{ car.story_history }}</span>

                                            <!-- Conditionally show "view more" if there are 10 or more words -->
                                            <!-- <span class="view-more-a-tag ms-2" style="cursor: pointer"
                                                v-if="car.story_history.split(' ').length >= 10"
                                                @click="openModal(index)">
                                                {{ $t("viewMore") }}
                                            </span> -->
                                        </p>
                                    </div>
                                    class="d-none"
                                </div>

                                <div class="modal show d-block" tabindex="-1" role="dialog"
                                    v-if="isModalOpen && activeCarIndex === index">
                                    <div class="modal-dialog modal-dialog-centered" role="document">
                                        <div class="modal-content">
                                            <div class="modal-body text-center">
                                                <span class="close-icon" @click="modalClose">
                                                    <i class="fas fa-times"></i>
                                                </span>

                                                <div class="mt-4 py-2">
                                                    <div class="myCarListingCard-swiper-container">
                                                        <!-- <swiper :effect="'cards'" :grabCursor="true" :modules="modules"
                                                            :initialSlide="1" :pagination="{ clickable: true }"
                                                            :navigation="{
                                                                nextEl: '.custom-next',
                                                                prevEl: '.custom-prev',
                                                            }" class="mySwiper swiper-no-shadow modalswipper">
                                                            <swiper-slide class="swiper-no-shadow modalswippersh"
                                                                v-for="(image, idx) in parsedImages(car.images)"
                                                                :key="idx">
                                                                <div class="d-block">
                                                                    <img :src="image
                                                                        "
                                                                        class="slider-img myCarListingCard-img modalswipperImage"
                                                                        alt="car"
                                                                        @click="openViewer(image, car.images)" />
                                                                </div>
                                                            </swiper-slide>
                                                        </swiper> -->
                                                        <swiper :effect="'cards'" :grabCursor="true" :modules="modules"
                                                            :initialSlide="1" class="mySwiper swiper-no-shadow">

                                                            <swiper-slide class="swiper-no-shadow" v-for="(image, idx) in (parsedImages(car.images).length > 1
                                                                ? [parsedImages(car.images)[1], parsedImages(car.images)[0], ...parsedImages(car.images).slice(2)]
                                                                : parsedImages(car.images))" :key="idx">

                                                                <div class="d-block">
                                                                    <img :src="image"
                                                                        class="slider-img myCarListingCard-img"
                                                                        alt="car" />
                                                                </div>

                                                            </swiper-slide>

                                                        </swiper>

                                                        <span class="swiper-notification" aria-live="assertive"
                                                            aria-atomic="true"></span>
                                                    </div>
                                                    <div class="custom-swiper-navigation gap-8 justify-content-center"
                                                        :class="isOverlayTransparent ? 'd-flex' : 'd-flex'">
                                                        <button class="custom-prev btn">
                                                            <img :src="prevIcon" alt="" />
                                                        </button>
                                                        <button class="custom-next btn">
                                                            <img :src="nextIcon" alt="" />
                                                        </button>
                                                    </div>
                                                    <div class="d-flex justify-content-end" v-if="isOverlayTransparent">
                                                        <!-- <button class="btn btn-danger " @click='toggleOverlayOpacity'><span class="" >
                                                                <i class="fa-solid fa-xmark"></i>
                                                </span></button> -->
                                                    </div>
                                                    <div class="overlay mt-5" :class="{ '': isOverlayTransparent }"
                                                        @click="toggleOverlayOpacity">
                                                        <div
                                                            class="mt-2 d-flex justify-content-between align-items-center mb-2">
                                                            <div class="d-flex align-items-center gap-2">
                                                                <img :src="iconford" class="d-none" alt="" />
                                                                <h3 class="m-0 text-white fontsiz">
                                                                    {{ car.story_name }}
                                                                </h3>
                                                            </div>
                                                        </div>
                                                        <div class="d-flex align-items-center text-white mt-2">
                                                            <img :src="instaIcon" class="instaIcon" />
                                                            <a :href="'https://www.instagram.com/' + car.social_media"
                                                                class="a-tag-name-user mt-2 mb-2"
                                                                style="font-size: 14px" target="_blank"
                                                                rel="noopener noreferrer">
                                                                @{{ car.social_media }}
                                                            </a>
                                                        </div>

                                                        <p class="text-orange"
                                                            style="font-size: 14px; text-align: start">Tell us the
                                                            wildest or most unforgettable moment you’ve had with your
                                                            car</p>
                                                        <p class="text-white"
                                                            style="font-size: 14px; text-align: start">
                                                            {{ car.adventure_story }}
                                                        </p>
                                                        <p class="text-orange"
                                                            style="font-size: 14px; text-align: start">Tell us your club
                                                            story & how it all started</p>
                                                        <p class="text-white"
                                                            style="font-size: 14px; text-align: start">
                                                            {{ car.story_history }}
                                                        </p>

                                                    </div>
                                                    <!-- <p class="view-more-a-tag ms-2" style="cursor: pointer" @click="showMore[index] = !showMore[index]">
                  {{ showMore[index] ? $t("showLess") : $t("viewMore") }}
                </p> -->
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <!-- Modal -->
                        </div>

                        <!-- end template -->
                    </div>
                </div>
            </div>
            <div v-else-if="activeTab === 4" :class="isModalOpenFe ? 'z-0 position-relative ' : ''">
                <!-- Add content here Motorbike Enthusiast Content -->
                <div class="row">
                    <div class="col-md-12 mb-2">
                        <input type="text" class="form-control formSearch mb-2" placeholder="search" v-model="search"
                            @input="applyFilterMotorbikeEnthusiastSearch" />
                    </div>
                    <div class="col-md-3">
                        <div class="list-item-btn position-relative submit-btn-div mx-0 mt-0 mb-2 d-none d-md-none">
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
                            <button type="submit" class="signin-btnli btn-filter " id="submit-button"
                                data-bs-toggle="collapse" data-bs-target="#collapseExample5" aria-expanded="false"
                                aria-controls="collapseExample5">
                                {{ $t('Filters') }}
                            </button>
                            <span class="border-bottom-btn border-left-btn position-absolute">
                                <img src="@/assets/images/Group11.png" class="img-border position-absolute" alt="" />
                            </span>
                            <span class="border-bottom-btn position-absolute">
                                <img src="@/assets/images/Path473.png" class="img-border position-absolute" alt="" />
                            </span>
                        </div>

                        <div class="collapse d-none d-md-none" id="collapseExample5">
                            <div class="">
                                <div class="filter-box ">
                                    <h4 class="filter-title">{{ $t("filters") }}</h4>
                                    <div class="row">
                                        <div class="col-12">
                                            <label for="country" class="form-label filter-label">{{
                                                $t("Country")
                                                }}</label>
                                            <select v-model="selectedCountry" id="country"
                                                class="form-select form-control form-input filter-select"
                                                @change="applyFilterBike(selectedCountry, selectedCity)">
                                                <option selected value="">Country</option>
                                                <option value="Afghanistan">Afghanistan</option>
                                                <option value="Albania">Albania</option>
                                                <option value="Algeria">Algeria</option>
                                                <option value="Andorra">Andorra</option>
                                                <option value="Angola">Angola</option>
                                                <option value="Antigua and Barbuda">
                                                    Antigua and Barbuda
                                                </option>
                                                <option value="Argentina">Argentina</option>
                                                <option value="Armenia">Armenia</option>
                                                <option value="Australia">Australia</option>
                                                <option value="Austria">Austria</option>
                                                <option value="Azerbaijan">Azerbaijan</option>
                                                <option value="Bahamas">Bahamas</option>
                                                <option value="Bahrain">Bahrain</option>
                                                <option value="Bangladesh">Bangladesh</option>
                                                <option value="Barbados">Barbados</option>
                                                <option value="Belarus">Belarus</option>
                                                <option value="Belgium">Belgium</option>
                                                <option value="Belize">Belize</option>
                                                <option value="Benin">Benin</option>
                                                <option value="Bhutan">Bhutan</option>
                                                <option value="Bolivia">Bolivia</option>
                                                <option value="Bosnia and Herzegovina">
                                                    Bosnia and Herzegovina
                                                </option>
                                                <option value="Botswana">Botswana</option>
                                                <option value="Brazil">Brazil</option>
                                                <option value="Brunei">Brunei</option>
                                                <option value="Bulgaria">Bulgaria</option>
                                                <option value="Burkina Faso">Burkina Faso</option>
                                                <option value="Burundi">Burundi</option>
                                                <option value="Cabo Verde">Cabo Verde</option>
                                                <option value="Cambodia">Cambodia</option>
                                                <option value="Cameroon">Cameroon</option>
                                                <option value="Canada">Canada</option>
                                                <option value="Central African Republic">
                                                    Central African Republic
                                                </option>
                                                <option value="Chad">Chad</option>
                                                <option value="Chile">Chile</option>
                                                <option value="China">China</option>
                                                <option value="Colombia">Colombia</option>
                                                <option value="Comoros">Comoros</option>
                                                <option value="Congo">Congo</option>
                                                <option value="Costa Rica">Costa Rica</option>
                                                <option value="Croatia">Croatia</option>
                                                <option value="Cuba">Cuba</option>
                                                <option value="Cyprus">Cyprus</option>
                                                <option value="Czech Republic">Czech Republic</option>
                                                <option value="Denmark">Denmark</option>
                                                <option value="Djibouti">Djibouti</option>
                                                <option value="Dominica">Dominica</option>
                                                <option value="Dominican Republic">
                                                    Dominican Republic
                                                </option>
                                                <option value="Ecuador">Ecuador</option>
                                                <option value="Egypt">Egypt</option>
                                                <option value="El Salvador">El Salvador</option>
                                                <option value="Equatorial Guinea">Equatorial Guinea</option>
                                                <option value="Eritrea">Eritrea</option>
                                                <option value="Estonia">Estonia</option>
                                                <option value="Eswatini">Eswatini</option>
                                                <option value="Ethiopia">Ethiopia</option>
                                                <option value="Fiji">Fiji</option>
                                                <option value="Finland">Finland</option>
                                                <option value="France">France</option>
                                                <option value="Gabon">Gabon</option>
                                                <option value="Gambia">Gambia</option>
                                                <option value="Georgia">Georgia</option>
                                                <option value="Germany">Germany</option>
                                                <option value="Ghana">Ghana</option>
                                                <option value="Greece">Greece</option>
                                                <option value="Grenada">Grenada</option>
                                                <option value="Guatemala">Guatemala</option>
                                                <option value="Guinea">Guinea</option>
                                                <option value="Guinea-Bissau">Guinea-Bissau</option>
                                                <option value="Guyana">Guyana</option>
                                                <option value="Haiti">Haiti</option>
                                                <option value="Honduras">Honduras</option>
                                                <option value="Hungary">Hungary</option>
                                                <option value="Iceland">Iceland</option>
                                                <option value="India">India</option>
                                                <option value="Indonesia">Indonesia</option>
                                                <option value="Iran">Iran</option>
                                                <option value="Iraq">Iraq</option>
                                                <option value="Ireland">Ireland</option>
                                                <option value="Israel">Israel</option>
                                                <option value="Italy">Italy</option>
                                                <option value="Jamaica">Jamaica</option>
                                                <option value="Japan">Japan</option>
                                                <option value="Jordan">Jordan</option>
                                                <option value="Kazakhstan">Kazakhstan</option>
                                                <option value="Kenya">Kenya</option>
                                                <option value="Kiribati">Kiribati</option>
                                                <option value="Korea, North">Korea, North</option>
                                                <option value="Korea, South">Korea, South</option>
                                                <option value="Kosovo">Kosovo</option>
                                                <option value="Kuwait">Kuwait</option>
                                                <option value="Kyrgyzstan">Kyrgyzstan</option>
                                                <option value="Laos">Laos</option>
                                                <option value="Latvia">Latvia</option>
                                                <option value="Lebanon">Lebanon</option>
                                                <option value="Lesotho">Lesotho</option>
                                                <option value="Liberia">Liberia</option>
                                                <option value="Libya">Libya</option>
                                                <option value="Liechtenstein">Liechtenstein</option>
                                                <option value="Lithuania">Lithuania</option>
                                                <option value="Luxembourg">Luxembourg</option>
                                                <option value="Madagascar">Madagascar</option>
                                                <option value="Malawi">Malawi</option>
                                                <option value="Malaysia">Malaysia</option>
                                                <option value="Maldives">Maldives</option>
                                                <option value="Mali">Mali</option>
                                                <option value="Malta">Malta</option>
                                                <option value="Marshall Islands">Marshall Islands</option>
                                                <option value="Mauritania">Mauritania</option>
                                                <option value="Mauritius">Mauritius</option>
                                                <option value="Mexico">Mexico</option>
                                                <option value="Micronesia">Micronesia</option>
                                                <option value="Moldova">Moldova</option>
                                                <option value="Monaco">Monaco</option>
                                                <option value="Mongolia">Mongolia</option>
                                                <option value="Montenegro">Montenegro</option>
                                                <option value="Morocco">Morocco</option>
                                                <option value="Mozambique">Mozambique</option>
                                                <option value="Myanmar">Myanmar</option>
                                                <option value="Namibia">Namibia</option>
                                                <option value="Nauru">Nauru</option>
                                                <option value="Nepal">Nepal</option>
                                                <option value="Netherlands">Netherlands</option>
                                                <option value="New Zealand">New Zealand</option>
                                                <option value="Nicaragua">Nicaragua</option>
                                                <option value="Niger">Niger</option>
                                                <option value="Nigeria">Nigeria</option>
                                                <option value="North Macedonia">North Macedonia</option>
                                                <option value="Norway">Norway</option>
                                                <option value="Oman">Oman</option>
                                                <option value="Pakistan">Pakistan</option>
                                                <option value="Palau">Palau</option>
                                                <option value="Panama">Panama</option>
                                                <option value="Papua New Guinea">Papua New Guinea</option>
                                                <option value="Paraguay">Paraguay</option>
                                                <option value="Peru">Peru</option>
                                                <option value="Philippines">Philippines</option>
                                                <option value="Poland">Poland</option>
                                                <option value="Portugal">Portugal</option>
                                                <option value="Qatar">Qatar</option>
                                                <option value="Romania">Romania</option>
                                                <option value="Russia">Russia</option>
                                                <option value="Rwanda">Rwanda</option>
                                                <option value="Saint Kitts and Nevis">
                                                    Saint Kitts and Nevis
                                                </option>
                                                <option value="Saint Lucia">Saint Lucia</option>
                                                <option value="Saint Vincent and the Grenadines">
                                                    Saint Vincent and the Grenadines
                                                </option>
                                                <option value="Samoa">Samoa</option>
                                                <option value="San Marino">San Marino</option>
                                                <option value="Sao Tome and Principe">
                                                    Sao Tome and Principe
                                                </option>
                                                <option value="Saudi Arabia">Saudi Arabia</option>
                                                <option value="Senegal">Senegal</option>
                                                <option value="Serbia">Serbia</option>
                                                <option value="Seychelles">Seychelles</option>
                                                <option value="Sierra Leone">Sierra Leone</option>
                                                <option value="Singapore">Singapore</option>
                                                <option value="Slovakia">Slovakia</option>
                                                <option value="Slovenia">Slovenia</option>
                                                <option value="Solomon Islands">Solomon Islands</option>
                                                <option value="Somalia">Somalia</option>
                                                <option value="South Africa">South Africa</option>
                                                <option value="South Sudan">South Sudan</option>
                                                <option value="Spain">Spain</option>
                                                <option value="Sri Lanka">Sri Lanka</option>
                                                <option value="Sudan">Sudan</option>
                                                <option value="Suriname">Suriname</option>
                                                <option value="Sweden">Sweden</option>
                                                <option value="Switzerland">Switzerland</option>
                                                <option value="Syria">Syria</option>
                                                <option value="Taiwan">Taiwan</option>
                                                <option value="Tajikistan">Tajikistan</option>
                                                <option value="Tanzania">Tanzania</option>
                                                <option value="Thailand">Thailand</option>
                                                <option value="Timor-Leste">Timor-Leste</option>
                                                <option value="Togo">Togo</option>
                                                <option value="Tonga">Tonga</option>
                                                <option value="Trinidad and Tobago">
                                                    Trinidad and Tobago
                                                </option>
                                                <option value="Tunisia">Tunisia</option>
                                                <option value="Turkey">Turkey</option>
                                                <option value="Turkmenistan">Turkmenistan</option>
                                                <option value="Tuvalu">Tuvalu</option>
                                                <option value="Uganda">Uganda</option>
                                                <option value="Ukraine">Ukraine</option>
                                                <option value="United Arab Emirates">
                                                    United Arab Emirates
                                                </option>
                                                <option value="United Kingdom">United Kingdom</option>
                                                <option value="United States">United States</option>
                                                <option value="Uruguay">Uruguay</option>
                                                <option value="Uzbekistan">Uzbekistan</option>
                                                <option value="Vanuatu">Vanuatu</option>
                                                <option value="Vatican City">Vatican City</option>
                                                <option value="Venezuela">Venezuela</option>
                                                <option value="Vietnam">Vietnam</option>
                                                <option value="Yemen">Yemen</option>
                                                <option value="Zambia">Zambia</option>
                                                <option value="Zimbabwe">Zimbabwe</option>
                                            </select>
                                        </div>
                                        <div class="col-12">
                                            <label for="city" class="form-label filter-label">{{
                                                $t("City")
                                                }}</label>
                                            <select id="city" class="form-select form-control form-input filter-select"
                                                v-model="selectedCity"
                                                @change="applyFilterBike(selectedCountry, selectedCity)">
                                                <option selected value="">City</option>
                                                <option v-for="city in cities" :key="city" :value="city">
                                                    {{ city }}
                                                </option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="filter-box d-block d-md-block">
                            <h4 class="filter-title">{{ $t("filters") }}</h4>
                            <div class="row">
                                <div class="col-12">
                                    <label for="country" class="form-label filter-label">{{
                                        $t("Country")
                                        }}</label>
                                    <select v-model="selectedCountry" id="country"
                                        class="form-select form-control form-input filter-select"
                                        @change="applyFilterBike(selectedCountry, selectedCity)">
                                        <option selected value="">Country</option>
                                        <option value="Afghanistan">Afghanistan</option>
                                        <option value="Albania">Albania</option>
                                        <option value="Algeria">Algeria</option>
                                        <option value="Andorra">Andorra</option>
                                        <option value="Angola">Angola</option>
                                        <option value="Antigua and Barbuda">
                                            Antigua and Barbuda
                                        </option>
                                        <option value="Argentina">Argentina</option>
                                        <option value="Armenia">Armenia</option>
                                        <option value="Australia">Australia</option>
                                        <option value="Austria">Austria</option>
                                        <option value="Azerbaijan">Azerbaijan</option>
                                        <option value="Bahamas">Bahamas</option>
                                        <option value="Bahrain">Bahrain</option>
                                        <option value="Bangladesh">Bangladesh</option>
                                        <option value="Barbados">Barbados</option>
                                        <option value="Belarus">Belarus</option>
                                        <option value="Belgium">Belgium</option>
                                        <option value="Belize">Belize</option>
                                        <option value="Benin">Benin</option>
                                        <option value="Bhutan">Bhutan</option>
                                        <option value="Bolivia">Bolivia</option>
                                        <option value="Bosnia and Herzegovina">
                                            Bosnia and Herzegovina
                                        </option>
                                        <option value="Botswana">Botswana</option>
                                        <option value="Brazil">Brazil</option>
                                        <option value="Brunei">Brunei</option>
                                        <option value="Bulgaria">Bulgaria</option>
                                        <option value="Burkina Faso">Burkina Faso</option>
                                        <option value="Burundi">Burundi</option>
                                        <option value="Cabo Verde">Cabo Verde</option>
                                        <option value="Cambodia">Cambodia</option>
                                        <option value="Cameroon">Cameroon</option>
                                        <option value="Canada">Canada</option>
                                        <option value="Central African Republic">
                                            Central African Republic
                                        </option>
                                        <option value="Chad">Chad</option>
                                        <option value="Chile">Chile</option>
                                        <option value="China">China</option>
                                        <option value="Colombia">Colombia</option>
                                        <option value="Comoros">Comoros</option>
                                        <option value="Congo">Congo</option>
                                        <option value="Costa Rica">Costa Rica</option>
                                        <option value="Croatia">Croatia</option>
                                        <option value="Cuba">Cuba</option>
                                        <option value="Cyprus">Cyprus</option>
                                        <option value="Czech Republic">Czech Republic</option>
                                        <option value="Denmark">Denmark</option>
                                        <option value="Djibouti">Djibouti</option>
                                        <option value="Dominica">Dominica</option>
                                        <option value="Dominican Republic">
                                            Dominican Republic
                                        </option>
                                        <option value="Ecuador">Ecuador</option>
                                        <option value="Egypt">Egypt</option>
                                        <option value="El Salvador">El Salvador</option>
                                        <option value="Equatorial Guinea">Equatorial Guinea</option>
                                        <option value="Eritrea">Eritrea</option>
                                        <option value="Estonia">Estonia</option>
                                        <option value="Eswatini">Eswatini</option>
                                        <option value="Ethiopia">Ethiopia</option>
                                        <option value="Fiji">Fiji</option>
                                        <option value="Finland">Finland</option>
                                        <option value="France">France</option>
                                        <option value="Gabon">Gabon</option>
                                        <option value="Gambia">Gambia</option>
                                        <option value="Georgia">Georgia</option>
                                        <option value="Germany">Germany</option>
                                        <option value="Ghana">Ghana</option>
                                        <option value="Greece">Greece</option>
                                        <option value="Grenada">Grenada</option>
                                        <option value="Guatemala">Guatemala</option>
                                        <option value="Guinea">Guinea</option>
                                        <option value="Guinea-Bissau">Guinea-Bissau</option>
                                        <option value="Guyana">Guyana</option>
                                        <option value="Haiti">Haiti</option>
                                        <option value="Honduras">Honduras</option>
                                        <option value="Hungary">Hungary</option>
                                        <option value="Iceland">Iceland</option>
                                        <option value="India">India</option>
                                        <option value="Indonesia">Indonesia</option>
                                        <option value="Iran">Iran</option>
                                        <option value="Iraq">Iraq</option>
                                        <option value="Ireland">Ireland</option>
                                        <option value="Israel">Israel</option>
                                        <option value="Italy">Italy</option>
                                        <option value="Jamaica">Jamaica</option>
                                        <option value="Japan">Japan</option>
                                        <option value="Jordan">Jordan</option>
                                        <option value="Kazakhstan">Kazakhstan</option>
                                        <option value="Kenya">Kenya</option>
                                        <option value="Kiribati">Kiribati</option>
                                        <option value="Korea, North">Korea, North</option>
                                        <option value="Korea, South">Korea, South</option>
                                        <option value="Kosovo">Kosovo</option>
                                        <option value="Kuwait">Kuwait</option>
                                        <option value="Kyrgyzstan">Kyrgyzstan</option>
                                        <option value="Laos">Laos</option>
                                        <option value="Latvia">Latvia</option>
                                        <option value="Lebanon">Lebanon</option>
                                        <option value="Lesotho">Lesotho</option>
                                        <option value="Liberia">Liberia</option>
                                        <option value="Libya">Libya</option>
                                        <option value="Liechtenstein">Liechtenstein</option>
                                        <option value="Lithuania">Lithuania</option>
                                        <option value="Luxembourg">Luxembourg</option>
                                        <option value="Madagascar">Madagascar</option>
                                        <option value="Malawi">Malawi</option>
                                        <option value="Malaysia">Malaysia</option>
                                        <option value="Maldives">Maldives</option>
                                        <option value="Mali">Mali</option>
                                        <option value="Malta">Malta</option>
                                        <option value="Marshall Islands">Marshall Islands</option>
                                        <option value="Mauritania">Mauritania</option>
                                        <option value="Mauritius">Mauritius</option>
                                        <option value="Mexico">Mexico</option>
                                        <option value="Micronesia">Micronesia</option>
                                        <option value="Moldova">Moldova</option>
                                        <option value="Monaco">Monaco</option>
                                        <option value="Mongolia">Mongolia</option>
                                        <option value="Montenegro">Montenegro</option>
                                        <option value="Morocco">Morocco</option>
                                        <option value="Mozambique">Mozambique</option>
                                        <option value="Myanmar">Myanmar</option>
                                        <option value="Namibia">Namibia</option>
                                        <option value="Nauru">Nauru</option>
                                        <option value="Nepal">Nepal</option>
                                        <option value="Netherlands">Netherlands</option>
                                        <option value="New Zealand">New Zealand</option>
                                        <option value="Nicaragua">Nicaragua</option>
                                        <option value="Niger">Niger</option>
                                        <option value="Nigeria">Nigeria</option>
                                        <option value="North Macedonia">North Macedonia</option>
                                        <option value="Norway">Norway</option>
                                        <option value="Oman">Oman</option>
                                        <option value="Pakistan">Pakistan</option>
                                        <option value="Palau">Palau</option>
                                        <option value="Panama">Panama</option>
                                        <option value="Papua New Guinea">Papua New Guinea</option>
                                        <option value="Paraguay">Paraguay</option>
                                        <option value="Peru">Peru</option>
                                        <option value="Philippines">Philippines</option>
                                        <option value="Poland">Poland</option>
                                        <option value="Portugal">Portugal</option>
                                        <option value="Qatar">Qatar</option>
                                        <option value="Romania">Romania</option>
                                        <option value="Russia">Russia</option>
                                        <option value="Rwanda">Rwanda</option>
                                        <option value="Saint Kitts and Nevis">
                                            Saint Kitts and Nevis
                                        </option>
                                        <option value="Saint Lucia">Saint Lucia</option>
                                        <option value="Saint Vincent and the Grenadines">
                                            Saint Vincent and the Grenadines
                                        </option>
                                        <option value="Samoa">Samoa</option>
                                        <option value="San Marino">San Marino</option>
                                        <option value="Sao Tome and Principe">
                                            Sao Tome and Principe
                                        </option>
                                        <option value="Saudi Arabia">Saudi Arabia</option>
                                        <option value="Senegal">Senegal</option>
                                        <option value="Serbia">Serbia</option>
                                        <option value="Seychelles">Seychelles</option>
                                        <option value="Sierra Leone">Sierra Leone</option>
                                        <option value="Singapore">Singapore</option>
                                        <option value="Slovakia">Slovakia</option>
                                        <option value="Slovenia">Slovenia</option>
                                        <option value="Solomon Islands">Solomon Islands</option>
                                        <option value="Somalia">Somalia</option>
                                        <option value="South Africa">South Africa</option>
                                        <option value="South Sudan">South Sudan</option>
                                        <option value="Spain">Spain</option>
                                        <option value="Sri Lanka">Sri Lanka</option>
                                        <option value="Sudan">Sudan</option>
                                        <option value="Suriname">Suriname</option>
                                        <option value="Sweden">Sweden</option>
                                        <option value="Switzerland">Switzerland</option>
                                        <option value="Syria">Syria</option>
                                        <option value="Taiwan">Taiwan</option>
                                        <option value="Tajikistan">Tajikistan</option>
                                        <option value="Tanzania">Tanzania</option>
                                        <option value="Thailand">Thailand</option>
                                        <option value="Timor-Leste">Timor-Leste</option>
                                        <option value="Togo">Togo</option>
                                        <option value="Tonga">Tonga</option>
                                        <option value="Trinidad and Tobago">
                                            Trinidad and Tobago
                                        </option>
                                        <option value="Tunisia">Tunisia</option>
                                        <option value="Turkey">Turkey</option>
                                        <option value="Turkmenistan">Turkmenistan</option>
                                        <option value="Tuvalu">Tuvalu</option>
                                        <option value="Uganda">Uganda</option>
                                        <option value="Ukraine">Ukraine</option>
                                        <option value="United Arab Emirates">
                                            United Arab Emirates
                                        </option>
                                        <option value="United Kingdom">United Kingdom</option>
                                        <option value="United States">United States</option>
                                        <option value="Uruguay">Uruguay</option>
                                        <option value="Uzbekistan">Uzbekistan</option>
                                        <option value="Vanuatu">Vanuatu</option>
                                        <option value="Vatican City">Vatican City</option>
                                        <option value="Venezuela">Venezuela</option>
                                        <option value="Vietnam">Vietnam</option>
                                        <option value="Yemen">Yemen</option>
                                        <option value="Zambia">Zambia</option>
                                        <option value="Zimbabwe">Zimbabwe</option>
                                    </select>
                                </div>
                                <div class="col-12">
                                    <label for="city" class="form-label filter-label">{{
                                        $t("City")
                                        }}</label>
                                    <select id="city" class="form-select form-control form-input filter-select"
                                        v-model="selectedCity" @change="applyFilterBike(selectedCountry, selectedCity)">
                                        <option selected value="">City</option>
                                        <option v-for="city in cities" :key="city" :value="city">
                                            {{ city }}
                                        </option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="filter-image-div my-4">
                            <img src="@/assets/images/Image18.png" class="img-fluid filter-image" alt="Image" />
                        </div>
                    </div>

                    <div class="col-md-9 px-4">
                        <!-- Container for the Viewer.js to manage image viewing -->
                        <div class="imageBig" ref="viewerContainer" style="display: none">
                            <img :src="currentImage" alt="Current Image for Viewing" />
                            <img :src="image" v-for="(image, idx) in parsedImages(viewerImages)" :key="idx" />

                        </div>
                        <div class="row">
                            <div class="" v-for="(car, index) in this.filteredStories.MotorbikeEnthusiast" :key="index"
                                :class="isModalOpen && activeCarIndex === index ? 'z-2' : 'z-0'">
                                <div @click="openModal(index)"
                                    class="card-sorting-content px-3 px-md-1 py-2 col-md-12 p-1">
                                    <div class="main-slider weekly-slider align-items-center">
                                        <div class="swiper-container myCarListingCard-swiper-container">
                                            <!-- <swiper :effect="'cards'" :grabCursor="true" :modules="modules"
                                                :initialSlide="1" class="mySwiper swiper-no-shadow">
                                                <swiper-slide class="swiper-no-shadow"
                                                    v-for="(image, idx) in parsedImages(car.images)" :key="idx">
                                                    <div class="d-block">
                                                        <img :src="image
                                                            " class="slider-img myCarListingCard-img" alt="car" />
                                                    </div>
                                                </swiper-slide>
                                            </swiper> -->
                                            <swiper :effect="'cards'" :grabCursor="true" :modules="modules"
                                                :initialSlide="1" class="mySwiper swiper-no-shadow">

                                                <swiper-slide class="swiper-no-shadow" v-for="(image, idx) in (parsedImages(car.images).length > 1
                                                    ? [parsedImages(car.images)[1], parsedImages(car.images)[0], ...parsedImages(car.images).slice(2)]
                                                    : parsedImages(car.images))" :key="idx">

                                                    <div class="d-block">
                                                        <img :src="image" class="slider-img myCarListingCard-img"
                                                            alt="car" />
                                                    </div>

                                                </swiper-slide>

                                            </swiper>

                                            <span class="swiper-notification" aria-live="assertive"
                                                aria-atomic="true"></span>
                                        </div>
                                        <img :src="iconford" alt="" class="d-none" />
                                    </div>
                                    <div class="card-content-car">
                                        <h4 class="text-white mb-1 " @click="openModal(index)">
                                            {{ car.story_name }}
                                        </h4>
                                        <ul class="user-details-car myCarListingCard-user-details-car mb-1 mt-0">
                                            <li class="list-item-user mb-0 justify-content-start">
                                                <img :src="instaIcon" class="instaIcon" />
                                                <a :href="'https://www.instagram.com/' + car.social_media"
                                                    class="a-tag-name-user mt-2 mb-2" style="font-size: 14px"
                                                    target="_blank" rel="noopener noreferrer">
                                                    {{ car.social_media }}
                                                </a>
                                            </li>
                                        </ul>
                                        <p class="text-white mt-0 mb-0 w-75 text-wrap " style="font-size: 14px"
                                            v-if="car.story_history" @click="openModal(index)">
                                            <span class="text-orange">Tell us your Motor Bike story & how it all
                                                started</span>
                                            <br />
                                            <span>{{ car.story_history }}</span>

                                            <!-- Conditionally show "view more" if there are 10 or more words -->
                                            <!-- <span class="view-more-a-tag ms-2" style="cursor: pointer"
                                                v-if="car.story_history.split(' ').length >= 10"
                                                @click="openModal(index)">
                                                {{ $t("viewMore") }}
                                            </span> -->
                                        </p>
                                    </div>

                                </div>

                                <div class="modal show d-block" tabindex="-1" role="dialog"
                                    v-if="isModalOpen && activeCarIndex === index">
                                    <div class="modal-dialog modal-dialog-centered" role="document">
                                        <div class="modal-content">
                                            <div class="modal-body text-center">
                                                <span class="close-icon" @click="modalClose">
                                                    <i class="fas fa-times"></i>
                                                </span>

                                                <div class="mt-4 py-2">
                                                    <div class="myCarListingCard-swiper-container">
                                                        <!-- <swiper :effect="'cards'" :grabCursor="true" :modules="modules"
                                                            :initialSlide="1" :pagination="{ clickable: true }"
                                                            :navigation="{
                                                                nextEl: '.custom-next',
                                                                prevEl: '.custom-prev',
                                                            }" class="mySwiper swiper-no-shadow modalswipper">
                                                            <swiper-slide class="swiper-no-shadow modalswippersh"
                                                                v-for="(image, idx) in parsedImages(car.images)"
                                                                :key="idx">
                                                                <div class="d-block">
                                                                    <img :src="image
                                                                        "
                                                                        class="slider-img myCarListingCard-img modalswipperImage"
                                                                        alt="car"
                                                                        @click="openViewer(image, car.images)" />
                                                                </div>
                                                            </swiper-slide>
                                                        </swiper> -->
                                                        <swiper :effect="'cards'" :grabCursor="true" :modules="modules"
                                                            :initialSlide="1" :pagination="{ clickable: true }"
                                                            :navigation="{
                                                                nextEl: '.custom-next',
                                                                prevEl: '.custom-prev',
                                                            }" class="mySwiper swiper-no-shadow modalswipper">

                                                            <swiper-slide class="swiper-no-shadow modalswippersh" v-for="(image, idx) in (parsedImages(car.images).length > 1
                                                                ? [parsedImages(car.images)[1], parsedImages(car.images)[0], ...parsedImages(car.images).slice(2)]
                                                                : parsedImages(car.images))" :key="idx">

                                                                <div class="d-block">
                                                                    <img :src="image"
                                                                        class="slider-img myCarListingCard-img modalswipperImage"
                                                                        alt="car"
                                                                        @click="openViewer(image, car.images)" />
                                                                </div>

                                                            </swiper-slide>

                                                        </swiper>

                                                        <span class="swiper-notification" aria-live="assertive"
                                                            aria-atomic="true"></span>
                                                    </div>
                                                    <div class="custom-swiper-navigation gap-8 justify-content-center"
                                                        :class="isOverlayTransparent ? 'd-flex' : 'd-flex'">
                                                        <button class="custom-prev btn">
                                                            <img :src="prevIcon" alt="" />
                                                        </button>
                                                        <button class="custom-next btn">
                                                            <img :src="nextIcon" alt="" />
                                                        </button>
                                                    </div>
                                                    <div class="d-flex justify-content-end" v-if="isOverlayTransparent">
                                                        <!-- <button class="btn btn-danger " @click='toggleOverlayOpacity'><span class="" >
                                                                <i class="fa-solid fa-xmark"></i>
                                                </span></button> -->
                                                    </div>
                                                    <div class="overlay mt-5" :class="{ '': isOverlayTransparent }"
                                                        @click="toggleOverlayOpacity">
                                                        <div
                                                            class="mt-2 d-flex justify-content-between align-items-center mb-2">
                                                            <div class="d-flex align-items-center gap-2">
                                                                <img :src="iconford" class="d-none" alt="" />
                                                                <h3 class="m-0 text-white fontsiz">
                                                                    {{ car.story_name }}
                                                                </h3>
                                                            </div>
                                                        </div>
                                                        <div class="d-flex align-items-center text-white mt-2">
                                                            <img :src="instaIcon" class="instaIcon" />
                                                            <a :href="'https://www.instagram.com/' + car.social_media"
                                                                class="a-tag-name-user mt-2 mb-2"
                                                                style="font-size: 14px" target="_blank"
                                                                rel="noopener noreferrer">
                                                                @{{ car.social_media }}
                                                            </a>
                                                        </div>

                                                        <p class="text-orange"
                                                            style="font-size: 14px; text-align: start">Tell us the
                                                            wildest or most unforgettable moment you’ve had with your
                                                            car</p>
                                                        <p class="text-white"
                                                            style="font-size: 14px; text-align: start">
                                                            {{ car.adventure_story }}
                                                        </p>
                                                        <p class="text-orange"
                                                            style="font-size: 14px; text-align: start">Tell us your
                                                            Garage story & how it all started</p>
                                                        <p class="text-white"
                                                            style="font-size: 14px; text-align: start">
                                                            {{ car.story_history }}
                                                        </p>
                                                    </div>
                                                    <!-- <p class="view-more-a-tag ms-2" style="cursor: pointer" @click="showMore[index] = !showMore[index]">
                  {{ showMore[index] ? $t("showLess") : $t("viewMore") }}
                </p> -->
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <!-- Modal -->
                        </div>

                        <!-- end template -->
                    </div>
                </div>
            </div>
            <div v-else-if="activeTab === 5" :class="isModalOpenFe ? 'z-0 position-relative ' : ''">
                <!-- Add content here -->
                <div class="row">
                    <div class="col-md-12 mb-2">
                        <input type="text" class="form-control formSearch mb-2" placeholder="search" v-model="search"
                            @input="applyFilterAutomotivePhotographerSearch" />
                    </div>
                    <div class="col-md-3">
                        <div class="list-item-btn position-relative submit-btn-div mx-0 mt-0 mb-2 d-none d-md-none">
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
                            <button type="submit" class="signin-btnli btn-filter " id="submit-button"
                                data-bs-toggle="collapse" data-bs-target="#collapseExample6" aria-expanded="false"
                                aria-controls="collapseExample6">
                                {{ $t('Filters') }}
                            </button>
                            <span class="border-bottom-btn border-left-btn position-absolute">
                                <img src="@/assets/images/Group11.png" class="img-border position-absolute" alt="" />
                            </span>
                            <span class="border-bottom-btn position-absolute">
                                <img src="@/assets/images/Path473.png" class="img-border position-absolute" alt="" />
                            </span>
                        </div>

                        <div class="collapse d-none d-md-none" id="collapseExample6">
                            <div class="">
                                <div class="filter-box">
                                    <h4 class="filter-title">{{ $t("filters") }}</h4>
                                    <div class="row">
                                        <div class="col-12">
                                            <label for="country" class="form-label filter-label">{{
                                                $t("Country")
                                            }}</label>
                                            <select v-model="selectedCountry" id="country"
                                                class="form-select form-control form-input filter-select"
                                                @change="applyFilterAuto(selectedCountry, selectedCity)">
                                                <option selected value="">Country</option>
                                                <option value="Afghanistan">Afghanistan</option>
                                                <option value="Albania">Albania</option>
                                                <option value="Algeria">Algeria</option>
                                                <option value="Andorra">Andorra</option>
                                                <option value="Angola">Angola</option>
                                                <option value="Antigua and Barbuda">
                                                    Antigua and Barbuda
                                                </option>
                                                <option value="Argentina">Argentina</option>
                                                <option value="Armenia">Armenia</option>
                                                <option value="Australia">Australia</option>
                                                <option value="Austria">Austria</option>
                                                <option value="Azerbaijan">Azerbaijan</option>
                                                <option value="Bahamas">Bahamas</option>
                                                <option value="Bahrain">Bahrain</option>
                                                <option value="Bangladesh">Bangladesh</option>
                                                <option value="Barbados">Barbados</option>
                                                <option value="Belarus">Belarus</option>
                                                <option value="Belgium">Belgium</option>
                                                <option value="Belize">Belize</option>
                                                <option value="Benin">Benin</option>
                                                <option value="Bhutan">Bhutan</option>
                                                <option value="Bolivia">Bolivia</option>
                                                <option value="Bosnia and Herzegovina">
                                                    Bosnia and Herzegovina
                                                </option>
                                                <option value="Botswana">Botswana</option>
                                                <option value="Brazil">Brazil</option>
                                                <option value="Brunei">Brunei</option>
                                                <option value="Bulgaria">Bulgaria</option>
                                                <option value="Burkina Faso">Burkina Faso</option>
                                                <option value="Burundi">Burundi</option>
                                                <option value="Cabo Verde">Cabo Verde</option>
                                                <option value="Cambodia">Cambodia</option>
                                                <option value="Cameroon">Cameroon</option>
                                                <option value="Canada">Canada</option>
                                                <option value="Central African Republic">
                                                    Central African Republic
                                                </option>
                                                <option value="Chad">Chad</option>
                                                <option value="Chile">Chile</option>
                                                <option value="China">China</option>
                                                <option value="Colombia">Colombia</option>
                                                <option value="Comoros">Comoros</option>
                                                <option value="Congo">Congo</option>
                                                <option value="Costa Rica">Costa Rica</option>
                                                <option value="Croatia">Croatia</option>
                                                <option value="Cuba">Cuba</option>
                                                <option value="Cyprus">Cyprus</option>
                                                <option value="Czech Republic">Czech Republic</option>
                                                <option value="Denmark">Denmark</option>
                                                <option value="Djibouti">Djibouti</option>
                                                <option value="Dominica">Dominica</option>
                                                <option value="Dominican Republic">
                                                    Dominican Republic
                                                </option>
                                                <option value="Ecuador">Ecuador</option>
                                                <option value="Egypt">Egypt</option>
                                                <option value="El Salvador">El Salvador</option>
                                                <option value="Equatorial Guinea">Equatorial Guinea</option>
                                                <option value="Eritrea">Eritrea</option>
                                                <option value="Estonia">Estonia</option>
                                                <option value="Eswatini">Eswatini</option>
                                                <option value="Ethiopia">Ethiopia</option>
                                                <option value="Fiji">Fiji</option>
                                                <option value="Finland">Finland</option>
                                                <option value="France">France</option>
                                                <option value="Gabon">Gabon</option>
                                                <option value="Gambia">Gambia</option>
                                                <option value="Georgia">Georgia</option>
                                                <option value="Germany">Germany</option>
                                                <option value="Ghana">Ghana</option>
                                                <option value="Greece">Greece</option>
                                                <option value="Grenada">Grenada</option>
                                                <option value="Guatemala">Guatemala</option>
                                                <option value="Guinea">Guinea</option>
                                                <option value="Guinea-Bissau">Guinea-Bissau</option>
                                                <option value="Guyana">Guyana</option>
                                                <option value="Haiti">Haiti</option>
                                                <option value="Honduras">Honduras</option>
                                                <option value="Hungary">Hungary</option>
                                                <option value="Iceland">Iceland</option>
                                                <option value="India">India</option>
                                                <option value="Indonesia">Indonesia</option>
                                                <option value="Iran">Iran</option>
                                                <option value="Iraq">Iraq</option>
                                                <option value="Ireland">Ireland</option>
                                                <option value="Israel">Israel</option>
                                                <option value="Italy">Italy</option>
                                                <option value="Jamaica">Jamaica</option>
                                                <option value="Japan">Japan</option>
                                                <option value="Jordan">Jordan</option>
                                                <option value="Kazakhstan">Kazakhstan</option>
                                                <option value="Kenya">Kenya</option>
                                                <option value="Kiribati">Kiribati</option>
                                                <option value="Korea, North">Korea, North</option>
                                                <option value="Korea, South">Korea, South</option>
                                                <option value="Kosovo">Kosovo</option>
                                                <option value="Kuwait">Kuwait</option>
                                                <option value="Kyrgyzstan">Kyrgyzstan</option>
                                                <option value="Laos">Laos</option>
                                                <option value="Latvia">Latvia</option>
                                                <option value="Lebanon">Lebanon</option>
                                                <option value="Lesotho">Lesotho</option>
                                                <option value="Liberia">Liberia</option>
                                                <option value="Libya">Libya</option>
                                                <option value="Liechtenstein">Liechtenstein</option>
                                                <option value="Lithuania">Lithuania</option>
                                                <option value="Luxembourg">Luxembourg</option>
                                                <option value="Madagascar">Madagascar</option>
                                                <option value="Malawi">Malawi</option>
                                                <option value="Malaysia">Malaysia</option>
                                                <option value="Maldives">Maldives</option>
                                                <option value="Mali">Mali</option>
                                                <option value="Malta">Malta</option>
                                                <option value="Marshall Islands">Marshall Islands</option>
                                                <option value="Mauritania">Mauritania</option>
                                                <option value="Mauritius">Mauritius</option>
                                                <option value="Mexico">Mexico</option>
                                                <option value="Micronesia">Micronesia</option>
                                                <option value="Moldova">Moldova</option>
                                                <option value="Monaco">Monaco</option>
                                                <option value="Mongolia">Mongolia</option>
                                                <option value="Montenegro">Montenegro</option>
                                                <option value="Morocco">Morocco</option>
                                                <option value="Mozambique">Mozambique</option>
                                                <option value="Myanmar">Myanmar</option>
                                                <option value="Namibia">Namibia</option>
                                                <option value="Nauru">Nauru</option>
                                                <option value="Nepal">Nepal</option>
                                                <option value="Netherlands">Netherlands</option>
                                                <option value="New Zealand">New Zealand</option>
                                                <option value="Nicaragua">Nicaragua</option>
                                                <option value="Niger">Niger</option>
                                                <option value="Nigeria">Nigeria</option>
                                                <option value="North Macedonia">North Macedonia</option>
                                                <option value="Norway">Norway</option>
                                                <option value="Oman">Oman</option>
                                                <option value="Pakistan">Pakistan</option>
                                                <option value="Palau">Palau</option>
                                                <option value="Panama">Panama</option>
                                                <option value="Papua New Guinea">Papua New Guinea</option>
                                                <option value="Paraguay">Paraguay</option>
                                                <option value="Peru">Peru</option>
                                                <option value="Philippines">Philippines</option>
                                                <option value="Poland">Poland</option>
                                                <option value="Portugal">Portugal</option>
                                                <option value="Qatar">Qatar</option>
                                                <option value="Romania">Romania</option>
                                                <option value="Russia">Russia</option>
                                                <option value="Rwanda">Rwanda</option>
                                                <option value="Saint Kitts and Nevis">
                                                    Saint Kitts and Nevis
                                                </option>
                                                <option value="Saint Lucia">Saint Lucia</option>
                                                <option value="Saint Vincent and the Grenadines">
                                                    Saint Vincent and the Grenadines
                                                </option>
                                                <option value="Samoa">Samoa</option>
                                                <option value="San Marino">San Marino</option>
                                                <option value="Sao Tome and Principe">
                                                    Sao Tome and Principe
                                                </option>
                                                <option value="Saudi Arabia">Saudi Arabia</option>
                                                <option value="Senegal">Senegal</option>
                                                <option value="Serbia">Serbia</option>
                                                <option value="Seychelles">Seychelles</option>
                                                <option value="Sierra Leone">Sierra Leone</option>
                                                <option value="Singapore">Singapore</option>
                                                <option value="Slovakia">Slovakia</option>
                                                <option value="Slovenia">Slovenia</option>
                                                <option value="Solomon Islands">Solomon Islands</option>
                                                <option value="Somalia">Somalia</option>
                                                <option value="South Africa">South Africa</option>
                                                <option value="South Sudan">South Sudan</option>
                                                <option value="Spain">Spain</option>
                                                <option value="Sri Lanka">Sri Lanka</option>
                                                <option value="Sudan">Sudan</option>
                                                <option value="Suriname">Suriname</option>
                                                <option value="Sweden">Sweden</option>
                                                <option value="Switzerland">Switzerland</option>
                                                <option value="Syria">Syria</option>
                                                <option value="Taiwan">Taiwan</option>
                                                <option value="Tajikistan">Tajikistan</option>
                                                <option value="Tanzania">Tanzania</option>
                                                <option value="Thailand">Thailand</option>
                                                <option value="Timor-Leste">Timor-Leste</option>
                                                <option value="Togo">Togo</option>
                                                <option value="Tonga">Tonga</option>
                                                <option value="Trinidad and Tobago">
                                                    Trinidad and Tobago
                                                </option>
                                                <option value="Tunisia">Tunisia</option>
                                                <option value="Turkey">Turkey</option>
                                                <option value="Turkmenistan">Turkmenistan</option>
                                                <option value="Tuvalu">Tuvalu</option>
                                                <option value="Uganda">Uganda</option>
                                                <option value="Ukraine">Ukraine</option>
                                                <option value="United Arab Emirates">
                                                    United Arab Emirates
                                                </option>
                                                <option value="United Kingdom">United Kingdom</option>
                                                <option value="United States">United States</option>
                                                <option value="Uruguay">Uruguay</option>
                                                <option value="Uzbekistan">Uzbekistan</option>
                                                <option value="Vanuatu">Vanuatu</option>
                                                <option value="Vatican City">Vatican City</option>
                                                <option value="Venezuela">Venezuela</option>
                                                <option value="Vietnam">Vietnam</option>
                                                <option value="Yemen">Yemen</option>
                                                <option value="Zambia">Zambia</option>
                                                <option value="Zimbabwe">Zimbabwe</option>
                                            </select>
                                        </div>
                                        <div class="col-12">
                                            <label for="city" class="form-label filter-label">{{
                                                $t("City")
                                            }}</label>
                                            <select id="city" class="form-select form-control form-input filter-select"
                                                v-model="selectedCity"
                                                @change="applyFilterAuto(selectedCountry, selectedCity)">
                                                <option selected value="">City</option>
                                                <option v-for="city in cities" :key="city" :value="city">
                                                    {{ city }}
                                                </option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="filter-box d-block d-md-block">
                            <h4 class="filter-title">{{ $t("filters") }}</h4>
                            <div class="row">
                                <div class="col-12">
                                    <label for="country" class="form-label filter-label">{{
                                        $t("Country")
                                        }}</label>
                                    <select v-model="selectedCountry" id="country"
                                        class="form-select form-control form-input filter-select"
                                        @change="applyFilterAuto(selectedCountry, selectedCity)">
                                        <option selected value="">Country</option>
                                        <option value="Afghanistan">Afghanistan</option>
                                        <option value="Albania">Albania</option>
                                        <option value="Algeria">Algeria</option>
                                        <option value="Andorra">Andorra</option>
                                        <option value="Angola">Angola</option>
                                        <option value="Antigua and Barbuda">
                                            Antigua and Barbuda
                                        </option>
                                        <option value="Argentina">Argentina</option>
                                        <option value="Armenia">Armenia</option>
                                        <option value="Australia">Australia</option>
                                        <option value="Austria">Austria</option>
                                        <option value="Azerbaijan">Azerbaijan</option>
                                        <option value="Bahamas">Bahamas</option>
                                        <option value="Bahrain">Bahrain</option>
                                        <option value="Bangladesh">Bangladesh</option>
                                        <option value="Barbados">Barbados</option>
                                        <option value="Belarus">Belarus</option>
                                        <option value="Belgium">Belgium</option>
                                        <option value="Belize">Belize</option>
                                        <option value="Benin">Benin</option>
                                        <option value="Bhutan">Bhutan</option>
                                        <option value="Bolivia">Bolivia</option>
                                        <option value="Bosnia and Herzegovina">
                                            Bosnia and Herzegovina
                                        </option>
                                        <option value="Botswana">Botswana</option>
                                        <option value="Brazil">Brazil</option>
                                        <option value="Brunei">Brunei</option>
                                        <option value="Bulgaria">Bulgaria</option>
                                        <option value="Burkina Faso">Burkina Faso</option>
                                        <option value="Burundi">Burundi</option>
                                        <option value="Cabo Verde">Cabo Verde</option>
                                        <option value="Cambodia">Cambodia</option>
                                        <option value="Cameroon">Cameroon</option>
                                        <option value="Canada">Canada</option>
                                        <option value="Central African Republic">
                                            Central African Republic
                                        </option>
                                        <option value="Chad">Chad</option>
                                        <option value="Chile">Chile</option>
                                        <option value="China">China</option>
                                        <option value="Colombia">Colombia</option>
                                        <option value="Comoros">Comoros</option>
                                        <option value="Congo">Congo</option>
                                        <option value="Costa Rica">Costa Rica</option>
                                        <option value="Croatia">Croatia</option>
                                        <option value="Cuba">Cuba</option>
                                        <option value="Cyprus">Cyprus</option>
                                        <option value="Czech Republic">Czech Republic</option>
                                        <option value="Denmark">Denmark</option>
                                        <option value="Djibouti">Djibouti</option>
                                        <option value="Dominica">Dominica</option>
                                        <option value="Dominican Republic">
                                            Dominican Republic
                                        </option>
                                        <option value="Ecuador">Ecuador</option>
                                        <option value="Egypt">Egypt</option>
                                        <option value="El Salvador">El Salvador</option>
                                        <option value="Equatorial Guinea">Equatorial Guinea</option>
                                        <option value="Eritrea">Eritrea</option>
                                        <option value="Estonia">Estonia</option>
                                        <option value="Eswatini">Eswatini</option>
                                        <option value="Ethiopia">Ethiopia</option>
                                        <option value="Fiji">Fiji</option>
                                        <option value="Finland">Finland</option>
                                        <option value="France">France</option>
                                        <option value="Gabon">Gabon</option>
                                        <option value="Gambia">Gambia</option>
                                        <option value="Georgia">Georgia</option>
                                        <option value="Germany">Germany</option>
                                        <option value="Ghana">Ghana</option>
                                        <option value="Greece">Greece</option>
                                        <option value="Grenada">Grenada</option>
                                        <option value="Guatemala">Guatemala</option>
                                        <option value="Guinea">Guinea</option>
                                        <option value="Guinea-Bissau">Guinea-Bissau</option>
                                        <option value="Guyana">Guyana</option>
                                        <option value="Haiti">Haiti</option>
                                        <option value="Honduras">Honduras</option>
                                        <option value="Hungary">Hungary</option>
                                        <option value="Iceland">Iceland</option>
                                        <option value="India">India</option>
                                        <option value="Indonesia">Indonesia</option>
                                        <option value="Iran">Iran</option>
                                        <option value="Iraq">Iraq</option>
                                        <option value="Ireland">Ireland</option>
                                        <option value="Israel">Israel</option>
                                        <option value="Italy">Italy</option>
                                        <option value="Jamaica">Jamaica</option>
                                        <option value="Japan">Japan</option>
                                        <option value="Jordan">Jordan</option>
                                        <option value="Kazakhstan">Kazakhstan</option>
                                        <option value="Kenya">Kenya</option>
                                        <option value="Kiribati">Kiribati</option>
                                        <option value="Korea, North">Korea, North</option>
                                        <option value="Korea, South">Korea, South</option>
                                        <option value="Kosovo">Kosovo</option>
                                        <option value="Kuwait">Kuwait</option>
                                        <option value="Kyrgyzstan">Kyrgyzstan</option>
                                        <option value="Laos">Laos</option>
                                        <option value="Latvia">Latvia</option>
                                        <option value="Lebanon">Lebanon</option>
                                        <option value="Lesotho">Lesotho</option>
                                        <option value="Liberia">Liberia</option>
                                        <option value="Libya">Libya</option>
                                        <option value="Liechtenstein">Liechtenstein</option>
                                        <option value="Lithuania">Lithuania</option>
                                        <option value="Luxembourg">Luxembourg</option>
                                        <option value="Madagascar">Madagascar</option>
                                        <option value="Malawi">Malawi</option>
                                        <option value="Malaysia">Malaysia</option>
                                        <option value="Maldives">Maldives</option>
                                        <option value="Mali">Mali</option>
                                        <option value="Malta">Malta</option>
                                        <option value="Marshall Islands">Marshall Islands</option>
                                        <option value="Mauritania">Mauritania</option>
                                        <option value="Mauritius">Mauritius</option>
                                        <option value="Mexico">Mexico</option>
                                        <option value="Micronesia">Micronesia</option>
                                        <option value="Moldova">Moldova</option>
                                        <option value="Monaco">Monaco</option>
                                        <option value="Mongolia">Mongolia</option>
                                        <option value="Montenegro">Montenegro</option>
                                        <option value="Morocco">Morocco</option>
                                        <option value="Mozambique">Mozambique</option>
                                        <option value="Myanmar">Myanmar</option>
                                        <option value="Namibia">Namibia</option>
                                        <option value="Nauru">Nauru</option>
                                        <option value="Nepal">Nepal</option>
                                        <option value="Netherlands">Netherlands</option>
                                        <option value="New Zealand">New Zealand</option>
                                        <option value="Nicaragua">Nicaragua</option>
                                        <option value="Niger">Niger</option>
                                        <option value="Nigeria">Nigeria</option>
                                        <option value="North Macedonia">North Macedonia</option>
                                        <option value="Norway">Norway</option>
                                        <option value="Oman">Oman</option>
                                        <option value="Pakistan">Pakistan</option>
                                        <option value="Palau">Palau</option>
                                        <option value="Panama">Panama</option>
                                        <option value="Papua New Guinea">Papua New Guinea</option>
                                        <option value="Paraguay">Paraguay</option>
                                        <option value="Peru">Peru</option>
                                        <option value="Philippines">Philippines</option>
                                        <option value="Poland">Poland</option>
                                        <option value="Portugal">Portugal</option>
                                        <option value="Qatar">Qatar</option>
                                        <option value="Romania">Romania</option>
                                        <option value="Russia">Russia</option>
                                        <option value="Rwanda">Rwanda</option>
                                        <option value="Saint Kitts and Nevis">
                                            Saint Kitts and Nevis
                                        </option>
                                        <option value="Saint Lucia">Saint Lucia</option>
                                        <option value="Saint Vincent and the Grenadines">
                                            Saint Vincent and the Grenadines
                                        </option>
                                        <option value="Samoa">Samoa</option>
                                        <option value="San Marino">San Marino</option>
                                        <option value="Sao Tome and Principe">
                                            Sao Tome and Principe
                                        </option>
                                        <option value="Saudi Arabia">Saudi Arabia</option>
                                        <option value="Senegal">Senegal</option>
                                        <option value="Serbia">Serbia</option>
                                        <option value="Seychelles">Seychelles</option>
                                        <option value="Sierra Leone">Sierra Leone</option>
                                        <option value="Singapore">Singapore</option>
                                        <option value="Slovakia">Slovakia</option>
                                        <option value="Slovenia">Slovenia</option>
                                        <option value="Solomon Islands">Solomon Islands</option>
                                        <option value="Somalia">Somalia</option>
                                        <option value="South Africa">South Africa</option>
                                        <option value="South Sudan">South Sudan</option>
                                        <option value="Spain">Spain</option>
                                        <option value="Sri Lanka">Sri Lanka</option>
                                        <option value="Sudan">Sudan</option>
                                        <option value="Suriname">Suriname</option>
                                        <option value="Sweden">Sweden</option>
                                        <option value="Switzerland">Switzerland</option>
                                        <option value="Syria">Syria</option>
                                        <option value="Taiwan">Taiwan</option>
                                        <option value="Tajikistan">Tajikistan</option>
                                        <option value="Tanzania">Tanzania</option>
                                        <option value="Thailand">Thailand</option>
                                        <option value="Timor-Leste">Timor-Leste</option>
                                        <option value="Togo">Togo</option>
                                        <option value="Tonga">Tonga</option>
                                        <option value="Trinidad and Tobago">
                                            Trinidad and Tobago
                                        </option>
                                        <option value="Tunisia">Tunisia</option>
                                        <option value="Turkey">Turkey</option>
                                        <option value="Turkmenistan">Turkmenistan</option>
                                        <option value="Tuvalu">Tuvalu</option>
                                        <option value="Uganda">Uganda</option>
                                        <option value="Ukraine">Ukraine</option>
                                        <option value="United Arab Emirates">
                                            United Arab Emirates
                                        </option>
                                        <option value="United Kingdom">United Kingdom</option>
                                        <option value="United States">United States</option>
                                        <option value="Uruguay">Uruguay</option>
                                        <option value="Uzbekistan">Uzbekistan</option>
                                        <option value="Vanuatu">Vanuatu</option>
                                        <option value="Vatican City">Vatican City</option>
                                        <option value="Venezuela">Venezuela</option>
                                        <option value="Vietnam">Vietnam</option>
                                        <option value="Yemen">Yemen</option>
                                        <option value="Zambia">Zambia</option>
                                        <option value="Zimbabwe">Zimbabwe</option>
                                    </select>
                                </div>
                                <div class="col-12">
                                    <label for="city" class="form-label filter-label">{{
                                        $t("City")
                                        }}</label>
                                    <select id="city" class="form-select form-control form-input filter-select"
                                        v-model="selectedCity" @change="applyFilterAuto(selectedCountry, selectedCity)">
                                        <option selected value="">City</option>
                                        <option v-for="city in cities" :key="city" :value="city">
                                            {{ city }}
                                        </option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="filter-image-div my-4">
                            <img src="@/assets/images/Image18.png" class="img-fluid filter-image" alt="Image" />
                        </div>
                    </div>

                    <div class="col-md-9 px-4">
                        <!-- Container for the Viewer.js to manage image viewing -->
                        <div class="imageBig" ref="viewerContainer" style="display: none">
                            <img :src="currentImage" alt="Current Image for Viewing" />
                            <img :src="image" v-for="(image, idx) in parsedImages(viewerImages)" :key="idx" />

                        </div>
                        <div class="row">
                            <div class="" v-for="(car, index) in this.filteredStories
                                .AutomotivePhotographer" :key="index"
                                :class="isModalOpen && activeCarIndex === index ? 'z-2' : 'z-0'">
                                <div @click="openModal(index)"
                                    class="card-sorting-content px-3 px-md-1 py-2 col-md-12 p-1">
                                    <div class="main-slider weekly-slider align-items-center">
                                        <div class="swiper-container myCarListingCard-swiper-container">
                                            <!-- <swiper :effect="'cards'" :grabCursor="true" :modules="modules"
                                                :initialSlide="1" class="mySwiper swiper-no-shadow">
                                                <swiper-slide class="swiper-no-shadow"
                                                    v-for="(image, idx) in parsedImages(car.images)" :key="idx">
                                                    <div class="d-block">
                                                        <img :src="image
                                                            " class="slider-img myCarListingCard-img" alt="car" />
                                                    </div>
                                                </swiper-slide>
                                            </swiper> -->
                                            <swiper :effect="'cards'" :grabCursor="true" :modules="modules"
                                                :initialSlide="1" class="mySwiper swiper-no-shadow">

                                                <swiper-slide class="swiper-no-shadow" v-for="(image, idx) in (parsedImages(car.images).length > 1
                                                    ? [parsedImages(car.images)[1], parsedImages(car.images)[0], ...parsedImages(car.images).slice(2)]
                                                    : parsedImages(car.images))" :key="idx">

                                                    <div class="d-block">
                                                        <img :src="image" class="slider-img myCarListingCard-img"
                                                            alt="car" />
                                                    </div>

                                                </swiper-slide>

                                            </swiper>

                                            <span class="swiper-notification" aria-live="assertive"
                                                aria-atomic="true"></span>
                                        </div>
                                        <img :src="iconford" class="d-none" alt="" />
                                    </div>
                                    <div class="card-content-car">
                                        <h4 class="text-white mb-1 " @click="openModal(index)">
                                            {{ car.story_name }}
                                        </h4>
                                        <ul class="user-details-car myCarListingCard-user-details-car mb-1 mt-0">
                                            <li class="list-item-user mb-0 justify-content-start">
                                                <img :src="instaIcon" class="instaIcon" />
                                                <a :href="'https://www.instagram.com/' + car.social_media"
                                                    class="a-tag-name-user mt-2 mb-2" style="font-size: 14px"
                                                    target="_blank" rel="noopener noreferrer">
                                                    {{ car.social_media }}
                                                </a>
                                            </li>
                                        </ul>
                                        <p class="text-white mt-0 mb-0 w-75 text-wrap " style="font-size: 14px"
                                            v-if="car.story_history" @click="openModal(index)">
                                            <span class="text-orange">Tell us your Automotive Photography story & how it
                                                all started</span>
                                            <br />
                                            <span>{{ car.story_history }}</span>

                                            <!-- Conditionally show "view more" if there are 10 or more words -->
                                            <!-- <span class="view-more-a-tag ms-2" style="cursor: pointer"
                                                v-if="car.story_history.split(' ').length >= 10"
                                                @click="openModal(index)">
                                                {{ $t("viewMore") }}
                                            </span> -->
                                        </p>
                                    </div>
                                </div>

                                <div class="modal show d-block" tabindex="-1" role="dialog"
                                    v-if="isModalOpen && activeCarIndex === index">
                                    <div class="modal-dialog modal-dialog-centered" role="document">
                                        <div class="modal-content">
                                            <div class="modal-body text-center">
                                                <span class="close-icon" @click="modalClose">
                                                    <i class="fas fa-times"></i>
                                                </span>

                                                <div class="mt-4 py-2">
                                                    <div class="myCarListingCard-swiper-container">
                                                        <!-- <swiper :effect="'cards'" :grabCursor="true" :modules="modules"
                                                            :initialSlide="1" :pagination="{ clickable: true }"
                                                            :navigation="{
                                                                nextEl: '.custom-next',
                                                                prevEl: '.custom-prev',
                                                            }" class="mySwiper swiper-no-shadow modalswipper">
                                                            <swiper-slide class="swiper-no-shadow modalswippersh"
                                                                v-for="(image, idx) in parsedImages(car.images)"
                                                                :key="idx">
                                                                <div class="d-block">
                                                                    <img :src="image
                                                                        "
                                                                        class="slider-img myCarListingCard-img modalswipperImage"
                                                                        alt="car"
                                                                        @click="openViewer(image, car.images)" />
                                                                </div>
                                                            </swiper-slide>
                                                        </swiper> -->
                                                        <swiper :effect="'cards'" :grabCursor="true" :modules="modules"
                                                            :initialSlide="1" :pagination="{ clickable: true }"
                                                            :navigation="{
                                                                nextEl: '.custom-next',
                                                                prevEl: '.custom-prev',
                                                            }" class="mySwiper swiper-no-shadow modalswipper">

                                                            <swiper-slide class="swiper-no-shadow modalswippersh" v-for="(image, idx) in (parsedImages(car.images).length > 1
                                                                ? [parsedImages(car.images)[1], parsedImages(car.images)[0], ...parsedImages(car.images).slice(2)]
                                                                : parsedImages(car.images))" :key="idx">

                                                                <div class="d-block">
                                                                    <img :src="image"
                                                                        class="slider-img myCarListingCard-img modalswipperImage"
                                                                        alt="car"
                                                                        @click="openViewer(image, car.images)" />
                                                                </div>

                                                            </swiper-slide>

                                                        </swiper>

                                                        <span class="swiper-notification" aria-live="assertive"
                                                            aria-atomic="true"></span>
                                                    </div>
                                                    <div class="custom-swiper-navigation gap-8 justify-content-center"
                                                        :class="isOverlayTransparent ? 'd-flex' : 'd-flex'">
                                                        <button class="custom-prev btn">
                                                            <img :src="prevIcon" alt="" />
                                                        </button>
                                                        <button class="custom-next btn">
                                                            <img :src="nextIcon" alt="" />
                                                        </button>
                                                    </div>
                                                    <div class="d-flex justify-content-end" v-if="isOverlayTransparent">
                                                        <!-- <button class="btn btn-danger " @click='toggleOverlayOpacity'><span class="" >
                                                                <i class="fa-solid fa-xmark"></i>
                                                </span></button> -->
                                                    </div>
                                                    <div class="overlay mt-5" :class="{ '': isOverlayTransparent }"
                                                        @click="toggleOverlayOpacity">
                                                        <div
                                                            class="mt-2 d-flex justify-content-between align-items-center mb-2">
                                                            <div class="d-flex align-items-center gap-2">
                                                                <img :src="iconford" class="d-none" alt="" />
                                                                <h3 class="m-0 text-white fontsiz">
                                                                    {{ car.story_name }}
                                                                </h3>
                                                            </div>
                                                        </div>
                                                        <div class="d-flex align-items-center text-white mt-2">
                                                            <img :src="instaIcon" class="instaIcon" />
                                                            <a :href="'https://www.instagram.com/' + car.social_media"
                                                                class="a-tag-name-user mt-2 mb-2"
                                                                style="font-size: 14px" target="_blank"
                                                                rel="noopener noreferrer">
                                                                @{{ car.social_media }}
                                                            </a>
                                                        </div>

                                                        <p class="text-orange"
                                                            style="font-size: 14px; text-align: start">Tell us the
                                                            wildest or most unforgettable moment you’ve had with your
                                                            car</p>
                                                        <p class="text-white"
                                                            style="font-size: 14px; text-align: start">
                                                            {{ car.adventure_story }}
                                                        </p>
                                                        <p class="text-orange"
                                                            style="font-size: 14px; text-align: start">Tell us your
                                                            Garage story & how it all started</p>
                                                        <p class="text-white"
                                                            style="font-size: 14px; text-align: start">
                                                            {{ car.story_history }}
                                                        </p>
                                                    </div>
                                                    <!-- <p class="view-more-a-tag ms-2" style="cursor: pointer" @click="showMore[index] = !showMore[index]">
                  {{ showMore[index] ? $t("showLess") : $t("viewMore") }}
                </p> -->
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <!-- Modal -->
                        </div>

                        <!-- end template -->
                    </div>
                </div>
            </div>
        </div>
        <FooterSect v-if='showFooter' />
    </section>
</template>

<script>
import API from "@/http-common"; // ✅ Import the API instance
import Image1 from "@/assets/images/4image.png";
import Image2 from "@/assets/images/d722fc518c6127ea183d184e5dc715e3.png";
import Image3 from "@/assets/images/20210412111611_Ford_Territory_front.png";
import Image4 from "@/assets/images/images1.png";
import Image5 from "@/assets/images/36346b90e9ed41209ec6b093b61c21ef.png";
import icon1 from "@/assets/images/IconAwesome-user-alt.png";
import icon2 from "@/assets/images/engine.png";
import icon3 from "@/assets/images/Iconmaterial-email.png";
import instaIcon from "@/assets/images/ins.png";
// import 'swiper/css/effect-cards';
import { EffectCards } from "swiper/modules";
//Import swiper js
import img1 from "@/assets/images/Group12white.png";
import img2 from "@/assets/images/Path467white.png";
import img3 from "@/assets/images/Path465white.png";
import img4 from "@/assets/images/Group11white.png";
import img5 from "@/assets/images/Path473white.png";

import actimg1 from "@/assets/images/Group12.png";
import actimg2 from "@/assets/images/Path467.png";
import actimg3 from "@/assets/images/Path465.png";
import actimg4 from "@/assets/images/Group11.png";
import actimg5 from "@/assets/images/Path473.png";
import iconford from "@/assets/images/Imagefordlogo13.png";
import nextIcon from "@/assets/images/next.png";
import prevIcon from "@/assets/images/prev.png";
//Import Swiper styles
// import "swiper/swiper-bundle.css";
import { Swiper, SwiperSlide } from "swiper/vue";
// import axios from "axios";
import CarDataService from "@/services/CarDataService";
import CommunityDataService from "@/services/CommunityDataService";
import { Pagination, Navigation } from "swiper/modules";
//Import Swiper modules
// import { Pagination, Navigation } from 'swiper';
// Install Swiper modules
// Swiper.use([Pagination, Navigation])
import Viewer from "viewerjs";
import "viewerjs/dist/viewer.css"; // Import the Viewer.js CSS
import FooterSect from "./FooterSect";
import http from "@/http-common";
export default {
    name: "FeaturedStories",
    components: {
        Swiper,
        SwiperSlide,
        FooterSect
    },
    setup() {
        return {
            modules: [EffectCards, Pagination, Navigation],
        };
    },
    data() {
        return {
            showFooter: true,
            isModalOpenFe: false,
            showMore: {},
            instaIcon,
            currentImage: "", // Currently selected image for viewing
            viewerInstance: null, // Reference to the Viewer.js instance
            cities: [],
            featuredStories: [],
            prevIcon,
            nextIcon,
            isOverlayTransparent: false,
            iconford,
            Image1,
            Image2,
            Image3,
            isOpen: false,
            isOpenm: false,
            isOpeng: false,
            dataGy: [],
            selectedData: "",
            makes: [],
            make: "",
            smodel: "",
            makefilteredOptions: [],
            modelfilteredOptions: [],
            models: [],
            generation: "",
            generations: [],
            GenfilteredOptions: [],
            filteredGenerations: [],
            productionYear: "",
            productionYears: [],
            viewerImages: [],
            formData: {
                make: "",
                model: "",
                year: "",
                user_name: "",
                user_email: "",
                story: "",
                modifications: "",
                memorable: "",
                advice: "",
                story_name: "",
                social_media: "",
                url: "",
                storyName: "",
                adventureStory: "",
                storyHistory: "",
                city: "",
                country: "",

                storyImages: [],
            },
            // new
            selectedCountry: "",
            selectedCity: "",
            isModalOpen: false,
            activeCarIndex: null, // Track which car's modal is open
            activeTab: 0,
            tabs: [
                {
                    name: "Car Enthusiast",

                    actimg1: actimg1,
                    actimg2: actimg2,
                    actimg3: actimg3,
                    actimg4: actimg4,
                    actimg5: actimg5,
                    img1: img1,
                    img2: img2,
                    img3: img3,
                    img4: img4,
                    img5: img5,
                },
                {
                    name: "Car Garage",
                    actimg1: actimg1,
                    actimg2: actimg2,
                    actimg3: actimg3,
                    actimg4: actimg4,
                    actimg5: actimg5,
                    img1: img1,
                    img2: img2,
                    img3: img3,
                    img4: img4,
                    img5: img5,
                },
                {
                    name: "Car Modification/Tunning Shop",
                    actimg1: actimg1,
                    actimg2: actimg2,
                    actimg3: actimg3,
                    actimg4: actimg4,
                    actimg5: actimg5,
                    img1: img1,
                    img2: img2,
                    img3: img3,
                    img4: img4,
                    img5: img5,
                },
                {
                    name: "Car Club",
                    actimg1: actimg1,
                    actimg2: actimg2,
                    actimg3: actimg3,
                    actimg4: actimg4,
                    actimg5: actimg5,
                    img1: img1,
                    img2: img2,
                    img3: img3,
                    img4: img4,
                    img5: img5,
                },
                {
                    name: "Motorbike Enthusiast",
                    actimg1: actimg1,
                    actimg2: actimg2,
                    actimg3: actimg3,
                    actimg4: actimg4,
                    actimg5: actimg5,
                    img1: img1,
                    img2: img2,
                    img3: img3,
                    img4: img4,
                    img5: img5,
                },
                {
                    name: "Automotive Photographer",
                    actimg1: actimg1,
                    actimg2: actimg2,
                    actimg3: actimg3,
                    actimg4: actimg4,
                    actimg5: actimg5,
                    img1: img1,
                    img2: img2,
                    img3: img3,
                    img4: img4,
                    img5: img5,
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
                    title: "Koenigsegg agera 2",
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
                    title: "Koenigsegg agera 3",
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
                    title: "Koenigsegg agera 4",
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
                    title: "Koenigsegg agera 5",
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
                    title: "Koenigsegg agera 6",
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
                    title: "Koenigsegg agera 7",
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
                    title: "Koenigsegg agera 8",
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
                    title: "Koenigsegg agera 9",
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
            search: "",
            filteredStories: {
                CarEnthusiast: [],
                CarGarage: [],
                CarModificationTunningShop: [],
                CarClub: [],
                MotorbikeEnthusiast: [],
                AutomotivePhotographer: [],
            },
            originalCars: {
                CarEnthusiast: [],
                CarGarage: [],
                CarModificationTunningShop: [],
                CarClub: [],
                MotorbikeEnthusiast: [],
                AutomotivePhotographer: [],
            },
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
        },
    },
    mounted() {
        this.retrieveCars();

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
        this.fetchStories();
        // this.fetchFeaturedStories()
        this.fetchCarEnthusiastStories();
    },
    methods: {
        // getImageUrl(image) {
        //     return `https://king-prawn-app-3rw3o.ondigitalocean.app/stories/${image}`;
        // },
        getImageUrl(image) {
            return `${http.defaults.baseURL.replace("/api", "")}/stories/${image}`;
        },
        // openViewer(image) {
        //   console.log("in open viewer", image);
        //   this.isOverlayTransparent = true;
        //   this.currentImage = this.getImageUrl(image); // Set current image URL

        //   const viewerElement = this.$refs.viewerContainer; // Reference the container
        //   if (viewerElement) {
        //     // Destroy any previous instance if it exists to prevent duplication
        //     if (this.viewerInstance) {
        //       this.viewerInstance.destroy();
        //     }

        //     // Use Vue's nextTick to ensure DOM is updated before initializing Viewer.js
        //     this.$nextTick(() => {
        //       this.viewerInstance = new Viewer(viewerElement, {
        //         inline: false, // Set to false for popup mode
        //         zoomable: true, // Enable zooming functionality
        //         movable: true, // Enable panning (dragging the image)
        //         minScale: 1, // Prevent zooming out below 100%
        //         maxScale: 3, // Limit zoom to 3x
        //         viewed() {
        //           // Optional: You can perform actions when the image is viewed
        //           console.log("Image viewed");
        //         },
        //         toolbar: true, // Disable the default toolbar
        //         zoomOnWheel: true, // Allow zooming with mouse wheel
        //         fullscreen: false, // Disable fullscreen mode
        //         title: false, // Disable image title display
        //         navbar: false, // Disable the navigation bar
        //         tooltip: false, // Disable tooltips for image actions
        //         minX: 100, // Minimum X coordinate for panning
        //         maxX: 200, // Maximum X coordinate
        //         minY: 0, // Minimum Y coordinate
        //         maxY: 300, // Maximum Y coordinate
        //       });

        //       // Show the viewer for the current image
        //       this.viewerInstance.show();
        //     });
        //   }
        // },
        // openViewer(image, carimages) {
        //     console.log("in open viewer", image);
        //     console.log("car  images", carimages);
        //     this.isOverlayTransparent = true;
        //     this.currentImage = this.getImageUrl(image); // Set current image URL

        //     const viewerElement = this.$refs.viewerContainer; // Reference the container
        //     if (viewerElement) {
        //         // Destroy any previous instance if it exists to prevent duplication
        //         if (this.viewerInstance) {
        //             this.viewerInstance.destroy();
        //         }

        //         // Create a new array of images, placing the clicked image first
        //         const images = this.parsedImages(carimages);
        //         const currentImageUrl = this.getImageUrl(image);

        //         // Create a new array with the clicked image first
        //         const imageOrder = [currentImageUrl, ...images.map(img => this.getImageUrl(img)).filter(imgUrl => imgUrl !== currentImageUrl)];

        //         // Use Vue's nextTick to ensure DOM is updated before initializing Viewer.js
        //         this.$nextTick(() => {
        //             this.viewerInstance = new Viewer(viewerElement, {
        //                 inline: false, // Set to false for popup mode
        //                 zoomable: true, // Enable zooming functionality
        //                 movable: true, // Enable panning (dragging the image)
        //                 minScale: 1, // Prevent zooming out below 100%
        //                 maxScale: 3, // Limit zoom to 3x
        //                 viewed() {
        //                     // Optional: You can perform actions when the image is viewed
        //                     console.log("Image viewed");
        //                 },
        //                 toolbar: true, // Disable the default toolbar
        //                 zoomOnWheel: true, // Allow zooming with mouse wheel
        //                 fullscreen: false, // Disable fullscreen mode
        //                 title: false, // Disable image title display
        //                 navbar: false, // Disable the navigation bar
        //                 tooltip: false, // Disable tooltips for image actions
        //                 minX: 100, // Minimum X coordinate for panning
        //                 maxX: 200, // Maximum X coordinate
        //                 minY: 0, // Minimum Y coordinate
        //                 maxY: 300, // Maximum Y coordinate
        //             });

        //             // Show the viewer for the current image
        //             this.viewerInstance.show();

        //             // Add images to the viewer
        //             this.viewerInstance.addImage(imageOrder);
        //         });
        //     }
        // }
        // openViewer(image, carimages) {
        //     console.log("in open viewer", image);
        //     this.isOverlayTransparent = true;
        //     this.currentImage = this.getImageUrl(image); // Set current image URL

        //     const viewerElement = this.$refs.viewerContainer; // Reference the container
        //     if (viewerElement) {
        //         // Destroy any previous instance if it exists to prevent duplication
        //         if (this.viewerInstance) {
        //             this.viewerInstance.destroy();
        //         }

        //         // Create a new array of images, placing the clicked image first
        //         const images = this.parsedImages(carimages);
        //         const currentImageUrl = this.getImageUrl(image);

        //         // Create a new array with the clicked image first
        //         const imageOrder = [currentImageUrl, ...images.map(img => this.getImageUrl(img)).filter(imgUrl => imgUrl !== currentImageUrl)];

        //         // Use Vue's nextTick to ensure DOM is updated before initializing Viewer.js
        //         this.$nextTick(() => {
        //             this.viewerInstance = new Viewer(viewerElement, {
        //                 inline: false, // Set to false for popup mode
        //                 zoomable: true, // Enable zooming functionality
        //                 movable: true, // Enable panning (dragging the image)
        //                 minScale: 1, // Prevent zooming out below 100%
        //                 maxScale: 3, // Limit zoom to 3x
        //                 viewed() {
        //                     // Optional: You can perform actions when the image is viewed
        //                     console.log("Image viewed");
        //                 },
        //                 toolbar: true, // Show the default toolbar
        //                 zoomOnWheel: true, // Allow zooming with mouse wheel
        //                 fullscreen: false, // Disable fullscreen mode
        //                 title: false, // Disable image title display
        //                 navbar: false, // Disable the navigation bar
        //                 tooltip: false, // Disable tooltips for image actions
        //             });

        //             // Now manually add images to the viewer by modifying its data
        //             this.viewerInstance._images = imageOrder.map(url => {
        //                 return {
        //                     src: url,
        //                     thumb: url // You can change this to a thumbnail if you have one
        //                 };
        //             });

        //             // Show the viewer for the current image
        //             this.viewerInstance.show();
        //         });
        //     }
        // }
        openViewer(image, carImages) {
            this.viewerImages = carImages
            console.log("in open viewer", image);
            this.isOverlayTransparent = true;
            // this.currentImage = this.getImageUrl(image); // Set current image URL
            this.currentImage = image; // Set current image URL

            const viewerElement = this.$refs.viewerContainer; // Reference the container
            if (viewerElement) {
                // Destroy any previous instance if it exists to prevent duplication
                if (this.viewerInstance) {
                    this.viewerInstance.destroy();
                }

                // Create a new array of images, placing the clicked image first
                const images = this.parsedImages(carImages);
                const currentImageUrl = this.getImageUrl(image);

                // Create a new array with the clicked image first
                const imageOrder = [
                    currentImageUrl,
                    ...images.map(img => this.getImageUrl(img)).filter(imgUrl => imgUrl !== currentImageUrl),
                ];

                // Use Vue's nextTick to ensure DOM is updated before initializing Viewer.js
                this.$nextTick(() => {
                    this.viewerInstance = new Viewer(viewerElement, {
                        inline: false, // Set to false for popup mode
                        zoomable: true, // Enable zooming functionality
                        movable: true, // Enable panning (dragging the image)
                        minScale: 1, // Prevent zooming out below 100%
                        maxScale: 3, // Limit zoom to 3x
                        viewed() {
                            console.log("Image viewed");
                        },
                        // toolbar: true, // Show the default toolbar
                        toolbar: {
                            prev: true,
                            play: false,
                            next: true,
                            zoomIn: false,
                            zoomOut: false,
                            rotateLeft: false,
                            rotateRight: false,
                            flipHorizontal: false,
                            flipVertical: false,
                            reset: false,
                            close: false, // Add close button
                        },
                        zoomOnWheel: true, // Allow zooming with mouse wheel
                        fullscreen: false, // Disable fullscreen mode
                        title: false, // Disable image title display
                        navbar: false, // Disable the navigation bar
                        tooltip: false, // Disable tooltips for image actions
                    });

                    // Now manually add images to the viewer by modifying its data
                    this.viewerInstance._images = imageOrder.map(url => {
                        return {
                            src: url,
                            thumb: url // You can change this to a thumbnail if you have one
                        };
                    });

                    // Show the viewer for the current image
                    this.viewerInstance.show();
                });
            }
        }

        ,
        getImage(tab, index, imgType) {
            if (this.activeTab === index) {
                // If the tab is active, return the active image
                return tab[`act${imgType}`];
            } else {
                // If the tab is not active, return the default image
                return tab[imgType];
            }
        },
        // getcities(country) {
        //     console.log("in  citeis");
        //     if (!country) return; // Exit if no country is selected

        //     // Set up the headers and request body
        //     const myHeaders = new Headers();
        //     myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

        //     const urlencoded = new URLSearchParams();
        //     urlencoded.append("country", country);

        //     const requestOptions = {
        //         method: "POST",
        //         headers: myHeaders,
        //         body: urlencoded,
        //         redirect: "follow",
        //     };

        //     // Fetch cities based on the selected country
        //     fetch(
        //         "https://countriesnow.space/api/v0.1/countries/cities",
        //         requestOptions
        //     )
        //         .then((response) => response.json()) // Convert response to JSON
        //         .then((result) => {
        //             if (result.data && result.data.length > 0) {
        //                 this.cities = result.data; // Update cities array with the result
        //                 console.log(this.cities);
        //             } else {
        //                 this.cities = []; // Clear cities if no data is found
        //             }
        //         })
        //         .catch((error) => {
        //             console.log("error", error);
        //             this.cities = []; // Clear cities if an error occurs
        //         });
        // },
        getcities(country) {
            this.loading = true;
            if (!country) return;  // Exit if no country is selected

            // Set up the headers and request body
            const myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

            const urlencoded = new URLSearchParams();
            urlencoded.append("country", country);

            const requestOptions = {
                method: 'POST',
                headers: myHeaders,
                body: urlencoded,
                redirect: 'follow'
            };

            // Fetch states based on the selected country
            fetch("https://countriesnow.space/api/v0.1/countries/states", requestOptions)
                .then(response => response.json())  // Convert response to JSON
                .then(result => {
                    console.log("states countries", result);
                    if (result.data && result.data.states.length > 0) {
                        console.log("states ag countries", result.data);
                        this.cities = result.data.states.map(state => state.name); // Extract state names
                        this.loading = false;
                    } else {
                        this.cities = [];
                        this.loading = false;
                    }
                })
                .catch(error => {
                    console.log('error', error);
                    this.cities = [];  // Clear cities if an error occurs
                    this.loading = false;
                });
        },
        async handleTabClick(index, tabName) {
            this.activeTab = index; // Set the active tab
            switch (tabName) {
                case "Car Enthusiast":
                    await this.fetchFeaturedStoriesByType("carEnthusiast");
                    break;
                case "Car Garage":
                    await this.fetchFeaturedStoriesByType("carGarage");
                    break;
                case "Car Modification/Tunning Shop":
                    await this.fetchFeaturedStoriesByType("carModificationShop");
                    break;
                case "Car Club":
                    await this.fetchFeaturedStoriesByType("carClub");
                    break;
                case "Motorbike Enthusiast":
                    await this.fetchFeaturedStoriesByType("motorbikeEnthusiast");
                    break;
                case "Automotive Photographer":
                    await this.fetchFeaturedStoriesByType("automotivePhotographerast");
                    break;
                default:
                    console.warn("Unknown tab name");
                    break;
            }
        },
        // async fetchFeaturedStories() {
        //     try {
        //         const response = await fetch('https://buzzwaretech.com/adminrev/api/featurestores');
        //         const data = await response.json();

        //         if (data.success) {
        //             // Parse the images field from JSON string to an array
        //             const featured = data.featured;
        //             featured.images = JSON.parse(featured.images); // Parse the images
        //             this.featuredStories = [featured]; // Store it in the featuredCars array
        //         }
        //     } catch (error) {
        //         console.error('Error fetching featured stories:', error);
        //     }
        // },
        // async fetchFeaturedStoriesByType(storyType) {
        //     try {
        //         const response = await fetch(
        //             `https://buzzwaretech.com/adminrev/api/featurestores/${storyType}`
        //         );
        //         const data = await response.json();

        //         if (data.success) {
        //             const featured = data.featured;
        //             featured.images = JSON.parse(featured.images); // Parse the images
        //             this.featuredStories = [featured]; // Store it in the featuredStories array
        //         }
        //     } catch (error) {
        //         console.error(
        //             `Error fetching featured stories for ${storyType}:`,
        //             error
        //         );
        //     }
        // },

        // async fetchFeaturedStoriesByType(storyType) {
        //     console.log(storyType)
        //     try {

        //         const response = await fetch(
        //             `https://backend.revvdout.com/api/stories/featurestores/${storyType}`
        //         );
        //         const data = await response.json();

        //         console.log("API Response:", data); // Debugging

        //         if (data.success && data.banner) {
        //             const featured = data.banner;
        //             featured.images = featured.images ? JSON.parse(featured.images) : []; // Ensure valid JSON parsing
        //             this.featuredStories = [featured]; // Store it in the featuredStories array
        //         } else {
        //             console.warn(`No featured stories found for ${storyType}`);
        //             this.featuredStories = []; // Reset if no data
        //             console.log("in else", this.featuredStories)
        //         }
        //     } catch (error) {

        //         this.featuredStories = []; // Reset if no data
        //         console.error(
        //             `Error fetching featured stories for ${storyType}:`,
        //             error
        //         );
        //         console.log("in error", this.featuredStories)
        //     }
        // }
        async fetchFeaturedStoriesByType(storyType) {
            console.log(storyType);
            try {
                const response = await http.get(`/stories/featurestores/${storyType}`);
                const data = response.data;

                console.log("API Response:", data); // Debugging

                if (data.success && data.banner) {
                    const featured = data.banner;
                    featured.images = featured.images ? JSON.parse(featured.images) : []; // Ensure valid JSON parsing
                    this.featuredStories = [featured]; // Store it in the featuredStories array
                } else {
                    console.warn(`No featured stories found for ${storyType}`);
                    this.featuredStories = []; // Reset if no data
                    console.log("in else", this.featuredStories);
                }
            } catch (error) {
                this.featuredStories = []; // Reset if no data
                console.error(`Error fetching featured stories for ${storyType}:`, error);
                console.log("in error", this.featuredStories);
            }
        }
        ,
        async fetchCarEnthusiastStories() {
            await this.fetchFeaturedStoriesByType("carEnthusiast");
        },

        toggleOverlayOpacity() {
            // Toggle the class by changing the boolean value
            this.isOverlayTransparent = !this.isOverlayTransparent;
        },
        toggleOpeng() {
            console.log("opneg");
            this.isOpeng = !this.isOpeng;
        },
        GenfilterOption() {
            const query = this.formData.year.toLowerCase();
            if (query === "") {
                this.GenfilteredOptions = this.dataGy;
            } else {
                this.GenfilteredOptions = this.dataGy.filter((option) =>
                    option.production_years.toLowerCase().includes(query)
                );
                console.log(this.GenfilteredOptions);
            }
        },

        filterMakeOptions() {
            this.modelfilteredOptions = [];
            // this.selectedData = "";
            this.formData.year = "";
            this.smodel = "";
            const query = this.formData.make.toLowerCase();
            if (query === "") {
                this.makefilteredOptions = this.makes;
            } else {
                this.makefilteredOptions = this.makes.filter((option) =>
                    option.toLowerCase().includes(query)
                );
            }
        },
        filterModelOptions() {
            // this.selectedData = ""
            this.formData.year = "";

            console.log(this.smodel);
            const query = this.formData.model.toLowerCase();

            if (query === "") {
                this.modelfilteredOptions = this.models;
            } else {
                this.modelfilteredOptions = this.models.filter(
                    (option) =>
                        option && option.model && option.model.toLowerCase().includes(query)
                );
            }
        },

        toggleDropdown() {
            this.isOpen = !this.isOpen;
        },
        toggleDropdownm() {
            this.isOpenm = !this.isOpenm;
        },
        toggleDropdownmo() {
            this.isOpenm = !this.isOpenm;
        },
        selectOption(option) {
            this.formData.make = option;
            this.isOpen = false;
            this.getModels();
            this.applyFilterCar();


        },
        selectOptionModel(option) {
            this.formData.model = option;
            this.isOpenm = false;
            this.getGenerations();
            this.applyFilterCar();
        },
        updateModels(value) {
            if (value) {
                this.productionYear = value.production_years;
                // this.selectedData = value.production_years
                this.formData.year = value.production_years;
                this.applyFilterCar();
            } else {
                this.productionYear = null;
            }
        },
        getData() {
            this.filterGenerations();
            this.getYears();
        },
        filterGenerations() {
            // Filter the generations based on input
            this.filteredGenerations = this.generations.filter((gen) =>
                gen.toLowerCase().includes(this.generation.toLowerCase())
            );
        },
        selectGeneration(option) {
            // Set the selected option
            this.generation = option;
            // Clear the filtered list
            this.filteredGenerations = [];
        },
        retrieveCars() {
            this.models = [];
            this.generations = [];
            this.productionYears = [];
            CarDataService.getAll()
                .then((response) => {
                    this.makes = response.data.map((item) => item.make);
                    // this.makefilteredOptions = response.data.map((item) => item.make);
                    this.makefilteredOptions = response.data
                        .map(item => item.make)
                        .filter(make => make && make.trim() !== "");
                    console.log(
                        "make are :",
                        response.data.map((item) => item.make)
                    );
                })
                .catch((e) => {
                    console.log(e);
                });
        },
        getModels() {
            console.log("get modals");
            this.formData.year = "";
            this.smodel = "";
            this.formData.model = "",
                this.generations = [];
            this.GenfilteredOptions = [];
            this.productionYears = [];
            if (this.formData.make == "") {
                this.formData.model = ""
                this.modelfilteredOptions = "";
            } else {
                CarDataService.getModels(this.formData.make)
                    .then((response) => {
                        this.models = response.data;
                        this.modelfilteredOptions = response.data;
                        console.log("modal filter options ", this.modelfilteredOptions);
                    })
                    .catch((e) => {
                        console.log(e);
                    });
            }
        },

        // getGenerations() {
        //     // console.log('in generation', "make", this.make, "modal", this.smodel);
        //     this.formData.year = "";
        //     CarDataService.getGenerations(this.formData.make, this.formData.model)
        //         .then((response) => {
        //             const data = response.data;
        //             console.log("data is", data);
        //             this.dataGy = data;

        //             this.GenfilteredOptions = data.filter((item) => {
        //                 return (
        //                     item.generation !== "" &&
        //                     item.generation !== "-" &&
        //                     item.generation !== "??" &&
        //                     item.generation !== "?"
        //                 );
        //             });

        //             this.generations = [
        //                 ...new Set(this.GenfilteredOptions.map((item) => item.generation)),
        //             ];
        //             this.productionYears = [
        //                 ...new Set(
        //                     this.GenfilteredOptions.map((item) => item.production_years)
        //                 ),
        //             ];
        //         })
        //         .catch((e) => {
        //             console.log(e);
        //         });
        // },
        getGenerations() {
            // Reset year selection
            this.formData.year = "";

            CarDataService.getGenerations(this.formData.make, this.formData.model)
                .then((response) => {
                    const data = response.data;
                    console.log("data is", data);
                    this.dataGy = data;

                    // Filter valid generations
                    this.GenfilteredOptions = data.filter((item) => (
                        item.generation !== "" &&
                        item.generation !== "-" &&
                        item.generation !== "??" &&
                        item.generation !== "?"
                    ));

                    // Get the current year
                    const currentYear = new Date().getFullYear();

                    // Replace "____" with the current year in production_years
                    this.GenfilteredOptions = this.GenfilteredOptions.map((item) => ({
                        ...item,
                        production_years: item.production_years.replace("____", currentYear)
                    }));

                    // Extract unique generations
                    this.generations = [...new Set(this.GenfilteredOptions.map((item) => item.generation))];

                    // Extract unique production years after replacement
                    this.productionYears = [...new Set(this.GenfilteredOptions.map((item) => item.production_years))];

                    console.log("Updated this.GenfilteredOptions", this.GenfilteredOptions);
                })
                .catch((e) => {
                    console.log(e);
                });
        }
        ,

        getYears() {
            this.productionYears = [];
            CommunityDataService.getFiltered(
                this.make,
                this.model,
                this.generation,
                this.productionYear
            )

                .then((response) => {
                    const data = response.data;

                    data.forEach((item) => {
                        if (
                            item.generation != "" &&
                            item.generation != "-" &&
                            item.generation != "??" &&
                            item.generation != "?"
                        ) {
                            this.generations.push(item.generation);

                            this.productionYears.push(item.production_years);
                        }
                    });
                    this.generations = [...new Set(this.generations)];
                    this.productionYears = [...new Set(this.productionYears)];
                })
                .catch((e) => {
                    console.log(e);
                });
        },

        closeModel() {
            // Hide the modal
            this.hideFilterModal();

        },
        hideFilterModal() {
            // Hide the modal using the ref
            // const modal = this.$refs.modalRef;
            // if (modal) {
            //   modal.classList.remove("show");
            //   modal.style.display = "none";
            // }

            // this.isModalOpen = false
            this.isModalOpen = true;
        },

        handleOutsideClick(event) {
            const modal = this.$refs.modalRef;
            if (modal && !modal.contains(event.target)) {
                // If the click occurred outside the modal, hide it
                this.hideFilterModal();
            }
        },
        submitFilter() {
            if (this.make == "" && this.model == "") {
                this.hideFilterModal();
                this.isModal2Open = true;
            } else this.hideFilterModal();
        },
        showFilterModal() {
            this.isModalOpen = true;
        },

        // applyFilter(selectedCountry, selectedCity, filterobj) {
        //     // Logic to filter carGarage based on selectedCountry and selectedCity
        //     console.log("filterobj", filterobj)
        //     // Example filter logic:
        //     const filteredCars = filterobj.filter(car => {
        //         const matchesCountry = selectedCountry ? car.country === selectedCountry : true;
        //         const matchesCity = selectedCity ? car.city === selectedCity : true;
        //         return matchesCountry && matchesCity;
        //     });

        //     // Update the filteredCars list or perform any other action with the filtered data
        //     console.log('Filtered Cars:', filteredCars);

        //     // You can assign this.filteredCars or perform any further operations
        //     filterobj = filteredCars;
        //     console.log("after filter", filterobj)
        // },

        applyFilterCarGarageSearch() {
            console.log("in apply filter story");

            // Logic to filter stories based on the search input
            if (!this.search) {
                this.fetchStories(); // Fetch original data if no filters are applied
            } else {
                // Make a copy of the original stories before filtering
                const filteredStories = this.filteredStories.CarGarage.filter(
                    (story) => {
                        // Filter based on story name (case-insensitive search)
                        return story.story_name
                            .toLowerCase()
                            .includes(this.search.toLowerCase());
                    }
                );

                // Update the filteredStories list, triggering reactivity
                this.filteredStories.CarGarage = filteredStories;

                console.log("Filtered Stories:", this.filteredStories);
                console.log("Original Stories:", this.originalStories);
            }
        },
        applyFilterCarModificationTunningShopSearch() {
            console.log("in apply filter story");

            // Logic to filter stories based on the search input
            if (!this.search) {
                this.fetchStories(); // Fetch original data if no filters are applied
            } else {
                // Make a copy of the original stories before filtering
                const filteredStories =
                    this.filteredStories.CarModificationTunningShop.filter((story) => {
                        // Filter based on story name (case-insensitive search)
                        return story.story_name
                            .toLowerCase()
                            .includes(this.search.toLowerCase());
                    });

                // Update the filteredStories list, triggering reactivity
                this.filteredStories.CarModificationTunningShop = filteredStories;

                console.log("Filtered Stories:", this.filteredStories);
                console.log("Original Stories:", this.originalStories);
            }
        },

        applyFilterCarClubSearch() {
            console.log("in apply filter story");

            // Logic to filter stories based on the search input
            if (!this.search) {
                this.fetchStories(); // Fetch original data if no filters are applied
            } else {
                // Make a copy of the original stories before filtering
                const filteredStories = this.filteredStories.CarClub.filter((story) => {
                    // Filter based on story name (case-insensitive search)
                    return story.story_name
                        .toLowerCase()
                        .includes(this.search.toLowerCase());
                });

                // Update the filteredStories list, triggering reactivity
                this.filteredStories.CarClub = filteredStories;

                console.log("Filtered Stories:", this.filteredStories);
                console.log("Original Stories:", this.originalStories);
            }
        },
        applyFilterMotorbikeEnthusiastSearch() {
            console.log("in apply filter story");

            // Logic to filter stories based on the search input
            if (!this.search) {
                this.fetchStories(); // Fetch original data if no filters are applied
            } else {
                // Make a copy of the original stories before filtering
                const filteredStories = this.filteredStories.MotorbikeEnthusiast.filter(
                    (story) => {
                        // Filter based on story name (case-insensitive search)
                        return story.story_name
                            .toLowerCase()
                            .includes(this.search.toLowerCase());
                    }
                );

                // Update the filteredStories list, triggering reactivity
                this.filteredStories.MotorbikeEnthusiast = filteredStories;

                console.log("Filtered Stories:", this.filteredStories);
                console.log("Original Stories:", this.originalStories);
            }
        },

        applyFilterAutomotivePhotographerSearch() {
            console.log("in apply filter story");

            // Logic to filter stories based on the search input
            if (!this.search) {
                this.fetchStories(); // Fetch original data if no filters are applied
            } else {
                // Make a copy of the original stories before filtering
                const filteredStories =
                    this.filteredStories.AutomotivePhotographer.filter((story) => {
                        // Filter based on story name (case-insensitive search)
                        return story.story_name
                            .toLowerCase()
                            .includes(this.search.toLowerCase());
                    });

                // Update the filteredStories list, triggering reactivity
                this.filteredStories.AutomotivePhotographer = filteredStories;

                console.log("Filtered Stories:", this.filteredStories);
                console.log("Original Stories:", this.originalStories);
            }
        },

        applyFiltercarSearch() {
            console.log("in apply filter story");

            // Logic to filter stories based on the search input
            if (!this.search) {
                this.fetchStories(); // Fetch original data if no filters are applied
            } else {
                // Make a copy of the original stories before filtering
                const filteredStories = this.filteredStories.CarEnthusiast.filter(
                    (story) => {
                        // Filter based on story name (case-insensitive search)
                        return story.make.toLowerCase().includes(this.search.toLowerCase());
                    }
                );

                // Update the filteredStories list, triggering reactivity
                this.filteredStories.CarEnthusiast = filteredStories;

                console.log("Filtered Stories:", this.filteredStories);
                console.log("Original Stories:", this.originalStories);
            }
        },
        applyFilterCar() {
            console.log("in apply filter car");
            console.log("make", this.formData.make)
            // Logic to filter carGarage based on formData.make, formData.model, formData.year
            if (!this.formData.make) {

                this.formData.model = ""
                this.formData.year = ""
                console.log("in if make")
            }
            if (!this.formData.make && !this.formData.model && !this.formData.year) {
                this.fetchStories(); // Fetch original data if no filters are applied
            } else {
                this.filteredStories.CarEnthusiast = this.originalCars.CarEnthusiast;
                const filteredCars = this.filteredStories.CarEnthusiast.filter(
                    (car) => {
                        const matchesMake = this.formData.make
                            ? car.make === this.formData.make
                            : true;
                        const matchesModel = this.formData.model
                            ? car.model === this.formData.model
                            : true;
                        const matchesYear = this.formData.year
                            ? car.year === this.formData.year
                            : true;

                        return matchesMake && matchesModel && matchesYear;
                    }
                );

                // Update the filteredCars list, triggering reactivity
                this.filteredStories.CarEnthusiast = filteredCars;

                console.log("Filtered Cars:", this.filteredStories.CarEnthusiast);

                console.log("origional Cars:", this.originalCars.CarEnthusiast);
            }
        },
        applyFilter(selectedCountry, selectedCity) {
            console.log(selectedCountry, selectedCity);
            // Logic to filter carGarage based on selectedCountry and selectedCity
            this.getcities(selectedCountry);

            if (selectedCity == "" && selectedCountry == "") {
                this.fetchStories();
            } else {
                this.filteredStories.CarEnthusiast = this.originalCars.CarEnthusiast;
                const filteredCars = this.filteredStories.CarGarage.filter((car) => {
                    const matchesCountry = selectedCountry
                        ? car.country === selectedCountry
                        : true;
                    const matchesCity = selectedCity ? car.city === selectedCity : true;
                    return matchesCountry && matchesCity;
                });

                // Update the filteredCars list, triggering reactivity
                this.filteredStories.CarGarage = filteredCars;

                console.log("Filtered Cars:", this.filteredStories.CarGarage);

                console.log("origional Cars:", this.originalCars.CarGarage);
            }
        },
        applyFilterShop(selectedCountry, selectedCity) {
            this.getcities(selectedCountry);
            this.filteredStories.CarEnthusiast = this.originalCars.CarEnthusiast;
            console.log(selectedCountry, selectedCity);
            // Logic to filter carGarage based on selectedCountry and selectedCity
            if (selectedCity == "" && selectedCountry == "") {
                this.fetchStories();
            } else {
                const filteredCars =
                    this.filteredStories.CarModificationTunningShop.filter((car) => {
                        const matchesCountry = selectedCountry
                            ? car.country === selectedCountry
                            : true;
                        const matchesCity = selectedCity ? car.city === selectedCity : true;
                        return matchesCountry && matchesCity;
                    });

                // Update the filteredCars list, triggering reactivity
                this.filteredStories.CarModificationTunningShop = filteredCars;

                console.log(
                    "Filtered Cars:",
                    this.filteredStories.CarModificationTunningShop
                );

                console.log(
                    "origional Cars:",
                    this.originalCars.CarModificationTunningShop
                );
            }
        },
        applyFilterClub(selectedCountry, selectedCity) {
            console.log(selectedCountry, selectedCity);
            this.getcities(selectedCountry);
            // Logic to filter carGarage based on selectedCountry and selectedCity
            if (selectedCity == "" && selectedCountry == "") {
                this.fetchStories();
            } else {
                this.filteredStories.CarEnthusiast = this.originalCars.CarEnthusiast;
                const filteredCars = this.filteredStories.CarClub.filter((car) => {
                    const matchesCountry = selectedCountry
                        ? car.country === selectedCountry
                        : true;
                    const matchesCity = selectedCity ? car.city === selectedCity : true;
                    return matchesCountry && matchesCity;
                });

                // Update the filteredCars list, triggering reactivity
                this.filteredStories.CarClub = filteredCars;
            }
        },
        applyFilterBike(selectedCountry, selectedCity) {
            console.log(selectedCountry, selectedCity);
            this.getcities(selectedCountry);
            // Logic to filter carGarage based on selectedCountry and selectedCity
            if (selectedCity == "" && selectedCountry == "") {
                this.fetchStories();
            } else {
                this.filteredStories.CarEnthusiast = this.originalCars.CarEnthusiast;
                const filteredCars = this.filteredStories.MotorbikeEnthusiast.filter(
                    (car) => {
                        const matchesCountry = selectedCountry
                            ? car.country === selectedCountry
                            : true;
                        const matchesCity = selectedCity ? car.city === selectedCity : true;
                        return matchesCountry && matchesCity;
                    }
                );

                // Update the filteredCars list, triggering reactivity
                this.filteredStories.MotorbikeEnthusiast = filteredCars;
            }
        },
        applyFilterAuto(selectedCountry, selectedCity) {
            console.log(selectedCountry, selectedCity);
            this.getcities(selectedCountry);
            // Logic to filter carGarage based on selectedCountry and selectedCity
            if (selectedCity == "" && selectedCountry == "") {
                this.fetchStories();
            } else {
                this.filteredStories.CarEnthusiast = this.originalCars.CarEnthusiast;
                const filteredCars = this.filteredStories.AutomotivePhotographer.filter(
                    (car) => {
                        const matchesCountry = selectedCountry
                            ? car.country === selectedCountry
                            : true;
                        const matchesCity = selectedCity ? car.city === selectedCity : true;
                        return matchesCountry && matchesCity;
                    }
                );

                // Update the filteredCars list, triggering reactivity
                this.filteredStories.AutomotivePhotographer = filteredCars;
            }
        },
        parsedImages(images) {
            try {
                return typeof images === "string" ? JSON.parse(images) : images;
            } catch (e) {
                console.error("Error parsing images", e);
                return [];
            }
        },

        //before link updating its working

        // fetchStories() {
        //     axios
        //         .get("https://king-prawn-app-3rw3o.ondigitalocean.app/api/stories")
        //         .then((response) => {
        //             console.log("stories", response.data);
        //             const stories = response.data;

        //             // Filter stories by their type and assign them to respective objects
        //             this.filteredStories.CarEnthusiast = stories.filter(
        //                 (story) => story.story_type === "carEnthusiast"
        //             );
        //             this.filteredStories.CarGarage = stories.filter(
        //                 (story) => story.story_type === "carGarage"
        //             );
        //             this.filteredStories.CarModificationTunningShop = stories.filter(
        //                 (story) => story.story_type === "carModificationShop"
        //             );
        //             this.filteredStories.CarClub = stories.filter(
        //                 (story) => story.story_type === "carClub"
        //             );
        //             this.filteredStories.MotorbikeEnthusiast = stories.filter(
        //                 (story) => story.story_type === "motorbikeEnthusiast"
        //             );
        //             this.filteredStories.AutomotivePhotographer = stories.filter(
        //                 (story) => story.story_type === "automotivePhotographerast"
        //             );

        //             console.log("Filtered stories:", this.filteredStories);
        //             // this.originalCars = this.filteredStories
        //             this.originalCars.CarEnthusiast = stories.filter(
        //                 (story) => story.story_type === "carEnthusiast"
        //             );
        //             this.originalCars.CarGarage = stories.filter(
        //                 (story) => story.story_type === "carGarage"
        //             );
        //             this.originalCars.CarModificationTunningShop = stories.filter(
        //                 (story) => story.story_type === "carModificationShop"
        //             );
        //             this.originalCars.CarClub = stories.filter(
        //                 (story) => story.story_type === "carClub"
        //             );
        //             this.originalCars.MotorbikeEnthusiast = stories.filter(
        //                 (story) => story.story_type === "motorbikeEnthusiast"
        //             );
        //             this.originalCars.AutomotivePhotographer = stories.filter(
        //                 (story) => story.story_type === "automotivePhotographerast"
        //             );
        //         })
        //         .catch((error) => {
        //             console.error("Error fetching stories:", error);
        //         });
        // },
        fetchStories() {
            API.get("/stories") // ✅ Use the pre-configured base URL
                .then((response) => {
                    console.log("📖 Stories fetched:", response.data);

                    const stories = response.data;
                    const storyTypes = {
                        CarEnthusiast: "carEnthusiast",
                        CarGarage: "carGarage",
                        CarModificationTunningShop: "carModificationShop",
                        CarClub: "carClub",
                        MotorbikeEnthusiast: "motorbikeEnthusiast",
                        AutomotivePhotographer: "automotivePhotographerast" // ✅ Fixed typo
                    };

                    // Reset the filtered and original stories
                    this.filteredStories = {};
                    this.originalCars = {};

                    // Assign filtered stories dynamically
                    Object.keys(storyTypes).forEach((key) => {
                        this.filteredStories[key] = stories.filter(
                            (story) => story.story_type === storyTypes[key]
                        );
                        this.originalCars[key] = [...this.filteredStories[key]];
                    });

                    console.log("✅ Filtered Stories:", this.filteredStories);
                })
                .catch((error) => {
                    console.error("❌ Error fetching stories:", error);
                });
        },
        openModal(index) {
            console.log("Modal opened for car index:", index);
            this.activeCarIndex = index; // Set the active index to the clicked car
            this.showFooter = false;

            this.activeCarIndex = index;
            this.isModalOpen = true;
        },
        openModalFe() {
            this.isModalOpenFe = true;
            this.showFooter = false;
        },
        modalCloseFe() {
            this.isModalOpenFe = false
            this.showFooter = true;
        },
        modalClose() {
            console.log("outmodal");
            this.isModalOpen = false;
            this.activeCarIndex = null; // Reset the active car index
            this.showFooter = true;
        },
        // getImage(imagePath, index) {
        //     return this.activeTab === index
        //         ? imagePath.replace("white", "")
        //         : imagePath;
        // },
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
    },
};
</script>

<style scoped>
.csicon {
    background: none !important;
    border: none !important;

}

.main-slider {
    align-items: start;
}

.carCard {
    background: #1a202c !important;
}

.swiper {
    width: 270px;
    height: fit-content !important;
}

.swiper-slide img {
    width: 200px !important;
    height: 110px !important;

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
.z-0 {
    z-index: 0 !important;
}

.modal {
    z-index: 1050 !important;
}

.modal-content {
    height: 500px;
    overflow-y: auto;
    overflow-x: hidden
}

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
        /* margin-top: 4rem !important; */

    }

    .modal-dialog {
        padding-top: 5rem !important;
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

.card-sorting-content px-1 py-2 {
    z-index: 0;
}

.card-sorting-content {
    cursor: pointer;
}

.signin-btnli {
    cursor: pointer;
}

form-select {
    display: block;
    width: 100%;
    max-width: 920px;
    height: 40px;
    padding: 0.375rem 2.25rem 0.375rem 1.75rem;
    -moz-padding-start: calc(0.75rem - 3px);

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

.alertbg {
    background: #ff7a00;
    color: #fff;
}

.getAll {
    background: #5d3327 !important;
    color: #fff;
}

.genCard .singleGen {
    cursor: pointer;
    marker: none;
    width: 100%;
}

.genCard .singleGen:hover {
    background: #f95f19;
    color: #fff;
}

.borderBr {
    border: 1px solid #f95f19;
    width: 100% !important;
    border-radius: 10px;
}

/* new */

.gap-8 {
    gap: 16rem !important;
}

.customSelect {
    width: 100%;
    padding: 1px;
}

.customSelect input {
    width: 100% !important;
    max-width: 100% !important;
    border: 0px transparent !important;
}

.selected-option {
    width: 100%;
    padding: 5px;
    border: 1px solid #ccc;
    border-radius: 4px;
}

.options-list {
    position: absolute;
    /* top: 100%;
  left: 0; */
    width: 100%;
    background-color: #031726;

    border-top: none;
    border-radius: 0 0 4px 4px;
    list-style-type: none;
    padding: 0;
    margin: 0;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    /* min-height: fit-content; */
    max-height: 300px !important;
    overflow-y: scroll;
    color: #fff;
    transition: height 0.5s ease-in-out;
    z-index: 9999;
}

.options-list li {
    padding: 8px;
    cursor: pointer;
    display: flex;
    justify-content: start;
}

.options-list li:hover {
    background-color: #083f68;
}

.z1o {
    z-index: 0;
}

.z1o2 {
    z-index: 0;
}

@media (max-width: 768px) {
    .z1o2 {
        z-index: 0;
    }

    .options-list {
        position: static;
    }
}

.truncate {
    width: 40%;
    white-space: nowrap;
    /* Prevent the text from wrapping to a new line */
    overflow: hidden;
    /* Hide the overflowed text */
    text-overflow: ellipsis;
    /* Display an ellipsis (...) at the end */
}

.truncate2 {
    width: 30%;
    white-space: nowrap;
    /* Prevent the text from wrapping to a new line */
    overflow: hidden;
    /* Hide the overflowed text */
    text-overflow: ellipsis;
    /* Display an ellipsis (...) at the end */
}

.swiper-slide {
    height: fit-content !important;
}

.swiper-wrapper {
    height: fit-content !important;
}

.modalswipper {
    width: 100% !important;
    height: 250px !important;
    overflow: visible !important;
}

.modalswipper .swiper-slide img {
    width: 70% !important;
    max-width: 70% !important;
    height: 250px !important;

    border-radius: 12px !important;
}

.overlay {
    transition: opacity 0.3s ease-in-out;
    /* height: 150px;
    overflow-y: auto; */
}

.opacity-05 {
    opacity: 0.2 !important;
}

.swiper-pagination-bullet {
    background: #ffff !important;
    opacity: 1 !important;
}

.swiper-pagination-bullet.swiper-pagination-bullet-active {
    background: #f95f19 !important;
}

.swiper-horizontal>.swiper-pagination-bullets,
.swiper-pagination-bullets.swiper-pagination-horizontal,
.swiper-pagination-custom,
.swiper-pagination-fraction {
    top: 103% !important;
}

.btn-active .signin-btnli {
    background: rgba(249, 95, 25, 0.3) !important;
}


.signin-btnli {
    background: rgba(77, 85, 97, 0.7) !important;
}

.btn-filter {
    background: rgba(249, 95, 25, 0.3) !important;
}

.cp {
    cursor: pointer !important;
}

@media (max-width: 786px) {
    .cp {
        width: 25% !important;
    }

    .truncate {
        width: 50% !important;
    }

    .filter-image-div {
        display: none;
    }

    .list-item-user {
        width: 100% !important;
    }
}

.fontsiz {
    font-size: 26px !important;
}

.instaIcon {
    width: 60px;
}

.tranc {
    /* width: 300px !important; */
    display: -webkit-box;
    /* Use WebKit for browser compatibility */
    -webkit-box-orient: vertical;
    /* Aligns the box in vertical orientation */
    -webkit-line-clampvm: 2;
    /* Limits the number of lines to 2 */
    overflow: hidden;
    /* Hides the overflow text */
    text-overflow: ellipsis;
    /* Adds ellipsis (...) at the end */
    max-height: 1.8em;
    /* Ensures only two lines are shown (line-height * 2) */
    line-height: 1.5em;
    /* Set the desired line height */
}

@media(max-width:350px) {
    .tranc {
        width: 250px !important
    }
}

.viewer-toolbar>ul>li {
    display: flex;
    justify-content: center;
    align-items: center;
    background: #f95f19 !important;
    height: 32px !important;
    width: 32px !important;

}

.text-orange {
    color: #f95f19 !important;
}

.offcanvas {
    background: #031726;
    color: #fff
}

@media(max-width:992px) {
    .card-sorting-content {
        flex-wrap: wrap !important;
        justify-content: center
    }

    .card-content-car {
        width: 100%
    }

}

.card-content-car {
    width: 100%;
    overflow: hidden
}

.card-content-car h4 {
    font-size: 26px
}

.card-content-car p {
    font-size: 14px
}

.btn-filter {
    border: none !important
}
</style>
