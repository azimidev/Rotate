import { Vue } from "vue-property-decorator";
import { Component } from "vue-property-decorator";

@Component
export default class Delay extends Vue {
  delay(seconds = 1) {
    return new Promise(resolve => setTimeout(() => resolve(), seconds * 1000));
  }
}
