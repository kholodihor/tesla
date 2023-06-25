import { describe, it, expect, beforeAll, beforeEach, afterEach } from 'vitest'
import { mount } from '@vue/test-utils'
import { render, screen } from '@testing-library/vue'
import { setActivePinia, createPinia } from 'pinia'
import { useModelSStore } from '../../stores/model_s'
import Grid from '../Grid.vue'

beforeAll(() => {
  setActivePinia(createPinia())
})

describe('ModelSStore', () => {
  let store

  beforeEach(() => {
    store = useModelSStore()
  })

  afterEach(() => {
    store.$reset()
  })

  it('creates a store', () => {
    expect(store).toBeDefined()
  })
  it('store has a grid object', () => {
    const grid = store.grid
    expect(grid).toBeDefined()
    expect(grid.length).toBe(3)
  })
})

describe('Grid', () => {
  let store

  beforeEach(() => {
    store = useModelSStore()
  })

  afterEach(() => {
    store.$reset()
  })

  it('renders section properly', () => {
    const gridProps = store.grid
    const wrapper = mount(Grid, { props: { store: gridProps } })
    const image = wrapper.find('image')
    expect(wrapper.text()).toContain('Stay Connected')
    expect(image).toBeDefined()
  })

  it('renders sections properly', async () => {
    const gridProps = store.grid
    render(Grid, { props: { store: gridProps } })
    const title = await screen.findByText('Stay Connected')
    expect(title.innerHTML).toBe('Stay Connected')
    expect(title.nodeName).toBe('H3')
    const blocks = await screen.findAllByTestId('block')
    expect(blocks.length).toBe(store.grid.length)
  })

})
