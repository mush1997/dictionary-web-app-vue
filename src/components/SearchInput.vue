<script setup>
import { useDataStore } from '@/stores/data'
import { storeToRefs } from 'pinia'
import { ref, computed } from 'vue'

const dataStore = useDataStore()
const { hasSearched, searchWord } = storeToRefs(dataStore)
const { getWordData } = dataStore
const prevSearchWord = ref('')
const correctFormat = computed(() => /^[a-zA-Z\s-']{2,}$/.test(searchWord.value))
const emptyInput = computed(() => searchWord.value === '')
const wrongInput = computed(() => !correctFormat.value && !emptyInput.value)

const warningMsg = computed(() => {
    if (emptyInput.value && hasSearched.value) {
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
        <input :class="{ 'warning': warningMsg }" type="text" placeholder="Search for any word…"
            v-model.trim="searchWord" @keyup.enter="goSearching" />
        <img class="searchBtn" src="@/assets/images/icon-search.svg" alt="search" @click="goSearching">
        <p v-show="warningMsg">{{ warningMsg }}</p>
    </div>
</template>

<style lang="scss" scoped>
.searchInput {
    margin: 50px 0;
    width: 100%;
    height: calc(64px + 32px);
    position: relative;

    .searchBtn {
        width: 16px;
        height: 16px;
        display: block;
        position: absolute;
        top: 32px;
        right: 24px;
        transform: translateY(-50%);
    }

    input {
        padding: 20px 24px;
        width: 100%;
        height: 64px;
        outline: none;
        border-radius: 10px;
        border: 1px solid $light_gray;
        background-color: $light_gray;
        font-family: inherit;
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
        height: 32px;
        font-size: 20px;
        line-height: 24px;
        color: $warning;
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
        height: calc(48px + 28px);

        .searchBtn {
            top: 24px;
        }

        input {
            padding: 14px 24px;
            height: 48px;
            font-size: 16px;
        }

        p {
            height: 28px;
            font-size: 16px;
            line-height: 20px;
        }
    }
}
</style>