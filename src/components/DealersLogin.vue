<template>

    <div class="container my-5">
        <div class="row">
            <div class="col-md-12 m-auto">
                <div class="form-content-home1">
                    <!-- <form id="subscribe-form" @submit.prevent="submitForm">
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
                    </form> -->
                    <form id="subscribe-form" @submit.prevent="submitForm">
                        <h2 class="form-title">Online Registration Form<span class="form-span"> For Dealers </span>
                        </h2>
                        <small class="text-white">Are you already registered on mobile de? simply contact our customer
                            service at
                            03081097-500 and have your account reactivated.</small>
                        <div class="row">
                            <div class="col-md-12">
                                <h3 class="text-white mt-2 mb-0">Your Address (Location Of Vehicle)</h3>
                                <label for="companyName" class="form-label">Company Name (according to VAT ID
                                    confirmation)</label>
                                <input v-model="formData.companyName" id="companyName" type="text"
                                    class="form-control form-input" placeholder="Enter here" />
                            </div>
                            <div class="col-md-6">
                                <label for="street" class="form-label">Street (Please no post-office box)</label>
                                <input v-model="formData.street" id="street" type="text" class="form-control form-input"
                                    placeholder="Enter here" />
                            </div>
                            <div class="col-md-3">
                                <label for="streetNo" class="form-label">No.</label>
                                <input v-model="formData.streetNo" id="streetNo" type="text"
                                    class="form-control form-input" placeholder="Enter here" />
                            </div>
                            <div class="col-md-3">
                                <label for="street2" class="form-label">Street 2</label>
                                <input v-model="formData.street2" id="street2" type="text"
                                    class="form-control form-input" placeholder="Enter here" />
                            </div>
                            <div class="col-md-3">
                                <label for="zipCode" class="form-label">Zip Code</label>
                                <input v-model="formData.zipCode" id="zipCode" type="text"
                                    class="form-control form-input" placeholder="Enter here" />
                            </div>
                            <div class="col-md-3">
                                <label for="city" class="form-label">City</label>
                                <input v-model="formData.city" id="city" type="text" class="form-control form-input"
                                    placeholder="Enter here" />
                            </div>
                            <div class="col-md-6">
                                <label for="country" class="form-label">Country</label>
                                <input v-model="formData.country" id="country" type="text"
                                    class="form-control form-input" placeholder="Enter here" />
                            </div>
                            <div class="col-md-4">
                                <label for="intlPrefix1" class="form-label">Internat. Prefix</label>
                                <select v-model="formData.intlPrefix1" id="intlPrefix1" class="form-select form-input">
                                    <option value="" selected>Germany(+49)</option>
                                    <!-- Add more options if needed -->
                                </select>
                            </div>
                            <div class="col-md-3">
                                <label for="prefix1" class="form-label">Prefix</label>
                                <input v-model="formData.prefix1" id="prefix1" type="text"
                                    class="form-control form-input" placeholder="Enter here" />
                            </div>
                            <div class="col-md-5">
                                <label for="phone1" class="form-label">Phone For Customer Queries</label>
                                <input v-model="formData.phone1" id="phone1" type="text" class="form-control form-input"
                                    placeholder="Enter here" />
                            </div>
                            <div class="col-md-4">
                                <label for="intlPrefix2" class="form-label">Internat. Prefix</label>
                                <select v-model="formData.intlPrefix2" id="intlPrefix2" class="form-select form-input">
                                    <option value="" selected>Germany(+49)</option>
                                    <!-- Add more options if needed -->
                                </select>
                            </div>
                            <div class="col-md-3">
                                <label for="prefix2" class="form-label">Prefix</label>
                                <input v-model="formData.prefix2" id="prefix2" type="text"
                                    class="form-control form-input" placeholder="Enter here" />
                            </div>
                            <div class="col-md-5">
                                <label for="fax" class="form-label">Fax For Customer Queries</label>
                                <input v-model="formData.fax" id="fax" type="text" class="form-control form-input"
                                    placeholder="Enter here" />
                            </div>
                            <div class="col-md-4">
                                <label for="intlPrefix3" class="form-label">Internat. Prefix</label>
                                <select v-model="formData.intlPrefix3" id="intlPrefix3" class="form-select form-input">
                                    <option value="" selected>Germany(+49)</option>
                                    <!-- Add more options if needed -->
                                </select>
                            </div>
                            <div class="col-md-3">
                                <label for="prefix3" class="form-label">Prefix</label>
                                <input v-model="formData.prefix3" id="prefix3" type="text"
                                    class="form-control form-input" placeholder="Enter here" />
                            </div>
                            <div class="col-md-5">
                                <label for="mobilePhone" class="form-label">Mobile Phone For Customer Queries</label>
                                <input v-model="formData.mobilePhone" id="mobilePhone" type="text"
                                    class="form-control form-input" placeholder="Enter here" />
                            </div>
                            <div class="col-md-12">
                                <label for="email" class="form-label">E-mail For Customer Queries</label>
                                <input v-model="formData.email" id="email" type="text" class="form-control form-input"
                                    placeholder="Enter here" />
                            </div>
                            <div class="col-md-12 d-flex align-items-center gap-2 mt-3">
                                <input type="checkbox" id="check1" class="form-input m-0" placeholder="Enter here" />
                                <label for="check1" class="form-label m-0 p-0">I have read and agree with the
                                    <router-link to="/dealerslogin"> General Terms and Conditions</router-link>
                                </label>
                            </div>
                            <div class="col-md-12 d-flex align-items-center gap-2 mt-3">
                                <input type="checkbox" id="check2" class="form-input m-0" placeholder="Enter here" />
                                <label for="check2" class="form-label m-0 p-0">Yes, I agree with the Use of My Data
                                    According To The
                                    <router-link to="/dealerslogin">Privacy Policy</router-link>
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
                email: ''
            }

        };
    },
    methods: {
        modalClose() {
            console.log("close modal")
            this.isModalOpen = false
        },

        submitForm() {
            // Handle form submission here
            console.log(this.formData);
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
</style>