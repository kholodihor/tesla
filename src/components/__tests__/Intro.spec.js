import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import { render, screen } from '@testing-library/vue'
import { useRoute } from 'vue-router'
import Intro from '../Intro.vue'

vi.mock('vue-router')

const introProps = {
  image: 'home/models.webp',
  title: 'Model S',
  subtitle: 'Plaid',
  characteristics: [
    {
      number: '396 mi',
      desc: 'Range (EPA est.) '
    },
    {
      number: '1.99s',
      desc: '0-60 mph*'
    },
    {
      number: '200mph',
      desc: 'Top Speed'
    },
    {
      number: '1,020hp',
      desc: 'peak power'
    }
  ]
}

describe('Intro', () => {
  const routePath = '/model-s'
  useRoute.mockReturnValue({
    path: {
      routePath
    }
  })

  it('renders section properly', () => {
    const wrapper = mount(Intro, { props: { store: introProps } })
    const button = wrapper.find('button')
    const image = wrapper.find('image')
    const listItems = wrapper.findAll('li')
    expect(wrapper.text()).toContain('Model S')
    expect(button.text()).toBe('order now')
    expect(listItems.length).toBe(4)
    expect(listItems[2].text()).toContain('Top Speed')
    expect(image).toBeDefined()
  })

  it('renders subtitle correctly', async () => {
    render(Intro, { props: { store: introProps } })
    const subtitle = await screen.findByText('Plaid')
    expect(subtitle.innerHTML).toBe('Plaid')
    expect(subtitle.nodeName).toBe('P')
  })
})
