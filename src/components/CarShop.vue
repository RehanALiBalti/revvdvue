<template>
  <HeaderItem />

  <div class="container my-5">
    <div class="form-content-home1">
      <form id="subscribe-form" @submit.prevent="validateForm">
        <h2 class="form-title">Sell <span class="form-span"> Cars </span></h2>
        <div class="row">
          <div class="col-md-4">
            <label for="title" class="form-label">Add title</label>
            <input
              v-model="formData.title"
              id="title"
              type="text"
              name="title"
              class="form-control form-input"
              placeholder="Enter here"
            />
          </div>
          <div class="col-md-4">
            <label for="brand" class="form-label">
              Brand (drop down list)
            </label>
            <select
              v-model="formData.selectedBrand"
              id="brand"
              name="brandType"
              class="form-select form-control form-input"
            >
              <!-- :key="brand.id"  -->
              <option value="">Select</option>
              <option v-for="brand in brands" :key="brand">
                {{ brand }}
              </option>
            </select>
          </div>
          <div class="col-md-4">
            <label for="bodyType" class="form-label">Body type :</label>
            <input
              v-model="formData.bodyType"
              id="bodyType"
              type="text"
              name="bodyType"
              class="form-control form-input"
              placeholder="Enter here"
              
            />
          </div>
          <div class="col-md-4">
            <label for="type" class="form-label">Type :</label>
            <input
              v-model="formData.type"
              type="text"
              id="type"
              name="type"
              class="form-control form-input"
              placeholder="Enter here"
            />
          </div>
          <div class="col-md-4">
            <label for="seats" class="form-label">Seats :</label>
            <input
              v-model.number="formData.seats"
              type="number"
              id="seats"
              name="seats"
              class="form-control form-input"
              placeholder="Enter here"
            />
          </div>
          <div class="col-md-4">
            <label for="doors" class="form-label">Doors :</label>
            <input
              v-model.number="formData.doors"
              type="number"
              id="doors"
              name="doors"
              class="form-control form-input"
              placeholder="Enter here"
            />
          </div>
          <div class="col-md-4">
            <label for="countryVersion" class="form-label"
              >Country version :</label
            >
            <input
              v-model="formData.countryVersion"
              type="text"
              id="countryVersion"
              name="countryVersion"
              class="form-control form-input"
              placeholder="Enter here"
            />
          </div>
          <div class="col-md-4">
            <label for="offerNumber" class="form-label">Offer number :</label>
            <input
              v-model.number="formData.offerNumber"
              type="number"
              id="offerNumber"
              name="offerNumber"
              class="form-control form-input"
              placeholder="Enter here"
            />
          </div>
          <div class="col-md-4">
            <label for="modelCode" class="form-label">Model code :</label>
            <input
              v-model="formData.modelCode"
              type="text"
              id="modelCode"
              name="modelCode"
              class="form-control form-input"
              placeholder="Enter here"
            />
          </div>
          <div class="col-md-4">
            <label for="milage" class="form-label">Milage :</label>
            <input
              v-model.number="formData.milage"
              type="number"
              id="milage"
              name="milage"
              class="form-control form-input"
              placeholder="Enter here"
            />
          </div>
          <div class="col-md-4">
            <label for="firstRegistration" class="form-label"
              >First registration :</label
            >
            <input
              v-model="formData.firstRegistration"
              type="text"
              id="firstRegistration"
              name="firstRegistration"
              class="form-control form-input"
              placeholder="Enter here"
            />
          </div>
          <div class="col-md-4">
            <label for="generalInspection" class="form-label"
              >General inspection :</label
            >
            <input
              v-model="formData.generalInspection"
              type="text"
              id="generalInspection"
              name="generalInspection"
              class="form-control form-input"
              placeholder="Enter here"
            />
          </div>
          <div class="col-md-4">
            <label for="previousOwners" class="form-label"
              >Previous owners :</label
            >
            <input
              v-model="formData.previousOwners"
              type="text"
              id="previousOwners"
              name="previousOwners"
              class="form-control form-input"
              placeholder="Enter here"
            />
          </div>
          <div class="col-md-4">
            <label for="fullServiceHistory" class="form-label"
              >Full service history :</label
            >
            <input
              v-model="formData.fullServiceHistory"
              type="text"
              id="fullServiceHistory"
              name="fullServiceHistory"
              class="form-control form-input"
              placeholder="Enter here"
            />
          </div>
          <div class="col-md-4">
            <label for="nonSmokerVehicle" class="form-label"
              >Non smoker vehicle
            </label>
            <input
              v-model="formData.nonSmokerVehicle"
              type="text"
              id="nonSmokerVehicle"
              name="nonSmokerVehicle"
              class="form-control form-input"
              placeholder="Enter here"
            />
          </div>
          <div class="col-md-4">
            <label for="price" class="form-label">Price </label>
            <input
              v-model.number="formData.price"
              type="number"
              id="price"
              name="price"
              class="form-control form-input"
              placeholder="Enter here"
              
            />
          </div>
          <div class="col-md-8">
            <label for="descriptionTitle" class="form-label"
              >Description title</label
            >
            <input
              v-model="formData.descriptionTitle"
              type="text"
              id="descriptionTitle"
              name="descriptionTitle"
              class="form-control form-input"
              placeholder="Enter here"
              
            />
          </div>
          <div class="col-md-12">
            <label for="fullDescription" class="form-label"
              >Full description</label
            >
            <textarea
              v-model="formData.fullDescription"
              id="fullDescription"
              class="form-control form-input"
              name="fullDescription"
              placeholder="Enter here"
              rows="4"
            ></textarea>
          </div>

          <div class="col-md-12">
            <label for="uploadPhotos" class="form-label"
              >Upload Photos (Multiple)</label
            >
            <input
              type="file"
              id="uploadPhotos"
              name="uploadPhotos[]"
              class="form-control form-input"
              ref="fileInput"
              multiple
              @change="handleFileChange"
              hidden
            />
            <button
              type="button"
              id="uploadBtn"
              class="btn uploadPhoto"
              @click="openFileInput"
            >
              Tap to upload photos
            </button>
            <div id="fileList">
              <div
                v-for="(file, index) in formData.uploadPhotos"
                :key="index"
                class="file-list-item"
              >
                {{ file.name }}
                <button class="delete-button" @click="removeFile(index)">
                  ✖
                </button>
              </div>
            </div>
          </div>

          <div class="col-md-12">
            <p class="text-danger" id="errormsg">{{errorMessage}}</p>
          </div>
          <div class="col-md-12">
            <div class="list-item-btn position-relative submit-btn-div">
              <span class="border-bottom-btn border-top-btn position-absolute">
                <img
                  src="@/assets/images/Group12.png"
                  class="img-border position-absolute"
                  alt=""
                />
              </span>

              <span
                class="border-bottom-btn border-top-btn border-right-radius position-absolute"
              >
                <img
                  src="@/assets/images/Path467.png"
                  class="img-border position-absolute"
                  alt=""
                />
              </span>

              <span
                class="border-bottom-btn border-top-btn border-right-radius border-right-bottom-radius position-absolute"
              >
                <img
                  src="@/assets/images/Path465.png"
                  class="img-border position-absolute"
                  alt=""
                />
              </span>
              <button
                type="submit"
                class="signin-btnli submitNow"
                id="submit-button"
              >
                Submit Now
              </button>
              <!-- <a href="<?= base_url('site/offer')?>" class="signin-btnli submitNow" id="submit-button">
							Submit Now </a> -->
              <span class="border-bottom-btn border-left-btn position-absolute">
                <img
                  src="@/assets/images/Group11.png"
                  class="img-border position-absolute"
                  alt=""
                />
              </span>
              <span class="border-bottom-btn position-absolute">
                <img
                  src="@/assets/images/Path473.png"
                  class="img-border position-absolute"
                  alt=""
                />
              </span>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>

  <div class="container mt-5">
    <div class="map-desc">
      <div class="map-para-div">
        <p class="map-para">
          Lorem Ipsum is simply dummy text of the printing &amp; typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s,
        </p>
      </div>
      <ul class="icons-list">
        <li class="icons-list-item">
          <a class="icons-list-atag" href="">
            <i class="fab fa-facebook-f"></i>
          </a>
        </li>

        <li class="icons-list-item">
          <a class="icons-list-atag" href="">
            <!-- <i class="fab fa-twitter"></i> -->
            <i class="fa-brands fa-x-twitter"></i>
          </a>
        </li>

        <!-- <li class="icons-list-item">
						<a class="icons-list-atag" href="">
							<i class="fa-brands fa-youtube"></i>
						</a>
					</li> -->
        <li class="icons-list-item">
          <a class="icons-list-atag" href="">
            <i class="fab fa-instagram"></i>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import HeaderItem from "./Header.vue";
export default {
  name: "CarShop",
  components: {
    HeaderItem,
  },
  data() {
    return {
      formData: {
        title: "",
        selectedBrand: "",
        bodyType: "",
        type: "",
        seats: null,
        doors: null,
        countryVersion: "",
        offerNumber: null,
        modelCode: "",
        milage: null,
        firstRegistration: "",
        generalInspection: "",
        previousOwners: "",
        fullServiceHistory: "",
        nonSmokerVehicle: "",
        price: null,
        descriptionTitle: "",
        fullDescription: "",
        uploadPhotos: [],
      },
      brands: [
        // List of available brands
        "Car Enthusiast",
        "Tunning/Performance Shop",
        "Private Car Seller",
        "Professional Car Seller",
        "Cosmetics modification shop Performance Modifications shop",
        "Car Photography",
        "Car Spotter",
        "Car Club",
        "Car Animator/Illustrator",
      ],
    };
  },
//   methods: {
// 	handleFileChange(event){
// 		const files = event.target.files;
// 		// Reset the array to clear previous selections
// 		this.formData.uploadPhotos = [];
// 		for(let i=0; i)
// 	}
//   },
};
</script>


<style scoped>

.uploadPhoto {
	width: 100%;
	display: block;
	outline: none;
	border: 1px solid #1a202c;
	font-size: 18px;
	font-weight: 400;
	color: #c5c5c5;
	font-family: "Gruppo", sans-serif;
	height: 55px;
	background-color: #031726;
	border-radius: 5px;
}

.btn-check:focus + .btn,
.btn:focus {
	outline: 0;
	box-shadow: none;
}

.uploadPhoto:hover {
	color: #c5c5c5;
}

#fileList .file-list-item {
	color: #ffffff;
	font-size: 16px;
	font-weight: 400;
	padding-top: 0.9rem;
}

#fileList {
	display: flex;
	flex-wrap: wrap;
	gap: 1rem;
}

.delete-button {
	border: none;
	background-color: transparent;
	color: #ffffff;
	padding-left: 0.5rem;
}

/* signin start */

.signIn-div {
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	gap: 1rem;
}

.btn.google-btn {
	width: 100%;
	height: 55px;
	border-radius: 5px;
	background-color: #031726;
	border: 1px solid #1a202c;
	outline: none;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 22px;
	font-weight: 400;
	color: #ffffff;
	gap: 1rem;
	transition: all 0.2s ease;
	max-width: 620px;
}

.btn.google-btn:hover {
	color: #f95f19;
	background-color: #031726;
}

/* signin end */

/* community start */
.btns-community {
	display: flex;
	justify-content: end;
	align-items: end;
	width: 100%;
	gap: 1rem;
	position: relative;
	top: 100px;
}

.btn-div-create-forum {
	width: 100%;
	max-width: 174px;
}

.btn-div-create-forum .signin-btnli.signup-btnli,
.btn-div-create-forum .signin-btnli {
	width: 100%;
}

.btn-div-create-forum .border-bottom-btn .img-border {
	left: 0;
}

.communtiy-content {
	width: 100%;
	height: 230px;
	border-radius: 5px;
	background-color: #1a202c;
	border: 1px solid #000d21;
	padding: 40px;
}
.list-community-add {
	width: 100%;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	gap: 4rem;
}

.like-community {
	color: #ffffff;
	font-size: 12px;
	font-weight: 400;
	display: flex;
	gap: 0.4rem;
	align-items: center;
}

.map-para-div.community-para-div {
	text-align: left;
}

.community-pagination {
	display: flex;
	justify-content: end;
	align-items: center;
}
/* community end */

/* community details start */

.communityDetailsMain {
	background-color: #1a202c;
	border-radius: 10px;
	width: 100%;
	height: 100%;
}

.communityDetails-bg {
	width: 100%;
	height: 100%;
	padding: 2rem;
}

.img-communityDetails-div {
	width: 100%;
	height: 100%;
}

.img-communityDetails-div .img-communityDetails {
	width: 100%;
	height: 100%;
	object-fit: cover;
}

.communityDetails-chatContent {
	width: 100%;
	max-height: 700px;
	overflow-y: auto;
	margin: 1.5rem 0;
}

/* width */
.communityDetails-chatContent::-webkit-scrollbar {
	width: 10px;
}

/* Track */
.communityDetails-chatContent::-webkit-scrollbar-track {
	background: #f1f1f1;
}

/* Handle */
.communityDetails-chatContent::-webkit-scrollbar-thumb {
	background: #888;
}

/* Handle on hover */
.communityDetails-chatContent::-webkit-scrollbar-thumb:hover {
	background: #555;
}

.sender-chats {
	width: 100%;
	max-width: 770px;
	max-height: 400px;
	overflow-y: auto;
	float: left;
	background-color: #000b1c;
	border-radius: 5px;
	border: 1px solid #000d21;
	margin: 0.5rem 0;
}

/* width */
.sender-chats::-webkit-scrollbar {
	width: 5px;
}

/* Track */
.sender-chats::-webkit-scrollbar-track {
	background: #f1f1f1;
}

/* Handle */
.sender-chats::-webkit-scrollbar-thumb {
	background: #888;
	border-radius: 5px;
}

/* Handle on hover */
.sender-chats::-webkit-scrollbar-thumb:hover {
	background: #555;
}

.receiver-chats {
	width: 100%;
	max-width: 770px;
	max-height: 400px;
	overflow-y: auto;
	float: right;
	background-color: #031726;
	border-radius: 5px;
	border: 1px solid #000d21;
	margin: 0.5rem 0;
	display: flex;
	justify-content: end;
	align-items: center;
	margin-left: auto;
	margin-right: 1rem;
}

/* width */
.receiver-chats::-webkit-scrollbar {
	width: 5px;
}

/* Track */
.receiver-chats::-webkit-scrollbar-track {
	background: #f1f1f1;
}

/* Handle */
.receiver-chats::-webkit-scrollbar-thumb {
	background: #888;
	border-radius: 5px;
}

/* Handle on hover */
.receiver-chats::-webkit-scrollbar-thumb:hover {
	background: #555;
}

.sender-chats-para {
	font-size: 17px;
	font-weight: 400;
	color: #eeeeee;
	text-align: left;
	padding: 1rem;
	word-wrap: break-word;
	flex-wrap: wrap;
	word-break: break-all;
	font-family: "Lato", sans-serif;
	margin-bottom: 0;
	width: 100%;
}

.receiver-chats-para {
	font-size: 17px;
	font-weight: 400;
	color: #eeeeee;
	width: 100%;
	text-align: left;
	padding: 1rem;
	word-wrap: break-word;
	flex-wrap: wrap;
	word-break: break-all;
	font-family: "Lato", sans-serif;
	margin-bottom: 0;
}

.commentsByReceiver {
	width: 100%;
}

.form-control.form-input.inputComments {
	border-radius: 10px;
	height: 70px;
	background-color: #031726;
	border: 1px solid #1a202c;
	font-size: 22px;
	font-weight: 400;
	color: #c5c5c5;
	overflow: auto;
	padding: 1rem 5rem 1rem 2rem;
	white-space: pre-wrap; /* Wrap text on overflow */
}

.form-control.form-input.inputComments::placeholder {
	font-size: 22px;
	font-weight: 400;
	color: #c5c5c5;
}

/* Hide scrollbar for Chrome, Safari and Opera */
.form-control.form-input.inputComments::-webkit-scrollbar {
	display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.form-control.form-input.inputComments {
	-ms-overflow-style: none; /* IE and Edge */
	scrollbar-width: none; /* Firefox */
}

.iconMaterialSend {
	right: 20px;
	top: 50%;
	transform: translateY(-50%);
	cursor: pointer;
}
/* community details end*/

/* My Car Listing Card start */
.card.myCarListingCard {
	width: 100%;
	max-height: 999px;
	background-color: #1a202c;
	border: 1px solid #000d21;
	border-radius: 5px;
	padding: 20px;
	text-align: left;
}

.slider-img.myCarListingCard-img {
	height: 260px;
	object-fit: cover;
}

.slider-img.myCarListingCard-img,
.swiper-container.myCarListingCard-swiper-container {
	max-width: 100%;
	position: relative;
	cursor: pointer;
}

.myCarListingCard-user-details-car {
	margin-top: 1rem;
}

.card-body {
	padding: 1rem 0 0 0;
}

.myCarListingCard-logo-img-div {
	width: 59px;
	height: 59px;
	display: flex;
	justify-content: center;
	align-items: center;
	top: 0;
	left: 0;
	background-color: #ffffff;
	border-radius: 4px;
	z-index: 999;
}

.myCarListingCard-logo-img {
	width: 100%;
	max-width: 51px;
	height: 20px;
	object-fit: cover;
}

.myCarListingCard-edit-delete-div {
	display: flex;
	justify-content: end;
	gap: 1rem;
	position: absolute;
	bottom: 15px;
	right: 15px;
	width: 100%;
	z-index: 999;
}

.myCarListingCard-delete-div {
	width: 50px;
	height: 50px;
	background-color: #000b1c;
	border-radius: 4px;
	border: 2px solid #ffffff;
	color: #ffffff;
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;
	transition: all 0.3s ease-in-out;
}

.myCarListingCard-delete-div:hover {
	color: #f95f19;
	border: 2px solid #f95f19;
}

.trash-icon {
	font-size: 22px;
}

/* My Car Listing Card end */

/* profile start */
.user-profile-page {
	width: 100%;
	text-align: center;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
}

.user-profile-page-img {
	width: 100%;
	max-width: 120px;
	height: 100%;
	max-height: 120px;
	object-fit: cover;
	border-radius: 15px;
	border: 1px solid #1a202c;
}

.map-para.email-user-profile-page-para {
	color: #c5c5c5;
	font-family: "Gruppo", sans-serif;
	font-size: 20px;
}
/* profile end */

/* weekly story start */

.map-para.email-user-profile-page-para.weekly {
	font-family: "Goldman", cursive;
	color: #ffffff;
	text-align: end;
	margin-bottom: 0;
	padding-right: 15px;
	font-size: 18px;
}

.card-title-div.flex {
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
}

.main-slider.weekly-slider {
	width: 100%;
	justify-content: flex-start;
}

.main-slider.weekly-slider .swiper-container {
	margin: 0;
}

.main-slider.weekly-slider .card-content-car {
	width: 100%;
}

.main-slider.weekly-slider .card-title-h2 {
	width: 100%;
	margin-bottom: 0;
}

.card-text.weekly-story-para-card {
	color: #eeeeee;
	font-family: "Lato", sans-serif;
	padding-right: 15px;
	margin-bottom: 0;
}

.main-slider.weekly-slider .user-details-car {
	margin-bottom: 0;
}
/* weekly story end */

/* carListing5 start */
.carListing5Image-img {
	width: 100%;
	height: 505px;
	object-fit: cover;
}

.card-title-h2.carListing5-h2-title {
	padding: 1rem 0 0.5rem;
}

.icon-user.carListing5-icon-user {
	width: 60px;
	height: 30px;
	background-color: #1a202c;
}

.user-details-car.carListing5-user-details-car {
	justify-content: flex-start;
	gap: 5rem;
}
/* carListing5 end */

/* weeklyStory1 start */
.weeklyStory1-section-car-listing {
	/* background-image: linear-gradient(rgba(0, 11, 28, 0.7), rgba(0, 11, 28, 0.7)), url(../images/carsshopdownload.png); */
}

.view-more-cars.position-absolute {
	right: 15px;
	bottom: 0;
}

.icon-user.weeklyStory1 {
	width: 60px;
	height: 35px;
}
/* weeklyStory1 end */

/* map2 start */
.location-img.location-logo-img1 {
	left: 33%;
	top: 22%;
}

.location-img.location-logo-img2 {
    left: 30%;
    top: auto;
    bottom: 32%;
}

.location-img.location-logo-img3 {
    left: auto;
    right: 0%;
    top: auto;
    bottom: 16%;
}

.main-slider.weekly-slider.align-items-start .slider-img{
	cursor: pointer;
}
/* map2 end */


@media screen and (max-width: 991px) {
	.communtiy-content {
		height: auto;
		padding: 25px;
	}

	.sender-chats, .receiver-chats{
		max-width: 450px;
	}

	.main-slider.weekly-slider.align-items-start .swiper-container{
		max-width: 100%;
	}
}

@media screen and (max-width: 767px){
.sender-chats, .receiver-chats {
    max-width: 220px;
}

.user-details-car.carListing5-user-details-car {
    gap: 1.5rem;
}
}

@media screen and (max-width: 575px){
.sender-chats, .receiver-chats {
    max-width: 239px;
}

}

@media screen and (max-width: 400px){
.sender-chats, .receiver-chats {
    max-width: 195px;
}

.view-more-cars.position-absolute {
    position: relative !important;
}

.card-title-div.flex {
    flex-wrap: wrap;
}

.card-text.weekly-story-para-card {
    padding-right: 0;
    text-align: justify;
}
}

@media screen and (max-width: 319px){
.sender-chats, .receiver-chats {
    max-width: 100%;
}
}

</style>