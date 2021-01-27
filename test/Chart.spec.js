import { mount } from '@vue/test-utils'
import Chart from '~/components/Chart.vue'

describe('Chart', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Chart)
    expect(wrapper.vm).toBeTruthy()
  })
})
