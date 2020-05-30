<template>
  <section class="hero is-dark is-bold">
    <div class="hero-body">
      <div class="container">
        <p v-show="!products.length">
          <b>Your cart is empty!</b>
          <br />
          <router-link class="button is-light mt-20" to="/">
            Go shopping
          </router-link>
        </p>
        <table class="table is-fullwidth" v-show="products.length">
          <thead>
            <tr>
              <td>Name</td>
              <td>Price</td>
              <td>Quantity</td>
              <td>&nbsp;</td>
            </tr>
          </thead>
          <tbody>
            <template v-for="(product, i) in products">
              <CartItem :cart="product" :key="i" />
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
import Currency from "@/mixins/Currency";
import CartItem from "@/components/CartItem.vue";
@Component({
  components: { CartItem }
})
export default class Cart extends Mixins(Currency) {
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
    // TODO: clear the cart
  }
}
</script>

<style lang="scss" scoped>
.table {
  background: transparent;
  color: lightgray;

  td {
    color: lightgray;
  }
}
</style>
