<template>

  <!-- <h1 class="text-white">login State: {{ isLogin }} {{ typeof (isLogin) }}</h1> -->
  <Header :activeSection="activeSection" @moveToSection="moveToSection" />
  <div class="container-fluid">
    <full-page id="fullpage" ref="fullpage" :options="fullpageOptions" @sectionChange="updateActiveSection">
      <div class="section slide-in-backward-3d" ref="section" data-section-id="home">
        <div class="banner-content">
          <!-- <h1 class=" main-title">{{ $t('changingTheCarWorld') }}</h1> -->
          <h1 class=" main-title">Changing the <span>Car</span> World</h1>
          <!-- <p class="banner-para mb-0">
            {{ $t('ultimateHub') }} {{ $t('oneStopShop') }}

          </p> -->
          <p class="banner-para mb-4">
            MOD THE DRIVE , FEEL ALIVE .

          </p>
        </div>

        <div class="container-fluid">
          <div class="main-content-home1">


            <div class="logo-R-div flex-column d-flex justify-content-center align-items-center">
              <!-- <img class="logo-R" src="@/assets/images/Group888.png" alt="R" /> -->
              <!-- <h3 class="text-white mb-0 mt-3">Launching Soon</h3> -->
            </div>


            <div class="list-item-btn position-relative w-fit libtn" style="width:fit-contet !important">
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
              <router-link to="/offer" class="signin-btnli">
                {{ $t('startEngine') }}
              </router-link>
              <span class="border-bottom-btn border-left-btn position-absolute">
                <img src="@/assets/images/Group11.png" class="img-border position-absolute" alt="" />
              </span>
              <span class="border-bottom-btn position-absolute">
                <img src="@/assets/images/Path473.png" class="img-border position-absolute" alt="" />
              </span>
            </div>

          </div>
        </div>
        <!-- Custom Navigation -->
        <nav class="custom-navigation c-home d-block d-md-none">
          <button class="position-relative pbutton d-flex align-items-start gap-2"
            :class="{ active: activeSection === 'home' }" @click="goToSection('home')">
            <div class="d-flex flex-column gap-1">
              <span class="progress"></span>
              <!-- <span class="progress"></span>
              <span class="progress"></span>
              <span class="progress"></span> -->
            </div> Home Page
          </button>
          <button class="position-relative  d-flex align-items-start gap-2"
            :class="{ active: activeSection === 'featured' }" @click="goToSection('featured')">
            <div class="d-flex flex-column gap-1">
              <span class="progress"></span>
              <!-- <span class="progress"></span>
              <span class="progress"></span>
              <span class="progress"></span> -->
            </div> Featured Story
          </button>
          <button class="position-relative  d-flex align-items-start gap-2"
            :class="{ active: activeSection === 'shareStory' }" @click="goToSection('shareStory')">
            <div class="d-flex flex-column gap-1 ">
              <span class="progress"></span>
              <!-- <span class="progress"></span>
              <span class="progress"></span>
              <span class="progress"></span> -->
            </div> Share Your Story
          </button>
          <button class="position-relative  d-flex align-items-start gap-2"
            :class="{ active: activeSection === 'aboutUs' }" @click="goToSection('aboutUs')">
            <div class="d-flex flex-column gap-1">
              <span class="progress"></span>
              <!-- <span class="progress"></span>
              <span class="progress"></span>
              <span class="progress"></span> -->
            </div> About Us
          </button>
        </nav>

      </div>
      <div class="section " ref="section" data-section-id="featured">
        <div class="container-fluid">
          <div class="row">
            <div class="col-12 col-md-12 col-lg-12 col-xl-12 mb-4 position-relative">
              <div class="cardOverlay d-flex justify-content-start align-items-center flex-column pt-4 d-none">
                <img src="../../public/images/2.png">
              </div>
              <!-- Content -->

              <router-link class="carContent row" to="/banner" style="cursor:pointer">
                <div class="col-md-5">
                  <h5 class="h5-title text-capitalize mb-4">{{ $t('Featured') }} <span class="coloror">{{ $t('Story')
                      }}</span></h5>
                  <div class="">
                    <img :src="'https://king-prawn-app-3rw3o.ondigitalocean.app/stories/' + bannerStories[0].images[0]"
                      class="img-fluid" alt="car" v-if="bannerStories[0]?.images.length > 0" />
                  </div>
                </div>
                <div class="col-md-7">
                  <div class="car-content-desc">
                    <h6 class="car-content-title coloror">{{ bannerStories[0]?.story_name }}</h6>
                    <small class="car-content-link ">{{ bannerStories[0]?.social_media }}</small>
                    <p class="car-content-para">Tell us your car story togather</p>
                    <p class="car-content-para tranc" v-if="bannerStories[0]?.story != ''">
                      {{ bannerStories[0]?.story }}
                    </p>
                    <!-- <p class="car-content-para">Can you share with us any memorable stories or adventures you’ve had with
                    your car that stands out the most?</p>
                  <p class="car-content-para tranc" v-if="bannerStories[0]?.memorable != ''">
                    {{ bannerStories[0]?.memorable }}
                  </p> -->

                  </div>
                </div>


              </router-link>

              <!-- <div class="footer-allDetails">
                <router-link class="viewall-content" to="/stories">
                  {{ $t('viewAllStories') }}
                </router-link>
              </div> -->


            </div>

          </div>
        </div>
        <nav class="custom-navigation c-feature d-block d-md-none">
          <button class="position-relative  d-flex align-items-start gap-2"
            :class="{ active: activeSection === 'home' }" @click="goToSection('home')">
            <div class="d-flex flex-column gap-1">
              <span class="progress"></span>
              <!-- <span class="progress"></span>
              <span class="progress"></span>
              <span class="progress"></span> -->
            </div> Home Page
          </button>
          <button class="position-relative  d-flex align-items-start gap-2"
            :class="{ active: activeSection === 'featured' }" @click="goToSection('featured')">
            <div class="d-flex flex-column gap-1">
              <span class="progress"></span>
              <!-- <span class="progress"></span>
              <span class="progress"></span>
              <span class="progress"></span> -->
            </div> Featured Story
          </button>
          <button class="position-relative  d-flex align-items-start gap-2"
            :class="{ active: activeSection === 'shareStory' }" @click="goToSection('shareStory')">
            <div class="d-flex flex-column gap-1">
              <span class="progress"></span>
              <!-- <span class="progress"></span>
              <span class="progress"></span>
              <span class="progress"></span> -->
            </div> Share Your Story
          </button>
          <button class="position-relative d-flex align-items-start gap-2"
            :class="{ active: activeSection === 'aboutUs' }" @click="goToSection('aboutUs')">
            <div class="d-flex flex-column gap-1">
              <span class="progress"></span>
              <!-- <span class="progress"></span>
              <span class="progress"></span>
              <span class="progress"></span> -->
            </div> About Us
          </button>
        </nav>
      </div>
      <div class="section" ref="section" data-section-id="shareStory">
        <div class="container-fluid px-md-5">


          <div class="form-content-home1">
            <!-- action="#" method="POST" data-bs-toggle="modal" -->
            <!-- @submit.prevent="retrieveCommunities" -->
            <form id="subscribe-form" @submit.prevent="SubmitStory">
              <h2 class="form-title">
                {{ $t('Share your story ') }}
                <span class="form-span">{{ $t('Now') }} !</span>
              </h2>
              <div class="row">
                <div class="col-md-3 p-0">

                  <label for="storyType" class="form-label">Story Type</label>
                  <select id="storyType" class="form-control form-select form-input" v-model="selectedStoryType"
                    required @change="handleName">

                    <option value="carEnthusiast">Car Enthusiast</option>
                    <option value="carGarage">Car Garage</option>
                    <option value="carModificationShop">Car Modification/Tuning Shop</option>
                    <option value="carClub">Car Club</option>
                    <option value="motorbikeEnthusiast">Motorbike Enthusiast</option>
                    <option value="automotivePhotographerast">Automotive Photographer</option>

                  </select>

                </div>
                <div class="col-md-5" v-show="selectedStoryType !== 'carEnthusiast' && selectedStoryType">

                  <label for="country" class="form-label">Country</label>
                  <!-- <input type="text" id="country" class="form-control" placeholder="Enter Country"
v-model="formData.country"> -->
                  <select id="country" class="form-select form-control form-input filter-select"
                    v-model="formData.country" @change="getcities(formData.country)">
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
                <div class="col-md-4" v-show="selectedStoryType !== 'carEnthusiast' && selectedStoryType">

                  <label for="country" class="form-label">City</label>
                  <!-- <input type="text" id="country" class="form-control" placeholder="Enter City" v-model="formData.city"> -->

                  <!-- City Select -->
                  <select id="city" class="form-select form-control form-input filter-select" v-model="formData.city">
                    <option selected value="">City</option>
                    <option v-for="city in cities" :key="city" :value="city">{{ city }}</option>
                  </select>
                </div>
                <div class="col-md-12 p-0" id="first"
                  v-show="selectedStoryType !== 'carEnthusiast' && selectedStoryType">
                  <div class="row">

                    <div class="col-md-6">
                      <label for="storyHistory" class="form-label">Tell us about your {{ shopName }}</label>
                      <textarea id="storyHistory" class="form-control" rows="4"
                        placeholder="Describe your story and history" v-model="formData.storyHistory"></textarea>
                    </div>
                    <div class="   col-md-6">
                      <label for="memorableStories" class="form-label">Can you tell us any memorable stories or
                        adventures
                        you’ve
                        had that stands out
                        the most?</label>
                      <textarea id="memorableStories" class="form-control" rows="4"
                        placeholder="Share your memorable stories" v-model="formData.adventureStory"></textarea>
                    </div>
                    <div class="col-md-6">
                      <label for="storyName" class="form-label">What is the name of your story that you would like to
                        choose?</label>
                      <textarea id="storyName" class="form-control" placeholder="Enter Story Name"
                        v-model="formData.storyName"></textarea>
                    </div>
                    <div class="col-md-6">
                      <label for="link" class="form-label">Add Instagram or Website Link</label>
                      <input type="url" id="link" class="form-control" placeholder="Enter Instagram or Website Link"
                        v-model="formData.url">
                    </div>
                    <div class="col-md-2">
                      <label for="city" class="form-label">Upload Pictures Max 8</label>

                      <!-- <input type="file" id="storyImages" name="storyImages" class="form-control form-input d-none"
              accept=".jpg,.png,.jpeg" multiple v-on:change="validateFiles" @change="handleFileUpload" /> -->
                      <input type="file" id="storyImages" name="storyImages" class="form-control form-input d-none"
                        accept=".jpg,.png,.jpeg" multiple v-on:change="validateFiles" @change="openImageModal" />
                      <div class="list-item-btn position-relative submit-btn-div m-0 topN35">
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
                        <label for="storyImages" class="signin-btnli submitNow" id="submit-button">
                          Choose Images
                        </label>
                        <span class="border-bottom-btn border-left-btn position-absolute">
                          <img src="@/assets/images/Group11.png" class="img-border position-absolute" alt="" />
                        </span>
                        <span class="border-bottom-btn position-absolute">
                          <img src="@/assets/images/Path473.png" class="img-border position-absolute" alt="" />
                        </span>
                      </div>

                    </div>
                    <div class="col-md-2">
                      <label for="city" class="form-label"></label>

                      <div class="list-item-btn position-relative submit-btn-div">
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
                        <button type="submit" class="signin-btnli submitNow" id="submit-button">
                          {{ $t('submitNow') }}
                        </button>
                        <span class="border-bottom-btn border-left-btn position-absolute">
                          <img src="@/assets/images/Group11.png" class="img-border position-absolute" alt="" />
                        </span>
                        <span class="border-bottom-btn position-absolute">
                          <img src="@/assets/images/Path473.png" class="img-border position-absolute" alt="" />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-3 z-3" v-show="selectedStoryType == 'carEnthusiast' && selectedStoryType">

                  <div class="customSelect position-relative" @blur="isOpen = false">
                    <label for="country" class="form-label">Make
                    </label>
                    <input type="text" class="form-select form-control form-input" v-model="formData.make"
                      :placeholder="$t('Select a Make')" @click="toggleDropdown" @input="filterMakeOptions"
                      @change="getModels">
                    <ul v-show="isOpen" class="options-list" v-if="makefilteredOptions != ''">
                      <li v-for="(option, index) in makefilteredOptions" :key="index" @click="selectOption(option)">
                        {{ option }}
                      </li>
                    </ul>
                    <ul v-else v-show="isOpen" class="options-list">

                    </ul>
                  </div>

                </div>
                <div class="col-md-3 z-3 " :class="{ 'z-2': isDropDModel, 'z1o2': !isDropDModel }"
                  v-show="selectedStoryType == 'carEnthusiast' && selectedStoryType">
                  <label for="country" class="form-label">Model
                  </label>
                  <div class="customSelect w-100 position-relative" @blur="isOpenm = false">
                    <input type="text" class=" form-select form-control form-input" v-model="formData.model"
                      :placeholder="$t('Select a Model')" @click.stop="toggleDropdownm" @focus="isOpen = false"
                      @input="filterModelOptions" @change="getModels" v-if="formData.make == ''" disabled>
                    <input type="text" class=" form-select form-control form-input" v-model="formData.model"
                      :placeholder="$t('Select a Model')" @click.stop="toggleDropdownm" @focus="DropDModel"
                      @input="filterModelOptions" @change="getModels" v-else>
                    <ul v-show="isOpenm" class="options-list" v-if="modelfilteredOptions.length > 0">
                      <li v-for="(option, index) in modelfilteredOptions" :key="index"
                        @click="selectOptionModel(option.model)">
                        {{ option.model }}
                      </li>
                    </ul>
                    <ul v-else v-show="isOpenm" class="options-list">

                    </ul>
                  </div>
                </div>
                <div class="col-md-3 z-3" :class="{ 'z-2': isDropDYear, 'z1o2': !isDropDYear }"
                  v-show="selectedStoryType == 'carEnthusiast' && selectedStoryType">
                  <label for="country" class="form-label">Production Year Generation
                  </label>
                  <div class="customSelect w-100 position-relative">
                    <input type="text" class="form-select form-control form-input"
                      :placeholder="$t('Production Years(Generation)')" @input="GenfilterOption" v-model="formData.year"
                      @click="toggleOpeng" v-if="formData.model == ''" disabled>
                    <input type="text" class="form-select form-control form-input"
                      :placeholder="$t('Production Years(Generation)')" @input="GenfilterOption" v-model="formData.year"
                      @click="toggleOpeng" v-else>
                    <ul v-show="isOpeng" class="options-list" v-if="GenfilteredOptions.length > 0">
                      <li v-for="(value, index) in GenfilteredOptions" :key="index"
                        @click="updateModels(value), this.isOpeng = false">
                        <!-- {{ value.production_years.split(' ')[0] }} ({{ value.production_years.split(' ')[1] }}) -->
                        {{ value.production_years.split(' ')[0] }}
                        <span v-if="value.production_years.split(' ')[1]">({{ value.production_years.split(' ')[1]
                          }})</span>
                      </li>
                    </ul>
                    <ul v-else v-show="isOpeng" class="options-list">

                    </ul>
                  </div>
                </div>
                <div class="col-md-12 p-0" id="second"
                  v-show="selectedStoryType == 'carEnthusiast' && selectedStoryType">
                  <div class="row z-0">

                    <div class="col-md-6 z1o">
                      <label for="name" class="form-label"> Tell us your car story together </label>
                      <textarea id="message" class="form-control form-input h-auto" name="message"
                        :placeholder="$t('Enter here')" v-model="formData.story" rows="2"></textarea>

                    </div>
                    <div class="col-md-6 z1o">
                      <label for="name" class="form-label"> Can you tell us about any modifications you made to your car
                        or any specific features ? </label>
                      <textarea id="message" class="form-control form-input h-auto" name="message"
                        :placeholder="$t('Enter here')" v-model="formData.modifications" rows="2"></textarea>

                    </div>
                    <div class="col-md-6 z1o">
                      <label for="email" class="form-label"> Can you share with us any memorable stories or adventures
                        you’ve
                        had
                        with your car that stands out the most? </label>
                      <textarea id="message" class="form-control form-input h-auto" name="message"
                        :placeholder="$t('Enter here')" v-model="formData.memorable" rows="2"></textarea>
                      <!-- Error message for Email -->
                      <!-- <p class="text-danger" v-if="!formData.email">{{ $t('enterEmailAddress') }}</p> -->
                      <!-- <p class="text-danger" v-else-if="!isEmailValid">Please enter a valid email address</p> -->
                    </div>
                    <div class="col-md-6 z1o">
                      <label for="phone" class="form-label"> If you could give advice to someone just starting their
                        journey
                        to
                        modify their car, what would it be and why?</label>
                      <textarea id="message" class="form-control form-input h-auto" name="message"
                        :placeholder="$t('Enter here')" v-model="formData.advice" rows="2"></textarea>
                    </div>
                    <div class="col-md-5 z1o ">
                      <label for="country" class="form-label"> What is the name of your story you would like to
                        choose?
                      </label>
                      <input type="tel" id="phone" name="phone" class="form-control form-input"
                        placeholder="I.e.Check out SG’s C63 black series build. " v-model="formData.story_name" />
                    </div>
                    <div class="col-md-3 z1o ">
                      <label for="message" class="form-label">Add Instagram link </label>
                      <input id="message" class="form-control form-input" name="message" :placeholder="$t('Enter here')"
                        rows="2" v-model="formData.social_media" />
                      <!-- Error message for Message -->
                      <!-- <p class="text-danger" v-if="!formData.message">{{ $t('enterMessage') }}.</p> -->
                    </div>
                    <div class="col-md-4  d-flex gap-3 align-items-center">
                      <div>
                        <label for="city" class="form-label">Upload Pictures Max 8</label>

                        <!-- <input type="file" id="storyImages" name="storyImages" class="form-control form-input d-none"
accept=".jpg,.png" multiple v-on:change="validateFiles" @change="handleFileUpload" /> -->
                        <input type="file" id="storyImages" name="storyImages" class="form-control form-input d-none"
                          accept=".jpg,.png,.jpeg" multiple v-on:change="validateFiles" @change="openImageModal" />
                        <div class="list-item-btn position-relative submit-btn-div m-0 topN35">
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
                          <label for="storyImages" class="signin-btnli submitNow" id="submit-button">
                            Choose Images
                          </label>
                          <span class="border-bottom-btn border-left-btn position-absolute">
                            <img src="@/assets/images/Group11.png" class="img-border position-absolute" alt="" />
                          </span>
                          <span class="border-bottom-btn position-absolute">
                            <img src="@/assets/images/Path473.png" class="img-border position-absolute" alt="" />
                          </span>
                        </div>
                      </div>

                      <div>
                        <label for="city" class="form-label "><span> </span></label>

                        <!-- <input type="file" id="storyImages" name="storyImages" class="form-control form-input d-none"
accept=".jpg,.png" multiple v-on:change="validateFiles" @change="handleFileUpload" /> -->
                        <input type="file" id="storyImages" name="storyImages" class="form-control form-input d-none"
                          accept=".jpg,.png,.jpeg" multiple v-on:change="validateFiles" @change="openImageModal" />
                        <div class="list-item-btn position-relative submit-btn-div m-0 topN35">
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
                          <button type="submit" class="signin-btnli submitNow">
                            submit
                          </button>
                          <span class="border-bottom-btn border-left-btn position-absolute">
                            <img src="@/assets/images/Group11.png" class="img-border position-absolute" alt="" />
                          </span>
                          <span class="border-bottom-btn position-absolute">
                            <img src="@/assets/images/Path473.png" class="img-border position-absolute" alt="" />
                          </span>
                        </div>
                      </div>
                      <!-- <div class="list-item-btn position-relative submit-btn-div">
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
                        <button type="submit" class="signin-btnli submitNow" id="submit-button">
                          {{ $t('submitNow') }}
                        </button>
                        <span class="border-bottom-btn border-left-btn position-absolute">
                          <img src="@/assets/images/Group11.png" class="img-border position-absolute" alt="" />
                        </span>
                        <span class="border-bottom-btn position-absolute">
                          <img src="@/assets/images/Path473.png" class="img-border position-absolute" alt="" />
                        </span>
                      </div> -->

                    </div>

                  </div>






                </div>
                <div class="col-md-12 my-1">
                  <div class="uploadedImages d-flex align-items-center gap-2 flex-wrap">

                    <div v-for="(file, index) in croppedImages" :key="index"
                      class="upImageArea d-flex justify-content-between position-relative align-items-center">
                      <span>{{ file }}</span>
                      <button type="button" class="btn btnRemv" @click="removeImage(index)">
                        <i class="fa-solid fa-xmark"></i>
                      </button>
                    </div>
                  </div>
                  <!-- workiing -->
                  <div class="draggable-area" v-if="croppedImages.length > 0">
                    <p class="Note"><strong>Note:</strong>Please place the image at the <strong>second(2) </strong>
                      index to
                      set it as the main image for your story.</p>
                    <div v-for="(image, index) in croppedImages" :key="index"
                      :class="['image-item', { 'mainImage': index === 1 }]" draggable="true"
                      @dragstart="onDragStart(index)" @dragover.prevent @drop="onDrop(index)">
                      <span class="image-number">{{ index + 1 }}</span>
                      <img :src="image.url" class="img-fluid" alt="Cropped Image Preview" />
                    </div>
                  </div>



                </div>

              </div>
            </form>
          </div>

          <nav class="custom-navigation c-story d-block d-md-none">
            <button class="position-relative d-flex align-items-start gap-2"
              :class="{ active: activeSection === 'home' }" @click="goToSection('home')">
              <div class="d-flex flex-column gap-1">
                <span class="progress"></span>
                <!-- <span class="progress"></span>
                <span class="progress"></span>
                <span class="progress"></span> -->
              </div> Home Page
            </button>
            <button class="position-relative d-flex align-items-start gap-2"
              :class="{ active: activeSection === 'featured' }" @click="goToSection('featured')">
              <div class="d-flex flex-column gap-1">
                <span class="progress"></span>
                <!-- <span class="progress"></span>
                <span class="progress"></span>
                <span class="progress"></span> -->
              </div> Featured Story
            </button>
            <button class="position-relative d-flex align-items-start gap-2"
              :class="{ active: activeSection === 'shareStory' }" @click="goToSection('shareStory')">
              <div class="d-flex flex-column gap-1">
                <span class="progress"></span>
                <!-- <span class="progress"></span>
                <span class="progress"></span>
                <span class="progress"></span> -->
              </div> Share Your Story
            </button>
            <button class="position-relative d-flex align-items-start gap-2"
              :class="{ active: activeSection === 'aboutUs' }" @click="goToSection('aboutUs')">
              <div class="d-flex flex-column gap-1">
                <span class="progress"></span>
                <!-- <span class="progress"></span>
                <span class="progress"></span>
                <span class="progress"></span> -->
              </div> About Us
            </button>
          </nav>
        </div>

      </div>

      <div class="section" ref="section" data-section-id="aboutUs">

        <div class="banner-content  boxAbout p-2 ">
          <!-- <h1 class="banner-title">{{ $t('Aboutus') }}</h1> -->
          <h1 class="form-title">About <span class="form-span">us</span></h1>

          <p class="banner-para ">We are a team of motor heads with fuel in our veins and nitrous igniting our
            passion.
            Our goal is to build the ultimate hub for modified cars, high-performance machines, supercars, and
            motorbikes. We dream of creating a space where enthusiasts from all over the world can connect, sell, buy,
            share ideas and collaborate; opening up endless opportunities for the automotive community. At RevvdOut, we
            blend our love for motors with cutting-edge technology to give enthusiasts the tools to chase their passion.


            Together, we’re building a global hub that transcends geographical boundaries by bringing like-minded
            enthusiasts together and enjoy the thrill of everything on wheels.</p>

        </div>


        <!-- Custom Navigation -->
        <nav class="custom-navigation c-about d-block d-md-none">
          <button class="position-relative d-flex align-items-start gap-2 pbutton"
            :class="{ active: activeSection === 'home' }" @click="goToSection('home')">
            <div class="d-flex flex-column gap-1">
              <span class="progress"></span>
              <!-- <span class="progress"></span>
              <span class="progress"></span>
              <span class="progress"></span> -->
            </div> Home Page
          </button>
          <button class="position-relative d-flex align-items-start gap-2"
            :class="{ active: activeSection === 'featured' }" @click="goToSection('featured')">
            <div class="d-flex flex-column gap-1">
              <span class="progress"></span>
              <!-- <span class="progress"></span>
              <span class="progress"></span>
              <span class="progress"></span> -->
            </div> Featured Story
          </button>
          <button class="position-relative d-flex align-items-start gap-2"
            :class="{ active: activeSection === 'shareStory' }" @click="goToSection('shareStory')">
            <div class="d-flex flex-column gap-1">
              <span class="progress"></span>
              <!-- <span class="progress"></span>
              <span class="progress"></span>
              <span class="progress"></span> -->
            </div> Share Your Story
          </button>
          <button class="position-relative d-flex align-items-start gap-2"
            :class="{ active: activeSection === 'aboutUs' }" @click="goToSection('aboutUs')">
            <div class="d-flex flex-column gap-1">
              <span class="progress"></span>
              <!-- <span class="progress"></span>
              <span class="progress"></span>
              <span class="progress"></span> -->
            </div> About Us
          </button>
        </nav>


      </div>
      <!-- Custom Navigation -->

    </full-page>
    <nav class="custom-navigation c-home d-none d-md-block">
      <button class="position-relative pbutton d-flex align-items-start gap-2"
        :class="{ active: activeSection === 'home' }" @click="goToSection('home')">
        <div class="d-flex flex-column gap-1">
          <span class="progress"></span>
          <!-- <span class="progress"></span>
              <span class="progress"></span>
              <span class="progress"></span> -->
        </div> Home
      </button>
      <button class="position-relative  d-flex align-items-start gap-2"
        :class="{ active: activeSection === 'featured' }" @click="goToSection('featured')">
        <div class="d-flex flex-column gap-1">
          <span class="progress"></span>
          <!-- <span class="progress"></span>
              <span class="progress"></span>
              <span class="progress"></span> -->
        </div> Featured Story
      </button>
      <button class="position-relative  d-flex align-items-start gap-2"
        :class="{ active: activeSection === 'shareStory' }" @click="goToSection('shareStory')">
        <div class="d-flex flex-column gap-1 ">
          <span class="progress"></span>
          <!-- <span class="progress"></span>
              <span class="progress"></span>
              <span class="progress"></span> -->
        </div> Share Your Story
      </button>
      <button class="position-relative  d-flex align-items-start gap-2" :class="{ active: activeSection === 'aboutUs' }"
        @click="goToSection('aboutUs')">
        <div class="d-flex flex-column gap-1">
          <span class="progress"></span>
          <!-- <span class="progress"></span>
              <span class="progress"></span>
              <span class="progress"></span> -->
        </div> About Us
      </button>
    </nav>

  </div>



  <div class="modal fade " id="ignismyModal" tabindex="-1" role="dialog">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"
            @click="hideModal"></button>
        </div>
        <div class="modal-body">
          <div class="thank-you-pop">
            <img src="http://goactionstations.co.uk/wp-content/uploads/2017/03/Green-Round-Tick.png" alt="" />
            <h1>Thank You!</h1>
            <p>Your submission is received, and we will contact you soon</p>
          </div>
        </div>
      </div>
    </div>
  </div>


  <div class="modal fade show d-block" id="ignismyModal" tabindex="-1" role="dialog" v-if="imageModal">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header border-0">
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"
            @click="closeModal(false)"></button>
        </div>
        <div class="modal-body">
          <img ref="imageCrop" :src="imageUrlCrop" alt="Image for cropping" class="imgcrop" />
          <label class="d-none" for="zoom">Zoom: </label>
          <input class="d-none" type="range" id="zoom" min="0.1" max="3" step="0.1" v-model="zoomLevel" @input="onZoom">
          <div class="d-flex gap-3">
            <div class="col-md-12">
              <div class="list-item-btn position-relative submit-btn-div">
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
                <button type="button" class="signin-btnli submitNow" id="submit-button" @click="closeModal(true)">
                  {{ $t('Crop & Save') }}
                </button>
                <span class="border-bottom-btn border-left-btn position-absolute">
                  <img src="@/assets/images/Group11.png" class="img-border position-absolute" alt="" />
                </span>
                <span class="border-bottom-btn position-absolute">
                  <img src="@/assets/images/Path473.png" class="img-border position-absolute" alt="" />
                </span>
              </div>
            </div>
            <!-- <button class="btn btn-primary" @click="closeModal(true)">Crop & Save</button> -->
            <!-- <button class="btn btn-danger" @click="closeModal(false)">Cancel</button> -->
          </div>
          <div>

          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="modal fade show d-block" id="ignismyModal" tabindex="-1" role="dialog" v-if="ModalStorySucces == true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header border-0">
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"
            @click="hideModalStorySucces"></button>
        </div>
        <div class="modal-body">
          <div class="thank-you-pop">
            <img src="http://goactionstations.co.uk/wp-content/uploads/2017/03/Green-Round-Tick.png" alt="" />
            <h1 class="coloror">Succss!</h1>
            <p>Your Story submitted successfylly</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="modal fade show d-block" id="ignismyModal" tabindex="-1" role="dialog" v-if="ModalStoryFail == true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header border-0">
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"
            @click="hideModalStoryFail"></button>
        </div>
        <div class="modal-body">
          <div class="thank-you-pop">
            <img src="http://goactionstations.co.uk/wp-content/uploads/2017/03/Green-Round-Tick.png" alt="" />
            <h1 class="coloror">{{ modalTitle }}</h1>
            <p>{{ modaldescription }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Confirmation Modal to ask if the user wants to crop the image -->
  <div class="modal fade show d-block" id="cropConfirmModal" tabindex="-1" role="dialog" v-if="confirmModal">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header border-0">
          <h5 class="modal-title text-white">Crop Image?</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"
            @click="closeConfirmModal"></button>
        </div>
        <div class="modal-body">
          <p class="text-white text-center">Do you want to crop the image before uploading?</p>
        </div>
        <div class="row justify-content-center">
          <div class="col-md-2">
            <div class="list-item-btn position-relative submit-btn-div">
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
              <button type="button" class="signin-btnli submitNow" id="submit-button" @click="handleYes">
                {{ $t('Yes') }}
              </button>
              <span class="border-bottom-btn border-left-btn position-absolute">
                <img src="@/assets/images/Group11.png" class="img-border position-absolute" alt="" />
              </span>
              <span class="border-bottom-btn position-absolute">
                <img src="@/assets/images/Path473.png" class="img-border position-absolute" alt="" />
              </span>
            </div>
          </div>
          <div class="col-md-2">
            <div class="list-item-btn position-relative submit-btn-div">
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
              <button type="button" class="signin-btnli submitNow" id="submit-button" @click="handleNo">
                {{ $t('No') }}
              </button>
              <span class="border-bottom-btn border-left-btn position-absolute">
                <img src="@/assets/images/Group11.png" class="img-border position-absolute" alt="" />
              </span>
              <span class="border-bottom-btn position-absolute">
                <img src="@/assets/images/Path473.png" class="img-border position-absolute" alt="" />
              </span>
            </div>
          </div>


        </div>
      </div>
    </div>
  </div>


  <!-- Footer -->
  <footer class="footer d-none">
    <!-- Section: Links  -->
    <section class="">
      <div class="container text-center text-md-start mt-5">

        <div class="row mt-3">

          <!-- <div class="col-12 col-md-6 z1o col-lg-4 col-xl-4 mb-4 position-relative">
            <div class="cardOverlay d-flex justify-content-start align-items-center flex-column pt-4">
              <img src="../../public/images/2.png">
            </div>
        
            <h5 class="h5-title text-capitalize mb-4">{{ $t('weeklyStory') }}</h5>
            <div class="car-content">
              <div class="img-div-footer">
                <img src="@/assets/images/94c8d99e3eceee3f64597db010958594.png" class="img-car" alt="car" />
              </div>
              <div class="car-content-desc">
                <h6 class="car-content-title">Koenigsegg agera one:1</h6>
              
              </div>
            </div>

            <div class="footer-allDetails">
              <router-link class="viewall-content" to="">
                {{ $t('viewAllStories') }}
              </router-link>
            </div>

           
          </div> -->
          <!-- Grid column -->

          <!-- Grid column -->
          <div class="col-12 col-md-6 col-lg-4 col-xl-4 mx-auto mb-4">
            <!-- Links -->
            <h5 class="h5-title text-capitalize mb-4">{{ $t('contactUs') }}:</h5>
            <!-- <div class="footer-loction-div">
              <svg xmlns="http://www.w3.org/2000/svg" class="footer-location-icon" width="12" height="17"
                viewBox="0 0 12 17">
                <path id="Icon_material-location-on" data-name="Icon material-location-on"
                  d="M13.5,3a5.971,5.971,0,0,0-6,5.95c0,4.463,6,11.05,6,11.05s6-6.587,6-11.05A5.971,5.971,0,0,0,13.5,3Zm0,8.075A2.125,2.125,0,1,1,15.643,8.95,2.135,2.135,0,0,1,13.5,11.075Z"
                  transform="translate(-7.5 -3)" fill="#f95f19" />
              </svg>
              <h6 class="footer-main-addresss">{{ $t('mainOfficeAddress') }}:</h6>
            </div>
            <p class="text-reset">
              Lorem 9. Ipsum is simply, dummy text is that, Warrington, WA4
            </p> -->

            <!-- <div class="footer-loction-div">
              <svg xmlns="http://www.w3.org/2000/svg" class="footer-location-icon" width="16" height="16"
                viewBox="0 0 16 16">
                <path id="Icon_ionic-ios-time" data-name="Icon ionic-ios-time"
                  d="M11.375,3.375a8,8,0,1,0,8,8A8,8,0,0,0,11.375,3.375Zm.538,8.692a.54.54,0,0,1-.538.538H7.683a.538.538,0,1,1,0-1.077h3.154V6.452a.538.538,0,0,1,1.077,0Z"
                  transform="translate(-3.375 -3.375)" fill="#f95f19" />
              </svg>
              <h6 class="footer-main-addresss">{{ $t('openingHours') }}</h6>
            </div> -->

            <div class="footer-loction-div">
              <svg xmlns="http://www.w3.org/2000/svg" class="footer-location-icon" width="18" height="14.4"
                viewBox="0 0 18 14.4">
                <path id="Icon_material-email" data-name="Icon material-email"
                  d="M19.2,6H4.8A1.8,1.8,0,0,0,3.009,7.8L3,18.6a1.805,1.805,0,0,0,1.8,1.8H19.2A1.805,1.805,0,0,0,21,18.6V7.8A1.805,1.805,0,0,0,19.2,6Zm0,3.6L12,14.1,4.8,9.6V7.8L12,12.3l7.2-4.5Z"
                  transform="translate(-3 -6)" fill="#f95f19" />
              </svg>
              <h6 class="footer-main-addresss">Info@revvdout.com </h6>
            </div>
            <!-- 
            <div class="footer-loction-div">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                <path id="Icon_awesome-phone-alt" data-name="Icon awesome-phone-alt"
                  d="M15.544,11.307l-3.5-1.5a.75.75,0,0,0-.875.216l-1.55,1.894A11.583,11.583,0,0,1,4.081,6.379l1.894-1.55a.748.748,0,0,0,.216-.875l-1.5-3.5A.755.755,0,0,0,3.831.019L.581.769A.75.75,0,0,0,0,1.5,14.5,14.5,0,0,0,14.5,16a.75.75,0,0,0,.731-.581l.75-3.25a.759.759,0,0,0-.438-.863Z"
                  transform="translate(0 0)" fill="#f95f19" />
              </svg>
              <h6 class="footer-main-addresss">+0-000-000-0000</h6>
            </div> -->
          </div>
          <!-- Grid column -->

          <!-- Grid column -->
          <div class="col-12 col-md-6 col-lg-4 col-xl-4 mx-auto mb-4">
            <!-- Links -->
            <h5 class="h5-title text-capitalize mb-4">{{ $t('aboutUs') }}</h5>
            <!-- <p>
              <router-link to="#!" class="footer-main-addresss">{{ $t('home') }}</router-link>
            </p> -->
            <!-- <p>
              <router-link to="#!" class="footer-main-addresss">{{ $t('aboutUs') }}</router-link>
            </p> -->
            <!-- <p>
              <router-link to="#!" class="footer-main-addresss">{{ $t('carListing') }}</router-link>
            </p> -->
            <!-- <p>
              <router-link to="#!" class="footer-main-addresss">{{ $t('faq') }}</router-link>
            </p>
            <p>
              <router-link to="#!" class="footer-main-addresss">{{ $t('contactUs') }}</router-link>
            </p> -->
          </div>
          <!-- Grid column -->
        </div>
        <!-- Grid row -->
      </div>
    </section>
    <!-- Section: Links  -->


  </footer>
  <!-- Footer -->
</template>

<script>

import axios from 'axios';

import CarDataService from "../services/CarDataService";
import CommunityDataService from "../services/CommunityDataService";
import { useProfileImage } from '@/composables/useProfileImage';
import { useProfileName } from '@/composables/useProfileName';
import { useIslogin } from "@/composables/uselogin"
import { computed } from "vue";
import '../../node_modules/vue-draggable-resizable/dist/style.css';
import Cropper from 'cropperjs';
import 'cropperjs/dist/cropper.css';
import Header from "./Header.vue"

// import draggable from 'vuedraggable';


export default {
  name: "HomeLanding",
  components: {
    // draggable,
    Header

  },
  provide() {
    return {
      moveToSection: this.moveToSection,
    };
  },
  setup() {
    const { state: profileImageState, setProfileImage } = useProfileImage();
    const { state: nameState, setName } = useProfileName();
    // const { state: loginState, setIslogin } = useIslogin();

    const { state, setIslogin } = useIslogin();

    const changeProfileImage = (newSrc) => {
      setProfileImage(newSrc);
    };

    const changeName = (newName) => {
      setName(newName);
    };

    const setLogin = (logvalue) => {
      setIslogin(logvalue)
    };

    // Computed property to access the reactive state
    const isLogin = computed(() => state.isLogin);
    return {

      profileImageState,
      nameState,

      changeProfileImage,
      changeName,
      setLogin,
      isLogin,
      imageUrl: null, // Current image being cropped

    };
  },
  data() {
    return {
      fullpageOptions: {
        // Options for scrolling behavior, navigation, and customization
        navigation: true, // Show navigation dots
        scrollingSpeed: 700, // Adjust scroll speed
        autoScrolling: true,
        fitToSection: true,
        anchors: ['home', 'featured', 'shareStory', 'aboutUs'],
        onLeave: (origin, destination) => {
          const sections = document.querySelectorAll('.section');
          sections[origin.index].classList.add('slide-out-forward-3d');
          sections[destination.index].classList.add('slide-in-backward-3d');
          setTimeout(() => {
            sections[origin.index].classList.remove('slide-out-forward-3d');
          }, 700); // Match the animation duration
        },
      },
      fileEvent: null,
      isCrop: null,
      isDropDYear: false,
      isDropDModel: false,
      draggedIndex: null,
      confirmModal: false,
      imageUrlCrop: "",
      croppedImages: [], // Array to store cropped images
      imageModal: false,
      cropper: null,
      zoomLevel: 1, // Default zoom level
      currentFile: null, // Store the file being processed
      filesQueue: [], // Queue for multiple image files
      modalTitle: "",
      modaldescription: "",
      shopName: "",
      ModalStorySucces: false,
      ModalStoryFail: false,
      selectedStoryType: "carEnthusiast",
      role: "",
      user: {
        email: ''
      },
      image: "",
      sub: "",
      isOpen: false,
      isOpenm: false,
      isOpeng: false,
      isModal3: false,
      uploadedImages: [],
      error2: "",
      isModal2Open: false,
      makefilteredOptions: [],
      makes: [],
      make: "",
      smodel: "",
      isModalOpen: true,
      modelfilteredOptions: [],
      models: [],
      generation: "",
      generations: [],
      GenfilteredOptions: [],
      filteredGenerations: [],
      productionYear: "",
      productionYears: [],
      communities: [],
      itemsPerPage: 5, // Number of communities per page
      currentPage: 1, //current Page
      filteredCommunities: [], // Communities to display on the current page

      selectedFilters: {
        make: "",
        model: "",
        generation: "",
        productionYears: "",
      },
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
      dataGy: [],
      selectedData: '',
      uploadedFiles: [],
      bannerStories: [],
      cities: [],
      activeSection: 'home',
    };
  },
  methods: {
    moveToSection(anchor) {
      if (this.$refs.fullpage && this.$refs.fullpage.api) {
        this.$refs.fullpage.api.moveTo(anchor);
      }
      this.activeSection = anchor;
    },
    updateActiveSection(newSection) {
      this.activeSection = newSection;
    },
    // moveToSection(anchor) {
    //   if (this.$refs.fullpage && this.$refs.fullpage.api) {
    //     this.$refs.fullpage.api.moveTo(anchor);
    //     this.activeSection = anchor;
    //   } else {
    //     console.error('Fullpage API is not available');
    //   }
    // },
    goToSection(anchor) {
      this.$refs.fullpage.api.moveTo(anchor);
      // Navigate to section by anchor
      this.activeSection = anchor;
    },
    createObserver() {
      const options = {
        root: null, // Use the viewport as the root
        threshold: 0.5, // Trigger when 50% of the section is in view
      };

      // Ensure we handle both single and multiple elements
      // const sections = Array.isArray(this.$refs.section) ? this.$refs.section : [this.$refs.section];
      const sections = document.querySelectorAll('.section');


      // Create an observer instance
      const observer = new IntersectionObserver(this.onIntersection, options);

      // Observe each section
      sections.forEach((section) => {
        observer.observe(section);
      });
    },
    onIntersection(entries) {
      // Update activeSection based on which section is in view
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.dataset.sectionId;
          this.activeSection = sectionId;
          console.log("active sec", sectionId)
        }
      });
    },
    handleYes() {
      console.log("Click Yes");
      this.isCrop = true;
      if (this.isCrop) {
        this.confirmModal = false; // Close the confirmation modal
        const file = this.fileEvent.target.files[0]; // Use the stored event
        console.log("New file:", file);
        if (file) {
          const reader = new FileReader();
          reader.onload = (e) => {
            console.log("Target:", e.target.result);
            this.imageUrlCrop = e.target.result; // Set the image URL
            console.log("Image URL:", this.imageUrlCrop);
            this.imageModal = true;
            console.log("Image modal:", this.imageModal);
            this.$nextTick(() => {
              // Show modal only after image is set
              this.initCropper(); // Initialize cropper after modal is displayed
            });
          };
          reader.readAsDataURL(file); // Load the image as a Data URL
        }
      }
    },
    handleNo() {
      this.isCrop = false;
      this.confirmModal = false; // Close the confirmation modal
      this.uploadWithoutCrop(); // Correctly call uploadWithoutCrop method
    },

    DropDModel() {
      console.log("click")
      this.isDropDModel = !this.isDropDModel
    },
    DropDYear() {
      console.log("click")
      this.isDropDYear = !this.isDropDYear
    },

    onDrop(targetIndex) {
      if (this.draggedIndex === targetIndex) return; // Prevent moving to the same index
      const draggedImage = this.croppedImages[this.draggedIndex]; // Get the dragged image
      // Remove it from its original position
      this.croppedImages.splice(this.draggedIndex, 1);
      // Insert it at the new position
      this.croppedImages.splice(targetIndex, 0, draggedImage);
      this.draggedIndex = null; // Reset the dragged index

      // Log the updated croppedImages array
      console.log("Updated croppedImages:", this.croppedImages);
    },
    // daraable
    // Desktop Drag Start
    onDragStart(index) {
      this.draggedIndex = index;
    },

    // Desktop Drop





    // end dragable
    openImageModal(event) {
      this.fileEvent = event;
      this.confirmModal = true


    }
    ,
    // Initializes the cropper for the image
    // initCropper() {
    //   this.$nextTick(() => {
    //     const image = this.$refs.imageCrop;
    //     if (image) {
    //       if (this.cropper) {
    //         this.cropper.destroy(); // Destroy the previous cropper instance
    //       }
    //       this.cropper = new Cropper(image, {
    //         aspectRatio: 1, // Example: Square crop
    //         viewMode: 1,
    //         autoCropArea: 1,
    //         scalable: true,
    //         zoomable: true,
    //         ready: () => {
    //           this.cropper.zoomTo(this.zoomLevel); // Set the initial zoom level
    //         },
    //       });
    //     } else {
    //       console.error("Image element not found for cropping.");
    //     }
    //   });
    // },
    initCropper() {
      this.$nextTick(() => {
        const image = this.$refs.imageCrop; // Get the image element reference
        if (image) {
          if (this.cropper) {
            this.cropper.destroy(); // Destroy the previous instance if it exists
          }
          this.cropper = new Cropper(image, {
            // aspectRatio: 1, // Example: Square crop (you can adjust aspect ratio if needed)
            // aspectRatio: 16 / 9, // Set aspect ratio to match 1280x720
            viewMode: 1,
            autoCropArea: 1,
            scalable: true,
            zoomable: true,
            moveable: true,
            cropBoxResizable: true, // Disable resizing of the crop box
            cropBoxMovable: true, // Enable moving the crop box
            // minCropBoxWidth: '500px', // Set a fixed width
            // minCropBoxHeight: '200px', // Set a fixed height
            ready: () => {

              // this.cropper.setCropBoxData({ width: 1280, height: 720 });


            },
          });
        } else {
          console.error("Image element not found for cropping.");
        }
      });
    },

    onZoom() {
      if (this.cropper) {
        this.cropper.zoomTo(this.zoomLevel);
      }
    },
    // closeModal(done) {
    //   if (done && this.cropper) {
    //     const canvas = this.cropper.getCroppedCanvas();
    //     canvas.toBlob((blob) => {
    //       this.uploadedFiles.push(blob); // Add the cropped image blob to uploaded files
    //       this.imageModal = false; // Close the modal
    //       this.cropper.destroy(); // Destroy the cropper instance
    //       this.cropper = null; // Reset the cropper
    //       this.imageUrlCrop = null; // Clear the image URL
    //       this.processNextImage(); // Process the next image in the queue
    //     }, 'image/png');
    //   } else {
    //     this.imageModal = false; // Close modal without saving
    //     this.cropper.destroy(); // Destroy the cropper instance
    //     this.cropper = null;
    //     this.imageUrlCrop = null; // Clear the image URL
    //     this.processNextImage(); // Process the next image in the queue
    //   }
    // },
    processNextImage() {
      if (this.filesQueue.length === 0) return; // Exit if no more images in the queue

      const file = this.filesQueue.shift(); // Get the next file from the queue
      const reader = new FileReader();
      reader.onload = (e) => {
        this.imageUrlCrop = e.target.result; // Set the image URL for cropping
        this.$nextTick(() => {
          this.imageModal = true; // Open the modal for cropping
          this.initCropper(); // Initialize the cropper
        });
      };
      reader.readAsDataURL(file); // Read the image file
    },

    // Closes the modal and processes the cropped image
    closeModal(done) {
      if (done && this.cropper) {
        const canvas = this.cropper.getCroppedCanvas();
        canvas.toBlob((blob) => {
          const imageUrl = URL.createObjectURL(blob); // Create URL for preview

          // Add the cropped image to both uploaded files and croppedImages array
          this.uploadedFiles.push(blob);
          this.croppedImages.push({ url: imageUrl });
          const croppedImageFile = new File([blob], `cropped-image-${Date.now()}.png`, { type: 'image/png' });
          this.formData.storyImages.push(croppedImageFile);

          this.imageModal = false; // Close the modal
          this.cropper.destroy(); // Destroy the cropper instance
          this.cropper = null; // Reset the cropper
          this.imageUrlCrop = null; // Clear the image URL
          this.processNextImage(); // Process the next image in the queue
        }, 'image/png');
      } else {
        this.imageModal = false; // Close modal without saving
        this.cropper.destroy(); // Destroy the cropper instance
        this.cropper = null;
        this.imageUrlCrop = null; // Clear the image URL
        this.processNextImage(); // Process the next image in the queue
      }
    },
    uploadWithoutCrop() {
      const file = this.fileEvent.target.files[0]; // Access the selected file
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          this.imageUrlCrop = e.target.result; // Set the image URL from the file

          // Push the image file and URL directly to the uploadedFiles and croppedImages arrays
          this.uploadedFiles.push(file); // Store the file directly
          this.croppedImages.push({ url: this.imageUrlCrop });

          console.log("Uploading without crop:", this.imageUrlCrop);

          const imageFile = new File([file], `image-${Date.now()}.png`, { type: file.type });
          this.formData.storyImages.push(imageFile); // Add the image to formData.storyImages

          this.processNextImage(); // Proceed to the next image if any
        };
        reader.readAsDataURL(file); // Load the file as a Data URL
      } else {
        console.error("No file selected for uploading without cropping.");
      }
    }
    ,

    hideModalStoryFail() {
      this.ModalStoryFail = false
    },
    handleName() {
      if (this.selectedStoryType == "carGarage") {
        this.shopName = "Garage"
      }

      else if (this.selectedStoryType == "carModificationShop") {
        this.shopName = "shop"
      }
      else if (this.selectedStoryType == "carClub") {
        this.shopName = "club"
      }
      else if (this.selectedStoryType == "motorbikeEnthusiast") {
        this.shopName = "Motor Bike"
      }
      else if (this.selectedStoryType == "automotivePhotographerast") {
        this.shopName = "Automotive Photographer"
      }

    },
    getcities() {
      if (!this.formData.country) return;  // Exit if no country is selected

      // Set up the headers and request body
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

      const urlencoded = new URLSearchParams();
      urlencoded.append("country", this.formData.country);

      const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: urlencoded,
        redirect: 'follow'
      };
      // Fetch cities based on the selected country
      fetch("https://countriesnow.space/api/v0.1/countries/cities", requestOptions)
        .then(response => response.json())  // Convert response to JSON
        .then(result => {
          if (result.data && result.data.length > 0) {
            this.cities = result.data;  // Update cities array with the result
          } else {
            this.cities = [];  // Clear cities if no data is found
          }
        })
        .catch(error => {
          console.log('error', error);
          this.cities = [];  // Clear cities if an error occurs
        });
    }
    ,
    async fetchBannerStories() {
      try {
        const response = await fetch('https://buzzwaretech.com/adminrev/api/bannerstores');
        const data = await response.json();
        console.log("banner_response data", data)
        if (data.success) {
          // Parse the images field from JSON string to an array
          const banner = data.banner;
          console.log("banner data", banner)
          banner.images = JSON.parse(banner.images); // Parse the images
          this.bannerStories = [banner]; // Store it in the featuredCars array
        }
      } catch (error) {
        console.error('Error fetching featured stories:', error);
      }
    },

    // origional
    handleFileUpload(event) {
      const files = event.target.files;
      if (files.length + this.uploadedFiles.length > 8) {
        alert("You can only upload a maximum of 8 images.");
        return;
      }
      this.filesQueue = Array.from(files); // Convert FileList to array and queue it
      this.processNextImage(); // Start processing the first image
    },
    // Processes the next image in the queue
    //   processNextImage() {
    //   if (this.filesQueue.length === 0) return; // Exit if no more images in the queue

    //   const file = this.filesQueue.shift(); // Get the next file from the queue
    //   const reader = new FileReader();
    //   reader.onload = (e) => {
    //     this.imageUrlCrop = e.target.result; // Set the image URL for cropping
    //     this.$nextTick(() => {
    //       this.imageModal = true; // Open the modal for cropping
    //       this.initCropper(); // Initialize the cropper
    //     });
    //   };
    //   reader.readAsDataURL(file); // Read the image file
    // },

    // removeImage(index) {
    //   this.uploadedImages.splice(index, 1);
    // }
    // ,
    removeImage(index) {
      this.uploadedFiles.splice(index, 1);
      this.croppedImages.splice(index, 1);
    },
    async fetchProfileData() {
      try {
        console.log("Fetching profile data...");
        const data = await this.$store.dispatch("auth/getprofiledata");
        console.log("Profile data in heder:", data.result.sub);
        console.log("Profile data in heder:", data.result);
        this.sub = data.result.sub
        this.userAttributes = data.result
        console.log("role d",);
        if (this.userAttributes['custom:Role'] == "dealer") {
          this.changeName(this.userAttributes['custom:companyName'])
          this.role = this.userAttributes['custom:Role']
        }




        if (this.userAttributes.picture) {
          this.image = this.userAttributes.picture
        }



      } catch (error) {
        console.error("Error fetching profile data:", error);
        if (error.success == 0) {
          localStorage.setItem('login', false);
          //     this.$router.push("/signin");
        }
      }
    },
    async fetchproData() {



      const myid = this.sub
      const url = 'https://king-prawn-app-3rw3o.ondigitalocean.app/api/users/sub?sub=' + myid;
      console.log("jaloru header", myid, url);
      try {
        // Make the GET request with query parameters
        const response = await axios.get(url);
        console.log("ja loru response", response, response.data.nickname)

        // Handle the response data
        // console.log(this.formData.sub, "new porofile Data is", response.data);
        this.image = response.data.image

        let imageUrl = "https://king-prawn-app-3rw3o.ondigitalocean.app/users/" + this.image;

        this.changeProfileImage(imageUrl)
        if (this.role != 'dealer') {
          this.changeName(response.data.nickname)
        }
        console.log("the image of user dloru header", this.image)
        //				this.image = response.data[0].image
      } catch (error) {
        // Handle any errors
        console.error('Error making GET request:', error);
      }
    },
    // validateFiles(event) {
    //   const files = event.target.files;
    //   if (files.length > 8) {
    //     alert('You can upload a maximum of 8 pictures.');
    //     event.target.value = ''; // Clear the input
    //     return;
    //   }
    //   this.formData.storyImages = Array.from(files); // Store the selected files
    // },
    validateFiles(event) {
      const files = event.target.files;
      if (files.length > 8) {
        alert('You can upload a maximum of 8 pictures.');
        event.target.value = ''; // Clear the input
        return;
      }
      // this.formData.storyImages = Array.from(files); // Store the selected files
    },


    // SubmitStory() {
    //   console.log("submit story", this.formData)
    //   axios.post('https://king-prawn-app-3rw3o.ondigitalocean.app/api/stories', this.formData)
    //     .then(response => {
    //       // Handle success
    //       console.log('Post request successful:', response.data);
    //       // Append the new comment to the comments array


    //       // Check if this.$refs.fileInput exists before accessing its properties




    //     })
    //     .catch(error => {
    //       // Handle error
    //       console.error('Error making post request:', error);
    //       // Set imgLoading back to false after error

    //     });
    // },
    // SubmitStory() {
    //   console.log("submit story", this.formData);

    //   // Create a new FormData object
    //   let data = new FormData();

    //   // Append text fields to FormData
    //   data.append('StoryType', this.selectedStoryType);
    //   data.append('user_name', this.formData.user_name);
    //   data.append('user_email', this.formData.user_email);

    //   data.append('story', this.formData.story);
    //   data.append('make', this.formData.make);
    //   data.append('model', this.formData.model);
    //   data.append('year', this.formData.year);
    //   data.append('modifications', this.formData.modifications);
    //   data.append('memorable', this.formData.memorable);
    //   data.append('advice', this.formData.advice);
    //   data.append('story_name', this.formData.story_name);
    //   data.append('social_media', this.formData.social_media);

    //   // Append files to FormData
    //   this.formData.storyImages.forEach((file) => {
    //     data.append('storyImages', file);
    //   });

    //   // Send POST request using Axios
    //   axios.post('https://king-prawn-app-3rw3o.ondigitalocean.app/api/stories', data, {
    //     headers: {
    //       'Content-Type': 'multipart/form-data'
    //     }
    //   })
    //     .then(response => {
    //       // Handle success
    //       console.log('Post request successful:', response.data);
    //       // Handle success actions here
    //     })
    //     .catch(error => {
    //       // Handle error
    //       console.error('Error making post request:', error);
    //       // Handle error actions here
    //     });
    // }
    async convertBlobToFile(blob, index) {
      // Use fetch to convert blob to File object
      const response = await fetch(blob.url); // Assuming blob.url contains the Blob URL
      const fileBlob = await response.blob(); // Get the Blob from the response
      return new File([fileBlob], `image-${index}.png`, { type: fileBlob.type }); // Create File object
    }
    ,
    async convertAndAppendImages() {
      const storyImages = await Promise.all(
        this.croppedImages.map((blob, index) => this.convertBlobToFile(blob, index))
      );

      // Now replace the original array with File objects
      this.formData.storyImages = storyImages;
    },
    async SubmitStory() {
      console.log("submit story", this.formData);

      // Create a new FormData object
      let data = new FormData();
      await this.convertAndAppendImages();


      // Always append common data
      data.append('story_type', this.selectedStoryType);
      data.append('user_name', this.formData.user_name);
      // data.append('user_name', "danish");
      data.append('user_email', this.formData.user_email);


      // data.append('user_email', "danish250ahmad@gmail.com");

      // Conditionally append based on StoryType
      if (this.selectedStoryType === 'carEnthusiast') {
        // Append carEnthusiast related data
        data.append('make', this.formData.make);
        // data.append('make', "Audi");
        data.append('model', this.formData.model);
        // data.append('model', "100");
        data.append('year', this.formData.year);
        // data.append('year', "2007");
        data.append('modifications', this.formData.modifications);
        data.append('memorable', this.formData.memorable);
        data.append('advice', this.formData.advice);
        data.append('story', this.formData.story);
        data.append('story_name', this.formData.story_name);
        data.append('social_media', this.formData.social_media);
      } else {
        // Append non-carEnthusiast related data
        data.append('country', this.formData.country);
        data.append('city', this.formData.city);
        data.append('story_history', this.formData.storyHistory);
        data.append('adventure_story', this.formData.adventureStory);
        data.append('story_name', this.formData.storyName);
        data.append('social_media', this.formData.url);
      }



      // Append images (if any)
      this.formData.storyImages.forEach((file) => {
        data.append('storyImages', file);
      });





      if (this.isLogin == 'true' || this.isLogin == true) {

        console.log("the condition is true and form submit")
        // Send POST request using Axios
        axios.post('https://king-prawn-app-3rw3o.ondigitalocean.app/api/stories', data, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        })
          .then(response => {
            // Handle success
            console.log('Post request successful:', response.data);
            this.ModalStorySucces = true
            // Handle success actions here
          })
          .catch(error => {
            // Handle error
            console.error('Error making post request:', error);
            // Handle error actions here

            this.modalTitle = "Something went wrong"
            this.modaldescription = "Plese try after sometime"
            this.ModalStoryFail = true;
          });
      }
      else {
        console.log("false please login ")
        this.modalTitle = "Something went wrong"
        this.modaldescription = "Plese login first to submit story"
        this.ModalStoryFail = true
      }


    }

    ,
    toggleOpeng() {
      console.log('opneg')
      this.isOpeng = !this.isOpeng
      this.isDropDYear = !this.isDropDYear

    },
    GenfilterOption() {
      const query = this.formData.year.toLowerCase();
      if (query === '') {
        this.GenfilteredOptions = this.dataGy;
      } else {
        this.GenfilteredOptions = this.dataGy.filter(option =>
          option.production_years.toLowerCase().includes(query)
        );
        console.log(this.GenfilteredOptions)
      }
    },

    filterMakeOptions() {
      this.modelfilteredOptions = [];
      // this.selectedData = "";
      this.formData.year = ""
      this.smodel = ""
      const query = this.formData.make.toLowerCase();
      if (query === '') {
        this.makefilteredOptions = this.makes;
      } else {
        this.makefilteredOptions = this.makes.filter(option => option.toLowerCase().includes(query));
      }
    },
    filterModelOptions() {
      // this.selectedData = ""
      this.formData.year = ""

      console.log(this.smodel);
      const query = this.formData.model.toLowerCase();

      if (query === '') {
        this.modelfilteredOptions = this.models;
      } else {

        this.modelfilteredOptions = this.models.filter(option => option && option.model && option.model.toLowerCase().includes(query));
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
      this.getModels()


    },
    selectOptionModel(option) {

      this.formData.model = option;
      this.isOpenm = false;
      this.isDropDModel = false;
      this.getGenerations()



    },
    updateModels(value) {
      this.isDropDYear = false
      if (value) {

        this.productionYear = value.production_years;
        // this.selectedData = value.production_years
        this.formData.year = value.production_years
      } else {

        this.productionYear = null;
      }
    },
    getData() {

      this.filterGenerations()
      this.getYears()
    },
    filterGenerations() {
      // Filter the generations based on input
      this.filteredGenerations = this.generations.filter(gen => gen.toLowerCase().includes(this.generation.toLowerCase()));
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
          this.makes = response.data.map(item => item.make);
          this.makefilteredOptions = response.data.map(item => item.make);
          console.log("make are :", response.data.map(item => item.make))

        })
        .catch((e) => {
          console.log(e);
        });
    },


    retrieveCommunities() {
      if (this.GenfilteredOptions == '') {
        if (this.make === "" || this.smodel === "") {
          this.isModal2Open = true;
        } else {
          const data = {
            make: this.formData.make,
            model: this.formData.model,
            generation: this.generation,
            productionYear: this.productionYear
          };

          CommunityDataService.create(data)
            .then((response) => {
              // Check if response data is an object
              if (typeof response.data === 'object' && !Array.isArray(response.data)) {
                const community = response.data;

                // Assuming you have an ID in the response data
                const communityId = community.id; // Adjust this based on your response data
                // Programmatic navigation to the community details route
                this.$router.push(`/communitydetails/${communityId}`);
              } else {
                // Handle the case when response data is an array

                const community = response.data[0];
                this.$router.push(`/communitydetails/${community.id}`);
                // Handle this case according to your requirements
              }
            })
            .catch((e) => {
              console.log(e);
              this.error2 = e.message
              this.isModal3 = true
            });
        }
      }
      else if (this.GenfilteredOptions != '') {
        if (this.formData.year == "") {
          this.isModal2Open = true
        }
        else {
          if (this.make === "" || this.smodel === "") {
            this.isModal2Open = true;
          } else {
            const data = {
              make: this.make,
              model: this.smodel,
              generation: this.generation,
              productionYear: this.productionYear
            };

            CommunityDataService.create(data)
              .then((response) => {
                // Check if response data is an object
                if (typeof response.data === 'object' && !Array.isArray(response.data)) {
                  const community = response.data;

                  // Assuming you have an ID in the response data
                  const communityId = community.id; // Adjust this based on your response data
                  // Programmatic navigation to the community details route
                  this.$router.push(`/communitydetails/${communityId}`);
                } else {
                  // Handle the case when response data is an array

                  const community = response.data[0];
                  this.$router.push(`/communitydetails/${community.id}`);
                  // Handle this case according to your requirements
                }
              })
              .catch((e) => {
                console.log(e);
                this.error2 = e.message
                this.isModal3 = true
              });
          }
        }
      }

    },

    retrieveALLCommunities() {


      CommunityDataService.getAll()
        .then((response) => {
          this.communities = response.data;
        })
        .catch((e) => {
          console.log(e);
        });
    },
    getModels() {
      console.log("get modals")
      this.formData.year = ""
      this.smodel = ""
      this.generations = [];
      this.GenfilteredOptions = []
      this.productionYears = [];
      if (this.formData.make == "") {
        this.modelfilteredOptions = ""
      }
      else {
        CarDataService.getModels(this.formData.make)
          .then((response) => {
            this.models = response.data;
            this.modelfilteredOptions = response.data;
            console.log("modal filter options ", this.modelfilteredOptions)

          })
          .catch((e) => {
            console.log(e);
          });
      }

    },


    getGenerations() {
      // console.log('in generation', "make", this.make, "modal", this.smodel);
      this.formData.year = ""
      CarDataService.getGenerations(this.formData.make, this.formData.model)
        .then((response) => {
          const data = response.data;
          console.log("data is", data);
          this.dataGy = data;

          this.GenfilteredOptions = data.filter(item => {
            return (
              item.generation !== "" &&
              item.generation !== "-" &&
              item.generation !== "??" &&
              item.generation !== "?"
            );
          });

          this.generations = [...new Set(this.GenfilteredOptions.map(item => item.generation))];
          this.productionYears = [...new Set(this.GenfilteredOptions.map(item => item.production_years))];
        })
        .catch((e) => {
          console.log(e);
        });
    },

    getYears() {


      this.productionYears = []
      CommunityDataService.getFiltered(this.make, this.model, this.generation, this.productionYear)

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
    hideModalStorySucces() {
      this.ModalStorySucces = false
    },
    hideFilterModal() {
      // Hide the modal using the ref
      // const modal = this.$refs.modalRef;
      // if (modal) {
      //   modal.classList.remove("show");
      //   modal.style.display = "none";
      // }

      // this.isModalOpen = false
      this.isModalOpen = true
    },

    handleOutsideClick(event) {
      const modal = this.$refs.modalRef;
      if (modal && !modal.contains(event.target)) {
        // If the click occurred outside the modal, hide it
        this.hideFilterModal();
      }
    },
    submitFilter() {
      if (this.make == '' && this.model == '') {
        this.hideFilterModal();
        this.isModal2Open = true
      }
      else
        this.hideFilterModal();
    },
    showFilterModal() {


      this.isModalOpen = true


    },
    handleStorageChange(event) {
      if (event.key === 'login') {
        this.isLogin = JSON.parse(event.newValue);
      }
    },
    // submitForm() {
    //   //Reset error message
    //   this.errorMessage = "";

    //   //Validate userType
    //   if (this.formData.userType === "") {
    //     this.formData.errorMessage = "Please select a user type";
    //     return;
    //   }

    //   // Validate email
    //   const emailRegex = /^\S+@\S+\.\S+$/;
    //   if (this.formData.email === "") {
    //     this.formData.errorMessage = "Please enter your email address";
    //     return;
    //   } else if (!emailRegex.test(this.formData.email)) {
    //     this.formData.errorMessage = "please enter a valid email address";
    //     return;
    //   }

    //   //validate phone
    //   const phoneRegex = /^\+?(\d.*){3,}$/;
    //   if (this.formData.phone === "") {
    //     this.formData.errorMessage = "Please enter your phone number.";
    //     return;
    //   } else if (!phoneRegex.test(this.formData.phone)) {
    //     this.formData.errorMessage = "Please enter a valid phone number.";
    //     return;
    //   }

    //   // Validate country
    //   if (this.formData.country === "") {
    //     this.formData.errorMessage = "Please enter your country.";
    //   }

    //   // Validate city
    //   if (this.formData.city === "") {
    //     this.formData.errorMessage = "Please enter your city.";
    //     return;
    //   }
    //   // Validate message
    //   if (this.formData.message === "") {
    //     this.formData.errorMessage = "Please enter your message.";
    //     return;
    //   }

    //   // Validate acceptCondition
    //   if (!this.formData.acceptCondition) {
    //     this.formData.errorMessage = "Please accept the terms and conditions.";
    //     return;
    //   }

    //   // For demonstration purposes, let's just log the form data
    //   console.log("Form submitted successfully!");
    //   console.log("Form data:", this.formData);

    //   // Open the modal after successful form submission
    //   this.showModal();
    // },


    // Method to show the modal
    showModal() {
      var modal = document.getElementById("ignismyModal");
      if (modal) {
        modal.style.display = "block";
        modal.classList.add("show"); // Use 'classList' instead of 'classlist'
        // setTimeout(() => {
        //   this.hideModal(); // Use 'this' to refer to the component's instance
        // }, 2000); // Hide modal after 2 seconds
      }
    },
    // Method to hide the modal
    hideModal() {
      var modal = document.getElementById("ignismyModal");
      if (modal) {
        modal.style.display = "none";
        modal.classList.remove("show"); // Use 'classList' instead of 'classlist'
      }
    },
  },
  created() {

    // this.getprofile()
    //this.fetchProfileData()
    // this.checkIfGoogleOrFacebookUser()




  },

  async mounted() {
    this.createObserver();
    this.setLogin(localStorage.getItem('login'))
    console.log("hahahahhahahahahha", this.isLogin);


    window.addEventListener('storage', this.handleStorageChange);
    this.retrieveCars();
    // this.retrieveALLCommunities();
    // Show the modal when the component is mounted
    // this.showFilterModal();
    // Add event listener to the document body for clicks
    document.body.addEventListener("click", this.handleOutsideClick);
    await this.fetchProfileData()
    await this.fetchproData()


    this.fetchBannerStories()

  },

  beforeUnmount() {

    document.body.removeEventListener("click", this.handleOutsideClick);
    window.removeEventListener('storage', this.handleStorageChange); // Remove the event listener

  },
};

</script>

<style scoped>
@import "vue-select/dist/vue-select.css";


textarea.form-control {
  min-height: calc(1.5em +(1.75rem + 2px)) !important;
}

.modalaa {
  position: static !important;
  background: transparent !important;
}

.btnRemv {
  /* position: absolute;
  top: 0px;
  right: 0cm; */
  transition: 0.2s all ease-in-out;
  color: #ffff
}

.btnRemv:hover {
  color: #f95f19;
  transform: scale(1.02);

}

.upImageArea {
  border-radius: 50px;
  background: #031726;
  color: #fff;
  font-size: 12px;
  padding: 0.5rem;
  border: 1px solid #1a202c;

}

.upImageArea>span {
  max-width: 260px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}

.upImageArea>img {
  width: 100px;
  height: 100px;
  border-radius: 8px;
  object-fit: cover;
}

.topN35 {
  top: -35px;
  cursor: pointer
}

.topN35>label {

  cursor: pointer
}

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
  background-color: transparent;
  background-clip: padding-box;
  border: 1px solid #1a202c;
  border-radius: 5px;
  outline: 0;
  box-shadow: rgba(28, 30, 63, 0.4) 0px 30px 90px;
}

.form-select {
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
  background: #FF7A00;
  color: #fff;
}

.getAll {
  background: #5D3327 !important;
  color: #fff
}

.genCard .singleGen {
  cursor: pointer;
  marker: none;
  width: 100%;
}

.genCard .singleGen:hover {
  background: #f95f19;
  color: #fff
}

.borderBr {
  border: 1px solid #f95f19;
  width: 100% !important;
  border-radius: 10px;
}

/* new */

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
  max-height: 300px;
  overflow-y: scroll;
  color: #fff;
  transition: height 0.5s ease-in-out;
  z-index: 9999
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
</style>

<style scoped>
.form-control.form-input.h-auto {
  height: auto !important;
}

.form-check-input {
  box-shadow: 2px 3px 6px rgba(0, 0, 0, 1.1);
  position: relative;

  cursor: pointer;
  background-color: #f95f19 !important;
  border: none !important;
}

.coloror {
  color: #f95f19 !important;
}

.modal {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1060;
  display: none;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  outline: 0;
  background-color: rgba(0, 8, 20, 0.9);
}

.modal-dialog {
  width: 100%;
  max-width: 1000px;
  margin: 1.75rem auto;
  position: relative;
  top: 15%;
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

.modal-header {
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1rem;
  border-bottom: 1px solid #dee2e6;
  border-top-left-radius: calc(.3rem - 1px);
  border-top-right-radius: calc(.3rem - 1px);
}

.thank-you-pop {
  width: 100%;
  padding: 20px;
  text-align: center;
}

.thank-you-pop img {
  width: 76px;
  height: auto;
  margin: 0 auto;
  display: block;
  margin-bottom: 25px;
}

.thank-you-pop h1 {
  font-size: 42px;
  margin-bottom: 25px;
  color: #ffffff;
}

.thank-you-pop p {
  font-size: 20px;
  margin-bottom: 27px;
  color: #ffffff;
}

.btn-close {
  box-sizing: content-box;
  width: 1em;
  height: 1em;
  padding: 0.25em 0.25em;
  color: #fff;
  background: #fff url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23000'%3e%3cpath d='M.293.293a1 1 0 011.414 0L8 6.586 14.293.293a1 1 0 111.414 1.414L9.414 8l6.293 6.293a1 1 0 01-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 01-1.414-1.414L6.586 8 .293 1.707a1 1 0 010-1.414z'/%3e%3c/svg%3e") center/1em auto no-repeat;
  border: 0;
  border-radius: 0.25rem;
  opacity: 1;
}

.cardOverlay {

  position: absolute;
  /* height: 65%; */
  height: 102%;
  width: 96%;

  /* background: url('../../public/images/layer2.png');
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), */
  /* Background image */
  /* url('../../public/images/layer1.png'); */
  opacity: 0.9;
  /* background-size: cover; */
  z-index: 4
}

.cardOverlay img {
  position: absolute;
  width: 102%;
  top: 0;
  height: 100%
}

.z1o {
  z-index: 0
}

@media screen and (max-width: 991px) {

  div.start-engine-div .border-bottom-btn.border-top-btn.border-right-radius .img-border {
    left: 63px;
  }

  div.start-engine-div .border-bottom-btn.border-top-btn,
  div.start-engine-div .border-bottom-btn {
    left: 78px;
  }

  .border-bottom-btn .img-border {
    width: 80%;
  }

}

@media(max-width:768px) {
  .cardOverlay img {
    height: 100%;
  }

  .z1o2 {

    z-index: 0
  }

  citei .options-list {
    position: static;
  }

  .signin-btnli {
    width: 130px !important;
  }
}

@media(max-width:375px) {
  .cardOverlay img {
    height: 89%;
  }
}

.libtn {
  width: fit-content !important;
}

.img-div-footer {
  min-width: 105px !important;
  border-radius: 10px !important
}

.tranc {
  /* width: 250px !important; */
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
  max-height: 9em;
  /* Ensures only two lines are shown (line-height * 2) */
  line-height: 1.5em;
  /* Set the desired line height */
}

.img-car {
  width: 220px !important;
  border-radius: 10px !important;
}

.imgcrop {
  width: 100%;
  height: 300px
}

.cropper-canvas img {
  width: 100% !important;
  height: 300px !important;
}





.draggable-area {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  border: 2px dashed #fff;
  padding: 15px;
  margin-top: 20px;
}

.image-item {

  position: relative;


  cursor: move;
  /* Indicate that the item is draggable */
  width: 32%;
  min-height: 200px;
  color: #fff;
}

.image-number {
  font-weight: bold;
  font-weight: bold;
  position: absolute;
  height: 20px;
  width: 20px;
  background: #363F4C;

  display: flex;
  justify-content: center;
  align-items: center;
}

.mainImage {
  /* Styles specific to the second image */
  border: 2px dotted #f95f19;
  /* Example: red border */

  /* Example: slightly larger */
}

.mainImage>.image-number {
  font-weight: bold;
  font-weight: bold;
  position: absolute;
  height: 20px;
  width: 20px;
  background: #f95f19 !important;

  display: flex;
  justify-content: center;
  align-items: center;
}

.Note {
  color: #fff;
}

.Note strong {
  color: #f95f19
}

@media(max-width:768px) {
  .car-content {
    flex-direction: column !important;
    align-items: center !important;
    justify-content: center !important;
  }

  .row {
    width: 100% !important;
  }

  .h5-title {
    text-align: center;
  }

  .footer-allDetails {
    text-align: center;
  }

  .main-title {
    white-space: wrap;
    font-size: 45px;
    text-align: center;
  }

  .c-home {
    /* top: 0px; */
    /* display: flex; */
    /* gap: 1rem; */
    /* align-items: center; */
    /* bottom: unset !important; */
    white-space: nowrap;
    /* position: static !important;  */
  }

  .c-about {
    /* top: 0px; */
    /* display: flex; */
    /* gap: 1rem; */
    /* align-items: center; */
    /* bottom: unset !important; */
    white-space: nowrap;
    /* position: static !important;  */
  }

  .c-feature {
    /* top: 0px;
    display: flex;
    gap: 1rem;
    align-items: center;
    bottom: unset !important;
    white-space: nowrap; */
    /* position: static !important; */
  }

  .c-story {
    /* top: 0px;
    display: flex;
    gap: 1rem;
    align-items: center;
    bottom: unset !important;
    white-space: nowrap; */
    position: static !important;
  }

  .fp-overflow {
    width: 100% !important;
    overflow: auto !important;
  }

  .custom-navigation {
    height: 320px !important;
  }
}



.section {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: start;
  /* font-size: 2em; */
}

.custom-navigation {
  /* position: fixed;
  top: 10px;
  right: 10px; */
}

.c-home {
  position: absolute;
  left: 0;
  top: 65%;
  bottom: 15%
}

.c-about {
  position: absolute;
  left: 0;
  top: 73%;
  bottom: 15%
}

.c-feature {
  position: absolute;
  left: 0;
  top: 72%;
  bottom: 15%
}

.c-story {
  position: absolute;
  left: 0;
  bottom: 15%;
}


.custom-navigation button {
  display: block;
  margin-bottom: 2px;
  cursor: pointer;
  background: transparent;
  color: #fff;
  font-size: 12px;
  border: none;
  outline: none
}



.custom-navigation button .progress {
  width: 2px;
  height: 19px;
  /* position: absolute; */
  border-radius: 0;
  top: 0;
  left: -10px;
  background: #fff;
  transition: background-color 0.3s ease;
}

.custom-navigation button.active .progress {
  background-color: #f95f19;
  /* Active color */
}

.custom-navigation button.active {
  color: #f95f19 !important
}


.carContent {
  cursor: pointer;
  /* background: #243248;
  opacity: 0.7; */
  border-radius: 10px;
  padding: 1rem;
  margin: 1rem;
  /* From https://css.glass */
  background: rgba(36, 50, 72, 0.39);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(2px);
  -webkit-backdrop-filter: blur(2px);
  border: 1px solid rgba(36, 50, 72, 0.19);
}

.carContent img {
  border-radius: 8px
}

.car-content-link {
  color: #fff !important;
  font-size: 11px
}

.boxAbout {
  background: rgba(36, 50, 72, 0.39);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(2px);
  -webkit-backdrop-filter: blur(2px);
  border: 1px solid rgba(36, 50, 72, 0.19);
}

.boxAbout p {
  color: #d8d8d8 !important;

}

/* 
.slide-in-backward {
  animation: slideInBackward 0.7s ease-out forwards;
}

@keyframes slideInBackward {
  from {
    transform: translateY(-100%);
    opacity: 0;
  }

  to {
    transform: translateY(0);
    opacity: 1;
  }
}

.slide-out-forward {
  animation: slideOutForward 0.7s ease-out forwards;
}

@keyframes slideOutForward {
  from {
    transform: translateY(0);
    opacity: 1;
  }

  to {
    transform: translateY(100%);
    opacity: 0;
  }
} */
.section {
  transform: rotateX(-90deg) translateZ(-100px);
}

.slide-in-backward-3d {
  animation: slideInBackward3D 0.5s ease-out forwards;
}

@keyframes slideInBackward3D {
  from {
    transform: translateY(-100px);
    scale: 0.02
  }

  to {
    transform: translateY(0);
    scale: 1
  }
}

.slide-out-forward-3d {
  animation: slideOutForward3D 0.5s ease-out forwards;
}

@keyframes slideOutForward3D {
  from {
    transform: translateY(0);
    scale: 1
  }

  to {
    transform: translateY(100px);
    scale: 0.02
  }
}
</style>
