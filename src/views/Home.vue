<template>
  <section>
    <div class="hero-body is-fullheight">
      <div class="container">
        <div class="columns">
          <div class="column is-4">
            <h1 class="subtitle">
              Product name
            </h1>
          </div>
          <div class="column is-4">
            <img
              src="@/assets/Aesop-Skin-In-Two-Minds-Facial-Cleanser-100mL-Large-835x962px.png"
              alt=""
            />
            <div class="control has-text-centered">
              <label class="radio">
                <input type="radio" name="answer">
                Yes
              </label>
              <label class="radio">
                <input type="radio" name="answer">
                No
              </label>
            </div>
          </div>
          <div class="column is-4">
            <h3 class="title">Product name</h3>
            <h4 class="subtitle">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Accusantium amet aut consectetur, debitis ea eos labore laborum,
              molestiae mollitia obcaecati officiis quam quas quia rerum, soluta
              veniam veritatis voluptate voluptates.
            </h4>
            <h5>Price: $1.99</h5>
            <button class="button is-fullwidth is-dark is-large mt-20">
              Add to your cart &mdash; $1.99
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Product from "@/components/Product.vue";
import Cart from "@/components/Cart.vue";
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: { Product, Cart }
})
export default class Home extends Vue {}
</script>
