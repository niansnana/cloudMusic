<template>
  <div id="app">
    <router-view />
    <Player />
  </div>
</template>
<script>
import Player from '@/components/Player'
export default {
  components: { Player },
  created () {
    this.copyRight()
  },
  methods: {
    copyRight () {
      console.log('欢迎使用 cloudMusic!\n当前版本：v1.0\n歌曲来源于网易云\nGithub：https://github.com/niansnana/cloudMusic')
    }
  }
}
</script>
