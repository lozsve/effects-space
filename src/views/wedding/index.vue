<template>
  <div class="img_box">
    <img class="img_item" :src="getImageUrl(imgList[num])" alt="" />
  </div>
</template>

<script setup lang="ts">
import { getImageUrl } from '@/utils/tool'

const modules = import.meta.glob('../../assets/wedding/*.jpg')
const imgList: any = []
Object.keys(modules).forEach((key) => {
  const newKey = key.match(/..\/..\/assets\/(.+)/) || []
  imgList.push(newKey[ 1 ])
})

const num = ref(0)
setInterval(() => {
  num.value = Math.round(Math.random() * (imgList.length -1))
}, 2000)
</script>

<style scoped lang="scss">
@import './index.scss';
</style>
