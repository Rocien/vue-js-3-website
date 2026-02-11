<template>
  <div class="uk-container">
    <h1
      v-if="activePage.pageTitle"
      class="home-page__title"
      :class="{
        'home-page__title--small': isTitleSmall
      }"
    >
      {{ activePage.pageTitle }}
    </h1>

    <p>
      {{ buildingAddress }}
    </p>

    <button class="uk-button uk-button-primary" @click="handleClickEvent">Click me</button>

    <p v-if="counter > 0">{{ counterComputed }}</p>
  </div>
</template>

<script lang="ts">
import { PropType } from 'vue'

type Page = {
  pageTitle: string
}

type Property = {
  buildingName: string
  streetNumber: number
  streetName?: string
  promotions?: []
}

export default {
  props: {
    page: {
      type: Object as PropType<Page>,
      required: true
    },
    overridePage: {
      type: Object as PropType<Page>
    },
    isTitleSmall: {
      type: Boolean
    }
  },
  data() {
    return {
      property: {
        buildingName: 'building 1',
        streetNumber: 40
      } as Property | null,
      counter: 0
    }
  },
  computed: {
    activePage() {
      if (this.overridePage) {
        return this.overridePage
      }

      return this.page
    },
    buildingAddress() {
      if (!this.property.streetName) {
        return 'NO ADDRESS'
      }

      return `${this.property.streetNumber} ${this.property.streetName}`
    },

    counterComputed() {
      return `The counter is ${this.counter}`
    }
  },
  async created() {
    await this.getProperty()
  },
  mounted() {},
  unmounted() {},
  methods: {
    async getProperty() {
      // code to get the property
    }
  }
}
</script>
