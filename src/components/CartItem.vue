<template>
  <tr class="display-link-on-hover">
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

  private quantity = this.cart.quantity;

  mounted(): void {
    this.quantity = this.$store.getters.cart.find(
      (cart: CartModel) => cart.id === this.cart.id
    ).quantity;
  }

  private updateQuantity(quantity: string): void {
    this.$store.dispatch("updateItemQuantity", {
      product: this.cart,
      quantity: parseInt(quantity)
    });
  }

  private removeFromCart(product: CartModel): void {
    this.$store.dispatch("removeFromCart", product);
  }
}
</script>

<style lang="scss" scoped>
.display-on-hover {
  visibility: hidden;
  opacity: 0;
  transition: visibility 0.1s linear, opacity 0.1s linear;
}
.display-link-on-hover:hover {
  .display-on-hover {
    visibility: visible;
    opacity: 1;
  }
}
</style>
