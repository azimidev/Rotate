<template>
  <div class="is-inline-flex">
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
      >
        Add to your cart &mdash; {{ currency(product.price) }}
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import ProductModel from "@/models/ProductModel";
import CartModel from "@/models/CartModel";

@Component
export default class Product extends Vue {
  @Prop({ required: true }) private product!: Array<ProductModel>;

  getImg(product: string) {
    const images = require.context("../assets/");
    return images("./" + product);
  }

  currency(price: number) {
    const currency = "£";
    return currency + price / 100;
  }

  addToCart(product: ProductModel) {
    // Add the product to the cart
    this.$store.dispatch("addToCart", product);

    // Update total
    this.$store.dispatch(
      "updateCartItems",
      this.$store.getters.cartProducts.reduce(
        (accum: number, item: CartModel) => {
          return accum + item.quantity;
        },
        0
      )
    );
  }
}
</script>

<style scoped lang="scss"></style>
