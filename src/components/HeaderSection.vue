<script setup>
import SearchInput from '@/components/SearchInput.vue'
import { ref } from 'vue'

import { useDataStore } from '@/stores/data'
import { useFontStore } from '@/stores/font'
import { useModeStore } from '@/stores/mode'
import { storeToRefs } from 'pinia'

const { resetData } = useDataStore()
const { selectedFont } = storeToRefs(useFontStore())
const { isDarkMode } = storeToRefs(useModeStore())
const showOptions = ref(false)
</script>

<template>
    <header>
        <nav>
            <img class="logo" src="/logo.svg" alt="logo" @click="resetData">
            <ul>
                <li class="dropdown">
                    <div class="dropdownBtn" @click="showOptions = !showOptions">
                        <span>Sans Serif</span>
                        <img class="arrow" src="@/assets/images/icon-arrow-down.svg" alt="arrow">
                    </div>
                    <div class="options" :class="{ 'show': showOptions }">
                        <p id="inter" @click="selectedFont = 'inter'; showOptions = false">Sans Serif</p>
                        <p id="lora" @click="selectedFont = 'lora'; showOptions = false">Serif</p>
                        <p id="inconsolata" @click="selectedFont = 'inconsolata'; showOptions = false">Mono</p>
                    </div>
                </li>
                <li class="modeSwitch">
                    <div :class="{ 'darkMode': isDarkMode }" @click="isDarkMode = !isDarkMode"></div>
                    <img src="@/assets/images/icon-moon.svg" alt="dark mode">
                </li>
            </ul>
        </nav>
        <SearchInput />
    </header>
</template>

<style lang="scss" scoped>
header {
    width: 100%;
}

nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.logo {
    width: 32px;
    display: block;
}

ul {
    display: flex;

    li {
        height: 32px;
        list-style: none;
        display: flex;
        align-items: center;

        span {
            font-size: 18px;
            font-weight: bold;
            line-height: 24px;
        }
    }
}

.dropdown {
    padding-right: 24px;
    border-right: 1px solid $medium_gray;
    position: relative;

    .arrow {
        margin-left: 18px;
        vertical-align: middle;
    }
}

.options {
    padding: 16px 24px;
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
        margin: 8px 0;
        width: fit-content;
        font-size: 18px;
        font-weight: bold;
        line-height: 24px;
    }

    #inter {
        font-family: 'inter', sans-serif;
        font-style: normal;
    }

    #lora {
        font-family: 'lora', serif;
        font-style: normal;
    }

    #inconsolata {
        font-family: 'inconsolata', monospace;
        font-style: normal;
    }
}

.options.show {
    visibility: visible;
    animation: showing 0.4s;
}

.modeSwitch {
    padding-left: 24px;

    div {
        width: 40px;
        height: 20px;
        border-radius: 10px;
        background-color: $dark_gray;
        display: inline-block;
        vertical-align: middle;
        position: relative;

        &::before {
            content: "";
            width: 14px;
            height: 14px;
            border-radius: 50%;
            background-color: $white;
            position: absolute;
            top: 3px;
            left: 3px;
        }
    }

    .darkMode {
        background-color: $purple;

        &::before {
            left: auto;
            right: 3px;
        }
    }

    img {
        margin-left: 20px;
        width: 20px;
        vertical-align: middle;
    }
}

@media screen and (hover: hover) {

    .logo:hover,
    .dropdownBtn:hover {
        cursor: pointer;
    }

    .options p:hover {
        cursor: pointer;
        color: $purple;
    }

    .modeSwitch div:hover {
        cursor: pointer;
        background-color: $purple;
    }
}

@media screen and (max-width:500px) {
    .logo {
        width: 28px;
    }

    ul li span {
        font-size: 14px;
    }

    .dropdown {
        padding-right: 16px;

        .arrow {
            margin-left: 16px;
        }
    }

    .options {
        padding: 8px 16px;
        width: 120px;

        p {
            font-size: 14px;
        }
    }

    .modeSwitch {
        padding-left: 16px;

        img {
            margin-left: 12px;
        }
    }
}
</style>