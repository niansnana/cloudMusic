<!--
 * @Author: niansnana
 * @Begin: 2020年4月19日15:06:38
 * @Update log: 返回最终搜索结果
-->
<template>
  <div>
    <SearchBar :keywords="keywords" @keywords="getKeywords" />
    <div class="result" v-show="!keywords">
      返回结果：{{id}}
      <p>晚上再解决这个问题</p>
      <p>快开学了，有点小期待，哈哈</p>
    </div>
  </div>
</template>

<script>
import SearchBar from './components/SearchBar'
export default {
  components: {
    SearchBar
  },
  data () {
    return {
      id: '',
      keywords: ''
    }
  },
  created () {
    this.id = this.$route.params.id
  },
  methods: {
    onSearch () {
      console.log('sss')
    },
    getKeywords (val) {
      this.keywords = val
    }
  }
}
</script>

<style lang="stylus" scoped>
.result
  padding 0 10px
</style>
