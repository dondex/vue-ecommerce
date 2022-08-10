<template>
  <div>
    <TheHeader />
    <PopularProducts />
    <TheFooter />
  </div>
</template>

<script>
import TheHeader from '@/components/home/TheHeader.vue'
import PopularProducts from '@/components/home/PopularProducts.vue'
import TheFooter from '@/components/home/TheFooter.vue'

  export default {
    components: {
      TheHeader,
      PopularProducts,
      TheFooter
    }
  }
</script>
