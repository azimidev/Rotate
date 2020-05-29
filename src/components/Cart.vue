<template>
  <table class="table is-striped" v-show="products.length">
    <thead>
      <tr>
        <td>Name</td>
        <td>Price</td>
        <td>Quantity</td>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(p, i) in products" :key="i">
        <td>{{ p.name }}</td>
        <td>${{ p.price }}</td>
        <td>{{ p.quantity }}</td>
      </tr>
      <tr>
        <td><b>Total:</b></td>
        <td></td>
        <td>
          <b>${{ total }}</b>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Cart extends Vue {
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
    alert("Pay us £" + this.total);
  }
}
</script>

<style scoped lang="scss"></style>
