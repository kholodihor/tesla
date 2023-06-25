import { beforeAll, describe, expect, it } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { mount } from '@vue/test-utils'
import Home from '../../views/Home.vue'

beforeAll(() => {
  setActivePinia(createPinia())
})

describe('App', () => {
  const getWrapper = () =>
    mount(Home, {
      global: {
        stubs: {
          'router-link': { template: '<div/>' },
          'router-view': { template: '<div/>' }
        }
      }
    })

  it('component should be mounted', () => {
    const wrapper = getWrapper()
    expect(wrapper.exists()).toBeTruthy()
  })

  it('should render title', () => {
    const wrapper = getWrapper()
    const titles = wrapper.findAll('[data-test-id="homeTitle"]')
    expect(titles[0].text()).toBe('Model 3')
  })
})
