<template>
  <div class="jlc-doc-wrapper">
    <h1>Button 按钮</h1>
    <div class="card">
      <h3>介绍</h3>
      <p>按钮用于触发一个操作，如提交表单</p>
    </div>

    <h1>代码演示</h1>
    <div class="card">
      <h3>按钮类型</h3>
      <p>按钮支持 <code>default</code>、<code>primary</code>、<code>info</code>、<code>success</code>、<code>warning</code>、<code>danger</code> 六种类型，默认为 default</p>
      <div style="margin-top: 20px; width: 100%">
        <jlc-button type="default">默认按钮</jlc-button>
        <jlc-button type="primary">主要按钮</jlc-button>
        <jlc-button type="info">信息按钮</jlc-button>
        <jlc-button type="success">成功按钮</jlc-button>
        <jlc-button type="warning">警告按钮</jlc-button>
        <jlc-button type="danger">危险按钮</jlc-button>
      </div>
    </div>
    <div class="card">
      <h3>朴素按钮</h3>
      <p>通过 <code>plain</code> 属性将按钮设置为朴素按钮，朴素按钮的文字为按钮颜色，背景为白色</p>
      <div style="margin-top: 20px; width: 100%">
        <jlc-button type="default" plain>默认按钮</jlc-button>
        <jlc-button type="primary" plain>主要按钮</jlc-button>
        <jlc-button type="info" plain>信息按钮</jlc-button>
        <jlc-button type="success" plain>成功按钮</jlc-button>
        <jlc-button type="warning" plain>警告按钮</jlc-button>
        <jlc-button type="danger" plain>危险按钮</jlc-button>
      </div>
    </div>
    <div class="card">
      <h3>禁用状态</h3>
      <p>通过 <code>disabled</code> 属性来禁用按钮，禁用状态下按钮不可点击。</p>
      <div style="margin-top: 20px; width: 100%">
        <jlc-button type="default" disabled>默认按钮</jlc-button>
        <jlc-button type="primary" disabled>主要按钮</jlc-button>
        <jlc-button type="info" disabled>信息按钮</jlc-button>
        <jlc-button type="success" disabled>成功按钮</jlc-button>
        <jlc-button type="warning" disabled>警告按钮</jlc-button>
        <jlc-button type="danger" disabled>危险按钮</jlc-button>
      </div>
    </div>
    <div class="card">
      <h3>按钮形状</h3>
      <p>通过 <code>round</code> 设置圆形按钮</p>
      <div style="margin-top: 20px; width: 100%">
        <jlc-button type="default" round>默认按钮</jlc-button>
        <jlc-button type="primary" round>主要按钮</jlc-button>
        <jlc-button type="info" round>信息按钮</jlc-button>
        <jlc-button type="success" round>成功按钮</jlc-button>
        <jlc-button type="warning" round>警告按钮</jlc-button>
        <jlc-button type="danger" round>危险按钮</jlc-button>
      </div>
    </div>
    <div class="card">
      <h3>按钮尺寸</h3>
      <p>支持 <code>large</code>、 <code>normal</code>、 <code>small</code>、 <code>mini</code> 四种尺寸，默认为 normal</p>
      <div style="margin-top: 20px; width: 100%">
        <jlc-button type="primary" size="large">大号按钮</jlc-button>
        <jlc-button type="primary" size="normal">普通按钮</jlc-button>
        <jlc-button type="primary" size="small">小号按钮</jlc-button>
        <jlc-button type="primary" size="mini">迷你按钮</jlc-button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss">
</style>
