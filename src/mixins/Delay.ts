import Vue from "vue";
import Component from "vue-class-component";

@Component
export default class Delay extends Vue {
  delay(seconds = 1) {
    return new Promise(resolve => setTimeout(() => resolve(), seconds * 1000));
  }
}
