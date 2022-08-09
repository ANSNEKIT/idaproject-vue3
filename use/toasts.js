import {ref} from 'vue';

export function useToasts() {
    const isVisibleToast = ref(false);
    const toastMessage = ref('');

    return { isVisibleToast, toastMessage };
}
