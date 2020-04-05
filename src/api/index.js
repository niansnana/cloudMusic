/**
 * @Author niansnana
 * @Begin 2020年4月2日17:52:13
 * @Update log: 编写接口回调
 */
import axios from 'axios'
import {
  bannerCarousel,
  playList,
  newSong,
  newAlbum,
  playCatList,
  playhigHqualityList,
  playlistDetail
} from './config'
// 请求超时时间
axios.defaults.timeout = 30000

// post请求头
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'

export default {
  /**
   * 发现页面轮播图
   */
  bannerCarouselFn () {
    return axios.get(bannerCarousel)
  },
  /**
   * 发现页推荐歌单
   * @param {number} limit 限制展示个数:)默认为6个
   */
  playListFn (limit = 6) {
    return axios.get(playList, {
      params: {
        limit
      }
    })
  },
  /**
   * 发现页获取最新歌曲
   * @param {string} type 歌曲类型
   * @param {number} limit 限制数量
   */
  getNewSongFn (type, limit) {
    return axios.get(newSong, {
      params: {
        type,
        limit
      }
    })
  },
  /**
   * 发现页最新碟片
   * @param {number} limit 限制数量
   */
  getNewAlbumFn (limit) {
    return axios.get(newAlbum, {
      params: {
        limit
      }
    })
  },
  /**
   * 歌单广场
   * @param {number} limit
   * @param {string} order 分类两种 new || hot
   * @param {*} cat 标签类型
   */
  getPlayCatListFn (limit = 30, order = 'hot', cat) {
    return axios.get(playCatList, {
      params: {
        limit,
        order,
        cat
      }
    })
  },
  getPlayhigHqualityListFn (limit = 30) {
    return axios.get(playhigHqualityList, {
      params: {
        limit
      }
    })
  },
  getPlaylistDetailFn (id) {
    return axios.get(playlistDetail, {
      params: {
        id
      }
    })
  }
}