<template>
    <li
        class="card"
        @mouseenter="isShowDelete = true"
        @mouseleave="isShowDelete = false"
    >
        <NuxtLink to="/good:id" class="card__link">
            <div>
                <img
                    :src="source"
                    class="card__image"
                    alt="good image"
                    width="332"
                    height="200"
                />
                <div class="card__body">
                    <h3 class="card__title">{{ title }}</h3>
                    <p class="card__description">{{ description }}</p>
                    <p class="card__price">{{ filteredPrice }} Руб.</p>
                </div>
            </div>
        </NuxtLink>
        <UIBaseButton
            v-if="isShowDelete"
            :is-show-icon="true"
            class="card__remove-btn"
        >
            <template #icon>
                <IconsDelete />
            </template>
        </UIBaseButton>
    </li>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
    id: {
        type: String,
        default: '0',
        required: true,
    },
    source: {
        type: String,
        default: '',
    },
    title: {
        type: String,
        default: '',
    },
    description: {
        type: String,
        default: '',
    },
    price: {
        type: Number,
        default: 0,
    },
});

const isShowDelete = ref(false);
const filteredPrice = computed(() => props.price.toLocaleString('ru'));
</script>

<style lang="scss" scoped>
$color-white: #fff;
$background-color: #fffefb;
$color-black: #3f3f3f;
$color-remove: #ff8484;

.card {
    position: relative;
    width: 332px;
    list-style: none;
    background: $background-color;
    box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04),
        0px 6px 10px rgba(0, 0, 0, 0.02);
    border-radius: 4px;

    &__link {
        display: inline-block;
        height: 100%;

        text-decoration: none;
        color: $color-black;
    }

    &__image {
        border-radius: 4px 4px 0px 0px;
    }

    &__body {
        background-color: $color-white;
        padding: 16px 16px 24px;
    }

    &__title {
        font-weight: 600;
        font-size: 20px;
        line-height: 25px;

        padding: 0;
        margin: 0;
        margin-bottom: 16px;
    }

    &__description {
        font-size: 16px;
        line-height: 20px;

        padding: 0;
        margin: 0;

        margin-bottom: 32px;
    }

    &__price {
        font-weight: 600;
        font-size: 24px;
        line-height: 30px;

        padding: 0;
        margin: 0;
    }

    &__remove-btn {
        position: absolute;
        top: -8px;
        right: -8px;

        display: flex;
        justify-content: center;
        align-items: center;

        width: 32px;
        height: 32px;

        background: $color-remove;
    }
}
</style>
