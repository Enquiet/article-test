<template>
  <div class="reactions-list">
    <EmodjiAction
      :emodji="emodjiList[0]"
      :is-couner="false"
      :articleId="articleId"
    />
    <div class="reactions-list__wrapper">
      <EmodjiAction
        v-for="(emodji, index) in dropDownEmodjiList"
        :key="index"
        :emodji="emodji"
        :is-couner="false"
        :articleId="articleId"
    />
    </div>
  </div>
</template>
<script>
  import EmodjiAction from '@/components/EmodjiAction.vue';
  export default {
    name: 'ReactionsList',
    components: {
      EmodjiAction
    },
    props: {
      articleId: {
        type: Number,
        default: 0
      }
    },
    data() {
      return {
        isOpen: false,
        emodjiList: [
          'Fire',
          'RedHeart',
          'PartyPopper',
          'FaceWithSmilingEyes',
          'FaceScreamingInFear',
          'FaceWithStarryEyes',
          'CryingFace',
          'SkinToneYellow',
          'PileOfPoop',
          'VomitingFace',
        ]
      }
    },

    computed: {
      dropDownEmodjiList() {
        return this.emodjiList.slice(1)
      }
    }
  }
</script>
<style lang="scss">
  .reactions-list {
    position: relative;
    width: 20px;

    .emodji-action{
      &:not(:last-child) {
        margin-bottom: 5px;
      }
    }
    &:hover {
      .reactions-list__wrapper {
        display: block;
      }
    }
    &__wrapper {
      position: absolute;
      display: none;
    }
  }
</style>
