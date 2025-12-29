<script setup>
import SearchInput from '@/components/SearchInput.vue'
import FontsDropdown from '@/components/FontsDropdown.vue'
import DarkModeSwitch from '@/components/DarkModeSwitch.vue'
import { useDataStore } from '@/stores/data'

const { resetData } = useDataStore()
</script>

<template>
    <header>
        <nav>
            <img class="logo" src="/logo.svg" alt="logo" @click="resetData">
            <ul>
                <FontsDropdown />
                <DarkModeSwitch />
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
    }
}

@media screen and (hover: hover) {
    .logo:hover {
        cursor: pointer;
    }
}

@media screen and (max-width:500px) {
    .logo {
        width: 28px;
    }
}
</style>