<script setup>
import SearchResultTopPart from '@/components/SearchResultTopPart.vue'
import SearchResultMiddlePart from '@/components/SearchResultMiddlePart.vue'
import SearchResultBottomPart from '@/components/SearchResultBottomPart.vue'

const { result } = defineProps(['result'])
</script>

<template>
    <div class="transitionWrapper">
        <SearchResultTopPart :result />
        <SearchResultMiddlePart :meanings="result.meanings" />
        <SearchResultBottomPart v-show="result.sourceUrls[0]" :source="result.sourceUrls[0]" />
    </div>
</template>