<template>
    <form class="good-create" @submit.prevent>
        <GoodsGoodCreateItem
            id="price-name"
            v-model.trim.lazy="form.title.value"
            class="good-create__item"
            label="Наименование товара"
            :is-required-label="true"
            component-name="UIBaseInput"
            placeholder="Введите наименование товара"
            required
        />
        <GoodsGoodCreateItem
            id="description"
            v-model.trim.lazy="form.description.value"
            class="good-create__item"
            label="Описание товара"
            :is-required-label="true"
            component-name="UIBaseTextarea"
            placeholder="Введите описание товара"
            rows="6"
            required
        />
        <GoodsGoodCreateItem
            id="image-source"
            v-model.trim.lazy="form.source.value"
            class="good-create__item"
            label="Ссылка на изображение товара"
            :is-required-label="true"
            component-name="UIBaseInput"
            placeholder="Введите ссылку"
            required
        />
        <GoodsGoodCreateItem
            id="price"
            v-model.trim.lazy="form.price.value"
            class="good-create__item good-create__item--last"
            label="Цена товара"
            :is-required-label="true"
            component-name="UIBaseInput"
            type="number"
            placeholder="Введите цену"
            pattern="[0-9]+(\\.[0-9][0-9]?)?"
            min="0"
            max="1000000"
            :error="form.price.error"
        />
        <UIBaseButton :disabled="!isValidForm" @click="onAddGood"
            >Добавить товар</UIBaseButton
        >
    </form>
</template>

<script setup>
import { useValidate } from '~/use/validate.js';

const emit = defineEmits(['addGood']);

const initState = {
    title: {
        value: '',
        error: '',
    },
    description: {
        value: '',
        error: '',
    },
    source: {
        value: '',
        error: '',
    },
    price: {
        value: '1',
        error: '',
    },
};
const form = reactive({ ...initState });
const { isValidForm, validate, validateErros } = useValidate(form);

const clearForm = () => {
    Object.assign(form, initState);
};

const onAddGood = () => {
    const good = {
        source: form.source.value,
        title: form.title.value,
        description: form.description.value,
        price: form.price.value,
    };
    emit('addGood', good);
    clearForm();
};

watchEffect(() => {
    validate();
    validateErros();
});
</script>

<style lang="scss" scoped>
$color-bg: #fffefb;

.good-create {
    flex-shrink: 0;
    width: 332px;
    background: $color-bg;
    box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04),
        0px 6px 10px rgba(0, 0, 0, 0.02);
    border-radius: 4px;
    padding: 24px;

    @media screen and (max-width: 800px) {
        width: 100%;
        margin-bottom: 24px;
    }

    &__item--last {
        margin-bottom: 24px;
    }
}
</style>
