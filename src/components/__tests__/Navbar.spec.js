import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import { useRoute } from 'vue-router'
import Navbar from '../Navbar.vue'

vi.mock('vue-router')

describe('Navbar', () => {
  const routePath = '/model-s'
  useRoute.mockReturnValue({
    path: {
      routePath
    }
  })

  it('renders navbar properly', () => {
    const wrapper = mount(Navbar)
    const button = wrapper.find('button')
    const image = wrapper.find('image')
    expect(button.text()).toBe('Menu')
    expect(image).toBeDefined()
  })
})