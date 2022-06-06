<template>
    <div class="mico-loading">
        <slot></slot>
    </div>
</template>
<script lang="ts">
import { defineComponent } from "vue"
export default defineComponent({
    name: 'mico-loading'
})

</script>
<style scoped>
.mico-loading {
    display: inline-block;
    padding: 3px 6px;
    background: #000;
    color: #fff;
}
</style>
