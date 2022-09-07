<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
import { mapActions } from 'vuex';
export default {
  name: "Main",
  created() {
    this.getArticleList();
  },
  methods: {
    ...mapActions({
      getArticleList: 'article/getArticleList',
    })
  }
};
</script>
