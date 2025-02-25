<template>

    <div class="container my-5">
        <div class="row">
            <div class="col-md-12 m-auto">
                <div class="form-content-home1">

                    <form id="subscribe-form" @submit.prevent="submitForm">
                        <h2 class="form-title">{{ $t('OnlineRegistrationForm') }}</h2>
                        <div class="row">
                            <div class="col-md-12">
                                <h3 class="text-white mt-2 mb-0 form-title">{{ $t('LocationOfVehicle') }}</h3>
                                <label for="companyName" class="form-label">{{ $t('CompanyName') }}</label>
                                <input v-model="formData.name" id="companyName" type="text"
                                    :class="['form-control', 'form-input', { 'is-invalid': formErrors.name }]"
                                    :placeholder="$t('Enter here')" />
                                <div v-if="formErrors.name" class="text-danger">{{ formErrors.name }}</div>
                            </div>
                            <div class="col-md-6">
                                <label for="street" class="form-label">{{ $t('Street') }}</label>
                                <input v-model="formData.street" id="street" type="text"
                                    :class="['form-control', 'form-input', { 'is-invalid': formErrors.street }]"
                                    :placeholder="$t('Enter here')" />
                                <div v-if="formErrors.street" class="text-danger">{{ formErrors.street }}</div>
                            </div>
                            <div class="col-md-3">
                                <label for="streetNo" class="form-label">{{ $t('StreetNo') }}</label>
                                <input v-model="formData.streetNo" id="streetNo" type="text"
                                    :class="['form-control', 'form-input', { 'is-invalid': formErrors.streetNo }]"
                                    :placeholder="$t('Enter here')" @input="validatestreeet1" />
                                <div v-if="formErrors.streetNo" class="text-danger">{{ formErrors.streetNo }}</div>
                            </div>
                            <div class="col-md-3">
                                <label for="zipCode" class="form-label">{{ $t('ZipCode') }}</label>
                                <input v-model="formData.zipCode" id="zipCode" type="text"
                                    :class="['form-control', 'form-input', { 'is-invalid': formErrors.zipCode }]"
                                    :placeholder="$t('Enter here')" />
                                <div v-if="formErrors.zipCode" class="text-danger">{{ formErrors.zipCode }}</div>
                            </div>
                            <div class="col-md-3">
                                <label for="city" class="form-label">{{ $t('City') }}</label>
                                <input v-model="formData.city" id="city" type="text"
                                    :class="['form-control', 'form-input', { 'is-invalid': formErrors.city }]"
                                    :placeholder="$t('Enter here')" />
                                <div v-if="formErrors.city" class="text-danger">{{ formErrors.city }}</div>
                            </div>
                            <div class="col-md-3">
                                <label for="country" class="form-label">{{ $t('Country') }}</label>
                                <input v-model="formData.country" id="country" type="text"
                                    :class="['form-control', 'form-input', { 'is-invalid': formErrors.country }]"
                                    :placeholder="$t('Enter here')" />
                                <div v-if="formErrors.country" class="text-danger">{{ formErrors.country }}</div>
                            </div>
                            <div class="col-md-6">
                                <label for="phone1" class="form-label">{{ $t('Phone1') }}</label>
                                <input v-model="formData.phone1" id="phone1" type="tel"
                                    :class="['form-control', 'form-input', { 'is-invalid': formErrors.phone1 }]"
                                    inputmode="numeric" pattern="[0-9]*" :placeholder="$t('Enter here')"
                                    @input="validatePhone1" />
                                <div v-if="formErrors.phone1" class="text-danger">{{ formErrors.phone1 }}</div>
                            </div>
                            <div class="col-md-6">
                                <label for="fax" class="form-label">{{ $t('Fax') }}</label>
                                <input v-model="formData.fax" id="fax" type="tel"
                                    :class="['form-control', 'form-input', { 'is-invalid': formErrors.fax }]"
                                    :placeholder="$t('Enter here')" @input="validateFax" />
                                <div v-if="formErrors.fax" class="text-danger">{{ formErrors.fax }}</div>
                            </div>
                            <div class="col-md-6">
                                <label for="mobilePhone" class="form-label">{{ $t('MobilePhone') }}</label>
                                <input v-model="formData.mobilePhone" id="mobilePhone" type="tel"
                                    :class="['form-control', 'form-input', { 'is-invalid': formErrors.mobilePhone }]"
                                    :placeholder="$t('Enter here')" @input="validateMobilePhone" />
                                <div v-if="formErrors.mobilePhone" class="text-danger">{{ formErrors.mobilePhone }}
                                </div>
                            </div>
                            <div class="col-md-6">
                                <label for="email" class="form-label">{{ $t('Email') }}</label>
                                <input v-model="formData.email" id="email" type="email"
                                    :class="['form-control', 'form-input', { 'is-invalid': formErrors.email }]"
                                    :placeholder="$t('Enter here')" />
                                <div v-if="formErrors.email" class="text-danger">{{ formErrors.email }}</div>
                            </div>
                            <div class="col-md-6 position-relative">
                                <label for="password" class="form-label">{{ $t('password') }}</label>
                                <div class="input-group">
                                    <input :type="formData.showPassword ? 'text' : 'password'" id="password"
                                        v-model="formData.password"
                                        :class="['form-control', 'form-input', 'formP', { 'is-invalid': formErrors.password }]"
                                        :placeholder="$t('Enter here')" />
                                    <span @click="togglePasswordVisibility2"
                                        :class="['input-group-text igt', , { 'isInvalid': formErrors.password }]">
                                        <i class="fa-solid" :class="eyeIcon"></i>
                                    </span>
                                </div>
                                <div v-if="formErrors.password" class="text-danger">{{ formErrors.password }}</div>
                            </div>
                            <div class="col-md-12 d-flex align-items-center gap-3 gap-md-2 mt-3 textnowrap flexwrap">
                                <input type="checkbox" id="check1" v-model="formData.check1"
                                    :class="['form-check-input m-0 p-0', { 'is-invalid': formErrors.check1 }]" />
                                <label for="check1" class="form-label m-0 p-0">{{ $t('IHaveReadAndAgreeWith') }}
                                    <router-link to="/termofservice" class="termsService" target="_blank">{{
                                        $t('GeneralTermsAndConditions') }}</router-link>
                                </label>
                                <div v-if="formErrors.check1" class="text-danger">
                                    <p class="m-0 p-0">{{ formErrors.check1 }}</p>
                                </div>
                            </div>
                            <div class="col-md-12 d-flex align-items-center gap-3 gap-md-2 mt-3 textnowrap flexwrap">
                                <input type="checkbox" id="check2" v-model="formData.check2"
                                    :class="['form-check-input m-0 p-0', { 'is-invalid': formErrors.check2 }]" />
                                <label for="check2" class="form-label m-0 p-0">{{ $t('IAgreeWithDataUsage') }}
                                    <router-link to="/privacypolicy" class="termsService" target="_blank">{{
                                        $t('PrivacyPolicy') }}</router-link>
                                </label>
                                <div v-if="formErrors.check2" class="text-danger">
                                    <p class="text-danger m-0 p-0">{{ formErrors.check2 }}</p>
                                </div>
                            </div>
                            <div class="col-md-12 d-flex align-items-center gap-2 mt-3">
                                <input type="checkbox" id="check3" class="form-check-input" />
                                <label for="check3" class="form-label m-0 p-0">{{ $t('NoEmails') }}</label>
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
                                    <button type="submit" class="signin-btnli submitNow" id="submit-button">{{
                                        $t('submit') }}</button>
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

    <!-- modal -->
    <div class="modal show d-block" tabindex="-1" role="dialog" id="carShopFilter" v-if="isModalOpen === true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="modal-body text-center">
                    <span class="close-icon" @click="modalClose">
                        <i class="fas fa-times"></i>
                    </span>

                    <div class="mt-4 py-2">
                        <h5 class="card-title"><span class="choose"> Email or Password is Incorrect </span></h5>
                        <p class="text-white">Please Varify Email And Password</p>
                    </div>


                </div>
            </div>
        </div>
    </div>

    <!-- modal end -->
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
                        <p class="text-white">{{ this.errorMessage }}</p>
                        <p class="text-white">Please Try Again</p>
                    </div>


                </div>
            </div>
        </div>
    </div>
</template>
<script>
// import axios from 'axios';
import apiClient from "@/http-common";
export default {
    name: "DealersLogin",

    data() {
        return {
            isModalOpen: false,
            isModalOpenFail: false,
            errorMessage: "",
            formData: {
                showPassword: false,
                name: '',
                street: '',
                streetNo: '',
                street2: '',
                zipCode: '',
                city: '',
                country: '',


                phone1: '',

                fax: '',

                mobilePhone: '',
                email: '',
                password: "",
                check1: "",
                check2: "",
                role: "dealer"
            },
            formErrors: {}

        };
    },
    computed: {
        eyeIcon() {
            return this.formData.showPassword ? 'fa-eye-slash' : 'fa-eye';

        },
        loggedIn() {

            return this.$store.state.auth;

        },
        isPasswordLengthValid() {
            return this.formData.password.length >= 8;
        },
        isContainSpecialchar() {
            const password = this.formData.password;
            const minLength = 8;
            const specialCharPattern = /[!@#$%^&*(),.?":{}|<>]/;

            return password.length >= minLength && specialCharPattern.test(password);
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
                this.isNumberValid &&
                this.isContainSpecialchar
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
        validatePhone1(event) {
            const value = event.target.value;
            if (/[^0-9]/.test(value)) {
                this.formErrors.phone1 = 'Please write in numeric Form';
                this.formData.phone1 = value.replace(/[^0-9]/g, '');
            } else {
                this.formErrors.phone1 = '';
            }
        },
        validatestreeet1(event) {
            const value = event.target.value;
            if (/[^0-9]/.test(value)) {
                this.formErrors.streetNo = 'Please write in numeric Form';
                this.formData.streetNo = value.replace(/[^0-9]/g, '');
            } else {
                this.formErrors.streetNo = '';
            }
        },
        validateFax(event) {
            const value = event.target.value;
            if (/[^0-9]/.test(value)) {
                this.formErrors.fax = 'Please write in numeric Form';
                this.formData.fax = value.replace(/[^0-9]/g, '');
            } else {
                this.formErrors.fax = '';
            }
        },
        validateMobilePhone(event) {
            const value = event.target.value;
            if (/[^0-9]/.test(value)) {
                this.formErrors.mobilePhone = 'Please write in numeric Form';
                this.formData.mobilePhone = value.replace(/[^0-9]/g, '');
            } else {
                this.formErrors.mobilePhone = '';
            }
        },

        togglePasswordVisibility2() {
            this.formData.showPassword = !this.formData.showPassword;
        },
        // working before link change
        // async submitProfileForm() {
        //     console.log("in submit profile form")
        //     try {
        //         // Make a POST request to the API endpoint
        //         const response = await axios.post('https://king-prawn-app-3rw3o.ondigitalocean.app/api/users', this.formData);

        //         // Handle success response
        //         console.log('Form data submitted successfully:', response.data);
        //         // You can perform further actions here, such as redirecting the user or showing a success message
        //     } catch (error) {
        //         // Handle error
        //         console.error('Error submitting form data:', error);
        //         // You can show an error message to the user or handle the error in any other appropriate way
        //     }
        // },
        async submitProfileForm() {
            console.log("🚀 Submitting profile form...");

            try {
                // ✅ Make API request using `apiClient`
                const response = await apiClient.post("/users", this.formData);

                // ✅ Handle success response
                console.log("✅ Profile form submitted successfully:", response.data);

                // ✅ Additional success actions (e.g., redirect, success message)
                // this.$router.push("/profile-success");
            } catch (error) {
                console.error("❌ Error submitting profile form:", error);

                // ✅ Handle error (show error message)
                // this.errorMessage = "Failed to submit profile form. Please try again.";
            }
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
            else if (!this.isContainSpecialchar) {
                this.formErrors.password = "Password Must contain at least one symbol"
            }
        },
        modalClose() {
            console.log("close modal")
            this.isModalOpen = false
        },

        // submitForm() {
        //     // Handle form submission here
        //     // console.log(this.formData);
        //     this.validateForm();
        //     if (this.isFormValid()) {
        //         this.$store.dispatch('auth/handleSignUp2',
        //             this.formData)
        //             .then(
        //                 (data) => {
        //                     if (data.success == 1) {
        //                         this.isModalOpen = true
        //                         this.$router.push("/ourcommunity");
        //                     } else {
        //                         this.isModalOpenFail = true
        //                         this.errorMessage = data.error
        //                     }

        //                     console.log(data);
        //                 })

        //     }
        //     else {
        //         console.log("error", this.isFormValid())
        //     }

        // },
        // async submitForm() {
        //     console.log("befor", this.formData)

        //     // Handle form submission here
        //     this.validateForm();

        //     if (this.isFormValid()) {
        //         //this.submitProfileForm()
        //         const mydata = {

        //             nickname: this.formData.name.trim().toLowerCase(),
        //             // age: this.formData.age,
        //             email: this.formData.email,
        //             phone: this.formData.phone,
        //             password: this.formData.password,

        //             street: this.formData.street,
        //             streetNo: this.formData.streetNo,

        //             zipCode: this.formData.zipCode,
        //             city: this.formData.city,
        //             country: this.formData.country,

        //             phone1: this.formData.phone,

        //             fax: this.formData.fax,

        //             mobilePhone: this.formData.phone,

        //             check1: this.formData.check1,
        //             check2: this.formData.check2,
        //             role: this.formData.role

        //             // socialMedia: this.formData.socialMedia,
        //         };
        //         console.log("before submittind dealer data", mydata);
        //         try {
        //             const url = `https://king-prawn-app-3rw3o.ondigitalocean.app/api/users/nickname?nickname=${mydata.nickname}`;
        //             const response = await axios.get(url);
        //             console.log("respi", response)
        //             if (response.data.count == 0) {
        //                 this.$store.dispatch('auth/handleSignUp2', this.formData)
        //                     .then(data => {

        //                         if (data.success === 1) {
        //                             console.log("result", data.result)
        //                             //this.isModalOpen = true;

        //                             localStorage.setItem('login', true);
        //                             this.$router.push("/profile");
        //                         } else {
        //                             console.log("in else")
        //                             this.isModalOpenFail = true;
        //                             this.errorMessage = data.error;
        //                         }

        //                         console.log(data);
        //                     })
        //                     .catch(error => {
        //                         console.error("Error during form submission:", error);
        //                         // Handle error if needed
        //                     });
        //             }
        //         }
        //         catch (error) {
        //             console.log("error", error)
        //         }


        //     } else {
        //         console.log("Form is invalid");
        //     }
        // },
        // working before link change
        // async submitForm() {
        //     this.validateForm();
        //     if (this.isFormValid()) {
        //         try {
        //             const url = `https://king-prawn-app-3rw3o.ondigitalocean.app/api/users/nickname?nickname=${this.formData.name.trim().toLowerCase()}`;
        //             const response = await axios.get(url);
        //             if (response.data.count === 0) {
        //                 this.$store.dispatch('auth/handleSignUp2', this.formData).then(data => {
        //                     if (data.success === 1) {
        //                         localStorage.setItem('login', true);
        //                         this.$router.push("/profile");
        //                     } else {
        //                         this.errorMessage = data.error;
        //                     }
        //                 }).catch(error => {
        //                     console.error("Error during form submission:", error);
        //                 });
        //             }
        //         } catch (error) {
        //             console.error("Error:", error);
        //         }
        //     } else {
        //         console.log("Form is invalid");
        //     }
        // },
        async submitForm() {
            this.validateForm();

            if (this.isFormValid()) {
                try {
                    // ✅ Use `apiClient` for the GET request
                    const response = await apiClient.get(`/users/nickname?nickname=${this.formData.name.trim().toLowerCase()}`);

                    if (response.data.count === 0) {
                        this.$store.dispatch("auth/handleSignUp2", this.formData)
                            .then(data => {
                                if (data.success === 1) {
                                    localStorage.setItem("login", true);
                                    this.$router.push("/profile");
                                } else {
                                    this.errorMessage = data.error;
                                }
                            })
                            .catch(error => {
                                console.error("❌ Error during form submission:", error);
                            });
                    }
                } catch (error) {
                    console.error("❌ API Error:", error);
                }
            } else {
                console.log("❌ Form is invalid");
            }
        },
        // isFormValid() {
        //     return Object.values(this.formErrors).every(error => !error);
        // },
        isFormValid() {
            return Object.keys(this.formErrors).length === 0;
        },

        // validateForm() {
        //     this.formErrors = {};

        //     if (!this.formData.check1) {
        //         this.formErrors.check1 = "   Please check the General Terms And Conditions";
        //     }
        //     if (!this.formData.check2) {
        //         this.formErrors.check2 = "Please check the Privacy And Policy";
        //     }
        //     if (!this.formData.password) {
        //         this.formErrors.password = "Password is ";
        //     }
        // },
        validateForm() {
            this.formErrors = {};
            if (!this.formData.name) this.formErrors.name = 'Company name is required ';
            if (!this.formData.street) this.formErrors.street = 'Street is required';
            if (!this.formData.streetNo) this.formErrors.streetNo = 'Street number is required';
            if (!this.formData.zipCode) this.formErrors.zipCode = 'Zip code is required';
            if (!this.formData.city) this.formErrors.city = 'City is required';
            if (!this.formData.country) this.formErrors.country = 'Country is required';
            if (!this.formData.phone1) this.formErrors.phone1 = 'Phone number is required';
            if (!this.formData.fax) this.formErrors.fax = 'Fax is required';
            if (!this.formData.mobilePhone) this.formErrors.mobilePhone = 'Mobile phone is required';
            if (!this.formData.email) this.formErrors.email = 'Email is required';
            if (!this.formData.password) this.formErrors.password = 'Password is required';
            if (!this.formData.check1) this.formErrors.check1 = 'Please accept the terms';
            if (!this.formData.check2) this.formErrors.check2 = 'Please accept the privacy policy';
        },

    },
    watch: {
        formData: {
            handler() {
                this.validatePassword();
            },
            'formData.phone1': function (newVal) {
                alert(newVal)
                if (/[^0-9]/.test(newVal)) {
                    this.formErrors.phone1 = 'Please write numbers';
                    this.formData.phone1 = newVal.replace(/[^0-9]/g, '');
                } else {
                    this.formErrors.phone1 = '';
                }
            },
            deep: true
        }
    },
};
</script>
<style scoped>
.form-label {
    margin-bottom: 0px
}

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

.form-select {
    display: block;
    width: 100%;
    max-width: 920px;
    height: 50px;
    padding: 0.375rem 2.25rem 0.375rem 1.75rem;
    -moz-padding-start: calc(0.75rem - 3px);
    font-size: 20px;
    font-weight: 400;
    line-height: 1.5;
    color: #c5c5c5;
    background-color: #000b1c;
    /* background-image: url("../images/Icon\ awesome-chevron-down.png"); */
    background-repeat: no-repeat;
    background-position: right 1.75rem center;
    background-size: 16px 12px;
    border: 1px solid #1a202c;
    border-radius: 5px;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    font-family: "Gruppo", sans-serif;
    cursor: pointer;
}

.form-select:focus {
    box-shadow: none;
}

.completed {
    color: #FF7A00;
}

.text-red {
    color: #52c41a;
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
    background-color: #52c41a !important;
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

.form-check-input {
    box-shadow: 2px 3px 6px rgba(0, 0, 0, 1.1);
    position: relative;

    cursor: pointer;
    background-color: #f95f19 !important;
    border: none !important;
}

.form-control.is-invalid {
    border-color: #7E2838 !important;
}

.text-danger {
    font-size: 14px !important;
}

.igt {
    background: #031726;
    color: #FF7A00;
    border-color: #1a202c;
    border-left: transparent;

}

.formP {
    border-right: transparent !important;
    border-top-right-radius: 0 !important;
    border-bottom-right-radius: 0 !important;

}

.isInvalid {
    border-color: #7E2838 !important;
}
</style>