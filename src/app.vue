<template>
  <div>
    <h1>APP</h1>
    <span style="font-weight: 100;">{{ app_env }}</span>
    <span>baseApi: [{{ baseapi }}]</span>
    <router-view></router-view>
  </div>
</template>
<style scoped>
</style>
<script>
// import { mapGetters, mapState, mapActions } from "vuex";
import api from './api'
export default {
  data() {
    return {
      app_env:'',
      baseapi:''
    }
  },
  mounted(){
    this.app_env = api.env
    this.baseapi = api.baseapi
    console.log(api)
  }
};
</script>
