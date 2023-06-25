import { describe, it, expect, beforeAll, beforeEach, afterEach } from 'vitest'
import { mount } from '@vue/test-utils'
import { setActivePinia, createPinia } from 'pinia'
import { useModelSStore } from '../../stores/model_s'
import Video from '../Video.vue'

beforeAll(() => {
  setActivePinia(createPinia())
})

describe('Video', () => {
  let store

  beforeEach(() => {
    store = useModelSStore()
  })

  afterEach(() => {
    store.$reset()
  })

  it('renders VideoSection properly', () => {
    const videoProps = store.videoSlider
    const wrapper = mount(Video, { props: { store: videoProps } })
    const video = wrapper.find('video')
    expect(wrapper.text()).toContain('Cinematic Experience')
    expect(video).toBeDefined()
  })

  it('should change a tab', async () => {
    const videoProps = store.videoSlider
    const wrapper = mount(Video, { props: { store: videoProps } })
    const buttons = wrapper.findAll('[data-type="changeTab"]')
    await buttons[1].trigger('click')
    expect(wrapper.text()).toContain('Yoke Steering')
  })
})
