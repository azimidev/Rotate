import { Vue } from "vue-property-decorator";
import { Component } from "vue-property-decorator";

@Component
export default class Asset extends Vue {
  protected asset(url: string): string {
    const images = require.context("../assets/", false);
    return images("./" + url);
  }
}
