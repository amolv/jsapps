<template>
  <div style="display: flex; flex-wrap: wrap">
    <ProductsGrid :products="products" />
  </div>
</template>

<script>
import { products } from "../fake-data";
import ProductsGrid from "../components/ProductsGrid.vue";

export default {
  name: "ProductsPage",
  components: {
    ProductsGrid,
  },
  data() {
    return {
      products,
    };
  },
};
</script>
