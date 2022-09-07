<template>
  <div class="main">
    <CardItem
      v-for="item in articleList"
      :key="item.id"
      :data="item"
    />
  </div>
</template>
<script>
import CardItem from '@/components/CardItem';
import { mapState } from 'vuex';
export default {
  name: "Main",
  components: {
    CardItem
  },
  computed: {
    ...mapState('article', ['articleList'])
  },
};
</script>
<style lang="scss">
.main {
    display: flex;
    max-width: 768px;
    margin: 0 auto;
    flex-wrap: wrap;
    justify-content: space-between;
    @media(min-width: 768px) {
      padding: 10px 20px;
      max-width: 1100px;
    }
  }
</style>
