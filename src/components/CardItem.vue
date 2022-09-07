<template>
  <div class="card-item">
    <div class="card-item__date">
      {{ data.date }}
    </div>
    <img :src="data.image" class="card-item__img" />
    <div @click="$router.push({ name: 'article', params: { id: data.id } })" class="card-item__title">
      {{ data.title }}
    </div>
    <div class="card-item__announcement">
      {{ data.announcement }}
    </div>
    <div class="card-item__wrapper">
      <div class="card-item__inner">
        <EmodjiAction
          v-for="reaction in data.reactions"
          :key="reaction.name"
          :emodji="reaction.name"
          :couner="reaction.couner"
          :article-id="data.id"
        />
      </div>
      <ReactionsList :article-id="data.id"  class="card-item__reactions-list"/>
    </div>
  </div>
</template>
<script>
  import ReactionsList from '@/components/ReactionsList.vue';
  import EmodjiAction from './EmodjiAction.vue';
  export default {
    name: 'ItemList',
    components: {
      EmodjiAction,
      ReactionsList
    },
    props: {
      data: {
        type: Object,
        default: () => {}
      }
    },
  }
</script>
<style lang="scss">
  .card-item {
    padding: 10px 0;
    max-width: 100%;
    @media(min-width: 768px) {
      max-width: 320px;
    }

    &:hover {
      .card-item__reactions-list {
        background: grey;
        * {
          background: grey;
        }
      }
    }

    &__date {
      padding: 0px 5px;
      color: #8c8c8c;
      font-size: 12px;
      margin-bottom: 10px;
    }

    &__img {
      width: 100%;
      height: auto;
      margin-bottom: 10px;

    }

    &__title {
      font-weight: 700;
      font-size: 18px;
      margin-bottom: 10px;
      cursor: pointer;
    }

    &__announcement {
      font-size: 14px;
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
    }

    &__reactions-list {
      margin-left: auto;
    }
  }
</style>
