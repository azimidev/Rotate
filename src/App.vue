<template>
  <div id="app">
    <NavBar />
    <transition name="fade">
      <router-view />
    </transition>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: { NavBar }
})
export default class App extends Vue {}
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
