<!--
 * @Author: niansnana
 * @Begin: 2020年4月5日13:15:22
 * @Update log: 编写歌单详情
 -->
<template>
  <div>
    <!-- 基础信息 -->
    <div class="menu">
      <div class="bg" :style="{ background: 'url(' + listData.coverImgUrl +')' }"></div>
      <van-sticky class="nav">
        <!-- style="background-color: #d44439;" -->
        <van-row type="flex" justify="space-around" :class="{ 'navActive': scrollFlag }">
          <van-col span="6" @click="returnFind">
            <van-icon name="arrow-left" />
          </van-col>
          <van-col span="6" align="center">歌单</van-col>
          <van-col span="6" align="right">
            <van-icon name="bar-chart-o" size="18" @click="show = true" />
          </van-col>
        </van-row>
      </van-sticky>
      <div class="content">
        <van-row type="flex" justify="space-around">
          <van-col class="bgInfo" span="9">
            <van-image fit="cover" :src="listData.coverImgUrl" height="100%" />
            <span>
              <van-icon name="service-o" />
              {{listData.playCount | priceAbb(listData.playCount)}}
            </span>
            <van-icon
              name="info-o"
              size="20"
              style="position: absolute;right: 0.5em;bottom: 0.5em;"
            />
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
    <!-- 歌曲列表 -->
    <div class="list">
      <van-sticky class="pointSong" :offset-top="45">
        <van-row type="flex" justify="space-between">
          <van-col span="6" class="songLeft">
            <p>
              <van-icon name="play-circle-o" />播放全部
              <span>(共{{this.listData.trackCount}}首)</span>
            </p>
          </van-col>
          <van-col span="8" class="songRight" align="right">
            <p>
              <van-icon name="plus" />
              收藏({{this.listData.subscribedCount}})
            </p>
          </van-col>
        </van-row>
      </van-sticky>
      <van-cell v-for="(item,index) in listInfo" :key="index">
        <template #title>
          <span>{{index+1}}</span>
          <span
            class="custom-title van-ellipsis van-hairline--bottom"
            style="padding: 0 10px;box-sizing: border-box;"
            @click="playThisAudio(item.id)"
          >{{item.name}}</span>
        </template>
        <template #right-icon>
          <van-icon name="ellipsis" style="line-height: inherit;" />
        </template>
      </van-cell>
    </div>
    <!-- 播放页 -->
    <van-popup v-model="show" position="right">
      <van-nav-bar
        class="van-hairline--bottom"
        :title="audioInfo.name"
        left-text="返回"
        left-arrow
        @click-left="show = false"
      >
        <template #right>
          <van-icon name="filter-o" size="18" />
        </template>
      </van-nav-bar>
      <!-- 播放歌曲啦 -->
      <div class="showtime">
        <div class="outside">
          <div class="roundCD">
            <van-image
              round
              fit="cover"
              :src="picUrl !== '' ? picUrl : 'https://img.yzcdn.cn/vant/cat.jpeg'"
            />
          </div>
        </div>
        <div class="control">
          <van-grid :border="false">
            <van-grid-item icon="like-o" />
            <van-grid-item icon="down" />
            <van-grid-item icon="comment-o" badge="1w+" />
            <van-grid-item icon="more-o" />
          </van-grid>
          <van-row type="flex" justify="space-around" align="center">
            <van-col span="2">
              <span style="color: #949291;font-size: 10px;">00:00</span>
            </van-col>
            <van-col span="15">
              <van-slider
                v-model="value"
                active-color="#ee0a24"
                inactive-color="##949291"
                bar-height="1px"
              >
                <template #button>
                  <div class="custom-button"></div>
                </template>
              </van-slider>
            </van-col>
            <van-col span="2">
              <span style="color: #949291;font-size: 10px;">04:20</span>
            </van-col>
          </van-row>
          <div class="control_change">
            <van-row type="flex" justify="space-around">
              <van-col span="2">
                <van-icon name="exchange" />
              </van-col>
              <van-col span="15" style="display: flex;justify-content: space-around;">
                <van-icon name="arrow-left" />
                <van-icon name="pause-circle-o" @click="changePlay" />
                <!-- 暂停：pause-circle-o  -->
                <van-icon name="arrow" />
              </van-col>
              <van-col span="2">
                <van-icon name="ellipsis" />
              </van-col>
            </van-row>
          </div>
        </div>
        <audio
          controls
          style="display: none;"
          v-for="(item, index) in audioData"
          :key="index"
          ref="audio"
          autoplay
        >
          <!-- autoplay -->
          <source :src="item.url" type="audio/mpeg" />
        </audio>
      </div>
    </van-popup>
    <Loading />
  </div>
</template>

<script>
import Loading from '@/components/Loading'
export default {
  components: { Loading },
  data () {
    return {
      detailID: '',
      listData: [], // 所有数据
      listInfo: [], // 歌曲数据
      authorInfo: {}, // 作者信息
      audioData: [], // 歌曲信息
      audioInfo: {}, // 单个歌曲信息
      show: false, // 是否显示歌曲详情
      picUrl: '',
      value: 0,
      statue: true,
      scrollFlag: false
    }
  },
  created () {
    this.detailID = this.$route.params.id
    this.getDetail()
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll)
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
    playThisAudio (id) {
      this.show = true
      this.audioData = [] // 清空上一条数据
      this.audioInfo = {}
      this.picUrl = ''
      this.$api.getSongUrlFn(id).then(res => {
        for (const item in this.listInfo) {
          if (this.listInfo[item].id === id) {
            this.audioInfo = this.listInfo[item]
            this.picUrl = this.listInfo[item].al.picUrl
          }
        }
        this.audioData = res.data.data
      })
    },
    changePlay () {
      console.log('oh,shift hah...')
      // this.$nextTick(() => {
      //   this.$refs.audio.play()
      // })
    },
    handleScroll () {
      const _this = this
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      if (scrollTop) {
        _this.scrollFlag = true
      } else {
        _this.scrollFlag = false
      }
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
    background-size cover
    position absolute
    filter blur(5px)
    z-index -1
  .nav
    height 45px
    line-height 45px
    color #fff
  .navActive
    background rgb(212, 68, 57)
  .content
    color #fff
    padding 15px
    box-sizing border-box
    .bgInfo
      position relative
      span
        position absolute
        font-size 10px
        top 1em
        right 1em
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
.list
  .pointSong
    border 1px solid #fff
    box-sizing border-box
    color #000
.van-popup
  width 100%
  height 100%
  background #545052
  .van-nav-bar
    background #545052
    color #fff
  .showtime
    .roundCD
      width 80%
      background rgb(5, 5, 5)
      border 15px solid rgb(100, 92, 97)
      padding 45px
      box-sizing border-box
      border-radius 50%
      display flex
      justify-content center
      align-items center
      margin 20px auto
    .van-grid
      color #b4b2b5
    .custom-button
      font-size 10px
      padding 2px
      box-sizing border-box
      border 5px solid #fff
      text-align center
      background-color #ee0a24
      border-radius 50%
    .control_change
      font-size 2.5em
      color #98999b
      margin 20px 0px
</style>
