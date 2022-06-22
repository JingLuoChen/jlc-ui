<template>
  <div class="jlc-preview">
    <div class="code">
      <h3>{{ component.__sourceCodeTitle }}</h3>
      <component :is="component" />
    </div>
    <pre class="language-html" v-html="html" />
  </div>
</template>
<script setup lang="ts">
import "prismjs";
import "prismjs/themes/prism.css";
import { computed, ref } from "vue";

const Prism = (window as any).Prism;
const props = defineProps({
  component: Object,
});

const html = computed(() => {
  return Prism.highlight(
    props.component.__sourceCode,
    Prism.languages.html,
    "html"
  );
});

</script>