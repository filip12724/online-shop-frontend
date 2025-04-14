<template>
    <div class="min-h-screen flex flex-col">
      <headerView />
      
      <main class="flex-1">
        <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <!-- Add a wrapping div with consistent spacing -->
          <div class="w-full flex flex-col md:flex-row gap-12">
            <slot />
          </div>
        </div>
      </main>
  
      <footerView />
    </div>
  </template>
  
  <script>
  import headerView from './headerView.vue';
  import footerView from './footerView.vue';  
  export default {
    name: 'MainLayout',
    components: {
      headerView,
      footerView
    }
  }
  </script>