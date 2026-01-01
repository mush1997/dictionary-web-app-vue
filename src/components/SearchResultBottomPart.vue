<script setup>
const { source } = defineProps(['source'])
</script>

<template>
    <div class="bottomPart">
        <p>Source</p>
        <div>
            <a class="sourceLink" :href="source" target="_blank">{{ source }}</a>
            <img src="@/assets/images/icon-new-window.svg" alt="">
        </div>
    </div>
</template>

<style lang="scss" scoped>
.bottomPart {
    display: flex;
    flex-wrap: wrap;
    align-items: baseline;
    gap: 8px 20px;
}

p {
    font-size: 14px;
    line-height: 17px;
    text-decoration: underline;
    color: $dark_gray;
}

.sourceLink {
    margin-right: 10px;
    font-size: 14px;
    line-height: 17px;
    color: $medium_black;
    text-decoration: underline;
    word-break: break-all;
}

img {
    width: 12px;
    height: 12px;
    display: inline-block;
    vertical-align: middle;
}

@media screen and (max-width:500px) {
    .bottomPart {
        display: block;
    }

    p {
        margin-bottom: 8px;
    }
}
</style>