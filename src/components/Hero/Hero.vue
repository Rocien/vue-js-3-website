<template>
  <section class="hero">
    <div class="hero__slider" uk-slider="finite: false; autoplay: true">
      <div class="uk-slider-container uk-position-relative">
        <ul class="uk-slider-items">
          <li>
            <img class="hero__image" src="https://picsum.photos/1600/900?random=1" alt="photo 1" />
          </li>
          <li>
            <img class="hero__image" src="https://picsum.photos/1600/900?random=2" alt="photo 2" />
          </li>
          <li>
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
    </div>

    <div class="hero__content">
      <h1 class="hero__title">Find your new home</h1>

      <div class="hero__search">
        <div class="hero__search-inner">
          <input class="hero__search-input" type="text" placeholder="Search By City Or Property" />
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
  position: relative;
  height: 650px;
  overflow: hidden;

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

  &__right {
    position: relative;
    overflow: hidden;
  }
}

.hero__content {
  position: absolute;
  bottom: 1.5rem;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 10;

  display: flex;
  flex-direction: column;
  justify-content: center;

  padding: 0 4rem;
  pointer-events: none;
}

.hero__search {
  width: calc(100% - 8rem);
  max-width: 1100px;
}
.hero__search,
.hero__search-inner,
.hero__search-input {
  pointer-events: auto;
}
</style>
