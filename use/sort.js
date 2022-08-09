import { computed } from 'vue';

export function useSort(goods, sortedBuffer) {
    const sortTypes = [
        { value: 'default', name: 'По умолчанию' },
        { value: 'asc', name: 'По цене (По возрастанию)' },
        { value: 'desc', name: 'По цене (По убыванию)' },
    ];

    const sortedGoods = computed(() => {
        if (sortedBuffer.value.length > 0) {
            return sortedBuffer.value;
        }
        return goods.value;
    });

    const sortAsc = (items) => {
        const sortItems = [...items];
        sortItems.sort(
            (currentProduct, nextProduct) =>
                Number(currentProduct.price) - Number(nextProduct.price)
        );
        return sortItems;
    };
    const sortDesc = (items) => {
        const sortItems = [...items];
        sortItems.sort(
            (currentProduct, nextProduct) =>
                Number(nextProduct.price) - Number(currentProduct.price)
        );
        return sortItems;
    };

    const onSortMethod = (sortType) => {
        sortedBuffer.value = [];

        switch (sortType) {
            case 'default':
                sortedBuffer.value = [];
                break;
            case 'asc':
                sortedBuffer.value = sortAsc(goods.value);
                break;
            case 'desc':
                sortedBuffer.value = sortDesc(goods.value);
                break;
        }
    };

    return { sortTypes, sortedGoods, onSortMethod };
}
