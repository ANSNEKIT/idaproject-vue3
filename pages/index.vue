<template>
    <div class="page-index">
        <div class="flex-container flex-justify mb-16">
            <h1 class="page-index__title">Добавление товара</h1>
            <UIBaseDropdown :items="sortTypes" @change="onSortMethod" />
        </div>
        <div class="flex-container">
            <ClientOnly>
                <GoodsGoodCreate @add-good="onAddGood" />
                <GoodsList :items="sortedProducts" @remove-product="onRemoveProduct" />
            </ClientOnly>
        </div>
        <TransitionGroup name="toast-notification" tag="div" class="tost">
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
const sortTypes = [
    { value: 'default', name: 'По умолчанию' },
    { value: 'asc', name: 'По цене (A-Z)' },
    { value: 'desc', name: 'По цене (Z-A)' },
];

const goods = ref([
    {
        id: '0',
        source: '/assets/images/card-photo.jpg',
        title: 'Наименование товара',
        description:
            'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
        price: '10000',
    },
    {
        id: '1',
        source: '/assets/images/card-photo.jpg',
        title: 'Наименование товара 1',
        description:
            'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк.Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк.Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
        price: '20000',
    },
    {
        id: '2',
        source: '/assets/images/card-photo.jpg',
        title: 'Наименование товара 2',
        description:
            'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
        price: '9000',
    },
    {
        id: '3',
        source: '/assets/images/card-photo.jpg',
        title: 'Наименование товара 3',
        description:
            'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
        price: '100000',
    },
    {
        id: '4',
        source: '/assets/images/card-photo.jpg',
        title: 'Наименование товара 4',
        description:
            'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
        price: '1999',
    },
    {
        id: '5',
        source: '/assets/images/card-photo.jpg',
        title: 'Наименование товара 5',
        description:
            'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
        price: '200',
    },
    {
        id: '6',
        source: '/assets/images/card-photo.jpg',
        title: 'Наименование товара 6',
        description:
            'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
        price: '100500',
    },
    {
        id: '7',
        source: '/assets/images/card-photo.jpg',
        title: 'Наименование товара 7',
        description:
            'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
        price: '999',
    },
    {
        id: '8',
        source: '/assets/images/card-photo.jpg',
        title: 'Наименование товара 8',
        description:
            'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
        price: '15000',
    },
    {
        id: '9',
        source: '/assets/images/card-photo.jpg',
        title: 'Наименование товара 9',
        description:
            'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
        price: '38000',
    },
]);

const isVisibleToast = ref(false);
const toastMessage = ref('');

onMounted(() => {
    const savedGoods = getLocalStorage('goods');
    const parsedGoods = JSON.parse(savedGoods);

    if (savedGoods !== null) {
        goods.value = parsedGoods;
    }
});

const saveLocalStorage = (items) => localStorage.setItem('goods', JSON.stringify(items));
const getLocalStorage = (name) => localStorage.getItem(name);

const onAddGood = (good) => {
    const newGood = { ...good };
    const index = goods.value.length;
    newGood.id = String(index + 1);
    const dublicateIndex = goods.value.findIndex((el) => el.id === newGood.id);

    if (dublicateIndex === -1) {
        goods.value.push(newGood);

        toastMessage.value = 'Товар успешно добавлен';
        isVisibleToast.value = true;

        saveLocalStorage(goods.value);
    }
};

const onRemoveProduct = (goodId) => {
    const goodIndex = goods.value.findIndex((el) => el.id === goodId) ?? {};

    if (goodIndex !== -1) {
        goods.value.splice(goodIndex, 1);

        toastMessage.value = 'Товар успешно удален';
        isVisibleToast.value = true;

        saveLocalStorage(goods.value);
    }
};

const sortedGoods = ref([]);
const sortedProducts = computed(() => {
    if (sortedGoods.value.length > 0) { return sortedGoods.value }
    return goods.value;
});
const sortAsc = (items) => items.sort((currentProduct, nextProduct) => Number(currentProduct.price) - Number(nextProduct.price));
const sortDesc = (items) => items.sort((currentProduct, nextProduct) => Number(nextProduct.price) - Number(currentProduct.price));

const onSortMethod = (sortType) => {
    sortedGoods.value = [];

    switch (sortType) {
        case 'default':
            break;
        case 'asc':
            sortedGoods.value = sortAsc(goods.value);
            break;
        case 'desc':
            sortedGoods.value = sortDesc(goods.value);
            break;
    }
};
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

    @media screen and (max-width: 800px) {
        flex-direction: column;
    }
}

.flex-justify {
    justify-content: space-between;
}

.mb-16 {
    margin-bottom: 16px;
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
