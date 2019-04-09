<template>
  <div>
    <h1>axios test</h1>
    <ul>
      <li v-for="u in users">{{ u }}</li>
    </ul>
  </div>
</template>
<style scoped>
</style>
<script>
import api from "../api";
export default {
  data() {
    return {
      users: []
    };
  },
  created() {
    api.user.getUserList(10).then(data => {
      this.users = this.users.concat(data);
    });
  }
};
</script>
