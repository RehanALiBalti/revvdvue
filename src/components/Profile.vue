<template>
  <HeaderItem />
  <div class="container my-5">
	<div class="row">
		<div class="col-md-8 m-auto">
			<div class="form-content-home1">
				<form id="subscribe-form" @submit.prevent="validateForm">

					<div class="user-profile-page">
						<img src="@/assets/images/user-profile-page-img.png" class="user-profile-page-img" alt="user">
						<h2 class="form-title mt-2 mb-0">
							{{firstName}} <span class="form-span"> {{lastName}} </span>
						</h2>
						<p class="map-para email-user-profile-page-para">
							{{email}}
						</p>
					</div>
					<div class="row">
						<div class="col-md-6">
							<label for="name" class="form-label">Name</label>
							<input v-model="firstName" id="name" type="text" name="name" value="John Wicks" class="form-control form-input" placeholder="Enter here" required>
						</div>
						<div class="col-md-6">
							<label for="age" class="form-label">Age</label>
							<input v-model="age" id="age" type="text" name="age" value="April 14, 1995" class="form-control form-input" placeholder="Enter here" required>
						</div>
						<div class="col-md-6">
							<label for="email" class="form-label">Email (verification)</label>
							<input v-model="email" id="email" type="email" name="email" value="John@revvdout.com" class="form-control form-input" placeholder="Enter here" required>
						</div>
						<div class="col-md-6">
							<label for="phone" class="form-label">Phone number (verification)</label>
							<input v-model="phone" id="phone" type="tel" name="phone" value="+98 7654 321 0" class="form-control form-input" placeholder="Enter here" required>
						</div>
						<div class="col-md-6">
							<label for="socialMedia" class="form-label">Social media (optional)</label>
							<input v-model="socialMedia" id="socialMedia" type="text" name="socialMedia" value="Instagram.com/revvdout" class="form-control form-input" placeholder="Enter here">
						</div>
						<div class="col-md-6">
							<label for="password" class="form-label">Password</label>
							<input v-model="password" type="password" id="password" name="password" value="1234" class="form-control form-input" placeholder="Enter here">
						</div>

						<div class="col-md-12">
							<p id="errormsg">{{ errorMessage }}</p>
						</div>
						<div class="col-md-12">
							<div class="list-item-btn position-relative submit-btn-div">
								<span class="border-bottom-btn border-top-btn position-absolute">
									<img src="@/assets/images/Group12.png" class="img-border position-absolute" alt="">
								</span>

								<span class="border-bottom-btn border-top-btn border-right-radius position-absolute">
									<img src="@/assets/images/Path467.png" class="img-border position-absolute" alt="">
								</span>

								<span class="border-bottom-btn border-top-btn border-right-radius border-right-bottom-radius position-absolute">
									<img src="@/assets/images/Path465.png" class="img-border position-absolute" alt="">
								</span>
								<button type="submit" class="signin-btnli submitNow" id="submit-button">
									Update Profile </button>
								<span class="border-bottom-btn border-left-btn position-absolute">
									<img src="@/assets/images/Group11.png" class="img-border position-absolute" alt="">
								</span>
								<span class="border-bottom-btn position-absolute">
									<img src="@/assets/images/Path473.png" class="img-border position-absolute" alt="">
								</span>
							</div>
						</div>
					</div>
				</form>
			</div>
		</div>
	</div>
</div>

<div class="container mt-5">
	<div class="map-desc">
		<div class="map-para-div">
			<p class="map-para">
				Lorem Ipsum is simply dummy text
				of the printing &amp; typesetting industry.
				Lorem Ipsum has been the industry's
				standard dummy text ever since the 1500s,
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
  name: "UserProfile",
  components: {
    HeaderItem,
  },
  data(){
    return{
        firstName: "John",
        lastName: "Wicks",
        email: "John@revvdout.com",
        age: "April 14, 1995",
        phone: "+98 7654 321 0",
        socialMedia: "Instagram.com/revvdout",
        password: "1234",
        errorMessage: '' // Initialize error message
    };
  },
  methods: {
    validateForm() {
        if(this.firstName.trim() === "" || this.lastName.trim() === ""){
            this.errorMessage = "Please enter both First and Last name.";
            return false; // Prevent form submission
        } else if(this.age.trim() === ""){
            this.errorMessage = "Please enter your Age.";
            return false; 
        } else if(this.email.trim() === ""){
            this.errorMessage = "Please enter your Email.";
            return false; 
        } else if(this.phone.trim() === ""){
            this.errorMessage = "Please enter your phone number.";
            return false; 
        } else if(this.socialMedia.trim() === ""){
            this.errorMessage = "Please enter your social media information.";
            return false; 
        } else if(this.password.trim() === ""){
            this.errorMessage = "Please enter your password.";
            return false; 
        } else{
            // Reset error message
            this.errorMessage = "";
            // Submit form
            this.submitForm();
        }
    },
    submitForm(){
        // Your form submission logic goes here
        console.log('Form submitted!');
    }
  }
};
</script>
<style scoped></style>
