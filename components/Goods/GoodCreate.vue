<template>
    <form class="good-create" @submit.prevent>
        <GoodsGoodCreateItem
            id="price-name"
            v-model.trim.lazy="good.title"
            class="good-create__item"
            label="Наименование товара"
            :is-required-label="true"
            component-name="UIBaseInput"
            placeholder="Введите наименование товара"
            required
        />
        <GoodsGoodCreateItem
            id="description"
            v-model.trim.lazy="good.description"
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
            v-model.trim.lazy="good.source"
            class="good-create__item"
            label="Ссылка на изображение товара"
            :is-required-label="true"
            component-name="UIBaseInput"
            placeholder="Введите ссылку"
            required
        />
        <GoodsGoodCreateItem
            id="price"
            v-model.trim.lazy="good.price"
            class="good-create__item good-create__item--last"
            label="Цена товара"
            :is-required-label="true"
            component-name="UIBaseInput"
            type="number"
            placeholder="Введите цену"
            pattern="[0-9]+(\\.[0-9][0-9]?)?"
            min="0"
            max="1000000"
            :error="priceError"
        />
        <UIBaseButton :disabled="!isValidForm" @click="onAddGood"
            >Добавить товар</UIBaseButton
        >
    </form>
</template>

<script setup>
const emit = defineEmits(['addGood']);

const initState = {
    title: '',
    description: '',
    source: '',
    price: '1',
};
const good = reactive({ ...initState });
const priceError = reactive({
    message: '',
});
const isValidForm = ref(false);

const validatePrice = (price) => {
    if (Number(price) === 0) {
        priceError.message = 'Цена должна быть больше 0';
        priceError.isError = true;
    }

    if (Number(price) > 0) {
        priceError.message = '';
        priceError.isError = false;
    }
};

const validateForm = () => {
    const isAllKeysValid =
        Object.values(good).filter((el) => el.length > 0).length === 4;

    if (isAllKeysValid && Number(good.price) !== 0) {
        isValidForm.value = true;
    } else {
        isValidForm.value = false;
    }
};
const clearForm = () => {
    Object.assign(good, initState);
};

const onAddGood = () => {
    emit('addGood', good);
    clearForm();
};

watchEffect(() => {
    const parsed = toRefs(good);
    validatePrice(parsed.price.value);
    validateForm();
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
