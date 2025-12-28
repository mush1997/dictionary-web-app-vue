import { defineStore } from 'pinia'
import { ref, watch } from 'vue'

export const useFontStore = defineStore('font', () => {
    const selectedFont = ref('inter')

    watch(selectedFont, (newVal, oldVal) => {
        if (newVal === oldVal) { return }

        document.body.classList.remove(oldVal)
        if (oldVal === 'lora') { document.body.classList.remove('lora-italic') }

        document.body.classList.add(newVal)
        if (newVal === 'lora') { document.body.classList.add('lora-italic') }
    }, { immediate: true }
    )

    return { selectedFont }
})