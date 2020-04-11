<!--
 * @Author: niansnana
 * @Begin: 2020年4月11日19:02:27
 * @Update log: 编写歌单详情
 -->
<template>
  <div>
    <!-- 动画加载 -->
    <van-loading v-show="!listData.length" type="spinner" color="#d44439" />
  </div>
</template>

<script>
export default {
  data () {
    return {
      listData: []
    }
  }
}
</script>

<style lang="stylus" scoped>
.van-loading
  display flex
  justify-content center
  align-items center
</style>
