import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { render, screen } from '@testing-library/vue'
import VideoSection from '../VideoSection.vue'

const videoSectionProps = {
  video: 'https://www.tesla.com/sites/default/files/videos/Plaid-Range-Web-Desktop-8mb.mp4',
  title: 'Go Anywhere',
  subtitle: 'Range',
  text: 'With up to 405 miles of estimated range and access to the world’s largest and most powerful fast charging network, you’ll spend less time plugged in and more time on the road.'
}

describe('VideoSection', () => {
  it('renders section properly', () => {
    const wrapper = mount(VideoSection, { props: { store: videoSectionProps } })
    const button = wrapper.find('button')
    const video = wrapper.find('video')
    expect(wrapper.text()).toContain('Go Anywhere')
    expect(button.text()).toBe('order now')
    expect(video).toBeDefined()
  })

  it('renders subtitle correctly', async () => {
    render(VideoSection, { props: { store: videoSectionProps } })
    const subtitle = await screen.findByText('Range')
    expect(subtitle.innerHTML).toBe('Range')
    expect(subtitle.nodeName).toBe('SPAN')
  })
})
