<template>
  <section class="product-cards">
    <div class="product-cards__grid">
      <div class="product-cards__grid-item" v-for="product in products" :key="product.id">
        <ProductCard :product="product"/>
      </div>
      <div class="product-cards__grid-item product-cards__grid-item--filler"></div>
      <div class="product-cards__grid-item product-cards__grid-item--filler"></div>
    </div>
  </section>
</template>

<script>
import ProductCard from '@/components/products/ProductCard.vue'
import { reactive } from "vue";

export default {
  name: 'Product Cards',
  components: {
    ProductCard
  },
  setup() {
    const products = reactive([
      { id: 1, image: "shirt-1.jpeg", title: "Ultrafine Merino T-Shirt", price: 80, rating: 4 }
    ])

    return {
      products
    }
  }
}
</script>
