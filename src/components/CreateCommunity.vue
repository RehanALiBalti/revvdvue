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
                <label for="title" class="form-label">Forum Tittle</label>
                <input v-model="formData.title" id="title" type="text" name="title" class="form-control form-input"
                  :placeholder="$t('Enter here')" />
              </div>
              <div class="col-md-12">
                <label for="description" class="form-label">Forum Description</label>
                <textarea v-model="formData.description" id="description" class="form-control form-input"
                  name="description" :placeholder="$t('Enter here')" rows="4"></textarea>
              </div>

              <div class="col-md-12">
                <p v-if="errorMessage" class="text-danger" id="errormsg">{{ errorMessage }}</p>
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
                  <!-- <a href="<?= base_url('site/community')?>" class="signin-btnli submitNow" id="submit-button" fdprocessedid="eysiqp">
									Create Now</a> -->
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

  <div class="container mt-5">
    <div class="map-desc">
      <div class="map-para-div">
        <p class="map-para">
          Lorem Ipsum is simply dummy text of the printing &amp; typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s,
        </p>
      </div>
      <ul class="icons-list">
        <li class="icons-list-item">
          <a class="icons-list-atag" href="">
            <i class="fab fa-facebook-f"></i>
          </a>
        </li>

        <li class="icons-list-item">
          <a class="icons-list-atag" href="">
            <!-- <i class="fab fa-twitter"></i> -->
            <i class="fa-brands fa-x-twitter"></i>
          </a>
        </li>

        <!-- <li class="icons-list-item">
						<a class="icons-list-atag" href="">
							<i class="fa-brands fa-youtube"></i>
						</a>
					</li> -->
        <li class="icons-list-item">
          <a class="icons-list-atag" href="">
            <i class="fab fa-instagram"></i>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>

export default {
  name: "CreateCommunity",

  data() {
    return {
      formData: {
        title: "",
        description: "",
      },
      errorMessage: "",
      submitting: false,
    };
  },
  methods: {
    validateForm() {
      if (!this.formData.title || !this.formData.description) {
        this.errorMessage = "please fill in all fields.";
        return;
      }
      // If the form is valid, you can submit it
      this.submitForm();
    },
    submitForm() {
      // Set submitting to true to disable the submit button while processing
      this.submitting = true;

      // Simulate form submission
      setTimeout(() => {
        // Reset form data
        this.formData.title = "",
          this.formData.description = "",

          // Reset error message
          this.errorMessage = '';

        // Set submitting back to false to enable the submit button
        this.submitting = false;
      }, 2000); // Simulating a 2-second delay for submission
    },
  },
};
</script>
<style scoped></style>
