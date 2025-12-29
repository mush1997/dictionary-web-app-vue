import { defineStore } from 'pinia'
import { ref, watchEffect } from 'vue'

export const useModeStore = defineStore('mode', () => {
    const body = document.body
    const isDarkMode = ref(false)

    watchEffect(() => {
        if (isDarkMode.value) {
            body.classList.add('dark')
        } else {
            body.classList.remove('dark')
        }
    })

    return { isDarkMode }
})