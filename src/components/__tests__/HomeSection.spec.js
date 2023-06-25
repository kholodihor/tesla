import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import HomeSection from '../HomeSection.vue'

const homeProps = {
  image: 'home/model3.webp',
  title: 'Model 3',
  text: 'Order Online for Touchless Delivery',
  buttons: ['custom order', 'existing inventory']
}

describe('HomeSection', () => {
  it('renders properly', () => {
    const wrapper = mount(HomeSection, { props: { section: homeProps } })
    const buttons = wrapper.findAll('button')
    expect(wrapper.text()).toContain('Model 3')
    expect(buttons.length).toBe(2)
    expect(buttons[1].text()).toBe('existing inventory')
  })
})
