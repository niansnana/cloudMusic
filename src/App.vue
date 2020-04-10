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
      console.log('欢迎使用 clouMusic!\n当前版本：v1.0\n歌曲来源于网易云\nGithub：https://github.com/niansnana/cloudMusic')
    }
  }
}
</script>
