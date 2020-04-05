<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
export default {
  created () {
    this.copyRight()
  },
  methods: {
    copyRight () {
      console.log('欢迎使用 clouMusic!')
      console.log('当前版本：v1.0')
      console.log('歌曲来源于网易云')
      console.log('Github：https://github.com/niansnana/cloudMusic')
    }
  }
}
</script>
