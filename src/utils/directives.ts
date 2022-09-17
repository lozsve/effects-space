import type { App } from 'vue'
import { ElNotification } from 'element-plus'

export default {
  install: (app: App<Element>) => {
    // 添加页面标题指令
    app.directive('title', (binding) => {
      document.title = binding.value
    })

    // 防抖指令：单位时间只触发最后一次
    app.directive('debounce', (el, binding) => {
      const [ fn, event = 'click', time = 500 ] = binding.value
      let timer: any
      el.addEventListener(event, () => {
        timer && clearTimeout(timer)
        timer = setTimeout(() => fn(), time)
      })
    })

    // 节流指令：单位时间可触发一次（第一次瞬间触发，最后一次不管是否达到间隔时间依然触发）
    app.directive('throttle', (el, binding) => {
      const [ fn, event = 'click', time = 500 ] = binding.value
      let timer: any
      let timerEnd: any
      el.addEventListener(event, () => {
        if (timer) {
          clearTimeout(timerEnd)
          return (timerEnd = setTimeout(() => fn(), time))
        }
        fn()
        timer = setTimeout(() => (timer = null), time)
      })
    })

    // 一键复制到剪切板
    app.directive('copy', (el, binding) => {
      el.onclick = () => {
        const input = document.createElement('input')
        input.style.opacity = '0'
        input.style.position = 'absolute'
        input.value = binding.value
        document.body.appendChild(input)
        input.select()
        const result = document.execCommand('copy')
        if (result) ElNotification({ title: 'Success', message: '复制成功', type: 'success' })
        document.body.removeChild(input)
      }
    })
  }
}
