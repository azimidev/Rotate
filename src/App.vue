<template>
  <div id="app">
    <transition name="slide">
      <Cart v-if="toggleCart" />
    </transition>
    <NavBar />
    <transition name="fade">
      <router-view />
    </transition>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import { Component, Vue } from "vue-property-decorator";
import Cart from "@/components/Cart";

@Component({
  components: { Cart, NavBar }
})
export default class App extends Vue {
  get toggleCart() {
    return this.$store.getters.toggleCart;
  }
}
</script>

<style lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.slide-enter-active {
  -moz-transition-duration: 0.5s;
  -webkit-transition-duration: 0.5s;
  -o-transition-duration: 0.5s;
  transition-duration: 0.5s;
  -moz-transition-timing-function: ease;
  -webkit-transition-timing-function: ease;
  -o-transition-timing-function: ease;
  transition-timing-function: ease;
}

.slide-leave-active {
  transition-duration: 0.5s;
  transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
}

.slide-enter-to,
.slide-leave {
  max-height: 100vw;
  overflow: hidden;
}

.slide-enter,
.slide-leave-to {
  overflow: hidden;
  max-height: 0;
}
.mt-10 {
  margin-top: 10px;
}
.mt-20 {
  margin-top: 20px;
}
.ml-5 {
  margin-left: 5px;
}
</style>
