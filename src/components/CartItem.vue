<template>
  <tr>
    <td>{{ cart.name }}</td>
    <td>{{ currency(cart.price) }}</td>
    <td>
      <label class="select is-small">
        <select @change="updateQuantity($event.target.value)" name="quantity">
          <option :key="i" :selected="quantity === i" v-for="i in quantity + 5">
            {{ i }}
          </option>
        </select>
      </label>
    </td>
    <td>
      <a class="has-text-white display-on-hover" @click="removeFromCart(cart)">
        Remove
      </a>
    </td>
  </tr>
</template>

<script lang="ts">
import { Component, Mixins, Prop } from "vue-property-decorator";
import CartModel from "@/models/CartModel";
import Currency from "@/mixins/Currency";

@Component
export default class CartItem extends Mixins(Currency) {
  @Prop({ required: true }) cart!: CartModel;

  quantity = this.cart.quantity;

  mounted() {
    this.quantity = this.$store.getters.cart.find(
      (cart: CartModel) => cart.id === this.cart.id
    ).quantity;
  }

  updateQuantity(quantity: string) {
    this.$store.dispatch("updateItemQuantity", {
      product: this.cart,
      quantity: parseInt(quantity)
    });
  }

  removeFromCart(product: CartModel) {
    this.$store.dispatch("removeFromCart", product);
  }
}
</script>
