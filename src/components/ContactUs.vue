<template>





    <div class="container my-5">
        <div class="form-content-home1">
            <!-- action="#" method="POST" data-bs-toggle="modal" -->
            <form id="subscribe-form" @submit.prevent="submitForm">
                <h2 class="form-title">
                    {{ $t('subscribe') }}
                    <span class="form-span">{{ $t('Now') }}</span>
                </h2>
                <div class="row">
                    <div class="col-md-4">
                        <label for="name" class="form-label"> {{ $t('userType') }} </label>
                        <select v-model="formData.userType" id="name" name="usertype"
                            class="form-select form-control form-input">
                            <option value="">{{ $t('select') }}</option>
                            <option value="Tunning/Performance Shop">
                                Tunning/Performance Shop
                            </option>
                            <option value="Private Car Seller">Private Car Seller</option>
                            <option value="Professional Car Seller">
                                Professional Car Seller
                            </option>
                            <option value="Cosmetics modification shop Performance Modifications shop">
                                Cosmetics modification shop
                            </option>
                            <option value="Car Photography">Car Photographer</option>
                            <option value="Car Spotter">Car Spotter</option>
                            <option value="Car Club">Car Club</option>
                            <option value="Car Animator/Illustrator">
                                Car Animator/Illustrator
                            </option>
                        </select>
                        <!-- Error message for Country -->
                        <!-- <p class="text-danger" v-if="!formData.userType">{{ $t('selectUserType') }}</p> -->

                    </div>
                    <div class="col-md-4">
                        <label for="email" class="form-label">{{ $t('contactEmail') }}</label>
                        <input v-model="formData.email" id="email" type="email" name="email"
                            class="form-control form-input" :placeholder="$t('Enter here')" />
                        <!-- Error message for Email -->
                        <!-- <p class="text-danger" v-if="!formData.email">{{ $t('enterEmailAddress') }}</p> -->
                        <!-- <p class="text-danger" v-else-if="!isEmailValid">Please enter a valid email address</p> -->
                    </div>
                    <div class="col-md-4">
                        <label for="phone" class="form-label">{{ $t('phoneNumber') }}</label>
                        <input v-model="formData.phone" type="tel" id="phone" name="phone"
                            class="form-control form-input" :placeholder="$t('Enter here')" />
                        <!-- Error message for Phone -->
                        <!-- <p class="text-danger" v-if="!formData.phone">${{ $t('enterPhoneNumber') }}</p> -->
                        <!-- <p class="text-danger" v-else-if="!isPhoneValid">Please enter a valid phone number.</p> -->
                    </div>
                    <div class="col-md-6">
                        <label for="country" class="form-label">{{ $t('country') }}</label>
                        <!-- <input type="text" id="country" class="form-control form-input"  :placeholder="$t('Enter here')"required> -->
                        <select v-model="formData.country" class="form-select form-control form-input" name="country"
                            id="country">
                            <option value="">{{ $t('SelectCountry') }}</option>
                            <option value="AF">Afghanistan</option>
                            <option value="AX">Aland Islands</option>
                            <option value="AL">Albania</option>
                            <option value="DZ">Algeria</option>
                            <option value="AS">American Samoa</option>
                            <option value="AD">Andorra</option>
                            <option value="AO">Angola</option>
                            <option value="AI">Anguilla</option>
                            <option value="AQ">Antarctica</option>
                            <option value="AG">Antigua and Barbuda</option>
                            <option value="AR">Argentina</option>
                            <option value="AM">Armenia</option>
                            <option value="AW">Aruba</option>
                            <option value="AU">Australia</option>
                            <option value="AT">Austria</option>
                            <option value="AZ">Azerbaijan</option>
                            <option value="BS">Bahamas</option>
                            <option value="BH">Bahrain</option>
                            <option value="BD">Bangladesh</option>
                            <option value="BB">Barbados</option>
                            <option value="BY">Belarus</option>
                            <option value="BE">Belgium</option>
                            <option value="BZ">Belize</option>
                            <option value="BJ">Benin</option>
                            <option value="BM">Bermuda</option>
                            <option value="BT">Bhutan</option>
                            <option value="BO">Bolivia</option>
                            <option value="BQ">Bonaire, Sint Eustatius and Saba</option>
                            <option value="BA">Bosnia and Herzegovina</option>
                            <option value="BW">Botswana</option>
                            <option value="BV">Bouvet Island</option>
                            <option value="BR">Brazil</option>
                            <option value="IO">British Indian Ocean Territory</option>
                            <option value="BN">Brunei Darussalam</option>
                            <option value="BG">Bulgaria</option>
                            <option value="BF">Burkina Faso</option>
                            <option value="BI">Burundi</option>
                            <option value="KH">Cambodia</option>
                            <option value="CM">Cameroon</option>
                            <option value="CA">Canada</option>
                            <option value="CV">Cape Verde</option>
                            <option value="KY">Cayman Islands</option>
                            <option value="CF">Central African Republic</option>
                            <option value="TD">Chad</option>
                            <option value="CL">Chile</option>
                            <option value="CN">China</option>
                            <option value="CX">Christmas Island</option>
                            <option value="CC">Cocos (Keeling) Islands</option>
                            <option value="CO">Colombia</option>
                            <option value="KM">Comoros</option>
                            <option value="CG">Congo</option>
                            <option value="CD">
                                Congo, Democratic Republic of the Congo
                            </option>
                            <option value="CK">Cook Islands</option>
                            <option value="CR">Costa Rica</option>
                            <option value="CI">Cote D'Ivoire</option>
                            <option value="HR">Croatia</option>
                            <option value="CU">Cuba</option>
                            <option value="CW">Curacao</option>
                            <option value="CY">Cyprus</option>
                            <option value="CZ">Czech Republic</option>
                            <option value="DK">Denmark</option>
                            <option value="DJ">Djibouti</option>
                            <option value="DM">Dominica</option>
                            <option value="DO">Dominican Republic</option>
                            <option value="EC">Ecuador</option>
                            <option value="EG">Egypt</option>
                            <option value="SV">El Salvador</option>
                            <option value="GQ">Equatorial Guinea</option>
                            <option value="ER">Eritrea</option>
                            <option value="EE">Estonia</option>
                            <option value="ET">Ethiopia</option>
                            <option value="FK">Falkland Islands (Malvinas)</option>
                            <option value="FO">Faroe Islands</option>
                            <option value="FJ">Fiji</option>
                            <option value="FI">Finland</option>
                            <option value="FR">France</option>
                            <option value="GF">French Guiana</option>
                            <option value="PF">French Polynesia</option>
                            <option value="TF">French Southern Territories</option>
                            <option value="GA">Gabon</option>
                            <option value="GM">Gambia</option>
                            <option value="GE">Georgia</option>
                            <option value="DE">Germany</option>
                            <option value="GH">Ghana</option>
                            <option value="GI">Gibraltar</option>
                            <option value="GR">Greece</option>
                            <option value="GL">Greenland</option>
                            <option value="GD">Grenada</option>
                            <option value="GP">Guadeloupe</option>
                            <option value="GU">Guam</option>
                            <option value="GT">Guatemala</option>
                            <option value="GG">Guernsey</option>
                            <option value="GN">Guinea</option>
                            <option value="GW">Guinea-Bissau</option>
                            <option value="GY">Guyana</option>
                            <option value="HT">Haiti</option>
                            <option value="HM">Heard Island and Mcdonald Islands</option>
                            <option value="VA">Holy See (Vatican City State)</option>
                            <option value="HN">Honduras</option>
                            <option value="HK">Hong Kong</option>
                            <option value="HU">Hungary</option>
                            <option value="IS">Iceland</option>
                            <option value="IN">India</option>
                            <option value="ID">Indonesia</option>
                            <option value="IR">Iran, Islamic Republic of</option>
                            <option value="IQ">Iraq</option>
                            <option value="IE">Ireland</option>
                            <option value="IM">Isle of Man</option>
                            <option value="IL">Israel</option>
                            <option value="IT">Italy</option>
                            <option value="JM">Jamaica</option>
                            <option value="JP">Japan</option>
                            <option value="JE">Jersey</option>
                            <option value="JO">Jordan</option>
                            <option value="KZ">Kazakhstan</option>
                            <option value="KE">Kenya</option>
                            <option value="KI">Kiribati</option>
                            <option value="KP">Korea, Democratic People's Republic of</option>
                            <option value="KR">Korea, Republic of</option>
                            <option value="KW">Kuwait</option>
                            <option value="KG">Kyrgyzstan</option>
                            <option value="LA">Lao People's Democratic Republic</option>
                            <option value="LV">Latvia</option>
                            <option value="LB">Lebanon</option>
                            <option value="LS">Lesotho</option>
                            <option value="LR">Liberia</option>
                            <option value="LY">Libyan Arab Jamahiriya</option>
                            <option value="LI">Liechtenstein</option>
                            <option value="LT">Lithuania</option>
                            <option value="LU">Luxembourg</option>
                            <option value="MO">Macao</option>
                            <option value="MK">
                                Macedonia, the Former Yugoslav Republic of
                            </option>
                            <option value="MG">Madagascar</option>
                            <option value="MW">Malawi</option>
                            <option value="MY">Malaysia</option>
                            <option value="MV">Maldives</option>
                            <option value="ML">Mali</option>
                            <option value="MT">Malta</option>
                            <option value="MH">Marshall Islands</option>
                            <option value="MQ">Martinique</option>
                            <option value="MR">Mauritania</option>
                            <option value="MU">Mauritius</option>
                            <option value="YT">Mayotte</option>
                            <option value="MX">Mexico</option>
                            <option value="FM">Micronesia, Federated States of</option>
                            <option value="MD">Moldova, Republic of</option>
                            <option value="MC">Monaco</option>
                            <option value="MN">Mongolia</option>
                            <option value="ME">Montenegro</option>
                            <option value="MS">Montserrat</option>
                            <option value="MA">Morocco</option>
                            <option value="MZ">Mozambique</option>
                            <option value="MM">Myanmar</option>
                            <option value="NA">Namibia</option>
                            <option value="NR">Nauru</option>
                            <option value="NP">Nepal</option>
                            <option value="NL">Netherlands</option>
                            <option value="NC">New Caledonia</option>
                            <option value="NZ">New Zealand</option>
                            <option value="NI">Nicaragua</option>
                            <option value="NE">Niger</option>
                            <option value="NG">Nigeria</option>
                            <option value="NU">Niue</option>
                            <option value="NF">Norfolk Island</option>
                            <option value="MP">Northern Mariana Islands</option>
                            <option value="NO">Norway</option>
                            <option value="OM">Oman</option>
                            <option value="PK">Pakistan</option>
                            <option value="PW">Palau</option>
                            <option value="PS">Palestinian Territory, Occupied</option>
                            <option value="PA">Panama</option>
                            <option value="PG">Papua New Guinea</option>
                            <option value="PY">Paraguay</option>
                            <option value="PE">Peru</option>
                            <option value="PH">Philippines</option>
                            <option value="PN">Pitcairn</option>
                            <option value="PL">Poland</option>
                            <option value="PT">Portugal</option>
                            <option value="PR">Puerto Rico</option>
                            <option value="QA">Qatar</option>
                            <option value="RE">Reunion</option>
                            <option value="RO">Romania</option>
                            <option value="RU">Russian Federation</option>
                            <option value="RW">Rwanda</option>
                            <option value="BL">Saint Barthelemy</option>
                            <option value="SH">Saint Helena</option>
                            <option value="KN">Saint Kitts and Nevis</option>
                            <option value="LC">Saint Lucia</option>
                            <option value="MF">Saint Martin</option>
                            <option value="PM">Saint Pierre and Miquelon</option>
                            <option value="VC">Saint Vincent and the Grenadines</option>
                            <option value="WS">Samoa</option>
                            <option value="SM">San Marino</option>
                            <option value="ST">Sao Tome and Principe</option>
                            <option value="SA">Saudi Arabia</option>
                            <option value="SN">Senegal</option>
                            <option value="RS">Serbia</option>
                            <option value="SC">Seychelles</option>
                            <option value="SL">Sierra Leone</option>
                            <option value="SG">Singapore</option>
                            <option value="SX">Sint Maarten</option>
                            <option value="SK">Slovakia</option>
                            <option value="SI">Slovenia</option>
                            <option value="SB">Solomon Islands</option>
                            <option value="SO">Somalia</option>
                            <option value="ZA">South Africa</option>
                            <option value="GS">
                                South Georgia and the South Sandwich Islands
                            </option>
                            <option value="SS">South Sudan</option>
                            <option value="ES">Spain</option>
                            <option value="LK">Sri Lanka</option>
                            <option value="SD">Sudan</option>
                            <option value="SR">Suriname</option>
                            <option value="SJ">Svalbard and Jan Mayen</option>
                            <option value="SE">Sweden</option>
                            <option value="CH">Switzerland</option>
                            <option value="SY">Syrian Arab Republic</option>
                            <option value="TW">Taiwan, Province of China</option>
                            <option value="TJ">Tajikistan</option>
                            <option value="TZ">Tanzania, United Republic of</option>
                            <option value="TH">Thailand</option>
                            <option value="TL">Timor-Leste</option>
                            <option value="TG">Togo</option>
                            <option value="TK">Tokelau</option>
                            <option value="TO">Tonga</option>
                            <option value="TT">Trinidad and Tobago</option>
                            <option value="TN">Tunisia</option>
                            <option value="TR">Turkey</option>
                            <option value="TM">Turkmenistan</option>
                            <option value="TC">Turks and Caicos Islands</option>
                            <option value="TV">Tuvalu</option>
                            <option value="UG">Uganda</option>
                            <option value="UA">Ukraine</option>
                            <option value="AE">United Arab Emirates</option>
                            <option value="GB">United Kingdom</option>
                            <option value="US">United States</option>
                            <option value="UM">United States Minor Outlying Islands</option>
                            <option value="UY">Uruguay</option>
                            <option value="UZ">Uzbekistan</option>
                            <option value="VU">Vanuatu</option>
                            <option value="VE">Venezuela</option>
                            <option value="VN">Viet Nam</option>
                            <option value="VG">Virgin Islands, British</option>
                            <option value="VI">Virgin Islands, U.s.</option>
                            <option value="WF">Wallis and Futuna</option>
                            <option value="EH">Western Sahara</option>
                            <option value="YE">Yemen</option>
                            <option value="ZM">Zambia</option>
                            <option value="ZW">Zimbabwe</option>
                        </select>
                        <!-- Error message for Country -->
                        <!-- <p class="text-danger" v-if="!formData.country">{{ $t('selectCountry') }}.</p> -->
                    </div>
                    <div class="col-md-6">
                        <label for="city" class="form-label">{{ $t('city') }}</label>
                        <!-- <select class="form-select form-control form-input" id="city" onchange="fetchCities()">
                              </select> -->
                        <input v-model="formData.city" type="text" id="city" name="city" class="form-control form-input"
                            :placeholder="$t('Enter here')" />
                        <!-- Error message for City -->
                        <!-- <p class="text-danger" v-if="!formData.city">P{{ $t('enterCity') }}.</p> -->
                    </div>
                    <div class="col-md-12">
                        <label for="message" class="form-label">{{ $t('becomeAmbassador') }}</label>
                        <textarea v-model="formData.message" id="message" class="form-control form-input h-auto"
                            name="message" :placeholder="$t('Wearelookingfor')" rows="4"></textarea>
                        <!-- Error message for Message -->
                        <!-- <p class="text-danger" v-if="!formData.message">{{ $t('enterMessage') }}.</p> -->
                    </div>


                    <div class="col-md-12">
                        <div class="check-field">
                            <input type="checkbox" id="acceptCondition" v-model="formData.acceptCondition"
                                class="form-check-input" />
                            <label for="acceptCondition" class="form-label">
                                {{ $t('agree') }}
                                <router-link class="termsService" to="/termofservice" target="_blank">{{
                $t('TermsofService') }}
                                </router-link>
                                {{ $t('useofpersonaldata') }}
                                <router-link class="termsService" to="/privacypolicy" target="_blank">
                                    {{ $t('PrivacyPolicy') }}
                                </router-link>
                                *
                            </label>
                        </div>
                    </div>
                    <div class="col-md-12">
                        <div class="list-item-btn position-relative submit-btn-div">
                            <span class="border-bottom-btn border-top-btn position-absolute">
                                <img src="@/assets/images/Group12.png" class="img-border position-absolute" alt="" />
                            </span>

                            <span class="border-bottom-btn border-top-btn border-right-radius position-absolute">
                                <img src="@/assets/images/Path467.png" class="img-border position-absolute" alt="" />
                            </span>

                            <span
                                class="border-bottom-btn border-top-btn border-right-radius border-right-bottom-radius position-absolute">
                                <img src="@/assets/images/Path465.png" class="img-border position-absolute" alt="" />
                            </span>
                            <button type="submit" class="signin-btnli submitNow" id="submit-button">
                                {{ $t('submitNow') }}
                            </button>
                            <span class="border-bottom-btn border-left-btn position-absolute">
                                <img src="@/assets/images/Group11.png" class="img-border position-absolute" alt="" />
                            </span>
                            <span class="border-bottom-btn position-absolute">
                                <img src="@/assets/images/Path473.png" class="img-border position-absolute" alt="" />
                            </span>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>

    <div class="modal fade" id="ignismyModal" tabindex="-1" role="dialog">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"
                        @click="hideModal"></button>
                </div>
                <div class="modal-body">
                    <div class="thank-you-pop">
                        <img src="http://goactionstations.co.uk/wp-content/uploads/2017/03/Green-Round-Tick.png"
                            alt="" />
                        <h1>Thank You!</h1>
                        <p>Your submission is received, and we will contact you soon</p>
                    </div>
                </div>
            </div>
        </div>
    </div>


</template>

<script>

export default {
    name: "HomeLanding",

    data() {
        return {
            formData: {
                userType: "",
                email: "",
                phone: "",
                country: "",
                city: "",
                message: "",
                acceptCondition: false,
                errorMessage: "",
            },
            //   showModal: false,
        };
    },
    methods: {
        handleStorageChange(event) {
            if (event.key === 'login') {
                this.isLogin = JSON.parse(event.newValue);
            }
        },
        // submitForm() {
        //   //Reset error message
        //   this.errorMessage = "";

        //   //Validate userType
        //   if (this.formData.userType === "") {
        //     this.formData.errorMessage = "Please select a user type";
        //     return;
        //   }

        //   // Validate email
        //   const emailRegex = /^\S+@\S+\.\S+$/;
        //   if (this.formData.email === "") {
        //     this.formData.errorMessage = "Please enter your email address";
        //     return;
        //   } else if (!emailRegex.test(this.formData.email)) {
        //     this.formData.errorMessage = "please enter a valid email address";
        //     return;
        //   }

        //   //validate phone
        //   const phoneRegex = /^\+?(\d.*){3,}$/;
        //   if (this.formData.phone === "") {
        //     this.formData.errorMessage = "Please enter your phone number.";
        //     return;
        //   } else if (!phoneRegex.test(this.formData.phone)) {
        //     this.formData.errorMessage = "Please enter a valid phone number.";
        //     return;
        //   }

        //   // Validate country
        //   if (this.formData.country === "") {
        //     this.formData.errorMessage = "Please enter your country.";
        //   }

        //   // Validate city
        //   if (this.formData.city === "") {
        //     this.formData.errorMessage = "Please enter your city.";
        //     return;
        //   }
        //   // Validate message
        //   if (this.formData.message === "") {
        //     this.formData.errorMessage = "Please enter your message.";
        //     return;
        //   }

        //   // Validate acceptCondition
        //   if (!this.formData.acceptCondition) {
        //     this.formData.errorMessage = "Please accept the terms and conditions.";
        //     return;
        //   }

        //   // For demonstration purposes, let's just log the form data
        //   console.log("Form submitted successfully!");
        //   console.log("Form data:", this.formData);

        //   // Open the modal after successful form submission
        //   this.showModal();
        // },
        submitForm() {
            // Reset error message
            this.formData.errorMessage = "";

            // Validate userType
            if (this.formData.userType === "") {
                this.formData.errorMessage = "Please select a user type";
                return;
            }

            // Validate email
            const emailRegex = /^\S+@\S+\.\S+$/;
            if (this.formData.email === "") {
                this.formData.errorMessage = "Please enter your email address";
                return;
            } else if (!emailRegex.test(this.formData.email)) {
                this.formData.errorMessage = "Please enter a valid email address";
                return;
            }

            // Validate phone
            const phoneRegex = /^\+?(\d.*){3,}$/;
            if (this.formData.phone === "") {
                this.formData.errorMessage = "Please enter your phone number.";
                return;
            } else if (!phoneRegex.test(this.formData.phone)) {
                this.formData.errorMessage = "Please enter a valid phone number.";
                return;
            }

            // Validate country
            if (this.formData.country === "") {
                this.formData.errorMessage = "Please select your country.";
                return;
            }

            // Validate city
            if (this.formData.city === "") {
                this.formData.errorMessage = "Please enter your city.";
                return;
            }

            // Validate message
            if (this.formData.message === "") {
                this.formData.errorMessage = "Please enter your message.";
                return;
            }

            // Validate acceptCondition
            if (!this.formData.acceptCondition) {
                this.formData.errorMessage = "Please accept the terms and conditions.";
                return;
            }

            // If all validations pass, you can proceed with form submission
            console.log("Form submitted successfully!");
            console.log("Form data:", this.formData);

            // Open the modal after successful form submission
            this.showModal();
        },

        // Method to show the modal
        showModal() {
            var modal = document.getElementById("ignismyModal");
            if (modal) {
                modal.style.display = "block";
                modal.classList.add("show"); // Use 'classList' instead of 'classlist'
                // setTimeout(() => {
                //   this.hideModal(); // Use 'this' to refer to the component's instance
                // }, 2000); // Hide modal after 2 seconds
            }
        },
        // Method to hide the modal
        hideModal() {
            var modal = document.getElementById("ignismyModal");
            if (modal) {
                modal.style.display = "none";
                modal.classList.remove("show"); // Use 'classList' instead of 'classlist'
            }
        },
    },
    mounted() {

        window.addEventListener('storage', this.handleStorageChange);


    },
    beforeUnmount() {

        window.removeEventListener('storage', this.handleStorageChange); // Remove the event listener
    },
};

</script>

<style scoped>
.form-control.form-input.h-auto {
    height: auto !important;
}

.form-check-input {
    box-shadow: 2px 3px 6px rgba(0, 0, 0, 1.1);
    position: relative;

    cursor: pointer;
    background-color: #f95f19 !important;
    border: none !important;
}

.modal {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1060;
    display: none;
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;
    outline: 0;
    background-color: rgba(0, 8, 20, 0.9);
}

.modal-dialog {
    width: 100%;
    max-width: 1000px;
    margin: 1.75rem auto;
    position: relative;
    top: 15%;
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

.modal-header {
    display: flex;
    flex-shrink: 0;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 1rem;
    border-bottom: 1px solid #dee2e6;
    border-top-left-radius: calc(.3rem - 1px);
    border-top-right-radius: calc(.3rem - 1px);
}

.thank-you-pop {
    width: 100%;
    padding: 20px;
    text-align: center;
}

.thank-you-pop img {
    width: 76px;
    height: auto;
    margin: 0 auto;
    display: block;
    margin-bottom: 25px;
}

.thank-you-pop h1 {
    font-size: 42px;
    margin-bottom: 25px;
    color: #ffffff;
}

.thank-you-pop p {
    font-size: 20px;
    margin-bottom: 27px;
    color: #ffffff;
}

.btn-close {
    box-sizing: content-box;
    width: 1em;
    height: 1em;
    padding: 0.25em 0.25em;
    color: #fff;
    background: #fff url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23000'%3e%3cpath d='M.293.293a1 1 0 011.414 0L8 6.586 14.293.293a1 1 0 111.414 1.414L9.414 8l6.293 6.293a1 1 0 01-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 01-1.414-1.414L6.586 8 .293 1.707a1 1 0 010-1.414z'/%3e%3c/svg%3e") center/1em auto no-repeat;
    border: 0;
    border-radius: 0.25rem;
    opacity: 1;
}

.cardOverlay {

    position: absolute;
    height: 65%;
    width: 96%;

    /* background: url('../../public/images/layer2.png');
    background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), */
    /* Background image */
    /* url('../../public/images/layer1.png'); */
    opacity: 0.9;
    /* background-size: cover; */
    z-index: 4
}

.cardOverlay img {
    position: absolute;
    width: 100%;
    top: 0;
    height: 100%
}

@media screen and (max-width: 991px) {

    div.start-engine-div .border-bottom-btn.border-top-btn.border-right-radius .img-border {
        left: 91px;
    }


}

@media(max-width:768px) {
    .cardOverlay img {
        height: 100%;
    }
}

@media(max-width:375px) {
    .cardOverlay img {
        height: 89%;
    }
}
</style>