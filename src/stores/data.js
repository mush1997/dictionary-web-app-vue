import axios from 'axios'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useDataStore = defineStore('data', () => {
    const hasSearched = ref(false)
    const searchWord = ref('')
    const finished = ref(null)
    const result = ref([])

    async function getWordData() {
        try {
            finished.value = false
            const response = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${searchWord.value}`)
            result.value = response.data
        } catch (error) {
            console.log(error)
            result.value = error.response.data
        } finally {
            finished.value = true
        }
    }

    function resetData() {
        hasSearched.value = false
        searchWord.value = ''
        finished.value = null
        result.value = []
    }

    return { hasSearched, searchWord, finished, result, getWordData, resetData }
})