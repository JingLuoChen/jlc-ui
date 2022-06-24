<template>
  <div class="jlc-doc-wrapper">
    <h1>Text Ellipsis 文本省略</h1>
    <div class="card">
      <h3>介绍</h3>
      <p>用于长文本按规定行数展示</p>
    </div>

    <h1>代码演示</h1>
    <div class="card">
      <h3>基础使用</h3>
      <p>直接设置容器宽度，即可实现文本省略</p>
      <div style="border-top: 1px dashed #d9d9d9;"></div>
      <div style="margin-top: 20px; width: 100%">
        <jlc-text-ellipsis style="max-width: 300px">
          只要有树叶飞舞的地方就会有火在燃烧，那火光会照耀着村子，然后新的树叶会再次萌芽。
        </jlc-text-ellipsis>
      </div>
    </div>
    <div class="card">
      <h3>最大行数</h3>
      <p>设置 <code>line-clamp</code>属性值，即可实现几行之后进行省略，例如 line-clamp="2" </p>
      <div style="border-top: 1px dashed #d9d9d9;"></div>
      <div style="margin-top: 20px; width: 100%">
        <jlc-text-ellipsis style="max-width: 300px" :line-clamp="2">
          只要有树叶飞舞的地方就会有火在燃烧，那火光会照耀着村子，然后新的树叶会再次萌芽。
        </jlc-text-ellipsis>
      </div>
    </div>
    <div class="card">
      <h3>展开方式</h3>
      <p>设置 <code>expand-trigger</code>属性值，即可实现省略展开，例如 expand-trigger="click" </p>
      <div style="border-top: 1px dashed #d9d9d9;"></div>
      <div style="margin-top: 20px; width: 100%">
        <jlc-text-ellipsis style="max-width: 300px" :line-clamp="2" expand-trigger="click">
          感受痛苦吧，考虑痛苦吧，接受痛苦吧，了解痛苦吧。
          不了解痛楚的人，是无法了解真正的和平的！ 我不会忘记弥彦的痛苦（极小声说）
          从现在开始，让世界感受痛苦！神罗天征！
        </jlc-text-ellipsis>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss">
</style>
