<template>
    <div class="container my-5">
        <div class="row">
            <div class="col-md-6 m-auto">
                <div class="form-content-home1">
                    <form id="subscribe-form" @submit.prevent="submitForm">
                        <h2 class="form-title">Forget <span class="form-span"> Password </span></h2>
                        <div class="row">
                            <div class="col-md-12">
                                <label for="email" class="form-label">Email</label>
                                <input id="email" type="email" v-model="formData.email" class="form-control form-input"
                                    placeholder="Enter here" />
                                <div v-if="formErrors.email" class="text-danger">{{ formErrors.email }}</div>
                            </div>
                            <div class="col-md-12">
                                <p id="errormsg"></p>
                            </div>
                            <div class="col-md-12">
                                <div class="list-item-btn position-relative submit-btn-div">
                                    <button type="submit" class="signin-btnli submitNow"
                                        id="submit-button">Submit</button>
                                </div>
                            </div>
                        </div>
                    </form>
                    <form v-if="formSubmit == true" class="col-md-12" @submit.prevent="submitForm2">
                        <label for="verification-code" class="form-label">Verification Code</label>
                        <input id="verification-code" type="text" v-model="verificationCode"
                            class="form-control form-input" placeholder="Enter verification code" />
                        <label for="confirm-password" class="form-label">New Password</label>
                        <input id="confirm-password" type="password" v-model="confirmPassword"
                            class="form-control form-input" placeholder="Confirm password" />
                        <div class="col-md-12">
                            <div class="list-item-btn position-relative submit-btn-div">
                                <button type="submit" class="signin-btnli submitNow">Submit</button>
                            </div>
                        </div>
                        <div v-if="formErrors.verificationCode" class="text-danger">{{ formErrors.verificationCode }}
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    <!-- modal -->
    <div class="modal show d-block" tabindex="-1" role="dialog" id="carShopFilter" v-if="isModalOpen === true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="modal-body text-center">
                    <span class="close-icon" @click="modalClose">
                        <i class="fas fa-times"></i>
                    </span>

                    <div class="mt-4 py-2">
                        <h5 class="card-title"><span class="choose"> Email Sent Successfylly To {{ formData.email
                                }}</span></h5>
                        <p class="text-white">Please Check Your Email Box</p>
                        <p class="text-white">And Close The Modal TO Set New Password</p>
                    </div>


                </div>
            </div>
        </div>
    </div>

    <!-- modal end -->
    <!-- modal2 -->
    <div class="modal show d-block" tabindex="-1" role="dialog" id="carShopFilter" v-if="isModalOpen === true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="modal-body text-center">
                    <span class="close-icon" @click="modalClose">
                        <i class="fas fa-times"></i>
                    </span>

                    <div class="mt-4 py-2">
                        <h5 class="card-title"><span class="choose">Password Reset Successfullt</span></h5>
                        <p class="text-white">Please Sign In To Continue</p>

                    </div>


                </div>
            </div>
        </div>
    </div>

    <!-- modal end -->
</template>

<script>
import { Auth } from 'aws-amplify';
export default {
    name: "SignIn",
    data() {
        return {
            formSubmit: false,
            isModalOpen: false,
            verificationCode: "",
            confirmPassword: "", // Add confirmPassword field

            formData: {
                email: "",
            },
            formErrors: {
                email: "",
                verificationCode: "",
            },
        };
    },
    methods: {
        async submitForm2() {
            const email = this.formData.email;
            const verificationCode = this.verificationCode;
            const newPassword = this.confirmPassword; // Use confirmPassword as a placeholder
            try {
                // Attempt to verify the code and set a new password
                const data = await Auth.forgotPasswordSubmit(email, verificationCode, newPassword);
                console.log("Verification successful:", data);
                if (data == 'SUCCESS') {
                    this.modal2 = true
                }
                // Prompt user to set a new password
                // You can redirect them to a new page or display a modal for setting a new password
            } catch (error) {
                // Handle verification errors
                console.error("Verification failed:", error);
                // Display error messages or take appropriate actions based on error
                this.formErrors.verificationCode = "Invalid verification code"; // Set error message
            }
        },
        modalClose() {
            console.log("close modal")
            this.isModalOpen = false
        },
        async submitForm() {
            console.log("Form submitted successfully");
            const email = this.formData.email;
            console.log("email", email);
            try {
                // Attempt to send forgot password request
                await Auth.forgotPassword(email);
                console.log("Forgot password request successful");
                this.isModalOpen = true;
                this.formSubmit = true;

            } catch (error) {
                // Handle errors
                console.error("Forgot password request failed:", error);
                if (error.name === 'LimitExceededException') {
                    alert("Attempt limit exceeded, please try again later.");
                } else {
                    alert("An error occurred. Please try again later.");
                }
            }
        },
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
</style>