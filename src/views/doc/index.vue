<template>
  <div class="layout">
    <Nav class="nav" />
    <div class="content">
      <aside :style="asideStyle">
        <div class="menu">
          <div
            class="menu-group"
            v-for="(itemx, index) in docMenus"
            :key="index"
          >
            <span class="menu-group-title text-overflow">
              {{ index }}
            </span>
            <router-link
              v-for="(itemy, indey) in itemx"
              :key="indey"
              class="menu-item text-overflow"
              :to="`/doc/${itemy.path}`"
              >{{ itemy.name }}</router-link
            >
          </div>
        </div>
      </aside>
      <main :style="mainStyle" id="doc-content-container">
        <router-view />
      </main>
    </div>
  </div>
</template>
<script setup lang="ts">
import Nav from "@/components/nav.vue";
import { inject, type Ref, computed } from "vue";
import { docMenus } from "../../router/doc-routes";
const asideVisible: any = inject<Ref<boolean>>("asideVisible");
const clientWidth: any = inject<Ref<number>>("clientWidth");


const asideStyle = computed(() => {
  return { left: asideVisible.value ? "0px" : "-272px" };
});

const mainStyle = computed(() => {
  return clientWidth.value < 500
    ? { "padding-left": "24px" }
    : { "padding-left": asideVisible.value ? "302px" : "60px" };
});
</script>
<style lang="scss">
.layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: #f7f8fa;
  .nav {
    flex-shrink: 0;
    box-shadow: 0 8px 12px #ebedf0;
  }
  .content {
    display: flex;
    flex-grow: 1;
    position: absolute;
    top: 63px;
    left: 0px;
    height: calc(100% - 63px);
    width: 100%;
    transition: all 0.5 ease;
    z-index: 1;

    aside {
      box-sizing: border-box;
      flex-shrink: 0;
      width: 272px;
      padding: 16px;
      height: 100%;
      background-color: #fff;
      border-right: 1px solid #efeff5;
      position: absolute;
      left: 0;
      top: 0;
      z-index: 10;
      transition: all 250ms ease;
      overflow-y: auto;
      box-shadow: 0 8px 12px #ebedf0;
      .menu, .menu-group {
        width: 100%;
      }

      .menu-group-title,
      .menu-item {
        display: flex;
        align-items: center;
        box-sizing: border-box;
        width: 100%;
      }

      .menu-group-title {
        height: 36px;
        padding-left: 32px;
        color: #455a64;
        overflow: hidden;
        font-size: 15px;
        font-weight: 600;

        &:hover {
          cursor: default;
        }
      }

      .menu-item {
        height: 44px;
        padding-left: 48px;
        color: #455a64;
        font-size: 14px;
        text-decoration: none;

        &:hover {
          color: #18a058 !important;
        }
      }

      .router-link-exact-active {
        color: #18a058 !important;
        background-color: #e7f5ee;
        border-radius: 3px;
      }
    }
    main {
      flex-grow: 1;
      box-sizing: border-box;
      padding: 32px 24px 100px 36px;
      transition: all 250ms ease;
      overflow: auto;

      h1 {
        margin: 28px 0 20px 0;
      }

      p {
        margin: 16px 0;
        color: rgb(51, 54, 57);
        font-size: 14px;
      }
      .preview-wrapper {
        width: 80%;

        @media (max-width: 500px) {
          width: 100%;
        }
      }
    }
  }
}

.toggle-button {
  width: 26px;
  height: 26px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: 1px solid rgb(239, 239, 245);
  position: absolute;
  left: 272px;
  top: 240px;
  background-color: #fff;
  box-shadow: 0 2px 4px 0px rgb(0 0 0 / 6%);
  transition: left 250ms ease, transform 0.1s ease;
  z-index: 10;

  .icon {
    width: 12px;
    height: 12px;
  }

  @media (max-width: 500px) {
    display: none;
  }
}
</style>