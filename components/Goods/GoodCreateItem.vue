<template>
    <div class="good-create-element">
        <label class="good-create-element__label" :for="$attrs.id">
            {{ label }}
            <span
                v-if="isRequiredLabel"
                class="good-create-element__label-require"
            ></span>
        </label>
        <component :is="componentName" v-bind="$attrs" />
    </div>
</template>

<script setup>
const props = defineProps({
    label: {
        type: String,
        default: '',
    },
    isRequiredLabel: {
        type: Boolean,
        default: false,
    },
    componentName: {
        type: String,
        default: '',
    },
});

let componentName = null;

const COMPONENT_NAMES = {
    input: 'UIBaseInput',
    textarea: 'UIBaseTextarea',
};
if (props.componentName === COMPONENT_NAMES.input) {
    componentName = resolveComponent('UIBaseInput');
} else {
    componentName = resolveComponent('UIBaseTextarea');
}
</script>

<style lang="scss" scoped>
$color-require: #ff8484;
.good-create-element {
    margin-bottom: 16px;

    &__label {
        position: relative;
        font-size: 10px;
        line-height: 13px;
        letter-spacing: -0.02em;
        margin-bottom: 4px;

        &-require {
            position: absolute;
            top: 0;
            right: -4px;

            display: block;
            width: 4px;
            height: 4px;
            border-radius: 4px;
            background: $color-require;
        }
    }
}
</style>
