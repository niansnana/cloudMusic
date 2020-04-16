<template>
  <div class="friend-main">
    <van-pull-refresh v-model="isLoading" success-text="刷新成功" @refresh="onRefresh">
      <div class="item">
        <!-- 左侧头像 -->
        <van-image
          width="50px"
          height="50px"
          round
          src="https://p3.music.126.net/SOwDq67uF_1iBI9p9T8A0g==/109951164775523255.jpg"
        />
        <!-- 右侧信息 -->
        <div class="more">
          <div class="persion-info">
            <div class="nickname">
              <p class="name">name</p>
              <div class="desc">time</div>
            </div>
            <van-button type="default">+关注</van-button>
          </div>
          <div class="word">content</div>
        </div>
      </div>
    </van-pull-refresh>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isLoading: false,
      eventData: [],
      eventObj: {}
    }
  },
  created () {
    this.getEventListData()
  },
  methods: {
    onRefresh () {
      setTimeout(() => {
        this.isLoading = false
      }, 1000)
    },
    getEventListData () {
      this.$api.getMusicEventFn(30).then(res => {
        console.log(res)
        this.eventData = res.data.event
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
.friend-main
  margin 0
  padding 10px 0px
  box-sizing border-box
  .item
    width 100%
    display flex
    justify-content center
    padding 5px
    box-sizing border-box
    border-bottom 1px solid #f8f9fa
    .van-image
      width 10%
    .more
      width 90%
      display flex
      flex-direction column
      margin-left 15px
    .persion-info
      width 100%
      display flex
      justify-content space-between
      align-items center
      .nickname
        display flex
        flex-direction column
        justify-content center
        flex 1
        overflow hidden
        p
          margin 0
          line-height 14px
          text-overflow ellipsis
          overflow hidden
          white-space nowrap
          font-size 14px
          color #5b83ab
        .desc
          text-overflow ellipsis
          overflow hidden
          white-space nowrap
          font-size 11px
          color #b7b7b7
      .van-button
        border-radius 20px
        background-color #e94639
        color #fff
        font-size 15px
        letter-spacing 4px
    .word
      margin 10px 0
      line-height 25px
      font-size 14px
</style>
