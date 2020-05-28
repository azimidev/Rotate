<template>
  <section>
    <div class="hero-body is-fullheight">
      <div class="container">
        <div class="columns" v-for="product in products" :key="product.id">
          <Product :product="product" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Product from "@/components/Product.vue";
import Cart from "@/components/Cart.vue";
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: { Product, Cart }
})
export default class Home extends Vue {
  get products() {
    return this.$store.getters.products;
  }

  get getNumberOfProducts() {
    return this.$store.getters.getNumberOfProducts;
  }
}
</script>
