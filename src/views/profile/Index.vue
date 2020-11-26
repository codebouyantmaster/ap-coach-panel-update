<template>
  <div id="chat-app">
    <div class="vx-row">
      <div
        class="vx-col md:w-8/12 lg:w-9/12 lg:w-9/12 py-8 px-3 w-full"
        style="background: #f7f8fa !important"
      >
        <div
          id="chat-right-sidebar"
          class="no-scroll-content chat-content-area"
        >
          <component
            :is="scrollbarTag"
            class="chat-scroll-area px-4"
            :settings="settings"
            :key="$vs.rtl"
          >
            <div class="vx-head flex justify-between">
              <div class="vx-head-left">
                <vs-dropdown
                  vs-custom-content
                  vs-trigger-click
                  class="cursor-pointer"
                >
                  <div class="con-img ml-3 w-100 flex items-center">
                    <img
                      key="onlineImg"
                      src="@/assets/images/portrait/small/avatar-s-4.jpg"
                      alt="user-img"
                      width="40"
                      height="40"
                      class="rounded-full cursor-pointer mr-3 block"
                    />
                    <div class="text-left leading-tight hidden sm:block">
                      <p
                        class="font-normal font-20 futura-md-bt font-normal secondary-900"
                      >
                        Carla Calzoni
                      </p>
                      <small class="gray-500 font-600 font-12"
                        >Last seen: 5 mins ago</small
                      >
                      <!-- <small>Available</small> -->
                    </div>
                    <feather-icon
                      icon="ChevronDownIcon"
                      svgClasses="ml-3 w-4 h-4"
                    />
                  </div>
                  <vs-dropdown-menu
                    class="w-64 vx-navbar-dropdown profile-dropdown"
                  >
                    <div
                      class="p-1"
                      @mouseover="showByCopyPhone = true"
                      @mouseout="showByCopyPhone = false"
                    >
                      <h3 class="open-sans font-600 gray-500 font-12 mb-1">
                        Phone number
                      </h3>
                      <h3
                        class="open-sans font-600 font-12 secondary-900 flex items-center"
                      >
                        +31 6 45946957
                        <svg
                          width="10"
                          class="ml-2"
                          v-show="showByCopyPhone === true"
                          height="14"
                          viewBox="0 0 14 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10.937 1.04348V1.28696H4.13704C3.66244 1.28696 2.65974 1.20955 2.07169 1.79634C1.49218 2.3746 1.54756 3.36484 1.54756 3.82609V13.2174H1.27388C0.989121 13.2174 0.716025 13.1075 0.51467 12.9118C0.313315 12.7161 0.200195 12.4507 0.200195 12.1739V1.04348C0.200195 0.766731 0.313315 0.501318 0.51467 0.305628C0.716025 0.109937 0.989121 0 1.27388 0H9.86335C10.1481 0 10.4212 0.109937 10.6226 0.305628C10.8239 0.501318 10.937 0.766731 10.937 1.04348Z"
                            fill="#367BFF"
                          />
                          <path
                            d="M12.7265 2.78261H4.13704C3.54406 2.78261 3.06335 3.24979 3.06335 3.82609V14.9565C3.06335 15.5328 3.54406 16 4.13704 16H12.7265C13.3195 16 13.8002 15.5328 13.8002 14.9565V3.82609C13.8002 3.24979 13.3195 2.78261 12.7265 2.78261Z"
                            fill="#367BFF"
                          />
                        </svg>
                      </h3>
                    </div>
                    <div
                      class="p-1"
                      @mouseover="showByCopyEmail = true"
                      @mouseout="showByCopyEmail = false"
                    >
                      <h3 class="open-sans font-600 gray-500 font-12 mb-1">
                        Emai address
                      </h3>
                      <h3
                        class="open-sans font-600 font-12 secondary-900 flex items-center"
                      >
                        example@email.com
                        <svg
                          width="10"
                          class="ml-2"
                          v-show="showByCopyEmail === true"
                          height="14"
                          viewBox="0 0 14 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10.937 1.04348V1.28696H4.13704C3.66244 1.28696 2.65974 1.20955 2.07169 1.79634C1.49218 2.3746 1.54756 3.36484 1.54756 3.82609V13.2174H1.27388C0.989121 13.2174 0.716025 13.1075 0.51467 12.9118C0.313315 12.7161 0.200195 12.4507 0.200195 12.1739V1.04348C0.200195 0.766731 0.313315 0.501318 0.51467 0.305628C0.716025 0.109937 0.989121 0 1.27388 0H9.86335C10.1481 0 10.4212 0.109937 10.6226 0.305628C10.8239 0.501318 10.937 0.766731 10.937 1.04348Z"
                            fill="#367BFF"
                          />
                          <path
                            d="M12.7265 2.78261H4.13704C3.54406 2.78261 3.06335 3.24979 3.06335 3.82609V14.9565C3.06335 15.5328 3.54406 16 4.13704 16H12.7265C13.3195 16 13.8002 15.5328 13.8002 14.9565V3.82609C13.8002 3.24979 13.3195 2.78261 12.7265 2.78261Z"
                            fill="#367BFF"
                          />
                        </svg>
                      </h3>
                    </div>
                    <vs-divider class="my-4 mr-1" />
                    <div class="flex justify-between items-center p-1">
                      <div>
                        <h3 class="open-sans font-600 gray-500 font-12 mb-1">
                          Phone number
                        </h3>
                        <h3 class="open-sans font-600 font-12 secondary-900">
                          +31 6 45946957
                        </h3>
                      </div>
                      <div>
                        <h3 class="open-sans font-600 gray-500 font-12 mb-1">
                          Phone number
                        </h3>
                        <h3 class="open-sans font-600 font-12 secondary-900">
                          +31 6 45946957
                        </h3>
                      </div>
                    </div>
                  </vs-dropdown-menu>
                </vs-dropdown>
              </div>
              <div class="vx-head-right">
                <div>
                  <div
                    class="font-700 font-14 open-sans bg-blue-600 py-2 px-3 cursor-pointer"
                    style="border-radius: 6px;"
                  >
                    <span
                      @click="quickMessage = true"
                      class="pr-2 mr-2"
                      style="border-right: 1px solid #0042c7"
                      ><svg
                        class="cursor-pointer"
                        width="10"
                        height="10"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8 0C7.30238 0 6.73684 0.565535 6.73684 1.26316V6.73684H1.26316C0.565536 6.73684 0 7.30238 0 8C0 8.69762 0.565535 9.26316 1.26316 9.26316H6.73684V14.7368C6.73684 15.4345 7.30238 16 8 16C8.69762 16 9.26316 15.4345 9.26316 14.7368V9.26316H14.7368C15.4345 9.26316 16 8.69762 16 8C16 7.30238 15.4345 6.73684 14.7368 6.73684H9.26316V1.26316C9.26316 0.565536 8.69762 0 8 0Z"
                          fill="white"
                        />
                      </svg>
                    </span>
                    <router-link to="chat">
                      <span class="open-sans font-700 font-14 white-400 pr-1">
                        Message</span
                      ></router-link
                    >
                  </div>
                </div>
              </div>
            </div>
            <div class="vx-head-border-bottom"></div>

            <div class="vx-row">
              <div class="vx-col md:w-6/12 w-full">
                <div class="vx-card-box">
                  <div
                    class="vx-card-title flex justify-between items-center"
                    style="padding: 7px 12px !important;"
                  >
                    <div class="flex items-center">
                      <h2>Issues</h2>
                      <vx-tooltip
                        color="white"
                        class="flex"
                        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras scelerisque non neque sed aliquet."
                      >
                        <svg
                          width="14"
                          height="14"
                          class="ml-2"
                          viewBox="0 0 14 14"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M7 14C10.8661 14 14 10.866 14 7C14 3.13396 10.8661 0 7 0C3.13385 0 0 3.13396 0 7C0 10.866 3.13385 14 7 14ZM7.9613 5.43372H5.17993V7.07263H6.11304V9.99158H5.17993V11.6305H8.82263V9.99158H7.9613V5.43372ZM6.09509 3.02319C6.0434 3.15083 6.01733 3.28841 6.01733 3.43591C6.01733 3.58342 6.0434 3.72302 6.09509 3.85461C6.15106 3.98225 6.22668 4.09387 6.32239 4.18958C6.41809 4.28528 6.5296 4.36101 6.65735 4.41687C6.724 4.44528 6.79321 4.46643 6.86542 4.48032C6.93506 4.49388 7.00726 4.50061 7.08203 4.50061C7.22559 4.50061 7.36102 4.47273 7.48877 4.41687C7.55115 4.38963 7.60968 4.35759 7.66437 4.32095C7.72162 4.28239 7.7746 4.2386 7.82373 4.18958C7.91943 4.09387 7.99506 3.98225 8.05103 3.85461C8.07666 3.79395 8.09674 3.73157 8.11041 3.66748C8.12665 3.59261 8.13477 3.51538 8.13477 3.43591C8.13477 3.36531 8.12836 3.29695 8.11554 3.23083C8.10187 3.15895 8.08008 3.08974 8.05103 3.02319C7.99506 2.8916 7.91943 2.77795 7.82373 2.68225C7.75366 2.6124 7.67548 2.55312 7.58875 2.50452C7.5567 2.48657 7.52338 2.47002 7.48877 2.45496C7.36102 2.39909 7.22559 2.37122 7.08203 2.37122C6.99744 2.37122 6.91583 2.37997 6.83722 2.39728C6.77527 2.41106 6.71545 2.43028 6.65735 2.45496C6.5296 2.51082 6.41809 2.58655 6.32239 2.68225C6.22668 2.77795 6.15106 2.8916 6.09509 3.02319Z"
                            fill="#868FA0"
                          />
                        </svg>
                      </vx-tooltip>
                    </div>
                    <div
                      class="vs-tabs tracker-tab vs-tabs-primary vs-tabs-position-top mr-20"
                    >
                      <div class="con-ul-tabs">
                        <ul class="ul-tabs vs-tabs--ul ul-tabs-fixed">
                          <li
                            class="vs-tabs--li"
                            @click.prevent="setLeftActive('issue-tab-1')"
                            :class="{
                              activeChild: isLeftActive('issue-tab-1')
                            }"
                          >
                            <button type="button" class="vs-tabs--btn">
                              <!----><span>Open (0)</span></button
                            ><!---->
                          </li>
                          <li
                            class="vs-tabs--li"
                            @click.prevent="setLeftActive('issue-tab-2')"
                            :class="{
                              activeChild: isLeftActive('issue-tab-2')
                            }"
                          >
                            <button type="button" class="vs-tabs--btn">
                              <!----><span>Solved (0)</span></button
                            ><!---->
                          </li>
                        </ul>
                        <span
                          class="line-vs-tabs"
                          style="left: 5px; width: 144px; height: 2px; transform: scaleX(1); top: 30px;"
                        ></span>
                      </div>
                    </div>
                    <div class="cursor-pointer">
                      <svg
                        @click="issue = true"
                        v-if="addIssue"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8 0C7.30238 0 6.73684 0.565535 6.73684 1.26316V6.73684H1.26316C0.565536 6.73684 0 7.30238 0 8C0 8.69762 0.565535 9.26316 1.26316 9.26316H6.73684V14.7368C6.73684 15.4345 7.30238 16 8 16C8.69762 16 9.26316 15.4345 9.26316 14.7368V9.26316H14.7368C15.4345 9.26316 16 8.69762 16 8C16 7.30238 15.4345 6.73684 14.7368 6.73684H9.26316V1.26316C9.26316 0.565536 8.69762 0 8 0Z"
                          fill="#0054FF"
                        />
                      </svg>
                    </div>
                  </div>
                  <div class="vx-card-border-bottom"></div>
                  <div class="vx-card-body">
                    <div class="py-10" v-if="addIssue === false">
                      <div class="card-body-icon py-5">
                        <svg
                          width="32"
                          height="28"
                          viewBox="0 0 32 28"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M16.0045 22.1671C15.0535 22.1671 14.282 21.4238 14.282 20.4859C14.282 19.548 15.0535 18.787 16.0045 18.787C16.9555 18.787 17.7091 19.548 17.7091 20.4859C17.7091 21.4238 16.9555 22.1671 16.0045 22.1671ZM31.3819 20.2912L20.9748 3.49697C20.4006 2.66522 19.7546 1.92195 18.9651 1.35565C18.1218 0.753961 17.1529 0.400024 16.0045 0.400024C14.8561 0.400024 13.8872 0.753961 13.0259 1.35565C12.2544 1.92195 11.6084 2.66522 11.0342 3.49697L0.573347 20.3797C-0.216155 21.9901 -0.216155 23.8306 0.734836 25.3702C1.57817 26.7329 3.06745 27.6 4.68234 27.6H27.3087C28.9416 27.6 30.4129 26.7329 31.2563 25.3702C32.2072 23.8483 32.2431 21.8663 31.3819 20.2912ZM16.0045 17.1058C15.3765 17.1058 14.9279 16.5926 14.8561 15.9732L14.282 10.8942C14.1922 10.0271 15.1253 9.21304 16.0045 9.21304C16.8837 9.21304 17.8168 10.0271 17.7091 10.8942L17.1349 15.9732C17.0811 16.5926 16.6325 17.1058 16.0045 17.1058Z"
                            fill="#868FA0"
                          />
                        </svg>
                      </div>
                      <div class="card-body-title">
                        <h5 class="py-2">There are no issues right now.</h5>
                        <span
                          class="py-2 blue-600 font-bold open-sans font-14 cursor-pointer"
                          @click="issue = true"
                          >+ New Issue</span
                        >
                      </div>
                    </div>
                    <div v-else>
                      <div
                        :class="{ 'active block': isLeftActive('issue-tab-1') }"
                        class="mix-height issue-tab-hide"
                        id="issue-tab-1"
                      >
                        <div v-for="(issue, idx) in issueData" :key="idx">
                          <div
                            class="card-body-head flex justify-between px-3 py-2 cursor-pointer"
                            @mouseover="deleteissue = idx"
                            @mouseout="deleteissue = null"
                          >
                            <h4 class="truncate" style="max-width: 310px">
                              {{ issue.title }}
                            </h4>
                            <div class="flex" v-if="deleteissue === idx">
                              <span class="open-sans font-600 blue-600 font-12"
                                >Mark as Solved</span
                              >
                              <vs-checkbox
                                v-model="checkBox1"
                                class="mr-2"
                              ></vs-checkbox>
                              <svg
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
                            <h5 v-else>{{ issue.date }}</h5>
                          </div>
                          <div class="vx-card-border-bottom"></div>
                        </div>
                      </div>
                      <div
                        :class="{ 'active block': isLeftActive('issue-tab-2') }"
                        class="mix-height issue-tab-hide"
                        id="issue-tab-2"
                      >
                        <div v-for="(issue, idx) in issueData" :key="idx">
                          <div
                            class="card-body-head flex justify-between px-3 py-2 cursor-pointer"
                            @mouseover="deleteissue = idx"
                            @mouseout="deleteissue = null"
                          >
                            <h4 class="truncate" style="max-width: 310px">
                              {{ issue.title }}
                            </h4>
                            <div class="flex" v-if="deleteissue === idx">
                              <span class="open-sans font-600 blue-600 font-12"
                                >Mark as Solveddsvsdvds</span
                              >
                              <vs-checkbox
                                v-model="checkBox1"
                                class="mr-2"
                              ></vs-checkbox>
                              <svg
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
                            <h5 v-else>{{ issue.date }}</h5>
                          </div>
                          <div class="vx-card-border-bottom"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="vx-col md:w-6/12 w-full">
                <div class="vx-card-box">
                  <div class="vx-card-title flex justify-between">
                    <div class="flex items-center">
                      <h2>Notes</h2>
                      <vx-tooltip
                        color="white"
                        class="flex"
                        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras scelerisque non neque sed aliquet."
                      >
                        <svg
                          width="14"
                          height="14"
                          class="ml-2"
                          viewBox="0 0 14 14"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M7 14C10.8661 14 14 10.866 14 7C14 3.13396 10.8661 0 7 0C3.13385 0 0 3.13396 0 7C0 10.866 3.13385 14 7 14ZM7.9613 5.43372H5.17993V7.07263H6.11304V9.99158H5.17993V11.6305H8.82263V9.99158H7.9613V5.43372ZM6.09509 3.02319C6.0434 3.15083 6.01733 3.28841 6.01733 3.43591C6.01733 3.58342 6.0434 3.72302 6.09509 3.85461C6.15106 3.98225 6.22668 4.09387 6.32239 4.18958C6.41809 4.28528 6.5296 4.36101 6.65735 4.41687C6.724 4.44528 6.79321 4.46643 6.86542 4.48032C6.93506 4.49388 7.00726 4.50061 7.08203 4.50061C7.22559 4.50061 7.36102 4.47273 7.48877 4.41687C7.55115 4.38963 7.60968 4.35759 7.66437 4.32095C7.72162 4.28239 7.7746 4.2386 7.82373 4.18958C7.91943 4.09387 7.99506 3.98225 8.05103 3.85461C8.07666 3.79395 8.09674 3.73157 8.11041 3.66748C8.12665 3.59261 8.13477 3.51538 8.13477 3.43591C8.13477 3.36531 8.12836 3.29695 8.11554 3.23083C8.10187 3.15895 8.08008 3.08974 8.05103 3.02319C7.99506 2.8916 7.91943 2.77795 7.82373 2.68225C7.75366 2.6124 7.67548 2.55312 7.58875 2.50452C7.5567 2.48657 7.52338 2.47002 7.48877 2.45496C7.36102 2.39909 7.22559 2.37122 7.08203 2.37122C6.99744 2.37122 6.91583 2.37997 6.83722 2.39728C6.77527 2.41106 6.71545 2.43028 6.65735 2.45496C6.5296 2.51082 6.41809 2.58655 6.32239 2.68225C6.22668 2.77795 6.15106 2.8916 6.09509 3.02319Z"
                            fill="#868FA0"
                          />
                        </svg>
                      </vx-tooltip>
                    </div>
                    <div class="cursor-pointer">
                      <svg
                        v-if="addNotes"
                        @click="notes = true"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8 0C7.30238 0 6.73684 0.565535 6.73684 1.26316V6.73684H1.26316C0.565536 6.73684 0 7.30238 0 8C0 8.69762 0.565535 9.26316 1.26316 9.26316H6.73684V14.7368C6.73684 15.4345 7.30238 16 8 16C8.69762 16 9.26316 15.4345 9.26316 14.7368V9.26316H14.7368C15.4345 9.26316 16 8.69762 16 8C16 7.30238 15.4345 6.73684 14.7368 6.73684H9.26316V1.26316C9.26316 0.565536 8.69762 0 8 0Z"
                          fill="#0054FF"
                        />
                      </svg>
                    </div>
                  </div>
                  <div class="vx-card-border-bottom"></div>
                  <div class="vx-card-body">
                    <div class="py-10" v-if="addNotes === false">
                      <div class="card-body-icon py-5">
                        <svg
                          width="32"
                          height="28"
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
                      <div class="card-body-title">
                        <h5 class="py-2">You haven't add any notes yet.</h5>
                        <span
                          class="py-2 blue-600 font-bold open-sans font-14 cursor-pointer"
                          @click="notes = true"
                          >+ New Notes</span
                        >
                      </div>
                    </div>
                    <div class="mix-height" v-else>
                      <div v-for="(notes, idx) in notesData" :key="idx">
                        <div
                          class="card-body-note flex justify-between px-3 py-2 cursor-pointer"
                          @mouseover="deleteNotes = idx"
                          @mouseout="deleteNotes = null"
                        >
                          <h4 class="truncate" style="max-width: 310px">
                            {{ notes.title }}
                          </h4>
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
                          <h5 v-else>{{ notes.date }}</h5>
                        </div>
                        <div class="vx-card-border-bottom"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="vx-col md:w-6/12 w-full">
                <div class="vx-card-box">
                  <div class="vx-card-title flex justify-between">
                    <div class="flex items-center">
                      <h2>Workout Plan</h2>
                      <vx-tooltip
                        color="white"
                        class="flex"
                        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras scelerisque non neque sed aliquet."
                      >
                        <svg
                          width="14"
                          height="14"
                          class="ml-2"
                          viewBox="0 0 14 14"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M7 14C10.8661 14 14 10.866 14 7C14 3.13396 10.8661 0 7 0C3.13385 0 0 3.13396 0 7C0 10.866 3.13385 14 7 14ZM7.9613 5.43372H5.17993V7.07263H6.11304V9.99158H5.17993V11.6305H8.82263V9.99158H7.9613V5.43372ZM6.09509 3.02319C6.0434 3.15083 6.01733 3.28841 6.01733 3.43591C6.01733 3.58342 6.0434 3.72302 6.09509 3.85461C6.15106 3.98225 6.22668 4.09387 6.32239 4.18958C6.41809 4.28528 6.5296 4.36101 6.65735 4.41687C6.724 4.44528 6.79321 4.46643 6.86542 4.48032C6.93506 4.49388 7.00726 4.50061 7.08203 4.50061C7.22559 4.50061 7.36102 4.47273 7.48877 4.41687C7.55115 4.38963 7.60968 4.35759 7.66437 4.32095C7.72162 4.28239 7.7746 4.2386 7.82373 4.18958C7.91943 4.09387 7.99506 3.98225 8.05103 3.85461C8.07666 3.79395 8.09674 3.73157 8.11041 3.66748C8.12665 3.59261 8.13477 3.51538 8.13477 3.43591C8.13477 3.36531 8.12836 3.29695 8.11554 3.23083C8.10187 3.15895 8.08008 3.08974 8.05103 3.02319C7.99506 2.8916 7.91943 2.77795 7.82373 2.68225C7.75366 2.6124 7.67548 2.55312 7.58875 2.50452C7.5567 2.48657 7.52338 2.47002 7.48877 2.45496C7.36102 2.39909 7.22559 2.37122 7.08203 2.37122C6.99744 2.37122 6.91583 2.37997 6.83722 2.39728C6.77527 2.41106 6.71545 2.43028 6.65735 2.45496C6.5296 2.51082 6.41809 2.58655 6.32239 2.68225C6.22668 2.77795 6.15106 2.8916 6.09509 3.02319Z"
                            fill="#868FA0"
                          />
                        </svg>
                      </vx-tooltip>
                    </div>
                    <div class="cursor-pointer">
                      <svg
                        v-if="addPlan"
                        @click="plan = true"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8 0C7.30238 0 6.73684 0.565535 6.73684 1.26316V6.73684H1.26316C0.565536 6.73684 0 7.30238 0 8C0 8.69762 0.565535 9.26316 1.26316 9.26316H6.73684V14.7368C6.73684 15.4345 7.30238 16 8 16C8.69762 16 9.26316 15.4345 9.26316 14.7368V9.26316H14.7368C15.4345 9.26316 16 8.69762 16 8C16 7.30238 15.4345 6.73684 14.7368 6.73684H9.26316V1.26316C9.26316 0.565536 8.69762 0 8 0Z"
                          fill="#0054FF"
                        />
                      </svg>
                    </div>
                  </div>
                  <div class="vx-card-border-bottom"></div>
                  <div class="vx-card-body">
                    <div class="py-10" v-if="addPlan === false">
                      <div class="card-body-icon py-5">
                        <svg
                          width="32"
                          height="32"
                          viewBox="0 0 32 32"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M0.48314 22.5842L9.41579 31.5169C10.0551 32.1562 11.0926 32.1611 11.7379 31.5311L0.468917 20.2621C-0.161129 20.9078 -0.156151 21.9449 0.48314 22.5842Z"
                            fill="#868FA0"
                          />
                          <path
                            d="M20.0384 9.20527L9.20477 20.0389L11.9608 22.795L22.7944 11.9613L20.0384 9.20527Z"
                            fill="#868FA0"
                          />
                          <path
                            d="M1.17932 16.4043L1.09185 16.4918C0.259495 17.3241 0.259495 18.6784 1.09185 19.5108L1.3795 19.7984H1.37701L12.2012 30.6226V30.6205L12.4889 30.9081C13.3212 31.7405 14.6752 31.7405 15.5079 30.9078L15.5954 30.8203C16.4277 29.988 16.4277 28.6337 15.5957 27.8013L4.19871 16.4043C3.36599 15.5719 2.01203 15.5719 1.17932 16.4043Z"
                            fill="#868FA0"
                          />
                          <path
                            d="M16.4917 1.09189L16.4043 1.17935C15.5719 2.01171 15.5719 3.36603 16.4043 4.19838L27.8016 15.5957C28.634 16.4281 29.9879 16.4281 30.8206 15.5954L30.9081 15.5079C31.7405 14.6756 31.7405 13.3213 30.9085 12.4889L19.5111 1.09189C18.6784 0.259529 17.3244 0.259529 16.4917 1.09189Z"
                            fill="#868FA0"
                          />
                          <path
                            d="M20.2592 0.471796L31.53 11.739C32.1611 11.0937 32.1568 10.0555 31.5168 9.41582L22.5842 0.483174C21.9438 -0.157183 20.9042 -0.161094 20.2592 0.471796Z"
                            fill="#868FA0"
                          />
                          <path
                            d="M2.9155 29.0845C3.50608 29.6751 4.35017 29.9158 5.17364 29.7288L5.85844 29.5727L2.42732 26.1416L2.27123 26.8264C2.08386 27.6498 2.32492 28.4939 2.9155 29.0845Z"
                            fill="#868FA0"
                          />
                          <path
                            d="M26.8263 2.27127L26.1415 2.42736L29.5726 5.85848L29.7287 5.17368C29.9161 4.35021 29.675 3.50612 29.0845 2.91554C28.4939 2.32496 27.6498 2.08389 26.8263 2.27127Z"
                            fill="#868FA0"
                          />
                        </svg>
                      </div>
                      <div class="card-body-title py-2 pt-1">
                        <h5 class="py-2">
                          You haven't added any workout plans yet.
                        </h5>
                        <vs-button
                          class="btn text-primary-900 md:mr-6 lg:mr-6 xl:mr-6 futura-md-bt text-lg px-3 py-2 mx-2"
                          color="#E1E9FA"
                          type="filled"
                          @click="plan = true"
                          >+ New Plan
                        </vs-button>
                      </div>
                    </div>
                    <div class="mix-height" v-else>
                      <div
                        class="card-body-work flex justify-between px-3 my-2"
                      >
                        <div class="work-left">
                          <h4 class="mb-0">Workout plan - Monday</h4>
                          <small>6 exercises</small>
                        </div>
                        <div class="work-right">
                          <h5>14-02-2020</h5>
                        </div>
                      </div>
                      <div class="vx-card-border-bottom"></div>
                      <div
                        class="card-body-work flex justify-between px-3 my-2"
                      >
                        <div class="work-left">
                          <h4 class="mb-0">Workout plan - Tuesday</h4>
                          <small>7 exercises</small>
                        </div>
                        <div class="work-right">
                          <h5>01-01-2020</h5>
                        </div>
                      </div>
                      <div class="vx-card-border-bottom"></div>
                      <div
                        class="card-body-work flex justify-between px-3 my-2"
                      >
                        <div class="work-left">
                          <h4 class="mb-0">Workout plan - Wednesday</h4>
                          <small>7 exercises</small>
                        </div>
                        <div class="work-right">
                          <h5>01-01-2020</h5>
                        </div>
                      </div>
                      <div class="vx-card-border-bottom"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="vx-col md:w-6/12 w-full">
                <div class="vx-card-box">
                  <div class="vx-card-title flex justify-between">
                    <div class="flex items-center">
                      <h2>Nutrition Plan</h2>
                      <vx-tooltip
                        color="white"
                        class="flex"
                        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras scelerisque non neque sed aliquet."
                      >
                        <svg
                          width="14"
                          height="14"
                          class="ml-2"
                          viewBox="0 0 14 14"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M7 14C10.8661 14 14 10.866 14 7C14 3.13396 10.8661 0 7 0C3.13385 0 0 3.13396 0 7C0 10.866 3.13385 14 7 14ZM7.9613 5.43372H5.17993V7.07263H6.11304V9.99158H5.17993V11.6305H8.82263V9.99158H7.9613V5.43372ZM6.09509 3.02319C6.0434 3.15083 6.01733 3.28841 6.01733 3.43591C6.01733 3.58342 6.0434 3.72302 6.09509 3.85461C6.15106 3.98225 6.22668 4.09387 6.32239 4.18958C6.41809 4.28528 6.5296 4.36101 6.65735 4.41687C6.724 4.44528 6.79321 4.46643 6.86542 4.48032C6.93506 4.49388 7.00726 4.50061 7.08203 4.50061C7.22559 4.50061 7.36102 4.47273 7.48877 4.41687C7.55115 4.38963 7.60968 4.35759 7.66437 4.32095C7.72162 4.28239 7.7746 4.2386 7.82373 4.18958C7.91943 4.09387 7.99506 3.98225 8.05103 3.85461C8.07666 3.79395 8.09674 3.73157 8.11041 3.66748C8.12665 3.59261 8.13477 3.51538 8.13477 3.43591C8.13477 3.36531 8.12836 3.29695 8.11554 3.23083C8.10187 3.15895 8.08008 3.08974 8.05103 3.02319C7.99506 2.8916 7.91943 2.77795 7.82373 2.68225C7.75366 2.6124 7.67548 2.55312 7.58875 2.50452C7.5567 2.48657 7.52338 2.47002 7.48877 2.45496C7.36102 2.39909 7.22559 2.37122 7.08203 2.37122C6.99744 2.37122 6.91583 2.37997 6.83722 2.39728C6.77527 2.41106 6.71545 2.43028 6.65735 2.45496C6.5296 2.51082 6.41809 2.58655 6.32239 2.68225C6.22668 2.77795 6.15106 2.8916 6.09509 3.02319Z"
                            fill="#868FA0"
                          />
                        </svg>
                      </vx-tooltip>
                    </div>
                  </div>
                  <div class="vx-card-border-bottom"></div>
                  <div class="vx-card-body-file">
                    <div class="card-body-file flex">
                      <svg
                        width="38"
                        height="50"
                        viewBox="0 0 38 50"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M4.22216 0C1.89466 0 0 1.86875 0 4.16679V45.8334C0 48.1313 1.89475 50 4.22235 50H33.7778C36.1053 50 38 48.1313 38 45.8332V11.4582C38 11.1815 37.8887 10.9173 37.6908 10.722L27.1351 0.305175C26.9372 0.109864 26.6693 0 26.3888 0H4.22216ZM4.22236 2.0834H25.3333V8.3334C25.3333 10.6313 27.2281 12.5 29.5557 12.5H35.889V45.8332C35.889 46.9816 34.9426 47.9166 33.7778 47.9166H4.22235C3.05751 47.9166 2.11118 46.9816 2.11118 45.8332V4.16679C2.11118 3.01836 3.05762 2.0834 4.22236 2.0834ZM27.4443 3.55644L34.3961 10.4168H29.5555C28.3907 10.4168 27.4443 9.48183 27.4443 8.3334V3.55644ZM7.38902 10.4166C6.80556 10.4166 6.33333 10.8824 6.33333 11.4582C6.33333 12.034 6.80556 12.5 7.38902 12.5H20.0557C20.6391 12.5 21.1112 12.034 21.1112 11.4582C21.1112 10.8824 20.6391 10.4166 20.0557 10.4166H7.38902ZM7.38902 16.6666C6.80556 16.6667 6.33333 17.1325 6.33333 17.7082C6.33333 18.284 6.80556 18.75 7.38902 18.75H30.6112C31.1946 18.75 31.6669 18.284 31.6669 17.7082C31.6669 17.1324 31.1946 16.6666 30.6112 16.6666H7.38902ZM7.38902 22.9168C6.80556 22.9168 6.33333 23.3826 6.33333 23.9584C6.33333 24.5342 6.80556 25.0002 7.38902 25.0002H30.6112C31.1946 25.0002 31.6669 24.5342 31.6669 23.9584C31.6668 23.3826 31.1944 22.9168 30.611 22.9168H7.38902ZM7.38902 29.1668C6.80556 29.1668 6.33333 29.6326 6.33333 30.2084C6.33333 30.7842 6.80556 31.2502 7.38902 31.2502H30.611C31.1944 31.2502 31.6667 30.7842 31.6667 30.2084C31.6667 29.6326 31.1944 29.1668 30.611 29.1668H7.38902Z"
                          fill="#D2D5DC"
                        />
                        <path
                          d="M7.38902 35.4168C6.80556 35.4168 6.33333 35.8826 6.33333 36.4584C6.33333 37.0342 6.80556 37.5002 7.38902 37.5002H30.611C31.1944 37.5002 31.6667 37.0342 31.6667 36.4584C31.6667 35.8826 31.1944 35.4168 30.611 35.4168H7.38902Z"
                          fill="#D2D5DC"
                        />
                        <path
                          d="M7.38902 41.6668C6.80556 41.6668 6.33333 42.1326 6.33333 42.7084C6.33333 43.2842 6.80556 43.7502 7.38902 43.7502H30.611C31.1944 43.7502 31.6667 43.2842 31.6667 42.7084C31.6667 42.1326 31.1944 41.6668 30.611 41.6668H7.38902Z"
                          fill="#D2D5DC"
                        />
                      </svg>
                      <div class="fileupload-link flex items-center">
                        <h5><a>Upload a Nutrition Plan</a> or drag and drop</h5>
                      </div>
                    </div>
                  </div>
                  <div class="card-body-footer flex justify-between">
                    <div class="footer-icon inline-block">
                      <svg
                        width="16"
                        height="20"
                        viewBox="0 0 16 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M2.48867 0C1.55767 0 0.799805 0.747498 0.799805 1.66672V18.3334C0.799805 19.2525 1.55771 20 2.48875 20H14.3109C15.2419 20 15.9998 19.2525 15.9998 18.3333V4.58328C15.9998 4.47262 15.9553 4.36691 15.8761 4.28879L11.6538 0.12207C11.5747 0.0439456 11.4675 0 11.3553 0H2.48867ZM2.48875 0.833358H10.9331V3.33336C10.9331 4.25254 11.691 5 12.6221 5H15.1554V18.3333C15.1554 18.7927 14.7768 19.1666 14.3109 19.1666H2.48875C2.02281 19.1666 1.64427 18.7927 1.64427 18.3333V1.66672C1.64427 1.20734 2.02285 0.833358 2.48875 0.833358ZM11.7775 1.42258L14.5583 4.16672H12.622C12.1561 4.16672 11.7775 3.79273 11.7775 3.33336V1.42258ZM3.75541 4.16664C3.52203 4.16664 3.33314 4.35297 3.33314 4.58328C3.33314 4.81359 3.52203 5 3.75541 5H8.82208C9.05546 5 9.24427 4.81359 9.24427 4.58328C9.24427 4.35297 9.05546 4.16664 8.82208 4.16664H3.75541ZM3.75541 6.66664C3.52203 6.66668 3.33314 6.85301 3.33314 7.08328C3.33314 7.31359 3.52203 7.5 3.75541 7.5H13.0443C13.2777 7.5 13.4665 7.31359 13.4665 7.08328C13.4665 6.85297 13.2777 6.66664 13.0443 6.66664H3.75541ZM3.75541 9.16672C3.52203 9.16672 3.33314 9.35305 3.33314 9.58336C3.33314 9.81367 3.52203 10.0001 3.75541 10.0001H13.0443C13.2777 10.0001 13.4665 9.81367 13.4665 9.58336C13.4665 9.35305 13.2776 9.16672 13.0442 9.16672H3.75541ZM3.75541 11.6667C3.52203 11.6667 3.33314 11.853 3.33314 12.0834C3.33314 12.3137 3.52203 12.5001 3.75541 12.5001H13.0442C13.2776 12.5001 13.4665 12.3137 13.4665 12.0834C13.4665 11.853 13.2776 11.6667 13.0442 11.6667H3.75541Z"
                          fill="#D2D5DC"
                        />
                        <path
                          d="M3.75541 14.1667C3.52203 14.1667 3.33314 14.353 3.33314 14.5834C3.33314 14.8137 3.52203 15.0001 3.75541 15.0001H13.0442C13.2776 15.0001 13.4665 14.8137 13.4665 14.5834C13.4665 14.353 13.2776 14.1667 13.0442 14.1667H3.75541Z"
                          fill="#D2D5DC"
                        />
                        <path
                          d="M3.75541 16.6667C3.52203 16.6667 3.33314 16.853 3.33314 17.0834C3.33314 17.3137 3.52203 17.5001 3.75541 17.5001H13.0442C13.2776 17.5001 13.4665 17.3137 13.4665 17.0834C13.4665 16.853 13.2776 16.6667 13.0442 16.6667H3.75541Z"
                          fill="#D2D5DC"
                        />
                      </svg>
                      <div class="footer-title inline-block">
                        <h2>
                          Current nutrition plan
                          <svg
                            width="10"
                            height="10"
                            viewBox="0 0 10 10"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M10 4.99977C9.99167 4.81778 9.92088 4.61487 9.82361 4.49803L6.32942 0.286615C6.03113 -0.0587701 5.51892 -0.0872425 5.19124 0.175494C4.86357 0.438231 4.80957 0.969264 5.07792 1.29012L7.49696 4.21014L0.806348 4.21014C0.361029 4.21014 -1.94655e-08 4.56368 0 4.99977C1.94667e-08 5.43589 0.361029 5.78941 0.806348 5.78941L7.49696 5.78941L5.07792 8.70944C4.80957 9.0303 4.86908 9.55488 5.19124 9.82405C5.52486 10.1028 6.06117 10.039 6.32942 9.71294L9.82361 5.50153C9.96013 5.33792 9.98898 5.19942 10 4.99977Z"
                              fill="#367BFF"
                            />
                          </svg>
                        </h2>

                        <h5>Updated on 06-07-2019</h5>
                      </div>
                    </div>

                    <div class="footer-icon-button">
                      <vs-dropdown
                        vs-custom-content
                        vs-trigger-click
                        class="cursor-pointer"
                      >
                        <svg
                          width="6"
                          height="20"
                          viewBox="0 0 6 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M2.99247 7.80488C4.18294 7.80488 5.13532 8.78049 5.13532 10C5.13532 11.2195 4.18294 12.1951 2.99247 12.1951C1.80199 12.1951 0.849609 11.2195 0.849609 10C0.849609 8.78049 1.80199 7.80488 2.99247 7.80488ZM0.849609 2.19512C0.849609 3.41463 1.80199 4.39024 2.99247 4.39024C4.18294 4.39024 5.13532 3.41463 5.13532 2.19512C5.13532 0.97561 4.18294 0 2.99247 0C1.80199 0 0.849609 0.97561 0.849609 2.19512ZM0.849609 17.8049C0.849609 19.0244 1.80199 20 2.99247 20C4.18294 20 5.13532 19.0244 5.13532 17.8049C5.13532 16.5854 4.18294 15.6098 2.99247 15.6098C1.80199 15.6098 0.849609 16.5854 0.849609 17.8049Z"
                            fill="#868FA0"
                          />
                        </svg>
                        <vs-dropdown-menu
                          class="w-20 vx-navbar-dropdown profile-dropdown"
                        >
                          <div
                            class="p-1"
                            @mouseover="showByCopyPhone = true"
                            @mouseout="showByCopyPhone = false"
                          >
                            <h3
                              class="open-sans font-600 font-12 mb-1"
                              style="color: #D81919"
                            >
                              Remove Plan
                            </h3>
                          </div>
                        </vs-dropdown-menu>
                      </vs-dropdown>
                    </div>
                  </div>
                </div>
              </div>
              <div class="vx-col md:w-6/12 w-full">
                <div class="vx-card-box">
                  <div class="vx-card-title flex justify-between">
                    <div class="flex items-center">
                      <h2>Shopping List</h2>
                      <vx-tooltip
                        color="white"
                        class="flex"
                        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras scelerisque non neque sed aliquet."
                      >
                        <svg
                          width="14"
                          height="14"
                          class="ml-2"
                          viewBox="0 0 14 14"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M7 14C10.8661 14 14 10.866 14 7C14 3.13396 10.8661 0 7 0C3.13385 0 0 3.13396 0 7C0 10.866 3.13385 14 7 14ZM7.9613 5.43372H5.17993V7.07263H6.11304V9.99158H5.17993V11.6305H8.82263V9.99158H7.9613V5.43372ZM6.09509 3.02319C6.0434 3.15083 6.01733 3.28841 6.01733 3.43591C6.01733 3.58342 6.0434 3.72302 6.09509 3.85461C6.15106 3.98225 6.22668 4.09387 6.32239 4.18958C6.41809 4.28528 6.5296 4.36101 6.65735 4.41687C6.724 4.44528 6.79321 4.46643 6.86542 4.48032C6.93506 4.49388 7.00726 4.50061 7.08203 4.50061C7.22559 4.50061 7.36102 4.47273 7.48877 4.41687C7.55115 4.38963 7.60968 4.35759 7.66437 4.32095C7.72162 4.28239 7.7746 4.2386 7.82373 4.18958C7.91943 4.09387 7.99506 3.98225 8.05103 3.85461C8.07666 3.79395 8.09674 3.73157 8.11041 3.66748C8.12665 3.59261 8.13477 3.51538 8.13477 3.43591C8.13477 3.36531 8.12836 3.29695 8.11554 3.23083C8.10187 3.15895 8.08008 3.08974 8.05103 3.02319C7.99506 2.8916 7.91943 2.77795 7.82373 2.68225C7.75366 2.6124 7.67548 2.55312 7.58875 2.50452C7.5567 2.48657 7.52338 2.47002 7.48877 2.45496C7.36102 2.39909 7.22559 2.37122 7.08203 2.37122C6.99744 2.37122 6.91583 2.37997 6.83722 2.39728C6.77527 2.41106 6.71545 2.43028 6.65735 2.45496C6.5296 2.51082 6.41809 2.58655 6.32239 2.68225C6.22668 2.77795 6.15106 2.8916 6.09509 3.02319Z"
                            fill="#868FA0"
                          />
                        </svg>
                      </vx-tooltip>
                    </div>
                    <div class="cursor-pointer">
                      <svg
                        v-if="addShoppingList"
                        @click="shoppingList = true"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8 0C7.30238 0 6.73684 0.565535 6.73684 1.26316V6.73684H1.26316C0.565536 6.73684 0 7.30238 0 8C0 8.69762 0.565535 9.26316 1.26316 9.26316H6.73684V14.7368C6.73684 15.4345 7.30238 16 8 16C8.69762 16 9.26316 15.4345 9.26316 14.7368V9.26316H14.7368C15.4345 9.26316 16 8.69762 16 8C16 7.30238 15.4345 6.73684 14.7368 6.73684H9.26316V1.26316C9.26316 0.565536 8.69762 0 8 0Z"
                          fill="#0054FF"
                        />
                      </svg>
                    </div>
                  </div>
                  <div class="vx-card-border-bottom"></div>
                  <div class="vx-card-body">
                    <div class="py-10" v-if="addShoppingList === false">
                      <div class="card-body-icon py-5">
                        <svg
                          width="32"
                          height="30"
                          viewBox="0 0 32 30"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1.12479 0.60074C-0.210731 0.559433 -0.434671 2.52402 0.874804 2.79371L3.2873 3.33027C4.56344 9.52897 5.95452 15.7024 7.30345 21.8855C7.41436 22.3925 7.85728 22.7533 8.36873 22.7531H27.5259C29.0019 22.7753 29.0019 20.5157 27.5259 20.5377H9.24438L8.76145 18.323H28.4925C29.0039 18.3232 29.4468 17.9625 29.5578 17.4555L31.9738 6.37997C32.1244 5.68866 31.6065 5.0333 30.9092 5.03288C22.5626 5.03308 14.216 5.03271 5.86959 5.02871L5.27659 2.17197C5.18822 1.74561 4.86192 1.4115 4.44284 1.31813L1.34076 0.628677C1.26984 0.612071 1.19758 0.602469 1.12486 0.600655L1.12479 0.60074ZM12.9096 23.4924C11.3159 23.4924 10.0007 24.828 10.0007 26.4463C10.0007 28.0645 11.3159 29.4001 12.9096 29.4001C14.5032 29.4001 15.8185 28.0645 15.8185 26.4463C15.8185 24.828 14.5032 23.4924 12.9096 23.4924ZM23.0907 23.4924C21.4971 23.4924 20.1818 24.828 20.1818 26.4463C20.1818 28.0645 21.4971 29.4001 23.0907 29.4001C24.6844 29.4001 25.9997 28.0645 25.9997 26.4463C25.9997 24.828 24.6844 23.4924 23.0907 23.4924Z"
                            fill="#868FA0"
                          />
                        </svg>
                      </div>
                      <div class="card-body-title">
                        <h5 class="py-2">
                          There isn't any shopping list created.
                        </h5>
                        <span
                          class="py-2 blue-600 font-bold open-sans font-14 cursor-pointer"
                          @click="shoppingList = true"
                          >+ New Shopping List</span
                        >
                      </div>
                    </div>
                    <div class="mix-height" v-else>
                      <div
                        class="card-body-work flex justify-between px-3 my-2"
                      >
                        <div class="work-left">
                          <h4 class="mb-0">Clothing</h4>
                          <small>4 Items</small>
                        </div>
                        <div class="work-right">
                          <h5 class="mb-0">15-06-2020</h5>
                          <strong>Bought: 2/4</strong>
                        </div>
                      </div>
                      <div class="vx-card-border-bottom"></div>
                      <div
                        class="card-body-work flex justify-between px-3 my-2"
                      >
                        <div class="work-left">
                          <h4 class="mb-0">Supplements</h4>
                          <small>6 Items</small>
                        </div>
                        <div class="work-right">
                          <h5 class="mb-0">08-06-2020</h5>
                          <strong>Bought: 5/6</strong>
                        </div>
                      </div>
                      <div class="vx-card-border-bottom"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="vx-col md:w-6/12 w-full">
                <div class="vx-card-box">
                  <div class="vx-card-title flex justify-between">
                    <div class="flex items-center">
                      <h2>Shopping History</h2>
                      <vx-tooltip
                        color="white"
                        class="flex"
                        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras scelerisque non neque sed aliquet."
                      >
                        <svg
                          width="14"
                          height="14"
                          class="ml-2"
                          viewBox="0 0 14 14"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M7 14C10.8661 14 14 10.866 14 7C14 3.13396 10.8661 0 7 0C3.13385 0 0 3.13396 0 7C0 10.866 3.13385 14 7 14ZM7.9613 5.43372H5.17993V7.07263H6.11304V9.99158H5.17993V11.6305H8.82263V9.99158H7.9613V5.43372ZM6.09509 3.02319C6.0434 3.15083 6.01733 3.28841 6.01733 3.43591C6.01733 3.58342 6.0434 3.72302 6.09509 3.85461C6.15106 3.98225 6.22668 4.09387 6.32239 4.18958C6.41809 4.28528 6.5296 4.36101 6.65735 4.41687C6.724 4.44528 6.79321 4.46643 6.86542 4.48032C6.93506 4.49388 7.00726 4.50061 7.08203 4.50061C7.22559 4.50061 7.36102 4.47273 7.48877 4.41687C7.55115 4.38963 7.60968 4.35759 7.66437 4.32095C7.72162 4.28239 7.7746 4.2386 7.82373 4.18958C7.91943 4.09387 7.99506 3.98225 8.05103 3.85461C8.07666 3.79395 8.09674 3.73157 8.11041 3.66748C8.12665 3.59261 8.13477 3.51538 8.13477 3.43591C8.13477 3.36531 8.12836 3.29695 8.11554 3.23083C8.10187 3.15895 8.08008 3.08974 8.05103 3.02319C7.99506 2.8916 7.91943 2.77795 7.82373 2.68225C7.75366 2.6124 7.67548 2.55312 7.58875 2.50452C7.5567 2.48657 7.52338 2.47002 7.48877 2.45496C7.36102 2.39909 7.22559 2.37122 7.08203 2.37122C6.99744 2.37122 6.91583 2.37997 6.83722 2.39728C6.77527 2.41106 6.71545 2.43028 6.65735 2.45496C6.5296 2.51082 6.41809 2.58655 6.32239 2.68225C6.22668 2.77795 6.15106 2.8916 6.09509 3.02319Z"
                            fill="#868FA0"
                          />
                        </svg>
                      </vx-tooltip>
                    </div>
                  </div>
                  <div class="vx-card-border-bottom"></div>
                  <div class="vx-card-body">
                    <div class="py-10" v-if="true">
                      <div class="card-body-icon pt-6 pb-3">
                        <svg
                          width="28"
                          height="32"
                          viewBox="0 0 28 32"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M27.5881 29.3931L25.2906 11.0501C25.1594 9.87699 24.1747 9.02974 22.9932 9.02974H20.1706V6.12627C20.1706 2.73727 17.4137 0 14.0004 0C10.5871 0 7.83013 2.73727 7.83013 6.12627V9.02974H5.00757C3.82603 9.02974 2.84142 9.87699 2.71013 11.0501L0.412698 29.3931C0.347057 30.0448 0.54398 30.6965 1.00347 31.2179C1.46295 31.6741 2.05372 32 2.71013 32H25.2906C25.9471 32 26.6035 31.7393 26.9973 31.2179C27.4568 30.6965 27.6537 30.0448 27.5881 29.3931ZM9.14295 6.12627C9.14295 3.45417 11.3091 1.30346 14.0004 1.30346C16.6917 1.30346 18.8578 3.45417 18.8578 6.12627V9.02974H9.14295V6.12627Z"
                            fill="#868FA0"
                          />
                        </svg>
                      </div>
                      <div class="card-body-title-shopping">
                        <h5 class="pt-5 pb-7">
                          Carla haven't bought anything yet.
                        </h5>
                      </div>
                    </div>
                    <div class="mix-height" v-else>
                      <div
                        class="card-body-work flex justify-between px-3 my-2"
                      >
                        <div class="work-left">
                          <h4 class="mb-0">AP T-shirt</h4>
                          <small>2 Pieces</small>
                        </div>
                        <div class="work-right">
                          <h5 class="mb-0">15-06-2020</h5>
                          <strong class="gray-500">Size: L</strong>
                        </div>
                      </div>
                      <div class="vx-card-border-bottom"></div>
                      <div
                        class="card-body-work flex justify-between px-3 my-2"
                      >
                        <div class="work-left">
                          <h4 class="mb-0">AP Bottle 1L</h4>
                          <small>3 Pieces</small>
                        </div>
                        <div class="work-right">
                          <h5 class="mb-0">15-06-2020</h5>
                          <strong class="gray-500">Color: Pink</strong>
                        </div>
                      </div>
                      <div class="vx-card-border-bottom"></div>
                      <div
                        class="card-body-work flex justify-between px-3 my-2"
                      >
                        <div class="work-left">
                          <h4 class="mb-0">Whey Protein</h4>
                          <small>1 Pieces</small>
                        </div>
                        <div class="work-right">
                          <h5 class="mb-0">15-06-2020</h5>
                          <strong class="gray-500">5kg</strong>
                        </div>
                      </div>
                      <div class="vx-card-border-bottom"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="vx-row mrgtop">
              <div class="vx-col w-full">
                <h3 class="font-24 gray-500 font-700 open-sans mb-4">
                  Workout History
                </h3>
                <div
                  class="bg-white card-border-1 border-radius-8px workout-history-card"
                >
                  <div class="workout-history-section">
                    <div
                      class="vx-row w-full flex justify-between items-center"
                    >
                      <div
                        class="vx-col md:w-6/12 lg:w-6/12 xl:w-6/12 text-left open-sans font-600 font-14 secondary-900"
                      >
                        Workout plan - Monday
                      </div>
                      <div
                        class="vx-col md:w-6/12 lg:w-6/12 xl:w-6/12 text-right open-sans font-600 font-12 gray-500"
                      >
                        06:05 - 07:52
                      </div>
                    </div>
                    <div
                      class="vx-row w-full flex justify-between items-center"
                    >
                      <div
                        class="vx-col md:w-3/12 lg:w-3/12 xl:w-3/12 text-left open-sans font-600 font-12 gray-500"
                      >
                        7 exercises
                      </div>
                      <div
                        class="vx-col md:w-3/12 lg:w-3/12 xl:w-3/12 text-center open-sans font-600 font-12 gray-500"
                      >
                        02:14:12
                      </div>
                      <div
                        class="vx-col md:w-4/12 lg:w-4/12 xl:w-4/12 text-right open-sans font-600 font-12 gray-500"
                      >
                        Monday, September 7th, 2020
                      </div>
                    </div>
                    <hr class="m-2 hr-border-1" />
                  </div>
                  <div class="workout-history-section">
                    <div
                      class="vx-row w-full flex justify-between items-center"
                    >
                      <div
                        class="vx-col md:w-6/12 lg:w-6/12 xl:w-6/12 text-left open-sans font-600 font-14 secondary-900"
                      >
                        Workout plan - Saturday
                      </div>
                      <div
                        class="vx-col md:w-6/12 lg:w-6/12 xl:w-6/12 text-right open-sans font-600 font-12 gray-500"
                      >
                        06:05 - 07:52
                      </div>
                    </div>
                    <div
                      class="vx-row w-full flex justify-between items-center"
                    >
                      <div
                        class="vx-col md:w-3/12 lg:w-3/12 xl:w-3/12 text-left open-sans font-600 font-12 gray-500"
                      >
                        6 exercises
                      </div>
                      <div
                        class="vx-col md:w-3/12 lg:w-3/12 xl:w-3/12 text-center open-sans font-600 font-12 gray-500"
                      >
                        02:14:12
                      </div>
                      <div
                        class="vx-col md:w-4/12 lg:w-4/12 xl:w-4/12 text-right open-sans font-600 font-12 gray-500"
                      >
                        Thursday, September 3rd, 2020
                      </div>
                    </div>
                    <hr class="m-2 hr-border-1" />
                  </div>
                  <div class="workout-history-section">
                    <div
                      class="vx-row w-full flex justify-between items-center"
                    >
                      <div
                        class="vx-col md:w-6/12 lg:w-6/12 xl:w-6/12 text-left open-sans font-600 font-14 secondary-900"
                      >
                        Workout plan - Thursday
                      </div>
                      <div
                        class="vx-col md:w-6/12 lg:w-6/12 xl:w-6/12 text-right open-sans font-600 font-12 gray-500"
                      >
                        06:05 - 07:52
                      </div>
                    </div>
                    <div
                      class="vx-row w-full flex justify-between items-center"
                    >
                      <div
                        class="vx-col md:w-3/12 lg:w-3/12 xl:w-3/12 text-left open-sans font-600 font-12 gray-500"
                      >
                        5 exercises
                      </div>
                      <div
                        class="vx-col md:w-2/12 lg:w-3/12 xl:w-3/12 text-center open-sans font-600 font-12 gray-500"
                      >
                        02:14:12
                      </div>
                      <div
                        class="vx-col md:w-4/12 lg:w-4/12 xl:w-4/12 text-right open-sans font-600 font-12 gray-500"
                      >
                        Wednesday, September 2nd, 2020
                      </div>
                    </div>
                    <hr class="m-2 hr-border-1" />
                  </div>
                  <div class="workout-history-section">
                    <div
                      class="vx-row w-full flex justify-between items-center"
                    >
                      <div
                        class="vx-col md:w-6/12 lg:w-6/12 xl:w-6/12 text-left open-sans font-600 font-14 secondary-900"
                      >
                        Workout plan - Wednesday
                      </div>
                      <div
                        class="vx-col md:w-6/12 lg:w-6/12 xl:w-6/12 text-right open-sans font-600 font-12 gray-500"
                      >
                        06:05 - 07:52
                      </div>
                    </div>
                    <div
                      class="vx-row w-full flex justify-between items-center"
                    >
                      <div
                        class="vx-col md:w-3/12 lg:w-3/12 xl:w-3/12 text-left open-sans font-600 font-12 gray-500"
                      >
                        7 exercises
                      </div>
                      <div
                        class="vx-col md:w-3/12 lg:w-3/12 xl:w-3/12 text-center open-sans font-600 font-12 gray-500"
                      >
                        02:14:12
                      </div>
                      <div
                        class="vx-col md:w-4/12 lg:w-4/12 xl:w-4/12 text-right open-sans font-600 font-12 gray-500"
                      >
                        Tuesday, September 1st, 2020
                      </div>
                    </div>
                    <hr class="m-2 hr-border-1" />
                  </div>
                </div>
              </div>
            </div>
          </component>
        </div>
      </div>
      <div
        class="vx-col md:w-4/12 lg:w-3/12 lg:w-3/12 d-theme-dark-light-bg py-6 w-full"
      >
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
            <vs-tabs alignment="fixed" class="tracker-tab">
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
                          class="font-600 font-14 open-sans secondary-900 mx-1 cursor-pointer"
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
                    <div class="vx-row mb-4" v-if="!viewImg">
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
                              ><span class="open-sans font-12 gray-500 font-600"
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
                              ><span class="open-sans font-12 gray-500 font-600"
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
                              ><span class="open-sans font-12 gray-500 font-600"
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
                              ><span class="open-sans font-12 gray-500 font-600"
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
                              ><span class="open-sans font-12 gray-500 font-600"
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
                              ><span class="open-sans font-12 gray-500 font-600"
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
                              ><span class="open-sans font-12 gray-500 font-600"
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
                              ><span class="open-sans font-12 gray-500 font-600"
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
                              ><span class="open-sans font-12 gray-500 font-600"
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
                              ><span class="open-sans font-12 gray-500 font-600"
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
                        <div>7 <small> hrs</small> 50 <small> mins</small></div>
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
                          <span class="font-16 font-600 open-sans secondary-900"
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
                    <div class="relative sleep-timer-body my-2">
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
                          <span class="font-700 secondary-900 font-16 open-sans"
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
                            <circle cx="40" cy="35" r="15" class="bg"></circle>
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
                          <span class="font-400 open-sans font-16 secondary-900"
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
          </component>
        </div>
      </div>
    </div>

    <mcp-dialog
      :active.sync="issue"
      :buttonCloseHidden="true"
      class="addissu-width"
    >
      <template #header>
        <div class="flex items-center justify-between">
          <svg
            width="32"
            height="28"
            viewBox="0 0 32 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M16.0045 22.1671C15.0535 22.1671 14.282 21.4238 14.282 20.4859C14.282 19.548 15.0535 18.787 16.0045 18.787C16.9555 18.787 17.7091 19.548 17.7091 20.4859C17.7091 21.4238 16.9555 22.1671 16.0045 22.1671ZM31.3819 20.2912L20.9748 3.49697C20.4006 2.66522 19.7546 1.92195 18.9651 1.35565C18.1218 0.753961 17.1529 0.400024 16.0045 0.400024C14.8561 0.400024 13.8872 0.753961 13.0259 1.35565C12.2544 1.92195 11.6084 2.66522 11.0342 3.49697L0.573347 20.3797C-0.216155 21.9901 -0.216155 23.8306 0.734836 25.3702C1.57817 26.7329 3.06745 27.6 4.68234 27.6H27.3087C28.9416 27.6 30.4129 26.7329 31.2563 25.3702C32.2072 23.8483 32.2431 21.8663 31.3819 20.2912ZM16.0045 17.1058C15.3765 17.1058 14.9279 16.5926 14.8561 15.9732L14.282 10.8942C14.1922 10.0271 15.1253 9.21304 16.0045 9.21304C16.8837 9.21304 17.8168 10.0271 17.7091 10.8942L17.1349 15.9732C17.0811 16.5926 16.6325 17.1058 16.0045 17.1058Z"
              fill="#868FA0"
            />
          </svg>
          <div class="title">
            <h2 class="secondary-900 font-600 font-20 open-sans">Add Issue</h2>
            <p class="open-sans font-14 gray-500">
              Issues are not let clients know what's stopping them to achieve
              their goals.
            </p>
          </div>
        </div>
      </template>
      <div class="content">
        <div>
          <!-- <vs-input
            class="w-full addmrg"
            label-placeholder="write down the issue..."
            v-model="input9"
          /> -->
          <input
            class="w-full py-5 px-2 input-border InputPlaceholder input-active"
            type="text"
            placeholder="write down the issue..."
          />
        </div>
      </div>
      <template #footer>
        <div class="flex  justify-end">
          <div class="footer  my-4">
            <vs-button
              class="btn1 py-2 px-4 mr-5 open-sans text-black font-700"
              type="border"
              @click="issue = false"
              >Cancel</vs-button
            >

            <vs-button
              class="btn2 py-2 px-4 open-sans font-700"
              color="primary"
              @click="
                addIssue = true;
                issue = false;
              "
              type="filled"
              >Add Issue</vs-button
            >
          </div>
        </div>
      </template>
    </mcp-dialog>

    <mcp-dialog
      :active.sync="notes"
      :buttonCloseHidden="true"
      class="note-width"
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
              class="btn1 py-2 px-4 mr-5 text-black open-sans font-700"
              type="border"
              @click="notes = false"
              >Cancel</vs-button
            >

            <vs-button
              class="btn2 py-2 px-4 open-sans font-700"
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

    <mcp-dialog
      :active.sync="plan"
      :buttonCloseHidden="true"
      class="workout-width"
    >
      <template #header>
        <div class="flex items-center justify-between">
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.48314 22.5842L9.41579 31.5169C10.0551 32.1562 11.0926 32.1611 11.7379 31.5311L0.468917 20.2621C-0.161129 20.9078 -0.156151 21.9449 0.48314 22.5842Z"
              fill="#868FA0"
            />
            <path
              d="M20.0384 9.20527L9.20477 20.0389L11.9608 22.795L22.7944 11.9613L20.0384 9.20527Z"
              fill="#868FA0"
            />
            <path
              d="M1.17932 16.4043L1.09185 16.4918C0.259495 17.3241 0.259495 18.6784 1.09185 19.5108L1.3795 19.7984H1.37701L12.2012 30.6226V30.6205L12.4889 30.9081C13.3212 31.7405 14.6752 31.7405 15.5079 30.9078L15.5954 30.8203C16.4277 29.988 16.4277 28.6337 15.5957 27.8013L4.19871 16.4043C3.36599 15.5719 2.01203 15.5719 1.17932 16.4043Z"
              fill="#868FA0"
            />
            <path
              d="M16.4917 1.09189L16.4043 1.17935C15.5719 2.01171 15.5719 3.36603 16.4043 4.19838L27.8016 15.5957C28.634 16.4281 29.9879 16.4281 30.8206 15.5954L30.9081 15.5079C31.7405 14.6756 31.7405 13.3213 30.9085 12.4889L19.5111 1.09189C18.6784 0.259529 17.3244 0.259529 16.4917 1.09189Z"
              fill="#868FA0"
            />
            <path
              d="M20.2592 0.471796L31.53 11.739C32.1611 11.0937 32.1568 10.0555 31.5168 9.41582L22.5842 0.483174C21.9438 -0.157183 20.9042 -0.161094 20.2592 0.471796Z"
              fill="#868FA0"
            />
            <path
              d="M2.9155 29.0845C3.50608 29.6751 4.35017 29.9158 5.17364 29.7288L5.85844 29.5727L2.42732 26.1416L2.27123 26.8264C2.08386 27.6498 2.32492 28.4939 2.9155 29.0845Z"
              fill="#868FA0"
            />
            <path
              d="M26.8263 2.27127L26.1415 2.42736L29.5726 5.85848L29.7287 5.17368C29.9161 4.35021 29.675 3.50612 29.0845 2.91554C28.4939 2.32496 27.6498 2.08389 26.8263 2.27127Z"
              fill="#868FA0"
            />
          </svg>
          <div class="title">
            <h2 class="open-sans font-20 font-600 secondary-900">
              New Workout
            </h2>
            <h5 class="open-sans font-14 gray-500">
              For clients to achieve their goals.
            </h5>
          </div>
        </div>
      </template>
      <div class="content">
        <div>
          <div class="workout-title flex justify-between mb-2">
            <h2 class="font-600 open-sans font-14 secondary-900">
              Workout Name
            </h2>
            <vx-tooltip
              color="white"
              class="flex"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras scelerisque non neque sed aliquet."
            >
              <vs-dropdown
                vs-custom-content
                vs-trigger-click
                class="cursor-pointer"
              >
                <div class="con-img ml-3 w-100 flex items-center">
                  <h1 class="font-600 open-sans font-14 blue-600">
                    + Existing Plan
                  </h1>
                </div>

                <vs-dropdown-menu
                  class="vx-navbar-dropdown profile-dropdown vx-existing-border"
                >
                  <ul style="min-width: 240px" class="ml-2">
                    <li class="flex  cursor-pointer py-2">
                      <div class="flex flex-col">
                        <h1 class="secondary-900 font-600 font-14 open-sans">
                          Workout Plan - Monday
                        </h1>
                        <h5 class="gray-500 font-600 font-12 open-sans">
                          6 excercises
                        </h5>
                      </div>
                    </li>

                    <li class="py-2">
                      <div class="flex flex-col">
                        <h1 class="secondary-900 font-600 font-14 open-sans">
                          Workout Plan - Tuesday
                        </h1>
                        <h5 class="gray-500 font-600 font-12 open-sans">
                          7 excercises
                        </h5>
                      </div>
                    </li>

                    <li class="py-2">
                      <div class="flex flex-col">
                        <h1 class="secondary-900 font-600 font-14 open-sans">
                          Workout Plan - Wednesday
                        </h1>
                        <h5 class="gray-500 font-600 font-12 open-sans">
                          7 excercises
                        </h5>
                      </div>
                    </li>
                  </ul>
                </vs-dropdown-menu>
              </vs-dropdown>
            </vx-tooltip>
          </div>
          <input
            class="w-full py-5 px-2 mb-2 input-border InputPlaceholder input-active"
            type="text"
            placeholder="Leg day-Saturday"
          />
          <h2 class="font-600 open-sans font-14 secondary-900 mb-2">
            Exercises (0)
          </h2>
          <v-select
            class="mb-3 workout-select"
            label="text"
            placeholder="Select Exercise"
            :options="excercise"
            :dir="$vs.rtl ? 'rtl' : 'ltr'"
            @input="changeExcercise"
          />
          <!-- plan 1 popup created -->
          <div id="plan1" v-if="show" class="workout-plan1 p-3">
            <vs-row class="">
              <div class="flex w-full justify-between items-center">
                <h2 class="open-sans font-600 font-16 secondary-900">
                  1 3/4 Squats
                </h2>
                <vs-dropdown
                  vs-custom-content
                  vs-trigger-click
                  class="cursor-pointer"
                >
                  <svg
                    width="6"
                    height="20"
                    viewBox="0 0 6 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2.99247 7.80488C4.18294 7.80488 5.13532 8.78049 5.13532 10C5.13532 11.2195 4.18294 12.1951 2.99247 12.1951C1.80199 12.1951 0.849609 11.2195 0.849609 10C0.849609 8.78049 1.80199 7.80488 2.99247 7.80488ZM0.849609 2.19512C0.849609 3.41463 1.80199 4.39024 2.99247 4.39024C4.18294 4.39024 5.13532 3.41463 5.13532 2.19512C5.13532 0.97561 4.18294 0 2.99247 0C1.80199 0 0.849609 0.97561 0.849609 2.19512ZM0.849609 17.8049C0.849609 19.0244 1.80199 20 2.99247 20C4.18294 20 5.13532 19.0244 5.13532 17.8049C5.13532 16.5854 4.18294 15.6098 2.99247 15.6098C1.80199 15.6098 0.849609 16.5854 0.849609 17.8049Z"
                      fill="#868FA0"
                    />
                  </svg>
                  <vs-dropdown-menu
                    class="w-40 vx-navbar-dropdown workout-dropdown"
                  >
                    <div
                      class="p-1"
                      @mouseover="showReplaceExcercise = true"
                      @mouseout="showReplaceExcercise = false"
                    >
                      <h3
                        class="open-sans font-600 font-12 mb-1"
                        style="color: #0054FF"
                      >
                        Replace Excercise
                      </h3>
                    </div>

                    <div
                      class="p-1"
                      @mouseover="showDeleteExcercise = true"
                      @mouseout="showDeleteExcercise = false"
                    >
                      <h3
                        class="open-sans font-600 font-12 mb-1"
                        style="color: #D81919"
                      >
                        Delete Excercise
                      </h3>
                    </div>
                  </vs-dropdown-menu>
                </vs-dropdown>
              </div>
            </vs-row>
            <vs-row class="mt-3">
              <vs-col
                class="gray-500 font-600 font-12 open-sans"
                vs-offset="0"
                v-tooltip="'col - 2'"
                vs-type="flex"
                vs-justify="center"
                vs-w="1"
              >
              </vs-col>
              <vs-col
                class="gray-500 font-600 font-12 open-sans"
                vs-offset="0"
                v-tooltip="'col - 3'"
                vs-type="flex"
                vs-justify="start"
                vs-w="3"
              >
                SET
              </vs-col>
              <vs-col
                class="gray-500 font-600 font-12 open-sans ml-2"
                vs-offset="0"
                v-tooltip="'col - 2'"
                vs-type="flex"
                vs-justify="start"
                vs-w="3"
              >
                WEIGHT
              </vs-col>
              <vs-col
                class="gray-500 font-600 font-12 open-sans ml-2"
                vs-offset="0"
                v-tooltip="'col - 2'"
                vs-type="flex"
                vs-justify="start"
                vs-w="2"
              >
                REPS
              </vs-col>
              <vs-col
                vs-offset="0"
                v-tooltip="'col - 2'"
                vs-type="flex"
                vs-justify="center"
                vs-w="2"
              >
              </vs-col>
            </vs-row>
            <vs-row class="workout-plan-body">
              <div class="mt-3">
                <vs-col
                  class="gray-500 font-600 font-14 open-sans"
                  vs-offset="0"
                  v-tooltip="'col - 1'"
                  vs-type="flex"
                  vs-justify="center"
                  vs-w="1"
                >
                  1
                </vs-col>
                <vs-col
                  vs-offset="0"
                  v-tooltip="'col - 3'"
                  vs-type="flex"
                  vs-justify="center"
                  vs-w="3"
                >
                  <v-select
                    class="mb-3 workout-select"
                    label="text"
                    placeholder="Select Exercise"
                    :options="excercise"
                    :dir="$vs.rtl ? 'rtl' : 'ltr'"
                    @input="changeExcercise"
                  />
                </vs-col>
                <vs-col
                  class="mx-2"
                  vs-offset="0"
                  v-tooltip="'col - 3'"
                  vs-type="flex"
                  vs-justify="center"
                  vs-w="3"
                >
                  <vx-input-group class="mb-base">
                    <vs-input
                      class="w-full"
                      placeholder="00"
                      v-model="input9"
                    />
                    <template slot="append">
                      <div
                        class="append-text"
                        style="background: #F7F8FA;border: 1px solid rgba(0, 0, 0, 0.2);border-left: none;"
                      >
                        <span class="open-sans font-12 gray-500 font-600"
                          >kg</span
                        >
                      </div>
                    </template>
                  </vx-input-group>
                </vs-col>

                <vs-col
                  vs-offset="0"
                  v-tooltip="'col - 3'"
                  vs-type="flex"
                  vs-justify="center"
                  vs-w="3"
                >
                  <!-- <vs-input class="w-full" placeholder="16" v-model="input9" /> -->
                  <input
                    class="w-full px-2 py-3 input-border InputPlaceholder input-active"
                    type="text"
                    placeholder="16"
                  />
                </vs-col>
                <vs-col
                  class="mt-4"
                  vs-offset="0"
                  v-tooltip="'col - 1'"
                  vs-type="flex"
                  vs-justify="center"
                  vs-align="center"
                  vs-w="1"
                >
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
                      fill="#EF8E8E"
                    />
                  </svg>
                </vs-col>
              </div>
              <vs-col
                class="gray-500 font-600 font-14 open-sans"
                vs-offset="0"
                v-tooltip="'col - 1'"
                vs-type="flex"
                vs-justify="center"
                vs-w="1"
              >
                2
              </vs-col>
              <vs-col
                vs-offset="0"
                v-tooltip="'col - 3'"
                vs-type="flex"
                vs-justify="center"
                vs-w="3"
              >
                <v-select
                  class="mb-3 workout-select"
                  label="text"
                  placeholder="Select Exercise"
                  :options="excercise"
                  :dir="$vs.rtl ? 'rtl' : 'ltr'"
                  @input="changeExcercise"
                />
              </vs-col>
              <vs-col
                class="mx-2"
                vs-offset="0"
                v-tooltip="'col - 3'"
                vs-type="flex"
                vs-justify="center"
                vs-w="3"
              >
                <vx-input-group class="mb-base">
                  <vs-input class="w-full" placeholder="00" v-model="input9" />
                  <template slot="append">
                    <div
                      class="append-text"
                      style="background: #F7F8FA;border: 1px solid rgba(0, 0, 0, 0.2);border-left: none;"
                    >
                      <span class="open-sans font-12 gray-500 font-600"
                        >kg</span
                      >
                    </div>
                  </template>
                </vx-input-group>
              </vs-col>

              <vs-col
                vs-offset="0"
                v-tooltip="'col - 3'"
                vs-type="flex"
                vs-justify="center"
                vs-w="3"
              >
                <!-- <vs-input class="w-full" placeholder="16" v-model="input9" /> -->
                <input
                  class="w-full px-2 py-3 input-border InputPlaceholder input-active"
                  type="text"
                  placeholder="16"
                />
              </vs-col>
              <vs-col
                class="mt-4"
                vs-offset="0"
                v-tooltip="'col - 1'"
                vs-type="flex"
                vs-justify="center"
                vs-w="1"
              >
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
                    fill="#EF8E8E"
                  />
                </svg>
              </vs-col>
              <vs-col
                vs-offset="0"
                v-tooltip="'col - 12'"
                vs-type="flex"
                vs-justify="start"
                vs-w="12"
              >
                <span class="blue-600 font-600 font-14 open-sans ml-12 mb-3"
                  >+New Set</span
                >
              </vs-col>
            </vs-row>
            <vs-row> </vs-row>
            <vs-row class="mt-3">
              <vs-col
                vs-offset="0"
                v-tooltip="'col - 1'"
                vs-type="flex"
                vs-justify="center"
                vs-w="1"
              >
                <svg
                  width="18"
                  height="20"
                  viewBox="0 0 18 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.04854 0V2.19757H11.9515V0H6.04854ZM9 3.02166C4.30555 3.02166 0.5 6.82236 0.5 11.5108C0.5 16.1993 4.30555 20 9 20C13.6944 20 17.5 16.1993 17.5 11.5108C17.5 9.50797 16.805 7.66941 15.6434 6.21764L16.9975 4.77021L15.4213 3.29635L14.0937 4.71738C12.6745 3.65545 10.9098 3.02166 9 3.02166ZM9 5.01849C12.5921 5.01849 15.5059 7.92329 15.5059 11.5108C15.5059 15.0984 12.5921 18.0085 9 18.0085C5.40789 18.0085 2.49409 15.0984 2.49409 11.5108C2.49409 7.92329 5.40789 5.01849 9 5.01849ZM10.0695 7.2828C10.066 6.72342 9.60436 6.27569 9.04513 6.28934L8.88151 6.29334C8.33647 6.30665 7.90254 6.75409 7.90595 7.29928L7.93048 11.2268C7.93397 11.7862 8.39564 12.2339 8.95487 12.2203L9.11848 12.2163C9.66352 12.203 10.0975 11.7555 10.0941 11.2103L10.0695 7.2828Z"
                    fill="#868FA0"
                  />
                </svg>
              </vs-col>
              <vs-col
                class="open-sans font-14 font-600 gray-500"
                vs-offset="0"
                v-tooltip="'col - 2'"
                vs-type="flex"
                vs-justify="start"
                vs-w="2"
              >
                Rest Timer:
              </vs-col>
              <vs-col
                vs-offset="0"
                v-tooltip="'col - 8'"
                vs-type="flex"
                vs-justify="start"
                vs-w="8"
              >
                <vs-dropdown
                  vs-custom-content
                  vs-trigger-click
                  class="cursor-pointer"
                >
                  <a
                    class="flex items-center open-sans font-14 font-600 black-500"
                    href="#"
                  >
                    30 secs
                    <i class="material-icons">expand_more</i>
                  </a>
                  <vs-dropdown-menu
                    class="vx-navbar-dropdown rest-timer-dropdown"
                  >
                    <ul style="min-width: 140px">
                      <li class="flex py-1 px-4 cursor-pointer">
                        <!-- <feather-icon icon="MailIcon" svgClasses="w-4 h-4" /> -->
                        <span class="ml-2 secondary-900 font-16 open-sans"
                          >10 seconds</span
                        >
                      </li>
                      <li class="flex py-1 px-4 cursor-pointer">
                        <!-- <feather-icon icon="MailIcon" svgClasses="w-4 h-4" /> -->
                        <span class="ml-2 secondary-900 font-16 open-sans"
                          >20 seconds</span
                        >
                      </li>
                      <li class="flex py-1  cursor-pointer blue-600">
                        <!-- <feather-icon icon="MailIcon" svgClasses="w-4 h-4" /> -->
                        <span class="ml-2 secondary-900 font-16 open-sans"
                          ><svg
                            width="12"
                            height="9"
                            viewBox="0 0 12 9"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M11.6445 0.328083C11.178 -0.0629489 10.337 -0.15344 9.88319 0.328083C8.06907 2.25316 6.25494 4.17823 4.44082 6.10331C3.66474 5.23913 2.88865 4.37494 2.11256 3.51076C1.69772 3.04883 0.775637 3.08864 0.351245 3.51076C-0.142189 4.00156 -0.0912832 4.62622 0.351245 5.11898C1.41382 6.30217 2.47639 7.48534 3.53895 8.66853C3.94438 9.11997 4.89283 9.10091 5.30028 8.66853C7.15215 6.7034 9.00401 4.73827 10.8559 2.77314C11.1188 2.49419 11.3816 2.21524 11.6445 1.93629C12.0691 1.48577 12.1655 0.764759 11.6445 0.328083Z"
                              fill="#367BFF"
                            />
                          </svg>
                          30 seconds</span
                        >
                      </li>
                      <li class="flex py-1 px-4 cursor-pointer">
                        <!-- <feather-icon icon="MailIcon" svgClasses="w-4 h-4" /> -->
                        <span class="ml-2 secondary-900 font-16 open-sans"
                          >40 seconds</span
                        >
                      </li>
                      <li class="flex py-1 px-4 cursor-pointer">
                        <!-- <feather-icon icon="MailIcon" svgClasses="w-4 h-4" /> -->
                        <span class="ml-2 secondary-900 font-16 open-sans"
                          >50 seconds</span
                        >
                      </li>
                    </ul>
                  </vs-dropdown-menu>
                </vs-dropdown>
              </vs-col>
            </vs-row>
          </div>
          <div id="plan3" v-if="show2" class="workout-plan3 mt-3 p-3">
            <div class="flex w-full justify-between items-center">
              <h2 class="open-sans font-600 font-16 secondary-900">
                Ab Rollout
              </h2>
              <vs-dropdown
                vs-custom-content
                vs-trigger-click
                class="cursor-pointer"
              >
                <svg
                  width="6"
                  height="20"
                  viewBox="0 0 6 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.99247 7.80488C4.18294 7.80488 5.13532 8.78049 5.13532 10C5.13532 11.2195 4.18294 12.1951 2.99247 12.1951C1.80199 12.1951 0.849609 11.2195 0.849609 10C0.849609 8.78049 1.80199 7.80488 2.99247 7.80488ZM0.849609 2.19512C0.849609 3.41463 1.80199 4.39024 2.99247 4.39024C4.18294 4.39024 5.13532 3.41463 5.13532 2.19512C5.13532 0.97561 4.18294 0 2.99247 0C1.80199 0 0.849609 0.97561 0.849609 2.19512ZM0.849609 17.8049C0.849609 19.0244 1.80199 20 2.99247 20C4.18294 20 5.13532 19.0244 5.13532 17.8049C5.13532 16.5854 4.18294 15.6098 2.99247 15.6098C1.80199 15.6098 0.849609 16.5854 0.849609 17.8049Z"
                    fill="#868FA0"
                  />
                </svg>
                <vs-dropdown-menu
                  class="w-40 vx-navbar-dropdown workout-dropdown"
                >
                  <div
                    class="p-1"
                    @mouseover="showReplaceExcercise = true"
                    @mouseout="showReplaceExcercise = false"
                  >
                    <h3
                      class="open-sans font-600 font-12 mb-1"
                      style="color: #0054FF"
                    >
                      Replace Excercise
                    </h3>
                  </div>

                  <div
                    class="p-1"
                    @mouseover="showDeleteExcercise = true"
                    @mouseout="showDeleteExcercise = false"
                  >
                    <h3
                      class="open-sans font-600 font-12 mb-1"
                      style="color: #D81919"
                    >
                      Delete Excercise
                    </h3>
                  </div>
                </vs-dropdown-menu>
              </vs-dropdown>
            </div>
            <vs-row class="mt-3">
              <vs-col
                vs-offset="0"
                v-tooltip="'col - 2'"
                vs-type="flex"
                vs-justify="center"
                vs-w="1"
              >
              </vs-col>
              <vs-col
                class="gray-500 font-600 font-12 open-sans"
                vs-offset="0"
                v-tooltip="'col - 3'"
                vs-type="flex"
                vs-justify="start"
                vs-w="3"
              >
                SET
              </vs-col>
              <vs-col
                class="gray-500 font-600 font-12 open-sans ml-2"
                vs-offset="0"
                v-tooltip="'col - 2'"
                vs-type="flex"
                vs-justify="start"
                vs-w="3"
              >
                WEIGHT
              </vs-col>

              <vs-col
                class="gray-500 font-600 font-12 open-sans ml-2"
                vs-offset="0"
                v-tooltip="'col - 2'"
                vs-type="flex"
                vs-justify="start"
                vs-w="2"
              >
                REPS
              </vs-col>
              <vs-col
                vs-offset="0"
                v-tooltip="'col - 2'"
                vs-type="flex"
                vs-justify="center"
                vs-w="2"
              >
              </vs-col>
            </vs-row>
            <vs-row class="workoutplan3-body">
              <div class="mt-3">
                <vs-col
                  class="gray-500 font-600 font-14 open-sans"
                  vs-offset="0"
                  v-tooltip="'col - 1'"
                  vs-type="flex"
                  vs-justify="center"
                  vs-w="1"
                >
                  1
                </vs-col>
                <vs-col
                  vs-offset="0"
                  v-tooltip="'col - 3'"
                  vs-type="flex"
                  vs-justify="center"
                  vs-w="3"
                >
                  <!-- <vs-select v-model="set" class="w-full select-large">
                    <vs-select-item
                      :key="index"
                      :value="item.value"
                      :text="item.text"
                      v-for="(item, index) in setOptions"
                      class="w-full"
                    />
                  </vs-select> -->
                  <v-select
                    class="mb-3 workout-select"
                    label="text"
                    placeholder="Select Exercise"
                    :options="excercise"
                    :dir="$vs.rtl ? 'rtl' : 'ltr'"
                    @input="changeExcercise"
                  />
                </vs-col>
                <vs-col
                  class="mx-2"
                  vs-offset="0"
                  v-tooltip="'col - 3'"
                  vs-type="flex"
                  vs-justify="center"
                  vs-w="3"
                >
                  <vx-input-group class="mb-base">
                    <vs-input
                      class="w-full"
                      placeholder="00"
                      v-model="input9"
                    />
                    <template slot="append">
                      <div
                        class="append-text"
                        style="background: #F7F8FA;border: 1px solid rgba(0, 0, 0, 0.2);border-left: none;"
                      >
                        <span class="open-sans font-12 gray-500 font-600"
                          >kg</span
                        >
                      </div>
                    </template>
                  </vx-input-group>
                </vs-col>

                <vs-col
                  vs-offset="0"
                  v-tooltip="'col - 3'"
                  vs-type="flex"
                  vs-justify="center"
                  vs-w="3"
                >
                  <!-- <vs-input class="w-full" placeholder="16" v-model="input9" /> -->
                  <input
                    class="w-full px-2 py-3 input-border InputPlaceholder input-active"
                    type="text"
                    placeholder="16"
                  />
                </vs-col>
                <vs-col
                  class="mt-4"
                  vs-offset="0"
                  v-tooltip="'col - 1'"
                  vs-type="flex"
                  vs-justify="center"
                  vs-align="center"
                  vs-w="1"
                >
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
                      fill="#EF8E8E"
                    />
                  </svg>
                </vs-col>
              </div>
              <vs-col
                class="gray-500 font-600 font-14 open-sans"
                vs-offset="0"
                v-tooltip="'col - 1'"
                vs-type="flex"
                vs-justify="center"
                vs-w="1"
              >
                2
              </vs-col>
              <vs-col
                vs-offset="0"
                v-tooltip="'col - 3'"
                vs-type="flex"
                vs-justify="center"
                vs-w="3"
              >
                <!-- <vs-select v-model="set" class="w-full select-large">
                  <vs-select-item
                    :key="index"
                    :value="item.value"
                    :text="item.text"
                    v-for="(item, index) in setOptions"
                    class="w-full"
                  /> -->
                <v-select
                  class="mb-3 workout-select"
                  label="text"
                  placeholder="Select Exercise"
                  :options="excercise"
                  :dir="$vs.rtl ? 'rtl' : 'ltr'"
                  @input="changeExcercise"
                />
                <!-- </vs-select>  -->
              </vs-col>
              <vs-col
                class="mx-2"
                vs-offset="0"
                v-tooltip="'col - 3'"
                vs-type="flex"
                vs-justify="center"
                vs-w="3"
              >
                <vx-input-group class="mb-base">
                  <vs-input class="w-full" placeholder="00" v-model="input9" />
                  <template slot="append">
                    <div
                      class="append-text"
                      style="background: #F7F8FA;border: 1px solid rgba(0, 0, 0, 0.2);border-left: none;"
                    >
                      <span class="open-sans font-12 gray-500 font-600"
                        >kg</span
                      >
                    </div>
                  </template>
                </vx-input-group>
              </vs-col>

              <vs-col
                vs-offset="0"
                v-tooltip="'col - 3'"
                vs-type="flex"
                vs-justify="center"
                vs-w="3"
              >
                <!-- <vs-input class="w-full" placeholder="16" v-model="input9" /> -->
                <input
                  class="w-full px-2 py-3 input-border InputPlaceholder input-active"
                  type="text"
                  placeholder="16"
                />
              </vs-col>
              <vs-col
                class="mt-4"
                vs-offset="0"
                v-tooltip="'col - 1'"
                vs-type="flex"
                vs-justify="center"
                vs-w="1"
              >
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
                    fill="#EF8E8E"
                  />
                </svg>
              </vs-col>
              <vs-col
                vs-offset="0"
                v-tooltip="'col - 12'"
                vs-type="flex"
                vs-justify="start"
                vs-w="12"
              >
                <span class="blue-600 font-600 font-14 open-sans ml-12 mb-3"
                  >+New Set</span
                >
              </vs-col>
            </vs-row>

            <vs-row class="mt-3">
              <vs-col
                vs-offset="0"
                v-tooltip="'col - 1'"
                vs-type="flex"
                vs-justify="center"
                vs-w="1"
              >
                <svg
                  width="18"
                  height="20"
                  viewBox="0 0 18 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.04854 0V2.19757H11.9515V0H6.04854ZM9 3.02166C4.30555 3.02166 0.5 6.82236 0.5 11.5108C0.5 16.1993 4.30555 20 9 20C13.6944 20 17.5 16.1993 17.5 11.5108C17.5 9.50797 16.805 7.66941 15.6434 6.21764L16.9975 4.77021L15.4213 3.29635L14.0937 4.71738C12.6745 3.65545 10.9098 3.02166 9 3.02166ZM9 5.01849C12.5921 5.01849 15.5059 7.92329 15.5059 11.5108C15.5059 15.0984 12.5921 18.0085 9 18.0085C5.40789 18.0085 2.49409 15.0984 2.49409 11.5108C2.49409 7.92329 5.40789 5.01849 9 5.01849ZM10.0695 7.2828C10.066 6.72342 9.60436 6.27569 9.04513 6.28934L8.88151 6.29334C8.33647 6.30665 7.90254 6.75409 7.90595 7.29928L7.93048 11.2268C7.93397 11.7862 8.39564 12.2339 8.95487 12.2203L9.11848 12.2163C9.66352 12.203 10.0975 11.7555 10.0941 11.2103L10.0695 7.2828Z"
                    fill="#868FA0"
                  />
                </svg>
              </vs-col>
              <vs-col
                class="open-sans font-14 font-600 gray-500"
                vs-offset="0"
                v-tooltip="'col - 2'"
                vs-type="flex"
                vs-justify="start"
                vs-w="2"
              >
                Rest Timer:
              </vs-col>
              <vs-col
                vs-offset="0"
                v-tooltip="'col - 8'"
                vs-type="flex"
                vs-justify="start"
                vs-w="8"
              >
                <vs-dropdown
                  vs-custom-content
                  vs-trigger-click
                  class="cursor-pointer"
                >
                  <a
                    class="flex items-center open-sans font-14 font-600 black-500"
                    href="#"
                  >
                    30 secs
                    <i class="material-icons">expand_more</i>
                  </a>
                  <vs-dropdown-menu
                    class="vx-navbar-dropdown rest-timer-dropdown"
                  >
                    <ul style="min-width: 140px">
                      <li class="flex py-1 px-4 cursor-pointer">
                        <!-- <feather-icon icon="MailIcon" svgClasses="w-4 h-4" /> -->
                        <span class="ml-2 secondary-900 font-16 open-sans"
                          >10 seconds</span
                        >
                      </li>
                      <li class="flex py-1 px-4 cursor-pointer">
                        <!-- <feather-icon icon="MailIcon" svgClasses="w-4 h-4" /> -->
                        <span class="ml-2 secondary-900 font-16 open-sans"
                          >20 seconds</span
                        >
                      </li>
                      <li class="flex py-1  cursor-pointer blue-600">
                        <!-- <feather-icon icon="MailIcon" svgClasses="w-4 h-4" /> -->
                        <span class="ml-2 secondary-900 font-16 open-sans"
                          ><svg
                            width="12"
                            height="9"
                            viewBox="0 0 12 9"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M11.6445 0.328083C11.178 -0.0629489 10.337 -0.15344 9.88319 0.328083C8.06907 2.25316 6.25494 4.17823 4.44082 6.10331C3.66474 5.23913 2.88865 4.37494 2.11256 3.51076C1.69772 3.04883 0.775637 3.08864 0.351245 3.51076C-0.142189 4.00156 -0.0912832 4.62622 0.351245 5.11898C1.41382 6.30217 2.47639 7.48534 3.53895 8.66853C3.94438 9.11997 4.89283 9.10091 5.30028 8.66853C7.15215 6.7034 9.00401 4.73827 10.8559 2.77314C11.1188 2.49419 11.3816 2.21524 11.6445 1.93629C12.0691 1.48577 12.1655 0.764759 11.6445 0.328083Z"
                              fill="#367BFF"
                            />
                          </svg>
                          30 seconds</span
                        >
                      </li>
                      <li class="flex py-1 px-4 cursor-pointer">
                        <!-- <feather-icon icon="MailIcon" svgClasses="w-4 h-4" /> -->
                        <span class="ml-2 secondary-900 font-16 open-sans"
                          >40 seconds</span
                        >
                      </li>
                      <li class="flex py-1 px-4 cursor-pointer">
                        <!-- <feather-icon icon="MailIcon" svgClasses="w-4 h-4" /> -->
                        <span class="ml-2 secondary-900 font-16 open-sans"
                          >50 seconds</span
                        >
                      </li>
                    </ul>
                  </vs-dropdown-menu>
                </vs-dropdown>
              </vs-col>
            </vs-row>
          </div>
          <div v-if="newExcercise">
            <h3
              class="pt-3 open-sans font-14 font-600 blue-600 cursor-pointer"
              @click="show1 = !show1"
            >
              + New Excercise
            </h3>
          </div>
          <!-- plan2 -->
          <div id="plan2" v-if="show1" class="workout-plan2 mt-3">
            <v-select
              label="text"
              :options="excerciseOptions"
              :dir="$vs.rtl ? 'rtl' : 'ltr'"
              @input="changeSelect"
            />
          </div>
          <!-- plan3 -->
        </div>
      </div>
      <template #footer>
        <div class="flex  justify-end">
          <div class="footer  my-4">
            <vs-button
              class="btn1 py-2 px-4 mr-5 open-sans text-black font-700"
              type="border"
              @click="plan = false"
              >Cancel</vs-button
            >

            <vs-button
              class="btn2 py-2 px-4 open-sans font-700"
              color="primary"
              type="filled"
              @click="
                addPlan = true;
                plan = false;
              "
              >Add Workout</vs-button
            >
          </div>
        </div>
      </template>
    </mcp-dialog>

    <mcp-dialog :active.sync="plan1" :buttonCloseHidden="true">
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
                d="M0.48314 22.5842L9.41579 31.5169C10.0551 32.1562 11.0926 32.1611 11.7379 31.5311L0.468917 20.2621C-0.161129 20.9078 -0.156151 21.9449 0.48314 22.5842Z"
                fill="#868FA0"
              />
              <path
                d="M20.0384 9.20527L9.20477 20.0389L11.9608 22.795L22.7944 11.9613L20.0384 9.20527Z"
                fill="#868FA0"
              />
              <path
                d="M1.17932 16.4043L1.09185 16.4918C0.259495 17.3241 0.259495 18.6784 1.09185 19.5108L1.3795 19.7984H1.37701L12.2012 30.6226V30.6205L12.4889 30.9081C13.3212 31.7405 14.6752 31.7405 15.5079 30.9078L15.5954 30.8203C16.4277 29.988 16.4277 28.6337 15.5957 27.8013L4.19871 16.4043C3.36599 15.5719 2.01203 15.5719 1.17932 16.4043Z"
                fill="#868FA0"
              />
              <path
                d="M16.4917 1.09189L16.4043 1.17935C15.5719 2.01171 15.5719 3.36603 16.4043 4.19838L27.8016 15.5957C28.634 16.4281 29.9879 16.4281 30.8206 15.5954L30.9081 15.5079C31.7405 14.6756 31.7405 13.3213 30.9085 12.4889L19.5111 1.09189C18.6784 0.259529 17.3244 0.259529 16.4917 1.09189Z"
                fill="#868FA0"
              />
              <path
                d="M20.2592 0.471796L31.53 11.739C32.1611 11.0937 32.1568 10.0555 31.5168 9.41582L22.5842 0.483174C21.9438 -0.157183 20.9042 -0.161094 20.2592 0.471796Z"
                fill="#868FA0"
              />
              <path
                d="M2.9155 29.0845C3.50608 29.6751 4.35017 29.9158 5.17364 29.7288L5.85844 29.5727L2.42732 26.1416L2.27123 26.8264C2.08386 27.6498 2.32492 28.4939 2.9155 29.0845Z"
                fill="#868FA0"
              />
              <path
                d="M26.8263 2.27127L26.1415 2.42736L29.5726 5.85848L29.7287 5.17368C29.9161 4.35021 29.675 3.50612 29.0845 2.91554C28.4939 2.32496 27.6498 2.08389 26.8263 2.27127Z"
                fill="#868FA0"
              />
            </svg>
          </div>
          <div class="title">
            <h2 class="open-sans font-20 font-600 secondary-900">
              New Workout
            </h2>
            <h5 class="open-sans font-14 gray-500">
              For clients to achieve their goals.
            </h5>
          </div>
        </div>
      </template>
      <div class="content">
        <div>
          <span>+ Existing Plan</span>
          <vs-input
            class="w-full"
            label="Workout Name"
            placeholder="Leg day-Saturday"
            v-model="input9"
          />
          <vs-row>
            <vs-col
              vs-offset="0"
              v-tooltip="'col - 2'"
              vs-type="flex"
              vs-justify="center"
              vs-w="2"
            >
              1 3/4 Squats
            </vs-col>
            <vs-col
              vs-offset="0"
              v-tooltip="'col - 8'"
              vs-type="flex"
              vs-justify="center"
              vs-w="8"
            >
            </vs-col>
            <vs-col
              vs-offset="0"
              v-tooltip="'col - 2'"
              vs-type="flex"
              vs-justify="center"
              vs-w="2"
            >
              <svg
                width="4"
                height="16"
                viewBox="0 0 4 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.99456 6.2439C2.94694 6.2439 3.70884 7.02439 3.70884 8C3.70884 8.97561 2.94694 9.7561 1.99456 9.7561C1.04218 9.7561 0.280273 8.97561 0.280273 8C0.280273 7.02439 1.04218 6.2439 1.99456 6.2439ZM0.280273 1.7561C0.280273 2.73171 1.04218 3.5122 1.99456 3.5122C2.94694 3.5122 3.70884 2.73171 3.70884 1.7561C3.70884 0.780488 2.94694 0 1.99456 0C1.04218 0 0.280273 0.780488 0.280273 1.7561ZM0.280273 14.2439C0.280273 15.2195 1.04218 16 1.99456 16C2.94694 16 3.70884 15.2195 3.70884 14.2439C3.70884 13.2683 2.94694 12.4878 1.99456 12.4878C1.04218 12.4878 0.280273 13.2683 0.280273 14.2439Z"
                  fill="#868FA0"
                />
              </svg>
            </vs-col>
          </vs-row>
          <vs-row>
            <vs-col
              vs-offset="0"
              v-tooltip="'col - 2'"
              vs-type="flex"
              vs-justify="center"
              vs-w="2"
            >
            </vs-col>
            <vs-col
              vs-offset="0"
              v-tooltip="'col - 2'"
              vs-type="flex"
              vs-justify="center"
              vs-w="2"
            >
              SET
            </vs-col>
            <vs-col
              vs-offset="0"
              v-tooltip="'col - 2'"
              vs-type="flex"
              vs-justify="center"
              vs-w="2"
            >
              WEIGHT
            </vs-col>
            <vs-col
              vs-offset="0"
              v-tooltip="'col - 2'"
              vs-type="flex"
              vs-justify="center"
              vs-w="2"
            >
            </vs-col>
            <vs-col
              vs-offset="0"
              v-tooltip="'col - 2'"
              vs-type="flex"
              vs-justify="center"
              vs-w="2"
            >
              REPS
            </vs-col>
            <vs-col
              vs-offset="0"
              v-tooltip="'col - 2'"
              vs-type="flex"
              vs-justify="center"
              vs-w="2"
            >
            </vs-col>
          </vs-row>
          <vs-row>
            <vs-col
              vs-offset="0"
              v-tooltip="'col - 2'"
              vs-type="flex"
              vs-justify="center"
              vs-w="2"
            >
              1
            </vs-col>
            <vs-col
              vs-offset="0"
              v-tooltip="'col - 2'"
              vs-type="flex"
              vs-justify="center"
              vs-w="2"
            >
              <vs-select v-model="set" class="w-full select-large">
                <vs-select-item
                  :key="index"
                  :value="item.value"
                  :text="item.text"
                  v-for="(item, index) in setOptions"
                  class="w-full"
                />
              </vs-select>
            </vs-col>
            <vs-col
              vs-offset="0"
              v-tooltip="'col - 2'"
              vs-type="flex"
              vs-justify="center"
              vs-w="2"
            >
              <vs-input class="w-full" placeholder="00" v-model="input9" />
            </vs-col>
            <vs-col
              vs-offset="0"
              v-tooltip="'col - 2'"
              vs-type="flex"
              vs-justify="center"
              vs-w="2"
            >
              Kg
            </vs-col>
            <vs-col
              vs-offset="0"
              v-tooltip="'col - 2'"
              vs-type="flex"
              vs-justify="center"
              vs-w="2"
            >
              <vs-input class="w-full" placeholder="16" v-model="input9" />
            </vs-col>
            <vs-col
              vs-offset="0"
              v-tooltip="'col - 2'"
              vs-type="flex"
              vs-justify="center"
              vs-w="2"
            >
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
                  fill="#EF8E8E"
                />
              </svg>
            </vs-col>
          </vs-row>
          <vs-row>
            <vs-col
              vs-offset="0"
              v-tooltip="'col - 2'"
              vs-type="flex"
              vs-justify="center"
              vs-w="2"
            >
              1
            </vs-col>
            <vs-col
              vs-offset="0"
              v-tooltip="'col - 2'"
              vs-type="flex"
              vs-justify="center"
              vs-w="2"
            >
              <vs-select v-model="set" class="w-full select-large">
                <vs-select-item
                  :key="index"
                  :value="item.value"
                  :text="item.text"
                  v-for="(item, index) in setOptions"
                  class="w-full"
                />
              </vs-select>
            </vs-col>
            <vs-col
              vs-offset="0"
              v-tooltip="'col - 2'"
              vs-type="flex"
              vs-justify="center"
              vs-w="2"
            >
              <vs-input class="w-full" placeholder="00" v-model="input9" />
            </vs-col>
            <vs-col
              vs-offset="0"
              v-tooltip="'col - 2'"
              vs-type="flex"
              vs-justify="center"
              vs-w="2"
            >
              Kg
            </vs-col>
            <vs-col
              vs-offset="0"
              v-tooltip="'col - 2'"
              vs-type="flex"
              vs-justify="center"
              vs-w="2"
            >
              <vs-input class="w-full" placeholder="16" v-model="input9" />
            </vs-col>
            <vs-col
              vs-offset="0"
              v-tooltip="'col - 2'"
              vs-type="flex"
              vs-justify="center"
              vs-w="2"
            >
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
                  fill="#EF8E8E"
                />
              </svg>
            </vs-col>
          </vs-row>
          <vs-row>
            <vs-col
              vs-offset="0"
              v-tooltip="'col - 12'"
              vs-type="flex"
              vs-justify="center"
              vs-w="12"
            >
              <span>+New Set</span>
            </vs-col>
          </vs-row>
          <vs-row>
            <vs-col
              vs-offset="0"
              v-tooltip="'col - 2'"
              vs-type="flex"
              vs-justify="center"
              vs-w="2"
            >
              <svg
                width="18"
                height="20"
                viewBox="0 0 18 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.04854 0V2.19757H11.9515V0H6.04854ZM9 3.02166C4.30555 3.02166 0.5 6.82236 0.5 11.5108C0.5 16.1993 4.30555 20 9 20C13.6944 20 17.5 16.1993 17.5 11.5108C17.5 9.50797 16.805 7.66941 15.6434 6.21764L16.9975 4.77021L15.4213 3.29635L14.0937 4.71738C12.6745 3.65545 10.9098 3.02166 9 3.02166ZM9 5.01849C12.5921 5.01849 15.5059 7.92329 15.5059 11.5108C15.5059 15.0984 12.5921 18.0085 9 18.0085C5.40789 18.0085 2.49409 15.0984 2.49409 11.5108C2.49409 7.92329 5.40789 5.01849 9 5.01849ZM10.0695 7.2828C10.066 6.72342 9.60436 6.27569 9.04513 6.28934L8.88151 6.29334C8.33647 6.30665 7.90254 6.75409 7.90595 7.29928L7.93048 11.2268C7.93397 11.7862 8.39564 12.2339 8.95487 12.2203L9.11848 12.2163C9.66352 12.203 10.0975 11.7555 10.0941 11.2103L10.0695 7.2828Z"
                  fill="#868FA0"
                />
              </svg>
            </vs-col>
            <vs-col
              vs-offset="0"
              v-tooltip="'col - 2'"
              vs-type="flex"
              vs-justify="center"
              vs-w="2"
            >
              Real Time :
            </vs-col>
            <vs-col
              vs-offset="0"
              v-tooltip="'col - 8'"
              vs-type="flex"
              vs-justify="center"
              vs-w="8"
            >
              <vs-select v-model="second" class="w-full select-large">
                <vs-select-item
                  :key="index"
                  :value="item.value"
                  :text="item.text"
                  v-for="(item, index) in secondOptions"
                  class="w-full"
                />
              </vs-select>
            </vs-col>
          </vs-row>
          <span>+ New Excercise</span>
        </div>
      </div>
      <template #footer>
        <div class="flex  justify-end">
          <div class="footer  my-4">
            <vs-button
              class="btn1 py-2 px-4 mr-5 open-sans text-black font-700"
              type="border"
              >Cancel</vs-button
            >

            <vs-button
              class="btn2 py-2 px-4 open-sans  font-700"
              color="primary"
              type="filled"
              >Add Workout</vs-button
            >
          </div>
        </div>
      </template>
    </mcp-dialog>

    <mcp-dialog
      :active.sync="shoppingList"
      :buttonCloseHidden="true"
      class="shopping-width"
    >
      <template #header>
        <div class="flex items-center justify-between">
          <svg
            width="32"
            height="30"
            viewBox="0 0 32 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.12479 0.60074C-0.210731 0.559433 -0.434671 2.52402 0.874804 2.79371L3.2873 3.33027C4.56344 9.52897 5.95452 15.7024 7.30345 21.8855C7.41436 22.3925 7.85728 22.7533 8.36873 22.7531H27.5259C29.0019 22.7753 29.0019 20.5157 27.5259 20.5377H9.24438L8.76145 18.323H28.4925C29.0039 18.3232 29.4468 17.9625 29.5578 17.4555L31.9738 6.37997C32.1244 5.68866 31.6065 5.0333 30.9092 5.03288C22.5626 5.03308 14.216 5.03271 5.86959 5.02871L5.27659 2.17197C5.18822 1.74561 4.86192 1.4115 4.44284 1.31813L1.34076 0.628677C1.26984 0.612071 1.19758 0.602469 1.12486 0.600655L1.12479 0.60074ZM12.9096 23.4924C11.3159 23.4924 10.0007 24.828 10.0007 26.4463C10.0007 28.0645 11.3159 29.4001 12.9096 29.4001C14.5032 29.4001 15.8185 28.0645 15.8185 26.4463C15.8185 24.828 14.5032 23.4924 12.9096 23.4924ZM23.0907 23.4924C21.4971 23.4924 20.1818 24.828 20.1818 26.4463C20.1818 28.0645 21.4971 29.4001 23.0907 29.4001C24.6844 29.4001 25.9997 28.0645 25.9997 26.4463C25.9997 24.828 24.6844 23.4924 23.0907 23.4924Z"
              fill="#868FA0"
            />
          </svg>
          <div class="title">
            <h2 class="font-20 open-sans font-600 secondary-900">
              Add Shopping List
            </h2>
            <h5 class="open-sans gray-500 font-14">
              Help client picking up the right items/supplements.
            </h5>
          </div>
        </div>
      </template>
      <div class="content">
        <div>
          <h1 class="open-sans font-600 secondary-900 font-14 mb-2">
            List Name
          </h1>
          <!-- <vs-input class="w-full" placeholder="Clothing" v-model="input9" /> -->
          <input
            class="w-full px-2 py-5 input-border InputPlaceholder input-active"
            type="text"
            placeholder="Clothing"
          />
          <vs-row class="mt-8">
            <vs-col
              vs-offset="0"
              v-tooltip="'col - 8'"
              vs-type="flex"
              vs-justify="start"
              vs-w="8"
            >
              <h1 class="open-sans font-600 secondary-900 font-14 mb-2">
                Items (2)
              </h1>
            </vs-col>
            <vs-col
              vs-offset="0"
              v-tooltip="'col - 8'"
              vs-type="flex"
              vs-justify="center"
              vs-w="8"
            >
              <input
                class="w-full px-2 py-3 input-border InputPlaceholder input-active"
                placeholder="Item Name"
              />
            </vs-col>
            <vs-col
              class="ml-2"
              vs-offset="0"
              v-tooltip="'col - 2'"
              vs-type="flex"
              vs-justify="center"
              vs-w="2"
            >
              <input
                class="w-full px-2 py-3 input-border InputPlaceholder input-active"
                type="text"
                placeholder="Qty"
              />
            </vs-col>
            <vs-col
              class="mt-4"
              vs-offset="0"
              v-tooltip="'col - 1'"
              vs-type="flex"
              vs-justify="center"
              vs-w="1"
            >
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
                  fill="#EF8E8E"
                />
              </svg>
            </vs-col>
            <vs-col
              class="mt-3"
              vs-offset="0"
              v-tooltip="'col - 8'"
              vs-type="flex"
              vs-justify="center"
              vs-w="8"
            >
              <!-- <vs-input
                class="w-full"
                placeholder="Item Name"
                v-model="input9"
              /> -->
              <input
                class="w-full px-2 py-3 input-border InputPlaceholder input-active"
                type="text"
                placeholder="Item Name"
              />
            </vs-col>
            <vs-col
              class="mt-3 ml-2"
              vs-offset="0"
              v-tooltip="'col - 2'"
              vs-type="flex"
              vs-justify="center"
              vs-w="2"
            >
              <!-- <vs-input class="w-full" placeholder="Qty" v-model="input9" /> -->
              <input
                class="w-full px-2 py-3 input-border InputPlaceholder input-active"
                type="text"
                placeholder="Qty"
              />
            </vs-col>
            <vs-col
              class="mt-6"
              vs-offset="0"
              v-tooltip="'col - 1'"
              vs-type="flex"
              vs-justify="center"
              vs-w="1"
            >
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
                  fill="#EF8E8E"
                />
              </svg>
            </vs-col>

            <vs-col
              class="mt-3"
              vs-offset="0"
              v-tooltip="'col - 8'"
              vs-type="flex"
              vs-justify="center"
              vs-w="8"
            >
              <!-- <vs-input
                class="w-full"
                placeholder="Item Name"
                v-model="input9"
              /> -->
              <input
                class="w-full px-2 py-3 input-border InputPlaceholder input-active"
                type="text"
                placeholder="Item Name"
              />
            </vs-col>
            <vs-col
              class="mt-3 ml-2"
              vs-offset="0"
              v-tooltip="'col - 2'"
              vs-type="flex"
              vs-justify="center"
              vs-w="2"
            >
              <!-- <vs-input class="w-full" placeholder="Qty" v-model="input9" /> -->
              <input
                class="w-full px-2 py-3 input-border InputPlaceholder input-active"
                type="text"
                placeholder="Qty"
              />
            </vs-col>
            <vs-col
              class="mt-6"
              vs-offset="0"
              v-tooltip="'col - 1'"
              vs-type="flex"
              vs-justify="center"
              vs-w="1"
            >
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
                  fill="#EF8E8E"
                />
              </svg>
            </vs-col>
          </vs-row>
          <div class="mt-4">
            <span
              class="open-sans font-600 blue-600 font-14 cursor-pointer"
              @click="
                plan = true;
                shoppingList = false;
              "
              >+ New Item</span
            >
          </div>
        </div>
      </div>
      <template #footer>
        <div class="flex  justify-end">
          <div class="footer  my-4">
            <vs-button
              class="btn1 py-2 px-4 mr-5 open-sans text-black font-700"
              type="border"
              @click="shoppingList = false"
              >Cancel</vs-button
            >

            <vs-button
              class="btn2 py-2 px-4 open-sans font-700"
              color="primary"
              type="filled"
              @click="
                addShoppingList = true;
                shoppingList = false;
              "
              >Add List</vs-button
            >
          </div>
        </div>
      </template>
    </mcp-dialog>
    <mcp-dialog
      :active.sync="inspireClient"
      :buttonCloseHidden="true"
      class="Inspire-Client-width"
    >
      <template #header>
        <div class="flex items-center justify-between">
          <div>
            <svg
              width="40"
              height="36"
              viewBox="0 0 40 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 18V36H16V18H8C8 13.5813 11.5813 8 16 8V0C7.16356 0 0 7.16356 0 18Z"
                fill="#868FA0"
              />
              <path
                d="M24 18V36H40V18H32C32 13.5813 35.5813 8 40 8V0C31.1636 0 24 7.16356 24 18Z"
                fill="#868FA0"
              />
            </svg>
          </div>
          <div class="title">
            <h2 class="font-20 open-sans font-600 secondary-900">
              Inspire Client
            </h2>
            <h5 class="open-sans gray-500 font-14">
              This will be shown on client's daily tracker for a day.
            </h5>
          </div>
        </div>
      </template>
      <div class="content">
        <div>
          <vs-textarea
            class="textarea-box border-none-text-area"
            height="150px"
            placeholder="Write something to cheer Carla up"
            v-model="textarea"
          />
        </div>
      </div>
      <template #footer>
        <div class="flex  justify-end">
          <div class="footer  my-4">
            <vs-button
              class="btn1 py-2 px-4 mr-5 open-sans text-black font-700"
              type="border"
              @click="inspireClient = false"
              >Cancel</vs-button
            >

            <vs-button
              class="btn2 py-2 px-4 open-sans font-700"
              color="primary"
              type="filled"
              @click="
                addInspireClient = true;
                inspireClient = false;
              "
              >Send</vs-button
            >
          </div>
        </div>
      </template>
    </mcp-dialog>
    <mcp-dialog
      :active.sync="quickMessage"
      :buttonCloseHidden="true"
      class="quick-msg-width"
    >
      <template #header>
        <div class="flex items-center justify-between">
          <div>
            <svg
              width="40"
              height="36"
              viewBox="0 0 40 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 18V36H16V18H8C8 13.5813 11.5813 8 16 8V0C7.16356 0 0 7.16356 0 18Z"
                fill="#868FA0"
              />
              <path
                d="M24 18V36H40V18H32C32 13.5813 35.5813 8 40 8V0C31.1636 0 24 7.16356 24 18Z"
                fill="#868FA0"
              />
            </svg>
          </div>
          <div class="title">
            <h2 class="font-20 open-sans font-600 secondary-900">
              Quick Message
            </h2>
            <h5 class="open-sans gray-500 font-14">
              Send a quick message without leaving current page.
            </h5>
          </div>
        </div>
      </template>
      <div class="content">
        <div>
          <vs-textarea
            class="textarea-box border-none-text-area"
            height="150px"
            placeholder="Message Carla"
            v-model="textarea"
          />
        </div>
      </div>
      <template #footer>
        <div class="flex  justify-end">
          <div class="footer  my-4">
            <vs-button
              class="btn1 py-2 px-4 mr-5 open-sans text-black font-700"
              type="border"
              @click="inspireClient = false"
              >Cancel</vs-button
            >

            <vs-button
              class="btn2 py-2 px-4 open-sans font-700"
              color="primary"
              type="filled"
              @click="
                addInspireClient = true;
                inspireClient = false;
              "
              >Send</vs-button
            >
          </div>
        </div>
      </template>
    </mcp-dialog>
  </div>
</template>
<script>
import McpDialog from "../../components/vx-dialogs/VxDialogs";
import vSelect from "vue-select";
// import closable from '../../directives/OutsideClose.js';
// import Datepicker from 'vuejs-datepicker'
import VuePerfectScrollbar from "vue-perfect-scrollbar";
import Calendar from "v-calendar/lib/components/calendar.umd";
import DatePicker from "v-calendar/lib/components/date-picker.umd";
export default {
  components: {
    McpDialog,
    "v-select": vSelect,
    "v-date-picker": DatePicker,
    VuePerfectScrollbar,
    "v-calendar": Calendar,
    DatePicker
  },
  data() {
    return {
      selectedDate: null,
      issue: false,
      notes: false,
      plan: false,
      plan1: false,
      shoppingList: false,
      addIssue: false,
      addNotes: false,
      addPlan: false,
      addShoppingList: false,
      inspireClient: false,
      quickMessage: false,
      show: false,
      show1: false,
      show2: false,
      showExistingPlan: false,
      showByCopyEmail: false,
      showByCopyPhone: false,
      showReplaceExcercise: false,
      showDeleteExcercise: false,
      deleteNotes: null,
      deleteissue: null,
      compareBox: false,
      previewImg: true,
      viewImg: true,
      uploadImg: false,
      newExcercise: false,
      showCalendar: false,
      setOptions: [
        { text: "Regular", value: "regular" },
        { text: "Warm up", value: "warmup" },
        { text: "Drop Set", value: "drop-set" },
        { text: "Failure", value: "failure" }
      ],
      secondOptions: [
        { text: "10 seconds", value: "10Seconds" },
        { text: "20 seconds", value: "20Seconds" },
        { text: "30 seconds", value: "30Seconds" },
        { text: "40 seconds", value: "40Seconds" },
        { text: "50 seconds", value: "50Seconds" },
        { text: "60 seconds", value: "60Seconds" }
      ],
      excerciseOptions: [
        { text: "1 3/4 Squats", value: "squats" },
        { text: "Ab Rollout", value: "abRollout" },
        { text: "Ab Rollout Staand", value: "abRolloutStaand" },
        { text: "Abs Rope Pulldown", value: "absRopePulldown" },
        { text: "Air Squats", value: "airSquats" },
        { text: "Air Squats Met Jump", value: "airSquatsMetJump" }
      ],
      excercise: [
        { text: "Lunges", value: "lunges" },
        { text: "Pushups", value: "pushups" },
        { text: "Squats", value: "squats" },
        { text: "Dumbbell", value: "dumbbell" },
        { text: "Dumbbell Rows", value: "dumbbellRows" },
        { text: "Single-leg deadlifts", value: "singleLegDeadlifts" }
      ],
      issueData: [
        { title: "Low sleep rate", date: "05-09-2020" },
        { title: "Low water balance", date: "24-08-2020" }
      ],
      notesData: [
        {
          title: "Carla needs to maintain her sleep schedule.",
          date: "05-09-2020"
        },
        {
          title: "Let Carla know about updated shopping l...",
          date: "24-07-2020"
        },
        {
          title: "Update the workout plan before end of th...",
          date: "15-06-2020"
        },
        {
          title: "Let Carla know about updated shopping l...",
          date: "08-04-2020"
        }
      ],
      settings: {
        maxScrollbarLength: 60,
        wheelSpeed: 0.7
      },
      leftActiveItem: "issue-tab-1"
    };
  },
  computed: {
    scrollbarTag() {
      return this.$store.getters.scrollbarTag;
    }
  },
  methods: {
    changeExcercise(selectExcercise) {
      console.log(selectExcercise.value);
      if (selectExcercise) {
        this.show = true;
        console.log(this.show);
        this.newExcercise = true;
      } else {
        this.show = false;
        console.log(this.show);
      }
    },
    changeSelect(item) {
      if (item) {
        this.show2 = true;
        console.log(this.show2);
        this.show1 = false;
      } else {
        this.show2 = false;
        console.log(this.show2);
      }
    },
    isLeftActive(menuItem) {
      return this.leftActiveItem === menuItem;
    },
    setLeftActive(menuItem) {
      this.leftActiveItem = menuItem;
    }
  }
};
</script>
<style>
.addmrg .vs-con-input {
  margin-bottom: 20px;
}
.addissu-width .vs-popup {
  max-width: 720px !important;
  border-radius: 8px !important;
  box-shadow: 0px 30px 70px rgba(51, 51, 78, 0.15),
    0px 10px 30px rgba(0, 0, 0, 0.2), 0px 0px 4px rgba(0, 0, 0, 0.15) !important;
}
.note-width .vs-popup {
  max-width: 448px !important;
  box-shadow: 0px 30px 70px rgba(51, 51, 78, 0.15),
    0px 10px 30px rgba(0, 0, 0, 0.2), 0px 0px 4px rgba(0, 0, 0, 0.15);
  border-radius: 8px;
}
.workout-width .vs-popup {
  /* max-width: 440px !important; */
  box-shadow: 0px 30px 70px rgba(51, 51, 78, 0.15),
    0px 10px 30px rgba(0, 0, 0, 0.2), 0px 0px 4px rgba(0, 0, 0, 0.15);
  border-radius: 8px;
}
.shopping-width .vs-popup {
  max-width: 440px !important;
  box-shadow: 0px 30px 70px rgba(51, 51, 78, 0.15),
    0px 10px 30px rgba(0, 0, 0, 0.2), 0px 0px 4px rgba(0, 0, 0, 0.15);
  border-radius: 8px;
}
.Inspire-Client-width .vs-popup {
  max-width: 448px !important;
  box-shadow: 0px 30px 70px rgba(51, 51, 78, 0.15),
    0px 10px 30px rgba(0, 0, 0, 0.2), 0px 0px 4px rgba(0, 0, 0, 0.15);
  border-radius: 8px;
}
.quick-msg-width .vs-popup {
  max-width: 448px !important;
  box-shadow: 0px 30px 70px rgba(51, 51, 78, 0.15),
    0px 10px 30px rgba(0, 0, 0, 0.2), 0px 0px 4px rgba(0, 0, 0, 0.15);
  border-radius: 8px;
}
/* scrollbar css */
/* #mvp-client-profile .no-scroll-content {
  height: calc(var(--vh, 1vh) * 100 - 2.1rem);
} */
.chat-content-area {
  position: relative;
}
#chat-app #chat-right-sidebar .chat-scroll-area {
  position: relative;
  width: 100%;
  height: calc(100% - 60px);
}
.no-scroll-content {
  height: calc(var(--vh, 1vh) * 100 - 3.1rem) !important;
}
.mrgtop {
  margin-top: 48px;
}
input::placeholder {
  font-family: "Open Sans", sans-serif !important;
}
</style>
