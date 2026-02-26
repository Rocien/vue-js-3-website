<template>
  <article class="property-card">
    <div class="property-card__media">
      <img
        class="property-card__image"
        :src="imageSrc"
        :alt="`Photo of ${property.buildingName}`"
      />

      <div v-if="property.featured" class="property-card__pill">FEATURED PROPERTY</div>
    </div>

    <div class="property-card__body">
      <h3 class="property-card__title">{{ property.buildingName }}</h3>

      <div class="property-card__row">
        <span class="property-card__address">{{ property.address }}</span>
        <span class="property-card__type">{{ property.buildingType.name }}</span>
      </div>

      <div class="property-card__row">
        <span class="property-card__beds">{{ bedSummaryText }}</span>
        <span class="property-card__price">Starting from ${{ property.minimumPrice }}</span>
      </div>
    </div>
  </article>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'

type BuildingType = {
  id: number
  name: string
}

export type Property = {
  id: number
  buildingName: string
  address: string
  buildingType: BuildingType
  photo: string
  minimumPrice: number
  bedsSummary: number[]
  featured: boolean
  availability: number
}

export default defineComponent({
  name: 'PropertyCard',
  props: {
    property: {
      type: Object as PropType<Property>,
      required: true
    }
  },
  computed: {
    imageSrc(): string {
      return `/${this.property.photo}`
    },

    // here turns [0,1,2] into "0, 1 & 2 Bedrooms"
    bedSummaryText(): string {
      const beds = this.property.bedsSummary || []
      if (!beds.length) return ''

      if (beds.length === 1) return `${beds[0]} Bedroom`

      const last = beds[beds.length - 1]
      const firstPart = beds.slice(0, -1).join(', ')
      return `${firstPart} & ${last} Bedrooms`
    }
  }
})
</script>

<style lang="scss">
.property-card {
  border-radius: 0.5rem;
  overflow: hidden;
  background: #fff;
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-4px);
  }

  &__media {
    position: relative;
  }

  &__image {
    width: 100%;
    height: 220px;
    object-fit: cover;
    display: block;
  }

  &__pill {
    position: absolute;
    top: 0.75rem;
    left: 0.75rem;
    padding: 0.25rem 0.75rem;
    border-radius: 999px;
    font-size: 0.65rem;
    font-weight: 700;
    background: #2f3b1f;
    color: #fff;
  }

  &__body {
    padding: 0.9rem;
    display: flex;
    flex-direction: column;
    gap: 0.35rem;
  }

  &__title {
    margin: 0;
    font-size: 1.15rem;
    font-weight: 700;
  }

  &__row {
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    font-size: 0.75rem;
  }

  &__address,
  &__type {
    font-weight: 600;
  }

  &__price {
    color: #2f3b1f;
    font-weight: 700;
  }
}
</style>
