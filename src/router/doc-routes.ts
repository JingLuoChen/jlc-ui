import { h } from "vue";
import Markdown from "@/components/Markdown.vue";

import * as GetStarted from "../markdown/get-started.md";
import * as Install from "../markdown/install.md";
import * as Intro from "../markdown/intro.md";

const md = (Object: any) => h(Markdown, { content: Object.html, key: Object.html });
const IntroDoc = md(Intro);
const GetStartedDoc = md(GetStarted);
const InstallDoc = md(Install);

import ButtonDoc from "../views/doc/button/index.vue";
import TextEllipsisDoc from "../views/doc/text-ellipsis/index.vue";

const docMenus: any = {
  文档: [
    { path: "intro", component: IntroDoc, name: "介绍" },
    { path: "install", component: InstallDoc, name: "安装" },
    { path: "get-started", component: GetStartedDoc, name: "快速使用" },
  ],
  通用组件: [
    { path: "button", component: ButtonDoc, name: "Button 按钮" },
    { path: "text-ellipsis", component: TextEllipsisDoc, name: "Text Ellipsis 文本省略" },
  ]
};

let docRoutes: any = [];
for (let i in docMenus) {
  docRoutes = [...docRoutes, ...docMenus[i]];
}

export { docRoutes, docMenus };
