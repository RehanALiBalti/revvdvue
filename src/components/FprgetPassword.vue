<template>
    <div class="container my-5 min-h-80vh">
        <div class="row">
            <div class="col-md-6 m-auto">
                <div class="form-content-home1">
                    <form id="subscribe-form" @submit.prevent="submitForm">
                        <h2 class="form-title"> {{ $t('ForgotPassword') }}</h2>
                        <div class="row">
                            <div class="col-md-12">
                                <label for="email" class="form-label">{{ $t('email') }}</label>
                                <input id="email" type="email" v-model="formData.email" class="form-control form-input"
                                    :placeholder="$t('Enter here')" />
                                <div v-if="formErrors.email" class="text-danger">{{ formErrors.email }}</div>
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
                        </div>
                    </form>
                    <form v-if="formSubmit == true" class="col-md-12" @submit.prevent="submitForm2">
                        <label for="verification-code" class="form-label">{{ $t('VerificationCode') }}</label>
                        <input id="verification-code" type="text" v-model="verificationCode"
                            class="form-control form-input" placeholder="Enter verification code" />
                        <!-- <label for="confirm-password" class="form-label">New Password</label>
                        <input id="confirm-password" type="password" v-model="confirmPassword"
                            class="form-control form-input" placeholder="Confirm password" /> -->
                        <div class="col-md-12">
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
                            <!-- <ul class="text-white">
                  <li>
                    <p>Password must be:</p>
                  </li>
                  <li :class="{ 'completed': isPasswordLengthValid }">
                    <small>8 characters long</small>
                  </li>
                  <li :class="{ 'completed': isUppercaseValid }">
                    <small>An uppercase letter</small>
                  </li>
                  <li :class="{ 'completed': isNumberValid }">
                    <small>A number</small>
                  </li>
                </ul> -->
                        </div>
                        <div class="col-md-12">
                            <div class="list-item-btn position-relative submit-btn-div">
                                <span class="border-bottom-btn border-top-btn position-absolute">
                                    <img src="@/assets/images/Group12.png" class="img-border position-absolute"
                                        alt="" />
                                </span>
                                <span class="border-bottom-btn border-top-btn border-right-radius position-absolute">
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
                        <h5 class="card-title"><span class="choose">{{ $t('EmailSentSuccessfullyTo') }} {{
                        formData.email
                    }}</span></h5>
                        <p class="text-white">{{ $t('PleaseCheckYourEmailBox') }}</p>
                        <!-- <p class="text-white">{{ $t('AndCloseTheModalToSetNewPassword') }}</p> -->
                    </div>


                </div>
            </div>
        </div>
    </div>

    <!-- modal end -->
    <!-- modal2 -->
    <div class="modal show d-block" tabindex="-1" role="dialog" id="carShopFilter" v-if="modal2 === true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="modal-body text-center">
                    <span class="close-icon" @click="modalClose">
                        <i class="fas fa-times"></i>
                    </span>

                    <div class="mt-4 py-2">
                        <h5 class="card-title"><span class="choose">{{ $t('PasswordResetSuccessfully') }}</span></h5>
                        <p class="text-white">Please Sign In To Continue</p>

                    </div>


                </div>
            </div>
        </div>
    </div>
    <!-- modal3 -->
    <div class="modal show d-block" tabindex="-1" role="dialog" id="carShopFilter" v-if="modal3 === true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="modal-body text-center">
                    <span class="close-icon" @click="modalClose">
                        <i class="fas fa-times"></i>
                    </span>

                    <div class="mt-4 py-2">
                        <h5 class="card-title"><span class="choose">Something Went Wrong</span></h5>
                        <p class="text-white">{{ error }}</p>

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
            modal2: false,
            isModalOpen: false,
            modal3: false,
            verificationCode: "",
            // confirmPassword: "", // Add confirmPassword field
            error: "",
            formData: {
                email: "",
                password: ""
            },
            formErrors: {
                email: "",
                verificationCode: "",
                password: "",
            },
        };
    },
    computed: {

        isPasswordLengthValid() {
            return this.formData.password.length >= 8;
        },
        isUppercaseValid() {
            const uppercaseRegex = /[A-Z]/;
            return uppercaseRegex.test(this.formData.password);
        },
        isNumberValid() {
            const numberRegex = /[0-9]/;
            return numberRegex.test(this.formData.password);
        },
        passwordStrength() {
            if (!this.formData.password) return '';
            if (
                this.isPasswordLengthValid &&
                this.isUppercaseValid &&
                this.isNumberValid
            ) {
                return 'Strong';
            } else if (
                this.isPasswordLengthValid ||

                this.isNumberValid
            ) {
                return 'Medium';
            } else {
                return 'Weak';
            }
        },
        passwordStrengthClass() {
            if (this.passwordStrength === 'Weak') {
                return 'text-red'; // Define 'text-red' class in your CSS with appropriate styling
            } else if (this.passwordStrength === 'Medium') {
                return 'text-green'; // Define 'text-green' class in your CSS with appropriate styling
            } else {
                return 'text-orange'; // Define 'text-orange' class in your CSS with appropriate styling
            }
        }


    },
    methods: {
        submitForm3() {

            console.log("Form submitted successfully");
            const mydata = {
                email: this.formData.email,
                password: this.formData.password,
            };
            this.$store.dispatch("auth/handleSignIn", mydata).then((data) => {
                if (data.success == 1) {
                    localStorage.setItem('login', true);
                    localStorage.setItem('data', data.result);

                    // Redirect to '/landing' route
                    this.$router.push('/ourcommunity');

                } else {
                    this.isModalOpen = true
                }

                console.log(data);
            });

        },
        validatePassword() {
            this.formErrors.password = '';
            if (!this.isPasswordLengthValid) {
                this.formErrors.password = 'Password must be at least 8 characters long.';
            } else if (!this.isUppercaseValid) {
                this.formErrors.password = 'Password must contain at least one uppercase letter.';
            } else if (!this.isNumberValid) {
                this.formErrors.password = 'Password must contain at least one number.';
            }
        },
        async submitForm2() {

            const email = this.formData.email;
            const verificationCode = this.verificationCode;
            const newPassword = this.formData.password; // Use confirmPassword as a placeholder
            try {
                // Attempt to verify the code and set a new password
                const data = await Auth.forgotPasswordSubmit(email, verificationCode, newPassword);
                console.log(newPassword)
                console.log("Verification successful:", data);
                if (data == 'SUCCESS') {
                    this.modal2 = true;
                    this.submitForm3();

                }
                // Prompt user to set a new password
                // You can redirect them to a new page or display a modal for setting a new password
            } catch (error) {
                // Handle verification errors
                console.error("Verification failed:", error);
                // Display error messages or take appropriate actions based on error
                this.formErrors.verificationCode = "Invalid verification code"; // Set error message
                this.error = 'Invalid verification code';
                this.modal3 = true
            }
        },
        modalClose() {
            console.log("close modal")
            this.isModalOpen = false
            this.modal2 = false
            this.modal3 = false
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
                    // alert("Attempt limit exceeded, please try again later.");
                    this.error = 'Attempt limit exceeded, please try again later'
                    this.modal3 = true
                } else {
                    // alert("An error occurred. Please try again later.");
                    this.error = 'An error occurred. Please try again later.'
                    this.modal3 = true
                }
            }
        },
    },
    watch: {
        formData: {
            handler() {
                this.validatePassword();
            },
            deep: true
        }
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

.completed {
    color: #FF7A00;
}

.text-red {
    color: #ff4d4f;
    /* or any other style for weak password */
}

.text-green {
    color: #52c41a;
    /* or any other style for medium password */
}

.text-orange {
    color: orange;
    /* or any other style for strong password */
}

.weak {
    background-color: #ff4d4f !important;
    /* Red color for weak */
}

.medium {
    background-color: #52c41a !important;
    /* Yellow color for medium */
}

.strong {
    background-color: orange !important;
    /* Green color for strong */
}

.strength-bars {
    display: flex;
    justify-content: space-between;
    margin-top: 5px;
}

.strength-bar {
    flex: 1;
    height: 7px;
    margin: 0 2px;
    border-radius: 2px;
    background: #fff;
}
</style>