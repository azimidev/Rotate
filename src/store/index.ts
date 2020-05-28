import Vue from "vue";
import Vuex from "vuex";
import * as types from "./types";
import CartModel from "@/models/CartModel";

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== "production";

/* NOTE:
 *  I have used single file store because the app is simple,
 *  Otherwise, I would have used module approach.
 */

export default new Vuex.Store({
  strict: debug,

  state: {
    added: Array<CartModel>(),
    all: [
      {
        id: 1,
        name: "In Two Minds Facial Cleanser",
        description:
          "A gentle gel-based formulation that cleanses thoroughly without drying the skin or stripping its natural oils.",
        price: 399
      },
      {
        id: 2,
        name: "Product Two",
        description:
          "Watch TV like never before with the brand new curved screen technology",
        price: 1995
      }
    ]
  },

  actions: {
    addToCart({ commit }, product) {
      commit(types.ADD_TO_CART, { id: product.id });
    }
  },

  mutations: {
    [types.ADD_TO_CART](state, { id }) {
      const record = state.added.find(product => product.id === id);
      if (!record) {
        state.added.push({
          id,
          quantity: 1
        });
      } else {
        record.quantity++;
      }
    }
  },

  getters: {
    allProducts: state => state.all, // would need action/mutation if data fetched async
    getNumberOfProducts: state => (state.all ? state.all.length : 0),
    cartProducts: state => {
      return state.added.map(({ id, quantity }) => {
        const product = state.all.find(p => p.id === id);
        return {
          name: product?.name,
          price: product?.price,
          quantity
        };
      });
    }
  },

  modules: {}
});
