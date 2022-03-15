<template>
  <section class="product-cards">
    <div class="product-cards__grid">
      <div class="product-cards__grid-item" v-for="product in products" :key="product.id">
        <ProductCard :product="product" @addToCart="handleAddToCart"/>
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

    const handleAddToCart = (selected_product) => {
      console.log("SELECTED PRODUCT", selected_product)
      // console.log(handleAddToCart())
      // console.log("SELECTED PRODUCT FIND", products.find(p => p.id == selected_product))
    }

    return {
      products,
      handleAddToCart
    }
  }
}
</script>
