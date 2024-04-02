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

                    <!-- Koenigsegg agera one: <span> 1 </span> -->
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
                    <div class="like-community">
                      <i class="fa-solid fa-thumbs-up" @click="addLike" v-bind:class="{ 'like': isLike }"></i>
                      <small v-if="isLike">Liked</small>
                      <small v-else>Like</small>
                      <span class="total-likes">{{ communityData.likes
                        }}</span>
                    </div>
                    <div class="like-community">
                      <i class="fa-solid fa-comments"></i>
                      <small>Comments</small>
                      <!-- <span class="total-likes">{{ communityData.comments }}</span> -->
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

              <div v-for="comment in comments" :key="comment.comments">
                <div v-if="comment.user_email == user_email" class="d-flex flex-column">
                  <div class="receiver-chats ">
                    <p class="receiver-chats-para">
                      {{ comment.comments }}
                    </p>
                    <img v-if="comment.image" :src="'http://137.184.111.69:5000/' + comment.image" alt="Comment Image"
                      class="CommentImage">
                  </div>
                </div>
                <div v-else class="d-flex flex-column">
                  <div class="sender-chats">
                    <p class="sender-chats-para">
                      {{ comment.comments }}
                    </p>
                    <img v-if="comment.image" :src="'http://137.184.111.69:5000/' + comment.image" alt="Comment Image"
                      class="CommentImage">
                  </div>
                </div>
              </div>



            </div>
          </div>

        </div>
        <div class="commentsByReceiver position-relative">
          <!-- <textarea v-model="newComment" id="inputComments" type="text" name="inputComments"
            class="form-control form-input inputComments" placeholder="Enter here" @keydown.enter="postComment"
            ref="commentTextarea"></textarea> -->
          <!-- Check if textarea is not empty -->

        </div>
        <form @submit.prevent="postComment" enctype="multipart/form-data" method="post" class="position-relative">
          <div class="form-group d-flex flex-column">

            <input type="text" class="form-control my-2" placeholder="Enter Comment" v-model="newComment">
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
</template>

<script>
import CommunityDataService from "../services/CommunityDataService";
import axios from 'axios';

import CommentDataService from "../services/CommentDataService";

export default {
  name: "CommunityDetail",

  data() {
    return {
      isModal2Open: false,
      imageUrl: '',
      communityData: [],
      loading: true, // Initially set to true to show loader image,
      id: "",
      isLike: false
      ,
      user_email: "",
      comments: [],
      newComment: "",
      image: null,
      nspeakers: ''
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
        // console.log("Profile data:", data);
        // this.userAttributes = data.result
        this.user_email = data.result.email
        // console.log("userdata", this.user_email)


      } catch (error) {
        console.error("Error fetching profile data:", error);
      }
    },
    // getComments() {

    //   const id = this.$route.params.id



    //   CommentDataService.getAllByCommunity(id)
    //     .then(response => {

    //       this.comments = response.data
    //       console.log("comments number", this.comments)



    //     })
    //     .catch(error => {
    //       // Handle error
    //       console.error('Error making post request:', error);
    //     });
    // },
    getComments() {
      const id = this.$route.params.id;
      CommentDataService.getAllByCommunity(id)
        .then(response => {
          this.comments = response.data;

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
    // postComment() {
    //   // Create FormData object to handle file upload
    //   // if (this.$refs.fileInput.files[0] == "") {
    //   //   const requestData = {
    //   //     community_id: this.id, // Assuming `this.id` contains the community ID
    //   //     comments: this.newComment, // Assuming `this.newComment` contains the new comment text
    //   //     user_email: this.user_email
    //   //   };

    //   //   axios.post('http://137.184.111.69:5000/api/comments/comments', requestData)
    //   //     .then(response => {
    //   //       // Handle success
    //   //       console.log('Post request successful:', response.data);
    //   //       // Optionally, update the comments data with the response data if needed
    //   //       // this.comments = response.data;
    //   //       this.comments = response.data
    //   //       this.newComment = ""
    //   //       this.getComments()
    //   //     })
    //   //     .catch(error => {
    //   //       // Handle error
    //   //       console.error('Error making post request:', error);
    //   //     });
    //   // }



    //   const formData = new FormData();
    //   formData.append('image', this.$refs.fileInput.files[0]); // Append the selected file

    //   // Append other data to the FormData object
    //   formData.append('community_id', this.id); // Assuming `this.id` contains the community ID
    //   formData.append('comments', this.newComment); // Assuming `this.newComment` contains the new comment text
    //   formData.append('user_email', this.user_email);

    //   // Send the FormData object containing file and other data via POST request
    //   axios.post('http://137.184.111.69:5000/api/comments/comments', formData)
    //     .then(response => {
    //       // Handle success
    //       console.log('Post request successful:', response.data);
    //       // Optionally, update the comments data with the response data if needed
    //       // this.comments = response.data;
    //       this.comments = response.data
    //       this.newComment = "";
    //       this.getComments();
    //       this.imageUrl = ""


    //     })
    //     .catch(error => {
    //       // Handle error
    //       console.error('Error making post request:', error);
    //     });
    //   this.getComments()
    // },
    // postComment() {
    //   const formData = new FormData();
    //   formData.append('image', this.$refs.fileInput.files[0]); // Append the selected file

    //   // Append other data to the FormData object
    //   formData.append('community_id', this.id); // Assuming `this.id` contains the community ID
    //   formData.append('comments', this.newComment); // Assuming `this.newComment` contains the new comment text
    //   formData.append('user_email', this.user_email);

    //   // Send the FormData object containing file and other data via POST request
    //   axios.post('http://137.184.111.69:5000/api/comments/comments', formData)
    //     .then(response => {
    //       // Handle success
    //       console.log('Post request successful:', response.data);
    //       // Update the comments data with the response data if needed
    //       this.comments = response.data;
    //       // Clear inputs
    //       this.newComment = "";
    //       this.imageUrl = "";
    //       this.$refs.fileInput.value = ''
    //       // Trigger necessary function
    //       this.getComments();
    //     })
    //     .catch(error => {
    //       // Handle error
    //       console.error('Error making post request:', error);
    //     });
    // },

    // postComment() {
    //   const formData = new FormData();
    //   formData.append('image', this.$refs.fileInput.files[0]); // Append the selected file

    //   // Append other data to the FormData object
    //   formData.append('community_id', this.id); // Assuming `this.id` contains the community ID
    //   formData.append('comments', this.newComment); // Assuming `this.newComment` contains the new comment text
    //   formData.append('user_email', this.user_email);

    //   // Check if formData is empty
    //   if (this.imageUrl == "" && this.newComment == "") {
    //     this.isModal2Open = true
    //   }

    //   else {
    //     axios.post('http://137.184.111.69:5000/api/comments/comments', formData)
    //       .then(response => {
    //         // Handle success
    //         console.log('Post request successful:', response.data);
    //         // Update the comments data with the response data if needed
    //         this.comments = response.data;
    //         // Clear inputs
    //         this.newComment = "";
    //         this.imageUrl = "";
    //         this.$refs.fileInput.value = '';
    //         // Trigger necessary function
    //         this. getCommentsonSubmit()



    //       })
    //       .catch(error => {
    //         // Handle error
    //         console.error('Error making post request:', error);
    //       });
    //   }



    // }
    // ,

    postComment() {
      const formData = new FormData();
      formData.append('image', this.$refs.fileInput.files[0]); // Append the selected file
      formData.append('community_id', this.id); // Assuming `this.id` contains the community ID
      formData.append('comments', this.newComment); // Assuming `this.newComment` contains the new comment text
      formData.append('user_email', this.user_email);

      // Check if formData is empty
      if (this.imageUrl == "" && this.newComment == "") {
        this.isModal2Open = true;
      } else {
        axios.post('http://137.184.111.69:5000/api/comments/comments', formData)
          .then(response => {
            // Handle success
            console.log('Post request successful:', response.data);
            // Append the new comment to the comments array
            this.comments.push(response.data);
            // Clear inputs
            this.newComment = "";
            this.imageUrl = "";
            this.$refs.fileInput.value = '';
            this.$nextTick(() => {
              this.scrollToBottom();
            });
          })
          .catch(error => {
            // Handle error
            console.error('Error making post request:', error);
          });
      }
    },

    addLike() {
      // Check if the like has already been added for this item in this session

      if (!localStorage.getItem('liked-' + this.id)) {
        const requestData = {
          id: this.id
        };
        axios.post('http://137.184.111.69:5000/api/communities/likes', requestData)
          .then(response => {
            // Handle success
            console.log('Post request successful:', response.data);

            // Set the flag in local storage with the respective ID
            localStorage.setItem('liked-' + this.id, true);
            console.log(`liked-${this.id}`)
            this.isLike = localStorage.getItem(`liked-${this.id}`);
            this.fetchCommunityData()

          })
          .catch(error => {
            // Handle error
            console.error('Error making post request:', error);
          });
      } else {
        // If the like has already been added, you may want to show a message or handle the situation differently
        console.log('Like already added for this item.');
        this.isLike = localStorage.getItem(`liked-${this.id}`);

        console.log()

      }
    },
    addView() {
      const requestData = {
        id: this.id
      };
      axios.post('http://137.184.111.69:5000/api/communities/views', requestData)
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

.like-community {
  cursor: pointer;
}

.h1make {
  color: #FF7A00;

}

.like-community :hover {
  color: #FF7A00
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
  border: 1px solid #FF7A00
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
</style>
