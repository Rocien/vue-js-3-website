<template>
  <section 
    class="hero hero__section"
    :style="heroComputedStyles"
  >
    <div class="hero__slider" uk-slider="finite: false; autoplay: true">
      <div class="uk-slider-container uk-position-relative">
        <ul class="uk-slider-items">
          <li class="hero__image-list">
            <img class="hero__image" src="https://picsum.photos/1600/900?random=1" alt="photo 1" />
          </li>
          <li class="hero__image-list">
            <img class="hero__image" src="https://picsum.photos/1600/900?random=2" alt="photo 2" />
          </li>
          <li class="hero__image-list">
            <img class="hero__image" src="https://picsum.photos/1600/900?random=3" alt="photo 3" />
          </li>
        </ul>

        <!-- here the left / right arrows -->
        <a
          class="uk-position-center-left uk-position-small uk-hidden-hover"
          href="#"
          uk-slidenav-previous
          uk-slider-item="previous"
          aria-label="Previous"
        ></a>
        <a
          class="uk-position-center-right uk-position-small uk-hidden-hover"
          href="#"
          uk-slidenav-next
          uk-slider-item="next"
          aria-label="Next"
        ></a>
      </div>
      <ul class="uk-slider-nav uk-dotnav uk-flex-center uk-margin-top"></ul>
    </div>

    <div class="hero__content">
      <div class="hero__content__inner">
        <h1 class="hero__title">Find your new home</h1>

        <div class="hero__search">
          <div class="hero__search-inner">
            <input class="hero__search-input" type="text" placeholder="Search By City Or Property" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'HeroComponent',
  props: {
    heroBackgroundColor: {
      type: String,
      default: 'green'
    }
  },
  computed: {
    heroComputedStyles() {
      if (!this.heroBackgroundColor) {
        return {}
      }

      return {
        '--hero-background-color': `${this.heroBackgroundColor}`
      }
    }
  }
})
</script>

<style lang="scss">
.hero {
  --uk-dot-bottom-pos: 40px;

  &__section {
    background: #ffffff;
    position: relative;
    height: var(--hero-section-height, 650px);
    overflow: hidden;
  }

  &__title {
    color: #ffffff;
    font-size: 3.5rem;
    font-weight: 300;
  }

  &__search-inner {
    background: #ffffff;
    border: 1px solid rgba(0, 0, 0, 0.12);
    border-radius: 6px;
    padding: 2.5rem;
    display: flex;
    align-items: center;
  }

  &__search-input {
    padding: 1rem;
    width: 100%;
    font-size: 1.2rem;
  }

  &__content {
    position: absolute;
    bottom: 2.5rem;
    left: 0;
    z-index: 10;

    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    padding: 0 8rem;
    pointer-events: none;

    display: flex;
    align-items: center;

    &__inner {
      pointer-events: all;
    }
  }

  &__search {
    width: calc(100% - 8rem);
    max-width: 1200px;
  }

  &__search,
  &__search-inner,
  &__search-input {
    pointer-events: auto;
  }

  &__image-list {
    width: 100%;
    height: 100%;
  }

  &__image {
    width: 100%;
    height: 650px;
    object-fit: cover;
    display: block;
  }

  &__slider {
    position: relative;
  }

  .uk-dotnav {
    position: absolute;
    bottom: var(--uk-dot-bottom-pos, 20px);
    left: 50%;
    transform: translateX(-50%);
  }
}
</style>
