<template>
  <div @click="toggle" class="jlc-text-ellipsis" :class="classes" :style="styles">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch, reactive } from "vue";
const props = defineProps({
  lineClamp: {
    type: Number,
  },
  expandTrigger: String,
});
const { lineClamp, expandTrigger } = props;

const classes = computed(() => ({
  ["jlc-text-ellipsis-line-clamp"]: lineClamp,
  ["jlc-text-ellipsis-expand-trigger"]: expandTrigger,
}));

let styles = reactive({} as any);
const isExpand = ref(false);
styles["-webkit-line-clamp"] = lineClamp;

watch(
  () => isExpand.value,
  () => {
    styles["-webkit-line-clamp"] = !isExpand.value ? lineClamp : "";
  }
);

const toggle = () => {
  if (expandTrigger === "click") {
    isExpand.value = !isExpand.value;
  }
};
</script>
<style lang="scss">
.jlc-text-ellipsis {
  text-overflow: ellipsis;
  overflow: hidden;
  max-width: 100%;

  &:not(.jlc-text-ellipsis-line-clamp) {
    white-space: nowrap;
    display: inline-block;
    text-overflow: ellipsis;
  }

  &.jlc-text-ellipsis-line-clamp {
    display: -webkit-box;
    -webkit-box-orient: vertical;
  }

  &.jlc-text-ellipsis-expand-trigger {
    cursor: pointer;
  }
}
</style>
