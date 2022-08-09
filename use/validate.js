export function useValidate(form) {
    const isValidForm = ref(false);

    const isValidPrice = () => {
        let price = form.price.value;

        if (Number(price) === 0) {
            return false;
        }

        return true;
    };

    const validate = () => {
        const allItemsLength = Object.values(form).length;
        const itemsNotEmpty = Object.values(form).filter((el) => el.value.length > 0);

        if (allItemsLength === itemsNotEmpty.length && isValidPrice()) {
            isValidForm.value = true;
        } else {
            isValidForm.value = false;
        }
    };

    const validateErros = () => {
        const parsed = toRefs(form);
        const { price } = parsed;

        if (!isValidPrice()) {
            form.price.error = 'Цена должна быть больше 0';
        } else {
            form.price.error = '';
        }
    };

    return { isValidForm, validate, validateErros };
}
