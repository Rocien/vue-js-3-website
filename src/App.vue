<template>
  <!-- Navbar -->
  <Navbar />

  <!-- here where pages will render -->
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Navbar from '@/components/Header/Navbar.vue'

export default defineComponent({
  name: 'App',
  components: {
    Navbar
  }
})
</script>

<style lang="scss"></style>
