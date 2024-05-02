<template>

    <div class="container my-5">
        <div class="row">
            <div class="col-md-12 m-auto">
                <div class="form-content-home1">

                    <form id="subscribe-form" @submit.prevent="submitForm">
                        <h2 class="form-title">{{ $t('OnlineRegistrationForm') }}<span class="form-span"> {{
                        $t('ForDealers') }} </span>
                        </h2>
                        <small class="text-white">{{ $t('AlreadyRegisteredNote') }}</small>
                        <div class="row">
                            <div class="col-md-12">
                                <h3 class="text-white mt-2 mb-0">{{ $t('LocationOfVehicle') }}</h3>
                                <label for="companyName" class="form-label">{{ $t('CompanyName') }}</label>
                                <input v-model="formData.companyName" id="companyName" type="text"
                                    class="form-control form-input" placeholder="Enter here" />
                            </div>
                            <div class="col-md-6">
                                <label for="street" class="form-label">{{ $t('Street') }}</label>
                                <input v-model="formData.street" id="street" type="text" class="form-control form-input"
                                    placeholder="Enter here" />
                            </div>
                            <div class="col-md-3">
                                <label for="streetNo" class="form-label">No.</label>
                                <input v-model="formData.streetNo" id="streetNo" type="text"
                                    class="form-control form-input" placeholder="Enter here" />
                            </div>
                            <div class="col-md-3">
                                <label for="street2" class="form-label">{{ $t('Street') }} 2</label>
                                <input v-model="formData.street2" id="street2" type="text"
                                    class="form-control form-input" placeholder="Enter here" />
                            </div>
                            <div class="col-md-3">
                                <label for="zipCode" class="form-label">{{ $t('ZipCode') }}</label>
                                <input v-model="formData.zipCode" id="zipCode" type="text"
                                    class="form-control form-input" placeholder="Enter here" />
                            </div>
                            <div class="col-md-3">
                                <label for="city" class="form-label">{{ $t('City') }}</label>
                                <input v-model="formData.city" id="city" type="text" class="form-control form-input"
                                    placeholder="Enter here" />
                            </div>
                            <div class="col-md-6">
                                <label for="country" class="form-label">{{ $t('Country') }}</label>
                                <input v-model="formData.country" id="country" type="text"
                                    class="form-control form-input" placeholder="Enter here" />
                            </div>
                            <div class="col-md-4">
                                <label for="intlPrefix1" class="form-label">{{ $t('InternatPrefix1') }}</label>
                                <select v-model="formData.intlPrefix1" id="intlPrefix1" class="form-select form-input">
                                    <option value="germany(+49)" selected>Germany(+49)</option>
                                    <option value="germany(+49)" selected>pakistan(+92)</option>
                                    <!-- Add more options if needed -->
                                </select>
                            </div>
                            <div class="col-md-3">
                                <label for="prefix1" class="form-label">{{ $t('Prefix1') }}</label>
                                <input v-model="formData.prefix1" id="prefix1" type="text"
                                    class="form-control form-input" placeholder="Enter here" />
                            </div>
                            <div class="col-md-5">
                                <label for="phone1" class="form-label">{{ $t('Phone1') }}</label>
                                <input v-model="formData.phone1" id="phone1" type="text" class="form-control form-input"
                                    placeholder="Enter here" />
                            </div>
                            <div class="col-md-4">
                                <label for="intlPrefix2" class="form-label">{{ $t('InternatPrefix1') }}</label>
                                <select v-model="formData.intlPrefix2" id="intlPrefix2" class="form-select form-input">
                                    <option value="germany(+49)" selected>Germany(+49)</option>
                                    <option value="germany(+49)" selected>pakistan(+92)</option>
                                    <!-- Add more options if needed -->
                                </select>
                            </div>
                            <div class="col-md-3">
                                <label for="prefix2" class="form-label">{{ $t('Prefix1') }}</label>
                                <input v-model="formData.prefix2" id="prefix2" type="text"
                                    class="form-control form-input" placeholder="Enter here" />
                            </div>
                            <div class="col-md-5">
                                <label for="fax" class="form-label">{{ $t('Fax') }}</label>
                                <input v-model="formData.fax" id="fax" type="text" class="form-control form-input"
                                    placeholder="Enter here" />
                            </div>
                            <div class="col-md-4">
                                <label for="intlPrefix3" class="form-label">{{ $t('InternatPrefix1') }}</label>
                                <select v-model="formData.intlPrefix3" id="intlPrefix3" class="form-select form-input">
                                    <option value="germany(+49)" selected>Germany(+49)</option>
                                    <option value="germany(+49)" selected>pakistan(+92)</option>
                                    <!-- Add more options if needed -->
                                </select>
                            </div>
                            <div class="col-md-3">
                                <label for="prefix3" class="form-label">{}</label>
                                <input v-model="formData.prefix3" id="prefix3" type="text"
                                    class="form-control form-input" placeholder="Enter here" />
                            </div>
                            <div class="col-md-5">
                                <label for="mobilePhone" class="form-label">{{ $t('MobilePhone') }}</label>
                                <input v-model="formData.mobilePhone" id="mobilePhone" type="text"
                                    class="form-control form-input" placeholder="Enter here" />
                            </div>
                            <div class="col-md-6">
                                <label for="email" class="form-label">{{ $t('Email') }}</label>
                                <input v-model="formData.email" id="email" type="email" class="form-control form-input"
                                    placeholder="Enter here" />
                            </div>
                            <div class="col-md-6">
                                <label for="password" class="form-label">{{ $t('password') }}</label>
                                <input type="password" id="password" v-model="formData.password"
                                    class="form-control form-input" placeholder="Enter here" />
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
                            <div class="col-md-12 d-flex align-items-center gap-2 mt-3">
                                <input type="checkbox" id="check1" class="form-input m-0" placeholder="Enter here" />
                                <label for="check1" class="form-label m-0 p-0">{{ $t('IHaveReadAndAgreeWith') }}
                                    <router-link to="/termofservice" class="termsService">{{
                        $t('GeneralTermsAndConditions') }}</router-link>
                                </label>
                            </div>
                            <div class="col-md-12 d-flex align-items-center gap-2 mt-3">
                                <input type="checkbox" id="check2" class="form-input m-0" placeholder="Enter here" />
                                <label for="check2" class="form-label m-0 p-0">{{ $t('IAgreeWithDataUsage') }}
                                    <router-link to="/privacypolicy" class="termsService">{{ $t('PrivacyPolicy')
                                        }}</router-link>
                                </label>
                            </div>
                            <div class="col-md-12 d-flex align-items-center gap-2 mt-3">
                                <input type="checkbox" id="check2" class="form-input m-0" placeholder="Enter here" />
                                <label for="check2" class="form-label m-0 p-0">{{ $t('NoEmails') }}

                                </label>
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
</template>
<script>


export default {
    name: "DealersLogin",

    data() {
        return {
            isModalOpen: false,
            formData: {
                companyName: '',
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
                password: ""
            },
            formErrors: {

                password: "",
            },

        };
    },
    computed: {
        loggedIn() {

            return this.$store.state.auth;

        },
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
                this.isUppercaseValid ||
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
        modalClose() {
            console.log("close modal")
            this.isModalOpen = false
        },

        submitForm() {
            // Handle form submission here
            // console.log(this.formData);
            this.$store.dispatch('auth/handleSignUp2',
                this.formData)
                .then(
                    (data) => {
                        if (data.success == 1) {
                            this.isModalOpen = true
                            this.$router.push("/ourcommunity");
                        } else {
                            this.isModalOpenFail = true
                            this.errorMessage = data.error
                        }

                        console.log(data);
                    })

        }



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