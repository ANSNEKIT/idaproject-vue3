<template>
    <div class="page-index">
        <div class="flex-container flex-justify mb-16">
            <h1 class="page-index__title">Добавление товара</h1>
            <UIBaseDropdown :items="items" />
        </div>
        <div class="flex-container">
            <ClientOnly>
                <GoodsGoodCreate />
                <GoodsList />
            </ClientOnly>
        </div>
    </div>
</template>

<script setup>
const items = [
    { value: 'default', name: 'По умолчанию' },
    { value: 'a-z', name: 'По цене (A-Z)' },
    { value: 'z-a', name: 'По цене (Z-A)' },
];
</script>

<style lang="scss" scoped>
.page-index {
    width: 100%;
    height: 100%;
    padding: 32px;

    &__title {
        font-weight: 600;
        font-size: 28px;
        line-height: 35px;
    }
}

.flex-container {
    display: flex;
    gap: 16px;
    align-items: flex-start;
}

.flex-justify {
    justify-content: space-between;
}

.mb-16 {
    margin-bottom: 16px;
}
</style>
