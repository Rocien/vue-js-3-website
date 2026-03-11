export type TSelectFilterSizes = 'large' | 'medium' | 'small' | 'xlarge'

export type TSelectFilter = {
  modelValue: any
  label: string
  options: any
  inputSize?: TSelectFilterSizes | 'xxlarge'
}

export type FilterOption = {
  text: string
  value: string | null
}

// type TSelectInputSize = Omit<TSelectFilter, 'label'>

// export type TSelectFilterOptionalProps = {
//   inputSize?: TSelectFilterSizes
// }

// export type TSelectFilter = TSelectFilterOptionalProps & TSelectFilterRequired

// import SelectFilter from '@/components/Filters/select-filter.vue'

// export type TSelectFilter = InstanceType<typeof SelectFilter>['$props']