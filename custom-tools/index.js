import Vue from 'vue'
import NumberInput from '~/custom-tools/NumberInput.vue'

const components = {
    NumberInput
}

Object.entries(components).forEach(([name, component]) => {
    Vue.component(name, component)
})