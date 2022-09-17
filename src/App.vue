<template>
  <el-config-provider :locale="zhCn">
    <router-view></router-view>
  </el-config-provider>
</template>

<script setup lang="ts">
import zhCn from 'element-plus/lib/locale/lang/zh-cn'
</script>

<style lang="scss">
@import '@/styles/flex.css'; /* flex 布局 */
@import '@/styles/normalize.css'; /* 重置样式 */

#nprogress .bar {
  background: $color-primary !important;
}
</style>
