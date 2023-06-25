import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { render, screen } from '@testing-library/vue'
import ImageSection from '../ImageSection.vue'

const imageSection = {
  image: '/model_s/models-scheme.webp',
  title: 'Built for Safety',
  subtitle: 'Safety',
  text: 'Safety is the most important part of every Tesla.'
}

describe('ImageSection', () => {
  it('renders section properly', () => {
    const wrapper = mount(ImageSection, { props: { store: imageSection } })
    const button = wrapper.find('button')
    expect(wrapper.text()).toContain('Built for Safety')
    expect(button.text()).toBe('order now')
  })

  it('renders subtitle correctly', async () => {
    render(ImageSection, { props: { store: imageSection } })
    const subtitle = await screen.findByText('Safety')
    expect(subtitle.innerHTML).toBe('Safety')
    expect(subtitle.nodeName).toBe('SPAN')
  })
})
