<script setup>
import { useModeStore } from '@/stores/mode'
import { storeToRefs } from 'pinia'

const { result } = defineProps(['result'])
const { isDarkMode } = storeToRefs(useModeStore())
// const audioSrc = result.value.phonetics[result.phonetics.length - 1].audio
</script>

<template>
    <div class="topPart">
        <hgroup>
            <h1>{{ result.word }}</h1>
            <p>{{ result.phonetic }}</p>
        </hgroup>
        <a :src="''" controls>
            <img v-show="!isDarkMode" class="playBtn" src="@/assets/images/icon-play.svg" alt="play button">
            <img v-show="isDarkMode" class="playBtn" src="@/assets/images/icon-play-dark-mode.svg" alt="play button">
        </a>
    </div>
</template>

<style lang="scss" scoped>
.topPart {
    margin-bottom: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    h1 {
        padding-right: 16px;
        font-size: 64px;
        line-height: 77px;
        font-weight: bold;
        word-break: break-all;
    }

    p {
        margin-top: 8px;
        font-size: 24px;
        line-height: 29px;
        color: $purple;
    }

    .playBtn {
        width: 75px;
        height: 75px;
        display: block;
    }
}

@media screen and (hover: hover) {
    .playBtn:hover {
        cursor: pointer;
        filter: $purple;
    }
}

@media screen and (max-width:500px) {
    .topPart {
        margin-bottom: 32px;

        h1 {
            font-size: 32px;
            line-height: 40px;
        }

        p {
            font-size: 18px;
            line-height: 24px;
        }

        .playBtn {
            width: 48px;
            height: 48px;
        }
    }
}
</style>