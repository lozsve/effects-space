// 获取本地图片路径
export const getImageUrl = (name: string) => {
  const href: string = new URL(`../assets/${name}`, import.meta.url).href
  return href
}
