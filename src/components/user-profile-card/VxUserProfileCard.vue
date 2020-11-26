<template>
  <div class="profile-dashbord">
    <div
      class="flex user-profile-bg items-center"
      :style="{
        'background-image':
          'url(' + require('../../assets/images/user-profile-bg.png') + ')'
      }"
    >
      <div class="user-profile">
        <img
          :src="profilePic"
          class="rounded-full shadow-md cursor-pointer block wh-24"
        />
      </div>
      <div class="user-profile-block">
        <h2>Welcome back</h2>
        <h3>{{ userName }}</h3>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'user-profile-dashboard',
  props: {
    userName: { type: String, default: 'Coach' },
    profilePic: {
      type: String,
      default: require('@/assets/images/portrait/small/avatar-s-4.jpg')
    }
  }
}
</script>
<style>
.wh-24 {
  height: 6rem;
  width: 6rem;
}
.profile-dashbord {
  /* background: linear-gradient(180deg, #049cf5 0%, #0041e5 67.71%, #0041e5 100%); */
  background: linear-gradient(180deg, #049cf5 0%, #4a7dff 67.71%, #4370e1 100%);
  /* opacity: 0.56; */
  border-radius: 10px;
  position: relative;
}
/* .user-profile-bg::after {
  position: absolute;
  content: "";
  left: 0px;
  top: 0px;
  height: 100%;
  width: 100%;
  background: #c8d9ff78;
  pointer-events: none;

} */
.profile-dashbord .user-profile-bg {
  background-size: cover;
  padding: 26px;
  border-radius: 10px;
}
.profile-dashbord .user-profile {
  z-index: 1;
}
.profile-dashbord .user-profile-block {
  padding: 0px 32px;
}
.profile-dashbord .user-profile-block h2 {
  font-family: Futura Md BT !important;
  font-style: normal;
  font-weight: normal !important;
  font-size: 37.23px;
  line-height: 45px;
  display: flex;
  align-items: center;
  letter-spacing: 0.25px;
  color: #ffffff;
}
.profile-dashbord .user-profile-block h3 {
  font-family: Futura Md BT;
  font-style: normal;
  font-weight: 500;
  font-size: 26.28px;
  color: #ffffff;
  line-height: 32px;
}
</style>
