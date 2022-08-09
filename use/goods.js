import { ref } from 'vue';
import { useLocalStorage } from './localStorage';

export function useGoods(isVisibleToast, toastMessage) {
    const { saveLocalStorage } = useLocalStorage();

    const goods = ref([
        {
            id: '0',
            source: '/assets/images/card-photo.jpg',
            title: 'Наименование товара',
            description: 'Довольно-таки',
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
    const sortedBuffer = ref([]);

    const onAddGood = (good) => {
        good.id = String(Date.now());

        const goodIndex = goods.value.findIndex((el) => el.id === good.id);
        const sortBufferIndex = sortedBuffer.value.findIndex((el) => el.id === good.id);

        if (goodIndex === -1) {
            goods.value.push(good);

            toastMessage.value = 'Товар успешно добавлен';
            isVisibleToast.value = true;

            saveLocalStorage(goods.value);
        }

        if (sortedBuffer.value.length > 0 && sortBufferIndex === -1) {
            sortedBuffer.value.push(good);
        }
    };

    const onRemoveProduct = (goodId) => {
        const goodIndex = goods.value.findIndex((el) => el.id === goodId);
        const sortBufferIndex = sortedBuffer.value.findIndex((el) => el.id === goodId);

        if (goodIndex !== -1) {
            goods.value.splice(goodIndex, 1);

            toastMessage.value = 'Товар успешно удален';
            isVisibleToast.value = true;

            saveLocalStorage(goods.value);
        }

        if (sortedBuffer.value.length > 0 && sortBufferIndex !== -1) {
            sortedBuffer.value.splice(sortBufferIndex, 1);
        }
    };

    return { goods, sortedBuffer, onAddGood, onRemoveProduct };
}
