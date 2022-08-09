import {ref, computed} from 'vue';

export function useSort(goods) {
    const sortTypes = [
        { value: 'default', name: 'По умолчанию' },
        { value: 'asc', name: 'По цене (По возрастанию)' },
        { value: 'desc', name: 'По цене (По убыванию)' },
    ];
    const _sortedBuffer = ref([]);
    const sortedGoods = computed(() => {
        if (_sortedBuffer.value.length > 0) {
            return _sortedBuffer.value;
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
        _sortedBuffer.value = [];

        switch (sortType) {
            case 'default':
                _sortedBuffer.value = [];
                break;
            case 'asc':
                _sortedBuffer.value = sortAsc(goods.value);
                break;
            case 'desc':
                _sortedBuffer.value = sortDesc(goods.value);
                break;
        }
    };

    return { sortTypes, sortedGoods, onSortMethod };
}
