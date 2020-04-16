<template>
  <div class="home-main">
    <van-cell v-for="(item, index) in featuresData" :key="index" is-link :value="item.value">
      <template #title>
        <i class="iconfont" :class="item.icon"></i>
        {{item.title}}
      </template>
    </van-cell>
    <van-collapse v-model="activeShow">
      <van-collapse-item title="我创建的歌单(1)" name="1">
        <div class="content">
          <van-image width="80" fit="cover" src="http://p4.music.126.net/3smJN-AqbiCZBtbS4UVY2Q==/109951163591496844.jpg?param=200y200" />
          <div class="info">
            <h3>我喜欢的音乐</h3>
            <span>1首</span>
          </div>
        </div>
      </van-collapse-item>
    </van-collapse>
  </div>
</template>

<script>
export default {
  data () {
    return {
      featuresData: [
        { title: '本地音乐', icon: 'icon-yinyuered', value: '0' },
        { title: '最近播放', icon: 'icon-zuijinbofang', value: '148' },
        { title: '我的电台', icon: 'icon-wodediantai', value: '0' },
        { title: '我的收藏', icon: 'icon-wodeshoucang', value: '0' }
      ],
      activeShow: ['1']
    }
  }
}
</script>

<style lang="stylus" scoped>
.home-main
  padding 0
  margin 0
  .van-cell
    font-size 20px
    i
      margin-right 15px
      color #e1505a
      font-size 20px
    .van-cell__value
      font-size 14px
  .van-collapse
    .content
      display flex
      .info
        display flex
        flex-direction column
        flex 1
        margin-left 15px
        h3
          color #494949
          margin-bottom 5px
</style>
