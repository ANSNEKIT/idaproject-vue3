<template>
    <textarea class="textarea"></textarea>
</template>

<script setup></script>

<style lang="scss" scoped>
$color-bg: #fffefb;
$color-placeholder: #b4b4b4;
$color-border: #999;

.textarea {
    width: 100%;
    background: $color-bg;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    padding: 10px 16px 11px 16px;
    outline: none;
    resize: none;
    border: 1px solid transparent;

    font-family: 'Source Sans Pro';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;

    &:active,
    &:focus {
        border: 1px solid $color-border;
    }

    &::placeholder {
        color: $color-placeholder;
    }
}
</style>
