<template>
  <section class="hero is-fullheight is-primary is-bold">
    <div class="hero-body">
      <div class="container">
        <h1 class="title">Your Cart</h1>
        <p v-show="!products.length">
          <b>Your cart is empty!</b>
          <br />
          <router-link class="button is-light mt-20" to="/">
            Go shopping
          </router-link>
        </p>
        <table class="table is-striped" v-show="products.length">
          <thead>
            <tr>
              <td>Name</td>
              <td>Price</td>
              <td>Quantity</td>
              <td></td>
            </tr>
          </thead>
          <tbody>
            <template v-for="(product, i) in products">
              <CartItem :product="product" :key="i" />
            </template>
            <tr>
              <td><b>Total:</b></td>
              <td></td>
              <td>
                <b>{{ currency(total) }}</b>
              </td>
            </tr>
          </tbody>
        </table>
        <p>
          <button
            v-show="products.length"
            class="button is-light"
            @click="checkout"
          >
            Checkout
          </button>
        </p>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Mixins } from "vue-property-decorator";
import Currency from "../mixins/Currency";
import CartItem from "@/components/CartItem.vue";
@Component({
  components: { CartItem }
})
export default class Cart extends Mixins(Currency) {
  get cartItems() {
    return this.$store.getters.cartItems;
  }

  get products() {
    return this.$store.getters.cartProducts;
  }

  get total() {
    return this.products.reduce(
      (total: number, p: { price: number; quantity: number }) => {
        return total + p.price * p.quantity;
      },
      0
    );
  }

  checkout() {
    alert(`Please pay us ${this.currency(this.total)}`);
  }
}
</script>
