<template>
  <div class="select-filter">
    <label class="select-filter__label">{{ label }}</label>

    <select v-model="computedValue">
      <option v-for="(option, index) in options" :key="index" :value="option.value">
        {{ option.text }}
      </option>
    </select>
  </div>
</template>

<script lang="ts">
import type { PropType } from 'vue'
import { defineComponent } from 'vue'
import type { FilterOption } from '@/types'

export default defineComponent({
  props: {
    modelValue: {
      type: [String, Number, null],
      default: null
    },
    label: {
      type: String,
      default: ''
    },
    options: {
      type: Array as PropType<FilterOption[]>,
      default: () => []
    }
  },
  emits: ['update:modelValue'],
  computed: {
    computedValue: {
      get() {
        return this.modelValue
      },
      set(value: unknown) {
        this.$emit('update:modelValue', value)
      }
    }
  }
})
</script>

<style lang="scss">
.select-filter {
}
</style>
