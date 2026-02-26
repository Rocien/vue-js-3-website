<template>
  <section class="properties-page uk-container uk-container-expand">
    <h1 class="properties-page__title">Our Residential Properties</h1>
    <div class="properties-page__grid">
      <PropertyCard v-for="property in properties" :key="property.id" :property="property" />
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import PropertyCard, { Property } from '@/components/PropertyCard/PropertyCard.vue'
import propertiesJson from '@/data/properties.json'

export default defineComponent({
  name: 'PropertiesPage',
  components: {
    PropertyCard
  },
  computed: {
    properties(): Property[] {
      return (propertiesJson as { data: Property[] }).data
    }
  }
})
</script>

<style lang="scss">
.properties-page {
  padding: 2rem 0;

  &__title {
    margin: 0 0 1.5rem 0;
  }

  &__grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 1.25rem;
  }

  @media (max-width: 75rem) {
    &__grid {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }

  @media (max-width: 48rem) {
    &__grid {
      grid-template-columns: 1fr;
    }
  }
}
</style>
