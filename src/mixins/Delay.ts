import { Vue } from "vue-property-decorator";
import { Component } from "vue-property-decorator";

@Component
export default class Delay extends Vue {
  protected delay(seconds = 1): Promise<void> {
    return new Promise(resolve => setTimeout(() => resolve(), seconds * 1000));
  }
}
