import { defineStore } from 'pinia'
import { ref, watchEffect } from 'vue'

export const useModeStore = defineStore('mode', () => {
    const isDarkMode = ref(false)

    watchEffect(() => {
        const body = document.body

        if (isDarkMode.value) {
            body.classList.add('dark')
        } else {
            body.classList.remove('dark')
        }
    })

    return { isDarkMode }
})