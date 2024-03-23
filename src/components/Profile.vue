<template>
	<div class="container my-5">
		<div class="row">
			<div class="col-md-8 m-auto">
				<div class="form-content-home1">
					<form id="subscribe-form" @submit.prevent="updateUserAttributes">
						<div class="user-profile-page">

							<img v-if="image != ''" :src="image" class="user-profile-page-img" alt="user"
								@click="openFileInput">
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
								<label for="name" class="form-label">{{ $t('name') }}</label>
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
								<div class="list-item-btn position-relative submit-btn-div">
									<button type="submit" class="signin-btnli submitNow" id="submit-button">{{
						$t("updateProfile") }}</button>
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

						<p class="text-white">Please Try Again</p>
					</div>


				</div>
			</div>
		</div>
	</div>

	<!-- modal end -->
</template>

<script>

import axios from 'axios';
export default {
	name: "UserProfile",
	data() {
		return {
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
			formData: {}
		};
	},
	methods: {

		openFileInput() {
			this.$refs.fileInput.click(); // Trigger click event on file input when icon is clicked
		},
		handleFileChange() {
			// Handle file change event and update this.image
			const formData = new FormData();

			formData.append('userImage', this.$refs.fileInput.files[0]);

			axios.post('http://137.184.111.69:5000/api/comments/users', formData)
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
		async updateUserAttributes() {
			console.log("i am call");
			const updatedProfile = {
				name: this.name,
				email: this.email,
				age: this.age,
				phone: this.phone,
				socialMedia: this.socialMedia,
				image: this.image,
			};

			console.log("The profile data", updatedProfile)
			const data = await this.$store.dispatch("auth/handleProfile", updatedProfile);
			console.log(data, typeof data);
			if (data == "SUCCESS") {
				this.isModalOpen = true

			} else {
				this.isModalOpenFail = true
			}


		},

		async fetchProfileData() {
			try {
				console.log("Fetching profile data...");
				const data = await this.$store.dispatch("auth/getprofiledata");
				console.log("Profile data:", data);
				this.UserData = data.result
				console.log("userdata", this.UserData.name)
				this.name = this.UserData.name
				this.email = this.UserData.email

				this.socialMedia = this.UserData.website
				this.phone = this.UserData.phone_number
				this.age = this.UserData["custom:age"]
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





	},
	mounted() {
		this.fetchProfileData();
		// this.getProfileImage()
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
