<template>
    <div class="page-index">
        <div class="page-index__header flex-container">
            <h1 class="page-index__title">Добавление товара</h1>
            <UIBaseDropdown :items="sortTypes" @change="onSortMethod" />
        </div>
        <div class="page-index__content flex-container">
            <ClientOnly>
                <GoodsGoodCreate @add-good="onAddGood" />
                <GoodsList
                    :items="sortedGoods"
                    @remove-product="onRemoveProduct"
                />
            </ClientOnly>
        </div>
        <TransitionGroup
            ref="transition"
            name="toast-notification"
            tag="div"
            class="tost"
        >
            <UIBaseToast
                v-if="isVisibleToast"
                :message="toastMessage"
                :dealay="2000"
                @close="isVisibleToast = false"
            />
        </TransitionGroup>
    </div>
</template>

<script setup>
import { useLocalStorage } from '~~/use/localStorage.js';
import { useSort } from '~~/use/sort.js';
import { useGoods } from '~~/use/goods.js';
import { useToasts } from '~~/use/toasts.js';

const emit = defineEmits({
    addGood: {
        type: Object,
        default: () => ({}),
    },
    close: {},
    removeProduct: {
        type: String,
        default: '',
        requred: true,
    },
});

const { isVisibleToast, toastMessage } = useToasts();
const { goods, onAddGood, onRemoveProduct } = useGoods(
    isVisibleToast,
    toastMessage
);
const { getLocalStorage } = useLocalStorage();
const { sortTypes, sortedGoods, onSortMethod } = useSort(goods);

onMounted(() => {
    const savedGoods = getLocalStorage('goods');

    if (savedGoods !== null) {
        goods.value = savedGoods;
    }
});
</script>

<style lang="scss" scoped>
.page-index {
    width: 100%;
    height: 100%;
    padding: 0 32px;

    &__header {
        justify-content: space-between;

        margin-top: 32px;
        margin-bottom: 16px;
    }

    &__content {
        gap: 16px;

        margin-bottom: 16px;
    }

    &__title {
        font-weight: 600;
        font-size: 28px;
        line-height: 35px;
    }
}

.flex-container {
    display: flex;
    align-items: flex-start;

    @media screen and (max-width: 800px) {
        flex-direction: column;
    }
}

.tost {
    position: absolute;
    top: 30px;
    left: 45%;
    transition: all 0.4s ease-in-out;
}

.toast-notification-enter-active {
    animation: toast-fade-in 0.5s ease-in-out;
}

.toast-notification-leave-active {
    animation: toast-fade-in 0.5s ease-in-out reverse;
}

@keyframes toast-fade-in {
    from {
        opacity: 0;
        transform: scale(0.4);
    }

    to {
        opacity: 1;
        transform: scale(1);
    }
}
</style>
