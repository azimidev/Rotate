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

    wrapper = mount(Home, {
      store,
      localVue,
      data() {
        return {
          activeProduct: products[0]
        };
      }
    });
  });

  test("should render active product upon mounting", () => {
    expect(wrapper.text()).toMatch(products[0].name);
  });

  test("should update product when switching", () => {
    wrapper
      .find("input[type=radio]")
      .setChecked(true)
      .then(() => {
        expect(wrapper.text()).toMatch(products[1].name);
      });
  });
});
