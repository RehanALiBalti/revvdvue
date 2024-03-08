<template>

  <section class="communityDetails-section my-5">
    <div class="container">
      <div class="communityDetailsMain">
        <div class="communityDetails-bg">
          <div class="img-communityDetails-div">
            <img :src="imageSrc" class="img-communityDetails" alt="Image" />
          </div>
          <div class="communityDetails-content py-4">
            <div class="card-title-div">
              <h2 class="card-title-h2 community-title">
                <!-- Koenigsegg agera one: <span> 1 </span> -->
                {{ communityTitle }}: <span> {{ communityNumber }} </span>
              </h2>
            </div>
            <div class="map-para-div community-para-div">
              <p class="map-para community-para">
                {{ communityContent }}
              </p>
            </div>
            <div class="list-community-add">
              <div class="like-community">
                <i class="fa-solid fa-thumbs-up"></i><span class="total-likes">{{ likes }}</span>
              </div>
              <div class="like-community">
                <i class="fa-solid fa-comments"></i><span class="total-likes">{{ comments }}</span>
              </div>
              <div class="like-community">
                <i class="fa-solid fa-eye"></i><span class="total-likes">{{ views }}</span>
              </div>
            </div>
          </div>
          <div class="communityDetails-chatContent" id="chat-messages" ref="chatContainer">
            <!-- <div v-for="(message, index) in messages" :key="index"  class="sender-chats"> -->
            <div v-for="(message, index) in messages" :key="index" :class="message.class">
              <p class="sender-chats-para">
                {{ message.text }}
              </p>
            </div>
            <!-- <div class="receiver-chats">
              <p class="receiver-chats-para">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s,
              </p>
            </div>
            <div class="sender-chats">
              <p class="sender-chats-para">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s,
              </p>
            </div>
            <div class="receiver-chats">
              <p class="receiver-chats-para">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s,
              </p>
            </div>
            <div class="sender-chats">
              <p class="sender-chats-para">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s,
              </p>
            </div> -->
          </div>
        </div>
        <div class="commentsByReceiver position-relative">
          <textarea v-model="newComment" id="inputComments" type="text" name="inputComments"
            class="form-control form-input inputComments" placeholder="Enter here" @keydown.enter="sendMessageOnEnter"
            ref="commentTextarea"></textarea>
          <!-- Check if textarea is not empty -->
          <svg v-if="newComment.trim().length > 0" @click="sendMessage" xmlns="http://www.w3.org/2000/svg"
            class="iconMaterialSend position-absolute send-icon" width="31.5" height="27" viewBox="0 0 31.5 27">
            <path id="Icon_material-send" data-name="Icon material-send"
              d="M3.015,31.5,34.5,18,3.015,4.5,3,15l22.5,3L3,21Z" transform="translate(-3 -4.5)" fill="#f95f19" />
          </svg>
        </div>
      </div>
    </div>
  </section>

  <div class="container mt-5 mb-3">
    <div class="map-desc">
      <div class="map-para-div">
        <p class="map-para">
          Lorem Ipsum is simply dummy text of the printing & typesetting
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

import communityDetailsImage from "@/assets/images/communityDetailsImage.png";

export default {
  name: "CommunityDetail",

  data() {
    return {
      imageSrc: communityDetailsImage,
      communityTitle: "Koenigsegg agera one",
      communityNumber: "1",
      communityContent:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      likes: 465,
      comments: 465,
      views: 465,
      messages: [
        {
          text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
          class: "sender-chats",
        },
        {
          text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
          class: "receiver-chats",
        },
        {
          text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
          class: "sender-chats",
        },
        {
          text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
          class: "receiver-chats",
        },
        {
          text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
          class: "sender-chats",
        },
      ],
      newComment: "",
    };
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
  },
  mounted() {
    this.scrollToBottom();
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

<style scoped></style>
