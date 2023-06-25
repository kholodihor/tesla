import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Interior from '../Interior.vue'

const interiorProps = {
  title: 'interior of the future',
  image: 'model_s/model-s-interior.webp'
}

describe('Interior', () => {
  it('renders section properly', () => {
    const wrapper = mount(Interior, { props: { store: interiorProps } })
    const image = wrapper.find('image')
    expect(wrapper.text()).toContain('interior of the future')
    expect(image).toBeDefined()
  })
})
