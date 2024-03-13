<template>

  <section class="communityDetails-section my-5">
    <div class="container">
      <div class="communityDetailsMain">
        <div v-if="loading" class="d-flex justify-content-center">
          <div class="box"></div>
        </div>
        <div v-else class="communityDetails-bg">
          <img class="img-fluid d-block mx-auto" src="../assets/images/icons/audilogo.png" alt="" height="185px">
          <h1 class="h1make text-center"> {{ communityData.make }}</h1>
          <div class="img-communityDetails-div">
            <!-- Show loader image while the actual image is loading -->


            <!-- Show the actual image when it's loaded -->
            <!-- <img :src="`https://buzzwaretech.com/revadmin/uploads/${communityData.image}`" class="img-communityDetailsn"
              alt="Image" @load="imageLoaded" /> -->

          </div>
          <div class="communityDetails-content py-4">
            <div class="card-title-div">

              <h2 class="card-title-h2 community-title">

                <!-- Koenigsegg agera one: <span> 1 </span> -->
                {{ communityData.make }} <span> {{ communityData.model }}</span>
              </h2>

              <div class=" d-flex card-title-h2">

                <p class=" my-0">
                  {{ communityData.production_years }}
                </p>
                <p class=" community-title card-title-h2 my-0 ms-2"> {{
          communityData.generation }}</p>
              </div>
            </div>
            <div class="map-para-div community-para-div">
              <p class="map-para community-para">
                {{ communityData.description }}
              </p>
            </div>
            <div class="list-community-add">
              <div class="like-community">
                <i class="fa-solid fa-thumbs-up" @click="addLike" v-bind:class="{ 'like': isLike }"></i>
                <span class="total-likes">{{ communityData.likes
                  }}</span>
              </div>
              <div class="like-community">
                <i class="fa-solid fa-comments"></i><span class="total-likes">{{ communityData.comments }}</span>
              </div>
              <div class="like-community">
                <i class="fa-solid fa-eye"></i><span class="total-likes">{{ communityData.views }}</span>
              </div>
            </div>
          </div>
          <div class="communityDetails-chatContent" id="chat-messages" ref="chatContainer">
            <!-- <div v-for="(message, index) in messages" :key="index"  class="sender-chats"> -->
            <div v-for="comment in comments" :key="comment.comments">


              <div v-if="comment.user_email == this.user_email" class="receiver-chats">
                <p class="receiver-chats-para">
                  {{ comment.comments }}

                </p>



              </div>
              <div v-else class="sender-chats">
                <p class="sender-chats-para">
                  {{ comment.comments }}

                </p>



              </div>
            </div>



          </div>
        </div>
        <div class="commentsByReceiver position-relative">
          <textarea v-model="newComment" id="inputComments" type="text" name="inputComments"
            class="form-control form-input inputComments" placeholder="Enter here" @keydown.enter="postComment"
            ref="commentTextarea"></textarea>
          <!-- Check if textarea is not empty -->
          <svg v-if="newComment.trim().length > 0" @click="postComment" xmlns="http://www.w3.org/2000/svg"
            class="iconMaterialSend position-absolute send-icon" width="31.5" height="27" viewBox="0 0 31.5 27">
            <path id="Icon_material-send" data-name="Icon material-send"
              d="M3.015,31.5,34.5,18,3.015,4.5,3,15l22.5,3L3,21Z" transform="translate(-3 -4.5)" fill="#f95f19" />
          </svg>
        </div>
      </div>
    </div>
  </section>


  <!-- <script>
    var mySwiper = new Swiper(".swiper-container", {
      // Optional configuration options
      slidesPerView: 1, // Number of slides per view
      spaceBetween: 10, // Space between slides
      loop: true, // Infinite loop
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  </script> -->
</template>

<script>
import CommunityDataService from "../services/CommunityDataService";
import axios from 'axios';

import CommentDataService from "../services/CommentDataService";

export default {
  name: "CommunityDetail",

  data() {
    return {
      communityData: [],
      loading: true, // Initially set to true to show loader image,
      id: "",
      isLike: false,
      user_email: "",
      comments: [],
      newComment: "",
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
    getComments() {
      const id = this.$route.params.id



      CommentDataService.getAllByCommunity(id)
        .then(response => {

          this.comments = response.data
          console.log("comments", this.comments)

        })
        .catch(error => {
          // Handle error
          console.error('Error making post request:', error);
        });
    },
    postComment() {
      const requestData = {
        community_id: this.id, // Assuming `this.id` contains the community ID
        comments: this.newComment, // Assuming `this.newComment` contains the new comment text
        user_email: this.user_email
      };

      axios.post('http://137.184.111.69:5000/api/comments/comments', requestData)
        .then(response => {
          // Handle success
          console.log('Post request successful:', response.data);
          // Optionally, update the comments data with the response data if needed
          // this.comments = response.data;
          this.comments = response.data
          this.newComment = ""
          this.getComments()
        })
        .catch(error => {
          // Handle error
          console.error('Error making post request:', error);
        });
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
            this.isLike = true;

            // Set the flag in local storage with the respective ID
            localStorage.setItem('liked-' + this.id, true);
          })
          .catch(error => {
            // Handle error
            console.error('Error making post request:', error);
          });
      } else {
        // If the like has already been added, you may want to show a message or handle the situation differently
        console.log('Like already added for this item.');
        this.isLike = true

      }
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
    scrollToBottom() {
      // Scroll to the bottom of the chat container
      const chatContainer = this.$refs.chatContainer;
      if (chatContainer) {
        chatContainer.scrollTop = chatContainer.scrollHeight;
      }
    },
    fetchCommunityData() {
      const id = this.$route.params.id; // Get the community id from the route parameters
      CommunityDataService.get(id)
        .then(response => {
          // Set the fetched community data to the component's data
          this.communityData = response.data;
          // console.log("data", this.communityData)
          this.loading = false;
        })
        .catch(error => {
          console.error('Error fetching community data:', error);
        });

    }
  },

  watch: {
    // Watch for changes in messages and scroll to bottom when messages change
    messages() {
      this.$nextTick(() => {
        this.scrollToBottom();
      });
    }
  }
};
</script>

<style scoped>
.like-community {
  cursor: pointer;
}

.h1make {
  color: #FF7A00
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

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
</style>
