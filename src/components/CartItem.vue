<template>
  <tr>
    <td>{{ product.name }}</td>
    <td>{{ currency(product.price) }}</td>
    <td>
      <label class="select is-small">
        <select @change="updateQuantity($event.target.value)" name="quantity">
          <option :key="i" :selected="quantity === i" v-for="i in 5">
            {{ i }}
          </option>
        </select>
      </label>
    </td>
    <td>
      <a @click="removeFromCart(product)">Remove</a>
    </td>
  </tr>
</template>

<script lang="ts">
import { Component, Mixins, Prop } from "vue-property-decorator";
import ProductModel from "@/models/ProductModel";
import Currency from "../mixins/Currency";

@Component
export default class CartItem extends Mixins(Currency) {
  @Prop({ required: true }) product!: Array<ProductModel>;

  quantity = this.product.quantity;

  mounted() {
    this.quantity = this.$store.getters.cart.find(
      product => product.id === this.product.id
    ).quantity;
  }

  updateQuantity(quantity: number) {
    this.$store.dispatch("updateItemQuantity", {
      id: this.product.id,
      quantity: parseInt(quantity)
    });
  }

  removeFromCart(product: Array) {
    this.$store.dispatch("removeFromCart", product);
  }
}
</script>
