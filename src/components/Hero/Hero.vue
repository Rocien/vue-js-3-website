<template>
  <section class="hero">
    <div class="nav-bar"></div>
    <div class="uk-container-expand">
      <div class="hero__grid">
        <!-- Left panel (green background) -->
        <div class="hero__left">
          <h1 class="hero__title">Find your new home</h1>
          <div class="hero__search">
            <div class="hero__search-inner">
              <span uk-icon="icon: search; ratio: 1"></span>

              <input
                class="hero__search-input"
                type="text"
                placeholder="Search By City Or Property"
              />
            </div>
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

  &__search {
    margin-top: 2rem;
    max-width: 920px;
  }

  &__search-inner {
    background: #ffffff;
    border: 1px solid rgba(0, 0, 0, 0.12);
    border-radius: 6px;
    padding: 0.9rem 1.25rem;
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }

  &__search-input {
    border: none;
    outline: none;
    width: 100%;
    font-size: 1rem;
    background: transparent;

    &::placeholder {
      color: rgba(0, 0, 0, 0.45);
    }
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
  /* Media query */
  @media (max-width: 960px) {
    .hero__grid {
      grid-template-columns: 1fr;
    }

    .hero__left {
      padding: 3rem 1.5rem;
    }

    .hero__right {
      height: 320px;
    }
  }
}
</style>
