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
                                <div v-if="formErrors.email" class="text-danger">
                                    {{ formErrors.email }}
                                </div>
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
                        <h5 class="card-title"><span class="choose"> Email Sent Successfylly To {{ formData.email
                                }}</span></h5>
                        <p class="text-white">Please Check Your Email Box</p>
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
        // submitForm() {


        //     console.log("Form submitted successfully");
        //     const email = this.formData.email;
        //     console.log("email", email);

        //     const data = Auth.forgotPassword(email)
        //     console.log("data is", data);
        //     this.isModalOpen = true


        // }
        async submitForm() {
            console.log("Form submitted successfully");
            const email = this.formData.email;
            console.log("email", email);

            try {
                // Attempt to send forgot password request
                await Auth.forgotPassword(email);
                console.log("Forgot password request successful");
                this.isModalOpen = true; // Assuming you're using this to display a modal
            } catch (error) {
                // Handle errors
                console.error("Forgot password request failed:", error);
                if (error.name === 'LimitExceededException') {
                    // Display a user-friendly message about the limit being exceeded
                    alert("Attempt limit exceeded, please try again later.");
                } else {
                    // Handle other types of errors as needed
                    alert("An error occurred. Please try again later.");
                }
            }
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
</style>