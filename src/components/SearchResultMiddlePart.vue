<script setup>
const { meanings } = defineProps(['meanings'])
</script>

<template>
    <div class="middlePart">
        <div class="meaning" v-for="meaning in meanings" :key="meaning.partOfSpeech">
            <h2><span>{{ meaning.partOfSpeech }}</span></h2>
            <h3>Meaning</h3>
            <ul>
                <li v-for="definition in meaning.definitions" :key="definition.definition">
                    <span>{{ definition.definition }}</span>
                    <p v-if="definition.example">“{{ definition.example }}”</p>
                </li>
            </ul>
            <div class="synonyms" v-if="meaning.synonyms.length">
                <p>Synonyms</p>
                <p><span v-for="synonym in meaning.synonyms" :key="synonym">{{ synonym }}</span></p>
            </div>
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
        margin-right: 20px;
        font-weight: bold;
        color: $purple;
    }
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

    .synonyms {
        margin-top: 24px;
        font-size: 16px;
        line-height: 20px;
    }
}
</style>