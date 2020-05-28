<template>
  <div></div>
</template>

<script>
import Product from "@/components/Product.vue";
import Cart from "@/components/Cart.vue";
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: { Product, Cart }
})
export default class Home extends Vue {}
</script>
