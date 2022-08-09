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
$color-bg: #fffefb;
$color-placeholder: #b4b4b4;
$color-border: #999;
.input {
    width: 100%;
    background: $color-bg;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    padding: 9px 16px 10px 16px;
    border: 1px solid transparent;
    outline: none;

    &:active,
    &:focus {
        border: 1px solid $color-border;
    }

    &::placeholder {
        color: $color-placeholder;
    }
}
</style>
