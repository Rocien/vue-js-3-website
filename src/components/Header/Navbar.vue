<template>
  <!-- Top Nav Bar -->
  <header class="site-header uk-padding-small uk-background-default">
    <div class="uk-container uk-container-expand nav__container">
      <nav class="uk-navbar-container uk-navbar-transparent nav-bar__lego" uk-navbar>
        <!-- Left Logo -->
        <div class="uk-navbar-left">
          <router-link to="/" class="site-header__logo uk-navbar-item uk-logo">
            <!-- i am using picsum placeholder for now -->
            <img src="https://picsum.photos/140/40" alt="logo" class="site-header__logo-img" />
          </router-link>
        </div>

        <!-- left navigation links -->
        <div class="site-header__menu">
          <ul class="uk-navbar-nav site-header__list">
            <li>
              <router-link to="/properties" class="site-header__nav-list">Residential</router-link>
            </li>
            <li>
              <a href="#" class="site-header__nav-list">Blogs</a>
            </li>
            <li>
              <router-link to="/about" class="site-header__nav-list">About Us</router-link>
            </li>
            <li>
              <router-link to="#" class="site-header__nav-list">Contact</router-link>
            </li>
          </ul>
        </div>

        <!-- Right: Phone and Icons -->
        <div class="uk-navbar-right">
          <div class="site-header__right uk-flex uk-flex-middle uk-flex-nowrap">
            <!-- Phone -->
            <a
              class="site-header__phone uk-link-reset uk-flex uk-flex-middle"
              href="tel:+19053975088"
            >
              <span uk-icon="icon: receiver; ratio: 1.5" class="site-header__phone-icon"></span>
              <span class="site-header__phone-text">(905) 397 5088</span>
            </a>

            <!-- Heart -->
            <button
              class="uk-button uk-button-text site-header__icon-btn"
              type="button"
              aria-label="Favorites"
            >
              <span uk-icon="icon: heart; ratio: 1.5"></span>
            </button>

            <!-- Language -->
            <button class="uk-button uk-button-text site-header__lang" type="button">
              EN <span uk-icon="icon: chevron-down; ratio: 0.9"></span>
            </button>
          </div>
        </div>
      </nav>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Navbar'
})
</script>

<style scoped lang="scss">
.site-header {
  border-bottom: 1px solid rgba(0, 0, 0, 0.06);

  &__logo-img {
    display: block;
    height: 32px;
    width: auto;
    border-radius: 2px;
  }

  &__list {
    gap: 3rem;
  }

  &__nav-list {
    font-size: 1.2rem;
    font-weight: 200;
  }

  &__menu {
    gap: 5rem;
  }

  &__right {
    gap: 5rem;
    font-size: 1.5rem;
  }

  &__phone {
    gap: 0.5rem;
  }

  &__phone-text {
    font-weight: 200;
  }

  &__icon-btn {
    padding: 0;
    min-width: auto;
  }

  &__lang {
    padding: 0;
    min-width: auto;
    font-weight: 200;
    font-size: 1.5rem;
  }

  .nav-bar__lego {
    gap: 10rem;
  }
}

.nav__container {
  gap: 5rem;
}
</style>
