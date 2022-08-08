<template>
    <ul class="goods">
        <Good
            v-for="good in goods"
            :id="good.id"
            :key="good.id"
            :source="good.source"
            :title="good.title"
            :description="good.description"
            :price="good.price"
        />
    </ul>
</template>

<script setup>
import Good from './Good.vue';

const goods = [
    {
        id: '0',
        source: '/assets/images/card-photo.jpg',
        title: 'Наименование товара',
        description:
            'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
        price: 10000,
    },
    {
        id: '1',
        source: '/assets/images/card-photo.jpg',
        title: 'Наименование товара 1',
        description:
            'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
        price: 10000,
    },
    {
        id: '2',
        source: '/assets/images/card-photo.jpg',
        title: 'Наименование товара 2',
        description:
            'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
        price: 10000,
    },
    {
        id: '3',
        source: '/assets/images/card-photo.jpg',
        title: 'Наименование товара 3',
        description:
            'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
        price: 10000,
    },
    {
        id: '4',
        source: '/assets/images/card-photo.jpg',
        title: 'Наименование товара 4',
        description:
            'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
        price: 10000,
    },
    {
        id: '5',
        source: '/assets/images/card-photo.jpg',
        title: 'Наименование товара 5',
        description:
            'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
        price: 10000,
    },
    {
        id: '6',
        source: '/assets/images/card-photo.jpg',
        title: 'Наименование товара 6',
        description:
            'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
        price: 10000,
    },
    {
        id: '7',
        source: '/assets/images/card-photo.jpg',
        title: 'Наименование товара 7',
        description:
            'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
        price: 10000,
    },
    {
        id: '8',
        source: '/assets/images/card-photo.jpg',
        title: 'Наименование товара 8',
        description:
            'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
        price: 10000,
    },
    {
        id: '9',
        source: '/assets/images/card-photo.jpg',
        title: 'Наименование товара 9',
        description:
            'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
        price: 10000,
    },
];
</script>

<style lang="scss" scoped>
.goods {
    flex-grow: 1;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 16px;
    margin: 0;
    padding: 0;
}
</style>
