<template>
  <section class="header">

    <nav class="navbar navbar-expand-lg sticky-top p-3">
      <div class="container">
        <router-link class="navbar-brand" to="/">
          <img class="logo-header" src="@/assets/images/RevvdoutLogo.svg" alt="Logo" draggable="false" height="30" />

        </router-link>
        <button class="navbar-toggler" type="button" aria-controls="navbarNavDropdown" aria-expanded="false"
          aria-label="Toggle navigation" @click="toggleNav">
          <span class="icon">
            <i class="fa-solid fa-bars"></i>
          </span>
        </button>
        <div class="collapse navbar-collapse" :class="{ 'show': isNavOpen }" id="navbarNavDropdown">


          <ul class="navbar-nav ul-list ms-auto">
            <li class="list-item-btn position-relative">
              <router-link class="nav-link" to="/">
                <svg xmlns="http://www.w3.org/2000/svg" class="home-icon-svg" width="29" height="32"
                  viewBox="0 0 29 32">
                  <g id="Icon_feather-home" data-name="Icon feather-home" transform="translate(-3.5 -2)">
                    <path id="Path_1085" data-name="Path 1085"
                      d="M4.5,13.5,18,3,31.5,13.5V30a3,3,0,0,1-3,3H7.5a3,3,0,0,1-3-3Z" fill="none" stroke="#fff"
                      stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                    <path id="Path_1086" data-name="Path 1086" d="M13.5,33V18h9V33" fill="none" stroke="#fff"
                      stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                  </g>
                </svg>
              </router-link>
            </li>

            <li class="list-item-btn position-relative" v-if="isLogin == false">
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
              <router-link to="/signin" class="signin-btnli">
                {{ $t('signIn') }}
              </router-link>
              <span class="border-bottom-btn border-left-btn position-absolute">
                <img src="@/assets/images/Group11.png" class="img-border position-absolute" alt="" />
              </span>
              <span class="border-bottom-btn position-absolute">
                <img src="@/assets/images/Path473.png" class="img-border position-absolute" alt="" />
              </span>
            </li>

            <li class="list-item-btn position-relative" v-if="isLogin == false">
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
              <router-link to="/signup" class="signin-btnli signup-btnli">
                {{ $t('signUp') }}
              </router-link>
              <span class="border-bottom-btn border-left-btn position-absolute">
                <img src="@/assets/images/Group11white.png" class="img-border position-absolute" alt="" />
              </span>
              <span class="border-bottom-btn position-absolute">
                <img src="@/assets/images/Path473white.png" class="img-border position-absolute" alt="" />
              </span>
            </li>

            <li class="list-item-btn position-relative" v-if="isLogin == true">
              <div class="custom-select" @click="toggleDropdown" :class="{ open: isOpen }">
                <span class="dropdown-toggle" :class="{ up: isOpen }">{{ selectedLanguage }}</span>
                <ul class="custom-options" v-show="isOpen" @click.stop id="country-language-selector"
                  :class="{ open: isOpen }">
                  <li v-for="language in languages" :key="language.code" @click="selectLanguage(language.code)">
                    {{ language.name }}
                  </li>
                </ul>
              </div>
            </li>

            <li class="list-item-btn position-relative" v-if="isLogin == true">
              <div class="user-custom-box" @click="toggleDropdownUser" :class="{ open: issOpen }">
                <div class="user-content-inner">
                  <div class="user-img-div">
                    <img src="@/assets/images/userImg.png" class="user-img" alt="" />
                  </div>
                  <span class="user-name" :class="{ open: issOpen }">John</span>
                </div>
                <ul class="user-dropdown" :class="{ open: issOpen }" id="userDropdown">
                  <li data-code="profile">
                    <router-link class="userListATag" to="/profile">
                      {{ $t('profile') }}
                    </router-link>
                  </li>
                  <li data-code="myAdds">
                    <router-link class="userListATag" to="/myCarListing">
                      {{ $t('myAdds') }}
                    </router-link>
                  </li>
                  <li data-code="signOut">
                    <router-link class="userListATag" to="/signin" @click="logout">
                      {{ $t('signOut') }}
                    </router-link>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </section>
</template>

<script>
// export default {
//   name: "HeaderItem",
//   data() {
//     return {
//       isOpen: false,
//       issOpen: false,
//       isNavOpen: false,
//       selectedLanguage: "en",
//       isLogin: JSON.parse(localStorage.getItem('login')) || false // Initialize with value from local storage or default to false
//       ,
//       languages: [
//         { code: "en", name: "en" },
//         { code: "fr", name: "fr" },
//         { code: "de", name: "de" },
//       ],
//     };
//   },
//   created() {
//     // Retrieve the value from local storage during component creation
//     const storedIsLogin = localStorage.getItem('login');
//     if (storedIsLogin !== null) {
//       this.isLogin = JSON.parse(storedIsLogin); // Parse the stored value
//     }
//   },

//   methods: {
//     handleStorageChange(event) {
//       if (event.key === 'login') {
//         this.isLogin = JSON.parse(event.newValue);
//       }
//     },
//     toggleNav() {
//       this.isNavOpen = !this.isNavOpen;
//     },
//     toggleDropdownUser() {
//       this.issOpen = !this.issOpen;

//     },
//     toggleDropdown() {
//       this.isOpen = !this.isOpen;
//     },
//     selectLanguage(code) {
//       this.$i18n.locale = this.selectedLanguage = this.languages.find(
//         (lang) => lang.code === code
//       ).name;
//       this.isOpen = false;
//     },
//     closeDropdown(event) {
//       if (!this.$el.contains(event.target)) {
//         this.isOpen = false;
//       }
//     },
//     closeDropdownUser(event) {
//       if (!this.$el.contains(event.target)) {
//         this.issOpen = false;
//       }
//     },
//     logout() {
//       this.isLogin = false; // Set isLogin to false
//       localStorage.removeItem('login'); // Remove the 'isLogin' key from local storage
//     }
//   },
//   mounted() {
//     document.addEventListener("click", this.closeDropdown);
//     document.addEventListener("click", this.closeDropdownUser);
//     window.addEventListener('storage', this.handleStorageChange);
//     const storedIsLogin = localStorage.getItem('login');
//     if (storedIsLogin !== null) {
//       this.isLogin = JSON.parse(storedIsLogin); // Parse the stored value
//     }
//   },
//   beforeUnmount() {
//     document.removeEventListener("click", this.closeDropdown);
//     document.removeEventListener("click", this.closeDropdownUser);
//     window.addEventListener('storage', this.handleStorageChange);
//     const storedIsLogin = localStorage.getItem('login');
//     if (storedIsLogin !== null) {
//       this.isLogin = JSON.parse(storedIsLogin); // Parse the stored value
//     }
//   },

// }

export default {
  name: "HeaderItem",
  data() {
    return {
      isOpen: false,
      issOpen: false,
      isNavOpen: false,
      selectedLanguage: "en",
      isLogin: JSON.parse(localStorage.getItem('login')) || false, // Initialize with value from local storage or default to false
      languages: [
        { code: "en", name: "en" },
        { code: "fr", name: "fr" },
        { code: "de", name: "de" },
      ],
    };
  },
  computed: {


  },
  created() {
    // Retrieve the value from local storage during component creation
    const storedIsLogin = localStorage.getItem('login');
    if (storedIsLogin !== null) {
      this.isLogin = JSON.parse(storedIsLogin); // Parse the stored value
    }
  },
  methods: {
    handleStorageChange(event) {
      if (event.key === 'login') {
        this.isLogin = JSON.parse(event.newValue);
      }
    },
    toggleNav() {
      this.isNavOpen = !this.isNavOpen;
    },
    toggleDropdownUser() {
      this.issOpen = !this.issOpen;
    },
    toggleDropdown() {
      this.isOpen = !this.isOpen;
    },
    selectLanguage(code) {
      this.$i18n.locale = this.selectedLanguage = this.languages.find(
        (lang) => lang.code === code
      ).name;
      this.isOpen = false;
    },
    closeDropdown(event) {
      if (!this.$el.contains(event.target)) {
        this.isOpen = false;
      }
    },
    closeDropdownUser(event) {
      if (!this.$el.contains(event.target)) {
        this.issOpen = false;
      }
    },
    logout() {
      this.isLogin = false; // Set isLogin to false
      localStorage.removeItem('login'); // Remove the 'isLogin' key from local storage
    }
  },
  mounted() {
    document.addEventListener("click", this.closeDropdown);
    document.addEventListener("click", this.closeDropdownUser);
    window.addEventListener('storage', this.handleStorageChange);
  },
  beforeUnmount() {
    document.removeEventListener("click", this.closeDropdown);
    document.removeEventListener("click", this.closeDropdownUser);
    window.removeEventListener('storage', this.handleStorageChange); // Remove the event listener
  },
}

</script>


<style scoped>
@media screen and (max-width: 991px) {
  .navbar-toggler {
    padding: 0.25rem 0.75rem;
    font-size: 1.25rem;
    line-height: 1;
    background-color: #ffffff;
    border: 1px solid transparent;
    border-radius: 0.25rem;
    transition: box-shadow 0.15s ease-in-out;
    cursor: pointer;
  }

  .navbar-toggler .icon i {
    display: flex;
    justify-content: center;

    vertical-align: middle;
    background-repeat: no-repeat;
    background-position: center;
    background-size: 100%;
    align-items: center;
    color: #FF7A00;
    font-size: 15px;
    font-weight: 700;

  }
}
</style>
