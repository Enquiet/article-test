import articleApi from "@/api/articleApi"
const state = () => ({
  articleList: [],
  articleData: {}
})

const actions = {
  async getArticleList ({ commit, dispatch }) {
    try {
      const list = await articleApi();
      commit('GET_ARTICLE_LIST', list );
      // После мутации загружаем сохарненые реакции
      // либо в компаненте пользоваться $nextTick
      dispatch('loadSaveReaction')
    } catch (e) {
      console.log(e)
    }
  },


  getArticle({ commit, state }, id) {
    const article = state.articleList.find(item => item.id === id);
    commit('GET_ARTICLE', article);
  },

  addReactionArticle({ commit, dispatch }, reaction) {
    commit('ADD_REACTION_ARTICLE', reaction);
    dispatch('saveReactionArticle')
  },

  saveReactionArticle({ state }) {
      // сохраняем наши реакции в локал сторедж но перед этим размапим массив чтоб сохранить только реакции
    const articleReactionList = state.articleList
    .map(item => {
      return {
        id: item.id,
        reactions: item.reactions
      }
    })
    .filter(item => item.reactions.length)
    localStorage.setItem('articleReactionList', JSON.stringify(articleReactionList));
  },

  loadSaveReaction({ commit }) {
    const saveReactionsArticle = JSON.parse(localStorage.getItem('articleReactionList'))
    if (!saveReactionsArticle) return;
    commit('LOAD_SAVED_REACTIONS', saveReactionsArticle)
  }
}

const mutations = {
  GET_ARTICLE_LIST (state, list) {
    state.articleList = list;
  },

  GET_ARTICLE(state, article) {
    state.articleData = article;
  },

  ADD_REACTION_ARTICLE(state, reaction) {
    const findedArticle = state.articleList.find(item => item.id === reaction.id);
    const findedReaction = findedArticle.reactions.find(item => item.name === reaction.emodji);
    findedReaction ? findedReaction.couner += 1 : findedArticle.reactions.push({ name: reaction.emodji, couner: 1 });
  },

  LOAD_SAVED_REACTIONS(state, saveReactionsArticle) {
    // Добавляем сохарненые реакции
    saveReactionsArticle.forEach(resctionArticle => {
      const findedArticle = state.articleList.find(article => resctionArticle.id === article.id);
      if (findedArticle) {
        findedArticle.reactions = [...resctionArticle.reactions];
      }
    });
  }


}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}
