# 快速使用

请先[安装](#/doc/install)本组件库。

### 完整引入

```javascript
// main.ts
import { createApp } from "vue";
import App from "./App.vue";

import JlcUi from "jlc-ui";

const app = createApp(App);

app.use(JlcUi);
app.mount("#app");
```

### 引入某个组件

```javascript
import { JlcButton } from "jlc-ui";
import "yjw-ui/style.css";
```

完成引入就可以使用我提供的组件

#### Vue 单文件组件

代码示例：

```html
<template>
  <jlc-button>按钮</jlc-button>
</template>
```

下一节：[Avatar 头像](#/doc/button)
