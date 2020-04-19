<!--
 * @Author: niansnana
 * @Begin: 2020年4月18日15:20:14
 * @Update log: 编写搜索功能
-->
<template>
  <div>
    <SearchBar />
    <SearchHot />
  </div>
</template>

<script>
import SearchBar from './components/SearchBar'
import SearchHot from './components/SearchHot'
export default {
  components: {
    SearchBar,
    SearchHot
  }
}
</script>
