<template>
  <section class="section-car-listing position-relative">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="heading-car">
            <h1 class="banner-title">{{ $t("ourCommunity") }}</h1>
          </div>
          <!-- <div class="btns-community">
            <div class="btn-div-create-forum position-relative">
              <span class="border-bottom-btn border-top-btn position-absolute">
                <img src="@/assets/images/Group12white.png" class="img-border position-absolute" alt="" />
              </span>

              <span class="border-bottom-btn border-top-btn border-right-radius position-absolute">
                <img src="@/assets/images/Path467white.png" class="img-border position-absolute" alt="" />
              </span>

              <span
                class="border-bottom-btn border-top-btn border-right-radius border-right-bottom-radius position-absolute">
                <img src="@/assets/images/Path465white.png" class="img-border position-absolute" alt="" />
              </span>
              <router-link to="/CreateCommunity" class="signin-btnli signup-btnli">
                Create Forum
              </router-link>
              <span class="border-bottom-btn border-left-btn position-absolute">
                <img src="@/assets/images/Group11white.png" class="img-border position-absolute" alt="" />
              </span>
              <span class="border-bottom-btn position-absolute">
                <img src="@/assets/images/Path473white.png" class="img-border position-absolute" alt="" />
              </span>
            </div>
            <div class="btn-div-create-forum position-relative">
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
              <a href="" class="signin-btnli"> Create Club </a>
              <span class="border-bottom-btn border-left-btn position-absolute">
                <img src="@/assets/images/Group11.png" class="img-border position-absolute" alt="" />
              </span>
              <span class="border-bottom-btn position-absolute">
                <img src="/assets/images/Path473.png" class="img-border position-absolute" alt="" />
              </span>
            </div>
          </div> -->
        </div>
      </div>
    </div>
  </section>

  <section class="section-car-listing-breadcrumb mb-5">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <nav aria-label="breadcrumb" class="nav-breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item">
                <router-link class="breadcrumb-item-a-tag" to="/home">{{
              $t("home")
            }}</router-link>
              </li>
              <li class="breadcrumb-item">
                <router-link class="breadcrumb-item-a-tag" to="/ourcommunity">{{
                $t("community")
              }}</router-link>
              </li>
            </ol>
          </nav>
        </div>
      </div>
    </div>
  </section>

  <section class="community-section my-5 pt-3">
    <div class="container">
      <div class="row g-4">
        <div class="col-md-3">
          <div class="filter-box">
            <h4 class="filter-title">{{ $t("filters") }}</h4>
            <form class="row">
              <div class="col-12">
                <label for="models" class="form-label filter-label">{{
              $t("make")
            }}</label>
                <select id="models" class="form-select form-control form-input filter-select" required="" v-model="make"
                  @change="getModels()">
                  <option value="" selected disabled>Any</option>

                  <option v-for="(make, index) in makes" :key="index" :value="make.make">
                    {{ make.make }}
                  </option>
                </select>
              </div>
              <div class="col-12">
                <label for="models" class="form-label filter-label">{{
              $t("models")
            }}</label>
                <select id="models" class="form-select form-control form-input filter-select" v-model="model"
                  @change="getGenerations()">
                  <option value="" selected disabled>Any</option>
                  <option v-for="(model, index) in models" :key="index" :value="model.model">
                    {{ model.model }}
                  </option>
                </select>
              </div>

              <div class="col-12">
                <label for="bodyType" class="form-label filter-label">{{
              $t("generation")
            }}</label>
                <select id="bodyType" class="form-select form-control form-input filter-select" v-model="generation">
                  <option value="" selected disabled>Any</option>
                  <option v-for="(value, index) in generations" :key="index" :value="value">
                    {{ value }}
                  </option>
                </select>
              </div>

              <div class="col-12">
                <label for="fuelType" class="form-label filter-label">{{ $t("classification") }}
                </label>
                <select id="fuelType" class="form-select form-control form-input filter-select"
                  v-model="classification">
                  <option value="" selected disabled>Any</option>
                  <option v-for="(value, index) in classifications" :key="index" :value="value">
                    {{ value }}
                  </option>
                </select>
              </div>

              <div class="col-12">
                <label for="seats" class="form-label filter-label">{{
              $t("productionYears")
            }}</label>
                <select id="seats" class="form-select form-control form-input filter-select" v-model="productionYear">
                  <option value="" selected disabled>Any</option>
                  <option v-for="(value, index) in productionYears" :key="index" :value="value">
                    {{ value }}
                  </option>
                </select>
              </div>

              <div class="col-12">
                <label for="seats" class="form-label filter-label">
                  {{ $t("countryOfOrigin") }}</label>
                <select id="seats" class="form-select form-control form-input filter-select" v-model="countryOfOrigin">
                  <option value="" selected disabled>Any</option>
                  <option v-for="(value, index) in countryOfOrigins" :key="index" :value="value">
                    {{ value }}
                  </option>
                </select>
              </div>
              <div class="my-2">
                <div class="load-more-info w-100 d-flex justify-content-start align-items-center mb-4 mx-auto">
                  <div class="list-item-btn position-relative load-more-div proceed-div mx-auto">
                    <span class="border-bottom-btn border-top-btn position-absolute">
                      <img src="@/assets/images/Group12engine.png" class="img-border position-absolute" alt="" />
                    </span>

                    <span class="border-bottom-btn border-top-btn border-right-radius popup-right position-absolute">
                      <img src="@/assets/images/Path467engine.png" class="img-border position-absolute" alt="" />
                    </span>

                    <span
                      class="border-bottom-btn border-top-btn border-right-radius border-right-bottom-radius popup-right-bottom position-absolute">
                      <img src="@/assets/images/Path465engine.png" class="img-border position-absolute" alt="" />
                    </span>
                    <!-- data-bs-toggle="modal" -->
                    <button class="signin-btnli Start Engine load-more-btn proceed-btn width-set"
                      data-bs-target="#mailModal" @click="retrieveFilterCommunities">
                      Submit
                    </button>
                    <span class="border-bottom-btn border-left-btn new-popup position-absolute">
                      <img src="@/assets/images/Group11engine.png" class="img-border position-absolute" alt="" />
                    </span>
                    <span class="border-bottom-btn position-absolute">
                      <img src="@/assets/images/Path473engine.png" class="img-border position-absolute" alt="" />
                    </span>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div class="filter-image-div my-4">
            <img src="@/assets/images/Image18.png" class="img-fluid filter-image" alt="Image" />
          </div>
        </div>

        <div class="col-md-9 px-4 " v-if="communities != null && communities != ''">
          <div class="col-12 mb-4 m-auto" v-for="community in filteredCommunities" :key="community.id">
            <router-link :to="`/communitydetails/${community.id}`">
              <div class="communtiy-content">
                <div class="card-title-div">
                  <h2 class="card-title-h2 community-title">
                    <!-- Koenigsegg agera one: <span> 1 </span> -->
                    {{ community.make }} , {{ community.model
                    }}<span> {{ community.count }} </span>
                  </h2>
                </div>
                <div class="map-para-div community-para-div">
                  <p class="map-para community-para">
                    <!-- Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. -->
                    {{ community.description }}
                  </p>
                </div>
                <div class="list-community-add">
                  <div class="like-community">
                    <i class="fa-solid fa-thumbs-up"></i><span class="total-likes">{{ community.likes }}</span>
                  </div>
                  <div class="like-community">
                    <i class="fa-solid fa-comments"></i><span class="total-likes">{{ community.comments }}</span>
                  </div>
                  <div class="like-community">
                    <i class="fa-solid fa-eye"></i><span class="total-likes">{{ community.views }}</span>
                  </div>
                </div>
              </div>
            </router-link>
          </div>


          <!-- pagination -->
          <nav class="float-end my-4 community-pagination" aria-label="Page navigation">
            <ul class="pagination">
              <li class="page-item">
                <a class="page-link" href="#" aria-label="Previous" @click="goToPreviousPage">
                  <span aria-hidden="true"><i class="fa-solid fa-chevron-left"></i></span>
                </a>
              </li>
              <li class="page-item" v-for="page in totalPages" :key="page">
                <a class="page-link" href="#" @click="goToPage(page)">{{
              page
            }}</a>
              </li>

              <li class="page-item">
                <a class="page-link" href="#" aria-label="Next" @click="goToNextPage">
                  <span aria-hidden="true"><i class="fa-solid fa-chevron-right"></i></span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div class="col-md-9 px-4" v-else>
          <h3 class="alert alertbg">
            No Communities Found
          </h3>
        </div>
      </div>
    </div>
  </section>

  <!-- modal -->
  <div class="modal fade" tabindex="-1" role="dialog" id="carShopFilter" ref="modalRef">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-body text-center">
          <span class="close-icon" @click="closeModel" data-bs-dismiss="modal" aria-label="Close">
            <i class="fas fa-times"></i>
          </span>
          <form @submit.prevent="submitFilter">
            <div class="mt-4 py-2">
              <h5 class="card-title"><span class="choose"> Filter </span></h5>
            </div>
            <div class="row">

              <div class="col-md-6">
                <div class="mt-2 py-2 d-flex justify-content-center align-items-center">
                  <select class="form-select" v-model="make" @change="getModels()">
                    <option value="" selected disabled>Make</option>
                    <option v-for="(make, index) in makes" :key="index" :value="make.make">
                      {{ make.make }}
                    </option>
                  </select>
                </div>
              </div>

              <div class="col-md-6">
                <div class="mt-2 py-2 d-flex justify-content-center align-items-center">
                  <select class="form-select" v-model="model" @change="getGenerations()">
                    <option value="" selected disabled>Model</option>
                    <option v-for="(model, index) in models" :key="index" :value="model.model">
                      {{ model.model }}
                    </option>
                  </select>
                </div>
              </div>

              <div class="col-md-6">
                <div class="mt-2 py-2 d-flex justify-content-center align-items-center">
                  <select class="form-select" v-model="generation">
                    <option value="" selected disabled>Generation</option>
                    <option v-for="(value, index) in generations" :key="index" :value="value">
                      {{ value }}
                    </option>
                  </select>
                </div>
              </div>

              <div class="col-md-6">
                <div class="mt-2 py-2 d-flex justify-content-center align-items-center">
                  <select class="form-select" v-model="classification">
                    <option value="" selected disabled>Classification</option>
                    <option v-for="(value, index) in classifications" :key="index" :value="value">
                      {{ value }}
                    </option>
                  </select>
                </div>
              </div>

              <div class="col-md-6">
                <div class="mt-2 py-2 d-flex justify-content-center align-items-center">
                  <select class="form-select" v-model="productionYear">
                    <option value="" selected disabled>Production Years</option>
                    <option v-for="(value, index) in productionYears" :key="index" :value="value">
                      {{ value }}
                    </option>
                  </select>
                </div>
              </div>

              <div class="col-md-6">
                <div class="mt-2 py-2 d-flex justify-content-center align-items-center">
                  <select class="form-select" v-model="countryOfOrigin">
                    <option value="" selected disabled>
                      Country of Origin
                    </option>
                    <option v-for="(value, index) in countryOfOrigins" :key="index" :value="value">
                      {{ value }}
                    </option>
                  </select>
                </div>
              </div>

              <div class="col-md-12 m-auto">
                <div class="load-more-info w-100 d-flex justify-content-start align-items-center mb-4 mx-auto">
                  <div class="list-item-btn position-relative load-more-div proceed-div mx-auto">
                    <span class="border-bottom-btn border-top-btn position-absolute">
                      <img src="@/assets/images/Group12engine.png" class="img-border position-absolute" alt="" />
                    </span>

                    <span class="border-bottom-btn border-top-btn border-right-radius popup-right position-absolute">
                      <img src="@/assets/images/Path467engine.png" class="img-border position-absolute" alt="" />
                    </span>

                    <span
                      class="border-bottom-btn border-top-btn border-right-radius border-right-bottom-radius popup-right-bottom position-absolute">
                      <img src="@/assets/images/Path465engine.png" class="img-border position-absolute" alt="" />
                    </span>
                    <!-- data-bs-toggle="modal" -->
                    <button class="signin-btnli Start Engine load-more-btn proceed-btn width-set"
                      data-bs-target="#mailModal" @click=" retrieveFilterCommunities">
                      Proceed
                    </button>
                    <span class="border-bottom-btn border-left-btn new-popup position-absolute">
                      <img src="@/assets/images/Group11engine.png" class="img-border position-absolute" alt="" />
                    </span>
                    <span class="border-bottom-btn position-absolute">
                      <img src="@/assets/images/Path473engine.png" class="img-border position-absolute" alt="" />
                    </span>
                  </div>
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
import CarDataService from "../services/CarDataService";
import CommunityDataService from "../services/CommunityDataService";

export default {
  name: "OurCommunity",

  data() {
    return {

      makes: [],
      make: "",
      model: "",
      models: [],
      generation: "",
      generations: [],
      generations1: [],
      classification: "",
      classifications: [],
      countryOfOrigin: "",
      countryOfOrigins: [],
      productionYear: "",
      productionYears: [],
      communities: [],
      itemsPerPage: 5, // Number of communities per page
      currentPage: 1, //current Page
      filteredCommunities: [], // Communities to display on the current page

      selectedFilters: {
        make: "",
        model: "",
        generation: "",
        classifications: "",
        productionYears: "",
        countryOfOrigin: "",
      },
    };
  },
  computed: {
    totalPages() {
      return Math.ceil(this.communities.length / this.itemsPerPage); // Calculate total number of pages
    },
    paginationRange() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return [start, end];
    },
  },
  mounted() {
    this.retrieveCars();
    this.retrieveCommunities();
    this.paginateCommunities();
    // Show the modal when the component is mounted
    const isFirstTimeMounted = localStorage.getItem('isFirstTimeMounted');

    // Call showFilterModal only the first time mounted
    if (!isFirstTimeMounted) {
      this.showFilterModal();

      // Set flag in localStorage to indicate that the method has been called
      localStorage.setItem('isFirstTimeMounted', true);
    }
    // Add event listener to the document body for clicks
    document.body.addEventListener("click", this.handleOutsideClick);
  },
  beforeUnmount() {
    // Remove event listener when component is unmounted
    document.body.removeEventListener("click", this.handleOutsideClick);
  },
  methods: {
    retrieveCars() {
      this.models = [];
      this.generations = [];
      this.classifications = [];
      this.productionYears = [];
      this.countryOfOrigins = [];
      CarDataService.getAll()
        .then((response) => {
          this.makes = response.data;
        })
        .catch((e) => {
          console.log(e);
        });
    },
    retrieveCommunities() {
      CommunityDataService.getAll()
        .then((response) => {
          this.communities = response.data;
        })
        .catch((e) => {
          console.log(e);
        });
    },
    retrieveFilterCommunities(e) {
      e.preventDefault()
      CommunityDataService.getFiltered(this.make, this.model, this.generation, this.classifications, this.productionYears, this.countryOfOrigin).then((response) => {
        this.communities = response.data;
      })
        .catch((e) => {
          console.log(e);
        });
    },
    getModels() {
      this.generations = [];
      this.classifications = [];
      this.productionYears = [];
      this.countryOfOrigins = [];
      CarDataService.getModels(this.make)
        .then((response) => {
          this.models = response.data;
        })
        .catch((e) => {
          console.log(e);
        });
    },

    getGenerations() {
      CarDataService.getGenerations(this.model)
        .then((response) => {
          const data = response.data;
          data.forEach((item) => {
            if (
              item.generation != "" &&
              item.generation != "-" &&
              item.generation != "?"
            ) {
              this.generations.push(item.generation);
              this.classifications.push(item.classification);
              this.productionYears.push(item.production_years);
              this.countryOfOrigins.push(item.country_of_origin);
            }
          });
          this.generations = [...new Set(this.generations)];
          this.classifications = [...new Set(this.classifications)];
          this.productionYears = [...new Set(this.productionYears)];
          this.countryOfOrigins = [...new Set(this.countryOfOrigins)];
        })
        .catch((e) => {
          console.log(e);
        });
    },

    paginateCommunities() {
      const [start, end] = this.paginationRange;
      this.filteredCommunities = this.communities.slice(start, end);
    },
    goToPage(pageNumber) {
      this.currentPage = pageNumber;
      this.paginateCommunities();
    },
    goToPreviousPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
        this.paginateCommunities();
      }
    },
    goToNextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
        this.paginateCommunities();
      }
    },
    closeModel() {
      // Hide the modal
      this.hideFilterModal();
    },
    hideFilterModal() {
      // Hide the modal using the ref
      const modal = this.$refs.modalRef;
      if (modal) {
        modal.classList.remove("show");
        modal.style.display = "none";
      }
    },

    handleOutsideClick(event) {
      const modal = this.$refs.modalRef;
      if (modal && !modal.contains(event.target)) {
        // If the click occurred outside the modal, hide it
        this.hideFilterModal();
      }
    },
    submitFilter() {
      // Logic to handle filter submission
      console.log("Selected Filters:", this.selectedFilters);
      // You can implement logic here to apply the selected filters
      // For example, you can emit an event to the parent component

      // Close the modal after submitting the filte
      this.hideFilterModal();
    },
    showFilterModal() {
      // Trigger the modal display using vanilla JavaScript
      const modal = document.getElementById("carShopFilter");
      if (modal) {
        modal.classList.add("show");
        modal.style.display = "block";
      }
    },
  },
  watch: {
    communities() {
      this.paginateCommunities();
    },
    currentPage() {
      this.paginateCommunities();
    },
  },
};
</script>
<style scoped>
@media (min-width: 576px) {
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
    background-image: url("../assets/images/Icon\ awesome-chevron-down.png");
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

  .modal-dialog {
    width: 100%;
    max-width: 1000px;
    margin: 1.75rem auto;
    position: relative;
  }

  .form-select:focus {
    border-color: #f95f19;
    outline: 0;
    box-shadow: none;
  }
}

.img-communityDetails-div img {
  height: 400px;
  border-radius: 7px;
  width: 100%;
  object-fit: cover;
  aspect-ratio: 1/1;

}

.alertbg {
  background: #FF7A00;
  color: #fff;
}

.communtiy-content p {

  /* Prevents text from wrapping */
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;


}
</style>
