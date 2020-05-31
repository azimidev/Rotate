import Vue from "vue";
import Vuex from "vuex";
import VuexPersist from "vuex-persist";
import * as types from "./types";
import CartModel from "@/models/CartModel";
import ProductModel from "@/models/ProductModel";
// import Axios from "axios";

Vue.use(Vuex);

// debug the app based on environment
const debug = process.env.NODE_ENV !== "production";

// Use Vuex Persist to persist in local storage
const vuexPersist = new VuexPersist({
  key: "rotate-app",
  storage: window.localStorage
});

/* NOTE:
 *  I have used single file store because the app is simple,
 *  Otherwise, I would have used module approach.
 */

export default new Vuex.Store({
  strict: debug,
  // plugins: [vuexPersist.plugin], // --> with this plugin we store in local storage
  state: {
    cart: Array<CartModel>(), // --> this is our basic cart, I store product ID and quantity for each product
    cartQuantity: 0, // --> this is the total number items in the cart
    toggleCart: false, // --> with this we can toggle showing the cart on and off
    products: require("../mocks/products.json") // --> mock API or we could use action and Axios to call the API
    // products: Array<ProductModel>()
  },

  getters: {
    products: state => state.products,
    cartQuantity: state => state.cartQuantity,
    cart: state => state.cart,

    cartProducts: state => {
      return state.cart.map(({ id, quantity }: CartModel) => {
        const product = state.products.find((p: ProductModel) => p.id === id);
        return { ...product, quantity };
      });
    },

    toggleCart: state => state.toggleCart
  },

  mutations: {
    [types.SET_PRODUCTS](state, products) {
      state.products = products;
    },
    [types.ADD_TO_CART](state, { id }) {
      const record = state.cart.find(product => product.id === id);
      if (!record) {
        state.cart.push({
          id,
          quantity: 1
        });
      } else {
        record.quantity++;
      }
    },

    [types.UPDATE_CART_QUANTITY](state, { quantity }) {
      state.cartQuantity = quantity;
    },

    [types.REMOVE_FROM_CART](state, { product }) {
      // we find the index of the product by finding it via product id:
      const index = state.cart.map(item => item.id).indexOf(product.id);
      // splice/remove it from the cart by 1 item
      state.cart.splice(index, 1);
      // adjust the cart quantity
      state.cartQuantity -= product.quantity;
    },

    [types.UPDATE_ITEM_QUANTITY](state, { product, quantity }) {
      const index = state.cart.findIndex(item => item.id === product.id);
      // if quantity selected is greater than the quantity already in the cart
      if (quantity > product.quantity) {
        // subtract the quantity selected from the quantity in the cart
        // and add it to the cart quantity
        state.cartQuantity += quantity - product.quantity;
      }
      // else if quantity selected is less than the quantity already in the cart
      else if (quantity < product.quantity) {
        // subtract the quantity in the cart from the quantity selected
        // and subtract it from the cart quantity
        state.cartQuantity -= product.quantity - quantity;
      }
      // adjust the cart quantity
      state.cart[index].quantity = quantity;
    },

    [types.TOGGLE_CART](state, toggle) {
      state.toggleCart = toggle;
    }
  },

  actions: {
    // fetchProducts({ commit }) {
    //   return new Promise(resolve => {
    //     Axios.get("http://www.mocky.io/v2/5ed3d303340000580001f4eb").then(
    //       ({ data }) => {
    //         commit(types.SET_PRODUCTS, data);
    //         resolve(data);
    //       }
    //     );
    //   });
    // },
    addToCart({ commit }, product) {
      commit(types.ADD_TO_CART, { id: product.id });
    },
    updateCartItems({ commit }, quantity) {
      commit(types.UPDATE_CART_QUANTITY, { quantity });
    },
    removeFromCart({ commit }, product) {
      commit(types.REMOVE_FROM_CART, { product });
    },
    updateItemQuantity({ commit }, { product, quantity }) {
      commit(types.UPDATE_ITEM_QUANTITY, { product, quantity });
    },
    toggleCart({ commit }, toggle) {
      commit(types.TOGGLE_CART, toggle);
    }
  },

  modules: {}
});
