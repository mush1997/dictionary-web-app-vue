import { defineStore } from 'pinia'
import { ref, watch } from 'vue'

export const useFontStore = defineStore('font', () => {
    const body = document.body
    const selectedFont = ref('inter')
    const selectedFontType = ref('Sans Serif')

    watch(selectedFont, (newVal, oldVal) => {
        if (newVal === oldVal) { return }
        body.classList.remove(oldVal)
        body.classList.add(newVal)
    }, { immediate: true }
    )

    return { selectedFont, selectedFontType }
})