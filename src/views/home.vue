<template>
  <div class="topnavAndBanner">
    <Nav :toggleMenuButton="false" />
    <div class="banner">
      <h1>JLC UI</h1>
      <p>轻量、可靠的移动端Vue组件库</p>
      <div class="actions">
        <jlc-button @click="linkTo('github')">GitHub</jlc-button>
        <jlc-button type="info" @click="linkTo('getStart')" theme="primary">快速使用</jlc-button>
      </div>
    </div>
  </div>

  <div class="features">
    <ul>
      <li>
        <h3>基于 Vue 3 + Vite</h3>
        <p>使用了 Vue 3 Composition API</p>
      </li>
      <li>
        <h3>基于 TypeScript</h3>
        <p>源代码采用 TypeScript 书写</p>
      </li>
      <li>
        <h3>代码易读</h3>
        <p>每个组件的源代码都极其简洁</p>
      </li>
    </ul>
  </div>
</template>
<script setup>
import Nav from "../components/nav.vue";
import { useRouter } from "vue-router";

const router = useRouter();

const linkTo = (params) => {
  if (params === "github") {
    window.open("https://github.com/JingLuoChen/jlc-ui", "_blank");
  } else if (params === "getStart") {
    router.push({
      path: "/doc",
    });
  }
};
</script>
<style lang="scss" scoped>
.banner {
  padding: 170px 0 0;
  @media (max-width: 500px) {
    padding: 120px 0 0;
  }
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  h1 {
    color: rgb(44, 62, 80);
    font-size: 80px;
    line-height: 80px;
    font-weight: 500;
    margin-bottom: 18px;
    font-family: Metropolis, sans-serif;
    text-size-adjust: 100%;
    position: relative;
  }

  p {
    color: rgb(51, 54, 57);
    font-size: 16px;
    height: 25px;
    line-height: 25px;
    margin-bottom: 5px;

    &:last-of-type {
      margin-bottom: 20px;
    }
  }

  .actions {
    padding: 8px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    .jw-button {
      height: 40px;
      padding: 0 18px;
    }
    .jw-button:last-of-type {
      margin-left: 20px;
    }
  }
}

.features {
  margin: 64px auto;
  width: 400px;
  border-top: 1px solid rgb(234, 236, 239);
  padding-top: 20px;
  @media (min-width: 800px) {
    width: 800px;
  }

  @media (min-width: 1200px) {
    width: 1200px;
  }
  ul {
    display: flex;
    li {
      width: 400px;
      margin: 16px 0;
      display: grid;
      padding: 0 30px;
      justify-content: start;
      align-content: space-between;
      grid-template-areas: "icon title" "icon text";
      grid-template-columns: 80px auto;
      grid-template-rows: 1fr auto;
      svg {
        grid-area: icon;
        width: 64px;
        height: 64px;
      }
      h3 {
        grid-area: title;
        font-size: 28px;
      }
      p {
        grid-area: text;
      }
    }
  }
}
</style>
