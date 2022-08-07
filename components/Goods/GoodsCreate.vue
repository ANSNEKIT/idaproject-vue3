<template>
    <form class="good-create" @submit.prevent>
        <div class="good-create__element">
            <label class="good-create__label" for="price-name">
                Наименование товара
                <span class="good-create__label-require"></span>
            </label>
            <UIBaseInput id="price-name" placeholder="Введите наименование товара" required />
        </div>
        <div class="good-create__element">
            <label class="good-create__label">
                Описание товара
            </label>
            <UIBaseTextarea placeholder="Введите описание товара" rows="6" />
        </div>
        <div class="good-create__element">
            <label class="good-create__label" for="image-source">
                Ссылка на изображение товара
                <span class="good-create__label-require"></span>
            </label>
            <UIBaseInput id="image-source" placeholder="Введите ссылку" required />
        </div>
        <div class="good-create__element">
            <label class="good-create__label" for="price">
                Цена товара
                <span class="good-create__label-require"></span>
            </label>
            <UIBaseInput id="price" placeholder="Введите цену" pattern="^[0-9]" maxlenght="7"/>
        </div>
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
