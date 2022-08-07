<template>
    <textarea class="textarea"></textarea>
</template>

<script setup></script>

<style lang="scss" scoped>
$color-bg: #FFFEFB;
$color-placeholder: #B4B4B4;

.textarea {
    width: 100%;
    background: $color-bg;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    padding: 10px 16px 11px 16px;
    border: none;
    outline: none;
    resize: none;

    font-family: 'Source Sans Pro';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;

    &::placeholder {
        color: $color-placeholder;
    }
}
</style>
