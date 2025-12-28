<script setup>
const { result } = defineProps(['result'])
</script>

<template>
    <div>
        <p class="noDataEmoji">&#128533;</p>
        <p class="noDataTitle">{{ result.title }}</p>
        <p class="noDataMsg">{{ result.message }} {{ result.resolution }}</p>
    </div>
</template>

<style lang="scss" scoped>
div {
    text-align: center;
}

.noDataEmoji {
    margin: 130px 0 44px 0;
    font-size: 64px;
    line-height: 64px;
}

.noDataTitle {
    font-size: 20px;
    line-height: 24px;
    font-weight: bold;
    color: $medium_black;
}

.noDataMsg {
    margin: 24px 0;
    font-size: 18px;
    line-height: 24px;
    color: $dark_gray;
}

@media screen and (max-width:500px) {
    .noDataEmoji {
        margin: 60px 0 36px 0;
        font-size: 48px;
        line-height: 48px;
    }

    .noDataTitle {
        font-size: 18px;
    }

    .noDataMsg {
        font-size: 14px;
        line-height: 17px;
    }
}
</style>