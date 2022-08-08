<template>
    <ul class="goods">
        <Good
            v-for="good in items"
            :id="good.id"
            :key="good.id"
            :source="good.source"
            :title="good.title"
            :description="good.description"
            :price="good.price"
            @remove-product="onRemoveGood"
        />
    </ul>
</template>

<script setup>
import Good from './Good.vue';

defineProps({
    items: {
        type: Array,
        default: () => [],
        required: true,
    },
});
const emit = defineEmits(['removeProduct']);

const onRemoveGood = (goodId) => {
    emit('removeProduct', goodId);
};
</script>

<style lang="scss" scoped>
.goods {
    flex-grow: 1;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 16px;
    margin: 0;
    padding: 0;
}
</style>
