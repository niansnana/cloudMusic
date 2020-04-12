<template>
  <div>
    <p>这是friend</p>
    <small @click="selectSinger(singer)">这里测试store</small>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  methods: {
    selectSinger (singer) {
      // 测试一下，配合store
      console.log(singer)
      this.setSinger(singer) // 解释下，相当于执行mutations的方法，修改了state的值，牛
    },
    ...mapMutations({
      // 语法糖
      setSinger: 'SET_SINGER'
    })
  }
}
</script>
