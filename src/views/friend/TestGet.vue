<template>
  <div>
    <p>这里编写获取store的值</p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters([
      'singer' // 获取了 state 的值
    ])
  },
  created () {
    console.log(this.singer) // 看一下结果
  }
}
</script>
