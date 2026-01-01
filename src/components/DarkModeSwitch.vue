<script setup>
import { ref, watchEffect } from 'vue'

const body = document.body
const isDarkMode = ref(false)

watchEffect(() => {
    if (isDarkMode.value) {
        body.classList.add('dark')
    } else {
        body.classList.remove('dark')
    }
})
</script>

<template>
    <li class="modeSwitch" :class="{ 'darkMode': isDarkMode }">
        <p @click="isDarkMode = !isDarkMode"></p>
        <img v-show="!isDarkMode" src="@/assets/images/icon-moon.svg" alt="dark mode">
        <img v-show="isDarkMode" src="@/assets/images/icon-moon-dark-mode.svg" alt="dark mode">
    </li>
</template>

<style lang="scss" scoped>
.modeSwitch {
    padding-left: 24px;

    p {
        margin-right: 20px;
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

    img {
        width: 20px;
        vertical-align: middle;
    }
}

.modeSwitch.darkMode {
    p {
        background-color: $purple;

        &::before {
            left: auto;
            right: 3px;
        }
    }
}

@media screen and (hover: hover) {
    .modeSwitch p:hover {
        cursor: pointer;
        background-color: $purple;
    }
}

@media screen and (max-width:500px) {
    .modeSwitch {
        padding-left: 16px;

        p {
            margin-right: 12px;
        }
    }
}
</style>