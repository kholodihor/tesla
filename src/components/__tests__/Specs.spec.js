import { describe, it, expect, beforeAll, beforeEach, afterEach } from 'vitest'
import { mount } from '@vue/test-utils'
import Specs from '../Specs.vue'
import { setActivePinia, createPinia } from 'pinia'
import { useModelSStore } from '../../stores/model_s'

beforeAll(() => {
  setActivePinia(createPinia())
})

describe('Specs', () => {
  let store

  beforeEach(() => {
    store = useModelSStore()
  })

  afterEach(() => {
    store.$reset()
  })

  it('renders section properly', () => {
    const specsProps = store.specs
    const specsLength = store.specs[0].specs.length
    const wrapper = mount(Specs, { props: { store: specsProps } })
    const buttons = wrapper.findAll('button')
    const image = wrapper.find('image')
    const listItems = wrapper.findAll('li')
    expect(buttons.length).toBe(store.specs.length)
    expect(buttons[0].text()).toBe('Model S Plaid')
    expect(listItems.length).toBe(specsLength)
    expect(listItems[1].text()).toContain('1/4mi')
    expect(image).toBeDefined()
  })
})
