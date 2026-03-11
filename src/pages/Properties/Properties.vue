<template>
  <section class="properties-page uk-container uk-container-expand">
    <h1 class="properties-page__title">Our Residential Properties</h1>

    <!-- 
      Filters 

      connect the select filter with the v-model,
      and store it in a variable call appliedBeds

      if appliedBeds has a value, update the computed
      property and filter the options

      remember types, remeber a reset,

      EXTRATIP... how do you add a "select all option???" tip => null??
    -->
    <div>
      <SelectFilter :options="filterOptions" v-bind="selectAttrs" v-model="appliedBeds" />
    </div>

    <div class="properties-page__grid">
      <PropertyCard v-for="property in properties" :key="property.id" :property="property" />
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import PropertyCard, { type Property } from '@/components/PropertyCard/PropertyCard.vue'
import propertiesJson from '@/data/properties.json'
import SelectFilter from '@/components/Filters/select-filter.vue'
import type { FilterOption } from '@/types';

export default defineComponent({
  name: 'PropertiesPage',
  components: {
    PropertyCard,
    SelectFilter
  },
  props: {
    selectAttrs: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      filterOptions: [] as FilterOption[],
      appliedBeds: null as string | null
    }
  },
  computed: {
    properties(): Property[] {
      const allProperties = (propertiesJson as { data: Property[] }).data

      if (this.appliedBeds === null) {
        return allProperties
      }

      const bedNumber = Number(this.appliedBeds)

      return allProperties.filter((property) => {
        return property.bedsSummary?.includes(bedNumber)
      })
    }
  },
  created() {
    const allBeds: string[] = []

    for (const property of propertiesJson.data) {
      property.bedsSummary.forEach((bed: number) => {
        const bedAsString = bed.toString()

        if (!allBeds.includes(bedAsString)) {
          allBeds.push(bedAsString)
        }
      })
    }

    allBeds.sort((a, b) => Number(a) - Number(b))

    const bedroomsTextMap: Record<number, string> = {
      0: 'Studio',
      1: 'One Bedroom',
      2: 'Two Bedrooms',
      3: 'Three Bedrooms',
      4: 'Four Bedrooms'
    }

    this.filterOptions.push({
      text: 'All bedrooms',
      value: null
    })

    for (const bed of allBeds) {
      const bedRoomText = bedroomsTextMap[Number(bed)]

      this.filterOptions.push({
        text: bedRoomText || `${bed} bedrooms`,
        value: bed
      })
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
