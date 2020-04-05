<!--
 * @Author: niansnana
 * @Begin: 2020年4月5日13:15:22
 * @Update log: 编写歌单详情
 -->
<template>
  <div>
    <van-sticky>
      <van-nav-bar title="歌单" left-arrow @click-left="returnFind">
        <template #right>
          <van-icon name="bar-chart-o" size="18" />
        </template>
      </van-nav-bar>
    </van-sticky>
    <div class="menu">
      <van-image :src="this.listInfo.coverImgUrl" fit="contain" />
    </div>
    <van-cell v-for="(item,index) in listData" :key="index">
      <template #title>
        <span>{{index+1}}</span>
        <span class="custom-title van-ellipsis">{{item.name}}</span>
      </template>
      <template #right-icon>
        <van-icon name="ellipsis" style="line-height: inherit;" />
      </template>
    </van-cell>
  </div>
</template>

<script>
export default {
  data () {
    return {
      detailID: '',
      listData: [],
      listInfo: []
    }
  },
  created () {
    this.detailID = this.$route.params.id
    this.getDetail()
  },
  methods: {
    getDetail () {
      this.$api.getPlaylistDetailFn(this.detailID).then(res => {
        this.listData = res.data.playlist.tracks
        this.listInfo = res.data.playlist
      })
    },
    returnFind () {
      this.$router.back(-1)
    }
  }
}
</script>

<style lang="stylus" scoped>
.menu
  height 25vh
  opacity 0.5
.van-cell
  line-height 30px
  color #999999
  .van-cell__title
    white-space nowrap
    .custom-title
      color #000000
      font-weight 540
      margin-left 10px
</style>
