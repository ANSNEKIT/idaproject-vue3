<template>
    <div class="page-index">
        <h1 class="page-index__title">Добавление товара</h1>
        <div class="flex-container">
            <ClientOnly>
                <GoodsCreate />
                <Goods />
            </ClientOnly>
        </div>
    </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.page-index {
    width: 100%;
    height: 100%;
    padding: 32px;

    &__title {
        font-weight: 600;
        font-size: 28px;
        line-height: 35px;

        margin-bottom: 16px;
    }
}

.flex-container {
    display: flex;
    gap: 16px;
    align-items: flex-start;
}
</style>
