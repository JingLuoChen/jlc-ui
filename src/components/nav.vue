<template>
  <div class="topnav">
    <div class="menu">
      <router-link exact to="/home">首页</router-link>
      <router-link to="/doc">文档</router-link>
      <a href="https://github.com/JingLuoChen/jlc-ui" target="_blank">GitHub</a>
      <span>1.0.1</span>
    </div>
  </div>
</template>
<script setup lang="ts">
import { type Ref, inject } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const props = defineProps({
  toggleMenuButton: {
    type: Boolean,
    default: true,
  },
});
const asideVisible: any = inject<Ref<boolean>>("asideVisible");

const toggleAside = () => {
  asideVisible.value = !asideVisible.value;
};

const getHome = () => {
  router.push({
    path: "/",
  });
};
</script>
<style lang="scss">
.topnav {
  height: 63px;
  background-color: #fff;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  border-bottom: solid 1px rgb(239, 239, 245);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 0;

  .menu {
    margin-right: 30px;
    a {
      display: inline-block;
      text-decoration: none;
      padding: 0 20px;
      height: 63px;
      line-height: 63px;

      &:hover,
      &:active {
        color: rgb(24, 160, 88);
      }
    }

    .router-link-active {
      color: rgb(24, 160, 88);
      border-bottom: 1px solid;
    }

    span {
      color: rgb(51, 54, 57);
      font-size: 14px;
    }
  }

  .toggle-aside {
    width: 24px;
    height: 24px;
    cursor: pointer;
    display: none;
  }

  @media (max-width: 500px) {
    .menu {
      display: none;
    }
    .logo {
      margin: 0 auto;
    }
    .toggle-aside {
      display: inline-block;
    }
  }
}
</style>
