<!-- =========================================================================================
    File Name: Chat.vue
    Description: Chat Application - Stay connected
    ----------------------------------------------------------------------------------------
     
========================================================================================== -->

<template>
  <div
    id="chat-app"
    class=" d-theme-border-grey-light rounded relative overflow-hidden"
  >
    <div class="vx-row">
      <div class="w-full md:w-8/12 lg:w-9/12 xl:w-9/12 chat-area">
        <vs-sidebar
          class="items-no-padding "
          parent="#chat-app"
          :click-not-close="clickNotClose"
          :hidden-background="clickNotClose"
          v-model="isChatSidebarActive"
          id="chat-list-sidebar"
        >
          <!-- USER PROFILE SIDEBAR -->
          <user-profile
            :active="activeProfileSidebar"
            :userId="userProfileId"
            class="user-profile-container"
            :isLoggedInUser="isLoggedInUserProfileView"
            @closeProfileSidebar="closeProfileSidebar"
          ></user-profile>

          <div class="chat__profile-search flex p-4 chat-nav-hight">
            <div class="flex items-center justify-between w-full">
              <h3 class=" gray-500 font-normal font-20 futura-md-bt">
                Chats
              </h3>
              <vs-button
                class="bg-blue-600  new-chat-btn"
                @click="newClient = true"
              >
                <svg
                  class="mr-2"
                  width="16"
                  height="15"
                  viewBox="0 0 16 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.6 0H2.4C1.76348 0 1.15303 0.249792 0.702944 0.694425C0.252856 1.13906 0 1.74211 0 2.37092V10.274C0 10.9028 0.252856 11.5058 0.702944 11.9505C1.15303 12.3951 1.76348 12.6449 2.4 12.6449H9.928C10.0848 12.6461 10.2378 12.6928 10.368 12.7792L13.296 14.7076C13.5817 14.8988 13.9189 15.0007 14.264 15C14.544 14.9994 14.8192 14.9287 15.064 14.7945C15.3454 14.6522 15.5816 14.436 15.7467 14.1697C15.9118 13.9034 15.9995 13.5973 16 13.285V2.37092C16 1.74211 15.7471 1.13906 15.2971 0.694425C14.847 0.249792 14.2365 0 13.6 0ZM10.4 8.69336H5.6C5.38783 8.69336 5.18434 8.6101 5.03431 8.46188C4.88429 8.31367 4.8 8.11266 4.8 7.90305C4.8 7.69345 4.88429 7.49243 5.03431 7.34422C5.18434 7.19601 5.38783 7.11275 5.6 7.11275H10.4C10.6122 7.11275 10.8157 7.19601 10.9657 7.34422C11.1157 7.49243 11.2 7.69345 11.2 7.90305C11.2 8.11266 11.1157 8.31367 10.9657 8.46188C10.8157 8.6101 10.6122 8.69336 10.4 8.69336ZM10.4 5.53214H5.6C5.38783 5.53214 5.18434 5.44887 5.03431 5.30066C4.88429 5.15245 4.8 4.95143 4.8 4.74183C4.8 4.53223 4.88429 4.33121 5.03431 4.183C5.18434 4.03479 5.38783 3.95153 5.6 3.95153H10.4C10.6122 3.95153 10.8157 4.03479 10.9657 4.183C11.1157 4.33121 11.2 4.53223 11.2 4.74183C11.2 4.95143 11.1157 5.15245 10.9657 5.30066C10.8157 5.44887 10.6122 5.53214 10.4 5.53214Z"
                    fill="white"
                  />
                </svg>
                <span class="open-sans font-600 font-14 white-400"
                  >New</span
                ></vs-button
              >
            </div>
          </div>

          <vs-divider class="d-theme-border-grey-light m-0" />
          <component
            :is="scrollbarTag"
            class="chat-scroll-area pt-4"
            :settings="settings"
            :key="$vs.rtl"
          >
            <!-- ACTIVE CHATS LIST -->
            <div class="chat__chats-list">
              <div>
                <div class="chat-search-textbox mx-4">
                  <input
                    type="search"
                    class="search-input"
                    placeholder="Search"
                  />
                  <i
                    class="vs-icon notranslate icon-scale icon-inputx notranslate feather icon-search null chat-icon-search"
                  ></i>
                </div>
              </div>
              <div
                class="active-chat-border-buttom pb-4"
                style="border-bottom:1px solid #EDEDF0;"
              ></div>

              <vs-dropdown
                vs-custom-content
                vs-trigger-click
                class="cursor-pointer"
              >
                <div class="con-img ml-4 w-100 flex items-center mb-5">
                  <div class="text-left leading-tight hidden sm:block">
                    <small class="gray-500 font-600 font-12 open-sans"
                      >Recent Chats (6)</small
                    >
                    <!-- <small>Available</small> -->
                  </div>
                  <feather-icon
                    icon="ChevronDownIcon"
                    svgClasses="ml-3 w-4 h-4"
                  />
                </div>
                <vs-dropdown-menu
                  class="w-48 vx-navbar-dropdown profile-dropdown"
                >
                  <div class="p-1 flex justify-between">
                    <h3
                      class="open-sans font-600 gray-500 font-14 mb-1 blue-600"
                    >
                      <svg
                        width="4"
                        height="12"
                        viewBox="0 0 4 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect width="4" height="12" rx="2" fill="#687182" />
                      </svg>
                      All (6)
                    </h3>
                    <div class="right-icon">
                      <svg
                        width="12"
                        height="9"
                        viewBox="0 0 12 9"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11.6445 0.328083C11.178 -0.0629489 10.337 -0.15344 9.88319 0.328083C8.06907 2.25316 6.25494 4.17823 4.44082 6.10331C3.66474 5.23913 2.88865 4.37494 2.11256 3.51076C1.69772 3.04883 0.775637 3.08864 0.351245 3.51076C-0.142189 4.00156 -0.0912832 4.62622 0.351245 5.11898C1.41382 6.30217 2.47639 7.48534 3.53895 8.66853C3.94438 9.11997 4.89283 9.10091 5.30028 8.66853C7.15215 6.7034 9.00401 4.73827 10.8559 2.77314C11.1188 2.49419 11.3816 2.21524 11.6445 1.93629C12.0691 1.48577 12.1655 0.764759 11.6445 0.328083Z"
                          fill="#0054FF"
                        />
                      </svg>
                    </div>
                  </div>
                  <div class="p-1 flex">
                    <svg
                      class="mr-1"
                      width="4"
                      height="12"
                      viewBox="0 0 4 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect width="4" height="12" rx="2" fill="#FF4545" />
                    </svg>
                    <h3 class="open-sans font-600 secondary-900 font-14 mb-1">
                      In Need (0)
                    </h3>
                  </div>
                  <div class="p-1 flex">
                    <svg
                      class="mr-1"
                      width="4"
                      height="12"
                      viewBox="0 0 4 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect width="4" height="12" rx="2" fill="#DB7422" />
                    </svg>
                    <h3 class="open-sans font-600 secondary-900 font-14 mb-1">
                      Unanswered (2)
                    </h3>
                  </div>
                  <div class="p-1 flex">
                    <svg
                      class="mr-1"
                      width="4"
                      height="12"
                      viewBox="0 0 4 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect width="4" height="12" rx="2" fill="#FBC02D" />
                    </svg>
                    <h3 class="open-sans font-600 secondary-900 font-14 mb-1">
                      Not Respond (1)
                    </h3>
                  </div>
                  <div class="p-1 flex">
                    <svg
                      class="mr-1"
                      width="4"
                      height="12"
                      viewBox="0 0 4 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect width="4" height="12" rx="2" fill="#3AA03A" />
                    </svg>
                    <h3 class="open-sans font-600 secondary-900 font-14 mb-1">
                      Get In Touch (0)
                    </h3>
                  </div>
                  <div class="p-1 flex">
                    <svg
                      class="mr-1"
                      width="4"
                      height="12"
                      viewBox="0 0 4 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect width="4" height="12" rx="2" fill="#367BFF" />
                    </svg>
                    <h3 class="open-sans font-600 secondary-900 font-14 mb-1">
                      New Clients (0)
                    </h3>
                  </div>
                </vs-dropdown-menu>
              </vs-dropdown>
              <ul class="chat__active-chats bordered-items">
                <li class="cursor-pointer">
                  <div class="chat__contact flex items-center px-2 pt-4 pb-2 ">
                    <div class="contact__avatar mr-1 relative flex">
                      <vs-avatar
                        v-if="activeUser.photoURL"
                        class="m-0 border-2 border-solid border-white"
                        :src="activeUser.photoURL"
                        size="40px"
                        @click="
                          showProfileSidebar(Number(activeUser.uid), true)
                        "
                      />
                      <div
                        class="h-3 w-3 border-white border border-solid rounded-full absolute right-0 bottom-0"
                        :class="'bg-' + getStatusColor(true)"
                      ></div>
                    </div>
                    <div
                      class="contact__container w-full flex items-center justify-between overflow-hidden"
                    >
                      <div class="contact__info flex flex-col truncate w-5/6">
                        <h5
                          class="font-semibold open-sans font-600 font-14 secondary-900"
                        >
                          Marcus Gouse
                        </h5>
                        <span class="truncate secondary-700 open-sans font-12"
                          >Just think of it as a hobby. Then it's ...</span
                        >
                      </div>
                      <div
                        class="chat__contact__meta flex self-start flex-col items-end w-1/6"
                      >
                        <span
                          class="whitespace-no-wrap open-sans font-600 font-12 gray-500"
                          >09:00 am</span
                        >
                      </div>
                    </div>
                  </div>
                </li>
                <li class="cursor-pointer">
                  <div class="chat__contact flex items-center px-2 pt-4 pb-2 ">
                    <div class="contact__avatar mr-1 relative flex">
                      <vs-avatar
                        v-if="activeUser.photoURL"
                        class="m-0 border-2 border-solid border-white"
                        :src="activeUser.photoURL"
                        size="40px"
                        @click="
                          showProfileSidebar(Number(activeUser.uid), true)
                        "
                      />
                      <div
                        class="h-3 w-3 border-white border border-solid rounded-full absolute right-0 bottom-0"
                        :class="'bg-' + getStatusColor(true)"
                      ></div>
                    </div>
                    <div
                      class="contact__container w-full flex items-center justify-between overflow-hidden"
                    >
                      <div class="contact__info flex flex-col truncate w-5/6">
                        <h5
                          class="font-semibold open-sans font-600 font-14 secondary-900"
                        >
                          Lincoln Gouse
                        </h5>
                        <span class="truncate secondary-700 open-sans font-12"
                          >That sounds good. 👍</span
                        >
                      </div>
                      <div
                        class="chat__contact__meta flex self-start flex-col items-end w-1/6"
                      >
                        <span
                          class="whitespace-no-wrap open-sans font-600 font-12 gray-500"
                          >07:42 am</span
                        >
                        <div
                          class="con-vs-chip number vs-chip-primary con-color bg-blue-500"
                        >
                          <span
                            class="text-chip vs-chip--text font-10 font-700 white-400"
                            >1</span
                          ><!---->
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li class="cursor-pointer">
                  <div class="chat__contact flex items-center px-2 pt-4 pb-2 ">
                    <div class="contact__avatar mr-1 relative flex">
                      <vs-avatar
                        v-if="activeUser.photoURL"
                        class="m-0 border-2 border-solid border-white"
                        :src="activeUser.photoURL"
                        size="40px"
                        @click="
                          showProfileSidebar(Number(activeUser.uid), true)
                        "
                      />
                      <div
                        class="h-3 w-3 border-white border border-solid rounded-full absolute right-0 bottom-0"
                        :class="'bg-' + getStatusColor(true)"
                      ></div>
                    </div>
                    <div
                      class="contact__container w-full flex items-center justify-between overflow-hidden"
                    >
                      <div class="contact__info flex flex-col truncate w-5/6">
                        <h5
                          class="font-semibold open-sans font-600 font-14 secondary-900"
                        >
                          Carla Calzoni
                        </h5>
                        <span class="truncate secondary-700 open-sans font-12"
                          >Sure, I will be more than happy ...
                        </span>
                      </div>
                      <div
                        class="chat__contact__meta flex self-start flex-col items-end w-1/6"
                      >
                        <span
                          class="whitespace-no-wrap open-sans font-600 font-12 gray-500"
                          >07:23 am</span
                        >
                      </div>
                    </div>
                  </div>
                </li>
                <li class="cursor-pointer">
                  <div class="chat__contact flex items-center px-2 pt-4 pb-2 ">
                    <div class="contact__avatar mr-1 relative flex">
                      <vs-avatar
                        v-if="activeUser.photoURL"
                        class="m-0 border-2 border-solid border-white"
                        :src="activeUser.photoURL"
                        size="40px"
                        @click="
                          showProfileSidebar(Number(activeUser.uid), true)
                        "
                      />
                      <div
                        class="h-3 w-3 border-white border border-solid rounded-full absolute right-0 bottom-0"
                        :class="'bg-' + getStatusColor(true)"
                      ></div>
                    </div>
                    <div
                      class="contact__container w-full flex items-center justify-between overflow-hidden"
                    >
                      <div class="contact__info flex flex-col truncate w-5/6">
                        <h5
                          class="font-semibold open-sans font-600 font-14 secondary-900"
                        >
                          Davis Mango
                        </h5>
                        <span class="truncate secondary-700 open-sans font-12"
                          >Typing...</span
                        >
                      </div>
                      <div
                        class="chat__contact__meta flex self-start flex-col items-end w-1/6"
                      >
                        <span
                          class="whitespace-no-wrap open-sans font-600 font-12 gray-500"
                          >Yesterday</span
                        >
                      </div>
                    </div>
                  </div>
                </li>
                <li class="cursor-pointer">
                  <div class="chat__contact flex items-center px-2 pt-4 pb-2 ">
                    <div class="contact__avatar mr-1 relative flex">
                      <vs-avatar
                        v-if="activeUser.photoURL"
                        class="m-0 border-2 border-solid border-white"
                        :src="activeUser.photoURL"
                        size="40px"
                        @click="
                          showProfileSidebar(Number(activeUser.uid), true)
                        "
                      />
                      <div
                        class="h-3 w-3 border-white border border-solid rounded-full absolute right-0 bottom-0"
                        :class="'bg-' + getStatusColor(true)"
                      ></div>
                    </div>
                    <div
                      class="contact__container w-full flex items-center justify-between overflow-hidden"
                    >
                      <div class="contact__info flex flex-col truncate w-5/6">
                        <h5
                          class="font-semibold open-sans font-600 font-14 secondary-900"
                        >
                          Emerson Aminoff
                        </h5>
                        <span class="truncate secondary-700 open-sans font-12"
                          >Okay, thanks.</span
                        >
                      </div>
                      <div
                        class="chat__contact__meta flex self-start flex-col items-end w-1/6"
                      >
                        <span
                          class="whitespace-no-wrap open-sans font-600 font-12 gray-500"
                          >Yesterday</span
                        >
                        <div
                          class="con-vs-chip number vs-chip-primary con-color bg-blue-500"
                        >
                          <span
                            class="text-chip vs-chip--text font-10 font-700 white-400"
                            >1</span
                          ><!---->
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li class="cursor-pointer">
                  <div class="chat__contact flex items-center px-2 pt-4 pb-2 ">
                    <div class="contact__avatar mr-1 relative flex">
                      <vs-avatar
                        v-if="activeUser.photoURL"
                        class="m-0 border-2 border-solid border-white"
                        :src="activeUser.photoURL"
                        size="40px"
                        @click="
                          showProfileSidebar(Number(activeUser.uid), true)
                        "
                      />
                      <div
                        class="h-3 w-3 border-white border border-solid rounded-full absolute right-0 bottom-0"
                        :class="'bg-' + getStatusColor(true)"
                      ></div>
                    </div>
                    <div
                      class="contact__container w-full flex items-center justify-between overflow-hidden"
                    >
                      <div class="contact__info flex flex-col truncate w-5/6">
                        <h5
                          class="font-semibold open-sans font-600 font-14 secondary-900"
                        >
                          Tiana Schleifer
                        </h5>
                        <span class="truncate secondary-700 open-sans font-12"
                          >Hey Tiana, are you okay? Haven'...</span
                        >
                      </div>
                      <div
                        class="chat__contact__meta flex self-start flex-col items-end w-1/6"
                      >
                        <span
                          class="whitespace-no-wrap open-sans font-600 font-12 gray-500"
                          >Wednesday</span
                        >
                      </div>
                    </div>
                  </div>
                </li>
                <li class="cursor-pointer">
                  <div class="chat__contact flex items-center px-2 pt-4 pb-2 ">
                    <div class="contact__avatar mr-1 relative flex">
                      <vs-avatar
                        v-if="activeUser.photoURL"
                        class="m-0 border-2 border-solid border-white"
                        :src="activeUser.photoURL"
                        size="40px"
                        @click="
                          showProfileSidebar(Number(activeUser.uid), true)
                        "
                      />
                      <div
                        class="h-3 w-3 border-white border border-solid rounded-full absolute right-0 bottom-0"
                        :class="'bg-' + getStatusColor(true)"
                      ></div>
                    </div>
                    <div
                      class="contact__container w-full flex items-center justify-between overflow-hidden"
                    >
                      <div class="contact__info flex flex-col truncate w-5/6">
                        <h5
                          class="font-semibold open-sans font-600 font-14 secondary-900"
                        >
                          Tiana Schleifer
                        </h5>
                        <span class="truncate secondary-700 open-sans font-12"
                          >Hey Tiana, are you okay? Haven'...</span
                        >
                      </div>
                      <div
                        class="chat__contact__meta flex self-start flex-col items-end w-1/6"
                      >
                        <span
                          class="whitespace-no-wrap open-sans font-600 font-12 gray-500"
                          >Wednesday</span
                        >
                      </div>
                    </div>
                  </div>
                </li>
                <li class="cursor-pointer">
                  <div class="chat__contact flex items-center px-2 pt-4 pb-2 ">
                    <div class="contact__avatar mr-1 relative flex">
                      <vs-avatar
                        v-if="activeUser.photoURL"
                        class="m-0 border-2 border-solid border-white"
                        :src="activeUser.photoURL"
                        size="40px"
                        @click="
                          showProfileSidebar(Number(activeUser.uid), true)
                        "
                      />
                      <div
                        class="h-3 w-3 border-white border border-solid rounded-full absolute right-0 bottom-0"
                        :class="'bg-' + getStatusColor(true)"
                      ></div>
                    </div>
                    <div
                      class="contact__container w-full flex items-center justify-between overflow-hidden"
                    >
                      <div class="contact__info flex flex-col truncate w-5/6">
                        <h5
                          class="font-semibold open-sans font-600 font-14 secondary-900"
                        >
                          Tiana Schleifer
                        </h5>
                        <span class="truncate secondary-700 open-sans font-12"
                          >Hey Tiana, are you okay? Haven'...</span
                        >
                      </div>
                      <div
                        class="chat__contact__meta flex self-start flex-col items-end w-1/6"
                      >
                        <span
                          class="whitespace-no-wrap open-sans font-600 font-12 gray-500"
                          >Wednesday</span
                        >
                      </div>
                    </div>
                  </div>
                </li>
                <li class="cursor-pointer">
                  <div class="chat__contact flex items-center px-2 pt-4 pb-2 ">
                    <div class="contact__avatar mr-1 relative flex">
                      <vs-avatar
                        v-if="activeUser.photoURL"
                        class="m-0 border-2 border-solid border-white"
                        :src="activeUser.photoURL"
                        size="40px"
                        @click="
                          showProfileSidebar(Number(activeUser.uid), true)
                        "
                      />
                      <div
                        class="h-3 w-3 border-white border border-solid rounded-full absolute right-0 bottom-0"
                        :class="'bg-' + getStatusColor(true)"
                      ></div>
                    </div>
                    <div
                      class="contact__container w-full flex items-center justify-between overflow-hidden"
                    >
                      <div class="contact__info flex flex-col truncate w-5/6">
                        <h5
                          class="font-semibold open-sans font-600 font-14 secondary-900"
                        >
                          Tiana Schleifer
                        </h5>
                        <span class="truncate secondary-700 open-sans font-12"
                          >Hey Tiana, are you okay? Haven'...</span
                        >
                      </div>
                      <div
                        class="chat__contact__meta flex self-start flex-col items-end w-1/6"
                      >
                        <span
                          class="whitespace-no-wrap open-sans font-600 font-12 gray-500"
                          >Wednesday</span
                        >
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </component>
        </vs-sidebar>
        <!-- RIGHT COLUMN -->
        <div
          class="chat__bg no-scroll-content chat-content-area border border-solid d-theme-border-grey-light border-t-0 border-r-0 border-b-0"
          :class="{
            'sidebar-spacer--wide': clickNotClose,
            'flex items-center justify-center': activeChatUser === null
          }"
        >
          <template v-if="activeChatUser">
            <div class="chat__navbar">
              <vs-navbar
                class="p-4 flex navbar-custom chat-nav-hight"
                color="white"
                type="flat"
              >
                <feather-icon
                  icon="MenuIcon"
                  class="mr-4 cursor-pointer lg:hidden"
                  @click="isChatSidebarActive = !isChatSidebarActive"
                />
                <div class="relative flex mr-4">
                  <!-- <feather-icon icon="MenuIcon" class="mr-4 cursor-pointer" /> -->
                  <vs-avatar
                    v-if="activeUser.photoURL"
                    class="m-0 border-2 border-solid border-white"
                    :src="activeUser.photoURL"
                    size="40px"
                    @click="showProfileSidebar(Number(activeUser.uid), true)"
                  />
                  <div
                    class="h-3 w-3 border-white border border-solid rounded-full absolute right-0 bottom-0"
                    :class="'bg-' + getStatusColor(true)"
                  ></div>
                </div>
                <router-link to="profile">
                  <div class="flex flex-col">
                    <h6 class="futura-md-bt font-20 font-normal secondary-900">
                      Carla Calzoni
                    </h6>
                    <h5 class="open-sans font-12 font-600 gray-500">
                      Last seen: 5 mins ago
                    </h5>
                  </div>
                </router-link>
                <vs-spacer></vs-spacer>
                <feather-icon
                  icon="SearchIcon"
                  class="cursor-pointer"
                  svgClasses="w-6 h-6"
                ></feather-icon>
              </vs-navbar>
            </div>
            <component
              :is="scrollbarTag"
              class="chat-content-scroll-area  d-theme-border-grey-light"
              :settings="settings"
              ref="chatLogPS"
              :key="$vs.rtl"
            >
              <div class="chat__log" ref="chatLog">
                <div>
                  <div class="flex items-start flex-row-reverse my-6">
                    <!----><!---->
                    <div class="flex flex-col">
                      <div
                        class="msg break-words relative rounded py-2 px-4  mr-2 rounded-lg max-w-sm bg-blue-600 text-white"
                      >
                        <span class="open-sans font-16 white-400  font-normal"
                          >Do you go jogging or do you go to a health
                          club?</span
                        >
                      </div>
                      <div>
                        <h5
                          class="inter-font font-10 font-500 gray-10 mr-2 mt-2 flex justify-end"
                        >
                          05:57 pm
                        </h5>
                      </div>
                    </div>
                  </div>

                  <div class="flex items-start mb-6">
                    <!----><!---->
                    <div class="flex flex-col">
                      <div
                        class="msg-start break-words relative  rounded py-2 px-4  ml-2 rounded-lg max-w-sm border border-solid border-transparent bg-white"
                      >
                        <span
                          class="open-sans secondary-900 font-normal font-16"
                          >I joined that Health Club a couple of months
                          ago.</span
                        >
                      </div>
                      <div>
                        <h5
                          class="inter-font font-10 font-500 gray-10 ml-2 mt-2 flex justify-start"
                        >
                          05:59 pm
                        </h5>
                      </div>
                    </div>
                    <!---->
                  </div>
                  <!---->
                  <div class="flex items-start mb-6">
                    <div class="flex flex-col">
                      <div
                        class="msg-start break-words relative  rounded py-2 px-4  ml-2 rounded-lg max-w-sm border border-solid border-transparent bg-white"
                      >
                        <span
                          class="open-sans secondary-900 font-normal font-16"
                          >I usually spend 30 minutes on the bicycle for the
                          cardio, and then I lift weights for about 45
                          minutes.</span
                        >
                      </div>
                      <div>
                        <h5
                          class="inter-font font-10 font-500 gray-10 ml-2 mt-2 flex justify-start"
                        >
                          06:00 pm
                        </h5>
                      </div>
                    </div>
                  </div>
                  <!---->
                  <div class="flex items-start flex-row-reverse mb-6">
                    <!----><!---->
                    <div class="flex flex-col">
                      <div
                        class="msg break-words relative rounded py-2 px-4  mr-2 rounded-lg max-w-sm bg-blue-600 text-white"
                      >
                        <span class="open-sans font-16 white-400"
                          >How often do you go?</span
                        >
                      </div>
                      <div>
                        <h5
                          class="inter-font font-10 font-500 gray-10 mr-2 mt-2 flex justify-end"
                        >
                          <svg
                            class="mr-1"
                            width="12"
                            height="9"
                            viewBox="0 0 12 9"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M11.6445 0.328083C11.178 -0.0629489 10.337 -0.15344 9.88319 0.328083C8.06907 2.25316 6.25494 4.17823 4.44082 6.10331C3.66474 5.23913 2.88865 4.37494 2.11256 3.51076C1.69772 3.04883 0.775637 3.08864 0.351245 3.51076C-0.142189 4.00156 -0.0912832 4.62622 0.351245 5.11898C1.41382 6.30217 2.47639 7.48534 3.53895 8.66853C3.94438 9.11997 4.89283 9.10091 5.30028 8.66853C7.15215 6.7034 9.00401 4.73827 10.8559 2.77314C11.1188 2.49419 11.3816 2.21524 11.6445 1.93629C12.0691 1.48577 12.1655 0.764759 11.6445 0.328083Z"
                              fill="#3AA03A"
                            />
                          </svg>
                          06:04 pm
                        </h5>
                      </div>
                    </div>
                  </div>
                  <!---->
                  <div class="flex items-start mb-4">
                    <div
                      class="msg-start break-words relative rounded py-3 px-4  ml-2 rounded-lg max-w-sm border border-solid border-transparent bg-white"
                    >
                      <span class="open-sans secondary-900 font-normal font-16"
                        >I want to go four times a week, but I'm too lazy.Last
                        week, I only went to workout once. That's the reason I
                        joined AP. I heard about this from a friend.</span
                      >
                    </div>
                  </div>
                  <!---->
                  <div class="flex items-start mb-6">
                    <div class="flex flex-col">
                      <div
                        class="msg-start break-words relative rounded py-3 px-4  ml-2 rounded-lg max-w-sm border border-solid border-transparent bg-white"
                      >
                        <span
                          class="open-sans secondary-900 font-normal font-16"
                          >It would be great if you help me achieve my goal.
                          👀</span
                        >
                      </div>
                      <div>
                        <h5
                          class="inter-font font-10 font-500 gray-10 ml-2 mt-2 flex justify-start"
                        >
                          09:47 pm
                        </h5>
                      </div>
                    </div>
                  </div>
                  <!---->
                  <div class="text-center">
                    <span
                      class="chat-today open-sans font-12 font-600 white-400 "
                    >
                      Today
                    </span>
                    <div class="spacer mt-4"></div>
                  </div>
                  <!---->
                  <div class="flex items-start flex-row-reverse mb-6">
                    <div class="flex flex-col">
                      <div
                        class="msg break-words relative rounded py-2 px-4  mr-2 rounded-lg max-w-sm bg-blue-600 text-white"
                      >
                        <span class="open-sans font-16 white-400"
                          >Sure, I will be more than happy to help you.
                        </span>
                      </div>
                      <div>
                        <h5
                          class="inter-font font-10 font-500 gray-10 mr-2 mt-2 flex justify-end"
                        >
                          <svg
                            class="mr-1"
                            width="12"
                            height="9"
                            viewBox="0 0 12 9"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M11.6445 0.328083C11.178 -0.0629489 10.337 -0.15344 9.88319 0.328083C8.06907 2.25316 6.25494 4.17823 4.44082 6.10331C3.66474 5.23913 2.88865 4.37494 2.11256 3.51076C1.69772 3.04883 0.775637 3.08864 0.351245 3.51076C-0.142189 4.00156 -0.0912832 4.62622 0.351245 5.11898C1.41382 6.30217 2.47639 7.48534 3.53895 8.66853C3.94438 9.11997 4.89283 9.10091 5.30028 8.66853C7.15215 6.7034 9.00401 4.73827 10.8559 2.77314C11.1188 2.49419 11.3816 2.21524 11.6445 1.93629C12.0691 1.48577 12.1655 0.764759 11.6445 0.328083Z"
                              fill="#868FA0"
                            />
                          </svg>
                          07:23 pm
                        </h5>
                      </div>
                    </div>
                  </div>
                  <!---->
                </div>
              </div>
            </component>
            <div class="chat__input flex p-4">
              <div class="relative">
                <span class="flex items-center absolute emoji-icon-chat">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.9674 12.9678C11.3315 14.604 8.66876 14.604 7.03256 12.9678C6.79846 12.7339 6.41863 12.7335 6.18496 12.9678C5.95062 13.2019 5.95062 13.5818 6.18496 13.8159C7.23683 14.8675 8.61837 15.3935 10.0002 15.3935C11.3819 15.3935 12.7637 14.8675 13.8153 13.8159C14.0494 13.5818 14.0494 13.2019 13.8153 12.9678C13.5812 12.7335 13.202 12.7339 12.9674 12.9678Z"
                      fill="#868FA0"
                    />
                    <path
                      d="M13.3913 6.72664C12.6923 6.72664 12.1257 7.29348 12.1257 7.99253C12.1257 8.69115 12.6923 9.25798 13.3913 9.25798C14.0904 9.25798 14.657 8.69115 14.657 7.99253C14.657 7.29348 14.0904 6.72664 13.3913 6.72664Z"
                      fill="#868FA0"
                    />
                    <path
                      d="M7.87408 7.99253C7.87408 7.29348 7.30771 6.72664 6.60866 6.72664C5.90961 6.72664 5.34298 7.29348 5.34298 7.99253C5.34298 8.69115 5.90961 9.25798 6.60866 9.25798C7.30771 9.25798 7.87408 8.69115 7.87408 7.99253Z"
                      fill="#868FA0"
                    />
                    <path
                      d="M20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10ZM1.6502 10C1.6502 14.6115 5.38853 18.3498 10 18.3498C14.6115 18.3498 18.3498 14.6115 18.3498 10C18.3498 5.38853 14.6115 1.6502 10 1.6502C5.38853 1.6502 1.6502 5.38853 1.6502 10Z"
                      fill="#868FA0"
                    />
                  </svg>
                </span>
                <span class="flex items-center absolute attachment-icon-chat">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.4434 2.1731C18.4363 3.32369 19.1191 5.87198 17.9685 7.86487L12.9685 16.5251C11.3577 19.3152 7.7901 20.2711 5.00006 18.6603C2.21002 17.0494 1.25408 13.4818 2.86491 10.6918L6.19824 4.91829L7.64162 5.75162L4.30828 11.5251C3.15769 13.518 3.84051 16.0663 5.83339 17.2169C7.82628 18.3675 10.3746 17.6847 11.5252 15.6918L16.5252 7.03154C17.2155 5.8358 16.8058 4.30683 15.6101 3.61647C14.4144 2.92612 12.8854 3.3358 12.195 4.53153L7.19504 13.1918C6.96492 13.5904 7.10148 14.1 7.50006 14.3301C7.89863 14.5603 8.40829 14.4237 8.63841 14.0251L13.2217 6.08656L14.6651 6.91989L10.0818 14.8585C9.39143 16.0542 7.86246 16.4639 6.66672 15.7735C5.47099 15.0832 5.0613 13.5542 5.75166 12.3585L10.7517 3.6982C11.9023 1.70532 14.4505 1.0225 16.4434 2.1731Z"
                      fill="#868FA0"
                    />
                  </svg>
                </span>
              </div>
              <input
                type="text"
                class="w-full rounded-full chat-input-box"
                placeholder="Message Carla"
              />
              <div class="relative">
                <span class="flex items-center absolute subtract-icon-chat">
                  <vs-dropdown
                    vs-custom-content
                    vs-trigger-click
                    class="cursor-pointer"
                  >
                    <div class="con-img ml-3 w-100 flex items-center">
                      <svg
                        width="20"
                        height="19"
                        viewBox="0 0 20 19"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M3 0H17C17.7956 0 18.5587 0.316404 19.1213 0.879606C19.6839 1.44281 20 2.20667 20 3.00316V16.8277C19.9993 17.2233 19.8898 17.611 19.6834 17.9483C19.477 18.2856 19.1817 18.5594 18.83 18.7397C18.524 18.9097 18.18 18.9993 17.83 19C17.3987 19.0008 16.9771 18.8718 16.62 18.6296L12.96 16.187C12.7973 16.0776 12.606 16.0184 12.41 16.0169H3C2.20435 16.0169 1.44129 15.7005 0.87868 15.1373C0.316071 14.574 0 13.8102 0 13.0137V3.00316C0 2.20667 0.316071 1.44281 0.87868 0.879606C1.44129 0.316404 2.20435 0 3 0ZM15.8322 5.4613L9.21429 12.109C8.95149 12.3778 8.66479 12.5 8.28253 12.5C7.94805 12.5 7.63746 12.3778 7.35076 12.109L4.1971 8.90733C3.9343 8.63849 3.9343 8.24745 4.1971 8.02749L5.12887 7.14766C5.39167 6.87882 5.77393 6.87882 6.06063 7.14766L8.33031 9.46945L14.0165 3.70163C14.2793 3.43279 14.6615 3.43279 14.9482 3.70163L15.88 4.58147C16.0472 4.80143 16.0472 5.24134 15.8322 5.4613Z"
                          fill="#868FA0"
                        />
                      </svg>
                    </div>
                    <vs-dropdown-menu
                      class="w-1/4 vx-navbar-dropdown profile-dropdown auto-replay"
                    >
                      <div class="flex justify-between">
                        <h3
                          class="open-sans font-18 font-600 secondary-900 pl-4"
                        >
                          Auto Reply
                        </h3>
                        <div>
                          <svg
                            @click=""
                            class="mr-4"
                            width="12"
                            height="12"
                            viewBox="0 0 12 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M0.200205 0.200205C0.467146 -0.0667352 0.899942 -0.0667352 1.16688 0.200205L6 5.03332L10.8331 0.200205C11.1001 -0.0667353 11.5329 -0.066735 11.7998 0.200206C12.0667 0.467147 12.0667 0.899943 11.7998 1.16688L6.96667 6L11.7998 10.8331C12.0667 11.1001 12.0667 11.5329 11.7998 11.7998C11.5329 12.0667 11.1001 12.0667 10.8331 11.7998L6 6.96667L1.16688 11.7998C0.899943 12.0667 0.467147 12.0667 0.200206 11.7998C-0.066735 11.5329 -0.0667353 11.1001 0.200205 10.8331L5.03332 6L0.200205 1.16688C-0.0667352 0.899942 -0.0667352 0.467146 0.200205 0.200205Z"
                              fill="#BCC2CE"
                            />
                          </svg>
                        </div>
                      </div>
                      <div
                        class="mt-4"
                        style="border-bottom: 1px solid #EDEDF0;"
                      ></div>
                      <div>
                        <h3
                          class="flex items-center bg-gray-0 open-sans font-600 font-16 black-500"
                        >
                          <vs-textarea
                            class="textarea-box border-none-text-area"
                            height="150px"
                            placeholder="Hi, I am your new coach that will help you get some  gainzzzz.💪"
                            v-model="textarea"
                          />
                        </h3>
                      </div>
                      <div style="border-bottom: 1px solid #EDEDF0;"></div>
                      <div class="py-2 flex justify-end">
                        <!-- <vs-button
                          class="btn1 py-2 px-4 mr-5 gray-500 font-600  font-14 inter-font"
                          type="border"
                          >Cancel</vs-button
                        > -->
                        <span class="gray-500 font-600  font-14 inter-font mr-4"
                          >Cancel</span
                        >
                        <!-- <vs-button
                          class="btn2 py-2 px-4 font-600  font-14 inter-font"
                          color="primary"
                          type="filled"
                          >Save</vs-button
                        > -->
                        <span class="font-600  font-14 inter-font blue-500 mr-4"
                          >Save</span
                        >
                      </div>
                    </vs-dropdown-menu>
                  </vs-dropdown>
                </span>
              </div>
              <!-- <vs-input
                class="flex-1"
                placeholder="Type Your Message"
                v-model="typedMessage"
                @keyup.enter="sendMsg"
              /> -->
              <div
                class="rounded-full  flex items-center justify-center bg-blue-600 ml-2 p-3"
                @click="faq = true"
              >
                <div class="con-img w-100 flex items-center">
                  <vs-dropdown
                    vs-custom-content
                    vs-trigger-click
                    class="cursor-pointer"
                  >
                    <div class="con-img  w-100 flex items-center">
                      <svg
                        width="20"
                        height="19"
                        viewBox="0 0 20 19"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M17 0H3C2.20435 0 1.44129 0.316404 0.878679 0.879606C0.316071 1.44281 0 2.20667 0 3.00316V16.8277C0.000673294 17.2233 0.110226 17.611 0.316628 17.9483C0.523029 18.2856 0.818296 18.5594 1.17 18.7397C1.476 18.9097 1.82005 18.9993 2.17 19C2.60132 19.0008 3.02291 18.8718 3.38 18.6296L7.04 16.187C7.20271 16.0776 7.39397 16.0184 7.59 16.0169H17C17.7956 16.0169 18.5587 15.7005 19.1213 15.1373C19.6839 14.574 20 13.8102 20 13.0137V3.00316C20 2.20667 19.6839 1.44281 19.1213 0.879606C18.5587 0.316404 17.7956 0 17 0ZM11.0269 9.30769C11.1108 9.07692 11.3204 8.88462 11.6138 8.65385C12.1587 8.34616 12.5778 7.92308 12.9551 7.46154C13.3323 7 13.5 6.46154 13.5 5.88462C13.5 4.96154 13.1647 4.26923 12.5778 3.76923C11.991 3.26923 11.1108 3 9.97904 3C8.93114 3 8.09281 3.23077 7.46407 3.69231C6.83533 4.15385 6.5 4.84615 6.5 5.73077H8.67964C8.67964 5.34615 8.84731 5.07692 9.0988 4.88461C9.3503 4.69231 9.64371 4.57692 10.021 4.57692C10.482 4.57692 10.8593 4.69231 11.0689 4.92308C11.2784 5.15385 11.4042 5.46154 11.4042 5.88462C11.4042 6.26923 11.3204 6.57692 11.1108 6.88462C10.9012 7.19231 10.6078 7.46154 10.2725 7.73077C9.64371 8.15385 9.26647 8.53846 9.05689 8.80769C8.84731 9.07692 8.76347 9.53846 8.76347 10.1923H10.9012C10.9012 9.80769 10.9431 9.53846 11.0269 9.30769ZM10.9012 13H8.72156V11.3077H10.9012V13Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                    <vs-dropdown-menu
                      class="vx-navbar-dropdown profile-dropdown faq p-0"
                      style="min-width: 432px; border-radius: 8px !important;"
                    >
                      <div class="py-4 px-3 flex justify-between">
                        <h3 class="open-sans font-600 font-18 secondary-900">
                          Frequently Asked Question
                        </h3>
                        <div class="pr-2 cursor-pointer">
                          <svg
                            width="12"
                            height="12"
                            viewBox="0 0 12 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M0.200205 0.200205C0.467146 -0.0667352 0.899942 -0.0667352 1.16688 0.200205L6 5.03332L10.8331 0.200205C11.1001 -0.0667353 11.5329 -0.066735 11.7998 0.200206C12.0667 0.467147 12.0667 0.899943 11.7998 1.16688L6.96667 6L11.7998 10.8331C12.0667 11.1001 12.0667 11.5329 11.7998 11.7998C11.5329 12.0667 11.1001 12.0667 10.8331 11.7998L6 6.96667L1.16688 11.7998C0.899943 12.0667 0.467147 12.0667 0.200206 11.7998C-0.066735 11.5329 -0.0667353 11.1001 0.200205 10.8331L5.03332 6L0.200205 1.16688C-0.0667352 0.899942 -0.0667352 0.467146 0.200205 0.200205Z"
                              fill="#BCC2CE"
                            />
                          </svg>
                        </div>
                      </div>
                      <div class="bg-gray-0 py-2">
                        <div class="chat-search-textbox relative mx-4">
                          <input
                            type="search"
                            placeholder="Search"
                            class="search-input"
                          /><i
                            class="vs-icon notranslate icon-scale icon-inputx notranslate feather icon-search null chat-icon-search-faq"
                          ></i>
                        </div>
                      </div>
                      <div class="pt-4">
                        <div class="flex pl-4">
                          <div>
                            <svg
                              class="mr-2"
                              width="16"
                              height="16"
                              viewBox="0 0 16 16"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M8 16C5.87827 16 3.84344 15.1571 2.34315 13.6569C0.842855 12.1566 0 10.1217 0 8C0 5.87827 0.842855 3.84344 2.34315 2.34315C3.84344 0.842855 5.87827 0 8 0C10.1217 0 12.1566 0.842855 13.6569 2.34315C15.1571 3.84344 16 5.87827 16 8C16 10.1217 15.1571 12.1566 13.6569 13.6569C12.1566 15.1571 10.1217 16 8 16ZM9.6 5.6C9.6 5.824 9.432 6.24 9.264 6.4L8 7.664C7.544 8.128 7.2 8.944 7.2 9.6V10.4H8.8V9.6C8.8 9.368 8.968 8.96 9.136 8.8L10.4 7.536C10.856 7.072 11.2 6.256 11.2 5.6C11.2 4.75131 10.8629 3.93737 10.2627 3.33726C9.66263 2.73714 8.84869 2.4 8 2.4C7.15131 2.4 6.33737 2.73714 5.73726 3.33726C5.13714 3.93737 4.8 4.75131 4.8 5.6H6.4C6.4 5.17565 6.56857 4.76869 6.86863 4.46863C7.16869 4.16857 7.57565 4 8 4C8.42435 4 8.83131 4.16857 9.13137 4.46863C9.43143 4.76869 9.6 5.17565 9.6 5.6ZM7.2 12V13.6H8.8V12H7.2Z"
                                fill="#868FA0"
                              />
                            </svg>
                          </div>
                          <h3 class="open-sans font-400 black-500 font-14 mb-1">
                            In non sed euismod?
                          </h3>
                        </div>
                        <!-- <h3 class="open-sans font-600 gray-500 font-12 mb-1">
                          AP Drink
                        </h3> -->
                        <span
                          class="open-sans font-bold font-10 gray-10 py-1 px-2 ml-10 mb-1"
                          style="background: #EDEDF0;
border-radius: 12px;"
                          >AP Drink</span
                        >
                        <h3
                          class="open-sans font-normal font-14 gray-500 flex items-center ml-10 mt-2 pr-10"
                        >
                          Lorem ipsum dolor sit amet, consectetur elit.
                          Pellentesque nisi, tellus est amet sit malesuada.
                          Nullam congue.
                        </h3>
                      </div>
                      <!---->
                      <div class="pt-4">
                        <div class="flex pl-4">
                          <div>
                            <svg
                              class="mr-2"
                              width="16"
                              height="16"
                              viewBox="0 0 16 16"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M8 16C5.87827 16 3.84344 15.1571 2.34315 13.6569C0.842855 12.1566 0 10.1217 0 8C0 5.87827 0.842855 3.84344 2.34315 2.34315C3.84344 0.842855 5.87827 0 8 0C10.1217 0 12.1566 0.842855 13.6569 2.34315C15.1571 3.84344 16 5.87827 16 8C16 10.1217 15.1571 12.1566 13.6569 13.6569C12.1566 15.1571 10.1217 16 8 16ZM9.6 5.6C9.6 5.824 9.432 6.24 9.264 6.4L8 7.664C7.544 8.128 7.2 8.944 7.2 9.6V10.4H8.8V9.6C8.8 9.368 8.968 8.96 9.136 8.8L10.4 7.536C10.856 7.072 11.2 6.256 11.2 5.6C11.2 4.75131 10.8629 3.93737 10.2627 3.33726C9.66263 2.73714 8.84869 2.4 8 2.4C7.15131 2.4 6.33737 2.73714 5.73726 3.33726C5.13714 3.93737 4.8 4.75131 4.8 5.6H6.4C6.4 5.17565 6.56857 4.76869 6.86863 4.46863C7.16869 4.16857 7.57565 4 8 4C8.42435 4 8.83131 4.16857 9.13137 4.46863C9.43143 4.76869 9.6 5.17565 9.6 5.6ZM7.2 12V13.6H8.8V12H7.2Z"
                                fill="#868FA0"
                              />
                            </svg>
                          </div>
                          <h3 class="open-sans font-400 black-500 font-14 mb-1">
                            In non sed euismod?
                          </h3>
                        </div>
                        <!-- <h3 class="open-sans font-600 gray-500 font-12 mb-1">
                          AP Drink
                        </h3> -->
                        <span
                          class="open-sans font-bold font-10 gray-10 py-1 px-2 ml-10 mb-1"
                          style="background: #EDEDF0;
border-radius: 12px;"
                          >AP Drink</span
                        >
                        <h3
                          class="open-sans font-normal font-14 gray-500 flex items-center ml-10 mt-2 pr-10"
                        >
                          Lorem ipsum dolor sit amet, consectetur elit.
                          Pellentesque nisi, tellus est amet sit malesuada.
                          Nullam congue.
                        </h3>
                      </div>
                      <!---->
                      <div class="pt-4">
                        <div class="flex pl-4">
                          <div>
                            <svg
                              class="mr-2"
                              width="16"
                              height="16"
                              viewBox="0 0 16 16"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M8 16C5.87827 16 3.84344 15.1571 2.34315 13.6569C0.842855 12.1566 0 10.1217 0 8C0 5.87827 0.842855 3.84344 2.34315 2.34315C3.84344 0.842855 5.87827 0 8 0C10.1217 0 12.1566 0.842855 13.6569 2.34315C15.1571 3.84344 16 5.87827 16 8C16 10.1217 15.1571 12.1566 13.6569 13.6569C12.1566 15.1571 10.1217 16 8 16ZM9.6 5.6C9.6 5.824 9.432 6.24 9.264 6.4L8 7.664C7.544 8.128 7.2 8.944 7.2 9.6V10.4H8.8V9.6C8.8 9.368 8.968 8.96 9.136 8.8L10.4 7.536C10.856 7.072 11.2 6.256 11.2 5.6C11.2 4.75131 10.8629 3.93737 10.2627 3.33726C9.66263 2.73714 8.84869 2.4 8 2.4C7.15131 2.4 6.33737 2.73714 5.73726 3.33726C5.13714 3.93737 4.8 4.75131 4.8 5.6H6.4C6.4 5.17565 6.56857 4.76869 6.86863 4.46863C7.16869 4.16857 7.57565 4 8 4C8.42435 4 8.83131 4.16857 9.13137 4.46863C9.43143 4.76869 9.6 5.17565 9.6 5.6ZM7.2 12V13.6H8.8V12H7.2Z"
                                fill="#868FA0"
                              />
                            </svg>
                          </div>
                          <h3 class="open-sans font-400 black-500 font-14 mb-1">
                            In non sed euismod?
                          </h3>
                        </div>
                        <!-- <h3 class="open-sans font-600 gray-500 font-12 mb-1">
                          AP Drink
                        </h3> -->
                        <span
                          class="open-sans font-bold font-10 gray-10 py-1 px-2 ml-10 mb-1"
                          style="background: #EDEDF0;
border-radius: 12px;"
                          >AP Drink</span
                        >
                        <h3
                          class="open-sans font-normal font-14 gray-500 flex items-center ml-10 mt-2 pr-10"
                        >
                          Lorem ipsum dolor sit amet, consectetur elit.
                          Pellentesque nisi, tellus est amet sit malesuada.
                          Nullam congue.
                        </h3>
                      </div>
                      <!---->
                      <div class="pt-4">
                        <div class="flex pl-4">
                          <div>
                            <svg
                              class="mr-2"
                              width="16"
                              height="16"
                              viewBox="0 0 16 16"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M8 16C5.87827 16 3.84344 15.1571 2.34315 13.6569C0.842855 12.1566 0 10.1217 0 8C0 5.87827 0.842855 3.84344 2.34315 2.34315C3.84344 0.842855 5.87827 0 8 0C10.1217 0 12.1566 0.842855 13.6569 2.34315C15.1571 3.84344 16 5.87827 16 8C16 10.1217 15.1571 12.1566 13.6569 13.6569C12.1566 15.1571 10.1217 16 8 16ZM9.6 5.6C9.6 5.824 9.432 6.24 9.264 6.4L8 7.664C7.544 8.128 7.2 8.944 7.2 9.6V10.4H8.8V9.6C8.8 9.368 8.968 8.96 9.136 8.8L10.4 7.536C10.856 7.072 11.2 6.256 11.2 5.6C11.2 4.75131 10.8629 3.93737 10.2627 3.33726C9.66263 2.73714 8.84869 2.4 8 2.4C7.15131 2.4 6.33737 2.73714 5.73726 3.33726C5.13714 3.93737 4.8 4.75131 4.8 5.6H6.4C6.4 5.17565 6.56857 4.76869 6.86863 4.46863C7.16869 4.16857 7.57565 4 8 4C8.42435 4 8.83131 4.16857 9.13137 4.46863C9.43143 4.76869 9.6 5.17565 9.6 5.6ZM7.2 12V13.6H8.8V12H7.2Z"
                                fill="#868FA0"
                              />
                            </svg>
                          </div>
                          <h3 class="open-sans font-400 black-500 font-14 mb-1">
                            In non sed euismod?
                          </h3>
                        </div>
                        <!-- <h3 class="open-sans font-600 gray-500 font-12 mb-1">
                          AP Drink
                        </h3> -->
                        <span
                          class="open-sans font-bold font-10 gray-10 py-1 px-2 ml-10 mb-1"
                          style="background: #EDEDF0;
border-radius: 12px;"
                          >AP Drink</span
                        >
                        <h3
                          class="open-sans font-normal font-14 gray-500 flex items-center ml-10 mt-2 pr-10"
                        >
                          Lorem ipsum dolor sit amet, consectetur elit.
                          Pellentesque nisi, tellus est amet sit malesuada.
                          Nullam congue.
                        </h3>
                      </div>
                      <div
                        class="mt-1"
                        style="border-bottom: 1px solid #EDEDF0;"
                      ></div>
                      <div class="p-1 bg-gray-0 flex justify-end pr-5 py-3">
                        <span @click="addFaq = true"
                          ><a
                            class="blue-500 font-600 font-14 inter-font cursor-pointer no-underline"
                            >Add FAQ</a
                          ></span
                        >
                      </div>
                    </vs-dropdown-menu>
                  </vs-dropdown>
                </div>
              </div>
            </div>
          </template>
          <template v-else>
            <div class="flex flex-col items-center">
              <feather-icon
                icon="MessageSquareIcon"
                class="mb-4 bg-white p-8 shadow-md rounded-full"
                svgClasses="w-16 h-16"
              ></feather-icon>
              <h4
                class=" py-2 px-4 bg-white shadow-md rounded-full cursor-pointer"
                @click.stop="toggleChatSidebar(true)"
              >
                Start Conversation
              </h4>
            </div>
          </template>
        </div>
      </div>
      <div
        class="vx-col md:w-4/12 lg:w-3/12 lg:w-3/12 d-theme-dark-light-bg px-0 w-full"
      >
        <vs-navbar
          class="flex navbar-custom chat-right-navbar-nav statistics-nav"
          color="white"
          type="flat"
        >
          <h6 class="futura-md-bt font-400 font-20 gray-500">Statistics</h6>
          <vs-spacer></vs-spacer>
          <router-link to="profile"
            ><svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.6964 9.45209C12.6964 10.2972 12.6964 11.1424 12.6964 11.9875C12.6964 12.3482 12.6964 12.7088 12.6964 13.0694C12.6964 13.278 12.707 13.4916 12.6794 13.6989C12.6888 13.6306 12.6983 13.5624 12.7077 13.4941C12.6857 13.6437 12.6457 13.7883 12.5878 13.928C12.614 13.8653 12.6402 13.8026 12.6664 13.7399C12.6079 13.8756 12.534 14.0024 12.445 14.1204C12.4861 14.0663 12.5273 14.0123 12.5685 13.9582C12.4785 14.0742 12.3761 14.178 12.2613 14.2695C12.3157 14.2272 12.37 14.1849 12.4244 14.1426C12.3016 14.238 12.1686 14.3167 12.0257 14.3783C12.0915 14.3508 12.1572 14.3234 12.223 14.2959C12.0758 14.357 11.9231 14.398 11.7651 14.4191C11.8358 14.4099 11.9065 14.4008 11.9772 14.3917C11.7903 14.414 11.5986 14.4055 11.4107 14.4055C11.065 14.4055 10.7192 14.4055 10.3735 14.4055C9.29643 14.4055 8.21939 14.4055 7.14235 14.4055C6.06685 14.4055 4.99135 14.4055 3.91586 14.4055C3.57203 14.4055 3.22823 14.4055 2.88441 14.4055C2.69079 14.4055 2.49345 14.4141 2.30118 14.3885C2.36943 14.398 2.43766 14.4074 2.50589 14.4169C2.35632 14.3948 2.21168 14.3549 2.07203 14.2969C2.13474 14.3231 2.19742 14.3493 2.26011 14.3755C2.12437 14.317 1.99757 14.2432 1.87966 14.1541C1.9337 14.1953 1.98776 14.2365 2.0418 14.2777C1.92585 14.1876 1.82207 14.0852 1.7305 13.9704C1.77279 14.0248 1.81509 14.0792 1.85739 14.1335C1.76197 14.0107 1.68333 13.8777 1.62176 13.7348C1.64921 13.8006 1.67665 13.8664 1.7041 13.9321C1.64303 13.785 1.60203 13.6322 1.58097 13.4743C1.59007 13.5449 1.59919 13.6156 1.6083 13.6863C1.58603 13.4995 1.59448 13.3078 1.59448 13.1199C1.59448 12.7741 1.59448 12.4284 1.59448 12.0826C1.59448 11.0056 1.59448 9.92852 1.59448 8.85149C1.59448 7.77597 1.59448 6.70049 1.59448 5.62497C1.59448 5.28115 1.59448 4.93735 1.59448 4.59353C1.59448 4.39991 1.58585 4.20257 1.61149 4.0103C1.60204 4.07855 1.5926 4.14678 1.58314 4.21502C1.6052 4.06546 1.64512 3.9208 1.70308 3.78117C1.67686 3.84385 1.65067 3.90656 1.62445 3.96924C1.68294 3.83351 1.75682 3.70669 1.84591 3.58879C1.80473 3.64283 1.76353 3.69689 1.72235 3.75093C1.81238 3.63498 1.91482 3.53119 2.02958 3.43963C1.9752 3.48193 1.92082 3.52423 1.86646 3.56653C1.98933 3.47112 2.1223 3.39246 2.26517 3.33089C2.19941 3.35835 2.13364 3.38578 2.06787 3.41324C2.21505 3.35217 2.3678 3.31116 2.52574 3.2901C2.45507 3.2992 2.38438 3.30833 2.31371 3.31743C2.62067 3.28085 2.94105 3.30362 3.24918 3.30362C3.8066 3.30362 4.36402 3.30362 4.92144 3.30362C5.44747 3.30362 5.97349 3.30362 6.49952 3.30362C6.93375 3.30362 7.29962 2.94848 7.30251 2.5121C7.30538 2.08006 6.94526 1.70912 6.511 1.70912C5.66357 1.70912 4.81612 1.70912 3.96868 1.70912C3.53659 1.70912 3.10451 1.70912 2.67242 1.70912C2.45186 1.70912 2.23683 1.72646 2.01771 1.76502C1.76459 1.80955 1.51417 1.91497 1.29035 2.03753C1.07033 2.15801 0.864221 2.32309 0.692957 2.50599C0.228583 3.00199 0 3.64616 0 4.32032C0 4.56223 0 4.80413 0 5.04605C0 6.02911 0 7.01216 0 7.99523C0 9.12833 0 10.2614 0 11.3945C0 12.059 0 12.7234 0 13.3878C0 13.5639 0.0209541 13.7354 0.0443526 13.9109C0.0786444 14.168 0.181378 14.4176 0.295714 14.648C0.407428 14.873 0.571448 15.0812 0.746998 15.2591C1.23514 15.7537 1.91361 16 2.60079 16C3.2652 16 3.92962 16 4.59402 16C5.72712 16 6.86022 16 7.99334 16C8.9764 16 9.95945 16 10.9425 16C11.1844 16 11.4263 16 11.6682 16C11.7597 16 11.8504 15.9987 11.9416 15.9891C12.0998 15.9725 12.2589 15.953 12.413 15.9125C12.5721 15.8707 12.7266 15.8013 12.8758 15.7346C13.106 15.6316 13.3153 15.4695 13.5001 15.301C13.8677 14.9658 14.1412 14.4745 14.2341 13.9864C14.2752 13.7703 14.2909 13.5579 14.2909 13.34C14.2909 12.9101 14.2909 12.4802 14.2909 12.0502C14.2909 11.1883 14.2909 10.3264 14.2909 9.46451C14.2909 9.46419 14.2909 9.46388 14.2909 9.46357C14.2909 9.02934 13.9358 8.66346 13.4994 8.66058C13.0674 8.65771 12.6964 9.01784 12.6964 9.45209Z"
                fill="#868FA0"
              />
              <path
                d="M15.9941 7.1406C15.9945 6.80016 15.9948 6.45972 15.9951 6.11929C15.9954 5.79891 15.9957 5.47852 15.996 5.15814L15.9971 4.0022C15.9977 3.27814 15.9984 2.55407 15.9991 1.83001C15.9992 1.65884 15.9994 1.48767 15.9995 1.31651C15.9997 1.14663 15.9998 0.976762 16 0.80689C16 0.805117 16 0.803349 16 0.801579C15.9999 0.70754 15.9831 0.616724 15.9525 0.532128C15.9141 0.420841 15.851 0.317058 15.7634 0.230548C15.6925 0.160526 15.6112 0.106781 15.5242 0.0691991C15.4274 0.0254882 15.3206 0.000759217 15.2085 1.70297e-05C15.175 -0.000205323 15.1419 0.00175203 15.1093 0.00575467C14.4815 0.00518253 13.8538 0.0046096 13.226 0.00402069C12.1167 0.00299335 11.0073 0.00196602 9.89797 0.000956391C9.72681 0.000796985 9.55565 0.000642007 9.38449 0.000487029L9.38447 0.000487004C9.2133 0.000332018 9.04213 0.000177032 8.87096 1.76172e-05C8.43674 -0.000372063 8.07086 0.355459 8.06798 0.791528C8.06511 1.22386 8.42522 1.59411 8.85947 1.59452C9.52029 1.59512 10.1811 1.59572 10.8419 1.59634C11.3966 1.59685 11.9513 1.59736 12.506 1.59787C12.7616 1.59811 13.0172 1.59834 13.2728 1.59858C13.1235 1.74769 12.9743 1.89679 12.825 2.0459C12.4928 2.37789 12.1605 2.70987 11.8282 3.04186C11.5587 3.31106 11.2893 3.58026 11.0198 3.84946C10.4676 4.40122 9.9153 4.95297 9.36303 5.50472C8.61504 6.25204 7.86703 6.99936 7.11902 7.74667L5.79257 9.0719C5.77277 9.09168 5.75297 9.11146 5.73317 9.13124C5.71337 9.15102 5.69357 9.1708 5.67377 9.19058C5.36688 9.49718 5.3721 10.0141 5.67981 10.318C5.99003 10.6243 6.49975 10.6191 6.80722 10.312L7.08463 10.0348C7.26484 9.85474 7.44505 9.67469 7.62527 9.49465C8.28854 8.832 8.95181 8.16933 9.61508 7.50667C10.4368 6.6857 11.2585 5.86475 12.0802 5.0438C12.4542 4.67014 12.8282 4.29648 13.2022 3.92283C13.5762 3.54917 13.9502 3.17551 14.3242 2.80185C14.3507 2.77537 14.3772 2.7489 14.4037 2.72242C14.4037 2.73961 14.4037 2.7568 14.4037 2.77399L14.4026 3.89537C14.402 4.63095 14.4013 5.36653 14.4006 6.10212C14.4004 6.27592 14.4003 6.44972 14.4001 6.62352C14.4 6.79205 14.3998 6.96059 14.3996 7.12912C14.3992 7.56335 14.7551 7.92922 15.1912 7.93211C15.6235 7.93498 15.9938 7.57484 15.9941 7.1406Z"
                fill="#868FA0"
              />
            </svg>
          </router-link>
        </vs-navbar>
        <div
          id="chat-right-sidebar"
          class="no-scroll-content chat-content-area"
        >
          <component
            :is="scrollbarTag"
            class="chat-scroll-area pt-4"
            :settings="settings"
            :key="$vs.rtl"
          >
            <div class="py-6 px-4" style="border-left: 1px solid #EDEDF0;">
              <div class="sleep-timer mt-4 mb-4">
                <div class="sleep-timer-header flex items-center">
                  <svg
                    width="20"
                    class="mr-2"
                    height="18"
                    viewBox="0 0 20 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M10.0028 14.1044C9.40845 14.1044 8.92623 13.6399 8.92623 13.0537C8.92623 12.4675 9.40845 11.9919 10.0028 11.9919C10.5972 11.9919 11.0682 12.4675 11.0682 13.0537C11.0682 13.6399 10.5972 14.1044 10.0028 14.1044ZM19.6137 12.932L13.1092 2.43559C12.7504 1.91575 12.3467 1.4512 11.8532 1.09727C11.3261 0.72121 10.7206 0.5 10.0028 0.5C9.28509 0.5 8.67951 0.72121 8.14121 1.09727C7.65899 1.4512 7.25527 1.91575 6.8964 2.43559L0.358342 12.9873C-0.135097 13.9938 -0.135097 15.1441 0.459272 16.1064C0.986354 16.958 1.91716 17.5 2.92647 17.5H17.068C18.0885 17.5 19.0081 16.958 19.5352 16.1064C20.1295 15.1552 20.152 13.9164 19.6137 12.932ZM10.0028 10.9411C9.61031 10.9411 9.32995 10.6204 9.28509 10.2332L8.92623 7.05888C8.87016 6.51692 9.45331 6.00813 10.0028 6.00813C10.5523 6.00813 11.1355 6.51692 11.0682 7.05888L10.7093 10.2332C10.6757 10.6204 10.3953 10.9411 10.0028 10.9411Z"
                      fill="#868FA0"
                    />
                  </svg>
                  <span class="sleep-title open-sans font-700 font-16 gray-500"
                    >Issue(s)</span
                  >
                </div>
                <div class="relative sleep-timer-body my-2 pb-1">
                  <div class="flex items-center justify-between">
                    <div class="open-sans font-12 font-bold blue-500">
                      <vs-dropdown
                        vs-custom-content
                        vs-trigger-click
                        class="cursor-pointer"
                      >
                        <div class="con-img ml-3 w-100 flex items-center">
                          <h4
                            class="open-sans font-600 font-14  mcp-chip-danger p-2"
                          >
                            Low Sleep Rate
                          </h4>
                        </div>
                        <vs-dropdown-menu
                          class="w-40 vx-navbar-dropdown profile-dropdown low-sleep"
                        >
                          <div class="p-1">
                            <h3
                              class="open-sans font-600 blue-600 font-14 mb-1"
                            >
                              Edit
                            </h3>
                          </div>
                          <div class="p-1">
                            <h3
                              class="open-sans font-600 blue-600 font-14 flex items-center"
                            >
                              Mark as Solved
                            </h3>
                          </div>
                          <div
                            class="my-2"
                            style="border-bottom:1px solid #EDEDF0;"
                          ></div>
                          <div class="p-1">
                            <h3
                              class="open-sans font-600 font-14 red-600 flex items-center pb-2 pt-1"
                            >
                              Delete
                            </h3>
                          </div>
                        </vs-dropdown-menu>
                      </vs-dropdown>
                    </div>
                  </div>
                </div>
              </div>
              <hr class="m-2 hr-border-1" />
              <div class="sleep-timer mt-12 mb-4">
                <div class="sleep-timer mt-4">
                  <div
                    class="sleep-timer-header flex justify-between items-center"
                  >
                    <div class="flex">
                      <svg
                        width="20"
                        class="mr-2"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M20 2.72727C19.9773 2.01117 19.6826 1.33062 19.176 0.824005C18.6694 0.31739 17.9888 0.0227504 17.2727 0H2.72727C2.01117 0.0227504 1.33062 0.31739 0.824005 0.824005C0.31739 1.33062 0.0227504 2.01117 0 2.72727V17.3182C0.0297504 18.0277 0.327994 18.6994 0.83435 19.1973C1.34071 19.6953 2.01734 19.9822 2.72727 20H12.7273L20 12.7273V2.72727ZM12.7273 12.7273V18.1818H1.81818V5.45455H18.1818V12.7273H12.7273Z"
                          fill="#868FA0"
                        />
                        <path
                          d="M16.3636 9.09091H3.63636V10.9091H16.3636V9.09091Z"
                          fill="#868FA0"
                        />
                        <path
                          d="M9.09091 12.7273H3.63636V14.5455H9.09091V12.7273Z"
                          fill="#868FA0"
                        />
                      </svg>
                      <span
                        class="sleep-title open-sans font-700 font-16 gray-500"
                        >Notes</span
                      >
                    </div>
                    <svg
                      @click="notes = true"
                      class="cursor-pointer"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.8 7.2H11.2C11.6418 7.2 12 7.55817 12 8C12 8.44183 11.6418 8.8 11.2 8.8H8.8V11.2C8.8 11.6418 8.44183 12 8 12C7.55817 12 7.2 11.6418 7.2 11.2V8.8H4.8C4.35817 8.8 4 8.44183 4 8C4 7.55817 4.35817 7.2 4.8 7.2H7.2V4.8C7.2 4.35817 7.55817 4 8 4C8.44183 4 8.8 4.35817 8.8 4.8V7.2ZM8 16C5.87827 16 3.84344 15.1571 2.34315 13.6569C0.842855 12.1566 0 10.1217 0 8C0 5.87827 0.842855 3.84344 2.34315 2.34315C3.84344 0.842855 5.87827 0 8 0C10.1217 0 12.1566 0.842855 13.6569 2.34315C15.1571 3.84344 16 5.87827 16 8C16 10.1217 15.1571 12.1566 13.6569 13.6569C12.1566 15.1571 10.1217 16 8 16ZM8 14.4C9.69739 14.4 11.3253 13.7257 12.5255 12.5255C13.7257 11.3253 14.4 9.69739 14.4 8C14.4 6.30261 13.7257 4.67475 12.5255 3.47452C11.3253 2.27428 9.69739 1.6 8 1.6C6.30261 1.6 4.67475 2.27428 3.47452 3.47452C2.27428 4.67475 1.6 6.30261 1.6 8C1.6 9.69739 2.27428 11.3253 3.47452 12.5255C4.67475 13.7257 6.30261 14.4 8 14.4Z"
                        fill="#868FA0"
                      />
                    </svg>
                  </div>
                  <div class="relative  my-2 pb-1">
                    <div
                      class="scrollbar-css bg-gray-0 border-radius-8px overflow-auto mb-4"
                      style="height: 152px;border: 1px solid #EDEDF0;"
                    >
                      <div v-for="(notes, idx) in notesData" :key="idx">
                        <div
                          class="flex items-center justify-between px-3 pb-5"
                          @mouseover="deleteNotes = idx"
                          @mouseout="deleteNotes = null"
                        >
                          <span
                            class="open-sans font-14 secondary-900 truncate"
                            style="max-width: 190px;"
                            >{{ notes.title }}</span
                          >
                          <svg
                            v-if="deleteNotes === idx"
                            width="14"
                            height="16"
                            viewBox="0 0 14 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M12.7493 1.17895H9.32688V1.14526C9.32688 0.505263 8.81351 0 8.16324 0H5.83597C5.18571 0 4.67234 0.505263 4.67234 1.14526V1.17895H1.24988C0.890518 1.17895 0.599609 1.46526 0.599609 1.81895V2.45895C0.599609 2.81263 0.890518 3.09895 1.24988 3.09895H12.7493C13.1087 3.09895 13.3996 2.81263 13.3996 2.45895V1.81895C13.3996 1.46526 13.1087 1.17895 12.7493 1.17895Z"
                              fill="#FF4545"
                            />
                            <path
                              d="M11.8937 3.97474H2.10549C1.91726 3.97474 1.78036 4.12632 1.79747 4.31158L2.27662 14.0632C2.32795 15.1411 3.2349 16 4.33009 16H9.65201C10.7472 16 11.6542 15.1579 11.7055 14.0632L12.1846 4.31158C12.2189 4.14316 12.0648 3.97474 11.8937 3.97474ZM5.93865 13.3895C5.93865 13.6926 5.69907 13.9284 5.39105 13.9284C5.08303 13.9284 4.84346 13.6926 4.84346 13.3895V6.60211C4.84346 6.29895 5.08303 6.06316 5.39105 6.06316C5.69907 6.06316 5.93865 6.29895 5.93865 6.60211V13.3895ZM9.15576 13.3895C9.15576 13.6926 8.91619 13.9284 8.60817 13.9284C8.30014 13.9284 8.06057 13.6926 8.06057 13.3895V6.60211C8.06057 6.29895 8.30014 6.06316 8.60817 6.06316C8.91619 6.06316 9.15576 6.29895 9.15576 6.60211V13.3895Z"
                              fill="#FF4545"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <hr class="m-2 hr-border-1" />
              <div class="sleep-timer mt-12 mb-4">
                <div class="sleep-timer mt-4">
                  <div class="sleep-timer-header items-center">
                    <div class="flex justify-between">
                      <div class="flex">
                        <svg
                          width="20"
                          height="14"
                          viewBox="0 0 20 14"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M18.7805 5.76053H16.0976C15.3659 5.76053 14.6829 6.17517 14.3659 6.8337L12.5366 10.4435L9.39024 1.63858C9.02439 0.614191 7.90244 0.101996 6.90244 0.467849C6.43902 0.638581 6.04878 0.980045 5.82927 1.41907L3.58537 5.76053H1.21951C0.536585 5.76053 0 6.29712 0 6.98004C0 7.66297 0.536585 8.19956 1.21951 8.19956H3.90244C4.63415 8.19956 5.31707 7.78492 5.63415 7.12639L7.46341 3.51663L10.6098 12.3215C10.878 13.0532 11.5366 13.5654 12.3171 13.6142H12.439C13.1707 13.6142 13.8537 13.1996 14.1707 12.541L16.4146 8.19956H18.7805C19.4634 8.19956 20 7.66297 20 6.98004C20 6.29712 19.4634 5.76053 18.7805 5.76053Z"
                            fill="#868FA0"
                          />
                        </svg>
                        <span
                          class="sleep-title open-sans font-bold font-16 gray-500 ml-2"
                          >Activity</span
                        >
                      </div>
                      <div class="flex">
                        <p
                          class="open-sans font-600 font-12 secondary-900 mr-2"
                        >
                          Weekly
                        </p>
                        <feather-icon
                          icon="ChevronDownIcon"
                          svgClasses="w-4 h-4"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="relative  my-2 pb-1">
                    <div
                      class="scrollbar-css bg-gray-0 border-radius-8px overflow-auto mb-4"
                      style="height: 117px;border: 1px solid #EDEDF0;"
                    >
                      <div class="flex justify-between py-2 px-3">
                        <span class="open-sans font-600 font-12 secondary-900"
                          >Mood</span
                        >
                        <span
                          class="open-sans font-600 font-12"
                          style="color: #BA5400;"
                          >Avg. : 8.2</span
                        >
                      </div>
                      <div
                        class=""
                        style="border-bottom:1px solid #EDEDF0;"
                      ></div>
                      <div class="flex mt-3 justify-between">
                        <div class="ml-3">
                          <div>
                            <svg
                              width="8"
                              height="40"
                              viewBox="0 0 8 40"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <rect
                                width="8"
                                height="40"
                                rx="2"
                                fill="#D2D5DC"
                              />
                              <rect
                                y="12"
                                width="8"
                                height="28"
                                rx="2"
                                fill="#367BFF"
                              />
                            </svg>
                            <h5 class="open-sans font-600 font-12 gray-500">
                              M
                            </h5>
                          </div>
                        </div>
                        <div class="">
                          <div>
                            <svg
                              width="8"
                              height="40"
                              viewBox="0 0 8 40"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <rect
                                width="8"
                                height="40"
                                rx="2"
                                fill="#D2D5DC"
                              />
                              <rect
                                y="8"
                                width="8"
                                height="32"
                                rx="2"
                                fill="#367BFF"
                              />
                            </svg>
                            <h5 class="open-sans font-600 font-12 gray-500">
                              T
                            </h5>
                          </div>
                        </div>
                        <div class="">
                          <div>
                            <svg
                              width="8"
                              height="40"
                              viewBox="0 0 8 40"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <rect
                                width="8"
                                height="40"
                                rx="2"
                                fill="#D2D5DC"
                              />
                              <rect
                                y="4"
                                width="8"
                                height="36"
                                rx="2"
                                fill="#0054FF"
                              />
                            </svg>

                            <h5
                              class="open-sans font-600 font-12 secondary-900"
                            >
                              W
                            </h5>
                          </div>
                        </div>
                        <div class="">
                          <div>
                            <svg
                              width="8"
                              height="40"
                              viewBox="0 0 8 40"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <rect
                                width="8"
                                height="40"
                                rx="2"
                                fill="#D2D5DC"
                              />
                              <rect
                                y="10"
                                width="8"
                                height="30"
                                rx="2"
                                fill="#367BFF"
                              />
                            </svg>
                            <h5 class="open-sans font-600 font-12 gray-500">
                              T
                            </h5>
                          </div>
                        </div>
                        <div class="">
                          <div>
                            <svg
                              width="8"
                              height="40"
                              viewBox="0 0 8 40"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <rect
                                width="8"
                                height="40"
                                rx="2"
                                fill="#D2D5DC"
                              />
                              <rect
                                y="10"
                                width="8"
                                height="30"
                                rx="2"
                                fill="#367BFF"
                              />
                            </svg>
                            <h5 class="open-sans font-600 font-12 gray-500">
                              F
                            </h5>
                          </div>
                        </div>
                        <div class="">
                          <div>
                            <svg
                              width="8"
                              height="40"
                              viewBox="0 0 8 40"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <rect
                                width="8"
                                height="40"
                                rx="2"
                                fill="#D2D5DC"
                              />
                              <rect
                                width="8"
                                height="40"
                                rx="2"
                                fill="#367BFF"
                              />
                            </svg>
                            <h5 class="open-sans font-600 font-12 gray-500">
                              S
                            </h5>
                          </div>
                        </div>

                        <div class="mr-3">
                          <div>
                            <svg
                              width="8"
                              height="40"
                              viewBox="0 0 8 40"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <rect
                                width="8"
                                height="40"
                                rx="2"
                                fill="#D2D5DC"
                              />
                              <rect
                                y="3"
                                width="8"
                                height="37"
                                rx="2"
                                fill="#367BFF"
                              />
                            </svg>
                            <h5 class="open-sans font-600 font-12 red-600">
                              S
                            </h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="relative  my-2 pb-1">
                    <div
                      class="scrollbar-css bg-gray-0 border-radius-8px overflow-auto mb-4"
                      style="height: 117px;border: 1px solid #EDEDF0;"
                    >
                      <div class="flex justify-between py-2 px-3">
                        <span class="open-sans font-600 font-12 secondary-900"
                          >Sleep</span
                        >
                        <div class="flex">
                          <svg
                            class="mr-2"
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M8 16C12.4165 16 16 12.4165 16 8C16 3.58353 12.4165 0 8 0C3.58353 0 0 3.58353 0 8C0 12.4165 3.58353 16 8 16Z"
                              fill="#FF4545"
                            />
                            <path
                              d="M7.00348 10.9617C7.00348 11.541 7.45185 12 8.00448 12C8.55712 12 8.99505 11.541 8.99505 10.9617C8.99505 10.3825 8.55712 9.91257 8.00448 9.91257C7.45185 9.91257 7.00348 10.3825 7.00348 10.9617Z"
                              fill="white"
                            />
                            <path
                              d="M7.33715 8.17486C7.37886 8.55738 7.63954 8.87432 8.00448 8.87432C8.36943 8.87432 8.63011 8.55738 8.66139 8.17486L8.99505 5.03825C9.05762 4.50273 8.51541 4 8.00448 4C7.49356 4 6.95135 4.50273 7.00348 5.03825L7.33715 8.17486Z"
                              fill="white"
                            />
                          </svg>
                          <h5
                            class="open-sans font-600 font-12"
                            style="color: #D81919;"
                          >
                            Avg. : 6.3 hrs
                          </h5>
                        </div>
                      </div>
                      <div
                        class=""
                        style="border-bottom:1px solid #EDEDF0;"
                      ></div>
                      <div class="flex mt-3 justify-between">
                        <div class="ml-3">
                          <div>
                            <svg
                              width="8"
                              height="40"
                              viewBox="0 0 8 40"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <rect
                                width="8"
                                height="40"
                                rx="2"
                                fill="#D2D5DC"
                              />
                              <rect
                                y="12"
                                width="8"
                                height="28"
                                rx="2"
                                fill="#7979FF"
                              />
                            </svg>
                            <h5 class="open-sans font-600 font-12 gray-500">
                              M
                            </h5>
                          </div>
                        </div>
                        <div class="">
                          <div>
                            <svg
                              width="8"
                              height="40"
                              viewBox="0 0 8 40"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <rect
                                width="8"
                                height="40"
                                rx="2"
                                fill="#D2D5DC"
                              />
                              <rect
                                y="8"
                                width="8"
                                height="32"
                                rx="2"
                                fill="#7979FF"
                              />
                            </svg>
                            <h5 class="open-sans font-600 font-12 gray-500">
                              T
                            </h5>
                          </div>
                        </div>
                        <div class="">
                          <div>
                            <svg
                              width="8"
                              height="40"
                              viewBox="0 0 8 40"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <rect
                                width="8"
                                height="40"
                                rx="2"
                                fill="#D2D5DC"
                              />
                              <rect
                                y="4"
                                width="8"
                                height="36"
                                rx="2"
                                fill="#7979FF"
                              />
                            </svg>
                            <h5 class="open-sans font-600 font-12 gray-500">
                              W
                            </h5>
                          </div>
                        </div>
                        <div class="">
                          <div>
                            <svg
                              width="8"
                              height="40"
                              viewBox="0 0 8 40"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <rect
                                width="8"
                                height="40"
                                rx="2"
                                fill="#D2D5DC"
                              />
                              <rect
                                y="10"
                                width="8"
                                height="30"
                                rx="2"
                                fill="#7979FF"
                              />
                            </svg>
                            <h5 class="open-sans font-600 font-12 gray-500">
                              T
                            </h5>
                          </div>
                        </div>
                        <div class="">
                          <div>
                            <svg
                              width="8"
                              height="40"
                              viewBox="0 0 8 40"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <rect
                                width="8"
                                height="40"
                                rx="2"
                                fill="#D2D5DC"
                              />
                              <rect
                                width="8"
                                height="40"
                                rx="2"
                                fill="#7979FF"
                              />
                            </svg>
                            <h5 class="open-sans font-600 font-12 gray-500">
                              F
                            </h5>
                          </div>
                        </div>
                        <div class="">
                          <div>
                            <svg
                              width="8"
                              height="40"
                              viewBox="0 0 8 40"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <rect
                                width="8"
                                height="40"
                                rx="2"
                                fill="#D2D5DC"
                              />
                              <rect
                                y="4"
                                width="8"
                                height="36"
                                rx="2"
                                fill="#7979FF"
                              />
                            </svg>
                            <h5 class="open-sans font-600 font-12 gray-500">
                              S
                            </h5>
                          </div>
                        </div>

                        <div class="mr-3">
                          <div>
                            <svg
                              width="8"
                              height="40"
                              viewBox="0 0 8 40"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <rect
                                width="8"
                                height="40"
                                rx="2"
                                fill="#D2D5DC"
                              />
                              <rect
                                y="3"
                                width="8"
                                height="37"
                                rx="2"
                                fill="#7979FF"
                              />
                            </svg>
                            <h5 class="open-sans font-600 font-12 red-600">
                              S
                            </h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="relative  my-2 pb-1">
                    <div
                      class="scrollbar-css bg-gray-0 border-radius-8px overflow-auto mb-4"
                      style="height: 117px;border: 1px solid #EDEDF0;"
                    >
                      <div class="flex justify-between py-2 px-3">
                        <span class="open-sans font-600 font-12 secondary-900"
                          >Water</span
                        >
                        <span
                          class="open-sans font-600 font-12"
                          style="color: #BA5400;"
                          >Avg. : 2.6L</span
                        >
                      </div>
                      <div
                        class=""
                        style="border-bottom:1px solid #EDEDF0;"
                      ></div>
                      <div class="flex mt-3 justify-between">
                        <div class="ml-3">
                          <div>
                            <svg
                              width="8"
                              height="40"
                              viewBox="0 0 8 40"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <rect
                                width="8"
                                height="40"
                                rx="2"
                                fill="#D2D5DC"
                              />
                              <rect
                                width="8"
                                height="40"
                                rx="2"
                                fill="#3AA03A"
                              />
                            </svg>
                            <h5 class="open-sans font-600 font-12 gray-500">
                              M
                            </h5>
                          </div>
                        </div>
                        <div class="">
                          <div>
                            <svg
                              width="8"
                              height="40"
                              viewBox="0 0 8 40"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <rect
                                width="8"
                                height="40"
                                rx="2"
                                fill="#D2D5DC"
                              />
                              <rect
                                y="14"
                                width="8"
                                height="26"
                                rx="2"
                                fill="#3AA03A"
                              />
                            </svg>
                            <h5 class="open-sans font-600 font-12 gray-500">
                              T
                            </h5>
                          </div>
                        </div>
                        <div class="">
                          <div>
                            <svg
                              width="8"
                              height="40"
                              viewBox="0 0 8 40"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <rect
                                width="8"
                                height="40"
                                rx="2"
                                fill="#D2D5DC"
                              />
                              <rect
                                y="2"
                                width="8"
                                height="38"
                                rx="2"
                                fill="#3AA03A"
                              />
                            </svg>
                            <h5 class="open-sans font-600 font-12 gray-500">
                              W
                            </h5>
                          </div>
                        </div>
                        <div class="">
                          <div>
                            <svg
                              width="8"
                              height="40"
                              viewBox="0 0 8 40"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <rect
                                width="8"
                                height="40"
                                rx="2"
                                fill="#D2D5DC"
                              />
                              <rect
                                y="4"
                                width="8"
                                height="36"
                                rx="2"
                                fill="#3AA03A"
                              />
                            </svg>
                            <h5 class="open-sans font-600 font-12 gray-500">
                              T
                            </h5>
                          </div>
                        </div>
                        <div class="">
                          <div>
                            <svg
                              width="8"
                              height="40"
                              viewBox="0 0 8 40"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <rect
                                width="8"
                                height="40"
                                rx="2"
                                fill="#D2D5DC"
                              />
                              <rect
                                y="8"
                                width="8"
                                height="32"
                                rx="2"
                                fill="#3AA03A"
                              />
                            </svg>
                            <h5 class="open-sans font-600 font-12 gray-500">
                              F
                            </h5>
                          </div>
                        </div>
                        <div class="">
                          <div>
                            <svg
                              width="8"
                              height="40"
                              viewBox="0 0 8 40"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <rect
                                width="8"
                                height="40"
                                rx="2"
                                fill="#D2D5DC"
                              />
                              <rect
                                y="6"
                                width="8"
                                height="34"
                                rx="2"
                                fill="#3AA03A"
                              />
                            </svg>
                            <h5 class="open-sans font-600 font-12 gray-500">
                              S
                            </h5>
                          </div>
                        </div>

                        <div class="mr-3">
                          <div>
                            <svg
                              width="8"
                              height="40"
                              viewBox="0 0 8 40"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <rect
                                width="8"
                                height="40"
                                rx="2"
                                fill="#D2D5DC"
                              />
                              <rect
                                y="3"
                                width="8"
                                height="37"
                                rx="2"
                                fill="#3AA03A"
                              />
                            </svg>
                            <h5 class="open-sans font-600 font-12 red-600">
                              S
                            </h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <hr class="m-2 hr-border-1" />
              <div class="sleep-timer mt-12 mb-4">
                <div class="sleep-timer-header flex items-center">
                  <svg
                    width="20"
                    height="20"
                    class="mr-2"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.3793 0.165237C14.4285 3.68773 13.1246 4.8928 11.8042 6.11247C11.1206 6.74372 10.4317 7.38008 10.2636 8.36516L10.2108 8.67495L10.0132 8.43014C8.90202 7.05424 8.8935 5.55958 9.44177 4.11091C9.98103 2.68585 11.062 1.30922 12.1527 0.139683L12.2831 0L12.3793 0.165237Z"
                      fill="#868FA0"
                    />
                    <path
                      d="M4.72805 1.3635C8.66789 2.40528 8.59805 4.1793 8.52675 5.97522C8.49 6.90506 8.45277 7.8422 9.03048 8.65767L9.21202 8.91392L8.89907 8.88082C7.14063 8.69344 6.07767 7.64241 5.44107 6.23049C4.81468 4.84145 4.60565 3.10393 4.54992 1.50561L4.54335 1.31458L4.72805 1.3635Z"
                      fill="#868FA0"
                    />
                    <path
                      d="M0.165237 7.62074C3.68773 5.57149 4.8928 6.87535 6.11247 8.19577C6.74372 8.87934 7.38008 9.56826 8.36516 9.73642L8.67495 9.78923L8.43014 9.98683C7.05424 11.098 5.55958 11.1065 4.11091 10.5582C2.68585 10.019 1.30922 8.93799 0.139683 7.84729L0 7.71686L0.165237 7.62074Z"
                      fill="#868FA0"
                    />
                    <path
                      d="M1.3635 15.2719C2.40528 11.3321 4.1793 11.4019 5.97522 11.4732C6.90506 11.51 7.8422 11.5472 8.65767 10.9695L8.91392 10.788L8.88082 11.1009C8.69344 12.8594 7.64241 13.9223 6.23049 14.5589C4.84145 15.1853 3.10393 15.3943 1.50561 15.4501L1.31458 15.4566L1.3635 15.2719Z"
                      fill="#868FA0"
                    />
                    <path
                      d="M7.62074 19.8348C5.57149 16.3123 6.87535 15.1072 8.19577 13.8875C8.87934 13.2563 9.56826 12.6199 9.73642 11.6348L9.78923 11.3251L9.98683 11.5699C11.098 12.9458 11.1065 14.4404 10.5582 15.8891C10.019 17.3141 8.93799 18.6908 7.84729 19.8603L7.71686 20L7.62074 19.8348Z"
                      fill="#868FA0"
                    />
                    <path
                      d="M15.2719 18.6365C11.3321 17.5947 11.4019 15.8207 11.4732 14.0248C11.51 13.0949 11.5472 12.1578 10.9695 11.3423L10.788 11.0861L11.1009 11.1192C12.8594 11.3066 13.9223 12.3576 14.5589 13.7695C15.1853 15.1585 15.3943 16.8961 15.4501 18.4944L15.4566 18.6854L15.2719 18.6365Z"
                      fill="#868FA0"
                    />
                    <path
                      d="M19.8348 12.3793C16.3123 14.4285 15.1072 13.1246 13.8875 11.8042C13.2563 11.1206 12.6199 10.4317 11.6348 10.2636L11.3251 10.2108L11.5699 10.0132C12.9458 8.90202 14.4404 8.8935 15.8891 9.44177C17.3141 9.98103 18.6908 11.062 19.8603 12.1527L20 12.2831L19.8348 12.3793Z"
                      fill="#868FA0"
                    />
                    <path
                      d="M18.6365 4.72805C17.5947 8.66789 15.8207 8.59805 14.0248 8.52675C13.0949 8.49 12.1578 8.45277 11.3423 9.03048L11.0861 9.21202L11.1192 8.89907C11.3066 7.14063 12.3576 6.07767 13.7695 5.44107C15.1585 4.81468 16.8961 4.60565 18.4944 4.54992L18.6854 4.54335L18.6365 4.72805Z"
                      fill="#868FA0"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M9.97518 8.78958C10.6585 8.78958 11.2124 9.34344 11.2124 10.0268C11.2124 10.7101 10.6585 11.264 9.97518 11.264C9.29185 11.264 8.73799 10.7101 8.73799 10.0268C8.73799 9.34344 9.29185 8.78958 9.97518 8.78958Z"
                      fill="#868FA0"
                    />
                  </svg>

                  <span class="sleep-title open-sans">Habit Changer </span>
                </div>
                <div class="relative sleep-timer-body my-2 pb-1">
                  <div class="flex items-center justify-between">
                    <div class="open-sans font-12 font-bold blue-500">
                      Quit smoking
                    </div>
                    <div class="gray-500 open-sans font-12 font-bold">
                      Target: 7 days
                    </div>
                  </div>
                  <div class="flex justify-center">
                    <div class="mt-6 mr-2">
                      <div class="flex">
                        <div class="quit-smoking mr-1 flex justify-center">
                          <span class="font-24 font-700 open-sans blue-900"
                            >0</span
                          >
                        </div>
                        <div class="quit-smoking mr-1 flex justify-center">
                          <span class="font-24 font-700 open-sans blue-900"
                            >2</span
                          >
                        </div>
                      </div>
                      <div
                        class="text-center font-12 font-700 open-sans gray-500"
                      >
                        Days
                      </div>
                    </div>
                    <div class="mt-6 mr-2">
                      <div class="flex">
                        <div class="quit-smoking mr-1 flex justify-center">
                          <span class="font-24 font-700 open-sans blue-900"
                            >2</span
                          >
                        </div>
                        <div class="quit-smoking mr-1 flex justify-center">
                          <span class="font-24 font-700 open-sans blue-900"
                            >1</span
                          >
                        </div>
                      </div>
                      <div
                        class="text-center font-12 font-700 open-sans gray-500"
                      >
                        Hours
                      </div>
                    </div>
                    <div class="mt-6 mr-2">
                      <div class="flex">
                        <div class="quit-smoking mr-1 flex justify-center">
                          <span class="font-24 font-700 open-sans blue-900"
                            >2</span
                          >
                        </div>
                        <div class="quit-smoking mr-1 flex justify-center">
                          <span class="font-24 font-700 open-sans blue-900"
                            >3</span
                          >
                        </div>
                      </div>
                      <div
                        class="text-center font-12 font-700 open-sans gray-500"
                      >
                        Mins.
                      </div>
                    </div>
                    <div class="mt-6">
                      <div class="flex">
                        <div class="quit-smoking mr-1 flex justify-center">
                          <span class="font-24 font-700 open-sans blue-900"
                            >4</span
                          >
                        </div>
                        <div class="quit-smoking mr-1 flex justify-center">
                          <span class="font-24 font-700 open-sans blue-900"
                            >8</span
                          >
                        </div>
                      </div>
                      <div
                        class="text-center font-12 font-700 open-sans gray-500"
                      >
                        Secs.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <hr class="m-2 hr-border-1" />
              <vs-tabs alignment="fixed" class="tracker-tab mt-12">
                <vs-tab label="Daily Tracker">
                  <div class="tab-text">
                    <hr class="m-2 hr-border-1" />
                    <div class="date flex justify-between my-4">
                      <div class="left-arrow">
                        <span
                          ><svg
                            width="8"
                            height="12"
                            viewBox="0 0 8 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M0.579559 6.43967C0.339625 6.19575 0.339625 5.80425 0.579559 5.56033L5.86523 0.186981C6.11047 -0.0623283 6.51215 -0.0623283 6.75739 0.186981L7.41966 0.860229C7.65957 1.10412 7.65959 1.49559 7.41971 1.73951L3.22973 6L7.41971 10.2605C7.6596 10.5044 7.65957 10.8959 7.41966 11.1398L6.7574 11.813C6.51216 12.0623 6.11047 12.0623 5.86523 11.813L0.579559 6.43967Z"
                              fill="#868FA0"
                            /></svg
                        ></span>
                      </div>
                      <div class="center-date-icon flex">
                        <span
                          ><svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M0.799805 3.2C0.799805 2.32 1.5198 1.6 2.3998 1.6H13.5998C14.0241 1.6 14.4311 1.76857 14.7312 2.06863C15.0312 2.36869 15.1998 2.77565 15.1998 3.2V14.4C15.1998 14.8243 15.0312 15.2313 14.7312 15.5314C14.4311 15.8314 14.0241 16 13.5998 16H2.3998C1.97546 16 1.56849 15.8314 1.26843 15.5314C0.968376 15.2313 0.799805 14.8243 0.799805 14.4V3.2ZM2.3998 4.8V14.4H13.5998V4.8H2.3998ZM3.9998 0H5.5998V1.6H3.9998V0ZM10.3998 0H11.9998V1.6H10.3998V0ZM3.9998 7.2H5.5998V8.8H3.9998V7.2ZM3.9998 10.4H5.5998V12H3.9998V10.4ZM7.1998 7.2H8.7998V8.8H7.1998V7.2ZM7.1998 10.4H8.7998V12H7.1998V10.4ZM10.3998 7.2H11.9998V8.8H10.3998V7.2ZM10.3998 10.4H11.9998V12H10.3998V10.4Z"
                              fill="#868FA0"
                            /></svg
                        ></span>
                        <div class="day">
                          <h1
                            class="font-600 font-14 open-sans secondary-900 mx-1"
                            @click="showCalendar = !showCalendar"
                          >
                            Today
                            <!-- <datepicker :inline="true" ref="programaticOpen"></datepicker> -->
                          </h1>
                          <v-date-picker
                            v-show="showCalendar"
                            style="position: absolute;z-index: 999;left: 20px;background: #FFFFFF;box-shadow: 0px 15px 35px rgba(51, 51, 78, 0.1), 0px 5px 15px rgba(0, 0, 0, 0.13), 0px 0px 2px rgba(0, 0, 0, 0.1);border-radius: 6px;border: none !important;"
                          />
                          <!-- <v-calendar v-show="showCalendar" style="position: absolute;z-index: 999;left: 20px;background: #FFFFFF;box-shadow: 0px 15px 35px rgba(51, 51, 78, 0.1), 0px 5px 15px rgba(0, 0, 0, 0.13), 0px 0px 2px rgba(0, 0, 0, 0.1);border-radius: 6px;border: none !important;"></v-calendar> -->
                        </div>
                        <span class="flex items-center"
                          ><svg
                            width="8"
                            height="6"
                            viewBox="0 0 8 6"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M3.71879 5.136C3.87228 5.288 4.12772 5.288 4.28121 5.136L7.6411 1.80866C7.7863 1.66486 7.7863 1.43754 7.6411 1.29375L7.20715 0.864001C7.05368 0.712012 6.79826 0.711998 6.64477 0.86397L4 3.4825L1.35523 0.86397C1.20174 0.711998 0.946325 0.712012 0.792849 0.864002L0.3589 1.29375C0.2137 1.43754 0.2137 1.66486 0.3589 1.80866L3.71879 5.136Z"
                              fill="#868FA0"
                            />
                          </svg>
                        </span>
                      </div>
                      <div class="right-arrow">
                        <span
                          ><svg
                            width="8"
                            height="12"
                            viewBox="0 0 8 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M7.42044 5.56033C7.66038 5.80425 7.66037 6.19575 7.42044 6.43967L2.13477 11.813C1.88953 12.0623 1.48785 12.0623 1.24261 11.813L0.580343 11.1398C0.340429 10.8959 0.340406 10.5044 0.580291 10.2605L4.77027 6L0.58029 1.73951C0.340404 1.49559 0.340427 1.10412 0.580341 0.86023L1.2426 0.186982C1.48784 -0.0623267 1.88953 -0.0623279 2.13477 0.186981L7.42044 5.56033Z"
                              fill="#D2D5DC"
                            /></svg
                        ></span>
                      </div>
                    </div>
                    <div class="progress-tracker">
                      <div
                        class="progress-tracker-header flex items-center justify-between"
                      >
                        <span
                          ><svg
                            width="20"
                            class="mr-2"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M18.2536 4.26249C18.3021 4.38562 18.3848 4.4909 18.4911 4.56492C18.5973 4.63894 18.7223 4.67834 18.8501 4.67812C18.9338 4.67692 19.0166 4.66027 19.0947 4.62896C19.1749 4.59524 19.2477 4.54516 19.309 4.48167C19.3703 4.41818 19.4188 4.34256 19.4516 4.25927C19.4844 4.17598 19.5008 4.0867 19.5 3.99668C19.4991 3.90667 19.481 3.81774 19.4466 3.73513L18.1592 0.423498C18.1273 0.339641 18.0794 0.263348 18.0186 0.19919C17.9577 0.135031 17.885 0.0843253 17.8048 0.050109C17.7247 0.0158927 17.6388 -0.00113069 17.5522 5.82472e-05C17.4656 0.00124718 17.3801 0.0206246 17.3008 0.057029L14.1207 1.39777C13.9625 1.46474 13.8363 1.59441 13.7699 1.75827C13.7035 1.92212 13.7023 2.10673 13.7666 2.27149C13.8309 2.43624 13.9555 2.56765 14.1128 2.63679C14.2702 2.70594 14.4474 2.70716 14.6057 2.64019L16.4124 1.8715C15.3739 4.74963 9.89015 10.2382 1.14375 10.2382C0.973016 10.2382 0.809276 10.3088 0.68855 10.4346C0.567824 10.5603 0.5 10.7308 0.5 10.9086C0.5 11.0864 0.567824 11.2569 0.68855 11.3826C0.809276 11.5083 0.973016 11.5789 1.14375 11.5789C10.418 11.5789 16.3137 5.67921 17.5712 2.49271L18.2536 4.26249Z"
                              fill="#868FA0"
                            />
                            <path
                              d="M0.5 14.8596C0.5 14.3074 0.947715 13.8596 1.5 13.8596H4.68182C5.2341 13.8596 5.68182 14.3074 5.68182 14.8596V19C5.68182 19.5523 5.2341 20 4.68182 20H1.5C0.947714 20 0.5 19.5523 0.5 19V14.8596Z"
                              fill="#868FA0"
                            />
                            <path
                              d="M7.40909 12.2281C7.40909 11.6758 7.8568 11.2281 8.40909 11.2281H11.5909C12.1432 11.2281 12.5909 11.6758 12.5909 12.2281V19C12.5909 19.5523 12.1432 20 11.5909 20H8.40909C7.8568 20 7.40909 19.5523 7.40909 19V12.2281Z"
                              fill="#868FA0"
                            />
                            <path
                              d="M14.3182 8.71931C14.3182 8.16702 14.7659 7.71931 15.3182 7.71931H18.5C19.0523 7.71931 19.5 8.16702 19.5 8.71931V19C19.5 19.5523 19.0523 20 18.5 20H15.3182C14.7659 20 14.3182 19.5523 14.3182 19V8.71931Z"
                              fill="#868FA0"
                            />
                          </svg>
                          <h3>Progress Tracker</h3></span
                        >
                        <span
                          @click="inspireClient = true"
                          class="cursor-pointer"
                        >
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M13.6 0.400024H2.4C1.76348 0.400024 1.15303 0.653147 0.702944 1.10371C0.252856 1.55427 0 2.16536 0 2.80255V10.811C0 11.4482 0.252856 12.0593 0.702944 12.5098C1.15303 12.9604 1.76348 13.2135 2.4 13.2135H9.928C10.0848 13.2147 10.2378 13.2621 10.368 13.3497L13.296 15.3037C13.5817 15.4974 13.9189 15.6007 14.264 15.6C14.544 15.5994 14.8192 15.5278 15.064 15.3918C15.3454 15.2476 15.5816 15.0285 15.7467 14.7587C15.9118 14.4888 15.9995 14.1786 16 13.8622V2.80255C16 2.16536 15.7471 1.55427 15.2971 1.10371C14.847 0.653147 14.2365 0.400024 13.6 0.400024ZM10.4 9.2093H5.6C5.38783 9.2093 5.18434 9.12492 5.03431 8.97473C4.88429 8.82455 4.8 8.62085 4.8 8.40845C4.8 8.19606 4.88429 7.99236 5.03431 7.84217C5.18434 7.69198 5.38783 7.60761 5.6 7.60761H10.4C10.6122 7.60761 10.8157 7.69198 10.9657 7.84217C11.1157 7.99236 11.2 8.19606 11.2 8.40845C11.2 8.62085 11.1157 8.82455 10.9657 8.97473C10.8157 9.12492 10.6122 9.2093 10.4 9.2093ZM10.4 6.00592H5.6C5.38783 6.00592 5.18434 5.92155 5.03431 5.77136C4.88429 5.62118 4.8 5.41748 4.8 5.20508C4.8 4.99268 4.88429 4.78899 5.03431 4.6388C5.18434 4.48861 5.38783 4.40424 5.6 4.40424H10.4C10.6122 4.40424 10.8157 4.48861 10.9657 4.6388C11.1157 4.78899 11.2 4.99268 11.2 5.20508C11.2 5.41748 11.1157 5.62118 10.9657 5.77136C10.8157 5.92155 10.6122 6.00592 10.4 6.00592Z"
                              fill="#367BFF"
                            />
                          </svg>
                        </span>
                      </div>
                      <div class="progress-tracker-body my-4">
                        <div class="vx-row relative">
                          <div
                            class="vx-col w-full md:w-6/12 my-2 px-2 cursor-pointer"
                            @click="viewImg = !viewImg"
                          >
                            <img
                              src="../../../src/assets/images/katherine-img.png"
                              class="w-full"
                            />
                            <p>09-08-2020</p>
                          </div>
                          <div
                            class="vx-col w-full md:w-6/12 my-2 px-2"
                            v-if="previewImg && !viewImg"
                          >
                            <div
                              class="compare-stastic-upload"
                              ref="upload-btn"
                              @click="compareBox = !compareBox"
                            >
                              <div class="text-center">
                                <svg
                                  width="16"
                                  height="16"
                                  viewBox="0 0 16 16"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M8.8 7.2H11.2C11.6418 7.2 12 7.55817 12 8C12 8.44183 11.6418 8.8 11.2 8.8H8.8V11.2C8.8 11.6418 8.44183 12 8 12C7.55817 12 7.2 11.6418 7.2 11.2V8.8H4.8C4.35817 8.8 4 8.44183 4 8C4 7.55817 4.35817 7.2 4.8 7.2H7.2V4.8C7.2 4.35817 7.55817 4 8 4C8.44183 4 8.8 4.35817 8.8 4.8V7.2ZM8 16C5.87827 16 3.84344 15.1571 2.34315 13.6569C0.842855 12.1566 0 10.1217 0 8C0 5.87827 0.842855 3.84344 2.34315 2.34315C3.84344 0.842855 5.87827 0 8 0C10.1217 0 12.1566 0.842855 13.6569 2.34315C15.1571 3.84344 16 5.87827 16 8C16 10.1217 15.1571 12.1566 13.6569 13.6569C12.1566 15.1571 10.1217 16 8 16ZM8 14.4C9.69739 14.4 11.3253 13.7257 12.5255 12.5255C13.7257 11.3253 14.4 9.69739 14.4 8C14.4 6.30261 13.7257 4.67475 12.5255 3.47452C11.3253 2.27428 9.69739 1.6 8 1.6C6.30261 1.6 4.67475 2.27428 3.47452 3.47452C2.27428 4.67475 1.6 6.30261 1.6 8C1.6 9.69739 2.27428 11.3253 3.47452 12.5255C4.67475 13.7257 6.30261 14.4 8 14.4Z"
                                    fill="#367BFF"
                                  />
                                </svg>
                                <h3 class="open-sans font-600 font-10 gray-500">
                                  Select another measurement to compare
                                  statistics.
                                </h3>
                              </div>
                            </div>
                            <div
                              class="compare-stastic-upload-popup"
                              v-show="compareBox"
                              @click="compareBox = !compareBox"
                            >
                              <div class="vx-row w-full">
                                <div
                                  class="vx-col w-full md:w-6/12 my-2 px-2 cursor-pointer"
                                  @click="
                                    (previewImg = false), (uploadImg = true)
                                  "
                                >
                                  <img
                                    src="../../../src/assets/images/katherine-img.png"
                                    class="w-full"
                                  />
                                  <p>01-08-2020</p>
                                </div>
                                <div class="vx-col w-full md:w-6/12 my-2 px-2">
                                  <img
                                    src="../../../src/assets/images/katherine-img.png"
                                    class="w-full"
                                  />
                                  <p>01-08-2020</p>
                                </div>
                                <div class="vx-col w-full md:w-6/12 my-2 px-2">
                                  <img
                                    src="../../../src/assets/images/katherine-img.png"
                                    class="w-full"
                                  />
                                  <p>01-08-2020</p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            class="vx-col w-full md:w-6/12 my-2 px-2"
                            v-if="viewImg"
                          >
                            <img
                              src="../../../src/assets/images/katherine-img.png"
                              class="w-full"
                            />
                            <p>01-08-2020</p>
                          </div>
                          <div
                            class="vx-col w-full md:w-6/12 my-2 px-2"
                            v-if="viewImg"
                          >
                            <img
                              src="../../../src/assets/images/katherine-img.png"
                              class="w-full"
                            />
                            <p>01-08-2020</p>
                          </div>
                          <div
                            class="vx-col w-full md:w-6/12 my-2 px-2"
                            v-if="viewImg"
                          >
                            <img
                              src="../../../src/assets/images/katherine-img.png"
                              class="w-full"
                            />
                            <p>01-08-2020</p>
                          </div>
                          <div
                            class="vx-col w-full md:w-6/12 my-2 px-2 relative uploaded-img"
                            v-if="uploadImg"
                          >
                            <img
                              src="../../../src/assets/images/katherine-img.png"
                              class="w-full"
                            />
                            <p>04-08-2020</p>
                            <span class="img-close" @click="uploadImg = false"
                              ><svg
                                width="8"
                                height="8"
                                viewBox="0 0 8 8"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M6.21639 0.306019L4 2.52241L1.78361 0.306019C1.37559 -0.102007 0.714045 -0.102006 0.30602 0.30602C-0.102006 0.714045 -0.102007 1.37559 0.306019 1.78361L2.52241 4L0.306019 6.21639C-0.102007 6.62441 -0.102006 7.28595 0.30602 7.69398C0.714045 8.10201 1.37559 8.10201 1.78361 7.69398L4 5.47759L6.21639 7.69398C6.62441 8.10201 7.28595 8.10201 7.69398 7.69398C8.10201 7.28595 8.10201 6.62441 7.69398 6.21639L5.47759 4L7.69398 1.78361C8.10201 1.37559 8.10201 0.714045 7.69398 0.30602C7.28595 -0.102006 6.62441 -0.102007 6.21639 0.306019Z"
                                  fill="#FF4545"
                                />
                              </svg>
                            </span>
                          </div>
                        </div>
                      </div>
                      <div class="vx-row mb-4">
                        <div class="vx-col w-full md:w-6/12 my-2 px-2">
                          <div
                            class="bg-gray-0 border-radius-8px py-3 px-1 body-part-box"
                          >
                            <h3
                              class="gray-500 font-600 font-12 open-sans text-center mb-5"
                            >
                              Weight
                            </h3>
                            <h2
                              class="open-sans font-bold secondary-900 mb-5 text-center"
                              style="font-size: 32px"
                            >
                              60<small class="font-12">kg</small>
                            </h2>
                            <div class="flex justify-between items-center">
                              <div class="flex">
                                <span
                                  ><svg
                                    width="16"
                                    height="16"
                                    viewBox="0 0 16 16"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M6.72854 2.5475C3.01248 2.5475 0 5.55895 0 9.27376C0 12.9885 3.01248 16 6.72854 16C10.4446 16 13.4571 12.9885 13.4571 9.27376C13.4571 7.61125 12.8543 6.09034 11.8545 4.91646L10.6895 6.08105C11.3951 6.95475 11.8204 8.06594 11.8204 9.27376C11.8204 12.0806 9.53639 14.3639 6.72854 14.3639C3.9207 14.3639 1.63667 12.0806 1.63667 9.27376C1.63667 6.46683 3.9207 4.18362 6.72854 4.18362C7.93393 4.18362 9.04359 4.60609 9.91663 5.30844L11.0816 4.14385C9.90817 3.14748 8.38878 2.5475 6.72854 2.5475ZM6.72854 4.91077C4.31383 4.91077 2.36408 6.85983 2.36408 9.27376C2.36408 11.6876 4.31383 13.6367 6.72854 13.6367C9.14326 13.6367 11.093 11.6876 11.093 9.27376C11.093 8.26255 10.7532 7.3313 10.1781 6.59234L9.2631 7.50698C9.61392 8.00817 9.82003 8.61778 9.82003 9.27376C9.82003 10.9762 8.43162 12.3642 6.72854 12.3642C5.02545 12.3642 3.63705 10.9762 3.63705 9.27376C3.63705 7.57125 5.02545 6.18331 6.72854 6.18331C7.38188 6.18331 7.99012 6.38644 8.49023 6.73437L9.40519 5.81973C8.66697 5.24772 7.73722 4.91077 6.72854 4.91077ZM6.72854 6.91047C5.41858 6.91047 4.36446 7.96423 4.36446 9.27376C4.36446 10.5833 5.41858 11.637 6.72854 11.637C8.03849 11.637 9.09262 10.5833 9.09262 9.27376C9.09262 8.81675 8.9631 8.39042 8.74028 8.02964L7.62643 9.14309C7.6328 9.18646 7.63771 9.22862 7.63771 9.27376C7.63771 9.77575 7.2306 10.1827 6.72845 10.1827C6.22626 10.1827 5.81918 9.77575 5.81918 9.27376C5.81918 8.77174 6.22626 8.36481 6.72845 8.36481C6.76973 8.36481 6.80802 8.37081 6.84778 8.37608L7.96732 7.25693C7.60794 7.03671 7.18286 6.91047 6.72854 6.91047Z"
                                      fill="#868FA0"
                                    />
                                    <path
                                      d="M13.7584 0.0933318C13.8133 0.0437412 13.8838 0.0115442 13.9573 0.00243652C14.1622 -0.0233596 14.3683 0.159583 14.3665 0.366084V1.63862H15.6394C15.7777 1.63928 15.912 1.72628 15.969 1.85224C16.0261 1.97821 16.0029 2.13645 15.9122 2.2408L14.4574 3.87692C14.3897 3.95468 14.2877 4.00135 14.1846 4.0019H12.5138L6.98437 9.52947C6.85 9.66779 6.60041 9.66896 6.46475 9.53183C6.32907 9.39471 6.33301 9.14522 6.47293 9.01243L12.0024 3.48486V1.82034C12.0014 1.71813 12.046 1.61633 12.1217 1.54766L13.7584 0.0933318Z"
                                      fill="#868FA0"
                                    />
                                  </svg> </span
                                ><span
                                  class="open-sans font-12 gray-500 font-600"
                                  >62</span
                                >
                              </div>
                              <div
                                class="mcp-chip-danger px-2 py-1"
                                v-if="uploadImg"
                              >
                                <svg
                                  width="8"
                                  class="mr-2"
                                  height="6"
                                  viewBox="0 0 8 6"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M4.58006 5.52281L7.82105 1.50207C8.23353 0.991781 7.88839 0.199951 7.24019 0.199951H0.758232C0.118454 0.199951 -0.235108 0.982983 0.177381 1.50207L3.41836 5.52281C3.72141 5.89233 4.27701 5.89233 4.58006 5.52281Z"
                                    fill="#3AA03A"
                                  /></svg
                                ><span class="font-12">2kg</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="vx-col w-full md:w-6/12 my-2 px-2">
                          <div
                            class="bg-gray-0 border-radius-8px py-3 px-1 body-part-box"
                          >
                            <h3
                              class="gray-500 font-600 font-12 open-sans text-center mb-5"
                            >
                              Fat
                            </h3>
                            <h2
                              class="open-sans font-bold secondary-900 mb-5 text-center"
                              style="font-size: 32px"
                            >
                              15<small class="font-12">%</small>
                            </h2>
                            <div class="flex justify-between items-center">
                              <div class="flex">
                                <span
                                  ><svg
                                    width="16"
                                    height="16"
                                    viewBox="0 0 16 16"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M6.72854 2.5475C3.01248 2.5475 0 5.55895 0 9.27376C0 12.9885 3.01248 16 6.72854 16C10.4446 16 13.4571 12.9885 13.4571 9.27376C13.4571 7.61125 12.8543 6.09034 11.8545 4.91646L10.6895 6.08105C11.3951 6.95475 11.8204 8.06594 11.8204 9.27376C11.8204 12.0806 9.53639 14.3639 6.72854 14.3639C3.9207 14.3639 1.63667 12.0806 1.63667 9.27376C1.63667 6.46683 3.9207 4.18362 6.72854 4.18362C7.93393 4.18362 9.04359 4.60609 9.91663 5.30844L11.0816 4.14385C9.90817 3.14748 8.38878 2.5475 6.72854 2.5475ZM6.72854 4.91077C4.31383 4.91077 2.36408 6.85983 2.36408 9.27376C2.36408 11.6876 4.31383 13.6367 6.72854 13.6367C9.14326 13.6367 11.093 11.6876 11.093 9.27376C11.093 8.26255 10.7532 7.3313 10.1781 6.59234L9.2631 7.50698C9.61392 8.00817 9.82003 8.61778 9.82003 9.27376C9.82003 10.9762 8.43162 12.3642 6.72854 12.3642C5.02545 12.3642 3.63705 10.9762 3.63705 9.27376C3.63705 7.57125 5.02545 6.18331 6.72854 6.18331C7.38188 6.18331 7.99012 6.38644 8.49023 6.73437L9.40519 5.81973C8.66697 5.24772 7.73722 4.91077 6.72854 4.91077ZM6.72854 6.91047C5.41858 6.91047 4.36446 7.96423 4.36446 9.27376C4.36446 10.5833 5.41858 11.637 6.72854 11.637C8.03849 11.637 9.09262 10.5833 9.09262 9.27376C9.09262 8.81675 8.9631 8.39042 8.74028 8.02964L7.62643 9.14309C7.6328 9.18646 7.63771 9.22862 7.63771 9.27376C7.63771 9.77575 7.2306 10.1827 6.72845 10.1827C6.22626 10.1827 5.81918 9.77575 5.81918 9.27376C5.81918 8.77174 6.22626 8.36481 6.72845 8.36481C6.76973 8.36481 6.80802 8.37081 6.84778 8.37608L7.96732 7.25693C7.60794 7.03671 7.18286 6.91047 6.72854 6.91047Z"
                                      fill="#868FA0"
                                    />
                                    <path
                                      d="M13.7584 0.0933318C13.8133 0.0437412 13.8838 0.0115442 13.9573 0.00243652C14.1622 -0.0233596 14.3683 0.159583 14.3665 0.366084V1.63862H15.6394C15.7777 1.63928 15.912 1.72628 15.969 1.85224C16.0261 1.97821 16.0029 2.13645 15.9122 2.2408L14.4574 3.87692C14.3897 3.95468 14.2877 4.00135 14.1846 4.0019H12.5138L6.98437 9.52947C6.85 9.66779 6.60041 9.66896 6.46475 9.53183C6.32907 9.39471 6.33301 9.14522 6.47293 9.01243L12.0024 3.48486V1.82034C12.0014 1.71813 12.046 1.61633 12.1217 1.54766L13.7584 0.0933318Z"
                                      fill="#868FA0"
                                    />
                                  </svg> </span
                                ><span
                                  class="open-sans font-12 gray-500 font-600"
                                  >62</span
                                >
                              </div>
                              <div
                                class="mcp-chip-danger px-2 py-1"
                                v-if="uploadImg"
                              >
                                <svg
                                  width="8"
                                  class="mr-2"
                                  height="6"
                                  viewBox="0 0 8 6"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M4.58006 5.52281L7.82105 1.50207C8.23353 0.991781 7.88839 0.199951 7.24019 0.199951H0.758232C0.118454 0.199951 -0.235108 0.982983 0.177381 1.50207L3.41836 5.52281C3.72141 5.89233 4.27701 5.89233 4.58006 5.52281Z"
                                    fill="#3AA03A"
                                  /></svg
                                ><span class="font-12">2%</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="vx-col w-full md:w-6/12 my-2 px-2">
                          <div
                            class="bg-gray-0 border-radius-8px py-3 px-1 body-part-box"
                          >
                            <h3
                              class="gray-500 font-600 font-12 open-sans text-center mb-5"
                            >
                              Chest
                            </h3>
                            <h2
                              class="open-sans font-bold secondary-900 mb-5 text-center"
                              style="font-size: 32px"
                            >
                              81<small class="font-12">cm</small>
                            </h2>
                            <div class="flex justify-between items-center">
                              <div class="flex">
                                <span
                                  ><svg
                                    width="16"
                                    height="16"
                                    viewBox="0 0 16 16"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M6.72854 2.5475C3.01248 2.5475 0 5.55895 0 9.27376C0 12.9885 3.01248 16 6.72854 16C10.4446 16 13.4571 12.9885 13.4571 9.27376C13.4571 7.61125 12.8543 6.09034 11.8545 4.91646L10.6895 6.08105C11.3951 6.95475 11.8204 8.06594 11.8204 9.27376C11.8204 12.0806 9.53639 14.3639 6.72854 14.3639C3.9207 14.3639 1.63667 12.0806 1.63667 9.27376C1.63667 6.46683 3.9207 4.18362 6.72854 4.18362C7.93393 4.18362 9.04359 4.60609 9.91663 5.30844L11.0816 4.14385C9.90817 3.14748 8.38878 2.5475 6.72854 2.5475ZM6.72854 4.91077C4.31383 4.91077 2.36408 6.85983 2.36408 9.27376C2.36408 11.6876 4.31383 13.6367 6.72854 13.6367C9.14326 13.6367 11.093 11.6876 11.093 9.27376C11.093 8.26255 10.7532 7.3313 10.1781 6.59234L9.2631 7.50698C9.61392 8.00817 9.82003 8.61778 9.82003 9.27376C9.82003 10.9762 8.43162 12.3642 6.72854 12.3642C5.02545 12.3642 3.63705 10.9762 3.63705 9.27376C3.63705 7.57125 5.02545 6.18331 6.72854 6.18331C7.38188 6.18331 7.99012 6.38644 8.49023 6.73437L9.40519 5.81973C8.66697 5.24772 7.73722 4.91077 6.72854 4.91077ZM6.72854 6.91047C5.41858 6.91047 4.36446 7.96423 4.36446 9.27376C4.36446 10.5833 5.41858 11.637 6.72854 11.637C8.03849 11.637 9.09262 10.5833 9.09262 9.27376C9.09262 8.81675 8.9631 8.39042 8.74028 8.02964L7.62643 9.14309C7.6328 9.18646 7.63771 9.22862 7.63771 9.27376C7.63771 9.77575 7.2306 10.1827 6.72845 10.1827C6.22626 10.1827 5.81918 9.77575 5.81918 9.27376C5.81918 8.77174 6.22626 8.36481 6.72845 8.36481C6.76973 8.36481 6.80802 8.37081 6.84778 8.37608L7.96732 7.25693C7.60794 7.03671 7.18286 6.91047 6.72854 6.91047Z"
                                      fill="#868FA0"
                                    />
                                    <path
                                      d="M13.7584 0.0933318C13.8133 0.0437412 13.8838 0.0115442 13.9573 0.00243652C14.1622 -0.0233596 14.3683 0.159583 14.3665 0.366084V1.63862H15.6394C15.7777 1.63928 15.912 1.72628 15.969 1.85224C16.0261 1.97821 16.0029 2.13645 15.9122 2.2408L14.4574 3.87692C14.3897 3.95468 14.2877 4.00135 14.1846 4.0019H12.5138L6.98437 9.52947C6.85 9.66779 6.60041 9.66896 6.46475 9.53183C6.32907 9.39471 6.33301 9.14522 6.47293 9.01243L12.0024 3.48486V1.82034C12.0014 1.71813 12.046 1.61633 12.1217 1.54766L13.7584 0.0933318Z"
                                      fill="#868FA0"
                                    />
                                  </svg> </span
                                ><span
                                  class="open-sans font-12 gray-500 font-600"
                                  >62</span
                                >
                              </div>
                              <div
                                class="mcp-chip-danger px-2 py-1"
                                v-if="uploadImg"
                              >
                                <svg
                                  width="8"
                                  class="mr-2"
                                  height="6"
                                  viewBox="0 0 8 6"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M4.58006 5.52281L7.82105 1.50207C8.23353 0.991781 7.88839 0.199951 7.24019 0.199951H0.758232C0.118454 0.199951 -0.235108 0.982983 0.177381 1.50207L3.41836 5.52281C3.72141 5.89233 4.27701 5.89233 4.58006 5.52281Z"
                                    fill="#3AA03A"
                                  /></svg
                                ><span class="font-12">2cm</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="vx-col w-full md:w-6/12 my-2 px-2">
                          <div
                            class="bg-gray-0 border-radius-8px py-3 px-1 body-part-box"
                          >
                            <h3
                              class="gray-500 font-600 font-12 open-sans text-center mb-5"
                            >
                              Shoulders
                            </h3>
                            <h2
                              class="open-sans font-bold secondary-900 mb-5 text-center"
                              style="font-size: 32px"
                            >
                              41<small class="font-12">cm</small>
                            </h2>
                            <div class="flex justify-between items-center">
                              <div class="flex">
                                <span
                                  ><svg
                                    width="16"
                                    height="16"
                                    viewBox="0 0 16 16"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M6.72854 2.5475C3.01248 2.5475 0 5.55895 0 9.27376C0 12.9885 3.01248 16 6.72854 16C10.4446 16 13.4571 12.9885 13.4571 9.27376C13.4571 7.61125 12.8543 6.09034 11.8545 4.91646L10.6895 6.08105C11.3951 6.95475 11.8204 8.06594 11.8204 9.27376C11.8204 12.0806 9.53639 14.3639 6.72854 14.3639C3.9207 14.3639 1.63667 12.0806 1.63667 9.27376C1.63667 6.46683 3.9207 4.18362 6.72854 4.18362C7.93393 4.18362 9.04359 4.60609 9.91663 5.30844L11.0816 4.14385C9.90817 3.14748 8.38878 2.5475 6.72854 2.5475ZM6.72854 4.91077C4.31383 4.91077 2.36408 6.85983 2.36408 9.27376C2.36408 11.6876 4.31383 13.6367 6.72854 13.6367C9.14326 13.6367 11.093 11.6876 11.093 9.27376C11.093 8.26255 10.7532 7.3313 10.1781 6.59234L9.2631 7.50698C9.61392 8.00817 9.82003 8.61778 9.82003 9.27376C9.82003 10.9762 8.43162 12.3642 6.72854 12.3642C5.02545 12.3642 3.63705 10.9762 3.63705 9.27376C3.63705 7.57125 5.02545 6.18331 6.72854 6.18331C7.38188 6.18331 7.99012 6.38644 8.49023 6.73437L9.40519 5.81973C8.66697 5.24772 7.73722 4.91077 6.72854 4.91077ZM6.72854 6.91047C5.41858 6.91047 4.36446 7.96423 4.36446 9.27376C4.36446 10.5833 5.41858 11.637 6.72854 11.637C8.03849 11.637 9.09262 10.5833 9.09262 9.27376C9.09262 8.81675 8.9631 8.39042 8.74028 8.02964L7.62643 9.14309C7.6328 9.18646 7.63771 9.22862 7.63771 9.27376C7.63771 9.77575 7.2306 10.1827 6.72845 10.1827C6.22626 10.1827 5.81918 9.77575 5.81918 9.27376C5.81918 8.77174 6.22626 8.36481 6.72845 8.36481C6.76973 8.36481 6.80802 8.37081 6.84778 8.37608L7.96732 7.25693C7.60794 7.03671 7.18286 6.91047 6.72854 6.91047Z"
                                      fill="#868FA0"
                                    />
                                    <path
                                      d="M13.7584 0.0933318C13.8133 0.0437412 13.8838 0.0115442 13.9573 0.00243652C14.1622 -0.0233596 14.3683 0.159583 14.3665 0.366084V1.63862H15.6394C15.7777 1.63928 15.912 1.72628 15.969 1.85224C16.0261 1.97821 16.0029 2.13645 15.9122 2.2408L14.4574 3.87692C14.3897 3.95468 14.2877 4.00135 14.1846 4.0019H12.5138L6.98437 9.52947C6.85 9.66779 6.60041 9.66896 6.46475 9.53183C6.32907 9.39471 6.33301 9.14522 6.47293 9.01243L12.0024 3.48486V1.82034C12.0014 1.71813 12.046 1.61633 12.1217 1.54766L13.7584 0.0933318Z"
                                      fill="#868FA0"
                                    />
                                  </svg> </span
                                ><span
                                  class="open-sans font-12 gray-500 font-600"
                                  >62</span
                                >
                              </div>
                              <div
                                class="mcp-chip-danger px-2 py-1"
                                v-if="uploadImg"
                              >
                                <svg
                                  width="8"
                                  class="mr-2"
                                  height="6"
                                  viewBox="0 0 8 6"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M4.58006 5.52281L7.82105 1.50207C8.23353 0.991781 7.88839 0.199951 7.24019 0.199951H0.758232C0.118454 0.199951 -0.235108 0.982983 0.177381 1.50207L3.41836 5.52281C3.72141 5.89233 4.27701 5.89233 4.58006 5.52281Z"
                                    fill="#3AA03A"
                                  /></svg
                                ><span class="font-12">2cm</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="vx-col w-full md:w-6/12 my-2 px-2">
                          <div
                            class="bg-gray-0 border-radius-8px py-3 px-1 body-part-box"
                          >
                            <h3
                              class="gray-500 font-600 font-12 open-sans text-center mb-5"
                            >
                              Waist
                            </h3>
                            <h2
                              class="open-sans font-bold secondary-900 mb-5 text-center"
                              style="font-size: 32px"
                            >
                              64<small class="font-12">cm</small>
                            </h2>
                            <div class="flex justify-between items-center">
                              <div class="flex">
                                <span
                                  ><svg
                                    width="16"
                                    height="16"
                                    viewBox="0 0 16 16"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M6.72854 2.5475C3.01248 2.5475 0 5.55895 0 9.27376C0 12.9885 3.01248 16 6.72854 16C10.4446 16 13.4571 12.9885 13.4571 9.27376C13.4571 7.61125 12.8543 6.09034 11.8545 4.91646L10.6895 6.08105C11.3951 6.95475 11.8204 8.06594 11.8204 9.27376C11.8204 12.0806 9.53639 14.3639 6.72854 14.3639C3.9207 14.3639 1.63667 12.0806 1.63667 9.27376C1.63667 6.46683 3.9207 4.18362 6.72854 4.18362C7.93393 4.18362 9.04359 4.60609 9.91663 5.30844L11.0816 4.14385C9.90817 3.14748 8.38878 2.5475 6.72854 2.5475ZM6.72854 4.91077C4.31383 4.91077 2.36408 6.85983 2.36408 9.27376C2.36408 11.6876 4.31383 13.6367 6.72854 13.6367C9.14326 13.6367 11.093 11.6876 11.093 9.27376C11.093 8.26255 10.7532 7.3313 10.1781 6.59234L9.2631 7.50698C9.61392 8.00817 9.82003 8.61778 9.82003 9.27376C9.82003 10.9762 8.43162 12.3642 6.72854 12.3642C5.02545 12.3642 3.63705 10.9762 3.63705 9.27376C3.63705 7.57125 5.02545 6.18331 6.72854 6.18331C7.38188 6.18331 7.99012 6.38644 8.49023 6.73437L9.40519 5.81973C8.66697 5.24772 7.73722 4.91077 6.72854 4.91077ZM6.72854 6.91047C5.41858 6.91047 4.36446 7.96423 4.36446 9.27376C4.36446 10.5833 5.41858 11.637 6.72854 11.637C8.03849 11.637 9.09262 10.5833 9.09262 9.27376C9.09262 8.81675 8.9631 8.39042 8.74028 8.02964L7.62643 9.14309C7.6328 9.18646 7.63771 9.22862 7.63771 9.27376C7.63771 9.77575 7.2306 10.1827 6.72845 10.1827C6.22626 10.1827 5.81918 9.77575 5.81918 9.27376C5.81918 8.77174 6.22626 8.36481 6.72845 8.36481C6.76973 8.36481 6.80802 8.37081 6.84778 8.37608L7.96732 7.25693C7.60794 7.03671 7.18286 6.91047 6.72854 6.91047Z"
                                      fill="#868FA0"
                                    />
                                    <path
                                      d="M13.7584 0.0933318C13.8133 0.0437412 13.8838 0.0115442 13.9573 0.00243652C14.1622 -0.0233596 14.3683 0.159583 14.3665 0.366084V1.63862H15.6394C15.7777 1.63928 15.912 1.72628 15.969 1.85224C16.0261 1.97821 16.0029 2.13645 15.9122 2.2408L14.4574 3.87692C14.3897 3.95468 14.2877 4.00135 14.1846 4.0019H12.5138L6.98437 9.52947C6.85 9.66779 6.60041 9.66896 6.46475 9.53183C6.32907 9.39471 6.33301 9.14522 6.47293 9.01243L12.0024 3.48486V1.82034C12.0014 1.71813 12.046 1.61633 12.1217 1.54766L13.7584 0.0933318Z"
                                      fill="#868FA0"
                                    />
                                  </svg> </span
                                ><span
                                  class="open-sans font-12 gray-500 font-600"
                                  >62</span
                                >
                              </div>
                              <div
                                class="mcp-chip-danger px-2 py-1 bg-green-50 text-Green-500"
                                v-if="uploadImg"
                              >
                                <svg
                                  width="8"
                                  class="mr-2"
                                  height="6"
                                  viewBox="0 0 8 6"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M4.58006 5.52281L7.82105 1.50207C8.23353 0.991781 7.88839 0.199951 7.24019 0.199951H0.758232C0.118454 0.199951 -0.235108 0.982983 0.177381 1.50207L3.41836 5.52281C3.72141 5.89233 4.27701 5.89233 4.58006 5.52281Z"
                                    fill="#3AA03A"
                                  /></svg
                                ><span class="font-12">0cm</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="vx-col w-full md:w-6/12 my-2 px-2">
                          <div
                            class="bg-gray-0 border-radius-8px py-3 px-1 body-part-box"
                          >
                            <h3
                              class="gray-500 font-600 font-12 open-sans text-center mb-5"
                            >
                              Upper Arm
                            </h3>
                            <h2
                              class="open-sans font-bold secondary-900 mb-5 text-center"
                              style="font-size: 32px"
                            >
                              33<small class="font-12">cm</small>
                            </h2>
                            <div class="flex justify-between items-center">
                              <div class="flex">
                                <span
                                  ><svg
                                    width="16"
                                    height="16"
                                    viewBox="0 0 16 16"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M6.72854 2.5475C3.01248 2.5475 0 5.55895 0 9.27376C0 12.9885 3.01248 16 6.72854 16C10.4446 16 13.4571 12.9885 13.4571 9.27376C13.4571 7.61125 12.8543 6.09034 11.8545 4.91646L10.6895 6.08105C11.3951 6.95475 11.8204 8.06594 11.8204 9.27376C11.8204 12.0806 9.53639 14.3639 6.72854 14.3639C3.9207 14.3639 1.63667 12.0806 1.63667 9.27376C1.63667 6.46683 3.9207 4.18362 6.72854 4.18362C7.93393 4.18362 9.04359 4.60609 9.91663 5.30844L11.0816 4.14385C9.90817 3.14748 8.38878 2.5475 6.72854 2.5475ZM6.72854 4.91077C4.31383 4.91077 2.36408 6.85983 2.36408 9.27376C2.36408 11.6876 4.31383 13.6367 6.72854 13.6367C9.14326 13.6367 11.093 11.6876 11.093 9.27376C11.093 8.26255 10.7532 7.3313 10.1781 6.59234L9.2631 7.50698C9.61392 8.00817 9.82003 8.61778 9.82003 9.27376C9.82003 10.9762 8.43162 12.3642 6.72854 12.3642C5.02545 12.3642 3.63705 10.9762 3.63705 9.27376C3.63705 7.57125 5.02545 6.18331 6.72854 6.18331C7.38188 6.18331 7.99012 6.38644 8.49023 6.73437L9.40519 5.81973C8.66697 5.24772 7.73722 4.91077 6.72854 4.91077ZM6.72854 6.91047C5.41858 6.91047 4.36446 7.96423 4.36446 9.27376C4.36446 10.5833 5.41858 11.637 6.72854 11.637C8.03849 11.637 9.09262 10.5833 9.09262 9.27376C9.09262 8.81675 8.9631 8.39042 8.74028 8.02964L7.62643 9.14309C7.6328 9.18646 7.63771 9.22862 7.63771 9.27376C7.63771 9.77575 7.2306 10.1827 6.72845 10.1827C6.22626 10.1827 5.81918 9.77575 5.81918 9.27376C5.81918 8.77174 6.22626 8.36481 6.72845 8.36481C6.76973 8.36481 6.80802 8.37081 6.84778 8.37608L7.96732 7.25693C7.60794 7.03671 7.18286 6.91047 6.72854 6.91047Z"
                                      fill="#868FA0"
                                    />
                                    <path
                                      d="M13.7584 0.0933318C13.8133 0.0437412 13.8838 0.0115442 13.9573 0.00243652C14.1622 -0.0233596 14.3683 0.159583 14.3665 0.366084V1.63862H15.6394C15.7777 1.63928 15.912 1.72628 15.969 1.85224C16.0261 1.97821 16.0029 2.13645 15.9122 2.2408L14.4574 3.87692C14.3897 3.95468 14.2877 4.00135 14.1846 4.0019H12.5138L6.98437 9.52947C6.85 9.66779 6.60041 9.66896 6.46475 9.53183C6.32907 9.39471 6.33301 9.14522 6.47293 9.01243L12.0024 3.48486V1.82034C12.0014 1.71813 12.046 1.61633 12.1217 1.54766L13.7584 0.0933318Z"
                                      fill="#868FA0"
                                    />
                                  </svg> </span
                                ><span
                                  class="open-sans font-12 gray-500 font-600"
                                  >62</span
                                >
                              </div>
                              <div
                                class="mcp-chip-danger px-2 py-1"
                                v-if="uploadImg"
                              >
                                <svg
                                  width="8"
                                  class="mr-2"
                                  height="6"
                                  viewBox="0 0 8 6"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M4.58006 5.52281L7.82105 1.50207C8.23353 0.991781 7.88839 0.199951 7.24019 0.199951H0.758232C0.118454 0.199951 -0.235108 0.982983 0.177381 1.50207L3.41836 5.52281C3.72141 5.89233 4.27701 5.89233 4.58006 5.52281Z"
                                    fill="#3AA03A"
                                  /></svg
                                ><span class="font-12">1cm</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="vx-col w-full md:w-6/12 my-2 px-2">
                          <div
                            class="bg-gray-0 border-radius-8px py-3 px-1 body-part-box"
                          >
                            <h3
                              class="gray-500 font-600 font-12 open-sans text-center mb-5"
                            >
                              Forearm
                            </h3>
                            <h2
                              class="open-sans font-bold secondary-900 mb-5 text-center"
                              style="font-size: 32px"
                            >
                              22<small class="font-12">cm</small>
                            </h2>
                            <div class="flex justify-between items-center">
                              <div class="flex">
                                <span
                                  ><svg
                                    width="16"
                                    height="16"
                                    viewBox="0 0 16 16"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M6.72854 2.5475C3.01248 2.5475 0 5.55895 0 9.27376C0 12.9885 3.01248 16 6.72854 16C10.4446 16 13.4571 12.9885 13.4571 9.27376C13.4571 7.61125 12.8543 6.09034 11.8545 4.91646L10.6895 6.08105C11.3951 6.95475 11.8204 8.06594 11.8204 9.27376C11.8204 12.0806 9.53639 14.3639 6.72854 14.3639C3.9207 14.3639 1.63667 12.0806 1.63667 9.27376C1.63667 6.46683 3.9207 4.18362 6.72854 4.18362C7.93393 4.18362 9.04359 4.60609 9.91663 5.30844L11.0816 4.14385C9.90817 3.14748 8.38878 2.5475 6.72854 2.5475ZM6.72854 4.91077C4.31383 4.91077 2.36408 6.85983 2.36408 9.27376C2.36408 11.6876 4.31383 13.6367 6.72854 13.6367C9.14326 13.6367 11.093 11.6876 11.093 9.27376C11.093 8.26255 10.7532 7.3313 10.1781 6.59234L9.2631 7.50698C9.61392 8.00817 9.82003 8.61778 9.82003 9.27376C9.82003 10.9762 8.43162 12.3642 6.72854 12.3642C5.02545 12.3642 3.63705 10.9762 3.63705 9.27376C3.63705 7.57125 5.02545 6.18331 6.72854 6.18331C7.38188 6.18331 7.99012 6.38644 8.49023 6.73437L9.40519 5.81973C8.66697 5.24772 7.73722 4.91077 6.72854 4.91077ZM6.72854 6.91047C5.41858 6.91047 4.36446 7.96423 4.36446 9.27376C4.36446 10.5833 5.41858 11.637 6.72854 11.637C8.03849 11.637 9.09262 10.5833 9.09262 9.27376C9.09262 8.81675 8.9631 8.39042 8.74028 8.02964L7.62643 9.14309C7.6328 9.18646 7.63771 9.22862 7.63771 9.27376C7.63771 9.77575 7.2306 10.1827 6.72845 10.1827C6.22626 10.1827 5.81918 9.77575 5.81918 9.27376C5.81918 8.77174 6.22626 8.36481 6.72845 8.36481C6.76973 8.36481 6.80802 8.37081 6.84778 8.37608L7.96732 7.25693C7.60794 7.03671 7.18286 6.91047 6.72854 6.91047Z"
                                      fill="#868FA0"
                                    />
                                    <path
                                      d="M13.7584 0.0933318C13.8133 0.0437412 13.8838 0.0115442 13.9573 0.00243652C14.1622 -0.0233596 14.3683 0.159583 14.3665 0.366084V1.63862H15.6394C15.7777 1.63928 15.912 1.72628 15.969 1.85224C16.0261 1.97821 16.0029 2.13645 15.9122 2.2408L14.4574 3.87692C14.3897 3.95468 14.2877 4.00135 14.1846 4.0019H12.5138L6.98437 9.52947C6.85 9.66779 6.60041 9.66896 6.46475 9.53183C6.32907 9.39471 6.33301 9.14522 6.47293 9.01243L12.0024 3.48486V1.82034C12.0014 1.71813 12.046 1.61633 12.1217 1.54766L13.7584 0.0933318Z"
                                      fill="#868FA0"
                                    />
                                  </svg> </span
                                ><span
                                  class="open-sans font-12 gray-500 font-600"
                                  >62</span
                                >
                              </div>
                              <div
                                class="mcp-chip-danger px-2 py-1 bg-green-50 text-Green-500"
                                v-if="uploadImg"
                              >
                                <svg
                                  width="8"
                                  class="mr-2"
                                  height="6"
                                  viewBox="0 0 8 6"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M4.58006 5.52281L7.82105 1.50207C8.23353 0.991781 7.88839 0.199951 7.24019 0.199951H0.758232C0.118454 0.199951 -0.235108 0.982983 0.177381 1.50207L3.41836 5.52281C3.72141 5.89233 4.27701 5.89233 4.58006 5.52281Z"
                                    fill="#3AA03A"
                                  /></svg
                                ><span class="font-12">2cm</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="vx-col w-full md:w-6/12 my-2 px-2">
                          <div
                            class="bg-gray-0 border-radius-8px py-3 px-1 body-part-box"
                          >
                            <h3
                              class="gray-500 font-600 font-12 open-sans text-center mb-5"
                            >
                              Upper Leg
                            </h3>
                            <h2
                              class="open-sans font-bold secondary-900 mb-5 text-center"
                              style="font-size: 32px"
                            >
                              33<small class="font-12">cm</small>
                            </h2>
                            <div class="flex justify-between items-center">
                              <div class="flex">
                                <span
                                  ><svg
                                    width="16"
                                    height="16"
                                    viewBox="0 0 16 16"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M6.72854 2.5475C3.01248 2.5475 0 5.55895 0 9.27376C0 12.9885 3.01248 16 6.72854 16C10.4446 16 13.4571 12.9885 13.4571 9.27376C13.4571 7.61125 12.8543 6.09034 11.8545 4.91646L10.6895 6.08105C11.3951 6.95475 11.8204 8.06594 11.8204 9.27376C11.8204 12.0806 9.53639 14.3639 6.72854 14.3639C3.9207 14.3639 1.63667 12.0806 1.63667 9.27376C1.63667 6.46683 3.9207 4.18362 6.72854 4.18362C7.93393 4.18362 9.04359 4.60609 9.91663 5.30844L11.0816 4.14385C9.90817 3.14748 8.38878 2.5475 6.72854 2.5475ZM6.72854 4.91077C4.31383 4.91077 2.36408 6.85983 2.36408 9.27376C2.36408 11.6876 4.31383 13.6367 6.72854 13.6367C9.14326 13.6367 11.093 11.6876 11.093 9.27376C11.093 8.26255 10.7532 7.3313 10.1781 6.59234L9.2631 7.50698C9.61392 8.00817 9.82003 8.61778 9.82003 9.27376C9.82003 10.9762 8.43162 12.3642 6.72854 12.3642C5.02545 12.3642 3.63705 10.9762 3.63705 9.27376C3.63705 7.57125 5.02545 6.18331 6.72854 6.18331C7.38188 6.18331 7.99012 6.38644 8.49023 6.73437L9.40519 5.81973C8.66697 5.24772 7.73722 4.91077 6.72854 4.91077ZM6.72854 6.91047C5.41858 6.91047 4.36446 7.96423 4.36446 9.27376C4.36446 10.5833 5.41858 11.637 6.72854 11.637C8.03849 11.637 9.09262 10.5833 9.09262 9.27376C9.09262 8.81675 8.9631 8.39042 8.74028 8.02964L7.62643 9.14309C7.6328 9.18646 7.63771 9.22862 7.63771 9.27376C7.63771 9.77575 7.2306 10.1827 6.72845 10.1827C6.22626 10.1827 5.81918 9.77575 5.81918 9.27376C5.81918 8.77174 6.22626 8.36481 6.72845 8.36481C6.76973 8.36481 6.80802 8.37081 6.84778 8.37608L7.96732 7.25693C7.60794 7.03671 7.18286 6.91047 6.72854 6.91047Z"
                                      fill="#868FA0"
                                    />
                                    <path
                                      d="M13.7584 0.0933318C13.8133 0.0437412 13.8838 0.0115442 13.9573 0.00243652C14.1622 -0.0233596 14.3683 0.159583 14.3665 0.366084V1.63862H15.6394C15.7777 1.63928 15.912 1.72628 15.969 1.85224C16.0261 1.97821 16.0029 2.13645 15.9122 2.2408L14.4574 3.87692C14.3897 3.95468 14.2877 4.00135 14.1846 4.0019H12.5138L6.98437 9.52947C6.85 9.66779 6.60041 9.66896 6.46475 9.53183C6.32907 9.39471 6.33301 9.14522 6.47293 9.01243L12.0024 3.48486V1.82034C12.0014 1.71813 12.046 1.61633 12.1217 1.54766L13.7584 0.0933318Z"
                                      fill="#868FA0"
                                    />
                                  </svg> </span
                                ><span
                                  class="open-sans font-12 gray-500 font-600"
                                  >62</span
                                >
                              </div>
                              <div
                                class="mcp-chip-danger px-2 py-1"
                                v-if="uploadImg"
                              >
                                <svg
                                  width="8"
                                  class="mr-2"
                                  height="6"
                                  viewBox="0 0 8 6"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M4.58006 5.52281L7.82105 1.50207C8.23353 0.991781 7.88839 0.199951 7.24019 0.199951H0.758232C0.118454 0.199951 -0.235108 0.982983 0.177381 1.50207L3.41836 5.52281C3.72141 5.89233 4.27701 5.89233 4.58006 5.52281Z"
                                    fill="#3AA03A"
                                  /></svg
                                ><span class="font-12">1cm</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="vx-col w-full md:w-6/12 my-2 px-2">
                          <div
                            class="bg-gray-0 border-radius-8px py-3 px-1 body-part-box"
                          >
                            <h3
                              class="gray-500 font-600 font-12 open-sans text-center mb-5"
                            >
                              Calf
                            </h3>
                            <h2
                              class="open-sans font-bold secondary-900 mb-5 text-center"
                              style="font-size: 32px"
                            >
                              28<small class="font-12">cm</small>
                            </h2>
                            <div class="flex justify-between items-center">
                              <div class="flex">
                                <span
                                  ><svg
                                    width="16"
                                    height="16"
                                    viewBox="0 0 16 16"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M6.72854 2.5475C3.01248 2.5475 0 5.55895 0 9.27376C0 12.9885 3.01248 16 6.72854 16C10.4446 16 13.4571 12.9885 13.4571 9.27376C13.4571 7.61125 12.8543 6.09034 11.8545 4.91646L10.6895 6.08105C11.3951 6.95475 11.8204 8.06594 11.8204 9.27376C11.8204 12.0806 9.53639 14.3639 6.72854 14.3639C3.9207 14.3639 1.63667 12.0806 1.63667 9.27376C1.63667 6.46683 3.9207 4.18362 6.72854 4.18362C7.93393 4.18362 9.04359 4.60609 9.91663 5.30844L11.0816 4.14385C9.90817 3.14748 8.38878 2.5475 6.72854 2.5475ZM6.72854 4.91077C4.31383 4.91077 2.36408 6.85983 2.36408 9.27376C2.36408 11.6876 4.31383 13.6367 6.72854 13.6367C9.14326 13.6367 11.093 11.6876 11.093 9.27376C11.093 8.26255 10.7532 7.3313 10.1781 6.59234L9.2631 7.50698C9.61392 8.00817 9.82003 8.61778 9.82003 9.27376C9.82003 10.9762 8.43162 12.3642 6.72854 12.3642C5.02545 12.3642 3.63705 10.9762 3.63705 9.27376C3.63705 7.57125 5.02545 6.18331 6.72854 6.18331C7.38188 6.18331 7.99012 6.38644 8.49023 6.73437L9.40519 5.81973C8.66697 5.24772 7.73722 4.91077 6.72854 4.91077ZM6.72854 6.91047C5.41858 6.91047 4.36446 7.96423 4.36446 9.27376C4.36446 10.5833 5.41858 11.637 6.72854 11.637C8.03849 11.637 9.09262 10.5833 9.09262 9.27376C9.09262 8.81675 8.9631 8.39042 8.74028 8.02964L7.62643 9.14309C7.6328 9.18646 7.63771 9.22862 7.63771 9.27376C7.63771 9.77575 7.2306 10.1827 6.72845 10.1827C6.22626 10.1827 5.81918 9.77575 5.81918 9.27376C5.81918 8.77174 6.22626 8.36481 6.72845 8.36481C6.76973 8.36481 6.80802 8.37081 6.84778 8.37608L7.96732 7.25693C7.60794 7.03671 7.18286 6.91047 6.72854 6.91047Z"
                                      fill="#868FA0"
                                    />
                                    <path
                                      d="M13.7584 0.0933318C13.8133 0.0437412 13.8838 0.0115442 13.9573 0.00243652C14.1622 -0.0233596 14.3683 0.159583 14.3665 0.366084V1.63862H15.6394C15.7777 1.63928 15.912 1.72628 15.969 1.85224C16.0261 1.97821 16.0029 2.13645 15.9122 2.2408L14.4574 3.87692C14.3897 3.95468 14.2877 4.00135 14.1846 4.0019H12.5138L6.98437 9.52947C6.85 9.66779 6.60041 9.66896 6.46475 9.53183C6.32907 9.39471 6.33301 9.14522 6.47293 9.01243L12.0024 3.48486V1.82034C12.0014 1.71813 12.046 1.61633 12.1217 1.54766L13.7584 0.0933318Z"
                                      fill="#868FA0"
                                    />
                                  </svg> </span
                                ><span
                                  class="open-sans font-12 gray-500 font-600"
                                  >62</span
                                >
                              </div>
                              <div
                                class="mcp-chip-danger px-2 py-1 bg-green-50 text-Green-500"
                                v-if="uploadImg"
                              >
                                <svg
                                  width="8"
                                  class="mr-2"
                                  height="6"
                                  viewBox="0 0 8 6"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M4.58006 5.52281L7.82105 1.50207C8.23353 0.991781 7.88839 0.199951 7.24019 0.199951H0.758232C0.118454 0.199951 -0.235108 0.982983 0.177381 1.50207L3.41836 5.52281C3.72141 5.89233 4.27701 5.89233 4.58006 5.52281Z"
                                    fill="#3AA03A"
                                  /></svg
                                ><span class="font-12">0cm</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="vx-col w-full md:w-6/12 my-2 px-2">
                          <div
                            class="bg-gray-0 border-radius-8px py-3 px-1 body-part-box"
                          >
                            <h3
                              class="gray-500 font-600 font-12 open-sans text-center mb-5"
                            >
                              Hips
                            </h3>
                            <h2
                              class="open-sans font-bold secondary-900 mb-5 text-center"
                              style="font-size: 32px"
                            >
                              92<small class="font-12">cm</small>
                            </h2>
                            <div class="flex justify-between items-center">
                              <div class="flex">
                                <span
                                  ><svg
                                    width="16"
                                    height="16"
                                    viewBox="0 0 16 16"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M6.72854 2.5475C3.01248 2.5475 0 5.55895 0 9.27376C0 12.9885 3.01248 16 6.72854 16C10.4446 16 13.4571 12.9885 13.4571 9.27376C13.4571 7.61125 12.8543 6.09034 11.8545 4.91646L10.6895 6.08105C11.3951 6.95475 11.8204 8.06594 11.8204 9.27376C11.8204 12.0806 9.53639 14.3639 6.72854 14.3639C3.9207 14.3639 1.63667 12.0806 1.63667 9.27376C1.63667 6.46683 3.9207 4.18362 6.72854 4.18362C7.93393 4.18362 9.04359 4.60609 9.91663 5.30844L11.0816 4.14385C9.90817 3.14748 8.38878 2.5475 6.72854 2.5475ZM6.72854 4.91077C4.31383 4.91077 2.36408 6.85983 2.36408 9.27376C2.36408 11.6876 4.31383 13.6367 6.72854 13.6367C9.14326 13.6367 11.093 11.6876 11.093 9.27376C11.093 8.26255 10.7532 7.3313 10.1781 6.59234L9.2631 7.50698C9.61392 8.00817 9.82003 8.61778 9.82003 9.27376C9.82003 10.9762 8.43162 12.3642 6.72854 12.3642C5.02545 12.3642 3.63705 10.9762 3.63705 9.27376C3.63705 7.57125 5.02545 6.18331 6.72854 6.18331C7.38188 6.18331 7.99012 6.38644 8.49023 6.73437L9.40519 5.81973C8.66697 5.24772 7.73722 4.91077 6.72854 4.91077ZM6.72854 6.91047C5.41858 6.91047 4.36446 7.96423 4.36446 9.27376C4.36446 10.5833 5.41858 11.637 6.72854 11.637C8.03849 11.637 9.09262 10.5833 9.09262 9.27376C9.09262 8.81675 8.9631 8.39042 8.74028 8.02964L7.62643 9.14309C7.6328 9.18646 7.63771 9.22862 7.63771 9.27376C7.63771 9.77575 7.2306 10.1827 6.72845 10.1827C6.22626 10.1827 5.81918 9.77575 5.81918 9.27376C5.81918 8.77174 6.22626 8.36481 6.72845 8.36481C6.76973 8.36481 6.80802 8.37081 6.84778 8.37608L7.96732 7.25693C7.60794 7.03671 7.18286 6.91047 6.72854 6.91047Z"
                                      fill="#868FA0"
                                    />
                                    <path
                                      d="M13.7584 0.0933318C13.8133 0.0437412 13.8838 0.0115442 13.9573 0.00243652C14.1622 -0.0233596 14.3683 0.159583 14.3665 0.366084V1.63862H15.6394C15.7777 1.63928 15.912 1.72628 15.969 1.85224C16.0261 1.97821 16.0029 2.13645 15.9122 2.2408L14.4574 3.87692C14.3897 3.95468 14.2877 4.00135 14.1846 4.0019H12.5138L6.98437 9.52947C6.85 9.66779 6.60041 9.66896 6.46475 9.53183C6.32907 9.39471 6.33301 9.14522 6.47293 9.01243L12.0024 3.48486V1.82034C12.0014 1.71813 12.046 1.61633 12.1217 1.54766L13.7584 0.0933318Z"
                                      fill="#868FA0"
                                    />
                                  </svg> </span
                                ><span
                                  class="open-sans font-12 gray-500 font-600"
                                  >62</span
                                >
                              </div>
                              <div
                                class="mcp-chip-danger px-2 py-1"
                                v-if="uploadImg"
                              >
                                <svg
                                  width="8"
                                  class="mr-2"
                                  height="6"
                                  viewBox="0 0 8 6"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M4.58006 5.52281L7.82105 1.50207C8.23353 0.991781 7.88839 0.199951 7.24019 0.199951H0.758232C0.118454 0.199951 -0.235108 0.982983 0.177381 1.50207L3.41836 5.52281C3.72141 5.89233 4.27701 5.89233 4.58006 5.52281Z"
                                    fill="#3AA03A"
                                  /></svg
                                ><span class="font-12">0cm</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="measurement flex items-center justify-between">
                      <div>
                        <div>Last measurement</div>
                        <strong>41 Days ago</strong>
                      </div>
                      <div class="remind">Remind</div>
                    </div>
                    <hr class="my-6 hr-border-1" />
                    <div class="sleep-timer mb-4">
                      <div class="sleep-timer-header flex items-center">
                        <svg
                          width="20"
                          height="20"
                          class="mr-2"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M19.4931 11.1824C19.1261 10.9725 18.6804 11.0512 18.3658 11.3399C16.8715 12.862 14.7743 13.5968 12.6508 13.3606C9.50488 12.9932 6.96196 10.4477 6.62115 7.32477C6.38521 5.17286 7.11925 3.09969 8.63976 1.60386C8.95435 1.31519 9.00678 0.842817 8.79706 0.475419C8.58733 0.108021 8.16788 -0.075678 7.77464 0.0292929C3.00338 1.13149 -0.247379 5.51402 0.0147782 10.3952C0.276936 15.4863 4.47146 19.7113 9.58353 19.9738C9.76704 19.9738 9.95055 20 10.1341 20C14.8005 20 18.8901 16.7984 19.9912 12.2322C20.0436 11.786 19.8601 11.3924 19.4931 11.1824Z"
                            fill="#868FA0"
                          />
                        </svg>
                        <span class="sleep-title open-sans">Sleep </span>
                      </div>
                      <div class="sleep-timer-body vx-row my-2">
                        <div class="vx-col md:w-9/12 w-full timer">
                          <div>
                            7 <small> hrs</small> 50 <small> mins</small>
                          </div>
                          <div class="timer-slot">22:00 - 05:50</div>
                        </div>
                        <div
                          class="vx-col md:w-3/12 w-full remind flex items-start flex-col"
                        >
                          <div class="mvp-progress mb-auto">
                            <div
                              class="mvp-progress-bar"
                              style="width: 85%"
                            ></div>
                          </div>
                          <div
                            class="reaction-emoji flex w-full justify-between items-center"
                          >
                            <svg
                              width="20"
                              class="mr-2"
                              height="20"
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M14 11H12C12 12.1046 11.1046 13 10 13C8.89543 13 8 12.1046 8 11H6C6 13.2091 7.79086 15 10 15C12.2091 15 14 13.2091 14 11Z"
                                fill="#56B256"
                              />
                              <path
                                d="M8 8C8 8.55229 7.55228 9 7 9C6.44772 9 6 8.55229 6 8C6 7.44771 6.44772 7 7 7C7.55228 7 8 7.44771 8 8Z"
                                fill="#56B256"
                              />
                              <path
                                d="M13 9C13.5523 9 14 8.55229 14 8C14 7.44771 13.5523 7 13 7C12.4477 7 12 7.44771 12 8C12 8.55229 12.4477 9 13 9Z"
                                fill="#56B256"
                              />
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10ZM18 10C18 14.4183 14.4183 18 10 18C5.58172 18 2 14.4183 2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10Z"
                                fill="#56B256"
                              />
                            </svg>
                            <span
                              class="font-16 font-600 open-sans secondary-900"
                              >9</span
                            >
                          </div>
                        </div>
                      </div>
                    </div>
                    <hr class="my-2 hr-border-1" />
                    <div class="sleep-timer mt-12 mb-4">
                      <div class="sleep-timer-header flex items-center">
                        <svg
                          class="mr-2"
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10 0C15.5228 0 20 4.47718 20 10C20 15.5228 15.5228 20 10 20C4.47716 20 0 15.5228 0 10C0 4.47718 4.47716 0 10 0ZM13.9535 5.5814C13.1829 5.5814 12.5581 6.20612 12.5581 6.97674C12.5581 7.74737 13.1829 8.37209 13.9535 8.37209C14.7241 8.37209 15.3488 7.74737 15.3488 6.97674C15.3488 6.20612 14.7241 5.5814 13.9535 5.5814ZM6.04651 5.5814C5.27586 5.5814 4.65116 6.20612 4.65116 6.97674C4.65116 7.74737 5.27586 8.37209 6.04651 8.37209C6.81714 8.37209 7.44186 7.74737 7.44186 6.97674C7.44186 6.20612 6.81714 5.5814 6.04651 5.5814ZM16.5116 12.3256H3.48837C4.43805 15.0335 6.99465 16.9767 10 16.9767C13.0053 16.9767 15.5619 15.0335 16.5116 12.3256Z"
                            fill="#868FA0"
                          />
                        </svg>

                        <span class="sleep-title open-sans">Mood </span>
                      </div>
                      <div class="sleep-timer-body my-2">
                        <div
                          class="vx-row w-full timer flex justify-between items-center"
                        >
                          <div class="vx-col md:w-6/12 flex items-center">
                            <span class="pr-5">7</span>
                            <div
                              class="mvp-progress border-radius-6px height-12px"
                            >
                              <div
                                class="mvp-progress-bar border-radius-6px height-12px"
                                style="width: 85%"
                              ></div>
                            </div>
                          </div>
                          <span class="vx-col md:w-6/12 flex justify-end">
                            <svg
                              width="20"
                              height="20"
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M14 11H12C12 12.1046 11.1046 13 10 13C8.89543 13 8 12.1046 8 11H6C6 13.2091 7.79086 15 10 15C12.2091 15 14 13.2091 14 11Z"
                                fill="#56B256"
                              />
                              <path
                                d="M8 8C8 8.55229 7.55228 9 7 9C6.44772 9 6 8.55229 6 8C6 7.44771 6.44772 7 7 7C7.55228 7 8 7.44771 8 8Z"
                                fill="#56B256"
                              />
                              <path
                                d="M13 9C13.5523 9 14 8.55229 14 8C14 7.44771 13.5523 7 13 7C12.4477 7 12 7.44771 12 8C12 8.55229 12.4477 9 13 9Z"
                                fill="#56B256"
                              />
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10ZM18 10C18 14.4183 14.4183 18 10 18C5.58172 18 2 14.4183 2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10Z"
                                fill="#56B256"
                              />
                            </svg>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </vs-tab>
                <vs-tab label="Nutrition Diary">
                  <div class="tab-text">
                    <hr class="m-2 hr-border-1" />
                    <div class="date flex justify-between my-4">
                      <div class="left-arrow">
                        <span
                          ><svg
                            width="8"
                            height="12"
                            viewBox="0 0 8 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M0.579559 6.43967C0.339625 6.19575 0.339625 5.80425 0.579559 5.56033L5.86523 0.186981C6.11047 -0.0623283 6.51215 -0.0623283 6.75739 0.186981L7.41966 0.860229C7.65957 1.10412 7.65959 1.49559 7.41971 1.73951L3.22973 6L7.41971 10.2605C7.6596 10.5044 7.65957 10.8959 7.41966 11.1398L6.7574 11.813C6.51216 12.0623 6.11047 12.0623 5.86523 11.813L0.579559 6.43967Z"
                              fill="#868FA0"
                            /></svg
                        ></span>
                      </div>
                      <div class="center-date-icon flex">
                        <span
                          ><svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M0.799805 3.2C0.799805 2.32 1.5198 1.6 2.3998 1.6H13.5998C14.0241 1.6 14.4311 1.76857 14.7312 2.06863C15.0312 2.36869 15.1998 2.77565 15.1998 3.2V14.4C15.1998 14.8243 15.0312 15.2313 14.7312 15.5314C14.4311 15.8314 14.0241 16 13.5998 16H2.3998C1.97546 16 1.56849 15.8314 1.26843 15.5314C0.968376 15.2313 0.799805 14.8243 0.799805 14.4V3.2ZM2.3998 4.8V14.4H13.5998V4.8H2.3998ZM3.9998 0H5.5998V1.6H3.9998V0ZM10.3998 0H11.9998V1.6H10.3998V0ZM3.9998 7.2H5.5998V8.8H3.9998V7.2ZM3.9998 10.4H5.5998V12H3.9998V10.4ZM7.1998 7.2H8.7998V8.8H7.1998V7.2ZM7.1998 10.4H8.7998V12H7.1998V10.4ZM10.3998 7.2H11.9998V8.8H10.3998V7.2ZM10.3998 10.4H11.9998V12H10.3998V10.4Z"
                              fill="#868FA0"
                            /></svg
                        ></span>
                        <div class="day">
                          <h1
                            class="font-600 font-14 open-sans secondary-900 mx-1"
                            @click="showCalendar = !showCalendar"
                          >
                            Today
                            <!-- <datepicker :inline="true" ref="programaticOpen"></datepicker> -->
                          </h1>
                          <v-date-picker
                            v-show="showCalendar"
                            style="position: absolute;z-index: 999;left: 20px;background: #FFFFFF;box-shadow: 0px 15px 35px rgba(51, 51, 78, 0.1), 0px 5px 15px rgba(0, 0, 0, 0.13), 0px 0px 2px rgba(0, 0, 0, 0.1);border-radius: 6px;border: none !important;"
                          />
                          <!-- <v-calendar v-show="showCalendar" style="position: absolute;z-index: 999;left: 20px;background: #FFFFFF;box-shadow: 0px 15px 35px rgba(51, 51, 78, 0.1), 0px 5px 15px rgba(0, 0, 0, 0.13), 0px 0px 2px rgba(0, 0, 0, 0.1);border-radius: 6px;border: none !important;"></v-calendar> -->
                        </div>
                        <span class="flex items-center"
                          ><svg
                            width="8"
                            height="6"
                            viewBox="0 0 8 6"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M3.71879 5.136C3.87228 5.288 4.12772 5.288 4.28121 5.136L7.6411 1.80866C7.7863 1.66486 7.7863 1.43754 7.6411 1.29375L7.20715 0.864001C7.05368 0.712012 6.79826 0.711998 6.64477 0.86397L4 3.4825L1.35523 0.86397C1.20174 0.711998 0.946325 0.712012 0.792849 0.864002L0.3589 1.29375C0.2137 1.43754 0.2137 1.66486 0.3589 1.80866L3.71879 5.136Z"
                              fill="#868FA0"
                            />
                          </svg>
                        </span>
                      </div>
                      <div class="right-arrow">
                        <span
                          ><svg
                            width="8"
                            height="12"
                            viewBox="0 0 8 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M7.42044 5.56033C7.66038 5.80425 7.66037 6.19575 7.42044 6.43967L2.13477 11.813C1.88953 12.0623 1.48785 12.0623 1.24261 11.813L0.580343 11.1398C0.340429 10.8959 0.340406 10.5044 0.580291 10.2605L4.77027 6L0.58029 1.73951C0.340404 1.49559 0.340427 1.10412 0.580341 0.86023L1.2426 0.186982C1.48784 -0.0623267 1.88953 -0.0623279 2.13477 0.186981L7.42044 5.56033Z"
                              fill="#D2D5DC"
                            /></svg
                        ></span>
                      </div>
                    </div>
                    <div class="sleep-timer mb-4">
                      <div class="sleep-timer-header flex items-center">
                        <svg
                          width="22"
                          height="22"
                          class="mr-2"
                          viewBox="0 0 22 22"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M13.0481 0.701681C11.0113 0.296623 8.90014 0.504621 6.98158 1.29937C5.06301 2.09412 3.4232 3.43994 2.26949 5.16663C1.11579 6.89332 0.5 8.92335 0.5 11C0.5 13.0767 1.11579 15.1067 2.26949 16.8334C3.4232 18.5601 5.06301 19.9059 6.98158 20.7006C8.90014 21.4954 11.0113 21.7034 13.0481 21.2983C15.0848 20.8933 16.9557 19.8933 18.4242 18.425C19.3994 17.45 20.1729 16.2924 20.7006 15.0184C21.2284 13.7444 21.5 12.379 21.5 11C21.5 9.62103 21.2284 8.25557 20.7006 6.98158C20.1729 5.70759 19.3994 4.55003 18.4242 3.575C16.9557 2.10666 15.0848 1.10674 13.0481 0.701681ZM10.5615 3.43135C12.2285 3.33373 13.8757 3.78832 15.2516 4.71609L4.70713 15.2429C3.78273 13.867 3.33084 12.2212 3.42991 10.5562C3.54023 8.70226 4.32602 6.95297 5.6387 5.63911C6.95414 4.32556 8.70565 3.54003 10.5615 3.43135ZM11.4371 18.5687C9.77007 18.6663 8.1229 18.2117 6.74697 17.2839L17.2914 6.75712C18.2158 8.13302 18.6677 9.77879 18.5686 11.4438C18.4583 13.2976 17.6726 15.0468 16.3601 16.3607C15.0446 17.6744 13.293 18.46 11.4371 18.5687Z"
                            fill="#868FA0"
                          />
                        </svg>
                        <span class="sleep-title open-sans">Time in Fast</span>
                      </div>
                      <div class="relative sleep-timer-body my-2">
                        <div class="flex justify-center">
                          <div class="mt-6 mr-2">
                            <div class="flex">
                              <div
                                class="quit-smoking mr-1 flex justify-center"
                              >
                                <span
                                  class="font-24 font-700 open-sans blue-900"
                                  >2</span
                                >
                              </div>
                              <div
                                class="quit-smoking mr-1 flex justify-center"
                              >
                                <span
                                  class="font-24 font-700 open-sans blue-900"
                                  >1</span
                                >
                              </div>
                            </div>
                            <div
                              class="text-center font-12 font-700 open-sans gray-500"
                            >
                              Hours
                            </div>
                          </div>
                          <div class="mt-6 mr-2">
                            <div class="flex">
                              <div
                                class="quit-smoking mr-1 flex justify-center"
                              >
                                <span
                                  class="font-24 font-700 open-sans blue-900"
                                  >2</span
                                >
                              </div>
                              <div
                                class="quit-smoking mr-1 flex justify-center"
                              >
                                <span
                                  class="font-24 font-700 open-sans blue-900"
                                  >3</span
                                >
                              </div>
                            </div>
                            <div
                              class="text-center font-12 font-700 open-sans gray-500"
                            >
                              Mins.
                            </div>
                          </div>
                          <div class="mt-6">
                            <div class="flex">
                              <div
                                class="quit-smoking mr-1 flex justify-center"
                              >
                                <span
                                  class="font-24 font-700 open-sans blue-900"
                                  >4</span
                                >
                              </div>
                              <div
                                class="quit-smoking mr-1 flex justify-center"
                              >
                                <span
                                  class="font-24 font-700 open-sans blue-900"
                                  >8</span
                                >
                              </div>
                            </div>
                            <div
                              class="text-center font-12 font-700 open-sans gray-500"
                            >
                              Secs.
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        class="text-center font-12 font-700 open-sans gray-500"
                      >
                        Goal: 48 hours
                      </div>
                    </div>
                    <hr class="m-2 hr-border-1" />
                    <div class="water-level mt-12 mb-4">
                      <div class="water-level-header">
                        <div
                          class="sleep-timer-header flex items-center justify-between"
                        >
                          <div>
                            <svg
                              width="18"
                              class="mr-2"
                              height="20"
                              viewBox="0 0 18 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M17.3744 1.14258C17.2731 1.02197 17.1241 0.952381 16.9671 0.952381C16.9671 0.952381 17.4385 1.23165 15.6412 1.48774C14.1194 1.70456 11.5986 1.90476 9 1.90476C6.40169 1.90476 3.88108 1.70462 2.35946 1.48783C0.561841 1.23172 1.0329 0.952381 1.0329 0.952381C0.875718 0.952381 0.726506 1.02218 0.625143 1.143C0.523989 1.26383 0.480967 1.42346 0.50783 1.57929L3.60665 19.5559C3.65093 19.8127 3.87255 20 4.13173 20H13.9027C14.1623 20 14.3841 19.8121 14.428 19.5549L17.4924 1.57823C17.5188 1.42261 17.4756 1.26341 17.3744 1.14258ZM15.2794 8.21591C14.1866 8.91599 11.9088 9.90095 8.80641 8.34222C6.19425 7.02978 3.82911 7.22947 2.60708 7.48209L1.66627 2.02337C1.66627 2.02337 6.11786 2.85709 9 2.85714C11.8826 2.8572 16.335 2.02337 16.335 2.02337L15.2794 8.21591Z"
                                fill="#868FA0"
                              />
                              <path
                                d="M15.6412 1.48774C17.4385 1.23165 16.9671 0.952381 16.9671 0.952381C16.9671 0.952381 12.1331 -4.61911e-07 9 0C5.86687 4.61911e-07 1.0329 0.952381 1.0329 0.952381C1.0329 0.952381 0.561841 1.23172 2.35946 1.48783C3.83109 1.22011 6.39843 0.952418 9 0.952381C11.6018 0.952344 14.1693 1.22002 15.6412 1.48774Z"
                                fill="#868FA0"
                              />
                            </svg>
                            <span
                              class="sleep-title font-700 secondary-900 font-16 open-sans"
                              >Water</span
                            >
                          </div>
                          <div>
                            <span
                              class="font-700 secondary-900 font-16 open-sans"
                              >93%</span
                            >
                          </div>
                        </div>
                        <div class="flex items-center justify-between">
                          <div>
                            <span
                              class="blue-600 font-600 open-sans font-24 secondary-900"
                              >2.8 L </span
                            ><small class="gray-500">out of 3 L</small>
                          </div>
                          <div class="circle-small">
                            <svg>
                              <circle
                                cx="40"
                                cy="35"
                                r="15"
                                class="bg"
                              ></circle>
                              <circle
                                cx="24"
                                cy="41"
                                r="15"
                                class="progress one"
                              ></circle>
                            </svg>
                          </div>
                        </div>
                        <div
                          class="scrollbar-css bg-gray-0 border-radius-8px overflow-auto mb-4"
                          style="height: 152px"
                        >
                          <div
                            class="flex items-center justify-between px-3 pb-5"
                          >
                            <span class="open-sans font-16 secondary-900"
                              >200 ml</span
                            >
                            <span class="open-sans font-12 gray-500 font-600"
                              >20:08</span
                            >
                          </div>
                          <div
                            class="flex items-center justify-between px-3 pb-5"
                          >
                            <span class="open-sans font-16 secondary-900"
                              >200 ml</span
                            >
                            <span class="open-sans font-12 gray-500 font-600"
                              >20:08</span
                            >
                          </div>
                          <div
                            class="flex items-center justify-between px-3 pb-5"
                          >
                            <span class="open-sans font-16 secondary-900"
                              >200 ml</span
                            >
                            <span class="open-sans font-12 gray-500 font-600"
                              >20:08</span
                            >
                          </div>
                          <div
                            class="flex items-center justify-between px-3 pb-5"
                          >
                            <span class="open-sans font-16 secondary-900"
                              >200 ml</span
                            >
                            <span class="open-sans font-12 gray-500 font-600"
                              >20:08</span
                            >
                          </div>
                          <div
                            class="flex items-center justify-between px-3 pb-5"
                          >
                            <span class="open-sans font-16 secondary-900"
                              >200 ml</span
                            >
                            <span class="open-sans font-12 gray-500 font-600"
                              >20:08</span
                            >
                          </div>
                          <div
                            class="flex items-center justify-between px-3 pb-5"
                          >
                            <span class="open-sans font-16 secondary-900"
                              >200 ml</span
                            >
                            <span class="open-sans font-12 gray-500 font-600"
                              >20:08</span
                            >
                          </div>
                        </div>
                        <hr class="m-2 hr-border-1" />
                      </div>
                    </div>
                    <div class="water-level mt-12 mb-4">
                      <div class="water-level-header">
                        <div
                          class="sleep-timer-header flex items-center justify-between"
                        >
                          <div>
                            <svg
                              width="20"
                              class="mr-2"
                              height="20"
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M19.2645 1.12069C17.1181 -0.671962 9.9004 3.37192 12.0257 7.14483C12.2362 7.52003 12.1941 7.97862 11.8995 8.27044C11.3944 8.81241 10.8473 9.35437 10.2371 9.95887C9.87936 9.60451 9.52163 9.25015 9.18495 8.91663C8.91139 8.64565 8.82722 8.22875 8.97452 7.89524C9.54268 6.56117 9.24808 4.93528 8.11177 3.85135L4.74492 0.620414C4.57657 0.4745 4.32406 0.453656 4.15572 0.599569C3.96633 0.766327 3.94529 1.05815 4.11363 1.24576L7.2911 4.51839C7.45944 4.70599 7.45944 4.99782 7.24901 5.16457L7.20692 5.20626C7.01754 5.35218 6.76503 5.33133 6.59668 5.16457L3.44026 1.74603C3.27192 1.57927 3.0194 1.55843 2.83002 1.70434L2.78793 1.72519C2.59855 1.89194 2.57751 2.16293 2.74585 2.35053L5.75497 5.81076C5.92331 5.99836 5.90227 6.26935 5.71288 6.4361L5.69184 6.45695C5.50246 6.62371 5.2289 6.58202 5.06056 6.39441L2.13561 2.8508C1.98831 2.6632 1.69371 2.64236 1.50432 2.78827L1.46224 2.80911C1.27285 2.95503 1.25181 3.22601 1.39911 3.41361L4.26093 7.08229C4.40823 7.26989 4.36614 7.54088 4.1978 7.68679L4.15572 7.72848C3.96633 7.89524 3.67173 7.85355 3.50339 7.6451L0.80991 3.99727C0.66261 3.78882 0.368011 3.74713 0.157583 3.91389C-0.0107599 4.0598 -0.0528455 4.30994 0.0734113 4.49754L2.76689 8.4372C3.62965 9.70873 5.16577 10.2299 6.57564 9.89634C6.95441 9.81296 7.35422 9.95887 7.5857 10.2715C7.90134 10.7093 8.21698 11.147 8.55366 11.6265C7.66987 12.5228 6.7019 13.5442 5.69184 14.7323C2.89315 18.0466 3.41922 18.8804 3.88216 19.2556C4.3451 19.6308 5.27099 20.0269 8.06968 16.7126C8.89035 15.7329 9.6058 14.8157 10.2371 13.9611C10.8684 14.8157 11.5628 15.712 12.3835 16.6709C15.1821 20.006 16.108 19.6308 16.571 19.2348C17.0339 18.8596 17.581 18.0258 14.7613 14.7115C13.7512 13.5233 12.8043 12.5019 11.9205 11.6265C12.4466 10.876 12.9306 10.1882 13.4146 9.56282C13.6671 9.2293 14.109 9.10423 14.5298 9.25015C18.6332 10.6259 21.3898 2.91334 19.2645 1.12069Z"
                                fill="#687182"
                              />
                            </svg>

                            <span
                              class="sleep-title font-700 secondary-900 font-16 open-sans"
                              >Meals</span
                            >
                          </div>
                        </div>
                        <div
                          class="scrollbar-css bg-gray-0 border-radius-8px overflow-auto mb-4 mt-6"
                          style="height: 152px"
                        >
                          <div
                            class="flex items-center justify-between px-3 pb-5"
                          >
                            <span class="open-sans font-16 secondary-900"
                              >200 ml</span
                            >
                            <span class="open-sans font-12 gray-500 font-600"
                              >20:08</span
                            >
                          </div>
                          <div
                            class="flex items-center justify-between px-3 pb-5"
                          >
                            <span class="open-sans font-16 secondary-900"
                              >200 ml</span
                            >
                            <span class="open-sans font-12 gray-500 font-600"
                              >20:08</span
                            >
                          </div>
                          <div
                            class="flex items-center justify-between px-3 pb-5"
                          >
                            <span class="open-sans font-16 secondary-900"
                              >200 ml</span
                            >
                            <span class="open-sans font-12 gray-500 font-600"
                              >20:08</span
                            >
                          </div>
                          <div
                            class="flex items-center justify-between px-3 pb-5"
                          >
                            <span class="open-sans font-16 secondary-900"
                              >200 ml</span
                            >
                            <span class="open-sans font-12 gray-500 font-600"
                              >20:08</span
                            >
                          </div>
                          <div
                            class="flex items-center justify-between px-3 pb-5"
                          >
                            <span class="open-sans font-16 secondary-900"
                              >200 ml</span
                            >
                            <span class="open-sans font-12 gray-500 font-600"
                              >20:08</span
                            >
                          </div>
                          <div
                            class="flex items-center justify-between px-3 pb-5"
                          >
                            <span class="open-sans font-16 secondary-900"
                              >200 ml</span
                            >
                            <span class="open-sans font-12 gray-500 font-600"
                              >20:08</span
                            >
                          </div>
                        </div>
                        <hr class="m-2 hr-border-1" />
                      </div>
                    </div>
                    <hr class="m-2 hr-border-1" />
                    <div class="water-level mt-12 mb-4">
                      <div class="water-level-header">
                        <div class="sleep-timer-header flex items-center">
                          <svg
                            width="16"
                            class="mr-2"
                            height="20"
                            viewBox="0 0 16 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M13.2845 0.620155V2.36589H2.76825V0.620155C2.76825 0.279076 3.04925 0 3.39273 0H12.66C13.0035 0 13.2845 0.279076 13.2845 0.620155Z"
                              fill="#868FA0"
                            />
                            <path
                              d="M0.526367 8.10543V15.6186H15.5264V8.10543H0.526367ZM9.67187 11.6496L8.03573 14.1054C7.93581 14.2543 7.70163 14.1426 7.75784 13.969L8.18248 12.676C8.21371 12.5767 8.13876 12.4713 8.03261 12.4713H6.50888C6.38398 12.4713 6.30904 12.3349 6.37774 12.2326L8.08256 9.6279C8.18248 9.47597 8.41666 9.58759 8.36046 9.75815L7.89835 11.2093C7.86711 11.3085 7.94207 11.4108 8.04822 11.4108H9.54073C9.66562 11.4108 9.74055 11.5473 9.67187 11.6496Z"
                              fill="#868FA0"
                            />
                            <path
                              d="M15.5264 7.48416V6.74419C15.5264 5.17726 14.3356 3.89782 12.7974 3.73954V2.98605H3.25534V3.73954C1.72536 3.89457 0.526367 5.18451 0.526367 6.74419V7.48416H15.5264Z"
                              fill="#868FA0"
                            />
                            <path
                              d="M0.526367 16.2381V16.9798C0.526367 18.645 1.89086 20 3.56758 20H12.4852C14.1619 20 15.5264 18.645 15.5264 16.9798V16.2381H0.526367Z"
                              fill="#868FA0"
                            />
                          </svg>

                          <span
                            class="sleep-title font-700 secondary-900 font-16 open-sans"
                            >Supplements</span
                          >
                        </div>
                        <div
                          class="flex items-center justify-between bg-gray-0 px-4 py-2 border-radius-8px mt-3"
                        >
                          <div>
                            <span
                              class="font-400 open-sans font-16 secondary-900"
                              >Vitamine A</span
                            >
                          </div>
                          <span class="font-12 open-sans gray-500 font-600"
                            >20:08</span
                          >
                        </div>
                      </div>
                    </div>
                  </div>
                </vs-tab>
              </vs-tabs>
            </div>
          </component>
        </div>
      </div>
    </div>
    <mcp-dialog
      :active.sync="newClient"
      :buttonCloseHidden="true"
      class="new-cliens-popup"
    >
      <template #header>
        <div class="flex items-center">
          <div>
            <h2 class="font-20 gray-500 futura-md-bt">
              Clients (21)
            </h2>
          </div>
        </div>
      </template>
      <hr class="hr-border-1" />
      <div class="bg-gray-0 px-3 py-2">
        <div class="chat-search-textbox mx-4">
          <input type="search" class="search-input" placeholder="Search" />
          <i
            class="vs-icon notranslate icon-scale icon-inputx notranslate feather icon-search null chat-icon-search"
          ></i>
        </div>
      </div>
      <hr class="hr-border-1" />
      <div class="content bg-white">
        <div class="contact__container w-full flex items-center">
          <vs-avatar
            v-if="activeUser.photoURL"
            class="mx-4 my-2 border-2 border-solid border-white"
            :src="activeUser.photoURL"
            size="40px"
            @click="showProfileSidebar(Number(activeUser.uid), true)"
          />
          <div class="chat__contact__meta flex">
            <h5 class="font-semibold">Skylar Workman</h5>
          </div>
        </div>
        <div
          class="contact__container w-full flex items-center  overflow-hidden"
        >
          <vs-avatar
            v-if="activeUser.photoURL"
            class="mx-4 my-2 border-2 border-solid border-white"
            :src="activeUser.photoURL"
            size="40px"
            @click="showProfileSidebar(Number(activeUser.uid), true)"
          />
          <div class="chat__contact__meta flex">
            <h5 class="font-semibold">Maria Saris</h5>
          </div>
        </div>
        <div
          class="contact__container w-full flex items-center overflow-hidden"
        >
          <vs-avatar
            v-if="activeUser.photoURL"
            class="mx-4 my-2 border-2 border-solid border-white"
            :src="activeUser.photoURL"
            size="40px"
            @click="showProfileSidebar(Number(activeUser.uid), true)"
          />
          <div class="chat__contact__meta flex">
            <h5 class="font-semibold">Phillip Press</h5>
          </div>
        </div>
        <div
          class="contact__container w-full flex items-center  overflow-hidden"
        >
          <vs-avatar
            v-if="activeUser.photoURL"
            class="mx-4 my-2 border-2 border-solid border-white"
            :src="activeUser.photoURL"
            size="40px"
            @click="showProfileSidebar(Number(activeUser.uid), true)"
          />
          <div class="chat__contact__meta flex">
            <h5 class="font-semibold">Gustavo Westervelt</h5>
          </div>
        </div>
        <div
          class="contact__container w-full flex items-center overflow-hidden"
        >
          <vs-avatar
            v-if="activeUser.photoURL"
            class="mx-4 my-2 border-2 border-solid border-white"
            :src="activeUser.photoURL"
            size="40px"
            @click="showProfileSidebar(Number(activeUser.uid), true)"
          />
          <div class="chat__contact__meta flex">
            <h5 class="font-semibold">Tiana Carder</h5>
          </div>
        </div>
        <div
          class="contact__container w-full flex items-center  overflow-hidden"
        >
          <vs-avatar
            v-if="activeUser.photoURL"
            class="mx-4 my-2 border-2 border-solid border-white"
            :src="activeUser.photoURL"
            size="40px"
            @click="showProfileSidebar(Number(activeUser.uid), true)"
          />
          <div class="chat__contact__meta flex">
            <h5 class="font-semibold">Ahmad Westervelt</h5>
          </div>
        </div>
        <div
          class="contact__container w-full flex items-center  overflow-hidden"
        >
          <vs-avatar
            v-if="activeUser.photoURL"
            class="mx-4 my-2 border-2 border-solid border-white"
            :src="activeUser.photoURL"
            size="40px"
            @click="showProfileSidebar(Number(activeUser.uid), true)"
          />
          <div class="chat__contact__meta flex">
            <h5 class="font-semibold">Jaylon Herwitz</h5>
          </div>
        </div>
        <div
          class="contact__container w-full flex items-center  overflow-hidden"
        >
          <vs-avatar
            v-if="activeUser.photoURL"
            class="mx-4 my-2 border-2 border-solid border-white"
            :src="activeUser.photoURL"
            size="40px"
            @click="showProfileSidebar(Number(activeUser.uid), true)"
          />
          <div class="chat__contact__meta flex">
            <h5 class="font-semibold">Justin Botosh</h5>
          </div>
        </div>
        <div
          class="contact__container w-full flex items-center  overflow-hidden"
        >
          <vs-avatar
            v-if="activeUser.photoURL"
            class="mx-4 my-2 border-2 border-solid border-white"
            :src="activeUser.photoURL"
            size="40px"
            @click="showProfileSidebar(Number(activeUser.uid), true)"
          />
          <div class="chat__contact__meta flex">
            <h5 class="font-semibold">Cheyenne Passaquindici Arcand</h5>
          </div>
        </div>
        <div
          class="contact__container w-full flex items-center  overflow-hidden"
        >
          <vs-avatar
            v-if="activeUser.photoURL"
            class="mx-4 my-2 border-2 border-solid border-white"
            :src="activeUser.photoURL"
            size="40px"
            @click="showProfileSidebar(Number(activeUser.uid), true)"
          />
          <div class="chat__contact__meta flex">
            <h5 class="font-semibold">Cooper Philips</h5>
          </div>
        </div>
        <div
          class="contact__container w-full flex items-center  overflow-hidden"
        >
          <vs-avatar
            v-if="activeUser.photoURL"
            class="mx-4 my-2 border-2 border-solid border-white"
            :src="activeUser.photoURL"
            size="40px"
            @click="showProfileSidebar(Number(activeUser.uid), true)"
          />
          <div class="chat__contact__meta flex">
            <h5 class="font-semibold">Haylie Gouse</h5>
          </div>
        </div>
      </div>
      <template #footer>
        <div class="flex items-center py-1"></div>
      </template>
    </mcp-dialog>

    <mcp-dialog :active.sync="addFaq" :buttonCloseHidden="true" class="addfaq">
      <template #header>
        <div class="flex items-center justify-between">
          <div class="title ml-0">
            <h2 class="font-18 open-sans font-600 secondary-900">
              Add Frequently Asked Questions
            </h2>
          </div>
        </div>
      </template>
      <!-- <div class="" style="border-bottom:1px solid #EDEDF0;"></div> -->
      <div class="content">
        <div>
          <h5 class="black-500 font-600 font-14 open-sans mb-2">Categories</h5>
          <v-select
            label-placeholder="Categories"
            :options="['foo', 'bar']"
            :dir="$vs.rtl ? 'rtl' : 'ltr'"
            class="mb-3 workout-select"
          />
          <h5 class="font-600 font-14 open-sans black-500 mt-10 mb-2">
            Question
          </h5>
          <vs-textarea
            class="textarea-box"
            height="62px"
            label-placeholder="Question"
            placeholder="Type the question here..."
            v-model="textarea"
          />
          <h5 class="font-600 font-14 open-sans black-500 mt-10 mb-2">
            Answer
          </h5>
          <vs-textarea
            class="textarea-box"
            height="84px"
            label-placeholder="Answer"
            placeholder="Type the answer here..."
            v-model="textarea"
          />
          <h5 class="font-600 font-14 open-sans black-500 mt-10 mb-2">
            Publish
          </h5>
          <div class="flex">
            <vs-switch v-model="switch1" />
            <span class="font-bold font-12 open-sans gray-500 ml-5">YES</span>
          </div>
        </div>
      </div>
      <template #footer>
        <div class="flex  justify-end">
          <div class="footer  my-4">
            <vs-button
              class="btn1 py-2 px-4 mr-5 open-sans font-14 font-600 secondary-900"
              type="border"
              @click="addFaq = false"
              >Cancel</vs-button
            >

            <vs-button
              class="btn2 py-2 px-4 open-sans font-14 font-600 white-400"
              color="primary"
              type="filled"
              @click="addFaq = false"
              >Save</vs-button
            >
          </div>
        </div>
      </template>
    </mcp-dialog>
    <mcp-dialog
      :active.sync="notes"
      :buttonCloseHidden="true"
      class="addnote-width"
    >
      <template #header>
        <div class="flex items-center justify-between">
          <div>
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M32 4.36364C31.9636 3.21788 31.4922 2.12899 30.6816 1.31841C29.871 0.507825 28.7821 0.0364006 27.6364 0H4.36364C3.21788 0.0364006 2.12899 0.507825 1.31841 1.31841C0.507825 2.12899 0.0364006 3.21788 0 4.36364V27.7091C0.0476006 28.8443 0.52479 29.9191 1.33496 30.7158C2.14513 31.5124 3.22775 31.9715 4.36364 32H20.3636L32 20.3636V4.36364ZM20.3636 20.3636V29.0909H2.90909V8.72727H29.0909V20.3636H20.3636Z"
                fill="#868FA0"
              />
              <path
                d="M26.1818 14.5455H5.81818V17.4545H26.1818V14.5455Z"
                fill="#868FA0"
              />
              <path
                d="M14.5455 20.3636H5.81818V23.2727H14.5455V20.3636Z"
                fill="#868FA0"
              />
            </svg>
          </div>
          <div class="title">
            <h2 class="secondary-900 font-600 font-20 open-sans">Add Note</h2>
            <h5 class="open-sans font-14 gray-500">
              Notes are for Personal use only.
            </h5>
          </div>
        </div>
      </template>
      <div class="content">
        <div>
          <vs-textarea
            class="textarea-box border-none-text-area"
            height="150px"
            placeholder="Write your notes here..."
            v-model="textarea"
          />
        </div>
      </div>
      <template #footer>
        <div class="flex  justify-end">
          <div class="footer  my-4">
            <vs-button
              class="btn1 py-2 px-4 mr-5 text-black font-semibold"
              type="border"
              @click="notes = false"
              >Cancel</vs-button
            >

            <vs-button
              class="btn2 py-2 px-4  font-semibold"
              color="primary"
              type="filled"
              @click="
                addNotes = true;
                notes = false;
              "
              >Save Note</vs-button
            >
          </div>
        </div>
      </template>
    </mcp-dialog>
  </div>
</template>

<script>
import ChatContact from "./ChatContact.vue";
import ChatLog from "./ChatLog.vue";
import ChatNavbar from "./ChatNavbar.vue";
import UserProfile from "./UserProfile.vue";
import VuePerfectScrollbar from "vue-perfect-scrollbar";
import moduleChat from "@/store/chat/moduleChat.js";
import McpDialog from "../../components/vx-dialogs/VxDialogs";
import vSelect from "vue-select";
import Calendar from "v-calendar/lib/components/calendar.umd";
import DatePicker from "v-calendar/lib/components/date-picker.umd";

export default {
  data() {
    return {
      faq: false,
      addFaq: false,
      newClient: false,
      notes: false,
      active: true,
      isHidden: false,
      searchContact: "",
      activeProfileSidebar: false,
      activeChatUser: 1,
      userProfileId: -1,
      typedMessage: "",
      isChatPinned: false,
      settings: {
        maxScrollbarLength: 60,
        wheelSpeed: 0.7
      },
      clickNotClose: true,
      isChatSidebarActive: true,
      isLoggedInUserProfileView: false,
      showCalendar: false,
      // custome
      compareBox: false,
      previewImg: true,
      viewImg: true,
      uploadImg: false,
      deleteNotes: null,
      closeFaq: false,
      //popup open
      faq: false,
      addFaq: false,
      newClient: false,
      notesData: [
        {
          title: "Workouts 3 times a week",
          date: "05-09-2020"
        },
        {
          title: "Carla needs to maintain her sleep...",
          date: "24-07-2020"
        },
        {
          title: "Let Carla know about updated sho...",
          date: "15-06-2020"
        },
        {
          title: "Update the workout plan before ...",
          date: "08-04-2020"
        }
      ]
    };
  },
  watch: {
    windowWidth() {
      this.setSidebarWidth();
    }
  },
  computed: {
    chatLastMessaged() {
      return userId => this.$store.getters["chat/chatLastMessaged"](usessrId);
    },
    chatUnseenMessages() {
      return userId => {
        const unseenMsg = this.$store.getters["chat/chatUnseenMessages"](
          userId
        );
        if (unseenMsg) return unseenMsg;
      };
    },
    activeUser() {
      return this.$store.state.AppActiveUser;
    },
    getddStatusColor() {
      return isActiveUser => {
        const userStatus = this.getUserStatus(isActiveUser);

        if (userStatus === "online") {
          return "success";
        } else if (userStatus === "do not disturb") {
          return "danger";
        } else if (userStatus === "away") {
          return "warning";
        } else {
          return "grey";
        }
      };
    },
    chatContacts() {
      return this.$store.getters["chat/chatContacts"];
    },
    contacts() {
      return this.$store.getters["chat/contacts"];
    },
    searchQuery: {
      get() {
        return this.$store.state.chat.chatSearchQuery;
      },
      set(val) {
        this.$store.dispatch("chat/setChatSearchQuery", val);
      }
    },
    scrollbarTag() {
      return this.$store.getters.scrollbarTag;
    },
    isActiveChatUser() {
      return userId => userId === this.activeChatUser;
    },
    windowWidth() {
      return this.$store.state.windowWidth;
    }
  },
  methods: {
    getUserStatus(isActiveUser) {
      // return "active"
      return isActiveUser
        ? this.$store.state.AppActiveUser.status
        : this.contacts[this.activeChatUser].status;
    },
    closeProfileSidebar(value) {
      this.activeProfileSidebar = value;
    },
    updateActiveChatUser(contactId) {
      this.activeChatUser = contactId;
      if (this.$store.getters["chat/chatDataOfUser"](this.activeChatUser)) {
        this.$store.dispatch("chat/markSeenAllMessages", contactId);
      }
      const chatData = this.$store.getters["chat/chatDataOfUser"](
        this.activeChatUser
      );
      if (chatData) this.isChatPinned = chatData.isPinned;
      else this.isChatPinned = false;
      this.toggleChatSidebar();
      this.typedMessage = "";
    },
    showProfileSidebar(userId, openOnLeft = false) {
      this.userProfileId = userId;
      this.isLoggedInUserProfileView = openOnLeft;
      this.activeProfileSidebar = !this.activeProfileSidebar;
    },
    sendMsg() {
      if (!this.typedMessage) return;
      const payload = {
        isPinned: this.isChatPinned,
        msg: {
          textContent: this.typedMessage,
          time: String(new Date()),
          isSent: true,
          isSeen: false
        },
        id: this.activeChatUser
      };
      this.$store.dispatch("chat/sendChatMessage", payload);
      this.typedMessage = "";

      const scroll_el = this.$refs.chatLogPS.$el || this.$refs.chatLogPS;
      scroll_el.scrollTop = this.$refs.chatLog.scrollHeight;
    },
    toggleIsChatPinned(value) {
      this.isChatPinned = value;
    },
    setSidebarWidth() {
      if (this.windowWidth < 1200) {
        this.isChatSidebarActive = this.clickNotClose = false;
      } else {
        this.isChatSidebarActive = this.clickNotClose = true;
      }
    },
    toggleChatSidebar(value = false) {
      if (!value && this.clickNotClose) return;
      this.isChatSidebarActive = value;
    }
  },
  components: {
    "v-date-picker": DatePicker,
    VuePerfectScrollbar,
    "v-calendar": Calendar,
    ChatContact,
    UserProfile,
    ChatNavbar,
    ChatLog,
    McpDialog,
    "v-select": vSelect
  },
  created() {
    this.$store.registerModule("chat", moduleChat);
    this.$store.dispatch("chat/fetchContacts");
    this.$store.dispatch("chat/fetchChatContacts");
    this.$store.dispatch("chat/fetchChats");
    this.setSidebarWidth();
  },
  beforeDestroy() {
    this.$store.unregisterModule("chat");
  },
  mounted() {
    this.$store.dispatch("chat/setChatSearchQuery", "");
  }
};
</script>

<style lang="scss">
@import "@/assets/scss/vuexy/apps/chat.scss";
.msg {
  border-radius: 16px 16px 4px 16px !important;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1);
  border: 1px solid #1866ff;
}
.msg-start {
  border-radius: 16px 16px 16px 4px !important;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1);
  border: 1px solid #d2d5dc !important;
}
.chat-today {
  background: rgba(34, 40, 52, 0.6);
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  border-radius: 12px;
  padding: 4px 8px;
}
// chat input box
.chat__input .chat-input-box {
  background: #ededf0;
  border: 1px solid #d2d5dc;
  box-sizing: border-box;
  border-radius: 20px;
  padding: 11px 14px 11px 74px;
}
.chat__input .chat-input-box::placeholder,
.chat-search-textbox .search-input {
  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 19px;
  color: #687182;
}
.chat__input .emoji-icon-chat {
  top: 9px;
  left: 14px;
}
.chat__input .attachment-icon-chat {
  top: 9px;
  left: 43.6px;
}
.chat__input .subtract-icon-chat {
  top: 11px;
  right: 13px;
}
.chat-nav-hight {
  height: 58px;
}
.statistics-nav {
  background: white;
  border-left: 1px solid #ededf0;
  border-bottom: 1px solid #ededf0;
  box-shadow: none !important;
}

.vs-input--input .input-width {
  width: 261px;
}

// new chat btn
.new-chat-btn {
  padding: 4px 8px !important;
}
.new-chat-btn .vs-button--text {
  display: flex;
  align-items: center;
}
.input-width .vs-con-input-label {
  width: 261px !important;
}
.chat-search-textbox .search-input {
  padding: 7px 38px;
  background: #ffffff;
  border: 1px solid #ededf0;
  box-sizing: border-box;
  border-radius: 6px;
  position: relative;
  width: 100%;
}
.chat-search-textbox .chat-icon-search {
  left: 24px !important;
  position: absolute !important;
  top: 26px !important;
  color: #868fa0 !important;
}
.chat-search-textbox .chat-icon-search-faq {
  left: 14px !important;
  position: absolute !important;
  top: 10px !important;
  color: #868fa0 !important;
}
// new clients css
.new-cliens-popup .vs-popup {
  width: 343px !important;
}
.new-cliens-popup .vs-popup--content {
  padding: 0px !important;
}
// new clients css
.new-cliens-popup .vs-popup {
  width: 343px !important;
}
.new-cliens-popup .vs-popup--content {
  padding: 0px !important;
}
/* auto replay popup */
.auto-replay .vs-dropdown--custom {
  padding-left: 0px !important;
  padding-right: 0px !important;
  border-radius: 8px !important;
  box-shadow: 0px 15px 35px rgba(51, 51, 78, 0.1),
    0px 5px 15px rgba(0, 0, 0, 0.13), 0px 0px 2px rgba(0, 0, 0, 0.1) !important;
}
/* low-sleep */
.low-sleep .vs-dropdown--menu {
  border-radius: 8px !important;
  box-shadow: 0px 15px 35px rgba(51, 51, 78, 0.1),
    0px 5px 15px rgba(0, 0, 0, 0.13), 0px 0px 2px rgba(0, 0, 0, 0.1) !important;
  width: 140px;
}
/*  Frequently Asked Question  */

.faq .vs-dropdown--menu {
  padding-left: 0px !important;
  padding-right: 0px !important;
  padding-bottom: 0px !important;
  border-radius: 8px !important;
  box-shadow: 0px 15px 35px rgba(51, 51, 78, 0.1),
    0px 5px 15px rgba(0, 0, 0, 0.13), 0px 0px 2px rgba(0, 0, 0, 0.1) !important;
}
.addfaq .vs-popup {
  width: 440px !important;
}
.addnote-width .vs-popup {
  max-width: 448px;
  box-shadow: 0px 30px 70px rgba(51, 51, 78, 0.15),
    0px 10px 30px rgba(0, 0, 0, 0.2), 0px 0px 4px rgba(0, 0, 0, 0.15);
  border-radius: 8px;
}
</style>
