<template>
	<div class="container my-5">
		<div class="row">
			<div class="col-md-8 m-auto">
				<div class="form-content-home1">
					<form id="subscribe-form" @submit.prevent="updateUserAttributes">
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
									class="form-control form-input" placeholder="Enter here" required>
							</div>
							<div class="col-md-6">
								<label for="name" class="form-label">{{ $t('Nick Name') }}</label>
								<input v-model="name" id="name" type="text" name="name" class="form-control form-input"
									placeholder="Enter here" required>
							</div>
							<div class="col-md-6">
								<label for="age" class="form-label">{{ $t('age') }}</label>
								<input v-model="age" id="age" type="text" name="age" class="form-control form-input"
									placeholder="Enter here" required>
							</div>
							<div class="col-md-6">
								<label for="email" class="form-label">{{ $t('emailVerification') }}</label>
								<input v-model="email" id="email" type="email" name="email"
									class="form-control form-input" placeholder="Enter here" required>
							</div>
							<div class="col-md-6">
								<label for="phone" class="form-label">{{ $t('phoneVerification') }}</label>
								<input v-model="phone" id="phone" type="tel" name="phone"
									class="form-control form-input" placeholder="Enter here" required>
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
								<p id="errormsg">{{ errorMessage }}</p>
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
								<input v-model="oldPassword" id="socialMedia" type="text" name="socialMedia"
									class="form-control form-input" placeholder="Enter here">
							</div>
							<div class="col-md-12">
								<label for="socialMedia" class="form-label">New Password</label>
								<input v-model="newPassword" id="socialMedia" type="text" name="socialMedia"
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
			formData: {},
			oldPassword: "",
			newPassword: "",
			isModalReset: false,
			modalSuccess: false,
			successMessge: "",
			socialSignIn: false
		};
	},
	methods: {
		async checkIfGoogleOrFacebookUser() {
			try {
				const user = await Auth.currentAuthenticatedUser();
				const identities = user.attributes.identities;

				// Check if the user has identities
				if (identities) {
					// Iterate through the identities to check if Google or Facebook is one of them
					for (const identity of identities) {
						console.log("identityproviderName ", identity.providerName)
						if (identity.providerName === 'Google') {
							console.log('User signed in using Google');
							console.log("identityproviderName ", identity.providerName)
							this.socialSignIn = true
						} else if (identity.providerName === 'Facebook') {
							console.log("identityproviderName ", identity.providerName)
							console.log('User signed in using Facebook');
							this.socialSignIn = true
						}
						else {
							console.log('User signed normal');
							this.socialSignIn = false
						}
					}
				}
			} catch (error) {
				console.error('Error:', error);
			}

			console.log('User did not sign in using Google or Facebook');
			this.socialSignIn = false
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
				this.name = this.UserData.name
				this.email = this.UserData.email

				this.socialMedia = this.UserData.website
				this.phone = this.UserData.phone_number
				this.age = this.UserData["custom:age"]
				this.fullname = this.UserData["custom:fullname"]
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
		this.checkIfGoogleOrFacebookUser()




	},
	mounted() {
		this.fetchProfileData();
		// this.getProfileImage()
		this.checkIfGoogleOrFacebookUser()
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
