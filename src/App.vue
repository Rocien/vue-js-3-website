<template>
  <!-- Top Nav Bar -->
  <header class="site-header uk-padding uk-background-default">
    <div class="uk-container uk-container-expand">
      <nav class="uk-navbar-container uk-navbar-transparent nav-bar" uk-navbar>
        <!-- added loge here -->
        <div class="uk-navbar-left">
          <!-- Am using picsum as placeholder logo for now I will add my own logo -->
          <router-link to="/" class="site-header__logo uk-navbar-item uk-logo">
            <img src="https://picsum.photos/140/40" alt="logo" class="site-header__logo-img" />
          </router-link>
        </div>

        <!-- Main Links in the center -->
        <div class="nav-menu">
          <ul class="uk-navbar-nav">
            <!-- router-link for navigation -->
            <!-- I just added other buttons to match the original site -->
            <li>
              <router-link to="/properties">Residential</router-link>
            </li>
            <li>
              <a href="#">Blogs</a>
            </li>
            <li>
              <router-link to="/about">About Us</router-link>
            </li>
            <li>
              <router-link to="#">Contact</router-link>
            </li>
          </ul>
        </div>

        <!-- Right nav: Phone - Heart - Language -->
        <div class="uk-navbar-right">
          <div class="site-header__right uk-flex uk-flex-middle uk-flex-nowrap">
            <!-- Phone N* -->
            <a
              class="site-header__phone uk-link-reset uk-flex uk-flex-middle"
              href="tel:+19053975088"
            >
              <!-- Phone icon here -->
              <span uk-icon="icon: receiver; ratio: 1.1" class="site-header__icon"></span>
              <span class="site-header__phone-text">(905) 397 5088</span>
            </a>

            <!-- Heart icon -->
            <button
              class="uk-button uk-button-text site-header__icon-btn"
              type="button"
              aria-label="Favorites"
            >
              <span uk-icon="icon: heart; ratio: 1.1"></span>
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

  <!-- current page rendered here -->
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App'
})
</script>

<style lang="scss">
.site-header {
  border-bottom: 1px solid rgba(0, 0, 0, 0.06);

  &__logo-img {
    display: block;
    height: 32px;
    width: auto;
    border-radius: 2px;
  }

  &__right {
    gap: 1.25rem;
  }

  &__phone {
    gap: 0.5rem;
  }

  &__phone-text {
    font-weight: 500;
  }

  &__icon-btn {
    padding: 0;
    min-width: auto;
  }

  &__lang {
    padding: 0;
    min-width: auto;
    font-weight: 500;
  }
  .nav-bar {
    gap: 30px;
  }
}
</style>
