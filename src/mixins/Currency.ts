import { Vue } from "vue-property-decorator";
import { Component } from "vue-property-decorator";

@Component
export default class Currency extends Vue {
  currency(price: number) {
    const currency = "£";
    return currency + price / 100;
  }
}
