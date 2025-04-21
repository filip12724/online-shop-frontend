<template>

      <!-- Welcome Section -->
      <section class="md:w-1/2">
        <div class="max-w-2xl">
          <h1 class="text-4xl md:text-5xl font-extrabold text-[#1A1A1A] leading-tight mb-6">
            Welcome to <span class="text-[#D4AF37]">Our Premium Store</span> 🛍️
          </h1>
          <p class="text-lg md:text-xl text-[#1A1A1A] leading-relaxed mb-8">
            Discover a world of exceptional products curated just for you.
            Enjoy exclusive deals, fast shipping, and premium quality. Start exploring our collection today!
          </p>
          <div class="bg-[#E0E0E0] border border-[#1A1A1A] p-6 rounded-xl">
            <h2 class="text-2xl font-semibold text-[#1A1A1A] mb-4">Why Choose Us?</h2>
            <ul class="space-y-3 text-[#1A1A1A]">
              <li class="flex items-center gap-2">
                <svg class="w-5 h-5 text-[#D4AF37]" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                </svg>
                Daily flash sales up to 70% off
              </li>
              <li class="flex items-center gap-2">
                <svg class="w-5 h-5 text-[#D4AF37]" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                </svg>
                Daily flash sales up to 70% off
              </li>
              <li class="flex items-center gap-2">
                <svg class="w-5 h-5 text-[#D4AF37]" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                </svg>
                Daily flash sales up to 70% off
              </li>
            </ul>
          </div>
        </div>
      </section>


     <productCard
      :product="product"
      @add-to-cart="addToCart"
     />

 
</template>

<script>
import axios from 'axios'
import productCard from '@/components/ui/productCard.vue'

export default {
  name: 'HomeView',
  components:{
    productCard
  },
  data() {
    return {
      product: null,
      hover: false
    }
  },
  mounted() {
    axios.get('http://127.0.0.1:8000/api/products/highest-discount')
      .then(response => {
        this.product = response.data
        console.log(this.product)
      })
      .catch(error => {
        console.error('Error occurred while fetching highest discount product', error)
      })
  },
  methods: {
    calculateDiscount(price, discount) {
      return (price * (1 - discount / 100)).toFixed()
    },
    addToCart(product) {
      console.log("Product added to cart:", product)
    }
  }
}
</script>
