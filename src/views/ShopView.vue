<template>
  <div>
    <h1 class="text-3xl font-bold mb-8 text-primary-dark">Shop</h1>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      <product-card 
        v-for="product in allProducts"
        :key="product.id"
        :product="product"
        @add-to-cart="addToCart"
        class="w-full min-w-[250px]"  
      />
    </div>
  </div>
</template>

<script>
import productCard from '@/components/ui/productCard.vue';
import { mapGetters } from 'vuex';
export default {
  components:{
    productCard
  },
  computed:{
    ...mapGetters('products', [
      'allProducts'
    ])
  },
  created(){
    this.$store.dispatch('products/fetchProducts')
  },
  methods:{
    addToCart(product) {
      console.log("Product added to cart:", product)
    }
  }
}
</script>

<style>

</style>