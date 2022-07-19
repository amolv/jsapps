<template>
  <div v-if="product">
    <div style="display: flex; flex-wrap: wrap">
      <h3>{{ product.name }}</h3>
      <img v-bind:src="product.imageUrl" />
      <h4>{{ product.price }} Rs</h4>
      <p>{{ product.description }}</p>
      <p>Rating : {{ product.averageRating }}</p>
      <button>Add to Cart</button>
    </div>
  </div>
  <h3 v-else>Product Not found</h3>
</template>

<script>
import { products } from "../fake-data";

export default {
  name: "ProductDetailsPage",
  data() {
    return {
      product: products.find((p) => p.id === this.$route.params.id),
    };
  },
};
</script>
