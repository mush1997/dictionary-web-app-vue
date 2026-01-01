<script setup>
import { ref, watch } from 'vue'

const body = document.body
const showOptions = ref(false)
const selectedFont = ref('inter')
const selectedFontType = ref('Sans Serif')

const options = [
    { font: 'inter', type: 'Sans Serif' },
    { font: 'lora', type: 'Serif' },
    { font: 'inconsolata', type: 'Mono' }
]

function changeFont(font, type) {
    selectedFont.value = font
    selectedFontType.value = type
    showOptions.value = false
}

watch(selectedFont, (newVal, oldVal) => {
    if (newVal === oldVal) { return }

    body.classList.add(newVal)
    body.classList.remove(oldVal)
}, { immediate: true }
)
</script>

<template>
    <li class="dropdown">
        <div class="dropdownBtn" @click="showOptions = !showOptions">
            <span>{{ selectedFontType }}</span>
            <img src="@/assets/images/icon-arrow-down.svg" alt="arrow">
        </div>
        <div class="options" :class="{ 'show': showOptions }">
            <p v-for="option in options" :class="option.font" @click="changeFont(option.font, option.type)"
                :key="option.font">{{ option.type }}
            </p>
        </div>
    </li>
</template>

<style lang="scss" scoped>
.dropdown {
    padding-right: 24px;
    border-right: 1px solid $medium_gray;
    position: relative;
}

.dropdownBtn {
    display: flex;
    align-items: center;

    span {
        margin-right: 18px;
        font-size: 18px;
        font-weight: bold;
        line-height: 24px;
    }

    img {
        display: block;
    }
}

.options {
    padding: 8px 24px;
    width: 180px;
    border-radius: 10px;
    background-color: $white;
    box-shadow: 0 0 16px 1px $medium_gray;
    position: absolute;
    top: 42px;
    right: 24px;
    visibility: hidden;
    z-index: 10;

    p {
        margin: 16px 0;
        width: fit-content;
        font-size: 18px;
        font-weight: bold;
        line-height: 24px;
    }
}

.options.show {
    visibility: visible;
    animation: showing 0.4s;
}

@media screen and (hover: hover) {
    .dropdownBtn:hover {
        cursor: pointer;
    }

    .options p:hover {
        cursor: pointer;
        color: $purple;
    }
}

@media screen and (max-width:500px) {
    .dropdown {
        padding-right: 16px;
    }

    .dropdownBtn span {
        margin-right: 16px;
        font-size: 14px;
    }

    .options {
        padding: 8px 16px;
        width: 140px;
        right: 16px;

        p {
            margin: 8px 0;
            font-size: 14px;
        }
    }
}
</style>