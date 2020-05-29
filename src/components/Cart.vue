<template>
  <div></div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Cart extends Vue {
  get total() {
    return this.$store.getters.cartItems;
  }
}
</script>

<style scoped lang="scss"></style>
