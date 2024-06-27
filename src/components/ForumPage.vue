<template>

    <section class=" mb-0 mt-2 p-2">
        <div class="container d-flex justify-content-center">
            <!-- <input type="text" name="" id="" class="form-control searchInput" placeholder="search" v-model="search"
                @input="applyFilter"> -->
        </div>
        <div class="container">



            <div class="row">
                <div class="col-md-12 mt-1">
                    <div class="row align-items-center">
                        <div class="col-md-5">
                            <nav aria-label="breadcrumb" class="nav-breadcrumb">
                                <ol class="breadcrumb">
                                    <li class="breadcrumb-item fh2">
                                        {{ make }}
                                    </li>
                                    <li class="breadcrumb-item fh2">
                                        {{ modal }}
                                    </li>
                                    <li class="breadcrumb-item fh2">{{ production_years }}</li>
                                    <li class="breadcrumb-item fh2">{{ specifications }}</li>
                                </ol>
                            </nav>
                        </div>
                        <div class="col-md-5">
                            <input type="text" name="" id="" class="form-control " placeholder="search" v-model="search"
                                @input="applyFilter">
                        </div>
                        <div class="col-md-2 ">
                            <div class="list-item-btn position-relative submit-btn-div ms-auto">
                                <span class="border-bottom-btn border-top-btn position-absolute">
                                    <img src="@/assets/images/Group12.png" class="img-border position-absolute"
                                        alt="" />
                                </span>
                                <span class="border-bottom-btn border-top-btn border-right-radius position-absolute">
                                    <img src="@/assets/images/Path467.png" class="img-border position-absolute"
                                        alt="" />
                                </span>
                                <span
                                    class="border-bottom-btn border-top-btn border-right-radius border-right-bottom-radius position-absolute">
                                    <img src="@/assets/images/Path465.png" class="img-border position-absolute"
                                        alt="" />
                                </span>

                                <router-link
                                    :to="`/CreateCommunity/${make}/${modal}/${production_years}/${specifications}`"
                                    class="signin-btnli submitNow" v-if="production_years">
                                    Create New Thread
                                </router-link>
                                <router-link :to="`/CreateCommunity/${make}/${modal}/${specifications}`"
                                    class="signin-btnli submitNow" v-else>
                                    Create New Thread
                                </router-link>
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
                        <!-- <div class="btns-community  d-block position-static " style="width:fit-content">
                            <div class="btn-div-create-forum position-relative">
                                <span class="border-bottom-btn border-top-btn position-absolute">
                                    <img src="@/assets/images/Group12white.png" class="img-border position-absolute"
                                        alt="" />
                                </span>

                                <span class="border-bottom-btn border-top-btn border-right-radius position-absolute">
                                    <img src="@/assets/images/Path467white.png" class="img-border position-absolute"
                                        alt="" />
                                </span>

                                <span
                                    class="border-bottom-btn border-top-btn border-right-radius border-right-bottom-radius position-absolute">
                                    <img src="@/assets/images/Path465white.png" class="img-border position-absolute"
                                        alt="" />
                                </span>
                                <router-link
                                    :to="`/CreateCommunity/${make}/${modal}/${production_years}/${specifications}`"
                                    class="signin-btnli signup-btnli" v-if="production_years">
                                    Create New Thread
                                </router-link>
                                <router-link :to="`/CreateCommunity/${make}/${modal}/${specifications}`"
                                    class="signin-btnli signup-btnli" v-else>
                                    Create New Thread
                                </router-link>
                                <span class="border-bottom-btn border-left-btn position-absolute">
                                    <img src="@/assets/images/Group11white.png" class="img-border position-absolute"
                                        alt="" />
                                </span>
                                <span class="border-bottom-btn position-absolute">
                                    <img src="@/assets/images/Path473white.png" class="img-border position-absolute"
                                        alt="" />
                                </span>
                            </div>
                        </div> -->

                    </div>
                </div>

            </div>

        </div>
    </section>

    <section class="community-section my-1 pt-1">
        <div class="container">

            <div class="row g-4">
                <div class="col-md-12 px-4">
                    <div v-if="filteredCommunities.length === 0">
                        <h2 class="card-title-h2 community-title">Nothing To Show</h2>
                    </div>
                    <div class="col-12 mb-4 m-auto" v-for="community in filteredCommunities" :key="community.id">
                        <div>
                            <div class="communtiy-content">
                                <router-link :to="`/communitydetails/${community.id}`">
                                    <div class="card-title-div">
                                        <h2 class="card-title-h2 community-title">
                                            {{ community.title }} <span> {{ community.count }} </span>
                                        </h2>
                                    </div>
                                    <div class="map-para-div community-para-div">
                                        <p class="map-para community-para">
                                            {{ community.description }}
                                        </p>
                                    </div>
                                </router-link>
                                <div class="list-community-add">
                                    <div class="like-community">
                                        <i class="fa-solid fa-thumbs-up"></i><span class="total-likes">{{
                                            community.likes }}</span>
                                    </div>
                                    <div class="like-community">
                                        <i class="fa-solid fa-comments"></i><span class="total-likes">{{
                                            community.comments }}</span>
                                    </div>
                                    <div class="like-community">
                                        <i class="fa-solid fa-eye"></i><span class="total-likes">{{ community.views
                                            }}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
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
                                <a class="page-link" href="#" @click="goToPage(page)"
                                    :class="{ active: page === currentPage }">{{ page }}</a>
                            </li>
                            <li class="page-item">
                                <a class="page-link" href="#" aria-label="Next" @click="goToNextPage">
                                    <span aria-hidden="true"><i class="fa-solid fa-chevron-right"></i></span>
                                </a>
                            </li>
                        </ul>
                    </nav>
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
                            <div v-for="(filter, index) in filters" :key="index" class="col-md-6">
                                <div class="mt-2 py-2 d-flex justify-content-center align-items-center">
                                    <select :id="filter.id" class="form-select" :name="filter.name"
                                        v-model="selectedFilters[filter.name]">
                                        <option v-for="(option, optionIndex) in filter.options" :key="optionIndex"
                                            :value="option.value">
                                            {{ option.text }}
                                        </option>
                                    </select>
                                </div>
                            </div>

                            <div class="col-md-12 m-auto">
                                <div
                                    class="load-more-info w-100 d-flex justify-content-start align-items-center mb-4 mx-auto">
                                    <div class="list-item-btn position-relative load-more-div proceed-div mx-auto">
                                        <span class="border-bottom-btn border-top-btn position-absolute">
                                            <img src="@/assets/images/Group12engine.png"
                                                class="img-border position-absolute" alt="" />
                                        </span>

                                        <span
                                            class="border-bottom-btn border-top-btn border-right-radius popup-right position-absolute">
                                            <img src="@/assets/images/Path467engine.png"
                                                class="img-border position-absolute" alt="" />
                                        </span>

                                        <span
                                            class="border-bottom-btn border-top-btn border-right-radius border-right-bottom-radius popup-right-bottom position-absolute">
                                            <img src="@/assets/images/Path465engine.png"
                                                class="img-border position-absolute" alt="" />
                                        </span>
                                        <button type="submit" class="signin-btnli signup-btnli proceed-btn">
                                            Apply Filters
                                        </button>
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
import CommunityDataService from "@/services/CommunityDataService";
import axios from "axios";

export default {
    data() {
        return {
            search: "",
            make: "",
            modal: "",
            production_years: "",
            specifications: "",
            pageId: "",
            communityData: [],
            communities: [], // Initialize as an empty array
            itemsPerPage: 5, // Number of communities per page
            currentPage: 1, // Current page
            filteredCommunities: [], // Communities to display on the current page
            selectedFilters: {
                make: "",
                model: "",
                generation: "",
                classifications: "",
                productionYears: "",
                countryOrigin: "",
            },
            filters: [
                {
                    id: "make",
                    name: "make",
                    options: [
                        {
                            text: "Make",
                            value: "",
                        },
                        {
                            text: "AC",
                            value: "AC",
                        },
                    ],
                },
                // other filters
            ],
        };
    },
    computed: {
        totalPages() {
            return Math.ceil(this.communities.length / this.itemsPerPage);
        },
        paginationRange() {
            const start = (this.currentPage - 1) * this.itemsPerPage;
            const end = start + this.itemsPerPage;
            return [start, end];
        },


    },
    methods: {
        // getNoOfComments(id) {

        //     const apiUrl = `https://clownfish-app-quehu.ondigitalocean.app/api/comments/count?community_id=${id}`;

        //     axios.get(apiUrl)
        //         .then(response => {
        //             console.log('No Of Comments:', response.data.count);
        //             this.totalComments = response.data.count

        //         })
        //         .catch(error => {
        //             console.error('Error fetching data:', error);
        //         });
        // },
        // async getForumData() {
        //     try {
        //         // Make the GET request with query parameters
        //         const response = await axios.get('https://clownfish-app-quehu.ondigitalocean.app/api/communities/filter', {
        //             params: {
        //                 make: this.make,
        //                 model: this.modal,
        //                 production_years: this.production_years,
        //                 specifications: this.specifications
        //             }
        //         });

        //         // Handle the response data
        //         console.log("new get response", response.data);
        //         this.filteredCommunities = response.data
        //         for (const forum of this.filteredCommunities) {
        //             await this.getNoOfComments(forum.id);
        //         }


        //     } catch (error) {
        //         // Handle any errors
        //         console.error('Error making GET request:', error);
        //     }
        // },
        // async getForumData() {
        //     try {
        //         // Make the GET request with query parameters
        //         const response = await axios.get('https://clownfish-app-quehu.ondigitalocean.app/api/communities/filter', {
        //             params: {
        //                 make: this.make,
        //                 model: this.modal,
        //                 production_years: this.production_years,
        //                 specifications: this.specifications
        //             }
        //         });

        //         // Handle the response data
        //         console.log("new get response", response.data);
        //         this.filteredCommunities = response.data;

        //         // Fetch and update comment counts for each community
        //         for (const community of this.filteredCommunities) {
        //             await this.getNoOfComments(community);
        //         }
        //     } catch (error) {
        //         // Handle any errors
        //         console.error('Error making GET request:', error);
        //     }
        // },
        async getForumData() {
            try {
                const response = await axios.get('https://clownfish-app-quehu.ondigitalocean.app/api/communities/filter', {
                    params: {
                        make: this.make,
                        model: this.modal,
                        production_years: this.production_years,
                        specifications: this.specifications
                    }
                });
                console.log("new get response", response.data);
                this.communities = response.data;

                for (const community of this.communities) {
                    await this.getNoOfComments(community);
                }
            } catch (error) {
                console.error('Error making GET request:', error);
            }
        },

        applyFilter() {
            const searchLower = this.search.trim().toLowerCase();
            if (searchLower === '') {
                this.filteredCommunities = this.communities.slice(...this.paginationRange);
            } else {
                const filtered = this.communities.filter(community =>
                    community.title.toLowerCase().includes(searchLower)
                );
                this.filteredCommunities = filtered.slice(...this.paginationRange);
            }
        },
        getNoOfComments(community) {
            const apiUrl = `https://clownfish-app-quehu.ondigitalocean.app/api/comments/count?community_id=${community.id}`;

            axios.get(apiUrl)
                .then(response => {
                    console.log('No Of Comments:', response.data.count);
                    // this.$set(community, 'comments', response.data.count); // Update the community object
                    community.comments = response.data.count
                })

                .catch(error => {
                    console.error('Error fetching data:', error);
                });
        },


        fetchCommunityData() {
            const id = this.$route.params.id; // Get the community id from the route parameters
            CommunityDataService.get(id)
                .then(response => {
                    // Set the fetched community data to the component's data
                    this.communityData = response.data;
                    console.log("data oof views", this.communityData)
                    this.loading = false;
                })
                .catch(error => {
                    console.error('Error fetching community data:', error);
                });

        },
        paginateCommunities() {
            if (Array.isArray(this.communities)) {
                const [start, end] = this.paginationRange;
                this.filteredCommunities = this.communities.slice(start, end);
            } else {
                console.error("this.communities is not an array:", this.communities);
                this.filteredCommunities = [];
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
        formSubmit() {
            const formData = new FormData();
            // alert(this.pageId)
            formData.append('filter_id', this.pageId)

            const config = {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Cookie': 'ci_session=2f7cae7a141b4553e24fe62237c5171e3df6f513'
                }
            };
            axios
                .post("https://buzzwaretech.com/adminrev/Api/readallforums", formData, config)
                .then((response) => {
                    console.log(response.data);
                    if (response.data.success && Array.isArray(response.data.forums)) {
                        this.communities = response.data.forums;
                    } else {
                        console.error(
                            "API response does not contain forums array:",
                            response.data
                        );
                        this.communities = [];
                    }
                    this.paginateCommunities();
                })
                .catch((error) => {
                    console.error("There was an error!", error);
                    this.communities = [];
                })
                .finally(() => {
                    this.submitting = false;
                });
        },
    },
    mounted() {
        // this.pageId = this.$route.params.id;
        this.make = this.$route.params.make
        this.modal = this.$route.params.model
        this.production_years = this.$route.params.production_years
        this.specifications = this.$route.params.specifications
        console.log("params data is", this.make, this.modal, this.production_years, this.specifications)
        this.getForumData()
        // this.formSubmit();
        // this.fetchCommunityData()
        // Initially paginate communities

        // console.log("page id is", this.pageId)
        this.paginateCommunities();
    },
    watch: {
        communities() {
            this.paginateCommunities();
        },
        currentPage() {
            this.paginateCommunities();
        },
        search() {
            this.applyFilter();
        }
    },
};
</script>

<style scoped>
/* Your CSS styles here */
.community-section {
    min-height: 60vh
}

.fh2 {
    color: #F95F19;
    font-size: 18px;
}

.signin-btnli.submitNow {
    margin: 0;
}

.list-item-btn.position-relative.submit-btn-div {
    width: fit-content;
    margin: 0;
}
</style>
