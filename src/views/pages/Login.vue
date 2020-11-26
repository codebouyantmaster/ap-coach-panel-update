<!-- =========================================================================================
    File Name: Login.vue
    Description: Login Page
    ----------------------------------------------------------------------------------------
     
========================================================================================== -->


<template>
  <div
    class="h-screen flex w-full bg-img vx-row no-gutter items-center justify-center"
    id="page-login"
  >
    <div class="vx-col sm:w-1/2 md:w-1/2 lg:w-3/4 xl:w-1/3 sm:m-0 m-4">
      <vx-card>
        <div slot="no-body" class="full-page-bg-color">
          <div class="vx-row no-gutter justify-center items-center">
            <!--div class="vx-col hidden lg:block lg:w-1/2">
              <img src="@/assets/images/pages/login.png" alt="login" class="mx-auto">
            </div-->
  <div v-if="message" class="text-center text-danger p-3" role="alert">
                    {{ message.errors }} 
                  </div>
            <div class="vx-col sm:w-full md:w-full lg:w-1/1 d-theme-dark-bg">
            
              <div class="p-8 login-tabs-container ">
              
                <div class="vx-card__title mb-4 text-center">
                    <a class="navbar-brand" href="/" aria-label="Terug naar de home pagina">
<svg xmlns="http://www.w3.org/2000/svg" width="64.609" viewBox="0 0 34.609 21.868"><g transform="translate(0 0)"><path d="M174.378,56.358q-1.071.433-2.151.843-3.662,1.392-7.322,2.788L157.523,62.8l-8.285,3.156L140.28,69.37l-.432.164a.221.221,0,0,1-.036.01l-.013-.009,0-.011q5.65-10.877,11.3-21.752c.01-.019.021-.037.032-.055l.011.005.008.007.007.009.005.009.006.009.015.028L157.052,58.7l0,.01.005.009.007.009.009.006c.021,0,.017-.018.017-.031v-11l.069-.006h7.819c.295,0,.589,0,.883.023a8.341,8.341,0,0,1,3.52,1,7.335,7.335,0,0,1,2.774,2.7,8.064,8.064,0,0,1,1.135,4.055,6.862,6.862,0,0,1-.054.848c-.01.078-.017.156-.026.243.046-.009.083-.015.12-.024l1.018-.227.022,0,.034.01Zm-11.8-3.743c0,.053,0,.095,0,.138V58.2c0,.026,0,.051,0,.076a.628.628,0,0,0,.009.065h2.3c.23,0,.459,0,.689-.018a4.658,4.658,0,0,0,.931-.157,2.044,2.044,0,0,0,.423-.156,3.457,3.457,0,0,0,.651-.455,1.68,1.68,0,0,0,.281-.325,3.11,3.11,0,0,0,.424-.982,2.9,2.9,0,0,0,.082-1.024,3.206,3.206,0,0,0-.416-1.268,2.467,2.467,0,0,0-1.133-1.035,3.226,3.226,0,0,0-.833-.243,5.643,5.643,0,0,0-.89-.063h-2.512Zm-10.121,9a.121.121,0,0,0,0-.028l-1.257-2.437c-.013-.026-.028-.051-.042-.075l-.007-.008-.014,0-1.663,3.2a.292.292,0,0,0,.052,0Z" transform="translate(-139.799 -47.699)"></path><path d="M173.132,57.043a1.5,1.5,0,0,1-.05.272,8.564,8.564,0,0,1-1.127,2.73,7.325,7.325,0,0,1-2.421,2.377,7.642,7.642,0,0,1-2.081.854,9,9,0,0,1-1.152.209,10.039,10.039,0,0,1-1.15.068h-2.545c0,.026-.008.047-.009.067s0,.058,0,.086v5.719a.434.434,0,0,1-.007.125c-.106.017-5.027.024-5.492.008-.017-.029-.038-.061-.056-.1q-.608-1.163-1.213-2.327l-.378-.725-.034-.068c.015-.011.026-.02.038-.027Z" transform="translate(-139.799 -47.699)"></path></g></svg>
</a>
                  <h4 class="mb-4 ">Login</h4>
                  <p>Welcome back, please login to your account.</p>
                </div>
              
                <div>
                    <form name="form">
                  <vs-input
                    name="email"
                    icon-no-border
                    icon="icon icon-user"
                    icon-pack="feather"
                    label-placeholder="Email"
                    v-model="user.email"
                    v-validate="'required'"
                    class="w-full"
                  />
                  <div
                    v-if="errors.has('email')"
                    class="text-danger"
                    role="alert"
                  >
                    Email Address is required!
                  </div>

                  <vs-input
                    type="password"
                    icon-no-border
                    icon="icon icon-lock"
                    name="password"
                    icon-pack="feather"
                    label-placeholder="Password"
                    v-model="user.password"
                    v-validate="'required'"
                    class="w-full mt-6"
                  />
                  <div
                    v-if="errors.has('password')"
                    class="text-danger"
                    role="alert"
                  >
                    Password is required!
                  </div>

                  <div class="flex flex-wrap justify-between my-5">
                    <vs-checkbox v-model="checkbox_remember_me" class="mb-3"
                      >Remember Me</vs-checkbox
                    >
                    <router-link to="/pages/forgot-password">Forgot Password?</router-link>
                  </div>
                 <vs-button @click.prevent="handleLogin" class="btn-block" :disabled="loading">
                    <span
                      v-show="loading"
                      class="spinner-border spinner-border-sm"
                    ></span>
                    <span>Login</span>
                 </vs-button>

                    </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </vx-card>
    </div>
  </div>
</template>



<script>
import User from "../../models/user";

export default {
  name: "LoginPage",
  data() {
    return {
      user: new User("", ""),
      loading: false,
      message: "",
      checkbox_remember_me: false
    };
  },
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    },
  },
  created() {
    if (this.loggedIn) {
      this.$router.push("/");
    }
  },
  methods: {
    handleLogin() {
      this.loading = true;
      this.$validator.validateAll().then((isValid) => {
        if (!isValid) {
          this.loading = false;
          return;
        }

        if (this.user.email && this.user.password) {
          this.$store.dispatch("auth/login", this.user).then(
            (response) => {
              //console.log( JSON.stringify(response.data.access_token));
              // localStorage.setItem('userInfo', JSON.stringify(response.data));
               
            this.message=['errors',"Login Successfully"];
             this.$router.push("/");
            },
            (error) => {
              this.loading = false;
              this.message =
                (error.response && error.response.data) ||
                error.message ||
                error.toString();
            }
          );
        }
      });
    },
  },
};
</script>


<style lang="scss">
#page-login {
  .social-login-buttons {
    .bg-facebook {
      background-color: #1551b1;
    }
    .bg-twitter {
      background-color: #00aaff;
    }
    .bg-google {
      background-color: #4285f4;
    }
    .bg-github {
      background-color: #333;
    }
  }
}
</style>
