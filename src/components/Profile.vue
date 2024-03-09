<template>
	<div class="container my-5">
		<div class="row">
			<div class="col-md-8 m-auto">
				<div class="form-content-home1">
					<form id="subscribe-form" @submit.prevent="submitForm">
						<div class="user-profile-page">
							<img src="@/assets/images/user-profile-page-img.png" class="user-profile-page-img"
								alt="user">
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
							<div class="col-md-6">
								<label for="password" class="form-label">{{ $t('password') }}</label>
								<input v-model="password" type="password" id="password" name="password"
									class="form-control form-input" placeholder="Enter here">
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
</template>

<script>
import Swal from 'sweetalert2';
export default {
	name: "UserProfile",
	data() {
		return {
			UserData: null,
			name: "",

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

			} catch (error) {
				console.error("Error fetching profile data:", error);
			}
		},
		submitForm() {
			this.validateForm();
			if (this.isFormValid()) {
				console.log("Form submitted successfully");
				const mydata = {
					email: this.formData.email,
					password: this.formData.password,
				};
				this.$store.dispatch("auth/handleSignIn", mydata).then((data) => {
					if (data.success == 1) {
						localStorage.setItem('login', true);
						localStorage.setItem('data', data.result);
						Swal.fire({
							title: 'Success!',
							text: 'User has been successfully login!',
							icon: 'success',
							confirmButtonText: 'OK',
						}).then(() => {
							// Redirect to '/landing' route
							this.$router.push('/ourcommunity');
						});
					} else {
						Swal.fire({
							title: 'Error!',
							text: 'Oops... ' + data.error,
							icon: 'error',
							confirmButtonText: 'OK',
						});
					}

					console.log(data);
				});
			} else {
				console.log("Form validation failed");
			}
		}
		,
		validateForm() {
			this.formErrors = {};

			if (!this.formData.email) {
				this.formErrors.email = "Email is required";
			} else if (!this.isValidEmail(this.formData.email)) {
				this.formErrors.email = "Invalid email format";
			}
			if (!this.formData.password) {
				this.formErrors.password = "Password is required";
			}
		},
		isValidPhoneNumber(phone) {
			const phonePattern = /^\+?\d{1,3}[-.\s]?\d{3,4}[-.\s]?\d{3,4}$/;

			return phonePattern.test(phone);
		},
		isFormValid() {
			return Object.values(this.formErrors).every((error) => !error);
		},
		isValidEmail(email) {
			const emailPattern = /\S+@\S+\.\S+/;
			return emailPattern.test(email);
		},
	},
	created() {

		// this.getprofile()





	},
	mounted() {
		this.fetchProfileData();
	},


};
</script>

<style scoped></style>
