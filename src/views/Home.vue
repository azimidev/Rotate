<template>
  <section class="hero is-fullheight is-vcentered">
    <div class="hero-body">
      <div class="container">
        <Product :product.sync="activeProduct" />
        <div class="control has-text-centered">
          <label
            class="radio"
            v-for="(product, index) in products"
            :key="index"
          >
            <input
              type="radio"
              @change="updateProduct(product)"
              :checked="product.id === activeProduct.id"
            />
            {{ product.size }}
          </label>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Product from "@/components/Product.vue";
import ProductModel from "@/models/ProductModel";

@Component({
  components: { Product }
})
export default class Home extends Vue {
  private activeProduct: ProductModel = this.products[0];

  private get products(): Array<ProductModel> {
    return this.$store.getters.products;
  }

  private updateProduct(product: ProductModel): void {
    this.activeProduct = product;
  }
}
</script>

<style lang="scss">
body,
.navbar {
  background-color: #fffef2;
}
</style>
