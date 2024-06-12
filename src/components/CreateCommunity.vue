<template>
  <div class="container my-5">
    <div class="row">
      <div class="col-md-6 m-auto">
        <div class="form-content-home1">
          <form id="subscribe-form" @submit.prevent="validateForm">
            <h2 class="form-title">
              Create <span class="form-span"> Forum </span>
            </h2>
            <div class="row">
              <div class="col-md-12">
                <label for="title" class="form-label">Forum Title</label>
                <input v-model="formData.title" id="title" type="text" name="title" class="form-control form-input"
                  :placeholder="$t('Enter here')" />
              </div>
              <div class="col-md-12">
                <label for="description" class="form-label">Forum Description</label>
                <textarea v-model="formData.description" id="description" class="form-control form-input tarea"
                  name="description" :placeholder="$t('Enter here')" rows="4" cols="20"></textarea>
              </div>
              <div class="col-md-12">
                <p v-if="errorMessage" class="text-danger" id="errormsg">{{ errorMessage }}</p>
                <p v-if="successMessage" class="text-success" id="successmsg">{{ successMessage }}</p>
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
                  <button type="submit" class="signin-btnli submitNow" id="submit-button" :disabled="submitting">
                    Create Now
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
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: "CreateCommunity",

  data() {
    return {

      // formData: {
      //   pageId: "",
      //   title: "",
      //   description: "",
      // },
      formData: {

        title: "",
        description: "",
        make: '',
        model: '',
        production_years: '',
        specifications: ''
      },
      errorMessage: "",
      successMessage: "",
      submitting: false,
    };
  },
  mounted() {
    this.formData.pageId = this.$route.params.id;
    this.formData.make = this.$route.params.make;
    this.formData.model = this.$route.params.modal
    console.log("modal", this.formData.model)
    this.formData.production_years = this.$route.params.production_years
    this.formData.specifications = this.$route.params.specifications

  },
  methods: {
    validateForm() {
      this.errorMessage = "";
      this.successMessage = "";
      if (!this.formData.title || !this.formData.description) {
        this.errorMessage = "Please fill in all fields.";
        return;
      }
      // If the form is valid, submit it
      this.formSubmit();
    },
    // formSubmit() {
    //   this.submitting = true;

    //   const formData = new FormData();
    //   formData.append('filter_id', this.formData.pageId)
    //   formData.append('title', this.formData.title);
    //   formData.append('description', this.formData.description);

    //   const config = {
    //     headers: {
    //       'Content-Type': 'multipart/form-data',
    //       'Cookie': 'ci_session=2f7cae7a141b4553e24fe62237c5171e3df6f513'
    //     }
    //   };

    //   axios.post('https://buzzwaretech.com/adminrev/Api/addforumdata', formData, config)
    //     .then(response => {
    //       console.log(response.data);
    //       this.successMessage = "Form submitted successfully!";
    //       this.formData.title = "";
    //       this.formData.description = "";
    //     })
    //     .catch(error => {
    //       console.error('There was an error!', error);
    //       this.errorMessage = "There was an error submitting the form.";
    //     })
    //     .finally(() => {
    //       this.submitting = false;
    //     });
    // }

    async formSubmit() {
      // Data to be sent in the POST request
      const postData = {
        title: this.formData.title,
        description: this.formData.description,
        make: this.formData.make,
        model: this.formData.model,
        production_years: this.formData.production_years,
        specifications: this.formData.specifications
      };

      try {
        // Make the POST request with the specified data
        const response = await axios.post('https://clownfish-app-quehu.ondigitalocean.app/api/communities/', postData);

        // Handle the response data
        console.log(response.data);
        const routeUrl = `/community/${postData.make}/${postData.model}/${postData.production_years}/${postData.specifications}`;

        // Navigate to the constructed URL
        this.$router.push({ path: routeUrl });
      } catch (error) {
        // Handle any errors
        console.error('Error making POST request:', error);
      }
    }
  }

};
</script>

<style scoped>
.tarea {
  height: 10rem !important;
}
</style>
