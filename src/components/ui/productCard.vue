<template>
    <section class="w-full"> 
    <div v-if="product" class="w-full bg-white rounded-xl shadow-xl border-2 border-light-neutral overflow-hidden">
     
      <a href="#" class="block relative w-full">
        <img class="w-full h-80 object-cover" 
             :src="require('@/assets/images/basic.jpg')" 
             :alt="product.name" />
          <span v-if="discountValue > 0 " class="absolute top-4 left-4 bg-[#1A1A1A] px-3 py-1 text-sm text-[#D4AF37] rounded-full font-medium">
            {{ discountValue }}% OFF         
          </span>
        </a>
  

        <div class="p-6 w-full">
          <h5 class="text-2xl font-bold text-primary-dark mb-3 min-h-[4.5rem]"> {{ product.name }}
          </h5>
        <div class="w-full flex items-center justify-between mb-5">
       
          <div class="w-full">
            <span  class="text-3xl font-bold text-accent-gold">${{ calculatedPrice }}</span>
            <span v-if="discountValue > 0 " class="ml-2 text-lg text-primary-dark line-through">${{ product.price.toFixed(0) }}</span>
          </div>
          
          <div class="flex-shrink-0">
            <span class="bg-light-neutral text-primary-dark text-xs font-semibold rounded px-2 py-0.5">
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
      }
    },
    computed: {
      discountValue() {
        if (!this.product.discounts.length) return 0;
        // map to values and take the max
        const values = this.product.discounts.map(d => d.value);
        return Math.round(Math.max(...values));
      },
      calculatedPrice() {
        return (
          this.product.price * (1 - this.discountValue / 100)
        ).toFixed(0);
      },
      formattedRating() {
        return this.product.rating.toFixed(0);
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