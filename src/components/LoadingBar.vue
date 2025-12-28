<template>
    <div class="loading">
        <p>Searching...</p>
    </div>
</template>

<style lang="scss" scoped>
.loading {
    height: 120px;
    display: flex;
    justify-content: center;
    align-items: center;
    animation: load 2s infinite;

    p {
        font-size: 40px;
        font-weight: bold;
        line-height: 44px;
        letter-spacing: 2px;
        color: $dark_gray;
    }
}

@keyframes load {
    0% {
        opacity: 0.2;
    }

    25% {
        opacity: 0.4;
    }

    50% {
        opacity: 0.6;
    }

    75% {
        opacity: 0.8;
    }

    100% {
        opacity: 1;
    }
}
</style>