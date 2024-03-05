<!-- Header.vue -->

<template>
  <section class="header">
    <!-- <div class="superNav py-4">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 centerOnMobile">
                        <form class="from-search">
                            <div class="input-group search-div">
                                <input type="text" id="searchInput" class="form-control input-control" placeholder="Search">
                                     <button class="btn btn-warning text-white">Search</button> -->
    <!-- <button type="button" class="input-group-text text-white icon-span" id="searchButton">
                                    <i class="fa-solid fa-magnifying-glass"></i>
                                </button> -->
    <!-- <span class="input-group-text text-white icon-span"><i class="fa-solid fa-magnifying-glass"></i></span> -->
    <!-- </div>
                        </form>
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 text-end">
                        <div class="btns-sign">
                            <a href="#" class="btn signin"> Sign In </a>
                            <a href="#" class="btn signin signup"> Sign Up </a>
                        </div>
                    </div>
                </div>
            </div> -->
    <!-- </div> -->
    <nav class="navbar navbar-expand-lg sticky-top p-3">
      <div class="container">
        <router-link class="navbar-brand" to="offer">
          <img
            class="logo-header"
            src="@/assets/images/RevvdoutLogo.svg"
            alt="Logo"
            draggable="false"
            height="30"
          />
          <!-- <img class="logo-header" src="<?= base_url('/assets/images/RevvdoutLogo.svg') ?>" alt="Logo" draggable="false" height="30" /> -->
          <!-- <img class="logo-header" id="logo" src="<?= base_url('/assets/images/logo.png') ?>" alt="Logo" draggable="false" height="30" /> -->
        </router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon">
            <i class="fa-solid fa-bars"></i>
          </span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <!-- <ul class="navbar-nav mx-auto">
                            <li class="nav-item">
                                <a class="nav-link mx-2 text-uppercase active" aria-current="page" href="#">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link mx-2 text-uppercase" href="#">About Us</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link mx-2 text-uppercase" href="#">Car Listing</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link mx-2 text-uppercase" href="#">Contact Us</a>
                            </li>
                        </ul> -->

          <ul class="navbar-nav ul-list ms-auto">
            <li class="list-item-btn position-relative">
              <router-link class="nav-link" to="/home1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="home-icon-svg"
                  width="29"
                  height="32"
                  viewBox="0 0 29 32"
                >
                  <g
                    id="Icon_feather-home"
                    data-name="Icon feather-home"
                    transform="translate(-3.5 -2)"
                  >
                    <path
                      id="Path_1085"
                      data-name="Path 1085"
                      d="M4.5,13.5,18,3,31.5,13.5V30a3,3,0,0,1-3,3H7.5a3,3,0,0,1-3-3Z"
                      fill="none"
                      stroke="#fff"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                    />
                    <path
                      id="Path_1086"
                      data-name="Path 1086"
                      d="M13.5,33V18h9V33"
                      fill="none"
                      stroke="#fff"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                    />
                  </g>
                </svg>
              </router-link>
            </li>

            <li class="list-item-btn position-relative">
              <span class="border-bottom-btn border-top-btn position-absolute">
                <img
                  src="@/assets/images/Group12.png"
                  class="img-border position-absolute"
                  alt=""
                />
              </span>

              <span
                class="border-bottom-btn border-top-btn border-right-radius position-absolute"
              >
                <img
                  src="@/assets/images/Path467.png"
                  class="img-border position-absolute"
                  alt=""
                />
              </span>

              <span
                class="border-bottom-btn border-top-btn border-right-radius border-right-bottom-radius position-absolute"
              >
                <img
                  src="@/assets/images/Path465.png"
                  class="img-border position-absolute"
                  alt=""
                />
              </span>
              <router-link to="/signin" class="signin-btnli">
                Sign In
              </router-link>
              <span class="border-bottom-btn border-left-btn position-absolute">
                <img
                  src="@/assets/images/Group11.png"
                  class="img-border position-absolute"
                  alt=""
                />
              </span>
              <span class="border-bottom-btn position-absolute">
                <img
                  src="@/assets/images/Path473.png"
                  class="img-border position-absolute"
                  alt=""
                />
              </span>
            </li>

            <li class="list-item-btn position-relative">
              <span class="border-bottom-btn border-top-btn position-absolute">
                <img
                  src="@/assets/images/Group12white.png"
                  class="img-border position-absolute"
                  alt=""
                />
              </span>

              <span
                class="border-bottom-btn border-top-btn border-right-radius position-absolute"
              >
                <img
                  src="@/assets/images/Path467white.png"
                  class="img-border position-absolute"
                  alt=""
                />
              </span>

              <span
                class="border-bottom-btn border-top-btn border-right-radius border-right-bottom-radius position-absolute"
              >
                <img
                  src="@/assets/images/Path465white.png"
                  class="img-border position-absolute"
                  alt=""
                />
              </span>
              <router-link to="/signup" class="signin-btnli signup-btnli">
                Sign Up
              </router-link>
              <span class="border-bottom-btn border-left-btn position-absolute">
                <img
                  src="@/assets/images/Group11white.png"
                  class="img-border position-absolute"
                  alt=""
                />
              </span>
              <span class="border-bottom-btn position-absolute">
                <img
                  src="@/assets/images/Path473white.png"
                  class="img-border position-absolute"
                  alt=""
                />
              </span>
            </li>

            <li class="list-item-btn position-relative">
              <div class="custom-select">
                <span>En</span>
                <ul class="custom-options" id="country-language-selector">
                  <!-- Add your language options here -->
                </ul>
              </div>
            </li>

            <li class="list-item-btn position-relative">
              <div class="user-custom-box">
                <div class="user-content-inner">
                  <div class="user-img-div">
                    <img
                      src="@/assets/images/userImg.png"
                      class="user-img"
                      alt=""
                    />
                  </div>
                  <span class="user-name">John</span>
                </div>
                <ul class="user-dropdown" id="userDropdown">
                  <li data-code="profile">
                    <router-link class="userListATag" to="/profile">
                      Profile
                    </router-link>
                  </li>
                  <li data-code="myAdds">
                    <router-link class="userListATag" to="/myCarListing">
                      My Adds
                    </router-link>
                  </li>
                  <li data-code="signOut">
                    <router-link class="userListATag" to="/signin">
                      Sign Out
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
export default {
  name: "HeaderItem",
};
</script>
