<template>
  <div class="choose_view">
    <el-row :gutter="12">
      <el-col v-for="(item, index) in list" :key="index" :span="8" @click="router.push('/wedding')">
        <el-card shadow="hover">{{ item.title }}</el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
const router = useRouter()
const list = [
  { title: '幻灯片', path: '' },
  { title: '幻灯片', path: '' },
  { title: '幻灯片', path: '' },
  { title: '幻灯片', path: '' }
]
</script>

<style scoped lang="scss">
@import './index.scss';
</style>
