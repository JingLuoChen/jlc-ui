<template>
    <button class="jlc-button" :class="classes">
        <span v-if="loading" class="jlc-loading"></span>
        <slot></slot>
    </button>
</template>
<script lang="ts" setup>
import { computed, useSlots } from "vue";
// 获取传入的配置项
const props = defineProps({
    type: {
        type: String,
        default: "default",
    },
    plain: {
        type: Boolean,
        default: false,
    },
    size: {
        type: String,
        default: "normal",
    },
    round: {
        type: Boolean,
        default: false,
    },
    circle: {
        type: Boolean,
        default: false,
    },
    disabled: {
        type: Boolean,
        default: false,
    },
    loading: {
        type: Boolean,
        default: false,
    }
});
const { type, plain, size, round, disabled, circle } = props;
const classes = computed(() => {
    return {
        [`jlc-button--${type}`]: type,
        [`jlc-button--plain`]: plain,
        [`jlc-button--${size}`]: size,
        [`jlc-button--round`]: round,
        [`is-circle`]: circle,
        [`jlc-button--disabled`]: disabled,
    }
})


</script>
<style scoped lang="less">
@import './index.less';
</style>
