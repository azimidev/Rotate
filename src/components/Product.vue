<template>
  <div class="is-inline-flex">
    <div class="column">
      <h1 class="subtitle">
        {{ product.name }}
      </h1>
    </div>
    <div class="column">
      <img
        src="@/assets/Aesop-Skin-In-Two-Minds-Facial-Cleanser-100mL-Large-835x962px.png"
        alt=""
      />
      <div class="control has-text-centered">
        <label class="radio">
          <input type="radio" name="answer" />
          Yes
        </label>
        <label class="radio">
          <input type="radio" name="answer" />
          No
        </label>
      </div>
    </div>
    <div class="column">
      <h3 class="title">
        {{ product.name }}
      </h3>
      <h4 class="subtitle">
        {{ product.description }}
      </h4>
      <hr />
      <h5>Price: ${{ product.price / 100 }}</h5>
      <button class="button is-fullwidth is-dark is-large mt-20">
        Add to your cart &mdash; ${{ product.price / 100 }}
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import ProductModel from "@/models/ProductModel";

@Component
export default class Product extends Vue {
  @Prop({ required: true }) private product!: Array<ProductModel>;
}
</script>

<style scoped lang="scss"></style>
