<template>
    <div class="load-effect">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
    </div>
</template>
<script lang="ts" scoped>
</script>
<style scoped>
.load-effect {
    width: 24px;
    height: 24px;
    position: relative;
    margin: 0 auto;
}
.load-effect span {
    display: inline-block;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: #C7C7D1;
    position: absolute;
    -webkit-animation: load 1.04s ease infinite;
}
@-webkit-keyframes load {
    0%{
        opacity: 1;
    }
    100%{
        opacity: 0.2;
    }
}
.load-effect span:nth-child(1) {
    left: 0;
    top: 50%;
    margin-top: -2px;
    -webkit-animation-delay: 0.13s;
}
.load-effect span:nth-child(2) {
    left: 3px;
    top: 3px;
    -webkit-animation-delay: 0.26s;
}
.load-effect span:nth-child(3) {
    left: 50%;
    top: 0;
    margin-left: -2px;
    -webkit-animation-delay: 0.39s;
}
.load-effect span:nth-child(4) {
    top: 3px;
    right: 3px;
    -webkit-animation-delay: 0.52s;
}
.load-effect span:nth-child(5) {
    right: 0;
    top: 50%;
    margin-top: -2px;
    -webkit-animation-delay: 0.65s;
}
.load-effect span:nth-child(6) {
    right: 3px;
    bottom: 3px;
    -webkit-animation-delay: 0.78s;
}
.load-effect span:nth-child(7) {
    bottom: 0;
    left: 50%;
    margin-left: -2px;
    -webkit-animation-delay: 0.91s;
}
.load-effect span:nth-child(8) {
    bottom: 3px;
    left: 3px;
    -webkit-animation-delay: 1.04s;
}
</style>
