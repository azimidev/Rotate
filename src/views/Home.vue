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
              name="answer"
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
  products: Array<ProductModel> = this.$store.getters.products;
  activeProduct: ProductModel = this.products[0];

  updateProduct(product: ProductModel) {
    this.activeProduct = product;
  }
}
</script>
