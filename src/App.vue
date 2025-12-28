<script setup>
import HeaderSection from '@/components/HeaderSection.vue'
import LoadingBar from '@/components/LoadingBar.vue'
import NoDataFound from '@/components/NoDataFound.vue'
import SearchResult from '@/components/SearchResult.vue'

import { useDataStore } from '@/stores/data'
import { storeToRefs } from 'pinia'

const { searchWord, finished, result } = storeToRefs(useDataStore())
</script>

<template>
  <HeaderSection />
  <main v-show="searchWord">
    <Transition name="fade" mode="out-in">
      <LoadingBar v-if="finished === false" />
      <NoDataFound v-else-if="finished && result.title" :result />
      <SearchResult v-else-if="finished && result.length" :result="result[0]" />
    </Transition>
  </main>
</template>

<style lang="scss" src="@/styles/shared-setting.scss"></style>

<style lang="scss">
.dark {
  background-color: $black;
  color: $white;

  .options {
    background-color: $dark_black;
    box-shadow: 0 0 20px 1px $purple;
  }

  .searchInput input {
    border-color: $dark_black;
    background-color: $dark_black;
    color: $white;

    &::placeholder {
      color: $white;
      opacity: 1;
    }
  }

  .middlePart {
    border-color: $light_black;
  }

  h2 {
    &::after {
      background-color: $light_black;
    }

    span {
      background-color: $black;
    }
  }

  .sourceLink {
    color: $white;
  }

  .noDataTitle {
    color: $white;
  }
}

main {
  width: 100%;
}

.fade-enter-from {
  opacity: 0;
}

.fade-enter-active {
  transition: opacity 0.4s ease-in-out;
}
</style>