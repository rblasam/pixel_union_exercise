<template>
  <div class="product-card">
    <div class="product-card__image-container">
      <img :src="require(`../../assets/media/${product.image}`)" class="product-card__image">

      <div class="product-card__add-to-cart-container">
        <button class="product-card__add-to-cart-button" @click.prevent="addToCart__clicked">Add To Cart</button>
      </div>
    </div>

    <div class="product-card__details">
      <h3 class="product-card__title">{{ product.title }}</h3>
      <p class="product-card__price">${{ product.price.toFixed(2) }}</p>
    </div>
    <div class="product-card__ratings">
      <template v-for="item in 5" :key="item">
        <svg class="product-card__rating-star" :class="{ 'product-card__rating-star--filled': product.rating >= item }" width="20px" height="20px" viewBox="0 0 10 10" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
          <polygon id="star" points="6.91773333 6.1328 10 3.75 6.25 3.75 5 0 3.75 3.75 0 3.75 3.086 6.12293333 1.87493333 10 5.00466667 7.6 8.1276 10"></polygon>
        </svg>
      </template>
    </div>

  </div>
</template>


<script>

export default {
  name: "Product Card",
  emits: ['addToCart'],
  props: {
    product: Object
  },
  setup(props) {
    const addToCart__clicked = () => {
      console.log(props.product)
    }

    return {
      addToCart__clicked
    }
  }
}
</script>
