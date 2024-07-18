<template>
	<div class="container my-5">
		<div class="row">
			<div class="col-md-8 m-auto">
				<div class="form-content-home1">

					<form id="subscribe-form" @submit.prevent="updateUserAttributes" v-if="role != 'dealer'">
						<div class="user-profile-page">
							<img :src="getProfileImage(profileImageState.profileImage)" class="user-profile-page-img"
								alt="Profile Image"
								v-if="this.image != '' && this.image != null && this.image != undefined"
								@click="openFileInput" />
							<!-- <img v-if="image != ''" src="https://squid-app-yq2ph.ondigitalocean.app/ +${image} " class="user-profile-page-img" alt="user"
								@click="openFileInput"> -->
							<!-- <img v-if="image" :src="'https://squid-app-yq2ph.ondigitalocean.app/users/' + image"
								class="user-profile-page-img" alt="user" @click="openFileInput"> -->

							<div v-else>
								<img src="../assets/img/uploadImage.png" height="150px" width="150px"
									@click="openFileInput">
								<p class="text-white text-center">Upload Image</p>
							</div>

							<h2 class="form-title mt-2 mb-0">

								{{ name }}
							</h2>
							<p class="map-para email-user-profile-page-para">
								{{ email }}

							</p>
							<h2 class="form-title mt-2 mb-0">
								{{ uname }}
								<!-- {{ state.name }} -->

							</h2>

						</div>
						<div class="row">
							<div class="col-md-6">
								<label for="name" class="form-label">{{ $t('Nick Name') }}</label>
								<input v-model="fullname" id="name" type="text" name="name"
									class="form-control form-input" :placeholder="$t('Enter here')" required>
							</div>
							<div class="col-md-6">
								<label for="name" class="form-label">{{ $t('Full Name') }}</label>
								<input v-model="name" id="name" type="text" name="name" class="form-control form-input"
									:placeholder="$t('Enter here')" required>
							</div>
							<div class="col-md-6">
								<label for="age" class="form-label">{{ $t('age') }}</label>
								<input v-model="age" id="age" type="text" name="age" class="form-control form-input"
									:placeholder="$t('Enter here')" required>
							</div>
							<div class="col-md-6">
								<label for="email" class="form-label">{{ $t('emailVerification') }}</label>
								<input v-model="email" id="email" type="email" name="email"
									class="form-control form-input" :placeholder="$t('Enter here')" required>
							</div>
							<div class="col-md-6">
								<label for="phone" class="form-label">{{ $t('phoneVerification') }}</label>
								<input v-model="phone" id="phone" type="tel" name="phone"
									class="form-control form-input" :placeholder="$t('Enter here')" required>
								<!-- <div
									class="load-more-info w-100 d-flex justify-content-start align-items-center mb-4 mx-auto">
									<div class="list-item-btn position-relative load-more-div proceed-div mx-auto">
										<span class="border-bottom-btn border-top-btn position-absolute">
											<img src="@/assets/images/Group12engine.png"
												class="img-border position-absolute" alt="" />
										</span>

										<span
											class="border-bottom-btn border-top-btn border-right-radius popup-right position-absolute">
											<img src="@/assets/images/Path467engine.png"
												class="img-border position-absolute" alt="" />
										</span>

										<span
											class="border-bottom-btn border-top-btn border-right-radius border-right-bottom-radius popup-right-bottom position-absolute">
											<img src="@/assets/images/Path465engine.png"
												class="img-border position-absolute" alt="" />
										</span>
									
										<button type="button"
											class="signin-btnli Start Engine load-more-btn proceed-btn width-set"
											@click="openPhoneVerifyModel">
											Verify Phone #
										</button>
										<span class="border-bottom-btn border-left-btn new-popup position-absolute">
											<img src="@/assets/images/Group11engine.png"
												class="img-border position-absolute" alt="" />
										</span>
										<span class="border-bottom-btn position-absolute">
											<img src="@/assets/images/Path473engine.png"
												class="img-border position-absolute" alt="" />
										</span>
									</div>
								</div> -->
							</div>
							<div class="col-md-6">
								<label for="socialMedia" class="form-label">{{ $t('socialMediaOptional') }}</label>
								<input v-model="socialMedia" id="socialMedia" type="text" name="socialMedia"
									class="form-control form-input" placeholder="Enter here">
							</div>
							<div class="col-md-6 d-none">

								<label class="form-label" for="image">Select Image</label>
								<input type="file" class="form-control-file my-2" ref="fileInput">
							</div>
							<div class="col-md-12">

							</div>
							<div class="col-md-12">
								<div
									class="load-more-info w-100 d-flex justify-content-start align-items-center mb-4 mx-auto">
									<div class="list-item-btn position-relative load-more-div proceed-div mx-auto">
										<span class="border-bottom-btn border-top-btn position-absolute">
											<img src="@/assets/images/Group12engine.png"
												class="img-border position-absolute" alt="" />
										</span>

										<span
											class="border-bottom-btn border-top-btn border-right-radius popup-right position-absolute">
											<img src="@/assets/images/Path467engine.png"
												class="img-border position-absolute" alt="" />
										</span>

										<span
											class="border-bottom-btn border-top-btn border-right-radius border-right-bottom-radius popup-right-bottom position-absolute">
											<img src="@/assets/images/Path465engine.png"
												class="img-border position-absolute" alt="" />
										</span>
										<!-- data-bs-toggle="modal" -->
										<button type="submit"
											class="signin-btnli Start Engine load-more-btn proceed-btn width-set"
											id="submit-button">
											{{
						$t("updateProfile") }}
										</button>
										<span class="border-bottom-btn border-left-btn new-popup position-absolute">
											<img src="@/assets/images/Group11engine.png"
												class="img-border position-absolute" alt="" />
										</span>
										<span class="border-bottom-btn position-absolute">
											<img src="@/assets/images/Path473engine.png"
												class="img-border position-absolute" alt="" />
										</span>
									</div>
								</div>
								<!-- <div class="list-item-btn position-relative submit-btn-div">
									<button type="submit" class="signin-btnli submitNow" >{{
						$t("updateProfile") }}</button>
								</div> -->
							</div>
							<div class="col-md-12" v-if="socialSignIn == false">
								<div
									class="load-more-info w-100 d-flex justify-content-start align-items-center mb-4 mx-auto">
									<div class="list-item-btn position-relative load-more-div proceed-div mx-auto">
										<span class="border-bottom-btn border-top-btn position-absolute">
											<img src="@/assets/images/Group12engine.png"
												class="img-border position-absolute" alt="" />
										</span>

										<span
											class="border-bottom-btn border-top-btn border-right-radius popup-right position-absolute">
											<img src="@/assets/images/Path467engine.png"
												class="img-border position-absolute" alt="" />
										</span>

										<span
											class="border-bottom-btn border-top-btn border-right-radius border-right-bottom-radius popup-right-bottom position-absolute">
											<img src="@/assets/images/Path465engine.png"
												class="img-border position-absolute" alt="" />
										</span>
										<!-- data-bs-toggle="modal" -->
										<button type="button"
											class="signin-btnli Start Engine load-more-btn proceed-btn width-set"
											id="submit-button" @click="isModalReset = true">
											Change Password
										</button>
										<span class="border-bottom-btn border-left-btn new-popup position-absolute">
											<img src="@/assets/images/Group11engine.png"
												class="img-border position-absolute" alt="" />
										</span>
										<span class="border-bottom-btn position-absolute">
											<img src="@/assets/images/Path473engine.png"
												class="img-border position-absolute" alt="" />
										</span>
									</div>
								</div>
								<!-- <div class="list-item-btn position-relative submit-btn-div">
									<button type="submit" class="signin-btnli submitNow" >{{
						$t("updateProfile") }}</button>
								</div> -->
							</div>
						</div>
					</form>
					<form id="subscribe-form" @submit.prevent="updateUserAttributesDealer" v-else>

						<div class="user-profile-page">
							<h2 class="form-title mt-2 mb-0">

								{{ formData.CompanyName }}
							</h2>


							<p class="map-para email-user-profile-page-para">
								{{ formData.email }}
							</p>
						</div>
						<div class="row">
							<div class="col-md-12">
								<h3 class="text-white mt-2 mb-0">{{ $t('LocationOfVehicle') }}</h3>
								<label for="companyName" class="form-label">{{ $t('CompanyName') }}</label>


								<input v-model="formData.CompanyName" id="companyName mt-2" type="text"
									class="form-control form-input" required />
							</div>
							<div class="col-md-6">
								<label for="street" class="form-label">{{ $t('Street') }}</label>
								<input v-model="formData.street" id="street" type="text" class="form-control form-input"
									required :placeholder="$t('Enter here')" />
							</div>
							<div class="col-md-3">
								<label for="streetNo" class="form-label">No.</label>
								<input v-model="formData.streetNo" id="streetNo" type="number"
									class="form-control form-input" required :placeholder="$t('Enter here')" />
							</div>
							<div class="col-md-3">
								<label for="street2" class="form-label">{{ $t('Street') }} 2</label>
								<input v-model="formData.street2" id="street2" type="text"
									class="form-control form-input" required :placeholder="$t('Enter here')" />
							</div>
							<div class="col-md-3">
								<label for="zipCode" class="form-label">{{ $t('ZipCode') }}</label>
								<input v-model="formData.zipCode" id="zipCode" type="text"
									class="form-control form-input" required :placeholder="$t('Enter here')" />
							</div>
							<div class="col-md-3">
								<label for="city" class="form-label">{{ $t('City') }}</label>
								<input v-model="formData.city" id="city" type="text" class="form-control form-input"
									required :placeholder="$t('Enter here')" />
							</div>
							<div class="col-md-6">
								<label for="country" class="form-label">{{ $t('Country') }}</label>
								<input v-model="formData.country" type="text" class="form-control form-input" required
									:placeholder="$t('Enter here')" />
							</div>
							<!-- <div class="col-md-4">
								<label for="intlPrefix1" class="form-label">{{ $t('InternatPrefix1') }}</label>

								<input v-model="formData.intlPrefix1" id="fax" type="text"
									class="form-control form-input" required :placeholder="$t('Enter here')" />
							</div> -->
							<!-- <div class="col-md-3">
								<label for="prefix1" class="form-label">{{ $t('Prefix1') }}</label>
								<input v-model="formData.prefix1" id="prefix1" type="text"
									class="form-control form-input" required :placeholder="$t('Enter here')" />
							</div> -->
							<div class="col-md-6">
								<label for="phone1" class="form-label">{{ $t('Phone1') }}</label>
								<input v-model="formData.phone1" id="phone1" type="tel" class="form-control form-input"
									required :placeholder="$t('Enter here')"
									oninput="this.value = this.value.replace(/[^0-9]/g, '');" />
							</div>
							<!-- <div class="col-md-4">
								<label for="intlPrefix2" class="form-label">{{ $t('InternatPrefix1') }}</label>

								<input v-model="formData.intlPrefix2" id="intlPrefix2" type="text"
									class="form-control form-input" required :placeholder="$t('Enter here')" />
							</div> -->
							<!-- <div class="col-md-3">
								<label for="prefix2" class="form-label">{{ $t('Prefix1') }}</label>
								<input v-model="formData.prefix2" id="prefix2" type="text"
									class="form-control form-input" required :placeholder="$t('Enter here')" />
							</div> -->
							<div class="col-md-6">
								<label for="fax" class="form-label">{{ $t('Fax') }}</label>
								<input v-model="formData.fax" id="fax" type="tel" class="form-control form-input"
									required :placeholder="$t('Enter here')"
									oninput="this.value = this.value.replace(/[^0-9]/g, '');" />
							</div>
							<!-- <div class="col-md-4">
								<label for="intlPrefix3" class="form-label">{{ $t('InternatPrefix1') }}</label>

								<input v-model="formData.intlPrefix3" id="fax" type="text"
									class="form-control form-input" required :placeholder="$t('Enter here')" />
							</div> -->
							<!-- <div class="col-md-3">
								<label for="prefix3" class="form-label">{{ $t('Prefix1') }}</label>
								<input v-model="formData.prefix3" id="prefix3" type="text"
									class="form-control form-input" required :placeholder="$t('Enter here')" />
							</div> -->
							<div class="col-md-6">
								<label for="mobilePhone" class="form-label">{{ $t('MobilePhone') }}</label>
								<input v-model="formData.mobilePhone" id="mobilePhone" type="tel"
									class="form-control form-input" required :placeholder="$t('Enter here')"
									oninput="this.value = this.value.replace(/[^0-9]/g, '');" />
							</div>
							<div class="col-md-6">
								<label for="email" class="form-label">{{ $t('Email') }}</label>
								<input v-model="formData.email" id="email" type="email" class="form-control form-input"
									required :placeholder="$t('Enter here')" />
								<input v-model="formData.role" id="h" type="text" class="form-control form-input d-none"
									:placeholder="$t('Enter here')" value="dealer" />
							</div>



							<div class="col-md-12">
								<p id="errormsg"></p>
							</div>
							<div class="col-md-12">
								<div class="list-item-btn position-relative submit-btn-div">
									<span class="border-bottom-btn border-top-btn position-absolute">
										<img src="@/assets/images/Group12.png" class="img-border position-absolute"
											alt="" />
									</span>
									<span
										class="border-bottom-btn border-top-btn border-right-radius position-absolute">
										<img src="@/assets/images/Path467.png" class="img-border position-absolute"
											alt="" />
									</span>
									<span
										class="border-bottom-btn border-top-btn border-right-radius border-right-bottom-radius position-absolute">
										<img src="@/assets/images/Path465.png" class="img-border position-absolute"
											alt="" />
									</span>
									<button type="submit" class="signin-btnli submitNow" id="submit-button">
										{{ $t('submit') }}
									</button>
									<span class="border-bottom-btn border-left-btn position-absolute">
										<img src="@/assets/images/Group11.png" class="img-border position-absolute"
											alt="" />
									</span>
									<span class="border-bottom-btn position-absolute">
										<img src="@/assets/images/Path473.png" class="img-border position-absolute"
											alt="" />
									</span>
								</div>
							</div>
							<div class="col-md-12" v-if="socialSignIn == false">
								<div
									class="load-more-info w-100 d-flex justify-content-start align-items-center mb-4 mx-auto">
									<div class="list-item-btn position-relative load-more-div proceed-div mx-auto">
										<span class="border-bottom-btn border-top-btn position-absolute">
											<img src="@/assets/images/Group12engine.png"
												class="img-border position-absolute" alt="" />
										</span>

										<span
											class="border-bottom-btn border-top-btn border-right-radius popup-right position-absolute">
											<img src="@/assets/images/Path467engine.png"
												class="img-border position-absolute" alt="" />
										</span>

										<span
											class="border-bottom-btn border-top-btn border-right-radius border-right-bottom-radius popup-right-bottom position-absolute">
											<img src="@/assets/images/Path465engine.png"
												class="img-border position-absolute" alt="" />
										</span>
										<!-- data-bs-toggle="modal" -->
										<button type="button"
											class="signin-btnli Start Engine load-more-btn proceed-btn width-set"
											id="submit-button" @click="isModalReset = true">
											Change Password
										</button>
										<span class="border-bottom-btn border-left-btn new-popup position-absolute">
											<img src="@/assets/images/Group11engine.png"
												class="img-border position-absolute" alt="" />
										</span>
										<span class="border-bottom-btn position-absolute">
											<img src="@/assets/images/Path473engine.png"
												class="img-border position-absolute" alt="" />
										</span>
									</div>
								</div>
								<!-- <div class="list-item-btn position-relative submit-btn-div">
									<button type="submit" class="signin-btnli submitNow" >{{
						$t("updateProfile") }}</button>
								</div> -->
							</div>
						</div>
					</form>


				</div>
			</div>
		</div>
	</div>

	<!-- modal succes -->
	<div class="modal show d-block" tabindex="-1" role="dialog" id="carShopFilter" v-if="isModalOpen === true">
		<div class="modal-dialog modal-dialog-centered" role="document">
			<div class="modal-content">
				<div class="modal-body text-center">
					<span class="close-icon" @click="isModalOpen = false">
						<i class="fas fa-times"></i>
					</span>

					<div class="mt-4 py-2">
						<h5 class="card-title"><span class="choose">Success!</span></h5>
						<p class="text-white">User profile has been successfully updated!</p>
					</div>


				</div>
			</div>
		</div>
	</div>
	<!-- modal fail -->
	<div class="modal show d-block" tabindex="-1" role="dialog" id="carShopFilter" v-if="isModalOpenFail === true">
		<div class="modal-dialog modal-dialog-centered" role="document">
			<div class="modal-content">
				<div class="modal-body text-center">
					<span class="close-icon" @click="isModalOpenFail = false">
						<i class="fas fa-times"></i>
					</span>

					<div class="mt-4 py-2">
						<h5 class="card-title"><span class="choose">Something Went Wronge </span></h5>

						<p class="text-white">{{ errorMessage }}</p>
					</div>


				</div>
			</div>
		</div>
	</div>
	<!-- modal success -->
	<div class="modal show d-block" tabindex="-1" role="dialog" id="carShopFilter" v-if="modalSuccess === true">
		<div class="modal-dialog modal-dialog-centered" role="document">
			<div class="modal-content">
				<div class="modal-body text-center">
					<span class="close-icon" @click="modalSuccess = false">
						<i class="fas fa-times"></i>
					</span>

					<div class="mt-4 py-2">
						<h5 class="card-title"><span class="choose">Congratulation </span></h5>

						<p class="text-white">{{ SuccessMesage }}</p>
					</div>


				</div>
			</div>
		</div>
	</div>
	<!-- modal restpasword -->
	<div class="modal show d-block" tabindex="-1" role="dialog" id="carShopFilter" v-if="isModalReset === true">
		<div class="modal-dialog modal-dialog-centered" role="document">
			<div class="modal-content">
				<div class="modal-body text-center">
					<span class="close-icon" @click="isModalReset = false">
						<i class="fas fa-times"></i>
					</span>

					<div class="mt-4 py-2">
						<h5 class="card-title"><span class="choose">Reset Pssword </span></h5>

						<div class="row">

							<div class="col-md-12">
								<label for="socialMedia" class="form-label">Old Password</label>
								<input v-model="oldPassword" id="socialMedia" type="password" name="socialMedia"
									class="form-control form-input" placeholder="Enter here">
							</div>
							<div class="col-md-12">
								<label for="socialMedia" class="form-label">New Password</label>
								<input v-model="newPassword" id="socialMedia" type="password" name="socialMedia"
									class="form-control form-input" placeholder="Enter here">
							</div>
							<div class="col-md-12">
								<div
									class="load-more-info w-100 d-flex justify-content-start align-items-center mb-4 mx-auto">
									<div class="list-item-btn position-relative load-more-div proceed-div mx-auto">
										<span class="border-bottom-btn border-top-btn position-absolute">
											<img src="@/assets/images/Group12engine.png"
												class="img-border position-absolute" alt="" />
										</span>

										<span
											class="border-bottom-btn border-top-btn border-right-radius popup-right position-absolute">
											<img src="@/assets/images/Path467engine.png"
												class="img-border position-absolute" alt="" />
										</span>

										<span
											class="border-bottom-btn border-top-btn border-right-radius border-right-bottom-radius popup-right-bottom position-absolute">
											<img src="@/assets/images/Path465engine.png"
												class="img-border position-absolute" alt="" />
										</span>
										<!-- data-bs-toggle="modal" -->
										<button type="submit"
											class="signin-btnli Start Engine load-more-btn proceed-btn width-set"
											id="submit-button" @click="changePassword(oldPassword, newPassword)">
											Update Pasword
										</button>
										<span class="border-bottom-btn border-left-btn new-popup position-absolute">
											<img src="@/assets/images/Group11engine.png"
												class="img-border position-absolute" alt="" />
										</span>
										<span class="border-bottom-btn position-absolute">
											<img src="@/assets/images/Path473engine.png"
												class="img-border position-absolute" alt="" />
										</span>
									</div>
								</div>

							</div>
						</div>
					</div>


				</div>
			</div>
		</div>
	</div>

	<!-- modal phone veiryf -->
	<div class="modal show d-block" tabindex="-1" role="dialog" id="carShopFilter" v-if="phoneVeify === true">
		<div class="modal-dialog modal-dialog-centered" role="document">
			<div class="modal-content">
				<div class="modal-body text-center">
					<span class="close-icon" @click="phoneVeify = false">
						<i class="fas fa-times"></i>
					</span>

					<div class="mt-4 py-2">
						<h5 class="card-title"><span class="choose">Verify Phone Number </span></h5>

						<div class="row">

							<div class="col-md-12">
								<label for="socialMedia" class="form-label">Enter Phone Number</label>
								<div class="d-flex gap-2">
									<input v-model="countryCode" id="socialMedia" type="text" name="socialMedia"
										class="form-control form-input w-25" placeholder="+92">
									<input v-model="phoneVnum" id="socialMedia" type="tel" name="socialMedia"
										class="form-control form-input" placeholder="3040348584">
								</div>
							</div>

							<div class="col-md-12">
								<div
									class="load-more-info w-100 d-flex justify-content-start align-items-center mb-4 mx-auto">
									<div class="list-item-btn position-relative load-more-div proceed-div mx-auto">
										<span class="border-bottom-btn border-top-btn position-absolute">
											<img src="@/assets/images/Group12engine.png"
												class="img-border position-absolute" alt="" />
										</span>

										<span
											class="border-bottom-btn border-top-btn border-right-radius popup-right position-absolute">
											<img src="@/assets/images/Path467engine.png"
												class="img-border position-absolute" alt="" />
										</span>

										<span
											class="border-bottom-btn border-top-btn border-right-radius border-right-bottom-radius popup-right-bottom position-absolute">
											<img src="@/assets/images/Path465engine.png"
												class="img-border position-absolute" alt="" />
										</span>
										<!-- data-bs-toggle="modal" -->
										<button type="submit"
											class="signin-btnli Start Engine load-more-btn proceed-btn width-set"
											id="submit-button" @click="verifyPhoneNum()">
											Verify
										</button>
										<span class="border-bottom-btn border-left-btn new-popup position-absolute">
											<img src="@/assets/images/Group11engine.png"
												class="img-border position-absolute" alt="" />
										</span>
										<span class="border-bottom-btn position-absolute">
											<img src="@/assets/images/Path473engine.png"
												class="img-border position-absolute" alt="" />
										</span>
									</div>
								</div>

							</div>
						</div>
					</div>


				</div>
			</div>
		</div>
	</div>

	<!-- modal end -->
</template>

<script>

import axios from 'axios';
import { Auth } from 'aws-amplify';
import { useProfileImage } from '@/composables/useProfileImage';
import { useProfileName } from '@/composables/useProfileName';

export default {
	setup() {
		const { state: profileImageState, setProfileImage } = useProfileImage();
		const { state: nameState, setName } = useProfileName();

		const changeProfileImage = (newSrc) => {
			setProfileImage(newSrc);
		};

		const changeName = (newName) => {
			setName(newName);
		};

		return {
			profileImageState,
			nameState,
			changeProfileImage,
			changeName
		};
	},
	name: "UserProfile",
	data() {
		return {
			phoneNumToVerify: "",
			countryCode: "",
			phoneVnum: "",
			phoneVeify: false,
			IsphonExists: false,
			fullname: "",
			isModalOpen: false,
			isModalOpenFail: false,
			UserData: null,
			name: "",
			image: "",
			email: "",
			age: "",
			phone: "",
			socialMedia: "",
			password: "",
			errorMessage: '',
			role: '',
			// formData: {},
			formData: {
				CompanyName: "",
				name: '',
				street: '',
				streetNo: '',
				street2: '',
				zipCode: '',
				city: '',
				country: '',
				// intlPrefix1: '',
				// prefix1: '',
				phone1: '',
				// intlPrefix2: '',
				// prefix2: '',
				fax: '',
				// intlPrefix3: '',
				// prefix3: '',
				mobilePhone: '',
				email: '',
				sub: "",
				cognitoId: ""


			},
			oldPassword: "",
			newPassword: "",
			isModalReset: false,
			modalSuccess: false,
			successMessge: "",
			socialSignIn: false

		};
	},
	methods: {
		verifyPhoneNum() {
			// Remove spaces and dashes from phoneVnum
			let cleanedNumber = this.phoneVnum.replace(/[\s-]+/g, '');

			// Concatenate countryCode and cleanedNumber
			this.phoneNumToVerify = this.countryCode + cleanedNumber;

			// Optionally, you can log or use phoneNumToVerify here
			console.log('Phone number to verify:', this.phoneNumToVerify);

		},
		openPhoneVerifyModel() {
			this.phoneVeify = true
		},
		getProfileImage(profileImage) {
			if (!profileImage || profileImage.includes('null') || profileImage.includes('undefined')) {
				return '/images/uploadImage.png';
			}
			return profileImage;
		},

		// async checkIfGoogleOrFacebookUser() {
		// 	try {
		// 		const user = await Auth.currentAuthenticatedUser();
		// 		const identities = user.attributes.identities;
		// 		console.log("identities", identities.providerName)
		// 		// Check if the user has identities
		// 		if (identities) {
		// 			// Iterate through the identities to check if Google or Facebook is one of them
		// 			for (const identity of identities) {
		// 				console.log("identityproviderName ", identity.providerName)
		// 				if (identity.providerName === 'Google') {
		// 					console.log('User signed in using Google');
		// 					console.log("identityproviderName ", identity.providerName)
		// 					this.socialSignIn = true
		// 				} else if (identity.providerName === 'Facebook') {
		// 					console.log("identityproviderName ", identity.providerName)
		// 					console.log('User signed in using Facebook');
		// 					this.socialSignIn = true
		// 				}
		// 				else {
		// 					console.log('User signed normal');
		// 					this.socialSignIn = false
		// 				}
		// 			}
		// 		}
		// 	} catch (error) {
		// 		console.error('Error:', error);
		// 	}

		// 	console.log('User did not sign in using Google or Facebook');
		// 	this.socialSignIn = false
		// }
		// async checkIfGoogleOrFacebookUser() {
		// 	try {
		// 		const user = await Auth.currentAuthenticatedUser();
		// 		const identities = user.attributes.identities;
		// 		console.log("identities", identities)
		// 		console.log("user.attributes.identities.providerName", user.attributes.identities.providerName)


		// 		// Check if the user has identities
		// 		if (identities) {
		// 			// Iterate through the identities
		// 			for (const identity of identities) {
		// 				console.log("Identity:", identity); // Log the entire identity object
		// 				if (identity.providerName === 'Google') {
		// 					console.log('User signed in using Google');
		// 					this.socialSignIn = true;
		// 					return; // Exit the loop since Google sign-in is detected
		// 				} else if (identity.providerName === 'Facebook') {
		// 					console.log('User signed in using Facebook');
		// 					this.socialSignIn = true;
		// 					return; // Exit the loop since Facebook sign-in is detected
		// 				}
		// 			}
		// 			// If no Google or Facebook identity is found
		// 			console.log('User signed in using another method');
		// 			this.socialSignIn = false;
		// 		} else {
		// 			console.log('User does not have any identities');
		// 			this.socialSignIn = false;
		// 		}
		// 	} catch (error) {
		// 		console.error('Error:', error);
		// 		this.socialSignIn = false;
		// 	}
		// }

		// async checkIfGoogleOrFacebookUser() {
		// 	try {
		// 		const user = await Auth.currentAuthenticatedUser();
		// 		const identities = user.attributes.identities;
		// 		console.log("identities", identities);

		// 		// Check if the user has identities
		// 		if (identities) {
		// 			// Iterate through the identities
		// 			for (const identity of identities) {
		// 				console.log("Identity:", identity); // Log each identity object separately
		// 				console.log("identity.providerName:", identity.providerName); // Log the providerName property of each identity
		// 				if (identity.providerName === 'Google') {
		// 					console.log('User signed in using Google');
		// 					this.socialSignIn = true;
		// 					return; // Exit the loop since Google sign-in is detected
		// 				} else if (identity.providerName === 'Facebook') {
		// 					console.log('User signed in using Facebook');
		// 					this.socialSignIn = true;
		// 					return; // Exit the loop since Facebook sign-in is detected
		// 				}
		// 			}
		// 			// If no Google or Facebook identity is found
		// 			console.log('User signed in using another method');
		// 			this.socialSignIn = false;
		// 		} else {
		// 			console.log('User does not have any identities');
		// 			this.socialSignIn = false;
		// 		}
		// 	} catch (error) {
		// 		console.error('Error:', error);
		// 		this.socialSignIn = false;
		// 	}
		// }
		async checkIfGoogleOrFacebookUser() {
			try {
				const user = await Auth.currentAuthenticatedUser();
				console.log("socail service", user);
				console.log("social user attribute", user.attributes)
				let socialCheck = localStorage.getItem("social")
				console.log("check social", socialCheck, typeof (socialCheck));

				if (socialCheck == "true") {
					console.log("in socila if state")
					const mydata = {
						"name": user.attributes.name,
						"nickname": user.attributes.name,
						"sub": user.attributes.sub,
						"email": user.attributes.email,
						"cognitoId": user.attributes.sub,
						"role": "user"

					}
					console.log("mydata", mydata)
					const response = await axios.post('https://squid-app-yq2ph.ondigitalocean.app/api/users', mydata);

					// Handle success response
					console.log('Form data submitted successfully:', response.data);
					localStorage.setItem("social", "false")
					this.fetchproData()

				}



				const identities = user.attributes.identities;

				// Check if the user has identities
				if (identities) {
					this.socialSignIn = true;

				} else {
					console.log('User does not have any identities');
					this.socialSignIn = false;
				}
			} catch (error) {
				console.error('Error:', error);
				this.socialSignIn = false;
			}
		}


		,
		async changePassword(oldPassword, newPassword) {
			try {
				const user = await Auth.currentAuthenticatedUser();
				const data = await Auth.changePassword(user, oldPassword, newPassword);
				console.log(data);
				if (data == 'SUCCESS') {
					this.isModalReset = false
					this.modalSuccess = true;
					this.successMessge = "Password Reset Successfully"
				}
			} catch (err) {
				console.log(err);
				this.isModalReset = false
				this.isModalOpenFail = true
				this.errorMessage = err
			}
		},
		openFileInput() {
			this.$refs.fileInput.click(); // Trigger click event on file input when icon is clicked
		},
		handleFileChange() {
			console.log("filechange")
			// Handle file change event and update this.image
			const formData = new FormData();

			formData.append('userImage', this.$refs.fileInput.files[0]);
			console.log(this.$refs.fileInput.files[0]);
			axios.post('https://squid-app-yq2ph.ondigitalocean.app/api/comments/users', formData)
				.then(response => {
					// Handle success
					console.log('Post request successful:', response.data);
					this.image = response.data.photo_url
					// Optionally, update the comments data with the response data if needed
					// this.comments = response.data;

				})
				.catch(error => {
					// Handle error
					console.error('Error making post request:', error);
				});


		},
		// async updateUserAttributes() {

		// 	const updatedProfile = {
		// 	fullName: this.Fullname,
		// 		name: this.name,
		// 		email: this.email,
		// 		age: this.age,
		// 		phone: this.phone,
		// 		socialMedia: this.socialMedia,
		// 		image: this.image,
		// 	};

		// 	console.log("The profile data", updatedProfile)
		// 	const data = await this.$store.dispatch("auth/handleProfile", updatedProfile);
		// 	console.log(data, typeof data);
		// 	if (data == "SUCCESS") {
		// 		this.isModalOpen = true

		// 	} else {
		// 		this.isModalOpenFail = true
		// 	}


		// },

		async submitProfileForm() {
			try {
				console.log("sub ID", this.formData.sub)
				console.log("this is formData", this.formData)
				const formData = new FormData();
				let cleanedPhoneNumber = this.phone.replace(/[+\-()]/g, '');

				formData.append('image', this.$refs.fileInput.files[0]);
				formData.append('name', this.fullname);
				formData.append('nickname', this.name);
				formData.append('age', this.age);
				formData.append('email', this.email);
				formData.append('phone', cleanedPhoneNumber);
				formData.append("socialMedia", this.socialMedia)
				// Make a POST request to the API endpoint
				console.log("fffdata", this.formData)
				const response = await axios.put(`https://squid-app-yq2ph.ondigitalocean.app/api/users/${this.formData.sub}`, formData);

				// Handle success response
				console.log('Form data submitted successfully:', response.data);
				if (response.data.message.includes("Phone number already exists")) {
					this.IsphonExists = true
					this.errorMessage = response.data.message
					this.isModalOpenFail = true;

				} else {
					this.IsphonExists = false
				}

				const profiledata = this.fetchproData();
				return profiledata;




				// const { email, name, role, sub, cognitoId } = this.formData;
				// // this.$store.signup({ email, name, role });
				// this.$store.dispatch('auth/signup', { email, name, role, sub, cognitoId });

				// You can perform further actions here, such as redirecting the user or showing a success message
			} catch (error) {
				// Handle error
				console.error('Error submitting form data:', error);
				// You can show an error message to the user or handle the error in any other appropriate way
			}
		},
		async updateUserAttributes() {
			const profiledata = await this.submitProfileForm();
			console.log("cehck pro data", profiledata)
			console.log(profiledata);
			if (this.IsphonExists == false) {
				const updatedProfile = {
					fullname: this.fullname, // Correct the key to fullName if needed
					name: this.name,
					nickname: this.name,
					email: this.email,
					age: this.age,
					phone: this.phone,
					socialMedia: this.socialMedia,
					image: this.image,
				};

				console.log("The profile data", updatedProfile);

				try {
					const data = await this.$store.dispatch("auth/handleProfile", updatedProfile);
					console.log(data, typeof data);
					if (data === "SUCCESS") {
						this.isModalOpen = true;
						this.$router.push({ name: 'HomeLanding' });
					}
				} catch (error) {
					console.error("Error updating user profile:", error);
					// Handle error gracefully, e.g., display an error message to the user
					this.errorMessage = error
					this.isModalOpenFail = true
				}


			}


		}
		,
		// async updateUserAttributesDealer() {

		// 	const updatedProfile = {

		// 		city: this.formData.city,

		// 		companyName: this.formData.CompanyName,

		// 		country: this.formData.country,


		// 		emailForCustomer: this.formData.email,

		// 		faxCustomer: this.formData.fax,

		// 		interanetPrefix1: this.formData.intlPrefix1,

		// 		interanetPrefix2: this.formData.intlPrefix2,

		// 		interanetPrefix3: this.formData.intlPrefix3,

		// 		mobileCustomer: this.formData.mobilePhone,

		// 		number: this.formData.phone1,

		// 		phoneCustomer: this.formData.phone1,

		// 		prefix1: this.formData.prefix1,
		// 		prefix2: this.formData.prefix2,

		// 		prefix3: this.formData.prefix3,

		// 		street1: this.formData.street,

		// 		street2: this.formData.street2,

		// 		zipCode: this.formData.zipCode,

		// 		email: this.formData.email


		// 	}
		// 	console.log("The profile data", updatedProfile);
		// 	try {
		// 		const data = await this.$store.dispatch("auth/handleProfile2", updatedProfile);
		// 		console.log(data, typeof data);
		// 		if (data === "SUCCESS") {
		// 			this.isModalOpen = true;
		// 			this.changeName(this.formData.CompanyName)
		// 		}
		// 	} catch (error) {
		// 		console.error("Error updating user profile:", error);
		// 		// Handle error gracefully, e.g., display an error message to the user
		// 		const customErrorRegex = /custom:[^\s]+ must not be null/;
		// 		const match = error.message.match(customErrorRegex);

		// 		// If the match is found, use it; otherwise, use the entire error message
		// 		const errorMessage = match ? match[0] : error.message;

		// 		// Handle error gracefully, e.g., display an error message to the user
		// 		this.errorMessage = errorMessage;
		// 		// this.errorMessage = error
		// 		this.isModalOpenFail = true
		// 	}
		// },
		async updateUserAttributesDealer() {

			const updatedProfile = {

				city: this.formData.city,

				companyName: this.formData.CompanyName,

				country: this.formData.country,


				emailForCustomer: this.formData.email,

				faxCustomer: this.formData.fax,

				// interanetPrefix1: this.formData.intlPrefix1,

				// interanetPrefix2: this.formData.intlPrefix2,

				// interanetPrefix3: this.formData.intlPrefix3,

				mobileCustomer: this.formData.mobilePhone,

				number: this.formData.phone1,

				phoneCustomer: this.formData.phone1,

				// prefix1: this.formData.prefix1,
				// prefix2: this.formData.prefix2,

				// prefix3: this.formData.prefix3,

				street1: this.formData.street,

				street2: this.formData.street2,

				zipCode: this.formData.zipCode,

				email: this.formData.email


			}
			console.log("The profile data", updatedProfile);
			try {
				const data = await this.$store.dispatch("auth/handleProfile2", updatedProfile);
				console.log(data, typeof data);
				if (data === "SUCCESS") {
					this.isModalOpen = true;
					this.changeName(this.formData.CompanyName)
					this.$router.push({ name: 'HomeLanding' });
				}
			} catch (error) {
				console.error("Error updating user profile:", error);
				// Handle error gracefully, e.g., display an error message to the user
				const customErrorRegex = /custom:[^\s]+ must not be null/;
				const match = error.message.match(customErrorRegex);

				// If the match is found, use it; otherwise, use the entire error message
				const errorMessage = match ? match[0] : error.message;

				// Handle error gracefully, e.g., display an error message to the user
				this.errorMessage = errorMessage;
				// this.errorMessage = error
				this.isModalOpenFail = true
			}
		},


		async fetchProfileData() {
			try {
				// console.log("Fetching profile data...");
				const data = await this.$store.dispatch("auth/getprofiledata");
				// console.log("Profile data:", data);
				this.UserData = data.result
				console.log("user dataddfdd", this.UserData)
				this.formData.sub = this.UserData.sub
				this.formData.cognitoId = this.UserData.sub
				this.role = this.UserData['custom:Role'];


				console.log("userdata nick name", this.UserData)
				this.formData.fullname = this.UserData['custom:fullname']
				// this.role = this.UserData.nickname
				if (this.role == "dealer") {
					this.changeName(this.UserData.name)
					this.formData.CompanyName = this.UserData.name;
					this.formData.email = this.UserData.email
					this.formData.mobilePhone = this.UserData["custom:mobileCustomer"]
					// this.formData.prefix3 = this.UserData["custom:prefix3"]
					// this.formData.intlPrefix3 = this.UserData["custom:street1"]
					this.formData.fax = this.UserData["custom:faxCustomer"]
					// this.formData.prefix2 = this.UserData["custom:prefix2"]
					// this.formData.prefix1 = this.UserData["custom:prefix1"]
					// this.formData.intlPrefix1 = this.UserData["custom:interanetPrefix1"]
					this.formData.phone1 = this.UserData["custom:phoneCustomer"]
					// this.formData.intlPrefix2 = this.UserData["custom:interanetPrefix2"]

					this.formData.street = this.UserData["custom:street1"]
					this.formData.streetNo = this.UserData["custom:number"]
					this.formData.street2 = this.UserData["custom:street2"]
					this.formData.zipCode = this.UserData["custom:zipCode"]
					this.formData.city = this.UserData["custom:city"]
					this.formData.country = this.UserData["custom:country"]

				} else {
					let social = false;
					if ('identities' in this.UserData) {
						social = true;
						this.socialSignIn = true
					}
					console.log("socialsttus", social)
					this.name = this.UserData.name
					this.email = this.UserData.email

					this.socialMedia = this.UserData.website
					this.phone = this.UserData.phone_number
					this.age = this.UserData["custom:age"]
					this.fullname = this.UserData["custom:fullname"]
					if (this.UserData.picture) {
						this.image = this.UserData.picture
					}
				}



			} catch (error) {
				1
				console.error("Error fetching profile data prof page:", error);
			}
		},


		async fetchproData() {
			if (localStorage.getItem('signupstatus') == "true") {
				localStorage.setItem('signupstatus', "");

				//await this.fetchProfileData()
			}
			console.log("calling fetchPRo Data1", this.formData.sub)
			const myid = this.formData.sub || localStorage.getItem('storgekey');
			const url = 'https://squid-app-yq2ph.ondigitalocean.app/api/users/sub?sub=' + myid;
			console.log("jaloru", myid, url);
			try {
				// Make the GET request with query parameters
				const response = await axios.get(url);

				// Handle the response data
				console.log(this.formData.sub, "new porofile Data is dw", response.data);
				this.image = response.data.image
				this.name = response.data.nickname
				// this.fullname = response.data.name
				console.log("before set the name", this.name);
				this.changeName(this.name);
				console.log("username is", this.uname);
				let imageUrl = "https://squid-app-yq2ph.ondigitalocean.app/users/" + this.image;
				this.changeProfileImage(imageUrl)
				//				this.image = response.data[0].image
			} catch (error) {
				// Handle any errors
				console.error('Error making GET request:', error);
			}
		},



		// isFormValid() {
		// 	// Basic form validation
		// 	return this.name && this.email && this.age && this.phone;
		// }




	},
	async created() {

		// this.getprofile()
		await this.fetchProfileData()
		await this.fetchproData()
		await this.checkIfGoogleOrFacebookUser()




	},
	async mounted() {
		await this.fetchProfileData();
		await this.fetchproData()
		// this.setName(this.name);
		// this.getProfileImage()
		// this.checkIfGoogleOrFacebookUser()
	},


};
</script>

<style scoped>
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

.user-profile-page {
	cursor: pointer;
}
</style>
