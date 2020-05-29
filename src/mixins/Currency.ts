import Vue from "vue";
import Component from "vue-class-component";

@Component
export default class Currency extends Vue {
  currency(price: number) {
    const currency = "£";
    return currency + price / 100;
  }
}
