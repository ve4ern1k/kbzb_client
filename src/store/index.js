import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    basket: []
  },
  getters: {
    basket(state) {
      return state.basket
    }
  },
  mutations: {
    updateBasket(state, basketNew) {
      state.basket = [...basketNew]
    },
    addBasket(state, newValue) {
      const productExist = state.basket.some(obj => obj.id === newValue.id)

      if (!productExist) {
        const newArray = state.basket;
        newArray.push(newValue);
        state.basket = [...newArray];
      }
    },
    deleteBasket(state, newValue) {
      if (newValue.counter === 0) {
        const newArray = state.basket;
        const newArray1 = newArray.filter(el => el.id !== newValue.id);
        state.basket = [...newArray1];
      }
    },
    clearBasket(state) {
      state.basket = [];
    }
  },
  actions: {
  },
  modules: {
  }
})
