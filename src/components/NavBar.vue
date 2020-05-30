<template>
  <nav
    class="navbar is-light is-bold"
    role="navigation"
    aria-label="main navigation"
  >
    <div class="navbar-brand is-flex">
      <router-link class="navbar-item" to="/">Home</router-link>
      <a @click="toggleCart" class="navbar-item">
        Cart
        <strong class="tag is-rounded is-dark ml-5">{{ total }}</strong>
      </a>
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

  toggleCart() {
    return this.$store.dispatch("toggleCart", !this.$store.state.toggleCart);
  }
}
</script>

<style lang="scss" scoped>
.navbar-brand {
  justify-content: space-between;
}
</style>
