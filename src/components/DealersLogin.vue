<template>

    <div class="container my-5">
        <div class="row">
            <div class="col-md-12 m-auto">
                <div class="form-content-home1">
                    <form id="subscribe-form" @submit.prevent="submitForm">
                        <h2 class="form-title">Online Regeisteration From<span class="form-span"> For Dealers </span>
                        </h2>
                        <small class="text-white">Are you already registered on mobile de? simply contact our customer
                            service at
                            03081097-500 and have your account reactivated.</small>
                        <div class="row">
                            <div class="col-md-12">
                                <h3 class="text-white mt-2 mb-0">Your Addres (Location O fVehicle)</h3>
                                <label for="email" class="form-label">Compay Name(acc.to vat id confirmation)</label>
                                <input id="email" type="email" class="form-control form-input"
                                    placeholder="Enter here" />

                            </div>
                            <div class="col-md-6">
                                <label for="password" class="form-label">Street(Pleaase no post-office box)</label>
                                <input type="text" id="password" class="form-control form-input"
                                    placeholder="Enter here" />

                            </div>
                            <div class="col-md-3">
                                <label for="password" class="form-label">No.</label>
                                <input type="text" id="password" class="form-control form-input"
                                    placeholder="Enter here" />

                            </div>
                            <div class="col-md-3">
                                <label for="password" class="form-label">street 2</label>
                                <input type="text" id="password" class="form-control form-input"
                                    placeholder="Enter here" />

                            </div>
                            <div class="col-md-3">
                                <label for="password" class="form-label">Zip Code</label>
                                <input type="text" id="password" class="form-control form-input"
                                    placeholder="Enter here" />

                            </div>
                            <div class="col-md-3">
                                <label for="password" class="form-label">City</label>
                                <input type="text" id="password" class="form-control form-input"
                                    placeholder="Enter here" />

                            </div>
                            <div class="col-md-6">
                                <label for="password" class="form-label">Country</label>
                                <input type="text" id="password" class="form-control form-input"
                                    placeholder="Enter here" />

                            </div>
                            <div class="col-md-4">
                                <label for="password" class="form-label">Internat. Prefix</label>
                                <select name="" id="" class="form-select form-input">
                                    <option value="" selected>Germany(+49)</option>
                                </select>

                            </div>
                            <div class="col-md-3">
                                <label for="password" class="form-label">Prefix</label>
                                <input type="text" id="password" class="form-control form-input"
                                    placeholder="Enter here" />


                            </div>
                            <div class="col-md-5">
                                <label for="password" class="form-label">Phone For Customer Queries</label>
                                <input type="text" id="password" class="form-control form-input"
                                    placeholder="Enter here" />


                            </div>
                            <div class="col-md-4">
                                <label for="password" class="form-label">Internat. Prefix</label>
                                <select name="" id="" class="form-select form-input">
                                    <option value="" selected>Germany(+49)</option>
                                </select>

                            </div>
                            <div class="col-md-3">
                                <label for="password" class="form-label">Prefix</label>
                                <input type="text" id="password" class="form-control form-input"
                                    placeholder="Enter here" />


                            </div>
                            <div class="col-md-5">
                                <label for="password" class="form-label">Fax For Customer Queries</label>
                                <input type="text" id="password" class="form-control form-input"
                                    placeholder="Enter here" />


                            </div>
                            <div class="col-md-4">
                                <label for="password" class="form-label">Internat. Prefix</label>
                                <select name="" id="" class="form-select form-input">
                                    <option value="" selected>Germany(+49)</option>
                                </select>

                            </div>
                            <div class="col-md-3">
                                <label for="password" class="form-label">Prefix</label>
                                <input type="text" id="password" class="form-control form-input"
                                    placeholder="Enter here" />


                            </div>
                            <div class="col-md-5">
                                <label for="password" class="form-label">Mobile Phone For Customer Queries</label>
                                <input type="text" id="password" class="form-control form-input"
                                    placeholder="Enter here" />


                            </div>
                            <div class="col-md-12">
                                <label for="password" class="form-label">E-mail For Customer Queries</label>
                                <input type="text" id="password" class="form-control form-input"
                                    placeholder="Enter here" />


                            </div>
                            <div class="col-md-12 d-flex align-items-center gap-2 mt-3">
                                <input type="checkbox" id="check1" class=" form-input m-0 " placeholder="Enter here" />
                                <label for="check1" class="form-label m-0 p-0">I have read and agree with the
                                    <router-link to="/dealerslogin"> General Trems and Condition</router-link></label>



                            </div>
                            <div class="col-md-12 d-flex align-items-center gap-2 mt-3">
                                <input type="checkbox" id="check1" class=" form-input m-0 " placeholder="Enter here" />
                                <label for="check1" class="form-label m-0 p-0">Yes,I agree with the Use if My Data
                                    According To THe
                                    <router-link to="/dealerslogin">Privacy Policy</router-link></label>



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
                                    <!-- <button type="submit" class="signin-btnli submitNow" id="submit-button" fdprocessedid="eysiqp">
                                      Log In </button> -->
                                    <button type="submit" class="signin-btnli submitNow" id="submit-button">
                                        Submit
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
                email: "",
                password: "",
            },
            formErrors: {
                email: "",
                password: "",
            },
        };
    },
    methods: {
        modalClose() {
            console.log("close modal")
            this.isModalOpen = false
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

                        // Redirect to '/landing' route
                        this.$router.push('/ourcommunity');

                    } else {
                        this.isModalOpen = true
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
</style>