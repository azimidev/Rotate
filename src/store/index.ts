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
        name: "COBOL 101 vintage",
        description: "Learn COBOL with this vintage programming book",
        price: 399
      },
      {
        id: 2,
        name: "Sharp C2719 curved TV",
        description:
          "Watch TV like never before with the brand new curved screen technology",
        price: 1995
      },
      {
        id: 3,
        name: "Remmington X mechanical keyboard",
        description:
          "Excellent for gaming and typing, this Remmington X keyboard " +
          "features tactile, clicky switches for speed and accuracy",
        price: 595
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
