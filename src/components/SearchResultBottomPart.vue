<script setup>
const { source } = defineProps(['source'])
</script>

<template>
    <div>
        <span>Source</span>
        <a class="sourceLink" :href="source" target="_blank">{{ source }}</a>
        <img src="@/assets/images/icon-new-window.svg" alt="">
    </div>
</template>

<style lang="scss" scoped>
span {
    font-size: 14px;
    line-height: 17px;
    text-decoration: underline;
    color: $dark_gray;
}

.sourceLink {
    margin-left: 20px;
    font-size: 14px;
    line-height: 17px;
    color: $medium_black;
    text-decoration: underline;
    word-break: break-all;
}

img {
    margin-left: 10px;
    width: 12px;
    height: 12px;
    display: inline-block;
    vertical-align: middle;
}

@media screen and (max-width:500px) {
    span {
        margin-bottom: 8px;
        display: block;
    }

    .sourceLink {
        margin-left: 0;
    }
}
</style>