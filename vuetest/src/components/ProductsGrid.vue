<template>
  <div class="p-item">
    <ProductGridItem
      v-for="product in products"
      :product="product"
      :key="product.id"
    >
    </ProductGridItem>
  </div>
</template>

<script>
import ProductGridItem from "./ProductGridItem.vue";
export default {
  name: "ProductsGrid",
  props: ["products"],
  components: {
    ProductGridItem,
  },
};
</script>

<style scoped>
.p-item {
  display: flex;
  flex-wrap: wrap;
}
</style>
