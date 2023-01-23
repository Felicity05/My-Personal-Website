import { mount } from '@vue/test-utils'
import About from '@/components/About.vue'

// sanity check
describe('About', () => {
    it('is setup correctly', () => {
        expect(true).toBe(true)
    })

// Mount an instance and checks the existance of an element
    it('contains an image', () => {
        const wrapper = mount(About)
        expect(wrapper.contains('img')).toBe(true)
  })
})