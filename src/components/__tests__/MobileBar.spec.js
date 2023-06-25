import { describe, it, expect, beforeAll, beforeEach, afterEach } from 'vitest'
import { mount } from '@vue/test-utils'
import { render, screen } from '@testing-library/vue'
import { setActivePinia, createPinia } from 'pinia'
import { useSidebarLinksStore } from '../../stores/sidebarlinks'
import SideBar from '../Sidebar.vue'
import CloseIcon from '../CloseIcon.vue'

beforeAll(() => {
  setActivePinia(createPinia())
})

describe('useSidebarLinksStore', () => {
  let store

  beforeEach(() => {
    store = useSidebarLinksStore()
  })

  afterEach(() => {
    store.$reset()
  })

  it('creates a store', () => {
    expect(store).toBeDefined()
  })
  it('store has a sidebarLinks object', () => {
    const sidebarLinks = store.mobilebarLinks
    expect(sidebarLinks).toBeDefined()
  })
})

describe('Grid', () => {
  let store

  beforeEach(() => {
    store = useSidebarLinksStore()
  })

  afterEach(() => {
    store.$reset()
  })

  it('renders sideBar properly', () => {
    const sideBarProps = store.mobilebarLinks
    const wrapper = mount(SideBar, { props: { links: sideBarProps } })
    const listItems = wrapper.findAll('li')
    const button = wrapper.find('button')
    expect(listItems.length).toBe(store.sidebarLinks.length)
    expect(button).toBeDefined()
  })

  it('renders icon properly', async () => {
    const sideBarProps = store.mobilebarLinks
    const wrapper = mount(SideBar, { props: { links: sideBarProps } })
    const icon =  wrapper.findComponent(CloseIcon)
    expect(icon).toBeDefined()
  })
})
