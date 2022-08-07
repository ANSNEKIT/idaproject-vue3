<template>
    <form class="good-create" @submit.prevent>
        <GoodsGoodCreateItem
            id="price-name"
            label="Наименование товара"
            :is-required-label="true"
            component-name="UIBaseInput"
            placeholder="Введите наименование товара"
            required
        />
        <GoodsGoodCreateItem
            id="description"
            label="Описание товара"
            :is-required-label="true"
            component-name="UIBaseTextarea"
            placeholder="Введите описание товара"
            rows="6"
            required
        />
        <GoodsGoodCreateItem
            id="image-source"
            label="Ссылка на изображение товара"
            :is-required-label="true"
            component-name="UIBaseInput"
            placeholder="Введите ссылку"
            required
        />
        <GoodsGoodCreateItem
            id="price"
            label="Цена товара"
            :is-required-label="true"
            component-name="UIBaseInput"
            type="number"
            placeholder="Введите цену"
            pattern="[0-9]+(\\.[0-9][0-9]?)?"
            maxlenght="7"
        />
        <UIBaseButton>Добавить товар</UIBaseButton>
    </form>
</template>

<script setup></script>

<style lang="scss" scoped>
$color-bg: #fffefb;
$color-require: #ff8484;

.good-create {
    flex-shrink: 0;
    width: 332px;
    background: $color-bg;
    box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04),
        0px 6px 10px rgba(0, 0, 0, 0.02);
    border-radius: 4px;
    padding: 24px;

    &__element {
        margin-bottom: 16px;
    }

    &__label {
        position: relative;
        font-size: 10px;
        line-height: 13px;
        letter-spacing: -0.02em;
        margin-bottom: 4px;

        &-require {
            position: absolute;
            top: 0;
            right: -4px;

            display: block;
            width: 4px;
            height: 4px;
            border-radius: 4px;
            background: $color-require;
        }
    }
}
</style>
