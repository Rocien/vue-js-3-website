<template>
  <!-- here Home page content -->
  <Hero />

  <div>
    <span class="uk-dotnav" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Hero from '@/components/Hero/Hero.vue'

export default defineComponent({
  name: 'HomePage',
  components: {
    Hero
  }
})
</script>

<style lang="scss">
/* I will fill it later when needed */
</style>
