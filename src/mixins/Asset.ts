import { Vue } from "vue-property-decorator";
import { Component } from "vue-property-decorator";

@Component
export default class Asset extends Vue {
  protected asset(url: string): string {
    return require("../assets/" + url);
  }
}
