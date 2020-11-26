<template>
  <div class="p-8">
    <!-- user profile detail start-->
    <user-profile-box />
    <!-- user profile detail end-->
    <!-- todo start -->
    <div class="vx-row mb-10 mt-10">
      <div class="vx-col md:w-8/12 sm:w-1/2 w-full">
        {{currentUser.email}}
      </div>
      <div class="vx-col md:w-4/12 sm:w-1/2 w-full">
        <div class="vx-card box-sdow-sm">
          <div class="p-6 search-for-todo">
            <vs-input
              class="w-full mcp-input-rounded-full"
              placeholder="Search"
            />
            <vs-button
              radius
              color="rgb(4,156,245,1)"
              type="filled"
              class="search-btn-todo"
              icon-pack="feather"
              icon="icon-search"
            ></vs-button>
          </div>
          <div
            class="vx-card__collapsible-content vs-con-loading__container"
            style="max-height: none"
          >
            <div class="vx-card__body">
              <div class="vx-card-head flex justify-between">
                <h2>To do’s</h2>
                <vs-button
                  radius
                  color="rgb(4,156,245,1)"
                  type="filled"
                  class="search-btn-todo icon-plus-feather"
                  icon-pack="feather"
                  size="small"
                  icon="icon-plus"
                ></vs-button>
              </div>
              <hr class="m-2 hr-border-1" />
              <div class="vx-list-box mt-8">
                <div class="list-box">
                  <h3>list1</h3>
                </div>
                <div class="list-box">
                  <h3>list2</h3>
                </div>
                <div class="list-box">
                  <h3>list3</h3>
                </div>
                <div class="list-box">
                  <h3>list4</h3>
                </div>
                <vs-button
                  class="w-full font-awesome"
                  color="#757575"
                  type="border"
                  >See All</vs-button
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <vs-row vs-w="12" class="items-center justify-between mb-10 mrgtop">
      <div class="mcp-card-title">
        <h3 class="text-primary-heading font-medium futura-md-bt">Clients</h3>
      </div>
      <div class="mcp-card-action">
        <vs-button color="rgb(4,156,245,1)" type="filled">
          <feather-icon icon="PlusIcon" svgClasses="w-4 h-4 font-extrabold" />
          New</vs-button
        >
      </div>
    </vs-row>
    <!-- client table detail start -->
    <div class="vx-card">
      <div class="vx-card__header">
        <div class="vx-card__title">
          <vs-button
            class="md:mr-6 lg:mr-6 xl:mr-6 futura-md-bt text-lg px-3 py-2 m-2"
            color="#049CF5"
            type="filled"
            >Total (167)
          </vs-button>
          <vs-button
            class="text-primary-900 md:mr-6 lg:mr-6 xl:mr-6 futura-md-bt px-3 py-2 m-2"
            color="#F5F5F5;"
            type="filled"
            >In Need (07)
          </vs-button>
          <vs-button
            class="text-primary-900 md:mr-6 lg:mr-6 xl:mr-6 futura-md-bt text-lg px-3 py-2 m-2"
            color="rgb(245,245,245,1)"
            type="filled"
            >About To Expire (21)
          </vs-button>
          <vs-button
            class="text-primary-900 md:mr-6 lg:mr-6 xl:mr-6 futura-md-bt text-lg px-3 py-2 m-2"
            color="rgb(245,245,245,1)"
            type="filled"
            >Inactive (08)
          </vs-button>
        </div>
        <div class="vx-card__actions">
          <div class="vx-card__action-buttons">
            <vs-dropdown
              vs-custom-content
              vs-trigger-click
              class="client-action-dropdown cursor-pointer"
            >
              <vs-button
                class="text-primary-900 bg-primary-100 futura-md-bt text-lg px-3 py-2 my-2 ml-2"
                type="filled"
                >New Client Request (07)
              </vs-button>

              <vs-dropdown-menu class="vx-navbar-dropdown action-dropdown">
                <div class="client-request-card" style="min-width: 653px">
                  <div
                    class="client-request-card-header flex items-center justify-between"
                  >
                    <div class="client-header-title">
                      New Client Request (07)
                    </div>
                    <div class="client-header-action">
                      View all your client requests
                    </div>
                  </div>
                  <div class="client-request-card-body">
                    <!-- <component :is="scrollbarTag" class="todo-scroll-area" :settings="settings" :key="$vs.rtl"> -->
                    <div
                      class="vx-card__collapsible-content vs-con-loading__container"
                      style="max-height: none"
                    >
                      <div class="vx-card__body">
                        <vs-table
                          class="open-sans client-tbl"
                          :data="usersRequest"
                        >
                          <template slot="thead">
                            <vs-th sort-key="clientName">ID</vs-th>
                            <vs-th sort-key="mood">Client Name</vs-th>
                          </template>

                          <template slot-scope="{ data }">
                            <vs-tr
                              :data="tr"
                              :key="indextr"
                              v-for="(tr, indextr) in data"
                            >
                              <vs-td :data="data[indextr].id">
                                {{ data[indextr].id }}
                              </vs-td>
                              <vs-td :data="data[indextr].clientName">
                                {{ data[indextr].clientName }}
                              </vs-td>

                              <vs-td :data="data[indextr].mood">
                                {{ data[indextr].mood }}
                              </vs-td>

                              <vs-td :data="data[indextr].sleep">
                                {{ data[indextr].sleep }}
                              </vs-td>

                              <vs-td :data="data[indextr].lastActivity">
                                {{ data[indextr].lastActivity }}
                              </vs-td>
                              <vs-td>
                                <router-link to="profile" class="text-primary-900 open-sans font-semibold text-sm ml-2 px-3 py-2">View Profile</router-link>
                              </vs-td>
                              <vs-td>
                                <vs-button
                                  class="text-white open-sans font-semibold text-sm px-3 py-2"
                                  color="#008EE7"
                                  type="filled"
                                  >Accept</vs-button
                                >
                              </vs-td>
                              <vs-td>
                                <svg
                                  width="20"
                                  height="20"
                                  viewBox="0 0 20 20"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M10 8.58579L12.1213 6.46447C12.5118 6.07394 13.145 6.07394 13.5355 6.46447C13.9261 6.85499 13.9261 7.48815 13.5355 7.87868L11.4142 10L13.5355 12.1213C13.9261 12.5118 13.9261 13.145 13.5355 13.5355C13.145 13.9261 12.5118 13.9261 12.1213 13.5355L10 11.4142L7.87868 13.5355C7.48815 13.9261 6.85499 13.9261 6.46447 13.5355C6.07394 13.145 6.07394 12.5118 6.46447 12.1213L8.58579 10L6.46447 7.87868C6.07394 7.48815 6.07394 6.85499 6.46447 6.46447C6.85499 6.07394 7.48815 6.07394 7.87868 6.46447L10 8.58579ZM17.0711 17.0711C15.1957 18.9464 12.6522 20 10 20C7.34784 20 4.8043 18.9464 2.92893 17.0711C1.05357 15.1957 0 12.6522 0 10C0 7.34784 1.05357 4.8043 2.92893 2.92893C4.8043 1.05357 7.34784 0 10 0C12.6522 0 15.1957 1.05357 17.0711 2.92893C18.9464 4.8043 20 7.34784 20 10C20 12.6522 18.9464 15.1957 17.0711 17.0711ZM15.6569 15.6569C17.1571 14.1566 18 12.1217 18 10C18 7.87827 17.1571 5.84344 15.6569 4.34315C14.1566 2.84285 12.1217 2 10 2C7.87827 2 5.84344 2.84285 4.34315 4.34315C2.84285 5.84344 2 7.87827 2 10C2 12.1217 2.84285 14.1566 4.34315 15.6569C5.84344 17.1571 7.87827 18 10 18C12.1217 18 14.1566 17.1571 15.6569 15.6569Z"
                                    fill="#868FA0"
                                  />
                                </svg>
                              </vs-td>
                            </vs-tr>
                          </template>
                        </vs-table>
                      </div>
                    </div>
                    <!-- </component> -->
                  </div>
                </div>
              </vs-dropdown-menu>
            </vs-dropdown>
          </div>
        </div>
      </div>
      <div
        class="vx-card__collapsible-content vs-con-loading__container"
        style="max-height: none"
      >
        <div class="vx-card__body">
          <vs-table
            class="open-sans client-tbl"
            multiple
            v-model="selected"
            pagination
            max-items="3"
            :data="users"
          >
            <div slot="header" class="flex items-center search-tbl ml-2">
              <div class="mr-3 search-text">Quick Search</div>
              <div>
                <vs-input class="w-full" placeholder="Search" />
              </div>
            </div>
            <template slot="thead">
              <vs-th sort-key="clientName">Client Name</vs-th>
              <vs-th sort-key="mood">Mood</vs-th>
              <vs-th sort-key="sleep">Sleep</vs-th>
              <vs-th sort-key="lastActivity">Last Activity</vs-th>
              <vs-th sort-key="issue">Issue</vs-th>
              <vs-th sort-key="id"></vs-th>
            </template>

            <template slot-scope="{ data }">
              <vs-tr :data="tr" :key="indextr" v-for="(tr, indextr) in data">
                <vs-td :data="data[indextr].clientName">
                  {{ data[indextr].clientName }}
                </vs-td>

                <vs-td :data="data[indextr].mood">
                  {{ data[indextr].mood }}
                </vs-td>

                <vs-td :data="data[indextr].sleep">
                  {{ data[indextr].sleep }}
                </vs-td>

                <vs-td :data="data[indextr].lastActivity">
                  {{ data[indextr].lastActivity }}
                </vs-td>
                <vs-td :data="data[indextr].issue">
                  <vs-chip :class="getBadge(data[indextr].issue)">{{
                    data[indextr].issue
                  }}</vs-chip>
                </vs-td>

                <vs-td>
                  <vs-button
                    class="text-primary-900 open-sans font-semibold text-sm px-3 py-2"
                    color="rgb(187,224,251,1)"
                    type="filled"
                    >Chat</vs-button
                  >
                  <router-link to="profile" class="text-primary-900 open-sans font-semibold text-sm ml-2 px-3 py-2">View Profile</router-link>
                </vs-td>
              </vs-tr>
            </template>
          </vs-table>
        </div>
      </div>
    </div>
    <!-- client table detail  end -->
  </div>
</template>
<script>
import UserService from '../services/user.service';
import userProfileBox from '../components/user-profile-card/VxUserProfileCard'
import VuePerfectScrollbar from 'vue-perfect-scrollbar'
export default {
  name: 'v-user-profile',
  components: {
    userProfileBox,
    VuePerfectScrollbar
  },
  data () {
    return {
      selected: [],
      tableList: [
        'vs-th: Component',
        'vs-tr: Component',
        'vs-td: Component',
        'thread: Slot',
        'tbody: Slot',
        'header: Slot'
      ],
      users: [
        {
          id: 1,
          clientName: 'Leanne Graham',
          mood: 'Bret',
          sleep: 'Sincere@april.biz',
          lastActivity: 'Sincere@april.biz',
          issue: 'Low Sleep Rate'
        },
        {
          id: 2,
          clientName: 'Ervin Howell',
          mood: 'Antonette',
          sleep: 'Shanna@melissa.tv',
          lastActivity: 'Sincere@april.biz',
          issue: 'Low Mood Rate'
        },
        {
          id: 3,
          clientName: 'Ervin Howell',
          mood: 'Antonette',
          sleep: 'Shanna@melissa.tv',
          lastActivity: 'Sincere@april.biz',
          issue: 'Inactive for 3 days'
        },
        {
          id: 4,
          clientName: 'Ervin Howell',
          mood: 'Antonette',
          sleep: 'Shanna@melissa.tv',
          lastActivity: 'Sincere@april.biz',
          issue: 'Inactive for 3 days'
        }
      ],
      usersRequest: [
        {
          id: 1,
          clientName: 'Leanne Graham'
        },
        {
          id: 2,
          clientName: 'Ervin Howell'
        },
        {
          id: 3,
          clientName: 'Ervin Howell'
        },
        {
          id: 4,
          clientName: 'Ervin Howell'
        },
        {
          id: 1,
          clientName: 'Leanne Graham'
        },
        {
          id: 2,
          clientName: 'Ervin Howell'
        },
        {
          id: 3,
          clientName: 'Ervin Howell'
        },
        {
          id: 4,
          clientName: 'Ervin Howell'
        }
      ],
      settings: {
        // perfectscrollbar settings
        maxScrollbarLength: 60,
        wheelSpeed: 0.6
      }
    }
  },
  computed: {
    scrollbarTag () {
      return this.$store.getters.scrollbarTag
    },
    currentUser() {
      return this.$store.state.auth.user;
    }

  },
  
  mounted() {
     const user = JSON.parse(localStorage.getItem('userIn'));
     console.log(user.data[0].id);
    if (!this.currentUser) {
      this.$router.push('/pages/login');
    }
  },
  methods: {
    getBadge (status) {
      return status === 'Low Sleep Rate'
        ? 'mcp-chip-warning'
        : status === 'Low Mood Rate'
          ? 'mcp-chip-danger'
          : status === 'Inactive for 3 days'
            ? 'mcp-chip-primary'
            : status === 'Banned'
              ? 'danger'
              : 'primary'
    }
  }
}
</script>
<style>
.scroll-area {
  position: relative;
  margin: auto;
  height: 300px;
}
/* todo list */
.vx-card-head h2 {
  margin-top: 0px;
  font-size: 21.9px;
  color: #50649c;
  font-family: Futura Md BT;
  font-style: normal;
  font-weight: 500;
}
.list-box {
  text-align: center;
  color: #757575;
  background: #f0f3f8;
  border-radius: 6px;
  margin-bottom: 15px;
}
.list-box h3 {
  padding: 15px 0;
  font-family: Futura Md BT;
  font-style: normal;
  font-weight: 500;
  font-size: 15.33px;
  color: #757575;
  opacity: 0.7;
}
.icon-plus-feather i.feather {
  font-weight: bolder;
}
.vs-input--input:focus {
  box-shadow: none !important;
}
.vs-pagination--li.is-current {
  box-shadow: none !important;
  border: none !important;
}
.mrgtop{
      margin-top: 48px !important;
}
</style>
