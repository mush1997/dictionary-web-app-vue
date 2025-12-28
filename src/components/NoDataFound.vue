<script setup>
const { result } = defineProps(['result'])
</script>

<template>
    <div>
        <p class="emoji">&#128533;</p>
        <p class="title">{{ result.title }}</p>
        <p class="msg">{{ result.message }} {{ result.resolution }}</p>
    </div>
</template>

<style lang="scss" scoped>
div {
    margin-top: 130px;
    text-align: center;

    .emoji {
        margin-bottom: 44px;
        font-size: 64px;
        line-height: 64px;
    }

    .title {
        font-size: 20px;
        font-weight: bold;
        color: $medium_black;
    }

    .msg {
        margin: 24px 0;
        font-size: 18px;
        line-height: 24px;
        color: $dark_gray;
    }
}

@media screen and (max-width:1024px) {}

@media screen and (max-width:500px) {
    div {
        margin-top: 60px;

        .emoji {
            margin-bottom: 36px;
            font-size: 48px;
            line-height: 48px;
        }

        .title {
            font-size: 18px;
        }

        .msg {
            font-size: 14px;
            line-height: 17px;
        }
    }
}
</style>