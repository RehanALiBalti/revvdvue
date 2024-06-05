<template>

  <section class="communityDetails-section my-5">
    <div class="container">
      <div class="">
        <div v-if="loading" class="d-flex justify-content-center">
          <div class="box"></div>
        </div>
        <div v-else>
          <div class="communityDetails-bg ">
            <div class="row">
              <div class="col-md-4 my-2 ">
                <div class="communityDetailsMain">
                  <img class=" d-block mx-auto w-100 object-fit-contain" src="../assets/images/icons/audilogo.png"
                    alt="" height="185px">
                </div>


              </div>
              <div class="col-md-8 my-2 ">
                <div class="card-title-div communityDetailsMain p-3">

                  <h2 class="card-title-h2 community-title text-start">


                    {{ communityData.make }} <span> {{ communityData.model }}</span>
                  </h2>

                  <div class=" d-flex card-title-h2 justify-content-start">

                    <p class=" my-0 text-end">
                      {{ communityData.production_years }}
                    </p>
                    <p class=" community-title card-title-h2 my-0 ms-2 text-end"> {{
          communityData.generation }}</p>
                  </div>
                  <div class="list-community-add d-flex justify-content-start  flex-wrap mt-5 ">
                    <button v-if="isloadingLike" class="like-community likeBtn" id="like" @click="addLike" disabled>
                      <i class="fa-solid fa-thumbs-up" v-bind:class="{ 'like': isLike }"></i>
                      <small v-if="isLike">Liked</small>
                      <small v-else>Like</small>
                      <span class="total-likes">{{ communityData.likes
                        }}</span>
                    </button>
                    <button v-else class="like-community likeBtn" id="like" @click="addLike">
                      <i class="fa-solid fa-thumbs-up" v-bind:class="{ 'like': isLike }"></i>
                      <small v-if="isLike">Liked</small>
                      <small v-else>Like</small>
                      <span class="total-likes">{{ communityData.likes
                        }}</span>
                    </button>

                    <div class="like-community">
                      <i class="fa-solid fa-comments"></i>
                      <small>Comments</small>

                      <span class="total-likes">{{ this.comments.length }}</span>
                    </div>
                    <div class="like-community">
                      <i class="fa-solid fa-eye"></i>
                      <small>Views</small>
                      <span class="total-likes">{{ communityData.views }}</span>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </div>
          <div v-if="comments != ''" class="communityDetails-bg mt-3 communityDetailsMain">
            <div class="img-communityDetails-div">


            </div>
            <div class="communityDetails-content pt-4 pb-0 mb-0">

            </div>
            <div class="communityDetails-chatContent" id="chat-messages" ref="commentsContainer">

              <!-- <div v-for="comment in comments" :key="comment.comments">

                <div v-if="comment.user_email == user_email" class="d-flex flex-column position-relative">
                  <div class="d-flex justify-content-end align-items-center me-2">
                    <small class="uName">{{ comment.user_name }}</small>
                  </div>
                  <div class="receiver-chats " v-if="comments.length">
                    <p class="receiver-chats-para">
                      {{ comment.comments }}
                    </p>
                  
                    <img v-if="comment.image" :src="getImageUrl(comment.image)" alt="Comment Image" class="CommentImage"
                      @click="openViewer2(comment.image)" />

                  </div>
                  <p v-else>No comments to display</p>
                



                </div>
                <div v-else class="d-flex flex-column">
                  <div class="d-flex justify-start align-items-center ms-2">
                    <small class="uName">{{ comment.user_name }}</small>
                  </div>
                  <div class="sender-chats" v-if="comments.length">
                    <div>
                      <p class="sender-chats-para">
                        {{ comment.comments }}
                      </p>
                      <img v-if="comment.image" :src="getImageUrl(comment.image)" alt="Comment Image"
                        class="CommentImage" @click="openViewer(comment.image)" />
                    </div>
                  </div>
                  <p v-else>No comments to display</p>
             

                </div>
              </div> -->
              <div v-for="comment in comments" :key="comment.id">
                <div v-if="comment.user_email == user_email" class="d-flex flex-column position-relative">
                  <div class="d-flex justify-content-end align-items-center me-2">
                    <small class="uName">{{ comment.user_name }}</small>
                  </div>
                  <!-- <div class="receiver-chats" v-if="comments.length">


                    <p class="receiver-chats-para">{{ comment.comments }}</p>
                    <img v-if="comment.image" :src="getImageUrl(comment.image)" alt="Comment Image" class="CommentImage"
                      @click="openViewer2(comment.image)" />
                    <div class="d-flex justify-content-between align-items-center">
                      <small class="text-white fonts1">{{ formatDate(comment.created_date) }}</small>
                      <p class="text-white text-end fonts1 m-0" @click="toggleReply(comment.id)">
                        <i class="fa-solid fa-reply"></i> Reply
                      </p>
                    </div>
                    <div v-if="showReplyInput === comment.id">
                      <div class="input-group">
                        <input class="form-control" type="text" v-model="replyText" placeholder="Type your reply here">
                        <span class=" input-group-text" @click="submitReply(comment.id)">
                          <svg xmlns="http://www.w3.org/2000/svg" class="" width="31.5" height="27"
                            viewBox="0 0 31.5 27">
                            <path id="Icon_material-send" data-name="Icon material-send"
                              d="M3.015,31.5,34.5,18,3.015,4.5,3,15l22.5,3L3,21Z" transform="translate(-3 -4.5)"
                              fill="#f95f19" />
                          </svg>
                        </span>
                      </div>
                      <p class="text-white mt-3 mb-0">All Replies</p>
                      <hr class="mt-0 " style="opacity:1">
                    
                      <div class="p-2" v-for="reply in replies" :key="reply.id"
                        v-show="comment.id == reply.comment_id && reply.comments != ''">
                        <div class="  replyBox row" style="">
                          <div class="col-md-2">
                            <img :src="this.userImage" alt="" width="50px">
                          </div>
                          <div class="col-md-10">
                            <p class="uName m-0" v-if="comment.id == reply.comment_id && reply.comments != ''">{{
          reply.user_name }} </p>
                            <p class="sender-chats-para m-0 p-0"
                              v-if="comment.id == reply.comment_id && reply.comments != ''">
                              {{
          reply.comments }} </p>


                          </div>

                        </div>
                      </div>
                    </div>
                  </div> -->
                  <div class="receiver-chats" v-if="comments.length">
                    <div class="row">
                      <div class="col-md-2">
                        <img :src="this.userImage" alt="" width="50px">

                      </div>
                      <div class="col-md-8">
                        <div>
                          <small class="uName">{{ comment.user_name }}</small> <br>
                          <small class="text-white fonts1 mb-2 ms-0">{{ formatDate(comment.created_date) }}</small>
                          <p class="sender-chats-para">{{ comment.comments }}</p>
                          <img v-if="comment.image" :src="getImageUrl(comment.image)" alt="Comment Image"
                            class="CommentImage" @click="openViewer(comment.image)" />

                        </div>
                      </div>
                    </div>



                    <div class="d-flex justify-content-end align-items-center">

                      <p class="text-white text-end fonts1 m-0" @click="toggleReply(comment.id)">
                        <i class="fa-solid fa-reply"></i> Reply
                      </p>
                    </div>
                    <div v-if="showReplyInput === comment.id">
                      <div class="input-group">
                        <input type="file" class="Reply-image d-none" id="rImage" @change="handleImageChange">
                        <span class="input-group-text" @click="openFileInput2">
                          <i data-v-2645ce9a="" class="fa-solid fa-image"></i>
                        </span>

                        <input class="form-control" type="text" v-model="replyText" placeholder="Type your reply here">
                        <span class=" input-group-text" @click="submitReply(comment.id)">
                          <svg xmlns="http://www.w3.org/2000/svg" class="" width="31.5" height="27"
                            viewBox="0 0 31.5 27">
                            <path id="Icon_material-send" data-name="Icon material-send"
                              d="M3.015,31.5,34.5,18,3.015,4.5,3,15l22.5,3L3,21Z" transform="translate(-3 -4.5)"
                              fill="#f95f19" />
                          </svg>
                        </span>
                      </div>
                      <p class="text-white mt-3 mb-0">All Replies</p>
                      <hr class="mt-0 " style="opacity:1">
                      <div class="p-2" v-for="reply in replies" :key="reply.id" v-show="comment.id == reply.comment_id">
                        <div class="replyBox row">
                          <div class="col-md-2">
                            <img :src="this.userImage" class="UsrImage" alt="user_image" width="50px"
                              style="object-fit:cover">
                          </div>
                          <div class="col-md-10">
                            <p class="uName m-0" v-if="reply.user_name">{{ reply.user_name }}</p>
                            <p class="sender-chats-para m-0 p-0" v-if="reply.comments">{{ reply.comments }}</p>
                            <img v-if="reply.image" :src="getImageUrl(reply.image)" alt="Comment Image"
                              class="CommentImage" @click="openViewer(reply.image)" />
                          </div>
                        </div>
                      </div>


                    </div>
                  </div>
                  <p v-else class="text-white">No comments to display</p>
                </div>

                <div v-else class="d-flex flex-column">

                  <div class="sender-chats" v-if="comments.length">
                    <div class="row">
                      <div class="col-md-2">
                        <img :src="this.userImage" alt="" width="50px">

                      </div>
                      <div class="col-md-8">
                        <div>
                          <small class="uName">{{ comment.user_name }}</small> <br>
                          <small class="text-white fonts1 mb-2 ms-0">{{ formatDate(comment.created_date) }}</small>
                          <p class="sender-chats-para">{{ comment.comments }}</p>
                          <img v-if="comment.image" :src="getImageUrl(comment.image)" alt="Comment Image"
                            class="CommentImage" @click="openViewer(comment.image)" />

                        </div>
                      </div>
                    </div>



                    <div class="d-flex justify-content-end align-items-center">

                      <p class="text-white text-end fonts1 m-0" @click="toggleReply(comment.id)">
                        <i class="fa-solid fa-reply"></i> Reply
                      </p>
                    </div>
                    <div v-if="showReplyInput === comment.id">
                      <div class="input-group">
                        <input type="file" class="Reply-image d-none" id="rImage" @change="handleImageChange">
                        <span class="input-group-text" @click="openFileInput2">
                          <i data-v-2645ce9a="" class="fa-solid fa-image"></i>
                        </span>

                        <input class="form-control" type="text" v-model="replyText" placeholder="Type your reply here">
                        <span class=" input-group-text" @click="submitReply(comment.id)">
                          <svg xmlns="http://www.w3.org/2000/svg" class="" width="31.5" height="27"
                            viewBox="0 0 31.5 27">
                            <path id="Icon_material-send" data-name="Icon material-send"
                              d="M3.015,31.5,34.5,18,3.015,4.5,3,15l22.5,3L3,21Z" transform="translate(-3 -4.5)"
                              fill="#f95f19" />
                          </svg>
                        </span>
                      </div>
                      <p class="text-white mt-3 mb-0">All Replies</p>
                      <hr class="mt-0 " style="opacity:1">
                      <div class="p-2" v-for="reply in replies" :key="reply.id" v-show="comment.id == reply.comment_id">
                        <div class="replyBox row">
                          <div class="col-md-2">
                            <img :src="this.userImage" class="UsrImage" alt="user_image" width="50px"
                              style="object-fit:cover">
                          </div>
                          <div class="col-md-10">
                            <p class="uName m-0" v-if="reply.user_name">{{ reply.user_name }}</p>
                            <p class="sender-chats-para m-0 p-0" v-if="reply.comments">{{ reply.comments }}</p>
                            <img v-if="reply.image" :src="getImageUrl(reply.image)" alt="Comment Image"
                              class="CommentImage" @click="openViewer(reply.image)" />
                          </div>
                        </div>
                      </div>


                    </div>
                  </div>
                  <p v-else>No comments to display</p>
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
          <!-- <textarea v-model="newComment" id="inputComments" type="text" name="inputComments"
            class="form-control form-input inputComments"  :placeholder="$t('Enter here')"@keydown.enter="postComment"
            ref="commentTextarea"></textarea> -->
          <!-- Check if textarea is not empty -->

        </div>
        <form @submit.prevent="postComment" enctype="multipart/form-data" method="post" class="position-relative">
          <div class="form-group d-flex flex-column">
            <input type="text" class="form-control my-2" placeholder="Enter Comment" v-model="newComment" disabled
              v-if="imgLoading">
            <input type="text" class="form-control my-2" placeholder="Enter Comment" v-model="newComment" v-else>
            <div v-if="imgLoading" class="imgLoadingBox">
              <div class="box2"></div>
            </div>
            <div v-else>
              <input type="file" class="form-control-file my-2 d-none" @change="handleFileChange" ref="fileInput">
              <svg @click="postComment" xmlns="http://www.w3.org/2000/svg" class=" position-absolute send-icon"
                width="31.5" height="27" viewBox="0 0 31.5 27">
                <path id="Icon_material-send" data-name="Icon material-send"
                  d="M3.015,31.5,34.5,18,3.015,4.5,3,15l22.5,3L3,21Z" transform="translate(-3 -4.5)" fill="#f95f19" />
              </svg>
              <div class="upsection" v-if="imageUrl != ''">
                <div class="position-relative mainUp">
                  <img class="upImage" :src="imageUrl" alt="">
                  <span class="cancel" @click="removeImage"><i class="fa-solid fa-xmark"></i></span>
                </div>
              </div>
              <span class="image_icon" @click="openFileInput"><i class="fa-solid fa-image"></i></span>
            </div>
            <!-- <input type="submit" value="Post" class="btn my-2 "> -->

          </div>
        </form>
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
</template>

<script>
import CommunityDataService from "../services/CommunityDataService";
import axios from 'axios';

import CommentDataService from "../services/CommentDataService";

import Viewer from 'viewerjs';
import 'viewerjs/dist/viewer.css';
import moment from 'moment';
import userImage from "../assets/images/userImg.png"

export default {
  name: "CommunityDetail",

  data() {
    return {
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
  mounted() {
    this.fetchProfileData()
    this.id = this.$route.params.id
    this.getComments()
    this.isLiked()
    this.fetchCommunityData();
    this.addView()





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

    handleImageChange(event) {
      const file = event.target.files[0];

      // Do something with the selected file, like saving it to data or uploading it
      this.rImage = file;
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

    // get reply 
    getreply(commentId) {
      console.log("reply function is calling on id", commentId)
      axios.get(`https://clownfish-app-quehu.ondigitalocean.app/api/replies/replyall/${commentId}`)
        .then(response => {
          this.replies.push(...response.data);
        })
        .catch(error => {
          console.error('Error fetching replies:', error);
        });
    },
    submitReply(commentId) {
      const formData = new FormData()
      console.log(commentId);
      console.log(this.replyText);
      console.log(this.user_email);
      console.log(this.user_name);

      formData.append('comment_id', commentId); // Assuming `this.id` contains the community ID
      formData.append('comments', this.replyText); // Assuming `this.newComment` contains the new comment text
      formData.append('user_email', this.user_email);
      formData.append('user_name', this.user_name);
      formData.append('rimage', this.rImage);
      console.log("r_imag", this.rImage)

      // Log the form data
      console.log("formData", formData);

      axios.post('https://clownfish-app-quehu.ondigitalocean.app/api/replies/reply', formData, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
        .then(response => {
          // Handle success
          console.log('Post request successful of replies:', response.data);
          // Append the new comment to the comments array
          this.replies.push(response.data);
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
    //   axios.post('https://clownfish-app-quehu.ondigitalocean.app/api/replies/reply', formData)
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
      return `https://clownfish-app-quehu.ondigitalocean.app/${imagePath}`;
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
    openFileInput() {
      this.$refs.fileInput.click(); // Trigger click event on file input when icon is clicked
    },
    handleFileChange(event) {
      // Handle file change event and update this.image
      const file = event.target.files[0]; // Get the uploaded file
      // Check if a file is selected
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
        console.log("Profile data:", data);
        // this.userAttributes = data.result
        this.user_email = data.result.email;
        this.user_name = data.result.name;
        this.user_image = data.result.picture
        console.log(this.user_image)


        // console.log("userdata", this.user_name)


      } catch (error) {
        console.error("Error fetching profile data:", error);
      }
    },

    getComments() {
      const id = this.$route.params.id;
      CommentDataService.getAllByCommunity(id)
        .then(response => {
          this.comments = response.data;
          console.log("com ", this.comments)
          this.comments.forEach(comment => {
            this.getreply(comment.id);
          });

        })
        .catch(error => {
          console.error('Error fetching comments:', error);
        });
    },
    getCommentsonSubmit() {
      const id = this.$route.params.id;
      CommentDataService.getAllByCommunity(id)
        .then(response => {
          this.comments = response.data;
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
      // Set imgLoading to true before making the request
      console.log(this.user_image)
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
      formData.append('user_email', this.user_email);
      formData.append('user_name', this.user_name);
      formData.append('image', this.user_name);
      // formData.append('User_imagimage', this.user_image)


      // Check if formData is empty
      if (this.imageUrl == "" && this.newComment == "") {
        this.isModal2Open = true;
        this.imgLoading = false;
      } else {
        axios.post('https://clownfish-app-quehu.ondigitalocean.app/api/comments/comments', formData)
          .then(response => {
            // Handle success
            console.log('Post request successful:', response.data);
            // Append the new comment to the comments array
            this.comments.push(response.data);
            // Clear inputs
            this.newComment = "";
            this.imageUrl = "";

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

    ,


    addLike() {
      this.isloadingLike = true
      // Check if the like has already been added for this item in this session
      if (!localStorage.getItem('liked-' + this.id)) {
        const requestData = {
          id: this.id
        };
        axios.post('https://clownfish-app-quehu.ondigitalocean.app/api/communities/likes', requestData)
          .then(response => {
            // Handle success
            console.log('Post request successful:', response.data)
            this.isloadingLike = false

            // Set the flag in local storage with the respective ID
            localStorage.setItem('liked-' + this.id, true);
            console.log(`liked-${this.id}`)
            this.isLike = localStorage.getItem(`liked-${this.id}`);
            this.fetchCommunityData();
          })
          .catch(error => {
            // Handle error
            console.error('Error making post request:', error);
          });
      } else {
        // If the like has already been added, you may want to remove the like
        const requestData = {
          id: this.id
        };
        axios.post('https://clownfish-app-quehu.ondigitalocean.app/api/communities/dislikes', requestData)
          .then(response => {
            // Handle success
            console.log('Dislike request successful:', response.data);
            this.isloadingLike = false

            // Remove the flag from local storage
            localStorage.removeItem('liked-' + this.id);
            console.log(`Disliked-${this.id}`)
            this.isLike = false;
            this.fetchCommunityData();
          })
          .catch(error => {
            // Handle error
            console.error('Error making dislike request:', error);
          });
      }
    }
    ,
    addView() {
      const requestData = {
        id: this.id
      };
      axios.post('https://clownfish-app-quehu.ondigitalocean.app/api/communities/views', requestData)
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
  },


};
</script>

<style scoped>
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
  position: absolute;
  top: 18px;
  right: 55px;
  font-size: 28px;
  color: #F95F19;
}

.send-icon {
  top: 22px;
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
  width: 50px;
  height: 40px;
}

.cancel {
  position: absolute;
  right: 0;
  color: #d24200;
  transition: 0.2s all;
  cursor: pointer;
}

.cancel:hover {
  transform: scale(1.2);
  transition: 0.2s all;
  color: #fff;
}

.upsection {
  position: absolute;
  right: 100px;
  top: 20px
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
</style>
