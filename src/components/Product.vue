<template>
  <div class="columns">
    <div class="column">
      <h1 class="subtitle">
        {{ product.name }}
      </h1>
    </div>
    <div class="column">
      <img :src="getImg(product.img)" :alt="product.img" />
    </div>
    <div class="column">
      <h3 class="title">
        {{ product.name }}
      </h3>
      <h4 class="subtitle">
        {{ product.description }}
      </h4>
      <hr />
      <h5>Price: {{ currency(product.price) }}</h5>
      <button
        class="button is-fullwidth is-dark is-large mt-20"
        @click="addToCart(product)"
        :disabled="disabled"
      >
        <span v-if="!disabled"
          >Add to your cart - {{ currency(product.price) }}</span
        ><span v-else>Adding to cart</span>
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Mixins, Prop } from "vue-property-decorator";
import ProductModel from "@/models/ProductModel";
import CartModel from "@/models/CartModel";
import Delay from "@/mixins/Delay";

@Component
export default class Product extends Mixins(Delay) {
  @Prop({ required: true }) product!: Array<ProductModel>;

  disabled = false;

  getImg(product: string) {
    const images = require.context("../assets/");
    return images("./" + product);
  }

  currency(price: number) {
    const currency = "£";
    return currency + price / 100;
  }

  async addToCart(product: ProductModel) {
    // disable the button
    this.disabled = true;

    // Add the product to the cart
    await this.$store.dispatch("addToCart", product);

    // Update total
    await this.$store.dispatch(
      "updateCartItems",
      this.$store.getters.cartProducts.reduce(
        (accum: number, item: CartModel) => {
          return accum + item.quantity;
        },
        0
      )
    );

    // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
    // @ts-ignore
    await this.delay(2);
    // enable the button
    this.disabled = false;
  }
}
</script>

<style scoped lang="scss"></style>
