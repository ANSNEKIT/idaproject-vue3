<template>
    <input class="input" :type="type" />
</template>

<script setup>
defineProps({
    type: {
        type: String,
        default: 'text',
    },
});
</script>

<style lang="scss" scoped>
$color-bg: #FFFEFB;
$color-placeholder: #B4B4B4;
    .input {
        width: 100%;
        background: $color-bg;
        box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
        border-radius: 4px;
        padding: 10px 16px 11px 16px;
        border: none;
        outline: none;

        &::placeholder {
            color: $color-placeholder;
        }
    }
</style>
