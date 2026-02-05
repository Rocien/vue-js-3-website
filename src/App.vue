<template>
  <header>
    <nav>
      <ul>
        <li 
          v-for="(menu, index) in menuItems" 
          :key="index"
        >
          <router-link 
            :to="menu.path"
          >
            {{ menu.name }}
          </router-link>
        </li>
      </ul>
    </nav>
  </header>

  <h1>Init the Project</h1>

  <h2 class="uk-margin">
    I need to rebuild this website
    <a
      href="https://trifecta.rentsync.com/residential/scenic-drive-apartments"
      target="_blank"
      rel="noopener"
    >
      Trifecta
    </a>
    With Ruben's assistance
  </h2>



  <router-view v-slot="{ Component }">
    <component 
      :is="Component"
    />
  </router-view>
</template>

<script lang="ts">
export default {
  data() {
    return {
      menuItems: [
        { name: 'Home', path: '/' },
        { name: 'Properties', path: '/properties' },
      ],
    }
  },
}
</script>

<style lang="scss">

</style>
