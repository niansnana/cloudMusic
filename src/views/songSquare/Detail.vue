<!--
 * @Author: niansnana
 * @Begin: 2020年4月5日13:15:22
 * @Update log: 编写歌单详情
 -->
<template>
  <div>
    <div class="menu">
      <div class="bg" :style="{ background: 'url(' + listData.coverImgUrl +')' }"></div>
      <div class="nav">
        <van-row type="flex" justify="space-around">
          <van-col span="6" @click="returnFind">
            <van-icon name="arrow-left" />
          </van-col>
          <van-col span="6" align="center">歌单</van-col>
          <van-col span="6" align="right">
            <van-icon name="bar-chart-o" size="18" />
          </van-col>
        </van-row>
      </div>
      <div class="content">
        <van-row type="flex" justify="space-around">
          <van-col class="bgInfo" span="9">
            <van-image fit="cover" :src="listData.coverImgUrl" />
            <span>
              <van-icon name="service-o" />
              {{listData.playCount | priceAbb(listData.playCount)}}
            </span>
            <van-icon name="info-o" size="20" style="position: absolute;right: 10px;bottom: 12px;" />
          </van-col>
          <van-col span="13">
            <h3>{{listData.name}}</h3>
            <p class="author">
              <van-image width="2em" round :src="authorInfo.avatarUrl" />
              <span>
                {{authorInfo.nickname}}
                <van-icon name="arrow" style="vertical-align: middle;" />
              </span>
            </p>
          </van-col>
        </van-row>
        <div class="bottom">
          <van-row type="flex" justify="space-around">
            <van-col span="6">
              <van-icon name="comment-o" />
              <span>{{listData.commentCount == 0 ? '评论' : listData.commentCount}}</span>
            </van-col>
            <van-col span="6">
              <van-icon name="exchange" />
              <span>{{listData.shareCount == 0 ? '转发' : listData.shareCount}}</span>
            </van-col>
            <van-col span="6">
              <van-icon name="down" />
              <span>下载</span>
            </van-col>
            <van-col span="6">
              <van-icon name="share" />
              <span>多选</span>
            </van-col>
          </van-row>
        </div>
      </div>
    </div>
    <div class="list">
      <van-cell v-for="(item,index) in listInfo" :key="index">
        <template #title>
          <span>{{index+1}}</span>
          <span class="custom-title van-ellipsis" style="padding: 0 10px;box-sizing: border-box;" @click="playThisAudio(item.id)">{{item.name}}</span>
        </template>
        <template #right-icon>
          <van-icon name="ellipsis" style="line-height: inherit;" />
        </template>
      </van-cell>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      detailID: '',
      listData: [], // 所有数据
      listInfo: [], // 歌曲数据
      authorInfo: {} // 作者信息
    }
  },
  created () {
    this.detailID = this.$route.params.id
    this.getDetail()
  },
  methods: {
    getDetail () {
      this.$api.getPlaylistDetailFn(this.detailID).then(res => {
        // console.log(res)
        this.listData = res.data.playlist
        this.listInfo = res.data.playlist.tracks
        this.authorInfo = res.data.playlist.creator
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
  position relative
  .bg
    width 100%
    height 100%
    position absolute
    background-size cover
    background-repeat no-repeat
    filter blur(5px)
    z-index -1
  .nav
    height 5vh
    line-height 5vh
    color #fff
  .content
    color #fff
    padding 15px
    box-sizing border-box
    .bgInfo
      position relative
      span
        position absolute
        font-size 10px
        top 5px
        right 10px
    .author
      span
        font-size 14px
        color rgb(187, 191, 191)
        vertical-align top
        line-height 30px
        margin-left 10px
    .bottom
      margin-top 15px
      .van-row
        .van-col
          text-align center
          i
            font-size 24px
          span
            display block
</style>
