<template>
  <div id="app">
    <Header />
    <router-view class="main" />
  </div>
</template>
<script>
import Header from '@/components/Header'
export default {
  components: { Header },
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

<style lang="stylus" scoped>
.main
  padding 15px
</style>
