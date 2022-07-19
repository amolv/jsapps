<template>
  <div v-bind:key="product.id">
    <h3>{{ product.name }}</h3>
    <img v-bind:src="product.imageUrl" />
    <h4>{{ product.price }}</h4>
    <router-link v-bind:to="`/products/${product.id}`">
      <button>View Details</button>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "ProductGridItem",
  props: ["product"],
};
</script>

<style scoped>
.p-item {
  border: 1px solid;
}
</style>
