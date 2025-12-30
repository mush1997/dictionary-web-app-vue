<script setup>
import SearchResultTopPart from '@/components/SearchResultTopPart.vue'
import SearchResultMiddlePart from '@/components/SearchResultMiddlePart.vue'
import SearchResultBottomPart from '@/components/SearchResultBottomPart.vue'
import { computed } from 'vue'

const { result } = defineProps(['result'])

//the expected 'meanings' should be an array consisting of at least one object
const validMeanings = computed(() => Array.isArray(result.meanings) && result.meanings[0] && typeof result.meanings[0] === 'object' && !Array.isArray(result.meanings[0]))

//the expected 'sourceUrls' should be an array consisting of one non-empty string
const validSourceUrls = computed(() => Array.isArray(result.sourceUrls) && result.sourceUrls[0] && typeof result.sourceUrls[0] === 'string')
</script>

<template>
    <div class="transitionWrapper">
        <SearchResultTopPart :result />
        <SearchResultMiddlePart v-show="validMeanings" :meanings="result.meanings" />
        <SearchResultBottomPart v-show="validSourceUrls" :source="result.sourceUrls[0]" />
    </div>
</template>