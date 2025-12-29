<script setup>
import HeaderSection from '@/components/HeaderSection.vue'
import LoadingBar from '@/components/LoadingBar.vue'
import SearchResult from '@/components/SearchResult.vue'
import NoDataFound from '@/components/NoDataFound.vue'
import { useDataStore } from '@/stores/data'
import { storeToRefs } from 'pinia'
import { computed } from 'vue'

const { finished, result } = storeToRefs(useDataStore())
const validResult = computed(() => Array.isArray(result.value) && result.value[0] && typeof result.value[0] === 'object' && result.value[0] !== null && !Array.isArray(result.value[0]))
const noDataResult = computed(() => typeof result.value === 'object' && result.value !== null && !Array.isArray(result.value))
</script>

<template>
  <HeaderSection />
  <main>
    <Transition name="fade" mode="out-in">
      <LoadingBar v-if="finished === false" />
      <SearchResult v-else-if="finished && validResult" :result="result[0]" />
      <NoDataFound v-else-if="finished && noDataResult" :result />
      <p class="fallbackMsg" v-else-if="finished">Something went wrong, please try again later...</p>
    </Transition>
  </main>
</template>

<style lang="scss" src="@/styles/shared-setting.scss"></style>

<style lang="scss">
main {
  width: 100%;
}

.fallbackMsg {
  margin-top: 130px;
  font-size: 24px;
  font-weight: bold;
  line-height: 29px;
  color: $dark_gray;
  text-align: center;
}

.fade-enter-from {
  opacity: 0;
}

.fade-enter-active {
  transition: opacity 0.4s ease-in-out;
}

@media screen and (max-width:500px) {
  .fallbackMsg {
    margin-top: 60px;
    font-size: 20px;
  }
}
</style>