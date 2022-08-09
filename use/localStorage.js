export function useLocalStorage() {
    const saveLocalStorage = (items = []) => localStorage.setItem('goods', JSON.stringify(items));
    const getLocalStorage = (name = '') => {
        const item = localStorage.getItem(name);
        return JSON.parse(item);
    };

    return { saveLocalStorage, getLocalStorage };
}
