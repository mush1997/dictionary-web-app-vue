<script setup>
import { useDataStore } from '@/stores/data'
import { storeToRefs } from 'pinia'
import { useTemplateRef, computed } from 'vue'

const { word, phonetic, phoneticsArr } = defineProps(['word', 'phonetic', 'phoneticsArr'])
const { searchWord } = storeToRefs(useDataStore())
const audioPlayer = useTemplateRef('audioPlayer')

const titleWord = computed(() => (word && typeof word === 'string') ? word : searchWord.value.toLowerCase())
const validPhoneticsArr = computed(() => phoneticsArr && Array.isArray(phoneticsArr) && phoneticsArr.length)

const IPA = computed(() => {
    if (phonetic && typeof phonetic === 'string' && phonetic.startsWith('/')) {
        return phonetic
    }

    if (validPhoneticsArr.value) {
        const IPAtext = phoneticsArr.find((obj) => obj?.text && typeof obj.text === 'string' && obj.text.startsWith('/'))
        return IPAtext ? IPAtext.text : null
    }

    return null
})

const audioSrc = computed(() => {
    if (validPhoneticsArr.value) {
        const IPAaudio = phoneticsArr.find((obj) => obj?.audio && typeof obj.audio === 'string' && obj.audio.endsWith('.mp3'))
        return IPAaudio ? IPAaudio.audio : null
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
            <h1>{{ titleWord }}</h1>
            <p>{{ IPA }}</p>
        </hgroup>
        <div class="playBtn" v-show="audioSrc" @click="playAudio">
            <audio :src="audioSrc" ref="audioPlayer"></audio>
            <img src="@/assets/images/icon-play.svg" alt="play audio">
            <img src="@/assets/images/icon-play-hover.svg" alt="play audio">
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
        font-size: clamp(48px, 4.45vw, 64px);
        line-height: 1.25;
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

        img {
            width: 75px;
            height: 75px;
            display: block;
        }

        img:last-child {
            position: absolute;
            top: 0;
            left: 0;
            visibility: hidden;
        }
    }
}

@media screen and (hover: hover) {
    .playBtn:hover {
        cursor: pointer;

        img:last-child {
            visibility: visible;
        }

    }
}

@media screen and (max-width:500px) {
    .topPart {
        margin-bottom: 32px;

        h1 {
            font-size: 32px;
        }

        p {
            font-size: 18px;
            line-height: 24px;
        }

        .playBtn img {
            width: 48px;
            height: 48px;
        }
    }
}
</style>