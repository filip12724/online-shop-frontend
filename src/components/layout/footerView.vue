<template>
    <footer class="bg-[#1A1A1A] border-t border-[#D4AF37] mt-16">
      <div class="container mx-auto px-6 py-12">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <!-- Brand Column -->
          <div class="space-y-4">
            <router-link to="/" class="flex items-center space-x-3">
              <i class="fa-solid fa-shop text-2xl text-[#D4AF37]"></i>
              <span class="text-xl font-semibold text-[#E0E0E0]">EShop</span>
            </router-link>
            <p class="text-sm text-[#E0E0E0]">
              Luxury meets convenience. Curated premium products delivered to your doorstep.
            </p>
          </div>
  
          <!-- Quick Links -->
          <div class="space-y-4">
            <h3 class="text-lg font-semibold text-[#D4AF37] mb-3">Quick Links</h3>
            <ul class="space-y-2">
              <li><a href="#" class="text-[#E0E0E0] hover:text-[#D4AF37] transition-colors duration-200">About Us</a></li>
              <li><a href="#" class="text-[#E0E0E0] hover:text-[#D4AF37] transition-colors duration-200">FAQs</a></li>
              <li><a href="#" class="text-[#E0E0E0] hover:text-[#D4AF37] transition-colors duration-200">Shipping Policy</a></li>
              <li><a href="#" class="text-[#E0E0E0] hover:text-[#D4AF37] transition-colors duration-200">Returns</a></li>
            </ul>
          </div>
  
          <!-- Contact Info -->
          <div class="space-y-4">
            <h3 class="text-lg font-semibold text-[#D4AF37] mb-3">Contact</h3>
            <ul class="space-y-2 text-[#E0E0E0]">
              <li class="flex items-center gap-2">
                <i class="fas fa-phone text-[#D4AF37]"></i>
                +1 (555) 123-4567
              </li>
              <li class="flex items-center gap-2">
                <i class="fas fa-envelope text-[#D4AF37]"></i>
                support@eshop.com
              </li>
              <li class="flex items-center gap-2">
                <i class="fas fa-map-marker-alt text-[#D4AF37]"></i>
                New York, USA
              </li>
            </ul>
          </div>
  
          <!-- Newsletter -->
          <div class="space-y-4">
            <h3 class="text-lg font-semibold text-[#D4AF37] mb-3">Newsletter</h3>
            <p class="text-sm text-[#E0E0E0]">Subscribe for exclusive offers and updates</p>
            <div class="flex gap-2">
              <input 
                type="email" 
                placeholder="Enter your email"
                class="w-full px-4 py-2 rounded-lg border border-[#D4AF37] bg-[#1A1A1A] text-[#E0E0E0] focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
              >
              <button class="px-4 py-2 bg-[#D4AF37] text-[#1A1A1A] rounded-lg hover:bg-[#c2a235] transition-colors duration-200">
                Subscribe
              </button>
            </div>
          </div>
        </div>
  
        <!-- Bottom Bar -->
        <div class="border-t border-[#E0E0E0]/20 mt-12 pt-8">
          <div class="flex flex-col md:flex-row justify-between items-center gap-4 text-[#E0E0E0]">
            <div class="flex space-x-6">
              <a href="#" class="hover:text-[#D4AF37] transition-colors duration-200">
                <i class="fab fa-facebook"></i>
              </a>
              <a href="#" class="hover:text-[#D4AF37] transition-colors duration-200">
                <i class="fab fa-instagram"></i>
              </a>
              <a href="#" class="hover:text-[#D4AF37] transition-colors duration-200">
                <i class="fab fa-twitter"></i>
              </a>
            </div>
            <p class="text-sm">
              © 2023 EShop. All rights reserved. 
              <span class="text-[#D4AF37]">Premium Experience</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  </template>
  
  <script>
  export default {
    name: "footerView",
  };
  </script>