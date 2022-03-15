<template>
  <section class="products">
    <div class="products__grid">
      <div class="products__grid-item" v-for="product in products" :key="product.id">
        <Product :product="product" />
      </div>
      <div class="products__grid-item products__grid-item--filler"></div>
      <div class="products__grid-item products__grid-item--filler"></div>
    </div>
  </section>
</template>

<script>
import Product from '@/components/products/Product.vue'

export default {
  name: 'Products',
  components: {
    Product
  },
  data() {
    return {
      products: [
        { id: 1, image: "shirt-1.jpeg", title: "Ultrafine Merino T-Shirt", price: 80, rating: 4 },
        { id: 1, image: "shirt-2.jpeg", title: "Ultrafine Merino T-Shirt", price: 80, rating: 2 },
        { id: 1, image: "shirt-3.jpeg", title: "Ultrafine Merino T-Shirt", price: 80, rating: 5 },
        { id: 1, image: "shirt-3.jpeg", title: "Ultrafine Merino T-Shirt", price: 80, rating: 5 }
      ]
    }
  }
}
</script>
