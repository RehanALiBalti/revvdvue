<template>
  <div class="container my-5">
    <div class="row">
      <div class="col-md-6 m-auto">
        <div class="form-content-home1">
          <form id="subscribe-form position-relative" @submit.prevent="validateForm">
            <h2 class="form-title">
              Create <span class="form-span"> Thread </span>
            </h2>
            <div v-if="loading" class="d-flex justify-content-center loader">
              <div class="box"></div>
            </div>
            <div class="row">
              <div class="col-md-12">
                <label for="title" class="form-label">Thread Title</label>
                <input v-model="formData.title" id="title" type="text" name="title" class="form-control form-input"
                  :placeholder="$t('Enter here')" />
              </div>
              <div class="col-md-12">
                <label for="description" class="form-label">Thread Description</label>
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
                  <button type="submit" class="signin-btnli submitNow" id="submit-button" :disabled="loading">
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
// // import axios from 'axios';
import apiClient from "@/http-common";
export default {
  name: "CreateCommunity",

  data() {
    return {
      loading: false,
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
    // console.log("modal", this.formData.model)
    this.formData.production_years = this.$route.params.production_years
    this.formData.specifications = this.$route.params.specifications
    // console.log("pyaer", this.formData.production_years)
    // alert("pyear", this.formData.production_years)

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

    // async formSubmit() {
    //   // Data to be sent in the POST request
    //   this.loading = true
    //   const postData = {
    //     title: this.formData.title,
    //     description: this.formData.description,
    //     make: this.formData.make,
    //     model: this.formData.model,
    //     production_years: this.formData.production_years,
    //     specifications: this.formData.specifications
    //   };

    //   try {
    //     // Make the POST request with the specified data
    //     const response = await axios.post('https://king-prawn-app-3rw3o.ondigitalocean.app/api/communities/', postData);

    //     // Handle the response data
    //     console.log(response.data);
    //     const routeUrl = `/community/${postData.make}/${postData.model}/${postData.production_years}/${postData.specifications}`;

    //     // Navigate to the constructed URL
    //     this.loading = false;
    //     this.$router.push({ path: routeUrl });
    //   } catch (error) {
    //     // Handle any errors
    //     console.error('Error making POST request:', error);
    //   }
    // }
    // async formSubmit() {
    //   // Data to be sent in the POST request
    //   this.loading = true;
    //   const postData = {
    //     title: this.formData.title,
    //     description: this.formData.description,
    //     make: this.formData.make,
    //     model: this.formData.model,
    //     production_years: this.formData.production_years,
    //     specifications: this.formData.specifications
    //   };

    //   try {
    //     // Make the POST request with the specified data
    //     const response = await axios.post('https://king-prawn-app-3rw3o.ondigitalocean.app/api/communities/', postData);

    //     // Handle the response data

    //     console.log(response.data);
    //     // alert("sdas")

    //     // Construct the base URL with mandatory parameters
    //     let routeUrl = `/community/${postData.make}/${postData.model}`;

    //     // Include production_years if it is not empty
    //     if (postData.production_years) {
    //       routeUrl += `/${postData.production_years}`;
    //     }

    //     // Add specifications to the URL
    //     routeUrl += `/${postData.specifications}`;

    //     // Navigate to the constructed URL
    //     this.loading = false;
    //     this.$router.push({ path: routeUrl });
    //   } catch (error) {
    //     // Handle any errors
    //     this.loading = false;
    //     console.error('Error making POST request:', error);
    //   }
    // }

    async formSubmit() {
      this.loading = true; // ✅ Start loading indicator

      // ✅ Data for the request
      const postData = {
        title: this.formData.title,
        description: this.formData.description,
        make: this.formData.make,
        model: this.formData.model,
        production_years: this.formData.production_years,
        specifications: this.formData.specifications
      };

      try {
        // ✅ Send the request using `apiClient`
        const response = await apiClient.post("/communities/", postData);

        console.log("✅ Form submitted successfully:", response.data);

        // ✅ Encode parameters if needed
        const encodedMake = encodeURIComponent(postData.make);
        const encodedModel = encodeURIComponent(postData.model);
        const encodedSpecifications = encodeURIComponent(postData.specifications);

        // ✅ Construct the navigation URL
        let routeUrl = `/community/${encodedMake}/${encodedModel}`;

        if (postData.production_years) {
          const encodedProductionYears = encodeURIComponent(postData.production_years);
          routeUrl += `/${encodedProductionYears}`;
        }

        routeUrl += `/${encodedSpecifications}`;

        console.log("🔗 Navigating to:", routeUrl);

        this.loading = false; // ✅ Stop loading indicator
        this.$router.back(); // ✅ Navigate back
      } catch (error) {
        // Handle any errors
        this.loading = false;
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

.loader {
  position: absolute;
  top: 50%;
  left: 45%;
  z-index: 9;
  background: transparent;
  height: fit-content;
  width: fit-content;
}

.box {
  height: 100px;
  width: 100px;
  border-radius: 50%;
  border: 6px solid;
  border-color: #FF7A00 transparent;
  animation: spin 1s infinite ease-out;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
</style>
