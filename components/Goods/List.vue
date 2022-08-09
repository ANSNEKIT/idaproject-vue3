<template>
    <TransitionGroup class="goods" tag="ul" name="product">
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
    </TransitionGroup>
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
    margin: 0;
    padding: 0;
    flex-grow: 1;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 16px;
}

.product-enter-from,
.product-leave-to {
    opacity: 0;
    transform: scale(0.4);
}

.product-leave-active {
    position: absolute;
}
</style>
