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
