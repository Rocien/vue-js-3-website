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
type FilterOption = {
  text: string
  value: unknown
}

export default defineComponent({
  name: 'PropertiesPage',
  components: {
    PropertyCard
  },
  data() {
    return {
      filterOptions: [] as FilterOption[]
    }
  },
  computed: {
    properties(): Property[] {
      return (propertiesJson as { data: Property[] }).data
    }
  },
  created() {
    const allBeds: string[] = []
    for (const property of propertiesJson.data) {
      property.bedsSummary.forEach((bed: number) => {
        if (!allBeds.includes(bed.toString())) {
          allBeds.push(bed.toString())
        }
        // console.log(property)
      })
    }
    const bedroomsTextMap: Record<number, string> = {
      0: 'Studio',
      1: 'One Bedroom',
      2: 'Two Bedrooms',
      3: 'Three Bedrooms',
      4: 'Four Bedrooms'
    }
    for (const bed of allBeds) {
      const bedRoomText = bedroomsTextMap[Number(bed)]
      this.filterOptions.push({
        text: bedRoomText || `${bed} bedrooms`,
        value: bed
      })
    }
    console.log(this.filterOptions)
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
