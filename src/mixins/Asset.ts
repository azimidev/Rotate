import Vue from "vue";
import Component from "vue-class-component";

@Component
export default class Asset extends Vue {
  asset(url: string) {
    const images = require.context("../assets/");
    return images("./" + url);
  }
}
