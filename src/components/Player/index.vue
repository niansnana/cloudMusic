<!--
 * @Author: niansnana
 * @Begin: 2020年4月11日15:43:05
 * @Update log: 编写共用播放组件
-->
<template>
  <div>
    <p>默认小窗播放</p>
    <p v-show="playlist.length > 0">出现啦</p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters([
      'playlist'
    ])
  }
}
</script>
