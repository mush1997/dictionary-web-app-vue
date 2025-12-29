<script setup>
import { useDataStore } from '@/stores/data'
import { useFontStore } from '@/stores/font'
import { storeToRefs } from 'pinia'
import { ref, computed } from 'vue'

const dataStore = useDataStore()
const { hasSearched, searchWord } = storeToRefs(dataStore)
const { getWordData } = dataStore
const { selectedFont } = storeToRefs(useFontStore())
const prevSearchWord = ref('')
const correctFormat = computed(() => /^[a-zA-Z\s-']+$/.test(searchWord.value))
const emptyInput = computed(() => searchWord.value === '')
const wrongInput = computed(() => !correctFormat.value && !emptyInput.value)

const warningMsg = computed(() => {
    if (hasSearched.value && emptyInput.value) {
        return 'Whoops, can’t be empty…'
    } else if (wrongInput.value) {
        return 'Whoops, wrong format…'
    } else {
        return null
    }
})

function goSearching() {
    hasSearched.value = true
    if (warningMsg.value || prevSearchWord.value === searchWord.value) { return }
    getWordData()
    prevSearchWord.value = searchWord.value
}
</script>

<template>
    <div class="searchInput">
        <input :class="[selectedFont, { 'warning': warningMsg }]" type="text" placeholder="Search for any word…"
            v-model.trim="searchWord" @keyup.enter="goSearching()" />
        <img class="searchBtn" src="@/assets/images/icon-search.svg" alt="search" @click="goSearching()">
        <p v-show="warningMsg">{{ warningMsg }}</p>
    </div>
</template>

<style lang="scss" scoped>
.searchInput {
    margin: 50px 0;
    width: 100%;
    height: 64px;
    position: relative;

    .searchBtn {
        width: 16px;
        height: 16px;
        display: block;
        position: absolute;
        top: 50%;
        right: 24px;
        transform: translateY(-50%);
    }

    input {
        padding: 20px 24px;
        width: 100%;
        height: 100%;
        outline: none;
        border-radius: 10px;
        border: 1px solid $light_gray;
        background-color: $light_gray;
        font-size: 20px;
        line-height: 24px;
        font-weight: bold;
        color: $medium_black;
        position: relative;

        &::placeholder {
            color: $medium_black;
            opacity: 0.25;
        }

        &:focus {
            border: 1px solid $purple;
            caret-color: $purple;
        }
    }

    input.warning {
        border-color: $warning;
    }

    p {
        padding-top: 8px;
        font-size: 20px;
        line-height: 24px;
        color: $warning;
        position: absolute;
        top: 100%;
        left: 0;
    }
}

@media screen and (hover: hover) {
    .searchBtn:hover {
        cursor: pointer;
    }
}

@media screen and (max-width:500px) {
    .searchInput {
        margin: 24px 0;
        height: 48px;

        input {
            padding: 14px 24px;
            font-size: 16px;
        }

        p {
            font-size: 16px;
            line-height: 20px;
        }
    }
}
</style>