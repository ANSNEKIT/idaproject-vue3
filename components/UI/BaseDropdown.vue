<template>
    <select class="select" @change="$emit('change', $event.target.value)">
        <option v-for="(item, index) in items" :key="index" :value="item.value">
            {{ item.name }}
        </option>
    </select>
</template>

<script setup>
defineProps({
    items: {
        type: Array,
        default: () => [],
    },
});
defineEmits(['change']);
</script>

<style lang="scss" scoped>
$color-bg: #fffefb;
$color-border: #999;
$color-text: #b4b4b4;

.select {
    width: min-content;
    position: relative;
    display: block;
    background: $color-bg;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    padding: 9px 30px 10px 16px;
    border: 1px solid transparent;
    outline: none;
    color: $color-text;
    cursor: pointer;

    appearance: none;
    background: url(~/assets/images/arrow.svg) no-repeat right;
    background-position-x: calc(100% - 16px);

    &:active,
    &:focus {
        border: 1px solid $color-border;
    }
}
</style>
