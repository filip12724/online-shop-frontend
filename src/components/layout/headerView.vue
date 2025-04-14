<template>
  <nav class="bg-[#1A1A1A] shadow-lg border-b border-[#D4AF37]">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-5 flex items-center justify-between">
      
      <router-link 
        to="/" 
        class="flex items-center space-x-3 text-[#E0E0E0] hover:text-[#D4AF37] transition-colors duration-200"
      >
        <i class="fa-solid fa-shop text-2xl"></i>
        <span class="text-xl font-semibold">EShop</span>
      </router-link>

      <ul class="hidden md:flex space-x-8">
        <li>
          <router-link 
            to="/" 
            class="text-[#E0E0E0] hover:text-[#D4AF37] font-medium text-lg transition-colors duration-200 relative hover:after:content-[''] hover:after:block hover:after:w-full hover:after:h-[2px] hover:after:bg-[#D4AF37] hover:after:absolute"
          >
            Home
          </router-link>
        </li>
        <li>
          <router-link 
            to="/shop" 
            class="text-[#E0E0E0] hover:text-[#D4AF37] font-medium text-lg transition-colors duration-200 relative hover:after:content-[''] hover:after:block hover:after:w-full hover:after:h-[2px] hover:after:bg-[#D4AF37] hover:after:absolute"
          >
            Shop
          </router-link>
        </li>
      </ul>

      <button 
        @click="isOpen = !isOpen"
        class="md:hidden text-[#E0E0E0] hover:text-[#D4AF37] focus:outline-none"
      >
        <svg 
          class="w-8 h-8" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            stroke-linecap="round" 
            stroke-linejoin="round" 
            stroke-width="2" 
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
    </div>

   
    <div class="md:hidden" v-show="isOpen">
      <div class="px-6 py-4 space-y-4 border-t border-[#D4AF37] text:center">
        <router-link 
          to="/" 
          class="block text-[#E0E0E0] hover:text-[#D4AF37] text-lg font-medium"
          @click="isOpen = false"
        >
          Home
        </router-link>
        <router-link 
          to="/shop" 
          class="block text-[#E0E0E0] hover:text-[#D4AF37] text-lg font-medium"
          @click="isOpen = false"
        >
          Shop
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "HeaderView",
  data() {
    return {
      isOpen: false
    }
  }
}
</script>