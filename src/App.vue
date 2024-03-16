<template>
  <div class="wrap">
    <div class="wrap-inner">
      
      <CommonHeader />
      <router-view></router-view>
      <CommonFooter />

    </div>
  </div>
</template>

<script>
import CommonHeader from './components/CommonHeader.vue'
import CommonFooter from './components/CommonFooter.vue'

export default {
  name: 'App',
  components: {
    CommonHeader,
    CommonFooter
  }
}
</script>

<style>
  @import "./assets/css/common.css";
  @import "./assets/css/content.css";
</style>
