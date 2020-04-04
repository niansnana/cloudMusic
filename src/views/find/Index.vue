<!--
 * @Author: niansnana
 * @Begin: 2020年4月2日09:55:33
 * @Update: 2020年4月4日11:05:53
 * @Update log: 追加相关组件
 --><template>
  <div>
    <BannerCarousel/>
    <GridNav/>
    <SongList/>
    <NewSong/>
  </div>
</template>

<script>
import BannerCarousel from './components/BannerCarousel'
import GridNav from './components/GridNav'
import SongList from './components/SongList'
import NewSong from './components/NewSong'
export default {
  components: { BannerCarousel, GridNav, SongList, NewSong }
}
</script>
