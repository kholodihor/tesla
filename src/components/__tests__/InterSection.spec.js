import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { render, screen } from '@testing-library/vue'
import InterSection from '../InterSection.vue'

const intersectionProps = {
  image:
    'https://tesla-cdn.thron.com/delivery/public/image/tesla/08585f00-c0b7-4bda-80e4-2b78406b5582/bvlatuR/std/4096x2560/Model-S-Performance-Hero-Desktop-LHD',
  title: 'Beyond Ludicrous',
  subtitle: 'Plaid',
  text: 'Model S Plaid has the quickest acceleration of any vehicle in production. Updated battery architecture for all Model S trims enables back-to-back track runs without performance degradation. ',
  characteristics: [
    {
      number: '1,020hp',
      desc: 'peak power'
    },
    {
      number: '9.23s',
      desc: '155 mph 1/4 mile'
    },
    {
      number: '1.99s',
      desc: '0-60 mph*'
    }
  ]
}

describe('InterSection', () => {
  it('renders section properly', () => {
    const wrapper = mount(InterSection, { props: { store:  intersectionProps } })
    const button = wrapper.find('button')
    const image = wrapper.find('image')
    const listItems = wrapper.findAll('li')
    expect(wrapper.text()).toContain('Beyond Ludicrous')
    expect(button.text()).toBe('order now')
    expect(listItems.length).toBe(3)
    expect(listItems[1].text()).toContain('9.23s')
    expect(image).toBeDefined()
  })

  it('renders subtitle correctly', async () => {
    render( InterSection, { props: { store:  intersectionProps } })
    const subtitle = await screen.findByText('Plaid')
    expect(subtitle.innerHTML).toBe('Plaid')
    expect(subtitle.nodeName).toBe('SPAN')
  })
})
