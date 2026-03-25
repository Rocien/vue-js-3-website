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

/**
 * Hey Ross
 * 
 * Check type-guards, return types, difference between types
 * and interfaces.
 * 
 * Try adding type to any component you see, and ask yourself
 * how complicated is it to maintain, meaning try reducing 
 * hardcoded declarations.
 * 
 * DO NOT USE ANY
 */