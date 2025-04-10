<template>
  <div class="container mx-auto px-4 py-8">
    <div class="flex flex-col md:flex-row gap-12">
      <!-- Welcome Section -->
      <section class="md:w-1/2">
        <div class="max-w-2xl">
          <h1 class="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
            Welcome to <span class="text-blue-600">Our Premium Store</span> 🛍️
          </h1>
          <p class="text-lg md:text-xl text-gray-600 leading-relaxed mb-8">
            Discover a world of exceptional products curated just for you.
            Enjoy exclusive deals, fast shipping, and premium quality. Start exploring our collection today!
          </p>
          <div class="bg-blue-50 border border-blue-200 p-6 rounded-xl">
            <h2 class="text-2xl font-semibold text-blue-800 mb-4">Why Choose Us?</h2>
            <ul class="space-y-3 text-gray-700">
              <li class="flex items-center gap-2">
                <svg class="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                </svg>
                Daily flash sales up to 70% off
              </li>
              <li class="flex items-center gap-2">
                <svg class="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                </svg>
                100% quality guarantee on all products
              </li>
              <li class="flex items-center gap-2">
                <svg class="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                </svg>
                24/7 customer support
              </li>
            </ul>
          </div>
        </div>
      </section>

      <!-- Featured Product Card -->
      <section class="md:w-1/2 flex justify-center items-start">
        <div v-if="product" class="max-w-xs w-full bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
          <a href="#" class="block relative">
            <img class="w-full h-60 object-cover" :src="require('@/assets/images/basic.jpg')"
            :alt="product.name" />
            <span class="absolute top-2 left-2 bg-black bg-opacity-70 px-2 py-1 text-xs text-white rounded-full">
              {{ product.discount }}% OFF
            </span>
          </a>
          <div class="p-5">
            <a href="#">
              <h5 class="text-xl font-semibold text-gray-900 mb-2">{{ product.name }}</h5>
            </a>
            <div class="flex items-center justify-between mb-4">
              <div>
                <span class="text-2xl font-bold text-gray-900">${{ calculateDiscount(product.price, product.discount) }}</span>
                <span class="ml-2 text-sm text-gray-500 line-through">${{ product.price }}</span>
              </div>
              <div class="flex items-center">
                <template v-for="n in 5" :key="n">
                  <svg v-if="n <= Math.floor(product.rating)" class="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                  <svg v-else class="w-5 h-5 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                </template>
                <span class="ml-2 bg-yellow-200 text-xs font-semibold rounded px-2 py-0.5">
                  {{ product.rating.toFixed(1) }}
                </span>
              </div>
            </div>
            <button @click="addToCart(product)"
                    class="w-full inline-flex items-center justify-center bg-gray-900 hover:bg-gray-700 text-white text-sm font-medium py-2 rounded-md focus:outline-none focus:ring-4 focus:ring-blue-300">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              Add to cart
            </button>
          </div>
        </div>
        <div v-else class="w-full md:max-w-sm bg-white rounded-xl p-8 shadow-md text-gray-500">
          Loading featured product...
        </div>
      </section>
    </div>
  </div>
</template>


<script>
import axios from 'axios'

export default {
  name: 'HomeView',
  data(){
    return {
      product: null
    }
  },
  mounted(){
    axios.get('http://localhost/api/products/highest-discount').then(response => {
      this.product = response.data
      console.log(this.product)
    }).catch(error => {
      console.error('Error occured while fetching highest discount product',error)
    })
  },
  methods:{
    calculateDiscount(price, discount){
      return (price * (1 - discount/100)).toFixed()
    }
  }
}
</script>
