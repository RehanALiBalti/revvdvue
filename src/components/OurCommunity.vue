<template>


  <!-- <section class="section-car-listing position-relative">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="heading-car">
     
            <h1 class="banner-title fontColr">Car Community Threads </h1>
            <small class="text-center text-white">Check our community threads to get answers for your car related
              questions. You
              can search by car make, model and also by thread category. </small>
            <small class="text-center text-white">
              If you can’t find the topic, just open a new thread!
            </small>
          </div>

        </div>
      </div>
    </div>
  </section> -->
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-10">
        <div class="heading-car">
          <!-- <h1 class="banner-title">{{ $t("ourCommunity") }}</h1> -->
          <h1 class="banner-title fontColr">Car Community Threads </h1>
          <small class="text-center text-white">Check our community threads to get answers for your car related
            questions. You
            can search by car make, model and also by thread category. </small>
          <small class="text-center text-white">
            If you can’t find the topic, just open a new thread!
          </small>
        </div>
      </div>
    </div>
  </div>
  <!-- modal -->
  <div class="modal show d-block modalaa" tabindex="-1" role="dialog" id="carShopFilter" v-if="isModalOpen === true">
    <div class="modal-dialog modal-dialog-centered mb-0" role="document">
      <div class="modal-content">
        <div class="modal-body text-center">
          <router-link to="/offer"> <span class="close-icon" aria-label="Close">
              <i class="fas fa-times"></i>
            </span></router-link>
          <form @submit.prevent="submitFilter">
            <div class="mt-4 py-2">
              <h5 class="card-title"><span class="choose"> {{ $t('filters') }} </span></h5>
            </div>
            <div class="row">

              <div class="col-md-12 z-0 ">
                <div class="mt-2   d-flex justify-content-center align-items-center borderBr">



                  <div class="customSelect" @blur="isOpen = false">
                    <input type="text" class="form-select" v-model="make" :placeholder="$t('Select a Make')"
                      @click="toggleDropdown" @input="filterMakeOptions" @change="getModels">
                    <ul v-show="isOpen" class="options-list" v-if="makefilteredOptions != ''">
                      <li v-for="(option, index) in makefilteredOptions" :key="index" @click="selectOption(option)">
                        {{ option }}
                      </li>
                    </ul>
                    <ul v-else v-show="isOpen" class="options-list">

                    </ul>
                  </div>


                </div>
              </div>

              <div class="col-md-12 z-0">
                <div class="mt-2  d-flex justify-content-center align-items-center borderBr ">

                  <div class="customSelect w-100" @blur="isOpenm = false">
                    <input type="text" class=" form-select" v-model="smodel" :placeholder="$t('Select a Model')"
                      @click.stop="toggleDropdownm" @focus="isOpen = false" @input="filterModelOptions"
                      @change="getModels" v-if="make == ''" disabled>
                    <input type="text" class=" form-select" v-model="smodel" :placeholder="$t('Select a Model')"
                      @click.stop="toggleDropdownm" @focus="isOpen = false" @input="filterModelOptions"
                      @change="getModels" v-else>
                    <ul v-show="isOpenm" class="options-list" v-if="modelfilteredOptions.length > 0">
                      <li v-for="(option, index) in modelfilteredOptions" :key="index"
                        @click="selectOptionModel(option.model)">
                        {{ option.model }}
                      </li>
                    </ul>
                    <ul v-else v-show="isOpenm" class="options-list">

                    </ul>
                  </div>

                </div>
              </div>



              <div class="col-md-12 z-0">



                <div class="mt-2 d-flex justify-content-center align-items-center borderBr">
                  <div class="customSelect w-100">
                    <input type="text" class="form-select" :placeholder="$t('Production Years(Generation)')"
                      @input="GenfilterOption" v-model="selectedData" @change="changeGen" @click="toggleOpeng"
                      v-if="smodel == ''" disabled>
                    <input type="text" class="form-select" :placeholder="$t('Production Years(Generation)')"
                      @input="GenfilterOption" v-model="selectedData" @click="toggleOpeng" @change="changeGen" v-else>
                    <ul v-show="isOpeng" class="options-list" v-if="GenfilteredOptions.length > 0">
                      <li v-for="(value, index) in GenfilteredOptions" :key="index"
                        @click="updateModels(value), this.isOpeng = false">
                        <!-- {{ value.production_years.split(' ')[0] }} ({{ value.production_years.split(' ')[1] }}) -->
                        {{ value.production_years.split(' ')[0] }}
                        <span v-if="value.production_years.split(' ')[1]">({{ value.production_years.split(' ')[1]
                          }})</span>
                      </li>
                    </ul>
                    <ul v-else v-show="isOpeng" class="options-list">

                    </ul>
                  </div>
                </div>
                <div class="mt-2 d-flex justify-content-center align-items-center borderBr">
                  <div class="customSelect w-100">
                    <input type="text" class="form-select" :placeholder="$t('Thread Category')" v-model="specfications"
                      @click="toggleOpengs" v-if="smodel == ''" disabled @input="filterSpecificationOptions">
                    <input type="text" class="form-select" :placeholder="$t('Thread Category')" v-model="specfications"
                      @click="toggleOpengs" @input="filterSpecificationOptions" v-else>
                    <!-- <ul v-show="isOpengs" class="options-list" v-if="specifctionOptions.length > 0">
                      <li v-for="(value, index) in specifctionOptions" :key="index"
                        @click="updatesepecification(value), this.isOpengs = false">
                      
                        <span>{{ value.specification
                          }}</span>
                      </li>
                    </ul> -->
                    <ul v-show="isOpengs" class="options-list" v-if="filteredSpecificationOptions.length > 0">
                      <li v-for="(value, index) in filteredSpecificationOptions" :key="index"
                        @click="updatesepecification(value)">
                        {{ value.specification }}
                      </li>
                    </ul>
                    <ul v-else v-show="isOpeng" class="options-list">

                    </ul>
                  </div>
                </div>

              </div>


              <div class="col-md-12 m-auto z-0">
                <div class="load-more-info w-100 d-flex justify-content-start align-items-center mb-0 mx-auto mt-2">
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
                    <!-- <button class="signin-btnli Start Engine load-more-btn proceed-btn width-set"
                      data-bs-target="#mailModal" @click="retrieveCommunities">
                      {{ $t('proceed') }}
                    </button> -->
                    <button class="signin-btnli Start Engine load-more-btn proceed-btn width-set"
                      data-bs-target="#mailModal" @click="sendForumData">
                      {{ $t('proceed') }}
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
          <div>
            <div class="mt-4 py-2">
              <h5 class="card-title"><span class="choose"> Something Is Missing </span></h5>
              <p class="text-white">Please select make, model, production Year and specifications</p>

            </div>

          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="modal show d-block" tabindex="-1" role="dialog" id="carShopFilter" v-if="isModal3 === true">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-body text-center">
          <span class="close-icon" @click="isModal3 = false" data-bs-dismiss="modal" aria-label="Close">
            <i class="fas fa-times"></i>
          </span>
          <div>
            <div class="mt-4 py-2">
              <h5 class="card-title"><span class="choose"> Something Went Wrong</span></h5>
              <p class="text-white">{{ error2 }}</p>
              <p class="text-white">Try Again Later</p>


            </div>

          </div>
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
      isOpengs: false,
      isModal3: false,
      specfications: "",
      error2: "",
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
      selectedData: '',
      filteredSpecificationOptions: [],
      specifctionOptions: [
        { specification: "Engine" },
        { specification: "Powertrain and transmission" },
        { specification: "Fuel" },
        { specification: "Ignition System" },
        { specification: "Cooling" },
        { specification: "Lubrication" },
        { specification: "Electrical System & Sound System" },
        { specification: "Suspension and Steering" },
        { specification: "Braking System" },
        { specification: "Exhaust System" },
        { specification: "Forced induction" },
        { specification: "ECU" },
        { specification: "Wheels and Tires" },
        { specification: "Nitrous" },
        { specification: "Body Parts" },
        { specification: "Interior" }
      ],
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
    toggleOpeng() {
      console.log('opneg')
      this.isOpeng = !this.isOpeng
    },
    toggleOpengs() {
      console.log('opneg')
      this.isOpengs = !this.isOpengs
    },
    updatesepecification(value) {

      console.log("click spec", value)
      this.specfications = value.specification
      this.toggleOpengs()
      // alert(this.specfications)
    },
    GenfilterOption() {
      this.specfications = ""
      this.filteredSpecificationOptions = this.specifctionOptions
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
      this.modelfilteredOptions = [];
      this.selectedData = "";

      this.smodel = ""
      const query = this.make.toLowerCase();
      if (query === '') {
        this.makefilteredOptions = this.makes;
      } else {
        this.makefilteredOptions = this.makes.filter(option => option.toLowerCase().includes(query));
      }
    },
    filterModelOptions() {
      this.selectedData = ""
      this.specfications = ""
      this.filteredSpecificationOptions = this.specifctionOptions

      console.log(this.smodel);
      const query = this.smodel.toLowerCase();

      if (query === '') {
        this.modelfilteredOptions = this.models;
      } else {

        this.modelfilteredOptions = this.models.filter(option => option && option.model && option.model.toLowerCase().includes(query));
      }
    },

    filterSpecificationOptions() {
      const query = this.specfications.toLowerCase();
      if (query === '') {
        this.filteredSpecificationOptions = this.specifctionOptions;
      } else {
        this.filteredSpecificationOptions = this.specifctionOptions.filter(option => option && option.specification && option.specification.toLowerCase().includes(query));
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
      this.specfications = ""
      this.filteredSpecificationOptions = this.specifctionOptions
      if (value) {

        this.productionYear = value.production_years;
        this.selectedData = value.production_years
      } else {

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


    retrieveCommunities() {
      if (this.GenfilteredOptions == '') {
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
                // const community = response.data;

                // Assuming you have an ID in the response data
                // const communityId = community.id; // Adjust this based on your response data
                // Programmatic navigation to the community details route
                ///  this.$router.push(`/communitydetails/${communityId}`);
                this.$router.push(`/`)
              } else {
                // Handle the case when response data is an array

                // const community = response.data[0];
                // this.$router.push(`/communitydetails/${community.id}`);
                // Handle this case according to your requirements
                this.$router.push(`/`)
              }
            })
            .catch((e) => {
              console.log(e);
              this.error2 = e.message
              this.isModal3 = true
            });
        }
      }
      else if (this.GenfilteredOptions != '') {
        if (this.selectedData == "") {
          this.isModal2Open = true
        }
        else {
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
                  // this.$router.push(`/communitydetails/${communityId}`);
                  this.$router.push(`/community/${communityId}`)
                } else {
                  // Handle the case when response data is an array

                  const community = response.data[0];
                  const communityId = community.id;
                  // this.$router.push(`/communitydetails/${community.id}`);
                  // this.$router.push(`/`)
                  this.$router.push(`/community/${communityId}`)
                  // Handle this case according to your requirements
                }
              })
              .catch((e) => {
                console.log(e);
                this.error2 = e.message
                this.isModal3 = true
              });
          }
        }
      }

    },
    // async sendForumData() {
    //   try {
    //     // Make the GET request with query parameters
    //     const response = await axios.get('https://clownfish-app-quehu.ondigitalocean.app/api/communities/filter', {
    //       params: {
    //         make: this.make,
    //         model: this.smodel,
    //         peoduction_years: this.selectedData,
    //         specifications: this.specification
    //       }
    //     });

    //     // Handle the response data
    //     console.log("new get response", response.data);
    //   } catch (error) {
    //     // Handle any errors
    //     console.error('Error making GET request:', error);
    //   }
    // }
    // sendForumData() {
    //   // Get the dynamic parameters
    //   const make = this.make;
    //   const model = this.smodel;
    //   const production_years = this.selectedData;
    //   const specifications = this.specfications;
    //   // alert("specification", specifications)
    //   // Construct the URL with the dynamic parameters
    //   if (this.make == '' && this.model == '' && this.specfications) {
    //     this.hideFilterModal();
    //     this.isModal2Open = true
    //   }
    //   else {
    //     const routeUrl = `/community/${make}/${model}/${production_years}/${specifications}`;

    //     // Navigate to the constructed URL
    //     this.$router.push({ path: routeUrl });
    //   }
    // }
    // sendForumData() {
    //   // Get the dynamic parameters
    //   const make = this.make;
    //   const model = this.smodel;
    //   const production_years = this.selectedData;
    //   const specifications = this.specfications;

    //   // Construct the URL with the dynamic parameters
    //   if (make === '' || model === '' || specifications === '') {
    //     // Hide the current modal and open the second modal if any of the fields are empty
    //     this.hideFilterModal();
    //     this.isModal2Open = true;
    //   } else {
    //     const routeUrl = `/community/${make}/${model}/${production_years}/${specifications}`;

    //     // Navigate to the constructed URL
    //     this.$router.push({ path: routeUrl });
    //   }
    // }
    // sendForumData() {
    //   // Get the dynamic parameters
    //   const make = this.make;
    //   const model = this.smodel;
    //   const production_years = this.selectedData;
    //   const specifications = this.specfications;

    //   // Construct the base URL with mandatory parameters
    //   let routeUrl = `/community/${make}/${model}`;

    //   // Include production_years if it is not empty
    //   if (production_years !== '') {
    //     routeUrl += `/${production_years}`;
    //   }

    //   // Add specifications to the URL
    //   routeUrl += `/${specifications}`;

    //   // Check if any mandatory fields are empty
    //   if (make === '' || model === '' || specifications === '') {
    //     // Hide the current modal and open the second modal if any of the fields are empty
    //     this.hideFilterModal();
    //     this.isModal2Open = true;
    //   } else {
    //     alert(routeUrl)
    //     // Navigate to the constructed URL

    //     this.$router.push({ path: routeUrl });
    //   }
    // }
    sendForumData() {
      // Get the dynamic parameters
      const make = this.make;
      const model = this.smodel;
      const production_years = this.selectedData;
      const specifications = this.specfications;

      // Check if any mandatory fields are empty
      if (!make || !model || !specifications) {
        // Hide the current modal and open the second modal if any of the fields are empty
        this.hideFilterModal();
        this.isModal2Open = true;
        return;
      }

      // Construct the URL with or without production_years
      let routeUrl = `/community/${make}/${model}`;
      if (production_years) {
        routeUrl += `/${production_years}`;
      }
      routeUrl += `/${specifications}`;

      // Navigate to the constructed URL
      this.$router.push({ path: routeUrl });
    }


    ,
    retrieveALLCommunities() {


      CommunityDataService.getAll()
        .then((response) => {
          this.communities = response.data;
        })
        .catch((e) => {
          console.log(e);
        });
    },
    changeGen() {
      // alert("change gen")
      this.specfications = ""
      this.filteredSpecificationOptions = this.specifctionOptions
    },
    getModels() {
      console.log("get modals")
      this.specfications = ""
      this.filteredSpecificationOptions = this.specifctionOptions
      this.selectedData = ""
      this.smodel = ""


      this.generations = [];
      this.GenfilteredOptions = []
      this.productionYears = [];
      if (this.make == "") {
        this.modelfilteredOptions = ""
      }
      else {
        CarDataService.getModels(this.make)
          .then((response) => {
            this.models = response.data;
            this.modelfilteredOptions = response.data;

          })
          .catch((e) => {
            console.log(e);
          });
      }

    },


    getGenerations() {
      console.log('in generation', "make", this.make, "modal", this.smodel);
      this.selectedData = ""
      CarDataService.getGenerations(this.make, this.smodel)
        .then((response) => {
          const data = response.data;
          console.log("data is", data);
          this.dataGy = data;

          this.GenfilteredOptions = data.filter(item => {
            return (
              item.generation !== "" &&
              item.generation !== "-" &&
              item.generation !== "??" &&
              item.generation !== "?"
            );
          });

          this.generations = [...new Set(this.GenfilteredOptions.map(item => item.generation))];
          this.productionYears = [...new Set(this.GenfilteredOptions.map(item => item.production_years))];
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

.modalaa {
  position: static !important;
  background: transparent !important;
}


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

.fontColr {
  color: #f95f19
}

/* new */

.customSelect {

  width: 100%;
  padding: 1px;
  min-height: 40px !important;
}

.customSelect input {
  width: 100% !important;
  max-width: 100% !important;
  border: 0px transparent !important;
  height: 30px;
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
  overflow-y: scroll;
  color: #fff;
  transition: height 0.5s ease-in-out
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
