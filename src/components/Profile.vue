<template>
	<div class="container my-5">
		<div class="row">
			<div class="col-md-8 m-auto">
				<div class="form-content-home1">
					<form id="subscribe-form" @submit.prevent="updateUserAttributes" v-if="this.role == 'user'">
						<div class="user-profile-page">

							<!-- <img v-if="image != ''" src="https://clownfish-app-quehu.ondigitalocean.app/ +${image} " class="user-profile-page-img" alt="user"
								@click="openFileInput"> -->
							<img v-if="image !== ''"
								:src="'https://clownfish-app-quehu.ondigitalocean.app/users/' + image"
								class="user-profile-page-img" alt="user" @click="openFileInput">

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
						</div>
						<div class="row">
							<div class="col-md-6">
								<label for="name" class="form-label">{{ $t('Full Name') }}</label>
								<input v-model="fullname" id="name" type="text" name="name"
									class="form-control form-input" :placeholder="$t('Enter here')" required>
							</div>
							<div class="col-md-6">
								<label for="name" class="form-label">{{ $t('Nick Name') }}</label>
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
							</div>
							<div class="col-md-6">
								<label for="socialMedia" class="form-label">{{ $t('socialMediaOptional') }}</label>
								<input v-model="socialMedia" id="socialMedia" type="text" name="socialMedia"
									class="form-control form-input" placeholder="Enter here">
							</div>
							<div class="col-md-6 d-none">
								<!-- <label for="password" class="form-label">{{ $t('password') }}</label>
								<input v-model="password" type="password" id="password" name="password"
									class="form-control form-input" placeholder="Enter here"> -->
								<label class="form-label" for="image">Select Image</label>
								<input type="file" class="form-control-file my-2" @change="handleFileChange"
									ref="fileInput">
							</div>
							<div class="col-md-12">
								<!-- <p id="errormsg">{{ errorMessage }}</p> -->
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

					<form id="subscribe-form" @submit.prevent="updateDealer" v-if="this.role == 'dealer'">

						<div class="user-profile-page">
							<h2 class="form-title mt-2 mb-0">

								{{ formData.name }}
							</h2>


							<p class="map-para email-user-profile-page-para">
								{{ formData.email }}
							</p>
						</div>
						<div class="row">
							<div class="col-md-12">
								<h3 class="text-white mt-2 mb-0">{{ $t('LocationOfVehicle') }}</h3>
								<label for="companyName" class="form-label">{{ $t('CompanyName') }}</label>
								<input v-model="formData.name" id="companyName" type="text"
									class="form-control form-input" :placeholder="$t('Enter here')" />
							</div>
							<div class="col-md-6">
								<label for="street" class="form-label">{{ $t('Street') }}</label>
								<input v-model="formData.street" id="street" type="text" class="form-control form-input"
									:placeholder="$t('Enter here')" />
							</div>
							<div class="col-md-3">
								<label for="streetNo" class="form-label">No.</label>
								<input v-model="formData.streetNo" id="streetNo" type="text"
									class="form-control form-input" :placeholder="$t('Enter here')" />
							</div>
							<div class="col-md-3">
								<label for="street2" class="form-label">{{ $t('Street') }} 2</label>
								<input v-model="formData.street2" id="street2" type="text"
									class="form-control form-input" :placeholder="$t('Enter here')" />
							</div>
							<div class="col-md-3">
								<label for="zipCode" class="form-label">{{ $t('ZipCode') }}</label>
								<input v-model="formData.zipCode" id="zipCode" type="text"
									class="form-control form-input" :placeholder="$t('Enter here')" />
							</div>
							<div class="col-md-3">
								<label for="city" class="form-label">{{ $t('City') }}</label>
								<input v-model="formData.city" id="city" type="text" class="form-control form-input"
									:placeholder="$t('Enter here')" />
							</div>
							<div class="col-md-6">
								<label for="country" class="form-label">{{ $t('Country') }}</label>
								<input v-model="formData.country" id="country" type="text"
									class="form-control form-input" :placeholder="$t('Enter here')" />
							</div>
							<div class="col-md-4">
								<label for="intlPrefix1" class="form-label">{{ $t('InternatPrefix1') }}</label>
								<!-- <select v-model="formData.intlPrefix1" id="intlPrefix1" class="form-select form-input">
                                    <option value="germany(+49)">Germany(+49)</option>
                                    <option value="pakistan(+92)">pakistan(+92)</option>
                               
                                </select> -->
								<input v-model="formData.intlPrefix1" id="fax" type="text"
									class="form-control form-input" :placeholder="$t('Enter here')" />
							</div>
							<div class="col-md-3">
								<label for="prefix1" class="form-label">{{ $t('Prefix1') }}</label>
								<input v-model="formData.prefix1" id="prefix1" type="text"
									class="form-control form-input" :placeholder="$t('Enter here')" />
							</div>
							<div class="col-md-5">
								<label for="phone1" class="form-label">{{ $t('Phone1') }}</label>
								<input v-model="formData.phone1" id="phone1" type="text" class="form-control form-input"
									:placeholder="$t('Enter here')" />
							</div>
							<div class="col-md-4">
								<label for="intlPrefix2" class="form-label">{{ $t('InternatPrefix1') }}</label>
								<!-- <select v-model="formData.intlPrefix2" id="intlPrefix2" class="form-select form-input">
                                    <option value="germany(+49)">Germany(+49)</option>
                                    <option value="pakistan(+92)">pakistan(+92)</option>
                                  
                                </select> -->
								<input v-model="formData.intlPrefix2" id="intlPrefix2" type="text"
									class="form-control form-input" :placeholder="$t('Enter here')" />
							</div>
							<div class="col-md-3">
								<label for="prefix2" class="form-label">{{ $t('Prefix1') }}</label>
								<input v-model="formData.prefix2" id="prefix2" type="text"
									class="form-control form-input" :placeholder="$t('Enter here')" />
							</div>
							<div class="col-md-5">
								<label for="fax" class="form-label">{{ $t('Fax') }}</label>
								<input v-model="formData.fax" id="fax" type="text" class="form-control form-input"
									:placeholder="$t('Enter here')" />
							</div>
							<div class="col-md-4">
								<label for="intlPrefix3" class="form-label">{{ $t('InternatPrefix1') }}</label>
								<!-- <select v-model="formData.intlPrefix3" id="intlPrefix3" class="form-select form-input">
                                    <option value="germany(+49)">Germany(+49)</option>
                                    <option value="pakistan(+92)">pakistan(+92)</option>

                                </select> -->
								<input v-model="formData.intlPrefix3" id="fax" type="text"
									class="form-control form-input" :placeholder="$t('Enter here')" />
							</div>
							<div class="col-md-3">
								<label for="prefix3" class="form-label">{{ $t('Prefix1') }}</label>
								<input v-model="formData.prefix3" id="prefix3" type="text"
									class="form-control form-input" :placeholder="$t('Enter here')" />
							</div>
							<div class="col-md-5">
								<label for="mobilePhone" class="form-label">{{ $t('MobilePhone') }}</label>
								<input v-model="formData.mobilePhone" id="mobilePhone" type="text"
									class="form-control form-input" :placeholder="$t('Enter here')" />
							</div>
							<div class="col-md-6">
								<label for="email" class="form-label">{{ $t('Email') }}</label>
								<input v-model="formData.email" id="email" type="email" class="form-control form-input"
									:placeholder="$t('Enter here')" />
								<input v-model="formData.role" id="h" type="text" class="form-control form-input d-none"
									:placeholder="$t('Enter here')" value="dealer" />
							</div>
							<!-- <div class="col-md-6">
								<label for="password" class="form-label">{{ $t('password') }}</label>
								<input type="password" id="password" v-model="formData.password"
									class="form-control form-input" :placeholder="$t('Enter here')" />
								<div class="strength-bars" v-if="formData.password !== ''">
									<div class="strength-bar"
										:class="{ 'weak': passwordStrength === 'Weak', 'strong': passwordStrength === 'Strong' }">
									</div>
									<div class="strength-bar"
										:class="{ 'medium': passwordStrength === 'Medium', 'strong': passwordStrength === 'Strong' }">
									</div>
									<div class="strength-bar" :class="{ 'strong': passwordStrength === 'Strong' }">
									</div>
								</div>

								<div class="d-flex justify-content-end">
									<p :class="passwordStrengthClass">{{ passwordStrength }}</p>
								</div>
								<div v-if="formErrors.password" class="text-danger">
									{{ formErrors.password }}
								</div>

							</div> -->

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



	<!-- modal end -->
</template>

<script>

import axios from 'axios';
import { Auth } from 'aws-amplify';
import { mapActions } from 'vuex';
import { mapGetters } from 'vuex';



export default {
	name: "UserProfile",
	data() {
		return {
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
			// formData: {},
			oldPassword: "",
			newPassword: "",
			isModalReset: false,
			modalSuccess: false,
			successMessge: "",
			socialSignIn: false,
			role: "",
			userId: "",
			dataTobeUpdated: {
				name: '',
				street: '',
				streetNo: '',
				street2: '',
				zipCode: '',
				city: '',
				country: '',
				intlPrefix1: '',
				prefix1: '',
				phone1: '',
				intlPrefix2: '',
				prefix2: '',
				fax: '',
				intlPrefix3: '',
				prefix3: '',
				mobilePhone: '',

			},

			formData: {
				name: '',
				street: '',
				streetNo: '',
				street2: '',
				zipCode: '',
				city: '',
				country: '',
				intlPrefix1: '',
				prefix1: '',
				phone1: '',
				intlPrefix2: '',
				prefix2: '',
				fax: '',
				intlPrefix3: '',
				prefix3: '',
				mobilePhone: '',
				email: '',
				password: "",
				check1: "",
				check2: "",
				role: "dealer"
			},
		};
	},
	computed: {
		...mapGetters('auth', ['userName', 'userEmail', 'userRole', 'userId']),
	},
	methods: {
		// ...mapActions(['getProfileData']),

		...mapActions(['signup']),
		async submitProfileForm() {

			try {

				// Make a POST request to the API endpoint
				const response = await axios.post('https://clownfish-app-quehu.ondigitalocean.app/api/users', { email: this.UserData.email });

				// Handle success response
				console.log('Form data submitted successfully:', response.data[0]);

				// const { email, name, role } = response.data;
				const email = response.data[0].email
				const name = response.data[0].name
				const role = response.data[0].role
				this.role = response.data[0].role
				this.userId = response.data[0].id
				// this.$store.signup({ email, name, role });
				console.log("data", { email, name, role })
				this.$store.dispatch('auth/signup', { email, name, role });

				this.formData.city = response.data[0].city
				this.formData.name = response.data[0].name
				this.formData.country = response.data[0].country;
				this.formData.email = response.data[0].email;
				this.formData.fax = response.data[0].fax;
				this.formData.id = response.data[0].id;
				this.formData.intlPrefix1 = response.data[0].intlPrefix1;
				this.formData.intlPrefix2 = response.data[0].intlPrefix2;
				this.formData.intlPrefix3 = response.data[0].intlPrefix3;
				this.formData.phone1 = response.data[0].mobilePhone;
				this.formData.password = response.data[0].password;
				this.formData.prefix1 = response.data[0].prefix1;
				this.formData.prefix2 = response.data[0].prefix2;
				this.formData.prefix3 = response.data[0].prefix3;
				this.formData.role = response.data[0].role;
				this.formData.street = response.data[0].street;
				this.formData.street2 = response.data[0].street2;
				this.formData.streetNo = response.data[0].streetNo;
				this.formData.zipCode = response.data[0].zipCode;

				// You can perform further actions here, such as redirecting the user or showing a success message
			} catch (error) {
				// Handle error
				console.error('Error in submitting data:', error);
				// You can show an error message to the user or handle the error in any other appropriate way
			}
		},
		async updateDealer() {
			this.dataTobeUpdated.name = this.formData.name;
			this.dataTobeUpdated.street = this.formData.street;
			this.dataTobeUpdated.streetNo = this.formData.streetNo;
			this.dataTobeUpdated.street2 = this.formData.street2;
			this.dataTobeUpdated.zipCode = this.formData.zipCode;
			this.dataTobeUpdated.city = this.formData.city;
			this.dataTobeUpdated.country = this.formData.country;
			this.dataTobeUpdated.intlPrefix1 = this.formData.intlPrefix1;
			this.dataTobeUpdated.prefix1 = this.formData.prefix1;
			this.dataTobeUpdated.phone1 = this.formData.phone1;
			this.dataTobeUpdated.intlPrefix2 = this.formData.intlPrefix2;
			this.dataTobeUpdated.prefix2 = this.formData.prefix2;
			this.dataTobeUpdated.fax = this.formData.fax;
			this.dataTobeUpdated.intlPrefix3 = this.formData.intlPrefix3;
			this.dataTobeUpdated.prefix3 = this.formData.prefix3;
			this.dataTobeUpdated.mobilePhone = this.formData.mobilePhone;


			console.log(`${this.userId}`)
			console.log(`https://clownfish-app-quehu.ondigitalocean.app/api/users/${this.userId}`, this.dataTobeUpdated)
			try {
				// Make a put request to the API endpoint

				const response = await axios.put(`https://clownfish-app-quehu.ondigitalocean.app/api/users/${this.userId}`, this.dataTobeUpdated);

				// Handle success response
				console.log('Form data submitted successfully:', response.data.message);
				this.submitProfileForm()
				// const { email, name, role } = response.data;
				this.isModalOpen = true

				// You can perform further actions here, such as redirecting the user or showing a success message
			} catch (error) {
				// Handle error
				console.error('Error in updating data:', error);
				// You can show an error message to the user or handle the error in any other appropriate way
			}
		},
		// async getData() {
		// 	try {
		// 		// Call the action with the form data
		// 		const response = await this.getProfileData(this.formData);
		// 		console.log('Email submitted successfully:', response);
		// 		// Handle success response, such as updating UI or showing a success message
		// 	} catch (error) {
		// 		// Handle error, such as displaying an error message to the user
		// 		console.error('Error submitting email:', error);
		// 	}
		// },
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
			axios.post('https://clownfish-app-quehu.ondigitalocean.app/api/comments/users', formData)
				.then(response => {
					// Handle success
					console.log('Post request successful:', response.data);
					this.image = response.data[0].photo_url
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
		async updateUserAttributes() {
			const updatedProfile = {
				fullname: this.fullname, // Correct the key to fullName if needed
				name: this.name,
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
				}
			} catch (error) {
				console.error("Error updating user profile:", error);
				// Handle error gracefully, e.g., display an error message to the user
				this.errorMessage = error
				this.isModalOpenFail = true
			}
		}
		,

		async fetchProfileData() {
			try {
				// console.log("Fetching profile data...");
				const data = await this.$store.dispatch("auth/getprofiledata");
				// console.log("Profile data:", data);
				this.UserData = data.result

				console.log("userdata", this.UserData.name)
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
				this.submitProfileForm()
				if (this.UserData.picture) {
					this.image = this.UserData.picture
				}

			} catch (error) {
				console.error("Error fetching profile data:", error);
			}
		}
		// isFormValid() {
		// 	// Basic form validation
		// 	return this.name && this.email && this.age && this.phone;
		// }




	},
	created() {

		// this.getprofile()
		this.fetchProfileData()
		// this.getProfileData()
		// this.checkIfGoogleOrFacebookUser()




	},
	mounted() {
		this.fetchProfileData();
		// this.getProfileData()
		this.role = this.userRole;

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
