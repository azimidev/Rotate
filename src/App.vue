<template>
  <div id="app">
    <NavBar />
    <router-view />
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
