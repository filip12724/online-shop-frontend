<template>
  <header-view></header-view>
  <router-view/>
</template>

<script>
import headerView from "@/components/layout/headerView.vue";

export default ({
  components:{
    headerView
  }
})
</script>


<style>

</style>
