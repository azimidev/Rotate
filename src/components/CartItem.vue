<template>
  <tr>
    <td>{{ product.name }}</td>
    <td>{{ currency(product.price) }}</td>
    <td>
      <label class="select is-small">
        <select name="quantity" @change="updateQuantity(product.quantity)">
          <option v-for="i in 5" :key="i" :selected="product.quantity === i">
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

  updateQuantity(quantity: number) {
    console.log(quantity);
  }

  removeFromCart(product: Array) {
    this.$store.dispatch("removeFromCart", product);
  }
}
</script>

<style scoped lang="scss"></style>
