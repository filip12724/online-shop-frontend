<template>
  <nav class="bg-blue-900 shadow-md">
    <div class="container mx-auto px-6 py-4 flex items-center justify-between">

      <router-link to="/" class="flex items-center space-x-2 text-gray-100 hover:text-gray-300 font-medium">
        <i class="fa-solid fa-shop text-xl"></i>
        <span class="text-lg">EShop</span>
      </router-link>

      <ul class="flex space-x-6">
        <li>
          <router-link to="/" class="text-gray-100 hover:text-gray-300 font-medium">
            Home
          </router-link>
        </li>
        <li>
          <router-link to="/shop" class="text-gray-100 hover:text-gray-300 font-medium">
            Shop
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "headerView",
};
</script>

<style>
</style>
