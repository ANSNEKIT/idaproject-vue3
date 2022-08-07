<template>
    <select class="select">
        <option v-for="(item, index) in items" :key="index" :value="item.value">
            {{ item.option }}
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
</script>

<style lang="scss" scoped>
$color-bg: #FFFEFB;
    .select {
        width: 100%;
        background: $color-bg;
        box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
        border-radius: 4px;
        padding: 10px 16px 11px 16px;
        border: none;
    }
</style>
