<template>
  <header class="site-header uk-padding-small uk-background-default">
    <div class="uk-container uk-container-expand nav__container">
      <nav class="uk-navbar-container uk-navbar-transparent nav-bar__lego" uk-navbar>
        <div class="uk-navbar-left">
          <router-link to="/" class="site-header__logo uk-navbar-item uk-logo">
            <img src="/trifecta-logo.png" alt="Trifecta logo" class="site-header__logo-img" />
          </router-link>
        </div>

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

        <div class="uk-navbar-right">
          <div class="site-header__right uk-flex uk-flex-middle uk-flex-nowrap">
            <a
              class="site-header__phone uk-link-reset uk-flex uk-flex-middle site-header__desktop-only"
              href="tel:+19053975088"
            >
              <span uk-icon="icon: receiver; ratio: 1.5" class="site-header__phone-icon"></span>
              <span class="site-header__phone-text">(905) 397 5088</span>
            </a>

            <button
              class="uk-button uk-button-text site-header__icon-btn"
              type="button"
              aria-label="Favorites"
            >
              <span uk-icon="icon: heart; ratio: 1.5"></span>
            </button>

            <button
              class="uk-button uk-button-text site-header__lang site-header__desktop-only"
              type="button"
            >
              EN <span uk-icon="icon: chevron-down; ratio: 0.9"></span>
            </button>

            <button
              class="uk-button uk-button-text site-header__hamburger"
              type="button"
              aria-label="Open menu"
              uk-toggle="target: #mobile-menu"
            >
              <span uk-navbar-toggle-icon></span>
            </button>
          </div>
        </div>
      </nav>
    </div>

    <div id="mobile-menu" uk-offcanvas="overlay: true; flip: true">
      <div class="uk-offcanvas-bar site-header__offcanvas">
        <button class="uk-offcanvas-close" type="button" uk-close></button>

        <ul class="uk-nav uk-nav-default site-header__mobile-nav">
          <li site-header__mobile-nav-list>
            <router-link to="/properties" @click="closeOffcanvas">Residential</router-link>
          </li>
          <li site-header__mobile-nav-list><a href="#" @click="closeOffcanvas">Blogs</a></li>
          <li site-header__mobile-nav-list>
            <router-link to="/about" @click="closeOffcanvas">About Us</router-link>
          </li>
          <li site-header__mobile-nav-list><a href="#" @click="closeOffcanvas">Contact</a></li>
        </ul>

        <hr class="site-header__divider" />

        <a
          class="site-header__mobile-phone uk-flex uk-flex-middle uk-link-reset"
          href="tel:+19053975088"
        >
          <span uk-icon="icon: receiver; ratio: 1.4"></span>
          <span class="site-header__mobile-phone-text">(905) 397 5088</span>
        </a>

        <button class="site-header__mobile-lang" type="button">
          EN <span uk-icon="icon: chevron-down; ratio: 0.9"></span>
        </button>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import UIkit from 'uikit'

export default defineComponent({
  name: 'Navbar',
  methods: {
    closeOffcanvas() {
      const mob = document.getElementById('mobile-menu')
      if (!mob) return
      const instance = UIkit.offcanvas(mob)
      instance.hide()
    }
  }
})
</script>

<style lang="scss">
.site-header {
  border-bottom: 1px solid rgba(0, 0, 0, 0.06);

  &__logo-img {
    display: block;
    height: 32px;
    width: auto;
  }

  &__list {
    gap: 2rem;
  }

  &__nav-list {
    font-size: 1.2rem;
    font-weight: 200;
  }

  &__right {
    gap: 2rem;
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
    gap: 2rem;
  }

  &__hamburger {
    display: none;
    padding: 0;
    min-width: auto;
  }

  &__offcanvas {
    background: #2f3b1f;
    color: #fff;
    padding-top: 1.25rem;
  }

  &__mobile-nav {
    margin: 1rem 0 1.25rem 0;

    a {
      color: #fff;
      font-size: 1.4rem;
      font-weight: 300;
      padding: 0.9rem 0;
    }
  }

  &__mobile-nav-list {
    margin-top: 0.35rem;
  }

  &__divider {
    border: none;
    height: 1px;
    background: rgba(255, 255, 255, 0.25);
    margin: 1.5rem 0;
  }

  &__mobile-phone {
    gap: 0.75rem;
    color: #fff;
    font-size: 1.25rem;
    font-weight: 300;
    margin-bottom: 1.25rem;
  }

  &__mobile-phone-text {
    font-weight: 300;
  }

  &__mobile-lang {
    display: inline-flex;
    align-items: center;
    gap: 0.6rem;

    background: transparent;
    border: 1px solid rgba(255, 255, 255, 0.5);
    color: #fff;

    padding: 0.75rem 1rem;
    border-radius: 6px;

    font-size: 1.1rem;
    font-weight: 300;

    cursor: pointer;
  }

  &__desktop-only {
    display: inline-flex;
  }
}

.nav__container {
  gap: 2rem;
}

@media (max-width: 74.7em) {
  .site-header {
    &__nav-list {
      font-size: 1rem;
    }

    &__phone-text {
      font-size: 1rem;
      white-space: nowrap;
    }

    &__right {
      font-size: 1.2rem;
      gap: 1.5rem;
    }
  }
}

@media (max-width: 67em) {
  .site-header {
    &__menu {
      display: none;
    }

    &__desktop-only {
      display: none;
    }

    &__hamburger {
      display: inline-flex;
      align-items: center;
    }

    &__right {
      gap: 1.25rem;
    }
  }
}

@media (max-width: 48rem) {
  .site-header {
    &__logo-img {
      height: 28px;
    }

    &__mobile-nav a {
      font-size: 1.25rem;
    }
  }
}
</style>
