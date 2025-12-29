<script setup>
import { useDataStore } from '@/stores/data'
import { storeToRefs } from 'pinia'
import { computed, useTemplateRef } from 'vue'

const { result } = defineProps(['result'])
const { searchWord } = storeToRefs(useDataStore())
const audioPlayer = useTemplateRef('audioPlayer')

const keyword = computed(() => (result.word && typeof result.word === 'string' && result.word.length > 0) ? result.word : searchWord.value.toLowerCase())

const IPA = computed(() => {
    if (result.phonetic && typeof result.phonetic === 'string' && result.phonetic.startsWith('/')) {
        return result.phonetic
    }

    if (result.phonetics && Array.isArray(result.phonetics) && result.phonetics.length) {
        return result.phonetics.find((obj) => obj.text && typeof obj.text === 'string' && obj.text.startsWith('/')).text
    }

    return null
})

const audioSrc = computed(() => {
    if (result.phonetics && Array.isArray(result.phonetics) && result.phonetics.length) {
        return result.phonetics.find((obj) => obj.audio && typeof obj.audio === 'string' && obj.audio.endsWith('.mp3')).audio
    }

    return null
})

function playAudio() {
    if (audioPlayer.value) { audioPlayer.value.play() }
}
</script>

<template>
    <div class="topPart">
        <hgroup>
            <h1>{{ keyword }}</h1>
            <p>{{ IPA }}</p>
        </hgroup>
        <div class="playBtn" v-show="audioSrc" :src="audioSrc" @click="playAudio">
            <audio :src="audioSrc" ref="audioPlayer"></audio>
            <img src="@/assets/images/icon-play.svg" alt="play audio">
        </div>
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
        position: relative;

        &::after {
            content: url("@/assets/images/icon-play-hover.svg");
            width: 75px;
            height: 75px;
            display: block;
            position: absolute;
            top: 0;
            left: 0;
            visibility: hidden;
        }

        img {
            width: 75px;
            height: 75px;
            display: block;
        }
    }
}

@media screen and (hover: hover) {
    .playBtn:hover {
        cursor: pointer;

        &::after {
            visibility: visible;
        }

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
            &::after {
                width: 48px;
                height: 48px;
            }

            img {
                width: 48px;
                height: 48px;
            }
        }
    }
}
</style>