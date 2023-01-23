import { mount } from '@vue/test-utils'
import Experience from '@/components/Experience.vue'

//checks the default data in the component
describe('Experience', () => {
  it('checks the correct default data', () => {
    const defaultData = Experience.data()
    expect(defaultData.isShown).toBe(true)
    expect(defaultData.isActive).toBe(true)
  })
})