<!--
 * @Author: niansnana
 * @Begin: 2020年4月11日15:43:05
 * @Update log: 编写共用播放组件
-->
<template>
  <div class="player" v-show="playList.length > 0">
    <div class="normal-player" v-show="fullScreen">
      <div class="background">
        <div class="filter"></div>
        <img width="100%" height="100%" :src="currentSong.al.picUrl" />
      </div>
      <div class="header">
        <div class="back" @click="shrink">
          <van-icon name="arrow-down" />
        </div>
        <h1 class="title van-ellipsis" v-html="currentSong.name"></h1>
        <h2
          class="subtitle van-ellipsis"
          v-for="(item, index) in currentSong.ar"
          :key="index"
          v-html="item.name"
        ></h2>
      </div>
      <!-- 居中光盘区域 -->
      <div class="disc">
        <div class="disk">
          <div class="cd-wrapper">
            <div class="cd">
              <van-image width="100%" height="100%" round :src="currentSong.al.picUrl" />
            </div>
          </div>
        </div>
        <div class="lyric"></div>
      </div>
      <div class="control">
        <!-- 小功能 -->
        <div class="features">
          <van-icon name="like-o" />
          <van-icon name="down" />
          <van-icon name="comment-o" badge="1w+" />
          <van-icon name="more-o" />
        </div>
        <!-- 进度条 -->
        <van-row type="flex" justify="space-around" align="center">
          <van-col span="2" align="right">
            <span style="color: #f1f1f1;font-size: 10px;">00:00</span>
          </van-col>
          <van-col span="15">
            <van-slider
              v-model="progressValue"
              active-color="#ee0a24"
              inactive-color="##949291"
              bar-height="2px"
            >
              <template #button>
                <div class="custom-button"></div>
              </template>
            </van-slider>
          </van-col>
          <van-col span="2" align="left">
            <span style="color: #f1f1f1;font-size: 10px;">04:20</span>
          </van-col>
        </van-row>
        <!-- 音乐操作 -->
        <div class="operators">
          <div class="icon left change">
            <van-icon name="exchange" />
          </div>
          <div class="icon left switch">
            <van-icon name="arrow-left" />
          </div>
          <div class="icon center">
            <van-icon name="play-circle-o" @click="toggle(currentSong.id)" />
            <!-- pause -->
          </div>
          <div class="icon right switch">
            <van-icon name="arrow" />
          </div>
          <div class="icon right">
            <van-icon name="ellipsis" />
          </div>
        </div>
      </div>
    </div>
    <div class="mini-player">
      <p @click="show()">show</p>
    </div>
    <audio :src="songData.url" ref="audio" autoplay></audio>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
export default {
  data () {
    return {
      progressValue: 0,
      songData: {}
    }
  },
  computed: {
    ...mapGetters([
      'fullScreen',
      'playList',
      'currentSong',
      'playing'
    ])
  },
  methods: {
    ...mapMutations({
      setFullScreen: 'SET_FULL_SCREEN'
    }),
    shrink () {
      this.setFullScreen(false)
    },
    toggle (id) {
      this.$api.getSongUrlFn(id).then(res => {
        for (const item in res.data.data) {
          this.songData = res.data.data[item]
        }
      })
    },
    show () {
      this.setFullScreen(true)
    }
  }
}
</script>

<style lang="stylus" scoped>
.normal-player
  position fixed
  left 0
  right 0
  top 0
  bottom 0
  z-index 150
  background #fff
  .background
    position absolute
    left -50%
    top -50%
    width 300%
    height 300%
    z-index -1
    opacity 0.6
    filter blur(30px)
    .filter
      position absolute
      width 100%
      height 100%
      background black
      opacity 0.6
  .header
    position relative
    margin-bottom 25px
    .back
      position absolute
      top 0
      left 6px
      z-index 50
      .van-icon
        display block
        padding 15px 9px
        font-size 25px
        color #f1f1f1
    .title
      width 70%
      margin 0 auto
      padding-top 10px
      line-height 20px
      text-align center
      font-size 18px
      font-weight bold
      color #f1f1f1
    .subtitle
      width 70%
      margin 0 auto
      line-height 20px
      text-align center
      font-size 12px
      color #f1f1f1
  .disc
    display flex
    align-items center
    position fixed
    width 100%
    top 80px
    bottom 170px
    white-space nowrap
    font-size 0
    .disk
      display inline-block
      position relative
      width 100%
      height 0
      padding-top 80%
      .cd-wrapper
        position absolute
        left 10%
        top 0
        width 80%
        height 100%
        .cd
          width 100%
          height 100%
          box-sizing border-box
          border 15px solid rgba(255, 255, 255, 0.1)
          border-radius 50%
  .control
    position absolute
    width 100%
    bottom 50px
    .features
      color #f1f1f1
      display flex
      justify-content space-around
      font-size 30px
      margin-bottom 20px
    .custom-button
      font-size 10px
      padding 2px
      box-sizing border-box
      border 5px solid #fff
      text-align center
      background-color #ee0a24
      border-radius 50%
    .operators
      display flex
      align-items center
      font-weight 400
      .icon
        flex 1
        color #f1f1f1
        font-size 40px
        &.left
          text-align right
        &.right
          text-align left
        &.center
          padding 0 20px
          font-size 50px
          text-align center
        &.left.change
          font-size 25px
.mini-player
  color pink
</style>
