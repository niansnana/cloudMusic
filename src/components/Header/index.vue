<!--
@Author nainsnana
@Begin 2020年4月2日18:30:31
@Update log：编写共用header组件
-->
<template>
  <van-row>
    <van-col span="4">
      <van-icon name="contact" />
    </van-col>
    <van-col span="16">
      <van-tabs v-model="active">
        <van-tab v-for="item in tabData" :key="item.id" :title="item.title" :to="item.path"></van-tab>
      </van-tabs>
    </van-col>
    <van-col span="4">
      <van-icon name="search" />
    </van-col>
  </van-row>
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
      ]
    }
  }
}
</script>
