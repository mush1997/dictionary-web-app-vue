<script setup>
import { useDataStore } from '@/stores/data'
import { storeToRefs } from 'pinia'
import { ref } from 'vue'

const dataStore = useDataStore()
const { searchWord } = storeToRefs(dataStore)
const { getWordData } = dataStore
const prevSearchWord = ref('')

function goSearching() {
    if (prevSearchWord.value === searchWord.value) { return }
    getWordData()
    prevSearchWord.value = searchWord.value
}
</script>

<template>
    <div class="searchInput">
        <input type="text" placeholder="Search for any word…" v-model.trim="searchWord" @keyup.enter="goSearching()" />
        <img class="searchBtn" src="@/assets/images/icon-search.svg" alt="search" @click="goSearching()">
        <p>Whoops, can’t be empty…</p>
    </div>
</template>

<style lang="scss" scoped>
.searchInput {
    margin: 50px 0;
    position: relative;

    .searchBtn {
        width: 16px;
        height: 16px;
        position: absolute;
        top: 50%;
        right: 24px;
        transform: translateY(-50%);
    }

    input {
        padding: 20px 24px;
        width: 100%;
        outline: none;
        border-radius: 10px;
        border: 1px solid $light_gray;
        background-color: $light_gray;
        font-size: 20px;
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

    p {
        margin-top: 8px;
        color: $warning;
        display: none;
    }
}

.searchInput.warning {
    input {
        border-color: $warning;
    }

    p {
        display: block;
    }
}

@media screen and (hover: hover) {
    .searchBtn:hover {
        cursor: pointer;
    }
}

@media screen and (max-width:1024px) {}

@media screen and (max-width:500px) {
    .searchInput {
        margin: 24px 0;

        input {
            padding: 14px 24px;
            font-size: 16px;
        }
    }
}
</style>