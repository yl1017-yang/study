<template>
  <v-app id="app">
    <CommonHeader />

    <router-view></router-view>

  </v-app>
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
