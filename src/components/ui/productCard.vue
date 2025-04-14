<template>
    <section class="md:w-1/2 flex justify-center items-start">
      <div v-if="product" class="max-w-md w-full bg-[#FFFFFF] rounded-xl shadow-xl border-2 border-[#E0E0E0] overflow-hidden">

        <a href="#" class="block relative">
          <img class="w-full h-80 object-cover" :src="require('@/assets/images/basic.jpg')" 
               :alt="product.name" />
          <span class="absolute top-4 left-4 bg-[#1A1A1A] px-3 py-1 text-sm text-[#D4AF37] rounded-full font-medium">
            {{ product.discount }}% OFF
          </span>
        </a>
  

        <div class="p-6">
          <h5 class="text-2xl font-bold text-[#1A1A1A] mb-3">{{ product.name }}</h5>
          <div class="flex items-center justify-between mb-5">
            <div>
              <span class="text-3xl font-bold text-[#D4AF37]">${{ calculatedPrice }}</span>
              <span class="ml-2 text-lg text-[#1A1A1A] line-through">${{ product.price }}</span>
            </div>
            <div class="flex items-center">
              <span class="ml-2 bg-[#E0E0E0] text-[#1A1A1A] text-xs font-semibold rounded px-2 py-0.5">
                {{ formattedRating }}
              </span>
            </div>
          </div>
          <button 
            @click="handleAddToCart"
            class="w-full inline-flex items-center justify-center bg-[#1A1A1A] hover:bg-[#000000] text-[#FFFFFF] text-base font-semibold py-3 rounded-lg transition-colors duration-200"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="#D4AF37" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            Add to cart
          </button>
        </div>
      </div>
      <div v-else class="w-full md:max-w-sm bg-[#FFFFFF] rounded-xl p-8 shadow-md text-[#1A1A1A]">
        Loading featured product...
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: 'ProductCard',
    props: {
      product: {
        type: Object,
        required: true,
        validator: (value) => {
          return [
            'name',
            'price',
            'discount',
            'rating'
          ].every(prop => prop in value)
        }
      }
    },
    computed: {
      calculatedPrice() {
        return (this.product.price * (1 - this.product.discount/100)).toFixed()
      },
      formattedRating() {
        return this.product.rating.toFixed(1)
      }
    },
    methods: {
      handleAddToCart() {
        this.$emit('add-to-cart', {
          ...this.product,
          finalPrice: this.calculatedPrice
        })
      }
    }
  }
  </script>