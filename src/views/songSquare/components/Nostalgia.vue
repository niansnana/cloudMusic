<!--
 * @Author: niansnana
 * @Begin: 2020年4月5日13:00:16
 * @Update log: 编写歌单广场-怀旧歌单
 -->
<template>
  <div class="vanImageToRadius">
    <van-grid :border="false" :column-num="3">
      <van-grid-item v-for="(item, index) in playNostalgiaData" :key="index" @click="goDetailFn(item)">
        <van-image :src="item.coverImgUrl" lazy-load value-class="coverImgUrl" />
        <p class="van-multi-ellipsis--l2">{{ item.description }}</p>
        <span class="playCount">
          <van-icon name="play-circle-o" />
          {{ item.playCount | priceAbb(item.playCount) }}
        </span>
      </van-grid-item>
    </van-grid>
  </div>
</template>

<script>
export default {
  data () {
    return {
      playNostalgiaData: []
    }
  },
  created () {
    this.getNostalgiaList()
  },
  methods: {
    getNostalgiaList () {
      this.$api.getPlayCatListFn(30, 'hot', '怀旧').then(res => {
        this.playNostalgiaData = res.data.playlists
      })
    },
    goDetailFn (item) {
      this.$router.push({
        name: 'songSquareDetail',
        params: {
          id: item.id
        }
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
.van-grid-item
  font-size 14px
  color #999
  position relative
  .coverImgUrl
    border-radius 15px
  .playCount
    position absolute
    top 1.2rem
    right 1.2rem
    font-size 0.2rem
    color #fff
</style>
