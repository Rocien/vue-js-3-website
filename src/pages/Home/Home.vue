<template>
  <section class="hero">
    <div class="uk-container uk-container-expand">
      <div class="hero__grid">
        <!-- Left panel (green background) -->
        <div class="hero__left">
          <h1 class="hero__title">Find your new home</h1>
          <div class="hero__search-placeholder" aria-hidden="false">
            <!-- I'll add the actual search UI later when Ruben instruct me -->
          </div>
        </div>

        <!-- Right panel (image) -->
        <div class="hero__right">
          <img class="hero__image" src="https://picsum.photos/1200/900" alt="Hero building" />
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'HomePage'
})
</script>

<style lang="scss">
/* left green panel and right image */
.hero {
  background: #ffffff;

  &__grid {
    display: grid;
    grid-template-columns: 60% 40%;
    min-height: 650px;
  }

  &__left {
    background: #2f3b1f;
    padding: 5rem 4rem 3rem;
    position: relative;
  }

  &__title {
    color: #ffffff;
    font-size: 3.2rem;
    line-height: 1.1;
    font-weight: 300;
    margin: 0;
  }

  /* my placeholder where the search UI will go later */
  &__search-placeholder {
    height: 120px;
    margin-top: 2rem;
    border-radius: 6px;
    background: rgba(255, 255, 255, 0.08);
  }

  &__right {
    position: relative;
    overflow: hidden;
  }

  &__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
}
</style>
