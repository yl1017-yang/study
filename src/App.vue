<template>
  <!-- <v-app id="app"> -->
    <div class="wrap">
      <div class="wrap-inner">
      
        <CommonHeader />
        <router-view></router-view>

    </div>
  </div>
  <!-- </v-app> -->
</template>

<script>
import CommonHeader from './components/CommonHeader.vue'

export default {
  name: 'App',
  components: {
    CommonHeader
  }
}
</script>

<style>
  @import "./assets/css/common.css";
  @import "./assets/css/content.css";
</style>
