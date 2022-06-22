<template>
  <router-view></router-view>
</template>

<script setup>
import { ref, provide } from "vue";
import router from "./router";

const clientWidth = ref(null);

clientWidth.value = document.documentElement.clientWidth;
const asideVisible = ref(clientWidth.value <= 500 ? false : true);

provide("asideVisible", asideVisible);
provide("clientWidth", clientWidth);

router.afterEach(() => {
  if (clientWidth.value <= 500) {
    asideVisible.value = false;
  }
});

window.onresize = () => {
  clientWidth.value = document.body.clientWidth;
  if (clientWidth.value <= 500) {
    asideVisible.value = false;
  } else {
    asideVisible.value = true;
  }
};
</script>

<style lang="less">
html,
body {
  margin: 0;
  padding: 0;
}
.jlc-doc {
  display: flex;
  min-height: 100vh;
  aside {
    width: 200px;
    padding: 15px;
    border-right: 1px solid #ccc;
    display: flex;
    flex-direction: column;
  }
  main {
    width: 100%;
    flex: 1;
    padding: 15px;
  }
}
</style>