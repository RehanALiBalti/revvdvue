<template>


  <section class="section-car-listing position-relative">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="heading-car">
            <h1 class="banner-title">{{ $t("ourCommunity") }}</h1>
          </div>

        </div>
      </div>
    </div>
  </section>

  <!-- modal -->
  <div class="modal show d-block" tabindex="-1" role="dialog" id="carShopFilter" v-if="isModalOpen === true">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-body text-center">
          <!-- <span class="close-icon" @click="closeModel" data-bs-dismiss="modal" aria-label="Close">
            <i class="fas fa-times"></i>
          </span> -->
          <form @submit.prevent="submitFilter">
            <div class="mt-4 py-2">
              <h5 class="card-title"><span class="choose"> Filter </span></h5>
            </div>
            <div class="row">

              <div class="col-md-12 z-0 ">
                <div class="mt-2   d-flex justify-content-center align-items-center borderBr">
                  <!-- <select class="form-select" v-model="make" @change="getModels(), getGenerations">
                    <option value="" selected disabled>Make</option>
                    <option v-for="(make, index) in makes" :key="index" :value="make.make">
                      {{ make.make }}
                    </option>
                  </select> -->
                  <!-- <v-select class="w-100 " v-model="make" :options="makes" label="model" placeholder="Make"
                    @change="getModels" :filterable="true"></v-select> -->


                  <div class="customSelect" @blur="isOpen = false">
                    <input type="text" class="form-select" v-model="make" placeholder="Select a Make"
                      @click.stop="toggleDropdown" @focus="toggleDropdown" @input="filterMakeOptions"
                      @change="getModels">
                    <ul v-show="isOpen" class="options-list" v-if="makefilteredOptions != ''">
                      <li v-for="(option, index) in makefilteredOptions" :key="index" @click="selectOption(option)">
                        {{ option }}
                      </li>
                    </ul>
                    <ul v-else v-show="isOpen" class="options-list">
                      <li>Nothing To Show</li>
                    </ul>
                  </div>


                </div>
              </div>

              <div class="col-md-12 z-0">
                <div class="mt-2  d-flex justify-content-center align-items-center borderBr ">

                  <div class="customSelect w-100" @blur="isOpenm = false">
                    <input type="text" class=" form-select" v-model="smodel" placeholder="Select an option"
                      @click.stop="toggleDropdownm" @focus="isOpen = false" @input="filterModelOptions"
                      @change="getModels">
                    <ul v-show="isOpenm" class="options-list" v-if="modelfilteredOptions.length > 0">
                      <li v-for="(option, index) in modelfilteredOptions" :key="index"
                        @click="selectOptionModel(option.model)">
                        {{ option.model }}
                      </li>
                    </ul>
                    <ul v-else v-show="isOpenm" class="options-list">
                      <li>Nothing To Show</li>
                    </ul>
                  </div>

                </div>
              </div>

              <!-- <div class="col-md-12">
                <div class="mt-2 py-2 d-flex justify-content-center align-items-center">
                  <select class="form-select" v-model="generation" @change="getYears">
                    <option value="" selected disabled>Generation</option>
                    <option v-for="(value, index) in generations" :key="index" :value="value">
                      {{ value }}
                    </option>
                  </select>
                </div>
              </div>

              <div class="col-md-12">
                <div class="mt-2 py-2 d-flex justify-content-center align-items-center">
                  <select class="form-select" v-model="productionYear">
                    <option value="" selected disabled>Production Years</option>
                    <option v-for="(value, index) in productionYears" :key="index" :value="value">
                      {{ value }}
                    </option>
                  </select>
                </div>
              </div> -->
              <div class="col-md-12 z-0">
                <!-- <div class="mt-2 py-2 d-flex justify-content-center align-items-center z-0 borderBr">
                  <select class="form-select z-0 fselect1" @change="updateModels" v-model="selectedData"
                    @focus="isOpenm = false">
                    <option value="" selected>Production Years(Generation)</option>
                    <option v-for="(value, index) in dataGy" :key="index" :value="value">
                      {{ value.production_years }} ( {{ value.generation }} )
                    </option>
                  </select>
              

                </div> -->


                <div class="mt-2 d-flex justify-content-center align-items-center borderBr">
                  <div class="customSelect w-100" @blur="isOpeng = false">
                    <input type="text" class="form-select" placeholder="Production Years(Generation)"
                      @click.stop="toggleDropdownmo" @focus="isOpeng = true" @input="GenfilterOption"
                      v-model="selectedData">
                    <ul v-show="isOpeng" class="options-list" v-if="GenfilteredOptions.length > 0">
                      <li v-for="(value, index) in GenfilteredOptions" :key="index" @click="updateModels(value)">
                        {{ value.production_years }} ({{ value.generation }})
                      </li>
                    </ul>
                    <ul v-else v-show="isOpeng" class="options-list">
                      <li>Nothing To Show</li>
                    </ul>
                  </div>
                </div>

              </div>


              <div class="col-md-12 m-auto z-0">
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
                      data-bs-target="#mailModal" @click="retrieveCommunities">
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

  <!-- modal 2 -->
  <!-- modal -->
  <div class="modal show d-block" tabindex="-1" role="dialog" id="carShopFilter" v-if="isModal2Open === true">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-body text-center">
          <span class="close-icon" @click="isModal2Open = false, isModalOpen = true" data-bs-dismiss="modal"
            aria-label="Close">
            <i class="fas fa-times"></i>
          </span>
          <form @submit.prevent="submitFilter">
            <div class="mt-4 py-2">
              <h5 class="card-title"><span class="choose"> Something Is Missing </span></h5>
              <p class="text-white">Please select make, modal and year</p>

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
// import { defineComponent } from 'vue';





export default {
  name: "OurCommunity",
  components: {


  },
  data() {
    return {
      isOpen: false,
      isOpenm: false,
      isOpeng: false,

      isModal2Open: false,
      makefilteredOptions: [],
      makes: [],
      make: "",
      smodel: "",
      isModalOpen: true,
      modelfilteredOptions: [],
      models: [],
      generation: "",
      generations: [],
      GenfilteredOptions: [],
      filteredGenerations: [],
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
        productionYears: "",
      },
      dataGy: [],
      selectedData: ''
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
    // this.retrieveALLCommunities();
    this.paginateCommunities();
    // Show the modal when the component is mounted
    this.showFilterModal();
    // Add event listener to the document body for clicks
    document.body.addEventListener("click", this.handleOutsideClick);

  },
  beforeUnmount() {
    // Remove event listener when component is unmounted
    document.body.removeEventListener("click", this.handleOutsideClick);
  },
  created() {
    this.showFilterModal();
  },
  methods: {
    GenfilterOption() {
      const query = this.selectedData.toLowerCase();
      if (query === '') {
        this.GenfilteredOptions = this.dataGy;
      } else {
        this.GenfilteredOptions = this.dataGy.filter(option =>
          option.production_years.toLowerCase().includes(query)
        );
        console.log(this.GenfilteredOptions)
      }
    },

    filterMakeOptions() {

      const query = this.make.toLowerCase();
      if (query === '') {
        this.makefilteredOptions = this.makes;
      } else {
        this.makefilteredOptions = this.makes.filter(option => option.toLowerCase().includes(query));
      }
    },
    filterModelOptions() {

      console.log(this.smodel);
      const query = this.smodel.toLowerCase();

      if (query === '') {
        this.modelfilteredOptions = this.models;
      } else {

        this.modelfilteredOptions = this.models.filter(option => option && option.model && option.model.toLowerCase().includes(query));
      }
    },




    toggleDropdown() {
      this.isOpen = !this.isOpen;
    },
    toggleDropdownm() {
      this.isOpenm = !this.isOpenm;
    },
    toggleDropdownmo() {
      this.isOpenm = !this.isOpenm;
    },
    selectOption(option) {

      this.make = option;
      this.isOpen = false;
      this.getModels()

    },
    selectOptionModel(option) {

      this.smodel = option;
      this.isOpenm = false;
      this.getGenerations()


    },
    updateModels(value) {
      if (value) {
        this.generation = value.generation;
        this.productionYear = value.production_years;
        this.selectedData = value.generation + (value.production_years)
      } else {
        this.generation = null;
        this.productionYear = null;
      }
    },
    getData() {

      this.filterGenerations()
      this.getYears()
    },
    filterGenerations() {
      // Filter the generations based on input
      this.filteredGenerations = this.generations.filter(gen => gen.toLowerCase().includes(this.generation.toLowerCase()));
    },
    selectGeneration(option) {
      // Set the selected option
      this.generation = option;
      // Clear the filtered list
      this.filteredGenerations = [];
    },
    retrieveCars() {
      this.models = [];
      this.generations = [];
      this.productionYears = [];
      CarDataService.getAll()
        .then((response) => {
          this.makes = response.data.map(item => item.make);
          this.makefilteredOptions = response.data.map(item => item.make);
          console.log("make are :", response.data.map(item => item.make))

        })
        .catch((e) => {
          console.log(e);
        });
    },
    // retrieveCommunities() {
    //   if (this.make == "" || this.model == "") {
    //     this.isModal2Open = true
    //   }

    //   else {
    //     const data = {
    //       make: this.make,
    //       model: this.model,
    //       generation: this.generation,
    //       productionYear: this.productionYear
    //     }
    //     console.log(data)

    //     CommunityDataService.create(data)
    //       .then((response) => {
    //         this.communities = response.data;
    //         console.log("communities", this.communities)
    //       })
    //       .catch((e) => {
    //         console.log(e);
    //       });
    //   }
    // },
    // retrieveCommunities() {
    //   if (this.make == "" || this.model == "") {
    //     this.isModal2Open = true;
    //   } else {
    //     const data = {
    //       make: this.make,
    //       model: this.model,
    //       generation: this.generation,
    //       productionYear: this.productionYear
    //     };
    //     console.log(data);

    //     CommunityDataService.create(data)
    //       .then((response) => {

    //         this.communities = response.data[0];
    //         console.log("communities", this.communities);
    //         // Assuming you have an ID in the response data, replace community.id with the actual ID
    //         console.log("cid", this.communities.id)
    //         const communityId = this.communities.id; // Adjust this based on your response data
    //         // Programmatic navigation to the community details route
    //         this.$router.push(`/communitydetails/${communityId}`);
    //       })
    //       .catch((e) => {
    //         console.log(e);
    //       });
    //   }
    // },

    retrieveCommunities() {
      if (this.make === "" || this.smodel === "") {
        this.isModal2Open = true;
      } else {
        const data = {
          make: this.make,
          model: this.smodel,
          generation: this.generation,
          productionYear: this.productionYear
        };

        CommunityDataService.create(data)
          .then((response) => {
            // Check if response data is an object
            if (typeof response.data === 'object' && !Array.isArray(response.data)) {
              const community = response.data;

              // Assuming you have an ID in the response data
              const communityId = community.id; // Adjust this based on your response data
              // Programmatic navigation to the community details route
              this.$router.push(`/communitydetails/${communityId}`);
            } else {
              // Handle the case when response data is an array

              const community = response.data[0];
              this.$router.push(`/communitydetails/${community.id}`);
              // Handle this case according to your requirements
            }
          })
          .catch((e) => {
            console.log(e);
          });
      }
    },

    retrieveALLCommunities() {


      CommunityDataService.getAll()
        .then((response) => {
          this.communities = response.data;
        })
        .catch((e) => {
          console.log(e);
        });
    },
    getModels() {
      console.log("get modals")

      this.smodel = ""
      this.generations = [];
      this.productionYears = [];
      if (this.make == "") {
        this.modelfilteredOptions = ""
      }
      else {
        CarDataService.getModels(this.make)
          .then((response) => {
            this.models = response.data;
            this.modelfilteredOptions = response.data;
            console.log(response.data)
          })
          .catch((e) => {
            console.log(e);
          });
      }

    },

    getGenerations() {

      console.log('in generation', "make", this.make, "modal", this.smodel)
      CarDataService.getGenerations(this.make, this.smodel)
        .then((response) => {
          const data = response.data;
          console.log("data is", data)
          this.dataGy = data;
          this.GenfilteredOptions = data

          data.forEach((item) => {
            if (
              item.generation != "" &&
              item.generation != "-" &&
              item.generation != "??" &&
              item.generation != "?"
            ) {
              this.generations.push(item.generation);
              this.productionYears.push(item.production_years);
            }
          });
          this.generations = [...new Set(this.generations)];
          this.productionYears = [...new Set(this.productionYears)];
        })
        .catch((e) => {
          console.log(e);
        });
    },
    getYears() {


      this.productionYears = []
      CommunityDataService.getFiltered(this.make, this.model, this.generation, this.productionYear)

        .then((response) => {
          const data = response.data;


          data.forEach((item) => {
            if (
              item.generation != "" &&
              item.generation != "-" &&
              item.generation != "??" &&
              item.generation != "?"
            ) {

              this.generations.push(item.generation);

              this.productionYears.push(item.production_years);
            }
          });
          this.generations = [...new Set(this.generations)];
          this.productionYears = [...new Set(this.productionYears)];
        })
        .catch((e) => {
          console.log(e);
        });
    },

    paginateCommunities() {
      const [start, end] = this.paginationRange;
      if (this.communities > 1) {
        this.filteredCommunities = this.communities.slice(start, end);
      }

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
      // const modal = this.$refs.modalRef;
      // if (modal) {
      //   modal.classList.remove("show");
      //   modal.style.display = "none";
      // }

      // this.isModalOpen = false
      this.isModalOpen = true
    },

    handleOutsideClick(event) {
      const modal = this.$refs.modalRef;
      if (modal && !modal.contains(event.target)) {
        // If the click occurred outside the modal, hide it
        this.hideFilterModal();
      }
    },
    submitFilter() {
      if (this.make == '' && this.model == '') {
        this.hideFilterModal();
        this.isModal2Open = true
      }
      else
        this.hideFilterModal();
    },
    showFilterModal() {


      this.isModalOpen = true


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
@import "vue-select/dist/vue-select.css";




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


.alertbg {
  background: #FF7A00;
  color: #fff;
}

.getAll {
  background: #5D3327 !important;
  color: #fff
}

.genCard .singleGen {
  cursor: pointer;
  marker: none;
  width: 100%;
}

.genCard .singleGen:hover {
  background: #f95f19;
  color: #fff
}

.borderBr {
  border: 1px solid #f95f19;
  width: 100% !important;
  border-radius: 10px;
}

/* new */

.customSelect {

  width: 100%;
  padding: 1px;
}

.customSelect input {
  width: 100% !important;
  max-width: 100% !important;
  border: 0px transparent !important;
}

.selected-option {
  width: 100%;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.options-list {
  position: static;
  /* top: 100%;
  left: 0; */
  width: 100%;
  background-color: #031726;

  border-top: none;
  border-radius: 0 0 4px 4px;
  list-style-type: none;
  padding: 0;
  margin: 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  min-height: fit-content;
  max-height: 300px;
  overflow: scroll;
  color: #fff
}

.options-list li {
  padding: 8px;
  cursor: pointer;
  display: flex;
  justify-content: start;
}

.options-list li:hover {
  background-color: #083f68;
}
</style>
