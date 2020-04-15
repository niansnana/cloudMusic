<!--
@Author nainsnana
@Begin 2020年4月2日18:30:31
@Update log：编写共用header组件
-->
<template>
  <van-sticky>
    <van-row>
      <van-col span="4" class="icon" @click="show">
        <van-icon name="contact" />
      </van-col>
      <van-col span="16">
        <van-tabs v-model="active">
          <van-tab v-for="item in tabData" :key="item.id" :title="item.title" :to="item.path"></van-tab>
        </van-tabs>
      </van-col>
      <van-col span="4" class="icon">
        <van-icon name="search" />
      </van-col>
    </van-row>
    <van-popup v-model="showMe" position="left" :style="{ width: '80%', height: '100%' }">
      <!-- 用户基础信息 -->
      <div class="userInfo">
        <div class="info">
          <div class="user_name">
            <van-image
              width="60px"
              height="60px"
              fit="cover"
              round
              src="http://p4.music.126.net/SOwDq67uF_1iBI9p9T8A0g==/109951164775523255.jpg?param=200y200"
            />
            <div class="nick">
              <p>MerIin</p>
              <span>Lv.8</span>
            </div>
          </div>
          <div class="user_punch">签到 ></div>
        </div>
        <van-grid :border="false">
          <van-grid-item>
            <p>动态</p>
            <span>0</span>
          </van-grid-item>
          <van-grid-item>
            <p>关注</p>
            <span>0</span>
          </van-grid-item>
          <van-grid-item>
            <p>粉丝</p>
            <span>0</span>
          </van-grid-item>
          <van-grid-item icon="edit" text="我的资料" />
        </van-grid>
      </div>
      <!-- 网易云操作功能 -->
      <div class="features">
        <van-cell
          v-for="(item, index) in featuresData"
          :key="index"
          :style="item.style"
          is-link
          :value="item.value"
        >
          <template #title>
            <i class="iconfont" :class="item.icon"></i>
            {{item.title}}
          </template>
        </van-cell>
      </div>
      <van-button type="default" block style="margin: 10px 0;" to="login">退出登录</van-button>
    </van-popup>
  </van-sticky>
</template>

<script>
export default {
  data () {
    return {
      active: 1,
      tabData: [
        { id: '0', title: '我的', path: '/home' },
        { id: '1', title: '发现', path: '/find' },
        { id: '2', title: '朋友', path: '/friend' },
        { id: '3', title: '视频', path: '/video' }
      ],
      featuresData: [
        { title: '我的消息', icon: 'icon-youjian', style: 'margin: 10px 0;', value: '8' },
        { title: '会员消息', icon: 'icon-huiyuanzhongxin', style: '', value: '' },
        { title: '商城', icon: 'icon-gouwuche', style: '', value: '超强tws降300' },
        { title: '在线听歌免流量', icon: 'icon-sy-zxdc', style: '', value: '' },
        { title: '设置', icon: 'icon-shezhi', style: 'margin-top: 10px;', value: '' },
        { title: '扫一扫', icon: 'icon-saoyisao', style: '', value: '' },
        { title: '个性皮肤', icon: 'icon-pifu', style: '', value: '官方白' },
        { title: '夜间模式', icon: 'icon-yejianmoshi', style: '', value: '' },
        { title: '定时关闭', icon: 'icon-dingshiguanbi', style: '', value: '' },
        { title: '音乐闹钟', icon: 'icon-clock', style: '', value: '' },
        { title: '驾驶模式', icon: 'icon-qiche', style: '', value: '' },
        { title: '亲子频道', icon: 'icon-qinzi', style: '', value: '' },
        { title: '优惠券', icon: 'icon-youhuiquan', style: '', value: '' },
        { title: '分享网易云音乐', icon: 'icon-fenxiang', style: 'margin-top: 10px;', value: '' },
        { title: '关于', icon: 'icon-guanyu', style: '', value: '' }
      ],
      showMe: false
    }
  },
  methods: {
    show () {
      this.showMe = true
    }
  }
}
</script>
<style lang="stylus" scoped>
.van-row
  background #fff
.icon
  text-align center
  line-height 44px
.van-popup, .info, .user_name, .nick
  display flex
  background-color #fff
.van-popup
  box-sizing border-box
  flex-direction column
  background-color #eff0f2
  .userInfo
    background-color #fff
    .info
      padding 25px 10px 15px 10px
      align-items center
      justify-content space-between
      .user_name
        align-items center
        .nick
          margin 15px
          flex-direction column
          p
            font-size 20px
            margin 0
          span
            color #a2a2a2
            font-size 13px
            border 1px solid #a2a2a2
            border-radius 20px
            text-align center
            width 80%
            margin-top 5px
  .van-grid
    p
      color #a2a2a2
      margin 0
  .features
    .van-cell
      white-space nowrap
      i
        margin-right 5px
</style>
