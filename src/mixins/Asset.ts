import { Vue } from "vue-property-decorator";
import { Component } from "vue-property-decorator";

@Component
export default class Asset extends Vue {
  asset(url: string) {
    const images = require.context("../assets/");
    return images("./" + url);
  }
}
