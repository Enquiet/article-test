<template>
  <div class="article-page">
    <img :src="articleData.image" class="article-page__img" />
    <div class="article-page__title">
      {{ articleData.title }}
    </div>
    <div class="article-page__date">
      {{ articleData.date }}
    </div>
    <div class="article-page__wrapper">
      <div class="article-page__inner">
        <EmodjiAction
          v-for="reaction in articleData.reactions"
          :key="reaction.name"
          :emodji="reaction.name"
          :couner="reaction.couner"
          :articleId="articleData.id"
        />
      </div>
      <ReactionsList :article-id="articleData.id"  class="article-page__reactions-list"/>
    </div>
    <div class="article-page__decription">
      {{ articleData.description }}
    </div>
    <RouterLink
      :to="'/'"
      class="article-page__link"
    >
    ← назад
    </RouterLink>
  </div>
</template>
<script>
  import ReactionsList from '@/components/ReactionsList.vue';
  import EmodjiAction from '@/components/EmodjiAction.vue';

  import { mapActions, mapState } from 'vuex'
  export default {
    name: 'AticlePage',
    components: {
      EmodjiAction,
      ReactionsList
    },
    computed: {
      ...mapState('article', ['articleData'])
    },

    methods: {
      ...mapActions({
        getArticle: 'article/getArticle'
      }),
    },

    watch: {
      // watch нужен для того чтоб могли спомощью URL строки менять страницы и подставлять нужную статью
      '$route.params.id': {
        handler() {
          this.getArticle(Number(this.$route.params.id));
        },
        immediate: true
      }
    }
  }
</script>
<style lang="scss">
.article-page {
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 10px;

  &:hover {
    .article-page__reactions-list {
      background: grey;
      * {
        background: grey;
      }
    }
  }
  > * {
    margin-bottom: 10px;
  }

  &__title {
    font-weight: 700;
    font-size: 18px;
  }

  &__date {
    padding: 0px 5px;
    color: #8c8c8c;
    font-size: 12px;
    margin-bottom: 10px;
  }

  &__wrapper {
    display: flex;
    align-items: flex-start;
  }

  &__inner {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    flex: 0 0 200px;
  }

  &__link {
    color: #8c8c8c;
    text-transform: none;
  }
}
</style>
