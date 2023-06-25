import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Nav from '../Nav.vue'

describe('Nav', () => {
  const getWrapper = () =>
    mount(Nav, {
      global: {
        stubs: {
          'router-link': { template: '<div/>' }
        }
      }
    })

  it('the component should be mounted', () => {
    const wrapper = getWrapper()
    expect(wrapper.exists()).toBeTruthy()
  })

  it('renders nav correctly', () => {
    const wrapper = getWrapper()
    const listItems = wrapper.findAll('li')
    expect(listItems.length).toBe(6)
    expect(listItems[0]).toBeDefined()
    expect(listItems[0].html()).toBe('Model S')
  })
})
