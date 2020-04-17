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
    /** 暂时取消这种模式，因为接口，哎，算了，不提了，伤心啊。。
      // 信息存储
      if (sessionStorage.getItem('token')) {
        this.$store.replaceState(Object.assign({}, this.$store.state, JSON.parse(sessionStorage.getItem('token'))))
      }
      // 在页面刷新时将vuex里的信息保存到sessionStorage里
      window.addEventListener('beforeunload', () => {
        sessionStorage.setItem('token', JSON.stringify(this.$store.state.token))
      })
    */
    if (sessionStorage.getItem('token')) {
      this.$store.replaceState(Object.assign({}, this.$store.state, JSON.parse(sessionStorage.getItem('token'))))
    }
    window.addEventListener('beforeunload', () => {
      sessionStorage.setItem('token', JSON.stringify(this.$store.state))
    })
    this.copyRight()
  },
  methods: {
    copyRight () {
      console.log('欢迎使用 cloudMusic!\n当前版本：v1.0\n歌曲来源于网易云\nGithub：https://github.com/niansnana/cloudMusic')
    }
  }
}
</script>
