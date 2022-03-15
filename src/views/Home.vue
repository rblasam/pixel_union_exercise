<template>
  <div class="home">
    <Products />
  </div>
</template>

<script>
import Products from '@/components/products/ProductCards.vue'
import image from "@/assets/media/logo.png"

export default {
  name: 'Home',
  components: {
    Products
  },
  data() {
    return {
      image: image
    }
  }
}
</script>
