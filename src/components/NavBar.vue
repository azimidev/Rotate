<template>
  <nav
    class="navbar is-dark is-bold"
    role="navigation"
    aria-label="main navigation"
  >
    <div class="navbar-brand is-flex">
      <router-link class="navbar-item" to="/">Home</router-link>
      <router-link class="navbar-item" to="/cart">
        Cart
        <strong class="tag is-rounded is-primary ml-5">{{ total }}</strong>
      </router-link>
    </div>
  </nav>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class NavBar extends Vue {
  get total() {
    return this.$store.getters.cartQuantity;
  }
}
</script>

<style lang="scss" scoped>
.navbar-brand {
  justify-content: space-between;
}
</style>
