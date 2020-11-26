<!-- =========================================================================================
  File Name: VerticalNavMenu.vue
  Description: Vertical NavMenu Component
  Component Name: VerticalNavMenu
  ----------------------------------------------------------------------------------------
   
========================================================================================== -->

<template>
  <div class="parentx">
    <vs-sidebar
      class="v-nav-menu items-no-padding"
      v-model="isVerticalNavMenuActive"
      ref="verticalNavMenu"
      default-index="-1"
      :click-not-close="clickNotClose"
      :reduce-not-rebound="reduceNotRebound"
      :parent="parent"
      :hiddenBackground="clickNotClose"
      :reduce="reduce"
      v-hammer:swipe="onMenuSwipe"
    >
      <div
        @mouseenter="mouseEnter"
        @mouseleave="mouseLeave"
        class="sidebar-background"
        :style="{
          'background-image':
            'url(' + require('../../../assets/images/sidebar-bg.svg') + ')'
        }"
      >
        <!-- Header -->
        <div
          class="header-sidebar flex items-center justify-between"
          slot="header"
        >
          <!-- Logo -->
          <router-link
            tag="div"
            class="vx-logo mx-auto cursor-pointer flex items-center"
            to="/"
          >
            <logo class=" fill-current text-primary" />
            <!-- <span class="vx-logo-text text-primary" v-show="isMouseEnter || !reduce" v-if="title">{{ title }}</span> -->
          </router-link>
          <!-- /Logo -->

          <!-- Menu Buttons -->
          <div>
            <!-- Close Button -->
            <template v-if="showCloseButton">
              <feather-icon
                icon="XIcon"
                class="m-0 cursor-pointer"
                @click="
                  $store.commit('TOGGLE_IS_VERTICAL_NAV_MENU_ACTIVE', false)
                "
              />
            </template>

            <!-- Toggle Buttons -->
            <template v-else-if="!showCloseButton && !verticalNavMenuItemsMin">
              <feather-icon
                id="btnVNavMenuMinToggler"
                class="mr-0 cursor-pointer"
                :icon="reduce ? 'CircleIcon' : 'DiscIcon'"
                svg-classes="stroke-current text-white"
                @click="toggleReduce(!reduce)"
              />
            </template>
          </div>
          <!-- /Menu Toggle Buttons -->
        </div>
        <!-- /Header -->

        <!-- Header Shadow -->
        <div class="shadow-bottom" v-show="showShadowBottom" />

        <!-- Menu Items -->
        <component
          :is="scrollbarTag"
          ref="verticalNavMenuPs"
          class="scroll-area-v-nav-menu pt-2"
          :settings="settings"
          @ps-scroll-y="psSectionScroll"
          @scroll="psSectionScroll"
          :key="$vs.rtl"
        >
          <template v-for="(item, index) in menuItemsUpdated">
            <!-- Group Header -->
            <span
              v-if="item.header && !verticalNavMenuItemsMin"
              class="navigation-header truncate"
              :key="`header-${index}`"
            >
              {{ item.header }}
            </span>
            <!-- /Group Header -->

            <template v-else-if="!item.header">
              <!-- Nav-Item -->
              <v-nav-menu-item
                v-if="!item.submenu"
                :key="`item-${index}`"
                :index="index"
                :to="item.slug !== 'external' ? item.url : null"
                :href="item.slug === 'external' ? item.url : null"
                :icon="item.icon"
                :target="item.target"
                :isDisabled="item.isDisabled"
                :slug="item.slug"
              >
                <span v-show="!verticalNavMenuItemsMin" class="truncate">{{
                  item.name
                }}</span>
                <vs-chip
                  class="ml-auto"
                  :color="item.tagColor"
                  v-if="item.tag && (isMouseEnter || !reduce)"
                  >{{ item.tag }}</vs-chip
                >
              </v-nav-menu-item>

              <!-- Nav-Group -->
              <template v-else>
                <v-nav-menu-group
                  :key="`group-${index}`"
                  :openHover="openGroupHover"
                  :group="item"
                  :groupIndex="index"
                  :open="isGroupActive(item)"
                />
              </template>
              <!-- /Nav-Group -->
            </template>
          </template>
        </component>
        <!-- /Menu Items -->
        <div class="flex items-center justify-center">
          <span
            v-if="!verticalNavMenuItemsMin"
            class="feature-request flex justify-center cursor-pointer"
            @click="popupFeedback = true"
            ><span class="mr-2"
              ><svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.6264 0H3.52921C2.80539 0 2.11122 0.287536 1.5994 0.799353C1.08758 1.31117 0.800049 2.00534 0.800049 2.72916V10.0069C0.800049 10.7307 1.08758 11.4249 1.5994 11.9367C2.11122 12.4485 2.80539 12.7361 3.52921 12.7361V15.0884C3.52888 15.2086 3.55238 15.3277 3.59837 15.4388C3.64436 15.5498 3.71192 15.6506 3.79713 15.7354C3.88235 15.8202 3.98353 15.8872 4.09482 15.9326C4.20611 15.978 4.3253 16.0009 4.4455 16C4.56414 15.9999 4.68158 15.9761 4.79092 15.9301C4.90026 15.884 4.99929 15.8166 5.0822 15.7317L8.07781 12.7361H12.6264C13.3502 12.7361 14.0444 12.4485 14.5562 11.9367C15.068 11.4249 15.3556 10.7307 15.3556 10.0069V2.72916C15.3556 2.00534 15.068 1.31117 14.5562 0.799353C14.0444 0.287536 13.3502 0 12.6264 0ZM9.21496 9.32463C9.21496 9.54954 9.14827 9.7694 9.02332 9.9564C8.89837 10.1434 8.72077 10.2892 8.51298 10.3752C8.30519 10.4613 8.07655 10.4838 7.85597 10.4399C7.63538 10.3961 7.43276 10.2878 7.27373 10.1287C7.11469 9.96969 7.00639 9.76707 6.96251 9.54648C6.91863 9.3259 6.94115 9.09725 7.02722 8.88947C7.11329 8.68168 7.25904 8.50408 7.44605 8.37913C7.63305 8.25418 7.85291 8.18748 8.07781 8.18748C8.3794 8.18748 8.66864 8.30729 8.8819 8.52055C9.09516 8.7338 9.21496 9.02304 9.21496 9.32463ZM8.98753 3.63888V6.36804C8.98753 6.60932 8.89169 6.84071 8.72108 7.01131C8.55048 7.18192 8.31909 7.27776 8.07781 7.27776C7.83654 7.27776 7.60515 7.18192 7.43454 7.01131C7.26394 6.84071 7.16809 6.60932 7.16809 6.36804V3.63888C7.16809 3.39761 7.26394 3.16622 7.43454 2.99561C7.60515 2.82501 7.83654 2.72916 8.07781 2.72916C8.31909 2.72916 8.55048 2.82501 8.72108 2.99561C8.89169 3.16622 8.98753 3.39761 8.98753 3.63888Z"
                  fill="#1866FF"
                />
              </svg>
            </span>
            Feature Request</span
          >
          <span
            v-else
            class="feature-request-icon flex justify-center cursor-pointer"
            ><span
              ><svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.6264 0H3.52921C2.80539 0 2.11122 0.287536 1.5994 0.799353C1.08758 1.31117 0.800049 2.00534 0.800049 2.72916V10.0069C0.800049 10.7307 1.08758 11.4249 1.5994 11.9367C2.11122 12.4485 2.80539 12.7361 3.52921 12.7361V15.0884C3.52888 15.2086 3.55238 15.3277 3.59837 15.4388C3.64436 15.5498 3.71192 15.6506 3.79713 15.7354C3.88235 15.8202 3.98353 15.8872 4.09482 15.9326C4.20611 15.978 4.3253 16.0009 4.4455 16C4.56414 15.9999 4.68158 15.9761 4.79092 15.9301C4.90026 15.884 4.99929 15.8166 5.0822 15.7317L8.07781 12.7361H12.6264C13.3502 12.7361 14.0444 12.4485 14.5562 11.9367C15.068 11.4249 15.3556 10.7307 15.3556 10.0069V2.72916C15.3556 2.00534 15.068 1.31117 14.5562 0.799353C14.0444 0.287536 13.3502 0 12.6264 0ZM9.21496 9.32463C9.21496 9.54954 9.14827 9.7694 9.02332 9.9564C8.89837 10.1434 8.72077 10.2892 8.51298 10.3752C8.30519 10.4613 8.07655 10.4838 7.85597 10.4399C7.63538 10.3961 7.43276 10.2878 7.27373 10.1287C7.11469 9.96969 7.00639 9.76707 6.96251 9.54648C6.91863 9.3259 6.94115 9.09725 7.02722 8.88947C7.11329 8.68168 7.25904 8.50408 7.44605 8.37913C7.63305 8.25418 7.85291 8.18748 8.07781 8.18748C8.3794 8.18748 8.66864 8.30729 8.8819 8.52055C9.09516 8.7338 9.21496 9.02304 9.21496 9.32463ZM8.98753 3.63888V6.36804C8.98753 6.60932 8.89169 6.84071 8.72108 7.01131C8.55048 7.18192 8.31909 7.27776 8.07781 7.27776C7.83654 7.27776 7.60515 7.18192 7.43454 7.01131C7.26394 6.84071 7.16809 6.60932 7.16809 6.36804V3.63888C7.16809 3.39761 7.26394 3.16622 7.43454 2.99561C7.60515 2.82501 7.83654 2.72916 8.07781 2.72916C8.31909 2.72916 8.55048 2.82501 8.72108 2.99561C8.89169 3.16622 8.98753 3.39761 8.98753 3.63888Z"
                  fill="#1866FF"
                />
              </svg> </span
          ></span>
        </div>
        <div class="flex items-center justify-center mt-3 cursor-pointer">
          <span to="" class="report-bug" @click="popupreport = true"
            >Report Bug</span
          >
        </div>
      </div>
    </vs-sidebar>

    <!-- Swipe Gesture -->
    <div
      v-if="!isVerticalNavMenuActive"
      class="v-nav-menu-swipe-area"
      v-hammer:swipe="onSwipeAreaSwipe"
    />
    <!-- /Swipe Gesture -->
    <!-- Feedback popup -->
    <mcp-dialog
      :active.sync="popupFeedback"
      :buttonCloseHidden="true"
      class="feature-width"
    >
      <template #header>
        <div class="flex items-center justify-between">
          <svg
            width="37"
            height="40"
            viewBox="0 0 37 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M29.5659 0H6.8229C5.01336 0 3.27792 0.71884 1.99838 1.99838C0.71884 3.27792 0 5.01336 0 6.8229V25.0173C0 26.8269 0.71884 28.5623 1.99838 29.8418C3.27792 31.1214 5.01336 31.8402 6.8229 31.8402V37.7211C6.82207 38.0216 6.88084 38.3193 6.99581 38.5969C7.11078 38.8745 7.27967 39.1266 7.49271 39.3385C7.70575 39.5505 7.9587 39.718 8.23693 39.8316C8.51515 39.9451 8.81314 40.0023 9.11363 39.9999C9.41024 39.9998 9.70383 39.9404 9.97717 39.8252C10.2505 39.71 10.4981 39.5414 10.7054 39.3292L18.1944 31.8402H29.5659C31.3755 31.8402 33.1109 31.1214 34.3904 29.8418C35.67 28.5623 36.3888 26.8269 36.3888 25.0173V6.8229C36.3888 5.01336 35.67 3.27792 34.3904 1.99838C33.1109 0.71884 31.3755 0 29.5659 0ZM21.0373 23.3116C21.0373 23.8739 20.8706 24.4235 20.5582 24.891C20.2458 25.3585 19.8018 25.7229 19.2823 25.9381C18.7629 26.1532 18.1913 26.2095 17.6398 26.0998C17.0883 25.9901 16.5818 25.7194 16.1842 25.3218C15.7866 24.9242 15.5159 24.4177 15.4062 23.8662C15.2965 23.3147 15.3528 22.7431 15.5679 22.2237C15.7831 21.7042 16.1475 21.2602 16.615 20.9478C17.0825 20.6354 17.6321 20.4687 18.1944 20.4687C18.9484 20.4687 19.6715 20.7682 20.2046 21.3014C20.7378 21.8345 21.0373 22.5576 21.0373 23.3116ZM20.4687 9.0972V15.9201C20.4687 16.5233 20.2291 17.1018 19.8026 17.5283C19.3761 17.9548 18.7976 18.1944 18.1944 18.1944C17.5912 18.1944 17.0127 17.9548 16.5862 17.5283C16.1597 17.1018 15.9201 16.5233 15.9201 15.9201V9.0972C15.9201 8.49402 16.1597 7.91554 16.5862 7.48903C17.0127 7.06252 17.5912 6.8229 18.1944 6.8229C18.7976 6.8229 19.3761 7.06252 19.8026 7.48903C20.2291 7.91554 20.4687 8.49402 20.4687 9.0972Z"
              fill="#868FA0"
            />
          </svg>
          <div class="title">
            <h2>Feature Request</h2>
            <h5>Please describe the feedback or the feature you want.</h5>
          </div>
        </div>
      </template>
      <div class="content">
        <h5 class="mb-1">Message</h5>
        <div>
          <vs-textarea
            class="textarea-box input-active"
            height="150px"
            placeholder="Please describe your feature request as detailed as possible..."
            v-model="textarea"
          />
          <div class="flex flex-row">
            <vs-checkbox v-model="checkBox1"></vs-checkbox>
            <h5>You can contact me regarding my request.</h5>
          </div>
        </div>
      </div>
      <template #footer>
        <div class="flex  justify-end">
          <div class="footer  my-4">
            <vs-button
              class="py-2 px-4 mr-5 open-sans font-14 font-600 black-500"
              style="border: 1px solid #D2D5DC;"
              type="border"
              @click="popupFeedback = false"
              >Cancel</vs-button
            >

            <vs-button
              class="btn2 py-2 px-4 open-sans font-14 font-600 white-400"
              color="primary"
              type="filled"
              >Send Request</vs-button
            >
          </div>
        </div>
      </template>
    </mcp-dialog>

    <!-- <vs-popup class="holamundo" title="Lorem ipsum dolor sit amet" :active.sync="popupFeedback">
      <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    </vs-popup> -->
    <!-- /Feedback popup -->
    <!--  Report Bug popup  -->
    <mcp-dialog
      :active.sync="popupreport"
      :buttonCloseHidden="true"
      class="reportbug-width"
    >
      <template #header>
        <div class="flex items-center justify-between">
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M39.9464 26.2715L38.1504 18.6826C37.9037 17.657 36.8629 17.0008 35.8485 17.2476L30.5842 18.5528C30.1202 17.5001 29.5141 16.5272 28.7895 15.6599L33.1286 14.0651C33.9813 13.7499 34.5038 12.8612 34.3687 11.9439L33.4267 5.54474C33.2721 4.50198 32.3009 3.72597 31.2558 3.8943C30.2164 4.05406 29.4988 5.04975 29.6562 6.11248L30.3655 10.924L25.2824 12.7984C25.235 12.7713 25.1834 12.7513 25.1361 12.7257C24.9145 12.2578 25.1347 11.7499 25.4273 11.3363C25.4273 11.3363 27.0004 9.10667 27.0004 6.95981C27.0004 3.77305 25.0204 1.05417 22.288 0.00142648V1.95856C22.288 3.23669 21.2666 4.28087 20.0167 4.28087H19.9875C18.739 4.28087 17.7051 3.23812 17.7051 1.95856V0C14.9726 1.05274 12.9982 3.77162 12.9982 6.95838C12.9982 9.10667 14.5741 11.3348 14.5741 11.3348C14.8166 11.6758 15.0186 12.0823 14.9573 12.4774C14.7985 12.5516 14.641 12.6301 14.4863 12.71L9.63315 10.9212L10.3438 6.10963C10.4985 5.0469 9.78364 4.05264 8.74417 3.89144C7.69773 3.72312 6.72653 4.49913 6.57326 5.54331L5.63132 11.9425C5.49477 12.8612 6.0173 13.7499 6.87145 14.0637L10.9039 15.5458C10.1571 16.416 9.53144 17.396 9.05071 18.4615L4.15154 17.2462C3.13576 16.9994 2.09489 17.6556 1.85105 18.6812L0.0535687 26.2701C-0.193062 27.3143 0.435359 28.3727 1.45672 28.6252C1.60581 28.6623 1.75908 28.6809 1.90818 28.6809C2.79019 28.6809 3.55099 28.0646 3.7586 27.1873L5.10741 21.4957L8.02518 22.2217C7.98059 22.654 7.95272 23.0905 7.95272 23.5355C7.95272 25.1418 8.26484 26.6695 8.81802 28.0732L6.28343 29.7379C5.43904 30.2956 5.15897 31.4354 5.65083 32.3355L9.30571 39.0043C9.64151 39.6177 10.2797 39.9986 10.968 39.9986C11.2941 39.9986 11.6187 39.913 11.9002 39.7489C12.3433 39.4922 12.6638 39.0756 12.8017 38.5764C12.9411 38.0742 12.8784 37.5465 12.629 37.0914L9.85331 32.0274L10.7994 31.4069C12.9703 34.0088 16.1919 35.6621 19.7952 35.6621C23.4793 35.6621 26.7677 33.9403 28.94 31.24L30.1453 32.0288L27.3697 37.0928C27.1202 37.5479 27.0575 38.0757 27.1969 38.5778C27.3362 39.0785 27.6553 39.495 28.0984 39.7504C28.3799 39.9144 28.7045 40 29.0306 40C29.7189 40 30.3571 39.6177 30.6929 39.0057L34.3478 32.3369C34.8396 31.4368 34.5596 30.2956 33.7152 29.7393L30.849 27.8578C31.3492 26.5155 31.6362 25.0619 31.6362 23.5384C31.6362 23.1276 31.6139 22.7224 31.5763 22.3216L34.8898 21.4985L36.2372 27.1902C36.4448 28.0675 37.207 28.6837 38.089 28.6837C38.2381 28.6837 38.3914 28.6652 38.5405 28.6281C39.5646 28.3742 40.1931 27.3157 39.9464 26.2715Z"
              fill="#868FA0"
            />
          </svg>
          <div class="title">
            <h2>Report a Bug</h2>
            <h5>Please describe the issue and we will fix it for you.</h5>
          </div>
        </div>
      </template>
      <div class="content">
        <div class="ss-img">
          <img src="@/assets/images/client-overview-1.jpg" class="w-full" alt="" />
          <div class="flex flex-row mb-6">
            <vs-checkbox v-model="checkBox1"></vs-checkbox>
            <h5>Include screenshot of this page.</h5>
          </div>
          <h5 class="inter-font font-500 font-14 black-500 mb-2 ml-1">
            Message
          </h5>
          <div>
            <vs-textarea
              class="textarea-box inter-font font-16 gray-500 ml-1 input-active"
              height="80px"
              placeholder="Describe the issue"
              v-model="textarea"
            />
          </div>
          <div class="flex flex-row">
            <vs-checkbox class="" v-model="checkBox1"></vs-checkbox>
            <h5>You can contact me regarding this issue.</h5>
          </div>
        </div>
      </div>
      <template #footer>
        <div class="flex  justify-end">
          <div class="footer  my-4">
            <vs-button
              class="py-2 px-4 mr-5 text-black font-semibold open-sans"
              style="border: 1px solid #D2D5DC;"
              type="border"
              @click="popupreport = false"
              >Cancel</vs-button
            >
            <vs-button
              class="btn2 py-2 px-4  font-semibold open-sans"
              color="primary"
              type="filled"
              @click="popupreport = false"
              >Report Bug</vs-button
            >
          </div>
        </div>
      </template>
    </mcp-dialog>
    <!--  /Report Bug popup  -->
  </div>
</template>

<script>
import VuePerfectScrollbar from "vue-perfect-scrollbar";
import VNavMenuGroup from "./VerticalNavMenuGroup.vue";
import VNavMenuItem from "./VerticalNavMenuItem.vue";
import McpDialog from "../../../components/vx-dialogs/VxDialogs";

import Logo from "../Logo.vue";

export default {
  name: "v-nav-menu",
  components: {
    VNavMenuGroup,
    VNavMenuItem,
    VuePerfectScrollbar,
    Logo,
    McpDialog
  },
  props: {
    logo: { type: String },
    openGroupHover: { type: Boolean, default: false },
    parent: { type: String },
    reduceNotRebound: { type: Boolean, default: true },
    navMenuItems: { type: Array, required: true },
    title: { type: String }
  },
  data: () => ({
    clickNotClose: false, // disable close navMenu on outside click
    isMouseEnter: false,
    reduce: false, // determines if navMenu is reduce - component property
    showCloseButton: false, // show close button in smaller devices
    settings: {
      // perfectScrollbar settings
      maxScrollbarLength: 60,
      wheelSpeed: 1,
      swipeEasing: true
    },
    showShadowBottom: false,
    popupFeedback: false,
    popupreport: false
  }),
  computed: {
    isGroupActive() {
      return item => {
        const path = this.$route.fullPath;
        const routeParent = this.$route.meta
          ? this.$route.meta.parent
          : undefined;
        let open = false;

        const func = item => {
          if (item.submenu) {
            item.submenu.forEach(item => {
              if (
                item.url &&
                (path === item.url || routeParent === item.slug)
              ) {
                open = true;
              } else if (item.submenu) {
                func(item);
              }
            });
          }
        };
        func(item);
        return open;
      };
    },
    menuItemsUpdated() {
      const clone = this.navMenuItems.slice();

      for (const [index, item] of this.navMenuItems.entries()) {
        if (item.header && item.items.length && (index || 1)) {
          const i = clone.findIndex(ix => ix.header === item.header);
          for (const [subIndex, subItem] of item.items.entries()) {
            clone.splice(i + 1 + subIndex, 0, subItem);
          }
        }
      }

      return clone;
    },
    isVerticalNavMenuActive: {
      get() {
        return this.$store.state.isVerticalNavMenuActive;
      },
      set(val) {
        this.$store.commit("TOGGLE_IS_VERTICAL_NAV_MENU_ACTIVE", val);
      }
    },
    layoutType() {
      return this.$store.state.mainLayoutType;
    },
    reduceButton: {
      get() {
        return this.$store.state.reduceButton;
      },
      set(val) {
        this.$store.commit("TOGGLE_REDUCE_BUTTON", val);
      }
    },
    isVerticalNavMenuReduced() {
      return Boolean(this.reduce && this.reduceButton);
    },
    verticalNavMenuItemsMin() {
      return this.$store.state.verticalNavMenuItemsMin;
    },
    scrollbarTag() {
      return this.$store.getters.scrollbarTag;
    },
    windowWidth() {
      return this.$store.state.windowWidth;
    }
  },
  watch: {
    $route() {
      if (this.isVerticalNavMenuActive && this.showCloseButton)
        this.$store.commit("TOGGLE_IS_VERTICAL_NAV_MENU_ACTIVE", false);
    },
    reduce(val) {
      const verticalNavMenuWidth = val
        ? "reduced"
        : this.$store.state.windowWidth < 1200
        ? "no-nav-menu"
        : "default";
      this.$store.dispatch("updateVerticalNavMenuWidth", verticalNavMenuWidth);

      setTimeout(function() {
        window.dispatchEvent(new Event("resize"));
      }, 100);
    },
    layoutType() {
      this.setVerticalNavMenuWidth();
    },
    reduceButton() {
      this.setVerticalNavMenuWidth();
    },
    windowWidth() {
      this.setVerticalNavMenuWidth();
    }
  },
  methods: {
    onMenuSwipe(event) {
      if (event.direction === 4 && this.$vs.rtl) {
        // Swipe Right
        if (this.isVerticalNavMenuActive && this.showCloseButton)
          this.isVerticalNavMenuActive = false;
      } else if (event.direction === 2 && !this.$vs.rtl) {
        // Swipe Left
        if (this.isVerticalNavMenuActive && this.showCloseButton)
          this.isVerticalNavMenuActive = false;
      }
    },
    onSwipeAreaSwipe(event) {
      if (event.direction === 4 && !this.$vs.rtl) {
        // Swipe Right
        if (!this.isVerticalNavMenuActive && this.showCloseButton)
          this.isVerticalNavMenuActive = true;
      } else if (event.direction === 2 && this.$vs.rtl) {
        // Swipe Left
        if (!this.isVerticalNavMenuActive && this.showCloseButton)
          this.isVerticalNavMenuActive = true;
      }
    },
    psSectionScroll() {
      const scroll_el =
        this.$refs.verticalNavMenuPs.$el || this.$refs.verticalNavMenuPs;
      this.showShadowBottom = scroll_el.scrollTop > 0;
    },
    mouseEnter() {
      if (this.reduce)
        this.$store.commit("UPDATE_VERTICAL_NAV_MENU_ITEMS_MIN", false);
      this.isMouseEnter = true;
    },
    mouseLeave() {
      if (this.reduce)
        this.$store.commit("UPDATE_VERTICAL_NAV_MENU_ITEMS_MIN", true);
      this.isMouseEnter = false;
    },
    setVerticalNavMenuWidth() {
      if (this.windowWidth > 1200) {
        if (this.layoutType === "vertical") {
          // Set reduce
          this.reduce = !!this.reduceButton;

          // Open NavMenu
          this.$store.commit("TOGGLE_IS_VERTICAL_NAV_MENU_ACTIVE", true);

          // Set Menu Items Only Icon Mode
          const verticalNavMenuItemsMin = !!(
            this.reduceButton && !this.isMouseEnter
          );
          this.$store.commit(
            "UPDATE_VERTICAL_NAV_MENU_ITEMS_MIN",
            verticalNavMenuItemsMin
          );

          // Menu Action buttons
          this.clickNotClose = true;
          this.showCloseButton = false;

          const verticalNavMenuWidth = this.isVerticalNavMenuReduced
            ? 'reduced'
            : 'default'
          this.$store.dispatch(
            'updateVerticalNavMenuWidth',
            verticalNavMenuWidth
          )

          return
        }
      }

      // Close NavMenu
      this.$store.commit('TOGGLE_IS_VERTICAL_NAV_MENU_ACTIVE', false)

      // Reduce button
      if (this.reduceButton) this.reduce = false

      // Menu Action buttons
      this.showCloseButton = true
      this.clickNotClose = false

      // Update NavMenu Width
      this.$store.dispatch('updateVerticalNavMenuWidth', 'no-nav-menu')

      // Remove Only Icon in Menu
      this.$store.commit('UPDATE_VERTICAL_NAV_MENU_ITEMS_MIN', false)

      // if(this.layoutType === 'vertical' || (this.layoutType === 'horizontal' && this.windowWidth < 1200))
      // if (this.windowWidth < 1200) {

      //   // Close NavMenu
      //   this.$store.commit('TOGGLE_IS_VERTICAL_NAV_MENU_ACTIVE', false)

      //   // Reduce button
      //   if (this.reduceButton) this.reduce = false

      //   // Menu Action buttons
      //   this.showCloseButton = true
      //   this.clickNotClose   = false

      //   // Update NavMenu Width
      //   this.$store.dispatch('updateVerticalNavMenuWidth', 'no-nav-menu')

      //   // Remove Only Icon in Menu
      //   this.$store.commit('UPDATE_VERTICAL_NAV_MENU_ITEMS_MIN', false)

      // } else {

      //   // Set reduce
      //   this.reduce = this.reduceButton ? true : false

      //   // Open NavMenu
      //   this.$store.commit('TOGGLE_IS_VERTICAL_NAV_MENU_ACTIVE', true)

      //   // Set Menu Items Only Icon Mode
      //   const verticalNavMenuItemsMin = (this.reduceButton && !this.isMouseEnter) ? true : false
      //   this.$store.commit('UPDATE_VERTICAL_NAV_MENU_ITEMS_MIN', verticalNavMenuItemsMin)

      //   // Menu Action buttons
      //   this.clickNotClose   = true
      //   this.showCloseButton = false

      //   const verticalNavMenuWidth   = this.isVerticalNavMenuReduced ? "reduced" : "default"
      //   this.$store.dispatch('updateVerticalNavMenuWidth', verticalNavMenuWidth)
      // }
    },
    toggleReduce (val) {
      this.reduceButton = val
      this.setVerticalNavMenuWidth()
    }
  },
  mounted () {
    this.setVerticalNavMenuWidth()
  }
}
</script>

<style lang="scss">
@import "@/assets/scss/vuexy/components/verticalNavMenu.scss";
</style>
<style>
.vs-sidebar {
  max-width: 230px;
}
.vs-sidebar.vs-sidebar-reduce:hover:not(.vs-sidebar-reduceNotHoverExpand) {
  max-width: 230px;
}
.vs-navbar {
  box-shadow: 15px 9px 25px rgba(0, 0, 0, 0.09) !important;
}
.sidebar-background {
  background-size: cover;
  background-position: center, center;
  background-repeat: no-repeat;
}
.feature-request-icon {
  color: #004ce5;
  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 0.025em;
  text-transform: capitalize;
  background: #e1e9fa;
  border-radius: 6px;
  padding: 10.1px;
  text-align: center;
}
/* popup style */
.title {
  /* position: absolute;
  left: 80px;
  top: 0px; */
  margin-left: 20px;
  /* margin-bottom: 10px; */
}

.title h5 {
  color: #687182;
}
.textarea-box {
  font-family: Inter !important;
  font-size: 16px;
  border-radius: 6px;
  padding-left: 5px;
  background: #ffffff;
}

.footer {
  display: flex;
  justify-items: end;
}
.btn1 {
  border-color: #d2d5dc !important;
  color: #222834 !important;
}
.btn2 {
  background: #0054ff !important;
  box-shadow: none !important;
  margin-right: 18px;
}
.feature-width .vs-popup {
  border-radius: 8px;
  max-width: 545px;
}
.reportbug-width .vs-popup {
  max-width: 545px;
  border-radius: 8px;
}
</style>
