import { createLocalVue, mount } from "@vue/test-utils";
import Vuex from "vuex";
import Home from "@/views/Home.vue";
import ProductModel from "../../src/models/ProductModel";

describe("Home.vue", () => {
  const localVue = createLocalVue();
  localVue.use(Vuex);
  let wrapper: any;
  let store: any;
  let getters: any;
  const products: Array<ProductModel> = require("@/apis/products.json");

  beforeEach(() => {
    getters = {
      products: () => products
    };
    store = new Vuex.Store({
      getters
    });
  });

  test("renders props.product when passed", () => {
    wrapper = mount(Home, {
      store,
      localVue,
      data() {
        return {
          activeProduct: products[0]
        };
      }
    });
    expect(wrapper.text()).toMatch(products[0].name);
  });
});
