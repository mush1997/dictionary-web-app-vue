<script setup>
import SearchResultMiddlePartDefinitions from '@/components/SearchResultMiddlePartDefinitions.vue'
import SearchResultMiddlePartSynonyms from '@/components/SearchResultMiddlePartSynonyms.vue'

const { meanings } = defineProps(['meanings'])
</script>

<template>
    <div class="middlePart">
        <div class="meaning" v-for="meaning in meanings" :key="meaning.partOfSpeech">
            <template v-if="meaning && typeof meaning === 'object' && !Array.isArray(meaning)">
                <h2><span>{{ meaning.partOfSpeech }}</span></h2>
                <h3>Meaning</h3>
                <SearchResultMiddlePartDefinitions :definitions="meaning.definitions" />
                <SearchResultMiddlePartSynonyms :synonyms="meaning.synonyms" />
            </template>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.middlePart {
    margin-bottom: 20px;
    border-bottom: 1px solid $medium_gray;
}

.meaning {
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
        display: block;
        position: absolute;
        top: 50%;
        right: 0;
        z-index: -1;
    }

    span {
        padding-right: 20px;
        background-color: $white;
    }
}

h3 {
    margin-bottom: 24px;
    font-size: 20px;
    line-height: 24px;
    color: $dark_gray;
}

@media screen and (max-width:500px) {
    .middlePart {
        margin-bottom: 24px;
    }

    .meaning {
        margin-bottom: 32px;
    }

    h2 {
        margin-bottom: 32px;
        font-size: 18px;
        line-height: 24px;

        span {
            padding-right: 16px;
        }
    }

    h3 {
        margin-bottom: 16px;
        font-size: 16px;
        line-height: 20px;
    }
}
</style>