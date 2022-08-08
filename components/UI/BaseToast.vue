<template>
    <div class="tost" @click.prevent="onClose">
        {{ message }}
    </div>
</template>

<script setup>
const props = defineProps({
    message: {
        type: String,
        default: 'text',
    },
    dealay: {
        type: Number,
        default: 3000,
    },
});
const emit = defineEmits(['close']);

const onClose = () => {
    emit('close');
};
onMounted(() => {
    setTimeout(onClose, props.dealay);
});
</script>

<style lang="scss" scoped>
$color-green: rgb(89, 199, 89);
.tost {
    padding: 15px 20px;
    background-color: $color-green;
    color: white;
    font-size: 16px;
    line-height: 18px;
    cursor: default;
}
</style>
