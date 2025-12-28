<script setup>
import { useModeStore } from '@/stores/mode'
import { storeToRefs } from 'pinia'

const { result } = defineProps(['result'])
const { isDarkMode } = storeToRefs(useModeStore())
// const audioSrc = result.value.phonetics[result.phonetics.length - 1].audio
</script>

<template>
    <div class="transitionWrapper">
        <div class="topPart">
            <hgroup>
                <h1>{{ result.word }}</h1>
                <p>{{ result.phonetic }}</p>
            </hgroup>
            <a :src="''" controls>
                <img v-show="!isDarkMode" class="playBtn" src="@/assets/images/icon-play.svg" alt="play button">
                <img v-show="isDarkMode" class="playBtn" src="@/assets/images/icon-play-dark-mode.svg"
                    alt="play button">
            </a>
        </div>

        <div class="middlePart">
            <div class="allMeanings" v-for="meaning in result.meanings" :key="meaning.partOfSpeech">
                <h2><span>{{ meaning.partOfSpeech }}</span></h2>
                <h3>Meaning</h3>
                <ul>
                    <li v-for="definition in meaning.definitions" :key="definition.definition">
                        <span>{{ definition.definition }}</span>
                        <p v-if="definition.example">“{{ definition.example }}”</p>
                    </li>
                </ul>
                <p class="synonyms" v-if="meaning.synonyms.length">Synonyms
                    <span v-for="synonym in meaning.synonyms" :key="synonym">{{ synonym }}</span>
                </p>
            </div>
        </div>

        <p class="bottomPart">
            <span>Source</span>
            <a :href="result.sourceUrls[0]" target="_blank">{{ result.sourceUrls[0] }}</a>
            <img src="@/assets/images/icon-new-window.svg" alt="">
        </p>
    </div>
</template>

<style lang="scss" scoped>
.topPart {
    margin-bottom: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    h1 {
        font-size: 64px;
        line-height: 77px;
        font-weight: bold;
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

.middlePart {
    margin-bottom: 40px;
    border-bottom: 1px solid $medium_gray;

    .allMeanings {
        margin-bottom: 40px;
    }

    h2 {
        margin-bottom: 40px;
        font-size: 24px;
        line-height: 29px;
        font-weight: bold;
        font-style: italic;
        position: relative;

        &::after {
            content: "";
            width: calc(100%);
            height: 1px;
            background-color: $medium_gray;
            display: inline-block;
            position: absolute;
            top: 50%;
            right: 0;
            z-index: -1;
        }

        span {
            padding-right: 16px;
            background-color: $white;
        }
    }

    h3 {
        margin-bottom: 25px;
        font-size: 20px;
        line-height: 24px;
        color: $dark_gray;
    }

    ul {
        margin-bottom: 52px;

        li {
            margin: 12px 0;
            padding-left: 25px;
            font-size: 18px;
            line-height: 24px;
            list-style-type: none;
            position: relative;

            &::before {
                content: "•";
                color: $purple;
                display: inline-block;
                position: absolute;
                top: 0;
                left: 20px;
            }

            span {
                padding-left: 20px;
                display: inline-block;
            }

            p {
                margin-top: 12px;
                padding-left: 20px;
                color: $dark_gray;
            }
        }
    }

    .synonyms {
        font-size: 20px;
        line-height: 24px;
        color: $dark_gray;

        span {
            margin: 6px 24px;
            font-weight: bold;
            color: $purple;
            display: block;
        }
    }
}

.bottomPart {
    span {
        font-size: 14px;
        line-height: 17px;
        text-decoration: underline;
        color: $dark_gray;
    }

    a {
        margin-left: 20px;
        font-size: 14px;
        line-height: 17px;
        color: $medium_black;
        text-decoration: underline;
    }

    img {
        margin-left: 10px;
        width: 12px;
        height: 12px;
        display: inline-block;
        vertical-align: middle;
    }
}

@media screen and (hover: hover) {
    .playBtn:hover {
        cursor: pointer;
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

    .middlePart {
        margin-bottom: 24px;

        .allMeanings {
            margin-bottom: 32px;
        }

        h2 {
            margin-bottom: 32px;
            font-size: 18px;
            line-height: 24px;
        }

        h3 {
            margin-bottom: 16px;
            font-size: 16px;
            line-height: 20px;
        }

        ul {
            margin-bottom: 25px;

            li {
                margin: 12px 0;
                padding-left: 0;
                font-size: 15px;
                line-height: 24px;

                &::before {
                    left: 0;
                }

                span {
                    padding-left: 25px;
                }

                p {
                    padding-left: 25px;
                }
            }
        }

        .synonyms {
            font-size: 16px;
            line-height: 20px;
        }
    }

    .bottomPart {
        span {
            margin-bottom: 8px;
            display: block;
        }

        a {
            margin-left: 0;
        }
    }
}
</style>