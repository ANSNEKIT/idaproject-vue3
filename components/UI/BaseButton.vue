<template>
    <button class="button">
        <template v-if="!isShowIcon">
            <slot />
        </template>
        <template v-if="isShowIcon">
            <slot name="icon" />
        </template>
    </button>
</template>

<script setup>
defineProps({
    isShowName: {
        type: Boolean,
        default: true,
    },
    isShowIcon: {
        type: Boolean,
        default: false,
    },
    name: {
        type: String,
        default: '',
    },
});
</script>

<style lang="scss" scoped>
$color-bg-disabled: #eee;
$color-bg: #7bae73;
$color-gray: #b4b4b4;
$color-white: #fff;

.button {
    width: 100%;
    padding: 10px 0 11px 0;

    display: flex;
    justify-content: center;
    align-items: center;

    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 15px;
    text-align: center;
    letter-spacing: -0.02em;

    outline: none;
    border: none;
    border-radius: 10px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    cursor: pointer;

    color: $color-white;
    background: $color-bg;

    &:disabled {
        background: $color-bg-disabled;
        color: $color-gray;
        box-shadow: none;
    }
}
</style>
