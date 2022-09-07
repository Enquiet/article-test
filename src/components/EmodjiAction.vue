<template>
  <div class="emodji-action">
    <button class="emodji-action__button" @click="addReaction">
      <img :src="require(`@/assets/image/emodji/${emodji}.svg`)" />
    </button>
    <div v-if="isCouner" class="emodji-action__couner">
      {{ couner }}
    </div>
  </div>
</template>
<script>
  import { mapActions } from 'vuex';
  export default {
    name: 'EmodjiAction',
    props: {
      emodji: {
        type: String,
        required: true
      },
      couner: {
        type: Number,
        default: 0
      },

      isCouner: {
        type: Boolean,
        default: true
      },
      articleId: {
        type: Number,
        default: 0
      }
    },

    methods: {
      ...mapActions({
        addReactionArticle: 'article/addReactionArticle'
      }),

      addReaction() {
        this.addReactionArticle({
          id: this.articleId,
          emodji: this.emodji
        })
      }
    }
  }
</script>
<style lang="scss">
.emodji-action {
  display: flex;
  align-items: center;
  &__button {
    width: 20px;
    height: 20px;
    padding: 0;
    border: none;
    background: transparent;
  }
}
</style>
