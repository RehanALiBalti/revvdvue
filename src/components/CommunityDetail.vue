<template>

  <section class="communityDetails-section m-2">
    <div class="container">
      <div class="">
        <div v-if="loading" class="d-flex justify-content-center">
          <div class="box"></div>
        </div>
        <div v-else>
          <div class="communityDetails-bg ">
            <div class="row justify-content-center">
              <!-- <div class="col-md-4 my-2 ">
                <div class="communityDetailsMain">
                  <img class=" d-block mx-auto w-100 object-fit-contain" src="../assets/images/icons/audilogo.png"
                    alt="" height="185px">
                </div>
                


              </div> -->
              <div class="col-md-12 d-flex justify-content-betweeen align-items-center">

                <div class="row mb-1 w-100 justify-content-center">

                  <div class="col-md-10 align-self-end d-flex justify-content-center">
                    <h1 class="card-title-h2 community-title fh2 m-0" v-if="forumData">
                      {{ forumData.make }}
                      {{ decode(forumData.make) }}
                      {{ decode(forumData.model) }}
                      {{ decode(forumData.production_years) }}
                      {{ decode(forumData.specifications) }}
                    </h1>
                    <!-- <h1 class="card-title-h2 community-title fh2" v-if="forumData">

                      {{ forumData.production_years }}
                      {{ forumData.specifications }}

                    </h1> -->
                  </div>
                  <div class="col-md-10 d-flex justify-content-center align-items-center">
                    <input type="text" name="" id="" class="form-control formSearch" placeholder="search"
                      v-model="search" @input="applyFilter">
                  </div>

                </div>
              </div>
              <div class=" col-md-10 my-2 ">
                <div class=" card-title-div communityDetailsMain p-3">

                  <div class="">
                    <h1 class="card-title-h2 community-title" v-if="forumData && forumData.title">{{ forumData.title
                      }}
                    </h1>


                  </div>

                  <div>
                    <p class=" map-para my-0 ms-2 text-white" v-if="forumData && forumData.description"> {{
                      forumData.description }}</p>
                  </div>

                  <div class="list-community-add d-flex justify-content-start  flex-wrap mt-2 ">

                    <button v-if="isloadingLike" class="like-community likeBtn" id="like" @click="addLike" disabled>
                      <i class="fa-solid fa-thumbs-up" v-bind:class="{ 'like': isLike }"></i>

                      <small v-if="isLike">Liked</small>
                      <small v-else>Like</small>
                      <!-- <span class="total-likes">{{ forumData.likes
                        }}</span> -->
                    </button>
                    <button v-else class="like-community likeBtn" id="like" @click="addLike">
                      <i class="fa-solid fa-thumbs-up" v-bind:class="{ 'like': isLike }"></i>

                      <small v-if="isLike">Liked</small>
                      <small v-else>Like</small>
                      <!-- <span class="total-likes" v-if="forumData">{{ forumData.likes
                        }}</span> -->
                      <span class="total-likes" v-if="forumData">{{ likesCount
                        }}</span>
                    </button>

                    <div class="like-community">
                      <i class="fa-solid fa-comments"></i>
                      <small>Comments</small>

                      <!-- <span class="total-likes" v-if="forumData && forumData.title">{{ forumData.comments }}</span> -->
                      <span class="total-likes">{{ totalComments }}</span>

                    </div>
                    <div class="like-community">
                      <i class="fa-solid fa-eye"></i>
                      <small>Views</small>
                      <span class="total-likes" v-if="forumData">{{ forumData.views }}</span>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </div>
          <div v-if="comments != ''" class="communityDetails-bg mt-1 communityDetailsMain wcol d-block mx-auto">
            <div class="img-communityDetails-div">


            </div>

            <div class="communityDetails-chatContent" id="chat-messages" ref="commentsContainer">




              <div v-for="comment in filteredComments " :key="comment.id">
                <div class="d-flex flex-column position-relative">
                  <div class="d-flex justify-content-end align-items-center me-2"></div>
                </div>

                <div class="d-flex flex-column">
                  <div class="sender-chats" v-if="comment.type !== 'reply'">
                    <div class="row">

                      <div class="col-md-12 d-flex justify-content-between flex-column">
                        <div>
                          <div class="d-flex gap-2 align-items-center">

                            <!-- <img
                              :src="comment.userimage != 'undefined' || comment.userimage != 'null' ? 'https://king-prawn-app-3rw3o.ondigitalocean.app/api/users/' + comment.userimage : dummyuserImage"
                              alt="" width="50px"> -->
                            <img class="UsrImage"
                              :src="comment.userImage && comment.userImage !== 'undefined' && comment.userImage !== null ? 'https://king-prawn-app-3rw3o.ondigitalocean.app/users/' + comment.userImage : dummyuserImage"
                              alt="" width="50px" />

                            <small class="uName">{{ comment.nickname }}</small>
                          </div>
                          <br>
                          <p class="sender-chats-para">{{ comment.comments }}</p>
                          <img v-if="comment.image" :src="getImageUrl(comment.image)" alt="Comment Image"
                            class="CommentImage" @click="openViewer(comment.image)" />
                        </div>
                        <div class="d-flex justify-content-between align-items-center">
                          <p class="text-white text-end fonts1 m-0" @click="toggleReply(comment.id)">
                            <i class="fa-solid fa-reply"></i> Reply
                          </p>
                          <small class="text-white fonts1 ms-0 mb-0 text-end">{{ formatDate(comment.created_date)
                            }}</small>
                        </div>
                        <div v-if="showReplyInput === comment.id">
                          <div class=" position-relative " v-if="RimageUrl != ''">
                            <div class="position-relative mainUp d-flex">
                              <img class="upImage" :src="RimageUrl" alt="">
                              <span class="cancel" @click="removeImageReply"><i class="fa-solid fa-xmark"></i></span>
                            </div>
                          </div>
                          <div class="input-group">

                            <input type="file" class="Reply-image d-none" id="rImage" @change="handleImageChange"
                              ref="fileInputReply">
                            <span class="input-group-text igt-left " @click="openFileInput2">
                              <i data-v-2645ce9a="" class="fa-solid fa-image"></i>
                            </span>
                            <input class="form-control formc1" type="text" v-model="replyText"
                              placeholder="Type your reply here">
                            <span class="input-group-text igt-right" @click="submitReply(comment.id)">
                              <svg xmlns="http://www.w3.org/2000/svg" class="" width="31.5" height="27"
                                viewBox="0 0 31.5 27">
                                <path id="Icon_material-send" data-name="Icon material-send"
                                  d="M3.015,31.5,34.5,18,3.015,4.5,3,15l22.5,3L3,21Z" transform="translate(-3 -4.5)"
                                  fill="#f95f19" />
                              </svg>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="sender-chats" v-else>
                    <div class="reply">
                      <p class="m-0 text-white">Reply to <span class="text-danger">{{ comment.mainnickname }}</span></p>
                      <p class="sender-chats-para m-0">{{ comment.maincomment }}</p>
                      <!-- <div v-if="comment.image">
                        <img :src="getImageUrl(comment.image)" alt="">
                      </div> -->
                    </div>
                    <div class="row">

                      <div class="col-md-12">
                        <div>
                          <div class="d-flex align-items-center gap-2">

                            <!-- <img
                              :src="comment.userimage != 'undefined' || 'null' ? 'https://king-prawn-app-3rw3o.ondigitalocean.app/api/users/' + comment.userimage : dummyuserImage"
                              alt="" width="50px"> -->
                            <img class="UsrImage"
                              :src="comment.userImage && comment.userImage !== 'undefined' && comment.userImage !== null ? 'https://king-prawn-app-3rw3o.ondigitalocean.app/users/' + comment.userImage : dummyuserImage"
                              alt="" width="50px" />
                            <small class="uName">{{ comment.nickname }} </small>
                          </div>
                          <br>
                          <p class="sender-chats-para">{{ comment.comments }}</p>
                          <img v-if="comment.image" :src="getImageUrl(comment.image)" alt="Comment Image"
                            class="CommentImage mt-2" @click="openViewer(comment.image)" />
                        </div>
                        <div class="d-flex justify-content-between align-items-center">
                          <p class="text-white text-end fonts1 m-0" @click="toggleReply(comment.id)">
                            <i class="fa-solid fa-reply"></i> Reply
                          </p>
                          <small class="text-white fonts1 ms-0 mb-0 text-end">{{ formatDate(comment.created_date)
                            }}</small>
                        </div>
                        <div v-if="showReplyInput === comment.id">
                          <div class=" position-relative " v-if="RimageUrl != ''">
                            <div class="position-relative mainUp d-flex">
                              <img class="upImage" :src="RimageUrl" alt="">
                              <span class="cancel" @click="removeImageReply"><i class="fa-solid fa-xmark"></i></span>
                            </div>
                          </div>
                          <div class="input-group">
                            <input type="file" class="Reply-image d-none" id="rImage" @change="handleImageChange"
                              ref="fileInputReply">
                            <span class="input-group-text igt-left" @click="openFileInput2">
                              <i data-v-2645ce9a="" class="fa-solid fa-image"></i>
                            </span>
                            <input class="form-control formc1" type="text" v-model="replyText"
                              placeholder="Type your reply here">
                            <span class="input-group-text igt-right" @click="submitReply(comment.id)">
                              <svg xmlns="http://www.w3.org/2000/svg" class="" width="31.5" height="27"
                                viewBox="0 0 31.5 27">
                                <path id="Icon_material-send" data-name="Icon material-send"
                                  d="M3.015,31.5,34.5,18,3.015,4.5,3,15l22.5,3L3,21Z" transform="translate(-3 -4.5)"
                                  fill="#f95f19" />
                              </svg>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>


            </div>
            <div ref="viewerContainer2">
              <img :src="currentImage2" id="currentImage2" alt="Current  Image" class="d-none" />
            </div>
            <div ref="viewerContainer">
              <img :src="currentImage" id="currentImage" alt="Current  Image" class="d-none" />
            </div>
          </div>

        </div>
        <div class="commentsByReceiver position-relative">


        </div>
        <div class="row justify-content-center">
          <div class="col-md-10">
            <form @submit.prevent="postComment" enctype="multipart/form-data" method="post"
              class="position-relative mt-2">
              <div class="form-group d-flex align-items-center mainPostArea">
                <textarea type="text" class="form-control my-2 " placeholder="Enter Comment" v-model="newComment"
                  disabled v-if="imgLoading"></textarea>
                <textarea type="text" class="form-control my-2 " placeholder="Enter Comment" v-model="newComment"
                  v-else></textarea>
                <div v-if="imgLoading" class="imgLoadingBox">
                  <div class="box2"></div>
                </div>
                <div class="d-flex align-items-center gap-2 ms-2" v-else>
                  <div class="upsection" v-if="imageUrl != ''">
                    <div class="position-relative mainUp d-flex">
                      <!-- <img class="upImage" :src="imageUrl" alt=""> -->

                      <p class="text-white mb-0 fonts2">{{ imageName }}</p>
                      <span class="cancel" @click="removeImage"><i class="fa-solid fa-xmark"></i></span>
                    </div>
                  </div><i class="fa-solid fa-image image_icon" @click="openFileInput"></i>
                  <input type="file" class="form-control-file my-2 d-none" @change="handleFileChange" ref="fileInput">
                  <svg @click="postComment" xmlns="http://www.w3.org/2000/svg" class=" send-icon" width="31.5"
                    height="27" viewBox="0 0 31.5 27">
                    <path id="Icon_material-send" data-name="Icon material-send"
                      d="M3.015,31.5,34.5,18,3.015,4.5,3,15l22.5,3L3,21Z" transform="translate(-3 -4.5)"
                      fill="#f95f19" />
                  </svg>

                </div>
                <!-- <input type="submit" value="Post" class="btn my-2 "> -->

              </div>
            </form>
          </div>
        </div>
      </div>
    </div>

  </section>


  <!-- modal -->
  <div class="modal show d-block" tabindex="-1" role="dialog" id="carShopFilter" v-if="isModal2Open === true">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-body text-center">
          <span class="close-icon" @click="isModal2Open = false" data-bs-dismiss="modal" aria-label="Close">
            <i class="fas fa-times"></i>
          </span>
          <form @submit.prevent="submitFilter">
            <div class="mt-4 py-2">
              <h5 class="card-title"><span class="choose"> Comments Should Not Be Empty </span></h5>
              <p class="text-white">Please Type Comment or Select Image</p>

            </div>

          </form>
        </div>
      </div>
    </div>
  </div>

  <!-- modal -->
  <div class="modal show d-block" tabindex="-1" role="dialog" id="carShopFilter" v-if="isModal3Open === true">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-body text-center">
          <span class="close-icon" @click="isModal3Open = false" data-bs-dismiss="modal" aria-label="Close">
            <i class="fas fa-times"></i>
          </span>
          <form @submit.prevent="submitFilter">
            <div class="mt-4 py-2">
              <h5 class="card-title"><span class="choose"> OOPS! </span></h5>
              <p class="text-white">The selected image exceeds the maximum allowed size of 3 MB.</p>

            </div>

          </form>
        </div>
      </div>
    </div>
  </div>
  <!-- login modal -->
  <div class="modal show d-block" tabindex="-1" role="dialog" id="carShopFilter" ref="modalRef"
    v-if="loginModal == true">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-body text-center">
          <span class="close-icon" @click="closeModelLogin" data-bs-dismiss="modal" aria-label="Close">
            <i class="fas fa-times"></i>
          </span>
          <h5 class="card-title"><span class="choose"> Please Login Fisrt To Access This </span></h5>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CommunityDataService from "../services/CommunityDataService";
import axios from 'axios';

import CommentDataService from "../services/CommentDataService";

import Viewer from 'viewerjs';
import 'viewerjs/dist/viewer.css';
import moment from 'moment';
import userImage from "../assets/images/userImg.png"
import dummyuseImage from "../assets/images/Group888.png"
import { reactive } from 'vue';
export default {
  name: "CommunityDetail",

  data() {
    return {
      isLogin: "",
      loginModal: false,
      likesCountComments: reactive({}),
      imageName: "",
      search: "",
      likesCount: "",
      totalComments: "",
      dummyuserImage: dummyuseImage,
      sub: "",
      pageId: "",
      forumId: "",
      forumData: [],
      // reply:
      userImage: userImage,
      showReplyInput: null,
      replyText: '',
      replies: [],
      rImage: "",
      // reply
      zoomImg: "zoomImg",
      isloadingLike: false,
      modalVisible: false,
      modalImageUrl: '',
      isModal2Open: false,
      isModal3Open: false,
      imageUrl: '',
      RimageUrl: "",
      communityData: [],
      loading: true, // Initially set to true to show loader image,
      imgLoading: false,
      id: "",
      isLike: false
      ,
      user_email: "",
      user_name: "",
      user_image: "",
      comments: [],
      filteredComments: [],
      newComment: "",
      image: null,
      nspeakers: '',
      currentImage: "",
      currentImage2: "",

    };
  },
  created() {
    // Fetch community data when three component is created
    this.fetchCommunityData();
  },
  async mounted() {
    this.fetchProfileData()
    this.id = this.$route.params.id
    this.forumId = this.$route.params.fid
    this.getComments()
    this.isLiked()
    await this.fetchCommunityData();
    this.addView()
    this.pageId = this.$route.params.id;
    this.getForumData()
    // await this.formSubmit()
    this.getNoOfComments()
    this.getLikesCount()
    this.isLogin = JSON.parse(localStorage.getItem('login')) || false




  },
  computed: {


    // Computed property to check if the textarea is not empty
    isTextareaNotEmpty() {
      return this.newComment.trim().length > 0;
    },
    // Computed property to get the last message delivered
    lastMessageDelivered() {
      if (this.messages.length > 0) {
        return this.messages[this.messages.length - 1];
      } else {
        return null;
      }
    },
  },

  methods: {
    openLoginModal() {
      console.log("sdsd")
      this.loginModal = true
    },
    closeModelLogin() {
      this.loginModal = false
    },
    decode(str) {
      console.log("str", str)
      console.log("decodestr", str)

      return decodeURIComponent(str);
    },
    applyFilter() {
      const searchLower = this.search.trim().toLowerCase();
      if (searchLower === '') {
        this.filteredComments = this.comments; // Reset to original comments when search is empty
      } else {
        const filtered = this.comments.filter(comment =>
          comment.comments.toLowerCase().includes(searchLower) // Ensure you are searching within comment.comments
        );
        this.filteredComments = filtered;
      }
    },
    getNoOfComments() {

      const apiUrl = `https://king-prawn-app-3rw3o.ondigitalocean.app/api/comments/count?community_id=${this.pageId}`;

      axios.get(apiUrl)
        .then(response => {
          console.log('No Of Comments:', response.data.count);
          this.totalComments = response.data.count
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    },
    async getForumData() {
      try {
        // Make the GET request with query parameters
        const response = await axios.get(`https://king-prawn-app-3rw3o.ondigitalocean.app/api/communities/${this.pageId}`,);

        // Handle the response data
        console.log("new get response", response.data);
        this.forumData = response.data
        console.log("forun data issssss", this.forumData)

      } catch (error) {
        // Handle any errors
        console.error('Error making GET request:', error);
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
            const filteredCommunities = response.data.forums.filter(item => item.id === this.forumId);
            console.log("fiter data", filteredCommunities)
            this.forumData = filteredCommunities[0]
            console.log("forum data", this.forumData.description)
          } else {
            console.error(
              "API response does not contain forums array:",
              response.data
            );
            this.communities = [];
          }

        })
        .catch((error) => {
          console.error("There was an error!", error);
          this.communities = [];
        })
        .finally(() => {
          this.submitting = false;
        });
    },

    handleImageChange(event) {
      console.log("in image cange")
      const file = event.target.files[0];
      console.log(file.result)
      // Do something with the selected file, like saving it to data or uploading it
      this.rImage = file;
      if (file) {

        // Read the file as a data URL
        const reader = new FileReader();
        reader.onload = (e) => {
          // Update imageUrl with the data URL of the uploaded image
          this.RimageUrl = e.target.result;
          console.log(this.RimageUrl)
        };
        reader.readAsDataURL(file);
      }
    },
    openFileInput2() {
      // Trigger click event of file input
      document.getElementById('rImage').click();
    },


    formatDate(date) {
      const now = moment();
      const createdDate = moment(date);
      const duration = moment.duration(now.diff(createdDate));

      if (duration.asSeconds() < 60) {
        return 'Now';
      } else if (duration.asMinutes() < 60) {
        return `${Math.floor(duration.asMinutes())} minute${Math.floor(duration.asMinutes()) > 1 ? 's' : ''} ago`;
      } else if (duration.asHours() < 24) {
        return `${Math.floor(duration.asHours())} hour${Math.floor(duration.asHours()) > 1 ? 's' : ''} ago`;
      } else if (duration.asDays() < 7) {
        return `${Math.floor(duration.asDays())} day${Math.floor(duration.asDays()) > 1 ? 's' : ''} ago`;
      } else if (duration.asWeeks() < 4) {
        return `${Math.floor(duration.asWeeks())} week${Math.floor(duration.asWeeks()) > 1 ? 's' : ''} ago`;
      } else if (duration.asMonths() < 12) {
        return `${Math.floor(duration.asMonths())} month${Math.floor(duration.asMonths()) > 1 ? 's' : ''} ago`;
      } else {
        return `${Math.floor(duration.asYears())} year${Math.floor(duration.asYears()) > 1 ? 's' : ''} ago`;
      }
    },

    filteredReplies(commentId) {
      return this.replies.filter(reply => reply.comment_id === commentId && reply.comments);
    },
    // reply
    toggleReply(commentId) {
      if (this.showReplyInput === commentId) {
        this.showReplyInput = null;
      } else {
        this.showReplyInput = commentId;
      }
    },
    toggleReply2(replyid) {
      if (this.showReplyInput === replyid) {
        this.showReplyInput = null;
      } else {
        this.showReplyInput = replyid;
      }
    },

    // get reply 
    getreply(commentId) {

      console.log("reply function is calling on id", commentId)
      this.replies = [];
      axios.get(`https://king-prawn-app-3rw3o.ondigitalocean.app/api/replies/replyall/${commentId}`)
        .then(response => {

          this.replies.push(...response.data);
          console.log("all repllies", this.replies)
        })
        .catch(error => {
          console.error('Error fetching replies:', error);
        });
    },

    // submitReply(commentId) {
    //   const formData = new FormData()
    //   console.log(commentId);
    //   console.log(this.replyText);
    //   console.log(this.user_email);
    //   console.log(this.user_name);

    //   formData.append('comment_id', commentId); // Assuming `this.id` contains the community ID
    //   formData.append('comments', this.replyText); // Assuming `this.newComment` contains the new comment text
    //   formData.append('user_email', this.user_email);
    //   formData.append('user_name', this.user_name);
    //   formData.append('rimage', this.rImage);
    //   console.log("r_imag", this.rImage)
    //   formData.append('sub', this.sub);

    //   // Log the form data
    //   console.log("formData", formData);

    //   axios.post('https://king-prawn-app-3rw3o.ondigitalocean.app/apireplies/reply', formData, {
    //     headers: {
    //       'Content-Type': 'application/x-www-form-urlencoded'
    //     }
    //   })
    //     .then(response => {
    //       // Handle success
    //       console.log('Post request successful of replies:', response.data);
    //       // Append the new comment to the comments array
    //       // this.replies.push(response.data);
    //       // this.getreplyOnSubmit(commentId)
    //       this.getComments()

    //       console.log("rrr", this.replies)
    //       // Clear inputs
    //       this.replyText = '';
    //       // this.showReplyInput = null;
    //       // Set imgLoading back to false after successful response
    //     })
    //     .catch(error => {
    //       // Handle error
    //       console.error('Error making post request:', error);
    //       // Set imgLoading back to false after error
    //       this.replyText = '';
    //       // this.showReplyInput = null;
    //     });

    //   // Clear the reply input
    //   this.replyText = '';
    //   this.showReplyInput = null;
    // }
    submitReply(commentId) {
      if (this.isLogin == false) {
        this.loginModal = true
      }
      else {
        const formData = new FormData()
        console.log(commentId);
        console.log(this.replyText);
        console.log(this.user_email);
        console.log(this.user_name);
        formData.append('community_id', this.id);

        formData.append('parent_id', commentId); // Assuming `this.id` contains the community ID
        formData.append('comments', this.replyText); // Assuming `this.newComment` contains the new comment text
        formData.append('user_email', this.user_email);
        formData.append('user_name', this.user_name);
        formData.append('image', this.rImage);
        formData.append('type', "reply");
        console.log("r_imag", this.rImage)
        formData.append('sub', this.sub);

        // Log the form data
        console.log("formData", formData);
        if (this.RimageUrl == "" && this.replyText == "") {
          this.isModal2Open = true;
          this.imgLoading = false;
        }
        else {
          axios.post('https://king-prawn-app-3rw3o.ondigitalocean.app/api/comments/comments', formData, {
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded'
            }
          })
            .then(response => {
              // Handle success
              console.log('Post request successful of replies:', response.data);
              // Append the new comment to the comments array
              // this.replies.push(response.data);
              // this.getreplyOnSubmit(commentId)
              this.getComments()

              console.log("rrr", this.replies)
              // Clear inputs
              this.replyText = '';
              // this.showReplyInput = null;
              // Set imgLoading back to false after successful response
            })
            .catch(error => {
              // Handle error
              console.error('Error making post request:', error);
              // Set imgLoading back to false after error
              this.replyText = '';
              // this.showReplyInput = null;
            });

          // Clear the reply input
          this.replyText = '';
          this.showReplyInput = null;
        }

      }

    }
    ,
    //   const formData = new FormData();
    //   console.log(commentId)
    //   console.log(this.replyText)
    //   console.log(this.user_email)
    //   console.log(this.user_name)
    //   formData.append('comment_id', commentId); // Assuming `this.id` contains the community ID
    //   formData.append('comments', this.replyText); // Assuming `this.newComment` contains the new comment text
    //   formData.append('user_email', this.user_email);
    //   formData.append('user_name', this.user_name);


    //   // console.log("f_daata", formData)
    //   axios.post('https://king-prawn-app-3rw3o.ondigitalocean.app/apireplies/reply', formData)
    //     .then(response => {
    //       // Handle success
    //       console.log('Post request successful of repies:', response.data);
    //       // Append the new comment to the comments array
    //       this.replies.push(response.data);
    //       // Clear inputs



    //       this.replyText = '';
    //       this.showReplyInput = null;

    //       // Set imgLoading back to false after successful response

    //     })
    //     .catch(error => {
    //       // Handle error
    //       console.error('Error making post request:', error);
    //       // Set imgLoading back to false after error

    //       this.replyText = '';
    //       this.showReplyInput = null;
    //     });

    //   // Clear the reply input
    //   this.replyText = '';
    //   this.showReplyInput = null;
    // },


    // reply
    getImageUrl(imagePath) {
      // return `https://52.59.240.119/${imagePath}`;
      return `https://king-prawn-app-3rw3o.ondigitalocean.app/${imagePath}`;
    },

    openViewer(imagePath) {
      this.currentImage = this.getImageUrl(imagePath);
      const viewerElement = this.$refs.viewerContainer;
      if (viewerElement) {
        // Destroy previous instance if it exists
        if (this.viewerInstance) {
          this.viewerInstance.destroy();
        }
        this.$nextTick(() => {
          // Initialize new Viewer instance and store reference
          this.viewerInstance = new Viewer(viewerElement, {
            inline: false,
            viewed() {
              // this.viewerInstance.zoomTo(3); // Use this.viewerInstance

            },
            toolbar: false,
            // toolbar: {
            //   zoomIn: true,
            //   zoomOut: true,

            // },
            zoomable: true, // Enable zooming
            movable: true,// Disable panning,
            minScale: 1, // Minimum scale (no zooming out)
            maxScale: 3,// Maximum scale (zoom in up to 3 times)
            boundary: false,
            zoomOnWheel: true,
            fullscreen: false, // Enable fullscreen view
            minX: 100, // Minimum X coordinate (left boundary)
            maxX: 200, // Maximum X coordinate (right boundary)
            minY: 0, // Minimum Y coordinate (top boundary)
            maxY: 300,// Maximum Y coordinate (bottom boundary)
            title: false,
            navbar: false,
            tooltip: false,

          });
          this.viewerInstance.show();
        });
      }
    },

    openViewer2(imagePath) {
      this.currentImage2 = this.getImageUrl(imagePath);
      const viewerElement = this.$refs.viewerContainer2;
      if (viewerElement) {
        // Destroy previous instance if it exists
        if (this.viewerInstance) {
          this.viewerInstance.destroy();
        }
        this.$nextTick(() => {
          // Initialize new Viewer instance and store reference
          this.viewerInstance = new Viewer(viewerElement, {
            inline: false,
            viewed() {
              // this.viewerInstance.zoomTo(3); // Use this.viewerInstance

            },
            toolbar: false,

            zoomable: true, // Enable zooming
            movable: true,// Disable panning,
            minScale: 1, // Minimum scale (no zooming out)
            maxScale: 3,// Maximum scale (zoom in up to 3 times)
            boundary: false,
            zoomOnWheel: true,
            fullscreen: false, // Enable fullscreen view
            minX: 100, // Minimum X coordinate (left boundary)
            maxX: 200, // Maximum X coordinate (right boundary)
            minY: 0, // Minimum Y coordinate (top boundary)
            maxY: 300,// Maximum Y coordinate (bottom boundary)

            title: false,
            navbar: false,
            tooltip: false
          }),

            this.viewerInstance.show();
        });
      }
    },

    showModal(imageUrl) {
      console.log(imageUrl)
      this.modalImageUrl = imageUrl;
      this.modalVisible = true;
      // Prevent scrolling of the background content when the modal is open

    },
    closeModal() {
      this.modalVisible = false;
      // Enable scrolling of the background content when the modal is closed

    },
    removeImage() {
      // Reset imageUrl to remove the image
      this.imageUrl = '';
      // Reset the file input to clear the selected file
      if (this.$refs.fileInput) {
        this.$refs.fileInput.value = '';
      }
    },
    removeImageReply() {
      // Reset imageUrl to remove the image
      this.RimageUrl = '';
      this.rImage = ""
      // Reset the file input to clear the selected file
      if (this.$refs.fileInputReply) {
        this.$refs.fileInputReply.value = '';
      }
    },
    openFileInput() {
      this.$refs.fileInput.click(); // Trigger click event on file input when icon is clicked
    },
    handleFileChange(event) {
      // Handle file change event and update this.image
      const file = event.target.files[0]; // Get the uploaded file
      // Check if a file is selected
      this.imageName = file.name

      if (file) {
        this.image = this.$refs.fileInput.files[0];
        // Read the file as a data URL
        const reader = new FileReader();
        reader.onload = (e) => {
          // Update imageUrl with the data URL of the uploaded image
          this.imageUrl = e.target.result;
        };
        reader.readAsDataURL(file);
      }



    },
    async fetchProfileData() {
      try {
        console.log("Fetching profile data...");
        const data = await this.$store.dispatch("auth/getprofiledata");
        // console.log("Profile data:", data);
        this.sub = data.result.sub
        // alert("sub is", data.result.sub)
        // console.log("sub issss", this.sub)
        // this.userAttributes = data.result
        // this.user_email = data.result.email;
        // this.user_name = data.result.name;
        // this.user_image = data.result.picture
        // console.log(this.user_image)


        // console.log("userdata", this.user_name)


      } catch (error) {
        console.error("Error fetching profile data:", error);
      }
    },

    getComments() {
      console.log("in get comments")
      const id = this.$route.params.id;
      CommentDataService.getAllByCommunity(id)
        .then(response => {
          this.comments = response.data;
          this.filteredComments = this.comments;
          console.log("com ", this.comments)
          this.comments.forEach(comment => {
            // this.getreply(comment.id);
            this.getLikesCountComments(comment.id)
          });

        })
        .catch(error => {
          console.error('Error fetching comments:', error);
        });
    },
    getCommentsonSubmit() {
      console.log("in get comments on submit")
      const id = this.$route.params.id;
      CommentDataService.getAllByCommunity(id)
        .then(response => {
          this.comments = response.data;
          this.filteredComments = this.comments;
          console.log("all commetns", response.data)
          this.$nextTick(() => {
            this.scrollToBottom();
          });
        })
        .catch(error => {
          console.error('Error fetching comments:', error);
        });
    },
    scrollToBottom() {
      console.log("scroll to botto,", console.log(this.$refs.commentsContainer))
      const container = this.$refs.commentsContainer;
      container.scrollTop = container.scrollHeight;
    },





    postComment() {
      if (this.isLogin == false) {
        this.loginModal = true
      }
      else {
        // Set imgLoading to true before making the request
        // console.log(this.user_image)
        this.imgLoading = true;

        const file = this.$refs.fileInput.files[0];
        console.log("post comment image ifle", file)
        const maxSizeInBytes = 3 * 1024 * 1024; // 3 MB

        if (file && file.size > maxSizeInBytes) {
          // Provide feedback to the user that the image size exceeds the limit
          this.isModal3Open = true;
          this.imgLoading = false; // Reset imgLoading
          return;
        }

        const formData = new FormData();
        formData.append('image', file); // Append the selected file
        formData.append('community_id', this.id); // Assuming `this.id` contains the community ID
        formData.append('comments', this.newComment); // Assuming `this.newComment` contains the new comment text
        // formData.append('user_email', this.user_email);
        // formData.append('user_name', this.user_name);
        console.log("sub in comments", this.sub)
        formData.append('sub', this.sub);
        formData.append('type', "comment");
        // formData.append('image', this.user_name);
        // formData.append('User_imagimage', this.user_image)


        // Check if formData is empty
        if (this.imageUrl == "" && this.newComment == "") {
          this.isModal2Open = true;
          this.imgLoading = false;
        } else {
          axios.post('https://king-prawn-app-3rw3o.ondigitalocean.app/api/comments/comments', formData)
            .then(response => {
              // Handle success
              console.log('Post request successful:', response.data);
              // Append the new comment to the comments array
              this.comments.push(response.data);
              // Clear inputs
              this.newComment = "";
              this.imageUrl = "";
              this.getComments()
              this.getNoOfComments()
              // Check if this.$refs.fileInput exists before accessing its properties
              if (this.$refs.fileInput) {
                this.$refs.fileInput.value = '';
              }

              this.$nextTick(() => {
                this.scrollToBottom();
              });
              // Set imgLoading back to false after successful response
              this.imgLoading = false;
            })
            .catch(error => {
              // Handle error
              console.error('Error making post request:', error);
              // Set imgLoading back to false after error
              this.imgLoading = false;
            });
        }
      }
    }

    ,


    // like service created by khang
    //     addLike() {
    //       this.isloadingLike = true
    //       // Check if the like has already been added for this item in this session
    //       if (!localStorage.getItem('liked-' + this.id)) {
    //         const requestData = {
    //           id: this.id
    //         };
    //         axios.post('https://king-prawn-app-3rw3o.ondigitalocean.app/api/communities/likes', requestData)
    //           .then(response => {
    //             // Handle success
    //             console.log('Post request successful:', response.data)
    //             this.isloadingLike = false

    //             // Set the flag in local storage with the respective ID
    //             /*
    //             localStorage.setItem('liked-' + this.id, true);
    //             console.log(`liked-${this.id}`)
    // */
    //             this.isLike = localStorage.getItem(`liked-${this.id}`);
    //             this.fetchCommunityData();
    //             this.getForumData()
    //             this.getComments()
    //           })
    //           .catch(error => {
    //             // Handle error
    //             console.error('Error making post request:', error);
    //           });
    //       } else {
    //         // If the like has already been added, you may want to remove the like
    //         const requestData = {
    //           id: this.id
    //         };
    //         axios.post('https://king-prawn-app-3rw3o.ondigitalocean.app/api/communities/dislikes', requestData)
    //           .then(response => {
    //             // Handle success
    //             console.log('Dislike request successful:', response.data);
    //             this.isloadingLike = false

    //             // Remove the flag from local storage
    //             localStorage.removeItem('liked-' + this.id);
    //             console.log(`Disliked-${this.id}`)
    //             this.isLike = false;
    //             this.getForumData()
    //             this.getComments()
    //             this.fetchCommunityData();
    //           })
    //           .catch(error => {
    //             // Handle error
    //             console.error('Error making dislike request:', error);
    //           });
    //       }
    //     },


    // async addLike() {
    //   // Indicate loading state
    //   this.loading = true;
    //   console.log("id:", this.pageId, "type", "sub:", this.sub)
    //   // Create FormData instance
    //   const formData = new FormData();
    //   formData.append('id', this.pageId);
    //   formData.append('type', "community");
    //   formData.append('sub', this.sub);

    //   try {
    //     // Make the POST request with the FormData instance
    //     const response = await axios.post('https://king-prawn-app-3rw3o.ondigitalocean.app/apilikes/like', formData, {
    //       headers: {
    //         'Content-Type': 'multipart/form-data'
    //       }
    //     });

    //     // Handle the response data
    //     console.log(response.data);

    //     // Additional logic after successful request
    //     this.loading = false;
    //     // Navigate or update the UI as needed
    //   } catch (error) {
    //     // Handle any errors
    //     this.loading = false;
    //     console.error('Error making POST request:', error);
    //   }
    // }
    async addLike() {
      // Indicate loading state
      this.loading = true;
      console.log("id:", this.pageId, "type:", "community", "sub:", this.sub);

      // Create URLSearchParams instance
      const params = new URLSearchParams();
      params.append('id', this.pageId);
      params.append('type', "community");
      params.append('sub', this.sub);

      try {
        // Make the POST request with the URLSearchParams instance
        const response = await axios.post('https://king-prawn-app-3rw3o.ondigitalocean.app/api/likes/like', params, {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        });

        // Handle the response data
        console.log(response.data);
        this.getLikesCount()
        // Additional logic after successful request
        this.loading = false;
        // Navigate or update the UI as needed
      } catch (error) {
        // Handle any errors
        this.loading = false;
        console.error('Error making POST request:', error);
      }
    }

    ,
    // addLike2(cid) {
    //   console.log("click comment with", cid)
    //   // alert(cid)
    //   this.isloadingLike = true
    //   // Check if the like has already been added for this item in this session
    //   if (!localStorage.getItem('cliked-' + this.id)) {
    //     const requestData = {
    //       id: cid
    //     };
    //     axios.post('https://king-prawn-app-3rw3o.ondigitalocean.app/api/comments/likes', requestData)
    //       .then(response => {
    //         // Handle success
    //         console.log('Post request successful:', response.data)
    //         this.isloadingLike = false

    //         // Set the flag in local storage with the respective ID
    //         localStorage.setItem('cliked-' + this.id, true);
    //         console.log(`cliked-${this.id}`)
    //         this.isLike = localStorage.getItem(`cliked-${this.id}`);
    //         this.fetchCommunityData();
    //         this.getForumData()
    //       })
    //       .catch(error => {
    //         // Handle error
    //         console.error('Error making post request:', error);
    //       });
    //   } else {
    //     // If the like has already been added, you may want to remove the like
    //     const requestData = {
    //       id: cid
    //     };
    //     axios.post('https://king-prawn-app-3rw3o.ondigitalocean.app/api/comments/dislikes', requestData)
    //       .then(response => {
    //         // Handle success
    //         console.log('Dislike request successful:', response.data);
    //         this.isloadingLike = false

    //         // Remove the flag from local storage
    //         localStorage.removeItem('cliked-' + this.id);
    //         console.log(`cDisliked-${this.id}`)
    //         this.isLike = false;
    //         this.fetchCommunityData();
    //       })
    //       .catch(error => {
    //         // Handle error
    //         console.error('Error making dislike request:', error);
    //       });
    //   }
    // }
    async addLike2(cid) {

      this.loading = true;
      console.log("id:", cid, "type:", "comment", "sub:", this.sub);

      // Create URLSearchParams instance
      const params = new URLSearchParams();
      params.append('id', cid);
      params.append('type', "comment");
      params.append('sub', this.sub);

      try {
        // Make the POST request with the URLSearchParams instance
        const response = await axios.post('https://king-prawn-app-3rw3o.ondigitalocean.app/api/likes/like', params, {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        });

        // Handle the response data
        console.log(response.data);
        this.getLikesCountComments(cid)
        // Additional logic after successful request
        this.loading = false;
        // Navigate or update the UI as needed
      } catch (error) {
        // Handle any errors
        this.loading = false;
        console.error('Error making POST request:', error);
      }
    }

    // addLike() {
    //   this.isloadingLike = true;
    //   const config = {
    //     headers: {
    //       'Content-Type': 'multipart/form-data',
    //       'Cookie': 'ci_session=2f7cae7a141b4553e24fe62237c5171e3df6f513'
    //     }
    //   };
    //   const formData = new FormData();
    //   // alert(this.pageId)
    //   formData.append('forumid', this.forumId)
    //   formData.append('userId', this.user_email)
    //   // Check if the like has already been added for this item in this session


    //   axios.post('https://buzzwaretech.com/adminrev/Api/likeform', formData, config)
    //     .then(response => {
    //       // Handle success
    //       console.log('Post request successful:', response.data)
    //       this.isloadingLike = false

    //       // Set the flag in local storage with the respective ID
    //       localStorage.setItem('liked-' + this.id, true);
    //       console.log(`liked-${this.id}`)
    //       this.isLike = localStorage.getItem(`liked-${this.id}`);
    //       this.fetchCommunityData();
    //       this.formSubmit()
    //     })
    //     .catch(error => {
    //       // Handle error
    //       console.error('Error making post request:', error);
    //     });

    // }
    ,
    addView() {
      const requestData = {
        id: this.id
      };
      axios.post('https://king-prawn-app-3rw3o.ondigitalocean.app/api/communities/views', requestData)
        .then(response => {
          // Handle success
          console.log('Post of views request successful:', response.data);

          // Set the flag in local storage with the respective ID


          this.fetchCommunityData()

        })
        .catch(error => {
          // Handle error
          console.error('Error making post request:', error);
        });
    },


    sendMessageOnEnter(event) {
      // Check if the Enter key is pressed and the textarea is not empty
      if (event.key === "Enter" && this.isTextareaNotEmpty) {
        this.sendMessage();
      }
    },
    sendMessage() {
      if (this.newComment.trim() !== "") {
        this.messages.push({ text: this.newComment, class: "receiver-chats" });
        this.newComment = "";
      }
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
    isLiked() {
      this.isLike = localStorage.getItem(`liked-${this.id}`) !== null;
      return this.isLike
    }
    ,
    async fetchproData(subId) {
      try {
        // Make the GET request with query parameters
        const response = await axios.get('https://king-prawn-app-3rw3o.ondigitalocean.app/api/users/', {
          params: {
            sub: subId
          }
        });

        // Handle the response data
        console.log("new porofile Data is", response.data);
        this.image = response.data[0].image
      } catch (error) {
        // Handle any errors
        console.error('Error making GET request:', error);
      }
    },
    getLikesCount() {
      const communityId = this.$route.params.id;
      console.log(communityId)
      // Replace this with the actual community ID if it's dynamic
      const type = 'community'; // Replace this with the actual type if it's dynamic
      const url = `https://king-prawn-app-3rw3o.ondigitalocean.app/api/likes/likescount?id=${communityId}&type=${type}`;

      axios.get(url)
        .then(response => {
          console.log('Likes count:', response.data);
          // Update your component's state with the likes count
          this.likesCount = response.data.count;

        })
        .catch(error => {
          console.error('Error fetching likes count:', error);
        });
    },
    // getLikesCountComments(cid) {

    //   console.log("comment_id", cid)
    //   // Replace this with the actual community ID if it's dynamic
    //   const type = 'comment'; // Replace this with the actual type if it's dynamic
    //   const url = `https://king-prawn-app-3rw3o.ondigitalocean.app/apilikes/likescount?id=${cid}&type=${type}`;

    //   axios.get(url)
    //     .then(response => {
    //       console.log('Likes count:', response.data);
    //       // Update your component's state with the likes count
    //       this.likesCount = response.data.count;

    //     })
    //     .catch(error => {
    //       console.error('Error fetching likes count:', error);
    //     });
    // }
    getLikesCountComments(cid) {
      const type = 'comment'; // Replace this with the actual type if it's dynamic
      const url = `https://king-prawn-app-3rw3o.ondigitalocean.app/api/likes/likescount?id=${cid}&type=${type}`;

      axios.get(url)
        .then(response => {
          // Update likes count for the comment
          console.log("commets likes", response.data.count, "of id", cid)
          this.likesCountComments[cid] = response.data.count;
        })
        .catch(error => {
          console.error('Error fetching likes count:', error);
        });
    },

  },


};
</script>

<style scoped>
.fh2 {
  color: #F95F19;
  font-size: 18px;
}

.UsrImage {
  height: 50px;
  width: 50px;
  border-radius: 8px;
  object-fit: cover
}

.replyBox {
  border: 1px solid;
  border-radius: 5px;
  padding: 1rem;
  margin-block: 0.8rem;
  background: #1A202C;

}

.fonts1 {
  color: #F95F19;
  cursor: pointer;
  font-size: 10px
}

.likeBtn {
  background: transparent;
  width: fit-content;
  border: 0px solid transparent
}

.image_icon {
  /* position: absolute; */
  top: 8px;
  right: 55px;
  font-size: 28px;
  color: #F95F19;
}

.send-icon {
  top: 12px;
  right: 12px
}

.CommentImage {
  width: 200px;
  margin-bottom: 0.5rem;
  -o-object-fit: cover;
  box-shadow: rgb(215 145 14 / 10%) 0px 1px 1px 0px inset, rgb(215 125 30 / 25%) 0px 50px 100px -20px, rgb(185 118 14 / 30%) 0px 30px 60px -30px;
  border-radius: 15px;
}

.uName {
  font-size: 14px;
  color: #F95F19
}

.h1make {
  color: #FF7A00;

}

#like>i:hover {
  color: #FF7A00;
  cursor: pointer;
}

.like {
  color: #FF7A00;
}

.img-communityDetailsn {
  width: 100%;
  height: 300px;
  object-fit: cover;
  aspect-ratio: 1/1;
}

.box {
  height: 100px;
  width: 100px;
  border-radius: 50%;
  border: 6px solid;
  border-color: #FF7A00 transparent;
  animation: spin 1s infinite ease-out;
}

.box2 {
  height: 30px;
  width: 30px;
  border-radius: 50%;
  border: 6px solid;
  border-color: #FF7A00 transparent;
  animation: spin 1s infinite ease-out;
}

.imgLoadingBox {
  position: absolute;
  top: 22px;
  right: 12px
}

.mainUp {
  width: fit-content;
}

.upImage {
  width: 40px;
  height: 35px;
}

.cancel {
  /* position: absolute; */
  right: 0;
  /* left: -16px; */
  color: #d24200;
  transition: 0.2s all;
  cursor: pointer;
  /* top: -7px; */
  top: 0;
}


.cancel:hover {
  transform: scale(1.2);
  transition: 0.2s all;
  color: #fff;
}

.upsection {
  /* position: absolute; */
  right: 100px;
  top: 12px
}

.fonts2 {
  font-size: 10px
}

.pe-9 {
  padding-right: 17.6rem;
}


@keyframes spin {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

.communityDetailsMain {
  border: 4px solid #FF7A00
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

/* scroll bar */
/* Hide the default scrollbar */
.communityDetails-chatContent {
  scrollbar-width: thin;
  scrollbar-color: rgba(138, 134, 134, 0.5) rgba(96, 95, 95, 0);
  overflow-y: auto;

}

/* Define scrollbar track */
.communityDetails-chatContent::-webkit-scrollbar-track {
  background-color: transparent;

}

/* Define scrollbar thumb */
.communityDetails-chatContent::-webkit-scrollbar-thumb {
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  min-height: 200px !important;

}

/* Define scrollbar corner */
.communityDetails-chatContent::-webkit-scrollbar-corner {
  background-color: transparent;

}




/* Modal */
.modala {

  position: fixed;
  z-index: 999;
  left: 0;
  top: 5%;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
}

.modala-content {
  position: relative;
  margin: auto;
  width: 80%;
  max-width: 500px;
  max-height: 70%;
}

.zoomImg {
  width: 100% !important;
  height: auto !important;
}

/* Close button */
.close {
  color: white;
  position: absolute;
  top: 10px;
  right: 20px;
  font-size: 30px;
  font-weight: bold;
  cursor: pointer;
  z-index: 9;
}

.close:hover {
  color: #ccc;
}

.communityDetails-section {
  min-height: 90vh;
}

.igt-right {
  border: 1px solid;
  border-left: 0px transparent;
  background: transparent;
}

.igt-left {
  /* border-radius: 6px; */
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;

  font-size: 28px;
  color: #F95F19;
  background: #031726;
  border: 1px solid transparent;

}

.formc1 {
  border-right: 0px transparent !important;
  border-left: 0px transparent !important;
}

.reply {
  background: rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
  opacity: 0.7;
  /* Apply blur effect */
  -webkit-backdrop-filter: blur(10px);
  /* For Safari */
  border: 1px solid rgba(255, 255, 255, 0.3);
  margin-bottom: 0.3rem;
}

.formSearch {
  /* width: 400px; */
  /* margin: auto; */
  padding: 0.5rem;
}

.input-group-text {
  padding-block: 0 !important;
  padding-inline: 0.3rem;
}

.mainPostArea {
  min-height: 40px !important;
  border-radius: 5px !important;
  background-color: #031726 !important;
  border: 1px solid #1a202c !important;
  font-family: "Gruppo", sans-serif !important;
  font-size: 18px !important;
  font-weight: 400 !important;
  color: #c5c5c5 !important;
  padding-inline: 0.8rem;
}

.mainPostArea textarea {
  border: none !important;
  background-color: transparent !important;

}

.wcol {
  width: 83.5%
}

@media(max-width:768px) {
  .wcol {
    width: 100%;
  }
}

textarea::-webkit-scrollbar {
  width: 0;
  /* Remove scrollbar space */
  background: transparent;
  /* Optional: Just to make it visually disappear */
}

/* Hide scrollbar in Firefox */
textarea {
  scrollbar-width: none;
  /* Hide scrollbar */
  -ms-overflow-style: none;
  /* Hide scrollbar for Internet Explorer and Edge */
}

textarea::-webkit-scrollbar {
  width: 0;
  /* Remove scrollbar space for WebKit browsers */
}
</style>
