<template>
	<div class="container my-5">
		<div class="row">
			<div class="col-md-8 m-auto">
				<div class="form-content-home1">
					<form id="subscribe-form" @submit.prevent="validateForm">
						<div class="user-profile-page">
							<img src="@/assets/images/user-profile-page-img.png" class="user-profile-page-img"
								alt="user">
							<h2 class="form-title mt-2 mb-0">
								{{ firstName }} <span class="form-span"> {{ lastName }} </span>
							</h2>
							<p class="map-para email-user-profile-page-para">
								{{ email }}
							</p>
						</div>
						<div class="row">
							<div class="col-md-6">
								<label for="name" class="form-label">{{ $t('name') }}</label>
								<input v-model="firstName" id="name" type="text" name="name"
									class="form-control form-input" placeholder="Enter here" required>
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
export default {
	name: "UserProfile",
	data() {
		return {
			firstName: "",
			lastName: "",
			email: "",
			age: "",
			phone: "",
			socialMedia: "",
			password: "",
			errorMessage: ''
		};
	},
	methods: {
		validateForm() {
			if (this.firstName.trim() === "" || this.lastName.trim() === "") {
				this.errorMessage = "Please enter both First and Last name.";
				return false;
			} else if (this.age.trim() === "") {
				this.errorMessage = "Please enter your Age.";
				return false;
			} else if (this.email.trim() === "") {
				this.errorMessage = "Please enter your Email.";
				return false;
			} else if (this.phone.trim() === "") {
				this.errorMessage = "Please enter your phone number.";
				return false;
			} else if (this.socialMedia.trim() === "") {
				this.errorMessage = "Please enter your social media information.";
				return false;
			} else if (this.password.trim() === "") {
				this.errorMessage = "Please enter your password.";
				return false;
			} else {
				this.errorMessage = "";
				this.submitForm();
			}
		},
		submitForm() {
			console.log('Form submitted!');
			// Your form submission logic goes here
		}
	},
	created() {
		const userData = JSON.parse(localStorage.getItem('CognitoIdentityServiceProvider.3gdn1a64vc584t64t7e0up87el.50fc691c-30a1-70c7-4318-d2aa16c0de0b.userData'));
		if (userData && userData.UserAttributes) {
			const nameAttribute = userData.UserAttributes.find(attr => attr.Name === 'name');
			if (nameAttribute) {
				const fullName = nameAttribute.Value.split(' '); // assuming the name is in "firstName lastName" format
				this.firstName = fullName[0] || "";
				this.lastName = fullName[1] || "";
			}
			this.email = userData.UserAttributes.find(attr => attr.Name === 'email')?.Value || "";
			this.age = userData.UserAttributes.find(attr => attr.Name === 'age')?.Value || "";
			this.phone = userData.UserAttributes.find(attr => attr.Name === 'phone_number')?.Value || "";
			this.socialMedia = userData.UserAttributes.find(attr => attr.Name === 'socialMedia')?.Value || "";
		}
	}
};
</script>

<style scoped></style>
