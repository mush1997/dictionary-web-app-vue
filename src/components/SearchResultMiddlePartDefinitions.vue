<script setup>
const { definitions } = defineProps(['definitions'])
</script>

<template>
    <ul v-if="definitions && Array.isArray(definitions) && definitions.length">
        <li v-for="def in definitions" :key="def.definition">
            <span>{{ def.definition }}</span>
            <p v-if="def.example">“{{ def.example }}”</p>
        </li>
    </ul>
</template>

<style lang="scss" scoped>
li {
    margin: 12px 0;
    padding-left: 25px;
    font-size: 18px;
    line-height: 24px;
    list-style-type: none;
    position: relative;

    &::before {
        content: "•";
        color: $purple;
        display: block;
        position: absolute;
        top: 0;
        left: 20px;
    }

    span {
        padding-left: 20px;
        display: inline-block;
    }

    p {
        margin-top: 12px;
        padding-left: 20px;
        color: $dark_gray;
    }
}

@media screen and (max-width:500px) {
    li {
        padding-left: 0;
        font-size: 15px;

        &::before {
            left: 0;
        }

        span {
            padding-left: 25px;
        }

        p {
            padding-left: 25px;
        }
    }
}
</style>