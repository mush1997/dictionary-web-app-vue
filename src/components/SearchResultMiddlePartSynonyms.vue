<script setup>
const { synonyms } = defineProps(['synonyms'])
</script>

<template>
    <div class="synonyms" v-if="synonyms && Array.isArray(synonyms) && synonyms.length">
        <p>Synonyms</p>
        <p><span v-for="synonym in synonyms" :key="synonym">{{ synonym }}</span></p>
    </div>
</template>

<style lang="scss" scoped>
.synonyms {
    margin-top: 64px;
    font-size: 20px;
    line-height: 24px;
    color: $dark_gray;
    display: flex;
    flex-wrap: wrap;

    p:nth-child(1) {
        margin: 0 24px 8px 0;
    }

    p:nth-child(2) {
        display: flex;
        flex-wrap: wrap;
    }

    span {
        margin-right: 28px;
        font-weight: bold;
        color: $purple;
    }
}

@media screen and (max-width:500px) {
    .synonyms {
        margin-top: 24px;
        font-size: 16px;
        line-height: 20px;
        display: block;

        p:nth-child(2) {
            display: block;
        }

        span {
            margin-top: 6px;
            display: block;
        }
    }
}
</style>