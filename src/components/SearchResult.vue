<script setup>
import SearchResultTopPart from '@/components/SearchResultTopPart.vue'
import SearchResultMiddlePart from '@/components/SearchResultMiddlePart.vue'
import SearchResultBottomPart from '@/components/SearchResultBottomPart.vue'

const { result } = defineProps(['result'])
</script>

<template>
    <div class="transitionWrapper">
        <SearchResultTopPart :result />
        <SearchResultMiddlePart v-show="Array.isArray(result.meanings) && result.meanings.length"
            :meanings="result.meanings" />
        <SearchResultBottomPart v-show="Array.isArray(result.sourceUrls) && result.sourceUrls.length"
            :source="result.sourceUrls[0]" />
    </div>
</template>