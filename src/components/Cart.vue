<template>
  <section class="hero is-black">
    <a @click.prevent="closeCart" class="delete is-large"></a>
    <div class="hero-body">
      <div class="container">
        <p v-show="!products.length">
          <b>Your cart is empty!</b>
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
import Delay from "@/mixins/Delay";
@Component({
  components: { CartItem }
})
export default class Cart extends Mixins(Currency, Delay) {
  async mounted() {
    if (!this.products.length) {
      await this.delay(1);
      this.closeCart();
    }
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

  closeCart() {
    this.$store.dispatch("toggleCart", false);
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
.delete {
  position: absolute;
  right: 0;
  background-color: transparent;
}
</style>
