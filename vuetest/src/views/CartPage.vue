<template>
  <div>
    <div
      v-for="product in cartItems"
      v-bind:key="product.id"
      style="display: flex; flex-wrap: wrap; justify-content: space-around"
    >
      <img v-bind:src="product.imageUrl" width="50px" />
      <h3>{{ product.name }}</h3>

      <h4>{{ product.price }} Rs</h4>
      <button>Remove from cart</button>
    </div>
    <h3>Total : {{ totalPrice }}</h3>
    <button>Checkout</button>
  </div>
</template>

<script>
import { cartItems } from "../fake-data";

export default {
  name: "CartPage",
  data() {
    return {
      cartItems,
    };
  },
  computed: {
    totalPrice() {
      return this.cartItems.reduce((sum, item) => sum + Number(item.price), 0);
    },
  },
};
</script>
